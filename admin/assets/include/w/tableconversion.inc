<?php

$title = "Table conversion";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page is a utility for data management where it converts your raw data into an easy-to-read tabulation.</p>\n";
echo "<p>What you need to do is just simply paste your data into the box, and it will show the result right away in the below box.</p>";
echo "<p>It is important to note that we only deal with the modern data format of JSON. And with no surprise this data utility will not work if you paste any other data formats which are not JSON.</p>\n";
echo "<hr>\n";

?>

<div class="json">
  <h4>Paste your data into the box below</h4>
  <p>You can get a quick view of your data by pasting it into this box below. The program will automatically generate a nice table below which you can then use it for a quick view tool of your data.</p>
  <textarea class="editing form-control"></textarea>
  <pre class="rendered"><code></code></pre>
  <div class="drop">DROP JSON HERE</div>
  <span class="tablenotice warning">Extremely large files may cause trouble as this conversion is done inside your browser</span>
  <span class="tablenotice error">There was an error parsing this JSON data. Please make sure it is a JSON format.</span>
</div>

<br><hr>

<div class="csv">
  <h4>Table generated automatically from your data</h4>
  <p>The table below has been generated automatically from the data you pasted in the box above. It began with the conversion from your raw data to Comma Separate Value (CSV) format and then it converted the CSV format into this table as shown below.</p>
  <p>However, for performance purpose, we limit this page to only visualise up to 50 records. Should you need to view it beyond such limit, you can either <a download="result.csv" href="" class="download"><i class="pe-download pe-fw"></i> download the converted data file</a> which includes all of your records or <a href="" class="raw"><i class="pe-desktop pe-fw"></i> view the converted data file online</a> before copy and paste all records to your preferred data processing program such as Microsoft Excel or SPSS.</p>
  <textarea class="editing form-control" readonly></textarea>
  <div class="table rendered"><table class="table"></table></div>
  <span class="tablenotice">You may need to scroll right if there are many columns <i class="pe-hand-o-right"></i></span>
</div>

