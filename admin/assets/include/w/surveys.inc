<?php

$title = "All surveys";
$titleA = "Before data collection";
$titleB = "During data collection";
$titleC = "After data collection";
$titleD = "Past surveys (Archive)";

$details = "All surveys that are belonged to either youself or the organisation that you are a member. There are 4 different tabs within the survey which is separated by the life-stage starting from before data collection, during data collection, after data collection, and the achived surveys.";
$detailsA = "Surveys in this section are the ones that are still under questionnaire development which includes questionnaire design, questionnaire translation, and the pilot testing to ensure all designed questions and the actual survey flow would work effectively.";
$detailsB = "Surveys in this section are the ones that are currently on data collection stage. It means changes cannot be made to the questionnaire at all because it will badly impact to how the results will be generated at the end of the survey. In this section you can check for the progress of fieldwork as well as viewing the interim of the results.";
$detailsC = "Surveys in this section are the ones that have completed collecting data from respondents. They are surveys that are ready for result analysis. In this section you can view tabulation and report online, and furthermore, you can also choose to download data and report in the format you prefer.";
$detailsD = "Surveys in this section are the ones that are no longer active. Since there is no harm of leaving these surveys in this section, we would not suggest deleting them from the database. However, if you prefer to delete them (due to a confidentiality of the study), you can certainly do it.";

if ($_GET['c'] == "A") { $title = $titleA; $details = $detailsA; }
else if ($_GET['c'] == "B") { $title = $titleB; $details = $detailsB; }
else if ($_GET['c'] == "C") { $title = $titleC; $details = $detailsC; }
else if ($_GET['c'] == "D") { $title = $titleD; $details = $detailsD; }
else { $title = $title; $details = $details; }

pageHeader($title);
echo "<h2>$title</h2>\n";
echo "<p>$details</p><br>\n";

?>

