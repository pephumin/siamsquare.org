<?php

if ($_GET['c'] == "A") {
  $title = "Before data collection";
  $details = "";
} else if ($_GET['c'] == "B") {
  $title = "During data collection";
  $details = "";
} else if ($_GET['c'] == "C") {
  $title = "After data collection";
  $details = "";
} else {
  $title = "All surveys";
  $details = "";
}

pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>$details</p><br>";

?>

<?php if (!($_GET['c'])) { ?>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav>
      <ul class="nav nav-tabs">
        <li data-bind="css: {active: showActive()}"><a class="tabsmenu btn" data-bind="click: loadActive" href=""><i class="pe-cubes pe-fw"></i> Active projects</a></li>
        <li data-bind="css: {active: !showActive()}"><a class="tabsmenu btn" data-bind="click: loadArchive" href=""><i class="pe-archive pe-fw"></i> Past projects</a></li>
      </ul>
    </nav>
  </div>
</div>
<br>
<?php } ?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <p class="pull-right"><a class="btn btn-sm btn-success" data-bind="click: createNew, visible: showActive, enable: !isNewSurveyCreating()" href=""><i class="pe-cube pe-fw"></i> New project</a></p>
    <br>
    <table class="table table-hover">
      <thead>
        <tr class="bg-success">
          <th width="20%"><i class="pe-cube pe-fw"></i> Project</th>
          <th width="25%"><i class="pe-calendar pe-fw"></i> Created</th>
          <th width="25%"><i class="pe-clock-o pe-fw"></i> Last updated (<i class="pe-sort-amount-desc pe-fw red"></i>)</th>
          <th width="30%"><i class="pe-cogs pe-fw"></i> Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr data-bind="visible: isNewSurveyCreating" class="bg-info">
          <td colspan="3"><input type="text" class="form-control" data-bind="textInput: newSurveyName" placeholder="Enter a new project name"></td>
          <td>
            <a class="btn btn-xs" data-bind="click: postNew, enable: newSurveyName() != ''" href="">Create <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-xs" data-bind="click: cancelNew" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </td>
        </tr>
        <!-- ko foreach: surveys -->
        <tr>
          <td>
            <a href="" data-bind="click: $parent.showInfo" title="More Info..."><i data-bind="css: {'pe-chevron-down': !showInfo(), 'pe-chevron-up': showInfo()}"></i></a>&nbsp;
            <span data-bind="text: title"></span>
            <a href="" data-bind="click: $parent.startEdit, visible: $parent.showActive" title="Change Name"> <i class="pe-edit"></i></a>
          </td>
          <td>
            <span data-bind="text: created"></span>
          </td>
          <td>
            <span data-bind="text: lastupdated"></span>
          </td>
          <td>
          <?php if ($_GET['c'] == "A") { ?>
            <a class="btn btn-default btn-xs" href="/admin/?w=edit&amp;s=" title="Edit">Edit <i class="pe-edit"></i></a>
            <a class="btn btn-default btn-xs" href="/admin/?w=pilot&amp;s=" title="Test">Pilot test <i class="pe-paper-plane"></i></a>
          <?php } else if ($_GET['c'] == "B") { ?>
            <a class="btn btn-default btn-xs" href="/admin/?w=progress&amp;s=" title="Progress">Progress <i class="pe-refresh"></i></a>
            <a class="btn btn-default btn-xs" href="/admin/?w=interim&amp;s=" title="Interim results">Interim results <i class="pe-pie-chart"></i></a>
          <?php } else if ($_GET['c'] == "C") { ?>
            <a class="btn btn-default btn-xs" href="/admin/?w=data&amp;s=" title="Fieldwork update">Data <i class="pe-refresh"></i></a>
            <a class="btn btn-default btn-xs" href="/admin/?w=report&amp;s=" title="Interim results">Report <i class="pe-pie-chart"></i></a>
          <?php } ?>
            <!-- <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=edit&amp;s=' + id }, visible: $parent.showActive">Edit <i class="pe-edit"></i></a> -->
            <!-- <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=test&amp;s=' + id }, visible: $parent.showActive">Test <i class="pe-paper-plane"></i></a> -->
            <!-- <a class="btn btn-warning btn-xs" data-bind="click: $parent.archive, visible: $parent.showActive" href="">Archive <i class="pe-archive"></i></a> -->
            <!-- <a class="btn btn-default btn-xs" data-bind="attr: { href: 'result.html?s=' + id }, visible: !$parent.showActive()">Results <i class="pe-pie-chart"></i></a> -->
            <!-- <a class="btn btn-default btn-xs" data-bind="click: $parent.restore, visible: !$parent.showActive()" href="">Restore <i class="pe-undo"></i></a> -->
            <!-- <a class="btn btn-danger btn-xs" data-bind="click: $parent.delete, visible: !$parent.showActive()" href="">Delete <i class="pe-trash"></i></a> -->
          </td>
        </tr>
        <tr data-bind="visible: isEditing()" class="bg-info">
          <td colspan="2">
            <input data-bind="textInput: editingName, visible: isEditing()" class="form-control">
          </td>
          <td>
            <a class="btn btn-sm" data-bind="click: $parent.postEdit, enable: title() != ''" href="">Rename <i class="pe-check-circle-o"></i></a>
            <a class="btn btn-sm" data-bind="click: $parent.cancelEdit" href="">Cancel <i class="pe-times-circle-o"></i></a>
          </td>
          <td></td>
        </tr>
        <tr data-bind="visible: showInfo">
          <td colspan="4" class="bg-warning">
            <dl class="dl-horizontal">
              <dt>Survey ID</dt>
              <dd><span data-bind="text: id"></span></dd>
              <dt>Description</dt>
              <dd><span data-bind="text: resultid"></span></dd>
            </dl>
          </td>
        </tr>
        <!-- /ko -->
      </tbody>
    </table>
  </div>
