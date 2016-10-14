<?php

if (!isset($title)) { $title = 'App editor'; }
require_once $_SERVER['DOCUMENT_ROOT'].'/s/template.php';

pageHeader($title);

?>

<div class="row" style="margin-top:10px; margin-bottom:10px">
    <div class="row col-md-6">
        <h3>Edit Survey: Three questions</h3>
    </div>
    <div class="row col-md-6">
        <!--
            <div style="margin-bottom:5px;margin-top:10px"><a href='/Home/RunSurvey/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6' }" target="_blank">Test your survey on a separate page</a>. Remember to save the survey first.</div>
        -->
        <div id="publishRoot" style="display: table-cell; vertical-align:middle">
            <div data-bind="visible:!isPublished()"  style="display:none">
                <button data-bind="click:publish">Publish the survey</button>
            </div>
            <div data-bind="visible:isPublished" style="display:none">
                <button data-bind="click:unPublish">Stop publishing the survey</button>
                <a data-bind="attr:{href:url}" target="_blank">Run the survey </a>
                <input type="checkbox" data-bind="checked:useCookies" /><span> Use Cookies</span>
            </div>
        </div>
    </div>
</div>



<div id="mySurveyJSName"></div>

<div id="surveyjseditor"></div>

<script type="text/javascript">
    var options = {};
    options.generateValidJSON = false;
    var editor = new SurveyEditor.SurveyEditor("surveyjseditor", options);
    editor.showOptions = true;
    editor.generateValidJSONChangedCallback = function(newValue) {
        $.get("/api/MySurveys/setGenerationJSONType?generateValidJSON="+ newValue, function (data) {
        }).fail(function (error) {

        });
    };
    modelData = {"Json":null,"Text":null,"GenerateValidJSON":false,"Name":"Three questions","IsArchived":false,"UserId":"cb705132-d953-48c3-9856-223fbae49d06","PostId":"700d9888-1eff-4513-afa2-ee02fcbc1217","ResultId":"5c7bb91e-0619-4763-b47b-8e29368f3aaf","PublishId":null,"IsPublished":false,"UseCookies":false,"CreatedAt":"2016-10-12T19:26:48.2129161","AllowAccessResult":false,"StoreIPAddress":false,"Id":"fb79b5c0-3ad5-44ab-ac5e-4834250f22d6","Data":{"Id":"fb79b5c0-3ad5-44ab-ac5e-4834250f22d6"}};
    if(modelData.Text) {
        editor.text = modelData.Text;
    }
    editor.surveyId = modelData.Id;
    editor.surveyPostId = modelData.PostId;
    editor.saveSurveyFunc =  function() {
        $.ajax({
            url: "/api/MySurveys/changeJson",
            type: "POST",
            data: { Id: modelData.Id, Text: editor.text, Json : editor.text },
            success: function (data) {
                if (data.isSuccess) {
                }
            }
        });
    }
    var PublishSurveyModel = function (isPublished, publishedId, useCookies) {
        var self = this;
        self.serviceUrl = "/api/MySurveys/";
        self.isPublished = ko.observable(isPublished);
        self.publishedId = ko.observable(publishedId);
        self.useCookies = ko.observable(useCookies);
        self.useCookies.subscribe(function(newValue) {
            self.setUseCookies(newValue);
        });
        self.url = ko.computed(function(){ return "/published?id=" + self.publishedId();}, self);
        self.publish = function () {
            $.get(self.serviceUrl + "publish?id=(fb79b5c0-3ad5-44ab-ac5e-4834250f22d6)&generateNewId=false", function (data) {
                self.publishedId(data);
                self.isPublished(true);
            }).fail(function (error) {
                self.onFail(error);
            });
        }
        self.unPublish = function() {
            $.get(self.serviceUrl + "unpublish?id=(fb79b5c0-3ad5-44ab-ac5e-4834250f22d6)", function (data) {
                self.isPublished(false);
            }).fail(function (error) {
                self.onFail(error);
            });
        }
        self.setUseCookies = function(useCookies) {
            $.get(self.serviceUrl + "setUseCookies?id=(fb79b5c0-3ad5-44ab-ac5e-4834250f22d6)&useCookies=" + useCookies, function (data) {
            }).fail(function (error) {
                self.onFail(error);
            });
        }
        self.onFail = function (error) {
            alert(JSON.stringify(error));
        }
    }
    jQuery(document).ready(function () {
        ko.applyBindings(new PublishSurveyModel('False' == 'True', '', 'False' == 'True'), document.getElementById("publishRoot"));
    });
</script>


<script>
  // function getParameterByName(name, url) {
  //   if (!url) url = window.location.href;
  //   url = url.toLowerCase();
  //   name = name.replace(/[\[\]]/g, "\\$&");
  //   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  //   if (!results) return null;
  //   if (!results[2]) return '';
  //   return decodeURIComponent(results[2].replace(/\+/g, " "));
  // }
  //   var editor = new SurveyEditor.SurveyEditor("surveyjseditor");
  //   editor.showOptions = true;
  //   // editor.text = JSON.stringify({"pages":[{"questions":[{"type":"rating","name":"rateme"}]}]});
  //   editor.saveSurveyFunc = function() { var myJSONText = editor.text; };
  //   var surveyId = getParameterByName("surveyid");
  //   if(surveyId) {editor.loadSurvey(surveyId);}
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
