

var userid = 1;
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
  // this.del = ko.observable({});
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