</div>

<script type="text/javascript">
  var userid = <?php echo $_SESSION['userid']; ?>;
  var api = "http://www.siamsquare.org/api/index.php";
  var key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";

  var Survey = function (title, created, lastupdated, id, resultid, postid) {
    this.title = ko.observable(title);
    this.editingName = ko.observable(title);
    this.created = created;
    this.lastupdated = lastupdated;
    this.id = id;
    this.resultid = postid;
    this.postid = postid;
    this.showInfo = ko.observable(false);
    this.isEditing = ko.observable(false);
  }

  var ViewModel = function () {
    var self = this;
    this.surveys = ko.observableArray([]);
    this.url = api;
    this.showActive = ko.observable(true);
    this.isNewSurveyCreating = ko.observable(false);
    this.newSurveyName = ko.observable("");

    this.loadData = function (showActive) {
      self.showActive(showActive);
      var url = showActive ? "/user/" + userid + "/active" : "/user/" + userid + "/archive";
      $.getJSON(self.url + url, function (data) {
        var list = [];
        for (var i = 0; i < data.length; i++) { list.push(self.createSurveyObject(data[i])); }
        self.surveys(list);
      }).fail(function (error) { self.onFail(error); });
    }
    this.loadActive = function () { self.loadData(true); }
    this.loadArchive = function () { self.loadData(false); }
    this.archive = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/movetoarchive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3 }',
        success: function (data) { self.removeSurvey(survey); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.restore = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/movetoactive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 2 }',
        success: function (data) { self.removeSurvey(survey); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.delete = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/delete',
        dataType: 'json',
        type: 'delete',
        contentType: 'application/json; charset=utf-8',
        success: function (data) { self.removeSurvey(survey); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.removeSurvey = function (survey) {
      var index = self.surveys.indexOf(survey);
      if (index > -1) { self.surveys.splice(index, 1); }
    }
    this.createNew = function () {
      self.isNewSurveyCreating(true);
      self.newSurveyName("");
    }
    this.cancelNew = function () {
      self.isNewSurveyCreating(false);
    }
    this.postNew = function () {
      self.cancelNew();
      $.ajax({
        url: api + '/user/' + userid + '/new?name=' + self.newSurveyName(),
        dataType: 'json',
        type: 'get',
        contentType: 'application/json; charset=utf-8',
        success: function (data) { self.surveys.splice(0, 0, self.createSurveyObject(data)); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.startEdit = function (survey) {
      survey.editingName(survey.title());
      survey.isEditing(true);
    }
    this.postEdit = function (survey) {
      self.cancelEdit(survey);
      $.ajax({
        url: api + '/survey/' + survey.id + '/rename',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "title": "' + survey.editingName() + '" }',
        success: function (data) { survey.title(survey.editingName()); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.cancelEdit = function (survey) {
      survey.isEditing(false);
    }
    this.createSurveyObject = function (data) {
      moment.locale('en');
      var s1 = moment(data.created).fromNow();
      var s2 = moment(data.created).format("D MMM YYYY");
      var created = s2 + ' (' + s1 + ')';
      // var created = s1;
      var t1 = moment(data.updated).fromNow();
      var t2 = moment(data.updated).format("D MMM YYYY");
      var lastupdated = t2 + ' (' + t1 + ')';
      // var lastupdated = t1;
      return new Survey(data.title, created, lastupdated, data.id, data.resultid, data.postid);
    }
    this.onFail = function (error) {
      alert(JSON.stringify(error));
    }
    this.showInfo = function (survey) {
      survey.showInfo(!survey.showInfo());
    }
    this.loadActive();
  }

  jQuery(document).ready(function () {
    ko.applyBindings(new ViewModel());
  });
</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