<?php if (!$_GET['c']) { ?>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav>
      <ul class="nav nav-tabs">
        <li data-bind="css: {active: showActive() == 'A'}"><a class="tabsmenu btn" data-bind="click: loadA" href=""><i class="pe-hourglass-start pe-fw"></i> <?php echo $titleA; ?></a></li>
        <li data-bind="css: {active: showActive() == 'B'}"><a class="tabsmenu btn" data-bind="click: loadB" href=""><i class="pe-hourglass-half pe-fw"></i> <?php echo $titleB; ?></a></li>
        <li data-bind="css: {active: showActive() == 'C'}"><a class="tabsmenu btn" data-bind="click: loadC" href=""><i class="pe-hourglass-end pe-fw"></i> <?php echo $titleC; ?></a></li>
        <li data-bind="css: {active: showActive() == 'D'}"><a class="tabsmenu btn" data-bind="click: loadD" href=""><i class="pe-archive pe-fw"></i> <?php echo $titleD; ?></a></li>
      </ul>
    </nav>
  </div>
</div>
<br>
<?php } ?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <p class="pull-right"><a class="btn btn-success" data-bind="click: createNew, visible: showActive() == 'A', enable: !isNewSurveyCreating()" href=""><i class="pe-cube pe-fw"></i> New project</a></p>
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
            <a href="" data-bind="click: $parent.startEdit, visible: $parent.showActive() == 'A'" title="Change Name"> <i class="pe-edit"></i></a>
          </td>
          <td>
            <span data-bind="text: created"></span>
          </td>
          <td>
            <span data-bind="text: lastupdated"></span>
          </td>
          <td>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=edit&amp;s=' + id }, visible: $parent.showActive() == 'A'">Edit <i class="pe-edit"></i></a>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=pilot&amp;s=' + id }, visible: $parent.showActive() == 'A'">Pilot test <i class="pe-paper-plane"></i></a>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=progress&amp;s=' + id }, visible: $parent.showActive() == 'B'">Progress <i class="pe-refresh"></i></a>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=interim&amp;s=' + id }, visible: $parent.showActive() == 'B'">Interim <i class="pe-pie-chart"></i></a>
            <a class="btn btn-primary btn-xs" data-bind="attr: { href: '/members/?w=run&amp;s=' + id }, visible: $parent.showActive() == 'B'">Live <i class="pe-plane"></i></a>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=data&amp;s=' + id }, visible: $parent.showActive() == 'C'">Data <i class="pe-table"></i></a>
            <a class="btn btn-default btn-xs" data-bind="attr: { href: '/admin/?w=report&amp;s=' + id }, visible: $parent.showActive() == 'C'">Report <i class="pe-line-chart"></i></a>
            <a class="btn btn-default btn-xs" data-bind="click: $parent.archive, visible: $parent.showActive() == 'C'" href="">Archive <i class="pe-archive"></i></a>
            <a class="btn btn-default btn-xs" data-bind="click: $parent.restore, visible: $parent.showActive() == 'D'" href="">Restore <i class="pe-undo"></i></a>
            <a class="btn btn-danger btn-xs" data-bind="click: $parent.delete, visible: $parent.showActive() == 'D'" href="">Delete <i class="pe-trash"></i></a>
          </td>
        </tr>
        <tr data-bind="visible: isEditing()" class="bg-info">
          <td colspan="2">
            <input data-bind="textInput: editingName, visible: isEditing()" onclick="this.select()" class="form-control">
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
              <dd><span data-bind="text: description"></span></dd>
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
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo getip(); ?>";
  var api = "http://www.siamsquare.org.uk";
  var key = "aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8";

  var Listing = function (title, description, created, lastupdated, id) {
    this.title = ko.observable(title);
    this.editingName = ko.observable(title);
    this.description = ko.observable(description);
    this.created = created;
    this.lastupdated = lastupdated;
    this.id = id;
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

    this.loadData = function (i) {
      self.showActive(i);
      var url = "/user/" + userid + "/" + i;
      $.getJSON(self.url + url, function (data) {
        var list = [];
        for (var i = 0; i < data.length; i++) { list.push(self.createSurveyObject(data[i])); }
        self.surveys(list);
      }).fail(function (error) { self.onFail(error); });
    }
    this.loadA = function () { self.loadData("A"); }
    this.loadB = function () { self.loadData("B"); }
    this.loadC = function () { self.loadData("C"); }
    this.loadD = function () { self.loadData("D"); }
    this.archive = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/archive',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 4 }',
        success: function (data) { self.removeSurvey(survey); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.restore = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/restore',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 3 }',
        success: function (data) { self.removeSurvey(survey); },
        error: function (error) { self.onFail(error); }
      });
    }
    this.delete = function (survey) {
      $.ajax({
        url: api + '/survey/' + survey.id + '/delete',
        dataType: 'json',
        //type: 'delete',
        type: 'put',
        contentType: 'application/json; charset=utf-8',
        data: '{ "status": 0 }',
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
        success: function (data) {
          self.surveys.splice(0, 0, self.createSurveyObject(data));
          $.ajax({
            url: api + '/log/' + userid + '/' + data.id,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' created a new survey named ' + self.newSurveyName() + ' (id=' + data.id + ')" }',
            success: function(data) { result = data; }
          });
        },
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
      return new Listing(data.title, data.description, created, lastupdated, data.id);
    }
    this.onFail = function (error) {
      alert(JSON.stringify(error));
    }
    this.showInfo = function (survey) {
      survey.showInfo(!survey.showInfo());
    }
    // this.loadA();
    // this.loadB();
    // this.loadC();
    // this.loadD();
    <?php
    if ($_GET['c'] == "A") { echo "this.loadA();"; }
    else if ($_GET['c'] == "B") { echo "this.loadB();"; }
    else if ($_GET['c'] == "C") { echo "this.loadC();"; }
    else if ($_GET['c'] == "D") { echo "this.loadD();"; }
    else { echo "this.loadA();"; }
    ?>
  }

  jQuery(document).ready(function () {
    ko.applyBindings(new ViewModel());
  });
</script>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
