<?php

$title = "Interim result";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>Please make sure you use the interim result with cautions. It is very important to understand that interim result is not necesary a true reflection of the final result (or even showing the same direction). While interim shows one thing, the final result may end up with another.</p>";
echo "<p>Therefore, it is imperative that any business decisions must not be made based on this interim result. We strongly suggest that results to be used for business decision should come from the final result e.g. when the data collection period has ended, and the data has been checked to be clean and good to use.</p>";
echo "<p>We take no responsibility on any damages happened from using interim result, you must use it at your own risk.</p>";
// echo "<br>\n";

?>

<hr>

<h3>Project Domino</h3>

<dl class="dl-horizontal">
  <dt>First response:</dt>
  <dd>10/14/2016 12:02:22 AM</dd>
  <dt>Last response:</dt>
  <dd>10/15/2016 11:39:15 PM</dd>
  <dt>Total responses:</dt>
  <dd>13</dd>
</dl>

<div class="row">
  <div class="col-sm-7 btn-group btn-sm">
    <strong>Group by:</strong>
    <ul class="pagination">
      <li class=""><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?groupedColumn=Q1">Q1</a></li>
      <li class=""><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?groupedColumn=Q2">Q2</a></li>
      <li class=""><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?groupedColumn=Q4">Q4</a></li>
      <li class=""><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?groupedColumn=Q5">Q5</a></li>
      <li class=""><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?groupedColumn=Q6">Q6</a></li>
    </ul>
  </div>
  <div class="col-sm-5 btn-group btn-sm">
    <button type="button" style="margin-right:10px" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Export <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="/Home/ExportResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?format=csv">CSV</a></li>
      <li><a href="/Home/ExportResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?format=xls">XLS</a></li>
      <li><a href="/Home/ExportResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?format=xlsx">XLSX</a></li>
    </ul>
    <button type="button" style="margin-right:10px" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page size <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?pageIndex=0&amp;pageSize=10">10</a></li>
      <li><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?pageIndex=0&amp;pageSize=20">20</a></li>
      <li><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?pageIndex=0&amp;pageSize=50">50</a></li>
      <li><a href="/Home/SurveyResults/fb79b5c0-3ad5-44ab-ac5e-4834250f22d6?pageIndex=0&amp;pageSize=100">100</a></li>
    </ul>
    <button id="btnCustomizeColumns" type="button" style="margin-right:10px" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#resultColumnsModal">Customise columns</button>
  </div>
</div>

