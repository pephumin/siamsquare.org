var Survey = function (name, createdAt, id, resultId, postId) {
  this.name = ko.observable(name);
  this.editingName = ko.observable(name);
  this.createdAt = createdAt;
  this.id = id;
  this.resultId = resultId;
  this.postId = postId;

  this.showInfo = ko.observable(false);
  this.isEditing = ko.observable(false);
}

var ViewModel = function () {
  var self = this;
  this.surveys = ko.observableArray([]);
  this.url = "/api/MySurveys/";
  this.showActive = ko.observable(true);
  this.isNewSurveyCreating = ko.observable(false);
  this.newSurveyName = ko.observable("");

  this.loadData = function (showActive) {
    self.showActive(showActive);
    var url = showActive ? "getActive" : "getArchive";
    $.getJSON(self.url + url, function (data) {
      var list = [];
      for (var i = 0; i < data.length; i++) {
        list.push(self.createSurveyObject(data[i]));
      }
      self.surveys(list);
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.loadActive = function () {
    self.loadData(true);
  }
  this.loadArchive = function () {
    self.loadData(false);
  }
  this.archive = function (survey) {
    $.get(self.url + "archive?id=" + survey.id, function (data) {
      self.removeSurvey(survey);
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.restore = function (survey) {
    $.get(self.url + "restore?id=" + survey.id, function (data) {
      self.removeSurvey(survey);
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.delete = function (survey) {
    $.get(self.url + "delete?id=" + survey.id, function (data) {
      self.removeSurvey(survey);
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.removeSurvey = function (survey) {
    var index = self.surveys.indexOf(survey);
    if (index > -1) {
      self.surveys.splice(index, 1);
    }
  }
  this.createNew = function () {
    self.isNewSurveyCreating(true);
    self.newSurveyName("New Survey");
  }
  this.cancelNew = function () {
    self.isNewSurveyCreating(false);
  }
  this.postNew = function () {
    self.cancelNew();
    $.get(self.url + "create?name=" + self.newSurveyName(), function (data) {
      self.surveys.splice(0, 0, self.createSurveyObject(data))
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.startEdit = function (survey) {
    survey.editingName(survey.name());
    survey.isEditing(true);
  }
  this.postEdit = function (survey) {
    self.cancelEdit(survey);
    $.get(self.url + "changeName?id=" + survey.id + "&name=" + survey.editingName(), function (data) {
      survey.name(survey.editingName());
    }).fail(function (error) {
      self.onFail(error);
    });
  }
  this.cancelEdit = function (survey) {
    survey.isEditing(false);
  }
  this.createSurveyObject = function (data) {
    var createdAt = new Date(data.CreatedAt);
    if (createdAt) { createdAt = createdAt.toDateString(); }
    return new Survey(data.Name, createdAt, data.Id, data.ResultId, data.PostId);
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