<script type="text/javascript">

  var excerptRows = 50;
  var input;
  var url;
  var lastSaved;

  function doJSON() {
    $(".drop").hide();
    var newInput = $(".json textarea").val();
    if (newInput == input) return;
    input = newInput;
    if (!input) { $(".json code").html(""); return; }
    var json = jsonFrom(input);
    if (json) {
      $("div.error").hide();
      $("div.warning").show();
      var pretty = JSON.stringify(json, undefined, 2);
      $(".json code").html(pretty);
      if (pretty.length < (50 * 1024)) { hljs.highlightBlock($(".json code").get(0)); }
      doCSV(json); // convert to CSV, make available
    } else { // Show error.
      $("div.warning").hide();
      $("div.error").show();
      $(".json code").html("");
    }
    setErrorReporting(null, input); // Either way, update the error-reporting link to include the latest
    return true;
  }

  function showJSON(rendered) {
    //console.log("ordered to show JSON: " + rendered);
    if (rendered) {
      if ($(".json code").html()) {
        //console.log("there's code to show, showing...");
        $(".json .rendered").show();
        $(".json .editing").hide();
      }
    } else {
      $(".json .rendered").hide();
      $(".json .editing").show().focus();
    }
  }

  function showCSV(rendered) {
    if (rendered) { if ($(".csv table").html()) { $(".csv .rendered").show(); $(".csv .editing").hide(); } }
    else { $(".csv .rendered").hide(); $(".csv .editing").show().focus(); }
  }

  // takes an array of flat JSON objects, converts them to arrays renders them into a small table as an example
  function renderCSV(objects) {
    var rows = $.csv.fromObjects(objects, {justArrays: true});
    if (rows.length < 1) return;

    var table = $(".csv table")[0];
    $(table).html("");

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var header = rows[0];
    for (field in header) {
      var th = document.createElement("th");
      $(th).html(header[field]).addClass("bg-primary");
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    $(thead).find('th:first-child').css("background", "#555");

    var tbody = document.createElement("tbody");
    for (var i=1; i<rows.length; i++) {
      tr = document.createElement("tr");
      for (field in rows[i]) {
        var td = document.createElement("td");
        // $(td).html(rows[i][field]).attr("title", rows[i][field]);
        $(td).html(rows[i][field]);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
      $(tbody).find('td:first-child').css("background", "#eee");
    }
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  function doCSV(json) {
    // 1) find the primary array to iterate over
    // 2) for each item in that array, recursively flatten it into a tabular object
    // 3) turn that tabular object into a CSV row using jquery-csv
    var inArray = arrayFrom(json);
    var outArray = [];
    for (var row in inArray) { outArray[outArray.length] = parse_object(inArray[row]); }
    $("span.rows.count").text("" + outArray.length);
    var csv = $.csv.fromObjects(outArray); // excerpt and render first 10 rows
    renderCSV(outArray.slice(0, excerptRows));
    showCSV(true);
    $(".csv textarea").val(csv); // show raw data if people really want it
    // download link to entire CSV as data
    // thanks to https://jsfiddle.net/terryyounghk/KPEGU/
    // and https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    $(".csv a.download").attr("href", uri);
  }
  // loads original pasted JSON from textarea, saves to anonymous gist
  // rate-limiting means this could easily fail with a 403.
  function saveJSON() {
    if (!input) return false;
    if (input == lastSaved) return false;
    var gist = {
      description: "test",
      public: false,
      files: { "source.json": { "content": input } }
    };
    // TODO: show spinner/msg while this happens
    console.log("Saving to an anonymous gist...");
    $.post('https://api.github.com/gists', JSON.stringify(gist)).done(function(data, status, xhr) {
      setPermalink(data.id); // take new Gist id, make permalink
      Events.permalink(); // send analytics event
      lastSaved = input; // mark what we last saved
      setErrorReporting(data.id, input); // update error-reporting link, including permalink
      console.log("Remaining this hour: " + xhr.getResponseHeader("X-RateLimit-Remaining"));
    }).fail(function(xhr, status, errorThrown) {
      console.log(xhr);
      Events.permalink_error(status); // send analytics event
      // TODO: gracefully handle rate limit errors if (status == 403)
      // TODO: show when saving will be available e.g. "try again in 5 minutes"
      // var reset = xhr.getResponseHeader("X-RateLimit-Reset");
      // var date = new Date();
      // date.setTime(parseInt(reset) * 1000);
      // use http://momentjs.com/ to say "in _ minutes"
    });
    return false;
  }

  // Updates the error-reporting link to include current details.
  //
  // If the passed-in `id` is not null, a permalink is included.
  // If the passed-in `id` is null, then no permalink is included.
  // (Needed explicitly because the current URL doesn't always refer
  // to a permalink related to the current value of the textarea.)
  //
  // The current body of the textarea will be encoded into the URI,
  // to pre-populate the GitHub issue template, but only if the body
  // is < 7KB (7,168). GitHub's nginx server rejects query strings
  // longer than ~8KB.
  //
  // If no `id` is given, and content is too long, the URL will
  // encode only a title, and no body.
  function setErrorReporting(id, content) {
    var base = "https://github.com/konklone/json/issues/new";
    var title = "Error parsing some specific JSON";
    var body = "I'm having an issue converting this JSON:\n\n";
    if (id) body += ( window.location.protocol + "//" + window.location.host + window.location.pathname + "?id=" + id + "\n\n" );
    if (content.length <= (7 * 1024)) { body += ("```json\n" + content + "\n```"); }
    var finalUrl = base + "?title=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(body);
    $(".error a.report").attr("href", finalUrl);
    // console.log("Updated error reporting link to:" + finalUrl);
    return true;
  }

  // given a valid gist ID, set the permalink to use it
  function setPermalink(id) {
    if (history && history.pushState) { history.pushState({id: id}, null, "?id=" + id); }
    // log("Permalink created! (Copy from the location bar.)")
  }

  // check query string for gist ID
  function loadPermalink() {
    var id = getParam("id");
    if (!id) return;
    $.get('https://api.github.com/gists/' + id,
      function(data, status, xhr) {
        console.log("Remaining this hour: " + xhr.getResponseHeader("X-RateLimit-Remaining"));
        var input = data.files["source.json"].content;
        $(".json textarea").val(input);
        doJSON();
        showJSON(true);
      }
    ).fail(function(xhr, status, errorThrown) {
      console.log("Error fetching anonymous gist!");
      console.log(xhr);
      console.log(status);
      console.log(errorThrown);
    });
  }

  $(function() {
    $(".json textarea").blur(function() {showJSON(true);});
    $(".json pre").click(function() {showJSON(false)});
    $(".csv textarea").blur(function() {showCSV(true);})
    $(".csv .raw").click(function() {
      showCSV(false);
      $(".csv textarea").focus().select();
      return false;
    })
    // if there's no CSV to download, don't download anything, also, log an analytics event.
    $(".csv a.download").click(function() {
      var data = $(".csv textarea").val();
      if (data) { Events.download(data.length); return true; }
      else { return false; }
    });
    $(".save a, .error a.save").click(saveJSON); // Both elements are present on page-load, so use normal click handler.
    $(".json textarea") // transform the JSON whenever it's pasted/edited
      .on('paste', function() { setTimeout(function() { doJSON(); $(".json textarea").blur(); }, 1); }) // delay the showing so the paste is pasted by then
      .keyup(doJSON); // harmless to repeat doJSON
    $("body").click(function() { $(".drop").hide(); }); // go away
    $(document)
      .on("dragenter", function(e) { e.preventDefault(); e.stopPropagation(); $(".drop").show(); })
      .on("dragover", function(e) { e.preventDefault(); e.stopPropagation(); })
      .on("dragend", function(e) { e.preventDefault(); e.stopPropagation(); $(".drop").hide(); })
      .on("drop", function(e) { $(".drop").hide();
        if (e.originalEvent.dataTransfer) {
          if (e.originalEvent.dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            var reader = new FileReader();
            reader.onload = function(ev) {
              console.log(ev.target.result);
              $(".json textarea").val(ev.target.result);
              setTimeout(function() { doJSON(); $(".json textarea").blur(); }, 1);
            }
            reader.readAsText(e.originalEvent.dataTransfer.files[0]);
          }
        }
      });
    $(".csv textarea").click(function() {$(this).focus().select();}); // highlight CSV on click
    loadPermalink();
  });

</script>

<br>

<a href="/admin/?w=surveys" class="btn btn-danger btn-sm pull-right" style="margin-top:50px; margin-bottom: 20px"><i class="pe-chevron-circle-left pe-fw"></i> Back to the main page</a>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