<table class="table table-hover">
  <thead>
    <tr class="bg-success">
      <th></th>
      <th>Submitted</th>
      <th>IP address</th>
      <th>Q1</th>
      <th>Q2</th>
      <th>Q3</th>
      <th>Q4</th>
      <th>Q5</th>
      <th>Q6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a id="rowshow0" href="#" onclick="return showRow(event, 0)"><i class="pe-chevron-down"></i>
        <a id="rowhide0" href="#" onclick="return hideRow(event, 0)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/15/2016 11:39:15 PM +00:00</td>
      <td>159.192.253.248</td>
      <td>[A2, A4]</td>
      <td>3</td>
      <td>only two</td>
      <td>1</td>
      <td>Y</td>
      <td>[JP3, EU3, JP2]</td>
    </tr>
    <tr id="row0" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('b8c3081c-d831-4d2f-9103-ca6b376adeab')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow1" href="#" onclick="return showRow(event, 1)"><i class="pe-chevron-down"></i>
        <a id="rowhide1" href="#" onclick="return hideRow(event, 1)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/15/2016 11:36:51 PM +00:00</td>
      <td>159.192.253.248</td>
      <td>[A3, A1]</td>
      <td>3</td>
      <td>only one</td>
      <td>5</td>
      <td>Y</td>
      <td>[JP3, EU4, O2]</td>
    </tr>
    <tr id="row1" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('ae1f1062-faa4-44eb-a105-4f7e817481a7')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow2" href="#" onclick="return showRow(event, 2)"><i class="pe-chevron-down"></i>
        <a id="rowhide2" href="#" onclick="return hideRow(event, 2)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/15/2016 10:40:40 PM +00:00</td>
      <td>159.192.253.248</td>
      <td>[A4, A3, A2]</td>
      <td>3</td>
      <td>I love you</td>
      <td>5</td>
      <td>Y</td>
      <td>[JP1, EU1, EU2]</td>
    </tr>
    <tr id="row2" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('605304c9-68d9-4a48-9187-eb8198cda8ca')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow3" href="#" onclick="return showRow(event, 3)"><i class="pe-chevron-down"></i>
        <a id="rowhide3" href="#" onclick="return hideRow(event, 3)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 2:21:02 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[one]</td>
      <td>5+</td>
      <td>Yellow is not blue</td>
      <td>5</td>
      <td>Y</td>
      <td>[JP3, EU3, O1]</td>
    </tr>
    <tr id="row3" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('b24de2e4-5049-45fa-b0e4-02a0574ee68e')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow4" href="#" onclick="return showRow(event, 4)"><i class="pe-chevron-down"></i>
        <a id="rowhide4" href="#" onclick="return hideRow(event, 4)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:36:57 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[two]</td>
      <td>3</td>
      <td>Yeah</td>
      <td>4</td>
      <td>Y</td>
      <td>[JP1, JP3, EU2]</td>
    </tr>
    <tr id="row4" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('58e76b81-2ddb-4569-9811-fa94f9ec656d')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow5" href="#" onclick="return showRow(event, 5)"><i class="pe-chevron-down"></i>
        <a id="rowhide5" href="#" onclick="return hideRow(event, 5)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:25:47 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[three]</td>
      <td>3</td>
      <td>Three only</td>
      <td>1</td>
      <td>Y</td>
      <td>[EU3, EU2]</td>
    </tr>
    <tr id="row5" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('cc681754-9da0-4f1d-aa25-e054220a94e0')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow6" href="#" onclick="return showRow(event, 6)"><i class="pe-chevron-down"></i>
        <a id="rowhide6" href="#" onclick="return hideRow(event, 6)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:21:44 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[one]</td>
      <td>1</td>
      <td>Single and available</td>
      <td>5</td>
      <td>Y</td>
      <td>[JP1, EU1, EU4]</td>
    </tr>
    <tr id="row6" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('f7af0a5b-2a39-49b9-b11b-40c9655ecd3e')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow7" href="#" onclick="return showRow(event, 7)"><i class="pe-chevron-down"></i>
        <a id="rowhide7" href="#" onclick="return hideRow(event, 7)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:21:05 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[three]</td>
      <td>2</td>
      <td>Two</td>
      <td>4</td>
      <td>Y</td>
      <td>[O2, JP2]</td>
    </tr>
    <tr id="row7" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('9c613876-3a31-4022-8997-2844cd3d3dc4')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow8" href="#" onclick="return showRow(event, 8)"><i class="pe-chevron-down"></i>
        <a id="rowhide8" href="#" onclick="return hideRow(event, 8)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:18:42 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[three]</td>
      <td>2</td>
      <td>Only two</td>
      <td>5</td>
      <td>N</td>
      <td>[O1, EU3]</td>
    </tr>
    <tr id="row8" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('697ac516-d728-4232-9049-35bb20921143')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow9" href="#" onclick="return showRow(event, 9)"><i class="pe-chevron-down"></i>
        <a id="rowhide9" href="#" onclick="return hideRow(event, 9)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:17:47 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[three]</td>
      <td>4</td>
      <td>Loads of GFs</td>
      <td>4</td>
      <td>N</td>
      <td>[O2, EU4]</td>
    </tr>
    <tr id="row9" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('11c8703f-1d2e-47e0-9b86-d78c50072254')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow10" href="#" onclick="return showRow(event, 10)"><i class="pe-chevron-down"></i>
        <a id="rowhide10" href="#" onclick="return hideRow(event, 10)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:15:16 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[one]</td>
      <td>1</td>
      <td>Loyalty seems good</td>
      <td>3</td>
      <td>N</td>
      <td>[JP1, EU1, JP4]</td>
    </tr>
    <tr id="row10" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('5b107440-5246-4f87-8feb-93f21f2dcb9c')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow11" href="#" onclick="return showRow(event, 11)"><i class="pe-chevron-down"></i>
        <a id="rowhide11" href="#" onclick="return hideRow(event, 11)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:04:25 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[two]</td>
      <td>2</td>
      <td>hello</td>
      <td>5</td>
      <td>Y</td>
      <td>[JP1, JP2, JP4]</td>
    </tr>
    <tr id="row11" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('3a14fc97-37c8-4453-bd54-5bd936a090c9')">Delete</button>
      </td>
    </tr>
    <tr>
      <td>
        <a id="rowshow12" href="#" onclick="return showRow(event, 12)"><i class="pe-chevron-down"></i>
        <a id="rowhide12" href="#" onclick="return hideRow(event, 12)" style="display:none"><i class="pe-chevron-up"></i></a>
      </td>
      <td>10/14/2016 12:02:22 AM +00:00</td>
      <td>159.192.253.139</td>
      <td>[two]</td>
      <td>2</td>
      <td>Wow</td>
      <td>5</td>
      <td>Y</td>
      <td>[EU1, EU3, EU2, JP4]</td>
    </tr>
    <tr id="row12" style="display:none">
      <td style="border-top-style:none" colspan="9">
        <dl></dl>
        <button class="btn btn-sm btn-danger" onclick="deleteSurveyResult('462a2746-46c6-4889-a703-ff726152a440')">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div class="row">
  <div class="col-sm-2 pull-left btn-group btn-sm">
    <button class="btn btn-danger" onclick="showClearAll()">Clear All Results</button>
  </div>
  <div class="col-sm-7 text-center btn-group btn-sm">
    <ul class="pagination">
      <li class="active"><a href="#">1</a></li>
    </ul>
  </div>
  <div class="col-sm-2 pull-right btn-group btn-sm">
  </div>
</div>

<div id="ctrlClearAll" class="row" style="visibility:collapse">
  <div class="col-md-6">
    <div class="alert alert-warning" role="alert">All response data will be deleted. This operation cannot be undone.</div>
    <div class="input-group">
      <input type="text" class="form-control" onchange="onClearAllTextChange(this.value)" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();" placeholder="Type the survey name">
      <span class="input-group-btn"><button id="btnClearAllData" onclick="doClearAllResults()" class="btn btn-default" type="button" disabled>Clear All Data</button></span>
    </div>
  </div>
</div>
<div id="defaultColumns">
  <div id="resultColumnsModal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width:700px">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Customize Columns</h4>
        </div>
        <div class="modal-body">
          <div data-bind="visible:showColumns">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Column Name</th>
                  <th>Column Text</th>
                  <th>Visibility</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <!-- ko foreach: columns -->
                <tr>
                  <td>
                    <a href="#" data-bind="click:$parent.columnUp"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></a>
                    <a href="#" data-bind="click:$parent.columnDown"><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></a>
                  </td>
                  <td data-bind="text:name"></td>
                  <td><input type="text" data-bind="value:displayName" /></td>
                  <td>
                    <select data-bind="value:visibility">
                      <option value="0">Public</option>
                      <option value="1">Hidden</option>
                      <option value="2">Private</option>
                    </select>
                  </td>
                  <td>
                    <select data-bind="value:location">
                      <option value="0">Column</option>
                      <option value="1">Detail</option>
                    </select>
                  </td>
                </tr>
                <!-- /ko -->
              </tbody>
            </table>
            <span>Visibility for undefined columns submitted in responses: </span>
            <select data-bind="value:newColumnsVisibility">
              <option value="0">Public</option>
              <option value="1">Hidden</option>
              <option value="2">Private</option>
            </select>
          </div>
          <div data-bind="visible:!showColumns()">Loding data...</div>
        </div>
        <div class="modal-footer">
          <input type="button" data-dismiss="modal" data-bind="click: onApplyClick" value="Apply" style="width:100px">
          <input type="button" data-dismiss="modal" value="Close" style="width:100px">
        </div>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  function showRow(e, rowIndex) {
    showhideRow(rowIndex, true);
    e.preventDefault();
    return false;
  }
  function hideRow(e, rowIndex) {
    showhideRow(rowIndex, false);
    e.preventDefault();
    return false;
  }
  function showhideRow(rowIndex, show) {
    document.getElementById("row" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowhide" + rowIndex).style.display = show ? "" : "none";
    document.getElementById("rowshow" + rowIndex).style.display =  show ? "none" : "";
  }
  function deleteSurveyResult(instanceId) {
    $.get("/api/MySurveys/deleteResult?postId=700d9888-1eff-4513-afa2-ee02fcbc1217&instanceId=" + instanceId , function (data) {
      window.location.reload();
    }).fail(function (error) { alert(error); });
  }
</script>

<script type="text/javascript">
  var ResultColumn = function (name, displayName, visibility, location) {
    this.name = name;
    this.displayName = ko.observable(displayName);
    this.visibility = ko.observable(visibility ? visibility : 0);
    this.location = ko.observable(location? location: 0);
    this.getJson = function() {
      var json = {name: this.name};
      if (this.name != this.displayName()) { json.displayname = this.displayName(); }
      if (this.visibility() > 0) { json.visibility = this.visibility(); }
      if (this.location() > 0) { json.location = this.location(); }
      return json;
    }
  }
  var ResultColumnsModel = function (surveyId) {
    var template = JSON.stringify({ "Columns": [{ "Name": "HappendAt", "DisplayName": "Submited", "DataType": 0, "Visibility": 0, "Location": 0, "Id": "00000000-0000-0000-0000-000000000000", "Data": { "Id": "00000000-0000-0000-0000-000000000000" } }, { "Name": "IPAddress", "DisplayName": "IPAddress", "DataType": 0, "Visibility": 2, "Location": 0, "Id": "00000000-0000-0000-0000-000000000000", "Data": { "Id": "00000000-0000-0000-0000-000000000000" } }, { "Name": "question1", "DisplayName": "question1", "DataType": 2, "Visibility": 0, "Location": 1, "Id": "00000000-0000-0000-0000-000000000000", "Data": { "Id": "00000000-0000-0000-0000-000000000000" } }], "NewColumnsVisibility": 0, "Id": "00000000-0000-0000-0000-000000000000", "Data": { "Id": "00000000-0000-0000-0000-000000000000" } });
    var self = this;
    this.showColumns = ko.observable(false);
    this.newColumnsVisibility = ko.observable(0);
    this.surveyId = surveyId;
    this.columns = ko.observableArray([]);
    this.loadData = function () {
      $.getJSON(template, function (data) {
        self.newColumnsVisibility(data.NewColumnsVisibility);
        var list = [];
        for (var i = 0; i < data.Columns.length; i++) { list.push(self.createColumn(data.Columns[i])); }
        self.columns(list);
        self.showColumns(true);
      }).fail(function (error) { self.onFail(error); });
    }
    this.saveData = function() {
      $.ajax({
        url: "/api/MySurveys/setResultColumns",
        type: "POST",
        data: { Id: this.surveyId, Json: JSON.stringify(this.getJson()) },
        success: function (data) { window.location.reload(); }
      });
    }
    this.onApplyClick = function () {
      this.saveData();
    }
    this.getJson = function () {
      var json = {};
      if (this.newColumnsVisibility() != 0) { json.newcolumnsvisibility = this.newColumnsVisibility(); }
      json.columns = [];
      for (var i = 0; i < this.columns().length; i++) { json.columns.push(this.columns()[i].getJson()); }
      return json;
    }
    this.createColumn = function (column) {
      return new ResultColumn(column.Name, column.DisplayName, column.Visibility, column.Location);
    }
    this.columnUp = function (column) {
      var index = self.columns.indexOf(column);
      if (index <= 0) return;
      var prevColumn = self.columns()[index - 1];
      self.columns.splice(index - 1, 1, column);
      self.columns.splice(index, 1, prevColumn);
    }
    this.columnDown = function (column) {
      var index = self.columns.indexOf(column);
      if (index >= self.columns().length) return;
      var nextColumn = self.columns()[index + 1];
      self.columns.splice(index + 1, 1, column);
      self.columns.splice(index, 1, nextColumn);
    }
    this.onFail = function (error) {
      alert(JSON.stringify(error));
    }
  }
</script>


<script type="text/javascript">

  function showClearAll() {
    document.getElementById("ctrlClearAll").style.visibility = "visible";
  }
  function onClearAllTextChange(text) {
    if ('Domino' == text) { document.getElementById("btnClearAllData").removeAttribute("disabled") }
    else { document.getElementById("btnClearAllData").setAttribute("disabled"); }
  }
  function doClearAllResults() {
    $.get("/api/MySurveys/deleteAllResults?id={fb79b5c0-3ad5-44ab-ac5e-4834250f22d6}", function (data) {
      window.location.reload();
    });
  }
  var SurveyResultAccessModel = function (id, access) {
    var self = this;
    this.id = id;
    this.accesstype = ko.observable(access == "True");
    this.url = "/api/MySurveys/";
    self.changeAccessType = function (newAccessType) {
      $.getJSON(self.url + "makeResultPublic?id=" + self.id + "&makeResultPublic=" + newAccessType, function (data) {
        self.accesstype(data);
      });
    }
    self.allowAccess = function () { self.changeAccessType(true); }
    self.disableAccess = function () { self.changeAccessType(false); }
  }
  var SurveyStoreIPModel = function (id, storeIP) {
    var self = this;
    this.id = id;
    this.storeIP = ko.observable(storeIP == "True");
    this.url = "/api/MySurveys/";
    self.changeStoreIP = function (newValue) {
      $.getJSON(self.url + "storeIPAddressInResult?id=" + self.id + "&storeIPAddress=" + newValue, function (data) {
        self.storeIP(data);
      });
    }
    self.allowStoreIP = function () { self.changeStoreIP(true); }
    self.disableStoreIP = function () { self.changeStoreIP(false); }
  }
  jQuery(document).ready(function () {
    ko.applyBindings(new SurveyResultAccessModel("fb79b5c0-3ad5-44ab-ac5e-4834250f22d6", "True"), document.getElementById("resultaccess"));
    ko.applyBindings(new SurveyStoreIPModel("fb79b5c0-3ad5-44ab-ac5e-4834250f22d6", "True"), document.getElementById("resultstoreIP"));
    var resultsColumnsModel = new ResultColumnsModel("fb79b5c0-3ad5-44ab-ac5e-4834250f22d6");
    ko.applyBindings(resultsColumnsModel, document.getElementById("defaultColumns"));
    var btnCustomize = document.getElementById("btnCustomizeColumns");
    if (btnCustomize) {
      btnCustomize.onclick = function() { resultsColumnsModel.loadData(); };
      btnCustomize["data-toggle"] = "modal";
      btnCustomize["data-target"] = "#resultColumnsModal";
    }
  });
</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
