/*!
* surveyjs - Survey JavaScript library v0.10.2
* (c) Andrew Telnov - http://surveyjs.org/
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("knockout"));
	else
		root["Survey"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.QuestionDate = exports.__extends = exports.SurveyTemplateText = exports.SurveyWindow = exports.QuestionText = exports.QuestionRating = exports.QuestionRadiogroup = exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = exports.QuestionMatrixDropdown = exports.QuestionMatrix = exports.MatrixRow = exports.QuestionHtml = exports.QuestionFile = exports.QuestionDropdown = exports.QuestionComment = exports.QuestionCheckbox = exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = exports.QuestionImplementor = exports.QuestionImplementorBase = exports.Page = exports.QuestionRow = exports.Survey = exports.defaultStandardCss = undefined;
	
	var _model = __webpack_require__(1);
	
	Object.keys(_model).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _model[key];
	    }
	  });
	});
	
	var _cssstandard = __webpack_require__(35);
	
	Object.defineProperty(exports, "defaultStandardCss", {
	  enumerable: true,
	  get: function get() {
	    return _cssstandard.defaultStandardCss;
	  }
	});
	
	var _kosurvey = __webpack_require__(36);
	
	Object.defineProperty(exports, "Survey", {
	  enumerable: true,
	  get: function get() {
	    return _kosurvey.Survey;
	  }
	});
	
	var _kopage = __webpack_require__(38);
	
	Object.defineProperty(exports, "QuestionRow", {
	  enumerable: true,
	  get: function get() {
	    return _kopage.QuestionRow;
	  }
	});
	Object.defineProperty(exports, "Page", {
	  enumerable: true,
	  get: function get() {
	    return _kopage.Page;
	  }
	});
	
	var _koquestionbase = __webpack_require__(40);
	
	Object.defineProperty(exports, "QuestionImplementorBase", {
	  enumerable: true,
	  get: function get() {
	    return _koquestionbase.QuestionImplementorBase;
	  }
	});
	
	var _koquestion = __webpack_require__(41);
	
	Object.defineProperty(exports, "QuestionImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion.QuestionImplementor;
	  }
	});
	
	var _koquestion_baseselect = __webpack_require__(42);
	
	Object.defineProperty(exports, "QuestionSelectBaseImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_baseselect.QuestionSelectBaseImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionCheckboxBaseImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_baseselect.QuestionCheckboxBaseImplementor;
	  }
	});
	
	var _koquestion_checkbox = __webpack_require__(43);
	
	Object.defineProperty(exports, "QuestionCheckbox", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_checkbox.QuestionCheckbox;
	  }
	});
	
	var _koquestion_comment = __webpack_require__(44);
	
	Object.defineProperty(exports, "QuestionComment", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_comment.QuestionComment;
	  }
	});
	
	var _koquestion_dropdown = __webpack_require__(45);
	
	Object.defineProperty(exports, "QuestionDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_dropdown.QuestionDropdown;
	  }
	});
	
	var _koquestion_file = __webpack_require__(46);
	
	Object.defineProperty(exports, "QuestionFile", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_file.QuestionFile;
	  }
	});
	
	var _koquestion_html = __webpack_require__(47);
	
	Object.defineProperty(exports, "QuestionHtml", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_html.QuestionHtml;
	  }
	});
	
	var _koquestion_matrix = __webpack_require__(48);
	
	Object.defineProperty(exports, "MatrixRow", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrix.MatrixRow;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrix", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrix.QuestionMatrix;
	  }
	});
	
	var _koquestion_matrixdropdown = __webpack_require__(49);
	
	Object.defineProperty(exports, "QuestionMatrixDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdropdown.QuestionMatrixDropdown;
	  }
	});
	
	var _koquestion_matrixdynamic = __webpack_require__(50);
	
	Object.defineProperty(exports, "QuestionMatrixDynamicImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdynamic.QuestionMatrixDynamicImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDynamic", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdynamic.QuestionMatrixDynamic;
	  }
	});
	
	var _koquestion_multipletext = __webpack_require__(51);
	
	Object.defineProperty(exports, "MultipleTextItem", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.MultipleTextItem;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleTextImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.QuestionMultipleTextImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleText", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.QuestionMultipleText;
	  }
	});
	
	var _koquestion_radiogroup = __webpack_require__(52);
	
	Object.defineProperty(exports, "QuestionRadiogroup", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_radiogroup.QuestionRadiogroup;
	  }
	});
	
	var _koquestion_rating = __webpack_require__(53);
	
	Object.defineProperty(exports, "QuestionRating", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_rating.QuestionRating;
	  }
	});
	
	var _koquestion_text = __webpack_require__(54);
	
	Object.defineProperty(exports, "QuestionText", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_text.QuestionText;
	  }
	});
	
	var _koSurveyWindow = __webpack_require__(55);
	
	Object.defineProperty(exports, "SurveyWindow", {
	  enumerable: true,
	  get: function get() {
	    return _koSurveyWindow.SurveyWindow;
	  }
	});
	
	var _templateText = __webpack_require__(57);
	
	Object.defineProperty(exports, "SurveyTemplateText", {
	  enumerable: true,
	  get: function get() {
	    return _templateText.SurveyTemplateText;
	  }
	});
	
	var _extends = __webpack_require__(3);
	
	Object.defineProperty(exports, "__extends", {
	  enumerable: true,
	  get: function get() {
	    return _extends.__extends;
	  }
	});
	
	var _koquestion_date = __webpack_require__(58);
	
	Object.defineProperty(exports, "QuestionDate", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_date.QuestionDate;
	  }
	});
	
	__webpack_require__(59);
	
	__webpack_require__(69);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _validator = __webpack_require__(2);
	
	Object.defineProperty(exports, "AnswerCountValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.AnswerCountValidator;
	  }
	});
	Object.defineProperty(exports, "EmailValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.EmailValidator;
	  }
	});
	Object.defineProperty(exports, "NumericValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.NumericValidator;
	  }
	});
	Object.defineProperty(exports, "RegexValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.RegexValidator;
	  }
	});
	Object.defineProperty(exports, "SurveyValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.SurveyValidator;
	  }
	});
	Object.defineProperty(exports, "TextValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.TextValidator;
	  }
	});
	Object.defineProperty(exports, "ValidatorResult", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorResult;
	  }
	});
	Object.defineProperty(exports, "ValidatorRunner", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorRunner;
	  }
	});
	
	var _base = __webpack_require__(4);
	
	Object.defineProperty(exports, "Base", {
	  enumerable: true,
	  get: function get() {
	    return _base.Base;
	  }
	});
	Object.defineProperty(exports, "Event", {
	  enumerable: true,
	  get: function get() {
	    return _base.Event;
	  }
	});
	Object.defineProperty(exports, "ItemValue", {
	  enumerable: true,
	  get: function get() {
	    return _base.ItemValue;
	  }
	});
	Object.defineProperty(exports, "SurveyError", {
	  enumerable: true,
	  get: function get() {
	    return _base.SurveyError;
	  }
	});
	
	var _choicesRestfull = __webpack_require__(8);
	
	Object.defineProperty(exports, "ChoicesRestfull", {
	  enumerable: true,
	  get: function get() {
	    return _choicesRestfull.ChoicesRestfull;
	  }
	});
	
	var _conditions = __webpack_require__(9);
	
	Object.defineProperty(exports, "Condition", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.Condition;
	  }
	});
	Object.defineProperty(exports, "ConditionNode", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionNode;
	  }
	});
	Object.defineProperty(exports, "ConditionRunner", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionRunner;
	  }
	});
	
	var _conditionsParser = __webpack_require__(10);
	
	Object.defineProperty(exports, "ConditionsParser", {
	  enumerable: true,
	  get: function get() {
	    return _conditionsParser.ConditionsParser;
	  }
	});
	
	var _error = __webpack_require__(5);
	
	Object.defineProperty(exports, "CustomError", {
	  enumerable: true,
	  get: function get() {
	    return _error.CustomError;
	  }
	});
	Object.defineProperty(exports, "ExceedSizeError", {
	  enumerable: true,
	  get: function get() {
	    return _error.ExceedSizeError;
	  }
	});
	Object.defineProperty(exports, "RequreNumericError", {
	  enumerable: true,
	  get: function get() {
	    return _error.RequreNumericError;
	  }
	});
	
	var _jsonobject = __webpack_require__(7);
	
	Object.defineProperty(exports, "JsonError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonError;
	  }
	});
	Object.defineProperty(exports, "JsonIncorrectTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonIncorrectTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMetadata", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadata;
	  }
	});
	Object.defineProperty(exports, "JsonMetadataClass", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadataClass;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeErrorBase", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeErrorBase;
	  }
	});
	Object.defineProperty(exports, "JsonObject", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObject;
	  }
	});
	Object.defineProperty(exports, "JsonObjectProperty", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObjectProperty;
	  }
	});
	Object.defineProperty(exports, "JsonRequiredPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonRequiredPropertyError;
	  }
	});
	Object.defineProperty(exports, "JsonUnknownPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonUnknownPropertyError;
	  }
	});
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	Object.defineProperty(exports, "MatrixDropdownCell", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownCell;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownColumn", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownColumn;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownRowModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownRowModelBase;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.QuestionMatrixDropdownModelBase;
	  }
	});
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	Object.defineProperty(exports, "MatrixDropdownRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.MatrixDropdownRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.QuestionMatrixDropdownModel;
	  }
	});
	
	var _question_matrixdynamic = __webpack_require__(18);
	
	Object.defineProperty(exports, "MatrixDynamicRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.MatrixDynamicRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDynamicModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.QuestionMatrixDynamicModel;
	  }
	});
	
	var _question_matrix = __webpack_require__(19);
	
	Object.defineProperty(exports, "MatrixRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.MatrixRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.QuestionMatrixModel;
	  }
	});
	
	var _question_multipletext = __webpack_require__(20);
	
	Object.defineProperty(exports, "MultipleTextItemModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.MultipleTextItemModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.QuestionMultipleTextModel;
	  }
	});
	
	var _page = __webpack_require__(21);
	
	Object.defineProperty(exports, "PageModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.PageModel;
	  }
	});
	Object.defineProperty(exports, "QuestionRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.QuestionRowModel;
	  }
	});
	
	var _question = __webpack_require__(12);
	
	Object.defineProperty(exports, "Question", {
	  enumerable: true,
	  get: function get() {
	    return _question.Question;
	  }
	});
	
	var _questionbase = __webpack_require__(13);
	
	Object.defineProperty(exports, "QuestionBase", {
	  enumerable: true,
	  get: function get() {
	    return _questionbase.QuestionBase;
	  }
	});
	
	var _question_baseselect = __webpack_require__(15);
	
	Object.defineProperty(exports, "QuestionCheckboxBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionCheckboxBase;
	  }
	});
	Object.defineProperty(exports, "QuestionSelectBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionSelectBase;
	  }
	});
	
	var _question_checkbox = __webpack_require__(22);
	
	Object.defineProperty(exports, "QuestionCheckboxModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_checkbox.QuestionCheckboxModel;
	  }
	});
	
	var _question_comment = __webpack_require__(23);
	
	Object.defineProperty(exports, "QuestionCommentModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_comment.QuestionCommentModel;
	  }
	});
	
	var _question_dropdown = __webpack_require__(24);
	
	Object.defineProperty(exports, "QuestionDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_dropdown.QuestionDropdownModel;
	  }
	});
	
	var _questionfactory = __webpack_require__(16);
	
	Object.defineProperty(exports, "QuestionFactory", {
	  enumerable: true,
	  get: function get() {
	    return _questionfactory.QuestionFactory;
	  }
	});
	
	var _question_file = __webpack_require__(25);
	
	Object.defineProperty(exports, "QuestionFileModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_file.QuestionFileModel;
	  }
	});
	
	var _question_html = __webpack_require__(26);
	
	Object.defineProperty(exports, "QuestionHtmlModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_html.QuestionHtmlModel;
	  }
	});
	
	var _question_radiogroup = __webpack_require__(27);
	
	Object.defineProperty(exports, "QuestionRadiogroupModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_radiogroup.QuestionRadiogroupModel;
	  }
	});
	
	var _question_rating = __webpack_require__(28);
	
	Object.defineProperty(exports, "QuestionRatingModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_rating.QuestionRatingModel;
	  }
	});
	
	var _question_text = __webpack_require__(29);
	
	Object.defineProperty(exports, "QuestionTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_text.QuestionTextModel;
	  }
	});
	
	var _survey = __webpack_require__(30);
	
	Object.defineProperty(exports, "SurveyModel", {
	  enumerable: true,
	  get: function get() {
	    return _survey.SurveyModel;
	  }
	});
	
	var _trigger = __webpack_require__(32);
	
	Object.defineProperty(exports, "SurveyTrigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTrigger;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerComplete", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerComplete;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerSetValue", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerSetValue;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerVisible", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerVisible;
	  }
	});
	Object.defineProperty(exports, "Trigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.Trigger;
	  }
	});
	
	var _surveyWindow = __webpack_require__(33);
	
	Object.defineProperty(exports, "SurveyWindowModel", {
	  enumerable: true,
	  get: function get() {
	    return _surveyWindow.SurveyWindowModel;
	  }
	});
	
	var _textPreProcessor = __webpack_require__(14);
	
	Object.defineProperty(exports, "TextPreProcessor", {
	  enumerable: true,
	  get: function get() {
	    return _textPreProcessor.TextPreProcessor;
	  }
	});
	
	var _dxSurveyService = __webpack_require__(31);
	
	Object.defineProperty(exports, "dxSurveyService", {
	  enumerable: true,
	  get: function get() {
	    return _dxSurveyService.dxSurveyService;
	  }
	});
	
	var _surveyStrings = __webpack_require__(6);
	
	Object.defineProperty(exports, "surveyLocalization", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyLocalization;
	  }
	});
	Object.defineProperty(exports, "surveyStrings", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyStrings;
	  }
	});
	
	var _question_date = __webpack_require__(34);
	
	Object.defineProperty(exports, "QuestionDateModel", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_question_date).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.EmailValidator = exports.RegexValidator = exports.AnswerCountValidator = exports.TextValidator = exports.NumericValidator = exports.ValidatorRunner = exports.SurveyValidator = exports.ValidatorResult = undefined;
	
	var _base = __webpack_require__(4);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _jsonobject = __webpack_require__(7);
	
	var ValidatorResult = exports.ValidatorResult = function () {
	    function ValidatorResult(value, error) {
	        if (error === void 0) {
	            error = null;
	        }
	        this.value = value;
	        this.error = error;
	    }
	    return ValidatorResult;
	}();
	var SurveyValidator = exports.SurveyValidator = function (_super) {
	    __extends(SurveyValidator, _super);
	    function SurveyValidator() {
	        _super.call(this);
	        this.text = "";
	    }
	    SurveyValidator.prototype.getErrorText = function (name) {
	        if (this.text) return this.text;
	        return this.getDefaultErrorText(name);
	    };
	    SurveyValidator.prototype.getDefaultErrorText = function (name) {
	        return "";
	    };
	    SurveyValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        return null;
	    };
	    return SurveyValidator;
	}(_base.Base);
	var ValidatorRunner = exports.ValidatorRunner = function () {
	    function ValidatorRunner() {}
	    ValidatorRunner.prototype.run = function (owner) {
	        for (var i = 0; i < owner.validators.length; i++) {
	            var validatorResult = owner.validators[i].validate(owner.value, owner.getValidatorTitle());
	            if (validatorResult != null) {
	                if (validatorResult.error) return validatorResult.error;
	                if (validatorResult.value) {
	                    owner.value = validatorResult.value;
	                }
	            }
	        }
	        return null;
	    };
	    return ValidatorRunner;
	}();
	var NumericValidator = exports.NumericValidator = function (_super) {
	    __extends(NumericValidator, _super);
	    function NumericValidator(minValue, maxValue) {
	        if (minValue === void 0) {
	            minValue = null;
	        }
	        if (maxValue === void 0) {
	            maxValue = null;
	        }
	        _super.call(this);
	        this.minValue = minValue;
	        this.maxValue = maxValue;
	    }
	    NumericValidator.prototype.getType = function () {
	        return "numericvalidator";
	    };
	    NumericValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value || !this.isNumber(value)) {
	            return new ValidatorResult(null, new _error.RequreNumericError());
	        }
	        var result = new ValidatorResult(parseFloat(value));
	        if (this.minValue && this.minValue > result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        if (this.maxValue && this.maxValue < result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        return typeof value === 'number' ? null : result;
	    };
	    NumericValidator.prototype.getDefaultErrorText = function (name) {
	        var vName = name ? name : "value";
	        if (this.minValue && this.maxValue) {
	            return _surveyStrings.surveyLocalization.getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
	        } else {
	            if (this.minValue) {
	                return _surveyStrings.surveyLocalization.getString("numericMin")["format"](vName, this.minValue);
	            }
	            return _surveyStrings.surveyLocalization.getString("numericMax")["format"](vName, this.maxValue);
	        }
	    };
	    NumericValidator.prototype.isNumber = function (value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	    return NumericValidator;
	}(SurveyValidator);
	var TextValidator = exports.TextValidator = function (_super) {
	    __extends(TextValidator, _super);
	    function TextValidator(minLength) {
	        if (minLength === void 0) {
	            minLength = 0;
	        }
	        _super.call(this);
	        this.minLength = minLength;
	    }
	    TextValidator.prototype.getType = function () {
	        return "textvalidator";
	    };
	    TextValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (this.minLength <= 0) return;
	        if (value.length < this.minLength) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(name)));
	        }
	        return null;
	    };
	    TextValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("textMinLength")["format"](this.minLength);
	    };
	    return TextValidator;
	}(SurveyValidator);
	var AnswerCountValidator = exports.AnswerCountValidator = function (_super) {
	    __extends(AnswerCountValidator, _super);
	    function AnswerCountValidator(minCount, maxCount) {
	        if (minCount === void 0) {
	            minCount = null;
	        }
	        if (maxCount === void 0) {
	            maxCount = null;
	        }
	        _super.call(this);
	        this.minCount = minCount;
	        this.maxCount = maxCount;
	    }
	    AnswerCountValidator.prototype.getType = function () {
	        return "answercountvalidator";
	    };
	    AnswerCountValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (value == null || value.constructor != Array) return null;
	        var count = value.length;
	        if (this.minCount && count < this.minCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("minSelectError")["format"](this.minCount))));
	        }
	        if (this.maxCount && count > this.maxCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("maxSelectError")["format"](this.maxCount))));
	        }
	        return null;
	    };
	    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
	        return name;
	    };
	    return AnswerCountValidator;
	}(SurveyValidator);
	var RegexValidator = exports.RegexValidator = function (_super) {
	    __extends(RegexValidator, _super);
	    function RegexValidator(regex) {
	        if (regex === void 0) {
	            regex = null;
	        }
	        _super.call(this);
	        this.regex = regex;
	    }
	    RegexValidator.prototype.getType = function () {
	        return "regexvalidator";
	    };
	    RegexValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!this.regex || !value) return null;
	        var re = new RegExp(this.regex);
	        if (re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    return RegexValidator;
	}(SurveyValidator);
	var EmailValidator = exports.EmailValidator = function (_super) {
	    __extends(EmailValidator, _super);
	    function EmailValidator() {
	        _super.call(this);
	        this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	    }
	    EmailValidator.prototype.getType = function () {
	        return "emailvalidator";
	    };
	    EmailValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value) return null;
	        if (this.re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    EmailValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("invalidEmail");
	    };
	    return EmailValidator;
	}(SurveyValidator);
	_jsonobject.JsonObject.metaData.addClass("surveyvalidator", ["text"]);
	_jsonobject.JsonObject.metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () {
	    return new NumericValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("textvalidator", ["minLength:number"], function () {
	    return new TextValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () {
	    return new AnswerCountValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("regexvalidator", ["regex"], function () {
	    return new RegexValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("emailvalidator", [], function () {
	    return new EmailValidator();
	}, "surveyvalidator");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.__extends = __extends;
	function __extends(d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = __extends;
	}
	exports.__extends = __extends;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var ItemValue = exports.ItemValue = function () {
	    function ItemValue(value, text) {
	        if (text === void 0) {
	            text = null;
	        }
	        this.text = text;
	        this.value = value;
	    }
	    ItemValue.setData = function (items, values) {
	        items.length = 0;
	        for (var i = 0; i < values.length; i++) {
	            var value = values[i];
	            var item = new ItemValue(null);
	            if (typeof value.value !== 'undefined') {
	                var exception = null;
	                if (typeof value.getType !== 'undefined' && value.getType() == 'itemvalue') {
	                    value.itemValue = value.itemValue;
	                    item.itemText = value.itemText;
	                    exception = ItemValue.itemValueProp;
	                }
	                ItemValue.copyAttributes(value, item, exception);
	            } else {
	                item.value = value;
	            }
	            items.push(item);
	        }
	    };
	    ItemValue.getData = function (items) {
	        var result = new Array();
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item.hasText) {
	                result.push({ value: item.value, text: item.text });
	            } else {
	                result.push(item.value);
	            }
	        }
	        return result;
	    };
	    ItemValue.getItemByValue = function (items, val) {
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].value == val) return items[i];
	        }
	        return null;
	    };
	    ItemValue.copyAttributes = function (src, dest, exceptons) {
	        for (var key in src) {
	            if (typeof src[key] == 'function') continue;
	            if (exceptons && exceptons.indexOf(key) > -1) continue;
	            dest[key] = src[key];
	        }
	    };
	    ItemValue.prototype.getType = function () {
	        return "itemvalue";
	    };
	    Object.defineProperty(ItemValue.prototype, "value", {
	        get: function get() {
	            return this.itemValue;
	        },
	        set: function set(newValue) {
	            this.itemValue = newValue;
	            if (!this.itemValue) return;
	            var str = this.itemValue.toString();
	            var index = str.indexOf(ItemValue.Separator);
	            if (index > -1) {
	                this.itemValue = str.slice(0, index);
	                this.text = str.slice(index + 1);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "hasText", {
	        get: function get() {
	            return this.itemText ? true : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "text", {
	        get: function get() {
	            if (this.hasText) return this.itemText;
	            if (this.value) return this.value.toString();
	            return null;
	        },
	        set: function set(newText) {
	            this.itemText = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ItemValue.Separator = '|';
	    ItemValue.itemValueProp = ["text", "value", "hasText"];
	    return ItemValue;
	}();
	var Base = exports.Base = function () {
	    function Base() {}
	    Base.prototype.getType = function () {
	        throw new Error('This method is abstract');
	    };
	    return Base;
	}();
	var SurveyError = exports.SurveyError = function () {
	    function SurveyError() {}
	    SurveyError.prototype.getText = function () {
	        throw new Error('This method is abstract');
	    };
	    return SurveyError;
	}();
	var SurveyPageId = exports.SurveyPageId = "sq_page";
	var SurveyElement = exports.SurveyElement = function () {
	    function SurveyElement() {}
	    SurveyElement.ScrollElementToTop = function (elementId) {
	        if (!elementId) return false;
	        var el = document.getElementById(elementId);
	        if (!el || !el.scrollIntoView) return false;
	        var elemTop = el.getBoundingClientRect().top;
	        if (elemTop < 0) el.scrollIntoView();
	        return elemTop < 0;
	    };
	    SurveyElement.FocusElement = function (elementId) {
	        if (!elementId) return false;
	        var el = document.getElementById(elementId);
	        if (el) {
	            el.focus();
	            return true;
	        }
	        return false;
	    };
	    return SurveyElement;
	}();
	var Event = exports.Event = function () {
	    function Event() {}
	    Object.defineProperty(Event.prototype, "isEmpty", {
	        get: function get() {
	            return this.callbacks == null || this.callbacks.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Event.prototype.fire = function (sender, options) {
	        if (this.callbacks == null) return;
	        for (var i = 0; i < this.callbacks.length; i++) {
	            var callResult = this.callbacks[i](sender, options);
	        }
	    };
	    Event.prototype.add = function (func) {
	        if (this.callbacks == null) {
	            this.callbacks = new Array();
	        }
	        this.callbacks.push(func);
	    };
	    Event.prototype.remove = function (func) {
	        if (this.callbacks == null) return;
	        var index = this.callbacks.indexOf(func, 0);
	        if (index != undefined) {
	            this.callbacks.splice(index, 1);
	        }
	    };
	    return Event;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.CustomError = exports.ExceedSizeError = exports.RequreNumericError = exports.AnswerRequiredError = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var _base = __webpack_require__(4);
	
	var AnswerRequiredError = exports.AnswerRequiredError = function (_super) {
	    __extends(AnswerRequiredError, _super);
	    function AnswerRequiredError() {
	        _super.call(this);
	    }
	    AnswerRequiredError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("requiredError");
	    };
	    return AnswerRequiredError;
	}(_base.SurveyError);
	var RequreNumericError = exports.RequreNumericError = function (_super) {
	    __extends(RequreNumericError, _super);
	    function RequreNumericError() {
	        _super.call(this);
	    }
	    RequreNumericError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("numericError");
	    };
	    return RequreNumericError;
	}(_base.SurveyError);
	var ExceedSizeError = exports.ExceedSizeError = function (_super) {
	    __extends(ExceedSizeError, _super);
	    function ExceedSizeError(maxSize) {
	        _super.call(this);
	        this.maxSize = maxSize;
	    }
	    ExceedSizeError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("exceedMaxSize")["format"](this.getTextSize());
	    };
	    ExceedSizeError.prototype.getTextSize = function () {
	        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	        var fixed = [0, 0, 2, 3, 3];
	        if (this.maxSize == 0) return '0 Byte';
	        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
	        var value = this.maxSize / Math.pow(1024, i);
	        return value.toFixed(fixed[i]) + ' ' + sizes[i];
	    };
	    return ExceedSizeError;
	}(_base.SurveyError);
	var CustomError = exports.CustomError = function (_super) {
	    __extends(CustomError, _super);
	    function CustomError(text) {
	        _super.call(this);
	        this.text = text;
	    }
	    CustomError.prototype.getText = function () {
	        return this.text;
	    };
	    return CustomError;
	}(_base.SurveyError);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyLocalization = exports.surveyLocalization = {
	    currentLocale: "",
	    locales: {},
	    getString: function getString(strName) {
	        var loc = this.currentLocale ? this.locales[this.currentLocale] : surveyStrings;
	        if (!loc || !loc[strName]) loc = surveyStrings;
	        return loc[strName];
	    },
	    getLocales: function getLocales() {
	        var res = [];
	        res.push("");
	        for (var key in this.locales) {
	            res.push(key);
	        }
	        res.sort();
	        return res;
	    }
	};
	var surveyStrings = exports.surveyStrings = {
	    pagePrevText: "Previous",
	    pageNextText: "Next",
	    completeText: "Complete",
	    otherItemText: "Other (describe)",
	    progressText: "Page {0} of {1}",
	    emptySurvey: "There is no any visible page or visible question in the survey.",
	    completingSurvey: "Thank You for Completing the Survey!",
	    loadingSurvey: "Survey is loading from the server...",
	    optionsCaption: "Choose...",
	    requiredError: "Please answer the question.",
	    requiredInAllRowsError: "Please answer questions in all rows.",
	    numericError: "The value should be a numeric.",
	    textMinLength: "Please enter at least {0} symbols.",
	    minRowCountError: "Please fill at least {0} rows.",
	    minSelectError: "Please select at least {0} variants.",
	    maxSelectError: "Please select not more than {0} variants.",
	    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
	    numericMin: "The '{0}' should be equal or more than {1}",
	    numericMax: "The '{0}' should be equal or less than {1}",
	    invalidEmail: "Please enter a valid e-mail.",
	    urlRequestError: "The request return error '{0}'. {1}",
	    urlGetChoicesError: "The request returns empty data or the 'path' property is incorrect",
	    exceedMaxSize: "The file size should not exceed {0}.",
	    otherRequiredError: "Please enter the others value.",
	    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
	    addRow: "Add Row",
	    removeRow: "Remove"
	};
	surveyLocalization.locales["en"] = surveyStrings;
	if (!String.prototype["format"]) {
	    String.prototype["format"] = function () {
	        var args = arguments;
	        return this.replace(/{(\d+)}/g, function (match, number) {
	            return typeof args[number] != 'undefined' ? args[number] : match;
	        });
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var JsonObjectProperty = exports.JsonObjectProperty = function () {
	    function JsonObjectProperty(name) {
	        this.name = name;
	        this.typeValue = null;
	        this.choicesValue = null;
	        this.choicesfunc = null;
	        this.className = null;
	        this.classNamePart = null;
	        this.baseClassName = null;
	        this.defaultValue = null;
	        this.onGetValue = null;
	    }
	    Object.defineProperty(JsonObjectProperty.prototype, "type", {
	        get: function get() {
	            return this.typeValue ? this.typeValue : "string";
	        },
	        set: function set(value) {
	            this.typeValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
	        get: function get() {
	            return this.onGetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.isDefaultValue = function (value) {
	        return this.defaultValue ? this.defaultValue == value : !value;
	    };
	    JsonObjectProperty.prototype.getValue = function (obj) {
	        if (this.onGetValue) return this.onGetValue(obj);
	        return null;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
	        get: function get() {
	            return this.onSetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
	        if (this.onSetValue) {
	            this.onSetValue(obj, value, jsonConv);
	        }
	    };
	    JsonObjectProperty.prototype.getObjType = function (objType) {
	        if (!this.classNamePart) return objType;
	        return objType.replace(this.classNamePart, "");
	    };
	    JsonObjectProperty.prototype.getClassName = function (className) {
	        return this.classNamePart && className.indexOf(this.classNamePart) < 0 ? className + this.classNamePart : className;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
	        get: function get() {
	            if (this.choicesValue != null) return this.choicesValue;
	            if (this.choicesfunc != null) return this.choicesfunc();
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
	        this.choicesValue = value;
	        this.choicesfunc = valueFunc;
	    };
	    return JsonObjectProperty;
	}();
	var JsonMetadataClass = exports.JsonMetadataClass = function () {
	    function JsonMetadataClass(name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        this.name = name;
	        this.creator = creator;
	        this.parentName = parentName;
	        this.properties = null;
	        this.requiredProperties = null;
	        this.properties = new Array();
	        for (var i = 0; i < properties.length; i++) {
	            var prop = this.createProperty(properties[i]);
	            if (prop) {
	                this.properties.push(prop);
	            }
	        }
	    }
	    JsonMetadataClass.prototype.find = function (name) {
	        for (var i = 0; i < this.properties.length; i++) {
	            if (this.properties[i].name == name) return this.properties[i];
	        }
	        return null;
	    };
	    JsonMetadataClass.prototype.createProperty = function (propInfo) {
	        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
	        if (!propertyName) return;
	        var propertyType = null;
	        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
	        if (typeIndex > -1) {
	            propertyType = propertyName.substring(typeIndex + 1);
	            propertyName = propertyName.substring(0, typeIndex);
	        }
	        propertyName = this.getPropertyName(propertyName);
	        var prop = new JsonObjectProperty(propertyName);
	        if (propertyType) {
	            prop.type = propertyType;
	        }
	        if ((typeof propInfo === "undefined" ? "undefined" : _typeof(propInfo)) === "object") {
	            if (propInfo.type) {
	                prop.type = propInfo.type;
	            }
	            if (propInfo.default) {
	                prop.defaultValue = propInfo.default;
	            }
	            if (propInfo.isRequired) {
	                this.makePropertyRequired(prop.name);
	            }
	            if (propInfo.choices) {
	                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
	                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
	                prop.setChoices(choicesValue, choicesFunc);
	            }
	            if (propInfo.onGetValue) {
	                prop.onGetValue = propInfo.onGetValue;
	            }
	            if (propInfo.onSetValue) {
	                prop.onSetValue = propInfo.onSetValue;
	            }
	            if (propInfo.className) {
	                prop.className = propInfo.className;
	            }
	            if (propInfo.baseClassName) {
	                prop.baseClassName = propInfo.baseClassName;
	            }
	            if (propInfo.classNamePart) {
	                prop.classNamePart = propInfo.classNamePart;
	            }
	        }
	        return prop;
	    };
	    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
	        if (propertyName.length == 0 || propertyName[0] != JsonMetadataClass.requiredSymbol) return propertyName;
	        propertyName = propertyName.slice(1);
	        this.makePropertyRequired(propertyName);
	        return propertyName;
	    };
	    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
	        if (!this.requiredProperties) {
	            this.requiredProperties = new Array();
	        }
	        this.requiredProperties.push(propertyName);
	    };
	    JsonMetadataClass.requiredSymbol = '!';
	    JsonMetadataClass.typeSymbol = ':';
	    return JsonMetadataClass;
	}();
	var JsonMetadata = exports.JsonMetadata = function () {
	    function JsonMetadata() {
	        this.classes = {};
	        this.childrenClasses = {};
	        this.classProperties = {};
	        this.classRequiredProperties = {};
	    }
	    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
	        this.classes[name] = metaDataClass;
	        if (parentName) {
	            var children = this.childrenClasses[parentName];
	            if (!children) {
	                this.childrenClasses[parentName] = [];
	            }
	            this.childrenClasses[parentName].push(metaDataClass);
	        }
	        return metaDataClass;
	    };
	    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
	        var metaDataClass = this.findClass(name);
	        if (metaDataClass) {
	            metaDataClass.creator = creator;
	        }
	    };
	    JsonMetadata.prototype.getProperties = function (name) {
	        var properties = this.classProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillProperties(name, properties);
	            this.classProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.createClass = function (name) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return null;
	        return metaDataClass.creator();
	    };
	    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
	        if (canBeCreated === void 0) {
	            canBeCreated = false;
	        }
	        var result = [];
	        this.fillChildrenClasses(name, canBeCreated, result);
	        return result;
	    };
	    JsonMetadata.prototype.getRequiredProperties = function (name) {
	        var properties = this.classRequiredProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillRequiredProperties(name, properties);
	            this.classRequiredProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
	        var metaDataClass = this.findClass(className);
	        if (!metaDataClass) return;
	        var property = metaDataClass.createProperty(propertyInfo);
	        if (property) {
	            this.addPropertyToClass(metaDataClass, property);
	            this.emptyClassPropertiesHash(metaDataClass);
	        }
	    };
	    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
	        var metaDataClass = this.findClass(className);
	        if (!metaDataClass) return false;
	        var property = metaDataClass.find(propertyName);
	        if (property) {
	            this.removePropertyFromClass(metaDataClass, property);
	            this.emptyClassPropertiesHash(metaDataClass);
	        }
	    };
	    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
	        if (metaDataClass.find(property.name) != null) return;
	        metaDataClass.properties.push(property);
	    };
	    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
	        var index = metaDataClass.properties.indexOf(property);
	        if (index < 0) return;
	        metaDataClass.properties.splice(index, 1);
	        if (metaDataClass.requiredProperties) {
	            index = metaDataClass.requiredProperties.indexOf(property.name);
	            if (index >= 0) {
	                metaDataClass.requiredProperties.splice(index, 1);
	            }
	        }
	    };
	    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
	        this.classProperties[metaDataClass.name] = null;
	        var childClasses = this.getChildrenClasses(metaDataClass.name);
	        for (var i = 0; i < childClasses.length; i++) {
	            this.classProperties[childClasses[i].name] = null;
	        }
	    };
	    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
	        var children = this.childrenClasses[name];
	        if (!children) return;
	        for (var i = 0; i < children.length; i++) {
	            if (!canBeCreated || children[i].creator) {
	                result.push(children[i]);
	            }
	            this.fillChildrenClasses(children[i].name, canBeCreated, result);
	        }
	    };
	    JsonMetadata.prototype.findClass = function (name) {
	        return this.classes[name];
	    };
	    JsonMetadata.prototype.fillProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.parentName) {
	            this.fillProperties(metaDataClass.parentName, list);
	        }
	        for (var i = 0; i < metaDataClass.properties.length; i++) {
	            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
	        }
	    };
	    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
	        var index = -1;
	        for (var i = 0; i < endIndex; i++) {
	            if (list[i].name == property.name) {
	                index = i;
	                break;
	            }
	        }
	        if (index < 0) {
	            list.push(property);
	        } else {
	            list[index] = property;
	        }
	    };
	    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.requiredProperties) {
	            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
	        }
	        if (metaDataClass.parentName) {
	            this.fillRequiredProperties(metaDataClass.parentName, list);
	        }
	    };
	    return JsonMetadata;
	}();
	var JsonError = exports.JsonError = function () {
	    function JsonError(type, message) {
	        this.type = type;
	        this.message = message;
	        this.description = "";
	        this.at = -1;
	    }
	    JsonError.prototype.getFullDescription = function () {
	        return this.message + (this.description ? "\n" + this.description : "");
	    };
	    return JsonError;
	}();
	var JsonUnknownPropertyError = exports.JsonUnknownPropertyError = function (_super) {
	    __extends(JsonUnknownPropertyError, _super);
	    function JsonUnknownPropertyError(propertyName, className) {
	        _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.");
	        this.propertyName = propertyName;
	        this.className = className;
	        var properties = JsonObject.metaData.getProperties(className);
	        if (properties) {
	            this.description = "The list of available properties are: ";
	            for (var i = 0; i < properties.length; i++) {
	                if (i > 0) this.description += ", ";
	                this.description += properties[i].name;
	            }
	            this.description += '.';
	        }
	    }
	    return JsonUnknownPropertyError;
	}(JsonError);
	var JsonMissingTypeErrorBase = exports.JsonMissingTypeErrorBase = function (_super) {
	    __extends(JsonMissingTypeErrorBase, _super);
	    function JsonMissingTypeErrorBase(baseClassName, type, message) {
	        _super.call(this, type, message);
	        this.baseClassName = baseClassName;
	        this.type = type;
	        this.message = message;
	        this.description = "The following types are available: ";
	        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
	        for (var i = 0; i < types.length; i++) {
	            if (i > 0) this.description += ", ";
	            this.description += "'" + types[i].name + "'";
	        }
	        this.description += ".";
	    }
	    return JsonMissingTypeErrorBase;
	}(JsonError);
	var JsonMissingTypeError = exports.JsonMissingTypeError = function (_super) {
	    __extends(JsonMissingTypeError, _super);
	    function JsonMissingTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonMissingTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonIncorrectTypeError = exports.JsonIncorrectTypeError = function (_super) {
	    __extends(JsonIncorrectTypeError, _super);
	    function JsonIncorrectTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonIncorrectTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonRequiredPropertyError = exports.JsonRequiredPropertyError = function (_super) {
	    __extends(JsonRequiredPropertyError, _super);
	    function JsonRequiredPropertyError(propertyName, className) {
	        _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.");
	        this.propertyName = propertyName;
	        this.className = className;
	    }
	    return JsonRequiredPropertyError;
	}(JsonError);
	var JsonObject = exports.JsonObject = function () {
	    function JsonObject() {
	        this.errors = new Array();
	    }
	    Object.defineProperty(JsonObject, "metaData", {
	        get: function get() {
	            return JsonObject.metaDataValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObject.prototype.toJsonObject = function (obj) {
	        return this.toJsonObjectCore(obj, null);
	    };
	    JsonObject.prototype.toObject = function (jsonObj, obj) {
	        if (!jsonObj) return;
	        var properties = null;
	        if (obj.getType) {
	            properties = JsonObject.metaData.getProperties(obj.getType());
	        }
	        if (!properties) return;
	        for (var key in jsonObj) {
	            if (key == JsonObject.typePropertyName) continue;
	            if (key == JsonObject.positionPropertyName) {
	                obj[key] = jsonObj[key];
	                continue;
	            }
	            var property = this.findProperty(properties, key);
	            if (!property) {
	                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
	                continue;
	            }
	            this.valueToObj(jsonObj[key], obj, key, property);
	        }
	    };
	    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
	        if (!obj.getType) return obj;
	        var result = {};
	        if (property != null && !property.className) {
	            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
	        }
	        var properties = JsonObject.metaData.getProperties(obj.getType());
	        for (var i = 0; i < properties.length; i++) {
	            this.valueToJson(obj, result, properties[i]);
	        }
	        return result;
	    };
	    JsonObject.prototype.valueToJson = function (obj, result, property) {
	        var value = null;
	        if (property.hasToUseGetValue) {
	            value = property.getValue(obj);
	        } else {
	            value = obj[property.name];
	        }
	        if (value === undefined || value === null) return;
	        if (property.isDefaultValue(value)) return;
	        if (this.isValueArray(value)) {
	            var arrValue = [];
	            for (var i = 0; i < value.length; i++) {
	                arrValue.push(this.toJsonObjectCore(value[i], property));
	            }
	            value = arrValue.length > 0 ? arrValue : null;
	        } else {
	            value = this.toJsonObjectCore(value, property);
	        }
	        if (!property.isDefaultValue(value)) {
	            result[property.name] = value;
	        }
	    };
	    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
	        if (value == null) return;
	        if (property != null && property.hasToUseSetValue) {
	            property.setValue(obj, value, this);
	            return;
	        }
	        if (this.isValueArray(value)) {
	            this.valueToArray(value, obj, key, property);
	            return;
	        }
	        var newObj = this.createNewObj(value, property);
	        if (newObj.newObj) {
	            this.toObject(value, newObj.newObj);
	            value = newObj.newObj;
	        }
	        if (!newObj.error) {
	            obj[key] = value;
	        }
	    };
	    JsonObject.prototype.isValueArray = function (value) {
	        return value && value.constructor.toString().indexOf("Array") > -1;
	    };
	    JsonObject.prototype.createNewObj = function (value, property) {
	        var result = { newObj: null, error: null };
	        var className = value[JsonObject.typePropertyName];
	        if (!className && property != null && property.className) {
	            className = property.className;
	        }
	        className = property.getClassName(className);
	        result.newObj = className ? JsonObject.metaData.createClass(className) : null;
	        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
	        return result;
	    };
	    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
	        var error = null;
	        if (newObj) {
	            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
	            if (requiredProperties) {
	                for (var i = 0; i < requiredProperties.length; i++) {
	                    if (!value[requiredProperties[i]]) {
	                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
	                        break;
	                    }
	                }
	            }
	        } else {
	            if (property.baseClassName) {
	                if (!className) {
	                    error = new JsonMissingTypeError(property.name, property.baseClassName);
	                } else {
	                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
	                }
	            }
	        }
	        if (error) {
	            this.addNewError(error, value);
	        }
	        return error;
	    };
	    JsonObject.prototype.addNewError = function (error, jsonObj) {
	        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
	            error.at = jsonObj[JsonObject.positionPropertyName].start;
	        }
	        this.errors.push(error);
	    };
	    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
	        if (!this.isValueArray(obj[key])) {
	            obj[key] = [];
	        }
	        for (var i = 0; i < value.length; i++) {
	            var newValue = this.createNewObj(value[i], property);
	            if (newValue.newObj) {
	                obj[key].push(newValue.newObj);
	                this.toObject(value[i], newValue.newObj);
	            } else {
	                if (!newValue.error) {
	                    obj[key].push(value[i]);
	                }
	            }
	        }
	    };
	    JsonObject.prototype.findProperty = function (properties, key) {
	        if (!properties) return null;
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].name == key) return properties[i];
	        }
	        return null;
	    };
	    JsonObject.typePropertyName = "type";
	    JsonObject.positionPropertyName = "pos";
	    JsonObject.metaDataValue = new JsonMetadata();
	    return JsonObject;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.ChoicesRestfull = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var ChoicesRestfull = exports.ChoicesRestfull = function (_super) {
	    __extends(ChoicesRestfull, _super);
	    function ChoicesRestfull() {
	        _super.call(this);
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	        this.error = null;
	    }
	    ChoicesRestfull.prototype.run = function () {
	        if (!this.url || !this.getResultCallback) return;
	        this.error = null;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', this.url);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            if (xhr.status == 200) {
	                self.onLoad(JSON.parse(xhr.response));
	            } else {
	                self.onError(xhr.statusText, xhr.responseText);
	            }
	        };
	        xhr.send();
	    };
	    ChoicesRestfull.prototype.getType = function () {
	        return "choicesByUrl";
	    };
	    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
	        get: function get() {
	            return !this.url && !this.path && !this.valueName && !this.titleName;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ChoicesRestfull.prototype.setData = function (json) {
	        this.clear();
	        if (json.url) this.url = json.url;
	        if (json.path) this.path = json.path;
	        if (json.valueName) this.valueName = json.valueName;
	        if (json.titleName) this.titleName = json.titleName;
	    };
	    ChoicesRestfull.prototype.clear = function () {
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	    };
	    ChoicesRestfull.prototype.onLoad = function (result) {
	        var items = [];
	        result = this.getResultAfterPath(result);
	        if (result && result["length"]) {
	            for (var i = 0; i < result.length; i++) {
	                var itemValue = result[i];
	                if (!itemValue) continue;
	                var value = this.getValue(itemValue);
	                var title = this.getTitle(itemValue);
	                items.push(new _base.ItemValue(value, title));
	            }
	        } else {
	            this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlGetChoicesError"));
	        }
	        this.getResultCallback(items);
	    };
	    ChoicesRestfull.prototype.onError = function (status, response) {
	        this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlRequestError")["format"](status, response));
	        this.getResultCallback([]);
	    };
	    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
	        if (!result) return result;
	        if (!this.path) return result;
	        var pathes = this.getPathes();
	        for (var i = 0; i < pathes.length; i++) {
	            result = result[pathes[i]];
	            if (!result) return null;
	        }
	        return result;
	    };
	    ChoicesRestfull.prototype.getPathes = function () {
	        var pathes = [];
	        if (this.path.indexOf(';') > -1) {
	            pathes = this.path.split(';');
	        } else {
	            pathes = this.path.split(',');
	        }
	        if (pathes.length == 0) pathes.push(this.path);
	        return pathes;
	    };
	    ChoicesRestfull.prototype.getValue = function (item) {
	        if (this.valueName) return item[this.valueName];
	        var len = Object.keys(item).length;
	        if (len < 1) return null;
	        return item[Object.keys(item)[0]];
	    };
	    ChoicesRestfull.prototype.getTitle = function (item) {
	        if (!this.titleName) return null;
	        return item[this.titleName];
	    };
	    return ChoicesRestfull;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () {
	    return new ChoicesRestfull();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionRunner = exports.ConditionNode = exports.Condition = undefined;
	
	var _conditionsParser = __webpack_require__(10);
	
	var Condition = exports.Condition = function () {
	    function Condition() {
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Condition, "operators", {
	        get: function get() {
	            if (Condition.operatorsValue != null) return Condition.operatorsValue;
	            Condition.operatorsValue = {
	                empty: function empty(left, right) {
	                    return !left;
	                },
	                notempty: function notempty(left, right) {
	                    return !!left;
	                },
	                equal: function equal(left, right) {
	                    return left == right;
	                },
	                notequal: function notequal(left, right) {
	                    return left != right;
	                },
	                contains: function contains(left, right) {
	                    return left && left["indexOf"] && left.indexOf(right) > -1;
	                },
	                notcontains: function notcontains(left, right) {
	                    return !left || !left["indexOf"] || left.indexOf(right) == -1;
	                },
	                greater: function greater(left, right) {
	                    return left > right;
	                },
	                less: function less(left, right) {
	                    return left < right;
	                },
	                greaterorequal: function greaterorequal(left, right) {
	                    return left >= right;
	                },
	                lessorequal: function lessorequal(left, right) {
	                    return left <= right;
	                }
	            };
	            return Condition.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Condition.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Condition.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Condition.prototype.perform = function (left, right) {
	        if (left === void 0) {
	            left = null;
	        }
	        if (right === void 0) {
	            right = null;
	        }
	        if (!left) left = this.left;
	        if (!right) right = this.right;
	        return Condition.operators[this.operator](this.getPureValue(left), this.getPureValue(right));
	    };
	    Condition.prototype.getPureValue = function (val) {
	        if (!val || typeof val != "string") return val;
	        var str = "";
	        if (val.length > 0 && (val[0] == "'" || val[0] == '"')) val = val.substr(1);
	        var len = val.length;
	        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"')) val = val.substr(0, len - 1);
	        return val;
	    };
	    Condition.operatorsValue = null;
	    return Condition;
	}();
	var ConditionNode = exports.ConditionNode = function () {
	    function ConditionNode() {
	        this.connectiveValue = "and";
	        this.children = [];
	    }
	    Object.defineProperty(ConditionNode.prototype, "connective", {
	        get: function get() {
	            return this.connectiveValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (value == "&" || value == "&&") value = "and";
	            if (value == "|" || value == "||") value = "or";
	            if (value != "and" && value != "or") return;
	            this.connectiveValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
	        get: function get() {
	            return this.children.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionNode.prototype.clear = function () {
	        this.children = [];
	        this.connective = "and";
	    };
	    return ConditionNode;
	}();
	var ConditionRunner = exports.ConditionRunner = function () {
	    function ConditionRunner(expression) {
	        this.root = new ConditionNode();
	        this.expression = expression;
	    }
	    Object.defineProperty(ConditionRunner.prototype, "expression", {
	        get: function get() {
	            return this.expressionValue;
	        },
	        set: function set(value) {
	            if (this.expression == value) return;
	            this.expressionValue = value;
	            new _conditionsParser.ConditionsParser().parse(this.expressionValue, this.root);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionRunner.prototype.run = function (values) {
	        this.values = values;
	        return this.runNode(this.root);
	    };
	    ConditionRunner.prototype.runNode = function (node) {
	        var onFirstFail = node.connective == "and";
	        for (var i = 0; i < node.children.length; i++) {
	            var res = this.runNodeCondition(node.children[i]);
	            if (!res && onFirstFail) return false;
	            if (res && !onFirstFail) return true;
	        }
	        return onFirstFail;
	    };
	    ConditionRunner.prototype.runNodeCondition = function (value) {
	        if (!value) return false;
	        if (value["children"]) return this.runNode(value);
	        if (value["left"]) return this.runCondition(value);
	        return false;
	    };
	    ConditionRunner.prototype.runCondition = function (condition) {
	        var left = condition.left;
	        var name = this.getValueName(left);
	        if (name) {
	            if (!(name in this.values)) return false;
	            left = this.values[name];
	        }
	        var right = condition.right;
	        name = this.getValueName(right);
	        if (name) {
	            if (!(name in this.values)) return false;
	            right = this.values[name];
	        }
	        return condition.perform(left, right);
	    };
	    ConditionRunner.prototype.getValueName = function (nodeValue) {
	        if (!nodeValue) return null;
	        if (typeof nodeValue !== 'string') return null;
	        if (nodeValue.length < 3 || nodeValue[0] != '{' || nodeValue[nodeValue.length - 1] != '}') return null;
	        return nodeValue.substr(1, nodeValue.length - 2);
	    };
	    return ConditionRunner;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionsParser = undefined;
	
	var _conditions = __webpack_require__(9);
	
	var ConditionsParser = exports.ConditionsParser = function () {
	    function ConditionsParser() {}
	    ConditionsParser.prototype.parse = function (text, root) {
	        this.text = text;
	        this.root = root;
	        this.root.clear();
	        this.at = 0;
	        this.length = this.text.length;
	        var res = this.parseText();
	        return res;
	    };
	    ConditionsParser.prototype.toString = function (root) {
	        this.root = root;
	        return this.nodeToString(root);
	    };
	    ConditionsParser.prototype.toStringCore = function (value) {
	        if (!value) return "";
	        if (value["children"]) return this.nodeToString(value);
	        if (value["left"]) return this.conditionToString(value);
	        return "";
	    };
	    ConditionsParser.prototype.nodeToString = function (node) {
	        if (node.isEmpty) return "";
	        var res = "";
	        for (var i = 0; i < node.children.length; i++) {
	            var nodeText = this.toStringCore(node.children[i]);
	            if (nodeText) {
	                if (res) res += ' ' + node.connective + ' ';
	                res += nodeText;
	            }
	        }
	        if (node != this.root && node.children.length > 1) {
	            res = '(' + res + ')';
	        }
	        return res;
	    };
	    ConditionsParser.prototype.conditionToString = function (condition) {
	        if (!condition.right || !condition.operator) return "";
	        var left = condition.left;
	        if (left && !this.isNumeric(left)) left = "'" + left + "'";
	        var res = left + ' ' + this.operationToString(condition.operator);
	        if (this.isNoRightOperation(condition.operator)) return res;
	        var right = condition.right;
	        if (right && !this.isNumeric(right)) right = "'" + right + "'";
	        return res + ' ' + right;
	    };
	    ConditionsParser.prototype.operationToString = function (op) {
	        if (op == "equal") return "=";
	        if (op == "notequal") return "!=";
	        if (op == "greater") return ">";
	        if (op == "less") return "<";
	        if (op == "greaterorequal") return ">=";
	        if (op == "lessorequal") return "<=";
	        return op;
	    };
	    ConditionsParser.prototype.isNumeric = function (value) {
	        var val = parseFloat(value);
	        if (isNaN(val)) return false;
	        return isFinite(val);
	    };
	    ConditionsParser.prototype.parseText = function () {
	        this.node = this.root;
	        this.expressionNodes = [];
	        this.expressionNodes.push(this.node);
	        var res = this.readConditions();
	        return res && this.at >= this.length;
	    };
	    ConditionsParser.prototype.readConditions = function () {
	        var res = this.readCondition();
	        if (!res) return res;
	        var connective = this.readConnective();
	        if (connective) {
	            this.addConnective(connective);
	            return this.readConditions();
	        }
	        return true;
	    };
	    ConditionsParser.prototype.readCondition = function () {
	        if (!this.readExpression()) return false;
	        var left = this.readString();
	        if (!left) return false;
	        var op = this.readOperator();
	        if (!op) return false;
	        var c = new _conditions.Condition();
	        c.left = left;
	        c.operator = op;
	        if (!this.isNoRightOperation(op)) {
	            var right = this.readString();
	            if (!right) return false;
	            c.right = right;
	        }
	        this.addCondition(c);
	        return true;
	    };
	    ConditionsParser.prototype.readExpression = function () {
	        this.skip();
	        if (this.at >= this.length || this.ch != '(') return true;
	        this.at++;
	        this.pushExpression();
	        var res = this.readConditions();
	        if (res) {
	            this.skip();
	            res = this.ch == ')';
	            this.at++;
	            this.popExpression();
	        }
	        return res;
	    };
	    Object.defineProperty(ConditionsParser.prototype, "ch", {
	        get: function get() {
	            return this.text.charAt(this.at);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionsParser.prototype.skip = function () {
	        while (this.at < this.length && this.isSpace(this.ch)) {
	            this.at++;
	        }
	    };
	    ConditionsParser.prototype.isSpace = function (c) {
	        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
	    };
	    ConditionsParser.prototype.isQuotes = function (c) {
	        return c == "'" || c == '"';
	    };
	    ConditionsParser.prototype.isOperatorChar = function (c) {
	        return c == '>' || c == '<' || c == '=' || c == '!';
	    };
	    ConditionsParser.prototype.isBrackets = function (c) {
	        return c == '(' || c == ')';
	    };
	    ConditionsParser.prototype.readString = function () {
	        this.skip();
	        if (this.at >= this.length) return null;
	        var start = this.at;
	        var hasQuotes = this.isQuotes(this.ch);
	        if (hasQuotes) this.at++;
	        var isFirstOpCh = this.isOperatorChar(this.ch);
	        while (this.at < this.length) {
	            if (!hasQuotes && this.isSpace(this.ch)) break;
	            if (this.isQuotes(this.ch)) {
	                if (hasQuotes) this.at++;
	                break;
	            }
	            if (!hasQuotes) {
	                if (isFirstOpCh != this.isOperatorChar(this.ch)) break;
	                if (this.isBrackets(this.ch)) break;
	            }
	            this.at++;
	        }
	        if (this.at <= start) return null;
	        var res = this.text.substr(start, this.at - start);
	        if (res) {
	            if (res.length > 1 && this.isQuotes(res[0])) {
	                var len = res.length - 1;
	                if (this.isQuotes(res[res.length - 1])) len--;
	                res = res.substr(1, len);
	            }
	        }
	        return res;
	    };
	    ConditionsParser.prototype.isNoRightOperation = function (op) {
	        return op == "empty" || op == "notempty";
	    };
	    ConditionsParser.prototype.readOperator = function () {
	        var op = this.readString();
	        if (!op) return null;
	        op = op.toLowerCase();
	        if (op == '>') op = "greater";
	        if (op == '<') op = "less";
	        if (op == '>=' || op == '=>') op = "greaterorequal";
	        if (op == '<=' || op == '=<') op = "lessorequal";
	        if (op == '=' || op == '==') op = "equal";
	        if (op == '<>' || op == '!=') op = "notequal";
	        if (op == 'contain') op = "contains";
	        if (op == 'notcontain') op = "notcontains";
	        return op;
	    };
	    ConditionsParser.prototype.readConnective = function () {
	        var con = this.readString();
	        if (!con) return null;
	        con = con.toLowerCase();
	        if (con == "&" || con == "&&") con = "and";
	        if (con == "|" || con == "||") con = "or";
	        if (con != "and" && con != "or") con = null;
	        return con;
	    };
	    ConditionsParser.prototype.pushExpression = function () {
	        var node = new _conditions.ConditionNode();
	        this.expressionNodes.push(node);
	        this.node = node;
	    };
	    ConditionsParser.prototype.popExpression = function () {
	        var node = this.expressionNodes.pop();
	        this.node = this.expressionNodes[this.expressionNodes.length - 1];
	        this.node.children.push(node);
	    };
	    ConditionsParser.prototype.addCondition = function (c) {
	        this.node.children.push(c);
	    };
	    ConditionsParser.prototype.addConnective = function (con) {
	        if (this.node.children.length < 2) {
	            this.node.connective = con;
	        } else {
	            if (this.node.connective != con) {
	                var oldCon = this.node.connective;
	                var oldChildren = this.node.children;
	                this.node.clear();
	                this.node.connective = con;
	                var oldNode = new _conditions.ConditionNode();
	                oldNode.connective = oldCon;
	                oldNode.children = oldChildren;
	                this.node.children.push(oldNode);
	                var newNode = new _conditions.ConditionNode();
	                this.node.children.push(newNode);
	                this.node = newNode;
	            }
	        }
	    };
	    return ConditionsParser;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModelBase = exports.MatrixDropdownRowModelBase = exports.MatrixDropdownCell = exports.MatrixDropdownColumn = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownColumn = exports.MatrixDropdownColumn = function (_super) {
	    __extends(MatrixDropdownColumn, _super);
	    function MatrixDropdownColumn(name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.choicesValue = [];
	        this.isRequired = false;
	        this.hasOther = false;
	        this.minWidth = "";
	        this.cellType = "default";
	        this.colCountValue = -1;
	    }
	    MatrixDropdownColumn.prototype.getType = function () {
	        return "matrixdropdowncolumn";
	    };
	    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < -1 || value > 4) return;
	            this.colCountValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownColumn;
	}(_base.Base);
	var MatrixDropdownCell = exports.MatrixDropdownCell = function () {
	    function MatrixDropdownCell(column, row, data) {
	        this.column = column;
	        this.row = row;
	        this.questionValue = data.createQuestion(this.row, this.column);
	        this.questionValue.setData(row);
	    }
	    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
	        get: function get() {
	            return this.questionValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
	        get: function get() {
	            return this.question.value;
	        },
	        set: function set(value) {
	            this.question.value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownCell;
	}();
	var MatrixDropdownRowModelBase = exports.MatrixDropdownRowModelBase = function () {
	    function MatrixDropdownRowModelBase(data, value) {
	        this.rowValues = {};
	        this.rowComments = {};
	        this.isSettingValue = false;
	        this.cells = [];
	        this.data = data;
	        this.value = value;
	        this.buildCells();
	    }
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
	        get: function get() {
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
	        get: function get() {
	            return this.rowValues;
	        },
	        set: function set(value) {
	            this.isSettingValue = true;
	            this.rowValues = {};
	            if (value != null) {
	                for (var key in value) {
	                    this.rowValues[key] = value[key];
	                }
	            }
	            for (var i = 0; i < this.cells.length; i++) {
	                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
	            }
	            this.isSettingValue = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
	        return this.rowValues[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
	        if (this.isSettingValue) return;
	        if (newValue === "") newValue = null;
	        if (newValue != null) {
	            this.rowValues[name] = newValue;
	        } else {
	            delete this.rowValues[name];
	        }
	        this.data.onRowChanged(this, this.value);
	    };
	    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
	        return this.rowComments[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
	        this.rowComments[name] = newValue;
	    };
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
	        get: function get() {
	            var val = this.value;
	            if (!val) return true;
	            for (var key in val) {
	                return false;
	            }return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.buildCells = function () {
	        var columns = this.data.columns;
	        for (var i = 0; i < columns.length; i++) {
	            var column = columns[i];
	            this.cells.push(this.createCell(column));
	        }
	    };
	    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
	        return new MatrixDropdownCell(column, this, this.data);
	    };
	    return MatrixDropdownRowModelBase;
	}();
	var QuestionMatrixDropdownModelBase = exports.QuestionMatrixDropdownModelBase = function (_super) {
	    __extends(QuestionMatrixDropdownModelBase, _super);
	    function QuestionMatrixDropdownModelBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.choicesValue = [];
	        this.isRowChanging = false;
	        this.cellTypeValue = "dropdown";
	        this.columnColCountValue = 0;
	        this.columnMinWidth = "";
	        this.horizontalScroll = false;
	    }
	    QuestionMatrixDropdownModelBase.prototype.getType = function () {
	        return "matrixdropdownbase";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(value) {
	            this.columnsValue = value;
	            this.fireCallback(this.columnsChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
	        get: function get() {
	            return this.cellTypeValue;
	        },
	        set: function set(newValue) {
	            if (this.cellType == newValue) return;
	            this.cellTypeValue = newValue;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
	        get: function get() {
	            return this.columnColCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.columnColCountValue = value;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.getColumnTitle = function (column) {
	        var result = column.title;
	        if (column.isRequired && this.survey) {
	            var requireText = this.survey.requiredText;
	            if (requireText) requireText += " ";
	            result = requireText + result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
	        return column.minWidth ? column.minWidth : this.columnMinWidth;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var column = new MatrixDropdownColumn(name, title);
	        this.columnsValue.push(column);
	        return column;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
	        get: function get() {
	            this.generatedVisibleRows = this.generateRows();
	            return this.generatedVisibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.generateRows = function () {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createMatrixRow = function (name, text, value) {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) {
	        return !curValue ? {} : curValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
	        if (!result && create) {
	            result = {};
	            questionValue[row.rowName] = result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	            var row = this.generatedVisibleRows[i];
	            this.generatedVisibleRows[i].value = this.getRowValue(row, val);
	        }
	        this.isRowChanging = false;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        var errosInColumns = this.hasErrorInColumns(fireCallback);
	        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
	        if (!this.generatedVisibleRows) return false;
	        var res = false;
	        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var cells = this.generatedVisibleRows[i].cells;
	                res = cells && cells[colIndex] && cells[colIndex].question && cells[colIndex].question.hasErrors(fireCallback) || res;
	            }
	        }
	        return res;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
	        var question = this.getFirstCellQuestion(false);
	        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
	        var question = this.getFirstCellQuestion(true);
	        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
	        if (!this.generatedVisibleRows) return null;
	        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	            var cells = this.generatedVisibleRows[i].cells;
	            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
	                if (!onError) return cells[colIndex].question;
	                if (cells[colIndex].question.currentErrorCount > 0) return cells[colIndex].question;
	            }
	        }
	        return null;
	    };
	    //IMatrixDropdownData
	    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
	        var question = this.createQuestionCore(row, column);
	        question.name = column.name;
	        question.isRequired = column.isRequired;
	        question.hasOther = column.hasOther;
	        if (column.hasOther) {
	            if (question instanceof _question_baseselect.QuestionSelectBase) {
	                question.storeOthersAsComment = false;
	            }
	        }
	        return question;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
	        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
	        var name = this.getQuestionName(row, column);
	        if (cellType == "checkbox") return this.createCheckbox(name, column);
	        if (cellType == "radiogroup") return this.createRadiogroup(name, column);
	        if (cellType == "text") return this.createText(name, column);
	        if (cellType == "comment") return this.createComment(name, column);
	        return this.createDropdown(name, column);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getQuestionName = function (row, column) {
	        return row.rowName + "_" + column.name;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
	        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
	        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createDropdown = function (name, column) {
	        var q = this.createCellQuestion("dropdown", name);
	        q.choices = this.getColumnChoices(column);
	        q.optionsCaption = this.getColumnOptionsCaption(column);
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCheckbox = function (name, column) {
	        var q = this.createCellQuestion("checkbox", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createRadiogroup = function (name, column) {
	        var q = this.createCellQuestion("radiogroup", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createText = function (name, column) {
	        return this.createCellQuestion("text", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createComment = function (name, column) {
	        return this.createCellQuestion("comment", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
	        return _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
	        delete newValue[row.rowName];
	        return Object.keys(newValue).length == 0 ? null : newValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, newRowValue) {
	        var newValue = this.createNewValue(this.value);
	        var rowValue = this.getRowValue(row, newValue, true);
	        for (var key in rowValue) {
	            delete rowValue[key];
	        }if (newRowValue) {
	            newRowValue = JSON.parse(JSON.stringify(newRowValue));
	            for (var key in newRowValue) {
	                rowValue[key] = newRowValue[key];
	            }
	        }
	        if (Object.keys(rowValue).length == 0) {
	            newValue = this.deleteRowValue(newValue, row);
	        }
	        this.isRowChanging = true;
	        this.setNewValue(newValue);
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixDropdownModelBase;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, "optionsCaption", { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth"], function () {
	    return new MatrixDropdownColumn("");
	});
	_jsonobject.JsonObject.metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" }, "horizontalScroll:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }, { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () {
	    return new QuestionMatrixDropdownModelBase("");
	}, "question");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.Question = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionbase = __webpack_require__(13);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _validator = __webpack_require__(2);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var Question = exports.Question = function (_super) {
	    __extends(Question, _super);
	    function Question(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.titleValue = null;
	        this.isRequiredValue = false;
	        this.hasCommentValue = false;
	        this.hasOtherValue = false;
	        this.commentTextValue = "";
	        this.errors = [];
	        this.validators = new Array();
	        this.isValueChangedInSurvey = false;
	    }
	    Object.defineProperty(Question.prototype, "hasTitle", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasInput", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "inputId", {
	        get: function get() {
	            return this.id + "i";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newValue) {
	            this.titleValue = newValue;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "processedTitle", {
	        get: function get() {
	            return this.survey != null ? this.survey.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "fullTitle", {
	        get: function get() {
	            if (this.survey && this.survey.questionTitleTemplate) {
	                if (!this.textPreProcessor) {
	                    var self = this;
	                    this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	                    this.textPreProcessor.onHasValue = function (name) {
	                        return self.canProcessedTextValues(name.toLowerCase());
	                    };
	                    this.textPreProcessor.onProcess = function (name) {
	                        return self.getProcessedTextValue(name);
	                    };
	                }
	                return this.textPreProcessor.process(this.survey.questionTitleTemplate);
	            }
	            var requireText = this.requiredText;
	            if (requireText) requireText += " ";
	            var no = this.no;
	            if (no) no += ". ";
	            return no + requireText + this.processedTitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.focus = function (onError) {
	        if (onError === void 0) {
	            onError = false;
	        }
	        _base.SurveyElement.ScrollElementToTop(this.id);
	        var id = !onError ? this.getFirstInputElementId() : this.getFirstErrorInputElementId();
	        if (_base.SurveyElement.FocusElement(id)) {
	            this.fireCallback(this.focusCallback);
	        }
	    };
	    Question.prototype.getFirstInputElementId = function () {
	        return this.inputId;
	    };
	    Question.prototype.getFirstErrorInputElementId = function () {
	        return this.getFirstInputElementId();
	    };
	    Question.prototype.canProcessedTextValues = function (name) {
	        return name == "no" || name == "title" || name == "require";
	    };
	    Question.prototype.getProcessedTextValue = function (name) {
	        if (name == "no") return this.no;
	        if (name == "title") return this.processedTitle;
	        if (name == "require") return this.requiredText;
	        return null;
	    };
	    Question.prototype.supportComment = function () {
	        return false;
	    };
	    Question.prototype.supportOther = function () {
	        return false;
	    };
	    Object.defineProperty(Question.prototype, "isRequired", {
	        get: function get() {
	            return this.isRequiredValue;
	        },
	        set: function set(val) {
	            if (this.isRequired == val) return;
	            this.isRequiredValue = val;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasComment", {
	        get: function get() {
	            return this.hasCommentValue;
	        },
	        set: function set(val) {
	            if (!this.supportComment()) return;
	            this.hasCommentValue = val;
	            if (this.hasComment) this.hasOther = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "commentText", {
	        get: function get() {
	            return this.commentTextValue ? this.commentTextValue : _surveyStrings.surveyLocalization.getString("otherItemText");
	        },
	        set: function set(value) {
	            this.commentTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasOther", {
	        get: function get() {
	            return this.hasOtherValue;
	        },
	        set: function set(val) {
	            if (!this.supportOther() || this.hasOther == val) return;
	            this.hasOtherValue = val;
	            if (this.hasOther) this.hasComment = false;
	            this.hasOtherChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.hasOtherChanged = function () {};
	    Object.defineProperty(Question.prototype, "no", {
	        get: function get() {
	            if (this.visibleIndex < 0) return "";
	            var startIndex = 1;
	            var isNumeric = true;
	            var str = "";
	            if (this.survey && this.survey.questionStartIndex) {
	                str = this.survey.questionStartIndex;
	                if (parseInt(str)) startIndex = parseInt(str);else if (str.length == 1) isNumeric = false;
	            }
	            if (isNumeric) return (this.visibleIndex + startIndex).toString();
	            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.onSetData = function () {
	        _super.prototype.onSetData.call(this);
	        this.onSurveyValueChanged(this.value);
	    };
	    Object.defineProperty(Question.prototype, "value", {
	        get: function get() {
	            return this.valueFromData(this.getValueCore());
	        },
	        set: function set(newValue) {
	            this.setNewValue(newValue);
	            this.fireCallback(this.valueChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "comment", {
	        get: function get() {
	            return this.getComment();
	        },
	        set: function set(newValue) {
	            if (this.comment == newValue) return;
	            this.setComment(newValue);
	            this.fireCallback(this.commentChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.getComment = function () {
	        return this.data != null ? this.data.getComment(this.name) : this.questionComment;
	    };
	    Question.prototype.setComment = function (newValue) {
	        this.setNewComment(newValue);
	    };
	    Question.prototype.isEmpty = function () {
	        return this.value == null;
	    };
	    Question.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        this.checkForErrors(fireCallback);
	        return this.errors.length > 0;
	    };
	    Object.defineProperty(Question.prototype, "currentErrorCount", {
	        get: function get() {
	            return this.errors.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "requiredText", {
	        get: function get() {
	            return this.survey != null && this.isRequired ? this.survey.requiredText : "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.addError = function (error) {
	        this.errors.push(error);
	        this.fireCallback(this.errorsChangedCallback);
	    };
	    Question.prototype.checkForErrors = function (fireCallback) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        this.onCheckForErrors(this.errors);
	        if (this.errors.length == 0 && this.value) {
	            var error = this.runValidators();
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (this.survey && this.errors.length == 0) {
	            var error = this.survey.validateQuestion(this.name);
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	    };
	    Question.prototype.onCheckForErrors = function (errors) {
	        if (this.hasRequiredError()) {
	            this.errors.push(new _error.AnswerRequiredError());
	        }
	    };
	    Question.prototype.hasRequiredError = function () {
	        return this.isRequired && this.isEmpty();
	    };
	    Question.prototype.runValidators = function () {
	        return new _validator.ValidatorRunner().run(this);
	    };
	    Question.prototype.setNewValue = function (newValue) {
	        this.setNewValueInData(newValue);
	        this.onValueChanged();
	    };
	    Question.prototype.setNewValueInData = function (newValue) {
	        if (!this.isValueChangedInSurvey) {
	            newValue = this.valueToData(newValue);
	            this.setValueCore(newValue);
	        }
	    };
	    Question.prototype.getValueCore = function () {
	        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
	    };
	    Question.prototype.setValueCore = function (newValue) {
	        if (this.data != null) {
	            this.data.setValue(this.name, newValue);
	        } else {
	            this.questionValue = newValue;
	        }
	    };
	    Question.prototype.valueFromData = function (val) {
	        return val;
	    };
	    Question.prototype.valueToData = function (val) {
	        return val;
	    };
	    Question.prototype.onValueChanged = function () {};
	    Question.prototype.setNewComment = function (newValue) {
	        if (this.data != null) {
	            this.data.setComment(this.name, newValue);
	        } else this.questionComment = newValue;
	    };
	    //IQuestion
	    Question.prototype.onSurveyValueChanged = function (newValue) {
	        this.isValueChangedInSurvey = true;
	        this.value = this.valueFromData(newValue);
	        this.fireCallback(this.commentChangedCallback);
	        this.isValueChangedInSurvey = false;
	    };
	    //IValidatorOwner
	    Question.prototype.getValidatorTitle = function () {
	        return null;
	    };
	    return Question;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("question", [{ name: "title:text", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "commentText", onGetValue: function onGetValue(obj) {
	        return obj.commentTextValue;
	    } }, "isRequired:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.QuestionBase = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _conditions = __webpack_require__(9);
	
	var QuestionBase = exports.QuestionBase = function (_super) {
	    __extends(QuestionBase, _super);
	    function QuestionBase(name) {
	        _super.call(this);
	        this.name = name;
	        this.conditionRunner = null;
	        this.visibleIf = "";
	        this.visibleValue = true;
	        this.startWithNewLine = true;
	        this.visibleIndexValue = -1;
	        this.width = "";
	        this.renderWidthValue = "";
	        this.rightIndentValue = 0;
	        this.indent = 0;
	        this.idValue = QuestionBase.getQuestionId();
	        this.onCreating();
	    }
	    QuestionBase.getQuestionId = function () {
	        return "sq_" + QuestionBase.questionCounter++;
	    };
	    Object.defineProperty(QuestionBase.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.fireCallback(this.visibilityChangedCallback);
	            this.fireCallback(this.rowVisibilityChangedCallback);
	            if (this.survey) {
	                this.survey.questionVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
	        get: function get() {
	            return this.visibleIndexValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        return false;
	    };
	    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
	        get: function get() {
	            return 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasInput", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasComment", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "id", {
	        get: function get() {
	            return this.idValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
	        get: function get() {
	            return this.renderWidthValue;
	        },
	        set: function set(val) {
	            if (val == this.renderWidth) return;
	            this.renderWidthValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
	        get: function get() {
	            return this.rightIndentValue;
	        },
	        set: function set(val) {
	            if (val == this.rightIndent) return;
	            this.rightIndentValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.focus = function (onError) {
	        if (onError === void 0) {
	            onError = false;
	        }
	    };
	    QuestionBase.prototype.setData = function (newValue) {
	        this.data = newValue;
	        this.survey = newValue && newValue["questionAdded"] ? newValue : null;
	        this.onSetData();
	    };
	    QuestionBase.prototype.fireCallback = function (callback) {
	        if (callback) callback();
	    };
	    QuestionBase.prototype.onSetData = function () {};
	    QuestionBase.prototype.onCreating = function () {};
	    QuestionBase.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    //IQuestion
	    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {};
	    QuestionBase.prototype.onSurveyLoad = function () {};
	    QuestionBase.prototype.setVisibleIndex = function (value) {
	        if (this.visibleIndexValue == value) return;
	        this.visibleIndexValue = value;
	        this.fireCallback(this.visibleIndexChangedCallback);
	    };
	    QuestionBase.prototype.supportGoNextPageAutomatic = function () {
	        return false;
	    };
	    QuestionBase.questionCounter = 100;
	    return QuestionBase;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:text", { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var TextPreProcessorItem = exports.TextPreProcessorItem = function () {
	    function TextPreProcessorItem() {}
	    return TextPreProcessorItem;
	}();
	var TextPreProcessor = exports.TextPreProcessor = function () {
	    function TextPreProcessor() {}
	    TextPreProcessor.prototype.process = function (text) {
	        if (!text) return text;
	        if (!this.onProcess) return text;
	        var items = this.getItems(text);
	        for (var i = items.length - 1; i >= 0; i--) {
	            var item = items[i];
	            var name = this.getName(text.substring(item.start + 1, item.end));
	            if (!this.canProcessName(name)) continue;
	            if (this.onHasValue && !this.onHasValue(name)) continue;
	            var value = this.onProcess(name);
	            if (value == null) value = "";
	            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
	        }
	        return text;
	    };
	    TextPreProcessor.prototype.getItems = function (text) {
	        var items = [];
	        var length = text.length;
	        var start = -1;
	        var ch = '';
	        for (var i = 0; i < length; i++) {
	            ch = text[i];
	            if (ch == '{') start = i;
	            if (ch == '}') {
	                if (start > -1) {
	                    var item = new TextPreProcessorItem();
	                    item.start = start;
	                    item.end = i;
	                    items.push(item);
	                }
	                start = -1;
	            }
	        }
	        return items;
	    };
	    TextPreProcessor.prototype.getName = function (name) {
	        if (!name) return;
	        return name.trim();
	    };
	    TextPreProcessor.prototype.canProcessName = function (name) {
	        if (!name) return false;
	        for (var i = 0; i < name.length; i++) {
	            var ch = name[i];
	            //TODO
	            if (ch == ' ' || ch == '-' || ch == '&') return false;
	        }
	        return true;
	    };
	    return TextPreProcessor;
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBase = exports.QuestionSelectBase = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _choicesRestfull = __webpack_require__(8);
	
	var QuestionSelectBase = exports.QuestionSelectBase = function (_super) {
	    __extends(QuestionSelectBase, _super);
	    function QuestionSelectBase(name) {
	        _super.call(this, name);
	        this.visibleChoicesCache = null;
	        this.otherItem = new _base.ItemValue("other", _surveyStrings.surveyLocalization.getString("otherItemText"));
	        this.choicesFromUrl = null;
	        this.cachedValueForUrlRequestion = null;
	        this.choicesValues = new Array();
	        this.otherErrorText = null;
	        this.storeOthersAsComment = true;
	        this.choicesOrderValue = "none";
	        this.isSettingComment = false;
	        this.choicesByUrl = this.createRestfull();
	        var self = this;
	        this.choicesByUrl.getResultCallback = function (items) {
	            self.onLoadChoicesFromUrl(items);
	        };
	    }
	    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
	        get: function get() {
	            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.getHasOther = function (val) {
	        return val == this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.createRestfull = function () {
	        return new _choicesRestfull.ChoicesRestfull();
	    };
	    QuestionSelectBase.prototype.getComment = function () {
	        if (this.getStoreOthersAsComment()) return _super.prototype.getComment.call(this);
	        return this.commentValue;
	    };
	    QuestionSelectBase.prototype.setComment = function (newValue) {
	        if (this.getStoreOthersAsComment()) _super.prototype.setComment.call(this, newValue);else {
	            if (!this.isSettingComment && newValue != this.commentValue) {
	                this.isSettingComment = true;
	                this.commentValue = newValue;
	                if (this.isOtherSelected) {
	                    this.setNewValueInData(this.cachedValue);
	                }
	                this.isSettingComment = false;
	            }
	        }
	    };
	    QuestionSelectBase.prototype.setNewValue = function (newValue) {
	        if (newValue) this.cachedValueForUrlRequestion = newValue;
	        _super.prototype.setNewValue.call(this, newValue);
	    };
	    QuestionSelectBase.prototype.valueFromData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueFromData.call(this, val);
	        this.cachedValue = this.valueFromDataCore(val);
	        return this.cachedValue;
	    };
	    QuestionSelectBase.prototype.valueToData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueToData.call(this, val);
	        this.cachedValue = val;
	        return this.valueToDataCore(val);
	    };
	    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
	        if (!this.hasUnknownValue(val)) return val;
	        if (val == this.otherItem.value) return val;
	        this.comment = val;
	        return this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.valueToDataCore = function (val) {
	        if (val == this.otherItem.value && this.getComment()) {
	            val = this.getComment();
	        }
	        return val;
	    };
	    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
	        if (!val) return false;
	        var items = this.activeChoices;
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].value == val) return false;
	        }
	        return true;
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValues;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValues, newValue);
	            this.onVisibleChoicesChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.hasOtherChanged = function () {
	        this.onVisibleChoicesChanged();
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
	        get: function get() {
	            return this.choicesOrderValue;
	        },
	        set: function set(newValue) {
	            if (newValue == this.choicesOrderValue) return;
	            this.choicesOrderValue = newValue;
	            this.onVisibleChoicesChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
	        get: function get() {
	            return this.otherItem.text;
	        },
	        set: function set(value) {
	            this.otherItem.text = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
	        get: function get() {
	            if (!this.hasOther && this.choicesOrder == "none") return this.activeChoices;
	            if (!this.visibleChoicesCache) {
	                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
	                if (this.hasOther) {
	                    this.visibleChoicesCache.push(this.otherItem);
	                }
	            }
	            return this.visibleChoicesCache;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
	        get: function get() {
	            return this.choicesFromUrl ? this.choicesFromUrl : this.choices;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (!this.isOtherSelected || this.comment) return;
	        var text = this.otherErrorText;
	        if (!text) {
	            text = _surveyStrings.surveyLocalization.getString("otherRequiredError");
	        }
	        errors.push(new _error.CustomError(text));
	    };
	    QuestionSelectBase.prototype.getStoreOthersAsComment = function () {
	        return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true);
	    };
	    QuestionSelectBase.prototype.onSurveyLoad = function () {
	        if (this.choicesByUrl) this.choicesByUrl.run();
	    };
	    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
	        var errorCount = this.errors.length;
	        this.errors = [];
	        if (this.choicesByUrl && this.choicesByUrl.error) {
	            this.errors.push(this.choicesByUrl.error);
	        }
	        if (errorCount > 0 || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        var newChoices = null;
	        if (array && array.length > 0) {
	            newChoices = new Array();
	            _base.ItemValue.setData(newChoices, array);
	        }
	        this.choicesFromUrl = newChoices;
	        this.onVisibleChoicesChanged();
	        if (this.cachedValueForUrlRequestion) {
	            this.value = this.cachedValueForUrlRequestion;
	        }
	    };
	    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
	        this.visibleChoicesCache = null;
	        this.fireCallback(this.choicesChangedCallback);
	    };
	    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
	        var order = this.choicesOrder.toLowerCase();
	        if (order == "asc") return this.sortArray(array, 1);
	        if (order == "desc") return this.sortArray(array, -1);
	        if (order == "random") return this.randomizeArray(array);
	        return array;
	    };
	    QuestionSelectBase.prototype.sortArray = function (array, mult) {
	        return array.sort(function (a, b) {
	            if (a.text < b.text) return -1 * mult;
	            if (a.text > b.text) return 1 * mult;
	            return 0;
	        });
	    };
	    QuestionSelectBase.prototype.randomizeArray = function (array) {
	        for (var i = array.length - 1; i > 0; i--) {
	            var j = Math.floor(Math.random() * (i + 1));
	            var temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	        return array;
	    };
	    return QuestionSelectBase;
	}(_question.Question);
	var QuestionCheckboxBase = exports.QuestionCheckboxBase = function (_super) {
	    __extends(QuestionCheckboxBase, _super);
	    function QuestionCheckboxBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	    }
	    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionCheckboxBase;
	}(QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] }, { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function onGetValue(obj) {
	        return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl;
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choicesByUrl.setData(value);
	    } }, { name: "otherText", default: _surveyStrings.surveyLocalization.getString("otherItemText") }, "otherErrorText", { name: "storeOthersAsComment:boolean", default: true }], null, "question");
	_jsonobject.JsonObject.metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var QuestionFactory = exports.QuestionFactory = function () {
	    function QuestionFactory() {
	        this.creatorHash = {};
	    }
	    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
	        this.creatorHash[questionType] = questionCreator;
	    };
	    QuestionFactory.prototype.getAllTypes = function () {
	        var result = new Array();
	        for (var key in this.creatorHash) {
	            result.push(key);
	        }
	        return result.sort();
	    };
	    QuestionFactory.prototype.createQuestion = function (questionType, name) {
	        var creator = this.creatorHash[questionType];
	        if (creator == null) return null;
	        return creator(name);
	    };
	    QuestionFactory.Instance = new QuestionFactory();
	    QuestionFactory.DefaultChoices = ["one", "two|second value", "three|third value"];
	    return QuestionFactory;
	}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModel = exports.MatrixDropdownRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownRowModel = exports.MatrixDropdownRowModel = function (_super) {
	    __extends(MatrixDropdownRowModel, _super);
	    function MatrixDropdownRowModel(name, text, data, value) {
	        _super.call(this, data, value);
	        this.name = name;
	        this.text = text;
	    }
	    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
	        get: function get() {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDropdownModel = exports.QuestionMatrixDropdownModel = function (_super) {
	    __extends(QuestionMatrixDropdownModel, _super);
	    function QuestionMatrixDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowsValue = [];
	    }
	    QuestionMatrixDropdownModel.prototype.getType = function () {
	        return "matrixdropdown";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (!this.rows || this.rows.length === 0) return result;
	        var val = this.value;
	        if (!val) val = {};
	        for (var i = 0; i < this.rows.length; i++) {
	            if (!this.rows[i].value) continue;
	            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (name, text, value) {
	        return new MatrixDropdownRowModel(name, text, this, value);
	    };
	    return QuestionMatrixDropdownModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }], function () {
	    return new QuestionMatrixDropdownModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdropdown", function (name) {
	    var q = new QuestionMatrixDropdownModel(name);q.choices = [1, 2, 3, 4, 5];q.rows = ["Row 1", "Row 2"];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamicModel = exports.MatrixDynamicRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var MatrixDynamicRowModel = exports.MatrixDynamicRowModel = function (_super) {
	    __extends(MatrixDynamicRowModel, _super);
	    function MatrixDynamicRowModel(index, data, value) {
	        _super.call(this, data, value);
	        this.index = index;
	    }
	    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
	        get: function get() {
	            return "row" + this.index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDynamicRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDynamicModel = exports.QuestionMatrixDynamicModel = function (_super) {
	    __extends(QuestionMatrixDynamicModel, _super);
	    function QuestionMatrixDynamicModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowCounter = 0;
	        this.rowCountValue = 2;
	        this.addRowTextValue = null;
	        this.removeRowTextValue = null;
	        this.minRowCount = 0;
	    }
	    QuestionMatrixDynamicModel.prototype.getType = function () {
	        return "matrixdynamic";
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
	        get: function get() {
	            return this.rowCountValue;
	        },
	        set: function set(val) {
	            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount) return;
	            this.rowCountValue = val;
	            if (this.value && this.value.length > val) {
	                var qVal = this.value;
	                qVal.splice(val);
	                this.value = qVal;
	            }
	            this.fireCallback(this.rowCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.addRow = function () {
	        if (this.generatedVisibleRows) {
	            this.generatedVisibleRows.push(this.createMatrixRow(null));
	        }
	        this.rowCount++;
	    };
	    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
	        if (index < 0 || index >= this.rowCount) return;
	        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
	            this.generatedVisibleRows.splice(index, 1);
	        }
	        if (this.value) {
	            var val = this.createNewValue(this.value);
	            val.splice(index, 1);
	            val = this.deleteRowValue(val, null);
	            this.value = val;
	        }
	        this.rowCount--;
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
	        get: function get() {
	            return this.addRowTextValue ? this.addRowTextValue : _surveyStrings.surveyLocalization.getString("addRow");
	        },
	        set: function set(value) {
	            this.addRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
	        get: function get() {
	            return this.removeRowTextValue ? this.removeRowTextValue : _surveyStrings.surveyLocalization.getString("removeRow");
	        },
	        set: function set(value) {
	            this.removeRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "cachedVisibleRows", {
	        get: function get() {
	            if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount) return this.generatedVisibleRows;
	            return this.visibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("minRowCountError")["format"](this.minRowCount)));
	        }
	    };
	    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
	        if (this.minRowCount <= 0 || !this.generatedVisibleRows) return false;
	        var res = false;
	        var setRowCount = 0;
	        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
	            var row = this.generatedVisibleRows[rowIndex];
	            if (!row.isEmpty) setRowCount++;
	        }
	        return setRowCount < this.minRowCount;
	    };
	    QuestionMatrixDynamicModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (this.rowCount === 0) return result;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.rowCount; i++) {
	            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
	        return new MatrixDynamicRowModel(this.rowCounter++, this, value);
	    };
	    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
	        var result = curValue;
	        if (!result) result = [];
	        var r = [];
	        if (result.length > this.rowCount) result.splice(this.rowCount - 1);
	        for (var i = result.length; i < this.rowCount; i++) {
	            result.push({});
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
	        var isEmpty = true;
	        for (var i = 0; i < newValue.length; i++) {
	            if (Object.keys(newValue[i]).length > 0) {
	                isEmpty = false;
	                break;
	            }
	        }
	        return isEmpty ? null : newValue;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
	        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
	    };
	    QuestionMatrixDynamicModel.MaxRowCount = 100;
	    return QuestionMatrixDynamicModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 }, { name: "addRowText", onGetValue: function onGetValue(obj) {
	        return obj.addRowTextValue;
	    } }, { name: "removeRowText", onGetValue: function onGetValue(obj) {
	        return obj.removeRowTextValue;
	    } }], function () {
	    return new QuestionMatrixDynamicModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdynamic", function (name) {
	    var q = new QuestionMatrixDynamicModel(name);q.choices = [1, 2, 3, 4, 5];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixModel = exports.MatrixRowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixRowModel = exports.MatrixRowModel = function (_super) {
	    __extends(MatrixRowModel, _super);
	    function MatrixRowModel(name, text, fullName, data, value) {
	        _super.call(this);
	        this.name = name;
	        this.text = text;
	        this.fullName = fullName;
	        this.data = data;
	        this.rowValue = value;
	    }
	    Object.defineProperty(MatrixRowModel.prototype, "value", {
	        get: function get() {
	            return this.rowValue;
	        },
	        set: function set(newValue) {
	            this.rowValue = newValue;
	            if (this.data) this.data.onMatrixRowChanged(this);
	            this.onValueChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixRowModel.prototype.onValueChanged = function () {};
	    return MatrixRowModel;
	}(_base.Base);
	var QuestionMatrixModel = exports.QuestionMatrixModel = function (_super) {
	    __extends(QuestionMatrixModel, _super);
	    function QuestionMatrixModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.rowsValue = [];
	        this.isRowChanging = false;
	        this.isAllRowRequired = false;
	    }
	    QuestionMatrixModel.prototype.getType = function () {
	        return "matrix";
	    };
	    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
	        get: function get() {
	            return this.rowsValue.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.columnsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
	        get: function get() {
	            var result = new Array();
	            var val = this.value;
	            if (!val) val = {};
	            for (var i = 0; i < this.rows.length; i++) {
	                if (!this.rows[i].value) continue;
	                result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
	            }
	            if (result.length == 0) {
	                result.push(this.createMatrixRow(null, "", this.name, val));
	            }
	            this.generatedVisibleRows = result;
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("requiredInAllRowsError")));
	        }
	    };
	    QuestionMatrixModel.prototype.hasErrorInRows = function () {
	        if (!this.isAllRowRequired) return false;
	        var rows = this.generatedVisibleRows;
	        if (!rows) rows = this.visibleRows;
	        if (!rows) return false;
	        for (var i = 0; i < rows.length; i++) {
	            var val = rows[i].value;
	            if (!val) return true;
	        }
	        return false;
	    };
	    QuestionMatrixModel.prototype.createMatrixRow = function (name, text, fullName, value) {
	        return new MatrixRowModel(name, text, fullName, this, value);
	    };
	    QuestionMatrixModel.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.value;
	        if (!val) val = {};
	        if (this.rows.length == 0) {
	            this.generatedVisibleRows[0].value = val;
	        } else {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var row = this.generatedVisibleRows[i];
	                var rowVal = val[row.name] ? val[row.name] : null;
	                this.generatedVisibleRows[i].value = rowVal;
	            }
	        }
	        this.isRowChanging = false;
	    };
	    //IMatrixData
	    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
	        if (this.isRowChanging) return;
	        this.isRowChanging = true;
	        if (!this.hasRows) {
	            this.setNewValue(row.value);
	        } else {
	            var newValue = this.value;
	            if (!newValue) {
	                newValue = {};
	            }
	            newValue[row.name] = row.value;
	            this.setNewValue(newValue);
	        }
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.columns);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.columns = value;
	    } }, { name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }, "isAllRowRequired:boolean"], function () {
	    return new QuestionMatrixModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrix", function (name) {
	    var q = new QuestionMatrixModel(name);q.rows = ["Row 1", "Row 2"];q.columns = ["Column 1", "Column 2", "Column 3"];return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleTextModel = exports.MultipleTextItemModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _validator = __webpack_require__(2);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var MultipleTextItemModel = exports.MultipleTextItemModel = function (_super) {
	    __extends(MultipleTextItemModel, _super);
	    function MultipleTextItemModel(name, title) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.validators = new Array();
	        this.title = title;
	    }
	    MultipleTextItemModel.prototype.getType = function () {
	        return "multipletextitem";
	    };
	    MultipleTextItemModel.prototype.setData = function (data) {
	        this.data = data;
	    };
	    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newText) {
	            this.titleValue = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
	        get: function get() {
	            return this.data ? this.data.getMultipleTextValue(this.name) : null;
	        },
	        set: function set(value) {
	            if (this.data != null) {
	                this.data.setMultipleTextValue(this.name, value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {};
	    //IValidatorOwner
	    MultipleTextItemModel.prototype.getValidatorTitle = function () {
	        return this.title;
	    };
	    return MultipleTextItemModel;
	}(_base.Base);
	var QuestionMultipleTextModel = exports.QuestionMultipleTextModel = function (_super) {
	    __extends(QuestionMultipleTextModel, _super);
	    function QuestionMultipleTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	        this.itemSize = 25;
	        this.itemsValues = new Array();
	        this.isMultipleItemValueChanging = false;
	        var self = this;
	        this.items.push = function (value) {
	            value.setData(self);
	            var result = Array.prototype.push.call(this, value);
	            self.fireCallback(self.colCountChangedCallback);
	            return result;
	        };
	    }
	    QuestionMultipleTextModel.prototype.getType = function () {
	        return "multipletext";
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
	        get: function get() {
	            return this.itemsValues;
	        },
	        set: function set(value) {
	            this.itemsValues = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.AddItem = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var item = this.createTextItem(name, title);
	        this.items.push(item);
	        return item;
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 1 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.getRows = function () {
	        var colCount = this.colCount;
	        var items = this.items;
	        var rows = [];
	        var index = 0;
	        for (var i = 0; i < items.length; i++) {
	            if (index == 0) {
	                rows.push([]);
	            }
	            rows[rows.length - 1].push(items[i]);
	            index++;
	            if (index >= colCount) {
	                index = 0;
	            }
	        }
	        return rows;
	    };
	    QuestionMultipleTextModel.prototype.onValueChanged = function () {
	        _super.prototype.onValueChanged.call(this);
	        this.onItemValueChanged();
	    };
	    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
	        return new MultipleTextItemModel(name, title);
	    };
	    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
	        if (this.isMultipleItemValueChanging) return;
	        for (var i = 0; i < this.items.length; i++) {
	            var itemValue = null;
	            if (this.value && this.items[i].name in this.value) {
	                itemValue = this.value[this.items[i].name];
	            }
	            this.items[i].onValueChanged(itemValue);
	        }
	    };
	    QuestionMultipleTextModel.prototype.runValidators = function () {
	        var error = _super.prototype.runValidators.call(this);
	        if (error != null) return error;
	        for (var i = 0; i < this.items.length; i++) {
	            error = new _validator.ValidatorRunner().run(this.items[i]);
	            if (error != null) return error;
	        }
	        return null;
	    };
	    //IMultipleTextData
	    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
	        if (!this.value) return null;
	        return this.value[name];
	    };
	    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
	        this.isMultipleItemValueChanging = true;
	        var newValue = this.value;
	        if (!newValue) {
	            newValue = {};
	        }
	        newValue[name] = value;
	        this.setNewValue(newValue);
	        this.isMultipleItemValueChanging = false;
	    };
	    return QuestionMultipleTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("multipletextitem", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () {
	    return new MultipleTextItemModel("");
	});
	_jsonobject.JsonObject.metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" }, { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () {
	    return new QuestionMultipleTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("multipletext", function (name) {
	    var q = new QuestionMultipleTextModel(name);q.AddItem("text1");q.AddItem("text2");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.PageModel = exports.QuestionRowModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _conditions = __webpack_require__(9);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRowModel = exports.QuestionRowModel = function () {
	    function QuestionRowModel(page, question) {
	        this.page = page;
	        this.question = question;
	        this.visibleValue = false;
	        this.questions = [];
	        var self = this;
	        this.question.rowVisibilityChangedCallback = function () {
	            self.onRowVisibilityChanged();
	        };
	    }
	    Object.defineProperty(QuestionRowModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.onVisibleChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRowModel.prototype.updateVisible = function () {
	        this.visible = this.calcVisible();
	        this.setWidth();
	    };
	    QuestionRowModel.prototype.addQuestion = function (q) {
	        this.questions.push(q);
	        this.updateVisible();
	    };
	    QuestionRowModel.prototype.onVisibleChanged = function () {
	        if (this.visibilityChangedCallback) this.visibilityChangedCallback();
	    };
	    QuestionRowModel.prototype.setWidth = function () {
	        var visCount = this.getVisibleCount();
	        if (visCount == 0) return;
	        var counter = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) {
	                this.questions[i].renderWidth = this.question.width ? this.question.width : Math.floor(100 / visCount) + '%';
	                this.questions[i].rightIndent = counter < visCount - 1 ? 1 : 0;
	                counter++;
	            }
	        }
	    };
	    QuestionRowModel.prototype.onRowVisibilityChanged = function () {
	        this.page.onRowVisibilityChanged(this);
	    };
	    QuestionRowModel.prototype.getVisibleCount = function () {
	        var res = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) res++;
	        }
	        return res;
	    };
	    QuestionRowModel.prototype.isQuestionVisible = function (q) {
	        return this.page.isQuestionVisible(q);
	    };
	    QuestionRowModel.prototype.calcVisible = function () {
	        return this.getVisibleCount() > 0;
	    };
	    return QuestionRowModel;
	}();
	var PageModel = exports.PageModel = function (_super) {
	    __extends(PageModel, _super);
	    function PageModel(name) {
	        if (name === void 0) {
	            name = "";
	        }
	        _super.call(this);
	        this.name = name;
	        this.rowValues = null;
	        this.conditionRunner = null;
	        this.questions = new Array();
	        this.data = null;
	        this.visibleIf = "";
	        this.title = "";
	        this.visibleIndex = -1;
	        this.numValue = -1;
	        this.visibleValue = true;
	        this.idValue = PageModel.getPageId();
	        var self = this;
	        this.questions.push = function (value) {
	            if (self.data != null) {
	                value.setData(self.data);
	            }
	            return Array.prototype.push.call(this, value);
	        };
	    }
	    PageModel.getPageId = function () {
	        return "sp_" + PageModel.pageCounter++;
	    };
	    Object.defineProperty(PageModel.prototype, "id", {
	        get: function get() {
	            return this.idValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "rows", {
	        get: function get() {
	            this.rowValues = this.buildRows();
	            return this.rowValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "isActive", {
	        get: function get() {
	            return !this.data || this.data.currentPage == this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.isQuestionVisible = function (question) {
	        return question.visible || this.isDesignMode;
	    };
	    PageModel.prototype.createRow = function (question) {
	        return new QuestionRowModel(this, question);
	    };
	    Object.defineProperty(PageModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.data && this.data.isDesignMode;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.buildRows = function () {
	        var result = new Array();
	        var lastRowVisibleIndex = -1;
	        var self = this;
	        for (var i = 0; i < this.questions.length; i++) {
	            var q = this.questions[i];
	            result.push(this.createRow(q));
	            if (q.startWithNewLine) {
	                lastRowVisibleIndex = i;
	                result[i].addQuestion(q);
	            } else {
	                if (lastRowVisibleIndex < 0) lastRowVisibleIndex = i;
	                result[lastRowVisibleIndex].addQuestion(q);
	            }
	        }
	        for (var i = 0; i < result.length; i++) {
	            result[i].setWidth();
	        }
	        return result;
	    };
	    PageModel.prototype.onRowVisibilityChanged = function (row) {
	        if (!this.isActive || !this.rowValues) return;
	        var index = this.rowValues.indexOf(row);
	        for (var i = index; i >= 0; i--) {
	            if (this.rowValues[i].questions.indexOf(row.question) > -1) {
	                this.rowValues[i].updateVisible();
	                break;
	            }
	        }
	    };
	    Object.defineProperty(PageModel.prototype, "processedTitle", {
	        get: function get() {
	            return this.data != null ? this.data.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "num", {
	        get: function get() {
	            return this.numValue;
	        },
	        set: function set(value) {
	            if (this.numValue == value) return;
	            this.numValue = value;
	            this.onNumChanged(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(value) {
	            if (value === this.visible) return;
	            this.visibleValue = value;
	            if (this.data != null) {
	                this.data.pageVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.getType = function () {
	        return "page";
	    };
	    Object.defineProperty(PageModel.prototype, "isVisible", {
	        get: function get() {
	            return this.getIsPageVisible(null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.getIsPageVisible = function (exceptionQuestion) {
	        if (!this.visible) return false;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i] == exceptionQuestion) continue;
	            if (this.questions[i].visible) return true;
	        }
	        return false;
	    };
	    PageModel.prototype.addQuestion = function (question, index) {
	        if (index === void 0) {
	            index = -1;
	        }
	        if (question == null) return;
	        if (index < 0 || index >= this.questions.length) {
	            this.questions.push(question);
	        } else {
	            this.questions.splice(index, 0, question);
	        }
	        if (this.data != null) {
	            question.setData(this.data);
	            this.data.questionAdded(question, index);
	        }
	    };
	    PageModel.prototype.addNewQuestion = function (questionType, name) {
	        var question = _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	        this.addQuestion(question);
	        return question;
	    };
	    PageModel.prototype.removeQuestion = function (question) {
	        var index = this.questions.indexOf(question);
	        if (index < 0) return;
	        this.questions.splice(index, 1);
	        if (this.data != null) this.data.questionRemoved(question);
	    };
	    PageModel.prototype.focusFirstQuestion = function () {
	        for (var i = 0; i < this.questions.length; i++) {
	            var question = this.questions[i];
	            if (!question.visible || !question.hasInput) continue;
	            this.questions[i].focus();
	            break;
	        }
	    };
	    PageModel.prototype.focusFirstErrorQuestion = function () {
	        for (var i = 0; i < this.questions.length; i++) {
	            if (!this.questions[i].visible || this.questions[i].currentErrorCount == 0) continue;
	            this.questions[i].focus(true);
	            break;
	        }
	    };
	    PageModel.prototype.scrollToTop = function () {
	        _base.SurveyElement.ScrollElementToTop(_base.SurveyPageId);
	    };
	    PageModel.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        if (focuseOnFirstError === void 0) {
	            focuseOnFirstError = false;
	        }
	        var result = false;
	        var firstErrorQuestion = null;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i].visible && this.questions[i].hasErrors(fireCallback)) {
	                if (focuseOnFirstError && firstErrorQuestion == null) {
	                    firstErrorQuestion = this.questions[i];
	                }
	                result = true;
	            }
	        }
	        if (firstErrorQuestion) firstErrorQuestion.focus(true);
	        return result;
	    };
	    PageModel.prototype.addQuestionsToList = function (list, visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        if (visibleOnly && !this.visible) return;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (visibleOnly && !this.questions[i].visible) continue;
	            list.push(this.questions[i]);
	        }
	    };
	    PageModel.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    PageModel.prototype.onNumChanged = function (value) {};
	    PageModel.pageCounter = 100;
	    return PageModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("page", ["name", { name: "questions", baseClassName: "question" }, { name: "visible:boolean", default: true }, "visibleIf", "title"], function () {
	    return new PageModel();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionCheckboxModel = exports.QuestionCheckboxModel = function (_super) {
	    __extends(QuestionCheckboxModel, _super);
	    function QuestionCheckboxModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionCheckboxModel.prototype.getHasOther = function (val) {
	        if (!val) return false;
	        return val.indexOf(this.otherItem.value) >= 0;
	    };
	    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) return val;
	            if (this.hasUnknownValue(val[i])) {
	                this.comment = val[i];
	                var newVal = val.slice();
	                newVal[i] = this.otherItem.value;
	                return newVal;
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) {
	                if (this.getComment()) {
	                    var newVal = val.slice();
	                    newVal[i] = this.getComment();
	                    return newVal;
	                }
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.getType = function () {
	        return "checkbox";
	    };
	    return QuestionCheckboxModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("checkbox", [], function () {
	    return new QuestionCheckboxModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("checkbox", function (name) {
	    var q = new QuestionCheckboxModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCommentModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionCommentModel = exports.QuestionCommentModel = function (_super) {
	    __extends(QuestionCommentModel, _super);
	    function QuestionCommentModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rows = 4;
	        this.cols = 50;
	    }
	    QuestionCommentModel.prototype.getType = function () {
	        return "comment";
	    };
	    QuestionCommentModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    return QuestionCommentModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 }], function () {
	    return new QuestionCommentModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("comment", function (name) {
	    return new QuestionCommentModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdownModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionDropdownModel = exports.QuestionDropdownModel = function (_super) {
	    __extends(QuestionDropdownModel, _super);
	    function QuestionDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionDropdownModel.prototype.getType = function () {
	        return "dropdown";
	    };
	    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionDropdownModel;
	}(_question_baseselect.QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("dropdown", [{ name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }], function () {
	    return new QuestionDropdownModel("");
	}, "selectbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("dropdown", function (name) {
	    var q = new QuestionDropdownModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFileModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionFileModel = exports.QuestionFileModel = function (_super) {
	    __extends(QuestionFileModel, _super);
	    function QuestionFileModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.showPreviewValue = false;
	        this.isUploading = false;
	    }
	    QuestionFileModel.prototype.getType = function () {
	        return "file";
	    };
	    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
	        get: function get() {
	            return this.showPreviewValue;
	        },
	        set: function set(value) {
	            this.showPreviewValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionFileModel.prototype.loadFile = function (file) {
	        var self = this;
	        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) {
	            self.isUploading = status == "uploading";
	        })) return;
	        this.setFileValue(file);
	    };
	    QuestionFileModel.prototype.setFileValue = function (file) {
	        if (!FileReader) return;
	        if (!this.showPreview && !this.storeDataAsText) return;
	        if (this.checkFileForErrors(file)) return;
	        var fileReader = new FileReader();
	        var self = this;
	        fileReader.onload = function (e) {
	            if (self.showPreview) {
	                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
	                self.fireCallback(self.previewValueLoadedCallback);
	            }
	            if (self.storeDataAsText) {
	                self.value = fileReader.result;
	            }
	        };
	        fileReader.readAsDataURL(file);
	    };
	    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.isUploading) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("uploadingFile")));
	        }
	    };
	    QuestionFileModel.prototype.checkFileForErrors = function (file) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        if (this.maxSize > 0 && file.size > this.maxSize) {
	            this.errors.push(new _error.ExceedSizeError(this.maxSize));
	        }
	        if (errorLength != this.errors.length || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        return this.errors.length > 0;
	    };
	    QuestionFileModel.prototype.isFileImage = function (file) {
	        if (!file || !file.type) return;
	        var str = file.type.toLowerCase();
	        return str.indexOf("image") == 0;
	    };
	    return QuestionFileModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () {
	    return new QuestionFileModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("file", function (name) {
	    return new QuestionFileModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtmlModel = undefined;
	
	var _questionbase = __webpack_require__(13);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionHtmlModel = exports.QuestionHtmlModel = function (_super) {
	    __extends(QuestionHtmlModel, _super);
	    function QuestionHtmlModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionHtmlModel.prototype.getType = function () {
	        return "html";
	    };
	    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
	        get: function get() {
	            return this.htmlValue;
	        },
	        set: function set(value) {
	            this.htmlValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
	        get: function get() {
	            return this.survey ? this.survey.processHtml(this.html) : this.html;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionHtmlModel;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("html", ["html:html"], function () {
	    return new QuestionHtmlModel("");
	}, "questionbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("html", function (name) {
	    return new QuestionHtmlModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroupModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionRadiogroupModel = exports.QuestionRadiogroupModel = function (_super) {
	    __extends(QuestionRadiogroupModel, _super);
	    function QuestionRadiogroupModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionRadiogroupModel.prototype.getType = function () {
	        return "radiogroup";
	    };
	    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionRadiogroupModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("radiogroup", [], function () {
	    return new QuestionRadiogroupModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("radiogroup", function (name) {
	    var q = new QuestionRadiogroupModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRatingModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRatingModel = exports.QuestionRatingModel = function (_super) {
	    __extends(QuestionRatingModel, _super);
	    function QuestionRatingModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rates = [];
	        this.mininumRateDescription = null;
	        this.maximumRateDescription = null;
	    }
	    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
	        get: function get() {
	            return this.rates;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rates, newValue);
	            this.fireCallback(this.rateValuesChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
	        get: function get() {
	            if (this.rateValues.length > 0) return this.rateValues;
	            return QuestionRatingModel.defaultRateValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRatingModel.prototype.getType = function () {
	        return "rating";
	    };
	    QuestionRatingModel.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    QuestionRatingModel.defaultRateValues = [];
	    return QuestionRatingModel;
	}(_question.Question);
	_base.ItemValue.setData(QuestionRatingModel.defaultRateValues, [1, 2, 3, 4, 5]);
	_jsonobject.JsonObject.metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rateValues);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rateValues = value;
	    } }, "mininumRateDescription", "maximumRateDescription"], function () {
	    return new QuestionRatingModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("rating", function (name) {
	    return new QuestionRatingModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionTextModel = undefined;
	
	var _questionfactory = __webpack_require__(16);
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var QuestionTextModel = exports.QuestionTextModel = function (_super) {
	    __extends(QuestionTextModel, _super);
	    function QuestionTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.size = 25;
	        this.inputType = "text";
	    }
	    QuestionTextModel.prototype.getType = function () {
	        return "text";
	    };
	    QuestionTextModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    QuestionTextModel.prototype.setNewValue = function (newValue) {
	        newValue = this.correctValueType(newValue);
	        _super.prototype.setNewValue.call(this, newValue);
	    };
	    QuestionTextModel.prototype.correctValueType = function (newValue) {
	        if (!newValue) return newValue;
	        if (this.inputType == "number" || this.inputType == "range") {
	            return this.isNumber(newValue) ? parseFloat(newValue) : "";
	        }
	        return newValue;
	    };
	    QuestionTextModel.prototype.isNumber = function (value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	    return QuestionTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("text", [{ name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] }, { name: "size:number", default: 25 }], function () {
	    return new QuestionTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("text", function (name) {
	    return new QuestionTextModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyModel = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _page = __webpack_require__(21);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var _dxSurveyService = __webpack_require__(31);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var SurveyModel = exports.SurveyModel = function (_super) {
	    __extends(SurveyModel, _super);
	    function SurveyModel(jsonObj) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        _super.call(this);
	        this.surveyId = null;
	        this.surveyPostId = null;
	        this.clientId = null;
	        this.cookieName = null;
	        this.sendResultOnPageNext = false;
	        this.commentPrefix = "-Comment";
	        this.title = "";
	        this.showNavigationButtons = true;
	        this.showTitle = true;
	        this.showPageTitles = true;
	        this.completedHtml = "";
	        this.requiredText = "*";
	        this.questionStartIndex = "";
	        this.questionTitleTemplate = "";
	        this.showProgressBar = "off";
	        this.storeOthersAsComment = true;
	        this.goNextPageAutomatic = false;
	        this.pages = new Array();
	        this.triggers = new Array();
	        this.clearInvisibleValues = false;
	        this.currentPageValue = null;
	        this.valuesHash = {};
	        this.variablesHash = {};
	        this.showPageNumbersValue = false;
	        this.showQuestionNumbersValue = "on";
	        this.questionTitleLocationValue = "top";
	        this.localeValue = "";
	        this.isCompleted = false;
	        this.isLoading = false;
	        this.processedTextValues = {};
	        this.isValidatingOnServerValue = false;
	        this.onComplete = new _base.Event();
	        this.onCurrentPageChanged = new _base.Event();
	        this.onValueChanged = new _base.Event();
	        this.onVisibleChanged = new _base.Event();
	        this.onPageVisibleChanged = new _base.Event();
	        this.onQuestionAdded = new _base.Event();
	        this.onQuestionRemoved = new _base.Event();
	        this.onValidateQuestion = new _base.Event();
	        this.onProcessHtml = new _base.Event();
	        this.onSendResult = new _base.Event();
	        this.onGetResult = new _base.Event();
	        this.onUploadFile = new _base.Event();
	        this.jsonErrors = null;
	        this.mode = "normal";
	        var self = this;
	        this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	        this.textPreProcessor.onHasValue = function (name) {
	            return self.processedTextValues[name.toLowerCase()];
	        };
	        this.textPreProcessor.onProcess = function (name) {
	            return self.getProcessedTextValue(name);
	        };
	        this.pages.push = function (value) {
	            value.data = self;
	            return Array.prototype.push.call(this, value);
	        };
	        this.triggers.push = function (value) {
	            value.setOwner(self);
	            return Array.prototype.push.call(this, value);
	        };
	        this.updateProcessedTextValues();
	        this.onBeforeCreating();
	        if (jsonObj) {
	            this.setJsonObject(jsonObj);
	            if (this.surveyId) {
	                this.loadSurveyFromService(this.surveyId);
	            }
	        }
	        this.onCreating();
	    }
	    SurveyModel.prototype.getType = function () {
	        return "survey";
	    };
	    Object.defineProperty(SurveyModel.prototype, "locale", {
	        get: function get() {
	            return this.localeValue;
	        },
	        set: function set(value) {
	            this.localeValue = value;
	            _surveyStrings.surveyLocalization.currentLocale = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.getLocString = function (str) {
	        return _surveyStrings.surveyLocalization.getString(str);
	    };
	    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
	        get: function get() {
	            return this.getLocString("emptySurvey");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
	        get: function get() {
	            return this.pagePrevTextValue ? this.pagePrevTextValue : this.getLocString("pagePrevText");
	        },
	        set: function set(newValue) {
	            this.pagePrevTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
	        get: function get() {
	            return this.pageNextTextValue ? this.pageNextTextValue : this.getLocString("pageNextText");
	        },
	        set: function set(newValue) {
	            this.pageNextTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "completeText", {
	        get: function get() {
	            return this.completeTextValue ? this.completeTextValue : this.getLocString("completeText");
	        },
	        set: function set(newValue) {
	            this.completeTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
	        get: function get() {
	            return this.showPageNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showPageNumbers) return;
	            this.showPageNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
	        get: function get() {
	            return this.showQuestionNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showQuestionNumbers) return;
	            this.showQuestionNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
	        get: function get() {
	            return this.questionTitleLocationValue;
	        },
	        set: function set(value) {
	            if (value === this.questionTitleLocationValue) return;
	            this.questionTitleLocationValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "data", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                result[key] = this.valuesHash[key];
	            }
	            return result;
	        },
	        set: function set(data) {
	            this.valuesHash = {};
	            if (data) {
	                for (var key in data) {
	                    this.valuesHash[key] = data[key];
	                    this.checkTriggers(key, data[key], false);
	                }
	            }
	            this.notifyAllQuestionsOnValueChanged();
	            this.runConditions();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "comments", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                if (key.indexOf(this.commentPrefix) > 0) {
	                    result[key] = this.valuesHash[key];
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
	        get: function get() {
	            if (this.isDesignMode) return this.pages;
	            var result = new Array();
	            for (var i = 0; i < this.pages.length; i++) {
	                if (this.pages[i].isVisible) {
	                    result.push(this.pages[i]);
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
	        get: function get() {
	            return this.pages.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "PageCount", {
	        get: function get() {
	            return this.pages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
	        get: function get() {
	            return this.visiblePages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "currentPage", {
	        get: function get() {
	            var vPages = this.visiblePages;
	            if (this.currentPageValue != null) {
	                if (vPages.indexOf(this.currentPageValue) < 0) {
	                    this.currentPage = null;
	                }
	            }
	            if (this.currentPageValue == null && vPages.length > 0) {
	                this.currentPage = vPages[0];
	            }
	            return this.currentPageValue;
	        },
	        set: function set(value) {
	            var vPages = this.visiblePages;
	            if (value != null && vPages.indexOf(value) < 0) return;
	            if (value == this.currentPageValue) return;
	            var oldValue = this.currentPageValue;
	            this.currentPageValue = value;
	            this.currentPageChanged(value, oldValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
	        get: function get() {
	            return this.visiblePages.indexOf(this.currentPage);
	        },
	        set: function set(value) {
	            var vPages = this.visiblePages;
	            if (value < 0 || value >= this.visiblePages.length) return;
	            this.currentPage = this.visiblePages[value];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.focusFirstQuestion = function () {
	        if (this.currentPageValue) {
	            this.currentPageValue.scrollToTop();
	            this.currentPageValue.focusFirstQuestion();
	        }
	    };
	    Object.defineProperty(SurveyModel.prototype, "state", {
	        get: function get() {
	            if (this.isLoading) return "loading";
	            if (this.isCompleted) return "completed";
	            return this.currentPage ? "running" : "empty";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.clear = function () {
	        this.data = null;
	        this.variablesHash = {};
	        this.isCompleted = false;
	        if (this.visiblePageCount > 0) {
	            this.currentPage = this.visiblePages[0];
	        }
	    };
	    SurveyModel.prototype.mergeValues = function (src, dest) {
	        if (!dest || !src) return;
	        for (var key in src) {
	            var value = src[key];
	            if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	                if (!dest[key]) dest[key] = {};
	                this.mergeValues(value, dest[key]);
	            } else {
	                dest[key] = value;
	            }
	        }
	    };
	    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
	        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
	    };
	    SurveyModel.prototype.getProgress = function () {
	        if (this.currentPage == null) return 0;
	        var index = this.visiblePages.indexOf(this.currentPage) + 1;
	        return Math.ceil(index * 100 / this.visiblePageCount);
	    };
	    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.mode == "designer";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
	        get: function get() {
	            if (!this.cookieName) return false;
	            var cookies = document.cookie;
	            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.setCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
	    };
	    SurveyModel.prototype.deleteCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=;";
	    };
	    SurveyModel.prototype.nextPage = function () {
	        if (this.isLastPage) return false;
	        if (this.isCurrentPageHasErrors) return false;
	        if (this.doServerValidation()) return false;
	        this.doNextPage();
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.currentPage.hasErrors(true, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.prevPage = function () {
	        if (this.isFirstPage) return false;
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index - 1];
	    };
	    SurveyModel.prototype.completeLastPage = function () {
	        if (this.isCurrentPageHasErrors) return false;
	        if (this.doServerValidation()) return false;
	        this.doComplete();
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.visiblePages.indexOf(this.currentPage) == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            var vPages = this.visiblePages;
	            return vPages.indexOf(this.currentPage) == vPages.length - 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.doComplete = function () {
	        if (this.clearInvisibleValues) {
	            this.clearInvisibleQuestionValues();
	        }
	        this.setCookie();
	        this.setCompleted();
	        this.onComplete.fire(this, null);
	        if (this.surveyPostId) {
	            this.sendResult();
	        }
	    };
	    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
	        get: function get() {
	            return this.isValidatingOnServerValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
	        if (val == this.isValidatingOnServer) return;
	        this.isValidatingOnServerValue = val;
	        this.onIsValidatingOnServerChanged();
	    };
	    SurveyModel.prototype.onIsValidatingOnServerChanged = function () {};
	    SurveyModel.prototype.doServerValidation = function () {
	        if (!this.onServerValidateQuestions) return false;
	        var self = this;
	        var options = { data: {}, errors: {}, survey: this, complete: function complete() {
	                self.completeServerValidation(options);
	            } };
	        for (var i = 0; i < this.currentPage.questions.length; i++) {
	            var question = this.currentPage.questions[i];
	            if (!question.visible) continue;
	            var value = this.getValue(question.name);
	            if (value) options.data[question.name] = value;
	        }
	        this.setIsValidatingOnServer(true);
	        this.onServerValidateQuestions(this, options);
	        return true;
	    };
	    SurveyModel.prototype.completeServerValidation = function (options) {
	        this.setIsValidatingOnServer(false);
	        if (!options && !options.survey) return;
	        var self = options.survey;
	        var hasErrors = false;
	        if (options.errors) {
	            for (var name in options.errors) {
	                var question = self.getQuestionByName(name);
	                if (question && question["errors"]) {
	                    hasErrors = true;
	                    question["addError"](new _error.CustomError(options.errors[name]));
	                }
	            }
	        }
	        if (!hasErrors) {
	            if (self.isLastPage) self.doComplete();else self.doNextPage();
	        }
	    };
	    SurveyModel.prototype.doNextPage = function () {
	        this.checkOnPageTriggers();
	        if (this.sendResultOnPageNext && this.clientId) {
	            this.sendResult(this.surveyPostId, this.clientId, true);
	        }
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index + 1];
	    };
	    SurveyModel.prototype.setCompleted = function () {
	        this.isCompleted = true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
	        get: function get() {
	            if (this.completedHtml) {
	                return this.processHtml(this.completedHtml);
	            }
	            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
	        get: function get() {
	            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "progressText", {
	        get: function get() {
	            if (this.currentPage == null) return "";
	            var vPages = this.visiblePages;
	            var index = vPages.indexOf(this.currentPage) + 1;
	            return this.getLocString("progressText")["format"](index, vPages.length);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
	        var accept = true;
	        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
	        if (!accept) return false;
	        if (!storeDataAsText && this.surveyPostId) {
	            this.uploadFileCore(name, file, uploadingCallback);
	        }
	        return true;
	    };
	    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
	        var self = this;
	        if (uploadingCallback) uploadingCallback("uploading");
	        new _dxSurveyService.dxSurveyService().sendFile(this.surveyPostId, file, function (success, response) {
	            if (uploadingCallback) uploadingCallback(success ? "success" : "error");
	            if (success) {
	                self.setValue(name, response);
	            }
	        });
	    };
	    SurveyModel.prototype.getPage = function (index) {
	        return this.pages[index];
	    };
	    SurveyModel.prototype.addPage = function (page) {
	        if (page == null) return;
	        this.pages.push(page);
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.addNewPage = function (name) {
	        var page = this.createNewPage(name);
	        this.addPage(page);
	        return page;
	    };
	    SurveyModel.prototype.removePage = function (page) {
	        var index = this.pages.indexOf(page);
	        if (index < 0) return;
	        this.pages.splice(index, 1);
	        if (this.currentPageValue == page) {
	            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
	        }
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var questions = this.getAllQuestions();
	        if (caseInsensitive) name = name.toLowerCase();
	        for (var i = 0; i < questions.length; i++) {
	            var questionName = questions[i].name;
	            if (caseInsensitive) questionName = questionName.toLowerCase();
	            if (questionName == name) return questions[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var question = this.getQuestionByName(names[i], caseInsensitive);
	            if (question) result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getPageByQuestion = function (question) {
	        for (var i = 0; i < this.pages.length; i++) {
	            var page = this.pages[i];
	            if (page.questions.indexOf(question) > -1) return page;
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPageByName = function (name) {
	        for (var i = 0; i < this.pages.length; i++) {
	            if (this.pages[i].name == name) return this.pages[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPagesByNames = function (names) {
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var page = this.getPageByName(names[i]);
	            if (page) result.push(page);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getAllQuestions = function (visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        var result = new Array();
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].addQuestionsToList(result, visibleOnly);
	        }
	        return result;
	    };
	    SurveyModel.prototype.createNewPage = function (name) {
	        return new _page.PageModel(name);
	    };
	    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
	        var questions = this.getAllQuestions();
	        var question = null;
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].name != name) continue;
	            question = questions[i];
	            this.doSurveyValueChanged(question, newValue);
	        }
	        this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
	    };
	    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
	        }
	    };
	    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
	        question.onSurveyValueChanged(newValue);
	    };
	    SurveyModel.prototype.checkOnPageTriggers = function () {
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            var question = questions[i];
	            var value = this.getValue(question.name);
	            this.checkTriggers(question.name, value, true);
	        }
	    };
	    SurveyModel.prototype.getCurrentPageQuestions = function () {
	        var result = [];
	        var page = this.currentPage;
	        if (!page) return result;
	        for (var i = 0; i < page.questions.length; i++) {
	            var question = page.questions[i];
	            if (!question.visible || !question.name) continue;
	            result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
	        for (var i = 0; i < this.triggers.length; i++) {
	            var trigger = this.triggers[i];
	            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
	                trigger.check(newValue);
	            }
	        }
	    };
	    SurveyModel.prototype.doQuestionsOnLoad = function () {
	        var questions = this.getAllQuestions(false);
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].onSurveyLoad();
	        }
	    };
	    SurveyModel.prototype.runConditions = function () {
	        this.runConditionsForList(this.getAllQuestions(false));
	        this.runConditionsForList(this.pages);
	    };
	    SurveyModel.prototype.runConditionsForList = function (list) {
	        for (var i = 0; i < list.length; i++) {
	            list[i].runCondition(this.valuesHash);
	        }
	    };
	    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
	        if (postId === void 0) {
	            postId = null;
	        }
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        if (!postId && this.surveyPostId) {
	            postId = this.surveyPostId;
	        }
	        if (!postId) return;
	        if (clientId) {
	            this.clientId = clientId;
	        }
	        var self = this;
	        new _dxSurveyService.dxSurveyService().sendResult(postId, this.data, function (success, response) {
	            self.onSendResult.fire(self, { success: success, response: response });
	        }, this.clientId, isPartialCompleted);
	    };
	    SurveyModel.prototype.getResult = function (resultId, name) {
	        var self = this;
	        new _dxSurveyService.dxSurveyService().getResult(resultId, name, function (success, data, dataList, response) {
	            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
	        });
	    };
	    SurveyModel.prototype.loadSurveyFromService = function (surveyId) {
	        if (surveyId === void 0) {
	            surveyId = null;
	        }
	        if (surveyId) {
	            this.surveyId = surveyId;
	        }
	        var self = this;
	        this.isLoading = true;
	        this.onLoadingSurveyFromService();
	        new _dxSurveyService.dxSurveyService().loadSurvey(this.surveyId, function (success, result, response) {
	            self.isLoading = false;
	            if (success && result) {
	                self.setJsonObject(result);
	                self.notifyAllQuestionsOnValueChanged();
	                self.onLoadSurveyFromService();
	            }
	        });
	    };
	    SurveyModel.prototype.onLoadingSurveyFromService = function () {};
	    SurveyModel.prototype.onLoadSurveyFromService = function () {};
	    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
	        var page = this.getPageByQuestion(question);
	        if (!page) return;
	        var newValue = page.isVisible;
	        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
	            this.pageVisibilityChanged(page, newValue);
	        }
	    };
	    SurveyModel.prototype.updateVisibleIndexes = function () {
	        this.updatePageVisibleIndexes(this.showPageNumbers);
	        if (this.showQuestionNumbers == "onPage") {
	            var visPages = this.visiblePages;
	            for (var i = 0; i < visPages.length; i++) {
	                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
	            }
	        } else {
	            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
	        }
	    };
	    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
	        var index = 0;
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].visibleIndex = this.pages[i].visible ? index++ : -1;
	            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
	        }
	    };
	    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
	        var index = 0;
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].setVisibleIndex(showIndex && questions[i].visible && questions[i].hasTitle ? index++ : -1);
	        }
	    };
	    SurveyModel.prototype.setJsonObject = function (jsonObj) {
	        if (!jsonObj) return;
	        this.jsonErrors = null;
	        var jsonConverter = new _jsonobject.JsonObject();
	        jsonConverter.toObject(jsonObj, this);
	        if (jsonConverter.errors.length > 0) {
	            this.jsonErrors = jsonConverter.errors;
	        }
	        this.updateProcessedTextValues();
	        if (this.hasCookie) {
	            this.doComplete();
	        }
	        this.doQuestionsOnLoad();
	        this.runConditions();
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.onBeforeCreating = function () {};
	    SurveyModel.prototype.onCreating = function () {};
	    SurveyModel.prototype.updateProcessedTextValues = function () {
	        this.processedTextValues = {};
	        var self = this;
	        this.processedTextValues["pageno"] = function (name) {
	            return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0;
	        };
	        this.processedTextValues["pagecount"] = function (name) {
	            return self.visiblePageCount;
	        };
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.addQuestionToProcessedTextValues(questions[i]);
	        }
	    };
	    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
	        this.processedTextValues[question.name.toLowerCase()] = "question";
	    };
	    SurveyModel.prototype.getProcessedTextValue = function (name) {
	        var name = name.toLowerCase();
	        var val = this.processedTextValues[name];
	        if (!val) return null;
	        if (val == "question") {
	            var question = this.getQuestionByName(name, true);
	            return question != null ? this.getValue(question.name) : null;
	        }
	        if (val == "value") {
	            return this.getValue(name);
	        }
	        if (val == "variable") {
	            return this.getVariable(name);
	        }
	        return val(name);
	    };
	    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].visible) continue;
	            this.setValue(questions[i].name, null);
	        }
	    };
	    SurveyModel.prototype.getVariable = function (name) {
	        if (!name) return null;
	        return this.variablesHash[name];
	    };
	    SurveyModel.prototype.setVariable = function (name, newValue) {
	        if (!name) return;
	        this.variablesHash[name] = newValue;
	        this.processedTextValues[name.toLowerCase()] = "variable";
	    };
	    //ISurvey data
	    SurveyModel.prototype.getUnbindValue = function (value) {
	        if (value && value instanceof Object) {
	            //do not return the same object instance!!!
	            return JSON.parse(JSON.stringify(value));
	        }
	        return value;
	    };
	    SurveyModel.prototype.getValue = function (name) {
	        if (!name || name.length == 0) return null;
	        var value = this.valuesHash[name];
	        return this.getUnbindValue(value);
	    };
	    SurveyModel.prototype.setValue = function (name, newValue) {
	        if (this.isValueEqual(name, newValue)) return;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            newValue = this.getUnbindValue(newValue);
	            this.valuesHash[name] = newValue;
	            this.processedTextValues[name.toLowerCase()] = "value";
	        }
	        this.notifyQuestionOnValueChanged(name, newValue);
	        this.checkTriggers(name, newValue, false);
	        this.runConditions();
	        this.tryGoNextPageAutomatic(name);
	    };
	    SurveyModel.prototype.isValueEqual = function (name, newValue) {
	        if (newValue == "") newValue = null;
	        var oldValue = this.getValue(name);
	        if (newValue === null || oldValue === null) return newValue === oldValue;
	        return this.isTwoValueEquals(newValue, oldValue);
	    };
	    SurveyModel.prototype.isTwoValueEquals = function (x, y) {
	        if (x === y) return true;
	        if (!(x instanceof Object) || !(y instanceof Object)) return false;
	        for (var p in x) {
	            if (!x.hasOwnProperty(p)) continue;
	            if (!y.hasOwnProperty(p)) return false;
	            if (x[p] === y[p]) continue;
	            if (_typeof(x[p]) !== "object") return false;
	            if (!this.isTwoValueEquals(x[p], y[p])) return false;
	        }
	        for (p in y) {
	            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
	        }
	        return true;
	    };
	    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
	        if (!this.goNextPageAutomatic || !this.currentPage) return;
	        var question = this.getQuestionByName(name);
	        if (question && !question.supportGoNextPageAutomatic()) return;
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (!this.getValue(questions[i].name)) return;
	        }
	        if (!this.currentPage.hasErrors(true, false)) {
	            if (!this.isLastPage) {
	                this.nextPage();
	            } else {
	                this.doComplete();
	            }
	        }
	    };
	    SurveyModel.prototype.getComment = function (name) {
	        var result = this.data[name + this.commentPrefix];
	        if (result == null) result = "";
	        return result;
	    };
	    SurveyModel.prototype.setComment = function (name, newValue) {
	        name = name + this.commentPrefix;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            this.valuesHash[name] = newValue;
	            this.tryGoNextPageAutomatic(name);
	        }
	    };
	    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
	        this.updateVisibleIndexes();
	        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
	        this.checkPageVisibility(question, !newValue);
	    };
	    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
	        this.updateVisibleIndexes();
	        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
	    };
	    SurveyModel.prototype.questionAdded = function (question, index) {
	        this.updateVisibleIndexes();
	        this.addQuestionToProcessedTextValues(question);
	        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index });
	    };
	    SurveyModel.prototype.questionRemoved = function (question) {
	        this.updateVisibleIndexes();
	        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
	    };
	    SurveyModel.prototype.validateQuestion = function (name) {
	        if (this.onValidateQuestion.isEmpty) return null;
	        var options = { name: name, value: this.getValue(name), error: null };
	        this.onValidateQuestion.fire(this, options);
	        return options.error ? new _error.CustomError(options.error) : null;
	    };
	    SurveyModel.prototype.processHtml = function (html) {
	        var options = { html: html };
	        this.onProcessHtml.fire(this, options);
	        return this.processText(options.html);
	    };
	    SurveyModel.prototype.processText = function (text) {
	        return this.textPreProcessor.process(text);
	    };
	    //ISurveyTriggerOwner
	    SurveyModel.prototype.getObjects = function (pages, questions) {
	        var result = [];
	        Array.prototype.push.apply(result, this.getPagesByNames(pages));
	        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
	        return result;
	    };
	    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
	        if (!name) return;
	        if (isVariable) {
	            this.setVariable(name, value);
	        } else {
	            this.setValue(name, value);
	        }
	    };
	    return SurveyModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("survey", [{ name: "locale", choices: function choices() {
	        return _surveyStrings.surveyLocalization.getLocales();
	    } }, "title", "completedHtml:html", { name: "pages", className: "page" }, { name: "questions", baseClassName: "question", onGetValue: function onGetValue(obj) {
	        return null;
	    }, onSetValue: function onSetValue(obj, value, jsonConverter) {
	        var page = obj.addNewPage("");jsonConverter.toObject({ questions: value }, page);
	    } }, { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" }, "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean", { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true }, { name: "showPageTitles:boolean", default: true }, "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] }, { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] }, { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }, { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean", { name: "pagePrevText", onGetValue: function onGetValue(obj) {
	        return obj.pagePrevTextValue;
	    } }, { name: "pageNextText", onGetValue: function onGetValue(obj) {
	        return obj.pageNextTextValue;
	    } }, { name: "completeText", onGetValue: function onGetValue(obj) {
	        return obj.completeTextValue;
	    } }, { name: "requiredText", default: "*" }, "questionStartIndex", "questionTitleTemplate"]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var dxSurveyService = exports.dxSurveyService = function () {
	    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
	    function dxSurveyService() {}
	    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        xhr.onload = function () {
	            var result = JSON.parse(xhr.response);
	            onLoad(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
	        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	        var data = { postId: postId, surveyResult: JSON.stringify(result) };
	        if (clientId) data['clientId'] = clientId;
	        if (isPartialCompleted) data['isPartialCompleted'] = true;
	        var dataStringify = JSON.stringify(data);
	        var self = this;
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendResult) return;
	            onSendResult(xhr.status == 200, xhr.response);
	        };
	        xhr.send(dataStringify);
	    };
	    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
	        var xhr = new XMLHttpRequest();
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendFile) return;
	            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
	        };
	        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
	        var formData = new FormData();
	        formData.append("file", file);
	        formData.append("postId", postId);
	        xhr.send(formData);
	    };
	    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&name=' + name;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            var list = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	                list = [];
	                for (var key in result.QuestionResult) {
	                    var el = { name: key, value: result.QuestionResult[key] };
	                    list.push(el);
	                }
	            }
	            onGetResult(xhr.status == 200, result, list, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&clientId=' + clientId;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	            }
	            onIsCompleted(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";
	    return dxSurveyService;
	}();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyTriggerSetValue = exports.SurveyTriggerComplete = exports.SurveyTriggerVisible = exports.SurveyTrigger = exports.Trigger = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var Trigger = exports.Trigger = function (_super) {
	    __extends(Trigger, _super);
	    function Trigger() {
	        _super.call(this);
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Trigger, "operators", {
	        get: function get() {
	            if (Trigger.operatorsValue != null) return Trigger.operatorsValue;
	            Trigger.operatorsValue = {
	                empty: function empty(value, expectedValue) {
	                    return !value;
	                },
	                notempty: function notempty(value, expectedValue) {
	                    return !!value;
	                },
	                equal: function equal(value, expectedValue) {
	                    return value == expectedValue;
	                },
	                notequal: function notequal(value, expectedValue) {
	                    return value != expectedValue;
	                },
	                contains: function contains(value, expectedValue) {
	                    return value && value["indexOf"] && value.indexOf(expectedValue) > -1;
	                },
	                notcontains: function notcontains(value, expectedValue) {
	                    return !value || !value["indexOf"] || value.indexOf(expectedValue) == -1;
	                },
	                greater: function greater(value, expectedValue) {
	                    return value > expectedValue;
	                },
	                less: function less(value, expectedValue) {
	                    return value < expectedValue;
	                },
	                greaterorequal: function greaterorequal(value, expectedValue) {
	                    return value >= expectedValue;
	                },
	                lessorequal: function lessorequal(value, expectedValue) {
	                    return value <= expectedValue;
	                }
	            };
	            return Trigger.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Trigger.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Trigger.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Trigger.prototype.check = function (value) {
	        if (Trigger.operators[this.operator](value, this.value)) {
	            this.onSuccess();
	        } else {
	            this.onFailure();
	        }
	    };
	    Trigger.prototype.onSuccess = function () {};
	    Trigger.prototype.onFailure = function () {};
	    Trigger.operatorsValue = null;
	    return Trigger;
	}(_base.Base);
	var SurveyTrigger = exports.SurveyTrigger = function (_super) {
	    __extends(SurveyTrigger, _super);
	    function SurveyTrigger() {
	        _super.call(this);
	        this.owner = null;
	    }
	    SurveyTrigger.prototype.setOwner = function (owner) {
	        this.owner = owner;
	    };
	    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyTrigger;
	}(Trigger);
	var SurveyTriggerVisible = exports.SurveyTriggerVisible = function (_super) {
	    __extends(SurveyTriggerVisible, _super);
	    function SurveyTriggerVisible() {
	        _super.call(this);
	        this.pages = [];
	        this.questions = [];
	    }
	    SurveyTriggerVisible.prototype.getType = function () {
	        return "visibletrigger";
	    };
	    SurveyTriggerVisible.prototype.onSuccess = function () {
	        this.onTrigger(this.onItemSuccess);
	    };
	    SurveyTriggerVisible.prototype.onFailure = function () {
	        this.onTrigger(this.onItemFailure);
	    };
	    SurveyTriggerVisible.prototype.onTrigger = function (func) {
	        if (!this.owner) return;
	        var objects = this.owner.getObjects(this.pages, this.questions);
	        for (var i = 0; i < objects.length; i++) {
	            func(objects[i]);
	        }
	    };
	    SurveyTriggerVisible.prototype.onItemSuccess = function (item) {
	        item.visible = true;
	    };
	    SurveyTriggerVisible.prototype.onItemFailure = function (item) {
	        item.visible = false;
	    };
	    return SurveyTriggerVisible;
	}(SurveyTrigger);
	var SurveyTriggerComplete = exports.SurveyTriggerComplete = function (_super) {
	    __extends(SurveyTriggerComplete, _super);
	    function SurveyTriggerComplete() {
	        _super.call(this);
	    }
	    SurveyTriggerComplete.prototype.getType = function () {
	        return "completetrigger";
	    };
	    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyTriggerComplete.prototype.onSuccess = function () {
	        if (this.owner) this.owner.doComplete();
	    };
	    return SurveyTriggerComplete;
	}(SurveyTrigger);
	var SurveyTriggerSetValue = exports.SurveyTriggerSetValue = function (_super) {
	    __extends(SurveyTriggerSetValue, _super);
	    function SurveyTriggerSetValue() {
	        _super.call(this);
	    }
	    SurveyTriggerSetValue.prototype.getType = function () {
	        return "setvaluetrigger";
	    };
	    SurveyTriggerSetValue.prototype.onSuccess = function () {
	        if (!this.setToName || !this.owner) return;
	        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
	    };
	    return SurveyTriggerSetValue;
	}(SurveyTrigger);
	_jsonobject.JsonObject.metaData.addClass("trigger", ["operator", "!value"]);
	_jsonobject.JsonObject.metaData.addClass("surveytrigger", ["!name"], null, "trigger");
	_jsonobject.JsonObject.metaData.addClass("visibletrigger", ["pages", "questions"], function () {
	    return new SurveyTriggerVisible();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("completetrigger", [], function () {
	    return new SurveyTriggerComplete();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () {
	    return new SurveyTriggerSetValue();
	}, "surveytrigger");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _survey = __webpack_require__(30);
	
	var SurveyWindowModel = exports.SurveyWindowModel = function (_super) {
	    __extends(SurveyWindowModel, _super);
	    function SurveyWindowModel(jsonObj) {
	        _super.call(this);
	        this.surveyValue = this.createSurvey(jsonObj);
	        this.surveyValue.showTitle = false;
	        this.windowElement = document.createElement("div");
	    }
	    SurveyWindowModel.prototype.getType = function () {
	        return "window";
	    };
	    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
	        get: function get() {
	            return this.isShowingValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
	        get: function get() {
	            return this.isExpandedValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.survey.title;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindowModel.prototype.expand = function () {
	        this.expandcollapse(true);
	    };
	    SurveyWindowModel.prototype.collapse = function () {
	        this.expandcollapse(false);
	    };
	    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
	        return new _survey.SurveyModel(jsonObj);
	    };
	    SurveyWindowModel.prototype.expandcollapse = function (value) {
	        this.isExpandedValue = value;
	    };
	    SurveyWindowModel.surveyElementName = "windowSurveyJS";
	    return SurveyWindowModel;
	}(_base.Base);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	
	var _questionfactory = __webpack_require__(16);
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	// Use the Question class as a base class.
	var QuestionDateModel = function (_super) {
	    __extends(QuestionDateModel, _super);
	    function QuestionDateModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        //Define properties 
	        this.showOtherMonths = false;
	        this.selectOtherMonths = false;
	        this.showButtonPanel = false;
	        this.changeMonth = false;
	        this.changeYear = false;
	        this.numberOfMonths = 1;
	        this.minDate = "";
	        this.maxDate = "";
	    }
	    //"date" - identificator that will json serializer what question to create.
	    QuestionDateModel.prototype.getType = function () {
	        return "date";
	    };
	    //Script that will make from a text input a jquery Date editor.
	    QuestionDateModel.prototype.getjQueryScript = function (selectorId) {
	        var json = this.getOptions();
	        return "$('#" + selectorId + "').datepicker(" + JSON.stringify(json) + ");";
	    };
	    QuestionDateModel.prototype.getOptions = function () {
	        var options = {};
	        if (this.showOtherMonths) options["showOtherMonths"] = this.showOtherMonths;
	        if (this.selectOtherMonths) options["selectOtherMonths"] = this.selectOtherMonths;
	        if (this.showButtonPanel) options["showButtonPanel"] = this.showButtonPanel;
	        if (this.changeMonth) options["changeMonth"] = this.changeMonth;
	        if (this.changeYear) options["changeYear"] = this.changeYear;
	        if (this.numberOfMonths > 1) options["numberOfMonths"] = this.numberOfMonths;
	        if (this.minDate) options["minDate"] = "'" + this.minDate + "'";
	        if (this.minDate) options["maxDate"] = "'" + this.maxDate + "'";
	        return options;
	    };
	    QuestionDateModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionDateModel;
	}(_question.Question);
	exports.default = QuestionDateModel;
	//add class and it's properties into json meta data.
	
	_jsonobject.JsonObject.metaData.addClass("date", //"date" - question type identificator
	//list of properties with their types (string is default) and other options.
	//For example: choices option will used by survey editor. There will be a dropdown editor with 5 options.
	["showOtherMonths:boolean", "selectOtherMonths:boolean", "showButtonPanel:boolean", "changeMonth:boolean", "changeYear:boolean", { name: "numberOfMonths", default: 1, choices: [1, 2, 3, 4, 5] }, "minDate", "maxDate"],
	//json deserializer will call this function to create the object
	function () {
	    return new QuestionDateModel("");
	},
	//tell json serializer that we are inherited from 'question' class and we want to use all 'question' properties as well.
	"question");
	//Register the class as a quesiton. Survey editor will know it is a question and it will show it in question toolbox.
	_questionfactory.QuestionFactory.Instance.registerQuestion("date", function (name) {
	    return new QuestionDateModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyCss = exports.surveyCss = {
	    currentType: "",
	    getCss: function getCss() {
	        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
	        if (!loc) loc = defaultStandardCss;
	        return loc;
	    }
	};
	var defaultStandardCss = exports.defaultStandardCss = {
	    root: "sv_main",
	    header: "",
	    body: "sv_body",
	    footer: "sv_nav",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "sv_progress", progressBar: "",
	    pageTitle: "sv_p_title",
	    row: "sv_row",
	    question: { root: "sv_q", title: "sv_q_title", comment: "", indent: 20 },
	    error: { root: "sv_q_erbox", icon: "", item: "" },
	    checkbox: { root: "sv_qcbc", item: "sv_q_checkbox", other: "sv_q_other" },
	    comment: "",
	    dropdown: "",
	    matrix: { root: "sv_q_matrix" },
	    matrixdropdown: { root: "sv_q_matrix" },
	    matrixdynamic: { root: "table", button: "" },
	    multipletext: { root: "", itemTitle: "", itemValue: "" },
	    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", other: "sv_q_other" },
	    rating: { root: "sv_q_rating", item: "sv_q_rating_item" },
	    text: "",
	    window: {
	        root: "sv_window", body: "sv_window_content",
	        header: {
	            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
	        }
	    }
	};
	surveyCss["standard"] = defaultStandardCss;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Survey = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _survey = __webpack_require__(30);
	
	var _base = __webpack_require__(4);
	
	var _kopage = __webpack_require__(38);
	
	var _cssstandard = __webpack_require__(35);
	
	var _templateKo = __webpack_require__(39);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Survey = exports.Survey = function (_super) {
	    __extends(Survey, _super);
	    function Survey(jsonObj, renderedElement, css) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        if (renderedElement === void 0) {
	            renderedElement = null;
	        }
	        if (css === void 0) {
	            css = null;
	        }
	        _super.call(this, jsonObj);
	        this.onRendered = new _base.Event();
	        this.isFirstRender = true;
	        if (css) {
	            this.css = css;
	        }
	        if (renderedElement) {
	            this.renderedElement = renderedElement;
	        }
	        if (typeof ko === 'undefined') throw new Error('knockoutjs library is not loaded.');
	        this.render(renderedElement);
	    }
	    Object.defineProperty(Survey, "cssType", {
	        get: function get() {
	            return _cssstandard.surveyCss.currentType;
	        },
	        set: function set(value) {
	            _cssstandard.surveyCss.currentType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationComplete", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.complete);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationPrev", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.prev);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationNext", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.next);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.getNavigationCss = function (main, btn) {
	        var res = "";
	        if (main) res = main;
	        if (btn) res += ' ' + btn;
	        return res;
	    };
	    Object.defineProperty(Survey.prototype, "css", {
	        get: function get() {
	            return _cssstandard.surveyCss.getCss();
	        },
	        set: function set(value) {
	            this.mergeValues(value, this.css);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.render = function (element) {
	        if (element === void 0) {
	            element = null;
	        }
	        var self = this;
	        if (element && typeof element == "string") {
	            element = document.getElementById(element);
	        }
	        if (element) {
	            this.renderedElement = element;
	        }
	        element = this.renderedElement;
	        if (!element) return;
	        element.innerHTML = this.getTemplate();
	        self.applyBinding();
	        self.onRendered.fire(self, {});
	    };
	    Survey.prototype.loadSurveyFromService = function (surveyId, renderedElement) {
	        if (surveyId === void 0) {
	            surveyId = null;
	        }
	        if (renderedElement === void 0) {
	            renderedElement = null;
	        }
	        if (renderedElement) {
	            this.renderedElement = renderedElement;
	        }
	        _super.prototype.loadSurveyFromService.call(this, surveyId);
	    };
	    Survey.prototype.setCompleted = function () {
	        _super.prototype.setCompleted.call(this);
	        this.updateKoCurrentPage();
	    };
	    Survey.prototype.createNewPage = function (name) {
	        return new _kopage.Page(name);
	    };
	    Survey.prototype.getTemplate = function () {
	        return _templateKo.koTemplate.html;
	    };
	    Survey.prototype.onBeforeCreating = function () {
	        var self = this;
	        this.dummyObservable = ko.observable(0);
	        this.koCurrentPage = ko.computed(function () {
	            self.dummyObservable();return self.currentPage;
	        });
	        this.koIsFirstPage = ko.computed(function () {
	            self.dummyObservable();return self.isFirstPage;
	        });
	        this.koIsLastPage = ko.computed(function () {
	            self.dummyObservable();return self.isLastPage;
	        });
	        this.koProgressText = ko.computed(function () {
	            self.dummyObservable();return self.progressText;
	        });
	        this.koProgress = ko.computed(function () {
	            self.dummyObservable();return self.getProgress();
	        });
	        this.koState = ko.computed(function () {
	            self.dummyObservable();return self.state;
	        });
	    };
	    Survey.prototype.currentPageChanged = function (newValue, oldValue) {
	        this.updateKoCurrentPage();
	        _super.prototype.currentPageChanged.call(this, newValue, oldValue);
	        if (!this.isDesignMode) this.focusFirstQuestion();
	    };
	    Survey.prototype.pageVisibilityChanged = function (page, newValue) {
	        _super.prototype.pageVisibilityChanged.call(this, page, newValue);
	        this.updateKoCurrentPage();
	    };
	    Survey.prototype.onLoadSurveyFromService = function () {
	        this.render();
	    };
	    Survey.prototype.onLoadingSurveyFromService = function () {
	        this.render();
	    };
	    Survey.prototype.applyBinding = function () {
	        if (!this.renderedElement) return;
	        this.updateKoCurrentPage();
	        ko.cleanNode(this.renderedElement);
	        if (!this.isFirstRender) {
	            this.updateCurrentPageQuestions();
	        }
	        this.isFirstRender = false;
	        ko.applyBindings(this, this.renderedElement);
	    };
	    Survey.prototype.updateKoCurrentPage = function () {
	        this.dummyObservable(this.dummyObservable() + 1);
	    };
	    Survey.prototype.updateCurrentPageQuestions = function () {
	        var questions = this.currentPage ? this.currentPage.questions : [];
	        for (var i = 0; i < questions.length; i++) {
	            var q = questions[i];
	            if (q.visible) q["updateQuestion"]();
	        }
	    };
	    return Survey;
	}(_survey.SurveyModel);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Page = exports.QuestionRow = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _page = __webpack_require__(21);
	
	var _jsonobject = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionRow = exports.QuestionRow = function (_super) {
	    __extends(QuestionRow, _super);
	    function QuestionRow(page, question) {
	        _super.call(this, page, question);
	        this.page = page;
	        this.question = question;
	        this.koVisible = ko.observable(this.visible);
	    }
	    QuestionRow.prototype.onVisibleChanged = function () {
	        this.koVisible(this.visible);
	    };
	    QuestionRow.prototype.koAfterRender = function (el, con) {
	        for (var i = 0; i < el.length; i++) {
	            var tEl = el[i];
	            var nName = tEl.nodeName;
	            if (nName == "#text") tEl.data = "";
	        }
	    };
	    return QuestionRow;
	}(_page.QuestionRowModel);
	var Page = exports.Page = function (_super) {
	    __extends(Page, _super);
	    function Page(name) {
	        if (name === void 0) {
	            name = "";
	        }
	        _super.call(this, name);
	        this.koNo = ko.observable("");
	        this.onCreating();
	    }
	    Page.prototype.createRow = function (question) {
	        return new QuestionRow(this, question);
	    };
	    Page.prototype.onCreating = function () {};
	    Page.prototype.onNumChanged = function (value) {
	        this.koNo(value > 0 ? value + ". " : "");
	    };
	    return Page;
	}(_page.PageModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("page", function () {
	    return new Page();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<script type="text/html" id="survey-comment">  <input data-bind="value:$data.question.koComment, visible:$data.visible, css: $root.css.question.comment"></script><div data-bind="css: $root.css.root">  <div data-bind="visible: (title.length > 0) && showTitle && koState() != \'completed\', css: $root.css.header">    <h3 data-bind="text:title"></h3>  </div>  <!-- ko if: koState() == "running" -->  <div data-bind="css: $root.css.body">    <div data-bind="visible: showProgressBar ==\'top\', template: { name: \'survey-progress\', data: $data }"></div>    <div id="sq_page" data-bind="template: { name: \'survey-page\', data: koCurrentPage }"></div>    <div style="margin-top:10px" data-bind="visible: showProgressBar ==\'bottom\', template: { name: \'survey-progress\', data: $data }"></div>  </div>  <div data-bind="visible: showNavigationButtons && !isDesignMode, css: $root.css.footer">    <input type="button" id="pagePrev" data-bind="value: pagePrevText, click: prevPage, visible: !koIsFirstPage(), css: $root.cssNavigationPrev">    <input type="button" id="PageNext" data-bind="value: pageNextText, click: nextPage, visible: !koIsLastPage(), css: $root.cssNavigationNext">    <input type="button" id="pageComplete" data-bind="value: completeText, click: completeLastPage, visible: koIsLastPage(), css: $root.cssNavigationComplete">  </div>  <!-- /ko -->  <!-- ko if: koState() == "completed" -->  <div data-bind="html: processedCompletedHtml"></div>  <!-- /ko -->  <!-- ko if: koState() == "loading" -->  <div data-bind="html: processedLoadingHtml"></div>  <!-- /ko -->  <!-- ko if: koState() == "empty" -->  <div data-bind="text:emptySurveyText, css: $root.css.body"></div>  <!-- /ko --></div><script type="text/html" id="survey-page">  <h4 data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle"></h4>  <!-- ko foreach: { data: rows, as: \'row\'} -->  <div data-bind="visible: row.koVisible, css: $root.css.row">    <!-- ko foreach: { data: row.questions, as: \'question\' , afterRender: row.koAfterRender } -->      <!-- ko template: { name: \'survey-question\', data: question } --><!-- /ko -->    <!-- /ko -->  </div>  <!-- /ko --></script><script type="text/html" id="survey-progress">  <div style="width:80%;align:center" data-bind="css: $root.css.progress">    <div data-bind="css: $root.css.progressBar, style:{width: koProgress() + \'%\'}" role="progressbar" aria-valuemin="0" aria-valuemax="100">      <span data-bind="text: koProgressText"></span>    </div>  </div></script><script type="text/html" id="survey-question-checkbox">  <form data-bind="css: $root.css.checkbox.root">    <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->    <div data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.checkbox.item">      <label data-bind="css: $root.css.checkbox.item">        <input type="checkbox" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />        <span data-bind="text: item.text"></span>      </label>      <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }, css: $root.css.checkbox.other"></div>      </div>    </div>    <!-- /ko -->  </form></script><script type="text/html" id="survey-question-comment">  <textarea type="text" data-bind="attr: {cols: question.cols, rows: question.rows, id: question.inputId}, value:question.koValue, css: $root.css.comment" /></script><script type="text/html" id="survey-question-dropdown">  <select data-bind="attr: {id: question.inputId}, options: question.koVisibleChoices, optionsText: \'text\', optionsValue: \'value\', value: question.koValue, optionsCaption: question.optionsCaption, css: $root.css.dropdown"></select>  <div data-bind="visible: question.hasOther">    <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>  </div></script><script type="text/html" id="survey-question-errors">  <div role="alert" data-bind="visible: koErrors().length > 0, foreach: { data: koErrors, as: \'error\'}, css: $root.css.error.root">    <div>      <span aria-hidden="true" data-bind="css: $root.css.error.icon"></span>      <span data-bind="text:error.getText(), css: $root.css.error.item"></span>    </div>  </div></script><script type="text/html" id="survey-question-file">  <label class="btn btn-default btn-sm">Browse<input type="file" data-bind="attr: {id: question.inputId}, event: {change: dochange}" style="display:none" onchange="$(\'#upload-file-info\').html($(this).val());"></label>  <kbd id="upload-file-info">Please select a image file</kbd>  <div style="margin-top:15px"><img data-bind="attr: { src: question.koData, height: question.imageHeight, width: question.imageWidth }, visible: question.koHasValue"></div></script><script type="text/html" id="survey-question-html">  <div data-bind="html: question.processedHtml"></div></script><script type="text/html" id="survey-question-matrix">  <table data-bind="css: $root.css.matrix.root">    <thead>      <tr>        <th data-bind="visible: question.hasRows"></th>        <!-- ko foreach: question.columns -->        <th data-bind="text:$data.text"></th>        <!-- /ko -->      </tr>    </thead>    <tbody>      <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->      <tr>        <td data-bind="visible: question.hasRows, text:row.text"></td>        <!-- ko foreach: question.columns -->        <td>          <input type="radio" data-bind="attr: {name: row.fullName, value: $data.value, id: ($index() == 0) && ($parentContext.$index() == 0) ? question.inputId : \'\'}, checked: row.koValue"/>        </td>        <!-- /ko -->      </tr>      <!-- /ko -->    </tbody>  </table></script><script type="text/html" id="survey-question-matrixdropdown">  <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">    <table data-bind="css: $root.css.matrixdropdown.root">      <thead>        <tr>          <th></th>          <!-- ko foreach: question.columns -->          <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>          <!-- /ko -->        </tr>      </thead>      <tbody>        <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->        <tr>          <td data-bind="text:row.text"></td>          <!-- ko foreach: row.cells-->          <td>            <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->            <!-- /ko -->            <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->            <!-- /ko -->          </td>          <!-- /ko -->        </tr>        <!-- /ko -->      </tbody>    </table>  </div></script><script type="text/html" id="survey-question-matrixdynamic">  <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">    <table data-bind="css: $root.css.matrixdynamic.root">      <thead>        <tr>          <!-- ko foreach: question.columns -->          <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>          <!-- /ko -->          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: { data: question.koRows, as: \'row\' } -->        <tr>          <!-- ko foreach: row.cells-->          <td>            <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->            <!-- /ko -->            <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->            <!-- /ko -->          </td>          <!-- /ko -->          <td><input type="button" data-bind="click:question.koRemoveRowClick, css: $root.css.matrixdynamic.button, value: question.removeRowText"></td>        </tr>        <!-- /ko -->      </tbody>    </table>  </div>  <input type="button" data-bind="click:question.koAddRowClick, css: $root.css.matrixdynamic.button, value: question.addRowText"></script><script type="text/html" id="survey-question-multipletext">  <table data-bind="css: $root.css.multipletext.root, foreach: { data:  question.koRows, as: \'row\' }">    <tr data-bind="foreach: { data: row, as: \'item\' }">      <td data-bind="text: item.title, css: $root.css.multipletext.itemTitle"></td>      <td><input type="text" style="float:left" data-bind="attr: {size: question.itemSize, id: ($index() == 0) ? question.inputId : \'\'}, value: item.koValue, css: $root.css.multipletext.itemValue"></td>    </tr>  </table></script><script type="text/html" id="survey-question-radiogroup">  <form data-bind="css: $root.css.radiogroup.root">    <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->    <div  data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.radiogroup.item">      <label data-bind="css: $root.css.radiogroup.item">        <input type="radio" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />        <span data-bind="text: item.text"></span>      </label>      <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible}}, css: $root.css.radiogroup.other"></div>      </div>    </div>    <!-- /ko -->  </form></script><script type="text/html" id="survey-question-rating">  <div data-bind="css: $root.css.rating.root">    <!-- ko foreach: question.koVisibleRateValues -->    <label data-bind="css: question.koGetCss($data)">      <input type="radio" style="display:none" data-bind="attr: {name: question.name, id: question.name + $index(), value: $data.value}, event: { change: question.koChange}" />      <span data-bind="visible: $index() == 0, text: question.mininumRateDescription"></span>      <span data-bind="text: $data.text"></span>      <span data-bind="visible: $index() == (question.koVisibleRateValues().length-1), text: question.maximumRateDescription"></span>    </label>    <!-- /ko -->  </div>  <div data-bind="visible: question.hasOther">    <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question } }"></div>  </div></script><script type="text/html" id="survey-question-text">  <input data-bind="attr: {type: question.inputType, size: question.size, id: question.inputId}, value:question.koValue, css: $root.css.text"></script><script type="text/html" id="survey-question">  <div style="vertical-align:top" data-bind="css: $root.css.question.root, style: {display: question.koVisible() ? \'inline-block\': \'none\', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr: {id: id}">    <!-- ko if: question.hasTitle -->    <h4 data-bind="visible: $root.questionTitleLocation == \'top\', text: question.koTitle(), css: $root.css.question.title"></h4>    <!-- /ko -->    <!-- ko template: { name: \'survey-question-errors\', data: question } -->    <!-- /ko -->    <!-- ko template: { name: \'survey-question-\' + question.getType(), data: question, afterRender: question.koQuestionAfterRender } -->    <!-- /ko -->    <div data-bind="visible: question.hasComment">      <div data-bind="text:question.commentText" class="commentText"></div>      <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': true } }"></div>    </div>    <!-- ko if: question.hasTitle -->    <h4 data-bind="visible: $root.questionTitleLocation == \'bottom\', text: question.koTitle(), css: $root.css.question.title"></h4>    <!-- /ko -->  </div></script><script type="text/html" id="survey-question-date">  <input type="text" data-bind="attr: {size: question.size, id: question.dateId}, value:question.koValue, css: $root.css.text"></script>';

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementorBase = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionImplementorBase = exports.QuestionImplementorBase = function () {
	    function QuestionImplementorBase(question) {
	        this.question = question;
	        var self = this;
	        question.visibilityChangedCallback = function () {
	            self.onVisibilityChanged();
	        };
	        question.renderWidthChangedCallback = function () {
	            self.onRenderWidthChanged();
	        };
	        this.koVisible = ko.observable(this.question.visible);
	        this.koRenderWidth = ko.observable(this.question.renderWidth);
	        this.koErrors = ko.observableArray();
	        this.koMarginLeft = ko.pureComputed(function () {
	            self.koRenderWidth();return self.getIndentSize(self.question.indent);
	        });
	        this.koPaddingRight = ko.observable(self.getIndentSize(self.question.rightIndent));
	        this.question["koVisible"] = this.koVisible;
	        this.question["koRenderWidth"] = this.koRenderWidth;
	        this.question["koErrors"] = this.koErrors;
	        this.question["koMarginLeft"] = this.koMarginLeft;
	        this.question["koPaddingRight"] = this.koPaddingRight;
	        this.question["updateQuestion"] = function () {
	            self.updateQuestion();
	        };
	    }
	    QuestionImplementorBase.prototype.updateQuestion = function () {};
	    QuestionImplementorBase.prototype.onVisibilityChanged = function () {
	        this.koVisible(this.question.visible);
	    };
	    QuestionImplementorBase.prototype.onRenderWidthChanged = function () {
	        this.koRenderWidth(this.question.renderWidth);
	        this.koPaddingRight(this.getIndentSize(this.question.rightIndent));
	    };
	    QuestionImplementorBase.prototype.getIndentSize = function (indent) {
	        if (indent < 1) return "";
	        if (!this.question["data"]) return "";
	        var css = this.question["data"]["css"];
	        if (!css) return "";
	        return indent * css.question.indent + "px";
	    };
	    return QuestionImplementorBase;
	}();

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementor = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestionbase = __webpack_require__(40);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionImplementor = exports.QuestionImplementor = function (_super) {
	    __extends(QuestionImplementor, _super);
	    function QuestionImplementor(question) {
	        _super.call(this, question);
	        this.question = question;
	        this.isUpdating = false;
	        var self = this;
	        question.valueChangedCallback = function () {
	            self.onValueChanged();
	        };
	        question.commentChangedCallback = function () {
	            self.onCommentChanged();
	        };
	        question.errorsChangedCallback = function () {
	            self.onErrorsChanged();
	        };
	        question.titleChangedCallback = function () {
	            self.onVisibleIndexChanged();
	        };
	        question.visibleIndexChangedCallback = function () {
	            self.onVisibleIndexChanged();
	        };
	        this.koDummy = ko.observable(0);
	        this.koValue = this.createkoValue();
	        this.koComment = ko.observable(this.question.comment);
	        this.koTitle = ko.pureComputed(function () {
	            self.koDummy();return self.question.fullTitle;
	        });
	        this.koErrors(this.question.errors);
	        this.koValue.subscribe(function (newValue) {
	            self.updateValue(newValue);
	        });
	        this.koComment.subscribe(function (newValue) {
	            self.updateComment(newValue);
	        });
	        this.question["koValue"] = this.koValue;
	        this.question["koComment"] = this.koComment;
	        this.question["koTitle"] = this.koTitle;
	        this.question["koQuestionAfterRender"] = this.koQuestionAfterRender;
	    }
	    QuestionImplementor.prototype.updateQuestion = function () {
	        this.koDummy(this.koDummy() + 1);
	    };
	    QuestionImplementor.prototype.onValueChanged = function () {
	        if (this.isUpdating) return;
	        this.setkoValue(this.question.value);
	    };
	    QuestionImplementor.prototype.onCommentChanged = function () {
	        if (this.isUpdating) return;
	        this.koComment(this.question.comment);
	    };
	    QuestionImplementor.prototype.onVisibilityChanged = function () {
	        this.koVisible(this.question.visible);
	    };
	    QuestionImplementor.prototype.onVisibleIndexChanged = function () {
	        this.koDummy(this.koDummy() + 1);
	    };
	    QuestionImplementor.prototype.onErrorsChanged = function () {
	        this.koErrors(this.question.errors);
	    };
	    QuestionImplementor.prototype.createkoValue = function () {
	        return ko.observable(this.question.value);
	    };
	    QuestionImplementor.prototype.setkoValue = function (newValue) {
	        this.koValue(newValue);
	    };
	    QuestionImplementor.prototype.updateValue = function (newValue) {
	        this.isUpdating = true;
	        this.question.value = newValue;
	        this.isUpdating = false;
	    };
	    QuestionImplementor.prototype.updateComment = function (newValue) {
	        this.isUpdating = true;
	        this.question.comment = newValue;
	        this.isUpdating = false;
	    };
	    QuestionImplementor.prototype.getNo = function () {
	        return this.question.visibleIndex > -1 ? this.question.visibleIndex + 1 + ". " : "";
	    };
	    QuestionImplementor.prototype.koQuestionAfterRender = function (el, con) {
	        var tEl = el[0];
	        if (tEl.nodeName == "#text") tEl.data = "";
	        tEl = el[el.length - 1];
	        if (tEl.nodeName == "#text") tEl.data = "";
	    };
	    return QuestionImplementor;
	}(_koquestionbase.QuestionImplementorBase);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionSelectBaseImplementor = exports.QuestionSelectBaseImplementor = function (_super) {
	    __extends(QuestionSelectBaseImplementor, _super);
	    function QuestionSelectBaseImplementor(question) {
	        _super.call(this, question);
	        var self = this;
	        this.koOtherVisible = ko.computed(function () {
	            self.koValue();return self.isOtherSelected;
	        });
	        this.koVisibleChoices = ko.observableArray(self.question.visibleChoices);
	        question.choicesChangedCallback = function () {
	            self.koVisibleChoices(self.question.visibleChoices);
	        };
	        this.question["koOtherVisible"] = this.koOtherVisible;
	        this.question["koVisibleChoices"] = this.koVisibleChoices;
	    }
	    Object.defineProperty(QuestionSelectBaseImplementor.prototype, "isOtherSelected", {
	        get: function get() {
	            return this.question.isOtherSelected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionSelectBaseImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionCheckboxBaseImplementor = exports.QuestionCheckboxBaseImplementor = function (_super) {
	    __extends(QuestionCheckboxBaseImplementor, _super);
	    function QuestionCheckboxBaseImplementor(question) {
	        _super.call(this, question);
	        this.koWidth = ko.observable(this.colWidth);
	        this.question["koWidth"] = this.koWidth;
	        this.question["koAfterRender"] = this.koAfterRender;
	        var self = this;
	        this.question.colCountChangedCallback = function () {
	            self.onColCountChanged();
	        };
	    }
	    QuestionCheckboxBaseImplementor.prototype.onColCountChanged = function () {
	        this.question["koWidth"] = ko.observable(this.colWidth);
	    };
	    Object.defineProperty(QuestionCheckboxBaseImplementor.prototype, "colWidth", {
	        get: function get() {
	            var colCount = this.question.colCount;
	            return colCount > 0 ? 100 / colCount + '%' : "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionCheckboxBaseImplementor.prototype.koAfterRender = function (el, con) {
	        var tEl = el[0];
	        if (tEl.nodeName == "#text") tEl.data = "";
	        tEl = el[el.length - 1];
	        if (tEl.nodeName == "#text") tEl.data = "";
	    };
	    return QuestionCheckboxBaseImplementor;
	}(QuestionSelectBaseImplementor);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckbox = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion_baseselect = __webpack_require__(42);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_checkbox = __webpack_require__(22);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionCheckboxImplementor = function (_super) {
	    __extends(QuestionCheckboxImplementor, _super);
	    function QuestionCheckboxImplementor(question) {
	        _super.call(this, question);
	    }
	    QuestionCheckboxImplementor.prototype.createkoValue = function () {
	        return this.question.value ? ko.observableArray(this.question.value) : ko.observableArray();
	    };
	    QuestionCheckboxImplementor.prototype.setkoValue = function (newValue) {
	        if (newValue) {
	            this.koValue([].concat(newValue));
	        } else {
	            this.koValue([]);
	        }
	    };
	    return QuestionCheckboxImplementor;
	}(_koquestion_baseselect.QuestionCheckboxBaseImplementor);
	var QuestionCheckbox = exports.QuestionCheckbox = function (_super) {
	    __extends(QuestionCheckbox, _super);
	    function QuestionCheckbox(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionCheckboxImplementor(this);
	    }
	    return QuestionCheckbox;
	}(_question_checkbox.QuestionCheckboxModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("checkbox", function () {
	    return new QuestionCheckbox("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("checkbox", function (name) {
	    var q = new QuestionCheckbox(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionComment = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_comment = __webpack_require__(23);
	
	var _koquestion = __webpack_require__(41);
	
	var QuestionComment = exports.QuestionComment = function (_super) {
	    __extends(QuestionComment, _super);
	    function QuestionComment(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    return QuestionComment;
	}(_question_comment.QuestionCommentModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("comment", function () {
	    return new QuestionComment("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("comment", function (name) {
	    return new QuestionComment(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdown = undefined;
	
	var _question_dropdown = __webpack_require__(24);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(42);
	
	var QuestionDropdown = exports.QuestionDropdown = function (_super) {
	    __extends(QuestionDropdown, _super);
	    function QuestionDropdown(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion_baseselect.QuestionSelectBaseImplementor(this);
	    }
	    return QuestionDropdown;
	}(_question_dropdown.QuestionDropdownModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("dropdown", function () {
	    return new QuestionDropdown("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("dropdown", function (name) {
	    var q = new QuestionDropdown(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFile = exports.QuestionFileImplementor = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_file = __webpack_require__(25);
	
	var _koquestion = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionFileImplementor = exports.QuestionFileImplementor = function (_super) {
	    __extends(QuestionFileImplementor, _super);
	    function QuestionFileImplementor(question) {
	        _super.call(this, question);
	        var self = this;
	        this.koDataUpdater = ko.observable(0);
	        this.koData = ko.computed(function () {
	            self.koDataUpdater();return self.question.previewValue;
	        });
	        this.koHasValue = ko.observable(false);
	        this.question["koData"] = this.koData;
	        this.question["koHasValue"] = this.koHasValue;
	        this.question.previewValueLoadedCallback = function () {
	            self.onLoadPreview();
	        };
	        this.question["dochange"] = function (data, event) {
	            var src = event.target || event.srcElement;self.onChange(src);
	        };
	    }
	    QuestionFileImplementor.prototype.onChange = function (src) {
	        if (!window["FileReader"]) return;
	        if (!src || !src.files || src.files.length < 1) return;
	        this.question.loadFile(src.files[0]);
	    };
	    QuestionFileImplementor.prototype.onLoadPreview = function () {
	        this.koDataUpdater(this.koDataUpdater() + 1);
	        this.koHasValue(true);
	    };
	    return QuestionFileImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionFile = exports.QuestionFile = function (_super) {
	    __extends(QuestionFile, _super);
	    function QuestionFile(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionFileImplementor(this);
	    }
	    return QuestionFile;
	}(_question_file.QuestionFileModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("file", function () {
	    return new QuestionFile("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("file", function (name) {
	    return new QuestionFile(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtml = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestionbase = __webpack_require__(40);
	
	var _question_html = __webpack_require__(26);
	
	var QuestionHtml = exports.QuestionHtml = function (_super) {
	    __extends(QuestionHtml, _super);
	    function QuestionHtml(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestionbase.QuestionImplementorBase(this);
	    }
	    return QuestionHtml;
	}(_question_html.QuestionHtmlModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("html", function () {
	    return new QuestionHtml("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("html", function (name) {
	    return new QuestionHtml(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrix = exports.MatrixRow = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_matrix = __webpack_require__(19);
	
	var _koquestion = __webpack_require__(41);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MatrixRow = exports.MatrixRow = function (_super) {
	    __extends(MatrixRow, _super);
	    function MatrixRow(name, text, fullName, data, value) {
	        _super.call(this, name, text, fullName, data, value);
	        this.name = name;
	        this.text = text;
	        this.fullName = fullName;
	        this.isValueUpdating = false;
	        this.koValue = ko.observable(this.value);
	        var self = this;
	        this.koValue.subscribe(function (newValue) {
	            if (self.isValueUpdating) true;
	            self.value = newValue;
	        });
	    }
	    MatrixRow.prototype.onValueChanged = function () {
	        this.isValueUpdating = true;
	        this.koValue(this.value);
	        this.isValueUpdating = false;
	    };
	    return MatrixRow;
	}(_question_matrix.MatrixRowModel);
	var QuestionMatrix = exports.QuestionMatrix = function (_super) {
	    __extends(QuestionMatrix, _super);
	    function QuestionMatrix(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    QuestionMatrix.prototype.createMatrixRow = function (name, text, fullName, value) {
	        return new MatrixRow(name, text, fullName, this, value);
	    };
	    return QuestionMatrix;
	}(_question_matrix.QuestionMatrixModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrix", function () {
	    return new QuestionMatrix("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrix", function (name) {
	    var q = new QuestionMatrix(name);q.rows = ["Row 1", "Row 2"];q.columns = ["Column 1", "Column 2", "Column 3"];return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdown = undefined;
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(41);
	
	var QuestionMatrixDropdown = exports.QuestionMatrixDropdown = function (_super) {
	    __extends(QuestionMatrixDropdown, _super);
	    function QuestionMatrixDropdown(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    return QuestionMatrixDropdown;
	}(_question_matrixdropdown.QuestionMatrixDropdownModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrixdropdown", function () {
	    return new QuestionMatrixDropdown("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdropdown", function (name) {
	    var q = new QuestionMatrixDropdown(name);q.choices = [1, 2, 3, 4, 5];q.rows = ["Row 1", "Row 2"];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(41);
	
	var _question_matrixdynamic = __webpack_require__(18);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionMatrixDynamicImplementor = exports.QuestionMatrixDynamicImplementor = function (_super) {
	    __extends(QuestionMatrixDynamicImplementor, _super);
	    function QuestionMatrixDynamicImplementor(question) {
	        _super.call(this, question);
	        this.koRecalc = ko.observable(0);
	        this.koRows = ko.pureComputed(function () {
	            this.koRecalc();
	            return this.question.cachedVisibleRows;
	        }, this);
	        this.koOverflowX = ko.pureComputed(function () {
	            return this.question.horizontalScroll ? "scroll" : "none";
	        }, this);
	        this.question["koRows"] = this.koRows;
	        var self = this;
	        this.koAddRowClick = function () {
	            self.addRow();
	        };
	        this.koRemoveRowClick = function (data) {
	            self.removeRow(data);
	        };
	        this.question["koAddRowClick"] = this.koAddRowClick;
	        this.question["koRemoveRowClick"] = this.koRemoveRowClick;
	        this.question["koOverflowX"] = this.koOverflowX;
	        this.question.rowCountChangedCallback = function () {
	            self.onRowCountChanged();
	        };
	        this.question.columnsChangedCallback = function () {
	            self.onColumnChanged();
	        };
	        this.question.updateCellsCallbak = function () {
	            self.onUpdateCells();
	        };
	    }
	    QuestionMatrixDynamicImplementor.prototype.onUpdateCells = function () {
	        //Genereate rows again.
	        var rows = this.question["generatedVisibleRows"];
	        var columns = this.question.columns;
	        if (rows && rows.length > 0 && columns && columns.length > 0) this.onColumnChanged();
	    };
	    QuestionMatrixDynamicImplementor.prototype.onColumnChanged = function () {
	        var rows = this.question.visibleRows;
	        this.onRowCountChanged();
	    };
	    QuestionMatrixDynamicImplementor.prototype.onRowCountChanged = function () {
	        this.koRecalc(this.koRecalc() + 1);
	    };
	    QuestionMatrixDynamicImplementor.prototype.addRow = function () {
	        this.question.addRow();
	    };
	    QuestionMatrixDynamicImplementor.prototype.removeRow = function (row) {
	        var rows = this.question.cachedVisibleRows;
	        var index = rows.indexOf(row);
	        if (index > -1) {
	            this.question.removeRow(index);
	        }
	    };
	    return QuestionMatrixDynamicImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionMatrixDynamic = exports.QuestionMatrixDynamic = function (_super) {
	    __extends(QuestionMatrixDynamic, _super);
	    function QuestionMatrixDynamic(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionMatrixDynamicImplementor(this);
	    }
	    return QuestionMatrixDynamic;
	}(_question_matrixdynamic.QuestionMatrixDynamicModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrixdynamic", function () {
	    return new QuestionMatrixDynamic("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdynamic", function (name) {
	    var q = new QuestionMatrixDynamic(name);q.choices = [1, 2, 3, 4, 5];q.rowCount = 2;q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_multipletext = __webpack_require__(20);
	
	var _koquestion = __webpack_require__(41);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MultipleTextItem = exports.MultipleTextItem = function (_super) {
	    __extends(MultipleTextItem, _super);
	    function MultipleTextItem(name, title) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this, name, title);
	        this.name = name;
	        this.isKOValueUpdating = false;
	        this.koValue = ko.observable(this.value);
	        var self = this;
	        this.koValue.subscribe(function (newValue) {
	            if (!self.isKOValueUpdating) {
	                self.value = newValue;
	            }
	        });
	    }
	    MultipleTextItem.prototype.onValueChanged = function (newValue) {
	        this.isKOValueUpdating = true;
	        this.koValue(newValue);
	        this.isKOValueUpdating = false;
	    };
	    return MultipleTextItem;
	}(_question_multipletext.MultipleTextItemModel);
	var QuestionMultipleTextImplementor = exports.QuestionMultipleTextImplementor = function (_super) {
	    __extends(QuestionMultipleTextImplementor, _super);
	    function QuestionMultipleTextImplementor(question) {
	        _super.call(this, question);
	        this.koRows = ko.observableArray(this.question.getRows());
	        this.question["koRows"] = this.koRows;
	        this.onColCountChanged();
	        var self = this;
	        this.question.colCountChangedCallback = function () {
	            self.onColCountChanged();
	        };
	    }
	    QuestionMultipleTextImplementor.prototype.onColCountChanged = function () {
	        this.koRows(this.question.getRows());
	    };
	    return QuestionMultipleTextImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionMultipleText = exports.QuestionMultipleText = function (_super) {
	    __extends(QuestionMultipleText, _super);
	    function QuestionMultipleText(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionMultipleTextImplementor(this);
	    }
	    QuestionMultipleText.prototype.createTextItem = function (name, title) {
	        return new MultipleTextItem(name, title);
	    };
	    return QuestionMultipleText;
	}(_question_multipletext.QuestionMultipleTextModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("multipletextitem", function () {
	    return new MultipleTextItem("");
	});
	_jsonobject.JsonObject.metaData.overrideClassCreatore("multipletext", function () {
	    return new QuestionMultipleText("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("multipletext", function (name) {
	    var q = new QuestionMultipleText(name);q.AddItem("text1");q.AddItem("text2");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroup = undefined;
	
	var _question_radiogroup = __webpack_require__(27);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(42);
	
	var QuestionRadiogroup = exports.QuestionRadiogroup = function (_super) {
	    __extends(QuestionRadiogroup, _super);
	    function QuestionRadiogroup(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion_baseselect.QuestionCheckboxBaseImplementor(this);
	    }
	    return QuestionRadiogroup;
	}(_question_radiogroup.QuestionRadiogroupModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("radiogroup", function () {
	    return new QuestionRadiogroup("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("radiogroup", function (name) {
	    var q = new QuestionRadiogroup(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRating = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(41);
	
	var _question_rating = __webpack_require__(28);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionRatingImplementor = function (_super) {
	    __extends(QuestionRatingImplementor, _super);
	    function QuestionRatingImplementor(question) {
	        _super.call(this, question);
	        this.koVisibleRateValues = ko.observableArray(this.getValues());
	        this.question["koVisibleRateValues"] = this.koVisibleRateValues;
	        var self = this;
	        this.koChange = function (val) {
	            self.koValue(val.itemValue);
	        };
	        this.question["koChange"] = this.koChange;
	        this.question.rateValuesChangedCallback = function () {
	            self.onRateValuesChanged();
	        };
	        this.question["koGetCss"] = function (val) {
	            var css = self.question.itemCss;
	            return self.question["koValue"]() == val.value ? css + " active" : css;
	        };
	    }
	    QuestionRatingImplementor.prototype.onRateValuesChanged = function () {
	        this.koVisibleRateValues(this.getValues());
	    };
	    QuestionRatingImplementor.prototype.getValues = function () {
	        return this.question.visibleRateValues;
	    };
	    return QuestionRatingImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionRating = exports.QuestionRating = function (_super) {
	    __extends(QuestionRating, _super);
	    function QuestionRating(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionRatingImplementor(this);
	    }
	    QuestionRating.prototype.onSetData = function () {
	        this.itemCss = this.data["css"].rating.item;
	    };
	    return QuestionRating;
	}(_question_rating.QuestionRatingModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("rating", function () {
	    return new QuestionRating("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("rating", function (name) {
	    return new QuestionRating(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionText = exports.QuestionTextImplementor = undefined;
	
	var _question_text = __webpack_require__(29);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(41);
	
	var QuestionTextImplementor = exports.QuestionTextImplementor = function (_super) {
	    __extends(QuestionTextImplementor, _super);
	    function QuestionTextImplementor(question) {
	        _super.call(this, question);
	        this.question = question;
	    }
	    QuestionTextImplementor.prototype.updateValue = function (newValue) {
	        _super.prototype.updateValue.call(this, newValue);
	        if (newValue !== this.question.value) {
	            this.koValue(this.question.value);
	        }
	    };
	    return QuestionTextImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionText = exports.QuestionText = function (_super) {
	    __extends(QuestionText, _super);
	    function QuestionText(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionTextImplementor(this);
	    }
	    return QuestionText;
	}(_question_text.QuestionTextModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("text", function () {
	    return new QuestionText("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("text", function (name) {
	    return new QuestionText(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindow = undefined;
	
	var _knockout = __webpack_require__(37);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _surveyWindow = __webpack_require__(33);
	
	var _kosurvey = __webpack_require__(36);
	
	var _templateWindowKo = __webpack_require__(56);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyWindow = exports.SurveyWindow = function (_super) {
	    __extends(SurveyWindow, _super);
	    function SurveyWindow(jsonObj) {
	        _super.call(this, jsonObj);
	        this.koExpanded = ko.observable(false);
	        this.koExpandedCss = ko.observable(this.getButtonCss());
	        var self = this;
	        this.doExpand = function () {
	            self.changeExpanded();
	        };
	        this.survey.onComplete.add(function (sender) {
	            self.onComplete();self.koExpandedCss(self.getButtonCss());
	        });
	    }
	    SurveyWindow.prototype.createSurvey = function (jsonObj) {
	        return new _kosurvey.Survey(jsonObj);
	    };
	    SurveyWindow.prototype.expandcollapse = function (value) {
	        _super.prototype.expandcollapse.call(this, value);
	        this.koExpanded(this.isExpandedValue);
	    };
	    Object.defineProperty(SurveyWindow.prototype, "template", {
	        get: function get() {
	            return this.templateValue ? this.templateValue : this.getDefaultTemplate();
	        },
	        set: function set(value) {
	            this.templateValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindow.prototype.show = function () {
	        this.windowElement.innerHTML = this.template;
	        ko.cleanNode(this.windowElement);
	        ko.applyBindings(this, this.windowElement);
	        document.body.appendChild(this.windowElement);
	        this.survey.render(SurveyWindow.surveyElementName);
	        this.isShowingValue = true;
	    };
	    SurveyWindow.prototype.getDefaultTemplate = function () {
	        return _templateWindowKo.koTemplate.html;
	    };
	    SurveyWindow.prototype.hide = function () {
	        document.body.removeChild(this.windowElement);
	        this.windowElement.innerHTML = "";
	        this.isShowingValue = false;
	    };
	    Object.defineProperty(SurveyWindow.prototype, "css", {
	        get: function get() {
	            return this.survey["css"];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindow.prototype.changeExpanded = function () {
	        this.expandcollapse(!this.isExpanded);
	    };
	    SurveyWindow.prototype.onComplete = function () {
	        this.hide();
	    };
	    SurveyWindow.prototype.getButtonCss = function () {
	        return this.koExpanded() ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
	    };
	    return SurveyWindow;
	}(_surveyWindow.SurveyWindowModel);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<div style="position: fixed; bottom: 3px; right: 10px;" data-bind="css: $root.css.window.root">    <div data-bind="css: $root.css.window.header.root">        <a href="#" data-bind="click:doExpand" style="width:100%">            <span style="padding-right:10px" data-bind="text:title, css: $root.css.window.header.title"></span>            <span aria-hidden="true" data-bind="css: koExpandedCss"></span>        </a>    </div>    <div data-bind="visible:koExpanded, css: $root.css.window.body">        <div id="windowSurveyJS"></div>    </div></div>';

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyTemplateText = undefined;
	
	var _templateKo = __webpack_require__(39);
	
	var SurveyTemplateText = exports.SurveyTemplateText = function () {
	    function SurveyTemplateText() {}
	    SurveyTemplateText.prototype.replaceText = function (replaceText, id, questionType) {
	        if (questionType === void 0) {
	            questionType = null;
	        }
	        id = this.getId(id, questionType);
	        var pos = this.text.indexOf(id);
	        if (pos < 0) return;
	        pos = this.text.indexOf('>', pos);
	        if (pos < 0) return;
	        var startPos = pos + 1;
	        var endString = "</script>";
	        pos = this.text.indexOf(endString, startPos);
	        if (pos < 0) return;
	        this.text = this.text.substr(0, startPos) + replaceText + this.text.substr(pos);
	    };
	    SurveyTemplateText.prototype.getId = function (id, questionType) {
	        var result = 'id="survey-' + id;
	        if (questionType) {
	            result += "-" + questionType;
	        }
	        return result + '"';
	    };
	    Object.defineProperty(SurveyTemplateText.prototype, "text", {
	        get: function get() {
	            return _templateKo.koTemplate.html;
	        },
	        set: function set(value) {
	            _templateKo.koTemplate.html = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyTemplateText;
	}();

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDate = exports.QuestionDateImplementor = undefined;
	
	var _question_date = __webpack_require__(34);
	
	var _question_date2 = _interopRequireDefault(_question_date);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(41);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QuestionDateImplementor = exports.QuestionDateImplementor = function (_super) {
	    __extends(QuestionDateImplementor, _super);
	    function QuestionDateImplementor(question) {
	        _super.call(this, question);
	        this.question["dateId"] = this.inputId;
	    }
	    QuestionDateImplementor.prototype.koQuestionAfterRender = function (el, con) {
	        eval(con.getjQueryScript(con["dateId"]));
	    };
	    Object.defineProperty(QuestionDateImplementor.prototype, "inputId", {
	        get: function get() {
	            return "date_" + this.question.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionDateImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionDate = exports.QuestionDate = function (_super) {
	    __extends(QuestionDate, _super);
	    function QuestionDate(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionDateImplementor(this);
	    }
	    return QuestionDate;
	}(_question_date2.default);
	//Tell json serializer and survey editor to create exactly this class. Override it from the model that doesn't have any rendering functionality.
	_jsonobject.JsonObject.metaData.overrideClassCreatore("date", function () {
	    return new QuestionDate("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("date", function (name) {
	    return new QuestionDate(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	__webpack_require__(67);
	
	__webpack_require__(68);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.danishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var danishSurveyStrings = exports.danishSurveyStrings = {
	    pagePrevText: "Tilbage",
	    pageNextText: "Videre",
	    completeText: "Færdig",
	    progressText: "Side {0} af {1}",
	    emptySurvey: "Der er ingen synlige spørgsmål.",
	    completingSurvey: "Mange tak for din besvarelse!",
	    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
	    otherItemText: "Valgfrit svar...",
	    optionsCaption: "Vælg...",
	    requiredError: "Besvar venligst spørgsmålet.",
	    numericError: "Angiv et tal.",
	    textMinLength: "Angiv mindst {0} tegn.",
	    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
	    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
	    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
	    numericMin: "'{0}' skal være lig med eller større end {1}",
	    numericMax: "'{0}' skal være lig med eller mindre end {1}",
	    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
	    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
	    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
	};
	_surveyStrings.surveyLocalization.locales["da"] = danishSurveyStrings;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.dutchSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var dutchSurveyStrings = exports.dutchSurveyStrings = {
	    pagePrevText: "Vorige",
	    pageNextText: "Volgende",
	    completeText: "Afsluiten",
	    otherItemText: "Andere",
	    progressText: "Pagina {0} van {1}",
	    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
	    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
	    loadingSurvey: "De vragenlijst is aan het laden...",
	    optionsCaption: "Kies...",
	    requiredError: "Gelieve een antwoord in te vullen",
	    numericError: "Het antwoord moet een getal zijn",
	    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
	    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
	    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
	    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
	    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
	    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
	    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
	    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
	    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
	};
	_surveyStrings.surveyLocalization.locales["nl"] = dutchSurveyStrings;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.finnishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var finnishSurveyStrings = exports.finnishSurveyStrings = {
	    pagePrevText: "Edellinen",
	    pageNextText: "Seuraava",
	    completeText: "Valmis",
	    otherItemText: "Muu (kuvaile)",
	    progressText: "Sivu {0}/{1}",
	    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
	    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
	    loadingSurvey: "Kyselyä ladataan palvelimelta...",
	    optionsCaption: "Valitse...",
	    requiredError: "Vastaa kysymykseen, kiitos.",
	    numericError: "Arvon tulee olla numeerinen.",
	    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
	    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
	    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
	    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
	    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
	    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
	    invalidEmail: "Syötä validi sähköpostiosoite.",
	    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
	};
	_surveyStrings.surveyLocalization.locales["fi"] = finnishSurveyStrings;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.frenchSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var frenchSurveyStrings = exports.frenchSurveyStrings = {
	    pagePrevText: "Pr\xE9c\xE9dent",
	    pageNextText: "Suivant",
	    completeText: "Terminer",
	    otherItemText: "Autre (pr\xE9ciser)",
	    progressText: "Page {0} sur {1}",
	    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
	    completingSurvey: "Merci d'avoir r\xE9pondu au questionnaire!",
	    loadingSurvey: "Le questionnaire est en cours de chargement...",
	    optionsCaption: "Choisissez...",
	    requiredError: "La r\xE9ponse \xE0 cette question est obligatoire.",
	    numericError: "La r\xE9ponse doit \xEAtre un nombre.",
	    textMinLength: "Merci d'entrer au moins {0} symboles.",
	    minSelectError: "Merci de s\xE9lectionner au moins {0}r\xE9ponses.",
	    maxSelectError: "Merci de s\xE9lectionner au plus {0}r\xE9ponses.",
	    numericMinMax: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1} et inf\xE9rieure ou\xE9gale \xE0 {2}",
	    numericMin: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1}",
	    numericMax: "Votre r\xE9ponse '{0}' doit \xEAtreinf\xE9rieure ou \xE9gale \xE0 {1}",
	    invalidEmail: "Merci d'entrer une adresse mail valide.",
	    exceedMaxSize: "La taille du fichier ne doit pas exc\xE9der {0}.",
	    otherRequiredError: "Merci de pr\xE9ciser le champ 'Autre'."
	};
	_surveyStrings.surveyLocalization.locales["fr"] = frenchSurveyStrings;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.germanSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var germanSurveyStrings = exports.germanSurveyStrings = {
	    pagePrevText: "Zurück",
	    pageNextText: "Weiter",
	    completeText: "Fertig",
	    progressText: "Seite {0} von {1}",
	    emptySurvey: "Es gibt keine sichtbare Frage.",
	    completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
	    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
	    otherItemText: "Benutzerdefinierte Antwort...",
	    optionsCaption: "Wählen...",
	    requiredError: "Bitte antworten Sie auf die Frage.",
	    numericError: "Der Wert sollte eine Zahl sein.",
	    textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
	    minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
	    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
	    numericMinMax: "'{0}' solte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
	    numericMin: "'{0}' solte gleich oder größer sein als {1}",
	    numericMax: "'{0}' solte gleich oder kleiner als {1}",
	    invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
	    exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
	    otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
	};
	_surveyStrings.surveyLocalization.locales["de"] = germanSurveyStrings;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.greekSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var greekSurveyStrings = exports.greekSurveyStrings = {
	    pagePrevText: "Προηγούμενο",
	    pageNextText: "Επόμενο",
	    completeText: "Ολοκλήρωση",
	    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
	    progressText: "Σελίδα {0} από {1}",
	    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
	    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
	    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
	    optionsCaption: "Επιλέξτε...",
	    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
	    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
	    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
	    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
	    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
	    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
	    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
	    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
	    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
	    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
	    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
	    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
	    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
	    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
	    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
	    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
	    addRow: "Προσθήκη γραμμής",
	    removeRow: "Αφαίρεση"
	};
	_surveyStrings.surveyLocalization.locales["gr"] = greekSurveyStrings;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.polishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var polishSurveyStrings = exports.polishSurveyStrings = {
	    pagePrevText: "Wstecz",
	    pageNextText: "Dalej",
	    completeText: "Gotowe",
	    progressText: "Strona {0} z {1}",
	    emptySurvey: "Nie ma widocznych pytań.",
	    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
	    loadingSurvey: "Trwa wczytywanie ankiety...",
	    otherItemText: "Inna odpowiedź...",
	    optionsCaption: "Wybierz...",
	    requiredError: "Proszę odpowiedzieć na to pytanie.",
	    numericError: "W tym polu można wpisać tylko liczby.",
	    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
	    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
	    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
	    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
	    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
	    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
	    invalidEmail: "Proszę podać prawidłowy adres email.",
	    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
	    otherRequiredError: "Proszę podać inną odpowiedź."
	};
	_surveyStrings.surveyLocalization.locales["pl"] = polishSurveyStrings;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.russianSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var russianSurveyStrings = exports.russianSurveyStrings = {
	    pagePrevText: "Назад",
	    pageNextText: "Далее",
	    completeText: "Готово",
	    progressText: "Страница {0} из {1}",
	    emptySurvey: "Нет ни одного вопроса.",
	    completingSurvey: "Благодарим Вас за заполнение анкеты!",
	    loadingSurvey: "Загрузка с сервера...",
	    otherItemText: "Другое (пожалуйста, опишите)",
	    optionsCaption: "Выбрать...",
	    requiredError: "Пожалуйста, ответьте на вопрос.",
	    numericError: "Ответ должен быть числом.",
	    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
	    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
	    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
	    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
	    numericMin: "'{0}' должно быть равным или больше, чем {1}",
	    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
	    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
	    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
	};
	_surveyStrings.surveyLocalization.locales["ru"] = russianSurveyStrings;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.turkishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var turkishSurveyStrings = exports.turkishSurveyStrings = {
	    pagePrevText: "Geri",
	    pageNextText: "İleri",
	    completeText: "Anketi Tamamla",
	    otherItemText: "Diğer (açıklayınız)",
	    progressText: "Sayfa {0} / {1}",
	    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
	    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
	    loadingSurvey: "Anket sunucudan yükleniyor ...",
	    optionsCaption: "Seçiniz ...",
	    requiredError: "Lütfen soruya cevap veriniz",
	    numericError: "Girilen değer numerik olmalıdır",
	    textMinLength: "En az {0} sembol giriniz.",
	    minRowCountError: "Lütfen en az {0} satırı doldurun.",
	    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
	    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
	    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
	    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
	    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
	    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
	    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
	    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
	    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
	    otherRequiredError: "Lütfen diğer değerleri giriniz.",
	    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
	    addRow: "Satır Ekle",
	    removeRow: "Kaldır"
	};
	_surveyStrings.surveyLocalization.locales["tr"] = turkishSurveyStrings;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultBootstrapCss = undefined;
	
	var _cssstandard = __webpack_require__(35);
	
	var defaultBootstrapCss = exports.defaultBootstrapCss = {
	    root: "",
	    header: "panel-heading",
	    body: "panel-body",
	    footer: "panel-footer",
	    navigationButton: "btn", navigation: { complete: "btn-primary", prev: "btn-info", next: "btn-info" },
	    progress: "progress center-block", progressBar: "progress-bar progress-bar-striped active",
	    pageTitle: "pTitle",
	    row: "eachquestion",
	    question: { root: "", title: "", comment: "form-control", indent: 20 },
	    error: { root: "alert alert-danger alert-th", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
	    checkbox: { root: "form-inline", item: "checkbox", other: "" },
	    comment: "form-control",
	    dropdown: "form-control",
	    matrix: { root: "table table-hover" },
	    matrixdropdown: { root: "table table-hover" },
	    matrixdynamic: { root: "table table-hover", button: "btn btn-default btn-sm" },
	    multipletext: { root: "table table-hover", itemTitle: "", itemValue: "form-control" },
	    radiogroup: { root: "form-inline", item: "radio", other: "" },
	    rating: { root: "btn-group", item: "btn btn-default" },
	    text: "form-control",
	    window: {
	        root: "modal-content", body: "modal-body",
	        header: {
	            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
	            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
	        }
	    }
	};
	_cssstandard.surveyCss["bootstrap"] = defaultBootstrapCss;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZDZjZWNkOWJhNzQxZDQ2YTAyZCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9rby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVua3MvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleVN0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb25vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9uc1BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0UHJlUHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX211bHRpcGxldGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHhTdXJ2ZXlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmlnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvcXVlc3Rpb25fZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmYXVsdENzcy9jc3NzdGFuZGFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29zdXJ2ZXkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQvdGVtcGxhdGUua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbmJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fYmFzZXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9jb21tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25faHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tdWx0aXBsZXRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmFkaW9ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29TdXJ2ZXlXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlLndpbmRvdy5rby5odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC90ZW1wbGF0ZVRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMva25vY2tvdXQva29xdWVzdGlvbl9kYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kYW5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL2Zpbm5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9ncmVlay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL3BvbGlzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi90dXJraXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWZhdWx0Q3NzL2Nzc2Jvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckMrQjs7Ozs7Ozs7Ozs7Ozs7O3lCQU04Qjs7Ozs7Ozs7O3NCQU03RDs7Ozs7Ozs7O29CQUFtQjs7Ozs7O29CQUNuQjs7Ozs7Ozs7OzRCQUNBOzs7Ozs7Ozs7d0JBQ0E7Ozs7Ozs7OzttQ0FDQTs7Ozs7O21DQUNBOzs7Ozs7Ozs7aUNBQ0E7Ozs7Ozs7OztnQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7Ozs7NkJBQ0E7Ozs7Ozs7Ozs2QkFDQTs7Ozs7Ozs7OytCQUFpQjs7Ozs7OytCQUNqQjs7Ozs7Ozs7O3VDQUNBOzs7Ozs7Ozs7c0NBQ29DOzs7Ozs7c0NBR3BDOzs7Ozs7Ozs7cUNBQ29COzs7Ozs7cUNBQWlDOzs7Ozs7cUNBR3JEOzs7Ozs7Ozs7bUNBQ0E7Ozs7Ozs7OzsrQkFDQTs7Ozs7Ozs7OzZCQUNBOzs7Ozs7Ozs7NEJBQ0E7Ozs7Ozs7OzswQkFFQTs7Ozs7Ozs7O3FCQUdBOzs7Ozs7Ozs7NkJBQWlFOzs7O0FBbkNqRTs7QUFLQSx5Qjs7Ozs7Ozs7Ozs7Ozs7O3VCQ1h3Qjs7Ozs7O3VCQUFnQjs7Ozs7O3VCQUFrQjs7Ozs7O3VCQUFnQjs7Ozs7O3VCQUN2RDs7Ozs7O3VCQUFlOzs7Ozs7dUJBQWlCOzs7Ozs7dUJBRW5EOzs7Ozs7Ozs7a0JBQVk7Ozs7OztrQkFBTzs7Ozs7O2tCQUFXOzs7Ozs7a0JBQzlCOzs7Ozs7Ozs7NkJBQ0E7Ozs7Ozs7Ozt3QkFBaUI7Ozs7Ozt3QkFBZTs7Ozs7O3dCQUNoQzs7Ozs7Ozs7OzhCQUNBOzs7Ozs7Ozs7bUJBQW1COzs7Ozs7bUJBQWlCOzs7Ozs7bUJBQ3BDOzs7Ozs7Ozs7d0JBQ2E7Ozs7Ozt3QkFBd0I7Ozs7Ozt3QkFBYzs7Ozs7O3dCQUFtQjs7Ozs7O3dCQUM5Qzs7Ozs7O3dCQUEwQjs7Ozs7O3dCQUFZOzs7Ozs7d0JBQW9COzs7Ozs7d0JBQ3JEOzs7Ozs7d0JBRTdCOzs7Ozs7Ozs7eUNBQ3NCOzs7Ozs7eUNBQXNCOzs7Ozs7eUNBQTRCOzs7Ozs7eUNBR3hFOzs7Ozs7Ozs7cUNBQThCOzs7Ozs7cUNBQzlCOzs7Ozs7Ozs7b0NBQTZCOzs7Ozs7b0NBQzdCOzs7Ozs7Ozs7NkJBQXNCOzs7Ozs7NkJBQ3RCOzs7Ozs7Ozs7bUNBQTZCOzs7Ozs7bUNBQzdCOzs7Ozs7Ozs7a0JBQWlCOzs7Ozs7a0JBQ2pCOzs7Ozs7Ozs7c0JBQ0E7Ozs7Ozs7OzswQkFDQTs7Ozs7Ozs7O2lDQUE0Qjs7Ozs7O2lDQUM1Qjs7Ozs7Ozs7OytCQUNBOzs7Ozs7Ozs7OEJBQ0E7Ozs7Ozs7OzsrQkFDQTs7Ozs7Ozs7OzZCQUNBOzs7Ozs7Ozs7MkJBQ0E7Ozs7Ozs7OzsyQkFDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7Ozs7NkJBQ0E7Ozs7Ozs7OzsyQkFDQTs7Ozs7Ozs7O29CQUNBOzs7Ozs7Ozs7cUJBQ2lCOzs7Ozs7cUJBQXVCOzs7Ozs7cUJBQXVCOzs7Ozs7cUJBQXNCOzs7Ozs7cUJBR3JGOzs7Ozs7Ozs7MEJBQ0E7Ozs7Ozs7Ozs4QkFFQTs7Ozs7Ozs7OzZCQUNBOzs7Ozs7Ozs7MkJBQTBCOzs7Ozs7MkJBRzFCOzs7Ozs7Ozs7bURBQXlFOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ2pDOztBQUNlOztBQUNMOztBQUdsRDs7O0FBQ0ksOEJBQTZCLE9BQWtDO0FBQWhDLDRCQUFnQztBQUFoQyxxQkFBZ0M7O0FBQTVDLGNBQUssUUFBSztBQUFTLGNBQUssUUFDM0M7QUFBQztBQUNMLFlBQUM7QUFFRDs7QUFBcUMsZ0NBQUk7QUFFckM7QUFDSSxxQkFBUTtBQUZMLGNBQUksT0FHWDtBQUFDO0FBQ1MsK0JBQVksZUFBdEIsVUFBbUM7QUFDNUIsYUFBSyxLQUFNLE1BQU8sT0FBSyxLQUFNO0FBQzFCLGdCQUFLLEtBQW9CLG9CQUNuQztBQUFDO0FBQ1MsK0JBQW1CLHNCQUE3QixVQUEwQztBQUNoQyxnQkFDVjtBQUFDO0FBQ00sK0JBQVEsV0FBZixVQUEwQixPQUFxQjtBQUFuQiwyQkFBbUI7QUFBbkIsb0JBQW1COztBQUNyQyxnQkFDVjtBQUFDO0FBQ0wsWUFBQztBQU1EOztBQUFBLGdDQWFBLENBQUM7QUFaVSwrQkFBRyxNQUFWLFVBQWlDO0FBQ3pCLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBUSxNQUFXLFdBQU8sUUFBSyxLQUFHO0FBQy9DLGlCQUFtQixrQkFBUSxNQUFXLFdBQUcsR0FBUyxTQUFNLE1BQU0sT0FBTyxNQUFzQjtBQUN4RixpQkFBZ0IsbUJBQVMsTUFBRTtBQUN2QixxQkFBZ0IsZ0JBQU8sT0FBTyxPQUFnQixnQkFBTztBQUNyRCxxQkFBZ0IsZ0JBQU8sT0FBRTtBQUNuQiwyQkFBTSxRQUFrQixnQkFDakM7QUFDSjtBQUNKO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ0wsWUFBQztBQUVEOztBQUFzQyxpQ0FBZTtBQUNqRCwrQkFBMEMsVUFBZ0M7QUFBOUQsK0JBQThCO0FBQTlCLHdCQUE4Qjs7QUFBRSwrQkFBOEI7QUFBOUIsd0JBQThCOztBQUN0RSxxQkFBUTtBQURPLGNBQVEsV0FBZTtBQUFTLGNBQVEsV0FFM0Q7QUFBQztBQUNNLGdDQUFPLFVBQWQ7QUFBaUMsZ0JBQXFCO0FBQUM7QUFDaEQsZ0NBQVEsV0FBZixVQUEwQixPQUFxQjtBQUFuQiwyQkFBbUI7QUFBbkIsb0JBQW1COztBQUN4QyxhQUFDLENBQU0sU0FBSSxDQUFLLEtBQVMsU0FBUSxRQUFFO0FBQzVCLG9CQUFDLElBQW1CLGdCQUFLLE1BQ25DO0FBQUM7QUFDRCxhQUFVLFNBQUcsSUFBbUIsZ0JBQVcsV0FBUztBQUNqRCxhQUFLLEtBQVMsWUFBUSxLQUFTLFdBQVMsT0FBTyxPQUFFO0FBQzFDLG9CQUFNLFFBQWtCLHVCQUFLLEtBQWEsYUFBUTtBQUNsRCxvQkFDVjtBQUFDO0FBQ0UsYUFBSyxLQUFTLFlBQVEsS0FBUyxXQUFTLE9BQU8sT0FBRTtBQUMxQyxvQkFBTSxRQUFrQix1QkFBSyxLQUFhLGFBQVE7QUFDbEQsb0JBQ1Y7QUFBQztBQUNLLGdCQUFFLE9BQVksVUFBYyxRQUEzQixHQUFrQyxPQUM3QztBQUFDO0FBQ1MsZ0NBQW1CLHNCQUE3QixVQUEwQztBQUN0QyxhQUFTLFFBQU8sT0FBTyxPQUFXO0FBQy9CLGFBQUssS0FBUyxZQUFRLEtBQVUsVUFBRTtBQUMzQixvQkFBbUIsa0NBQVUsVUFBaUIsaUJBQVUsVUFBTSxPQUFNLEtBQVMsVUFBTSxLQUM3RjtBQUFNLGdCQUFFO0FBQ0QsaUJBQUssS0FBVSxVQUFFO0FBQ1Ysd0JBQW1CLGtDQUFVLFVBQWMsY0FBVSxVQUFNLE9BQU0sS0FDM0U7QUFBQztBQUNLLG9CQUFtQixrQ0FBVSxVQUFjLGNBQVUsVUFBTSxPQUFNLEtBQzNFO0FBQ0o7QUFBQztBQUNPLGdDQUFRLFdBQWhCLFVBQXNCO0FBQ1osZ0JBQUMsQ0FBTSxNQUFXLFdBQVEsV0FBWSxTQUNoRDtBQUFDO0FBQ0wsWUFBQztBQUFBLEdBRUQ7O0FBQW1DLDhCQUFlO0FBQzlDLDRCQUF3QztBQUE1QixnQ0FBNEI7QUFBNUIseUJBQTRCOztBQUNwQyxxQkFBUTtBQURPLGNBQVMsWUFFNUI7QUFBQztBQUNNLDZCQUFPLFVBQWQ7QUFBaUMsZ0JBQWtCO0FBQUM7QUFDN0MsNkJBQVEsV0FBZixVQUEwQixPQUFxQjtBQUFuQiwyQkFBbUI7QUFBbkIsb0JBQW1COztBQUN4QyxhQUFLLEtBQVUsYUFBTSxHQUFRO0FBQzdCLGFBQU0sTUFBTyxTQUFPLEtBQVcsV0FBRTtBQUMxQixvQkFBQyxJQUFtQixnQkFBSyxNQUFpQix1QkFBSyxLQUFhLGFBQ3RFO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsNkJBQW1CLHNCQUE3QixVQUEwQztBQUNoQyxnQkFBbUIsa0NBQVUsVUFBaUIsaUJBQVUsVUFBSyxLQUN2RTtBQUFDO0FBQ0wsWUFBQztBQUFBLEdBRUQ7O0FBQTBDLHFDQUFlO0FBQ3JELG1DQUEwQyxVQUFnQztBQUE5RCwrQkFBOEI7QUFBOUIsd0JBQThCOztBQUFFLCtCQUE4QjtBQUE5Qix3QkFBOEI7O0FBQ3RFLHFCQUFRO0FBRE8sY0FBUSxXQUFlO0FBQVMsY0FBUSxXQUUzRDtBQUFDO0FBQ00sb0NBQU8sVUFBZDtBQUFpQyxnQkFBeUI7QUFBQztBQUNwRCxvQ0FBUSxXQUFmLFVBQTBCLE9BQXFCO0FBQW5CLDJCQUFtQjtBQUFuQixvQkFBbUI7O0FBQ3hDLGFBQU0sU0FBUSxRQUFTLE1BQVksZUFBVSxPQUFPLE9BQU07QUFDN0QsYUFBUyxRQUFRLE1BQVE7QUFDdEIsYUFBSyxLQUFTLFlBQVMsUUFBTyxLQUFVLFVBQUU7QUFDbkMsb0JBQUMsSUFBbUIsZ0JBQUssTUFBaUIsdUJBQUssS0FBYSxhQUFtQixrQ0FBVSxVQUFrQixrQkFBVSxVQUFLLEtBQ3BJO0FBQUM7QUFDRSxhQUFLLEtBQVMsWUFBUyxRQUFPLEtBQVUsVUFBRTtBQUNuQyxvQkFBQyxJQUFtQixnQkFBSyxNQUFpQix1QkFBSyxLQUFhLGFBQW1CLGtDQUFVLFVBQWtCLGtCQUFVLFVBQUssS0FDcEk7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDUyxvQ0FBbUIsc0JBQTdCLFVBQTBDO0FBQ2hDLGdCQUNWO0FBQUM7QUFDTCxZQUFDO0FBQUEsR0FFRDs7QUFBb0MsK0JBQWU7QUFDL0MsNkJBQXVDO0FBQTNCLDRCQUEyQjtBQUEzQixxQkFBMkI7O0FBQ25DLHFCQUFRO0FBRE8sY0FBSyxRQUV4QjtBQUFDO0FBQ00sOEJBQU8sVUFBZDtBQUFpQyxnQkFBbUI7QUFBQztBQUM5Qyw4QkFBUSxXQUFmLFVBQTBCLE9BQXFCO0FBQW5CLDJCQUFtQjtBQUFuQixvQkFBbUI7O0FBQ3hDLGFBQUMsQ0FBSyxLQUFNLFNBQUksQ0FBTyxPQUFPLE9BQU07QUFDdkMsYUFBTSxLQUFHLElBQVUsT0FBSyxLQUFRO0FBQzdCLGFBQUcsR0FBSyxLQUFRLFFBQU8sT0FBTTtBQUMxQixnQkFBQyxJQUFtQixnQkFBTSxPQUFpQix1QkFBSyxLQUFhLGFBQ3ZFO0FBQUM7QUFDTCxZQUFDO0FBQUEsR0FDRDs7QUFBb0MsK0JBQWU7QUFFL0M7QUFDSSxxQkFBUTtBQUZKLGNBQUUsS0FHVjtBQUFDO0FBQ00sOEJBQU8sVUFBZDtBQUFpQyxnQkFBbUI7QUFBQztBQUM5Qyw4QkFBUSxXQUFmLFVBQTBCLE9BQXFCO0FBQW5CLDJCQUFtQjtBQUFuQixvQkFBbUI7O0FBQ3hDLGFBQUMsQ0FBTyxPQUFPLE9BQU07QUFDckIsYUFBSyxLQUFHLEdBQUssS0FBUSxRQUFPLE9BQU07QUFDL0IsZ0JBQUMsSUFBbUIsZ0JBQU0sT0FBaUIsdUJBQUssS0FBYSxhQUN2RTtBQUFDO0FBQ1MsOEJBQW1CLHNCQUE3QixVQUEwQztBQUNoQyxnQkFBbUIsa0NBQVUsVUFDdkM7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBa0IsbUJBQUUsQ0FBVTtBQUNoRCx3QkFBUyxTQUFTLFNBQW1CLG9CQUFFLENBQWtCLG1CQUFvQixvQkFBRTtBQUFvQixZQUFDLElBQXdCO0FBQUMsSUFBcUI7QUFDbEosd0JBQVMsU0FBUyxTQUFnQixpQkFBRSxDQUFvQixxQkFBRTtBQUFvQixZQUFDLElBQXFCO0FBQUMsSUFBcUI7QUFDMUgsd0JBQVMsU0FBUyxTQUF1Qix3QkFBRSxDQUFrQixtQkFBb0Isb0JBQUU7QUFBb0IsWUFBQyxJQUE0QjtBQUFDLElBQXFCO0FBQzFKLHdCQUFTLFNBQVMsU0FBaUIsa0JBQUUsQ0FBUyxVQUFFO0FBQW9CLFlBQUMsSUFBc0I7QUFBQyxJQUFxQjtBQUNqSCx3QkFBUyxTQUFTLFNBQWlCLGtCQUFJLElBQUU7QUFBb0IsWUFBQyxJQUFzQjtBQUFDLElBQXFCLG1COzs7Ozs7Ozs7OztvQkN6SnhGLEdBQUc7QUFDdkIsVUFBQyxJQUFLLEtBQU07QUFBSSxhQUFFLEVBQWUsZUFBSSxJQUFFLEVBQUcsS0FBSSxFQUFJO01BQ3REO0FBQW9CLGNBQVksY0FBTTtBQUFDO0FBQ3RDLE9BQVUsWUFBSSxNQUFTLE9BQVMsT0FBTyxPQUFNLE1BQUcsR0FBVSxZQUFJLEVBQVUsV0FBRSxJQUMvRTtBQUFDO0FBRUUsS0FBQyxPQUFhLFdBQWdCLGVBQVUsT0FBUyxTQUFFO0FBQzNDLGVBQVMsT0FBUSxVQUM1QjtBQUFDO0FBRU0sU0FBVSxZQUFhLFU7Ozs7Ozs7Ozs7O0FDZ0YxQix3QkFBc0IsT0FBcUI7QUFBbkIsMkJBQW1CO0FBQW5CLG9CQUFtQjs7QUFDbkMsY0FBSyxPQUFRO0FBQ2IsY0FBTSxRQUNkO0FBQUM7QUFsRGEsZUFBTyxVQUFyQixVQUE2QyxPQUFvQjtBQUN4RCxlQUFPLFNBQUs7QUFDYixjQUFDLElBQUssSUFBSSxHQUFHLElBQVMsT0FBTyxRQUFLLEtBQUc7QUFDckMsaUJBQVMsUUFBUyxPQUFJO0FBQ3RCLGlCQUFRLE9BQUcsSUFBYSxVQUFPO0FBQzVCLGlCQUFRLE9BQU0sTUFBTyxVQUFpQixhQUFFO0FBQ3ZDLHFCQUFhLFlBQVE7QUFDbEIscUJBQVEsT0FBTSxNQUFTLFlBQWdCLGVBQVMsTUFBVSxhQUFnQixhQUFFO0FBQ3RFLDJCQUFVLFlBQVEsTUFBVztBQUM5QiwwQkFBUyxXQUFRLE1BQVU7QUFDdEIsaUNBQVksVUFDekI7QUFBQztBQUNRLDJCQUFlLGVBQU0sT0FBTSxNQUN4QztBQUFNLG9CQUFFO0FBQ0Esc0JBQU0sUUFDZDtBQUFDO0FBQ0ksbUJBQUssS0FDZDtBQUNKO0FBQUM7QUFDYSxlQUFPLFVBQXJCLFVBQTZDO0FBQ3pDLGFBQVUsU0FBRyxJQUFZO0FBQ3JCLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBUSxNQUFPLFFBQUssS0FBRztBQUNwQyxpQkFBUSxPQUFRLE1BQUk7QUFDakIsaUJBQUssS0FBUyxTQUFFO0FBQ1Qsd0JBQUssS0FBQyxFQUFPLE9BQU0sS0FBTSxPQUFNLE1BQU0sS0FDL0M7QUFBTSxvQkFBRTtBQUNFLHdCQUFLLEtBQUssS0FDcEI7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNhLGVBQWMsaUJBQTVCLFVBQW9ELE9BQVU7QUFDdEQsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFRLE1BQU8sUUFBTSxLQUFHO0FBQ2xDLGlCQUFNLE1BQUcsR0FBTSxTQUFRLEtBQU8sT0FBTSxNQUMzQztBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUVjLGVBQWMsaUJBQTdCLFVBQXNDLEtBQVcsTUFBMEI7QUFDbkUsY0FBQyxJQUFPLE9BQVEsS0FBRTtBQUNkLGlCQUFDLE9BQVUsSUFBSyxRQUFnQixZQUFVO0FBQzNDLGlCQUFVLGFBQWEsVUFBUSxRQUFLLE9BQUcsQ0FBRyxHQUFVO0FBQ25ELGtCQUFLLE9BQU0sSUFDbkI7QUFDSjtBQUFDO0FBT00seUJBQU8sVUFBZDtBQUFpQyxnQkFBYztBQUFDO0FBQ2hELDJCQUFXLHFCQUFLO2NBQWhCO0FBQWdDLG9CQUFLLEtBQVk7QUFBQztjQUNsRCxhQUE4QjtBQUN0QixrQkFBVSxZQUFZO0FBQ3ZCLGlCQUFDLENBQUssS0FBVyxXQUFRO0FBQzVCLGlCQUFPLE1BQWUsS0FBVSxVQUFZO0FBQzVDLGlCQUFTLFFBQU0sSUFBUSxRQUFVLFVBQVk7QUFDMUMsaUJBQU0sUUFBRyxDQUFHLEdBQUU7QUFDVCxzQkFBVSxZQUFNLElBQU0sTUFBRSxHQUFTO0FBQ2pDLHNCQUFLLE9BQU0sSUFBTSxNQUFNLFFBQy9CO0FBQ0o7QUFBQzs7dUJBVmlEOztBQVdsRCwyQkFBVyxxQkFBTztjQUFsQjtBQUFzQyxvQkFBSyxLQUFTLFdBQU8sT0FBVTtBQUFDOzt1QkFBQTs7QUFDdEUsMkJBQVcscUJBQUk7Y0FBZjtBQUNPLGlCQUFLLEtBQVMsU0FBTyxPQUFLLEtBQVU7QUFDcEMsaUJBQUssS0FBTyxPQUFPLE9BQUssS0FBTSxNQUFZO0FBQ3ZDLG9CQUNWO0FBQUM7Y0FDRCxhQUErQjtBQUN2QixrQkFBUyxXQUNqQjtBQUFDOzt1QkFIQTs7QUFyRWEsZUFBUyxZQUFPO0FBc0NmLGVBQWEsZ0JBQUcsQ0FBUSxRQUFTLFNBQWE7QUFtQ2pFLFlBQUM7QUFFRDs7QUFBQSxxQkFJQSxDQUFDO0FBSFUsb0JBQU8sVUFBZDtBQUNJLGVBQU0sSUFBUyxNQUNuQjtBQUFDO0FBQ0wsWUFBQztBQUNEOztBQUFBLDRCQUlBLENBQUM7QUFIVSwyQkFBTyxVQUFkO0FBQ0ksZUFBTSxJQUFTLE1BQ25CO0FBQUM7QUFDTCxZQUFDO0FBRUQ7QUFBTyxLQUFrQixzQ0FDekI7O0FBQUEsOEJBa0JBLENBQUM7QUFqQmlCLG1CQUFrQixxQkFBaEMsVUFBa0Q7QUFDM0MsYUFBQyxDQUFXLFdBQU8sT0FBTztBQUM3QixhQUFNLEtBQVcsU0FBZSxlQUFZO0FBQ3pDLGFBQUMsQ0FBRyxNQUFJLENBQUcsR0FBZ0IsZ0JBQU8sT0FBTztBQUM1QyxhQUFXLFVBQUssR0FBd0Isd0JBQUs7QUFDMUMsYUFBUSxVQUFLLEdBQUksR0FBa0I7QUFDaEMsZ0JBQVEsVUFDbEI7QUFBQztBQUNhLG1CQUFZLGVBQTFCLFVBQTRDO0FBQ3JDLGFBQUMsQ0FBVyxXQUFPLE9BQU87QUFDN0IsYUFBTSxLQUFXLFNBQWUsZUFBWTtBQUN6QyxhQUFJLElBQUU7QUFDSCxnQkFBUztBQUNMLG9CQUNWO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ0wsWUFBQztBQUVEOztBQUFBLHNCQXVCQSxDQUFDO0FBckJHLDJCQUFXLGlCQUFPO2NBQWxCO0FBQXNDLG9CQUFLLEtBQVUsYUFBUSxRQUFRLEtBQVUsVUFBTyxVQUFPO0FBQUM7O3VCQUFBOztBQUN2RixxQkFBSSxPQUFYLFVBQXVCLFFBQWtCO0FBQ2xDLGFBQUssS0FBVSxhQUFTLE1BQVE7QUFDL0IsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVUsVUFBTyxRQUFNLEtBQUc7QUFDOUMsaUJBQWMsYUFBTyxLQUFVLFVBQUcsR0FBTyxRQUU3QztBQUNKO0FBQUM7QUFDTSxxQkFBRyxNQUFWLFVBQWtCO0FBQ1gsYUFBSyxLQUFVLGFBQVMsTUFBRTtBQUNyQixrQkFBVSxZQUFHLElBQ3JCO0FBQUM7QUFDRyxjQUFVLFVBQUssS0FDdkI7QUFBQztBQUNNLHFCQUFNLFNBQWIsVUFBcUI7QUFDZCxhQUFLLEtBQVUsYUFBUyxNQUFRO0FBQ25DLGFBQVMsUUFBTyxLQUFVLFVBQVEsUUFBSyxNQUFLO0FBQ3pDLGFBQU0sU0FBYyxXQUFFO0FBQ2pCLGtCQUFVLFVBQU8sT0FBTSxPQUMvQjtBQUNKO0FBQUM7QUFDTCxZQUFDO0FBQUEsSzs7Ozs7Ozs7Ozs7QUM1S2lEOztBQUdsRDs7O0FBQXlDLG9DQUFXO0FBQ2hEO0FBQ0kscUJBQ0o7QUFBQztBQUNNLG1DQUFPLFVBQWQ7QUFDVSxnQkFBbUIsa0NBQVUsVUFDdkM7QUFBQztBQUNMLFlBQUM7QUFDRDs7QUFBd0MsbUNBQVc7QUFDL0M7QUFDSSxxQkFDSjtBQUFDO0FBQ00sa0NBQU8sVUFBZDtBQUNVLGdCQUFtQixrQ0FBVSxVQUN2QztBQUFDO0FBQ0wsWUFBQztBQUNEOztBQUFxQyxnQ0FBVztBQUU1Qyw4QkFBMkI7QUFDdkIscUJBQVE7QUFDSixjQUFRLFVBQ2hCO0FBQUM7QUFDTSwrQkFBTyxVQUFkO0FBQ1UsZ0JBQW1CLGtDQUFVLFVBQWlCLGlCQUFVLFVBQUssS0FDdkU7QUFBQztBQUNPLCtCQUFXLGNBQW5CO0FBQ0ksYUFBUyxRQUFHLENBQVEsU0FBTSxNQUFNLE1BQU0sTUFBUTtBQUM5QyxhQUFTLFFBQUcsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFLO0FBQ3pCLGFBQUssS0FBUSxXQUFNLEdBQU8sT0FBVTtBQUN2QyxhQUFLLElBQU8sS0FBTSxNQUFLLEtBQUksSUFBSyxLQUFTLFdBQU8sS0FBSSxJQUFRO0FBQzVELGFBQVMsUUFBTyxLQUFRLFVBQU8sS0FBSSxJQUFLLE1BQUs7QUFDdkMsZ0JBQU0sTUFBUSxRQUFNLE1BQUksTUFBTSxNQUFRLE1BQ2hEO0FBQUM7QUFDTCxZQUFDO0FBRUQ7O0FBQWlDLDRCQUFXO0FBRXhDLDBCQUF3QjtBQUNwQixxQkFBUTtBQUNKLGNBQUssT0FDYjtBQUFDO0FBQ00sMkJBQU8sVUFBZDtBQUNVLGdCQUFLLEtBQ2Y7QUFBQztBQUNMLFlBQUM7QUFBQSxzQjs7Ozs7Ozs7OztBQy9DTSxLQUFzQjtBQUNaLG9CQUFJO0FBQ1YsY0FBSTtBQUNGLGdCQUFFLG1CQUF5QjtBQUNoQyxhQUFPLE1BQU8sS0FBYyxnQkFBTyxLQUFRLFFBQUssS0FBZSxpQkFBaUI7QUFDN0UsYUFBQyxDQUFJLE9BQUksQ0FBSSxJQUFVLFVBQUksTUFBaUI7QUFDekMsZ0JBQUksSUFDZDtBQUFDO0FBQ1MsaUJBQUU7QUFDUixhQUFPLE1BQU07QUFDVixhQUFLLEtBQUs7QUFDVCxjQUFDLElBQU8sT0FBUSxLQUFTLFNBQUU7QUFDeEIsaUJBQUssS0FDWjtBQUFDO0FBQ0UsYUFBUTtBQUNMLGdCQUNWO0FBRUo7QUFsQmdDO0FBa0J6QixLQUFpQjtBQUNSLG1CQUFZO0FBQ1osbUJBQVE7QUFDUixtQkFBWTtBQUNYLG9CQUFvQjtBQUNyQixtQkFBbUI7QUFDcEIsa0JBQW1FO0FBQzlELHVCQUF3QztBQUMzQyxvQkFBd0M7QUFDdkMscUJBQWE7QUFDZCxvQkFBK0I7QUFDdEIsNkJBQXdDO0FBQ2xELG1CQUFrQztBQUNqQyxvQkFBc0M7QUFDbkMsdUJBQWtDO0FBQ3BDLHFCQUF3QztBQUN4QyxxQkFBNkM7QUFDOUMsb0JBQXlFO0FBQzVFLGlCQUE4QztBQUM5QyxpQkFBOEM7QUFDNUMsbUJBQWdDO0FBQzdCLHNCQUF1QztBQUNwQyx5QkFBc0U7QUFDM0Usb0JBQXdDO0FBQ25DLHlCQUFrQztBQUN2QyxvQkFBc0U7QUFDN0UsYUFBVztBQUNSLGdCQUNYO0FBNUJ5QjtBQTZCVCxvQkFBUSxRQUFNLFFBQWlCO0FBRTlDLEtBQUMsQ0FBTyxPQUFVLFVBQVcsV0FBRTtBQUN4QixZQUFVLFVBQVUsWUFBRztBQUN6QixhQUFRLE9BQWE7QUFDZixxQkFBYSxRQUFXLFlBQUUsVUFBZSxPQUFRO0FBQzdDLG9CQUFDLE9BQVcsS0FBUSxXQUFlLGNBQy9CLEtBQVEsVUFHdEI7QUFDSixVQU5lO0FBT25CO0FBQUMsRTs7Ozs7Ozs7Ozs7OztBQzlDRyxpQ0FBK0I7QUFBWixjQUFJLE9BQVE7QUFWdkIsY0FBUyxZQUFnQjtBQUN6QixjQUFZLGVBQW9CO0FBQ2hDLGNBQVcsY0FBMEI7QUFDdEMsY0FBUyxZQUFnQjtBQUN6QixjQUFhLGdCQUFnQjtBQUM3QixjQUFhLGdCQUFnQjtBQUM3QixjQUFZLGVBQWE7QUFDekIsY0FBVSxhQUlqQjtBQUFDO0FBQ0QsMkJBQVcsOEJBQUk7Y0FBZjtBQUFrQyxvQkFBSyxLQUFVLFlBQU8sS0FBVSxZQUFhO0FBQUM7Y0FDaEYsYUFBNkI7QUFBUSxrQkFBVSxZQUFVO0FBQUM7O3VCQURzQjs7QUFFaEYsMkJBQVcsOEJBQWdCO2NBQTNCO0FBQXNDLG9CQUFLLEtBQWE7QUFBQzs7dUJBQUE7O0FBQ2xELGtDQUFjLGlCQUFyQixVQUFnQztBQUN0QixnQkFBTSxLQUFpQixZQUF0QixHQUEyQixLQUFhLGdCQUFVLFFBQUksQ0FDakU7QUFBQztBQUNNLGtDQUFRLFdBQWYsVUFBd0I7QUFDakIsYUFBSyxLQUFZLFlBQU8sT0FBSyxLQUFXLFdBQU07QUFDM0MsZ0JBQ1Y7QUFBQztBQUNELDJCQUFXLDhCQUFnQjtjQUEzQjtBQUFzQyxvQkFBSyxLQUFhO0FBQUM7O3VCQUFBOztBQUNsRCxrQ0FBUSxXQUFmLFVBQXdCLEtBQVksT0FBc0I7QUFDbkQsYUFBSyxLQUFZLFlBQUU7QUFDZCxrQkFBVyxXQUFJLEtBQU8sT0FDOUI7QUFDSjtBQUFDO0FBQ00sa0NBQVUsYUFBakIsVUFBaUM7QUFDMUIsYUFBQyxDQUFLLEtBQWUsZUFBTyxPQUFTO0FBQ2xDLGdCQUFRLFFBQVEsUUFBSyxLQUFjLGVBQzdDO0FBQUM7QUFDTSxrQ0FBWSxlQUFuQixVQUFxQztBQUMzQixnQkFBTSxLQUFjLGlCQUFhLFVBQVEsUUFBSyxLQUFlLGlCQUFLLENBQWpFLEdBQTZFLFlBQU8sS0FBYyxnQkFDN0c7QUFBQztBQUNELDJCQUFXLDhCQUFPO2NBQWxCO0FBQ08saUJBQUssS0FBYSxnQkFBUyxNQUFPLE9BQUssS0FBYztBQUNyRCxpQkFBSyxLQUFZLGVBQVMsTUFBTyxPQUFLLEtBQWU7QUFDbEQsb0JBQ1Y7QUFBQzs7dUJBQUE7O0FBQ00sa0NBQVUsYUFBakIsVUFBbUMsT0FBNkI7QUFDeEQsY0FBYSxlQUFTO0FBQ3RCLGNBQVksY0FDcEI7QUFBQztBQUNMLFlBQUM7QUFDRDs7QUFLSSxnQ0FBK0IsTUFBd0IsWUFBa0MsU0FBa0M7QUFBbEUsOEJBQWdDO0FBQWhDLHVCQUFnQzs7QUFBRSxpQ0FBZ0M7QUFBaEMsMEJBQWdDOztBQUF4RyxjQUFJLE9BQVE7QUFBaUMsY0FBTyxVQUFrQjtBQUFTLGNBQVUsYUFBZTtBQUYzSCxjQUFVLGFBQW1DO0FBQzdDLGNBQWtCLHFCQUF1QjtBQUVqQyxjQUFXLGFBQUcsSUFBZ0M7QUFDOUMsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFhLFdBQU8sUUFBSyxLQUFHO0FBQ3pDLGlCQUFRLE9BQU8sS0FBZSxlQUFXLFdBQUs7QUFDM0MsaUJBQU0sTUFBRTtBQUNILHNCQUFXLFdBQUssS0FDeEI7QUFDSjtBQUNKO0FBQUM7QUFDTSxpQ0FBSSxPQUFYLFVBQXdCO0FBQ2hCLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFXLFdBQU8sUUFBSyxLQUFHO0FBQzNDLGlCQUFLLEtBQVcsV0FBRyxHQUFLLFFBQVMsTUFBTyxPQUFLLEtBQVcsV0FDL0Q7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTSxpQ0FBYyxpQkFBckIsVUFBbUM7QUFDL0IsYUFBZ0IsZUFBRyxPQUFlLGFBQWEsV0FBVyxXQUFXLFNBQU07QUFDeEUsYUFBQyxDQUFjLGNBQVE7QUFDMUIsYUFBZ0IsZUFBUTtBQUN4QixhQUFhLFlBQWUsYUFBUSxRQUFrQixrQkFBYTtBQUNoRSxhQUFVLFlBQUcsQ0FBRyxHQUFFO0FBQ0wsNEJBQWUsYUFBVSxVQUFVLFlBQU07QUFDekMsNEJBQWUsYUFBVSxVQUFFLEdBQzNDO0FBQUM7QUFDVyx3QkFBTyxLQUFnQixnQkFBZTtBQUNsRCxhQUFRLE9BQUcsSUFBc0IsbUJBQWU7QUFDN0MsYUFBYyxjQUFFO0FBQ1gsa0JBQUssT0FDYjtBQUFDO0FBQ0UsYUFBQyxRQUFlLGdFQUFjLFVBQUU7QUFDNUIsaUJBQVMsU0FBTSxNQUFFO0FBQ1osc0JBQUssT0FBVyxTQUN4QjtBQUFDO0FBQ0UsaUJBQVMsU0FBUyxTQUFFO0FBQ2Ysc0JBQWEsZUFBVyxTQUNoQztBQUFDO0FBQ0UsaUJBQVMsU0FBWSxZQUFFO0FBQ2xCLHNCQUFxQixxQkFBSyxLQUNsQztBQUFDO0FBQ0UsaUJBQVMsU0FBUyxTQUFFO0FBQ25CLHFCQUFlLGNBQUcsT0FBZSxTQUFRLFlBQWUsYUFBVyxTQUFRLFVBQVE7QUFDbkYscUJBQWdCLGVBQUcsT0FBZSxTQUFRLFlBQWUsYUFBVyxTQUFRLFVBQVE7QUFDaEYsc0JBQVcsV0FBYSxjQUNoQztBQUFDO0FBQ0UsaUJBQVMsU0FBWSxZQUFFO0FBQ2xCLHNCQUFXLGFBQVcsU0FDOUI7QUFBQztBQUNFLGlCQUFTLFNBQVksWUFBRTtBQUNsQixzQkFBVyxhQUFXLFNBQzlCO0FBQUM7QUFDRSxpQkFBUyxTQUFXLFdBQUU7QUFDakIsc0JBQVUsWUFBVyxTQUM3QjtBQUFDO0FBQ0UsaUJBQVMsU0FBZSxlQUFFO0FBQ3JCLHNCQUFjLGdCQUFXLFNBQ2pDO0FBQUM7QUFDRSxpQkFBUyxTQUFlLGVBQUU7QUFDckIsc0JBQWMsZ0JBQVcsU0FDakM7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLGlDQUFlLGtCQUF2QixVQUE0QztBQUNyQyxhQUFhLGFBQU8sVUFBSyxLQUFnQixhQUFHLE1BQXFCLGtCQUFnQixnQkFBTyxPQUFjO0FBQzdGLHdCQUFlLGFBQU0sTUFBSTtBQUNqQyxjQUFxQixxQkFBZTtBQUNsQyxnQkFDVjtBQUFDO0FBQ08saUNBQW9CLHVCQUE1QixVQUFpRDtBQUMxQyxhQUFDLENBQUssS0FBb0Isb0JBQUU7QUFDdkIsa0JBQW1CLHFCQUFHLElBQzlCO0FBQUM7QUFDRyxjQUFtQixtQkFBSyxLQUNoQztBQUFDO0FBN0VNLHVCQUFjLGlCQUFPO0FBQ3JCLHVCQUFVLGFBQU87QUE2RTVCLFlBQUM7QUFDRDs7QUFBQTtBQUNZLGNBQU8sVUFBb0M7QUFDM0MsY0FBZSxrQkFBMkM7QUFDMUQsY0FBZSxrQkFBNEM7QUFDM0QsY0FBdUIsMEJBc0luQztBQUFDO0FBcklVLDRCQUFRLFdBQWYsVUFBNEIsTUFBd0IsWUFBMkIsU0FBMkI7QUFBcEQsOEJBQXlCO0FBQXpCLHVCQUF5Qjs7QUFBRSxpQ0FBeUI7QUFBekIsMEJBQXlCOztBQUN0RyxhQUFpQixnQkFBRyxJQUFxQixrQkFBSyxNQUFZLFlBQVMsU0FBYztBQUM3RSxjQUFRLFFBQU0sUUFBaUI7QUFDaEMsYUFBWSxZQUFFO0FBQ2IsaUJBQVksV0FBTyxLQUFnQixnQkFBYTtBQUM3QyxpQkFBQyxDQUFVLFVBQUU7QUFDUixzQkFBZ0IsZ0JBQVksY0FDcEM7QUFBQztBQUNHLGtCQUFnQixnQkFBWSxZQUFLLEtBQ3pDO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00sNEJBQXFCLHdCQUE1QixVQUF5QyxNQUFvQjtBQUN6RCxhQUFpQixnQkFBTyxLQUFVLFVBQU87QUFDdEMsYUFBZSxlQUFFO0FBQ0gsMkJBQVEsVUFDekI7QUFDSjtBQUFDO0FBQ00sNEJBQWEsZ0JBQXBCLFVBQWlDO0FBQzdCLGFBQWMsYUFBTyxLQUFnQixnQkFBTztBQUN6QyxhQUFDLENBQVksWUFBRTtBQUNKLDBCQUFHLElBQWdDO0FBQ3pDLGtCQUFlLGVBQUssTUFBYztBQUNsQyxrQkFBZ0IsZ0JBQU0sUUFDOUI7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTSw0QkFBVyxjQUFsQixVQUErQjtBQUMzQixhQUFpQixnQkFBTyxLQUFVLFVBQU87QUFDdEMsYUFBQyxDQUFlLGVBQU8sT0FBTTtBQUMxQixnQkFBYyxjQUN4QjtBQUFDO0FBQ00sNEJBQWtCLHFCQUF6QixVQUFzQyxNQUErQjtBQUE3QixtQ0FBNkI7QUFBN0IsNEJBQTZCOztBQUNqRSxhQUFVLFNBQU07QUFDWixjQUFvQixvQkFBSyxNQUFjLGNBQVU7QUFDL0MsZ0JBQ1Y7QUFBQztBQUNNLDRCQUFxQix3QkFBNUIsVUFBeUM7QUFDckMsYUFBYyxhQUFPLEtBQXdCLHdCQUFPO0FBQ2pELGFBQUMsQ0FBWSxZQUFFO0FBQ0osMEJBQUcsSUFBb0I7QUFDN0Isa0JBQXVCLHVCQUFLLE1BQWM7QUFDMUMsa0JBQXdCLHdCQUFNLFFBQ3RDO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00sNEJBQVcsY0FBbEIsVUFBb0MsV0FBbUI7QUFDbkQsYUFBaUIsZ0JBQU8sS0FBVSxVQUFZO0FBQzNDLGFBQUMsQ0FBZSxlQUFRO0FBQzNCLGFBQVksV0FBZ0IsY0FBZSxlQUFlO0FBQ3ZELGFBQVUsVUFBRTtBQUNQLGtCQUFtQixtQkFBYyxlQUFZO0FBQzdDLGtCQUF5Qix5QkFDakM7QUFDSjtBQUFDO0FBQ00sNEJBQWMsaUJBQXJCLFVBQXVDLFdBQXNCO0FBQ3pELGFBQWlCLGdCQUFPLEtBQVUsVUFBWTtBQUMzQyxhQUFDLENBQWUsZUFBTyxPQUFPO0FBQ2pDLGFBQVksV0FBZ0IsY0FBSyxLQUFlO0FBQzdDLGFBQVUsVUFBRTtBQUNQLGtCQUF3Qix3QkFBYyxlQUFZO0FBQ2xELGtCQUF5Qix5QkFDakM7QUFDSjtBQUFDO0FBQ08sNEJBQWtCLHFCQUExQixVQUEyRCxlQUE4QjtBQUNsRixhQUFjLGNBQUssS0FBUyxTQUFNLFNBQVMsTUFBUTtBQUN6Qyx1QkFBVyxXQUFLLEtBQ2pDO0FBQUM7QUFDTyw0QkFBdUIsMEJBQS9CLFVBQWdFLGVBQThCO0FBQzFGLGFBQVMsUUFBZ0IsY0FBVyxXQUFRLFFBQVc7QUFDcEQsYUFBTSxRQUFLLEdBQVE7QUFDVCx1QkFBVyxXQUFPLE9BQU0sT0FBSztBQUN2QyxhQUFjLGNBQW9CLG9CQUFFO0FBQzlCLHFCQUFnQixjQUFtQixtQkFBUSxRQUFTLFNBQU87QUFDN0QsaUJBQU0sU0FBTSxHQUFFO0FBQ0EsK0JBQW1CLG1CQUFPLE9BQU0sT0FDakQ7QUFDSjtBQUNKO0FBQUM7QUFDTyw0QkFBd0IsMkJBQWhDLFVBQWlFO0FBQ3pELGNBQWdCLGdCQUFjLGNBQU0sUUFBUTtBQUNoRCxhQUFnQixlQUFPLEtBQW1CLG1CQUFjLGNBQU87QUFDM0QsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFlLGFBQU8sUUFBSyxLQUFHO0FBQ3ZDLGtCQUFnQixnQkFBYSxhQUFHLEdBQU0sUUFDOUM7QUFDSjtBQUFDO0FBQ08sNEJBQW1CLHNCQUEzQixVQUF3QyxNQUF1QixjQUFrQztBQUM3RixhQUFZLFdBQU8sS0FBZ0IsZ0JBQU87QUFDdkMsYUFBQyxDQUFVLFVBQVE7QUFDbEIsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFXLFNBQU8sUUFBSyxLQUFHO0FBQ3BDLGlCQUFDLENBQWEsZ0JBQVksU0FBRyxHQUFTLFNBQUU7QUFDakMsd0JBQUssS0FBUyxTQUN4QjtBQUFDO0FBQ0csa0JBQW9CLG9CQUFTLFNBQUcsR0FBSyxNQUFjLGNBQzNEO0FBQ0o7QUFBQztBQUNPLDRCQUFTLFlBQWpCLFVBQThCO0FBQ3BCLGdCQUFLLEtBQVEsUUFDdkI7QUFBQztBQUNPLDRCQUFjLGlCQUF0QixVQUFtQyxNQUFpQztBQUNoRSxhQUFpQixnQkFBTyxLQUFVLFVBQU87QUFDdEMsYUFBQyxDQUFlLGVBQVE7QUFDeEIsYUFBYyxjQUFZLFlBQUU7QUFDdkIsa0JBQWUsZUFBYyxjQUFXLFlBQ2hEO0FBQUM7QUFDRyxjQUFDLElBQUssSUFBSSxHQUFHLElBQWdCLGNBQVcsV0FBTyxRQUFLLEtBQUc7QUFDbkQsa0JBQWdCLGdCQUFjLGNBQVcsV0FBRyxJQUFNLE1BQU0sS0FDaEU7QUFDSjtBQUFDO0FBQ08sNEJBQWUsa0JBQXZCLFVBQW9ELFVBQWlDLE1BQWtCO0FBQ25HLGFBQVMsUUFBRyxDQUFHO0FBQ1gsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFXLFVBQUssS0FBRztBQUM3QixpQkFBSyxLQUFHLEdBQUssUUFBWSxTQUFNLE1BQUU7QUFDM0IseUJBQUs7QUFFZDtBQUNKO0FBQUM7QUFDRSxhQUFNLFFBQUssR0FBRTtBQUNSLGtCQUFLLEtBQ2I7QUFBTSxnQkFBRTtBQUNBLGtCQUFPLFNBQ2Y7QUFDSjtBQUFDO0FBQ08sNEJBQXNCLHlCQUE5QixVQUEyQyxNQUFxQjtBQUM1RCxhQUFpQixnQkFBTyxLQUFVLFVBQU87QUFDdEMsYUFBQyxDQUFlLGVBQVE7QUFDeEIsYUFBYyxjQUFvQixvQkFBRTtBQUM5QixtQkFBVSxVQUFLLEtBQU0sTUFBSyxNQUFlLGNBQ2xEO0FBQUM7QUFDRSxhQUFjLGNBQVksWUFBRTtBQUN2QixrQkFBdUIsdUJBQWMsY0FBVyxZQUN4RDtBQUNKO0FBQUM7QUFDTCxZQUFDO0FBQ0Q7O0FBR0ksd0JBQStCLE1BQXdCO0FBQXBDLGNBQUksT0FBUTtBQUFTLGNBQU8sVUFBUTtBQUZoRCxjQUFXLGNBQWM7QUFDekIsY0FBRSxLQUFXLENBRXBCO0FBQUM7QUFDTSx5QkFBa0IscUJBQXpCO0FBQ1UsZ0JBQUssS0FBVyxXQUFLLEtBQVksY0FBTyxPQUFPLEtBQVksY0FDckU7QUFBQztBQUNMLFlBQUM7QUFDRDs7QUFBOEMseUNBQVM7QUFDbkQsdUNBQXVDLGNBQTBCO0FBQzdELDJCQUF1QixtQkFBa0IsbUJBQWUsZUFBaUIsaUJBQVksWUFBb0I7QUFEMUYsY0FBWSxlQUFRO0FBQVMsY0FBUyxZQUFRO0FBRTdELGFBQWMsYUFBYSxXQUFTLFNBQWMsY0FBWTtBQUMzRCxhQUFZLFlBQUU7QUFDVCxrQkFBWSxjQUE0QztBQUN4RCxrQkFBQyxJQUFLLElBQUksR0FBRyxJQUFhLFdBQU8sUUFBSyxLQUFHO0FBQ3RDLHFCQUFFLElBQUssR0FBSyxLQUFZLGVBQVM7QUFDaEMsc0JBQVksZUFBYyxXQUFHLEdBQ3JDO0FBQUM7QUFDRyxrQkFBWSxlQUNwQjtBQUNKO0FBQUM7QUFDTCxZQUFDO0FBQUEsR0FDRDs7QUFBOEMseUNBQVM7QUFDbkQsdUNBQXdDLGVBQXFCLE1BQXdCO0FBQ2pGLDJCQUFVLE1BQVc7QUFETixjQUFhLGdCQUFRO0FBQVMsY0FBSSxPQUFRO0FBQVMsY0FBTyxVQUFRO0FBRTdFLGNBQVksY0FBeUM7QUFDekQsYUFBUyxRQUFhLFdBQVMsU0FBbUIsbUJBQWMsZUFBUTtBQUNwRSxjQUFDLElBQUssSUFBSSxHQUFHLElBQVEsTUFBTyxRQUFLLEtBQUc7QUFDakMsaUJBQUUsSUFBSyxHQUFLLEtBQVksZUFBUztBQUNoQyxrQkFBWSxlQUFPLE1BQVEsTUFBRyxHQUFLLE9BQzNDO0FBQUM7QUFDRyxjQUFZLGVBQ3BCO0FBQUM7QUFDTCxZQUFDO0FBQUEsR0FDRDs7QUFBMEMscUNBQXdCO0FBQzlELG1DQUF1QyxjQUE4QjtBQUNqRSwyQkFBbUIsZUFBdUIsdUJBQWlGLGtGQUFlLGVBQVM7QUFEcEksY0FBWSxlQUFRO0FBQVMsY0FBYSxnQkFFN0Q7QUFBQztBQUNMLFlBQUM7QUFBQSxHQUNEOztBQUE0Qyx1Q0FBd0I7QUFDaEUscUNBQXVDLGNBQThCO0FBQ2pFLDJCQUFtQixlQUF5Qix5QkFBbUYsb0ZBQWUsZUFBUztBQUR4SSxjQUFZLGVBQVE7QUFBUyxjQUFhLGdCQUU3RDtBQUFDO0FBQ0wsWUFBQztBQUFBLEdBQ0Q7O0FBQStDLDBDQUFTO0FBQ3BELHdDQUF1QyxjQUEwQjtBQUM3RCwyQkFBd0Isb0JBQWtCLG1CQUFlLGVBQTZCLDZCQUFZLFlBQVM7QUFENUYsY0FBWSxlQUFRO0FBQVMsY0FBUyxZQUV6RDtBQUFDO0FBQ0wsWUFBQztBQUFBLEdBRUQ7O0FBQUE7QUFLVyxjQUFNLFNBQUcsSUFpSnBCO0FBQUM7QUFsSkcsMkJBQWtCLFlBQVE7Y0FBMUI7QUFBcUMsb0JBQVcsV0FBZ0I7QUFBQzs7dUJBQUE7O0FBRTFELDBCQUFZLGVBQW5CLFVBQTRCO0FBQ2xCLGdCQUFLLEtBQWlCLGlCQUFJLEtBQ3BDO0FBQUM7QUFDTSwwQkFBUSxXQUFmLFVBQTRCLFNBQVU7QUFDL0IsYUFBQyxDQUFTLFNBQVE7QUFDckIsYUFBYyxhQUFRO0FBQ25CLGFBQUksSUFBUyxTQUFFO0FBQ0osMEJBQWEsV0FBUyxTQUFjLGNBQUksSUFDdEQ7QUFBQztBQUNFLGFBQUMsQ0FBWSxZQUFRO0FBQ3BCLGNBQUMsSUFBTyxPQUFZLFNBQUU7QUFDbkIsaUJBQUksT0FBYyxXQUFrQixrQkFBVTtBQUM5QyxpQkFBSSxPQUFjLFdBQXNCLHNCQUFFO0FBQ3RDLHFCQUFLLE9BQVUsUUFBTTtBQUU1QjtBQUFDO0FBQ0QsaUJBQVksV0FBTyxLQUFhLGFBQVcsWUFBTztBQUMvQyxpQkFBQyxDQUFVLFVBQUU7QUFDUixzQkFBWSxZQUFDLElBQTRCLHlCQUFJLElBQVcsWUFBSyxJQUFXLFlBQVc7QUFFM0Y7QUFBQztBQUNHLGtCQUFXLFdBQVEsUUFBSyxNQUFLLEtBQUssS0FDMUM7QUFDSjtBQUFDO0FBQ1MsMEJBQWdCLG1CQUExQixVQUFtQyxLQUE4QjtBQUMxRCxhQUFDLENBQUksSUFBUyxTQUFPLE9BQUs7QUFDN0IsYUFBVSxTQUFNO0FBQ2IsYUFBUyxZQUFZLFFBQUMsQ0FBUyxTQUFZLFdBQUU7QUFDdEMsb0JBQVcsV0FBa0Isb0JBQVcsU0FBVyxXQUFJLElBQ2pFO0FBQUM7QUFDRCxhQUFjLGFBQWEsV0FBUyxTQUFjLGNBQUksSUFBWTtBQUM5RCxjQUFDLElBQUssSUFBWSxHQUFHLElBQWEsV0FBTyxRQUFLLEtBQUc7QUFDN0Msa0JBQVksWUFBSSxLQUFRLFFBQVksV0FDNUM7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDUywwQkFBVyxjQUFyQixVQUE4QixLQUFhLFFBQThCO0FBQ3JFLGFBQVMsUUFBUTtBQUNkLGFBQVMsU0FBa0Isa0JBQUU7QUFDdkIscUJBQVcsU0FBUyxTQUM3QjtBQUFNLGdCQUFFO0FBQ0MscUJBQU0sSUFBUyxTQUN4QjtBQUFDO0FBQ0UsYUFBTSxVQUFjLGFBQVMsVUFBVSxNQUFRO0FBQy9DLGFBQVMsU0FBZSxlQUFRLFFBQVE7QUFDeEMsYUFBSyxLQUFhLGFBQVEsUUFBRTtBQUMzQixpQkFBWSxXQUFNO0FBQ2Qsa0JBQUMsSUFBSyxJQUFJLEdBQUcsSUFBUSxNQUFPLFFBQUssS0FBRztBQUM1QiwwQkFBSyxLQUFLLEtBQWlCLGlCQUFNLE1BQUcsSUFDaEQ7QUFBQztBQUNJLHFCQUFXLFNBQU8sU0FBSSxJQUFXLFdBQzFDO0FBQU0sZ0JBQUU7QUFDQyxxQkFBTyxLQUFpQixpQkFBTSxPQUN2QztBQUFDO0FBQ0UsYUFBQyxDQUFTLFNBQWUsZUFBUSxRQUFFO0FBQzVCLG9CQUFTLFNBQU0sUUFDekI7QUFDSjtBQUFDO0FBQ1MsMEJBQVUsYUFBcEIsVUFBK0IsT0FBVSxLQUFVLEtBQThCO0FBQzFFLGFBQU0sU0FBUyxNQUFRO0FBQ3ZCLGFBQVMsWUFBUSxRQUFZLFNBQWtCLGtCQUFFO0FBQ3hDLHNCQUFTLFNBQUksS0FBTyxPQUFRO0FBRXhDO0FBQUM7QUFDRSxhQUFLLEtBQWEsYUFBUSxRQUFFO0FBQ3ZCLGtCQUFhLGFBQU0sT0FBSyxLQUFLLEtBQVk7QUFFakQ7QUFBQztBQUNELGFBQVUsU0FBTyxLQUFhLGFBQU0sT0FBWTtBQUM3QyxhQUFPLE9BQVEsUUFBRTtBQUNaLGtCQUFTLFNBQU0sT0FBUSxPQUFTO0FBQy9CLHFCQUFTLE9BQ2xCO0FBQUM7QUFDRSxhQUFDLENBQU8sT0FBTyxPQUFFO0FBQ2IsaUJBQUssT0FDWjtBQUNKO0FBQUM7QUFDTywwQkFBWSxlQUFwQixVQUErQjtBQUFtQixnQkFBTSxTQUFTLE1BQVksWUFBVyxXQUFRLFFBQVMsV0FBRyxDQUFJO0FBQUM7QUFDekcsMEJBQVksZUFBcEIsVUFBK0IsT0FBOEI7QUFDekQsYUFBVSxTQUFHLEVBQVEsUUFBTSxNQUFPLE9BQVM7QUFDM0MsYUFBYSxZQUFRLE1BQVcsV0FBbUI7QUFDaEQsYUFBQyxDQUFVLGFBQVksWUFBUSxRQUFZLFNBQVcsV0FBRTtBQUM5Qyx5QkFBVyxTQUN4QjtBQUFDO0FBQ1EscUJBQVcsU0FBYSxhQUFZO0FBQ3ZDLGdCQUFPLFNBQWMsU0FBWCxHQUF3QixXQUFTLFNBQVksWUFBVyxhQUFRO0FBQzFFLGdCQUFNLFFBQU8sS0FBdUIsdUJBQU8sT0FBTyxRQUFPLE9BQVUsVUFBYTtBQUNoRixnQkFDVjtBQUFDO0FBQ08sMEJBQXNCLHlCQUE5QixVQUEwQyxRQUFZLE9BQThCLFVBQW1CO0FBQ25HLGFBQVMsUUFBUTtBQUNkLGFBQVEsUUFBRTtBQUNULGlCQUFzQixxQkFBYSxXQUFTLFNBQXNCLHNCQUFZO0FBQzNFLGlCQUFvQixvQkFBRTtBQUNqQixzQkFBQyxJQUFLLElBQUksR0FBRyxJQUFxQixtQkFBTyxRQUFLLEtBQUc7QUFDOUMseUJBQUMsQ0FBTSxNQUFtQixtQkFBSyxLQUFFO0FBQzNCLGlDQUFHLElBQTZCLDBCQUFtQixtQkFBRyxJQUFhO0FBRTVFO0FBQ0o7QUFDSjtBQUNKO0FBQU0sZ0JBQUU7QUFDRCxpQkFBUyxTQUFlLGVBQUU7QUFDdEIscUJBQUMsQ0FBVyxXQUFFO0FBQ1IsNkJBQUcsSUFBd0IscUJBQVMsU0FBSyxNQUFVLFNBQzVEO0FBQU0sd0JBQUU7QUFDQyw2QkFBRyxJQUEwQix1QkFBUyxTQUFLLE1BQVUsU0FDOUQ7QUFDSjtBQUNKO0FBQUM7QUFDRSxhQUFPLE9BQUU7QUFDSixrQkFBWSxZQUFNLE9BQzFCO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ08sMEJBQVcsY0FBbkIsVUFBb0MsT0FBYztBQUMzQyxhQUFRLFdBQVcsUUFBVyxXQUF1Qix1QkFBRTtBQUNqRCxtQkFBRyxLQUFVLFFBQVcsV0FBc0Isc0JBQ3ZEO0FBQUM7QUFDRyxjQUFPLE9BQUssS0FDcEI7QUFBQztBQUNPLDBCQUFZLGVBQXBCLFVBQXNDLE9BQVUsS0FBVSxLQUE4QjtBQUNqRixhQUFDLENBQUssS0FBYSxhQUFJLElBQU8sT0FBRTtBQUM1QixpQkFBSyxPQUNaO0FBQUM7QUFDRyxjQUFDLElBQUssSUFBSSxHQUFHLElBQVEsTUFBTyxRQUFLLEtBQUc7QUFDcEMsaUJBQVksV0FBTyxLQUFhLGFBQU0sTUFBRyxJQUFZO0FBQ2xELGlCQUFTLFNBQVEsUUFBRTtBQUNmLHFCQUFLLEtBQUssS0FBUyxTQUFTO0FBQzNCLHNCQUFTLFNBQU0sTUFBRyxJQUFVLFNBQ3BDO0FBQU0sb0JBQUU7QUFDRCxxQkFBQyxDQUFTLFNBQU8sT0FBRTtBQUNmLHlCQUFLLEtBQUssS0FBTSxNQUN2QjtBQUNKO0FBQ0o7QUFDSjtBQUFDO0FBQ08sMEJBQVksZUFBcEIsVUFBMEQsWUFBVTtBQUM3RCxhQUFDLENBQVksWUFBTyxPQUFNO0FBQ3pCLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBYSxXQUFPLFFBQUssS0FBRztBQUN0QyxpQkFBVyxXQUFHLEdBQUssUUFBUSxLQUFPLE9BQVcsV0FDcEQ7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFwSmMsZ0JBQWdCLG1CQUFVO0FBQzFCLGdCQUFvQix1QkFBUztBQUM3QixnQkFBYSxnQkFBRyxJQUFtQjtBQW1KdEQsWUFBQztBQUFBLEs7Ozs7Ozs7Ozs7OztBQ3Bka0Q7O0FBQ1o7O0FBQ1c7O0FBR2xEOzs7QUFBcUMsZ0NBQUk7QUFPckM7QUFDSSxxQkFBUTtBQVBMLGNBQUcsTUFBYztBQUNqQixjQUFJLE9BQWM7QUFDbEIsY0FBUyxZQUFjO0FBQ3ZCLGNBQVMsWUFBYztBQUV2QixjQUFLLFFBR1o7QUFBQztBQUNNLCtCQUFHLE1BQVY7QUFDTyxhQUFDLENBQUssS0FBSSxPQUFJLENBQUssS0FBbUIsbUJBQVE7QUFDN0MsY0FBTSxRQUFRO0FBQ2xCLGFBQU8sTUFBRyxJQUFxQjtBQUM1QixhQUFLLEtBQU0sT0FBTSxLQUFNO0FBQ3ZCLGFBQWlCLGlCQUFlLGdCQUF1QztBQUMxRSxhQUFRLE9BQVE7QUFDYixhQUFPLFNBQUc7QUFDTixpQkFBSSxJQUFPLFVBQVEsS0FBRTtBQUNoQixzQkFBTyxPQUFLLEtBQU0sTUFBSSxJQUM5QjtBQUFNLG9CQUFFO0FBQ0Esc0JBQVEsUUFBSSxJQUFXLFlBQUssSUFDcEM7QUFDSjtBQUFFO0FBQ0MsYUFDUDtBQUFDO0FBQ00sK0JBQU8sVUFBZDtBQUFpQyxnQkFBaUI7QUFBQztBQUNuRCwyQkFBVywyQkFBTztjQUFsQjtBQUNVLG9CQUFDLENBQUssS0FBSSxPQUFJLENBQUssS0FBSyxRQUFJLENBQUssS0FBVSxhQUFJLENBQUssS0FDOUQ7QUFBQzs7dUJBQUE7O0FBQ00sK0JBQU8sVUFBZCxVQUF3QjtBQUNoQixjQUFTO0FBQ1YsYUFBSyxLQUFLLEtBQUssS0FBSSxNQUFPLEtBQUs7QUFDL0IsYUFBSyxLQUFNLE1BQUssS0FBSyxPQUFPLEtBQU07QUFDbEMsYUFBSyxLQUFXLFdBQUssS0FBVSxZQUFPLEtBQVc7QUFDakQsYUFBSyxLQUFXLFdBQUssS0FBVSxZQUFPLEtBQzdDO0FBQUM7QUFDTSwrQkFBSyxRQUFaO0FBQ1EsY0FBSSxNQUFNO0FBQ1YsY0FBSyxPQUFNO0FBQ1gsY0FBVSxZQUFNO0FBQ2hCLGNBQVUsWUFDbEI7QUFBQztBQUNTLCtCQUFNLFNBQWhCLFVBQTRCO0FBQ3hCLGFBQVMsUUFBTTtBQUNULGtCQUFPLEtBQW1CLG1CQUFTO0FBQ3RDLGFBQU8sVUFBVSxPQUFXLFdBQUU7QUFDekIsa0JBQUMsSUFBSyxJQUFJLEdBQUcsSUFBUyxPQUFPLFFBQUssS0FBRztBQUNyQyxxQkFBYSxZQUFTLE9BQUk7QUFDdkIscUJBQUMsQ0FBVyxXQUFVO0FBQ3pCLHFCQUFTLFFBQU8sS0FBUyxTQUFZO0FBQ3JDLHFCQUFTLFFBQU8sS0FBUyxTQUFZO0FBQ2hDLHVCQUFLLEtBQWMsb0JBQU0sT0FDbEM7QUFDSjtBQUFNLGdCQUFFO0FBQ0Esa0JBQU0sUUFBa0IsdUJBQW1CLGtDQUFVLFVBQzdEO0FBQUM7QUFDRyxjQUFrQixrQkFDMUI7QUFBQztBQUNPLCtCQUFPLFVBQWYsVUFBOEIsUUFBa0I7QUFDeEMsY0FBTSxRQUFrQix1QkFBbUIsa0NBQVUsVUFBbUIsbUJBQVUsVUFBTyxRQUFhO0FBQ3RHLGNBQWtCLGtCQUMxQjtBQUFDO0FBQ08sK0JBQWtCLHFCQUExQixVQUFzQztBQUMvQixhQUFDLENBQVEsUUFBTyxPQUFRO0FBQ3hCLGFBQUMsQ0FBSyxLQUFNLE1BQU8sT0FBUTtBQUM5QixhQUFVLFNBQU8sS0FBYTtBQUMxQixjQUFDLElBQUssSUFBSSxHQUFHLElBQVMsT0FBTyxRQUFLLEtBQUc7QUFDL0Isc0JBQVMsT0FBTyxPQUFLO0FBQ3hCLGlCQUFDLENBQVEsUUFBTyxPQUN2QjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLCtCQUFTLFlBQWpCO0FBQ0ksYUFBVSxTQUFNO0FBQ2IsYUFBSyxLQUFLLEtBQVEsUUFBSyxPQUFHLENBQUcsR0FBRTtBQUN4QixzQkFBTyxLQUFLLEtBQU0sTUFDNUI7QUFBTSxnQkFBRTtBQUNFLHNCQUFPLEtBQUssS0FBTSxNQUM1QjtBQUFDO0FBQ0UsYUFBTyxPQUFPLFVBQU0sR0FBTyxPQUFLLEtBQUssS0FBTztBQUN6QyxnQkFDVjtBQUFDO0FBQ08sK0JBQVEsV0FBaEIsVUFBMEI7QUFDbkIsYUFBSyxLQUFXLFdBQU8sT0FBSyxLQUFLLEtBQVk7QUFDaEQsYUFBTyxNQUFTLE9BQUssS0FBTSxNQUFRO0FBQ2hDLGFBQUksTUFBSyxHQUFPLE9BQU07QUFDbkIsZ0JBQUssS0FBTyxPQUFLLEtBQU0sTUFDakM7QUFBQztBQUNPLCtCQUFRLFdBQWhCLFVBQTBCO0FBQ25CLGFBQUMsQ0FBSyxLQUFXLFdBQU8sT0FBTTtBQUMzQixnQkFBSyxLQUFLLEtBQ3BCO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFDUyx3QkFBUyxTQUFTLFNBQWUsZ0JBQUUsQ0FBTSxPQUFRLFFBQWEsYUFBYyxjQUFFO0FBQW9CLFlBQUMsSUFBdUI7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUNoR3ZJOzs7QUFBQTtBQWtCWSxjQUFPLFVBd0JuQjtBQUFDO0FBeENHLDJCQUFXLFdBQVM7Y0FBcEI7QUFDTyxpQkFBVSxVQUFlLGtCQUFTLE1BQU8sT0FBVSxVQUFnQjtBQUM3RCx1QkFBZTtBQUNmLHdCQUFFLGVBQWMsTUFBTztBQUFVLDRCQUFDLENBQU87QUFBQztBQUN2QywyQkFBRSxrQkFBYyxNQUFPO0FBQVUsNEJBQUUsQ0FBQyxDQUFRO0FBQUM7QUFDaEQsd0JBQUUsZUFBYyxNQUFPO0FBQVUsNEJBQUssUUFBVztBQUFDO0FBQy9DLDJCQUFFLGtCQUFjLE1BQU87QUFBVSw0QkFBSyxRQUFXO0FBQUM7QUFDbEQsMkJBQUUsa0JBQWMsTUFBTztBQUFVLDRCQUFLLFFBQVEsS0FBVyxjQUFRLEtBQVEsUUFBTyxTQUFHLENBQUk7QUFBQztBQUNyRiw4QkFBRSxxQkFBYyxNQUFPO0FBQVUsNEJBQUMsQ0FBSyxRQUFJLENBQUssS0FBVyxjQUFRLEtBQVEsUUFBTyxVQUFJLENBQUk7QUFBQztBQUMvRiwwQkFBRSxpQkFBYyxNQUFPO0FBQVUsNEJBQUssT0FBVTtBQUFDO0FBQ3BELHVCQUFFLGNBQWMsTUFBTztBQUFVLDRCQUFLLE9BQVU7QUFBQztBQUN2QyxpQ0FBRSx3QkFBYyxNQUFPO0FBQVUsNEJBQUssUUFBVztBQUFDO0FBQ3JELDhCQUFFLHFCQUFjLE1BQU87QUFBVSw0QkFBSyxRQUFXO0FBQzlEO0FBWHlCO0FBWXJCLG9CQUFVLFVBQ3BCO0FBQUM7O3VCQUFBOztBQUlELDJCQUFXLHFCQUFRO2NBQW5CO0FBQXNDLG9CQUFLLEtBQVU7QUFBQztjQUN0RCxhQUFpQztBQUMxQixpQkFBQyxDQUFPLE9BQVE7QUFDZCxxQkFBUSxNQUFlO0FBQ3pCLGlCQUFDLENBQVUsVUFBVSxVQUFRLFFBQVE7QUFDcEMsa0JBQVEsVUFDaEI7QUFBQzs7dUJBTnFEOztBQU8vQyx5QkFBTyxVQUFkLFVBQStCLE1BQW1CO0FBQW5DLDJCQUFnQjtBQUFoQixvQkFBZ0I7O0FBQUUsNEJBQWlCO0FBQWpCLHFCQUFpQjs7QUFDM0MsYUFBQyxDQUFNLE1BQUssT0FBTyxLQUFNO0FBQ3pCLGFBQUMsQ0FBTyxPQUFNLFFBQU8sS0FBTztBQUV6QixnQkFBVSxVQUFVLFVBQUssS0FBVSxVQUFLLEtBQWEsYUFBTSxPQUFNLEtBQWEsYUFDeEY7QUFBQztBQUNPLHlCQUFZLGVBQXBCLFVBQTZCO0FBQ3RCLGFBQUMsQ0FBUSxPQUFDLE9BQVUsT0FBYyxVQUFPLE9BQUs7QUFDakQsYUFBTyxNQUFNO0FBQ1YsYUFBSSxJQUFPLFNBQVEsTUFBSSxJQUFHLE1BQU8sT0FBTyxJQUFHLE1BQVMsTUFBSyxNQUFNLElBQU8sT0FBSTtBQUM3RSxhQUFPLE1BQU0sSUFBUTtBQUNsQixhQUFJLE1BQVEsTUFBSSxJQUFJLE1BQUssTUFBTyxPQUFPLElBQUksTUFBSyxNQUFTLE1BQUssTUFBTSxJQUFPLE9BQUUsR0FBSyxNQUFNO0FBQ3JGLGdCQUNWO0FBQUM7QUF4Q00sZUFBYyxpQkFBNkI7QUF5Q3RELFlBQUM7QUFDRDs7QUFHSTtBQUZRLGNBQWUsa0JBQWlCO0FBQ2pDLGNBQVEsV0FDUTtBQUFDO0FBQ3hCLDJCQUFXLHlCQUFVO2NBQXJCO0FBQXdDLG9CQUFLLEtBQWtCO0FBQUM7Y0FDaEUsYUFBbUM7QUFDNUIsaUJBQUMsQ0FBTyxPQUFRO0FBQ2QscUJBQVEsTUFBZTtBQUN6QixpQkFBTSxTQUFPLE9BQVMsU0FBUyxNQUFNLFFBQVM7QUFDOUMsaUJBQU0sU0FBTyxPQUFTLFNBQVMsTUFBTSxRQUFRO0FBQzdDLGlCQUFNLFNBQVMsU0FBUyxTQUFTLE1BQVE7QUFDeEMsa0JBQWdCLGtCQUN4QjtBQUFDOzt1QkFSK0Q7O0FBU2hFLDJCQUFXLHlCQUFPO2NBQWxCO0FBQTZCLG9CQUFLLEtBQVMsU0FBTyxVQUFPO0FBQUM7O3VCQUFBOztBQUNuRCw2QkFBSyxRQUFaO0FBQ1EsY0FBUyxXQUFNO0FBQ2YsY0FBVyxhQUNuQjtBQUFDO0FBQ0wsWUFBQztBQUNEOztBQUlJLDhCQUFxQztBQUM3QixjQUFLLE9BQUcsSUFBb0I7QUFDNUIsY0FBVyxhQUNuQjtBQUFDO0FBQ0QsMkJBQVcsMkJBQVU7Y0FBckI7QUFBd0Msb0JBQUssS0FBa0I7QUFBQztjQUNoRSxhQUFtQztBQUM1QixpQkFBSyxLQUFXLGNBQVUsT0FBUTtBQUNqQyxrQkFBZ0Isa0JBQVM7QUFDUCxzREFBTSxNQUFLLEtBQWdCLGlCQUFNLEtBQzNEO0FBQUM7O3VCQUwrRDs7QUFNekQsK0JBQUcsTUFBVixVQUFpQztBQUN6QixjQUFPLFNBQVU7QUFDZixnQkFBSyxLQUFRLFFBQUssS0FDNUI7QUFBQztBQUNPLCtCQUFPLFVBQWYsVUFBbUM7QUFDL0IsYUFBZSxjQUFPLEtBQVcsY0FBVTtBQUN2QyxjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBUyxTQUFPLFFBQUssS0FBRztBQUM1QyxpQkFBTyxNQUFPLEtBQWlCLGlCQUFLLEtBQVMsU0FBSztBQUMvQyxpQkFBQyxDQUFJLE9BQWdCLGFBQU8sT0FBTztBQUNuQyxpQkFBSSxPQUFJLENBQWEsYUFBTyxPQUNuQztBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLCtCQUFnQixtQkFBeEIsVUFBbUM7QUFDNUIsYUFBQyxDQUFPLE9BQU8sT0FBTztBQUN0QixhQUFNLE1BQWEsYUFBTyxPQUFLLEtBQVEsUUFBUTtBQUMvQyxhQUFNLE1BQVMsU0FBTyxPQUFLLEtBQWEsYUFBUTtBQUM3QyxnQkFDVjtBQUFDO0FBQ08sK0JBQVksZUFBcEIsVUFBeUM7QUFDckMsYUFBUSxPQUFZLFVBQU07QUFDMUIsYUFBUSxPQUFPLEtBQWEsYUFBTztBQUNoQyxhQUFNLE1BQUU7QUFDSixpQkFBRSxFQUFLLFFBQVEsS0FBUyxTQUFPLE9BQU87QUFDckMsb0JBQU8sS0FBTyxPQUN0QjtBQUFDO0FBQ0QsYUFBUyxRQUFZLFVBQU87QUFDeEIsZ0JBQU8sS0FBYSxhQUFRO0FBQzdCLGFBQU0sTUFBRTtBQUNKLGlCQUFFLEVBQUssUUFBUSxLQUFTLFNBQU8sT0FBTztBQUNwQyxxQkFBTyxLQUFPLE9BQ3ZCO0FBQUM7QUFDSyxnQkFBVSxVQUFRLFFBQUssTUFDakM7QUFBQztBQUNPLCtCQUFZLGVBQXBCLFVBQW1DO0FBQzVCLGFBQUMsQ0FBVyxXQUFPLE9BQU07QUFDekIsYUFBQyxPQUFnQixjQUFjLFVBQU8sT0FBTTtBQUM1QyxhQUFVLFVBQU8sU0FBSSxLQUFhLFVBQUcsTUFBTyxPQUFhLFVBQVUsVUFBTyxTQUFLLE1BQVEsS0FBTyxPQUFNO0FBQ2pHLGdCQUFVLFVBQU8sT0FBRSxHQUFXLFVBQU8sU0FDL0M7QUFBQztBQUNMLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7OztBQ3JIRDs7O0FBQUEsaUNBd05BLENBQUM7QUFqTlUsZ0NBQUssUUFBWixVQUF5QixNQUFxQjtBQUN0QyxjQUFLLE9BQVE7QUFDYixjQUFLLE9BQVE7QUFDYixjQUFLLEtBQVM7QUFDZCxjQUFHLEtBQUs7QUFDUixjQUFPLFNBQU8sS0FBSyxLQUFRO0FBQy9CLGFBQU8sTUFBTyxLQUFhO0FBQ3JCLGdCQUNWO0FBQUM7QUFDTSxnQ0FBUSxXQUFmLFVBQW1DO0FBQzNCLGNBQUssT0FBUTtBQUNYLGdCQUFLLEtBQWEsYUFDNUI7QUFBQztBQUNPLGdDQUFZLGVBQXBCLFVBQStCO0FBQ3hCLGFBQUMsQ0FBTyxPQUFPLE9BQUk7QUFDbkIsYUFBTSxNQUFhLGFBQU8sT0FBSyxLQUFhLGFBQVE7QUFDcEQsYUFBTSxNQUFTLFNBQU8sT0FBSyxLQUFrQixrQkFBUTtBQUNsRCxnQkFDVjtBQUFDO0FBQ08sZ0NBQVksZUFBcEIsVUFBd0M7QUFDakMsYUFBSyxLQUFTLFNBQU8sT0FBSTtBQUM1QixhQUFPLE1BQU07QUFDVCxjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBUyxTQUFPLFFBQUssS0FBRztBQUM1QyxpQkFBWSxXQUFPLEtBQWEsYUFBSyxLQUFTLFNBQUs7QUFDaEQsaUJBQVUsVUFBRTtBQUNSLHFCQUFLLEtBQUksT0FBTyxNQUFPLEtBQVcsYUFBTztBQUN6Qyx3QkFDUDtBQUNKO0FBQUM7QUFDRSxhQUFLLFFBQVEsS0FBSyxRQUFRLEtBQVMsU0FBTyxTQUFLLEdBQUU7QUFDN0MsbUJBQU0sTUFBTSxNQUNuQjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLGdDQUFpQixvQkFBekIsVUFBOEM7QUFDdkMsYUFBQyxDQUFVLFVBQU0sU0FBSSxDQUFVLFVBQVUsVUFBTyxPQUFJO0FBQ3ZELGFBQVEsT0FBWSxVQUFNO0FBQ3ZCLGFBQUssUUFBSSxDQUFLLEtBQVUsVUFBTyxPQUFLLE9BQU0sTUFBTyxPQUFPO0FBQzNELGFBQU8sTUFBTyxPQUFNLE1BQU8sS0FBa0Isa0JBQVUsVUFBVztBQUMvRCxhQUFLLEtBQW1CLG1CQUFVLFVBQVcsV0FBTyxPQUFLO0FBQzVELGFBQVMsUUFBWSxVQUFPO0FBQ3pCLGFBQU0sU0FBSSxDQUFLLEtBQVUsVUFBUSxRQUFNLFFBQU0sTUFBUSxRQUFPO0FBQ3pELGdCQUFJLE1BQU0sTUFDcEI7QUFBQztBQUNPLGdDQUFpQixvQkFBekIsVUFBb0M7QUFDN0IsYUFBRyxNQUFZLFNBQU8sT0FBSztBQUMzQixhQUFHLE1BQWUsWUFBTyxPQUFNO0FBQy9CLGFBQUcsTUFBYyxXQUFPLE9BQUs7QUFDN0IsYUFBRyxNQUFXLFFBQU8sT0FBSztBQUMxQixhQUFHLE1BQXFCLGtCQUFPLE9BQU07QUFDckMsYUFBRyxNQUFrQixlQUFPLE9BQU07QUFDL0IsZ0JBQ1Y7QUFBQztBQUNPLGdDQUFTLFlBQWpCLFVBQStCO0FBQzNCLGFBQU8sTUFBYSxXQUFRO0FBQ3pCLGFBQU0sTUFBTSxNQUFPLE9BQU87QUFDdkIsZ0JBQVMsU0FDbkI7QUFBQztBQUNPLGdDQUFTLFlBQWpCO0FBQ1EsY0FBSyxPQUFPLEtBQU07QUFDbEIsY0FBZ0Isa0JBQU07QUFDdEIsY0FBZ0IsZ0JBQUssS0FBSyxLQUFPO0FBQ3JDLGFBQU8sTUFBTyxLQUFrQjtBQUMxQixnQkFBSSxPQUFRLEtBQUcsTUFBUSxLQUNqQztBQUFDO0FBQ08sZ0NBQWMsaUJBQXRCO0FBQ0ksYUFBTyxNQUFPLEtBQWlCO0FBQzVCLGFBQUMsQ0FBSyxLQUFPLE9BQUs7QUFDckIsYUFBYyxhQUFPLEtBQWtCO0FBQ3BDLGFBQVksWUFBRTtBQUNULGtCQUFjLGNBQWE7QUFDekIsb0JBQUssS0FDZjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLGdDQUFhLGdCQUFyQjtBQUNPLGFBQUMsQ0FBSyxLQUFrQixrQkFBTyxPQUFPO0FBQ3pDLGFBQVEsT0FBTyxLQUFjO0FBQzFCLGFBQUMsQ0FBTSxNQUFPLE9BQU87QUFDeEIsYUFBTSxLQUFPLEtBQWdCO0FBQzFCLGFBQUMsQ0FBSSxJQUFPLE9BQU87QUFDdEIsYUFBSyxJQUFtQjtBQUN2QixXQUFLLE9BQVE7QUFBRSxXQUFTLFdBQU07QUFDNUIsYUFBQyxDQUFLLEtBQW1CLG1CQUFLLEtBQUU7QUFDL0IsaUJBQVMsUUFBTyxLQUFjO0FBQzNCLGlCQUFDLENBQU8sT0FBTyxPQUFPO0FBQ3hCLGVBQU0sUUFDWDtBQUFDO0FBQ0csY0FBYSxhQUFJO0FBQ2YsZ0JBQ1Y7QUFBQztBQUNPLGdDQUFjLGlCQUF0QjtBQUNRLGNBQVE7QUFDVCxhQUFLLEtBQUcsTUFBUSxLQUFPLFVBQVEsS0FBRyxNQUFRLEtBQU8sT0FBTTtBQUN0RCxjQUFNO0FBQ04sY0FBa0I7QUFDdEIsYUFBTyxNQUFPLEtBQWtCO0FBQzdCLGFBQUssS0FBRTtBQUNGLGtCQUFRO0FBQ1QsbUJBQU8sS0FBRyxNQUFRO0FBQ2pCLGtCQUFNO0FBQ04sa0JBQ1I7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDRCwyQkFBWSw0QkFBRTtjQUFkO0FBQWlDLG9CQUFLLEtBQUssS0FBTyxPQUFLLEtBQU07QUFBQzs7dUJBQUE7O0FBQ3RELGdDQUFJLE9BQVo7QUFDSSxnQkFBVyxLQUFHLEtBQU8sS0FBTyxVQUFRLEtBQVEsUUFBSyxLQUFJO0FBQU0sa0JBQy9EOztBQUFDO0FBQ08sZ0NBQU8sVUFBZixVQUF5QjtBQUNmLGdCQUFFLEtBQU8sT0FBSyxLQUFRLFFBQUssS0FBUSxRQUFLLEtBQ2xEO0FBQUM7QUFDTyxnQ0FBUSxXQUFoQixVQUEwQjtBQUNoQixnQkFBRSxLQUFPLE9BQUssS0FDeEI7QUFBQztBQUNPLGdDQUFjLGlCQUF0QixVQUFnQztBQUN0QixnQkFBRSxLQUFPLE9BQUssS0FBTyxPQUFLLEtBQU8sT0FBSyxLQUNoRDtBQUFDO0FBQ08sZ0NBQVUsYUFBbEIsVUFBNEI7QUFDbEIsZ0JBQUUsS0FBTyxPQUFLLEtBQ3hCO0FBQUM7QUFDTyxnQ0FBVSxhQUFsQjtBQUNRLGNBQVE7QUFDVCxhQUFLLEtBQUcsTUFBUSxLQUFRLFFBQU8sT0FBTTtBQUN4QyxhQUFTLFFBQU8sS0FBSTtBQUNwQixhQUFhLFlBQU8sS0FBUyxTQUFLLEtBQUs7QUFDcEMsYUFBVyxXQUFLLEtBQU07QUFDekIsYUFBZSxjQUFPLEtBQWUsZUFBSyxLQUFLO0FBQy9DLGdCQUFXLEtBQUcsS0FBTyxLQUFPLFFBQUc7QUFDeEIsaUJBQUMsQ0FBVSxhQUFRLEtBQVEsUUFBSyxLQUFLLEtBQU87QUFDNUMsaUJBQUssS0FBUyxTQUFLLEtBQUssS0FBRTtBQUN0QixxQkFBVyxXQUFLLEtBQU07QUFFN0I7QUFBQztBQUNFLGlCQUFDLENBQVcsV0FBRTtBQUNWLHFCQUFZLGVBQVEsS0FBZSxlQUFLLEtBQUssS0FBTztBQUNwRCxxQkFBSyxLQUFXLFdBQUssS0FBSyxLQUNqQztBQUFDO0FBQ0csa0JBQ1I7QUFBQztBQUNFLGFBQUssS0FBRyxNQUFVLE9BQU8sT0FBTTtBQUNsQyxhQUFPLE1BQU8sS0FBSyxLQUFPLE9BQU0sT0FBTSxLQUFHLEtBQVU7QUFDaEQsYUFBSyxLQUFFO0FBQ0gsaUJBQUksSUFBTyxTQUFJLEtBQVEsS0FBUyxTQUFJLElBQUssS0FBRTtBQUMxQyxxQkFBTyxNQUFNLElBQU8sU0FBSztBQUN0QixxQkFBSyxLQUFTLFNBQUksSUFBSSxJQUFPLFNBQU8sS0FBTztBQUMzQyx1QkFBTSxJQUFPLE9BQUUsR0FDdEI7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLGdDQUFrQixxQkFBMUIsVUFBcUM7QUFDM0IsZ0JBQUcsTUFBVyxXQUFNLE1BQzlCO0FBQUM7QUFDTyxnQ0FBWSxlQUFwQjtBQUNJLGFBQU0sS0FBTyxLQUFjO0FBQ3hCLGFBQUMsQ0FBSSxJQUFPLE9BQU07QUFDbkIsY0FBSyxHQUFlO0FBQ25CLGFBQUcsTUFBUSxLQUFHLEtBQWE7QUFDM0IsYUFBRyxNQUFRLEtBQUcsS0FBVTtBQUN4QixhQUFHLE1BQVEsUUFBTSxNQUFTLE1BQUcsS0FBb0I7QUFDakQsYUFBRyxNQUFRLFFBQU0sTUFBUyxNQUFHLEtBQWlCO0FBQzlDLGFBQUcsTUFBTyxPQUFNLE1BQVMsTUFBRyxLQUFXO0FBQ3ZDLGFBQUcsTUFBUSxRQUFNLE1BQVMsTUFBRyxLQUFjO0FBQzNDLGFBQUcsTUFBYyxXQUFHLEtBQWM7QUFDbEMsYUFBRyxNQUFpQixjQUFHLEtBQWlCO0FBQ3JDLGdCQUNWO0FBQUM7QUFDTyxnQ0FBYyxpQkFBdEI7QUFDSSxhQUFPLE1BQU8sS0FBYztBQUN6QixhQUFDLENBQUssS0FBTyxPQUFNO0FBQ25CLGVBQU0sSUFBZTtBQUNyQixhQUFJLE9BQU8sT0FBTyxPQUFTLE1BQUksTUFBUztBQUN4QyxhQUFJLE9BQU8sT0FBTyxPQUFTLE1BQUksTUFBUTtBQUN2QyxhQUFJLE9BQVMsU0FBTyxPQUFTLE1BQUksTUFBUTtBQUN0QyxnQkFDVjtBQUFDO0FBQ08sZ0NBQWMsaUJBQXRCO0FBQ0ksYUFBUSxPQUF1QjtBQUMzQixjQUFnQixnQkFBSyxLQUFPO0FBQzVCLGNBQUssT0FDYjtBQUFDO0FBQ08sZ0NBQWEsZ0JBQXJCO0FBQ0ksYUFBUSxPQUFPLEtBQWdCLGdCQUFPO0FBQ2xDLGNBQUssT0FBTyxLQUFnQixnQkFBSyxLQUFnQixnQkFBTyxTQUFNO0FBQzlELGNBQUssS0FBUyxTQUFLLEtBQzNCO0FBQUM7QUFDTyxnQ0FBWSxlQUFwQixVQUFpQztBQUN6QixjQUFLLEtBQVMsU0FBSyxLQUMzQjtBQUFDO0FBQ08sZ0NBQWEsZ0JBQXJCLFVBQWlDO0FBQzFCLGFBQUssS0FBSyxLQUFTLFNBQU8sU0FBSyxHQUFFO0FBQzVCLGtCQUFLLEtBQVcsYUFDeEI7QUFBTSxnQkFBRTtBQUNELGlCQUFLLEtBQUssS0FBVyxjQUFRLEtBQUU7QUFDOUIscUJBQVUsU0FBTyxLQUFLLEtBQVk7QUFDbEMscUJBQWUsY0FBTyxLQUFLLEtBQVU7QUFDakMsc0JBQUssS0FBUztBQUNkLHNCQUFLLEtBQVcsYUFBTztBQUMzQixxQkFBVyxVQUF1QjtBQUMzQix5QkFBVyxhQUFVO0FBQ3JCLHlCQUFTLFdBQWU7QUFDM0Isc0JBQUssS0FBUyxTQUFLLEtBQVU7QUFDakMscUJBQVcsVUFBdUI7QUFDOUIsc0JBQUssS0FBUyxTQUFLLEtBQVU7QUFDN0Isc0JBQUssT0FDYjtBQUNKO0FBQ0o7QUFBQztBQUNMLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7OztBQzFOc0M7O0FBQ0o7O0FBQzJCOztBQUNaOztBQUNNOztBQWN4RDs7O0FBQTBDLHFDQUFJO0FBUzFDLG1DQUErQixNQUFzQjtBQUFwQiw0QkFBb0I7QUFBcEIscUJBQW9COztBQUNqRCxxQkFBUTtBQURPLGNBQUksT0FBUTtBQVJ2QixjQUFZLGVBQW1CO0FBR2hDLGNBQVUsYUFBa0I7QUFDNUIsY0FBUSxXQUFrQjtBQUMxQixjQUFRLFdBQWM7QUFDdEIsY0FBUSxXQUFxQjtBQUM1QixjQUFhLGdCQUFXLENBR2hDO0FBQUM7QUFDTSxvQ0FBTyxVQUFkO0FBQXlCLGdCQUF3QjtBQUFDO0FBQ2xELDJCQUFXLGdDQUFLO2NBQWhCO0FBQTJCLG9CQUFLLEtBQVcsYUFBTyxLQUFXLGFBQU8sS0FBTztBQUFDO2NBQzVFLGFBQThCO0FBQVEsa0JBQVcsYUFBVTtBQUFDOzt1QkFEZ0I7O0FBRTVFLDJCQUFXLGdDQUFPO2NBQWxCO0FBQXlDLG9CQUFLLEtBQWU7QUFBQztjQU05RCxhQUF1QztBQUMxQiw2QkFBUSxRQUFLLEtBQWEsY0FDdkM7QUFBQzs7dUJBUjZEOztBQUM5RCwyQkFBVyxnQ0FBUTtjQUFuQjtBQUFzQyxvQkFBSyxLQUFnQjtBQUFDO2NBQzVELGFBQWlDO0FBQzFCLGlCQUFNLFFBQUcsQ0FBRSxLQUFTLFFBQUssR0FBUTtBQUNoQyxrQkFBYyxnQkFDdEI7QUFBQzs7dUJBSjJEOztBQVFoRSxZQUFDO0FBRUQ7O0FBRUksaUNBQStDLFFBQXdDLEtBQTJCO0FBQS9GLGNBQU0sU0FBc0I7QUFBUyxjQUFHLE1BQTRCO0FBQy9FLGNBQWMsZ0JBQU8sS0FBZSxlQUFLLEtBQUksS0FBTSxLQUFTO0FBQzVELGNBQWMsY0FBUSxRQUM5QjtBQUFDO0FBQ0QsMkJBQVcsOEJBQVE7Y0FBbkI7QUFBd0Msb0JBQUssS0FBZ0I7QUFBQzs7dUJBQUE7O0FBQzlELDJCQUFXLDhCQUFLO2NBQWhCO0FBQWdDLG9CQUFLLEtBQVMsU0FBUTtBQUFDO2NBQ3ZELGFBQTJCO0FBQ25CLGtCQUFTLFNBQU0sUUFDdkI7QUFBQzs7dUJBSHNEOztBQUkzRCxZQUFDO0FBRUQ7O0FBUUkseUNBQXFDLE1BQVk7QUFOekMsY0FBUyxZQUFzQjtBQUMvQixjQUFXLGNBQXNCO0FBQ2pDLGNBQWMsaUJBQWtCO0FBRWpDLGNBQUssUUFBaUM7QUFHckMsY0FBSyxPQUFRO0FBQ2IsY0FBTSxRQUFTO0FBQ2YsY0FDUjtBQUFDO0FBQ0QsMkJBQVcsc0NBQU87Y0FBbEI7QUFBNkIsb0JBQU87QUFBQzs7dUJBQUE7O0FBQ3JDLDJCQUFXLHNDQUFLO2NBQWhCO0FBQTJCLG9CQUFLLEtBQVk7QUFBQztjQUM3QyxhQUEyQjtBQUNuQixrQkFBZSxpQkFBUTtBQUN2QixrQkFBVSxZQUFNO0FBQ2pCLGlCQUFNLFNBQVMsTUFBRTtBQUNaLHNCQUFDLElBQU8sT0FBVSxPQUFFO0FBQ2hCLDBCQUFVLFVBQUssT0FBUSxNQUMvQjtBQUNKO0FBQUM7QUFDRyxrQkFBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQU0sTUFBTyxRQUFLLEtBQUc7QUFDckMsc0JBQU0sTUFBRyxHQUFTLFNBQXFCLHFCQUFLLEtBQVMsU0FBSyxLQUFNLE1BQUcsR0FBTyxPQUNsRjtBQUFDO0FBQ0csa0JBQWUsaUJBQ3ZCO0FBQUM7O3VCQWI0Qzs7QUFjdEMsMENBQVEsV0FBZixVQUE0QjtBQUNsQixnQkFBSyxLQUFVLFVBQ3pCO0FBQUM7QUFDTSwwQ0FBUSxXQUFmLFVBQTRCLE1BQWU7QUFDcEMsYUFBSyxLQUFnQixnQkFBUTtBQUM3QixhQUFTLGFBQVEsSUFBUyxXQUFRO0FBQ2xDLGFBQVMsWUFBUyxNQUFFO0FBQ2Ysa0JBQVUsVUFBTSxRQUN4QjtBQUFNLGdCQUFFO0FBQ0osb0JBQVcsS0FBVSxVQUN6QjtBQUFDO0FBQ0csY0FBSyxLQUFhLGFBQUssTUFBTSxLQUNyQztBQUFDO0FBQ00sMENBQVUsYUFBakIsVUFBOEI7QUFDcEIsZ0JBQUssS0FBWSxZQUMzQjtBQUFDO0FBQ00sMENBQVUsYUFBakIsVUFBOEIsTUFBa0I7QUFDeEMsY0FBWSxZQUFNLFFBQzFCO0FBQUM7QUFDRCwyQkFBVyxzQ0FBTztjQUFsQjtBQUNJLGlCQUFPLE1BQU8sS0FBTztBQUNsQixpQkFBQyxDQUFLLEtBQU8sT0FBTTtBQUNsQixrQkFBQyxJQUFPLE9BQVE7QUFBTyx3QkFBTztjQUM1QixPQUNWO0FBQUM7O3VCQUFBOztBQUNPLDBDQUFVLGFBQWxCO0FBQ0ksYUFBVyxVQUFPLEtBQUssS0FBUztBQUM1QixjQUFDLElBQUssSUFBSSxHQUFHLElBQVUsUUFBTyxRQUFLLEtBQUc7QUFDdEMsaUJBQVUsU0FBVSxRQUFJO0FBQ3BCLGtCQUFNLE1BQUssS0FBSyxLQUFXLFdBQ25DO0FBQ0o7QUFBQztBQUNTLDBDQUFVLGFBQXBCLFVBQWlEO0FBQ3ZDLGdCQUFDLElBQXNCLG1CQUFPLFFBQU0sTUFBTSxLQUNwRDtBQUFDO0FBQ0wsWUFBQztBQUVEOztBQUFxRCxnREFBUTtBQWF6RCw4Q0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFadkIsY0FBWSxlQUFtQztBQUMvQyxjQUFZLGVBQW1CO0FBRS9CLGNBQWEsZ0JBQVM7QUFFdEIsY0FBYSxnQkFBc0I7QUFDbkMsY0FBbUIsc0JBQWE7QUFDakMsY0FBYyxpQkFBYztBQUM1QixjQUFnQixtQkFNdkI7QUFBQztBQUNNLCtDQUFPLFVBQWQ7QUFDVSxnQkFDVjtBQUFDO0FBQ0QsMkJBQVcsMkNBQU87Y0FBbEI7QUFBMEQsb0JBQUssS0FBZTtBQUFDO2NBQy9FLGFBQXFEO0FBQzdDLGtCQUFhLGVBQVM7QUFDdEIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFKOEU7O0FBSy9FLDJCQUFXLDJDQUFRO2NBQW5CO0FBQXNDLG9CQUFLLEtBQWdCO0FBQUM7Y0FDNUQsYUFBb0M7QUFDN0IsaUJBQUssS0FBUyxZQUFhLFVBQVE7QUFDbEMsa0JBQWMsZ0JBQVk7QUFDMUIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMMkQ7O0FBTTVELDJCQUFXLDJDQUFjO2NBQXpCO0FBQTRDLG9CQUFLLEtBQXNCO0FBQUM7Y0FDeEUsYUFBdUM7QUFDaEMsaUJBQU0sUUFBSSxLQUFTLFFBQUssR0FBUTtBQUMvQixrQkFBb0Isc0JBQVM7QUFDN0Isa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMdUU7O0FBTWpFLCtDQUFjLGlCQUFyQixVQUFrRDtBQUM5QyxhQUFVLFNBQVMsT0FBTztBQUN2QixhQUFPLE9BQVcsY0FBUSxLQUFRLFFBQUU7QUFDbkMsaUJBQWUsY0FBTyxLQUFPLE9BQWM7QUFDeEMsaUJBQWEsYUFBWSxlQUFRO0FBQzlCLHNCQUFjLGNBQ3hCO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00sK0NBQWMsaUJBQXJCLFVBQWtEO0FBQ3hDLGdCQUFPLE9BQVMsV0FBUyxPQUFTLFdBQU8sS0FDbkQ7QUFBQztBQUNELDJCQUFXLDJDQUFPO2NBQWxCO0FBQXlDLG9CQUFLLEtBQWU7QUFBQztjQUM5RCxhQUF1QztBQUMxQiw2QkFBUSxRQUFLLEtBQWEsY0FDdkM7QUFBQzs7dUJBSDZEOztBQUk5RCwyQkFBVywyQ0FBYztjQUF6QjtBQUFvQyxvQkFBTSxLQUFxQixtQkFBMUIsR0FBaUMsS0FBb0Isc0JBQXFCLGtDQUFVLFVBQW9CO0FBQUM7Y0FDOUksYUFBMEM7QUFBUSxrQkFBb0Isc0JBQWE7QUFBQzs7dUJBRDBEOztBQUV2SSwrQ0FBUyxZQUFoQixVQUE2QixNQUFzQjtBQUFwQiw0QkFBb0I7QUFBcEIscUJBQW9COztBQUMvQyxhQUFVLFNBQUcsSUFBd0IscUJBQUssTUFBUztBQUMvQyxjQUFhLGFBQUssS0FBUztBQUN6QixnQkFDVjtBQUFDO0FBRUQsMkJBQVcsMkNBQVc7Y0FBdEI7QUFDUSxrQkFBcUIsdUJBQU8sS0FBZ0I7QUFDMUMsb0JBQUssS0FDZjtBQUFDOzt1QkFBQTs7QUFDUywrQ0FBWSxlQUF0QjtBQUFvRSxnQkFBTztBQUFDO0FBQ2xFLCtDQUFlLGtCQUF6QixVQUFtQyxNQUFjLE1BQVk7QUFDbkQsZ0JBQ1Y7QUFBQztBQUNTLCtDQUFjLGlCQUF4QixVQUFzQztBQUFlLGdCQUFDLENBQVMsV0FBSyxLQUFhO0FBQUM7QUFDeEUsK0NBQVcsY0FBckIsVUFBcUQsS0FBb0IsZUFBeUI7QUFBdkIsNkJBQXVCO0FBQXZCLHNCQUF1Qjs7QUFDOUYsYUFBVSxTQUFnQixjQUFJLElBQVMsV0FBZ0IsY0FBSSxJQUFTLFdBQVE7QUFDekUsYUFBQyxDQUFPLFVBQVcsUUFBRTtBQUNkLHNCQUFNO0FBQ0MsMkJBQUksSUFBUyxXQUM5QjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNTLCtDQUFjLGlCQUF4QjtBQUNPLGFBQUssS0FBYyxpQkFBSyxDQUFLLEtBQXNCLHdCQUFRLEtBQXFCLHFCQUFPLFVBQU0sR0FBUTtBQUNwRyxjQUFjLGdCQUFRO0FBQzFCLGFBQU8sTUFBTyxLQUFlLGVBQUssS0FBUTtBQUN0QyxjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBcUIscUJBQU8sUUFBSyxLQUFHO0FBQ3hELGlCQUFPLE1BQU8sS0FBcUIscUJBQUk7QUFDbkMsa0JBQXFCLHFCQUFHLEdBQU0sUUFBTyxLQUFZLFlBQUksS0FDN0Q7QUFBQztBQUNHLGNBQWMsZ0JBQ3RCO0FBQUM7QUFDTSwrQ0FBUyxZQUFoQixVQUE2QztBQUE1QixtQ0FBNEI7QUFBNUIsNEJBQTRCOztBQUN6QyxhQUFrQixpQkFBTyxLQUFrQixrQkFBZTtBQUNwRCxnQkFBQyxPQUFLLFVBQVUscUJBQWMsaUJBQ3hDO0FBQUM7QUFDTywrQ0FBaUIsb0JBQXpCLFVBQStDO0FBQ3hDLGFBQUMsQ0FBSyxLQUFzQixzQkFBTyxPQUFPO0FBQzdDLGFBQU8sTUFBUztBQUNaLGNBQUMsSUFBWSxXQUFJLEdBQVUsV0FBTyxLQUFRLFFBQU8sUUFBWSxZQUFHO0FBQzVELGtCQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBcUIscUJBQU8sUUFBSyxLQUFHO0FBQ3hELHFCQUFTLFFBQU8sS0FBcUIscUJBQUcsR0FBTztBQUM1Qyx1QkFBUSxTQUFTLE1BQVUsYUFBUyxNQUFVLFVBQVMsWUFBUyxNQUFVLFVBQVMsU0FBVSxVQUFjLGlCQUNsSDtBQUNKO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsK0NBQXNCLHlCQUFoQztBQUNJLGFBQVksV0FBTyxLQUFxQixxQkFBUTtBQUMxQyxnQkFBUyxXQUFXLFNBQVEsVUFBRyxPQUFLLFVBQXVCLDRCQUNyRTtBQUFDO0FBQ1MsK0NBQTJCLDhCQUFyQztBQUNJLGFBQVksV0FBTyxLQUFxQixxQkFBTztBQUN6QyxnQkFBUyxXQUFXLFNBQVEsVUFBRyxPQUFLLFVBQTRCLGlDQUMxRTtBQUFDO0FBQ1MsK0NBQW9CLHVCQUE5QixVQUErQztBQUN4QyxhQUFDLENBQUssS0FBc0Isc0JBQU8sT0FBTTtBQUN4QyxjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBcUIscUJBQU8sUUFBSyxLQUFHO0FBQ3hELGlCQUFTLFFBQU8sS0FBcUIscUJBQUcsR0FBTztBQUMzQyxrQkFBQyxJQUFZLFdBQUksR0FBVSxXQUFPLEtBQVEsUUFBTyxRQUFZLFlBQUc7QUFDN0QscUJBQUMsQ0FBUyxTQUFPLE9BQU0sTUFBVSxVQUFVO0FBQzNDLHFCQUFNLE1BQVUsVUFBUyxTQUFrQixvQkFBSyxHQUFPLE9BQU0sTUFBVSxVQUM5RTtBQUNKO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ29CO0FBQ2QsK0NBQWMsaUJBQXJCLFVBQXFELEtBQThCO0FBQy9FLGFBQVksV0FBTyxLQUFtQixtQkFBSSxLQUFVO0FBQzVDLGtCQUFLLE9BQVMsT0FBTTtBQUNwQixrQkFBVyxhQUFTLE9BQVk7QUFDaEMsa0JBQVMsV0FBUyxPQUFVO0FBQ2pDLGFBQU8sT0FBVSxVQUFFO0FBQ2YsaUJBQXdDLDZEQUFFO0FBQ1gsMEJBQXFCLHVCQUN2RDtBQUNKO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsK0NBQWtCLHFCQUE1QixVQUE0RCxLQUE4QjtBQUN0RixhQUFZLFdBQVMsT0FBUyxZQUFhLFlBQU8sS0FBUyxXQUFTLE9BQVU7QUFDOUUsYUFBUSxPQUFPLEtBQWdCLGdCQUFJLEtBQVU7QUFDMUMsYUFBUyxZQUFlLFlBQU8sT0FBSyxLQUFlLGVBQUssTUFBVTtBQUNsRSxhQUFTLFlBQWlCLGNBQU8sT0FBSyxLQUFpQixpQkFBSyxNQUFVO0FBQ3RFLGFBQVMsWUFBVyxRQUFPLE9BQUssS0FBVyxXQUFLLE1BQVU7QUFDMUQsYUFBUyxZQUFjLFdBQU8sT0FBSyxLQUFjLGNBQUssTUFBVTtBQUM3RCxnQkFBSyxLQUFlLGVBQUssTUFDbkM7QUFBQztBQUNTLCtDQUFlLGtCQUF6QixVQUF5RCxLQUE4QjtBQUFrQixnQkFBSSxJQUFRLFVBQU0sTUFBUyxPQUFPO0FBQUM7QUFDbEksK0NBQWdCLG1CQUExQixVQUF1RDtBQUM3QyxnQkFBTyxPQUFRLFdBQVUsT0FBUSxRQUFPLFNBQUksSUFBUyxPQUFRLFVBQU8sS0FDOUU7QUFBQztBQUNTLCtDQUF1QiwwQkFBakMsVUFBOEQ7QUFDcEQsZ0JBQU8sT0FBZSxpQkFBUyxPQUFlLGlCQUFPLEtBQy9EO0FBQUM7QUFDUywrQ0FBYyxpQkFBeEIsVUFBcUMsTUFBOEI7QUFDL0QsYUFBSyxJQUE4QixLQUFtQixtQkFBVyxZQUFRO0FBQ3hFLFdBQVEsVUFBTyxLQUFpQixpQkFBUztBQUN6QyxXQUFlLGlCQUFPLEtBQXdCLHdCQUFTO0FBQ2xELGdCQUNWO0FBQUM7QUFDUywrQ0FBYyxpQkFBeEIsVUFBcUMsTUFBOEI7QUFDL0QsYUFBSyxJQUE4QixLQUFtQixtQkFBVyxZQUFRO0FBQ3hFLFdBQVEsVUFBTyxLQUFpQixpQkFBUztBQUN6QyxXQUFTLFdBQVMsT0FBUyxXQUFHLENBQUcsSUFBUyxPQUFTLFdBQU8sS0FBZ0I7QUFDckUsZ0JBQ1Y7QUFBQztBQUNTLCtDQUFnQixtQkFBMUIsVUFBdUMsTUFBOEI7QUFDakUsYUFBSyxJQUFnQyxLQUFtQixtQkFBYSxjQUFRO0FBQzVFLFdBQVEsVUFBTyxLQUFpQixpQkFBUztBQUN6QyxXQUFTLFdBQVMsT0FBUyxXQUFHLENBQUcsSUFBUyxPQUFTLFdBQU8sS0FBZ0I7QUFDckUsZ0JBQ1Y7QUFBQztBQUNTLCtDQUFVLGFBQXBCLFVBQWlDLE1BQThCO0FBQ3JELGdCQUF3QixLQUFtQixtQkFBTyxRQUM1RDtBQUFDO0FBQ1MsK0NBQWEsZ0JBQXZCLFVBQW9DLE1BQThCO0FBQ3hELGdCQUEyQixLQUFtQixtQkFBVSxXQUNsRTtBQUFDO0FBQ1MsK0NBQWtCLHFCQUE1QixVQUFpRCxjQUFjO0FBQ3JELGdCQUEwQixpQ0FBUyxTQUFlLGVBQWEsY0FDekU7QUFBQztBQUNTLCtDQUFjLGlCQUF4QixVQUFzQyxVQUFpQztBQUNuRSxnQkFBZSxTQUFJLElBQVU7QUFDdkIsZ0JBQU8sT0FBSyxLQUFVLFVBQU8sVUFBSyxJQUFPLE9BQ25EO0FBQUM7QUFDRCwrQ0FBWSxlQUFaLFVBQTRDLEtBQWtCO0FBQzFELGFBQVksV0FBTyxLQUFlLGVBQUssS0FBUTtBQUMvQyxhQUFZLFdBQU8sS0FBWSxZQUFJLEtBQVUsVUFBUTtBQUNqRCxjQUFDLElBQU8sT0FBYTtBQUFDLG9CQUFlLFNBQU07VUFDNUMsSUFBYSxhQUFFO0FBQ0gsMkJBQU8sS0FBTSxNQUFLLEtBQVUsVUFBZTtBQUNsRCxrQkFBQyxJQUFPLE9BQWdCO0FBQVMsMEJBQUssT0FBYyxZQUM1RDs7QUFBQztBQUNFLGFBQU8sT0FBSyxLQUFVLFVBQU8sVUFBTSxHQUFFO0FBQzVCLHdCQUFPLEtBQWUsZUFBUyxVQUMzQztBQUFDO0FBQ0csY0FBYyxnQkFBUTtBQUN0QixjQUFZLFlBQVc7QUFDdkIsY0FBYyxnQkFDdEI7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBdUIseUJBQVMsVUFBUSxNQUFTLFNBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBSSxJQUFhO0FBQUcsTUFBN0UsRUFBVCxJQUN2QyxNQUFzQixzQkFBWSxZQUFFLG9CQUFrQjtBQUFVLGdCQUFVLGdCQUFRLFFBQUksSUFBVztBQUFDLE1BQXhHLEVBQW9ILFlBQUUsb0JBQWtCLEtBQVk7QUFBTyxhQUFRLFVBQVU7QUFBRSxVQUMvSixrQkFBRSxFQUFNLE1BQVksWUFBUyxTQUFXLFdBQVMsU0FBRSxDQUFVLFdBQVksWUFBWSxZQUFjLGNBQVEsUUFBYyxjQUN6SSxFQUFNLE1BQVksWUFBUyxTQUFFLENBQUUsR0FBUyxTQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQU0sTUFBc0Isc0JBQW9CLG9CQUFhLGFBQzFIO0FBQW9CLFlBQUMsSUFBd0IscUJBQU07QUFBRztBQUVoRCx3QkFBUyxTQUFTLFNBQXFCLHVCQUFHLEVBQU0sTUFBaUMsaUNBQVcsV0FBMEIsMEJBQzlGLDhCQUNwQixNQUFzQixzQkFBWSxZQUFFLG9CQUFrQjtBQUFVLGdCQUFVLGdCQUFRLFFBQUksSUFBVztBQUFDLE1BQXhHLEVBQW9ILFlBQUUsb0JBQWtCLEtBQVk7QUFBTyxhQUFRLFVBQVU7QUFBRSxRQUZwSSxJQUdyQyxNQUFrQixrQkFBWSxZQUFFLG9CQUFrQjtBQUFVLGdCQUFJLElBQXNCO0FBQUcsTUFBL0YsSUFDQSxFQUFNLE1BQVksWUFBUyxTQUFZLFlBQVMsU0FBRSxDQUFXLFlBQVksWUFBYyxjQUFRLFFBQWMsY0FDN0csRUFBTSxNQUFrQixrQkFBUyxTQUFHLEdBQVMsU0FBRSxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQU0sTUFBbUIsbUJBQ3ZGO0FBQW9CLFlBQUMsSUFBbUMsZ0NBQU07QUFBQyxJQUFjLFk7Ozs7Ozs7Ozs7OztBQzVVMUM7O0FBQ0k7O0FBQ007O0FBQ0M7O0FBQ1A7O0FBQ2tDOztBQUc3RTs7O0FBQThCLHlCQUFZO0FBZ0J0Qyx1QkFBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFmdkIsY0FBVSxhQUFnQjtBQUcxQixjQUFlLGtCQUFrQjtBQUNqQyxjQUFlLGtCQUFrQjtBQUNqQyxjQUFhLGdCQUFrQjtBQUMvQixjQUFnQixtQkFBYztBQUV0QyxjQUFNLFNBQTBCO0FBQ2hDLGNBQVUsYUFBMkIsSUFBNkI7QUE4SjFELGNBQXNCLHlCQUFTO0FBdEp0QztBQUNELDJCQUFXLG9CQUFRO2NBQW5CO0FBQXVDLG9CQUFPO0FBQUM7O3VCQUFBOztBQUMvQywyQkFBVyxvQkFBUTtjQUFuQjtBQUF1QyxvQkFBTztBQUFDOzt1QkFBQTs7QUFDL0MsMkJBQVcsb0JBQU87Y0FBbEI7QUFBcUMsb0JBQUssS0FBRyxLQUFRO0FBQUM7O3VCQUFBOztBQUN0RCwyQkFBVyxvQkFBSztjQUFoQjtBQUFtQyxvQkFBTSxLQUFZLFVBQWpCLEdBQXdCLEtBQVcsYUFBTyxLQUFPO0FBQUM7Y0FDdEYsYUFBaUM7QUFDekIsa0JBQVcsYUFBWTtBQUN2QixrQkFBYSxhQUFLLEtBQzFCO0FBQUM7O3VCQUpxRjs7QUFLdEYsMkJBQVcsb0JBQWM7Y0FBekI7QUFBb0Msb0JBQUssS0FBTyxVQUFRLE9BQU8sS0FBTyxPQUFZLFlBQUssS0FBTyxTQUFPLEtBQVE7QUFBQzs7dUJBQUE7O0FBQzlHLDJCQUFXLG9CQUFTO2NBQXBCO0FBQ08saUJBQUssS0FBTyxVQUFRLEtBQU8sT0FBdUIsdUJBQUU7QUFDaEQscUJBQUMsQ0FBSyxLQUFrQixrQkFBRTtBQUN6Qix5QkFBUSxPQUFRO0FBQ1osMEJBQWlCLG1CQUEwQjtBQUMzQywwQkFBaUIsaUJBQVcsYUFBRyxVQUFzQjtBQUFVLGdDQUFLLEtBQXVCLHVCQUFLLEtBQWlCO0FBQUU7QUFDbkgsMEJBQWlCLGlCQUFVLFlBQUcsVUFBc0I7QUFBVSxnQ0FBSyxLQUFzQixzQkFBUTtBQUN6RztBQUFDO0FBQ0ssd0JBQUssS0FBaUIsaUJBQVEsUUFBSyxLQUFPLE9BQ3BEO0FBQUM7QUFDRCxpQkFBZSxjQUFPLEtBQWM7QUFDakMsaUJBQWEsYUFBWSxlQUFRO0FBQ3BDLGlCQUFNLEtBQU8sS0FBSTtBQUNkLGlCQUFJLElBQUcsTUFBUztBQUNiLG9CQUFHLEtBQWMsY0FBTyxLQUNsQztBQUFDOzt1QkFBQTs7QUFDTSx3QkFBSyxRQUFaLFVBQXFDO0FBQXhCLDhCQUF3QjtBQUF4Qix1QkFBd0I7O0FBQ3BCLDZCQUFtQixtQkFBSyxLQUFLO0FBQzFDLGFBQU0sS0FBRyxDQUFRLFVBQU8sS0FBeUIsMkJBQU8sS0FBK0I7QUFDcEYsYUFBYyxvQkFBYSxhQUFLLEtBQUU7QUFDN0Isa0JBQWEsYUFBSyxLQUMxQjtBQUNKO0FBQUM7QUFDUyx3QkFBc0IseUJBQWhDO0FBQ1UsZ0JBQUssS0FDZjtBQUFDO0FBQ1Msd0JBQTJCLDhCQUFyQztBQUNVLGdCQUFLLEtBQ2Y7QUFBQztBQUNTLHdCQUFzQix5QkFBaEMsVUFBNkM7QUFDbkMsZ0JBQUssUUFBUSxRQUFRLFFBQVcsV0FBUSxRQUNsRDtBQUFDO0FBQ1Msd0JBQXFCLHdCQUEvQixVQUE0QztBQUNyQyxhQUFLLFFBQVMsTUFBTyxPQUFLLEtBQUk7QUFDOUIsYUFBSyxRQUFZLFNBQU8sT0FBSyxLQUFnQjtBQUM3QyxhQUFLLFFBQWMsV0FBTyxPQUFLLEtBQWM7QUFDMUMsZ0JBQ1Y7QUFBQztBQUNNLHdCQUFjLGlCQUFyQjtBQUF5QyxnQkFBUTtBQUFDO0FBQzNDLHdCQUFZLGVBQW5CO0FBQXVDLGdCQUFRO0FBQUM7QUFDaEQsMkJBQVcsb0JBQVU7Y0FBckI7QUFBeUMsb0JBQUssS0FBa0I7QUFBQztjQUNqRSxhQUFrQztBQUMzQixpQkFBSyxLQUFXLGNBQVEsS0FBUTtBQUMvQixrQkFBZ0Isa0JBQU87QUFDdkIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMZ0U7O0FBTWpFLDJCQUFXLG9CQUFVO2NBQXJCO0FBQXlDLG9CQUFLLEtBQWtCO0FBQUM7Y0FDakUsYUFBa0M7QUFDM0IsaUJBQUMsQ0FBSyxLQUFrQixrQkFBUTtBQUMvQixrQkFBZ0Isa0JBQU87QUFDeEIsaUJBQUssS0FBWSxZQUFLLEtBQVMsV0FDdEM7QUFBQzs7dUJBTGdFOztBQU1qRSwyQkFBVyxvQkFBVztjQUF0QjtBQUF5QyxvQkFBSyxLQUFpQixtQkFBTyxLQUFpQixtQkFBcUIsa0NBQVUsVUFBbUI7QUFBQztjQUMxSSxhQUFvQztBQUM1QixrQkFBaUIsbUJBQ3pCO0FBQUM7O3VCQUh5STs7QUFJMUksMkJBQVcsb0JBQVE7Y0FBbkI7QUFBdUMsb0JBQUssS0FBZ0I7QUFBQztjQUM3RCxhQUFnQztBQUN6QixpQkFBQyxDQUFLLEtBQWUsa0JBQVEsS0FBUyxZQUFRLEtBQVE7QUFDckQsa0JBQWMsZ0JBQU87QUFDdEIsaUJBQUssS0FBVSxVQUFLLEtBQVcsYUFBUztBQUN2QyxrQkFDUjtBQUFDOzt1QkFONEQ7O0FBT25ELHdCQUFlLGtCQUF6QixZQUE4QixDQUFDO0FBQy9CLDJCQUFjLG9CQUFFO2NBQWhCO0FBQ08saUJBQUssS0FBYSxlQUFLLEdBQU8sT0FBSTtBQUNyQyxpQkFBYyxhQUFLO0FBQ25CLGlCQUFhLFlBQVE7QUFDckIsaUJBQU8sTUFBTTtBQUNWLGlCQUFLLEtBQU8sVUFBUSxLQUFPLE9BQW9CLG9CQUFFO0FBQzdDLHVCQUFPLEtBQU8sT0FBb0I7QUFDbEMscUJBQVMsU0FBTSxNQUFXLGFBQVcsU0FDcEMsVUFBSSxJQUFJLElBQU8sVUFBTSxHQUFVLFlBQ3ZDO0FBQUM7QUFDRSxpQkFBVyxXQUFPLE9BQUMsQ0FBSyxLQUFhLGVBQWMsWUFBWTtBQUM1RCxvQkFBTyxPQUFhLGFBQUksSUFBVyxXQUFHLEtBQU8sS0FDdkQ7QUFBQzs7dUJBQUE7O0FBQ1Msd0JBQVMsWUFBbkI7QUFDSSxnQkFBSyxVQUFVLGVBQUc7QUFDZCxjQUFxQixxQkFBSyxLQUNsQztBQUFDO0FBQ0QsMkJBQVcsb0JBQUs7Y0FBaEI7QUFDVSxvQkFBSyxLQUFjLGNBQUssS0FDbEM7QUFBQztjQUNELGFBQThCO0FBQ3RCLGtCQUFZLFlBQVc7QUFDdkIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFKQTs7QUFLRCwyQkFBVyxvQkFBTztjQUFsQjtBQUFxQyxvQkFBSyxLQUFlO0FBQUM7Y0FDMUQsYUFBbUM7QUFDNUIsaUJBQUssS0FBUSxXQUFhLFVBQVE7QUFDakMsa0JBQVcsV0FBVztBQUN0QixrQkFBYSxhQUFLLEtBQzFCO0FBQUM7O3VCQUx5RDs7QUFNaEQsd0JBQVUsYUFBcEI7QUFBdUMsZ0JBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxLQUFXLFdBQUssS0FBTSxRQUFPLEtBQWtCO0FBQUM7QUFDM0csd0JBQVUsYUFBcEIsVUFBcUM7QUFDN0IsY0FBYyxjQUN0QjtBQUFDO0FBQ00sd0JBQU8sVUFBZDtBQUFrQyxnQkFBSyxLQUFNLFNBQVU7QUFBQztBQUNqRCx3QkFBUyxZQUFoQixVQUE2QztBQUE1QixtQ0FBNEI7QUFBNUIsNEJBQTRCOztBQUNyQyxjQUFlLGVBQWU7QUFDNUIsZ0JBQUssS0FBTyxPQUFPLFNBQzdCO0FBQUM7QUFDRCwyQkFBVyxvQkFBaUI7Y0FBNUI7QUFBK0Msb0JBQUssS0FBTyxPQUFTO0FBQUM7O3VCQUFBOztBQUNyRSwyQkFBVyxvQkFBWTtjQUF2QjtBQUEwQyxvQkFBSyxLQUFPLFVBQVEsUUFBUSxLQUFXLGFBQU8sS0FBTyxPQUFhLGVBQU87QUFBQzs7dUJBQUE7O0FBQzdHLHdCQUFRLFdBQWYsVUFBa0M7QUFDMUIsY0FBTyxPQUFLLEtBQVE7QUFDcEIsY0FBYSxhQUFLLEtBQzFCO0FBQUM7QUFDTyx3QkFBYyxpQkFBdEIsVUFBNEM7QUFDeEMsYUFBZSxjQUFPLEtBQU8sU0FBTyxLQUFPLE9BQU8sU0FBSztBQUNuRCxjQUFPLFNBQU07QUFDYixjQUFpQixpQkFBSyxLQUFTO0FBQ2hDLGFBQUssS0FBTyxPQUFPLFVBQUssS0FBUSxLQUFPLE9BQUU7QUFDeEMsaUJBQVMsUUFBTyxLQUFpQjtBQUM5QixpQkFBTyxPQUFFO0FBQ0osc0JBQU8sT0FBSyxLQUNwQjtBQUNKO0FBQUM7QUFDRSxhQUFLLEtBQU8sVUFBUSxLQUFPLE9BQU8sVUFBTSxHQUFFO0FBQ3pDLGlCQUFTLFFBQU8sS0FBTyxPQUFpQixpQkFBSyxLQUFPO0FBQ2pELGlCQUFPLE9BQUU7QUFDSixzQkFBTyxPQUFLLEtBQ3BCO0FBQ0o7QUFBQztBQUNFLGFBQWlCLGlCQUFZLGVBQVEsS0FBTyxPQUFPLFVBQWUsY0FBTSxJQUFFO0FBQ3JFLGtCQUFhLGFBQUssS0FDMUI7QUFDSjtBQUFDO0FBQ1Msd0JBQWdCLG1CQUExQixVQUFxRDtBQUM5QyxhQUFLLEtBQW9CLG9CQUFFO0FBQ3RCLGtCQUFPLE9BQUssS0FDcEI7QUFDSjtBQUFDO0FBQ1Msd0JBQWdCLG1CQUExQjtBQUNVLGdCQUFLLEtBQVcsY0FBUSxLQUNsQztBQUFDO0FBQ1Msd0JBQWEsZ0JBQXZCO0FBQ1UsZ0JBQXNCLGlDQUFJLElBQ3BDO0FBQUM7QUFFUyx3QkFBVyxjQUFyQixVQUFtQztBQUMzQixjQUFrQixrQkFBVztBQUM3QixjQUNSO0FBQUM7QUFDUyx3QkFBaUIsb0JBQTNCLFVBQXlDO0FBQ2xDLGFBQUMsQ0FBSyxLQUF3Qix3QkFBRTtBQUN2Qix3QkFBTyxLQUFZLFlBQVc7QUFDbEMsa0JBQWEsYUFDckI7QUFDSjtBQUFDO0FBQ08sd0JBQVksZUFBcEI7QUFDVSxnQkFBSyxLQUFLLFFBQVEsT0FBTyxLQUFLLEtBQVMsU0FBSyxLQUFNLFFBQU8sS0FDbkU7QUFBQztBQUNPLHdCQUFZLGVBQXBCLFVBQWtDO0FBQzNCLGFBQUssS0FBSyxRQUFTLE1BQUU7QUFDaEIsa0JBQUssS0FBUyxTQUFLLEtBQUssTUFDaEM7QUFBTSxnQkFBRTtBQUNBLGtCQUFjLGdCQUN0QjtBQUNKO0FBQUM7QUFDUyx3QkFBYSxnQkFBdkIsVUFBZ0M7QUFBZSxnQkFBTTtBQUFDO0FBQzVDLHdCQUFXLGNBQXJCLFVBQThCO0FBQWUsZ0JBQU07QUFBQztBQUMxQyx3QkFBYyxpQkFBeEIsWUFBNkIsQ0FBQztBQUNwQix3QkFBYSxnQkFBdkIsVUFBd0M7QUFDakMsYUFBSyxLQUFLLFFBQVMsTUFBRTtBQUNoQixrQkFBSyxLQUFXLFdBQUssS0FBSyxNQUNsQztBQUFNLGdCQUFLLEtBQWdCLGtCQUMvQjtBQUFDO0FBQ1U7QUFDWCx3QkFBb0IsdUJBQXBCLFVBQWtDO0FBQzFCLGNBQXVCLHlCQUFRO0FBQy9CLGNBQU0sUUFBTyxLQUFjLGNBQVc7QUFDdEMsY0FBYSxhQUFLLEtBQXlCO0FBQzNDLGNBQXVCLHlCQUMvQjtBQUFDO0FBQ2dCO0FBQ2pCLHdCQUFpQixvQkFBakI7QUFBb0MsZ0JBQU87QUFBQztBQUNoRCxZQUFDO0FBQUE7QUFDUyx3QkFBUyxTQUFTLFNBQVcsZUFBUyxNQUFjLGNBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBSSxJQUFhO0FBQUcsTUFBbEYsRUFBRCxJQUMvQixNQUFlLGVBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBSSxJQUFtQjtBQUFHLE1BQXpGLElBQ29CLHNCQUFFLEVBQU0sTUFBeUIseUJBQWUsZUFBbUIsbUJBQWUsZUFBZSxnQkFBTSxNQUFrQixnQjs7Ozs7Ozs7Ozs7O0FDek54RDs7QUFDbEQ7O0FBR3ZDOzs7QUFBa0MsNkJBQUk7QUF1QmxDLDJCQUErQjtBQUMzQixxQkFBUTtBQURPLGNBQUksT0FBUTtBQWhCdkIsY0FBZSxrQkFBeUI7QUFDekMsY0FBUyxZQUFjO0FBRXRCLGNBQVksZUFBaUI7QUFDOUIsY0FBZ0IsbUJBQWlCO0FBQ2hDLGNBQWlCLG9CQUFXLENBQUc7QUFDaEMsY0FBSyxRQUFjO0FBQ2xCLGNBQWdCLG1CQUFjO0FBQzlCLGNBQWdCLG1CQUFhO0FBQzlCLGNBQU0sU0FBYTtBQVNsQixjQUFRLFVBQWUsYUFBaUI7QUFDeEMsY0FDUjtBQUFDO0FBekJjLGtCQUFhLGdCQUE1QjtBQUNVLGdCQUFNLFFBQWUsYUFDL0I7QUFBQztBQXdCRCwyQkFBVyx3QkFBTztjQUFsQjtBQUFzQyxvQkFBSyxLQUFlO0FBQUM7Y0FDM0QsYUFBK0I7QUFDeEIsaUJBQUksT0FBUSxLQUFTLFNBQVE7QUFDNUIsa0JBQWEsZUFBTztBQUNwQixrQkFBYSxhQUFLLEtBQTRCO0FBQzlDLGtCQUFhLGFBQUssS0FBK0I7QUFDbEQsaUJBQUssS0FBUSxRQUFFO0FBQ1Ysc0JBQU8sT0FBMEIsMEJBQWdCLE1BQU0sS0FDL0Q7QUFDSjtBQUFDOzt1QkFUMEQ7O0FBVTNELDJCQUFXLHdCQUFZO2NBQXZCO0FBQTBDLG9CQUFLLEtBQW9CO0FBQUM7O3VCQUFBOztBQUM3RCw0QkFBUyxZQUFoQixVQUE2QztBQUE1QixtQ0FBNEI7QUFBNUIsNEJBQTRCOztBQUFtQixnQkFBUTtBQUFDO0FBQ3pFLDJCQUFXLHdCQUFpQjtjQUE1QjtBQUErQyxvQkFBSTtBQUFDOzt1QkFBQTs7QUFDcEQsMkJBQVcsd0JBQVE7Y0FBbkI7QUFBdUMsb0JBQVE7QUFBQzs7dUJBQUE7O0FBQ2hELDJCQUFXLHdCQUFRO2NBQW5CO0FBQXVDLG9CQUFRO0FBQUM7O3VCQUFBOztBQUNoRCwyQkFBVyx3QkFBVTtjQUFyQjtBQUF5QyxvQkFBUTtBQUFDOzt1QkFBQTs7QUFDbEQsMkJBQVcsd0JBQUU7Y0FBYjtBQUFnQyxvQkFBSyxLQUFVO0FBQUM7O3VCQUFBOztBQUNoRCwyQkFBVyx3QkFBVztjQUF0QjtBQUF5QyxvQkFBSyxLQUFtQjtBQUFDO2NBQ2xFLGFBQWtDO0FBQzNCLGlCQUFJLE9BQVEsS0FBYSxhQUFRO0FBQ2hDLGtCQUFpQixtQkFBTztBQUN4QixrQkFBYSxhQUFLLEtBQzFCO0FBQUM7O3VCQUxpRTs7QUFNbEUsMkJBQVcsd0JBQVc7Y0FBdEI7QUFBeUMsb0JBQUssS0FBbUI7QUFBQztjQUNsRSxhQUFrQztBQUMzQixpQkFBSSxPQUFRLEtBQWEsYUFBUTtBQUNoQyxrQkFBaUIsbUJBQU87QUFDeEIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMaUU7O0FBTTNELDRCQUFLLFFBQVosVUFBcUM7QUFBeEIsOEJBQXdCO0FBQXhCLHVCQUF3QjtBQUFJO0FBQUM7QUFDMUMsNEJBQU8sVUFBUCxVQUE2QjtBQUNyQixjQUFLLE9BQVk7QUFDakIsY0FBTyxTQUFZLFlBQVksU0FBa0IsZ0JBQXZDLEdBQTJELFdBQVE7QUFDN0UsY0FDUjtBQUFDO0FBQ1MsNEJBQVksZUFBdEIsVUFBMkM7QUFDcEMsYUFBVSxVQUNqQjtBQUFDO0FBQ1MsNEJBQVMsWUFBbkIsWUFBd0IsQ0FBQztBQUNmLDRCQUFVLGFBQXBCLFlBQXlCLENBQUM7QUFDbkIsNEJBQVksZUFBbkIsVUFBMEM7QUFDbkMsYUFBQyxDQUFLLEtBQVcsV0FBUTtBQUN6QixhQUFDLENBQUssS0FBaUIsaUJBQUssS0FBZ0Isa0JBQXNCLGdDQUFLLEtBQVk7QUFDbEYsY0FBZ0IsZ0JBQVcsYUFBTyxLQUFXO0FBQzdDLGNBQVEsVUFBTyxLQUFnQixnQkFBSSxJQUMzQztBQUFDO0FBQ1U7QUFDWCw0QkFBb0IsdUJBQXBCLFVBQWtDLFVBQ2xDLENBQUM7QUFDRCw0QkFBWSxlQUFaLFlBQ0EsQ0FBQztBQUNELDRCQUFlLGtCQUFmLFVBQTZCO0FBQ3RCLGFBQUssS0FBa0IscUJBQVUsT0FBUTtBQUN4QyxjQUFrQixvQkFBUztBQUMzQixjQUFhLGFBQUssS0FDMUI7QUFBQztBQUNELDRCQUEwQiw2QkFBMUI7QUFBcUMsZ0JBQVE7QUFBQztBQW5GL0Isa0JBQWUsa0JBQU87QUFvRnpDLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBZSxnQkFBRSxDQUFRLFNBQUUsRUFBTSxNQUFtQixtQkFBUyxTQUFRLFFBQWtCLGtCQUMvRyxFQUFNLE1BQVcsV0FBRSxFQUFNLE1BQTRCLDRCQUFTLFNBQU8sUUFBRSxFQUFLLE1BQWlCLGlCQUFTLFNBQUcsR0FBUyxTQUFFLENBQUUsR0FBRyxHQUFHLEdBQVEsTzs7Ozs7Ozs7Ozs7QUMzRnhJLHFDQUdBLENBQUM7QUFBRCxZQUFDO0FBRUQ7O0FBR0ksaUNBQWdCLENBQUM7QUFDVixnQ0FBTyxVQUFkLFVBQTJCO0FBQ3BCLGFBQUMsQ0FBTSxNQUFPLE9BQU07QUFDcEIsYUFBQyxDQUFLLEtBQVcsV0FBTyxPQUFNO0FBQ2pDLGFBQVMsUUFBTyxLQUFTLFNBQU87QUFDNUIsY0FBQyxJQUFLLElBQVEsTUFBTyxTQUFJLEdBQUcsS0FBSyxHQUFLLEtBQUc7QUFDekMsaUJBQVEsT0FBUSxNQUFJO0FBQ3BCLGlCQUFRLE9BQU8sS0FBUSxRQUFLLEtBQVUsVUFBSyxLQUFNLFFBQUksR0FBTSxLQUFPO0FBQy9ELGlCQUFDLENBQUssS0FBZSxlQUFPLE9BQVU7QUFDdEMsaUJBQUssS0FBVyxjQUFJLENBQUssS0FBVyxXQUFPLE9BQVU7QUFDeEQsaUJBQVMsUUFBTyxLQUFVLFVBQU87QUFDOUIsaUJBQU0sU0FBUyxNQUFNLFFBQU07QUFDMUIsb0JBQU8sS0FBTyxPQUFFLEdBQU0sS0FBTyxTQUFRLFFBQU8sS0FBTyxPQUFLLEtBQUksTUFDcEU7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTyxnQ0FBUSxXQUFoQixVQUE2QjtBQUN6QixhQUFTLFFBQU07QUFDZixhQUFVLFNBQU8sS0FBUTtBQUN6QixhQUFTLFFBQUcsQ0FBRztBQUNmLGFBQU0sS0FBTTtBQUNSLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBUyxRQUFLLEtBQUc7QUFDNUIsa0JBQU8sS0FBSTtBQUNWLGlCQUFHLE1BQVEsS0FBTSxRQUFLO0FBQ3RCLGlCQUFHLE1BQVEsS0FBRTtBQUNULHFCQUFNLFFBQUcsQ0FBRyxHQUFFO0FBQ2IseUJBQVEsT0FBRyxJQUEyQjtBQUNsQywwQkFBTSxRQUFTO0FBQ2YsMEJBQUksTUFBSztBQUNSLDJCQUFLLEtBQ2Q7QUFBQztBQUNJLHlCQUFHLENBQ1o7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNPLGdDQUFPLFVBQWYsVUFBNEI7QUFDckIsYUFBQyxDQUFNLE1BQVE7QUFDWixnQkFBSyxLQUNmO0FBQUM7QUFDTyxnQ0FBYyxpQkFBdEIsVUFBbUM7QUFDNUIsYUFBQyxDQUFNLE1BQU8sT0FBTztBQUNwQixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBTyxRQUFLLEtBQUc7QUFDbkMsaUJBQU0sS0FBTyxLQUFJO0FBQ1g7QUFDSCxpQkFBRyxNQUFPLE9BQU0sTUFBTyxPQUFNLE1BQVEsS0FBTyxPQUNuRDtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNMLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7OztBQ3pEc0M7O0FBQ0o7O0FBQ1U7O0FBQ0s7O0FBQ2Y7O0FBR25DOzs7QUFBd0MsbUNBQVE7QUFhNUMsaUNBQXdCO0FBQ3BCLDJCQUFZO0FBYlIsY0FBbUIsc0JBQTBCO0FBR3JELGNBQVMsWUFBMkIsb0JBQVEsU0FBb0Isa0NBQVUsVUFBbUI7QUFDckYsY0FBYyxpQkFBMEI7QUFDeEMsY0FBMkIsOEJBQWE7QUFDeEMsY0FBYSxnQkFBcUIsSUFBdUI7QUFFMUQsY0FBYyxpQkFBZ0I7QUFDOUIsY0FBb0IsdUJBQWlCO0FBQzVDLGNBQWlCLG9CQUFrQjtBQW1CM0IsY0FBZ0IsbUJBQWtCO0FBZmxDLGNBQWEsZUFBTyxLQUFrQjtBQUMxQyxhQUFRLE9BQVE7QUFDWixjQUFhLGFBQWtCLG9CQUFHLFVBQWlDO0FBQVEsa0JBQXFCLHFCQUFRO0FBQ2hIO0FBQUM7QUFDRCwyQkFBVyw4QkFBZTtjQUExQjtBQUNVLG9CQUFLLEtBQTBCLDRCQUFPLEtBQVksWUFBSyxLQUFPLFNBQU8sS0FBWSxZQUFLLEtBQ2hHO0FBQUM7O3VCQUFBOztBQUNTLGtDQUFXLGNBQXJCLFVBQThCO0FBQ3BCLGdCQUFJLE9BQVEsS0FBVSxVQUNoQztBQUFDO0FBQ1Msa0NBQWMsaUJBQXhCO0FBQW9ELGdCQUF3QjtBQUFDO0FBQ25FLGtDQUFVLGFBQXBCO0FBQ08sYUFBSyxLQUEyQiwyQkFBTyxPQUFDLE9BQUssVUFBVyxnQkFBRztBQUN4RCxnQkFBSyxLQUNmO0FBQUM7QUFFUyxrQ0FBVSxhQUFwQixVQUFxQztBQUM5QixhQUFLLEtBQTJCLDJCQUMvQixPQUFLLFVBQVcsc0JBQ2hCLGVBQUU7QUFDQyxpQkFBQyxDQUFLLEtBQWlCLG9CQUFZLFlBQVEsS0FBYyxjQUFFO0FBQ3RELHNCQUFpQixtQkFBUTtBQUN6QixzQkFBYSxlQUFZO0FBQzFCLHFCQUFLLEtBQWlCLGlCQUFFO0FBQ25CLDBCQUFrQixrQkFBSyxLQUMvQjtBQUFDO0FBQ0csc0JBQWlCLG1CQUN6QjtBQUNKO0FBQ0o7QUFBQztBQUNTLGtDQUFXLGNBQXJCLFVBQW1DO0FBQzVCLGFBQVUsVUFBSyxLQUE0Qiw4QkFBWTtBQUMxRCxnQkFBSyxVQUFZLHVCQUNyQjtBQUFDO0FBQ1Msa0NBQWEsZ0JBQXZCLFVBQWdDO0FBQ3pCLGFBQUssS0FBMkIsMkJBQU8sT0FBQyxPQUFLLFVBQWMseUJBQU07QUFDaEUsY0FBWSxjQUFPLEtBQWtCLGtCQUFNO0FBQ3pDLGdCQUFLLEtBQ2Y7QUFBQztBQUNTLGtDQUFXLGNBQXJCLFVBQThCO0FBQ3ZCLGFBQUssS0FBMkIsMkJBQU8sT0FBQyxPQUFLLFVBQVksdUJBQU07QUFDOUQsY0FBWSxjQUFPO0FBQ2pCLGdCQUFLLEtBQWdCLGdCQUMvQjtBQUFDO0FBQ1Msa0NBQWlCLG9CQUEzQixVQUFvQztBQUM3QixhQUFDLENBQUssS0FBZ0IsZ0JBQU0sTUFBTyxPQUFLO0FBQ3hDLGFBQUksT0FBUSxLQUFVLFVBQU8sT0FBTyxPQUFLO0FBQ3hDLGNBQVEsVUFBTztBQUNiLGdCQUFLLEtBQVUsVUFDekI7QUFBQztBQUNTLGtDQUFlLGtCQUF6QixVQUFrQztBQUMzQixhQUFJLE9BQVEsS0FBVSxVQUFNLFNBQVEsS0FBYyxjQUFFO0FBQ2hELG1CQUFPLEtBQ2Q7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDUyxrQ0FBZSxrQkFBekIsVUFBa0M7QUFDM0IsYUFBQyxDQUFLLEtBQU8sT0FBTztBQUN2QixhQUFTLFFBQU8sS0FBZTtBQUMzQixjQUFDLElBQUssSUFBSSxHQUFHLElBQVEsTUFBTyxRQUFLLEtBQUc7QUFDakMsaUJBQU0sTUFBRyxHQUFNLFNBQVEsS0FBTyxPQUNyQztBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNELDJCQUFJLDhCQUFPO2NBQVg7QUFBa0Msb0JBQUssS0FBZ0I7QUFBQztjQUN4RCxhQUFnQztBQUNuQiw2QkFBUSxRQUFLLEtBQWMsZUFBWTtBQUM1QyxrQkFDUjtBQUFDOzt1QkFKdUQ7O0FBSzlDLGtDQUFlLGtCQUF6QjtBQUNRLGNBQ1I7QUFBQztBQUNELDJCQUFJLDhCQUFZO2NBQWhCO0FBQW1DLG9CQUFLLEtBQW9CO0FBQUM7Y0FDN0QsYUFBaUM7QUFDMUIsaUJBQVMsWUFBUSxLQUFtQixtQkFBUTtBQUMzQyxrQkFBa0Isb0JBQVk7QUFDOUIsa0JBQ1I7QUFBQzs7dUJBTDREOztBQU03RCwyQkFBSSw4QkFBUztjQUFiO0FBQWdDLG9CQUFLLEtBQVUsVUFBTztBQUFDO2NBQ3ZELGFBQTJCO0FBQVEsa0JBQVUsVUFBSyxPQUFVO0FBQUM7O3VCQUROOztBQUV2RCwyQkFBSSw4QkFBYztjQUFsQjtBQUNPLGlCQUFDLENBQUssS0FBUyxZQUFRLEtBQWEsZ0JBQVcsUUFBTyxPQUFLLEtBQWU7QUFDM0UsaUJBQUMsQ0FBSyxLQUFxQixxQkFBRTtBQUN2QixzQkFBb0Isc0JBQU8sS0FBbUIsbUJBQUssS0FBYyxjQUFVO0FBQzVFLHFCQUFLLEtBQVUsVUFBRTtBQUNaLDBCQUFvQixvQkFBSyxLQUFLLEtBQ3RDO0FBQ0o7QUFBQztBQUNLLG9CQUFLLEtBQ2Y7QUFBQzs7dUJBQUE7O0FBQ0QsMkJBQVksOEJBQWE7Y0FBekI7QUFBc0Qsb0JBQUssS0FBZSxpQkFBTyxLQUFlLGlCQUFPLEtBQVU7QUFBQzs7dUJBQUE7O0FBQzNHLGtDQUFjLGlCQUFyQjtBQUF5QyxnQkFBTztBQUFDO0FBQzFDLGtDQUFZLGVBQW5CO0FBQXVDLGdCQUFPO0FBQUM7QUFDckMsa0NBQWdCLG1CQUExQixVQUFxRDtBQUNqRCxnQkFBSyxVQUFpQiw0QkFBUztBQUM1QixhQUFDLENBQUssS0FBZ0IsbUJBQVEsS0FBUyxTQUFRO0FBQ2xELGFBQVEsT0FBTyxLQUFnQjtBQUM1QixhQUFDLENBQU0sTUFBRTtBQUNKLG9CQUFxQixrQ0FBVSxVQUN2QztBQUFDO0FBQ0ssZ0JBQUssS0FBZ0IsdUJBQy9CO0FBQUM7QUFDUyxrQ0FBdUIsMEJBQWpDO0FBQTRDLGdCQUFLLEtBQXlCLHlCQUFLLEtBQU8sVUFBUSxPQUFPLEtBQU8sT0FBcUIsdUJBQVU7QUFBQztBQUM1SSxrQ0FBWSxlQUFaO0FBQ08sYUFBSyxLQUFjLGNBQUssS0FBYSxhQUM1QztBQUFDO0FBQ08sa0NBQW9CLHVCQUE1QixVQUFvRDtBQUNoRCxhQUFjLGFBQU8sS0FBTyxPQUFRO0FBQ2hDLGNBQU8sU0FBTTtBQUNkLGFBQUssS0FBYSxnQkFBUSxLQUFhLGFBQU8sT0FBRTtBQUMzQyxrQkFBTyxPQUFLLEtBQUssS0FBYSxhQUN0QztBQUFDO0FBQ0UsYUFBVyxhQUFJLEtBQVEsS0FBTyxPQUFPLFNBQUssR0FBRTtBQUN2QyxrQkFBYSxhQUFLLEtBQzFCO0FBQUM7QUFDRCxhQUFjLGFBQVE7QUFDbkIsYUFBTSxTQUFTLE1BQU8sU0FBSyxHQUFFO0FBQ2xCLDBCQUFHLElBQXVCO0FBQzNCLDZCQUFRLFFBQVcsWUFDaEM7QUFBQztBQUNHLGNBQWUsaUJBQWM7QUFDN0IsY0FBMkI7QUFDNUIsYUFBSyxLQUE2Qiw2QkFBRTtBQUMvQixrQkFBTSxRQUFPLEtBQ3JCO0FBQ0o7QUFBQztBQUNPLGtDQUF1QiwwQkFBL0I7QUFDUSxjQUFvQixzQkFBUTtBQUM1QixjQUFhLGFBQUssS0FDMUI7QUFBQztBQUNPLGtDQUFrQixxQkFBMUIsVUFBa0Q7QUFDOUMsYUFBUyxRQUFPLEtBQWEsYUFBZTtBQUN6QyxhQUFNLFNBQVUsT0FBTyxPQUFLLEtBQVUsVUFBTSxPQUFLO0FBQ2pELGFBQU0sU0FBVyxRQUFPLE9BQUssS0FBVSxVQUFNLE9BQUUsQ0FBSTtBQUNuRCxhQUFNLFNBQWEsVUFBTyxPQUFLLEtBQWUsZUFBUTtBQUNuRCxnQkFDVjtBQUFDO0FBQ08sa0NBQVMsWUFBakIsVUFBeUMsT0FBYztBQUM3QyxzQkFBVyxLQUFDLFVBQVcsR0FBRztBQUN6QixpQkFBRSxFQUFLLE9BQUksRUFBTSxNQUFPLE9BQUMsQ0FBRSxJQUFRO0FBQ25DLGlCQUFFLEVBQUssT0FBSSxFQUFNLE1BQU8sT0FBRSxJQUFRO0FBQy9CLG9CQUNWO0FBQ0osVUFMZ0I7QUFLZjtBQUNPLGtDQUFjLGlCQUF0QixVQUE4QztBQUN0QyxjQUFDLElBQUssSUFBUSxNQUFPLFNBQUksR0FBRyxJQUFJLEdBQUssS0FBRztBQUN4QyxpQkFBSyxJQUFPLEtBQU0sTUFBSyxLQUFZLFlBQUUsSUFBTztBQUM1QyxpQkFBUSxPQUFRLE1BQUk7QUFDZixtQkFBRyxLQUFRLE1BQUk7QUFDZixtQkFBRyxLQUNaO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ0wsWUFBQztBQUVEOztBQUEwQyxxQ0FBa0I7QUFHeEQsbUNBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRnZCLGNBQWEsZ0JBSXJCO0FBQUM7QUFDRCwyQkFBVyxnQ0FBUTtjQUFuQjtBQUFzQyxvQkFBSyxLQUFnQjtBQUFDO2NBQzVELGFBQWlDO0FBQzFCLGlCQUFNLFFBQUksS0FBUyxRQUFLLEdBQVE7QUFDL0Isa0JBQWMsZ0JBQVM7QUFDdkIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMMkQ7O0FBTWhFLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBYSxlQUF1QixzQkFBb0Isc0JBQzFFLE1BQXNCLHNCQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQVUsZ0JBQVEsUUFBSSxJQUFXO0FBQUMsTUFBeEcsRUFBb0gsWUFBRSxvQkFBa0IsS0FBWTtBQUFPLGFBQVEsVUFBVTtBQUFFLFFBRHhJLEVBRXZDLEVBQU0sTUFBZ0IsZ0JBQVMsU0FBUSxRQUFTLFNBQUUsQ0FBTyxRQUFPLE9BQVEsUUFBYSxlQUMvRSxNQUF5Qix5QkFBVyxXQUFtQixtQkFBWSxZQUFFLG9CQUFrQjtBQUFVLGdCQUFJLElBQWEsYUFBUSxVQUFPLE9BQU0sSUFBZTtBQUFDLE1BQTdKLEVBQXlLLFlBQUUsb0JBQWtCLEtBQVk7QUFBTyxhQUFhLGFBQVEsUUFBUztBQUFHLFVBQ2pQLEVBQU0sTUFBYSxhQUFTLFNBQW9CLGtDQUFVLFVBQW1CLG9CQUFrQixrQkFDL0YsRUFBTSxNQUFnQyxnQ0FBUyxTQUFRLFNBQU0sTUFBYztBQUVyRSx3QkFBUyxTQUFTLFNBQWUsZ0JBQUUsQ0FBQyxFQUFNLE1BQW1CLG1CQUFTLFNBQUcsR0FBUyxTQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBTyxPQUFNLE1BQWdCLGM7Ozs7Ozs7Ozs7O0FDbE10STtBQUdZLGNBQVcsY0FpQnZCO0FBQUM7QUFmVSwrQkFBZ0IsbUJBQXZCLFVBQTRDLGNBQWlEO0FBQ3JGLGNBQVksWUFBYyxnQkFDbEM7QUFBQztBQUNNLCtCQUFXLGNBQWxCO0FBQ0ksYUFBVSxTQUFHLElBQW9CO0FBQzlCLGNBQUMsSUFBTyxPQUFRLEtBQWEsYUFBRTtBQUN4QixvQkFBSyxLQUNmO0FBQUM7QUFDSyxnQkFBTyxPQUNqQjtBQUFDO0FBQ00sK0JBQWMsaUJBQXJCLFVBQTBDLGNBQWM7QUFDcEQsYUFBVyxVQUFPLEtBQVksWUFBZTtBQUMxQyxhQUFRLFdBQVMsTUFBTyxPQUFNO0FBQzNCLGdCQUFRLFFBQ2xCO0FBQUM7QUFsQmEscUJBQVEsV0FBb0IsSUFBc0I7QUFDbEQscUJBQWMsaUJBQUcsQ0FBTSxPQUFvQixvQkFBdUI7QUFrQnBGLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7OztBQ3BCcUM7O0FBQ0M7O0FBQ1A7O0FBR2hDOzs7QUFBNEMsdUNBQTBCO0FBQ2xFLHFDQUE0QixNQUFxQixNQUEyQixNQUFZO0FBQ3BGLDJCQUFVLE1BQVM7QUFESixjQUFJLE9BQUs7QUFBUyxjQUFJLE9BRXpDO0FBQUM7QUFDRCwyQkFBVyxrQ0FBTztjQUFsQjtBQUE2QixvQkFBSyxLQUFPO0FBQUM7O3VCQUFBOztBQUM5QyxZQUFDO0FBQ0Q7O0FBQWlELDRDQUErQjtBQUc1RSwwQ0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFGdkIsY0FBUyxZQUlqQjtBQUFDO0FBQ00sMkNBQU8sVUFBZDtBQUNVLGdCQUNWO0FBQUM7QUFDRCwyQkFBVyx1Q0FBSTtjQUFmO0FBQXNDLG9CQUFLLEtBQVk7QUFBQztjQUN4RCxhQUFvQztBQUN2Qiw2QkFBUSxRQUFLLEtBQVUsV0FDcEM7QUFBQzs7dUJBSHVEOztBQUk5QywyQ0FBWSxlQUF0QjtBQUNJLGFBQVUsU0FBRyxJQUFvQztBQUM5QyxhQUFDLENBQUssS0FBSyxRQUFRLEtBQUssS0FBTyxXQUFPLEdBQU8sT0FBUTtBQUN4RCxhQUFPLE1BQU8sS0FBTztBQUNsQixhQUFDLENBQUssS0FBSSxNQUFNO0FBQ2YsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQUssS0FBTyxRQUFLLEtBQUc7QUFDckMsaUJBQUMsQ0FBSyxLQUFLLEtBQUcsR0FBTyxPQUFVO0FBQzVCLG9CQUFLLEtBQUssS0FBZ0IsZ0JBQUssS0FBSyxLQUFHLEdBQU0sT0FBTSxLQUFLLEtBQUcsR0FBSyxNQUFLLElBQUssS0FBSyxLQUFHLEdBQzVGO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsMkNBQWUsa0JBQXpCLFVBQW1DLE1BQWMsTUFBWTtBQUNuRCxnQkFBQyxJQUEwQix1QkFBSyxNQUFNLE1BQU0sTUFDdEQ7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBaUIscUJBQVMsTUFBbUIsbUJBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBVSxnQkFBUSxRQUFJLElBQVE7QUFBQyxNQUFsRyxFQUE4RyxZQUFFLG9CQUFrQixLQUFZO0FBQU8sYUFBSyxPQUFVO0FBQUcsUUFBeEssR0FDM0M7QUFBb0IsWUFBQyxJQUErQiw0QkFBTTtBQUFDLElBQXdCO0FBRXhFLGtDQUFTLFNBQWlCLGlCQUFpQixrQkFBRSxVQUFLO0FBQU8sU0FBSyxJQUFHLElBQStCLDRCQUFPLE1BQUUsRUFBUSxVQUFHLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBSyxHQUFFLEVBQUssT0FBRyxDQUFRLFNBQVcsU0FBRSxFQUFVLFVBQWEsWUFBRSxFQUFVLFVBQWEsWUFBRSxFQUFVLFVBQWEsWUFBTyxPQUFJO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDNUNuTzs7QUFDQzs7QUFDVTs7QUFDQzs7QUFJbEQ7OztBQUEyQyxzQ0FBMEI7QUFDakUsb0NBQWdDLE9BQTJCLE1BQVk7QUFDbkUsMkJBQVUsTUFBUztBQURKLGNBQUssUUFFeEI7QUFBQztBQUNELDJCQUFXLGlDQUFPO2NBQWxCO0FBQTZCLG9CQUFNLFFBQU8sS0FBUTtBQUFDOzt1QkFBQTs7QUFDdkQsWUFBQztBQUVEOztBQUFnRCwyQ0FBK0I7QUFRM0UseUNBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBTnZCLGNBQVUsYUFBSztBQUNmLGNBQWEsZ0JBQWE7QUFDMUIsY0FBZSxrQkFBZ0I7QUFDL0IsY0FBa0IscUJBQWdCO0FBQ25DLGNBQVcsY0FJbEI7QUFBQztBQUNNLDBDQUFPLFVBQWQ7QUFDVSxnQkFDVjtBQUFDO0FBQ0QsMkJBQVcsc0NBQVE7Y0FBbkI7QUFBOEIsb0JBQUssS0FBZ0I7QUFBQztjQUNwRCxhQUErQjtBQUN4QixpQkFBSSxNQUFJLEtBQU8sTUFBNkIsMkJBQWEsYUFBUTtBQUNoRSxrQkFBYyxnQkFBTztBQUN0QixpQkFBSyxLQUFNLFNBQVEsS0FBTSxNQUFPLFNBQU8sS0FBRTtBQUN4QyxxQkFBUSxPQUFPLEtBQU87QUFDbEIsc0JBQU8sT0FBTTtBQUNiLHNCQUFNLFFBQ2Q7QUFBQztBQUNHLGtCQUFhLGFBQUssS0FDMUI7QUFBQzs7dUJBVm1EOztBQVc3QywwQ0FBTSxTQUFiO0FBQ08sYUFBSyxLQUFzQixzQkFBRTtBQUN4QixrQkFBcUIscUJBQUssS0FBSyxLQUFnQixnQkFDdkQ7QUFBQztBQUNHLGNBQ1I7QUFBQztBQUNNLDBDQUFTLFlBQWhCLFVBQThCO0FBQ3ZCLGFBQU0sUUFBSSxLQUFTLFNBQVEsS0FBVSxVQUFRO0FBQzdDLGFBQUssS0FBcUIsd0JBQVMsUUFBTyxLQUFxQixxQkFBUSxRQUFFO0FBQ3BFLGtCQUFxQixxQkFBTyxPQUFNLE9BQzFDO0FBQUM7QUFDRSxhQUFLLEtBQU8sT0FBRTtBQUNiLGlCQUFPLE1BQU8sS0FBZSxlQUFLLEtBQVE7QUFDdkMsaUJBQU8sT0FBTSxPQUFLO0FBQ2xCLG1CQUFPLEtBQWUsZUFBSSxLQUFRO0FBQ2pDLGtCQUFNLFFBQ2Q7QUFBQztBQUNHLGNBQ1I7QUFBQztBQUNELDJCQUFXLHNDQUFVO2NBQXJCO0FBQWdDLG9CQUFLLEtBQWdCLGtCQUFPLEtBQWdCLGtCQUFxQixrQ0FBVSxVQUFZO0FBQUM7Y0FDeEgsYUFBbUM7QUFDM0Isa0JBQWdCLGtCQUN4QjtBQUFDOzt1QkFIdUg7O0FBSXhILDJCQUFXLHNDQUFhO2NBQXhCO0FBQW1DLG9CQUFLLEtBQW1CLHFCQUFPLEtBQW1CLHFCQUFxQixrQ0FBVSxVQUFlO0FBQUM7Y0FDcEksYUFBc0M7QUFDOUIsa0JBQW1CLHFCQUMzQjtBQUFDOzt1QkFIbUk7O0FBSXBJLDJCQUFXLHNDQUFpQjtjQUE1QjtBQUNPLGlCQUFLLEtBQXFCLHdCQUFRLEtBQXFCLHFCQUFPLFVBQVEsS0FBVSxVQUFPLE9BQUssS0FBc0I7QUFDL0csb0JBQUssS0FDZjtBQUFDOzt1QkFBQTs7QUFDUywwQ0FBZ0IsbUJBQTFCLFVBQXFEO0FBQ2pELGdCQUFLLFVBQWlCLDRCQUFTO0FBQzVCLGFBQUssS0FBa0Isa0JBQUU7QUFDbEIsb0JBQUssS0FBZ0IsdUJBQW1CLGtDQUFVLFVBQW9CLG9CQUFVLFVBQUssS0FDL0Y7QUFDSjtBQUFDO0FBQ08sMENBQWMsaUJBQXRCO0FBQ08sYUFBSyxLQUFZLGVBQUssS0FBSSxDQUFLLEtBQXNCLHNCQUFPLE9BQU87QUFDdEUsYUFBTyxNQUFTO0FBQ2hCLGFBQWUsY0FBSztBQUNoQixjQUFDLElBQVksV0FBSSxHQUFVLFdBQU8sS0FBcUIscUJBQU8sUUFBWSxZQUFHO0FBQzdFLGlCQUFPLE1BQU8sS0FBcUIscUJBQVc7QUFDM0MsaUJBQUMsQ0FBSSxJQUFTLFNBQ3JCO0FBQUM7QUFDSyxnQkFBWSxjQUFPLEtBQzdCO0FBQUM7QUFDUywwQ0FBWSxlQUF0QjtBQUNJLGFBQVUsU0FBRyxJQUFtQztBQUM3QyxhQUFLLEtBQVMsYUFBTyxHQUFPLE9BQVE7QUFDdkMsYUFBTyxNQUFPLEtBQWUsZUFBSyxLQUFRO0FBQ3RDLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFTLFVBQUssS0FBRztBQUMvQixvQkFBSyxLQUFLLEtBQWdCLGdCQUFLLEtBQW1CLG1CQUFJLEtBQ2hFO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsMENBQWUsa0JBQXpCLFVBQW9DO0FBQzFCLGdCQUFDLElBQXlCLHNCQUFLLEtBQWMsY0FBTSxNQUM3RDtBQUFDO0FBQ1MsMENBQWMsaUJBQXhCLFVBQXNDO0FBQ2xDLGFBQVUsU0FBWTtBQUNuQixhQUFDLENBQVEsUUFBTyxTQUFNO0FBQ3pCLGFBQUssSUFBTTtBQUNSLGFBQU8sT0FBTyxTQUFPLEtBQVUsVUFBTyxPQUFPLE9BQUssS0FBUyxXQUFNO0FBQ2hFLGNBQUMsSUFBSyxJQUFTLE9BQU8sUUFBRyxJQUFPLEtBQVMsVUFBSyxLQUFHO0FBQzNDLG9CQUFLLEtBQ2Y7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDUywwQ0FBYyxpQkFBeEIsVUFBc0MsVUFBaUM7QUFDbkUsYUFBVyxVQUFRO0FBQ2YsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFXLFNBQU8sUUFBSyxLQUFHO0FBQ3BDLGlCQUFPLE9BQUssS0FBUyxTQUFJLElBQU8sU0FBSyxHQUFFO0FBQy9CLDJCQUFTO0FBRXBCO0FBQ0o7QUFBQztBQUNLLGdCQUFRLFVBQU8sT0FDekI7QUFBQztBQUVPLDBDQUFrQixxQkFBMUIsVUFBNkMsZUFBZTtBQUNsRCxnQkFBTSxTQUFLLEtBQVMsUUFBZ0IsY0FBTyxTQUFnQixjQUFPLFNBQzVFO0FBQUM7QUFDUywwQ0FBVyxjQUFyQixVQUFxRCxLQUFvQixlQUF5QjtBQUF2Qiw2QkFBdUI7QUFBdkIsc0JBQXVCOztBQUN4RixnQkFBSyxLQUFtQixtQkFBYyxlQUFNLEtBQXFCLHFCQUFRLFFBQ25GO0FBQUM7QUE3R00sZ0NBQVcsY0FBTztBQThHN0IsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBUyxTQUFnQixrQkFBRyxFQUFNLE1BQW1CLG1CQUFTLFNBQUssS0FBRSxFQUFNLE1BQXNCLHNCQUFTLFNBQUssT0FDcEgsTUFBYyxjQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQUksSUFBa0I7QUFBRyxNQUF2RixFQURzQyxJQUVoQyxNQUFpQixpQkFBWSxZQUFFLG9CQUFrQjtBQUFVLGdCQUFJLElBQXFCO0FBQUksTUFBOUYsS0FDSjtBQUFvQixZQUFDLElBQThCLDJCQUFNO0FBQUMsSUFBd0I7QUFFdkUsa0NBQVMsU0FBaUIsaUJBQWdCLGlCQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBOEIsMkJBQU8sTUFBRSxFQUFRLFVBQUcsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFLLEdBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQU8sT0FBSTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ3RJcE07O0FBQ0g7O0FBQ0k7O0FBRVc7O0FBQ2Y7O0FBTW5DOzs7QUFBb0MsK0JBQUk7QUFJcEMsNkJBQTRCLE1BQXFCLE1BQXlCLFVBQW1CLE1BQVk7QUFDckcscUJBQVE7QUFETyxjQUFJLE9BQUs7QUFBUyxjQUFJLE9BQVE7QUFBUyxjQUFRLFdBQVE7QUFFbEUsY0FBSyxPQUFRO0FBQ2IsY0FBUyxXQUNqQjtBQUFDO0FBQ0QsMkJBQVcsMEJBQUs7Y0FBaEI7QUFBMkIsb0JBQUssS0FBVztBQUFDO2NBQzVDLGFBQThCO0FBQ3RCLGtCQUFTLFdBQVk7QUFDdEIsaUJBQUssS0FBTSxNQUFLLEtBQUssS0FBbUIsbUJBQU87QUFDOUMsa0JBQ1I7QUFBQzs7dUJBTDJDOztBQU1sQyw4QkFBYyxpQkFBeEIsWUFDQSxDQUFDO0FBQ0wsWUFBQztBQUNEOztBQUF5QyxvQ0FBUTtBQU03QyxrQ0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFMdkIsY0FBWSxlQUFtQjtBQUMvQixjQUFTLFlBQW1CO0FBQzVCLGNBQWEsZ0JBQVM7QUFFdkIsY0FBZ0IsbUJBR3ZCO0FBQUM7QUFDTSxtQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUNELDJCQUFXLCtCQUFPO2NBQWxCO0FBQ1Usb0JBQUssS0FBVSxVQUFPLFNBQ2hDO0FBQUM7O3VCQUFBOztBQUNELDJCQUFJLCtCQUFPO2NBQVg7QUFBa0Msb0JBQUssS0FBZTtBQUFDO2NBQ3ZELGFBQWdDO0FBQ25CLDZCQUFRLFFBQUssS0FBYSxjQUN2QztBQUFDOzt1QkFIc0Q7O0FBSXZELDJCQUFJLCtCQUFJO2NBQVI7QUFBK0Isb0JBQUssS0FBWTtBQUFDO2NBQ2pELGFBQTZCO0FBQ2hCLDZCQUFRLFFBQUssS0FBVSxXQUNwQztBQUFDOzt1QkFIZ0Q7O0FBSWpELDJCQUFXLCtCQUFXO2NBQXRCO0FBQ0ksaUJBQVUsU0FBRyxJQUE0QjtBQUN6QyxpQkFBTyxNQUFPLEtBQU87QUFDbEIsaUJBQUMsQ0FBSyxLQUFJLE1BQU07QUFDZixrQkFBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQUssS0FBTyxRQUFLLEtBQUc7QUFDckMscUJBQUMsQ0FBSyxLQUFLLEtBQUcsR0FBTyxPQUFVO0FBQzVCLHdCQUFLLEtBQUssS0FBZ0IsZ0JBQUssS0FBSyxLQUFHLEdBQU0sT0FBTSxLQUFLLEtBQUcsR0FBSyxNQUFNLEtBQUssT0FBTSxNQUFPLEtBQUssS0FBRyxHQUFNLE1BQVcsWUFBSyxJQUFLLEtBQUssS0FBRyxHQUM3STtBQUFDO0FBQ0UsaUJBQU8sT0FBTyxVQUFNLEdBQUU7QUFDZix3QkFBSyxLQUFLLEtBQWdCLGdCQUFLLE1BQUksSUFBTSxLQUFLLE1BQ3hEO0FBQUM7QUFDRyxrQkFBcUIsdUJBQVU7QUFDN0Isb0JBQ1Y7QUFBQzs7dUJBQUE7O0FBQ1MsbUNBQWdCLG1CQUExQixVQUFxRDtBQUNqRCxnQkFBSyxVQUFpQiw0QkFBUztBQUM1QixhQUFLLEtBQWtCLGtCQUFFO0FBQ3BCLGtCQUFPLE9BQUssS0FBZ0IsdUJBQW1CLGtDQUFVLFVBQ2pFO0FBQ0o7QUFBQztBQUNPLG1DQUFjLGlCQUF0QjtBQUNPLGFBQUMsQ0FBSyxLQUFrQixrQkFBTyxPQUFPO0FBQ3pDLGFBQVEsT0FBTyxLQUFzQjtBQUNsQyxhQUFDLENBQU0sTUFBSyxPQUFPLEtBQWE7QUFDaEMsYUFBQyxDQUFNLE1BQU8sT0FBTztBQUNwQixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBTyxRQUFLLEtBQUc7QUFDbkMsaUJBQU8sTUFBTyxLQUFHLEdBQU87QUFDckIsaUJBQUMsQ0FBSyxLQUFPLE9BQ3BCO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBRVMsbUNBQWUsa0JBQXpCLFVBQW1DLE1BQWMsTUFBa0IsVUFBWTtBQUNyRSxnQkFBQyxJQUFrQixlQUFLLE1BQU0sTUFBVSxVQUFNLE1BQ3hEO0FBQUM7QUFDUyxtQ0FBYyxpQkFBeEI7QUFDTyxhQUFLLEtBQWMsaUJBQUssQ0FBSyxLQUFzQix3QkFBUSxLQUFxQixxQkFBTyxVQUFNLEdBQVE7QUFDcEcsY0FBYyxnQkFBUTtBQUMxQixhQUFPLE1BQU8sS0FBTztBQUNsQixhQUFDLENBQUssS0FBSSxNQUFNO0FBQ2hCLGFBQUssS0FBSyxLQUFPLFVBQU0sR0FBRTtBQUNwQixrQkFBcUIscUJBQUcsR0FBTSxRQUN0QztBQUFNLGdCQUFFO0FBQ0Esa0JBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFxQixxQkFBTyxRQUFLLEtBQUc7QUFDeEQscUJBQU8sTUFBTyxLQUFxQixxQkFBSTtBQUN2QyxxQkFBVSxTQUFNLElBQUksSUFBTSxRQUFNLElBQUksSUFBTSxRQUFRO0FBQzlDLHNCQUFxQixxQkFBRyxHQUFNLFFBQ3RDO0FBQ0o7QUFBQztBQUNHLGNBQWMsZ0JBQ3RCO0FBQUM7QUFDWTtBQUNiLG1DQUFrQixxQkFBbEIsVUFBc0M7QUFDL0IsYUFBSyxLQUFlLGVBQVE7QUFDM0IsY0FBYyxnQkFBUTtBQUN2QixhQUFDLENBQUssS0FBUyxTQUFFO0FBQ1osa0JBQVksWUFBSSxJQUN4QjtBQUFNLGdCQUFFO0FBQ0osaUJBQVksV0FBTyxLQUFPO0FBQ3ZCLGlCQUFDLENBQVUsVUFBRTtBQUNKLDRCQUNaO0FBQUM7QUFDTyxzQkFBSSxJQUFNLFFBQU0sSUFBTztBQUMzQixrQkFBWSxZQUNwQjtBQUFDO0FBQ0csY0FBYyxnQkFDdEI7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBUyxhQUFTLE1BQXNCLHNCQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQVUsZ0JBQVEsUUFBSSxJQUFXO0FBQUMsTUFBeEcsRUFBb0gsWUFBRSxvQkFBa0IsS0FBWTtBQUFPLGFBQVEsVUFBVTtBQUFFLFFBQWhMLElBQzdCLE1BQW1CLG1CQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQVUsZ0JBQVEsUUFBSSxJQUFRO0FBQUMsTUFBbEcsRUFBOEcsWUFBRSxvQkFBa0IsS0FBWTtBQUFPLGFBQUssT0FBVTtBQUFHLFVBQzVJLDZCQUFHO0FBQW9CLFlBQUMsSUFBdUIsb0JBQU07QUFBQyxJQUFjO0FBRXBGLGtDQUFTLFNBQWlCLGlCQUFTLFVBQUUsVUFBSztBQUFPLFNBQUssSUFBRyxJQUF1QixvQkFBTyxNQUFFLEVBQUssT0FBRyxDQUFRLFNBQVcsU0FBRSxFQUFRLFVBQUcsQ0FBVyxZQUFZLFlBQWMsWUFBTyxPQUFJO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDN0h4Szs7QUFDa0Q7O0FBQzFDOztBQUNJOztBQVN2Qzs7O0FBQTJDLHNDQUFJO0FBSzNDLG9DQUFtQyxNQUFzQjtBQUE3QywyQkFBdUI7QUFBdkIsb0JBQXVCOztBQUFFLDRCQUFvQjtBQUFwQixxQkFBb0I7O0FBQ3JELHFCQUFRO0FBRE8sY0FBSSxPQUFZO0FBRm5DLGNBQVUsYUFBMkIsSUFBNkI7QUFJMUQsY0FBTSxRQUNkO0FBQUM7QUFDTSxxQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUNELHFDQUFPLFVBQVAsVUFBK0I7QUFDdkIsY0FBSyxPQUNiO0FBQUM7QUFDRCwyQkFBVyxpQ0FBSztjQUFoQjtBQUEyQixvQkFBSyxLQUFXLGFBQU8sS0FBVyxhQUFPLEtBQU87QUFBQztjQUM1RSxhQUFnQztBQUFRLGtCQUFXLGFBQVk7QUFBQzs7dUJBRFk7O0FBRTVFLDJCQUFXLGlDQUFLO2NBQWhCO0FBQ1Usb0JBQUssS0FBSyxPQUFPLEtBQUssS0FBcUIscUJBQUssS0FBTSxRQUNoRTtBQUFDO2NBQ0QsYUFBMkI7QUFDcEIsaUJBQUssS0FBSyxRQUFTLE1BQUU7QUFDaEIsc0JBQUssS0FBcUIscUJBQUssS0FBSyxNQUM1QztBQUNKO0FBQUM7O3VCQUxBOztBQU1ELHFDQUFjLGlCQUFkLFVBQTRCLFVBQzVCLENBQUM7QUFDZ0I7QUFDakIscUNBQWlCLG9CQUFqQjtBQUFvQyxnQkFBSyxLQUFRO0FBQUM7QUFDdEQsWUFBQztBQUVEOztBQUErQywwQ0FBUTtBQUtuRCx3Q0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFKdkIsY0FBYSxnQkFBYTtBQUUzQixjQUFRLFdBQWM7QUFDckIsY0FBVyxjQUFpQyxJQUFtQztBQStDL0UsY0FBMkIsOEJBQVM7QUE1Q3hDLGFBQVEsT0FBUTtBQUNaLGNBQU0sTUFBSyxPQUFHLFVBQWU7QUFDeEIsbUJBQVEsUUFBTztBQUNwQixpQkFBVSxTQUFRLE1BQVUsVUFBSyxLQUFLLEtBQUssTUFBUztBQUNoRCxrQkFBYSxhQUFLLEtBQTBCO0FBQzFDLG9CQUNWO0FBQ0o7QUFBQztBQUNNLHlDQUFPLFVBQWQ7QUFDVSxnQkFDVjtBQUFDO0FBQ0QsMkJBQVcscUNBQUs7Y0FBaEI7QUFBeUQsb0JBQUssS0FBYztBQUFDO2NBQzdFLGFBQW9EO0FBQzVDLGtCQUFZLGNBQVM7QUFDckIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFKNEU7O0FBS3RFLHlDQUFPLFVBQWQsVUFBMkIsTUFBc0I7QUFBcEIsNEJBQW9CO0FBQXBCLHFCQUFvQjs7QUFDN0MsYUFBUSxPQUFPLEtBQWUsZUFBSyxNQUFTO0FBQ3hDLGNBQU0sTUFBSyxLQUFPO0FBQ2hCLGdCQUNWO0FBQUM7QUFDRCwyQkFBVyxxQ0FBUTtjQUFuQjtBQUFzQyxvQkFBSyxLQUFnQjtBQUFDO2NBQzVELGFBQWlDO0FBQzFCLGlCQUFNLFFBQUksS0FBUyxRQUFLLEdBQVE7QUFDL0Isa0JBQWMsZ0JBQVM7QUFDdkIsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFMMkQ7O0FBTXJELHlDQUFPLFVBQWQ7QUFDSSxhQUFZLFdBQU8sS0FBVTtBQUM3QixhQUFTLFFBQU8sS0FBTztBQUN2QixhQUFRLE9BQU07QUFDZCxhQUFTLFFBQUs7QUFDVixjQUFDLElBQUssSUFBSSxHQUFHLElBQVEsTUFBTyxRQUFLLEtBQUc7QUFDakMsaUJBQU0sU0FBTSxHQUFFO0FBQ1Qsc0JBQUssS0FDYjtBQUFDO0FBQ0csa0JBQUssS0FBTyxTQUFLLEdBQUssS0FBTSxNQUFLO0FBQzdCO0FBQ0wsaUJBQU0sU0FBYSxVQUFFO0FBQ2YseUJBQ1Q7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUVTLHlDQUFjLGlCQUF4QjtBQUNJLGdCQUFLLFVBQWUsb0JBQUc7QUFDbkIsY0FDUjtBQUFDO0FBQ1MseUNBQWMsaUJBQXhCLFVBQXFDLE1BQWU7QUFDMUMsZ0JBQUMsSUFBeUIsc0JBQUssTUFDekM7QUFBQztBQUNTLHlDQUFrQixxQkFBNUI7QUFDTyxhQUFLLEtBQTZCLDZCQUFRO0FBQ3pDLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFNLE1BQU8sUUFBSyxLQUFHO0FBQ3pDLGlCQUFhLFlBQVE7QUFDbEIsaUJBQUssS0FBVSxTQUFLLEtBQU0sTUFBRyxHQUFLLFFBQVEsS0FBUSxPQUFFO0FBQzFDLDZCQUFPLEtBQU0sTUFBSyxLQUFNLE1BQUcsR0FDeEM7QUFBQztBQUNHLGtCQUFNLE1BQUcsR0FBZSxlQUNoQztBQUNKO0FBQUM7QUFDUyx5Q0FBYSxnQkFBdkI7QUFDSSxhQUFTLFFBQUcsT0FBSyxVQUFjLG1CQUFHO0FBQy9CLGFBQU0sU0FBUyxNQUFPLE9BQU87QUFDNUIsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQU0sTUFBTyxRQUFLLEtBQUc7QUFDcEMscUJBQXdCLGlDQUFJLElBQUssS0FBTSxNQUFLO0FBQzlDLGlCQUFNLFNBQVMsTUFBTyxPQUM3QjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNrQjtBQUNuQix5Q0FBb0IsdUJBQXBCLFVBQWlDO0FBQzFCLGFBQUMsQ0FBSyxLQUFPLE9BQU8sT0FBTTtBQUN2QixnQkFBSyxLQUFNLE1BQ3JCO0FBQUM7QUFDRCx5Q0FBb0IsdUJBQXBCLFVBQWlDLE1BQVk7QUFDckMsY0FBNEIsOEJBQVE7QUFDeEMsYUFBWSxXQUFPLEtBQU87QUFDdkIsYUFBQyxDQUFVLFVBQUU7QUFDSix3QkFDWjtBQUFDO0FBQ08sa0JBQU0sUUFBUztBQUNuQixjQUFZLFlBQVc7QUFDdkIsY0FBNEIsOEJBQ3BDO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFTLFNBQW1CLHFCQUFTLFVBQVEsTUFBUyxTQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQUksSUFBYTtBQUFHLE1BQTdFLEVBQVQsRUFDN0MsRUFBTSxNQUF5Qix5QkFBZSxlQUFtQixtQkFBZSxlQUFnQixnQkFBRTtBQUFvQixZQUFDLElBQXlCLHNCQUFNO0FBQUc7QUFFbkosd0JBQVMsU0FBUyxTQUFlLGdCQUFFLENBQUMsRUFBTSxNQUFvQixvQkFBVyxXQUFzQixzQkFDakcsRUFBTSxNQUFtQixtQkFBUyxTQUFNLE1BQUUsRUFBTSxNQUFtQixtQkFBUyxTQUFHLEdBQVMsU0FBRSxDQUFFLEdBQUcsR0FBRyxHQUFPLE9BQzdHO0FBQW9CLFlBQUMsSUFBNkIsMEJBQU07QUFBQyxJQUFjO0FBRTVELGtDQUFTLFNBQWlCLGlCQUFlLGdCQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBNkIsMEJBQU8sTUFBRSxFQUFRLFFBQVUsU0FBRSxFQUFRLFFBQVUsU0FBTyxPQUFJO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDakpqSTs7QUFDeUU7O0FBRXBFOztBQUc1Qzs7O0FBR0ksK0JBQWtDLE1BQStCO0FBQTlDLGNBQUksT0FBVztBQUFTLGNBQVEsV0FBYztBQUZ6RCxjQUFZLGVBQWtCO0FBTS9CLGNBQVMsWUFBMkI7QUFIdkMsYUFBUSxPQUFRO0FBQ1osY0FBUyxTQUE2QiwrQkFBRztBQUFrQixrQkFBMkI7QUFDOUY7QUFBQztBQUVELDJCQUFXLDRCQUFPO2NBQWxCO0FBQXNDLG9CQUFLLEtBQWU7QUFBQztjQUMzRCxhQUErQjtBQUN4QixpQkFBSSxPQUFRLEtBQVMsU0FBUTtBQUM1QixrQkFBYSxlQUFPO0FBQ3BCLGtCQUNSO0FBQUM7O3VCQUwwRDs7QUFNcEQsZ0NBQWEsZ0JBQXBCO0FBQ1EsY0FBUSxVQUFPLEtBQWU7QUFDOUIsY0FDUjtBQUFDO0FBQ00sZ0NBQVcsY0FBbEIsVUFBa0M7QUFDMUIsY0FBVSxVQUFLLEtBQUk7QUFDbkIsY0FDUjtBQUFDO0FBQ1MsZ0NBQWdCLG1CQUExQjtBQUNPLGFBQUssS0FBMkIsMkJBQUssS0FDNUM7QUFBQztBQUNNLGdDQUFRLFdBQWY7QUFDSSxhQUFZLFdBQU8sS0FBbUI7QUFDbkMsYUFBUyxZQUFNLEdBQVE7QUFDMUIsYUFBVyxVQUFLO0FBQ1osY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVUsVUFBTyxRQUFLO0FBQ3ZDLGlCQUFLLEtBQWtCLGtCQUFLLEtBQVUsVUFBSyxLQUFFO0FBQ3hDLHNCQUFVLFVBQUcsR0FBWSxjQUFPLEtBQVMsU0FBTSxRQUFPLEtBQVMsU0FBTSxRQUFPLEtBQU0sTUFBSSxNQUFZLFlBQU87QUFDekcsc0JBQVUsVUFBRyxHQUFZLGNBQVUsVUFBVyxXQUFJLElBQUksSUFBSztBQUVuRTtBQUNSOztBQUFDO0FBQ08sZ0NBQXNCLHlCQUE5QjtBQUNRLGNBQUssS0FBdUIsdUJBQ3BDO0FBQUM7QUFDTyxnQ0FBZSxrQkFBdkI7QUFDSSxhQUFPLE1BQUs7QUFDUixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBVSxVQUFPLFFBQUssS0FBRztBQUMxQyxpQkFBSyxLQUFrQixrQkFBSyxLQUFVLFVBQUssS0FDbEQ7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTyxnQ0FBaUIsb0JBQXpCLFVBQXlDO0FBQW1CLGdCQUFLLEtBQUssS0FBa0Isa0JBQUs7QUFBQztBQUN0RixnQ0FBVyxjQUFuQjtBQUF1QyxnQkFBSyxLQUFrQixvQkFBTTtBQUFDO0FBQ3pFLFlBQUM7QUFFRDs7QUFBK0IsMEJBQUk7QUFpQi9CLHdCQUFvQztBQUF4QiwyQkFBd0I7QUFBeEIsb0JBQXdCOztBQUNoQyxxQkFBUTtBQURPLGNBQUksT0FBYTtBQVY1QixjQUFTLFlBQWlDO0FBQzFDLGNBQWUsa0JBQXlCO0FBQ2hELGNBQVMsWUFBd0IsSUFBMEI7QUFDcEQsY0FBSSxPQUFpQjtBQUNyQixjQUFTLFlBQWM7QUFFdkIsY0FBSyxRQUFjO0FBQ25CLGNBQVksZUFBVyxDQUFHO0FBQ3pCLGNBQVEsV0FBVyxDQUFHO0FBQ3RCLGNBQVksZUFBaUI7QUFHN0IsY0FBUSxVQUFZLFVBQWE7QUFDckMsYUFBUSxPQUFRO0FBQ1osY0FBVSxVQUFLLE9BQUcsVUFBZTtBQUM5QixpQkFBSyxLQUFLLFFBQVMsTUFBRTtBQUNmLHVCQUFRLFFBQUssS0FDdEI7QUFBQztBQUNLLG9CQUFNLE1BQVUsVUFBSyxLQUFLLEtBQUssTUFDekM7QUFDSjtBQUFDO0FBekJjLGVBQVMsWUFBeEI7QUFDVSxnQkFBTSxRQUFZLFVBQzVCO0FBQUM7QUF3QkQsMkJBQVcscUJBQUU7Y0FBYjtBQUFnQyxvQkFBSyxLQUFVO0FBQUM7O3VCQUFBOztBQUNoRCwyQkFBVyxxQkFBSTtjQUFmO0FBQ1Esa0JBQVUsWUFBTyxLQUFhO0FBQzVCLG9CQUFLLEtBQ2Y7QUFBQzs7dUJBQUE7O0FBQ0QsMkJBQVcscUJBQVE7Y0FBbkI7QUFBOEIsb0JBQUUsQ0FBSyxLQUFNLElBQVosSUFBb0IsS0FBSyxLQUFZLGVBQVU7QUFBQzs7dUJBQUE7O0FBQ3hFLHlCQUFpQixvQkFBeEIsVUFBK0M7QUFBbUIsZ0JBQVMsU0FBUSxXQUFRLEtBQWU7QUFBQztBQUNqRyx5QkFBUyxZQUFuQixVQUEwQztBQUE0QixnQkFBQyxJQUFvQixpQkFBSyxNQUFhO0FBQUM7QUFDOUcsMkJBQVkscUJBQVk7Y0FBeEI7QUFBbUMsb0JBQUssS0FBSyxRQUFRLEtBQUssS0FBZTtBQUFDOzt1QkFBQTs7QUFDbEUseUJBQVMsWUFBakI7QUFDSSxhQUFVLFNBQUcsSUFBOEI7QUFDM0MsYUFBdUIsc0JBQUcsQ0FBRztBQUM3QixhQUFRLE9BQVE7QUFDWixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBVSxVQUFPLFFBQUssS0FBRztBQUM3QyxpQkFBSyxJQUFPLEtBQVUsVUFBSTtBQUNwQixvQkFBSyxLQUFLLEtBQVUsVUFBSztBQUM1QixpQkFBRSxFQUFrQixrQkFBRTtBQUNGLHVDQUFLO0FBQ2xCLHdCQUFHLEdBQVksWUFDekI7QUFBTSxvQkFBRTtBQUNELHFCQUFvQixzQkFBSyxHQUFvQixzQkFBSztBQUMvQyx3QkFBcUIscUJBQVksWUFDM0M7QUFDSjtBQUFDO0FBQ0csY0FBQyxJQUFLLElBQUksR0FBRyxJQUFTLE9BQU8sUUFBSyxLQUFHO0FBQy9CLG9CQUFHLEdBQ2I7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDRCx5QkFBc0IseUJBQXRCLFVBQTRDO0FBQ3JDLGFBQUMsQ0FBSyxLQUFTLFlBQUksQ0FBSyxLQUFXLFdBQVE7QUFDOUMsYUFBUyxRQUFPLEtBQVUsVUFBUSxRQUFNO0FBQ3BDLGNBQUMsSUFBSyxJQUFRLE9BQUcsS0FBSyxHQUFLLEtBQUc7QUFDM0IsaUJBQUssS0FBVSxVQUFHLEdBQVUsVUFBUSxRQUFJLElBQVUsWUFBRyxDQUFHLEdBQUU7QUFDckQsc0JBQVUsVUFBRyxHQUFpQjtBQUV0QztBQUNKO0FBQ0o7QUFBQztBQUNELDJCQUFXLHFCQUFjO2NBQXpCO0FBQW9DLG9CQUFLLEtBQUssUUFBUSxPQUFPLEtBQUssS0FBWSxZQUFLLEtBQU8sU0FBTyxLQUFRO0FBQUM7O3VCQUFBOztBQUMxRywyQkFBVyxxQkFBRztjQUFkO0FBQXlCLG9CQUFLLEtBQVc7QUFBQztjQUMxQyxhQUE0QjtBQUNyQixpQkFBSyxLQUFTLFlBQVUsT0FBUTtBQUMvQixrQkFBUyxXQUFTO0FBQ2xCLGtCQUFhLGFBQ3JCO0FBQUM7O3VCQUx5Qzs7QUFNMUMsMkJBQVcscUJBQU87Y0FBbEI7QUFBc0Msb0JBQUssS0FBZTtBQUFDO2NBQzNELGFBQWlDO0FBQzFCLGlCQUFNLFVBQVMsS0FBUyxTQUFRO0FBQy9CLGtCQUFhLGVBQVM7QUFDdkIsaUJBQUssS0FBSyxRQUFTLE1BQUU7QUFDaEIsc0JBQUssS0FBc0Isc0JBQUssTUFBTSxLQUM5QztBQUNKO0FBQUM7O3VCQVAwRDs7QUFRcEQseUJBQU8sVUFBZDtBQUFpQyxnQkFBUztBQUFDO0FBQzNDLDJCQUFXLHFCQUFTO2NBQXBCO0FBQXlDLG9CQUFLLEtBQWlCLGlCQUFRO0FBQUM7O3VCQUFBOztBQUNqRSx5QkFBZ0IsbUJBQXZCLFVBQW9EO0FBQzdDLGFBQUMsQ0FBSyxLQUFTLFNBQU8sT0FBTztBQUM1QixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBVSxVQUFPLFFBQUssS0FBRztBQUMxQyxpQkFBSyxLQUFVLFVBQUcsTUFBc0IsbUJBQVU7QUFDbEQsaUJBQUssS0FBVSxVQUFHLEdBQVMsU0FBTyxPQUN6QztBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUVNLHlCQUFXLGNBQWxCLFVBQXlDLFVBQW9CO0FBQWxCLDRCQUFrQjtBQUFsQixzQkFBa0I7O0FBQ3RELGFBQVMsWUFBUyxNQUFRO0FBQzFCLGFBQU0sUUFBSSxLQUFTLFNBQVEsS0FBVSxVQUFRLFFBQUU7QUFDMUMsa0JBQVUsVUFBSyxLQUN2QjtBQUFNLGdCQUFFO0FBQ0Esa0JBQVUsVUFBTyxPQUFNLE9BQUcsR0FDbEM7QUFBQztBQUNFLGFBQUssS0FBSyxRQUFTLE1BQUU7QUFDWixzQkFBUSxRQUFLLEtBQU87QUFDeEIsa0JBQUssS0FBYyxjQUFTLFVBQ3BDO0FBQ0o7QUFBQztBQUNNLHlCQUFjLGlCQUFyQixVQUEwQyxjQUFjO0FBQ3BELGFBQVksV0FBa0IsaUNBQVMsU0FBZSxlQUFhLGNBQVE7QUFDdkUsY0FBWSxZQUFXO0FBQ3JCLGdCQUNWO0FBQUM7QUFDTSx5QkFBYyxpQkFBckIsVUFBNEM7QUFDeEMsYUFBUyxRQUFPLEtBQVUsVUFBUSxRQUFXO0FBQzFDLGFBQU0sUUFBSyxHQUFRO0FBQ2xCLGNBQVUsVUFBTyxPQUFNLE9BQUs7QUFDN0IsYUFBSyxLQUFLLFFBQVMsTUFBSyxLQUFLLEtBQWdCLGdCQUNwRDtBQUFDO0FBQ00seUJBQWtCLHFCQUF6QjtBQUNRLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFVLFVBQU8sUUFBSyxLQUFHO0FBQzdDLGlCQUFZLFdBQU8sS0FBVSxVQUFJO0FBQzlCLGlCQUFDLENBQVMsU0FBUSxXQUFJLENBQVMsU0FBVSxVQUFVO0FBQ2xELGtCQUFVLFVBQUcsR0FBUztBQUU5QjtBQUNKO0FBQUM7QUFDTSx5QkFBdUIsMEJBQTlCO0FBQ1EsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVUsVUFBTyxRQUFLLEtBQUc7QUFDMUMsaUJBQUMsQ0FBSyxLQUFVLFVBQUcsR0FBUSxXQUFRLEtBQVUsVUFBRyxHQUFrQixxQkFBTSxHQUFVO0FBQ2pGLGtCQUFVLFVBQUcsR0FBTSxNQUFPO0FBRWxDO0FBQ0o7QUFBQztBQUNNLHlCQUFXLGNBQWxCO0FBQ2lCLDZCQUNqQjtBQUFDO0FBQ00seUJBQVMsWUFBaEIsVUFBNkMsY0FBcUM7QUFBakUsbUNBQTRCO0FBQTVCLDRCQUE0Qjs7QUFBRSx5Q0FBbUM7QUFBbkMsa0NBQW1DOztBQUM5RSxhQUFVLFNBQVM7QUFDbkIsYUFBc0IscUJBQVE7QUFDMUIsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVUsVUFBTyxRQUFLLEtBQUc7QUFDMUMsaUJBQUssS0FBVSxVQUFHLEdBQVEsV0FBUSxLQUFVLFVBQUcsR0FBVSxVQUFlLGVBQUU7QUFDdEUscUJBQW1CLHNCQUFzQixzQkFBUyxNQUFFO0FBQ2pDLDBDQUFPLEtBQVUsVUFDdkM7QUFBQztBQUNLLDBCQUNWO0FBQ0o7QUFBQztBQUNFLGFBQW9CLG9CQUFtQixtQkFBTSxNQUFPO0FBQ2pELGdCQUNWO0FBQUM7QUFDTSx5QkFBa0IscUJBQXpCLFVBQWdELE1BQThCO0FBQTVCLGtDQUE0QjtBQUE1QiwyQkFBNEI7O0FBQ3ZFLGFBQVksZUFBSSxDQUFLLEtBQVMsU0FBUTtBQUNyQyxjQUFDLElBQUssSUFBWSxHQUFHLElBQU8sS0FBVSxVQUFPLFFBQUssS0FBRztBQUNsRCxpQkFBWSxlQUFJLENBQUssS0FBVSxVQUFHLEdBQVMsU0FBVTtBQUNwRCxrQkFBSyxLQUFLLEtBQVUsVUFDNUI7QUFDSjtBQUFDO0FBQ00seUJBQVksZUFBbkIsVUFBMEM7QUFDbkMsYUFBQyxDQUFLLEtBQVcsV0FBUTtBQUN6QixhQUFDLENBQUssS0FBaUIsaUJBQUssS0FBZ0Isa0JBQXNCLGdDQUFLLEtBQVk7QUFDbEYsY0FBZ0IsZ0JBQVcsYUFBTyxLQUFXO0FBQzdDLGNBQVEsVUFBTyxLQUFnQixnQkFBSSxJQUMzQztBQUFDO0FBQ1MseUJBQVksZUFBdEIsVUFBb0MsT0FDcEMsQ0FBQztBQWpLYyxlQUFXLGNBQU87QUFrS3JDLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBTyxRQUFFLENBQU8sUUFBRSxFQUFNLE1BQWEsYUFBZSxlQUFjLGNBQUUsRUFBTSxNQUFtQixtQkFBUyxTQUFRLFFBQWEsYUFBVSxVQUFFO0FBQW9CLFlBQUMsSUFBaUI7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUM1TnJLOztBQUNVOztBQUdqRDs7O0FBQTJDLHNDQUFvQjtBQUMzRCxvQ0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BRXZCO0FBQUM7QUFDUyxxQ0FBVyxjQUFyQixVQUE4QjtBQUN2QixhQUFDLENBQUssS0FBTyxPQUFPO0FBQ2pCLGdCQUFJLElBQVEsUUFBSyxLQUFVLFVBQU8sVUFDNUM7QUFBQztBQUNTLHFDQUFpQixvQkFBM0IsVUFBb0M7QUFDN0IsYUFBQyxDQUFJLE9BQUksQ0FBSSxJQUFRLFFBQU8sT0FBSztBQUVoQyxjQUFDLElBQUssSUFBSSxHQUFHLElBQU0sSUFBTyxRQUFLLEtBQUc7QUFDL0IsaUJBQUksSUFBRyxNQUFRLEtBQVUsVUFBTyxPQUFPLE9BQUs7QUFDNUMsaUJBQUssS0FBZ0IsZ0JBQUksSUFBSyxLQUFFO0FBQzNCLHNCQUFRLFVBQU0sSUFBSTtBQUN0QixxQkFBVSxTQUFNLElBQVM7QUFDbkIsd0JBQUcsS0FBTyxLQUFVLFVBQU87QUFDM0Isd0JBQ1Y7QUFDSjtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNTLHFDQUFlLGtCQUF6QixVQUFrQztBQUMzQixhQUFDLENBQUksT0FBSSxDQUFJLElBQVEsUUFBTyxPQUFLO0FBQ2hDLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTSxJQUFPLFFBQUssS0FBRztBQUMvQixpQkFBSSxJQUFHLE1BQVEsS0FBVSxVQUFPLE9BQUU7QUFDOUIscUJBQUssS0FBYyxjQUFFO0FBQ3BCLHlCQUFVLFNBQU0sSUFBUztBQUNuQiw0QkFBRyxLQUFPLEtBQWM7QUFDeEIsNEJBQ1Y7QUFDSjtBQUNKO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00scUNBQU8sVUFBZDtBQUNVLGdCQUNWO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFDUyx3QkFBUyxTQUFTLFNBQVcsWUFBSSxJQUFFO0FBQW9CLFlBQUMsSUFBeUIsc0JBQU07QUFBQyxJQUFrQjtBQUNyRyxrQ0FBUyxTQUFpQixpQkFBVyxZQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBeUIsc0JBQU8sTUFBRSxFQUFRLFVBQWtCLGlDQUFnQixlQUFPLE9BQUk7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUM1Q2pJOztBQUNJOztBQUd2Qzs7O0FBQTBDLHFDQUFRO0FBRzlDLG1DQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUZ4QixjQUFJLE9BQWE7QUFDakIsY0FBSSxPQUdYO0FBQUM7QUFDTSxvQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUNELG9DQUFPLFVBQVA7QUFDVSxnQkFBQyxPQUFLLFVBQVEsYUFBRSxTQUFRLEtBQU0sU0FDeEM7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBVSxXQUFFLENBQUMsRUFBTSxNQUFlLGVBQVMsU0FBTSxNQUFFLEVBQU0sTUFBZSxlQUFTLFNBQU0sTUFBRTtBQUFvQixZQUFDLElBQXdCLHFCQUFNO0FBQUMsSUFBYztBQUN4SyxrQ0FBUyxTQUFpQixpQkFBVSxXQUFFLFVBQUs7QUFBYSxZQUFDLElBQXdCLHFCQUFRO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDbEJwRTs7QUFDVTs7QUFDTzs7QUFHeEQ7OztBQUEyQyxzQ0FBa0I7QUFFekQsb0NBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUV2QjtBQUFDO0FBQ0QsMkJBQVcsaUNBQWM7Y0FBekI7QUFBb0Msb0JBQU0sS0FBcUIsbUJBQTFCLEdBQWlDLEtBQW9CLHNCQUFxQixrQ0FBVSxVQUFvQjtBQUFDO2NBQzlJLGFBQTBDO0FBQVEsa0JBQW9CLHNCQUFhO0FBQUM7O3VCQUQwRDs7QUFFdkkscUNBQU8sVUFBZDtBQUNVLGdCQUNWO0FBQUM7QUFDRCxxQ0FBMEIsNkJBQTFCO0FBQXFDLGdCQUFPO0FBQUM7QUFDakQsWUFBQztBQUFBO0FBQ1Msd0JBQVMsU0FBUyxTQUFXLGVBQVMsTUFBa0Isa0JBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBSSxJQUFzQjtBQUFHLE1BQS9GLEVBQUQsR0FDckM7QUFBb0IsWUFBQyxJQUF5QixzQkFBTTtBQUFDLElBQWdCO0FBQzFELGtDQUFTLFNBQWlCLGlCQUFXLFlBQUUsVUFBSztBQUFPLFNBQUssSUFBRyxJQUF5QixzQkFBTyxNQUFFLEVBQVEsVUFBa0IsaUNBQWdCLGVBQU8sT0FBSTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ25Cakk7O0FBQ0k7O0FBQ1U7O0FBRUc7O0FBR3BEOzs7QUFBdUMsa0NBQVE7QUFRM0MsZ0NBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBUHZCLGNBQWdCLG1CQUFrQjtBQUNsQyxjQUFXLGNBUW5CO0FBQUM7QUFDTSxpQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUNELDJCQUFXLDZCQUFXO2NBQXRCO0FBQWlDLG9CQUFLLEtBQW1CO0FBQUM7Y0FDMUQsYUFBcUM7QUFBUSxrQkFBaUIsbUJBQVU7QUFBQzs7dUJBRGY7O0FBRW5ELGlDQUFRLFdBQWYsVUFBMEI7QUFDdEIsYUFBUSxPQUFRO0FBQ2IsYUFBSyxLQUFPLFVBQUksTUFBWSxPQUFXLFdBQUssS0FBSyxNQUFNLE1BQU0sS0FBZ0IsaUJBQUUsVUFBd0I7QUFBUSxrQkFBWSxjQUFTLFVBQWtCO0FBQUcsVUFBcEksR0FBNEk7QUFDaEssY0FBYSxhQUNyQjtBQUFDO0FBRVMsaUNBQVksZUFBdEIsVUFBaUM7QUFDMUIsYUFBQyxDQUFZLFlBQVE7QUFDckIsYUFBQyxDQUFLLEtBQVksZUFBSSxDQUFLLEtBQWlCLGlCQUFRO0FBQ3BELGFBQUssS0FBbUIsbUJBQU8sT0FBUTtBQUMxQyxhQUFjLGFBQUcsSUFBaUI7QUFDbEMsYUFBUSxPQUFRO0FBQ04sb0JBQU8sU0FBRyxVQUFXO0FBQ3hCLGlCQUFLLEtBQWEsYUFBRTtBQUNmLHNCQUFhLGVBQU8sS0FBWSxZQUFNLFFBQWEsV0FBTyxTQUFRO0FBQ2xFLHNCQUFhLGFBQUssS0FDMUI7QUFBQztBQUNFLGlCQUFLLEtBQWlCLGlCQUFFO0FBQ25CLHNCQUFNLFFBQWEsV0FDM0I7QUFDSjtBQUFDO0FBQ1Msb0JBQWMsY0FDNUI7QUFBQztBQUNTLGlDQUFnQixtQkFBMUIsVUFBcUQ7QUFDakQsZ0JBQUssVUFBaUIsNEJBQVM7QUFDNUIsYUFBSyxLQUFhLGFBQUU7QUFDZixrQkFBTyxPQUFLLEtBQWdCLHVCQUFtQixrQ0FBVSxVQUNqRTtBQUNKO0FBQUM7QUFDTyxpQ0FBa0IscUJBQTFCLFVBQXFDO0FBQ2pDLGFBQWUsY0FBTyxLQUFPLFNBQU8sS0FBTyxPQUFPLFNBQUs7QUFDbkQsY0FBTyxTQUFNO0FBQ2QsYUFBSyxLQUFRLFVBQUksS0FBUSxLQUFLLE9BQU8sS0FBUyxTQUFFO0FBQzNDLGtCQUFPLE9BQUssS0FBb0IsMkJBQUssS0FDN0M7QUFBQztBQUNFLGFBQVksZUFBUSxLQUFPLE9BQU8sVUFBUSxLQUFPLE9BQU8sU0FBSyxHQUFFO0FBQzFELGtCQUFhLGFBQUssS0FDMUI7QUFBQztBQUNLLGdCQUFLLEtBQU8sT0FBTyxTQUM3QjtBQUFDO0FBQ08saUNBQVcsY0FBbkIsVUFBOEI7QUFDdkIsYUFBQyxDQUFLLFFBQUksQ0FBSyxLQUFNLE1BQVE7QUFDaEMsYUFBTyxNQUFPLEtBQUssS0FBZTtBQUM1QixnQkFBSSxJQUFRLFFBQVMsWUFDL0I7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBTyxRQUFFLENBQXNCLHVCQUFlLGVBQWMsY0FBMkIsMkJBQW1CLG1CQUFFO0FBQW9CLFlBQUMsSUFBcUIsa0JBQU07QUFBQyxJQUFjO0FBQ3hMLGtDQUFTLFNBQWlCLGlCQUFPLFFBQUUsVUFBSztBQUFhLFlBQUMsSUFBcUIsa0JBQVE7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUN0RTFEOztBQUNKOztBQUd2Qzs7O0FBQXVDLGtDQUFZO0FBRS9DLGdDQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FFdkI7QUFBQztBQUNNLGlDQUFPLFVBQWQ7QUFDVSxnQkFDVjtBQUFDO0FBQ0QsMkJBQVcsNkJBQUk7Y0FBZjtBQUFrQyxvQkFBSyxLQUFZO0FBQUM7Y0FDcEQsYUFBNkI7QUFDckIsa0JBQVUsWUFDbEI7QUFBQzs7dUJBSG1EOztBQUlwRCwyQkFBVyw2QkFBYTtjQUF4QjtBQUFtQyxvQkFBSyxLQUFPLFNBQU8sS0FBTyxPQUFZLFlBQUssS0FBTSxRQUFPLEtBQU87QUFBQzs7dUJBQUE7O0FBQ3ZHLFlBQUM7QUFBQTtBQUNTLHdCQUFTLFNBQVMsU0FBTyxRQUFFLENBQWEsY0FBRTtBQUFvQixZQUFDLElBQXFCLGtCQUFNO0FBQUMsSUFBa0I7QUFDeEcsa0NBQVMsU0FBaUIsaUJBQU8sUUFBRSxVQUFLO0FBQWEsWUFBQyxJQUFxQixrQkFBUTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ25COUQ7O0FBQ1U7O0FBR2pEOzs7QUFBNkMsd0NBQW9CO0FBQzdELHNDQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FFdkI7QUFBQztBQUNNLHVDQUFPLFVBQWQ7QUFDVSxnQkFDVjtBQUFDO0FBQ0QsdUNBQTBCLDZCQUExQjtBQUFxQyxnQkFBTztBQUFDO0FBQ2pELFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBYSxjQUFJLElBQUU7QUFBb0IsWUFBQyxJQUEyQix3QkFBTTtBQUFDLElBQWtCO0FBRXpHLGtDQUFTLFNBQWlCLGlCQUFhLGNBQUUsVUFBSztBQUFPLFNBQUssSUFBRyxJQUEyQix3QkFBTyxNQUFFLEVBQVEsVUFBa0IsaUNBQWdCLGVBQU8sT0FBRztBQUFHLEk7Ozs7Ozs7Ozs7OztBQ2hCdkk7O0FBQ0c7O0FBQ0k7O0FBR3ZDOzs7QUFBeUMsb0NBQVE7QUFRN0Msa0NBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBTnZCLGNBQUssUUFBbUI7QUFDekIsY0FBc0IseUJBQWdCO0FBQ3RDLGNBQXNCLHlCQU03QjtBQUFDO0FBQ0QsMkJBQUksK0JBQVU7Y0FBZDtBQUFxQyxvQkFBSyxLQUFRO0FBQUM7Y0FDbkQsYUFBbUM7QUFDdEIsNkJBQVEsUUFBSyxLQUFNLE9BQVk7QUFDcEMsa0JBQWEsYUFBSyxLQUMxQjtBQUFDOzt1QkFKa0Q7O0FBS25ELDJCQUFJLCtCQUFpQjtjQUFyQjtBQUNPLGlCQUFLLEtBQVcsV0FBTyxTQUFLLEdBQU8sT0FBSyxLQUFZO0FBQ2pELG9CQUFvQixvQkFDOUI7QUFBQzs7dUJBQUE7O0FBQ00sbUNBQU8sVUFBZDtBQUNVLGdCQUNWO0FBQUM7QUFDTSxtQ0FBYyxpQkFBckI7QUFBeUMsZ0JBQU87QUFBQztBQUMxQyxtQ0FBWSxlQUFuQjtBQUF1QyxnQkFBTztBQUFDO0FBQy9DLG1DQUEwQiw2QkFBMUI7QUFBcUMsZ0JBQU87QUFBQztBQXhCdEMseUJBQWlCLG9CQUFtQjtBQXlCL0MsWUFBQztBQUFBO0FBQ1EsaUJBQVEsUUFBb0Isb0JBQWtCLG1CQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBTTtBQUNoRSx3QkFBUyxTQUFTLFNBQVMsV0FBdUIsd0JBQVEsTUFBeUIseUJBQVksWUFBRSxvQkFBa0I7QUFBVSxnQkFBVSxnQkFBUSxRQUFJLElBQWM7QUFBQyxNQUE5RyxFQUEwSCxZQUFFLG9CQUFrQixLQUFZO0FBQU8sYUFBVyxhQUFVO0FBQUUsUUFBL00sRUFDWCwwQkFBMkIsMkJBQUU7QUFBb0IsWUFBQyxJQUF1QixvQkFBTTtBQUFDLElBQWM7QUFDM0csa0NBQVMsU0FBaUIsaUJBQVMsVUFBRSxVQUFLO0FBQWEsWUFBQyxJQUF1QixvQkFBUTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ25DeEQ7O0FBQ1Y7O0FBR3ZDOzs7QUFBdUMsa0NBQVE7QUFHM0MsZ0NBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRnhCLGNBQUksT0FBYztBQUNsQixjQUFTLFlBR2hCO0FBQUM7QUFDTSxpQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUNELGlDQUFPLFVBQVA7QUFBNEIsZ0JBQUMsT0FBSyxVQUFRLGFBQUUsU0FBUSxLQUFNLFNBQVE7QUFBQztBQUNuRSxpQ0FBMEIsNkJBQTFCO0FBQXFDLGdCQUFPO0FBQUM7QUFDbkMsaUNBQVcsY0FBckIsVUFBbUM7QUFDdkIsb0JBQU8sS0FBaUIsaUJBQVc7QUFDM0MsZ0JBQUssVUFBWSx1QkFDckI7QUFBQztBQUNTLGlDQUFnQixtQkFBMUIsVUFBd0M7QUFDakMsYUFBQyxDQUFVLFVBQU8sT0FBVTtBQUM1QixhQUFLLEtBQVUsYUFBWSxZQUFRLEtBQVUsYUFBWSxTQUFFO0FBQ3BELG9CQUFLLEtBQVMsU0FBVSxZQUFhLFdBQVUsWUFDekQ7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTyxpQ0FBUSxXQUFoQixVQUFzQjtBQUNaLGdCQUFDLENBQU0sTUFBVyxXQUFRLFdBQVksU0FDaEQ7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBTyxRQUFFLENBQUMsRUFBTSxNQUFhLGFBQVMsU0FBUSxRQUFTLFNBQUUsQ0FBUSxTQUFRLFFBQVksWUFBa0Isa0JBQVMsU0FBUyxTQUFVLFVBQVksWUFBUyxTQUFPLE9BQVEsUUFBUSxRQUFPLE9BQVcsV0FDek4sRUFBTSxNQUFlLGVBQVMsU0FBTyxPQUFFO0FBQW9CLFlBQUMsSUFBcUIsa0JBQU07QUFBQyxJQUFjO0FBRTNGLGtDQUFTLFNBQWlCLGlCQUFPLFFBQUUsVUFBSztBQUFhLFlBQUMsSUFBcUIsa0JBQVE7QUFBRyxJOzs7Ozs7Ozs7Ozs7OztBQ2xDOUQ7O0FBQ2dFOztBQUV2RTs7QUFDbUI7O0FBQ0Y7O0FBRUM7O0FBSWxEOzs7QUFBaUMsNEJBQUk7QUF3RGpDLDBCQUErQjtBQUFuQiw4QkFBbUI7QUFBbkIsdUJBQW1COztBQUMzQixxQkFBUTtBQXhETCxjQUFRLFdBQWdCO0FBQ3hCLGNBQVksZUFBZ0I7QUFDNUIsY0FBUSxXQUFnQjtBQUN4QixjQUFVLGFBQWdCO0FBQzFCLGNBQW9CLHVCQUFrQjtBQUV0QyxjQUFhLGdCQUFzQjtBQUNuQyxjQUFLLFFBQWM7QUFDbkIsY0FBcUIsd0JBQWlCO0FBQ3RDLGNBQVMsWUFBaUI7QUFDMUIsY0FBYyxpQkFBaUI7QUFDL0IsY0FBYSxnQkFBYztBQUMzQixjQUFZLGVBQWU7QUFDM0IsY0FBa0IscUJBQWM7QUFDaEMsY0FBcUIsd0JBQWM7QUFDbkMsY0FBZSxrQkFBaUI7QUFDaEMsY0FBb0IsdUJBQWlCO0FBQ3JDLGNBQW1CLHNCQUFrQjtBQUNyQyxjQUFLLFFBQXFCLElBQXVCO0FBQ2pELGNBQVEsV0FBeUIsSUFBMkI7QUFDNUQsY0FBb0IsdUJBQWtCO0FBQ3JDLGNBQWdCLG1CQUFtQjtBQUNuQyxjQUFVLGFBQXNCO0FBQ2hDLGNBQWEsZ0JBQXNCO0FBSW5DLGNBQW9CLHVCQUFrQjtBQUN0QyxjQUF3QiwyQkFBZ0I7QUFDeEMsY0FBMEIsNkJBQWlCO0FBQzNDLGNBQVcsY0FBYztBQUN6QixjQUFXLGNBQWtCO0FBQzdCLGNBQVMsWUFBa0I7QUFDM0IsY0FBbUIsc0JBQXNCO0FBRXpDLGNBQXlCLDRCQUFrQjtBQUU1QyxjQUFVLGFBQTRGO0FBQ3RHLGNBQW9CLHVCQUF3SDtBQUM1SSxjQUFjLGlCQUF3SDtBQUN0SSxjQUFnQixtQkFBd0g7QUFDeEksY0FBb0IsdUJBQXdIO0FBQzVJLGNBQWUsa0JBQXdIO0FBQ3ZJLGNBQWlCLG9CQUF3SDtBQUN6SSxjQUFrQixxQkFBd0g7QUFFMUksY0FBYSxnQkFBd0g7QUFDckksY0FBWSxlQUF3SDtBQUNwSSxjQUFXLGNBQXdIO0FBQ25JLGNBQVksZUFBd0g7QUFDcEksY0FBVSxhQUEwQjtBQUVwQyxjQUFJLE9BQW9CO0FBSzNCLGFBQVEsT0FBUTtBQUNaLGNBQWlCLG1CQUEwQjtBQUMzQyxjQUFpQixpQkFBVyxhQUFHLFVBQXNCO0FBQVUsb0JBQUssS0FBb0Isb0JBQUssS0FBaUI7QUFBRTtBQUNoSCxjQUFpQixpQkFBVSxZQUFHLFVBQXNCO0FBQVUsb0JBQUssS0FBc0Isc0JBQVE7QUFBRTtBQUNuRyxjQUFNLE1BQUssT0FBRyxVQUFlO0FBQ3hCLG1CQUFLLE9BQVE7QUFDWixvQkFBTSxNQUFVLFVBQUssS0FBSyxLQUFLLE1BQ3pDO0FBQUU7QUFDRSxjQUFTLFNBQUssT0FBRyxVQUFlO0FBQzNCLG1CQUFTLFNBQU87QUFDZixvQkFBTSxNQUFVLFVBQUssS0FBSyxLQUFLLE1BQ3pDO0FBQUU7QUFDRSxjQUE2QjtBQUM3QixjQUFvQjtBQUNyQixhQUFTLFNBQUU7QUFDTixrQkFBYyxjQUFVO0FBQ3pCLGlCQUFLLEtBQVUsVUFBRTtBQUNaLHNCQUFzQixzQkFBSyxLQUNuQztBQUNKO0FBQUM7QUFDRyxjQUNSO0FBQUM7QUFDTSwyQkFBTyxVQUFkO0FBQWlDLGdCQUFXO0FBQUM7QUFDN0MsMkJBQVcsdUJBQU07Y0FBakI7QUFBb0Msb0JBQUssS0FBYztBQUFDO2NBQ3hELGFBQStCO0FBQ3ZCLGtCQUFZLGNBQVM7QUFDUCwrQ0FBYyxnQkFDcEM7QUFBQzs7dUJBSnVEOztBQUtqRCwyQkFBWSxlQUFuQixVQUErQjtBQUFVLGdCQUFtQixrQ0FBVSxVQUFPO0FBQUM7QUFDOUUsMkJBQVcsdUJBQWU7Y0FBMUI7QUFBNkMsb0JBQUssS0FBYSxhQUFpQjtBQUFDOzt1QkFBQTs7QUFDakYsMkJBQVcsdUJBQVk7Y0FBdkI7QUFBa0Msb0JBQU0sS0FBbUIsaUJBQXhCLEdBQStCLEtBQWtCLG9CQUFPLEtBQWEsYUFBa0I7QUFBQztjQUMzSCxhQUF3QztBQUFRLGtCQUFrQixvQkFBYTtBQUFDOzt1QkFEMkM7O0FBRTNILDJCQUFXLHVCQUFZO2NBQXZCO0FBQWtDLG9CQUFNLEtBQW1CLGlCQUF4QixHQUErQixLQUFrQixvQkFBTyxLQUFhLGFBQWtCO0FBQUM7Y0FDM0gsYUFBd0M7QUFBUSxrQkFBa0Isb0JBQWE7QUFBQzs7dUJBRDJDOztBQUUzSCwyQkFBVyx1QkFBWTtjQUF2QjtBQUFrQyxvQkFBTSxLQUFtQixpQkFBeEIsR0FBK0IsS0FBa0Isb0JBQU8sS0FBYSxhQUFrQjtBQUFDO2NBQzNILGFBQXdDO0FBQVEsa0JBQWtCLG9CQUFhO0FBQUM7O3VCQUQyQzs7QUFFM0gsMkJBQVcsdUJBQWU7Y0FBMUI7QUFBOEMsb0JBQUssS0FBdUI7QUFBQztjQUMzRSxhQUF5QztBQUNsQyxpQkFBTSxVQUFTLEtBQWlCLGlCQUFRO0FBQ3ZDLGtCQUFxQix1QkFBUztBQUM5QixrQkFDUjtBQUFDOzt1QkFMMEU7O0FBTTNFLDJCQUFXLHVCQUFtQjtjQUE5QjtBQUFpRCxvQkFBSyxLQUEyQjtBQUFDO2NBQ2xGLGFBQTRDO0FBQ3JDLGlCQUFNLFVBQVMsS0FBcUIscUJBQVE7QUFDM0Msa0JBQXlCLDJCQUFTO0FBQ2xDLGtCQUNSO0FBQUM7O3VCQUxpRjs7OztBQU1sRiwyQkFBVyx1QkFBcUI7Y0FBaEM7QUFBbUQsb0JBQUssS0FBNkI7QUFBQztjQUN0RixhQUE4QztBQUN2QyxpQkFBTSxVQUFTLEtBQTRCLDRCQUFRO0FBQ2xELGtCQUEyQiw2QkFDbkM7QUFBQzs7dUJBSnFGOzs7O0FBS3RGLDJCQUFXLHVCQUFJO2NBQWY7QUFDSSxpQkFBVSxTQUFNO0FBQ1osa0JBQUMsSUFBTyxPQUFRLEtBQVksWUFBRTtBQUN4Qix3QkFBSyxPQUFPLEtBQVcsV0FDakM7QUFBQztBQUNLLG9CQUNWO0FBQUM7Y0FDRCxhQUF5QjtBQUNqQixrQkFBVyxhQUFNO0FBQ2xCLGlCQUFNLE1BQUU7QUFDSCxzQkFBQyxJQUFPLE9BQVMsTUFBRTtBQUNmLDBCQUFXLFdBQUssT0FBTyxLQUFNO0FBQzdCLDBCQUFjLGNBQUksS0FBTSxLQUFLLE1BQ3JDO0FBQ0o7QUFBQztBQUNHLGtCQUFvQztBQUNwQyxrQkFDUjtBQUFDOzt1QkFYQTs7QUFZRCwyQkFBVyx1QkFBUTtjQUFuQjtBQUNJLGlCQUFVLFNBQU07QUFDWixrQkFBQyxJQUFPLE9BQVEsS0FBWSxZQUFFO0FBQzNCLHFCQUFJLElBQVEsUUFBSyxLQUFlLGlCQUFLLEdBQUU7QUFDaEMsNEJBQUssT0FBTyxLQUFXLFdBQ2pDO0FBQ0o7QUFBQztBQUNLLG9CQUNWO0FBQUM7O3VCQUFBOztBQUNELDJCQUFJLHVCQUFZO2NBQWhCO0FBQ08saUJBQUssS0FBYyxjQUFPLE9BQUssS0FBTztBQUN6QyxpQkFBVSxTQUFHLElBQXVCO0FBQ2hDLGtCQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBTSxNQUFPLFFBQUssS0FBRztBQUN0QyxxQkFBSyxLQUFNLE1BQUcsR0FBVyxXQUFFO0FBQ3BCLDRCQUFLLEtBQUssS0FBTSxNQUMxQjtBQUNKO0FBQUM7QUFDSyxvQkFDVjtBQUFDOzt1QkFBQTs7QUFDRCwyQkFBVyx1QkFBTztjQUFsQjtBQUFzQyxvQkFBSyxLQUFNLE1BQU8sVUFBTztBQUFDOzt1QkFBQTs7QUFDaEUsMkJBQVcsdUJBQVM7Y0FBcEI7QUFDVSxvQkFBSyxLQUFNLE1BQ3JCO0FBQUM7O3VCQUFBOztBQUNELDJCQUFXLHVCQUFnQjtjQUEzQjtBQUNVLG9CQUFLLEtBQWEsYUFDNUI7QUFBQzs7dUJBQUE7O0FBQ0QsMkJBQVcsdUJBQVc7Y0FBdEI7QUFDSSxpQkFBVSxTQUFPLEtBQWM7QUFDNUIsaUJBQUssS0FBaUIsb0JBQVMsTUFBRTtBQUM3QixxQkFBTyxPQUFRLFFBQUssS0FBa0Isb0JBQUssR0FBRTtBQUN4QywwQkFBWSxjQUNwQjtBQUNKO0FBQUM7QUFDRSxpQkFBSyxLQUFpQixvQkFBUSxRQUFVLE9BQU8sU0FBSyxHQUFFO0FBQ2pELHNCQUFZLGNBQVMsT0FDN0I7QUFBQztBQUNLLG9CQUFLLEtBQ2Y7QUFBQztjQUNELGFBQXVDO0FBQ25DLGlCQUFVLFNBQU8sS0FBYztBQUM1QixpQkFBTSxTQUFRLFFBQVUsT0FBUSxRQUFPLFNBQUssR0FBUTtBQUNwRCxpQkFBTSxTQUFRLEtBQWtCLGtCQUFRO0FBQzNDLGlCQUFZLFdBQU8sS0FBa0I7QUFDakMsa0JBQWlCLG1CQUFTO0FBQzFCLGtCQUFtQixtQkFBTSxPQUNqQztBQUFDOzt1QkFSQTs7QUFTRCwyQkFBVyx1QkFBYTtjQUF4QjtBQUNVLG9CQUFLLEtBQWEsYUFBUSxRQUFLLEtBQ3pDO0FBQUM7Y0FDRCxhQUFzQztBQUNsQyxpQkFBVSxTQUFPLEtBQWM7QUFDNUIsaUJBQU0sUUFBSSxLQUFTLFNBQVEsS0FBYSxhQUFRLFFBQVE7QUFDdkQsa0JBQVksY0FBTyxLQUFhLGFBQ3hDO0FBQUM7O3VCQUxBOztBQU1NLDJCQUFrQixxQkFBekI7QUFDTyxhQUFLLEtBQWtCLGtCQUFFO0FBQ3BCLGtCQUFpQixpQkFBZTtBQUNoQyxrQkFBaUIsaUJBQ3pCO0FBQ0o7QUFBQztBQUNELDJCQUFXLHVCQUFLO2NBQWhCO0FBQ08saUJBQUssS0FBVyxXQUFPLE9BQVc7QUFDbEMsaUJBQUssS0FBYSxhQUFPLE9BQWE7QUFDbkMsb0JBQU0sS0FBYSxXQUFsQixHQUE4QixZQUN6QztBQUFDOzt1QkFBQTs7QUFDTSwyQkFBSyxRQUFaO0FBQ1EsY0FBSyxPQUFRO0FBQ2IsY0FBYyxnQkFBTTtBQUNwQixjQUFZLGNBQVM7QUFDdEIsYUFBSyxLQUFpQixtQkFBSyxHQUFFO0FBQ3hCLGtCQUFZLGNBQU8sS0FBYSxhQUN4QztBQUNKO0FBQUM7QUFDUywyQkFBVyxjQUFyQixVQUE4QixLQUFXO0FBQ2xDLGFBQUMsQ0FBSyxRQUFJLENBQUssS0FBUTtBQUN0QixjQUFDLElBQU8sT0FBUSxLQUFFO0FBQ2xCLGlCQUFTLFFBQU0sSUFBTTtBQUNsQixpQkFBTSxTQUFJLFFBQVksMERBQWMsVUFBRTtBQUNsQyxxQkFBQyxDQUFLLEtBQU0sTUFBSyxLQUFLLE9BQU07QUFDM0Isc0JBQVksWUFBTSxPQUFNLEtBQ2hDO0FBQU0sb0JBQUU7QUFDQSxzQkFBSyxPQUNiO0FBQ0o7QUFDSjtBQUFDO0FBQ1MsMkJBQWtCLHFCQUE1QixVQUFnRCxVQUFxQjtBQUM3RCxjQUFxQixxQkFBSyxLQUFLLE1BQUUsRUFBa0Isa0JBQVUsVUFBa0Isa0JBQ3ZGO0FBQUM7QUFDTSwyQkFBVyxjQUFsQjtBQUNPLGFBQUssS0FBWSxlQUFTLE1BQU8sT0FBRztBQUN2QyxhQUFTLFFBQU8sS0FBYSxhQUFRLFFBQUssS0FBYSxlQUFLO0FBQ3RELGdCQUFLLEtBQU0sS0FBTSxRQUFNLE1BQU8sS0FDeEM7QUFBQztBQUNELDJCQUFXLHVCQUFZO2NBQXZCO0FBQTJDLG9CQUFLLEtBQUssUUFBZ0I7QUFBQzs7dUJBQUE7O0FBQ3RFLDJCQUFXLHVCQUFTO2NBQXBCO0FBQ08saUJBQUMsQ0FBSyxLQUFZLFlBQU8sT0FBTztBQUNuQyxpQkFBVyxVQUFXLFNBQVE7QUFDeEIsb0JBQVEsV0FBVyxRQUFRLFFBQUssS0FBVyxhQUFXLFdBQUcsQ0FDbkU7QUFBQzs7dUJBQUE7O0FBQ00sMkJBQVMsWUFBaEI7QUFDTyxhQUFDLENBQUssS0FBWSxZQUFRO0FBQ3JCLGtCQUFPLFNBQU8sS0FBVyxhQUNyQztBQUFDO0FBQ00sMkJBQVksZUFBbkI7QUFDTyxhQUFDLENBQUssS0FBWSxZQUFRO0FBQ3JCLGtCQUFPLFNBQU8sS0FBVyxhQUNyQztBQUFDO0FBQ00sMkJBQVEsV0FBZjtBQUNPLGFBQUssS0FBWSxZQUFPLE9BQU87QUFDL0IsYUFBSyxLQUF3Qix3QkFBTyxPQUFPO0FBQzNDLGFBQUssS0FBc0Isc0JBQU8sT0FBTztBQUN4QyxjQUFjO0FBQ1osZ0JBQ1Y7QUFBQztBQUNELDJCQUFJLHVCQUFzQjtjQUExQjtBQUNPLGlCQUFLLEtBQVksZUFBUyxNQUFPLE9BQU07QUFDcEMsb0JBQUssS0FBWSxZQUFVLFVBQUssTUFDMUM7QUFBQzs7dUJBQUE7O0FBQ00sMkJBQVEsV0FBZjtBQUNPLGFBQUssS0FBYSxhQUFPLE9BQU87QUFDbkMsYUFBVSxTQUFPLEtBQWM7QUFDL0IsYUFBUyxRQUFTLE9BQVEsUUFBSyxLQUFjO0FBQ3pDLGNBQVksY0FBUyxPQUFNLFFBQ25DO0FBQUM7QUFDTSwyQkFBZ0IsbUJBQXZCO0FBQ08sYUFBSyxLQUF3Qix3QkFBTyxPQUFPO0FBQzNDLGFBQUssS0FBc0Isc0JBQU8sT0FBTztBQUN4QyxjQUFjO0FBQ1osZ0JBQ1Y7QUFBQztBQUNELDJCQUFXLHVCQUFXO2NBQXRCO0FBQ08saUJBQUssS0FBWSxlQUFTLE1BQU8sT0FBTTtBQUNwQyxvQkFBSyxLQUFhLGFBQVEsUUFBSyxLQUFhLGdCQUN0RDtBQUFDOzt1QkFBQTs7QUFDRCwyQkFBVyx1QkFBVTtjQUFyQjtBQUNPLGlCQUFLLEtBQVksZUFBUyxNQUFPLE9BQU07QUFDMUMsaUJBQVUsU0FBTyxLQUFjO0FBQ3pCLG9CQUFPLE9BQVEsUUFBSyxLQUFhLGdCQUFVLE9BQU8sU0FDNUQ7QUFBQzs7dUJBQUE7O0FBQ00sMkJBQVUsYUFBakI7QUFDTyxhQUFLLEtBQXNCLHNCQUFFO0FBQ3hCLGtCQUNSO0FBQUM7QUFDRyxjQUFhO0FBQ2IsY0FBZ0I7QUFDaEIsY0FBVyxXQUFLLEtBQUssTUFBUTtBQUM5QixhQUFLLEtBQWMsY0FBRTtBQUNoQixrQkFDUjtBQUNKO0FBQUM7QUFDRCwyQkFBVyx1QkFBb0I7Y0FBL0I7QUFBbUQsb0JBQUssS0FBNEI7QUFBQzs7dUJBQUE7O0FBQzdFLDJCQUF1QiwwQkFBL0IsVUFBNEM7QUFDckMsYUFBSSxPQUFRLEtBQXNCLHNCQUFRO0FBQ3pDLGNBQTBCLDRCQUFPO0FBQ2pDLGNBQ1I7QUFBQztBQUNTLDJCQUE2QixnQ0FBdkMsWUFBNEMsQ0FBQztBQUNuQywyQkFBa0IscUJBQTVCO0FBQ08sYUFBQyxDQUFLLEtBQTJCLDJCQUFPLE9BQU87QUFDbEQsYUFBUSxPQUFRO0FBQ2hCLGFBQVcsWUFBUyxNQUFJLElBQVEsUUFBSSxJQUFRLFFBQU0sTUFBVSxVQUFHO0FBQWtCLHNCQUF5Qix5QkFBVztBQUFJLGNBQTNHO0FBQ1YsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVksWUFBVSxVQUFPLFFBQUssS0FBRztBQUN6RCxpQkFBWSxXQUFPLEtBQVksWUFBVSxVQUFJO0FBQzFDLGlCQUFDLENBQVMsU0FBUyxTQUFVO0FBQ2hDLGlCQUFTLFFBQU8sS0FBUyxTQUFTLFNBQU87QUFDdEMsaUJBQU8sT0FBUSxRQUFLLEtBQVMsU0FBTSxRQUMxQztBQUFDO0FBQ0csY0FBd0Isd0JBQU87QUFDL0IsY0FBMEIsMEJBQUssTUFBVztBQUN4QyxnQkFDVjtBQUFDO0FBQ08sMkJBQXdCLDJCQUFoQyxVQUE2QztBQUNyQyxjQUF3Qix3QkFBUTtBQUNqQyxhQUFDLENBQVEsV0FBSSxDQUFRLFFBQVEsUUFBUTtBQUN4QyxhQUFRLE9BQVUsUUFBUTtBQUMxQixhQUFhLFlBQVM7QUFDbkIsYUFBUSxRQUFRLFFBQUU7QUFDYixrQkFBQyxJQUFRLFFBQVcsUUFBUSxRQUFFO0FBQzlCLHFCQUFZLFdBQU8sS0FBa0Isa0JBQU87QUFDekMscUJBQVMsWUFBWSxTQUFXLFdBQUU7QUFDeEIsaUNBQVE7QUFDVCw4QkFBWSxZQUFnQix1QkFBUSxRQUFPLE9BQ3ZEO0FBQ0o7QUFDSjtBQUFDO0FBQ0UsYUFBQyxDQUFXLFdBQUU7QUFDVixpQkFBSyxLQUFZLFlBQUssS0FDckIsa0JBQUssS0FDYjtBQUNKO0FBQUM7QUFDUywyQkFBVSxhQUFwQjtBQUNRLGNBQXVCO0FBQ3hCLGFBQUssS0FBcUIsd0JBQVEsS0FBVSxVQUFFO0FBQ3pDLGtCQUFXLFdBQUssS0FBYSxjQUFNLEtBQVMsVUFDcEQ7QUFBQztBQUNELGFBQVUsU0FBTyxLQUFjO0FBQy9CLGFBQVMsUUFBUyxPQUFRLFFBQUssS0FBYztBQUN6QyxjQUFZLGNBQVMsT0FBTSxRQUNuQztBQUFDO0FBQ1MsMkJBQVksZUFBdEI7QUFDUSxjQUFZLGNBQ3BCO0FBQUM7QUFDRCwyQkFBVyx1QkFBc0I7Y0FBakM7QUFDTyxpQkFBSyxLQUFlLGVBQUU7QUFDZix3QkFBSyxLQUFZLFlBQUssS0FDaEM7QUFBQztBQUNLLG9CQUFPLFNBQU8sS0FBYSxhQUFvQixzQkFDekQ7QUFBQzs7dUJBQUE7O0FBQ0QsMkJBQVcsdUJBQW9CO2NBQS9CO0FBQ1Usb0JBQU8sU0FBTyxLQUFhLGFBQWlCLG1CQUN0RDtBQUFDOzt1QkFBQTs7QUFDRCwyQkFBVyx1QkFBWTtjQUF2QjtBQUNPLGlCQUFLLEtBQVksZUFBUyxNQUFPLE9BQUk7QUFDeEMsaUJBQVUsU0FBTyxLQUFjO0FBQy9CLGlCQUFTLFFBQVMsT0FBUSxRQUFLLEtBQWEsZUFBSztBQUMzQyxvQkFBSyxLQUFhLGFBQWdCLGdCQUFVLFVBQU0sT0FBUSxPQUNwRTtBQUFDOzt1QkFBQTs7QUFDTSwyQkFBVSxhQUFqQixVQUE4QixNQUFZLE1BQTBCLGlCQUEwQztBQUMxRyxhQUFVLFNBQVE7QUFDZCxjQUFhLGFBQUssS0FBSyxNQUFFLEVBQU0sTUFBTSxNQUFNLE1BQU0sTUFBUSxRQUFZO0FBQ3RFLGFBQUMsQ0FBUSxRQUFPLE9BQU87QUFDdkIsYUFBQyxDQUFnQixtQkFBUSxLQUFjLGNBQUU7QUFDcEMsa0JBQWUsZUFBSyxNQUFNLE1BQ2xDO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsMkJBQWMsaUJBQXhCLFVBQXFDLE1BQVksTUFBNEM7QUFDekYsYUFBUSxPQUFRO0FBQ2IsYUFBbUIsbUJBQWtCLGtCQUFjO0FBQ2pDLGdEQUFTLFNBQUssS0FBYSxjQUFNLE1BQUUsVUFBMEIsU0FBZTtBQUMxRixpQkFBbUIsbUJBQWtCLGtCQUFRLFVBQVksWUFBWTtBQUNyRSxpQkFBUyxTQUFFO0FBQ04sc0JBQVMsU0FBSyxNQUN0QjtBQUNKO0FBQ0o7QUFBQztBQUNELDJCQUFPLFVBQVAsVUFBcUI7QUFDWCxnQkFBSyxLQUFNLE1BQ3JCO0FBQUM7QUFDRCwyQkFBTyxVQUFQLFVBQXVCO0FBQ2hCLGFBQUssUUFBUyxNQUFRO0FBQ3JCLGNBQU0sTUFBSyxLQUFPO0FBQ2xCLGNBQ1I7QUFBQztBQUNELDJCQUFVLGFBQVYsVUFBdUI7QUFDbkIsYUFBUSxPQUFPLEtBQWMsY0FBTztBQUNoQyxjQUFRLFFBQU87QUFDYixnQkFDVjtBQUFDO0FBQ0QsMkJBQVUsYUFBVixVQUEwQjtBQUN0QixhQUFTLFFBQU8sS0FBTSxNQUFRLFFBQU87QUFDbEMsYUFBTSxRQUFLLEdBQVE7QUFDbEIsY0FBTSxNQUFPLE9BQU0sT0FBSztBQUN6QixhQUFLLEtBQWlCLG9CQUFTLE1BQUU7QUFDNUIsa0JBQVksY0FBTyxLQUFNLE1BQU8sU0FBSSxJQUFPLEtBQU0sTUFBRyxLQUM1RDtBQUFDO0FBQ0csY0FDUjtBQUFDO0FBQ00sMkJBQWlCLG9CQUF4QixVQUFxQyxNQUFrQztBQUFoQyxzQ0FBZ0M7QUFBaEMsK0JBQWdDOztBQUNuRSxhQUFhLFlBQU8sS0FBbUI7QUFDcEMsYUFBaUIsaUJBQUssT0FBTyxLQUFlO0FBQzNDLGNBQUMsSUFBSyxJQUFZLEdBQUcsSUFBWSxVQUFPLFFBQUssS0FBRztBQUNoRCxpQkFBZ0IsZUFBWSxVQUFHLEdBQU07QUFDbEMsaUJBQWlCLGlCQUFhLGVBQWUsYUFBZTtBQUM3RCxpQkFBYSxnQkFBUyxNQUFPLE9BQVUsVUFDN0M7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTSwyQkFBbUIsc0JBQTFCLFVBQTBDLE9BQWtDO0FBQWhDLHNDQUFnQztBQUFoQywrQkFBZ0M7O0FBQ3hFLGFBQVUsU0FBTTtBQUNiLGFBQUMsQ0FBTyxPQUFPLE9BQVE7QUFDdEIsY0FBQyxJQUFLLElBQVksR0FBRyxJQUFRLE1BQU8sUUFBSyxLQUFHO0FBQ3pDLGlCQUFDLENBQU0sTUFBSSxJQUFVO0FBQ3hCLGlCQUFZLFdBQU8sS0FBa0Isa0JBQU0sTUFBRyxJQUFtQjtBQUM5RCxpQkFBVSxVQUFPLE9BQUssS0FDN0I7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTSwyQkFBaUIsb0JBQXhCLFVBQTRDO0FBQ3BDLGNBQUMsSUFBSyxJQUFZLEdBQUcsSUFBTyxLQUFNLE1BQU8sUUFBSyxLQUFHO0FBQ2pELGlCQUFRLE9BQU8sS0FBTSxNQUFJO0FBQ3RCLGlCQUFLLEtBQVUsVUFBUSxRQUF3QixZQUFHLENBQUcsR0FBTyxPQUNuRTtBQUFDO0FBQ0ssZ0JBQ1Y7QUFBQztBQUNNLDJCQUFhLGdCQUFwQixVQUFpQztBQUN6QixjQUFDLElBQUssSUFBWSxHQUFHLElBQU8sS0FBTSxNQUFPLFFBQUssS0FBRztBQUM5QyxpQkFBSyxLQUFNLE1BQUcsR0FBSyxRQUFTLE1BQU8sT0FBSyxLQUFNLE1BQ3JEO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00sMkJBQWUsa0JBQXRCLFVBQXNDO0FBQ2xDLGFBQVUsU0FBTTtBQUNiLGFBQUMsQ0FBTyxPQUFPLE9BQVE7QUFDdEIsY0FBQyxJQUFLLElBQVksR0FBRyxJQUFRLE1BQU8sUUFBSyxLQUFHO0FBQ3pDLGlCQUFDLENBQU0sTUFBSSxJQUFVO0FBQ3hCLGlCQUFRLE9BQU8sS0FBYyxjQUFNLE1BQUs7QUFDckMsaUJBQU0sTUFBTyxPQUFLLEtBQ3pCO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ00sMkJBQWUsa0JBQXRCLFVBQW1EO0FBQTVCLGtDQUE0QjtBQUE1QiwyQkFBNEI7O0FBQy9DLGFBQVUsU0FBRyxJQUF1QjtBQUNoQyxjQUFDLElBQUssSUFBWSxHQUFHLElBQU8sS0FBTSxNQUFPLFFBQUssS0FBRztBQUM3QyxrQkFBTSxNQUFHLEdBQW1CLG1CQUFPLFFBQzNDO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ1MsMkJBQWEsZ0JBQXZCLFVBQW9DO0FBQVUsZ0JBQWMsb0JBQVE7QUFBQztBQUM3RCwyQkFBNEIsK0JBQXBDLFVBQWlELE1BQWU7QUFDNUQsYUFBYSxZQUFPLEtBQW1CO0FBQ3ZDLGFBQVksV0FBUTtBQUNoQixjQUFDLElBQUssSUFBWSxHQUFHLElBQVksVUFBTyxRQUFLLEtBQUc7QUFDN0MsaUJBQVUsVUFBRyxHQUFLLFFBQVMsTUFBVTtBQUNoQyx3QkFBWSxVQUFJO0FBQ3BCLGtCQUFxQixxQkFBUyxVQUN0QztBQUFDO0FBQ0csY0FBZSxlQUFLLEtBQUssTUFBRSxFQUFRLFFBQU0sTUFBWSxZQUFVLFVBQVMsU0FDaEY7QUFBQztBQUNPLDJCQUFnQyxtQ0FBeEM7QUFDSSxhQUFhLFlBQU8sS0FBbUI7QUFDbkMsY0FBQyxJQUFLLElBQVksR0FBRyxJQUFZLFVBQU8sUUFBSyxLQUFHO0FBQzVDLGtCQUFxQixxQkFBVSxVQUFHLElBQU0sS0FBUyxTQUFVLFVBQUcsR0FDdEU7QUFDSjtBQUFDO0FBQ1MsMkJBQW9CLHVCQUE5QixVQUFrRCxVQUFlO0FBQ3JELGtCQUFxQixxQkFDakM7QUFBQztBQUNPLDJCQUFtQixzQkFBM0I7QUFDSSxhQUFhLFlBQU8sS0FBMkI7QUFDM0MsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFZLFVBQU8sUUFBSyxLQUFHO0FBQ3hDLGlCQUFZLFdBQVksVUFBSTtBQUM1QixpQkFBUyxRQUFPLEtBQVMsU0FBUyxTQUFPO0FBQ3JDLGtCQUFjLGNBQVMsU0FBSyxNQUFPLE9BQzNDO0FBQ0o7QUFBQztBQUNPLDJCQUF1QiwwQkFBL0I7QUFDSSxhQUFVLFNBQU07QUFDaEIsYUFBUSxPQUFPLEtBQWE7QUFDekIsYUFBQyxDQUFNLE1BQU8sT0FBUTtBQUNyQixjQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBVSxVQUFPLFFBQUssS0FBRztBQUM3QyxpQkFBWSxXQUFPLEtBQVUsVUFBSTtBQUM5QixpQkFBQyxDQUFTLFNBQVEsV0FBSSxDQUFTLFNBQU0sTUFBVTtBQUM1QyxvQkFBSyxLQUNmO0FBQUM7QUFDSyxnQkFDVjtBQUFDO0FBQ08sMkJBQWEsZ0JBQXJCLFVBQWtDLE1BQWUsVUFBdUI7QUFDaEUsY0FBQyxJQUFLLElBQVksR0FBRyxJQUFPLEtBQVMsU0FBTyxRQUFLLEtBQUc7QUFDcEQsaUJBQVcsVUFBTyxLQUFTLFNBQUk7QUFDNUIsaUJBQVEsUUFBSyxRQUFRLFFBQVcsUUFBYSxnQkFBaUIsY0FBRTtBQUN4RCx5QkFBTSxNQUNqQjtBQUNKO0FBQ0o7QUFBQztBQUNPLDJCQUFpQixvQkFBekI7QUFDSSxhQUFhLFlBQU8sS0FBZ0IsZ0JBQVE7QUFDeEMsY0FBQyxJQUFLLElBQUksR0FBRyxJQUFZLFVBQU8sUUFBSyxLQUFHO0FBQy9CLHVCQUFHLEdBQ2hCO0FBQ0o7QUFBQztBQUNPLDJCQUFhLGdCQUFyQjtBQUNRLGNBQXFCLHFCQUFLLEtBQWdCLGdCQUFTO0FBQ25ELGNBQXFCLHFCQUFLLEtBQ2xDO0FBQUM7QUFDTywyQkFBb0IsdUJBQTVCLFVBQTBEO0FBQ2xELGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFPLFFBQUssS0FBRztBQUMvQixrQkFBRyxHQUFhLGFBQUssS0FDN0I7QUFDSjtBQUFDO0FBQ00sMkJBQVUsYUFBakIsVUFBdUMsUUFBeUIsVUFBcUM7QUFBbkYsNkJBQXFCO0FBQXJCLHNCQUFxQjs7QUFBRSwrQkFBdUI7QUFBdkIsd0JBQXVCOztBQUFFLHlDQUFtQztBQUFuQyxrQ0FBbUM7O0FBQzlGLGFBQUMsQ0FBTyxVQUFRLEtBQWMsY0FBRTtBQUN6QixzQkFBTyxLQUNqQjtBQUFDO0FBQ0UsYUFBQyxDQUFRLFFBQVE7QUFDakIsYUFBVSxVQUFFO0FBQ1Asa0JBQVMsV0FDakI7QUFBQztBQUNELGFBQVEsT0FBUTtBQUNLLGdEQUFXLFdBQU8sUUFBTSxLQUFLLE1BQUUsVUFBMEIsU0FBZTtBQUNyRixrQkFBYSxhQUFLLEtBQUssTUFBRSxFQUFTLFNBQVMsU0FBVSxVQUM3RDtBQUFDLFlBQU0sS0FBUyxVQUNwQjtBQUFDO0FBQ00sMkJBQVMsWUFBaEIsVUFBaUMsVUFBYztBQUMzQyxhQUFRLE9BQVE7QUFDSyxnREFBVSxVQUFTLFVBQU0sTUFBRSxVQUEwQixTQUFXLE1BQWlCLFVBQWU7QUFDN0csa0JBQVksWUFBSyxLQUFLLE1BQUUsRUFBUyxTQUFTLFNBQU0sTUFBTSxNQUFVLFVBQVUsVUFBVSxVQUM1RjtBQUNKO0FBQUM7QUFDTSwyQkFBcUIsd0JBQTVCLFVBQW9EO0FBQXZCLCtCQUF1QjtBQUF2Qix3QkFBdUI7O0FBQzdDLGFBQVUsVUFBRTtBQUNQLGtCQUFTLFdBQ2pCO0FBQUM7QUFDRCxhQUFRLE9BQVE7QUFDWixjQUFVLFlBQVE7QUFDbEIsY0FBOEI7QUFDYixnREFBVyxXQUFLLEtBQVMsVUFBRSxVQUEwQixTQUFnQixRQUFlO0FBQ2pHLGtCQUFVLFlBQVM7QUFDcEIsaUJBQVEsV0FBVyxRQUFFO0FBQ2hCLHNCQUFjLGNBQVM7QUFDdkIsc0JBQW9DO0FBQ3BDLHNCQUNSO0FBQ0o7QUFDSjtBQUFDO0FBQ1MsMkJBQTBCLDZCQUFwQyxZQUNBLENBQUM7QUFDUywyQkFBdUIsMEJBQWpDLFlBQ0EsQ0FBQztBQUNPLDJCQUFtQixzQkFBM0IsVUFBK0MsVUFBNkI7QUFDeEUsYUFBUSxPQUFPLEtBQWtCLGtCQUFXO0FBQ3pDLGFBQUMsQ0FBTSxNQUFRO0FBQ2xCLGFBQVksV0FBTyxLQUFXO0FBQzNCLGFBQVMsWUFBUSxLQUFpQixpQkFBVSxhQUF1QixvQkFBRTtBQUNoRSxrQkFBc0Isc0JBQUssTUFDbkM7QUFDSjtBQUFDO0FBQ08sMkJBQW9CLHVCQUE1QjtBQUNRLGNBQXlCLHlCQUFLLEtBQWtCO0FBQ2pELGFBQUssS0FBb0IsdUJBQWEsVUFBRTtBQUN2QyxpQkFBWSxXQUFPLEtBQWM7QUFDN0Isa0JBQUMsSUFBSyxJQUFJLEdBQUcsSUFBVyxTQUFPLFFBQUssS0FBRztBQUNuQyxzQkFBNkIsNkJBQVMsU0FBRyxHQUFVLFdBQzNEO0FBQ0o7QUFBTSxnQkFBRTtBQUNBLGtCQUE2Qiw2QkFBSyxLQUFnQixnQkFBTyxRQUFNLEtBQW9CLHVCQUMzRjtBQUNKO0FBQUM7QUFDTywyQkFBd0IsMkJBQWhDLFVBQW1EO0FBQy9DLGFBQVMsUUFBSztBQUNWLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBTyxLQUFNLE1BQU8sUUFBSyxLQUFHO0FBQ3JDLGtCQUFNLE1BQUcsR0FBYSxlQUFPLEtBQU0sTUFBRyxHQUFXLFVBQVMsVUFBRyxDQUFHO0FBQ2hFLGtCQUFNLE1BQUcsR0FBSSxNQUFZLGFBQVEsS0FBTSxNQUFHLEdBQVEsVUFBTyxLQUFNLE1BQUcsR0FBYSxlQUFJLElBQUcsQ0FDOUY7QUFDSjtBQUFDO0FBQ08sMkJBQTRCLCtCQUFwQyxVQUEyRCxXQUFvQjtBQUMzRSxhQUFTLFFBQUs7QUFDVixjQUFDLElBQUssSUFBSSxHQUFHLElBQVksVUFBTyxRQUFLLEtBQUc7QUFDL0IsdUJBQUcsR0FBZ0IsZ0JBQVUsYUFBYSxVQUFHLEdBQVEsV0FBYSxVQUFHLEdBQVksV0FBUyxVQUFHLENBQzFHO0FBQ0o7QUFBQztBQUNPLDJCQUFhLGdCQUFyQixVQUFrQztBQUMzQixhQUFDLENBQVMsU0FBUTtBQUNqQixjQUFXLGFBQVE7QUFDdkIsYUFBaUIsZ0JBQW9CO0FBQ3hCLHVCQUFTLFNBQVEsU0FBUTtBQUNuQyxhQUFjLGNBQU8sT0FBTyxTQUFLLEdBQUU7QUFDOUIsa0JBQVcsYUFBZ0IsY0FDbkM7QUFBQztBQUNHLGNBQTZCO0FBQzlCLGFBQUssS0FBVyxXQUFFO0FBQ2Isa0JBQ1I7QUFBQztBQUNHLGNBQXFCO0FBQ3JCLGNBQWlCO0FBQ2pCLGNBQ1I7QUFBQztBQUNTLDJCQUFnQixtQkFBMUIsWUFBK0IsQ0FBQztBQUN0QiwyQkFBVSxhQUFwQixZQUF5QixDQUFDO0FBQ2xCLDJCQUF5Qiw0QkFBakM7QUFDUSxjQUFvQixzQkFBTTtBQUM5QixhQUFRLE9BQVE7QUFDWixjQUFvQixvQkFBVSxZQUFHLFVBQWM7QUFBVSxvQkFBSyxLQUFZLGVBQVEsT0FBTyxLQUFhLGFBQVEsUUFBSyxLQUFhLGVBQUksSUFBTTtBQUFDO0FBQzNJLGNBQW9CLG9CQUFhLGVBQUcsVUFBYztBQUFVLG9CQUFLLEtBQW1CO0FBQUM7QUFDekYsYUFBYSxZQUFPLEtBQW1CO0FBQ25DLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBWSxVQUFPLFFBQUssS0FBRztBQUNwQyxrQkFBaUMsaUNBQVUsVUFDbkQ7QUFDSjtBQUFDO0FBQ08sMkJBQWdDLG1DQUF4QyxVQUE0RDtBQUNwRCxjQUFvQixvQkFBUyxTQUFLLEtBQWUsaUJBQ3pEO0FBQUM7QUFDTywyQkFBcUIsd0JBQTdCLFVBQTBDO0FBQ3RDLGFBQVEsT0FBTyxLQUFlO0FBQzlCLGFBQU8sTUFBTyxLQUFvQixvQkFBTztBQUN0QyxhQUFDLENBQUssS0FBTyxPQUFNO0FBQ25CLGFBQUksT0FBZSxZQUFFO0FBQ3BCLGlCQUFZLFdBQU8sS0FBa0Isa0JBQUssTUFBUTtBQUM1QyxvQkFBUyxZQUFRLE9BQU8sS0FBUyxTQUFTLFNBQU0sUUFDMUQ7QUFBQztBQUNFLGFBQUksT0FBWSxTQUFFO0FBQ1gsb0JBQUssS0FBUyxTQUN4QjtBQUFDO0FBQ0UsYUFBSSxPQUFlLFlBQUU7QUFDZCxvQkFBSyxLQUFZLFlBQzNCO0FBQUM7QUFDSyxnQkFBSSxJQUNkO0FBQUM7QUFDTywyQkFBNEIsK0JBQXBDO0FBQ0ksYUFBYSxZQUFPLEtBQW1CO0FBQ25DLGNBQUMsSUFBSyxJQUFZLEdBQUcsSUFBWSxVQUFPLFFBQUssS0FBRztBQUM3QyxpQkFBVSxVQUFHLEdBQVMsU0FBVTtBQUMvQixrQkFBUyxTQUFVLFVBQUcsR0FBSyxNQUNuQztBQUNKO0FBQUM7QUFDTSwyQkFBVyxjQUFsQixVQUErQjtBQUN4QixhQUFDLENBQU0sTUFBTyxPQUFNO0FBQ2pCLGdCQUFLLEtBQWMsY0FDN0I7QUFBQztBQUNNLDJCQUFXLGNBQWxCLFVBQStCLE1BQWU7QUFDdkMsYUFBQyxDQUFNLE1BQVE7QUFDZCxjQUFjLGNBQU0sUUFBWTtBQUNoQyxjQUFvQixvQkFBSyxLQUFlLGlCQUNoRDtBQUFDO0FBQ2E7QUFDTiwyQkFBYyxpQkFBdEIsVUFBaUM7QUFDMUIsYUFBTSxTQUFTLGlCQUFtQixRQUFFO0FBQ1E7QUFDckMsb0JBQUssS0FBTSxNQUFLLEtBQVUsVUFDcEM7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDRCwyQkFBUSxXQUFSLFVBQXFCO0FBQ2QsYUFBQyxDQUFLLFFBQVEsS0FBTyxVQUFNLEdBQU8sT0FBTTtBQUMzQyxhQUFTLFFBQU8sS0FBVyxXQUFPO0FBQzVCLGdCQUFLLEtBQWUsZUFDOUI7QUFBQztBQUNELDJCQUFRLFdBQVIsVUFBcUIsTUFBZTtBQUM3QixhQUFLLEtBQWEsYUFBSyxNQUFZLFdBQVE7QUFDM0MsYUFBUyxZQUFNLE1BQVksWUFBUyxNQUFFO0FBQ3JDLG9CQUFXLEtBQVcsV0FDMUI7QUFBTSxnQkFBRTtBQUNJLHdCQUFPLEtBQWUsZUFBVztBQUNyQyxrQkFBVyxXQUFNLFFBQVk7QUFDN0Isa0JBQW9CLG9CQUFLLEtBQWUsaUJBQ2hEO0FBQUM7QUFDRyxjQUE2Qiw2QkFBSyxNQUFZO0FBQzlDLGNBQWMsY0FBSyxNQUFVLFVBQVM7QUFDdEMsY0FBaUI7QUFDakIsY0FBdUIsdUJBQy9CO0FBQUM7QUFDTywyQkFBWSxlQUFwQixVQUFpQyxNQUFlO0FBQ3pDLGFBQVMsWUFBTyxJQUFTLFdBQVE7QUFDcEMsYUFBWSxXQUFPLEtBQVMsU0FBTztBQUNoQyxhQUFTLGFBQVMsUUFBWSxhQUFVLE1BQU8sT0FBUyxhQUFjO0FBQ25FLGdCQUFLLEtBQWlCLGlCQUFTLFVBQ3pDO0FBQUM7QUFDTywyQkFBZ0IsbUJBQXhCLFVBQStCLEdBQVE7QUFDaEMsYUFBRSxNQUFPLEdBQU8sT0FBTTtBQUN0QixhQUFFLEVBQUUsYUFBbUIsV0FBSyxFQUFFLGFBQW9CLFNBQU8sT0FBTztBQUMvRCxjQUFDLElBQUssS0FBTSxHQUFFO0FBQ1gsaUJBQUMsQ0FBRSxFQUFlLGVBQUksSUFBVTtBQUNoQyxpQkFBQyxDQUFFLEVBQWUsZUFBSSxJQUFPLE9BQU87QUFDcEMsaUJBQUUsRUFBRyxPQUFNLEVBQUksSUFBVTtBQUN6QixpQkFBUSxRQUFFLEVBQUksUUFBYyxVQUFPLE9BQU87QUFDMUMsaUJBQUMsQ0FBSyxLQUFpQixpQkFBRSxFQUFHLElBQUcsRUFBSyxLQUFPLE9BQ2xEO0FBQUM7QUFDRyxjQUFFLEtBQU0sR0FBRTtBQUNQLGlCQUFFLEVBQWUsZUFBRyxNQUFJLENBQUUsRUFBZSxlQUFJLElBQU8sT0FDM0Q7QUFBQztBQUNLLGdCQUNWO0FBQUM7QUFDTywyQkFBc0IseUJBQTlCLFVBQTJDO0FBQ3BDLGFBQUMsQ0FBSyxLQUFvQix1QkFBSSxDQUFLLEtBQWEsYUFBUTtBQUMzRCxhQUFZLFdBQU8sS0FBa0Isa0JBQU87QUFDekMsYUFBUyxZQUFJLENBQVMsU0FBOEIsOEJBQVE7QUFDL0QsYUFBYSxZQUFPLEtBQTJCO0FBQzNDLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBWSxVQUFPLFFBQUssS0FBRztBQUNyQyxpQkFBQyxDQUFLLEtBQVMsU0FBVSxVQUFHLEdBQU8sT0FDMUM7QUFBQztBQUNFLGFBQUMsQ0FBSyxLQUFZLFlBQVUsVUFBSyxNQUFTLFFBQUU7QUFDeEMsaUJBQUMsQ0FBSyxLQUFZLFlBQUU7QUFDZixzQkFDUjtBQUFNLG9CQUFFO0FBQ0Esc0JBQ1I7QUFDSjtBQUNKO0FBQUM7QUFDRCwyQkFBVSxhQUFWLFVBQXVCO0FBQ25CLGFBQVUsU0FBTyxLQUFLLEtBQUssT0FBTyxLQUFnQjtBQUMvQyxhQUFPLFVBQVMsTUFBTyxTQUFNO0FBQzFCLGdCQUNWO0FBQUM7QUFDRCwyQkFBVSxhQUFWLFVBQXVCLE1BQWtCO0FBQ2pDLGdCQUFPLE9BQU8sS0FBZTtBQUM5QixhQUFTLFlBQU0sTUFBWSxZQUFTLE1BQUU7QUFDckMsb0JBQVcsS0FBVyxXQUMxQjtBQUFNLGdCQUFFO0FBQ0Esa0JBQVcsV0FBTSxRQUFZO0FBQzdCLGtCQUF1Qix1QkFDL0I7QUFDSjtBQUFDO0FBQ0QsMkJBQXlCLDRCQUF6QixVQUE2QyxVQUFtQjtBQUN4RCxjQUF3QjtBQUN4QixjQUFpQixpQkFBSyxLQUFLLE1BQUUsRUFBWSxZQUFVLFVBQVEsUUFBVSxTQUFLLE1BQVcsV0FBYztBQUNuRyxjQUFvQixvQkFBUyxVQUFFLENBQ3ZDO0FBQUM7QUFDRCwyQkFBcUIsd0JBQXJCLFVBQWlDLE1BQW1CO0FBQzVDLGNBQXdCO0FBQ3hCLGNBQXFCLHFCQUFLLEtBQUssTUFBRSxFQUFRLFFBQU0sTUFBVyxXQUNsRTtBQUFDO0FBQ0QsMkJBQWEsZ0JBQWIsVUFBaUMsVUFBZTtBQUN4QyxjQUF3QjtBQUN4QixjQUFpQyxpQ0FBVztBQUM1QyxjQUFnQixnQkFBSyxLQUFLLE1BQUUsRUFBWSxZQUFVLFVBQVEsUUFBVSxTQUFLLE1BQVMsU0FDMUY7QUFBQztBQUNELDJCQUFlLGtCQUFmLFVBQW1DO0FBQzNCLGNBQXdCO0FBQ3hCLGNBQWtCLGtCQUFLLEtBQUssTUFBRSxFQUFZLFlBQVUsVUFBUSxRQUFVLFNBQzlFO0FBQUM7QUFDRCwyQkFBZ0IsbUJBQWhCLFVBQTZCO0FBQ3RCLGFBQUssS0FBbUIsbUJBQVMsU0FBTyxPQUFNO0FBQ2pELGFBQVcsVUFBRyxFQUFNLE1BQU0sTUFBTyxPQUFNLEtBQVMsU0FBTSxPQUFPLE9BQVM7QUFDbEUsY0FBbUIsbUJBQUssS0FBSyxNQUFXO0FBQ3RDLGdCQUFRLFFBQU0sUUFBa0IsdUJBQVEsUUFBTyxTQUN6RDtBQUFDO0FBQ0QsMkJBQVcsY0FBWCxVQUF3QjtBQUNwQixhQUFXLFVBQUcsRUFBTSxNQUFTO0FBQ3pCLGNBQWMsY0FBSyxLQUFLLE1BQVc7QUFDakMsZ0JBQUssS0FBWSxZQUFRLFFBQ25DO0FBQUM7QUFDRCwyQkFBVyxjQUFYLFVBQXdCO0FBQ2QsZ0JBQUssS0FBaUIsaUJBQVEsUUFDeEM7QUFBQztBQUNvQjtBQUNyQiwyQkFBVSxhQUFWLFVBQTBCLE9BQXFCO0FBQzNDLGFBQVUsU0FBTTtBQUNYLGVBQVUsVUFBSyxLQUFNLE1BQU8sUUFBTSxLQUFnQixnQkFBUztBQUMzRCxlQUFVLFVBQUssS0FBTSxNQUFPLFFBQU0sS0FBb0Isb0JBQWE7QUFDbEUsZ0JBQ1Y7QUFBQztBQUNELDJCQUFlLGtCQUFmLFVBQTRCLE1BQVksT0FBcUI7QUFDdEQsYUFBQyxDQUFNLE1BQVE7QUFDZixhQUFZLFlBQUU7QUFDVCxrQkFBWSxZQUFLLE1BQ3pCO0FBQU0sZ0JBQUU7QUFDQSxrQkFBUyxTQUFLLE1BQ3RCO0FBQ0o7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBUyxhQUFTLE1BQVUsVUFBUyxTQUFFO0FBQWMsZ0JBQW1CLGtDQUFjO0FBQUcsTUFBN0UsRUFBRCxFQUM1QixTQUFzQixzQkFBRSxFQUFNLE1BQVMsU0FBVyxXQUFVLFlBQzdELE1BQWEsYUFBZSxlQUFZLFlBQVksWUFBRSxvQkFBYTtBQUFVLGdCQUFPO0FBQUMsTUFBM0YsRUFBdUcsWUFBRSxvQkFBYSxLQUFPLE9BQWU7QUFBSSxhQUFRLE9BQU0sSUFBVyxXQUFLLElBQWMsY0FBUyxTQUFDLEVBQVcsV0FBUyxTQUFTO0FBQUcsVUFDdE8sRUFBTSxNQUFxQixxQkFBZSxlQUFpQixpQkFBZSxlQUFhLGFBQzdFLFlBQWdCLGdCQUFjLGNBQWdDLGdDQUN4RSxFQUFNLE1BQWlDLGlDQUFTLFNBQVEsUUFBRSxFQUFNLE1BQXFCLHFCQUFTLFNBQVEsUUFBRSxFQUFNLE1BQTBCLDBCQUFTLFNBQVEsUUFDaEksMkJBQUUsRUFBTSxNQUF1Qix1QkFBUyxTQUFNLE1BQVMsU0FBRSxDQUFLLE1BQVUsVUFBVSxVQUMzRyxFQUFNLE1BQXlCLHlCQUFTLFNBQU8sT0FBUyxTQUFFLENBQU0sT0FBYSxhQUM3RSxFQUFNLE1BQW1CLG1CQUFTLFNBQU8sT0FBUyxTQUFFLENBQU0sT0FBTyxPQUFhLGFBQzlFLEVBQU0sTUFBZ0MsZ0NBQVMsU0FBUSxRQUErQiwrQkFBZ0Msa0NBQ2hILE1BQWdCLGdCQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQUksSUFBb0I7QUFBRyxNQUEzRixNQUNNLE1BQWdCLGdCQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQUksSUFBb0I7QUFBRyxNQUEzRixNQUNNLE1BQWdCLGdCQUFZLFlBQUUsb0JBQWtCO0FBQVUsZ0JBQUksSUFBb0I7QUFBRyxNQUEzRixJQUNBLEVBQU0sTUFBZ0IsZ0JBQVMsU0FBTyxPQUFzQixzQkFBNEIsMEI7Ozs7Ozs7Ozs7O0FDOXdCZjtBQUN6RSxnQ0FDQSxDQUFDO0FBQ00sK0JBQVUsYUFBakIsVUFBa0MsVUFBbUU7QUFDakcsYUFBTyxNQUFHLElBQXFCO0FBQzVCLGFBQUssS0FBTSxPQUFpQixnQkFBVyxhQUF5Qix5QkFBYTtBQUM3RSxhQUFpQixpQkFBZSxnQkFBdUM7QUFDdkUsYUFBTyxTQUFHO0FBQ1QsaUJBQVUsU0FBTyxLQUFNLE1BQUksSUFBVztBQUNoQyxvQkFBSSxJQUFPLFVBQU8sS0FBUSxRQUFLLElBQ3pDO0FBQUU7QUFDQyxhQUNQO0FBQUM7QUFDTSwrQkFBVSxhQUFqQixVQUFnQyxRQUFjLFFBQXdELGNBQXlCLFVBQXFDO0FBQTVELCtCQUF1QjtBQUF2Qix3QkFBdUI7O0FBQUUseUNBQW1DO0FBQW5DLGtDQUFtQzs7QUFDaEssYUFBTyxNQUFHLElBQXFCO0FBQzVCLGFBQUssS0FBTyxRQUFpQixnQkFBVyxhQUFhO0FBQ3JELGFBQWlCLGlCQUFlLGdCQUFxQztBQUN4RSxhQUFRLE9BQUcsRUFBUSxRQUFRLFFBQWMsY0FBTSxLQUFVLFVBQVc7QUFDakUsYUFBVSxVQUFLLEtBQVksY0FBWTtBQUN2QyxhQUFvQixvQkFBSyxLQUFzQix3QkFBUTtBQUMxRCxhQUFpQixnQkFBZSxLQUFVLFVBQU87QUFDakQsYUFBUSxPQUFRO0FBQ2IsYUFBTyxTQUFNLElBQVEsVUFBRztBQUNwQixpQkFBQyxDQUFjLGNBQVE7QUFDZCwwQkFBSSxJQUFPLFVBQU8sS0FBSyxJQUN2QztBQUFFO0FBQ0MsYUFBSyxLQUNaO0FBQUM7QUFDTSwrQkFBUSxXQUFmLFVBQThCLFFBQVksTUFBdUQ7QUFDN0YsYUFBTyxNQUFHLElBQXFCO0FBQzVCLGFBQU8sU0FBTSxJQUFRLFVBQUc7QUFDcEIsaUJBQUMsQ0FBWSxZQUFRO0FBQ2Qsd0JBQUksSUFBTyxVQUFPLEtBQU0sS0FBTSxNQUFJLElBQ2hEO0FBQUU7QUFDQyxhQUFLLEtBQU8sUUFBaUIsZ0JBQVcsYUFBYSxZQUFRO0FBQ2hFLGFBQVksV0FBRyxJQUFlO0FBQ3RCLGtCQUFPLE9BQU8sUUFBUTtBQUN0QixrQkFBTyxPQUFTLFVBQVU7QUFDL0IsYUFBSyxLQUNaO0FBQUM7QUFDTSwrQkFBUyxZQUFoQixVQUFpQyxVQUFjLE1BQXlGO0FBQ3BJLGFBQU8sTUFBRyxJQUFxQjtBQUMvQixhQUFRLE9BQWMsY0FBVyxXQUFXLFdBQVE7QUFDakQsYUFBSyxLQUFNLE9BQWlCLGdCQUFXLGFBQWdCLGdCQUFTO0FBQ2hFLGFBQWlCLGlCQUFlLGdCQUF1QztBQUMxRSxhQUFRLE9BQVE7QUFDYixhQUFPLFNBQUc7QUFDVCxpQkFBVSxTQUFRO0FBQ2xCLGlCQUFRLE9BQVE7QUFDYixpQkFBSSxJQUFPLFVBQVEsS0FBRTtBQUNkLDBCQUFPLEtBQU0sTUFBSSxJQUFXO0FBQzlCLHdCQUFNO0FBQ04sc0JBQUMsSUFBTyxPQUFVLE9BQWdCLGdCQUFFO0FBQ3BDLHlCQUFNLEtBQUcsRUFBTSxNQUFLLEtBQU8sT0FBUSxPQUFlLGVBQVE7QUFDdEQsMEJBQUssS0FDYjtBQUNKO0FBQUM7QUFDVSx5QkFBSSxJQUFPLFVBQU8sS0FBUSxRQUFNLE1BQUssSUFDcEQ7QUFBRTtBQUNDLGFBQ1A7QUFBQztBQUNNLCtCQUFXLGNBQWxCLFVBQW1DLFVBQWtCLFVBQTBFO0FBQzNILGFBQU8sTUFBRyxJQUFxQjtBQUMvQixhQUFRLE9BQWMsY0FBVyxXQUFlLGVBQVk7QUFDekQsYUFBSyxLQUFNLE9BQWlCLGdCQUFXLGFBQWtCLGtCQUFTO0FBQ2xFLGFBQWlCLGlCQUFlLGdCQUF1QztBQUMxRSxhQUFRLE9BQVE7QUFDYixhQUFPLFNBQUc7QUFDVCxpQkFBVSxTQUFRO0FBQ2YsaUJBQUksSUFBTyxVQUFRLEtBQUU7QUFDZCwwQkFBTyxLQUFNLE1BQUksSUFDM0I7QUFBQztBQUNZLDJCQUFJLElBQU8sVUFBTyxLQUFRLFFBQUssSUFDaEQ7QUFBRTtBQUNDLGFBQ1A7QUFBQztBQTVFYSxxQkFBVSxhQUE4RDtBQTZFMUYsWUFBQztBQUFBLEs7Ozs7Ozs7Ozs7O0FDOUVxQzs7QUFHdEM7OztBQUE2Qix3QkFBSTtBQW9CN0I7QUFDSSxxQkFBUTtBQUhKLGNBQU8sVUFJZjtBQUFDO0FBcEJELDJCQUFXLFNBQVM7Y0FBcEI7QUFDTyxpQkFBUSxRQUFlLGtCQUFTLE1BQU8sT0FBUSxRQUFnQjtBQUMzRCxxQkFBZTtBQUNiLHdCQUFFLGVBQWUsT0FBZTtBQUFVLDRCQUFDLENBQVE7QUFBQztBQUNqRCwyQkFBRSxrQkFBZSxPQUFlO0FBQVUsNEJBQUUsQ0FBQyxDQUFTO0FBQUM7QUFDMUQsd0JBQUUsZUFBZSxPQUFlO0FBQVUsNEJBQU0sU0FBbUI7QUFBQztBQUNqRSwyQkFBRSxrQkFBZSxPQUFlO0FBQVUsNEJBQU0sU0FBbUI7QUFBQztBQUNwRSwyQkFBRSxrQkFBZSxPQUFlO0FBQVUsNEJBQU0sU0FBUyxNQUFXLGNBQVMsTUFBUSxRQUFlLGlCQUFHLENBQUk7QUFBQztBQUN6Ryw4QkFBRSxxQkFBZSxPQUFlO0FBQVUsNEJBQUMsQ0FBTSxTQUFJLENBQU0sTUFBVyxjQUFTLE1BQVEsUUFBZSxrQkFBSSxDQUFJO0FBQUM7QUFDbkgsMEJBQUUsaUJBQWUsT0FBZTtBQUFVLDRCQUFNLFFBQWtCO0FBQUM7QUFDdEUsdUJBQUUsY0FBZSxPQUFlO0FBQVUsNEJBQU0sUUFBa0I7QUFBQztBQUN6RCxpQ0FBRSx3QkFBZSxPQUFlO0FBQVUsNEJBQU0sU0FBbUI7QUFBQztBQUN2RSw4QkFBRSxxQkFBZSxPQUFlO0FBQVUsNEJBQU0sU0FBbUI7QUFDaEY7QUFYdUI7QUFZbkIsb0JBQVEsUUFDbEI7QUFBQzs7dUJBQUE7O0FBTUQsMkJBQVcsbUJBQVE7Y0FBbkI7QUFBc0Msb0JBQUssS0FBVTtBQUFDO2NBQ3RELGFBQWlDO0FBQzFCLGlCQUFDLENBQU8sT0FBUTtBQUNkLHFCQUFRLE1BQWU7QUFDekIsaUJBQUMsQ0FBUSxRQUFVLFVBQVEsUUFBUTtBQUNsQyxrQkFBUSxVQUNoQjtBQUFDOzt1QkFOcUQ7O0FBTy9DLHVCQUFLLFFBQVosVUFBdUI7QUFDaEIsYUFBUSxRQUFVLFVBQUssS0FBVSxVQUFNLE9BQU0sS0FBUSxRQUFFO0FBQ2xELGtCQUNSO0FBQU0sZ0JBQUU7QUFDQSxrQkFDUjtBQUNKO0FBQUM7QUFDUyx1QkFBUyxZQUFuQixZQUF3QixDQUFDO0FBQ2YsdUJBQVMsWUFBbkIsWUFBd0IsQ0FBQztBQXJDbEIsYUFBYyxpQkFBNkI7QUFzQ3RELFlBQUM7QUFRRDs7QUFBbUMsOEJBQU87QUFHdEM7QUFDSSxxQkFBUTtBQUZGLGNBQUssUUFHZjtBQUFDO0FBQ00sNkJBQVEsV0FBZixVQUEwQztBQUNsQyxjQUFNLFFBQ2Q7QUFBQztBQUNELDJCQUFXLHlCQUFZO2NBQXZCO0FBQWtDLG9CQUFRO0FBQUM7O3VCQUFBOztBQUMvQyxZQUFDO0FBQUEsR0FFRDs7QUFBMEMscUNBQWE7QUFHbkQ7QUFDSSxxQkFBUTtBQUhMLGNBQUssUUFBZ0I7QUFDckIsY0FBUyxZQUdoQjtBQUFDO0FBQ00sb0NBQU8sVUFBZDtBQUFpQyxnQkFBbUI7QUFBQztBQUMzQyxvQ0FBUyxZQUFuQjtBQUE0QixjQUFVLFVBQUssS0FBaUI7QUFBQztBQUNuRCxvQ0FBUyxZQUFuQjtBQUE0QixjQUFVLFVBQUssS0FBaUI7QUFBQztBQUNyRCxvQ0FBUyxZQUFqQixVQUFnQztBQUN6QixhQUFDLENBQUssS0FBTyxPQUFRO0FBQ3hCLGFBQVcsVUFBTyxLQUFNLE1BQVcsV0FBSyxLQUFNLE9BQU0sS0FBWTtBQUM1RCxjQUFDLElBQUssSUFBSSxHQUFHLElBQVUsUUFBTyxRQUFLLEtBQUc7QUFDbEMsa0JBQVEsUUFDaEI7QUFDSjtBQUFDO0FBQ1Msb0NBQWEsZ0JBQXZCLFVBQWlDO0FBQVEsY0FBUSxVQUFTO0FBQUM7QUFDakQsb0NBQWEsZ0JBQXZCLFVBQWlDO0FBQVEsY0FBUSxVQUFVO0FBQUM7QUFDaEUsWUFBQztBQUFBLEdBQ0Q7O0FBQTJDLHNDQUFhO0FBQ3BEO0FBQ0kscUJBQ0o7QUFBQztBQUNNLHFDQUFPLFVBQWQ7QUFBaUMsZ0JBQW9CO0FBQUM7QUFDdEQsMkJBQVcsaUNBQVk7Y0FBdkI7QUFBa0Msb0JBQU87QUFBQzs7dUJBQUE7O0FBQ2hDLHFDQUFTLFlBQW5CO0FBQTJCLGFBQUssS0FBTyxPQUFLLEtBQU0sTUFBZTtBQUFDO0FBQ3RFLFlBQUM7QUFBQSxHQUNEOztBQUEyQyxzQ0FBYTtBQUlwRDtBQUNJLHFCQUNKO0FBQUM7QUFDTSxxQ0FBTyxVQUFkO0FBQWlDLGdCQUFvQjtBQUFDO0FBQzVDLHFDQUFTLFlBQW5CO0FBQ08sYUFBQyxDQUFLLEtBQVUsYUFBSSxDQUFLLEtBQU8sT0FBUTtBQUN2QyxjQUFNLE1BQWdCLGdCQUFLLEtBQVUsV0FBTSxLQUFTLFVBQU0sS0FDbEU7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQVMsU0FBVSxXQUFFLENBQVcsWUFBYTtBQUN0RCx3QkFBUyxTQUFTLFNBQWdCLGlCQUFFLENBQVMsVUFBTSxNQUFhO0FBQ2hFLHdCQUFTLFNBQVMsU0FBaUIsa0JBQUUsQ0FBUSxTQUFjLGNBQUU7QUFBb0IsWUFBQyxJQUE0QjtBQUFDLElBQW1CO0FBQ2xJLHdCQUFTLFNBQVMsU0FBa0IsbUJBQUksSUFBRTtBQUFvQixZQUFDLElBQTZCO0FBQUMsSUFBbUI7QUFDaEgsd0JBQVMsU0FBUyxTQUFrQixtQkFBRSxDQUFhLGNBQVksWUFBdUIsdUJBQUU7QUFBb0IsWUFBQyxJQUE2QjtBQUFDLElBQW1CLGlCOzs7Ozs7Ozs7Ozs7QUMzRzdJOztBQUczQjs7O0FBQXVDLGtDQUFJO0FBU3ZDLGdDQUF3QjtBQUNwQixxQkFBUTtBQUNKLGNBQVksY0FBTyxLQUFhLGFBQVU7QUFDMUMsY0FBWSxZQUFVLFlBQVM7QUFDL0IsY0FBYyxnQkFBMkIsU0FBYyxjQUMvRDtBQUFDO0FBQ00saUNBQU8sVUFBZDtBQUFrQyxnQkFBVTtBQUFDO0FBQzdDLDJCQUFXLDZCQUFNO2NBQWpCO0FBQXlDLG9CQUFLLEtBQWM7QUFBQzs7dUJBQUE7O0FBQzdELDJCQUFXLDZCQUFTO2NBQXBCO0FBQXdDLG9CQUFLLEtBQWlCO0FBQUM7O3VCQUFBOztBQUMvRCwyQkFBVyw2QkFBVTtjQUFyQjtBQUF5QyxvQkFBSyxLQUFrQjtBQUFDOzt1QkFBQTs7QUFDakUsMkJBQVcsNkJBQUs7Y0FBaEI7QUFBbUMsb0JBQUssS0FBVyxhQUFPLEtBQVcsYUFBTyxLQUFPLE9BQVE7QUFBQztjQUM1RixhQUE4QjtBQUFRLGtCQUFXLGFBQVU7QUFBQzs7dUJBRGdDOztBQUVyRixpQ0FBTSxTQUFiO0FBQ1EsY0FBZSxlQUN2QjtBQUFDO0FBQ00saUNBQVEsV0FBZjtBQUNRLGNBQWUsZUFDdkI7QUFBQztBQUNTLGlDQUFZLGVBQXRCLFVBQW1DO0FBQ3pCLGdCQUFnQix3QkFDMUI7QUFBQztBQUNTLGlDQUFjLGlCQUF4QixVQUF1QztBQUMvQixjQUFnQixrQkFDeEI7QUFBQztBQS9CYSx1QkFBaUIsb0JBQW9CO0FBZ0N2RCxZQUFDO0FBQUEsZTs7Ozs7Ozs7Ozs7QUNwQ2lEOztBQUNWOztBQUNKOztBQUVNO0FBQzFDO0FBQStDLGtDQUFRO0FBVW5ELGdDQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQVRYO0FBQ2IsY0FBZSxrQkFBa0I7QUFDakMsY0FBaUIsb0JBQWtCO0FBQ25DLGNBQWUsa0JBQWtCO0FBQ2pDLGNBQVcsY0FBa0I7QUFDN0IsY0FBVSxhQUFrQjtBQUM1QixjQUFjLGlCQUFhO0FBQzNCLGNBQU8sVUFBYztBQUNyQixjQUFPLFVBR2Q7QUFBQztBQUMwRTtBQUNwRSxpQ0FBTyxVQUFkO0FBQ1UsZ0JBQ1Y7QUFBQztBQUM4RDtBQUN4RCxpQ0FBZSxrQkFBdEIsVUFBeUM7QUFDckMsYUFBUSxPQUFPLEtBQWM7QUFDdkIsZ0JBQU8sU0FBYSxhQUFtQixtQkFBTyxLQUFVLFVBQU0sUUFDeEU7QUFBQztBQUNPLGlDQUFVLGFBQWxCO0FBQ0ksYUFBVyxVQUFNO0FBQ2QsYUFBSyxLQUFpQixpQkFBUSxRQUFtQixxQkFBTyxLQUFpQjtBQUN6RSxhQUFLLEtBQW1CLG1CQUFRLFFBQXFCLHVCQUFPLEtBQW1CO0FBQy9FLGFBQUssS0FBaUIsaUJBQVEsUUFBbUIscUJBQU8sS0FBaUI7QUFDekUsYUFBSyxLQUFhLGFBQVEsUUFBZSxpQkFBTyxLQUFhO0FBQzdELGFBQUssS0FBWSxZQUFRLFFBQWMsZ0JBQU8sS0FBWTtBQUMxRCxhQUFLLEtBQWUsaUJBQUssR0FBUSxRQUFrQixvQkFBTyxLQUFnQjtBQUMxRSxhQUFLLEtBQVMsU0FBUSxRQUFXLGFBQU0sTUFBTyxLQUFRLFVBQU87QUFDN0QsYUFBSyxLQUFTLFNBQVEsUUFBVyxhQUFNLE1BQU8sS0FBUSxVQUFPO0FBRTFELGdCQUNWO0FBQUM7QUFDRCxpQ0FBMEIsNkJBQTFCO0FBQXFDLGdCQUFPO0FBQUM7QUFDakQsWUFBQztBQUFBO21CQUFBO0FBQ21EOztBQUMxQyx3QkFBUyxTQUFTLFNBQU8sUUFBd0M7QUFDSztBQUM2QjtBQUN6RyxFQUEwQiwyQkFBNkIsNkJBQTJCLDJCQUN6RCx1QkFBc0Isc0JBQUUsRUFBTSxNQUFrQixrQkFBUyxTQUFHLEdBQVMsU0FBRSxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQU0sTUFBVyxXQUFZO0FBQ3hFO0FBQ2hFO0FBQW9CLFlBQUMsSUFBcUIsa0JBQU07QUFBQztBQUN1RTtBQUM1RztBQUVxRztBQUN0RyxrQ0FBUyxTQUFpQixpQkFBTyxRQUFFLFVBQUs7QUFBYSxZQUFDLElBQXFCLGtCQUFRO0FBQUcsSTs7Ozs7Ozs7OztBQ3REOUYsS0FBYTtBQUNMLGtCQUFJO0FBQ1QsYUFBRTtBQUNKLGFBQU8sTUFBTyxLQUFZLGNBQU8sS0FBSyxLQUFhLGVBQXNCO0FBQ3RFLGFBQUMsQ0FBSyxLQUFJLE1BQXNCO0FBQzdCLGdCQUNWO0FBR0o7QUFUdUI7QUFTaEIsS0FBc0I7QUFDckIsV0FBVztBQUNULGFBQUk7QUFDTixXQUFXO0FBQ1QsYUFBVTtBQUNBLHVCQUFJLElBQVksWUFBRSxFQUFVLFVBQUksSUFBTSxNQUFHLElBQU0sTUFBSztBQUM1RCxlQUFlLGVBQWEsYUFBSTtBQUMvQixnQkFBYztBQUNwQixVQUFVO0FBQ0wsZUFBRSxFQUFNLE1BQVEsUUFBTyxPQUFjLGNBQVMsU0FBSSxJQUFRLFFBQU07QUFDbkUsWUFBRSxFQUFNLE1BQWMsY0FBTSxNQUFJLElBQU0sTUFBTTtBQUV6QyxlQUFFLEVBQU0sTUFBVyxXQUFNLE1BQWlCLGlCQUFPLE9BQWdCO0FBQ2xFLGNBQUk7QUFDSCxlQUFJO0FBQ04sYUFBRSxFQUFNLE1BQWlCO0FBQ2pCLHFCQUFFLEVBQU0sTUFBaUI7QUFDMUIsb0JBQUUsRUFBTSxNQUFTLFNBQVEsUUFBTTtBQUNoQyxtQkFBRSxFQUFNLE1BQUksSUFBVyxXQUFJLElBQVcsV0FBTTtBQUM5QyxpQkFBRSxFQUFNLE1BQVcsV0FBTSxNQUFtQixtQkFBTyxPQUFnQjtBQUN2RSxhQUFFLEVBQU0sTUFBZSxlQUFNLE1BQXNCO0FBQ3JELFdBQUk7QUFDRjtBQUNFLGVBQWEsYUFBTSxNQUFxQjtBQUN0QztBQUNFLG1CQUFtQixtQkFBTyxPQUFJLElBQVEsUUFBSSxJQUFnQixnQkFBSSxJQUFpQixpQkFHN0Y7QUFKYztBQUZKO0FBdEJvQjtBQThCdkIsV0FBWSxjQUFzQixtQjs7Ozs7Ozs7Ozs7QUN2Q3BDOztLQUF1Qjs7QUFDTzs7QUFDRDs7QUFDUDs7QUFFc0I7O0FBR25EOzs7OztBQUE0Qix1QkFBVztBQVVuQyxxQkFBK0IsU0FBNkIsaUJBQWlCO0FBQWpFLDhCQUFtQjtBQUFuQix1QkFBbUI7O0FBQUUsc0NBQTJCO0FBQTNCLCtCQUEyQjs7QUFBRSwwQkFBZTtBQUFmLG1CQUFlOztBQUN6RSwyQkFBZTtBQVBaLGNBQVUsYUFBNEY7QUFDckcsY0FBYSxnQkFBaUI7QUFPL0IsYUFBSyxLQUFFO0FBQ0Ysa0JBQUksTUFDWjtBQUFDO0FBQ0UsYUFBaUIsaUJBQUU7QUFDZCxrQkFBZ0Isa0JBQ3hCO0FBQUM7QUFDRSxhQUFDLE9BQVMsT0FBaUIsYUFBQyxNQUFNLElBQVMsTUFBc0M7QUFDaEYsY0FBTyxPQUNmO0FBQUM7QUFuQkQsMkJBQWtCLFFBQU87Y0FBekI7QUFBNEMsb0JBQVUsdUJBQWM7QUFBQztjQUNyRSxhQUF1QztBQUFhLG9DQUFZLGNBQVU7QUFBQzs7dUJBRE47O0FBb0JyRSwyQkFBVyxrQkFBcUI7Y0FBaEM7QUFBMkMsb0JBQUssS0FBaUIsaUJBQUssS0FBSSxJQUFpQixrQkFBTSxLQUFJLElBQVcsV0FBWTtBQUFDOzt1QkFBQTs7QUFDN0gsMkJBQVcsa0JBQWlCO2NBQTVCO0FBQXVDLG9CQUFLLEtBQWlCLGlCQUFLLEtBQUksSUFBaUIsa0JBQU0sS0FBSSxJQUFXLFdBQVE7QUFBQzs7dUJBQUE7O0FBQ3JILDJCQUFXLGtCQUFpQjtjQUE1QjtBQUF1QyxvQkFBSyxLQUFpQixpQkFBSyxLQUFJLElBQWlCLGtCQUFNLEtBQUksSUFBVyxXQUFRO0FBQUM7O3VCQUFBOztBQUM3RyxzQkFBZ0IsbUJBQXhCLFVBQXFDLE1BQWE7QUFDOUMsYUFBTyxNQUFNO0FBQ1YsYUFBTSxNQUFJLE1BQVE7QUFDbEIsYUFBSyxLQUFJLE9BQU8sTUFBTztBQUNwQixnQkFDVjtBQUFDO0FBQ0QsMkJBQVcsa0JBQUc7Y0FBZDtBQUE4QixvQkFBVSx1QkFBVztBQUFDO2NBQ3BELGFBQXlCO0FBQ2pCLGtCQUFZLFlBQU0sT0FBTSxLQUNoQztBQUFDOzt1QkFIbUQ7O0FBSTdDLHNCQUFNLFNBQWIsVUFBaUM7QUFBbkIsOEJBQW1CO0FBQW5CLHVCQUFtQjs7QUFDN0IsYUFBUSxPQUFRO0FBQ2IsYUFBUSxXQUFJLE9BQWMsV0FBYSxVQUFFO0FBQ2pDLHVCQUFXLFNBQWUsZUFDckM7QUFBQztBQUNFLGFBQVMsU0FBRTtBQUNOLGtCQUFnQixrQkFDeEI7QUFBQztBQUNNLG1CQUFPLEtBQWlCO0FBQzVCLGFBQUMsQ0FBUyxTQUFRO0FBQ2QsaUJBQVUsWUFBTyxLQUFlO0FBQ25DLGNBQWdCO0FBQ2hCLGNBQVcsV0FBSyxLQUFLLE1BQzdCO0FBQUM7QUFDTSxzQkFBcUIsd0JBQTVCLFVBQW9ELFVBQTZCO0FBQXBELCtCQUF1QjtBQUF2Qix3QkFBdUI7O0FBQUUsc0NBQTJCO0FBQTNCLCtCQUEyQjs7QUFDMUUsYUFBaUIsaUJBQUU7QUFDZCxrQkFBZ0Isa0JBQ3hCO0FBQUM7QUFDRCxnQkFBSyxVQUFzQixpQ0FDL0I7QUFBQztBQUNTLHNCQUFZLGVBQXRCO0FBQ0ksZ0JBQUssVUFBYSxrQkFBRztBQUNqQixjQUNSO0FBQUM7QUFDUyxzQkFBYSxnQkFBdkIsVUFBb0M7QUFBVSxnQkFBUyxpQkFBUTtBQUFDO0FBQ3RELHNCQUFXLGNBQXJCO0FBQXdDLGdCQUFXLHVCQUFPO0FBQUM7QUFDakQsc0JBQWdCLG1CQUExQjtBQUNJLGFBQVEsT0FBUTtBQUNaLGNBQWdCLGtCQUFLLEdBQVcsV0FBSTtBQUNwQyxjQUFjLG1CQUFjLFNBQUM7QUFBa0Isa0JBQW1CLGtCQUFPLE9BQUssS0FBYztBQUFHLFVBQTVFO0FBQ25CLGNBQWMsbUJBQWMsU0FBQztBQUFrQixrQkFBbUIsa0JBQU8sT0FBSyxLQUFjO0FBQUcsVUFBNUU7QUFDbkIsY0FBYSxrQkFBYyxTQUFDO0FBQWtCLGtCQUFtQixrQkFBTyxPQUFLLEtBQWE7QUFBRyxVQUEzRTtBQUNsQixjQUFlLG9CQUFjLFNBQUM7QUFBa0Isa0JBQW1CLGtCQUFPLE9BQUssS0FBZTtBQUFHLFVBQTdFO0FBQ3BCLGNBQVcsZ0JBQWMsU0FBQztBQUFrQixrQkFBbUIsa0JBQU8sT0FBSyxLQUFnQjtBQUFHLFVBQTlFO0FBQ2hCLGNBQVEsYUFBYyxTQUFDO0FBQWtCLGtCQUFtQixrQkFBTyxPQUFLLEtBQVE7QUFDeEYsVUFEcUI7QUFDcEI7QUFDUyxzQkFBa0IscUJBQTVCLFVBQWdELFVBQXFCO0FBQzdELGNBQXVCO0FBQzNCLGdCQUFLLFVBQW1CLDhCQUFTLFVBQVk7QUFDMUMsYUFBQyxDQUFLLEtBQWMsY0FBSyxLQUNoQztBQUFDO0FBQ0Qsc0JBQXFCLHdCQUFyQixVQUFpQyxNQUFtQjtBQUNoRCxnQkFBSyxVQUFzQixpQ0FBSyxNQUFZO0FBQ3hDLGNBQ1I7QUFBQztBQUNTLHNCQUF1QiwwQkFBakM7QUFDUSxjQUNSO0FBQUM7QUFDUyxzQkFBMEIsNkJBQXBDO0FBQ1EsY0FDUjtBQUFDO0FBQ08sc0JBQVksZUFBcEI7QUFDTyxhQUFDLENBQUssS0FBaUIsaUJBQVE7QUFDOUIsY0FBdUI7QUFDekIsWUFBVSxVQUFLLEtBQWtCO0FBQ2hDLGFBQUMsQ0FBSyxLQUFlLGVBQUU7QUFDbEIsa0JBQ1I7QUFBQztBQUNHLGNBQWMsZ0JBQVM7QUFDekIsWUFBYyxjQUFLLE1BQU0sS0FDL0I7QUFBQztBQUNPLHNCQUFtQixzQkFBM0I7QUFDUSxjQUFnQixnQkFBSyxLQUFrQixvQkFDL0M7QUFBQztBQUNPLHNCQUEwQiw2QkFBbEM7QUFDSSxhQUFhLFlBQU8sS0FBWSxjQUFPLEtBQVksWUFBVSxZQUFNO0FBQy9ELGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBWSxVQUFPLFFBQUssS0FBRztBQUN4QyxpQkFBSyxJQUFZLFVBQUk7QUFDbEIsaUJBQUUsRUFBUyxTQUFFLEVBQ3BCO0FBQ0o7QUFBQztBQUNMLFlBQUM7QUFBQSx3Qjs7Ozs7OztBQ2pIRCxpRDs7Ozs7Ozs7Ozs7QUNBTzs7S0FBdUI7O0FBQ3FCOztBQUluRDs7Ozs7QUFBaUMsNEJBQWdCO0FBRTdDLDBCQUFrQyxNQUErQjtBQUM3RCwyQkFBVSxNQUFZO0FBRFAsY0FBSSxPQUFXO0FBQVMsY0FBUSxXQUFjO0FBRXpELGNBQVUsWUFBSyxHQUFXLFdBQUssS0FDdkM7QUFBQztBQUNTLDJCQUFnQixtQkFBMUI7QUFDUSxjQUFVLFVBQUssS0FDdkI7QUFBQztBQUNNLDJCQUFhLGdCQUFwQixVQUF1QixJQUFLO0FBQ3BCLGNBQUMsSUFBSyxJQUFJLEdBQUcsSUFBSyxHQUFPLFFBQUssS0FBRztBQUNqQyxpQkFBTyxNQUFLLEdBQUk7QUFDaEIsaUJBQVMsUUFBTSxJQUFVO0FBQ3RCLGlCQUFNLFNBQVksU0FBSSxJQUFLLE9BQ2xDO0FBQ0o7QUFBQztBQUNMLFlBQUM7QUFFRDs7QUFBMEIscUJBQVM7QUFFL0IsbUJBQTZCO0FBQWpCLDJCQUFpQjtBQUFqQixvQkFBaUI7O0FBQ3pCLDJCQUFZO0FBQ1IsY0FBSyxPQUFLLEdBQVcsV0FBSztBQUMxQixjQUNSO0FBQUM7QUFDUyxvQkFBUyxZQUFuQixVQUEwQztBQUE0QixnQkFBQyxJQUFlLFlBQUssTUFBYTtBQUFDO0FBQy9GLG9CQUFVLGFBQXBCLFlBQXlCLENBQUM7QUFDaEIsb0JBQVksZUFBdEIsVUFBb0M7QUFDNUIsY0FBSyxLQUFNLFFBQUksSUFBUSxRQUFPLE9BQ3RDO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFDUyx3QkFBUyxTQUFzQixzQkFBTyxRQUFFO0FBQW9CLFlBQUMsSUFBWTtBQUFHLEk7Ozs7Ozs7Ozs7QUNwQy9FLEtBQWMsa0NBQUcsRUFBTSxNQUFPO0FBQVcsWUFBSyxPQUEraVksNGlZOzs7Ozs7Ozs7OztBQ0E3bFk7O0tBR1A7Ozs7O0FBRUksc0NBQXlDO0FBQXRCLGNBQVEsV0FBYztBQUNyQyxhQUFRLE9BQVE7QUFDUixrQkFBMEIsNEJBQUc7QUFBa0Isa0JBQXdCO0FBQUU7QUFDekUsa0JBQTJCLDZCQUFHO0FBQWtCLGtCQUF5QjtBQUFFO0FBQy9FLGNBQVUsWUFBSyxHQUFXLFdBQUssS0FBUyxTQUFVO0FBQ2xELGNBQWMsZ0JBQUssR0FBVyxXQUFLLEtBQVMsU0FBYztBQUMxRCxjQUFTLFdBQUssR0FBbUI7QUFDakMsY0FBYSxrQkFBa0IsYUFBQztBQUFrQixrQkFBaUIsZ0JBQU8sT0FBSyxLQUFjLGNBQUssS0FBUyxTQUFVO0FBQUcsVUFBdEc7QUFDbEIsY0FBZSxpQkFBSyxHQUFXLFdBQUssS0FBYyxjQUFLLEtBQVMsU0FBZTtBQUMvRSxjQUFTLFNBQWEsZUFBTyxLQUFXO0FBQ3hDLGNBQVMsU0FBaUIsbUJBQU8sS0FBZTtBQUNoRCxjQUFTLFNBQVksY0FBTyxLQUFVO0FBQ3RDLGNBQVMsU0FBZ0Isa0JBQU8sS0FBYztBQUM5QyxjQUFTLFNBQWtCLG9CQUFPLEtBQWdCO0FBQ2xELGNBQVMsU0FBa0Isb0JBQUc7QUFBa0Isa0JBQW1CO0FBQzNFO0FBQUM7QUFDUyx1Q0FBYyxpQkFBeEIsWUFBOEIsQ0FBQztBQUNyQix1Q0FBbUIsc0JBQTdCO0FBQ1EsY0FBVSxVQUFLLEtBQVMsU0FDaEM7QUFBQztBQUNTLHVDQUFvQix1QkFBOUI7QUFDUSxjQUFjLGNBQUssS0FBUyxTQUFjO0FBQzFDLGNBQWUsZUFBSyxLQUFjLGNBQUssS0FBUyxTQUN4RDtBQUFDO0FBQ08sdUNBQWEsZ0JBQXJCLFVBQW9DO0FBQzdCLGFBQU8sU0FBSyxHQUFPLE9BQUk7QUFDdkIsYUFBQyxDQUFLLEtBQVMsU0FBUyxTQUFPLE9BQUk7QUFDdEMsYUFBTyxNQUFPLEtBQVMsU0FBUSxRQUFRO0FBQ3BDLGFBQUMsQ0FBSyxLQUFPLE9BQUk7QUFDZCxnQkFBTyxTQUFNLElBQVMsU0FBTyxTQUN2QztBQUFDO0FBQ0wsWUFBQztBQUFBLEs7Ozs7Ozs7Ozs7O0FDcENNOztLQUF1Qjs7QUFJOUI7Ozs7O0FBQXlDLG9DQUF1QjtBQUk1RCxrQ0FBcUM7QUFDakMsMkJBQWdCO0FBREQsY0FBUSxXQUFVO0FBSDdCLGNBQVUsYUFBa0I7QUFLaEMsYUFBUSxPQUFRO0FBQ1Isa0JBQXFCLHVCQUFHO0FBQWtCLGtCQUFtQjtBQUFFO0FBQy9ELGtCQUF1Qix5QkFBRztBQUFrQixrQkFBcUI7QUFBRTtBQUNuRSxrQkFBc0Isd0JBQUc7QUFBa0Isa0JBQW9CO0FBQUU7QUFDakUsa0JBQXFCLHVCQUFHO0FBQWtCLGtCQUEwQjtBQUFFO0FBQ3RFLGtCQUE0Qiw4QkFBRztBQUFrQixrQkFBMEI7QUFBRTtBQUNqRixjQUFRLFVBQUssR0FBVyxXQUFJO0FBQzVCLGNBQVEsVUFBTyxLQUFpQjtBQUNoQyxjQUFVLFlBQUssR0FBVyxXQUFLLEtBQVMsU0FBVTtBQUNsRCxjQUFRLGFBQWtCLGFBQUM7QUFBa0Isa0JBQVcsVUFBTyxPQUFLLEtBQVMsU0FBWTtBQUFHLFVBQS9FO0FBQ2IsY0FBUyxTQUFLLEtBQVMsU0FBUztBQUNoQyxjQUFRLFFBQVUsVUFBQyxVQUFrQjtBQUNqQyxrQkFBWSxZQUNwQjtBQUFHO0FBQ0MsY0FBVSxVQUFVLFVBQUMsVUFBa0I7QUFDbkMsa0JBQWMsY0FDdEI7QUFBRztBQUNDLGNBQVMsU0FBVyxhQUFPLEtBQVM7QUFDcEMsY0FBUyxTQUFhLGVBQU8sS0FBVztBQUN4QyxjQUFTLFNBQVcsYUFBTyxLQUFTO0FBQ3BDLGNBQVMsU0FBeUIsMkJBQU8sS0FDakQ7QUFBQztBQUNTLG1DQUFjLGlCQUF4QjtBQUNRLGNBQVEsUUFBSyxLQUFVLFlBQy9CO0FBQUM7QUFDUyxtQ0FBYyxpQkFBeEI7QUFDTyxhQUFLLEtBQVksWUFBUTtBQUN4QixjQUFXLFdBQUssS0FBUyxTQUNqQztBQUFDO0FBQ1MsbUNBQWdCLG1CQUExQjtBQUNPLGFBQUssS0FBWSxZQUFRO0FBQ3hCLGNBQVUsVUFBSyxLQUFTLFNBQ2hDO0FBQUM7QUFDUyxtQ0FBbUIsc0JBQTdCO0FBQ1EsY0FBVSxVQUFLLEtBQVMsU0FDaEM7QUFBQztBQUNTLG1DQUFxQix3QkFBL0I7QUFDUSxjQUFRLFFBQUssS0FBVSxZQUMvQjtBQUFDO0FBQ1MsbUNBQWUsa0JBQXpCO0FBQ1EsY0FBUyxTQUFLLEtBQVMsU0FDL0I7QUFBQztBQUNTLG1DQUFhLGdCQUF2QjtBQUF1QyxnQkFBRyxHQUFXLFdBQUssS0FBUyxTQUFTO0FBQUM7QUFDbkUsbUNBQVUsYUFBcEIsVUFBa0M7QUFDMUIsY0FBUSxRQUNoQjtBQUFDO0FBQ1MsbUNBQVcsY0FBckIsVUFBbUM7QUFDM0IsY0FBVyxhQUFRO0FBQ25CLGNBQVMsU0FBTSxRQUFZO0FBQzNCLGNBQVcsYUFDbkI7QUFBQztBQUNTLG1DQUFhLGdCQUF2QixVQUFxQztBQUM3QixjQUFXLGFBQVE7QUFDbkIsY0FBUyxTQUFRLFVBQVk7QUFDN0IsY0FBVyxhQUNuQjtBQUFDO0FBQ1MsbUNBQUssUUFBZjtBQUNVLGdCQUFLLEtBQVMsU0FBYSxlQUFHLENBQUUsSUFBTyxLQUFTLFNBQWEsZUFBSSxJQUFPLE9BQ2xGO0FBQUM7QUFDUyxtQ0FBcUIsd0JBQS9CLFVBQWtDLElBQUs7QUFDbkMsYUFBTyxNQUFLLEdBQUk7QUFDYixhQUFJLElBQVMsWUFBWSxTQUFJLElBQUssT0FBTTtBQUN4QyxlQUFLLEdBQUcsR0FBTyxTQUFNO0FBQ3JCLGFBQUksSUFBUyxZQUFZLFNBQUksSUFBSyxPQUN6QztBQUFDO0FBQ0wsWUFBQztBQUFBLDRDOzs7Ozs7Ozs7Ozs7QUMzRU07O0tBQXVCOztBQUs5Qjs7Ozs7QUFBbUQsOENBQW1CO0FBRWxFLDRDQUE4QjtBQUMxQiwyQkFBZ0I7QUFDaEIsYUFBUSxPQUFRO0FBRVosY0FBZSxvQkFBYyxTQUFDO0FBQWtCLGtCQUFXLFVBQU8sT0FBSyxLQUFrQjtBQUFHLFVBQXhFO0FBQ3BCLGNBQWlCLG1CQUFLLEdBQWdCLGdCQUE0QixLQUFVLFNBQWlCO0FBQ2pFLGtCQUF1Qix5QkFBRztBQUFrQixrQkFBaUIsaUJBQTRCLEtBQVUsU0FBa0I7QUFBRTtBQUNuSixjQUFTLFNBQWtCLG9CQUFPLEtBQWdCO0FBQ2xELGNBQVMsU0FBb0Isc0JBQU8sS0FDNUM7QUFBQztBQUNELDJCQUFjLHlDQUFlO2NBQTdCO0FBQ1Usb0JBQTBCLEtBQVUsU0FDOUM7QUFBQzs7dUJBQUE7O0FBQ0wsWUFBQztBQUNEOztBQUFxRCxnREFBNkI7QUFFOUUsOENBQThCO0FBQzFCLDJCQUFnQjtBQUNaLGNBQVEsVUFBSyxHQUFXLFdBQUssS0FBVztBQUN4QyxjQUFTLFNBQVcsYUFBTyxLQUFTO0FBQ3BDLGNBQVMsU0FBaUIsbUJBQU8sS0FBZTtBQUNwRCxhQUFRLE9BQVE7QUFDVyxjQUFVLFNBQXdCLDBCQUFHO0FBQWtCLGtCQUFzQjtBQUM1RztBQUFDO0FBQ1MsK0NBQWlCLG9CQUEzQjtBQUNRLGNBQVMsU0FBVyxhQUFLLEdBQVcsV0FBSyxLQUNqRDtBQUFDO0FBQ0QsMkJBQWMsMkNBQVE7Y0FBdEI7QUFDSSxpQkFBWSxXQUE4QixLQUFVLFNBQVU7QUFDeEQsb0JBQVMsV0FBSSxJQUFPLE1BQVksUUFBaEIsR0FBc0IsTUFDaEQ7QUFBQzs7dUJBQUE7O0FBQ08sK0NBQWEsZ0JBQXJCLFVBQXdCLElBQUs7QUFDekIsYUFBTyxNQUFLLEdBQUk7QUFDYixhQUFJLElBQVMsWUFBWSxTQUFJLElBQUssT0FBTTtBQUN4QyxlQUFLLEdBQUcsR0FBTyxTQUFNO0FBQ3JCLGFBQUksSUFBUyxZQUFZLFNBQUksSUFBSyxPQUN6QztBQUFDO0FBQ0wsWUFBQztBQUFBLGtDOzs7Ozs7Ozs7Ozs7QUM1Q007O0tBQXVCOztBQUN5Qzs7QUFDL0I7O0FBQ1U7O0FBQ1E7Ozs7QUFHMUQ7QUFBMEMsNENBQStCO0FBQ3JFLDBDQUE4QjtBQUMxQiwyQkFDSjtBQUFDO0FBQ1MsMkNBQWEsZ0JBQXZCO0FBQ1UsZ0JBQUssS0FBUyxTQUFNLFFBQUssR0FBZ0IsZ0JBQUssS0FBUyxTQUFPLFNBQUssR0FDN0U7QUFBQztBQUNTLDJDQUFVLGFBQXBCLFVBQWtDO0FBQzNCLGFBQVUsVUFBRTtBQUNQLGtCQUFRLFFBQUcsR0FBTyxPQUMxQjtBQUFNLGdCQUFFO0FBQ0Esa0JBQVEsUUFDaEI7QUFDSjtBQUFDO0FBQ0wsWUFBQztBQUNEOztBQUFzQyxpQ0FBcUI7QUFDdkQsK0JBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRTNCLGFBQStCLDRCQUNuQztBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQVcsWUFBRTtBQUFvQixZQUFDLElBQW9CLGlCQUFNO0FBQUc7QUFDekYsa0NBQVMsU0FBaUIsaUJBQVcsWUFBRSxVQUFLO0FBQU8sU0FBSyxJQUFHLElBQW9CLGlCQUFPLE1BQUUsRUFBUSxVQUFrQixpQ0FBZ0IsZUFBTyxPQUFJO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDOUJ2SDs7QUFDVTs7QUFDTTs7QUFHeEQ7OztBQUFxQyxnQ0FBb0I7QUFDckQsOEJBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRUosNkNBQzNCO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFzQixzQkFBVSxXQUFFO0FBQW9CLFlBQUMsSUFBbUIsZ0JBQU07QUFBRztBQUN2RixrQ0FBUyxTQUFpQixpQkFBVSxXQUFFLFVBQUs7QUFBYSxZQUFDLElBQW1CLGdCQUFRO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDYjVDOztBQUNsQjs7QUFDVTs7QUFHbEQ7OztBQUFzQyxpQ0FBcUI7QUFDdkQsK0JBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRU0sa0VBQ3JDO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFzQixzQkFBVyxZQUFFO0FBQW9CLFlBQUMsSUFBb0IsaUJBQU07QUFBRztBQUN6RixrQ0FBUyxTQUFpQixpQkFBVyxZQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBb0IsaUJBQU8sTUFBRSxFQUFRLFVBQWtCLGlDQUFnQixlQUFPLE9BQUk7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUNieEo7O0tBQXVCOztBQUNVOztBQUNVOztBQUNBOztBQUlsRDs7Ozs7QUFBNkMsd0NBQW1CO0FBRTVELHNDQUE4QjtBQUMxQiwyQkFBZ0I7QUFDaEIsYUFBUSxPQUFRO0FBQ1osY0FBYyxnQkFBSyxHQUFXLFdBQUk7QUFDbEMsY0FBTyxZQUFjLFNBQUM7QUFBa0Isa0JBQWlCLGdCQUFPLE9BQXlCLEtBQVUsU0FBZTtBQUFHLFVBQXpHO0FBQ1osY0FBVyxhQUFLLEdBQVcsV0FBUTtBQUNuQyxjQUFTLFNBQVUsWUFBTyxLQUFRO0FBQ2xDLGNBQVMsU0FBYyxnQkFBTyxLQUFZO0FBRXRCLGNBQVUsU0FBMkIsNkJBQUc7QUFBa0Isa0JBQWtCO0FBQUU7QUFDbEcsY0FBUyxTQUFZLGNBQUcsVUFBYyxNQUFPO0FBQUksaUJBQU8sTUFBUSxNQUFPLFVBQVMsTUFBWSxXQUFLLEtBQVMsU0FBTztBQUN6SDtBQUFDO0FBQ08sdUNBQVEsV0FBaEIsVUFBeUI7QUFDbEIsYUFBQyxDQUFPLE9BQWUsZUFBUTtBQUMvQixhQUFDLENBQUksT0FBSSxDQUFJLElBQU0sU0FBTyxJQUFNLE1BQU8sU0FBSyxHQUFRO0FBQy9CLGNBQVUsU0FBUyxTQUFJLElBQU0sTUFDekQ7QUFBQztBQUNPLHVDQUFhLGdCQUFyQjtBQUNRLGNBQWMsY0FBSyxLQUFnQixrQkFBTTtBQUN6QyxjQUFXLFdBQ25CO0FBQUM7QUFDTCxZQUFDO0FBQ0Q7O0FBQWtDLDZCQUFpQjtBQUMvQywyQkFBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFFM0IsYUFBMkIsd0JBQy9CO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFzQixzQkFBTyxRQUFFO0FBQW9CLFlBQUMsSUFBZ0IsYUFBTTtBQUFHO0FBQ2pGLGtDQUFTLFNBQWlCLGlCQUFPLFFBQUUsVUFBSztBQUFhLFlBQUMsSUFBZ0IsYUFBUTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ3ZDeEQ7O0FBQ1U7O0FBQ007O0FBR3hEOzs7QUFBa0MsNkJBQWlCO0FBQy9DLDJCQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUVBLHFEQUMvQjtBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQU8sUUFBRTtBQUFvQixZQUFDLElBQWdCLGFBQU07QUFBRztBQUNqRixrQ0FBUyxTQUFpQixpQkFBTyxRQUFFLFVBQUs7QUFBYSxZQUFDLElBQWdCLGFBQVE7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUNiekY7O0tBQXVCOztBQUNxRDs7QUFDbkM7O0FBQ1I7O0FBR3hDOzs7OztBQUErQiwwQkFBYztBQUd6Qyx3QkFBNEIsTUFBcUIsTUFBeUIsVUFBbUIsTUFBWTtBQUNyRywyQkFBVSxNQUFNLE1BQVUsVUFBTSxNQUFTO0FBRDFCLGNBQUksT0FBSztBQUFTLGNBQUksT0FBUTtBQUFTLGNBQVEsV0FBUTtBQUZsRSxjQUFlLGtCQUFTO0FBSXhCLGNBQVEsVUFBSyxHQUFXLFdBQUssS0FBUTtBQUN6QyxhQUFRLE9BQVE7QUFDWixjQUFRLFFBQVUsVUFBQyxVQUFrQjtBQUNsQyxpQkFBSyxLQUFpQixpQkFBTTtBQUMzQixrQkFBTSxRQUNkO0FBQ0o7QUFBQztBQUNTLHlCQUFjLGlCQUF4QjtBQUNRLGNBQWdCLGtCQUFRO0FBQ3hCLGNBQVEsUUFBSyxLQUFRO0FBQ3JCLGNBQWdCLGtCQUN4QjtBQUFDO0FBQ0wsWUFBQztBQUNEOztBQUFvQywrQkFBbUI7QUFDbkQsNkJBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRUosNkNBQzNCO0FBQUM7QUFDUyw4QkFBZSxrQkFBekIsVUFBbUMsTUFBYyxNQUFrQixVQUFZO0FBQ3JFLGdCQUFDLElBQWEsVUFBSyxNQUFNLE1BQVUsVUFBTSxNQUNuRDtBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQVMsVUFBRTtBQUFvQixZQUFDLElBQWtCLGVBQU07QUFBRztBQUNyRixrQ0FBUyxTQUFpQixpQkFBUyxVQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBa0IsZUFBTyxNQUFFLEVBQUssT0FBRyxDQUFRLFNBQVcsU0FBRSxFQUFRLFVBQUcsQ0FBVyxZQUFZLFlBQWMsWUFBTyxPQUFJO0FBQUcsSTs7Ozs7Ozs7Ozs7O0FDbkN4SDs7QUFDOUI7O0FBQ1U7O0FBR2xEOzs7QUFBNEMsdUNBQTJCO0FBQ25FLHFDQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUVKLDZDQUMzQjtBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQWlCLGtCQUFFO0FBQW9CLFlBQUMsSUFBMEIsdUJBQU07QUFBRztBQUVyRyxrQ0FBUyxTQUFpQixpQkFBaUIsa0JBQUUsVUFBSztBQUFPLFNBQUssSUFBRyxJQUEwQix1QkFBTyxNQUFFLEVBQVEsVUFBRyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUssR0FBRSxFQUFLLE9BQUcsQ0FBUSxTQUFXLFNBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQU8sT0FBSTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ2Q3UDs7S0FBdUI7O0FBQ1U7O0FBQ1U7O0FBQ0Y7O0FBTWhEOzs7OztBQUFzRCxpREFBbUI7QUFHckUsK0NBQThCO0FBQzFCLDJCQUFnQjtBQUNaLGNBQVMsV0FBSyxHQUFXLFdBQUk7QUFDN0IsY0FBTyxZQUFrQixhQUFDO0FBQ3RCLGtCQUFZO0FBQU8sb0JBQTZCLEtBQVUsU0FDbEU7QUFBQyxVQUZlLEVBRVA7QUFDTCxjQUFZLGlCQUFrQixhQUFDO0FBQ3pCLG9CQUF1QyxLQUFVLFNBQWlCLG1CQUFXLFdBQ3ZGO0FBQUMsVUFGb0IsRUFFWjtBQUNMLGNBQVMsU0FBVSxZQUFPLEtBQVE7QUFDdEMsYUFBUSxPQUFRO0FBQ1osY0FBYyxnQkFBRztBQUFrQixrQkFBVztBQUFDO0FBQy9DLGNBQWlCLG1CQUFHLFVBQWM7QUFBUSxrQkFBVSxVQUFRO0FBQUM7QUFDN0QsY0FBUyxTQUFpQixtQkFBTyxLQUFlO0FBQ2hELGNBQVMsU0FBb0Isc0JBQU8sS0FBa0I7QUFDdEQsY0FBUyxTQUFlLGlCQUFPLEtBQWE7QUFDcEIsY0FBVSxTQUF3QiwwQkFBRztBQUFrQixrQkFBc0I7QUFBRTtBQUMvRSxjQUFVLFNBQXVCLHlCQUFHO0FBQWtCLGtCQUFvQjtBQUFFO0FBQzVFLGNBQVUsU0FBbUIscUJBQUc7QUFBa0Isa0JBQWtCO0FBQ3BHO0FBQUM7QUFDUyxnREFBYSxnQkFBdkI7QUFDMkI7QUFDdkIsYUFBUSxPQUErQixLQUFVLFNBQXlCO0FBQzFFLGFBQVcsVUFBK0IsS0FBVSxTQUFTO0FBQzFELGFBQUssUUFBUSxLQUFPLFNBQUksS0FBVyxXQUFXLFFBQU8sU0FBSyxHQUFLLEtBQ3RFO0FBQUM7QUFDUyxnREFBZSxrQkFBekI7QUFDSSxhQUFRLE9BQStCLEtBQVUsU0FBYTtBQUMxRCxjQUNSO0FBQUM7QUFDUyxnREFBaUIsb0JBQTNCO0FBQ1EsY0FBUyxTQUFLLEtBQVcsYUFDakM7QUFBQztBQUNTLGdEQUFNLFNBQWhCO0FBQ2dDLGNBQVUsU0FDMUM7QUFBQztBQUNTLGdEQUFTLFlBQW5CLFVBQThDO0FBQzFDLGFBQVEsT0FBK0IsS0FBVSxTQUFtQjtBQUNwRSxhQUFTLFFBQU8sS0FBUSxRQUFNO0FBQzNCLGFBQU0sUUFBRyxDQUFHLEdBQUU7QUFDZSxrQkFBVSxTQUFVLFVBQ3BEO0FBQ0o7QUFBQztBQUNMLFlBQUM7QUFFRDs7QUFBMkMsc0NBQTBCO0FBQ2pFLG9DQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUUzQixhQUFvQyxpQ0FDeEM7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUVTLHdCQUFTLFNBQXNCLHNCQUFnQixpQkFBRTtBQUFvQixZQUFDLElBQXlCLHNCQUFNO0FBQUc7QUFFbkcsa0NBQVMsU0FBaUIsaUJBQWdCLGlCQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBeUIsc0JBQU8sTUFBRSxFQUFRLFVBQUcsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFLLEdBQUUsRUFBUyxXQUFLLEVBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQUUsRUFBVSxVQUFhLFlBQU8sT0FBSTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ2xFOU87O0tBQXVCOztBQUMyRDs7QUFDekM7O0FBRVI7O0FBR3hDOzs7OztBQUFzQyxpQ0FBcUI7QUFHdkQsK0JBQW1DLE1BQXNCO0FBQTdDLDJCQUF1QjtBQUF2QixvQkFBdUI7O0FBQUUsNEJBQW9CO0FBQXBCLHFCQUFvQjs7QUFDckQsMkJBQVUsTUFBUztBQURKLGNBQUksT0FBWTtBQUYzQixjQUFpQixvQkFBUztBQUkxQixjQUFRLFVBQUssR0FBVyxXQUFLLEtBQVE7QUFDekMsYUFBUSxPQUFRO0FBQ1osY0FBUSxRQUFVLFVBQUMsVUFBa0I7QUFDbEMsaUJBQUMsQ0FBSyxLQUFtQixtQkFBRTtBQUN0QixzQkFBTSxRQUNkO0FBQ0o7QUFDSjtBQUFDO0FBQ0QsZ0NBQWMsaUJBQWQsVUFBNEI7QUFDcEIsY0FBa0Isb0JBQVE7QUFDMUIsY0FBUSxRQUFXO0FBQ25CLGNBQWtCLG9CQUMxQjtBQUFDO0FBQ0wsWUFBQztBQUVEOztBQUFxRCxnREFBbUI7QUFFcEUsOENBQThCO0FBQzFCLDJCQUFnQjtBQUNaLGNBQU8sU0FBSyxHQUFnQixnQkFBaUMsS0FBVSxTQUFZO0FBQ25GLGNBQVMsU0FBVSxZQUFPLEtBQVE7QUFDbEMsY0FBcUI7QUFDekIsYUFBUSxPQUFRO0FBQ2dCLGNBQVUsU0FBd0IsMEJBQUc7QUFBa0Isa0JBQXNCO0FBQ2pIO0FBQUM7QUFDUywrQ0FBaUIsb0JBQTNCO0FBQ1EsY0FBTyxPQUFpQyxLQUFVLFNBQzFEO0FBQUM7QUFDTCxZQUFDO0FBRUQ7O0FBQTBDLHFDQUF5QjtBQUMvRCxtQ0FBK0I7QUFDM0IsMkJBQVk7QUFERyxjQUFJLE9BQVE7QUFFM0IsYUFBbUMsZ0NBQ3ZDO0FBQUM7QUFDUyxvQ0FBYyxpQkFBeEIsVUFBcUMsTUFBZTtBQUMxQyxnQkFBQyxJQUFvQixpQkFBSyxNQUNwQztBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQW1CLG9CQUFFO0FBQW9CLFlBQUMsSUFBb0IsaUJBQU07QUFBRztBQUV0Ryx3QkFBUyxTQUFzQixzQkFBZSxnQkFBRTtBQUFvQixZQUFDLElBQXdCLHFCQUFNO0FBQUc7QUFFakcsa0NBQVMsU0FBaUIsaUJBQWUsZ0JBQUUsVUFBSztBQUFPLFNBQUssSUFBRyxJQUF3QixxQkFBTyxNQUFFLEVBQVEsUUFBVSxTQUFFLEVBQVEsUUFBVSxTQUFPLE9BQUk7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUN4RHJHOztBQUN0Qjs7QUFDVTs7QUFHbEQ7OztBQUF3QyxtQ0FBdUI7QUFDM0QsaUNBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRVEsb0VBQ3ZDO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFzQixzQkFBYSxjQUFFO0FBQW9CLFlBQUMsSUFBc0IsbUJBQU07QUFBRztBQUU3RixrQ0FBUyxTQUFpQixpQkFBYSxjQUFFLFVBQUs7QUFBTyxTQUFLLElBQUcsSUFBc0IsbUJBQU8sTUFBRSxFQUFRLFVBQWtCLGlDQUFnQixlQUFPLE9BQUk7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUNkNUo7O0tBQXVCOztBQUNrQjs7QUFDTTs7QUFDZDs7QUFDVTs7OztBQUdsRDtBQUF3QywwQ0FBbUI7QUFFdkQsd0NBQThCO0FBQzFCLDJCQUFnQjtBQUNaLGNBQW9CLHNCQUFLLEdBQWdCLGdCQUFLLEtBQWM7QUFDNUQsY0FBUyxTQUF1Qix5QkFBTyxLQUFxQjtBQUNoRSxhQUFRLE9BQVE7QUFDWixjQUFTLFdBQUcsVUFBYTtBQUFRLGtCQUFRLFFBQUksSUFBYTtBQUFFO0FBQzVELGNBQVMsU0FBWSxjQUFPLEtBQVU7QUFDckIsY0FBVSxTQUEwQiw0QkFBRztBQUFrQixrQkFBd0I7QUFBRTtBQUNwRyxjQUFTLFNBQVksY0FBRyxVQUFhO0FBQ3JDLGlCQUFPLE1BQXdCLEtBQVUsU0FBUztBQUM1QyxvQkFBSyxLQUFTLFNBQWEsZ0JBQU8sSUFBTSxRQUFNLE1BQVksWUFBUTtBQUNoRjtBQUFDO0FBQ1MseUNBQW1CLHNCQUE3QjtBQUNRLGNBQW9CLG9CQUFLLEtBQ2pDO0FBQUM7QUFDTyx5Q0FBUyxZQUFqQjtBQUF3QyxnQkFBc0IsS0FBVSxTQUFvQjtBQUFDO0FBQ2pHLFlBQUM7QUFFRDs7QUFBb0MsK0JBQW1CO0FBRW5ELDZCQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUUzQixhQUE2QiwwQkFDakM7QUFBQztBQUNTLDhCQUFTLFlBQW5CO0FBQ1EsY0FBUSxVQUFPLEtBQUssS0FBTyxPQUFPLE9BQzFDO0FBQUM7QUFDTCxZQUFDO0FBQUE7QUFFUyx3QkFBUyxTQUFzQixzQkFBUyxVQUFFO0FBQW9CLFlBQUMsSUFBa0IsZUFBTTtBQUFHO0FBRXJGLGtDQUFTLFNBQWlCLGlCQUFTLFVBQUUsVUFBSztBQUFhLFlBQUMsSUFBa0IsZUFBUTtBQUFHLEk7Ozs7Ozs7Ozs7OztBQ3hDbEQ7O0FBQ1Y7O0FBQ1U7O0FBSWxEOzs7QUFBNkMsd0NBQW1CO0FBQzVELHNDQUFxQztBQUNqQywyQkFBZ0I7QUFERCxjQUFRLFdBRTNCO0FBQUM7QUFDUyx1Q0FBVyxjQUFyQixVQUFtQztBQUMvQixnQkFBSyxVQUFZLHVCQUFXO0FBQ3pCLGFBQVMsYUFBUyxLQUFTLFNBQU8sT0FBRTtBQUMvQixrQkFBUSxRQUFLLEtBQVMsU0FDOUI7QUFDSjtBQUFDO0FBRUwsWUFBQztBQUVEOztBQUFrQyw2QkFBaUI7QUFDL0MsMkJBQStCO0FBQzNCLDJCQUFZO0FBREcsY0FBSSxPQUFRO0FBRTNCLGFBQTJCLHdCQUMvQjtBQUFDO0FBQ0wsWUFBQztBQUFBO0FBRVMsd0JBQVMsU0FBc0Isc0JBQU8sUUFBRTtBQUFvQixZQUFDLElBQWdCLGFBQU07QUFBRztBQUVqRixrQ0FBUyxTQUFpQixpQkFBTyxRQUFFLFVBQUs7QUFBYSxZQUFDLElBQWdCLGFBQVE7QUFBRyxJOzs7Ozs7Ozs7Ozs7QUM1QnpGOztLQUF1Qjs7QUFDbUI7O0FBRWhCOztBQUdqQzs7Ozs7QUFBa0MsNkJBQWlCO0FBSS9DLDJCQUF3QjtBQUNwQiwyQkFBZTtBQUNYLGNBQVcsYUFBSyxHQUFXLFdBQVE7QUFDbkMsY0FBYyxnQkFBSyxHQUFXLFdBQUssS0FBaUI7QUFDeEQsYUFBUSxPQUFRO0FBQ1osY0FBUyxXQUFHO0FBQWtCLGtCQUFtQjtBQUFDO0FBQ2xELGNBQU8sT0FBVyxXQUFJLElBQUMsVUFBb0I7QUFBVyxrQkFBYyxhQUFLLEtBQWMsY0FBSyxLQUFpQjtBQUNySDtBQUFDO0FBQ1MsNEJBQVksZUFBdEIsVUFBbUM7QUFDekIsZ0JBQVcscUJBQ3JCO0FBQUM7QUFDUyw0QkFBYyxpQkFBeEIsVUFBdUM7QUFDbkMsZ0JBQUssVUFBZSwwQkFBUTtBQUN4QixjQUFXLFdBQUssS0FDeEI7QUFBQztBQUNELDJCQUFjLHdCQUFRO2NBQXRCO0FBQXlDLG9CQUFLLEtBQWMsZ0JBQU8sS0FBYyxnQkFBTyxLQUF1QjtBQUFDO2NBQ2hILGFBQW9DO0FBQVEsa0JBQWMsZ0JBQVU7QUFBQzs7dUJBRDJDOztBQUV6Ryw0QkFBSSxPQUFYO0FBQ1EsY0FBYyxjQUFVLFlBQU8sS0FBVTtBQUMzQyxZQUFVLFVBQUssS0FBZ0I7QUFDL0IsWUFBYyxjQUFLLE1BQU0sS0FBZ0I7QUFDbkMsa0JBQUssS0FBWSxZQUFLLEtBQWdCO0FBQ2pDLGNBQVEsT0FBTyxPQUFhLGFBQW9CO0FBQ3pELGNBQWUsaUJBQ3ZCO0FBQUM7QUFDUyw0QkFBa0IscUJBQTVCO0FBQStDLGdCQUFXLDZCQUFNO0FBQUM7QUFDMUQsNEJBQUksT0FBWDtBQUNZLGtCQUFLLEtBQVksWUFBSyxLQUFnQjtBQUMxQyxjQUFjLGNBQVUsWUFBTTtBQUM5QixjQUFlLGlCQUN2QjtBQUFDO0FBQ0QsMkJBQVcsd0JBQUc7Y0FBZDtBQUE4QixvQkFBSyxLQUFPLE9BQVM7QUFBQzs7dUJBQUE7O0FBQzVDLDRCQUFjLGlCQUF0QjtBQUNRLGNBQWUsZUFBQyxDQUFLLEtBQzdCO0FBQUM7QUFDTyw0QkFBVSxhQUFsQjtBQUNRLGNBQ1I7QUFBQztBQUNPLDRCQUFZLGVBQXBCO0FBQ1UsZ0JBQUssS0FBYSxlQUFPLEtBQUksSUFBTyxPQUFPLE9BQWdCLGtCQUFPLEtBQUksSUFBTyxPQUFPLE9BQzlGO0FBQUM7QUFDTCxZQUFDO0FBQUEsb0M7Ozs7Ozs7Ozs7QUNuRE0sS0FBYyxrQ0FBRyxFQUFNLE1BQU87QUFBVyxZQUFLLE9BQXlpQixzaUI7Ozs7Ozs7Ozs7O0FDRTlsQjs7O0FBQ0ksbUNBQ0EsQ0FBQztBQUVNLGtDQUFXLGNBQWxCLFVBQXNDLGFBQVksSUFBNkI7QUFBM0IsbUNBQTJCO0FBQTNCLDRCQUEyQjs7QUFDekUsY0FBTyxLQUFNLE1BQUcsSUFBZ0I7QUFDbEMsYUFBTyxNQUFPLEtBQUssS0FBUSxRQUFLO0FBQzdCLGFBQUksTUFBSyxHQUFRO0FBQ2pCLGVBQU8sS0FBSyxLQUFRLFFBQUksS0FBTztBQUMvQixhQUFJLE1BQUssR0FBUTtBQUNwQixhQUFZLFdBQU0sTUFBSztBQUN2QixhQUFhLFlBQWU7QUFDekIsZUFBTyxLQUFLLEtBQVEsUUFBVSxXQUFZO0FBQzFDLGFBQUksTUFBSyxHQUFRO0FBQ2hCLGNBQUssT0FBTyxLQUFLLEtBQU8sT0FBRSxHQUFXLFlBQWMsY0FBTyxLQUFLLEtBQU8sT0FDOUU7QUFBQztBQUNTLGtDQUFLLFFBQWYsVUFBMEIsSUFBc0I7QUFDNUMsYUFBVSxTQUFnQixnQkFBTTtBQUM3QixhQUFjLGNBQUU7QUFDVCx1QkFBTyxNQUNqQjtBQUFDO0FBQ0ssZ0JBQU8sU0FDakI7QUFBQztBQUNELDJCQUFjLDhCQUFJO2NBQWxCO0FBQXFDLG9CQUFXLHVCQUFPO0FBQUM7Y0FDeEQsYUFBZ0M7QUFBYyxvQ0FBSyxPQUFVO0FBQUM7O3VCQUROOztBQUU1RCxZQUFDO0FBQUEsSzs7Ozs7Ozs7Ozs7QUMzQitDOzs7O0FBRUw7O0FBQ1U7O0FBR3JEOzs7OztBQUE2Qyx3Q0FBbUI7QUFDNUQsc0NBQThCO0FBQzFCLDJCQUFnQjtBQUNaLGNBQVMsU0FBVSxZQUFPLEtBQ2xDO0FBQUM7QUFDUyx1Q0FBcUIsd0JBQS9CLFVBQWtDLElBQUs7QUFDL0IsY0FBSSxJQUFnQixnQkFBSSxJQUNoQztBQUFDO0FBQ0QsMkJBQVksbUNBQU87Y0FBbkI7QUFBOEIsb0JBQVEsVUFBTyxLQUFTLFNBQUs7QUFBQzs7dUJBQUE7O0FBQ2hFLFlBQUM7QUFFRDs7QUFBa0MsNkJBQWlCO0FBQy9DLDJCQUErQjtBQUMzQiwyQkFBWTtBQURHLGNBQUksT0FBUTtBQUUzQixhQUEyQix3QkFDL0I7QUFBQztBQUNMLFlBQUM7QUFBQTtBQUUrSTtBQUN0SSx3QkFBUyxTQUFzQixzQkFBTyxRQUFFO0FBQW9CLFlBQUMsSUFBZ0IsYUFBTTtBQUFHO0FBQ2pGLGtDQUFTLFNBQWlCLGlCQUFPLFFBQUUsVUFBSztBQUFhLFlBQUMsSUFBZ0IsYUFBUTtBQUFHLEk7Ozs7Ozs7OztBQzFCOUQ7O0FBQ0Q7O0FBQ0U7O0FBQ0Q7O0FBQ0E7O0FBQ0Q7O0FBQ0M7O0FBQ0M7O0FBQ0EseUI7Ozs7Ozs7Ozs7O0FDTm5DOztBQUFPLEtBQXVCO0FBQ2QsbUJBQVc7QUFDWCxtQkFBVTtBQUNWLG1CQUFVO0FBQ1YsbUJBQW1CO0FBQ3BCLGtCQUFtQztBQUM5Qix1QkFBaUM7QUFDcEMsb0JBQXdDO0FBQ3hDLG9CQUFvQjtBQUNuQixxQkFBVztBQUNaLG9CQUFnQztBQUNqQyxtQkFBaUI7QUFDaEIsb0JBQTBCO0FBQ3pCLHFCQUErQztBQUMvQyxxQkFBK0M7QUFDaEQsb0JBQWdGO0FBQ25GLGlCQUFnRDtBQUNoRCxpQkFBZ0Q7QUFDOUMsbUJBQTRDO0FBQzNDLG9CQUF3QztBQUNuQyx5QkFDcEI7QUFyQitCO0FBdUJmLG1DQUFRLFFBQU0sUUFBdUIsb0I7Ozs7Ozs7Ozs7O0FDdEJ2RDs7QUFBTyxLQUFzQjtBQUNiLG1CQUFVO0FBQ1YsbUJBQVk7QUFDWixtQkFBYTtBQUNaLG9CQUFVO0FBQ1gsbUJBQXNCO0FBQ3ZCLGtCQUE0RDtBQUN2RCx1QkFBNEM7QUFDL0Msb0JBQXNDO0FBQ3JDLHFCQUFXO0FBQ1osb0JBQXFDO0FBQ3RDLG1CQUFvQztBQUNuQyxvQkFBK0M7QUFDOUMscUJBQWlEO0FBQ2pELHFCQUF1RDtBQUN4RCxvQkFBcUY7QUFDeEYsaUJBQXdEO0FBQ3hELGlCQUF3RDtBQUN0RCxtQkFBZ0Q7QUFDL0Msb0JBQTREO0FBQ3ZELHlCQUNwQjtBQXJCOEI7QUF1QmQsbUNBQVEsUUFBTSxRQUFzQixtQjs7Ozs7Ozs7Ozs7QUN4QnREOztBQUFPLEtBQXdCO0FBQ2YsbUJBQWE7QUFDYixtQkFBWTtBQUNaLG1CQUFVO0FBQ1Qsb0JBQWlCO0FBQ2xCLG1CQUFnQjtBQUNqQixrQkFBeUU7QUFDcEUsdUJBQWtDO0FBQ3JDLG9CQUFvQztBQUNuQyxxQkFBYztBQUNmLG9CQUErQjtBQUNoQyxtQkFBZ0M7QUFDL0Isb0JBQTRDO0FBQzNDLHFCQUFrRDtBQUNsRCxxQkFBaUQ7QUFDbEQsb0JBQXlGO0FBQzVGLGlCQUFxRDtBQUNyRCxpQkFBc0Q7QUFDcEQsbUJBQWtDO0FBQzVCLHlCQUNwQjtBQXBCZ0M7QUFzQmhCLG1DQUFRLFFBQU0sUUFBd0IscUI7Ozs7Ozs7Ozs7O0FDckJ4RDs7QUFBTyxLQUF1QjtBQUNkLG1CQUF1QjtBQUN2QixtQkFBVztBQUNYLG1CQUFZO0FBQ1gsb0JBQXlCO0FBQzFCLG1CQUFvQjtBQUNyQixrQkFBc0U7QUFDakUsdUJBQWdEO0FBQ25ELG9CQUFrRDtBQUNqRCxxQkFBaUI7QUFDbEIsb0JBQTBEO0FBQzNELG1CQUE2QztBQUM1QyxvQkFBeUM7QUFDeEMscUJBQXlEO0FBQ3pELHFCQUF3RDtBQUN6RCxvQkFBOEg7QUFDakksaUJBQW1GO0FBQ25GLGlCQUFtRjtBQUNqRixtQkFBMkM7QUFDMUMsb0JBQXNEO0FBQ2pELHlCQUNwQjtBQXJCK0I7QUFzQmYsbUNBQVEsUUFBTSxRQUF1QixvQjs7Ozs7Ozs7Ozs7QUN2QnZEOztBQUFPLEtBQXVCO0FBQ2QsbUJBQVU7QUFDVixtQkFBVTtBQUNWLG1CQUFVO0FBQ1YsbUJBQXFCO0FBQ3RCLGtCQUFrQztBQUM3Qix1QkFBa0Q7QUFDckQsb0JBQTZDO0FBQzdDLG9CQUFpQztBQUNoQyxxQkFBYTtBQUNkLG9CQUFzQztBQUN2QyxtQkFBbUM7QUFDbEMsb0JBQTJDO0FBQzFDLHFCQUE4QztBQUM5QyxxQkFBa0Q7QUFDbkQsb0JBQStFO0FBQ2xGLGlCQUErQztBQUMvQyxpQkFBMkM7QUFDekMsbUJBQW1EO0FBQ2xELG9CQUEyQztBQUN0Qyx5QkFDcEI7QUFyQitCO0FBdUJmLG1DQUFRLFFBQU0sUUFBdUIsb0I7Ozs7Ozs7Ozs7O0FDdEJ2RDs7QUFBTyxLQUFzQjtBQUNiLG1CQUFlO0FBQ2YsbUJBQVc7QUFDWCxtQkFBYztBQUNiLG9CQUFnQztBQUNqQyxtQkFBc0I7QUFDdkIsa0JBQTZFO0FBQ3hFLHVCQUE4RDtBQUNqRSxvQkFBcUQ7QUFDcEQscUJBQWU7QUFDaEIsb0JBQW9DO0FBQzNCLDZCQUEwRDtBQUNwRSxtQkFBc0M7QUFDckMsb0JBQWlEO0FBQzlDLHVCQUFpRDtBQUNuRCxxQkFBaUQ7QUFDakQscUJBQXNEO0FBQ3ZELG9CQUEwRjtBQUM3RixpQkFBdUQ7QUFDdkQsaUJBQXVEO0FBQ3JELG1CQUFpRDtBQUM5QyxzQkFBd0M7QUFDckMseUJBQWlGO0FBQ3RGLG9CQUE4QztBQUN6Qyx5QkFBc0Q7QUFDM0Qsb0JBQXdGO0FBQy9GLGFBQW9CO0FBQ2pCLGdCQUNYO0FBNUI4QjtBQTZCZCxtQ0FBUSxRQUFNLFFBQXNCLG1COzs7Ozs7Ozs7OztBQzlCdEQ7O0FBQU8sS0FBdUI7QUFDZCxtQkFBVTtBQUNWLG1CQUFTO0FBQ1QsbUJBQVU7QUFDVixtQkFBb0I7QUFDckIsa0JBQTRCO0FBQ3ZCLHVCQUFzQztBQUN6QyxvQkFBK0I7QUFDL0Isb0JBQXFCO0FBQ3BCLHFCQUFjO0FBQ2Ysb0JBQXNDO0FBQ3ZDLG1CQUF5QztBQUN4QyxvQkFBeUM7QUFDeEMscUJBQTBDO0FBQzFDLHFCQUE2QztBQUM5QyxvQkFBaUY7QUFDcEYsaUJBQXFEO0FBQ3JELGlCQUFzRDtBQUNwRCxtQkFBd0M7QUFDdkMsb0JBQXVEO0FBQ2xELHlCQUNwQjtBQXJCK0I7QUF1QmYsbUNBQVEsUUFBTSxRQUF1QixvQjs7Ozs7Ozs7Ozs7QUN2QnZEOztBQUFPLEtBQXdCO0FBQ2YsbUJBQVM7QUFDVCxtQkFBUztBQUNULG1CQUFVO0FBQ1YsbUJBQXVCO0FBQ3hCLGtCQUEwQjtBQUNyQix1QkFBd0M7QUFDM0Msb0JBQXlCO0FBQ3pCLG9CQUFnQztBQUMvQixxQkFBYztBQUNmLG9CQUFtQztBQUNwQyxtQkFBNkI7QUFDNUIsb0JBQTZDO0FBQzVDLHFCQUErQztBQUMvQyxxQkFBZ0Q7QUFDakQsb0JBQThFO0FBQ2pGLGlCQUFnRDtBQUNoRCxpQkFBZ0Q7QUFDOUMsbUJBQStEO0FBQ3pELHlCQUNwQjtBQXBCZ0M7QUFzQmhCLG1DQUFRLFFBQU0sUUFBd0IscUI7Ozs7Ozs7Ozs7O0FDdEJ4RDs7QUFBTyxLQUF3QjtBQUNYLG1CQUFRO0FBQ1IsbUJBQVM7QUFDVCxtQkFBa0I7QUFDakIsb0JBQXVCO0FBQ3hCLG1CQUFtQjtBQUNwQixrQkFBeUQ7QUFDcEQsdUJBQW1EO0FBQ3RELG9CQUFrQztBQUNqQyxxQkFBZTtBQUNoQixvQkFBK0I7QUFDaEMsbUJBQW1DO0FBQ2xDLG9CQUE2QjtBQUMxQix1QkFBcUM7QUFDdkMscUJBQXNDO0FBQ3RDLHFCQUF3QztBQUN6QyxvQkFBeUU7QUFDNUUsaUJBQXVEO0FBQ3ZELGlCQUF5RDtBQUN2RCxtQkFBNkM7QUFDMUMsc0JBQXFDO0FBQ2xDLHlCQUFpRTtBQUN0RSxvQkFBc0M7QUFDakMseUJBQW1DO0FBQ3hDLG9CQUF5RTtBQUNoRixhQUFjO0FBQ1gsZ0JBQ2Y7QUEzQmdDO0FBNkJoQixtQ0FBUSxRQUFNLFFBQXdCLHFCOzs7Ozs7OztBQy9CbEIseUI7Ozs7Ozs7Ozs7O0FDRXRDOztBQUFPLEtBQXVCO0FBQ3RCLFdBQUk7QUFDRixhQUFpQjtBQUNuQixXQUFjO0FBQ1osYUFBZ0I7QUFDTix1QkFBTyxPQUFZLFlBQUUsRUFBVSxVQUFlLGVBQU0sTUFBWSxZQUFNLE1BQWM7QUFDNUYsZUFBeUIseUJBQWEsYUFBNEM7QUFDakYsZ0JBQVU7QUFDaEIsVUFBZ0I7QUFDWCxlQUFFLEVBQU0sTUFBSSxJQUFPLE9BQUksSUFBUyxTQUFnQixnQkFBUSxRQUFNO0FBQ2pFLFlBQUUsRUFBTSxNQUErQiwrQkFBTSxNQUF3Qyx3Q0FBTSxNQUFNO0FBQzlGLGVBQUUsRUFBTSxNQUFlLGVBQU0sTUFBWSxZQUFPLE9BQU07QUFDdkQsY0FBZ0I7QUFDZixlQUFnQjtBQUNsQixhQUFFLEVBQU0sTUFBdUI7QUFDdkIscUJBQUUsRUFBTSxNQUF1QjtBQUNoQyxvQkFBRSxFQUFNLE1BQXFCLHFCQUFRLFFBQTRCO0FBQ2xFLG1CQUFFLEVBQU0sTUFBcUIscUJBQVcsV0FBSSxJQUFXLFdBQWtCO0FBQzNFLGlCQUFFLEVBQU0sTUFBZSxlQUFNLE1BQVMsU0FBTyxPQUFNO0FBQ3ZELGFBQUUsRUFBTSxNQUFhLGFBQU0sTUFBcUI7QUFDbEQsV0FBZ0I7QUFDZDtBQUNFLGVBQWlCLGlCQUFNLE1BQWM7QUFDbkM7QUFDRSxtQkFBNEIsNEJBQU8sT0FBYSxhQUFRLFFBQXdCO0FBQ3RFLDZCQUE2Qyw2Q0FBaUIsaUJBR3RGO0FBTGM7QUFGSjtBQXJCcUI7QUE2QnhCLHdCQUFhLGVBQXVCLG9CIiwiZmlsZSI6InN1cnZleS5rby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5XCIsIFtcImtub2Nrb3V0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlcIl0gPSBmYWN0b3J5KHJvb3RbXCJrb1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWQ2Y2VjZDliYTc0MWQ0NmEwMmQiLCIvLyBtb2RlbFxuZXhwb3J0ICogZnJvbSBcIi4vY2h1bmtzL21vZGVsXCI7XG5cbi8vIGxvY2FsaXphdGlvblxuaW1wb3J0ICcuL2NodW5rcy9sb2NhbGl6YXRpb24nO1xuXG4vLyBjc3Mgc3RhbmRhcmRcbmV4cG9ydCB7ZGVmYXVsdFN0YW5kYXJkQ3NzfSBmcm9tIFwiLi4vZGVmYXVsdENzcy9jc3NzdGFuZGFyZFwiO1xuLy9jc3MgZnJhbWV3b3Jrc1xuaW1wb3J0ICcuL2NodW5rcy9jc3NGcmFtZXdvcmtzJztcblxuLy8ga25vY2tvdXRcbmV4cG9ydCB7U3VydmV5fSBmcm9tIFwiLi4va25vY2tvdXQva29zdXJ2ZXlcIjtcbmV4cG9ydCB7UXVlc3Rpb25Sb3csIFBhZ2V9IGZyb20gXCIuLi9rbm9ja291dC9rb3BhZ2VcIjtcbmV4cG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvckJhc2V9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uYmFzZVwiO1xuZXhwb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvblwiO1xuZXhwb3J0IHtRdWVzdGlvblNlbGVjdEJhc2VJbXBsZW1lbnRvcn0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuZXhwb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5leHBvcnQge1F1ZXN0aW9uQ2hlY2tib3h9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2NoZWNrYm94XCI7XG5leHBvcnQge1F1ZXN0aW9uQ29tbWVudH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fY29tbWVudFwiO1xuZXhwb3J0IHtRdWVzdGlvbkRyb3Bkb3dufSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93blwiO1xuZXhwb3J0IHtRdWVzdGlvbkZpbGV9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2ZpbGVcIjtcbmV4cG9ydCB7UXVlc3Rpb25IdG1sfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9odG1sXCI7XG5leHBvcnQge01hdHJpeFJvdywgUXVlc3Rpb25NYXRyaXh9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeFwiO1xuZXhwb3J0IHtRdWVzdGlvbk1hdHJpeERyb3Bkb3dufSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9tYXRyaXhkcm9wZG93blwiO1xuZXhwb3J0IHtcbiAgICBRdWVzdGlvbk1hdHJpeER5bmFtaWNJbXBsZW1lbnRvcixcbiAgICBRdWVzdGlvbk1hdHJpeER5bmFtaWNcbn0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHluYW1pY1wiO1xuZXhwb3J0IHtcbiAgICBNdWx0aXBsZVRleHRJdGVtLCBRdWVzdGlvbk11bHRpcGxlVGV4dEltcGxlbWVudG9yLFxuICAgIFF1ZXN0aW9uTXVsdGlwbGVUZXh0XG59IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX211bHRpcGxldGV4dFwiO1xuZXhwb3J0IHtRdWVzdGlvblJhZGlvZ3JvdXB9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX3JhZGlvZ3JvdXBcIjtcbmV4cG9ydCB7UXVlc3Rpb25SYXRpbmd9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX3JhdGluZ1wiO1xuZXhwb3J0IHtRdWVzdGlvblRleHR9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX3RleHRcIjtcbmV4cG9ydCB7U3VydmV5V2luZG93fSBmcm9tIFwiLi4va25vY2tvdXQva29TdXJ2ZXlXaW5kb3dcIjtcbmV4cG9ydCB7U3VydmV5VGVtcGxhdGVUZXh0fSBmcm9tIFwiLi4va25vY2tvdXQvdGVtcGxhdGVUZXh0XCI7XG5cbmV4cG9ydCB7X19leHRlbmRzfSBmcm9tIFwiLi4vZXh0ZW5kc1wiO1xuXG4vL1VuY29tbWVudCB0byBpbmNsdWRlIHRoZSBcImRhdGVcIiBxdWVzdGlvbiB0eXBlLlxuZXhwb3J0IHtRdWVzdGlvbkRhdGV9IGZyb20gXCIuLi9wbHVnaW5zL2tub2Nrb3V0L2tvcXVlc3Rpb25fZGF0ZVwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMva28udHMiLCJleHBvcnQge1xuICAgIEFuc3dlckNvdW50VmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTnVtZXJpY1ZhbGlkYXRvciwgUmVnZXhWYWxpZGF0b3IsXG4gICAgU3VydmV5VmFsaWRhdG9yLCBUZXh0VmFsaWRhdG9yLCBWYWxpZGF0b3JSZXN1bHQsIFZhbGlkYXRvclJ1bm5lclxufSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9yXCI7XG5leHBvcnQge0Jhc2UsIEV2ZW50LCBJdGVtVmFsdWUsIFN1cnZleUVycm9yLCBJU3VydmV5fSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuZXhwb3J0IHtDaG9pY2VzUmVzdGZ1bGx9IGZyb20gXCIuLi8uLi9jaG9pY2VzUmVzdGZ1bGxcIjtcbmV4cG9ydCB7Q29uZGl0aW9uLCBDb25kaXRpb25Ob2RlLCBDb25kaXRpb25SdW5uZXJ9IGZyb20gXCIuLi8uLi9jb25kaXRpb25zXCI7XG5leHBvcnQge0NvbmRpdGlvbnNQYXJzZXJ9IGZyb20gXCIuLi8uLi9jb25kaXRpb25zUGFyc2VyXCI7XG5leHBvcnQge0N1c3RvbUVycm9yLCBFeGNlZWRTaXplRXJyb3IsIFJlcXVyZU51bWVyaWNFcnJvcn0gZnJvbSBcIi4uLy4uL2Vycm9yXCI7XG5leHBvcnQge1xuICAgIEpzb25FcnJvciwgSnNvbkluY29ycmVjdFR5cGVFcnJvciwgSnNvbk1ldGFkYXRhLCBKc29uTWV0YWRhdGFDbGFzcyxcbiAgICBKc29uTWlzc2luZ1R5cGVFcnJvciwgSnNvbk1pc3NpbmdUeXBlRXJyb3JCYXNlLCBKc29uT2JqZWN0LCBKc29uT2JqZWN0UHJvcGVydHksXG4gICAgSnNvblJlcXVpcmVkUHJvcGVydHlFcnJvciwgSnNvblVua25vd25Qcm9wZXJ0eUVycm9yXG59IGZyb20gXCIuLi8uLi9qc29ub2JqZWN0XCI7XG5leHBvcnQge1xuICAgIE1hdHJpeERyb3Bkb3duQ2VsbCwgTWF0cml4RHJvcGRvd25Db2x1bW4sIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLFxuICAgIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2Vcbn0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZVwiO1xuZXhwb3J0IHtNYXRyaXhEcm9wZG93blJvd01vZGVsLCBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93blwiO1xuZXhwb3J0IHtNYXRyaXhEeW5hbWljUm93TW9kZWwsIFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHluYW1pY1wiO1xuZXhwb3J0IHtNYXRyaXhSb3dNb2RlbCwgUXVlc3Rpb25NYXRyaXhNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX21hdHJpeFwiO1xuZXhwb3J0IHtNdWx0aXBsZVRleHRJdGVtTW9kZWwsIFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9tdWx0aXBsZXRleHRcIjtcbmV4cG9ydCB7UGFnZU1vZGVsLCBRdWVzdGlvblJvd01vZGVsfSBmcm9tIFwiLi4vLi4vcGFnZVwiO1xuZXhwb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uXCI7XG5leHBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uYmFzZVwiO1xuZXhwb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZSwgUXVlc3Rpb25TZWxlY3RCYXNlfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuZXhwb3J0IHtRdWVzdGlvbkNoZWNrYm94TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9jaGVja2JveFwiO1xuZXhwb3J0IHtRdWVzdGlvbkNvbW1lbnRNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2NvbW1lbnRcIjtcbmV4cG9ydCB7IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2Ryb3Bkb3duXCI7XG5leHBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuZXhwb3J0IHtRdWVzdGlvbkZpbGVNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2ZpbGVcIjtcbmV4cG9ydCB7UXVlc3Rpb25IdG1sTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9odG1sXCI7XG5leHBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xuZXhwb3J0IHtRdWVzdGlvblJhdGluZ01vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fcmF0aW5nXCI7XG5leHBvcnQge1F1ZXN0aW9uVGV4dE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fdGV4dFwiO1xuZXhwb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uLy4uL3N1cnZleVwiO1xuZXhwb3J0IHtcbiAgICBTdXJ2ZXlUcmlnZ2VyLCBTdXJ2ZXlUcmlnZ2VyQ29tcGxldGUsIFN1cnZleVRyaWdnZXJTZXRWYWx1ZSwgU3VydmV5VHJpZ2dlclZpc2libGUsXG4gICAgVHJpZ2dlclxufSBmcm9tIFwiLi4vLi4vdHJpZ2dlclwiO1xuZXhwb3J0IHtTdXJ2ZXlXaW5kb3dNb2RlbH0gZnJvbSBcIi4uLy4uL3N1cnZleVdpbmRvd1wiO1xuZXhwb3J0IHtUZXh0UHJlUHJvY2Vzc29yfSBmcm9tIFwiLi4vLi4vdGV4dFByZVByb2Nlc3NvclwiO1xuXG5leHBvcnQge2R4U3VydmV5U2VydmljZX0gZnJvbSBcIi4uLy4uL2R4U3VydmV5U2VydmljZVwiO1xuZXhwb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb24sIHN1cnZleVN0cmluZ3N9IGZyb20gXCIuLi8uLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbi8vVW5jb21tZW50IHRvIGluY2x1ZGUgdGhlIFwiZGF0ZVwiIHF1ZXN0aW9uIHR5cGUuXG5leHBvcnQge2RlZmF1bHQgYXMgUXVlc3Rpb25EYXRlTW9kZWx9IGZyb20gXCIuLi8uLi9wbHVnaW5zL3F1ZXN0aW9uX2RhdGVcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2NodW5rcy9tb2RlbC50cyIsImltcG9ydCB7QmFzZSwgU3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7Q3VzdG9tRXJyb3IsIFJlcXVyZU51bWVyaWNFcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gJy4vanNvbm9iamVjdCc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogYW55LCBwdWJsaWMgZXJyb3I6IFN1cnZleUVycm9yID0gbnVsbCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVZhbGlkYXRvciBleHRlbmRzIEJhc2Uge1xuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RXJyb3JUZXh0KG5hbWU6IHN0cmluZykgOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50ZXh0KSByZXR1cm4gdGhpcy50ZXh0O1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0RXJyb3JUZXh0KG5hbWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0b3JPd25lciB7XG4gICAgdmFsaWRhdG9yczogQXJyYXk8U3VydmV5VmFsaWRhdG9yPjtcbiAgICB2YWx1ZTogYW55O1xuICAgIGdldFZhbGlkYXRvclRpdGxlKCk6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSdW5uZXIge1xuICAgIHB1YmxpYyBydW4ob3duZXI6IElWYWxpZGF0b3JPd25lcik6IFN1cnZleUVycm9yIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvd25lci52YWxpZGF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yUmVzdWx0ID0gb3duZXIudmFsaWRhdG9yc1tpXS52YWxpZGF0ZShvd25lci52YWx1ZSwgb3duZXIuZ2V0VmFsaWRhdG9yVGl0bGUoKSk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzdWx0LmVycm9yKSByZXR1cm4gdmFsaWRhdG9yUmVzdWx0LmVycm9yO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3duZXIudmFsdWUgPSB2YWxpZGF0b3JSZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWVyaWNWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5WYWx1ZTogbnVtYmVyID0gbnVsbCwgcHVibGljIG1heFZhbHVlOiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm51bWVyaWN2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdGhpcy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBSZXF1cmVOdW1lcmljRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSAmJiB0aGlzLm1pblZhbHVlID4gcmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXhWYWx1ZSAmJiB0aGlzLm1heFZhbHVlIDwgcmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gbnVsbCA6IHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRFcnJvclRleHQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB2TmFtZSA9IG5hbWUgPyBuYW1lIDogXCJ2YWx1ZVwiO1xuICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSAmJiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNNaW5NYXhcIilbXCJmb3JtYXRcIl0odk5hbWUsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNNaW5cIilbXCJmb3JtYXRcIl0odk5hbWUsIHRoaXMubWluVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJudW1lcmljTWF4XCIpW1wiZm9ybWF0XCJdKHZOYW1lLCB0aGlzLm1heFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGlzTnVtYmVyKHZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0VmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWluTGVuZ3RoOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRleHR2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKHRoaXMubWluTGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdChudWxsLCBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRFcnJvclRleHQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidGV4dE1pbkxlbmd0aFwiKVtcImZvcm1hdFwiXSh0aGlzLm1pbkxlbmd0aCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2VyQ291bnRWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5Db3VudDogbnVtYmVyID0gbnVsbCwgcHVibGljIG1heENvdW50OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImFuc3dlcmNvdW50dmFsaWRhdG9yXCI7IH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLmNvbnN0cnVjdG9yICE9IEFycmF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5taW5Db3VudCAmJiBjb3VudCA8IHRoaXMubWluQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWluU2VsZWN0RXJyb3JcIilbXCJmb3JtYXRcIl0odGhpcy5taW5Db3VudCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF4Q291bnQgJiYgY291bnQgPiB0aGlzLm1heENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdChudWxsLCBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQoc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1heFNlbGVjdEVycm9yXCIpW1wiZm9ybWF0XCJdKHRoaXMubWF4Q291bnQpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnZXhWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWdleDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJyZWdleHZhbGlkYXRvclwiOyB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICBpZiAoIXRoaXMucmVnZXggfHwgIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCh0aGlzLnJlZ2V4KTtcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQodmFsdWUsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSByZSA9IC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2k7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImVtYWlsdmFsaWRhdG9yXCI7IH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5yZS50ZXN0KHZhbHVlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KHZhbHVlLCBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRFcnJvclRleHQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiaW52YWxpZEVtYWlsXCIpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInN1cnZleXZhbGlkYXRvclwiLCBbXCJ0ZXh0XCJdKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJudW1lcmljdmFsaWRhdG9yXCIsIFtcIm1pblZhbHVlOm51bWJlclwiLCBcIm1heFZhbHVlOm51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE51bWVyaWNWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwidGV4dHZhbGlkYXRvclwiLCBbXCJtaW5MZW5ndGg6bnVtYmVyXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgVGV4dFZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJhbnN3ZXJjb3VudHZhbGlkYXRvclwiLCBbXCJtaW5Db3VudDpudW1iZXJcIiwgXCJtYXhDb3VudDpudW1iZXJcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBBbnN3ZXJDb3VudFZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJyZWdleHZhbGlkYXRvclwiLCBbXCJyZWdleFwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFJlZ2V4VmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImVtYWlsdmFsaWRhdG9yXCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRW1haWxWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvci50cyIsImV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMgKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF9fZXh0ZW5kcztcbn1cblxuZXhwb3J0cy5fX2V4dGVuZHMgPSBfX2V4dGVuZHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4dGVuZHMudHMiLCJleHBvcnQgaW50ZXJmYWNlIEhhc2hUYWJsZTxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleURhdGEge1xuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueTtcbiAgICBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpO1xuICAgIGdldENvbW1lbnQobmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleSBleHRlbmRzIElTdXJ2ZXlEYXRhIHtcbiAgICBjdXJyZW50UGFnZTogSVBhZ2U7XG4gICAgcGFnZVZpc2liaWxpdHlDaGFuZ2VkKHBhZ2U6IElQYWdlLCBuZXdWYWx1ZTogYm9vbGVhbik7XG4gICAgcXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBuZXdWYWx1ZTogYm9vbGVhbik7XG4gICAgcXVlc3Rpb25BZGRlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBpbmRleDogbnVtYmVyKTtcbiAgICBxdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IElRdWVzdGlvbik7XG4gICAgdmFsaWRhdGVRdWVzdGlvbihuYW1lOiBzdHJpbmcpOiBTdXJ2ZXlFcnJvcjtcbiAgICBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGlzRGVzaWduTW9kZTogYm9vbGVhbjtcbiAgICByZXF1aXJlZFRleHQ6IHN0cmluZztcbiAgICBxdWVzdGlvblN0YXJ0SW5kZXg6IHN0cmluZztcbiAgICBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHN0cmluZztcbiAgICBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbjtcbiAgICB1cGxvYWRGaWxlKG5hbWU6IHN0cmluZywgZmlsZTogRmlsZSwgc3RvcmVEYXRhQXNUZXh0OiBib29sZWFuLCB1cGxvYWRpbmdDYWxsYmFjazogKHN0YXR1czogc3RyaW5nKSA9PiBhbnkpOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ29uZGl0aW9uUnVubmVyIHtcbiAgICBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pik7XG59XG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdGlvbiBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGhhc1RpdGxlOiBib29sZWFuO1xuICAgIHNldFZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKTtcbiAgICBvblN1cnZleVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KTtcbiAgICBvblN1cnZleUxvYWQoKTtcbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJUGFnZSBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtVmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJ3wnO1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGF0YShpdGVtczogQXJyYXk8SXRlbVZhbHVlPiwgdmFsdWVzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBJdGVtVmFsdWUobnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mICh2YWx1ZS52YWx1ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUuZ2V0VHlwZSkgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlLmdldFR5cGUoKSA9PSAnaXRlbXZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5pdGVtVmFsdWUgPSB2YWx1ZS5pdGVtVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXRlbVRleHQgPSB2YWx1ZS5pdGVtVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gSXRlbVZhbHVlLml0ZW1WYWx1ZVByb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEl0ZW1WYWx1ZS5jb3B5QXR0cmlidXRlcyh2YWx1ZSwgaXRlbSwgZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGEoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4pOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyB2YWx1ZTogaXRlbS52YWx1ZSwgdGV4dDogaXRlbS50ZXh0IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW1CeVZhbHVlKGl0ZW1zOiBBcnJheTxJdGVtVmFsdWU+LCB2YWw6IGFueSk6IEl0ZW1WYWx1ZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0udmFsdWUgPT0gdmFsKSByZXR1cm4gaXRlbXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIGl0ZW1WYWx1ZVByb3AgPSBbIFwidGV4dFwiLCBcInZhbHVlXCIsIFwiaGFzVGV4dFwiXTtcbiAgICBwcml2YXRlIHN0YXRpYyBjb3B5QXR0cmlidXRlcyhzcmM6IGFueSwgZGVzdDogYW55LCBleGNlcHRvbnM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2Ygc3JjW2tleV0gPT0gJ2Z1bmN0aW9uJykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGV4Y2VwdG9ucyAmJiBleGNlcHRvbnMuaW5kZXhPZihrZXkpID4gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpdGVtVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIGl0ZW1UZXh0OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodmFsdWU6IGFueSwgdGV4dDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIml0ZW12YWx1ZVwiOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5pdGVtVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1WYWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YXIgc3RyOiBzdHJpbmcgPSB0aGlzLml0ZW1WYWx1ZS50b1N0cmluZygpO1xuICAgICAgICB2YXIgaW5kZXggPSBzdHIuaW5kZXhPZihJdGVtVmFsdWUuU2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbVZhbHVlID0gc3RyLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHN0ci5zbGljZShpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzVGV4dCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXRlbVRleHQgPyB0cnVlIDogZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVGV4dCkgcmV0dXJuIHRoaXMuaXRlbVRleHQ7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZXh0KG5ld1RleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW1UZXh0ID0gbmV3VGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgbWV0aG9kIGlzIGFic3RyYWN0Jyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleUVycm9yIHtcbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgbWV0aG9kIGlzIGFic3RyYWN0Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgU3VydmV5UGFnZUlkID0gXCJzcV9wYWdlXCI7XG5leHBvcnQgY2xhc3MgU3VydmV5RWxlbWVudCB7XG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFbGVtZW50VG9Ub3AoZWxlbWVudElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFlbGVtZW50SWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaWYgKCFlbCB8fCAhZWwuc2Nyb2xsSW50b1ZpZXcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGVsZW1Ub3AgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGlmIChlbGVtVG9wIDwgMCkgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIHJldHVybiBlbGVtVG9wIDwgMDtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBGb2N1c0VsZW1lbnQoZWxlbWVudElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFlbGVtZW50SWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50PFQgZXh0ZW5kcyBGdW5jdGlvbiwgT3B0aW9ucz4gIHtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQXJyYXk8VD47XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jYWxsYmFja3MgPT0gbnVsbCB8fCB0aGlzLmNhbGxiYWNrcy5sZW5ndGggPT0gMDsgfVxuICAgIHB1YmxpYyBmaXJlKHNlbmRlcjogYW55LCBvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYWxsYmFja3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbFJlc3VsdCA9IHRoaXMuY2FsbGJhY2tzW2ldKHNlbmRlciwgb3B0aW9ucyk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWRkKGZ1bmM6IFQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IEFycmF5PFQ+KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChmdW5jKTtcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZShmdW5jOiBUKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2FsbGJhY2tzLmluZGV4T2YoZnVuYywgMCk7XG4gICAgICAgIGlmIChpbmRleCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jhc2UudHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSAnLi9zdXJ2ZXlTdHJpbmdzJztcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEFuc3dlclJlcXVpcmVkRXJyb3IgZXh0ZW5kcyBTdXJ2ZXlFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSAge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkRXJyb3JcIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlcXVyZU51bWVyaWNFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJudW1lcmljRXJyb3JcIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4Y2VlZFNpemVFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBwcml2YXRlIG1heFNpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihtYXhTaXplOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJleGNlZWRNYXhTaXplXCIpW1wiZm9ybWF0XCJdKHRoaXMuZ2V0VGV4dFNpemUoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dFNpemUoKSB7XG4gICAgICAgIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICAgICAgdmFyIGZpeGVkID0gWzAsIDAsIDIsIDMsIDNdO1xuICAgICAgICBpZiAodGhpcy5tYXhTaXplID09IDApIHJldHVybiAnMCBCeXRlJztcbiAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKHRoaXMubWF4U2l6ZSkgLyBNYXRoLmxvZygxMDI0KSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubWF4U2l6ZSAvIE1hdGgucG93KDEwMjQsIGkpO1xuICAgICAgICByZXR1cm4gdmFsdWUudG9GaXhlZChmaXhlZFtpXSkgKyAnICcgKyBzaXplc1tpXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vycm9yLnRzIiwiZXhwb3J0IHZhciBzdXJ2ZXlMb2NhbGl6YXRpb24gPSB7XG4gICAgY3VycmVudExvY2FsZTogXCJcIixcbiAgICBsb2NhbGVzOiB7fSxcbiAgICBnZXRTdHJpbmc6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2FsZSA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdIDogc3VydmV5U3RyaW5ncztcbiAgICAgICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gc3VydmV5U3RyaW5ncztcbiAgICAgICAgcmV0dXJuIGxvY1tzdHJOYW1lXTtcbiAgICB9LFxuICAgIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICByZXMucHVzaChcIlwiKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xuICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc29ydCgpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn07XG5leHBvcnQgdmFyIHN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlByZXZpb3VzXCIsXG4gICAgcGFnZU5leHRUZXh0OiBcIk5leHRcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiQ29tcGxldGVcIixcbiAgICBvdGhlckl0ZW1UZXh0OiBcIk90aGVyIChkZXNjcmliZSlcIixcbiAgICBwcm9ncmVzc1RleHQ6IFwiUGFnZSB7MH0gb2YgezF9XCIsXG4gICAgZW1wdHlTdXJ2ZXk6IFwiVGhlcmUgaXMgbm8gYW55IHZpc2libGUgcGFnZSBvciB2aXNpYmxlIHF1ZXN0aW9uIGluIHRoZSBzdXJ2ZXkuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCJUaGFuayBZb3UgZm9yIENvbXBsZXRpbmcgdGhlIFN1cnZleSFcIixcbiAgICBsb2FkaW5nU3VydmV5OiBcIlN1cnZleSBpcyBsb2FkaW5nIGZyb20gdGhlIHNlcnZlci4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIkNob29zZS4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwiUGxlYXNlIGFuc3dlciB0aGUgcXVlc3Rpb24uXCIsXG4gICAgcmVxdWlyZWRJbkFsbFJvd3NFcnJvcjogXCJQbGVhc2UgYW5zd2VyIHF1ZXN0aW9ucyBpbiBhbGwgcm93cy5cIixcbiAgICBudW1lcmljRXJyb3I6IFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIG51bWVyaWMuXCIsXG4gICAgdGV4dE1pbkxlbmd0aDogXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IHN5bWJvbHMuXCIsXG4gICAgbWluUm93Q291bnRFcnJvcjogXCJQbGVhc2UgZmlsbCBhdCBsZWFzdCB7MH0gcm93cy5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IHswfSB2YXJpYW50cy5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJQbGVhc2Ugc2VsZWN0IG5vdCBtb3JlIHRoYW4gezB9IHZhcmlhbnRzLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBtb3JlIHRoYW4gezF9IGFuZCBlcXVhbCBvciBsZXNzIHRoYW4gezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJUaGUgJ3swfScgc2hvdWxkIGJlIGVxdWFsIG9yIG1vcmUgdGhhbiB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIlRoZSAnezB9JyBzaG91bGQgYmUgZXF1YWwgb3IgbGVzcyB0aGFuIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwuXCIsXG4gICAgdXJsUmVxdWVzdEVycm9yOiBcIlRoZSByZXF1ZXN0IHJldHVybiBlcnJvciAnezB9Jy4gezF9XCIsXG4gICAgdXJsR2V0Q2hvaWNlc0Vycm9yOiBcIlRoZSByZXF1ZXN0IHJldHVybnMgZW1wdHkgZGF0YSBvciB0aGUgJ3BhdGgnIHByb3BlcnR5IGlzIGluY29ycmVjdFwiLFxuICAgIGV4Y2VlZE1heFNpemU6IFwiVGhlIGZpbGUgc2l6ZSBzaG91bGQgbm90IGV4Y2VlZCB7MH0uXCIsXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIlBsZWFzZSBlbnRlciB0aGUgb3RoZXJzIHZhbHVlLlwiLFxuICAgIHVwbG9hZGluZ0ZpbGU6IFwiWW91ciBmaWxlIGlzIHVwbG9hZGluZy4gUGxlYXNlIHdhaXQgc2V2ZXJhbCBzZWNvbmRzIGFuZCB0cnkgYWdhaW4uXCIsXG4gICAgYWRkUm93OiBcIkFkZCBSb3dcIixcbiAgICByZW1vdmVSb3c6IFwiUmVtb3ZlXCJcbn07XG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gc3VydmV5U3RyaW5ncztcblxuaWYgKCFTdHJpbmcucHJvdG90eXBlW1wiZm9ybWF0XCJdKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZVtcImZvcm1hdFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL3soXFxkKyl9L2csIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3NbbnVtYmVyXSAhPSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgID8gYXJnc1tudW1iZXJdXG4gICAgICAgICAgICAgICAgOiBtYXRjaFxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5U3RyaW5ncy50cyIsImltcG9ydCB7SGFzaFRhYmxlfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICBwcml2YXRlIHR5cGVWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIGNob2ljZXNWYWx1ZTogQXJyYXk8YW55PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaG9pY2VzZnVuYzogKCkgPT4gQXJyYXk8YW55PiA9IG51bGw7XG4gICAgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgY2xhc3NOYW1lUGFydDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBvbkdldFZhbHVlOiAob2JqOiBhbnkpID0+IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9uU2V0VmFsdWU6IChvYmo6IGFueSwgdmFsdWU6IGFueSwganNvbkNvbnY6IEpzb25PYmplY3QpID0+IGFueVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudHlwZVZhbHVlID8gdGhpcy50eXBlVmFsdWUgOiBcInN0cmluZ1wiOyB9XG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50eXBlVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaGFzVG9Vc2VHZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMub25HZXRWYWx1ZTsgfVxuICAgIHB1YmxpYyBpc0RlZmF1bHRWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5kZWZhdWx0VmFsdWUpID8gKHRoaXMuZGVmYXVsdFZhbHVlID09IHZhbHVlKSA6ICEodmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWUob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5vbkdldFZhbHVlKSByZXR1cm4gdGhpcy5vbkdldFZhbHVlKG9iaik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc1RvVXNlU2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLm9uU2V0VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0VmFsdWUob2JqOiBhbnksIHZhbHVlOiBhbnksIGpzb25Db252OiBKc29uT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLm9uU2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub25TZXRWYWx1ZShvYmosIHZhbHVlLCBqc29uQ29udik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldE9ialR5cGUob2JqVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc05hbWVQYXJ0KSByZXR1cm4gb2JqVHlwZTtcbiAgICAgICAgcmV0dXJuIG9ialR5cGUucmVwbGFjZSh0aGlzLmNsYXNzTmFtZVBhcnQsIFwiXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNsYXNzTmFtZVBhcnQgJiYgY2xhc3NOYW1lLmluZGV4T2YodGhpcy5jbGFzc05hbWVQYXJ0KSA8IDApID8gY2xhc3NOYW1lICsgdGhpcy5jbGFzc05hbWVQYXJ0IDogY2xhc3NOYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZXNWYWx1ZSAhPSBudWxsKSByZXR1cm4gdGhpcy5jaG9pY2VzVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZXNmdW5jICE9IG51bGwpIHJldHVybiB0aGlzLmNob2ljZXNmdW5jKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q2hvaWNlcyh2YWx1ZTogQXJyYXk8YW55PiwgdmFsdWVGdW5jOiAoKSA9PiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMuY2hvaWNlc1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hvaWNlc2Z1bmMgPSB2YWx1ZUZ1bmM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEpzb25NZXRhZGF0YUNsYXNzIHtcbiAgICBzdGF0aWMgcmVxdWlyZWRTeW1ib2wgPSAnISc7XG4gICAgc3RhdGljIHR5cGVTeW1ib2wgPSAnOic7XG4gICAgcHJvcGVydGllczogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PiA9IG51bGw7XG4gICAgcmVxdWlyZWRQcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBBcnJheTxhbnk+LCBwdWJsaWMgY3JlYXRvcjogKCkgPT4gYW55ID0gbnVsbCwgcHVibGljIHBhcmVudE5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuY3JlYXRlUHJvcGVydHkocHJvcGVydGllc1tpXSk7XG4gICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBmaW5kKG5hbWU6IHN0cmluZyk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVByb3BlcnR5KHByb3BJbmZvOiBhbnkpOiBKc29uT2JqZWN0UHJvcGVydHkge1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gdHlwZW9mIHByb3BJbmZvID09PSBcInN0cmluZ1wiID8gcHJvcEluZm8gOiBwcm9wSW5mby5uYW1lO1xuICAgICAgICBpZiAoIXByb3BlcnR5TmFtZSkgcmV0dXJuO1xuICAgICAgICB2YXIgcHJvcGVydHlUeXBlID0gbnVsbDtcbiAgICAgICAgdmFyIHR5cGVJbmRleCA9IHByb3BlcnR5TmFtZS5pbmRleE9mKEpzb25NZXRhZGF0YUNsYXNzLnR5cGVTeW1ib2wpO1xuICAgICAgICBpZiAodHlwZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcodHlwZUluZGV4ICsgMSk7XG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyaW5nKDAsIHR5cGVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5nZXRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgdmFyIHByb3AgPSBuZXcgSnNvbk9iamVjdFByb3BlcnR5KHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUpIHtcbiAgICAgICAgICAgIHByb3AudHlwZSA9IHByb3BlcnR5VHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByb3BJbmZvID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZiAocHJvcEluZm8udHlwZSkge1xuICAgICAgICAgICAgICAgIHByb3AudHlwZSA9IHByb3BJbmZvLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHByb3AuZGVmYXVsdFZhbHVlID0gcHJvcEluZm8uZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5pc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlUHJvcGVydHlSZXF1aXJlZChwcm9wLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmNob2ljZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hvaWNlc0Z1bmMgPSB0eXBlb2YgcHJvcEluZm8uY2hvaWNlcyA9PT0gXCJmdW5jdGlvblwiID8gcHJvcEluZm8uY2hvaWNlcyA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGNob2ljZXNWYWx1ZSA9IHR5cGVvZiBwcm9wSW5mby5jaG9pY2VzICE9PSBcImZ1bmN0aW9uXCIgPyBwcm9wSW5mby5jaG9pY2VzIDogbnVsbDtcbiAgICAgICAgICAgICAgICBwcm9wLnNldENob2ljZXMoY2hvaWNlc1ZhbHVlLCBjaG9pY2VzRnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8ub25HZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb3Aub25HZXRWYWx1ZSA9IHByb3BJbmZvLm9uR2V0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8ub25TZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb3Aub25TZXRWYWx1ZSA9IHByb3BJbmZvLm9uU2V0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5jbGFzc05hbWUgPSBwcm9wSW5mby5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uYmFzZUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHByb3AuYmFzZUNsYXNzTmFtZSA9IHByb3BJbmZvLmJhc2VDbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uY2xhc3NOYW1lUGFydCkge1xuICAgICAgICAgICAgICAgIHByb3AuY2xhc3NOYW1lUGFydCA9IHByb3BJbmZvLmNsYXNzTmFtZVBhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZS5sZW5ndGggPT0gMCB8fCBwcm9wZXJ0eU5hbWVbMF0gIT0gSnNvbk1ldGFkYXRhQ2xhc3MucmVxdWlyZWRTeW1ib2wpIHJldHVybiBwcm9wZXJ0eU5hbWU7XG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZS5zbGljZSgxKTtcbiAgICAgICAgdGhpcy5tYWtlUHJvcGVydHlSZXF1aXJlZChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICAgIH1cbiAgICBwcml2YXRlIG1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXF1aXJlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWRQcm9wZXJ0aWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVpcmVkUHJvcGVydGllcy5wdXNoKHByb3BlcnR5TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEpzb25NZXRhZGF0YSB7XG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBIYXNoVGFibGU8SnNvbk1ldGFkYXRhQ2xhc3M+ID0ge307XG4gICAgcHJpdmF0ZSBjaGlsZHJlbkNsYXNzZXM6IEhhc2hUYWJsZTxBcnJheTxKc29uTWV0YWRhdGFDbGFzcz4+ID0ge307XG4gICAgcHJpdmF0ZSBjbGFzc1Byb3BlcnRpZXM6IEhhc2hUYWJsZTxBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+PiA9IHt9O1xuICAgIHByaXZhdGUgY2xhc3NSZXF1aXJlZFByb3BlcnRpZXM6IEhhc2hUYWJsZTxBcnJheTxzdHJpbmc+PiA9IHt9O1xuICAgIHB1YmxpYyBhZGRDbGFzcyhuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IEFycmF5PGFueT4sIGNyZWF0b3I6ICgpID0+IGFueSA9IG51bGwsIHBhcmVudE5hbWU6IHN0cmluZyA9IG51bGwpOiBKc29uTWV0YWRhdGFDbGFzcyB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gbmV3IEpzb25NZXRhZGF0YUNsYXNzKG5hbWUsIHByb3BlcnRpZXMsIGNyZWF0b3IsIHBhcmVudE5hbWUpO1xuICAgICAgICB0aGlzLmNsYXNzZXNbbmFtZV0gPSBtZXRhRGF0YUNsYXNzO1xuICAgICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV07XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5DbGFzc2VzW3BhcmVudE5hbWVdLnB1c2gobWV0YURhdGFDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFEYXRhQ2xhc3M7XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZUNsYXNzQ3JlYXRvcmUobmFtZTogc3RyaW5nLCBjcmVhdG9yOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhuYW1lKTtcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MpIHtcbiAgICAgICAgICAgIG1ldGFEYXRhQ2xhc3MuY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldFByb3BlcnRpZXMobmFtZTogc3RyaW5nKTogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5jbGFzc1Byb3BlcnRpZXNbbmFtZV07XG4gICAgICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IG5ldyBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+KCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxQcm9wZXJ0aWVzKG5hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc1Byb3BlcnRpZXNbbmFtZV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlQ2xhc3MobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhuYW1lKTtcbiAgICAgICAgaWYgKCFtZXRhRGF0YUNsYXNzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIG1ldGFEYXRhQ2xhc3MuY3JlYXRvcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q2hpbGRyZW5DbGFzc2VzKG5hbWU6IHN0cmluZywgY2FuQmVDcmVhdGVkOiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxKc29uTWV0YWRhdGFDbGFzcz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHRoaXMuZmlsbENoaWxkcmVuQ2xhc3NlcyhuYW1lLCBjYW5CZUNyZWF0ZWQsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZXF1aXJlZFByb3BlcnRpZXMobmFtZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5jbGFzc1JlcXVpcmVkUHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFJlcXVpcmVkUHJvcGVydGllcyhuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NSZXF1aXJlZFByb3BlcnRpZXNbbmFtZV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUHJvcGVydHkoY2xhc3NOYW1lOiBzdHJpbmcsIHByb3BlcnR5SW5mbzogYW55KSB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKCFtZXRhRGF0YUNsYXNzKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG1ldGFEYXRhQ2xhc3MuY3JlYXRlUHJvcGVydHkocHJvcGVydHlJbmZvKTtcbiAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmFkZFByb3BlcnR5VG9DbGFzcyhtZXRhRGF0YUNsYXNzLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB0aGlzLmVtcHR5Q2xhc3NQcm9wZXJ0aWVzSGFzaChtZXRhRGF0YUNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlUHJvcGVydHkoY2xhc3NOYW1lOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKCFtZXRhRGF0YUNsYXNzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG1ldGFEYXRhQ2xhc3MuZmluZChwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJvcGVydHlGcm9tQ2xhc3MobWV0YURhdGFDbGFzcywgcHJvcGVydHkpO1xuICAgICAgICAgICAgdGhpcy5lbXB0eUNsYXNzUHJvcGVydGllc0hhc2gobWV0YURhdGFDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQcm9wZXJ0eVRvQ2xhc3MobWV0YURhdGFDbGFzczogSnNvbk1ldGFkYXRhQ2xhc3MsIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MuZmluZChwcm9wZXJ0eS5uYW1lKSAhPSBudWxsKSByZXR1cm47XG4gICAgICAgIG1ldGFEYXRhQ2xhc3MucHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVQcm9wZXJ0eUZyb21DbGFzcyhtZXRhRGF0YUNsYXNzOiBKc29uTWV0YWRhdGFDbGFzcywgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICB2YXIgaW5kZXggPSBtZXRhRGF0YUNsYXNzLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgbWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcykge1xuICAgICAgICAgICAgaW5kZXggPSBtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5Lm5hbWUpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZW1wdHlDbGFzc1Byb3BlcnRpZXNIYXNoKG1ldGFEYXRhQ2xhc3M6IEpzb25NZXRhZGF0YUNsYXNzKSB7XG4gICAgICAgIHRoaXMuY2xhc3NQcm9wZXJ0aWVzW21ldGFEYXRhQ2xhc3MubmFtZV0gPSBudWxsO1xuICAgICAgICB2YXIgY2hpbGRDbGFzc2VzID0gdGhpcy5nZXRDaGlsZHJlbkNsYXNzZXMobWV0YURhdGFDbGFzcy5uYW1lKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NQcm9wZXJ0aWVzW2NoaWxkQ2xhc3Nlc1tpXS5uYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaWxsQ2hpbGRyZW5DbGFzc2VzKG5hbWU6IHN0cmluZywgY2FuQmVDcmVhdGVkOiBib29sZWFuLCByZXN1bHQ6IEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuQ2xhc3Nlc1tuYW1lXTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNhbkJlQ3JlYXRlZCB8fCBjaGlsZHJlbltpXS5jcmVhdG9yKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maWxsQ2hpbGRyZW5DbGFzc2VzKGNoaWxkcmVuW2ldLm5hbWUsIGNhbkJlQ3JlYXRlZCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbmRDbGFzcyhuYW1lOiBzdHJpbmcpOiBKc29uTWV0YWRhdGFDbGFzcyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzZXNbbmFtZV07XG4gICAgfVxuICAgIHByaXZhdGUgZmlsbFByb3BlcnRpZXMobmFtZTogc3RyaW5nLCBsaXN0OiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+KSB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MobmFtZSk7XG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuO1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxQcm9wZXJ0aWVzKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSwgbGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhRGF0YUNsYXNzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvcGVydHlDb3JlKG1ldGFEYXRhQ2xhc3MucHJvcGVydGllc1tpXSwgbGlzdCwgbGlzdC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYWRkUHJvcGVydHlDb3JlKHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHksIGxpc3Q6IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4sIGVuZEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0ubmFtZSA9PSBwcm9wZXJ0eS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RbaW5kZXhdID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG5hbWU6IHN0cmluZywgbGlzdDogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybjtcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShsaXN0LCBtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5maWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSwgbGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbkVycm9yIHtcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGF0OiBOdW1iZXIgPSAtMTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRGdWxsRGVzY3JpcHRpb24oKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UgKyAodGhpcy5kZXNjcmlwdGlvbiA/IFwiXFxuXCIgKyB0aGlzLmRlc2NyaXB0aW9uIDogXCJcIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEpzb25Vbmtub3duUHJvcGVydHlFcnJvciBleHRlbmRzIEpzb25FcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJ1bmtub3ducHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGluIGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJyBpcyB1bmtub3duLlwiKTtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRoZSBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGFyZTogXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHRoaXMuZGVzY3JpcHRpb24gKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gKz0gcHJvcGVydGllc1tpXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSAnLic7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbk1pc3NpbmdUeXBlRXJyb3JCYXNlIGV4dGVuZHMgSnNvbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nLCBwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJUaGUgZm9sbG93aW5nIHR5cGVzIGFyZSBhdmFpbGFibGU6IFwiO1xuICAgICAgICB2YXIgdHlwZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhiYXNlQ2xhc3NOYW1lLCB0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB0aGlzLmRlc2NyaXB0aW9uICs9IFwiLCBcIjtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gKz0gXCInXCIgKyB0eXBlc1tpXS5uYW1lICsgXCInXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBcIi5cIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbk1pc3NpbmdUeXBlRXJyb3IgZXh0ZW5kcyBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHVibGljIGJhc2VDbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihiYXNlQ2xhc3NOYW1lLCBcIm1pc3Npbmd0eXBlcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgdHlwZSBpcyBtaXNzaW5nIGluIHRoZSBvYmplY3QuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCBwcm9wZXJ0eTogJ1wiICsgcHJvcGVydHlOYW1lICsgXCInLlwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbkluY29ycmVjdFR5cGVFcnJvciBleHRlbmRzIEpzb25NaXNzaW5nVHlwZUVycm9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGJhc2VDbGFzc05hbWUsIFwiaW5jb3JyZWN0dHlwZXByb3BlcnR5XCIsIFwiVGhlIHByb3BlcnR5IHR5cGUgaXMgaW5jb3JyZWN0IGluIHRoZSBvYmplY3QuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCBwcm9wZXJ0eTogJ1wiICsgcHJvcGVydHlOYW1lICsgXCInLlwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvblJlcXVpcmVkUHJvcGVydHlFcnJvciBleHRlbmRzIEpzb25FcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJyZXF1aXJlZHByb3BlcnR5XCIsIFwiVGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBpcyByZXF1aXJlZCBpbiBjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicuXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpzb25PYmplY3Qge1xuICAgIHByaXZhdGUgc3RhdGljIHR5cGVQcm9wZXJ0eU5hbWUgPSBcInR5cGVcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBwb3NpdGlvblByb3BlcnR5TmFtZSA9IFwicG9zXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbWV0YURhdGFWYWx1ZSA9IG5ldyBKc29uTWV0YWRhdGEoKTtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtZXRhRGF0YSgpIHsgcmV0dXJuIEpzb25PYmplY3QubWV0YURhdGFWYWx1ZTsgfVxuICAgIHB1YmxpYyBlcnJvcnMgPSBuZXcgQXJyYXk8SnNvbkVycm9yPigpO1xuICAgIHB1YmxpYyB0b0pzb25PYmplY3Qob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0pzb25PYmplY3RDb3JlKG9iaiwgbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyB0b09iamVjdChqc29uT2JqOiBhbnksIG9iajogYW55KSB7XG4gICAgICAgIGlmICghanNvbk9iaikgcmV0dXJuO1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IG51bGw7XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSkge1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhvYmouZ2V0VHlwZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gSnNvbk9iamVjdC5wb3NpdGlvblByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0ganNvbk9ialtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5maW5kUHJvcGVydHkocHJvcGVydGllcywga2V5KTtcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5ld0Vycm9yKG5ldyBKc29uVW5rbm93blByb3BlcnR5RXJyb3Ioa2V5LnRvU3RyaW5nKCksIG9iai5nZXRUeXBlKCkpLCBqc29uT2JqKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFsdWVUb09iaihqc29uT2JqW2tleV0sIG9iaiwga2V5LCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHRvSnNvbk9iamVjdENvcmUob2JqOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuICAgICAgICBpZiAoIW9iai5nZXRUeXBlKSByZXR1cm4gb2JqO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPSBudWxsICYmICghcHJvcGVydHkuY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgcmVzdWx0W0pzb25PYmplY3QudHlwZVByb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eS5nZXRPYmpUeXBlKG9iai5nZXRUeXBlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKG9iai5nZXRUeXBlKCkpO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVRvSnNvbihvYmosIHJlc3VsdCwgcHJvcGVydGllc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9Kc29uKG9iajogYW55LCByZXN1bHQ6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAocHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eS5nZXRWYWx1ZShvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBvYmpbcHJvcGVydHkubmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKHByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHZhbHVlKSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgYXJyVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJWYWx1ZS5wdXNoKHRoaXMudG9Kc29uT2JqZWN0Q29yZSh2YWx1ZVtpXSwgcHJvcGVydHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gYXJyVmFsdWUubGVuZ3RoID4gMCA/IGFyclZhbHVlIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy50b0pzb25PYmplY3RDb3JlKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eS5uYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZVRvT2JqKHZhbHVlOiBhbnksIG9iajogYW55LCBrZXk6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAocHJvcGVydHkgIT0gbnVsbCAmJiBwcm9wZXJ0eS5oYXNUb1VzZVNldFZhbHVlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eS5zZXRWYWx1ZShvYmosIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVG9BcnJheSh2YWx1ZSwgb2JqLCBrZXksIHByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3T2JqID0gdGhpcy5jcmVhdGVOZXdPYmoodmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKG5ld09iai5uZXdPYmopIHtcbiAgICAgICAgICAgIHRoaXMudG9PYmplY3QodmFsdWUsIG5ld09iai5uZXdPYmopO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdPYmoubmV3T2JqO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbmV3T2JqLmVycm9yKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaXNWYWx1ZUFycmF5KHZhbHVlOiBhbnkpOiBib29sZWFuIHsgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuaW5kZXhPZihcIkFycmF5XCIpID4gLTE7IH1cbiAgICBwcml2YXRlIGNyZWF0ZU5ld09iaih2YWx1ZTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgbmV3T2JqOiBudWxsLCBlcnJvcjogbnVsbCB9O1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdmFsdWVbSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUgJiYgcHJvcGVydHkgIT0gbnVsbCAmJiBwcm9wZXJ0eS5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BlcnR5LmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wZXJ0eS5nZXRDbGFzc05hbWUoY2xhc3NOYW1lKTtcbiAgICAgICAgcmVzdWx0Lm5ld09iaiA9IChjbGFzc05hbWUpID8gSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhjbGFzc05hbWUpIDogbnVsbDtcbiAgICAgICAgcmVzdWx0LmVycm9yID0gdGhpcy5jaGVja05ld09iamVjdE9uRXJyb3JzKHJlc3VsdC5uZXdPYmosIHZhbHVlLCBwcm9wZXJ0eSwgY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja05ld09iamVjdE9uRXJyb3JzKG5ld09iajogYW55LCB2YWx1ZTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5LCBjbGFzc05hbWU6IHN0cmluZyk6IEpzb25FcnJvciB7XG4gICAgICAgIHZhciBlcnJvciA9IG51bGw7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIHZhciByZXF1aXJlZFByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFJlcXVpcmVkUHJvcGVydGllcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVkUHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVxdWlyZWRQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVbcmVxdWlyZWRQcm9wZXJ0aWVzW2ldXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSnNvblJlcXVpcmVkUHJvcGVydHlFcnJvcihyZXF1aXJlZFByb3BlcnRpZXNbaV0sIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5iYXNlQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSnNvbk1pc3NpbmdUeXBlRXJyb3IocHJvcGVydHkubmFtZSwgcHJvcGVydHkuYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSnNvbkluY29ycmVjdFR5cGVFcnJvcihwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld0Vycm9yKGVycm9yLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZE5ld0Vycm9yKGVycm9yOiBKc29uRXJyb3IsIGpzb25PYmo6IGFueSkge1xuICAgICAgICBpZiAoanNvbk9iaiAmJiBqc29uT2JqW0pzb25PYmplY3QucG9zaXRpb25Qcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgICAgICBlcnJvci5hdCA9IGpzb25PYmpbSnNvbk9iamVjdC5wb3NpdGlvblByb3BlcnR5TmFtZV0uc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgfVxuICAgIHByaXZhdGUgdmFsdWVUb0FycmF5KHZhbHVlOiBBcnJheTxhbnk+LCBvYmo6IGFueSwga2V5OiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsdWVBcnJheShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jcmVhdGVOZXdPYmoodmFsdWVbaV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5uZXdPYmopIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XS5wdXNoKG5ld1ZhbHVlLm5ld09iaik7XG4gICAgICAgICAgICAgICAgdGhpcy50b09iamVjdCh2YWx1ZVtpXSwgbmV3VmFsdWUubmV3T2JqKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XS5wdXNoKHZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kUHJvcGVydHkocHJvcGVydGllczogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5Piwga2V5OiBhbnkpOiBKc29uT2JqZWN0UHJvcGVydHkge1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0ga2V5KSByZXR1cm4gcHJvcGVydGllc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzb25vYmplY3QudHMiLCJpbXBvcnQge0Jhc2UsIEl0ZW1WYWx1ZSwgU3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7Q3VzdG9tRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBDaG9pY2VzUmVzdGZ1bGwgZXh0ZW5kcyBCYXNlIHtcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyB2YWx1ZU5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHRpdGxlTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZ2V0UmVzdWx0Q2FsbGJhY2s6IChpdGVtczogQXJyYXk8SXRlbVZhbHVlPikgPT4gdm9pZDtcbiAgICBwdWJsaWMgZXJyb3I6IFN1cnZleUVycm9yID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVybCB8fCAhdGhpcy5nZXRSZXN1bHRDYWxsYmFjaykgcmV0dXJuO1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgdGhpcy51cmwpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnN0YXR1c1RleHQsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJjaG9pY2VzQnlVcmxcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnVybCAmJiAhdGhpcy5wYXRoICYmICF0aGlzLnZhbHVlTmFtZSAmJiAhdGhpcy50aXRsZU5hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXREYXRhKGpzb246IGFueSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGlmIChqc29uLnVybCkgdGhpcy51cmwgPSBqc29uLnVybDtcbiAgICAgICAgaWYgKGpzb24ucGF0aCkgdGhpcy5wYXRoID0ganNvbi5wYXRoO1xuICAgICAgICBpZiAoanNvbi52YWx1ZU5hbWUpIHRoaXMudmFsdWVOYW1lID0ganNvbi52YWx1ZU5hbWU7XG4gICAgICAgIGlmIChqc29uLnRpdGxlTmFtZSkgdGhpcy50aXRsZU5hbWUgPSBqc29uLnRpdGxlTmFtZTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnVybCA9IFwiXCI7XG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XG4gICAgICAgIHRoaXMudmFsdWVOYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy50aXRsZU5hbWUgPSBcIlwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKHJlc3VsdDogYW55KSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICByZXN1bHQgPSB0aGlzLmdldFJlc3VsdEFmdGVyUGF0aChyZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdFtcImxlbmd0aFwiXSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXRlbVZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZShpdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IEl0ZW1WYWx1ZSh2YWx1ZSwgdGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInVybEdldENob2ljZXNFcnJvclwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRSZXN1bHRDYWxsYmFjayhpdGVtcyk7XG4gICAgfVxuICAgIHByaXZhdGUgb25FcnJvcihzdGF0dXM6IHN0cmluZywgcmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVycm9yID0gbmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1cmxSZXF1ZXN0RXJyb3JcIilbXCJmb3JtYXRcIl0oc3RhdHVzLCByZXNwb25zZSkpO1xuICAgICAgICB0aGlzLmdldFJlc3VsdENhbGxiYWNrKFtdKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRSZXN1bHRBZnRlclBhdGgocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGlmICghdGhpcy5wYXRoKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICB2YXIgcGF0aGVzID0gdGhpcy5nZXRQYXRoZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtwYXRoZXNbaV1dO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UGF0aGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcGF0aGVzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBhdGguaW5kZXhPZignOycpID4gLTEpIHtcbiAgICAgICAgICAgIHBhdGhlcyA9IHRoaXMucGF0aC5zcGxpdCgnOycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aGVzID0gdGhpcy5wYXRoLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGhlcy5sZW5ndGggPT0gMCkgcGF0aGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICAgICAgcmV0dXJuIHBhdGhlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZU5hbWUpIHJldHVybiBpdGVtW3RoaXMudmFsdWVOYW1lXTtcbiAgICAgICAgdmFyIGxlbiA9IE9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA8IDEpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gaXRlbVtPYmplY3Qua2V5cyhpdGVtKVswXV07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGl0bGUoaXRlbTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlTmFtZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBpdGVtW3RoaXMudGl0bGVOYW1lXTtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY2hvaWNlc0J5VXJsXCIsIFtcInVybFwiLCBcInBhdGhcIiwgXCJ2YWx1ZU5hbWVcIiwgXCJ0aXRsZU5hbWVcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBDaG9pY2VzUmVzdGZ1bGwoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50cyIsImltcG9ydCB7SGFzaFRhYmxlfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtDb25kaXRpb25zUGFyc2VyfSBmcm9tICcuL2NvbmRpdGlvbnNQYXJzZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uIHtcbiAgICBzdGF0aWMgb3BlcmF0b3JzVmFsdWU6IEhhc2hUYWJsZTxGdW5jdGlvbj4gPSBudWxsO1xuICAgIHN0YXRpYyBnZXQgb3BlcmF0b3JzKCkge1xuICAgICAgICBpZiAoQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlICE9IG51bGwpIHJldHVybiBDb25kaXRpb24ub3BlcmF0b3JzVmFsdWU7XG4gICAgICAgIENvbmRpdGlvbi5vcGVyYXRvcnNWYWx1ZSA9IHtcbiAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuICFsZWZ0OyB9LFxuICAgICAgICAgICAgbm90ZW1wdHk6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gISghbGVmdCk7IH0sXG4gICAgICAgICAgICBlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ID09IHJpZ2h0OyB9LFxuICAgICAgICAgICAgbm90ZXF1YWw6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCAhPSByaWdodDsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgJiYgbGVmdFtcImluZGV4T2ZcIl0gJiYgbGVmdC5pbmRleE9mKHJpZ2h0KSA+IC0xOyB9LFxuICAgICAgICAgICAgbm90Y29udGFpbnM6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gIWxlZnQgfHwgIWxlZnRbXCJpbmRleE9mXCJdIHx8IGxlZnQuaW5kZXhPZihyaWdodCkgPT0gLTE7IH0sXG4gICAgICAgICAgICBncmVhdGVyOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPiByaWdodDsgfSxcbiAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA8IHJpZ2h0OyB9LFxuICAgICAgICAgICAgZ3JlYXRlcm9yZXF1YWw6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA+PSByaWdodDsgfSxcbiAgICAgICAgICAgIGxlc3NvcmVxdWFsOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPD0gcmlnaHQ7IH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbi5vcGVyYXRvcnNWYWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcFZhbHVlOiBzdHJpbmcgPSBcImVxdWFsXCI7XG4gICAgcHVibGljIGxlZnQ6IGFueTtcbiAgICBwdWJsaWMgcmlnaHQ6IGFueTtcbiAgICBwdWJsaWMgZ2V0IG9wZXJhdG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IG9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghQ29uZGl0aW9uLm9wZXJhdG9yc1t2YWx1ZV0pIHJldHVybjtcbiAgICAgICAgdGhpcy5vcFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBwZXJmb3JtKGxlZnQ6IGFueSA9IG51bGwsIHJpZ2h0OiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghbGVmdCkgbGVmdCA9IHRoaXMubGVmdDtcbiAgICAgICAgaWYgKCFyaWdodCkgcmlnaHQgPSB0aGlzLnJpZ2h0O1xuXG4gICAgICAgIHJldHVybiBDb25kaXRpb24ub3BlcmF0b3JzW3RoaXMub3BlcmF0b3JdKHRoaXMuZ2V0UHVyZVZhbHVlKGxlZnQpLCB0aGlzLmdldFB1cmVWYWx1ZShyaWdodCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFB1cmVWYWx1ZSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdmFsIHx8ICh0eXBlb2YgdmFsICE9IFwic3RyaW5nXCIpKSByZXR1cm4gdmFsO1xuICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPiAwICYmICh2YWxbMF0gPT0gXCInXCIgfHwgdmFsWzBdID09ICdcIicpKSAgdmFsID0gdmFsLnN1YnN0cigxKTtcbiAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwICYmICh2YWxbbGVuIC0gMV0gPT0gXCInXCIgfHwgdmFsW2xlbiAtIDFdID09ICdcIicpKSAgdmFsID0gdmFsLnN1YnN0cigwLCBsZW4gLSAxKTtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uTm9kZSB7XG4gICAgcHJpdmF0ZSBjb25uZWN0aXZlVmFsdWU6IHN0cmluZyA9IFwiYW5kXCI7XG4gICAgcHVibGljIGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgcHVibGljIGdldCBjb25uZWN0aXZlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbm5lY3RpdmVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29ubmVjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodmFsdWUgPT0gXCImXCIgfHwgdmFsdWUgPT0gXCImJlwiKSB2YWx1ZSA9IFwiYW5kXCI7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBcInxcIiB8fCB2YWx1ZSA9PSBcInx8XCIpIHZhbHVlID0gXCJvclwiO1xuICAgICAgICBpZiAodmFsdWUgIT0gXCJhbmRcIiAmJiB2YWx1ZSAhPSBcIm9yXCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb25uZWN0aXZlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCkgeyByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggPT0gMDsgfVxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RpdmUgPSBcImFuZFwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25SdW5uZXIge1xuICAgIHByaXZhdGUgZXhwcmVzc2lvblZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb290OiBDb25kaXRpb25Ob2RlO1xuICAgIHByaXZhdGUgdmFsdWVzOiBIYXNoVGFibGU8YW55PjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBDb25kaXRpb25Ob2RlKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5leHByZXNzaW9uVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvblZhbHVlID0gdmFsdWU7XG4gICAgICAgIG5ldyBDb25kaXRpb25zUGFyc2VyKCkucGFyc2UodGhpcy5leHByZXNzaW9uVmFsdWUsIHRoaXMucm9vdCk7XG4gICAgfVxuICAgIHB1YmxpYyBydW4odmFsdWVzOiBIYXNoVGFibGU8YW55Pik6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuTm9kZSh0aGlzLnJvb3QpO1xuICAgIH1cbiAgICBwcml2YXRlIHJ1bk5vZGUobm9kZTogQ29uZGl0aW9uTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgb25GaXJzdEZhaWwgPSBub2RlLmNvbm5lY3RpdmUgPT0gXCJhbmRcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5ydW5Ob2RlQ29uZGl0aW9uKG5vZGUuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKCFyZXMgJiYgb25GaXJzdEZhaWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgIW9uRmlyc3RGYWlsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25GaXJzdEZhaWw7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuTm9kZUNvbmRpdGlvbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlW1wiY2hpbGRyZW5cIl0pIHJldHVybiB0aGlzLnJ1bk5vZGUodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVbXCJsZWZ0XCJdKSByZXR1cm4gdGhpcy5ydW5Db25kaXRpb24odmFsdWUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuQ29uZGl0aW9uKGNvbmRpdGlvbjogQ29uZGl0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBsZWZ0ID0gY29uZGl0aW9uLmxlZnQ7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRWYWx1ZU5hbWUobGVmdCk7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMudmFsdWVzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMudmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciByaWdodCA9IGNvbmRpdGlvbi5yaWdodDtcbiAgICAgICAgbmFtZSA9IHRoaXMuZ2V0VmFsdWVOYW1lKHJpZ2h0KTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy52YWx1ZXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByaWdodCA9IHRoaXMudmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25kaXRpb24ucGVyZm9ybShsZWZ0LCByaWdodCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVOYW1lKG5vZGVWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICghbm9kZVZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlVmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKG5vZGVWYWx1ZS5sZW5ndGggPCAzIHx8IG5vZGVWYWx1ZVswXSAhPSAneycgfHwgbm9kZVZhbHVlW25vZGVWYWx1ZS5sZW5ndGggLSAxXSAhPSAnfScpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbm9kZVZhbHVlLnN1YnN0cigxLCBub2RlVmFsdWUubGVuZ3RoIC0gMik7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25kaXRpb25zLnRzIiwiaW1wb3J0IHtDb25kaXRpb24sIENvbmRpdGlvbk5vZGV9IGZyb20gXCIuL2NvbmRpdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbnNQYXJzZXIge1xuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuICAgIHByaXZhdGUgcm9vdDogQ29uZGl0aW9uTm9kZTtcbiAgICBwcml2YXRlIGV4cHJlc3Npb25Ob2RlczogQXJyYXk8Q29uZGl0aW9uTm9kZT47XG4gICAgcHJpdmF0ZSBub2RlOiBDb25kaXRpb25Ob2RlO1xuICAgIHByaXZhdGUgYXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGxlbmd0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJvb3Q6IENvbmRpdGlvbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5yb290LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYXQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMudGV4dC5sZW5ndGg7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnBhcnNlVGV4dCgpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwdWJsaWMgdG9TdHJpbmcocm9vdDogQ29uZGl0aW9uTm9kZSk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVUb1N0cmluZyhyb290KTtcbiAgICB9XG4gICAgcHJpdmF0ZSB0b1N0cmluZ0NvcmUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xuICAgICAgICBpZiAodmFsdWVbXCJjaGlsZHJlblwiXSkgcmV0dXJuIHRoaXMubm9kZVRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlW1wibGVmdFwiXSkgcmV0dXJuIHRoaXMuY29uZGl0aW9uVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBub2RlVG9TdHJpbmcobm9kZTogQ29uZGl0aW9uTm9kZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChub2RlLmlzRW1wdHkpIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgcmVzID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZVRleHQgPSB0aGlzLnRvU3RyaW5nQ29yZShub2RlLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGlmIChub2RlVGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXMpIHJlcyArPSAnICcgKyBub2RlLmNvbm5lY3RpdmUgKyAnICc7XG4gICAgICAgICAgICAgICAgcmVzICs9IG5vZGVUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlICE9IHRoaXMucm9vdCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJlcyA9ICcoJyArIHJlcyArICcpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbmRpdGlvblRvU3RyaW5nKGNvbmRpdGlvbjogQ29uZGl0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFjb25kaXRpb24ucmlnaHQgfHwgIWNvbmRpdGlvbi5vcGVyYXRvcikgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBsZWZ0ID0gY29uZGl0aW9uLmxlZnQ7XG4gICAgICAgIGlmIChsZWZ0ICYmICF0aGlzLmlzTnVtZXJpYyhsZWZ0KSkgbGVmdCA9IFwiJ1wiICsgbGVmdCArIFwiJ1wiO1xuICAgICAgICB2YXIgcmVzID0gbGVmdCArICcgJyArIHRoaXMub3BlcmF0aW9uVG9TdHJpbmcoY29uZGl0aW9uLm9wZXJhdG9yKTtcbiAgICAgICAgaWYgKHRoaXMuaXNOb1JpZ2h0T3BlcmF0aW9uKGNvbmRpdGlvbi5vcGVyYXRvcikpIHJldHVybiByZXM7XG4gICAgICAgIHZhciByaWdodCA9IGNvbmRpdGlvbi5yaWdodDtcbiAgICAgICAgaWYgKHJpZ2h0ICYmICF0aGlzLmlzTnVtZXJpYyhyaWdodCkpIHJpZ2h0ID0gXCInXCIgKyByaWdodCArIFwiJ1wiO1xuICAgICAgICByZXR1cm4gcmVzICsgJyAnICsgcmlnaHQ7XG4gICAgfVxuICAgIHByaXZhdGUgb3BlcmF0aW9uVG9TdHJpbmcob3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChvcCA9PSBcImVxdWFsXCIpIHJldHVybiBcIj1cIjtcbiAgICAgICAgaWYgKG9wID09IFwibm90ZXF1YWxcIikgcmV0dXJuIFwiIT1cIjtcbiAgICAgICAgaWYgKG9wID09IFwiZ3JlYXRlclwiKSByZXR1cm4gXCI+XCI7XG4gICAgICAgIGlmIChvcCA9PSBcImxlc3NcIikgcmV0dXJuIFwiPFwiO1xuICAgICAgICBpZiAob3AgPT0gXCJncmVhdGVyb3JlcXVhbFwiKSByZXR1cm4gXCI+PVwiO1xuICAgICAgICBpZiAob3AgPT0gXCJsZXNzb3JlcXVhbFwiKSByZXR1cm4gXCI8PVwiO1xuICAgICAgICByZXR1cm4gb3A7XG4gICAgfVxuICAgIHByaXZhdGUgaXNOdW1lcmljKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBpZiAoaXNOYU4odmFsKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gaXNGaW5pdGUodmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwYXJzZVRleHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMubm9kZSA9IHRoaXMucm9vdDtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uTm9kZXMucHVzaCh0aGlzLm5vZGUpO1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5yZWFkQ29uZGl0aW9ucygpO1xuICAgICAgICByZXR1cm4gcmVzICYmIHRoaXMuYXQgPj0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZENvbmRpdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnJlYWRDb25kaXRpb24oKTtcbiAgICAgICAgaWYgKCFyZXMpIHJldHVybiByZXM7XG4gICAgICAgIHZhciBjb25uZWN0aXZlID0gdGhpcy5yZWFkQ29ubmVjdGl2ZSgpO1xuICAgICAgICBpZiAoY29ubmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDb25uZWN0aXZlKGNvbm5lY3RpdmUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZENvbmRpdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkQ29uZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMucmVhZEV4cHJlc3Npb24oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVhZFN0cmluZygpO1xuICAgICAgICBpZiAoIWxlZnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIG9wID0gdGhpcy5yZWFkT3BlcmF0b3IoKTtcbiAgICAgICAgaWYgKCFvcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYyA9IG5ldyBDb25kaXRpb24oKTtcbiAgICAgICAgYy5sZWZ0ID0gbGVmdDsgYy5vcGVyYXRvciA9IG9wO1xuICAgICAgICBpZiAoIXRoaXMuaXNOb1JpZ2h0T3BlcmF0aW9uKG9wKSkge1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRDb25kaXRpb24oYyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRFeHByZXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgICAgaWYgKHRoaXMuYXQgPj0gdGhpcy5sZW5ndGggfHwgdGhpcy5jaCAhPSAnKCcpIHJldHVybiB0cnVlO1xuICAgICAgICB0aGlzLmF0Kys7XG4gICAgICAgIHRoaXMucHVzaEV4cHJlc3Npb24oKTtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVhZENvbmRpdGlvbnMoKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5za2lwKCk7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmNoID09ICcpJztcbiAgICAgICAgICAgIHRoaXMuYXQrKztcbiAgICAgICAgICAgIHRoaXMucG9wRXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGNoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpOyB9XG4gICAgcHJpdmF0ZSBza2lwKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5hdCA8IHRoaXMubGVuZ3RoICYmIHRoaXMuaXNTcGFjZSh0aGlzLmNoKSkgdGhpcy5hdCsrO1xuICAgIH1cbiAgICBwcml2YXRlIGlzU3BhY2UoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjID09ICcgJyB8fCBjID09ICdcXG4nIHx8IGMgPT0gJ1xcdCcgfHwgYyA9PSAnXFxyJztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1F1b3RlcyhjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPT0gXCInXCIgfHwgYyA9PSAnXCInXG4gICAgfVxuICAgIHByaXZhdGUgaXNPcGVyYXRvckNoYXIoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjID09ICc+JyB8fCBjID09ICc8JyB8fCBjID09ICc9JyB8fCBjID09ICchJztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0JyYWNrZXRzKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYyA9PSAnKCcgfHwgYyA9PSAnKSc7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgICAgaWYgKHRoaXMuYXQgPj0gdGhpcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmF0O1xuICAgICAgICB2YXIgaGFzUXVvdGVzID0gdGhpcy5pc1F1b3Rlcyh0aGlzLmNoKTtcbiAgICAgICAgaWYgKGhhc1F1b3RlcykgdGhpcy5hdCsrO1xuICAgICAgICB2YXIgaXNGaXJzdE9wQ2ggPSB0aGlzLmlzT3BlcmF0b3JDaGFyKHRoaXMuY2gpO1xuICAgICAgICB3aGlsZSAodGhpcy5hdCA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1F1b3RlcyAmJiB0aGlzLmlzU3BhY2UodGhpcy5jaCkpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNRdW90ZXModGhpcy5jaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUXVvdGVzKSB0aGlzLmF0Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhhc1F1b3Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0T3BDaCAhPSB0aGlzLmlzT3BlcmF0b3JDaGFyKHRoaXMuY2gpKSBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0JyYWNrZXRzKHRoaXMuY2gpKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdCA8PSBzdGFydCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnRleHQuc3Vic3RyKHN0YXJ0LCB0aGlzLmF0IC0gc3RhcnQpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDEgJiYgdGhpcy5pc1F1b3RlcyhyZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IHJlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUXVvdGVzKHJlc1tyZXMubGVuZ3RoIC0gMV0pKSBsZW4tLTtcbiAgICAgICAgICAgICAgICByZXMgPSByZXMuc3Vic3RyKDEsIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc05vUmlnaHRPcGVyYXRpb24ob3A6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gb3AgPT0gXCJlbXB0eVwiIHx8IG9wID09IFwibm90ZW1wdHlcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkT3BlcmF0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIG9wID0gdGhpcy5yZWFkU3RyaW5nKCk7XG4gICAgICAgIGlmICghb3ApIHJldHVybiBudWxsO1xuICAgICAgICBvcCA9IG9wLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChvcCA9PSAnPicpIG9wID0gXCJncmVhdGVyXCI7XG4gICAgICAgIGlmIChvcCA9PSAnPCcpIG9wID0gXCJsZXNzXCI7XG4gICAgICAgIGlmIChvcCA9PSAnPj0nIHx8IG9wID09ICc9PicpIG9wID0gXCJncmVhdGVyb3JlcXVhbFwiO1xuICAgICAgICBpZiAob3AgPT0gJzw9JyB8fCBvcCA9PSAnPTwnKSBvcCA9IFwibGVzc29yZXF1YWxcIjtcbiAgICAgICAgaWYgKG9wID09ICc9JyB8fCBvcCA9PSAnPT0nKSBvcCA9IFwiZXF1YWxcIjtcbiAgICAgICAgaWYgKG9wID09ICc8PicgfHwgb3AgPT0gJyE9Jykgb3AgPSBcIm5vdGVxdWFsXCI7XG4gICAgICAgIGlmIChvcCA9PSAnY29udGFpbicpIG9wID0gXCJjb250YWluc1wiO1xuICAgICAgICBpZiAob3AgPT0gJ25vdGNvbnRhaW4nKSBvcCA9IFwibm90Y29udGFpbnNcIjtcbiAgICAgICAgcmV0dXJuIG9wO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRDb25uZWN0aXZlKCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBjb24gPSB0aGlzLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgaWYgKCFjb24pIHJldHVybiBudWxsO1xuICAgICAgICBjb24gPSBjb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGNvbiA9PSBcIiZcIiB8fCBjb24gPT0gXCImJlwiKSBjb24gPSBcImFuZFwiO1xuICAgICAgICBpZiAoY29uID09IFwifFwiIHx8IGNvbiA9PSBcInx8XCIpIGNvbiA9IFwib3JcIjtcbiAgICAgICAgaWYgKGNvbiAhPSBcImFuZFwiICYmIGNvbiAhPSBcIm9yXCIpIGNvbiA9IG51bGw7XG4gICAgICAgIHJldHVybiBjb247XG4gICAgfVxuICAgIHByaXZhdGUgcHVzaEV4cHJlc3Npb24oKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwb3BFeHByZXNzaW9uKCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZXhwcmVzc2lvbk5vZGVzLnBvcCgpO1xuICAgICAgICB0aGlzLm5vZGUgPSB0aGlzLmV4cHJlc3Npb25Ob2Rlc1t0aGlzLmV4cHJlc3Npb25Ob2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkQ29uZGl0aW9uKGM6IENvbmRpdGlvbikge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChjKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRDb25uZWN0aXZlKGNvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbm5lY3RpdmUgPSBjb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNvbm5lY3RpdmUgIT0gY29uKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZENvbiA9IHRoaXMubm9kZS5jb25uZWN0aXZlO1xuICAgICAgICAgICAgICAgIHZhciBvbGRDaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29ubmVjdGl2ZSA9IGNvbjtcbiAgICAgICAgICAgICAgICB2YXIgb2xkTm9kZSA9IG5ldyBDb25kaXRpb25Ob2RlKCk7XG4gICAgICAgICAgICAgICAgb2xkTm9kZS5jb25uZWN0aXZlID0gb2xkQ29uO1xuICAgICAgICAgICAgICAgIG9sZE5vZGUuY2hpbGRyZW4gPSBvbGRDaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChvbGROb2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG5ldyBDb25kaXRpb25Ob2RlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLnB1c2gobmV3Tm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZGl0aW9uc1BhcnNlci50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7QmFzZSwgSXRlbVZhbHVlLCBJU3VydmV5RGF0YSwgSGFzaFRhYmxlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtRdWVzdGlvblNlbGVjdEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25Ecm9wZG93bk1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl9kcm9wZG93blwiO1xuaW1wb3J0IHtRdWVzdGlvbkNoZWNrYm94TW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX2NoZWNrYm94XCI7XG5pbXBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cE1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl9yYWRpb2dyb3VwXCI7XG5pbXBvcnQge1F1ZXN0aW9uVGV4dE1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl90ZXh0XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ29tbWVudE1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl9jb21tZW50XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hdHJpeERyb3Bkb3duRGF0YSB7XG4gICAgb25Sb3dDaGFuZ2VkKGNlbGw6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBuZXdSb3dWYWx1ZTogYW55KTtcbiAgICBjb2x1bW5zOiBBcnJheTxNYXRyaXhEcm9wZG93bkNvbHVtbj47XG4gICAgY3JlYXRlUXVlc3Rpb24ocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgTWF0cml4RHJvcGRvd25Db2x1bW4gZXh0ZW5kcyBCYXNlIHtcbiAgICBwcml2YXRlIGNob2ljZXNWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgb3B0aW9uc0NhcHRpb246IHN0cmluZztcbiAgICBwdWJsaWMgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBoYXNPdGhlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBtaW5XaWR0aDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgY2VsbFR5cGU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xuICAgIHByaXZhdGUgY29sQ291bnRWYWx1ZTogbnVtYmVyID0gLTE7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKSB7IHJldHVybiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKSB7IHJldHVybiB0aGlzLnRpdGxlVmFsdWUgPyB0aGlzLnRpdGxlVmFsdWUgOiB0aGlzLm5hbWU7IH1cbiAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZVZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29sQ291bnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAtMSB8fCB2YWx1ZSA+IDQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb2xDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY2hvaWNlcyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNob2ljZXNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duQ2VsbCB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvblZhbHVlOiBRdWVzdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbiwgcHVibGljIHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvblZhbHVlID0gZGF0YS5jcmVhdGVRdWVzdGlvbih0aGlzLnJvdywgdGhpcy5jb2x1bW4pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVmFsdWUuc2V0RGF0YShyb3cpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHF1ZXN0aW9uKCk6IFF1ZXN0aW9uIHsgcmV0dXJuIHRoaXMucXVlc3Rpb25WYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMucXVlc3Rpb24udmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlIGltcGxlbWVudHMgSVN1cnZleURhdGEge1xuICAgIHByb3RlY3RlZCBkYXRhOiBJTWF0cml4RHJvcGRvd25EYXRhO1xuICAgIHByaXZhdGUgcm93VmFsdWVzOiBIYXNoVGFibGU8YW55PiA9IHt9O1xuICAgIHByaXZhdGUgcm93Q29tbWVudHM6IEhhc2hUYWJsZTxhbnk+ID0ge307XG4gICAgcHJpdmF0ZSBpc1NldHRpbmdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNlbGxzOiBBcnJheTxNYXRyaXhEcm9wZG93bkNlbGw+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBJTWF0cml4RHJvcGRvd25EYXRhLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5idWlsZENlbGxzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93TmFtZSgpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5yb3dWYWx1ZXM7IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucm93VmFsdWVzID0ge307XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd1ZhbHVlc1trZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0ucXVlc3Rpb24ub25TdXJ2ZXlWYWx1ZUNoYW5nZWQodGhpcy5nZXRWYWx1ZSh0aGlzLmNlbGxzW2ldLmNvbHVtbi5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NldHRpbmdWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93VmFsdWVzW25hbWVdO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2V0dGluZ1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gXCJcIikgbmV3VmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb3dWYWx1ZXNbbmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvd1ZhbHVlc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEub25Sb3dDaGFuZ2VkKHRoaXMsIHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q29tbWVudChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dDb21tZW50c1tuYW1lXTtcbiAgICB9XG4gICAgcHVibGljIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm93Q29tbWVudHNbbmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWwpIHJldHVybiB0cnVlO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIGJ1aWxkQ2VsbHMoKSB7XG4gICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5kYXRhLmNvbHVtbnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2godGhpcy5jcmVhdGVDZWxsKGNvbHVtbikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDZWxsKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBNYXRyaXhEcm9wZG93bkNlbGwge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeERyb3Bkb3duQ2VsbChjb2x1bW4sIHRoaXMsIHRoaXMuZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZSBleHRlbmRzIFF1ZXN0aW9uIGltcGxlbWVudHMgSU1hdHJpeERyb3Bkb3duRGF0YSB7XG4gICAgcHJpdmF0ZSBjb2x1bW5zVmFsdWU6IEFycmF5PE1hdHJpeERyb3Bkb3duQ29sdW1uPiA9IFtdO1xuICAgIHByaXZhdGUgY2hvaWNlc1ZhbHVlOiBJdGVtVmFsdWVbXSA9IFtdO1xuICAgIHByaXZhdGUgb3B0aW9uc0NhcHRpb25WYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBnZW5lcmF0ZWRWaXNpYmxlUm93czogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2U+O1xuICAgIHByaXZhdGUgY2VsbFR5cGVWYWx1ZTogc3RyaW5nID0gXCJkcm9wZG93blwiO1xuICAgIHByaXZhdGUgY29sdW1uQ29sQ291bnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgY29sdW1uTWluV2lkdGg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGhvcml6b250YWxTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgY29sdW1uc0NoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHNDYWxsYmFrOiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibWF0cml4ZHJvcGRvd25iYXNlXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29sdW1ucygpOiBBcnJheTxNYXRyaXhEcm9wZG93bkNvbHVtbj4geyByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNvbHVtbnModmFsdWU6IEFycmF5PE1hdHJpeERyb3Bkb3duQ29sdW1uPikge1xuICAgICAgICB0aGlzLmNvbHVtbnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbHVtbnNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNlbGxUeXBlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNlbGxUeXBlVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNlbGxUeXBlKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY2VsbFR5cGUgPT0gbmV3VmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5jZWxsVHlwZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudXBkYXRlQ2VsbHNDYWxsYmFrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb2x1bW5Db2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2x1bW5Db2xDb3VudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb2x1bW5Db2xDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiA0KSByZXR1cm47XG4gICAgICAgIHRoaXMuY29sdW1uQ29sQ291bnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnVwZGF0ZUNlbGxzQ2FsbGJhayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDb2x1bW5UaXRsZShjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHVtbi50aXRsZTtcbiAgICAgICAgaWYgKGNvbHVtbi5pc1JlcXVpcmVkICYmIHRoaXMuc3VydmV5KSB7XG4gICAgICAgICAgICB2YXIgcmVxdWlyZVRleHQgPSB0aGlzLnN1cnZleS5yZXF1aXJlZFRleHQ7XG4gICAgICAgICAgICBpZiAocmVxdWlyZVRleHQpIHJlcXVpcmVUZXh0ICs9IFwiIFwiO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVxdWlyZVRleHQgKyByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldENvbHVtbldpZHRoKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29sdW1uLm1pbldpZHRoID8gY29sdW1uLm1pbldpZHRoIDogdGhpcy5jb2x1bW5NaW5XaWR0aDtcbiAgICB9XG4gICAgcHVibGljIGdldCBjaG9pY2VzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5jaG9pY2VzVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNob2ljZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5jaG9pY2VzVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvcHRpb25zQ2FwdGlvbigpIHsgcmV0dXJuICh0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUpID8gdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm9wdGlvbnNDYXB0aW9uXCIpOyB9XG4gICAgcHVibGljIHNldCBvcHRpb25zQ2FwdGlvbihuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA9IG5ld1ZhbHVlOyB9XG4gICAgcHVibGljIGFkZENvbHVtbihuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBudWxsKTogTWF0cml4RHJvcGRvd25Db2x1bW4ge1xuICAgICAgICB2YXIgY29sdW1uID0gbmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uKG5hbWUsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5jb2x1bW5zVmFsdWUucHVzaChjb2x1bW4pO1xuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZVJvd3MoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2U+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cyA9IHRoaXMuZ2VuZXJhdGVSb3dzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPiB7IHJldHVybiBudWxsOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1hdHJpeFJvdyhuYW1lOiBhbnksIHRleHQ6IHN0cmluZywgdmFsdWU6IGFueSk6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdWYWx1ZShjdXJWYWx1ZTogYW55KTogYW55IHsgcmV0dXJuICFjdXJWYWx1ZSA/IHt9IDogY3VyVmFsdWU7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0Um93VmFsdWUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgcXVlc3Rpb25WYWx1ZTogYW55LCBjcmVhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBxdWVzdGlvblZhbHVlW3Jvdy5yb3dOYW1lXSA/IHF1ZXN0aW9uVmFsdWVbcm93LnJvd05hbWVdIDogbnVsbDtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgY3JlYXRlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHF1ZXN0aW9uVmFsdWVbcm93LnJvd05hbWVdID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dDaGFuZ2luZyB8fCAhKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHx8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuY3JlYXRlTmV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV07XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldLnZhbHVlID0gdGhpcy5nZXRSb3dWYWx1ZShyb3csIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgZXJyb3NJbkNvbHVtbnMgPSB0aGlzLmhhc0Vycm9ySW5Db2x1bW5zKGZpcmVDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzdXBlci5oYXNFcnJvcnMoZmlyZUNhbGxiYWNrKSB8fCBlcnJvc0luQ29sdW1ucztcbiAgICB9XG4gICAgcHJpdmF0ZSBoYXNFcnJvckluQ29sdW1ucyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciByZXMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjZWxscyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV0uY2VsbHM7XG4gICAgICAgICAgICAgICAgcmVzID0gY2VsbHMgJiYgY2VsbHNbY29sSW5kZXhdICYmIGNlbGxzW2NvbEluZGV4XS5xdWVzdGlvbiAmJiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb24uaGFzRXJyb3JzKGZpcmVDYWxsYmFjaykgfHwgcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRGaXJzdElucHV0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0Rmlyc3RDZWxsUXVlc3Rpb24oZmFsc2UpO1xuICAgICAgICByZXR1cm4gcXVlc3Rpb24gPyBxdWVzdGlvbi5pbnB1dElkIDogc3VwZXIuZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RFcnJvcklucHV0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0Rmlyc3RDZWxsUXVlc3Rpb24odHJ1ZSk7XG4gICAgICAgIHJldHVybiBxdWVzdGlvbiA/IHF1ZXN0aW9uLmlucHV0SWQgOiBzdXBlci5nZXRGaXJzdEVycm9ySW5wdXRFbGVtZW50SWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEZpcnN0Q2VsbFF1ZXN0aW9uKG9uRXJyb3I6IGJvb2xlYW4pOiBRdWVzdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXS5jZWxscztcbiAgICAgICAgICAgIGZvciAodmFyIGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yKSByZXR1cm4gY2VsbHNbY29sSW5kZXhdLnF1ZXN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb24uY3VycmVudEVycm9yQ291bnQgPiAwKSByZXR1cm4gY2VsbHNbY29sSW5kZXhdLnF1ZXN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vSU1hdHJpeERyb3Bkb3duRGF0YVxuICAgIHB1YmxpYyBjcmVhdGVRdWVzdGlvbihyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb24ge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uQ29yZShyb3csIGNvbHVtbik7XG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBjb2x1bW4ubmFtZTtcbiAgICAgICAgcXVlc3Rpb24uaXNSZXF1aXJlZCA9IGNvbHVtbi5pc1JlcXVpcmVkO1xuICAgICAgICBxdWVzdGlvbi5oYXNPdGhlciA9IGNvbHVtbi5oYXNPdGhlcjtcbiAgICAgICAgaWYgKGNvbHVtbi5oYXNPdGhlcikge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uIGluc3RhbmNlb2YgUXVlc3Rpb25TZWxlY3RCYXNlKSB7XG4gICAgICAgICAgICAgICAgKDxRdWVzdGlvblNlbGVjdEJhc2U+cXVlc3Rpb24pLnN0b3JlT3RoZXJzQXNDb21tZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUXVlc3Rpb25Db3JlKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbiB7XG4gICAgICAgIHZhciBjZWxsVHlwZSA9IGNvbHVtbi5jZWxsVHlwZSA9PSBcImRlZmF1bHRcIiA/IHRoaXMuY2VsbFR5cGUgOiBjb2x1bW4uY2VsbFR5cGU7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRRdWVzdGlvbk5hbWUocm93LCBjb2x1bW4pO1xuICAgICAgICBpZiAoY2VsbFR5cGUgPT0gXCJjaGVja2JveFwiKSByZXR1cm4gdGhpcy5jcmVhdGVDaGVja2JveChuYW1lLCBjb2x1bW4pO1xuICAgICAgICBpZiAoY2VsbFR5cGUgPT0gXCJyYWRpb2dyb3VwXCIpIHJldHVybiB0aGlzLmNyZWF0ZVJhZGlvZ3JvdXAobmFtZSwgY29sdW1uKTtcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwidGV4dFwiKSByZXR1cm4gdGhpcy5jcmVhdGVUZXh0KG5hbWUsIGNvbHVtbik7XG4gICAgICAgIGlmIChjZWxsVHlwZSA9PSBcImNvbW1lbnRcIikgcmV0dXJuIHRoaXMuY3JlYXRlQ29tbWVudChuYW1lLCBjb2x1bW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEcm9wZG93bihuYW1lLCBjb2x1bW4pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0UXVlc3Rpb25OYW1lKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBzdHJpbmcgeyByZXR1cm4gcm93LnJvd05hbWUgKyBcIl9cIiArIGNvbHVtbi5uYW1lOyB9XG4gICAgcHJvdGVjdGVkIGdldENvbHVtbkNob2ljZXMoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IEFycmF5PGFueT4ge1xuICAgICAgICByZXR1cm4gY29sdW1uLmNob2ljZXMgJiYgY29sdW1uLmNob2ljZXMubGVuZ3RoID4gMCA/IGNvbHVtbi5jaG9pY2VzIDogdGhpcy5jaG9pY2VzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uT3B0aW9uc0NhcHRpb24oY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBjb2x1bW4ub3B0aW9uc0NhcHRpb24gPyBjb2x1bW4ub3B0aW9uc0NhcHRpb24gOiB0aGlzLm9wdGlvbnNDYXB0aW9uO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJvcGRvd24obmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25Ecm9wZG93bk1vZGVsIHtcbiAgICAgICAgdmFyIHEgPSA8UXVlc3Rpb25Ecm9wZG93bk1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwiZHJvcGRvd25cIiwgbmFtZSk7XG4gICAgICAgIHEuY2hvaWNlcyA9IHRoaXMuZ2V0Q29sdW1uQ2hvaWNlcyhjb2x1bW4pO1xuICAgICAgICBxLm9wdGlvbnNDYXB0aW9uID0gdGhpcy5nZXRDb2x1bW5PcHRpb25zQ2FwdGlvbihjb2x1bW4pO1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNoZWNrYm94KG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uQ2hlY2tib3hNb2RlbCB7XG4gICAgICAgIHZhciBxID0gPFF1ZXN0aW9uQ2hlY2tib3hNb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcImNoZWNrYm94XCIsIG5hbWUpO1xuICAgICAgICBxLmNob2ljZXMgPSB0aGlzLmdldENvbHVtbkNob2ljZXMoY29sdW1uKTtcbiAgICAgICAgcS5jb2xDb3VudCA9IGNvbHVtbi5jb2xDb3VudCA+IC0gMSA/IGNvbHVtbi5jb2xDb3VudCA6IHRoaXMuY29sdW1uQ29sQ291bnQ7XG4gICAgICAgIHJldHVybiBxO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUmFkaW9ncm91cChuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbCB7XG4gICAgICAgIHZhciBxID0gPFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwicmFkaW9ncm91cFwiLCBuYW1lKTtcbiAgICAgICAgcS5jaG9pY2VzID0gdGhpcy5nZXRDb2x1bW5DaG9pY2VzKGNvbHVtbik7XG4gICAgICAgIHEuY29sQ291bnQgPSBjb2x1bW4uY29sQ291bnQgPiAtIDEgPyBjb2x1bW4uY29sQ291bnQgOiB0aGlzLmNvbHVtbkNvbENvdW50O1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRleHQobmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25UZXh0TW9kZWwge1xuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uVGV4dE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwidGV4dFwiLCBuYW1lKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbW1lbnQobmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25Db21tZW50TW9kZWwge1xuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uQ29tbWVudE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwiY29tbWVudFwiLCBuYW1lKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNlbGxRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUXVlc3Rpb24ge1xuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uPlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIG5hbWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZGVsZXRlUm93VmFsdWUobmV3VmFsdWU6IGFueSwgcm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSk6IGFueSB7XG4gICAgICAgIGRlbGV0ZSBuZXdWYWx1ZVtyb3cucm93TmFtZV07XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdWYWx1ZSkubGVuZ3RoID09IDAgPyBudWxsIDogbmV3VmFsdWU7XG4gICAgfVxuICAgIG9uUm93Q2hhbmdlZChyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBuZXdSb3dWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY3JlYXRlTmV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHRoaXMuZ2V0Um93VmFsdWUocm93LCBuZXdWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiByb3dWYWx1ZSkgZGVsZXRlIHJvd1ZhbHVlW2tleV07XG4gICAgICAgIGlmIChuZXdSb3dWYWx1ZSkge1xuICAgICAgICAgICAgbmV3Um93VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ld1Jvd1ZhbHVlKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbmV3Um93VmFsdWUpIHJvd1ZhbHVlW2tleV0gPSBuZXdSb3dWYWx1ZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhyb3dWYWx1ZSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5kZWxldGVSb3dWYWx1ZShuZXdWYWx1ZSwgcm93KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiwgW1wibmFtZVwiLCB7IG5hbWU6IFwidGl0bGVcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoudGl0bGVWYWx1ZTsgfSB9LFxuICAgICAgICB7IG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXMgPSB2YWx1ZTsgfX0sXG4gICAgICAgIFwib3B0aW9uc0NhcHRpb25cIiwgeyBuYW1lOiBcImNlbGxUeXBlXCIsIGRlZmF1bHQ6IFwiZGVmYXVsdFwiLCBjaG9pY2VzOiBbXCJkZWZhdWx0XCIsIFwiZHJvcGRvd25cIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJ0ZXh0XCIsIFwiY29tbWVudFwiXSB9LFxuICAgICAgICB7IG5hbWU6IFwiY29sQ291bnRcIiwgZGVmYXVsdDogLTEsIGNob2ljZXM6IFstMSwgMCwgMSwgMiwgMywgNF0gfSwgXCJpc1JlcXVpcmVkOmJvb2xlYW5cIiwgXCJoYXNPdGhlcjpib29sZWFuXCIsIFwibWluV2lkdGhcIl0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uKFwiXCIpOyB9KTtcblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeGRyb3Bkb3duYmFzZVwiLCBbeyBuYW1lOiBcImNvbHVtbnM6bWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGNsYXNzTmFtZTogXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiIH0sXG4gICAgICAgIFwiaG9yaXpvbnRhbFNjcm9sbDpib29sZWFuXCIsXG4gICAgICAgIHsgbmFtZTogXCJjaG9pY2VzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmouY2hvaWNlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmouY2hvaWNlcyA9IHZhbHVlOyB9fSxcbiAgICAgICAgeyBuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLm9wdGlvbnNDYXB0aW9uVmFsdWU7IH0gfSxcbiAgICAgICAgeyBuYW1lOiBcImNlbGxUeXBlXCIsIGRlZmF1bHQ6IFwiZHJvcGRvd25cIiwgY2hvaWNlczogW1wiZHJvcGRvd25cIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJ0ZXh0XCIsIFwiY29tbWVudFwiXSB9LFxuICAgICAgICB7IG5hbWU6IFwiY29sdW1uQ29sQ291bnRcIiwgZGVmYXVsdDogMCwgY2hvaWNlczogWzAsIDEsIDIsIDMsIDRdIH0sIFwiY29sdW1uTWluV2lkdGhcIl0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZS50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tICcuL3F1ZXN0aW9uYmFzZSc7XG5pbXBvcnQge1N1cnZleUVycm9yLCBTdXJ2ZXlFbGVtZW50fSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtBbnN3ZXJSZXF1aXJlZEVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtTdXJ2ZXlWYWxpZGF0b3IsIElWYWxpZGF0b3JPd25lciwgVmFsaWRhdG9yUnVubmVyfSBmcm9tIFwiLi92YWxpZGF0b3JcIjtcbmltcG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4vdGV4dFByZVByb2Nlc3NvclwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBRdWVzdGlvbkJhc2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yT3duZXIge1xuICAgIHByaXZhdGUgdGl0bGVWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIHF1ZXN0aW9uVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHF1ZXN0aW9uQ29tbWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNSZXF1aXJlZFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBoYXNDb21tZW50VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGhhc090aGVyVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNvbW1lbnRUZXh0VmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSB0ZXh0UHJlUHJvY2Vzc29yOiBUZXh0UHJlUHJvY2Vzc29yO1xuICAgIGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+ID0gW107XG4gICAgdmFsaWRhdG9yczogQXJyYXk8U3VydmV5VmFsaWRhdG9yPiA9IG5ldyBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+KCk7XG4gICAgdmFsdWVDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29tbWVudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBlcnJvcnNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgdGl0bGVDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc1RpdGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldCBpbnB1dElkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkICsgXCJpXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCk6IHN0cmluZyB7IHJldHVybiAodGhpcy50aXRsZVZhbHVlKSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMubmFtZTsgfVxuICAgIHB1YmxpYyBzZXQgdGl0bGUobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpdGxlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy50aXRsZUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkVGl0bGUoKSB7IHJldHVybiB0aGlzLnN1cnZleSAhPSBudWxsID8gdGhpcy5zdXJ2ZXkucHJvY2Vzc1RleHQodGhpcy50aXRsZSkgOiB0aGlzLnRpdGxlOyB9XG4gICAgcHVibGljIGdldCBmdWxsVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ICYmIHRoaXMuc3VydmV5LnF1ZXN0aW9uVGl0bGVUZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRleHRQcmVQcm9jZXNzb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yID0gbmV3IFRleHRQcmVQcm9jZXNzb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3Iub25IYXNWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHNlbGYuY2FuUHJvY2Vzc2VkVGV4dFZhbHVlcyhuYW1lLnRvTG93ZXJDYXNlKCkpOyB9O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vblByb2Nlc3MgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLmdldFByb2Nlc3NlZFRleHRWYWx1ZShuYW1lKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRQcmVQcm9jZXNzb3IucHJvY2Vzcyh0aGlzLnN1cnZleS5xdWVzdGlvblRpdGxlVGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXF1aXJlVGV4dCA9IHRoaXMucmVxdWlyZWRUZXh0O1xuICAgICAgICBpZiAocmVxdWlyZVRleHQpIHJlcXVpcmVUZXh0ICs9IFwiIFwiO1xuICAgICAgICB2YXIgbm8gPSB0aGlzLm5vO1xuICAgICAgICBpZiAobm8pIG5vICs9IFwiLiBcIjtcbiAgICAgICAgcmV0dXJuIG5vICsgcmVxdWlyZVRleHQgKyB0aGlzLnByb2Nlc3NlZFRpdGxlO1xuICAgIH1cbiAgICBwdWJsaWMgZm9jdXMob25FcnJvcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIFN1cnZleUVsZW1lbnQuU2Nyb2xsRWxlbWVudFRvVG9wKHRoaXMuaWQpO1xuICAgICAgICB2YXIgaWQgPSAhb25FcnJvciA/IHRoaXMuZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpIDogdGhpcy5nZXRGaXJzdEVycm9ySW5wdXRFbGVtZW50SWQoKTtcbiAgICAgICAgaWYgKFN1cnZleUVsZW1lbnQuRm9jdXNFbGVtZW50KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5mb2N1c0NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dElkO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RFcnJvcklucHV0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpcnN0SW5wdXRFbGVtZW50SWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNhblByb2Nlc3NlZFRleHRWYWx1ZXMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBuYW1lID09IFwibm9cIiB8fCBuYW1lID09IFwidGl0bGVcIiB8fCBuYW1lID09IFwicmVxdWlyZVwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChuYW1lID09IFwibm9cIikgcmV0dXJuIHRoaXMubm87XG4gICAgICAgIGlmIChuYW1lID09IFwidGl0bGVcIikgcmV0dXJuIHRoaXMucHJvY2Vzc2VkVGl0bGU7XG4gICAgICAgIGlmIChuYW1lID09IFwicmVxdWlyZVwiKSByZXR1cm4gdGhpcy5yZXF1aXJlZFRleHQ7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgc3VwcG9ydENvbW1lbnQoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHB1YmxpYyBzdXBwb3J0T3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNSZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNSZXF1aXJlZFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBpc1JlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkID09IHZhbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzUmVxdWlyZWRWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy50aXRsZUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzQ29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaGFzQ29tbWVudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBoYXNDb21tZW50KHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAoIXRoaXMuc3VwcG9ydENvbW1lbnQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhc0NvbW1lbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29tbWVudCkgdGhpcy5oYXNPdGhlciA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbW1lbnRUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbW1lbnRUZXh0VmFsdWUgPyB0aGlzLmNvbW1lbnRUZXh0VmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKTsgfVxuICAgIHB1YmxpYyBzZXQgY29tbWVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbW1lbnRUZXh0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNPdGhlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaGFzT3RoZXJWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgaGFzT3RoZXIodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5zdXBwb3J0T3RoZXIoKSB8fCB0aGlzLmhhc090aGVyID09IHZhbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhc090aGVyVmFsdWUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmhhc090aGVyKSB0aGlzLmhhc0NvbW1lbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNPdGhlckNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGhhc090aGVyQ2hhbmdlZCgpIHsgfVxuICAgIHByb3RlY3RlZCBnZXQgbm8oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZUluZGV4IDwgMCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gMTtcbiAgICAgICAgdmFyIGlzTnVtZXJpYyA9IHRydWU7XG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5zdXJ2ZXkucXVlc3Rpb25TdGFydEluZGV4KSB7XG4gICAgICAgICAgICBzdHIgPSB0aGlzLnN1cnZleS5xdWVzdGlvblN0YXJ0SW5kZXg7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoc3RyKSkgc3RhcnRJbmRleCA9IHBhcnNlSW50KHN0cik7XG4gICAgICAgICAgICBlbHNlIGlmIChzdHIubGVuZ3RoID09IDEpIGlzTnVtZXJpYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWVyaWMpIHJldHVybiAodGhpcy52aXNpYmxlSW5kZXggKyBzdGFydEluZGV4KS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdHIuY2hhckNvZGVBdCgwKSArIHRoaXMudmlzaWJsZUluZGV4KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU2V0RGF0YSgpIHtcbiAgICAgICAgc3VwZXIub25TZXREYXRhKCk7XG4gICAgICAgIHRoaXMub25TdXJ2ZXlWYWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVGcm9tRGF0YSh0aGlzLmdldFZhbHVlQ29yZSgpKTtcbiAgICB9XG4gICAgcHVibGljIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnZhbHVlQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb21tZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmdldENvbW1lbnQoKTsgfVxuICAgIHB1YmxpYyBzZXQgY29tbWVudChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQgPT0gbmV3VmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRDb21tZW50KG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb21tZW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvbW1lbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZGF0YSAhPSBudWxsID8gdGhpcy5kYXRhLmdldENvbW1lbnQodGhpcy5uYW1lKSA6IHRoaXMucXVlc3Rpb25Db21tZW50OyB9XG4gICAgcHJvdGVjdGVkIHNldENvbW1lbnQobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldE5ld0NvbW1lbnQobmV3VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbDsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmNoZWNrRm9yRXJyb3JzKGZpcmVDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRFcnJvckNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGg7IH1cbiAgICBwdWJsaWMgZ2V0IHJlcXVpcmVkVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdXJ2ZXkgIT0gbnVsbCAmJiB0aGlzLmlzUmVxdWlyZWQgPyB0aGlzLnN1cnZleS5yZXF1aXJlZFRleHQgOiBcIlwiOyB9XG4gICAgcHVibGljIGFkZEVycm9yKGVycm9yOiBTdXJ2ZXlFcnJvcikge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrRm9yRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbikge1xuICAgICAgICB2YXIgZXJyb3JMZW5ndGggPSB0aGlzLmVycm9ycyA/IHRoaXMuZXJyb3JzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMub25DaGVja0ZvckVycm9ycyh0aGlzLmVycm9ycyk7XG4gICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPT0gMCAmJiB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnJ1blZhbGlkYXRvcnMoKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSAmJiB0aGlzLmVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5zdXJ2ZXkudmFsaWRhdGVRdWVzdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcmVDYWxsYmFjayAmJiAoZXJyb3JMZW5ndGggIT0gdGhpcy5lcnJvcnMubGVuZ3RoIHx8IGVycm9yTGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xuICAgICAgICBpZiAodGhpcy5oYXNSZXF1aXJlZEVycm9yKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEFuc3dlclJlcXVpcmVkRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGhhc1JlcXVpcmVkRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVxdWlyZWQgJiYgdGhpcy5pc0VtcHR5KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBydW5WYWxpZGF0b3JzKCk6IFN1cnZleUVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSdW5uZXIoKS5ydW4odGhpcyk7XG4gICAgfVxuICAgIHByaXZhdGUgaXNWYWx1ZUNoYW5nZWRJblN1cnZleSA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzZXROZXdWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0TmV3VmFsdWVJbkRhdGEobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXROZXdWYWx1ZUluRGF0YShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbHVlQ2hhbmdlZEluU3VydmV5KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMudmFsdWVUb0RhdGEobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVDb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhICE9IG51bGwgPyB0aGlzLmRhdGEuZ2V0VmFsdWUodGhpcy5uYW1lKSA6IHRoaXMucXVlc3Rpb25WYWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRWYWx1ZUNvcmUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXRWYWx1ZSh0aGlzLm5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25WYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZUZyb21EYXRhKHZhbDogYW55KTogYW55IHsgcmV0dXJuIHZhbDsgfVxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YSh2YWw6IGFueSk6IGFueSB7IHJldHVybiB2YWw7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7IH1cbiAgICBwcm90ZWN0ZWQgc2V0TmV3Q29tbWVudChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldENvbW1lbnQodGhpcy5uYW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnF1ZXN0aW9uQ29tbWVudCA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICAvL0lRdWVzdGlvblxuICAgIG9uU3VydmV5VmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWVGcm9tRGF0YShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29tbWVudENoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaXNWYWx1ZUNoYW5nZWRJblN1cnZleSA9IGZhbHNlO1xuICAgIH1cbiAgICAvL0lWYWxpZGF0b3JPd25lclxuICAgIGdldFZhbGlkYXRvclRpdGxlKCk6IHN0cmluZyB7IHJldHVybiBudWxsOyB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicXVlc3Rpb25cIiwgW3sgbmFtZTogXCJ0aXRsZTp0ZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnRpdGxlVmFsdWU7IH0gfSxcbiAgICB7IG5hbWU6IFwiY29tbWVudFRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmouY29tbWVudFRleHRWYWx1ZTsgfSB9LFxuICAgIFwiaXNSZXF1aXJlZDpib29sZWFuXCIsIHsgbmFtZTogXCJ2YWxpZGF0b3JzOnZhbGlkYXRvcnNcIiwgYmFzZUNsYXNzTmFtZTogXCJzdXJ2ZXl2YWxpZGF0b3JcIiwgY2xhc3NOYW1lUGFydDogXCJ2YWxpZGF0b3JcIn1dLCBudWxsLCBcInF1ZXN0aW9uYmFzZVwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb24udHMiLCJpbXBvcnQge0Jhc2UsIElRdWVzdGlvbiwgSUNvbmRpdGlvblJ1bm5lciwgSVN1cnZleURhdGEsIElTdXJ2ZXksIEhhc2hUYWJsZX0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcbmltcG9ydCB7Q29uZGl0aW9uUnVubmVyfSBmcm9tICcuL2NvbmRpdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25CYXNlIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElRdWVzdGlvbiwgSUNvbmRpdGlvblJ1bm5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVlc3Rpb25Db3VudGVyID0gMTAwO1xuICAgIHByaXZhdGUgc3RhdGljIGdldFF1ZXN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwic3FfXCIgKyBRdWVzdGlvbkJhc2UucXVlc3Rpb25Db3VudGVyKys7XG4gICAgfVxuICAgIHByb3RlY3RlZCBkYXRhOiBJU3VydmV5RGF0YTtcbiAgICBwcm90ZWN0ZWQgc3VydmV5OiBJU3VydmV5O1xuICAgIHByaXZhdGUgY29uZGl0aW9uUnVubmVyOiBDb25kaXRpb25SdW5uZXIgPSBudWxsO1xuICAgIHB1YmxpYyB2aXNpYmxlSWY6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBpZFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB2aXNpYmxlVmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBzdGFydFdpdGhOZXdMaW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHZpc2libGVJbmRleFZhbHVlOiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSByZW5kZXJXaWR0aFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcmlnaHRJbmRlbnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaW5kZW50OiBudW1iZXIgPSAwO1xuICAgIGZvY3VzQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcm93VmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICB2aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHZpc2libGVJbmRleENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZFZhbHVlID0gUXVlc3Rpb25CYXNlLmdldFF1ZXN0aW9uSWQoKTtcbiAgICAgICAgdGhpcy5vbkNyZWF0aW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmlzaWJsZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsID09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpc2libGVWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5KSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5xdWVzdGlvblZpc2liaWxpdHlDaGFuZ2VkKDxJUXVlc3Rpb24+dGhpcywgdGhpcy52aXNpYmxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy52aXNpYmxlSW5kZXhWYWx1ZTsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRFcnJvckNvdW50KCk6IG51bWJlciB7IHJldHVybiAwOyB9XG4gICAgcHVibGljIGdldCBoYXNUaXRsZSgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGdldCBoYXNDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHJlbmRlcldpZHRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnJlbmRlcldpZHRoVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHJlbmRlcldpZHRoKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5yZW5kZXJXaWR0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlcldpZHRoVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJpZ2h0SW5kZW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnJpZ2h0SW5kZW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHJpZ2h0SW5kZW50KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5yaWdodEluZGVudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJpZ2h0SW5kZW50VmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZm9jdXMob25FcnJvcjogYm9vbGVhbiA9IGZhbHNlKSB7IH1cbiAgICBzZXREYXRhKG5ld1ZhbHVlOiBJU3VydmV5RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSAobmV3VmFsdWUgJiYgbmV3VmFsdWVbXCJxdWVzdGlvbkFkZGVkXCJdKSA/IDxJU3VydmV5Pm5ld1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5vblNldERhdGEoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGZpcmVDYWxsYmFjayhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7IH1cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGluZygpIHsgfVxuICAgIHB1YmxpYyBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pikge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUlmKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5jb25kaXRpb25SdW5uZXIpIHRoaXMuY29uZGl0aW9uUnVubmVyID0gbmV3IENvbmRpdGlvblJ1bm5lcih0aGlzLnZpc2libGVJZik7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uUnVubmVyLmV4cHJlc3Npb24gPSB0aGlzLnZpc2libGVJZjtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25kaXRpb25SdW5uZXIucnVuKHZhbHVlcyk7XG4gICAgfVxuICAgIC8vSVF1ZXN0aW9uXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgIH1cbiAgICBvblN1cnZleUxvYWQoKSB7XG4gICAgfVxuICAgIHNldFZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJbmRleFZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZUluZGV4VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy52aXNpYmxlSW5kZXhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIGZhbHNlOyB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicXVlc3Rpb25iYXNlXCIsIFtcIiFuYW1lXCIsIHsgbmFtZTogXCJ2aXNpYmxlOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCBcInZpc2libGVJZjp0ZXh0XCIsXG4gICAgeyBuYW1lOiBcIndpZHRoXCIgfSwgeyBuYW1lOiBcInN0YXJ0V2l0aE5ld0xpbmU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlfSwge25hbWU6IFwiaW5kZW50Om51bWJlclwiLCBkZWZhdWx0OiAwLCBjaG9pY2VzOiBbMCwgMSwgMiwgM119XSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uYmFzZS50cyIsImV4cG9ydCBjbGFzcyBUZXh0UHJlUHJvY2Vzc29ySXRlbSB7XG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XG4gICAgcHVibGljIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dFByZVByb2Nlc3NvciB7XG4gICAgcHVibGljIG9uUHJvY2VzczogKG5hbWU6IHN0cmluZykgPT4gYW55O1xuICAgIHB1YmxpYyBvbkhhc1ZhbHVlOiAobmFtZTogc3RyaW5nKSA9PiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgcHVibGljIHByb2Nlc3ModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0ZXh0KSByZXR1cm4gdGV4dDtcbiAgICAgICAgaWYgKCF0aGlzLm9uUHJvY2VzcykgcmV0dXJuIHRleHQ7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXModGV4dCk7XG4gICAgICAgIGZvciAodmFyIGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXROYW1lKHRleHQuc3Vic3RyaW5nKGl0ZW0uc3RhcnQgKyAxLCBpdGVtLmVuZCkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3NOYW1lKG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uSGFzVmFsdWUgJiYgIXRoaXMub25IYXNWYWx1ZShuYW1lKSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm9uUHJvY2VzcyhuYW1lKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgaXRlbS5zdGFydCkgKyB2YWx1ZSArIHRleHQuc3Vic3RyKGl0ZW0uZW5kICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SXRlbXModGV4dDogc3RyaW5nKTogQXJyYXk8VGV4dFByZVByb2Nlc3Nvckl0ZW0+IHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgdmFyIHN0YXJ0ID0gLTE7XG4gICAgICAgIHZhciBjaCA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoY2ggPT0gJ3snKSBzdGFydCA9IGk7XG4gICAgICAgICAgICBpZiAoY2ggPT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGV4dFByZVByb2Nlc3Nvckl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgICAgIHJldHVybiBuYW1lLnRyaW0oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5Qcm9jZXNzTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoID0gbmFtZVtpXTtcbiAgICAgICAgICAgIC8vVE9ET1xuICAgICAgICAgICAgaWYgKGNoID09ICcgJyB8fCBjaCA9PSAnLScgfHwgY2ggPT0gJyYnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0UHJlUHJvY2Vzc29yLnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtJdGVtVmFsdWUsIFN1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7Q2hvaWNlc1Jlc3RmdWxsfSBmcm9tIFwiLi9jaG9pY2VzUmVzdGZ1bGxcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2VsZWN0QmFzZSBleHRlbmRzIFF1ZXN0aW9uIHtcbiAgICBwcml2YXRlIHZpc2libGVDaG9pY2VzQ2FjaGU6IEFycmF5PEl0ZW1WYWx1ZT4gPSBudWxsO1xuICAgIHByaXZhdGUgY29tbWVudFZhbHVlOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNhY2hlZFZhbHVlOiBhbnk7XG4gICAgb3RoZXJJdGVtOiBJdGVtVmFsdWUgPSBuZXcgSXRlbVZhbHVlKFwib3RoZXJcIiwgc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm90aGVySXRlbVRleHRcIikpO1xuICAgIHByaXZhdGUgY2hvaWNlc0Zyb21Vcmw6IEFycmF5PEl0ZW1WYWx1ZT4gPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkVmFsdWVGb3JVcmxSZXF1ZXN0aW9uOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgY2hvaWNlc1ZhbHVlczogQXJyYXk8SXRlbVZhbHVlPiA9IG5ldyBBcnJheTxJdGVtVmFsdWU+KCk7XG4gICAgcHVibGljIGNob2ljZXNCeVVybDogQ2hvaWNlc1Jlc3RmdWxsO1xuICAgIHB1YmxpYyBvdGhlckVycm9yVGV4dDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3RvcmVPdGhlcnNBc0NvbW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNob2ljZXNPcmRlclZhbHVlOiBzdHJpbmcgPSBcIm5vbmVcIjtcbiAgICBjaG9pY2VzQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzQnlVcmwgPSB0aGlzLmNyZWF0ZVJlc3RmdWxsKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jaG9pY2VzQnlVcmwuZ2V0UmVzdWx0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4pIHsgc2VsZi5vbkxvYWRDaG9pY2VzRnJvbVVybChpdGVtcykgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc090aGVyU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkgPyB0aGlzLmdldEhhc090aGVyKHRoaXMudmFsdWUpIDogdGhpcy5nZXRIYXNPdGhlcih0aGlzLmNhY2hlZFZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEhhc090aGVyKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWwgPT0gdGhpcy5vdGhlckl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVSZXN0ZnVsbCgpOiBDaG9pY2VzUmVzdGZ1bGwgeyByZXR1cm4gbmV3IENob2ljZXNSZXN0ZnVsbCgpOyB9XG4gICAgcHJvdGVjdGVkIGdldENvbW1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSkgcmV0dXJuIHN1cGVyLmdldENvbW1lbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudFZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzU2V0dGluZ0NvbW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgc2V0Q29tbWVudChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkpXG4gICAgICAgICAgICBzdXBlci5zZXRDb21tZW50KG5ld1ZhbHVlKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTZXR0aW5nQ29tbWVudCAmJiBuZXdWYWx1ZSAhPSB0aGlzLmNvbW1lbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZXR0aW5nQ29tbWVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc090aGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZUluRGF0YSh0aGlzLmNhY2hlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NldHRpbmdDb21tZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB0aGlzLmNhY2hlZFZhbHVlRm9yVXJsUmVxdWVzdGlvbiA9IG5ld1ZhbHVlOyAgICAgICAgXG4gICAgICAgIHN1cGVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGEodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKSByZXR1cm4gc3VwZXIudmFsdWVGcm9tRGF0YSh2YWwpO1xuICAgICAgICB0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZUZyb21EYXRhQ29yZSh2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRWYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSkgcmV0dXJuIHN1cGVyLnZhbHVlVG9EYXRhKHZhbCk7XG4gICAgICAgIHRoaXMuY2FjaGVkVmFsdWUgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVG9EYXRhQ29yZSh2YWwpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVGcm9tRGF0YUNvcmUodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzVW5rbm93blZhbHVlKHZhbCkpIHJldHVybiB2YWw7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHJldHVybiB2YWw7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXMub3RoZXJJdGVtLnZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0RhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZSAmJiB0aGlzLmdldENvbW1lbnQoKSkge1xuICAgICAgICAgICAgdmFsID0gdGhpcy5nZXRDb21tZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGhhc1Vua25vd25WYWx1ZSh2YWw6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmFjdGl2ZUNob2ljZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS52YWx1ZSA9PSB2YWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZXM7IH1cbiAgICBzZXQgY2hvaWNlcyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNob2ljZXNWYWx1ZXMsIG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5vblZpc2libGVDaG9pY2VzQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFzT3RoZXJDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLm9uVmlzaWJsZUNob2ljZXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGdldCBjaG9pY2VzT3JkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2hvaWNlc09yZGVyVmFsdWU7IH1cbiAgICBzZXQgY2hvaWNlc09yZGVyKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09IHRoaXMuY2hvaWNlc09yZGVyVmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXJWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLm9uVmlzaWJsZUNob2ljZXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGdldCBvdGhlclRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3RoZXJJdGVtLnRleHQ7IH1cbiAgICBzZXQgb3RoZXJUZXh0KHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5vdGhlckl0ZW0udGV4dCA9IHZhbHVlOyB9XG4gICAgZ2V0IHZpc2libGVDaG9pY2VzKCk6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgICAgICBpZiAoIXRoaXMuaGFzT3RoZXIgJiYgdGhpcy5jaG9pY2VzT3JkZXIgPT0gXCJub25lXCIpIHJldHVybiB0aGlzLmFjdGl2ZUNob2ljZXM7XG4gICAgICAgIGlmKCF0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZUNob2ljZXNDYWNoZSA9IHRoaXMuc29ydFZpc2libGVDaG9pY2VzKHRoaXMuYWN0aXZlQ2hvaWNlcy5zbGljZSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc090aGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlQ2hvaWNlc0NhY2hlLnB1c2godGhpcy5vdGhlckl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGU7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGFjdGl2ZUNob2ljZXMoKTogQXJyYXk8SXRlbVZhbHVlPiB7IHJldHVybiB0aGlzLmNob2ljZXNGcm9tVXJsID8gdGhpcy5jaG9pY2VzRnJvbVVybCA6IHRoaXMuY2hvaWNlczsgfVxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgc3VwcG9ydE90aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3RoZXJTZWxlY3RlZCB8fCB0aGlzLmNvbW1lbnQpIHJldHVybjtcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLm90aGVyRXJyb3JUZXh0O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHRleHQgPSBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJSZXF1aXJlZEVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcih0ZXh0KSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpIHsgcmV0dXJuIHRoaXMuc3RvcmVPdGhlcnNBc0NvbW1lbnQgJiYgKHRoaXMuc3VydmV5ICE9IG51bGwgPyB0aGlzLnN1cnZleS5zdG9yZU90aGVyc0FzQ29tbWVudCA6IHRydWUpOyB9XG4gICAgb25TdXJ2ZXlMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzQnlVcmwpIHRoaXMuY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uTG9hZENob2ljZXNGcm9tVXJsKGFycmF5OiBBcnJheTxJdGVtVmFsdWU+KSB7XG4gICAgICAgIHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzQnlVcmwgJiYgdGhpcy5jaG9pY2VzQnlVcmwuZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2godGhpcy5jaG9pY2VzQnlVcmwuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckNvdW50ID4gMCB8fCB0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmVycm9yc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0Nob2ljZXMgPSBudWxsO1xuICAgICAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmV3Q2hvaWNlcyA9IG5ldyBBcnJheTxJdGVtVmFsdWU+KCk7XG4gICAgICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YShuZXdDaG9pY2VzLCBhcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVVybCA9IG5ld0Nob2ljZXM7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hvaWNlc0NoYW5nZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkVmFsdWVGb3JVcmxSZXF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jYWNoZWRWYWx1ZUZvclVybFJlcXVlc3Rpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBvblZpc2libGVDaG9pY2VzQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hvaWNlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzb3J0VmlzaWJsZUNob2ljZXMoYXJyYXk6IEFycmF5PEl0ZW1WYWx1ZT4pOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICAgICAgdmFyIG9yZGVyID0gdGhpcy5jaG9pY2VzT3JkZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG9yZGVyID09IFwiYXNjXCIpIHJldHVybiB0aGlzLnNvcnRBcnJheShhcnJheSwgMSk7XG4gICAgICAgIGlmIChvcmRlciA9PSBcImRlc2NcIikgcmV0dXJuIHRoaXMuc29ydEFycmF5KGFycmF5LCAtMSk7XG4gICAgICAgIGlmIChvcmRlciA9PSBcInJhbmRvbVwiKSByZXR1cm4gdGhpcy5yYW5kb21pemVBcnJheShhcnJheSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzb3J0QXJyYXkoYXJyYXk6IEFycmF5PEl0ZW1WYWx1ZT4sIG11bHQ6IG51bWJlcik6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgICAgICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEudGV4dCA8IGIudGV4dCkgcmV0dXJuIC0xICogbXVsdDtcbiAgICAgICAgICAgIGlmIChhLnRleHQgPiBiLnRleHQpIHJldHVybiAxICogbXVsdDtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSByYW5kb21pemVBcnJheShhcnJheTogQXJyYXk8SXRlbVZhbHVlPik6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94QmFzZSBleHRlbmRzIFF1ZXN0aW9uU2VsZWN0QmFzZSB7XG4gICAgcHJpdmF0ZSBjb2xDb3VudFZhbHVlOiBudW1iZXIgPSAxO1xuICAgIGNvbENvdW50Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29sQ291bnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gNCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbENvdW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNlbGVjdGJhc2VcIiwgW1wiaGFzQ29tbWVudDpib29sZWFuXCIsIFwiaGFzT3RoZXI6Ym9vbGVhblwiLFxuICAgIHsgbmFtZTogXCJjaG9pY2VzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmouY2hvaWNlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmouY2hvaWNlcyA9IHZhbHVlOyB9fSxcbiAgICB7IG5hbWU6IFwiY2hvaWNlc09yZGVyXCIsIGRlZmF1bHQ6IFwibm9uZVwiLCBjaG9pY2VzOiBbXCJub25lXCIsIFwiYXNjXCIsIFwiZGVzY1wiLCBcInJhbmRvbVwiXSB9LFxuICAgIHsgbmFtZTogXCJjaG9pY2VzQnlVcmw6cmVzdGZ1bGxcIiwgY2xhc3NOYW1lOiBcIkNob2ljZXNSZXN0ZnVsbFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jaG9pY2VzQnlVcmwuaXNFbXB0eSA/IG51bGwgOiBvYmouY2hvaWNlc0J5VXJsOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXNCeVVybC5zZXREYXRhKHZhbHVlKTsgfSB9LFxuICAgIHsgbmFtZTogXCJvdGhlclRleHRcIiwgZGVmYXVsdDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm90aGVySXRlbVRleHRcIikgfSwgXCJvdGhlckVycm9yVGV4dFwiLFxuICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudDpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWV9XSwgbnVsbCwgXCJxdWVzdGlvblwiKTtcblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNoZWNrYm94YmFzZVwiLCBbeyBuYW1lOiBcImNvbENvdW50Om51bWJlclwiLCBkZWZhdWx0OiAxLCBjaG9pY2VzOiBbMCwgMSwgMiwgMywgNF0gfV0sIG51bGwsIFwic2VsZWN0YmFzZVwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fYmFzZXNlbGVjdC50cyIsImltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tICcuL3F1ZXN0aW9uYmFzZSc7XG5pbXBvcnQge0hhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GYWN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBRdWVzdGlvbkZhY3RvcnkgPSBuZXcgUXVlc3Rpb25GYWN0b3J5KCk7XG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0Q2hvaWNlcyA9IFtcIm9uZVwiLCBcInR3b3xzZWNvbmQgdmFsdWVcIiwgXCJ0aHJlZXx0aGlyZCB2YWx1ZVwiXTtcbiAgICBwcml2YXRlIGNyZWF0b3JIYXNoOiBIYXNoVGFibGU8KG5hbWU6IHN0cmluZykgPT4gUXVlc3Rpb25CYXNlPiA9IHt9O1xuXG4gICAgcHVibGljIHJlZ2lzdGVyUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uQ3JlYXRvcjogKG5hbWU6IHN0cmluZykgPT4gUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXSA9IHF1ZXN0aW9uQ3JlYXRvcjtcbiAgICB9XG4gICAgcHVibGljIGdldEFsbFR5cGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcy5jcmVhdG9ySGFzaCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBRdWVzdGlvbkJhc2Uge1xuICAgICAgICB2YXIgY3JlYXRvciA9IHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXTtcbiAgICAgICAgaWYgKGNyZWF0b3IgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBjcmVhdG9yKG5hbWUpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25mYWN0b3J5LnRzIiwiaW1wb3J0IHtRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlLFxuICAgIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLFxuICAgIElNYXRyaXhEcm9wZG93bkRhdGFcbn0gZnJvbSBcIi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7SXRlbVZhbHVlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93blJvd01vZGVsIGV4dGVuZHMgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnksIHB1YmxpYyB0ZXh0OiBzdHJpbmcsIGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGEsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoZGF0YSwgdmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd05hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlIGltcGxlbWVudHMgSU1hdHJpeERyb3Bkb3duRGF0YSB7XG4gICAgcHJpdmF0ZSByb3dzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtYXRyaXhkcm9wZG93blwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd3MoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLnJvd3NWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgcm93cyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLnJvd3NWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWw+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsPigpO1xuICAgICAgICBpZiAoIXRoaXMucm93cyB8fCB0aGlzLnJvd3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWwpIHZhbCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJvd3NbaV0udmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3codGhpcy5yb3dzW2ldLnZhbHVlLCB0aGlzLnJvd3NbaV0udGV4dCwgdmFsW3RoaXMucm93c1tpXS52YWx1ZV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4RHJvcGRvd25Sb3dNb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4RHJvcGRvd25Sb3dNb2RlbChuYW1lLCB0ZXh0LCB0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHJvcGRvd25cIiwgW3sgbmFtZTogXCJyb3dzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmoucm93cyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmoucm93cyA9IHZhbHVlOyB9fV0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbChcIlwiKTsgfSwgXCJtYXRyaXhkcm9wZG93bmJhc2VcIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBbMSwgMiwgMywgNCwgNV07IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDFcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDJcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDNcIik7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd24udHMiLCJpbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UsXG4gICAgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIElNYXRyaXhEcm9wZG93bkRhdGFcbn0gZnJvbSBcIi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4RHluYW1pY1Jvd01vZGVsIGV4dGVuZHMgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBkYXRhOiBJTWF0cml4RHJvcGRvd25EYXRhLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCByb3dOYW1lKCkgeyByZXR1cm4gXCJyb3dcIiArIHRoaXMuaW5kZXg7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsIGV4dGVuZHMgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZSBpbXBsZW1lbnRzIElNYXRyaXhEcm9wZG93bkRhdGEge1xuICAgIHN0YXRpYyBNYXhSb3dDb3VudCA9IDEwMDtcbiAgICBwcml2YXRlIHJvd0NvdW50ZXIgPSAwO1xuICAgIHByaXZhdGUgcm93Q291bnRWYWx1ZTogbnVtYmVyID0gMjtcbiAgICBwcml2YXRlIGFkZFJvd1RleHRWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIHJlbW92ZVJvd1RleHRWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgbWluUm93Q291bnQgPSAwO1xuICAgIHB1YmxpYyByb3dDb3VudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtYXRyaXhkeW5hbWljXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93Q291bnQoKSB7IHJldHVybiB0aGlzLnJvd0NvdW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHJvd0NvdW50KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWwgPCAwIHx8IHZhbCA+IFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsLk1heFJvd0NvdW50KSByZXR1cm47XG4gICAgICAgIHRoaXMucm93Q291bnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiB2YWwpIHtcbiAgICAgICAgICAgIHZhciBxVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHFWYWwuc3BsaWNlKHZhbCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gcVZhbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnJvd0NvdW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFJvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyhudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3dDb3VudCsrO1xuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnJvd0NvdW50KSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzICYmIGluZGV4IDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMuY3JlYXRlTmV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuZGVsZXRlUm93VmFsdWUodmFsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3dDb3VudC0tO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGFkZFJvd1RleHQoKSB7IHJldHVybiB0aGlzLmFkZFJvd1RleHRWYWx1ZSA/IHRoaXMuYWRkUm93VGV4dFZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcImFkZFJvd1wiKTsgfVxuICAgIHB1YmxpYyBzZXQgYWRkUm93VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWRkUm93VGV4dFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcmVtb3ZlUm93VGV4dCgpIHsgcmV0dXJuIHRoaXMucmVtb3ZlUm93VGV4dFZhbHVlID8gdGhpcy5yZW1vdmVSb3dUZXh0VmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVtb3ZlUm93XCIpOyB9XG4gICAgcHVibGljIHNldCByZW1vdmVSb3dUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSb3dUZXh0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjYWNoZWRWaXNpYmxlUm93cygpOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT4ge1xuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cyAmJiB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aCA9PSB0aGlzLnJvd0NvdW50KSByZXR1cm4gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cztcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZVJvd3M7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3JJblJvd3MoKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gobmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtaW5Sb3dDb3VudEVycm9yXCIpW1wiZm9ybWF0XCJdKHRoaXMubWluUm93Q291bnQpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBoYXNFcnJvckluUm93cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubWluUm93Q291bnQgPD0gMCB8fCAhdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcmVzID0gZmFsc2U7XG4gICAgICAgIHZhciBzZXRSb3dDb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aDsgcm93SW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFyb3cuaXNFbXB0eSkgc2V0Um93Q291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0Um93Q291bnQgPCB0aGlzLm1pblJvd0NvdW50O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVSb3dzKCk6IEFycmF5PE1hdHJpeER5bmFtaWNSb3dNb2RlbD4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeER5bmFtaWNSb3dNb2RlbD4oKTtcbiAgICAgICAgaWYgKHRoaXMucm93Q291bnQgPT09IDApIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLmNyZWF0ZU5ld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3codGhpcy5nZXRSb3dWYWx1ZUJ5SW5kZXgodmFsLCBpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3codmFsdWU6IGFueSk6IE1hdHJpeER5bmFtaWNSb3dNb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4RHluYW1pY1Jvd01vZGVsKHRoaXMucm93Q291bnRlciArKywgdGhpcywgdmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3VmFsdWUoY3VyVmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXJWYWx1ZTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IHRoaXMucm93Q291bnQpIHJlc3VsdC5zcGxpY2UodGhpcy5yb3dDb3VudCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBpID0gcmVzdWx0Lmxlbmd0aDsgaSA8IHRoaXMucm93Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBkZWxldGVSb3dWYWx1ZShuZXdWYWx1ZTogYW55LCByb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlKTogYW55IHtcbiAgICAgICAgdmFyIGlzRW1wdHkgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3VmFsdWVbaV0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzRW1wdHkgPyBudWxsIDogbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSb3dWYWx1ZUJ5SW5kZXgocXVlc3Rpb25WYWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWVzdGlvblZhbHVlLmxlbmd0aCA/IHF1ZXN0aW9uVmFsdWVbaW5kZXhdIDogbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFJvd1ZhbHVlKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIHF1ZXN0aW9uVmFsdWU6IGFueSwgY3JlYXRlOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb3dWYWx1ZUJ5SW5kZXgocXVlc3Rpb25WYWx1ZSwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5pbmRleE9mKHJvdykpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeGR5bmFtaWNcIiwgW3sgbmFtZTogXCJyb3dDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMiB9LCB7IG5hbWU6IFwibWluUm93Q291bnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDAgfSxcbiAgICAgICAgeyBuYW1lOiBcImFkZFJvd1RleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmouYWRkUm93VGV4dFZhbHVlOyB9IH0sXG4gICAgICAgIHsgbmFtZTogXCJyZW1vdmVSb3dUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnJlbW92ZVJvd1RleHRWYWx1ZTsgfSB9XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwoXCJcIik7IH0sIFwibWF0cml4ZHJvcGRvd25iYXNlXCIpO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm1hdHJpeGR5bmFtaWNcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFsxLCAyLCAzLCA0LCA1XTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzIiwiaW1wb3J0IHtCYXNlLCBJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tICcuL3N1cnZleVN0cmluZ3MnO1xuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4RGF0YSB7XG4gICAgb25NYXRyaXhSb3dDaGFuZ2VkKHJvdzogTWF0cml4Um93TW9kZWwpO1xufVxuZXhwb3J0IGNsYXNzIE1hdHJpeFJvd01vZGVsIGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBkYXRhOiBJTWF0cml4RGF0YTtcbiAgICBwcm90ZWN0ZWQgcm93VmFsdWU6IGFueTsgXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogYW55LCBwdWJsaWMgdGV4dDogc3RyaW5nLCBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZywgZGF0YTogSU1hdHJpeERhdGEsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yb3dWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5yb3dWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnJvd1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHRoaXMuZGF0YS5vbk1hdHJpeFJvd0NoYW5nZWQodGhpcyk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTWF0cml4RGF0YSB7XG4gICAgcHJpdmF0ZSBjb2x1bW5zVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSByb3dzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSBpc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZWRWaXNpYmxlUm93czogQXJyYXk8TWF0cml4Um93TW9kZWw+O1xuICAgIHB1YmxpYyBpc0FsbFJvd1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibWF0cml4XCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzUm93cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1ZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGdldCBjb2x1bW5zKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWU7IH1cbiAgICBzZXQgY29sdW1ucyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNvbHVtbnNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBnZXQgcm93cygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMucm93c1ZhbHVlOyB9XG4gICAgc2V0IHJvd3MobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5yb3dzVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCB2aXNpYmxlUm93cygpOiBBcnJheTxNYXRyaXhSb3dNb2RlbD4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeFJvd01vZGVsPigpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWwpIHZhbCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJvd3NbaV0udmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3codGhpcy5yb3dzW2ldLnZhbHVlLCB0aGlzLnJvd3NbaV0udGV4dCwgdGhpcy5uYW1lICsgJ18nICsgdGhpcy5yb3dzW2ldLnZhbHVlLnRvU3RyaW5nKCksIHZhbFt0aGlzLnJvd3NbaV0udmFsdWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3cobnVsbCwgXCJcIiwgdGhpcy5uYW1lLCB2YWwpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xuICAgICAgICBzdXBlci5vbkNoZWNrRm9yRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9ySW5Sb3dzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZXF1aXJlZEluQWxsUm93c0Vycm9yXCIpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBoYXNFcnJvckluUm93cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWxsUm93UmVxdWlyZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHJvd3MgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzO1xuICAgICAgICBpZiAoIXJvd3MpIHJvd3MgPSB0aGlzLnZpc2libGVSb3dzO1xuICAgICAgICBpZiAoIXJvd3MpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gcm93c1tpXS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdmFsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1hdHJpeFJvdyhuYW1lOiBhbnksIHRleHQ6IHN0cmluZywgZnVsbE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IE1hdHJpeFJvd01vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhSb3dNb2RlbChuYW1lLCB0ZXh0LCBmdWxsTmFtZSwgdGhpcywgdmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcgfHwgISh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSB8fCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgdmFsID0ge307XG4gICAgICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbMF0udmFsdWUgPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcm93VmFsID0gdmFsW3Jvdy5uYW1lXSA/IHZhbFtyb3cubmFtZV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV0udmFsdWUgPSByb3dWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8vSU1hdHJpeERhdGFcbiAgICBvbk1hdHJpeFJvd0NoYW5nZWQocm93OiBNYXRyaXhSb3dNb2RlbCkge1xuICAgICAgICBpZiAodGhpcy5pc1Jvd0NoYW5naW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5oYXNSb3dzKSB7XG4gICAgICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKHJvdy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWYWx1ZVtyb3cubmFtZV0gPSByb3cudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhcIiwgW3sgbmFtZTogXCJjb2x1bW5zOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmouY29sdW1ucyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmouY29sdW1ucyA9IHZhbHVlOyB9fSxcbiAgICB7IG5hbWU6IFwicm93czppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLnJvd3MpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLnJvd3MgPSB2YWx1ZTsgfSB9LFxuICAgIFwiaXNBbGxSb3dSZXF1aXJlZDpib29sZWFuXCJdLCAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4TW9kZWwobmFtZSk7IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuY29sdW1ucyA9IFtcIkNvbHVtbiAxXCIsIFwiQ29sdW1uIDJcIiwgXCJDb2x1bW4gM1wiXTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9tYXRyaXgudHMiLCJpbXBvcnQge0Jhc2V9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7U3VydmV5VmFsaWRhdG9yLCBJVmFsaWRhdG9yT3duZXIsIFZhbGlkYXRvclJ1bm5lcn0gZnJvbSBcIi4vdmFsaWRhdG9yXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRpcGxlVGV4dERhdGEge1xuICAgIGdldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueTtcbiAgICBzZXRNdWx0aXBsZVRleHRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVUZXh0SXRlbU1vZGVsIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JPd25lciB7XG4gICAgcHJpdmF0ZSBkYXRhOiBJTXVsdGlwbGVUZXh0RGF0YTtcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcbiAgICB2YWxpZGF0b3JzOiBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+ID0gbmV3IEFycmF5PFN1cnZleVZhbGlkYXRvcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnkgPSBudWxsLCB0aXRsZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm11bHRpcGxldGV4dGl0ZW1cIjtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhOiBJTXVsdGlwbGVUZXh0RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCkgeyByZXR1cm4gdGhpcy50aXRsZVZhbHVlID8gdGhpcy50aXRsZVZhbHVlIDogdGhpcy5uYW1lOyB9XG4gICAgcHVibGljIHNldCB0aXRsZShuZXdUZXh0OiBzdHJpbmcpIHsgdGhpcy50aXRsZVZhbHVlID0gbmV3VGV4dDsgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEuZ2V0TXVsdGlwbGVUZXh0VmFsdWUodGhpcy5uYW1lKSA6IG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXRNdWx0aXBsZVRleHRWYWx1ZSh0aGlzLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KSB7XG4gICAgfVxuICAgIC8vSVZhbGlkYXRvck93bmVyXG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGl0bGU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiBpbXBsZW1lbnRzIElNdWx0aXBsZVRleHREYXRhIHtcbiAgICBwcml2YXRlIGNvbENvdW50VmFsdWU6IG51bWJlciA9IDE7XG4gICAgY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIGl0ZW1TaXplOiBudW1iZXIgPSAyNTtcbiAgICBwcml2YXRlIGl0ZW1zVmFsdWVzOiBBcnJheTxNdWx0aXBsZVRleHRJdGVtTW9kZWw+ID0gbmV3IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4oKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUuc2V0RGF0YShzZWxmKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHNlbGYuZmlyZUNhbGxiYWNrKHNlbGYuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibXVsdGlwbGV0ZXh0XCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPiB7IHJldHVybiB0aGlzLml0ZW1zVmFsdWVzOyB9XG4gICAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPikge1xuICAgICAgICB0aGlzLml0ZW1zVmFsdWVzID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgQWRkSXRlbShuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBudWxsKTogTXVsdGlwbGVUZXh0SXRlbU1vZGVsIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVRleHRJdGVtKG5hbWUsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2xDb3VudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb2xDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgfHwgdmFsdWUgPiA0KSByZXR1cm47XG4gICAgICAgIHRoaXMuY29sQ291bnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldFJvd3MoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBjb2xDb3VudCA9IHRoaXMuY29sQ291bnQ7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIHZhciByb3dzID0gW107XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvd3Nbcm93cy5sZW5ndGggLSAxXS5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gY29sQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuICAgIHByaXZhdGUgaXNNdWx0aXBsZUl0ZW1WYWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLm9uSXRlbVZhbHVlQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVGV4dEl0ZW0obmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogTXVsdGlwbGVUZXh0SXRlbU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZVRleHRJdGVtTW9kZWwobmFtZSwgdGl0bGUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25JdGVtVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlSXRlbVZhbHVlQ2hhbmdpbmcpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICYmICh0aGlzLml0ZW1zW2ldLm5hbWUgaW4gdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtVmFsdWUgPSB0aGlzLnZhbHVlW3RoaXMuaXRlbXNbaV0ubmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLm9uVmFsdWVDaGFuZ2VkKGl0ZW1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHJ1blZhbGlkYXRvcnMoKTogU3VydmV5RXJyb3Ige1xuICAgICAgICB2YXIgZXJyb3IgPSBzdXBlci5ydW5WYWxpZGF0b3JzKCk7XG4gICAgICAgIGlmIChlcnJvciAhPSBudWxsKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZXJyb3IgPSBuZXcgVmFsaWRhdG9yUnVubmVyKCkucnVuKHRoaXMuaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy9JTXVsdGlwbGVUZXh0RGF0YVxuICAgIGdldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVtuYW1lXTtcbiAgICB9XG4gICAgc2V0TXVsdGlwbGVUZXh0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNNdWx0aXBsZUl0ZW1WYWx1ZUNoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKCFuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc011bHRpcGxlSXRlbVZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtdWx0aXBsZXRleHRpdGVtXCIsIFtcIm5hbWVcIiwgeyBuYW1lOiBcInRpdGxlXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnRpdGxlVmFsdWU7IH0gfSxcbiAgICB7IG5hbWU6IFwidmFsaWRhdG9yczp2YWxpZGF0b3JzXCIsIGJhc2VDbGFzc05hbWU6IFwic3VydmV5dmFsaWRhdG9yXCIsIGNsYXNzTmFtZVBhcnQ6IFwidmFsaWRhdG9yXCIgfV0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNdWx0aXBsZVRleHRJdGVtTW9kZWwoXCJcIik7IH0pO1xuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibXVsdGlwbGV0ZXh0XCIsIFt7IG5hbWU6IFwiIWl0ZW1zOnRleHRpdGVtc1wiLCBjbGFzc05hbWU6IFwibXVsdGlwbGV0ZXh0aXRlbVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJpdGVtU2l6ZTpudW1iZXJcIiwgZGVmYXVsdDogMjUgfSwgeyBuYW1lOiBcImNvbENvdW50Om51bWJlclwiLCBkZWZhdWx0OiAxLCBjaG9pY2VzOiBbMSwgMiwgMywgNF0gfV0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibXVsdGlwbGV0ZXh0XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwobmFtZSk7IHEuQWRkSXRlbShcInRleHQxXCIpOyBxLkFkZEl0ZW0oXCJ0ZXh0MlwiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9tdWx0aXBsZXRleHQudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7QmFzZSwgSVBhZ2UsIElDb25kaXRpb25SdW5uZXIsIElTdXJ2ZXksIElRdWVzdGlvbiwgSGFzaFRhYmxlLCBTdXJ2ZXlFbGVtZW50LCBTdXJ2ZXlQYWdlSWR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tIFwiLi9xdWVzdGlvbmJhc2VcIjtcbmltcG9ydCB7Q29uZGl0aW9uUnVubmVyfSBmcm9tIFwiLi9jb25kaXRpb25zXCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvd01vZGVsIHtcbiAgICBwcml2YXRlIHZpc2libGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2VNb2RlbCwgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnJvd1Zpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Sb3dWaXNpYmlsaXR5Q2hhbmdlZCgpOyB9XG4gICAgfVxuICAgIHB1YmxpYyBxdWVzdGlvbnM6IEFycmF5PFF1ZXN0aW9uQmFzZT4gPSBbXTtcbiAgICBwdWJsaWMgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnZpc2libGVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICAgICAgdGhpcy52aXNpYmxlVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlVmlzaWJsZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jYWxjVmlzaWJsZSgpO1xuICAgICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbihxOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaChxKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZpc2libGVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKSB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2soKTtcbiAgICB9XG4gICAgcHVibGljIHNldFdpZHRoKCkge1xuICAgICAgICB2YXIgdmlzQ291bnQgPSB0aGlzLmdldFZpc2libGVDb3VudCgpO1xuICAgICAgICBpZiAodmlzQ291bnQgPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1ZXN0aW9uVmlzaWJsZSh0aGlzLnF1ZXN0aW9uc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5yZW5kZXJXaWR0aCA9IHRoaXMucXVlc3Rpb24ud2lkdGggPyB0aGlzLnF1ZXN0aW9uLndpZHRoIDogTWF0aC5mbG9vcigxMDAgLyB2aXNDb3VudCkgKyAnJSc7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucmlnaHRJbmRlbnQgPSBjb3VudGVyIDwgdmlzQ291bnQgLSAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG9uUm93VmlzaWJpbGl0eUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5vblJvd1Zpc2liaWxpdHlDaGFuZ2VkKHRoaXMpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZpc2libGVDb3VudCgpOiBudW1iZXIge1xuICAgICAgICB2YXIgcmVzID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNRdWVzdGlvblZpc2libGUodGhpcy5xdWVzdGlvbnNbaV0pKSByZXMrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzUXVlc3Rpb25WaXNpYmxlKHE6IFF1ZXN0aW9uQmFzZSk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wYWdlLmlzUXVlc3Rpb25WaXNpYmxlKHEpOyB9XG4gICAgcHJpdmF0ZSBjYWxjVmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZ2V0VmlzaWJsZUNvdW50KCkgPiAwOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlTW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVBhZ2UsIElDb25kaXRpb25SdW5uZXIge1xuICAgIHByaXZhdGUgc3RhdGljIHBhZ2VDb3VudGVyID0gMTAwO1xuICAgIHByaXZhdGUgc3RhdGljIGdldFBhZ2VJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcF9cIiArIFBhZ2VNb2RlbC5wYWdlQ291bnRlcisrO1xuICAgIH1cblxuICAgIHByaXZhdGUgaWRWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcm93VmFsdWVzOiBBcnJheTxRdWVzdGlvblJvd01vZGVsPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjb25kaXRpb25SdW5uZXI6IENvbmRpdGlvblJ1bm5lciA9IG51bGw7XG4gICAgcXVlc3Rpb25zOiBBcnJheTxRdWVzdGlvbkJhc2U+ID0gbmV3IEFycmF5PFF1ZXN0aW9uQmFzZT4oKTtcbiAgICBwdWJsaWMgZGF0YTogSVN1cnZleSA9IG51bGw7XG4gICAgcHVibGljIHZpc2libGVJZjogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgdmlzaWJsZUluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG51bVZhbHVlOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIHZpc2libGVWYWx1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZFZhbHVlID0gUGFnZU1vZGVsLmdldFBhZ2VJZCgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnNldERhdGEoc2VsZi5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pZFZhbHVlOyB9XG4gICAgcHVibGljIGdldCByb3dzKCk6IEFycmF5PFF1ZXN0aW9uUm93TW9kZWw+IHtcbiAgICAgICAgdGhpcy5yb3dWYWx1ZXMgPSB0aGlzLmJ1aWxkUm93cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dWYWx1ZXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiAoIXRoaXMuZGF0YSkgfHwgdGhpcy5kYXRhLmN1cnJlbnRQYWdlID09IHRoaXM7IH1cbiAgICBwdWJsaWMgaXNRdWVzdGlvblZpc2libGUocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSk6IGJvb2xlYW4geyByZXR1cm4gcXVlc3Rpb24udmlzaWJsZSB8fCB0aGlzLmlzRGVzaWduTW9kZTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVSb3cocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSk6IFF1ZXN0aW9uUm93TW9kZWwgeyByZXR1cm4gbmV3IFF1ZXN0aW9uUm93TW9kZWwodGhpcywgcXVlc3Rpb24pOyB9XG4gICAgcHJpdmF0ZSBnZXQgaXNEZXNpZ25Nb2RlKCkgeyByZXR1cm4gdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5pc0Rlc2lnbk1vZGU7IH1cbiAgICBwcml2YXRlIGJ1aWxkUm93cygpOiBBcnJheTxRdWVzdGlvblJvd01vZGVsPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8UXVlc3Rpb25Sb3dNb2RlbD4oKTtcbiAgICAgICAgdmFyIGxhc3RSb3dWaXNpYmxlSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcSA9IHRoaXMucXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVSb3cocSkpO1xuICAgICAgICAgICAgaWYgKHEuc3RhcnRXaXRoTmV3TGluZSkge1xuICAgICAgICAgICAgICAgIGxhc3RSb3dWaXNpYmxlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5hZGRRdWVzdGlvbihxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RSb3dWaXNpYmxlSW5kZXggPCAwKSBsYXN0Um93VmlzaWJsZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICByZXN1bHRbbGFzdFJvd1Zpc2libGVJbmRleF0uYWRkUXVlc3Rpb24ocSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5zZXRXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIG9uUm93VmlzaWJpbGl0eUNoYW5nZWQocm93OiBRdWVzdGlvblJvd01vZGVsKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCAhdGhpcy5yb3dWYWx1ZXMpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yb3dWYWx1ZXMuaW5kZXhPZihyb3cpO1xuICAgICAgICBmb3IgKHZhciBpID0gaW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3dWYWx1ZXNbaV0ucXVlc3Rpb25zLmluZGV4T2Yocm93LnF1ZXN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dWYWx1ZXNbaV0udXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkVGl0bGUoKSB7IHJldHVybiB0aGlzLmRhdGEgIT0gbnVsbCA/IHRoaXMuZGF0YS5wcm9jZXNzVGV4dCh0aGlzLnRpdGxlKSA6IHRoaXMudGl0bGU7IH1cbiAgICBwdWJsaWMgZ2V0IG51bSgpIHsgcmV0dXJuIHRoaXMubnVtVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IG51bSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLm51bVZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMubnVtVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbk51bUNoYW5nZWQodmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnZpc2libGVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpc2libGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlVmlzaWJpbGl0eUNoYW5nZWQodGhpcywgdGhpcy52aXNpYmxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwYWdlXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHsgIHJldHVybiB0aGlzLmdldElzUGFnZVZpc2libGUobnVsbCk7IH1cbiAgICBwdWJsaWMgZ2V0SXNQYWdlVmlzaWJsZShleGNlcHRpb25RdWVzdGlvbjogSVF1ZXN0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXSA9PSBleGNlcHRpb25RdWVzdGlvbikgY29udGludWU7XG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb25CYXNlLCBpbmRleDogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMuc3BsaWNlKGluZGV4LCAwLCBxdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBxdWVzdGlvbi5zZXREYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEucXVlc3Rpb25BZGRlZChxdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgbmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICByZXR1cm4gcXVlc3Rpb247XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkgdGhpcy5kYXRhLnF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbik7XG4gICAgfVxuICAgIHB1YmxpYyBmb2N1c0ZpcnN0UXVlc3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKCFxdWVzdGlvbi52aXNpYmxlIHx8ICFxdWVzdGlvbi5oYXNJbnB1dCkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5mb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGZvY3VzRmlyc3RFcnJvclF1ZXN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25zW2ldLnZpc2libGUgfHwgdGhpcy5xdWVzdGlvbnNbaV0uY3VycmVudEVycm9yQ291bnQgPT0gMCkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5mb2N1cyh0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzY3JvbGxUb1RvcCgpIHtcbiAgICAgICAgU3VydmV5RWxlbWVudC5TY3JvbGxFbGVtZW50VG9Ub3AoU3VydmV5UGFnZUlkKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9ycyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4gPSB0cnVlLCBmb2N1c2VPbkZpcnN0RXJyb3I6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciBmaXJzdEVycm9yUXVlc3Rpb24gPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSAmJiB0aGlzLnF1ZXN0aW9uc1tpXS5oYXNFcnJvcnMoZmlyZUNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGlmIChmb2N1c2VPbkZpcnN0RXJyb3IgJiYgZmlyc3RFcnJvclF1ZXN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFcnJvclF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0RXJyb3JRdWVzdGlvbikgZmlyc3RFcnJvclF1ZXN0aW9uLmZvY3VzKHRydWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUXVlc3Rpb25zVG9MaXN0KGxpc3Q6IEFycmF5PElRdWVzdGlvbj4sIHZpc2libGVPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHZpc2libGVPbmx5ICYmICF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmlzaWJsZU9ubHkgJiYgIXRoaXMucXVlc3Rpb25zW2ldLnZpc2libGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMucXVlc3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcnVuQ29uZGl0aW9uKHZhbHVlczogSGFzaFRhYmxlPGFueT4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGVJZikgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuY29uZGl0aW9uUnVubmVyKSB0aGlzLmNvbmRpdGlvblJ1bm5lciA9IG5ldyBDb25kaXRpb25SdW5uZXIodGhpcy52aXNpYmxlSWYpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblJ1bm5lci5leHByZXNzaW9uID0gdGhpcy52aXNpYmxlSWY7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMuY29uZGl0aW9uUnVubmVyLnJ1bih2YWx1ZXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25OdW1DaGFuZ2VkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicGFnZVwiLCBbXCJuYW1lXCIsIHsgbmFtZTogXCJxdWVzdGlvbnNcIiwgYmFzZUNsYXNzTmFtZTogXCJxdWVzdGlvblwiIH0sIHsgbmFtZTogXCJ2aXNpYmxlOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCBcInZpc2libGVJZlwiLCBcInRpdGxlXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUGFnZU1vZGVsKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlLnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlfSBmcm9tIFwiLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94QmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEhhc090aGVyKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmFsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB2YWwuaW5kZXhPZih0aGlzLm90aGVySXRlbS52YWx1ZSkgPj0gMDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpIHJldHVybiB2YWw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWxbaV0gPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHJldHVybiB2YWw7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNVbmtub3duVmFsdWUodmFsW2ldKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHZhbFtpXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gdmFsLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbmV3VmFsW2ldID0gdGhpcy5vdGhlckl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0RhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpIHJldHVybiB2YWw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsW2ldID09IHRoaXMub3RoZXJJdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29tbWVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSB2YWwuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsW2ldID0gdGhpcy5nZXRDb21tZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImNoZWNrYm94XCI7XG4gICAgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNoZWNrYm94XCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25DaGVja2JveE1vZGVsKFwiXCIpOyB9LCBcImNoZWNrYm94YmFzZVwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY2hlY2tib3hcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25DaGVja2JveE1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJpbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNvbW1lbnRNb2RlbCBleHRlbmRzIFF1ZXN0aW9uIHtcbiAgICBwdWJsaWMgcm93czogbnVtYmVyID0gNDtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyID0gNTA7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgIH1cbiAgICBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuaXNFbXB0eSgpIHx8IHRoaXMudmFsdWUgPT0gXCJcIjtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY29tbWVudFwiLCBbeyBuYW1lOiBcImNvbHM6bnVtYmVyXCIsIGRlZmF1bHQ6IDUwIH0sIHsgbmFtZTogXCJyb3dzOm51bWJlclwiLCBkZWZhdWx0OiA0IH1dLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Db21tZW50TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImNvbW1lbnRcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlfSBmcm9tIFwiLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Ecm9wZG93bk1vZGVsIGV4dGVuZHMgUXVlc3Rpb25TZWxlY3RCYXNlIHtcbiAgICBwcml2YXRlIG9wdGlvbnNDYXB0aW9uVmFsdWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNDYXB0aW9uKCkgeyByZXR1cm4gKHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSkgPyB0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3B0aW9uc0NhcHRpb25cIik7IH1cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNDYXB0aW9uKG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlID0gbmV3VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJkcm9wZG93blwiO1xuICAgIH1cbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIHRydWU7IH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJkcm9wZG93blwiLCBbeyBuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLm9wdGlvbnNDYXB0aW9uVmFsdWU7IH19XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Ecm9wZG93bk1vZGVsKFwiXCIpOyB9LCBcInNlbGVjdGJhc2VcIik7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImRyb3Bkb3duXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbChuYW1lKTsgcS5jaG9pY2VzID0gUXVlc3Rpb25GYWN0b3J5LkRlZmF1bHRDaG9pY2VzOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwiaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtDdXN0b21FcnJvciwgRXhjZWVkU2l6ZUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRmlsZU1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHByaXZhdGUgc2hvd1ByZXZpZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgaW1hZ2VIZWlnaHQ6IHN0cmluZztcbiAgICBwdWJsaWMgaW1hZ2VXaWR0aDogc3RyaW5nO1xuICAgIHB1YmxpYyBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW47XG4gICAgcHVibGljIG1heFNpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJmaWxlXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1ByZXZpZXcoKSB7IHJldHVybiB0aGlzLnNob3dQcmV2aWV3VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dQcmV2aWV3KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd1ByZXZpZXdWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGxvYWRGaWxlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgIXRoaXMuc3VydmV5LnVwbG9hZEZpbGUodGhpcy5uYW1lLCBmaWxlLCB0aGlzLnN0b3JlRGF0YUFzVGV4dCwgZnVuY3Rpb24gKHN0YXR1czogc3RyaW5nKSB7IHNlbGYuaXNVcGxvYWRpbmcgPSBzdGF0dXMgPT0gXCJ1cGxvYWRpbmdcIjsgIH0pKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0RmlsZVZhbHVlKGZpbGUpO1xuICAgIH1cbiAgICBwdWJsaWMgcHJldmlld1ZhbHVlOiBhbnk7XG4gICAgcHJvdGVjdGVkIHNldEZpbGVWYWx1ZShmaWxlOiBGaWxlKSB7XG4gICAgICAgIGlmICghRmlsZVJlYWRlcikgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgJiYgIXRoaXMuc3RvcmVEYXRhQXNUZXh0KSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRmlsZUZvckVycm9ycyhmaWxlKSkgcmV0dXJuO1xuICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2hvd1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByZXZpZXdWYWx1ZSA9IHNlbGYuaXNGaWxlSW1hZ2UoZmlsZSkgPyBmaWxlUmVhZGVyLnJlc3VsdCA6IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2FsbGJhY2soc2VsZi5wcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9yZURhdGFBc1RleHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlID0gZmlsZVJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xuICAgICAgICBzdXBlci5vbkNoZWNrRm9yRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGlmICh0aGlzLmlzVXBsb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidXBsb2FkaW5nRmlsZVwiKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tGaWxlRm9yRXJyb3JzKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGVycm9yTGVuZ3RoID0gdGhpcy5lcnJvcnMgPyB0aGlzLmVycm9ycy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5tYXhTaXplID4gMCAmJiBmaWxlLnNpemUgPiB0aGlzLm1heFNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEV4Y2VlZFNpemVFcnJvcih0aGlzLm1heFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JMZW5ndGggIT0gdGhpcy5lcnJvcnMubGVuZ3RoIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0ZpbGVJbWFnZShmaWxlOiBGaWxlKSB7XG4gICAgICAgIGlmICghZmlsZSB8fCAhZmlsZS50eXBlKSByZXR1cm47XG4gICAgICAgIHZhciBzdHIgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKFwiaW1hZ2VcIikgPT0gMDtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZmlsZVwiLCBbXCJzaG93UHJldmlldzpib29sZWFuXCIsIFwiaW1hZ2VIZWlnaHRcIiwgXCJpbWFnZVdpZHRoXCIsIFwic3RvcmVEYXRhQXNUZXh0OmJvb2xlYW5cIiwgXCJtYXhTaXplOm51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRmlsZU1vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJmaWxlXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25GaWxlTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9maWxlLnRzIiwiaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uYmFzZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkh0bWxNb2RlbCBleHRlbmRzIFF1ZXN0aW9uQmFzZSB7XG4gICAgcHJpdmF0ZSBodG1sVmFsdWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJodG1sXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaHRtbCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5odG1sVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGh0bWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmh0bWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3NlZEh0bWwoKSB7IHJldHVybiB0aGlzLnN1cnZleSA/IHRoaXMuc3VydmV5LnByb2Nlc3NIdG1sKHRoaXMuaHRtbCkgOiB0aGlzLmh0bWw7IH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJodG1sXCIsIFtcImh0bWw6aHRtbFwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uSHRtbE1vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uYmFzZVwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiaHRtbFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uSHRtbE1vZGVsKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25faHRtbC50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94QmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmFkaW9ncm91cFwiO1xuICAgIH1cbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIHRydWU7IH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInJhZGlvZ3JvdXBcIiwgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbChcIlwiKTsgfSwgXCJjaGVja2JveGJhc2VcIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmFkaW9ncm91cFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbChuYW1lKTsgcS5jaG9pY2VzID0gUXVlc3Rpb25GYWN0b3J5LkRlZmF1bHRDaG9pY2VzOyByZXR1cm4gcTt9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fcmFkaW9ncm91cC50cyIsImltcG9ydCB7SXRlbVZhbHVlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhdGluZ01vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHN0YXRpYyBkZWZhdWx0UmF0ZVZhbHVlczogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIHJhdGVzOiBJdGVtVmFsdWVbXSA9IFtdO1xuICAgIHB1YmxpYyBtaW5pbnVtUmF0ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBtYXhpbXVtUmF0ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcmF0ZVZhbHVlc0NoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIGdldCByYXRlVmFsdWVzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yYXRlczsgfVxuICAgIHNldCByYXRlVmFsdWVzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMucmF0ZXMsIG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0IHZpc2libGVSYXRlVmFsdWVzKCk6IEl0ZW1WYWx1ZVtdIHtcbiAgICAgICAgaWYgKHRoaXMucmF0ZVZhbHVlcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5yYXRlVmFsdWVzO1xuICAgICAgICByZXR1cm4gUXVlc3Rpb25SYXRpbmdNb2RlbC5kZWZhdWx0UmF0ZVZhbHVlcztcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmF0aW5nXCI7XG4gICAgfVxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgc3VwcG9ydE90aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuSXRlbVZhbHVlLnNldERhdGEoUXVlc3Rpb25SYXRpbmdNb2RlbC5kZWZhdWx0UmF0ZVZhbHVlcywgWzEsIDIsIDMsIDQsIDVdKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJyYXRpbmdcIiwgW1wiaGFzQ29tbWVudDpib29sZWFuXCIsIHsgbmFtZTogXCJyYXRlVmFsdWVzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmoucmF0ZVZhbHVlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmoucmF0ZVZhbHVlcyA9IHZhbHVlOyB9fSxcbiAgICBcIm1pbmludW1SYXRlRGVzY3JpcHRpb25cIiwgXCJtYXhpbXVtUmF0ZURlc2NyaXB0aW9uXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmdNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmF0aW5nXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmdNb2RlbChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX3JhdGluZy50cyIsImltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVGV4dE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSAyNTtcbiAgICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmcgPSBcInRleHRcIjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gICAgfVxuICAgIGlzRW1wdHkoKTogYm9vbGVhbiB7ICByZXR1cm4gc3VwZXIuaXNFbXB0eSgpIHx8IHRoaXMudmFsdWUgPT0gXCJcIjsgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIHByb3RlY3RlZCBzZXROZXdWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWVUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgc3VwZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY29ycmVjdFZhbHVlVHlwZShuZXdWYWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCFuZXdWYWx1ZSkgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pbnB1dFR5cGUgPT0gXCJudW1iZXJcIiB8fCB0aGlzLmlucHV0VHlwZSA9PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKG5ld1ZhbHVlKSA/IHBhcnNlRmxvYXQobmV3VmFsdWUpIDogXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNOdW1iZXIodmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInRleHRcIiwgW3sgbmFtZTogXCJpbnB1dFR5cGVcIiwgZGVmYXVsdDogXCJ0ZXh0XCIsIGNob2ljZXM6IFtcImNvbG9yXCIsIFwiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJlbWFpbFwiLCBcIm1vbnRoXCIsIFwibnVtYmVyXCIsIFwicGFzc3dvcmRcIiwgXCJyYW5nZVwiLCBcInRlbFwiLCBcInRleHRcIiwgXCJ0aW1lXCIsIFwidXJsXCIsIFwid2Vla1wiXSB9LFxuICAgIHsgbmFtZTogXCJzaXplOm51bWJlclwiLCBkZWZhdWx0OiAyNSB9XSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uVGV4dE1vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInRleHRcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblRleHRNb2RlbChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX3RleHQudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7QmFzZSwgSVN1cnZleSwgSGFzaFRhYmxlLCBJUXVlc3Rpb24sIElDb25kaXRpb25SdW5uZXIsIElQYWdlLCBTdXJ2ZXlFcnJvciwgRXZlbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7SVN1cnZleVRyaWdnZXJPd25lciwgU3VydmV5VHJpZ2dlcn0gZnJvbSBcIi4vdHJpZ2dlclwiO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4vdGV4dFByZVByb2Nlc3NvclwiO1xuaW1wb3J0IHtkeFN1cnZleVNlcnZpY2V9IGZyb20gXCIuL2R4U3VydmV5U2VydmljZVwiO1xuaW1wb3J0IHtKc29uRXJyb3J9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5TW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVN1cnZleSwgSVN1cnZleVRyaWdnZXJPd25lciB7XG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGNsaWVudElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjb29raWVOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzZW5kUmVzdWx0T25QYWdlTmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNvbW1lbnRQcmVmaXg6IHN0cmluZyA9IFwiLUNvbW1lbnRcIjtcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHNob3dOYXZpZ2F0aW9uQnV0dG9uczogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNob3dQYWdlVGl0bGVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY29tcGxldGVkSHRtbDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgcmVxdWlyZWRUZXh0OiBzdHJpbmcgPSBcIipcIjtcbiAgICBwdWJsaWMgcXVlc3Rpb25TdGFydEluZGV4OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHNob3dQcm9ncmVzc0Jhcjogc3RyaW5nID0gXCJvZmZcIjtcbiAgICBwdWJsaWMgc3RvcmVPdGhlcnNBc0NvbW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBnb05leHRQYWdlQXV0b21hdGljOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHBhZ2VzOiBBcnJheTxQYWdlTW9kZWw+ID0gbmV3IEFycmF5PFBhZ2VNb2RlbD4oKTtcbiAgICBwdWJsaWMgdHJpZ2dlcnM6IEFycmF5PFN1cnZleVRyaWdnZXI+ID0gbmV3IEFycmF5PFN1cnZleVRyaWdnZXI+KCk7XG4gICAgcHVibGljIGNsZWFySW52aXNpYmxlVmFsdWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50UGFnZVZhbHVlOiBQYWdlTW9kZWwgPSBudWxsO1xuICAgIHByaXZhdGUgdmFsdWVzSGFzaDogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHZhcmlhYmxlc0hhc2g6IEhhc2hUYWJsZTxhbnk+ID0ge307XG4gICAgcHJpdmF0ZSBwYWdlUHJldlRleHRWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFnZU5leHRUZXh0VmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBsZXRlVGV4dFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaG93UGFnZU51bWJlcnNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlOiBzdHJpbmcgPSBcIm9uXCI7XG4gICAgcHJpdmF0ZSBxdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZTogc3RyaW5nID0gXCJ0b3BcIjtcbiAgICBwcml2YXRlIGxvY2FsZVZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcHJvY2Vzc2VkVGV4dFZhbHVlczogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHRleHRQcmVQcm9jZXNzb3I6IFRleHRQcmVQcm9jZXNzb3I7XG4gICAgcHJpdmF0ZSBpc1ZhbGlkYXRpbmdPblNlcnZlclZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uQ3VycmVudFBhZ2VDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmFsdWVDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmlzaWJsZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25QYWdlVmlzaWJsZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25RdWVzdGlvbkFkZGVkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uUXVlc3Rpb25SZW1vdmVkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmFsaWRhdGVRdWVzdGlvbjogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblNlcnZlclZhbGlkYXRlUXVlc3Rpb25zOiAoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnk7XG4gICAgcHVibGljIG9uUHJvY2Vzc0h0bWw6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25TZW5kUmVzdWx0OiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uR2V0UmVzdWx0OiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVXBsb2FkRmlsZTogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBqc29uRXJyb3JzOiBBcnJheTxKc29uRXJyb3I+ID0gbnVsbDtcblxuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmcgPSBcIm5vcm1hbFwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yID0gbmV3IFRleHRQcmVQcm9jZXNzb3IoKTtcbiAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uSGFzVmFsdWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLnByb2Nlc3NlZFRleHRWYWx1ZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTsgfTtcbiAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uUHJvY2VzcyA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHNlbGYuZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWUpOyB9O1xuICAgICAgICB0aGlzLnBhZ2VzLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLmRhdGEgPSBzZWxmO1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyaWdnZXJzLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLnNldE93bmVyKHNlbGYpO1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5vbkJlZm9yZUNyZWF0aW5nKCk7XG4gICAgICAgIGlmIChqc29uT2JqKSB7XG4gICAgICAgICAgICB0aGlzLnNldEpzb25PYmplY3QoanNvbk9iaik7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXlJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN1cnZleUZyb21TZXJ2aWNlKHRoaXMuc3VydmV5SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdXJ2ZXlcIjsgfVxuICAgIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2FsZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxvY2FsZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN1cnZleUxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRMb2NTdHJpbmcoc3RyOiBzdHJpbmcpIHsgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoc3RyKTsgfVxuICAgIHB1YmxpYyBnZXQgZW1wdHlTdXJ2ZXlUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmdldExvY1N0cmluZyhcImVtcHR5U3VydmV5XCIpOyB9XG4gICAgcHVibGljIGdldCBwYWdlUHJldlRleHQoKSB7IHJldHVybiAodGhpcy5wYWdlUHJldlRleHRWYWx1ZSkgPyB0aGlzLnBhZ2VQcmV2VGV4dFZhbHVlIDogdGhpcy5nZXRMb2NTdHJpbmcoXCJwYWdlUHJldlRleHRcIik7IH1cbiAgICBwdWJsaWMgc2V0IHBhZ2VQcmV2VGV4dChuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMucGFnZVByZXZUZXh0VmFsdWUgPSBuZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgcGFnZU5leHRUZXh0KCkgeyByZXR1cm4gKHRoaXMucGFnZU5leHRUZXh0VmFsdWUpID8gdGhpcy5wYWdlTmV4dFRleHRWYWx1ZSA6IHRoaXMuZ2V0TG9jU3RyaW5nKFwicGFnZU5leHRUZXh0XCIpOyB9XG4gICAgcHVibGljIHNldCBwYWdlTmV4dFRleHQobmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLnBhZ2VOZXh0VGV4dFZhbHVlID0gbmV3VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGNvbXBsZXRlVGV4dCgpIHsgcmV0dXJuICh0aGlzLmNvbXBsZXRlVGV4dFZhbHVlKSA/IHRoaXMuY29tcGxldGVUZXh0VmFsdWUgOiB0aGlzLmdldExvY1N0cmluZyhcImNvbXBsZXRlVGV4dFwiKTsgfVxuICAgIHB1YmxpYyBzZXQgY29tcGxldGVUZXh0KG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5jb21wbGV0ZVRleHRWYWx1ZSA9IG5ld1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzaG93UGFnZU51bWJlcnMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnNob3dQYWdlTnVtYmVyc1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzaG93UGFnZU51bWJlcnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnNob3dQYWdlTnVtYmVycykgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dQYWdlTnVtYmVyc1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzaG93UXVlc3Rpb25OdW1iZXJzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNob3dRdWVzdGlvbk51bWJlcnNWYWx1ZTsgfTtcbiAgICBwdWJsaWMgc2V0IHNob3dRdWVzdGlvbk51bWJlcnModmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVycykgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dRdWVzdGlvbk51bWJlcnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfTtcbiAgICBwdWJsaWMgZ2V0IHF1ZXN0aW9uVGl0bGVMb2NhdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5xdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZTsgfTtcbiAgICBwdWJsaWMgc2V0IHF1ZXN0aW9uVGl0bGVMb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5xdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVGl0bGVMb2NhdGlvblZhbHVlID0gdmFsdWU7XG4gICAgfTtcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YWx1ZXNIYXNoKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMudmFsdWVzSGFzaFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNIYXNoID0ge307XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzSGFzaFtrZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmlnZ2VycyhrZXksIGRhdGFba2V5XSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5QWxsUXVlc3Rpb25zT25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29tbWVudHMoKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YWx1ZXNIYXNoKSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5jb21tZW50UHJlZml4KSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMudmFsdWVzSGFzaFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGdldCB2aXNpYmxlUGFnZXMoKTogQXJyYXk8UGFnZU1vZGVsPiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVzaWduTW9kZSkgcmV0dXJuIHRoaXMucGFnZXM7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8UGFnZU1vZGVsPigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VzW2ldLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGFnZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucGFnZXMubGVuZ3RoID09IDA7IH1cbiAgICBwdWJsaWMgZ2V0IFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZVBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMubGVuZ3RoO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRQYWdlKCk6IFBhZ2VNb2RlbCB7XG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZVZhbHVlKSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlID09IG51bGwgJiYgdlBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2UGFnZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VWYWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBjdXJyZW50UGFnZSh2YWx1ZTogUGFnZU1vZGVsKSB7XG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdlBhZ2VzLmluZGV4T2YodmFsdWUpIDwgMCkgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUgPT0gdGhpcy5jdXJyZW50UGFnZVZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuY3VycmVudFBhZ2VWYWx1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3VycmVudFBhZ2VObygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gICAgcHVibGljIHNldCBjdXJyZW50UGFnZU5vKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID49IHRoaXMudmlzaWJsZVBhZ2VzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy52aXNpYmxlUGFnZXNbdmFsdWVdO1xuICAgIH1cbiAgICBwdWJsaWMgZm9jdXNGaXJzdFF1ZXN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUuc2Nyb2xsVG9Ub3AoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VWYWx1ZS5mb2N1c0ZpcnN0UXVlc3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykgcmV0dXJuIFwibG9hZGluZ1wiO1xuICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlZCkgcmV0dXJuIFwiY29tcGxldGVkXCI7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50UGFnZSkgPyBcInJ1bm5pbmdcIiA6IFwiZW1wdHlcIlxuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFyaWFibGVzSGFzaCA9IHt9O1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy52aXNpYmxlUGFnZXNbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG1lcmdlVmFsdWVzKHNyYzogYW55LCBkZXN0OiBhbnkpIHtcbiAgICAgICAgaWYgKCFkZXN0IHx8ICFzcmMpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghZGVzdFtrZXldKSBkZXN0W2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmdlVmFsdWVzKHZhbHVlLCBkZXN0W2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VDaGFuZ2VkKG5ld1ZhbHVlOiBQYWdlTW9kZWwsIG9sZFZhbHVlOiBQYWdlTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnRQYWdlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ29sZEN1cnJlbnRQYWdlJzogb2xkVmFsdWUsICduZXdDdXJyZW50UGFnZSc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaWJsZVBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgKyAxO1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChpbmRleCAqIDEwMCAvIHRoaXMudmlzaWJsZVBhZ2VDb3VudCkpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRGVzaWduTW9kZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubW9kZSA9PSBcImRlc2lnbmVyXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc0Nvb2tpZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvb2tpZU5hbWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XG4gICAgICAgIHJldHVybiBjb29raWVzICYmIGNvb2tpZXMuaW5kZXhPZih0aGlzLmNvb2tpZU5hbWUgKyBcIj10cnVlXCIpID4gLTE7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDb29raWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuY29va2llTmFtZSArIFwiPXRydWU7IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAwOjA6MCBHTVRcIjtcbiAgICB9XG4gICAgcHVibGljIGRlbGV0ZUNvb2tpZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvb2tpZU5hbWUpIHJldHVybjtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gdGhpcy5jb29raWVOYW1lICsgXCI9O1wiO1xuICAgIH1cbiAgICBwdWJsaWMgbmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzTGFzdFBhZ2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNDdXJyZW50UGFnZUhhc0Vycm9ycykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5kb1NlcnZlclZhbGlkYXRpb24oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLmRvTmV4dFBhZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldCBpc0N1cnJlbnRQYWdlSGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2UuaGFzRXJyb3JzKHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBwdWJsaWMgcHJldlBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RQYWdlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcbiAgICAgICAgdmFyIGluZGV4ID0gdlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2UGFnZXNbaW5kZXggLSAxXTtcbiAgICB9XG4gICAgcHVibGljIGNvbXBsZXRlTGFzdFBhZ2UoKSA6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0N1cnJlbnRQYWdlSGFzRXJyb3JzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmRvU2VydmVyVmFsaWRhdGlvbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuZG9Db21wbGV0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0ZpcnN0UGFnZSgpOiBib29sZWFuIHsgXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSA9PSAwO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzTGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIHJldHVybiB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSA9PSB2UGFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHVibGljIGRvQ29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsZWFySW52aXNpYmxlVmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW52aXNpYmxlUXVlc3Rpb25WYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENvb2tpZSgpO1xuICAgICAgICB0aGlzLnNldENvbXBsZXRlZCgpO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZmlyZSh0aGlzLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5UG9zdElkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzVmFsaWRhdGluZ09uU2VydmVyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1ZhbGlkYXRpbmdPblNlcnZlclZhbHVlOyB9XG4gICAgcHJpdmF0ZSBzZXRJc1ZhbGlkYXRpbmdPblNlcnZlcih2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLmlzVmFsaWRhdGluZ09uU2VydmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNWYWxpZGF0aW5nT25TZXJ2ZXJWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5vbklzVmFsaWRhdGluZ09uU2VydmVyQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Jc1ZhbGlkYXRpbmdPblNlcnZlckNoYW5nZWQoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZG9TZXJ2ZXJWYWxpZGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMub25TZXJ2ZXJWYWxpZGF0ZVF1ZXN0aW9ucykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBkYXRhOiB7fSwgZXJyb3JzOiB7fSwgc3VydmV5OiB0aGlzLCBjb21wbGV0ZSA6IGZ1bmN0aW9uICgpIHsgc2VsZi5jb21wbGV0ZVNlcnZlclZhbGlkYXRpb24ob3B0aW9ucyk7IH0gfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UGFnZS5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uLnZpc2libGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkgb3B0aW9ucy5kYXRhW3F1ZXN0aW9uLm5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJc1ZhbGlkYXRpbmdPblNlcnZlcih0cnVlKTtcbiAgICAgICAgdGhpcy5vblNlcnZlclZhbGlkYXRlUXVlc3Rpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb21wbGV0ZVNlcnZlclZhbGlkYXRpb24ob3B0aW9uczogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0SXNWYWxpZGF0aW5nT25TZXJ2ZXIoZmFsc2UpO1xuICAgICAgICBpZiAoIW9wdGlvbnMgJiYgIW9wdGlvbnMuc3VydmV5KSByZXR1cm47XG4gICAgICAgIHZhciBzZWxmID0gb3B0aW9ucy5zdXJ2ZXk7XG4gICAgICAgIHZhciBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3JzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gc2VsZi5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24gJiYgcXVlc3Rpb25bXCJlcnJvcnNcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25bXCJhZGRFcnJvclwiXShuZXcgQ3VzdG9tRXJyb3Iob3B0aW9ucy5lcnJvcnNbbmFtZV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNFcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzTGFzdFBhZ2UpIHNlbGYuZG9Db21wbGV0ZSgpO1xuICAgICAgICAgICAgZWxzZSBzZWxmLmRvTmV4dFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZG9OZXh0UGFnZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja09uUGFnZVRyaWdnZXJzKCk7XG4gICAgICAgIGlmICh0aGlzLnNlbmRSZXN1bHRPblBhZ2VOZXh0ICYmIHRoaXMuY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlc3VsdCh0aGlzLnN1cnZleVBvc3RJZCwgdGhpcy5jbGllbnRJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1tpbmRleCArIDFdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0Q29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRDb21wbGV0ZWRIdG1sKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZEh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NIdG1sKHRoaXMuY29tcGxldGVkSHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPGgzPlwiICsgdGhpcy5nZXRMb2NTdHJpbmcoXCJjb21wbGV0aW5nU3VydmV5XCIpICsgXCI8L2gzPlwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3NlZExvYWRpbmdIdG1sKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIjxoMz5cIiArIHRoaXMuZ2V0TG9jU3RyaW5nKFwibG9hZGluZ1N1cnZleVwiKSArIFwiPC9oMz5cIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcbiAgICAgICAgdmFyIGluZGV4ID0gdlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgKyAxO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMb2NTdHJpbmcoXCJwcm9ncmVzc1RleHRcIilbXCJmb3JtYXRcIl0oaW5kZXgsIHZQYWdlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBwdWJsaWMgdXBsb2FkRmlsZShuYW1lOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHN0b3JlRGF0YUFzVGV4dDogYm9vbGVhbiwgdXBsb2FkaW5nQ2FsbGJhY2s6IChzdGF0dXM6IHN0cmluZyk9PmFueSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgYWNjZXB0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblVwbG9hZEZpbGUuZmlyZSh0aGlzLCB7IG5hbWU6IG5hbWUsIGZpbGU6IGZpbGUsIGFjY2VwdDogYWNjZXB0IH0pO1xuICAgICAgICBpZiAoIWFjY2VwdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXN0b3JlRGF0YUFzVGV4dCAmJiB0aGlzLnN1cnZleVBvc3RJZCkge1xuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlQ29yZShuYW1lLCBmaWxlLCB1cGxvYWRpbmdDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGxvYWRGaWxlQ29yZShuYW1lOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHVwbG9hZGluZ0NhbGxiYWNrOiAoc3RhdHVzOiBzdHJpbmcpID0+IGFueSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh1cGxvYWRpbmdDYWxsYmFjaykgdXBsb2FkaW5nQ2FsbGJhY2soXCJ1cGxvYWRpbmdcIik7XG4gICAgICAgIG5ldyBkeFN1cnZleVNlcnZpY2UoKS5zZW5kRmlsZSh0aGlzLnN1cnZleVBvc3RJZCwgZmlsZSwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgIGlmICh1cGxvYWRpbmdDYWxsYmFjaykgdXBsb2FkaW5nQ2FsbGJhY2soc3VjY2VzcyA/IFwic3VjY2Vzc1wiIDogXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRWYWx1ZShuYW1lLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQYWdlKGluZGV4OiBudW1iZXIpOiBQYWdlTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpbmRleF07XG4gICAgfVxuICAgIGFkZFBhZ2UocGFnZTogUGFnZU1vZGVsKSB7XG4gICAgICAgIGlmIChwYWdlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIGFkZE5ld1BhZ2UobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5jcmVhdGVOZXdQYWdlKG5hbWUpO1xuICAgICAgICB0aGlzLmFkZFBhZ2UocGFnZSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICByZW1vdmVQYWdlKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhZ2VzLmluZGV4T2YocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5wYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlID09IHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLnBhZ2VzWzBdIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRRdWVzdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKTogSVF1ZXN0aW9uIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbk5hbWUgPSBxdWVzdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIHF1ZXN0aW9uTmFtZSA9IHF1ZXN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYocXVlc3Rpb25OYW1lID09IG5hbWUpIHJldHVybiBxdWVzdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRRdWVzdGlvbnNCeU5hbWVzKG5hbWVzOiBzdHJpbmdbXSwgY2FzZUluc2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpOiBJUXVlc3Rpb25bXSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFuYW1lcykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZXNbaV0sIGNhc2VJbnNlbnNpdGl2ZSk7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb24pIHJlc3VsdC5wdXNoKHF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb246IElRdWVzdGlvbik6IFBhZ2VNb2RlbCB7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMucGFnZXNbaV07XG4gICAgICAgICAgICBpZiAocGFnZS5xdWVzdGlvbnMuaW5kZXhPZig8UXVlc3Rpb25CYXNlPnF1ZXN0aW9uKSA+IC0xKSByZXR1cm4gcGFnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldFBhZ2VCeU5hbWUobmFtZTogc3RyaW5nKTogUGFnZU1vZGVsIHtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHRoaXMucGFnZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRQYWdlc0J5TmFtZXMobmFtZXM6IHN0cmluZ1tdKTogUGFnZU1vZGVsW117XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFuYW1lcykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5nZXRQYWdlQnlOYW1lKG5hbWVzW2ldKTtcbiAgICAgICAgICAgIGlmIChwYWdlKSByZXN1bHQucHVzaChwYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0QWxsUXVlc3Rpb25zKHZpc2libGVPbmx5OiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxJUXVlc3Rpb24+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxJUXVlc3Rpb24+KCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzW2ldLmFkZFF1ZXN0aW9uc1RvTGlzdChyZXN1bHQsIHZpc2libGVPbmx5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3UGFnZShuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBQYWdlTW9kZWwobmFtZSk7IH1cbiAgICBwcml2YXRlIG5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucygpO1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zW2ldLm5hbWUgIT0gbmFtZSkgY29udGludWU7XG4gICAgICAgICAgICBxdWVzdGlvbiA9IHF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIHRoaXMuZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb24sIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmZpcmUodGhpcywgeyAnbmFtZSc6IG5hbWUsICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAndmFsdWUnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBub3RpZnlBbGxRdWVzdGlvbnNPblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb25zW2ldLCB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGRvU3VydmV5VmFsdWVDaGFuZ2VkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgcXVlc3Rpb24ub25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrT25QYWdlVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1RyaWdnZXJzKHF1ZXN0aW9uLm5hbWUsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk6IEFycmF5PFF1ZXN0aW9uQmFzZT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICAgICAgaWYgKCFwYWdlKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBwYWdlLnF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb24udmlzaWJsZSB8fCAhcXVlc3Rpb24ubmFtZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaChxdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja1RyaWdnZXJzKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgaXNPbk5leHRQYWdlOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnRyaWdnZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcnNbaV07XG4gICAgICAgICAgICBpZiAodHJpZ2dlci5uYW1lID09IG5hbWUgJiYgdHJpZ2dlci5pc09uTmV4dFBhZ2UgPT0gaXNPbk5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlci5jaGVjayhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb1F1ZXN0aW9uc09uTG9hZCgpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5vblN1cnZleUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJ1bkNvbmRpdGlvbnMoKSB7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9uc0Zvckxpc3QodGhpcy5nZXRBbGxRdWVzdGlvbnMoZmFsc2UpKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zRm9yTGlzdCh0aGlzLnBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW5Db25kaXRpb25zRm9yTGlzdChsaXN0OiBBcnJheTxJQ29uZGl0aW9uUnVubmVyPikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RbaV0ucnVuQ29uZGl0aW9uKHRoaXMudmFsdWVzSGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNlbmRSZXN1bHQocG9zdElkOiBzdHJpbmcgPSBudWxsLCBjbGllbnRJZDogc3RyaW5nID0gbnVsbCwgaXNQYXJ0aWFsQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFwb3N0SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpIHtcbiAgICAgICAgICAgIHBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcG9zdElkKSByZXR1cm47XG4gICAgICAgIGlmIChjbGllbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLnNlbmRSZXN1bHQocG9zdElkLCB0aGlzLmRhdGEsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLm9uU2VuZFJlc3VsdC5maXJlKHNlbGYsIHsgc3VjY2Vzczogc3VjY2VzcywgcmVzcG9uc2U6IHJlc3BvbnNlfSk7XG4gICAgICAgIH0sIHRoaXMuY2xpZW50SWQsIGlzUGFydGlhbENvbXBsZXRlZCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZXN1bHQocmVzdWx0SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLmdldFJlc3VsdChyZXN1bHRJZCwgbmFtZSwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgZGF0YUxpc3Q6IGFueVtdLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLm9uR2V0UmVzdWx0LmZpcmUoc2VsZiwgeyBzdWNjZXNzOiBzdWNjZXNzLCBkYXRhOiBkYXRhLCBkYXRhTGlzdDogZGF0YUxpc3QsIHJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHN1cnZleUlkKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUlkID0gc3VydmV5SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25Mb2FkaW5nU3VydmV5RnJvbVNlcnZpY2UoKTtcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkodGhpcy5zdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRKc29uT2JqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlBbGxRdWVzdGlvbnNPblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkU3VydmV5RnJvbVNlcnZpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uTG9hZFN1cnZleUZyb21TZXJ2aWNlKCkge1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrUGFnZVZpc2liaWxpdHkocXVlc3Rpb246IElRdWVzdGlvbiwgb2xkUXVlc3Rpb25WaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIGlmICghcGFnZSkgcmV0dXJuO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBwYWdlLmlzVmlzaWJsZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IHBhZ2UuZ2V0SXNQYWdlVmlzaWJsZShxdWVzdGlvbikgfHwgb2xkUXVlc3Rpb25WaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlSW5kZXhlcygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXModGhpcy5zaG93UGFnZU51bWJlcnMpO1xuICAgICAgICBpZiAodGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25QYWdlXCIpIHtcbiAgICAgICAgICAgIHZhciB2aXNQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyh2aXNQYWdlc1tpXS5xdWVzdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVzdGlvblZpc2libGVJbmRleGVzKHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKSwgdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXMoc2hvd0luZGV4OiBib29sZWFuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS52aXNpYmxlSW5kZXggPSB0aGlzLnBhZ2VzW2ldLnZpc2libGUgPyAoaW5kZXgrKykgOiAtMTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0ubnVtID0gc2hvd0luZGV4ICYmIHRoaXMucGFnZXNbaV0udmlzaWJsZSA/IHRoaXMucGFnZXNbaV0udmlzaWJsZUluZGV4ICsgMSA6IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyhxdWVzdGlvbnM6IElRdWVzdGlvbltdLCBzaG93SW5kZXg6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5zZXRWaXNpYmxlSW5kZXgoc2hvd0luZGV4ICYmIHF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHF1ZXN0aW9uc1tpXS5oYXNUaXRsZSA/IChpbmRleCsrKSA6IC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNldEpzb25PYmplY3QoanNvbk9iajogYW55KSB7XG4gICAgICAgIGlmICghanNvbk9iaikgcmV0dXJuO1xuICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBudWxsO1xuICAgICAgICB2YXIganNvbkNvbnZlcnRlciA9IG5ldyBKc29uT2JqZWN0KCk7XG4gICAgICAgIGpzb25Db252ZXJ0ZXIudG9PYmplY3QoanNvbk9iaiwgdGhpcyk7XG4gICAgICAgIGlmIChqc29uQ29udmVydGVyLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBqc29uQ29udmVydGVyLmVycm9ycztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29va2llKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvUXVlc3Rpb25zT25Mb2FkKCk7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkgeyB9XG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRpbmcoKSB7IH1cbiAgICBwcml2YXRlIHVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tcInBhZ2Vub1wiXSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzZWxmLmN1cnJlbnRQYWdlICE9IG51bGwgPyBzZWxmLnZpc2libGVQYWdlcy5pbmRleE9mKHNlbGYuY3VycmVudFBhZ2UpICsgMSA6IDA7IH1cbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW1wicGFnZWNvdW50XCJdID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHNlbGYudmlzaWJsZVBhZ2VDb3VudDsgfVxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRBbGxRdWVzdGlvbnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1Byb2Nlc3NlZFRleHRWYWx1ZXMocXVlc3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZFF1ZXN0aW9uVG9Qcm9jZXNzZWRUZXh0VmFsdWVzKHF1ZXN0aW9uOiBJUXVlc3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW3F1ZXN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBcInF1ZXN0aW9uXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWVdO1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh2YWwgPT0gXCJxdWVzdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uICE9IG51bGwgPyB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uLm5hbWUpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09IFwidmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PSBcInZhcmlhYmxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcmlhYmxlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwobmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJJbnZpc2libGVRdWVzdGlvblZhbHVlcygpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNbaV0udmlzaWJsZSkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFibGVzSGFzaFtuYW1lXTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhcmlhYmxlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy52YXJpYWJsZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gXCJ2YXJpYWJsZVwiO1xuICAgIH1cbiAgICAvL0lTdXJ2ZXkgZGF0YVxuICAgIHByaXZhdGUgZ2V0VW5iaW5kVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgLy9kbyBub3QgcmV0dXJuIHRoZSBzYW1lIG9iamVjdCBpbnN0YW5jZSEhIVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNIYXNoW25hbWVdO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmJpbmRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwobmFtZSwgbmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiIHx8IG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZ2V0VW5iaW5kVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZFRleHRWYWx1ZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IFwidmFsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrVHJpZ2dlcnMobmFtZSwgbmV3VmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XG4gICAgICAgIHRoaXMudHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlRXF1YWwobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiKSBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCB8fCBvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUd29WYWx1ZUVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGlzVHdvVmFsdWVFcXVhbHMoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhKHkgaW5zdGFuY2VvZiBPYmplY3QpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIHAgaW4geCkge1xuICAgICAgICAgICAgaWYgKCF4Lmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgheS5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHhbcF0gPT09IHlbcF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoeFtwXSkgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1R3b1ZhbHVlRXF1YWxzKHhbcF0sIHlbcF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwIGluIHkpIHtcbiAgICAgICAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICYmICF4Lmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgdHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdvTmV4dFBhZ2VBdXRvbWF0aWMgfHwgIXRoaXMuY3VycmVudFBhZ2UpIHJldHVybjtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmICFxdWVzdGlvbi5zdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpKSByZXR1cm47XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VmFsdWUocXVlc3Rpb25zW2ldLm5hbWUpKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQYWdlLmhhc0Vycm9ycyh0cnVlLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xhc3RQYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb21tZW50KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmRhdGFbbmFtZSArIHRoaXMuY29tbWVudFByZWZpeF07XG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc2V0Q29tbWVudChuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgKyB0aGlzLmNvbW1lbnRQcmVmaXg7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiIHx8IG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc0hhc2hbbmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWVzdGlvblZpc2liaWxpdHlDaGFuZ2VkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2VkLmZpcmUodGhpcywgeyAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ25hbWUnOiBxdWVzdGlvbi5uYW1lLCAndmlzaWJsZSc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICB0aGlzLmNoZWNrUGFnZVZpc2liaWxpdHkocXVlc3Rpb24sICFuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlOiBJUGFnZSwgbmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgICAgICB0aGlzLm9uUGFnZVZpc2libGVDaGFuZ2VkLmZpcmUodGhpcywgeyAncGFnZSc6IHBhZ2UsICd2aXNpYmxlJzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IElRdWVzdGlvbiwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1Byb2Nlc3NlZFRleHRWYWx1ZXMocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLm9uUXVlc3Rpb25BZGRlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSwgJ2luZGV4JzogaW5kZXggfSk7XG4gICAgfVxuICAgIHF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbjogSVF1ZXN0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy5vblF1ZXN0aW9uUmVtb3ZlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGVRdWVzdGlvbihuYW1lOiBzdHJpbmcpOiBTdXJ2ZXlFcnJvciB7XG4gICAgICAgIGlmICh0aGlzLm9uVmFsaWRhdGVRdWVzdGlvbi5pc0VtcHR5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IG5hbWU6IG5hbWUsIHZhbHVlOiB0aGlzLmdldFZhbHVlKG5hbWUpLCBlcnJvcjogbnVsbCB9O1xuICAgICAgICB0aGlzLm9uVmFsaWRhdGVRdWVzdGlvbi5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5lcnJvciA/IG5ldyBDdXN0b21FcnJvcihvcHRpb25zLmVycm9yKSA6IG51bGw7XG4gICAgfVxuICAgIHByb2Nlc3NIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBodG1sOiBodG1sIH07XG4gICAgICAgIHRoaXMub25Qcm9jZXNzSHRtbC5maXJlKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVGV4dChvcHRpb25zLmh0bWwpO1xuICAgIH1cbiAgICBwcm9jZXNzVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UHJlUHJvY2Vzc29yLnByb2Nlc3ModGV4dCk7XG4gICAgfVxuICAgIC8vSVN1cnZleVRyaWdnZXJPd25lclxuICAgIGdldE9iamVjdHMocGFnZXM6IHN0cmluZ1tdLCBxdWVzdGlvbnM6IHN0cmluZ1tdKTogYW55W117XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCB0aGlzLmdldFBhZ2VzQnlOYW1lcyhwYWdlcykpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyZXN1bHQsIHRoaXMuZ2V0UXVlc3Rpb25zQnlOYW1lcyhxdWVzdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc2V0VHJpZ2dlclZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgaXNWYXJpYWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgaWYgKGlzVmFyaWFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFyaWFibGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzdXJ2ZXlcIiwgW3sgbmFtZTogXCJsb2NhbGVcIiwgY2hvaWNlczogKCkgPT4geyByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldExvY2FsZXMoKSB9IH0sXG4gICAgXCJ0aXRsZVwiLCBcImNvbXBsZXRlZEh0bWw6aHRtbFwiLCB7IG5hbWU6IFwicGFnZXNcIiwgY2xhc3NOYW1lOiBcInBhZ2VcIiB9LFxuICAgIHsgbmFtZTogXCJxdWVzdGlvbnNcIiwgYmFzZUNsYXNzTmFtZTogXCJxdWVzdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBudWxsOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqLCB2YWx1ZSwganNvbkNvbnZlcnRlcikgeyB2YXIgcGFnZSA9IG9iai5hZGROZXdQYWdlKFwiXCIpOyBqc29uQ29udmVydGVyLnRvT2JqZWN0KHsgcXVlc3Rpb25zOiB2YWx1ZSB9LCBwYWdlKTsgfSB9LFxuICAgIHsgbmFtZTogXCJ0cmlnZ2Vyczp0cmlnZ2Vyc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXRyaWdnZXJcIiwgY2xhc3NOYW1lUGFydDogXCJ0cmlnZ2VyXCIgfSxcbiAgICBcInN1cnZleUlkXCIsIFwic3VydmV5UG9zdElkXCIsIFwiY29va2llTmFtZVwiLCBcInNlbmRSZXN1bHRPblBhZ2VOZXh0OmJvb2xlYW5cIixcbiAgICB7IG5hbWU6IFwic2hvd05hdmlnYXRpb25CdXR0b25zOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCB7IG5hbWU6IFwic2hvd1RpdGxlOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCB7IG5hbWU6IFwic2hvd1BhZ2VUaXRsZXM6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgXCJzaG93UGFnZU51bWJlcnM6Ym9vbGVhblwiLCB7IG5hbWU6IFwic2hvd1F1ZXN0aW9uTnVtYmVyc1wiLCBkZWZhdWx0OiBcIm9uXCIsIGNob2ljZXM6IFtcIm9uXCIsIFwib25QYWdlXCIsIFwib2ZmXCJdIH0sXG4gICAgeyBuYW1lOiBcInF1ZXN0aW9uVGl0bGVMb2NhdGlvblwiLCBkZWZhdWx0OiBcInRvcFwiLCBjaG9pY2VzOiBbXCJ0b3BcIiwgXCJib3R0b21cIl0gfSxcbiAgICB7IG5hbWU6IFwic2hvd1Byb2dyZXNzQmFyXCIsIGRlZmF1bHQ6IFwib2ZmXCIsIGNob2ljZXM6IFtcIm9mZlwiLCBcInRvcFwiLCBcImJvdHRvbVwiXSB9LFxuICAgIHsgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudDpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgXCJnb05leHRQYWdlQXV0b21hdGljOmJvb2xlYW5cIiwgXCJjbGVhckludmlzaWJsZVZhbHVlczpib29sZWFuXCIsXG4gICAgeyBuYW1lOiBcInBhZ2VQcmV2VGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5wYWdlUHJldlRleHRWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJwYWdlTmV4dFRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucGFnZU5leHRUZXh0VmFsdWU7IH0gfSxcbiAgICB7IG5hbWU6IFwiY29tcGxldGVUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLmNvbXBsZXRlVGV4dFZhbHVlOyB9IH0sXG4gICAgeyBuYW1lOiBcInJlcXVpcmVkVGV4dFwiLCBkZWZhdWx0OiBcIipcIiB9LCBcInF1ZXN0aW9uU3RhcnRJbmRleFwiLCBcInF1ZXN0aW9uVGl0bGVUZW1wbGF0ZVwiXSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleS50cyIsImV4cG9ydCBjbGFzcyBkeFN1cnZleVNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgc2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL2R4c3VydmV5YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9TdXJ2ZXlcIjtcbiAgICAvL3B1YmxpYyBzdGF0aWMgc2VydmljZVVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNDg4L2FwaS9TdXJ2ZXlcIjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGxvYWRTdXJ2ZXkoc3VydmV5SWQ6IHN0cmluZywgb25Mb2FkOiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL2dldFN1cnZleT9zdXJ2ZXlJZD0nICsgc3VydmV5SWQpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIG9uTG9hZCh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VuZFJlc3VsdChwb3N0SWQ6IHN0cmluZywgcmVzdWx0OiBKU09OLCBvblNlbmRSZXN1bHQ6IChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KT0+IHZvaWQsIGNsaWVudElkOiBzdHJpbmcgPSBudWxsLCBpc1BhcnRpYWxDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL3Bvc3QvJyk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgICB2YXIgZGF0YSA9IHsgcG9zdElkOiBwb3N0SWQsIHN1cnZleVJlc3VsdDogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSB9O1xuICAgICAgICBpZiAoY2xpZW50SWQpIGRhdGFbJ2NsaWVudElkJ10gPSBjbGllbnRJZDtcbiAgICAgICAgaWYgKGlzUGFydGlhbENvbXBsZXRlZCkgZGF0YVsnaXNQYXJ0aWFsQ29tcGxldGVkJ10gPSB0cnVlO1xuICAgICAgICB2YXIgZGF0YVN0cmluZ2lmeTogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgeGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFvblNlbmRSZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgIG9uU2VuZFJlc3VsdCh4aHIuc3RhdHVzID09IDIwMCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YVN0cmluZ2lmeSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZW5kRmlsZShwb3N0SWQ6IHN0cmluZywgZmlsZTogRmlsZSwgb25TZW5kRmlsZTogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25sb2FkID0geGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIW9uU2VuZEZpbGUpIHJldHVybjtcbiAgICAgICAgICAgIG9uU2VuZEZpbGUoeGhyLnN0YXR1cyA9PSAyMDAsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBkeFN1cnZleVNlcnZpY2Uuc2VydmljZVVybCArICcvdXBsb2FkLycsIHRydWUpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdElkXCIsIHBvc3RJZCk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9XG4gICAgcHVibGljIGdldFJlc3VsdChyZXN1bHRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG9uR2V0UmVzdWx0OiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55LCBkYXRhTGlzdDogQXJyYXk8YW55PiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBkYXRhID0gJ3Jlc3VsdElkPScgKyByZXN1bHRJZCArICcmbmFtZT0nICsgbmFtZTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9nZXRSZXN1bHQ/JyArIGRhdGEpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc3VsdC5RdWVzdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB7IG5hbWU6IGtleSwgdmFsdWU6IHJlc3VsdC5RdWVzdGlvblJlc3VsdFtrZXldIH07XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25HZXRSZXN1bHQoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgbGlzdCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGlzQ29tcGxldGVkKHJlc3VsdElkOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIG9uSXNDb21wbGV0ZWQ6IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBkYXRhID0gJ3Jlc3VsdElkPScgKyByZXN1bHRJZCArICcmY2xpZW50SWQ9JyArIGNsaWVudElkO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL2lzQ29tcGxldGVkPycgKyBkYXRhKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbklzQ29tcGxldGVkKHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9keFN1cnZleVNlcnZpY2UudHMiLCJpbXBvcnQge0Jhc2UsIEhhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmlnZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIG9wZXJhdG9yc1ZhbHVlOiBIYXNoVGFibGU8RnVuY3Rpb24+ID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IG9wZXJhdG9ycygpIHtcbiAgICAgICAgaWYgKFRyaWdnZXIub3BlcmF0b3JzVmFsdWUgIT0gbnVsbCkgcmV0dXJuIFRyaWdnZXIub3BlcmF0b3JzVmFsdWU7XG4gICAgICAgIFRyaWdnZXIub3BlcmF0b3JzVmFsdWUgPSB7XG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiAhdmFsdWU7IH0sXG4gICAgICAgICAgICBub3RlbXB0eTogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiAhKCF2YWx1ZSk7IH0sXG4gICAgICAgICAgICBlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PSBleHBlY3RlZFZhbHVlOyB9LFxuICAgICAgICAgICAgbm90ZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgIT0gZXhwZWN0ZWRWYWx1ZTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlICYmIHZhbHVlW1wiaW5kZXhPZlwiXSAmJiB2YWx1ZS5pbmRleE9mKGV4cGVjdGVkVmFsdWUpID4gLTE7IH0sXG4gICAgICAgICAgICBub3Rjb250YWluczogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiAhdmFsdWUgfHwgIXZhbHVlW1wiaW5kZXhPZlwiXSB8fCB2YWx1ZS5pbmRleE9mKGV4cGVjdGVkVmFsdWUpID09IC0xOyB9LFxuICAgICAgICAgICAgZ3JlYXRlcjogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA+IGV4cGVjdGVkVmFsdWU7IH0sXG4gICAgICAgICAgICBsZXNzOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlIDwgZXhwZWN0ZWRWYWx1ZTsgfSxcbiAgICAgICAgICAgIGdyZWF0ZXJvcmVxdWFsOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlID49IGV4cGVjdGVkVmFsdWU7IH0sXG4gICAgICAgICAgICBsZXNzb3JlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA8PSBleHBlY3RlZFZhbHVlOyB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUcmlnZ2VyLm9wZXJhdG9yc1ZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIG9wVmFsdWU6IHN0cmluZyA9IFwiZXF1YWxcIjtcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvcGVyYXRvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vcFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBvcGVyYXRvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIVRyaWdnZXIub3BlcmF0b3JzW3ZhbHVlXSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9wVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGNoZWNrKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKFRyaWdnZXIub3BlcmF0b3JzW3RoaXMub3BlcmF0b3JdKHZhbHVlLCB0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25GYWlsdXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHsgfVxuICAgIHByb3RlY3RlZCBvbkZhaWx1cmUoKSB7IH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3VydmV5VHJpZ2dlck93bmVyIHtcbiAgICBnZXRPYmplY3RzKHBhZ2VzOiBzdHJpbmdbXSwgcXVlc3Rpb25zOiBzdHJpbmdbXSk6IGFueVtdO1xuICAgIGRvQ29tcGxldGUoKTtcbiAgICBzZXRUcmlnZ2VyVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBpc1ZhcmlhYmxlOiBib29sZWFuKTtcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXIgZXh0ZW5kcyBUcmlnZ2VyIHtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBvd25lcjogSVN1cnZleVRyaWdnZXJPd25lciA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPd25lcihvd25lcjogSVN1cnZleVRyaWdnZXJPd25lcikge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNPbk5leHRQYWdlKCkgeyByZXR1cm4gZmFsc2U7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXJWaXNpYmxlIGV4dGVuZHMgU3VydmV5VHJpZ2dlciB7XG4gICAgcHVibGljIHBhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBxdWVzdGlvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInZpc2libGV0cmlnZ2VyXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25TdWNjZXNzKCkgeyB0aGlzLm9uVHJpZ2dlcih0aGlzLm9uSXRlbVN1Y2Nlc3MpOyB9XG4gICAgcHJvdGVjdGVkIG9uRmFpbHVyZSgpIHsgdGhpcy5vblRyaWdnZXIodGhpcy5vbkl0ZW1GYWlsdXJlKTsgfVxuICAgIHByaXZhdGUgb25UcmlnZ2VyKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5vd25lcikgcmV0dXJuO1xuICAgICAgICB2YXIgb2JqZWN0cyA9IHRoaXMub3duZXIuZ2V0T2JqZWN0cyh0aGlzLnBhZ2VzLCB0aGlzLnF1ZXN0aW9ucyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnVuYyhvYmplY3RzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25JdGVtU3VjY2VzcyhpdGVtOiBhbnkpIHsgaXRlbS52aXNpYmxlID0gdHJ1ZTsgfVxuICAgIHByb3RlY3RlZCBvbkl0ZW1GYWlsdXJlKGl0ZW06IGFueSkgeyBpdGVtLnZpc2libGUgPSBmYWxzZTsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXJDb21wbGV0ZSBleHRlbmRzIFN1cnZleVRyaWdnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJjb21wbGV0ZXRyaWdnZXJcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNPbk5leHRQYWdlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7IGlmICh0aGlzLm93bmVyKSB0aGlzLm93bmVyLmRvQ29tcGxldGUoKTsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXJTZXRWYWx1ZSBleHRlbmRzIFN1cnZleVRyaWdnZXIge1xuICAgIHB1YmxpYyBzZXRUb05hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgc2V0VmFsdWU6IGFueTtcbiAgICBwdWJsaWMgaXNWYXJpYWJsZTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2V0dmFsdWV0cmlnZ2VyXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25TdWNjZXNzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2V0VG9OYW1lIHx8ICF0aGlzLm93bmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMub3duZXIuc2V0VHJpZ2dlclZhbHVlKHRoaXMuc2V0VG9OYW1lLCB0aGlzLnNldFZhbHVlLCB0aGlzLmlzVmFyaWFibGUpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInRyaWdnZXJcIiwgW1wib3BlcmF0b3JcIiwgXCIhdmFsdWVcIl0pO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInN1cnZleXRyaWdnZXJcIiwgW1wiIW5hbWVcIl0sIG51bGwsIFwidHJpZ2dlclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ2aXNpYmxldHJpZ2dlclwiLCBbXCJwYWdlc1wiLCBcInF1ZXN0aW9uc1wiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN1cnZleVRyaWdnZXJWaXNpYmxlKCk7IH0sIFwic3VydmV5dHJpZ2dlclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjb21wbGV0ZXRyaWdnZXJcIiwgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlUcmlnZ2VyQ29tcGxldGUoKTsgfSwgXCJzdXJ2ZXl0cmlnZ2VyXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNldHZhbHVldHJpZ2dlclwiLCBbXCIhc2V0VG9OYW1lXCIsIFwic2V0VmFsdWVcIiwgXCJpc1ZhcmlhYmxlOmJvb2xlYW5cIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUoKTsgfSwgXCJzdXJ2ZXl0cmlnZ2VyXCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmlnZ2VyLnRzIiwiaW1wb3J0IHtCYXNlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi9zdXJ2ZXlcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVdpbmRvd01vZGVsIGV4dGVuZHMgQmFzZSAge1xuICAgIHB1YmxpYyBzdGF0aWMgc3VydmV5RWxlbWVudE5hbWUgPSBcIndpbmRvd1N1cnZleUpTXCI7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleU1vZGVsO1xuICAgIHdpbmRvd0VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIGlzU2hvd2luZ1ZhbHVlOiBib29sZWFuO1xuICAgIGlzRXhwYW5kZWRWYWx1ZTogYm9vbGVhbjtcbiAgICB0aXRsZVZhbHVlOiBzdHJpbmc7XG4gICAgdGVtcGxhdGVWYWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoanNvbk9iajogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB0aGlzLmNyZWF0ZVN1cnZleShqc29uT2JqKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5zaG93VGl0bGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCkgOiBzdHJpbmcgeyByZXR1cm4gXCJ3aW5kb3dcIiB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5TW9kZWwgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNTaG93aW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1Nob3dpbmdWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZFZhbHVlOyB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50aXRsZVZhbHVlID8gdGhpcy50aXRsZVZhbHVlIDogdGhpcy5zdXJ2ZXkudGl0bGU7IH1cbiAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZVZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZXhwYW5kKCkge1xuICAgICAgICB0aGlzLmV4cGFuZGNvbGxhcHNlKHRydWUpO1xuICAgIH1cbiAgICBwdWJsaWMgY29sbGFwc2UoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kY29sbGFwc2UoZmFsc2UpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3VydmV5KGpzb25PYmo6IGFueSk6IFN1cnZleU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlNb2RlbChqc29uT2JqKVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZXhwYW5kY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleVdpbmRvdy50cyIsImltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcblxuLy8gVXNlIHRoZSBRdWVzdGlvbiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkRhdGVNb2RlbCBleHRlbmRzIFF1ZXN0aW9uIHtcbiAgICAvL0RlZmluZSBwcm9wZXJ0aWVzIFxuICAgIHB1YmxpYyBzaG93T3RoZXJNb250aHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc2VsZWN0T3RoZXJNb250aHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd0J1dHRvblBhbmVsOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGNoYW5nZU1vbnRoOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGNoYW5nZVllYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbnVtYmVyT2ZNb250aHM6IG51bWJlciA9IDE7XG4gICAgcHVibGljIG1pbkRhdGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIG1heERhdGU6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgLy9cImRhdGVcIiAtIGlkZW50aWZpY2F0b3IgdGhhdCB3aWxsIGpzb24gc2VyaWFsaXplciB3aGF0IHF1ZXN0aW9uIHRvIGNyZWF0ZS5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJkYXRlXCI7XG4gICAgfVxuICAgIC8vU2NyaXB0IHRoYXQgd2lsbCBtYWtlIGZyb20gYSB0ZXh0IGlucHV0IGEganF1ZXJ5IERhdGUgZWRpdG9yLlxuICAgIHB1YmxpYyBnZXRqUXVlcnlTY3JpcHQoc2VsZWN0b3JJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIFwiJCgnI1wiICsgc2VsZWN0b3JJZCArIFwiJykuZGF0ZXBpY2tlcihcIiArIEpTT04uc3RyaW5naWZ5KGpzb24pICsgXCIpO1wiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE9wdGlvbnMoKTogYW55IHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd090aGVyTW9udGhzKSBvcHRpb25zW1wic2hvd090aGVyTW9udGhzXCJdID0gdGhpcy5zaG93T3RoZXJNb250aHM7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE90aGVyTW9udGhzKSBvcHRpb25zW1wic2VsZWN0T3RoZXJNb250aHNcIl0gPSB0aGlzLnNlbGVjdE90aGVyTW9udGhzO1xuICAgICAgICBpZiAodGhpcy5zaG93QnV0dG9uUGFuZWwpIG9wdGlvbnNbXCJzaG93QnV0dG9uUGFuZWxcIl0gPSB0aGlzLnNob3dCdXR0b25QYW5lbDtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlTW9udGgpIG9wdGlvbnNbXCJjaGFuZ2VNb250aFwiXSA9IHRoaXMuY2hhbmdlTW9udGg7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZVllYXIpIG9wdGlvbnNbXCJjaGFuZ2VZZWFyXCJdID0gdGhpcy5jaGFuZ2VZZWFyO1xuICAgICAgICBpZiAodGhpcy5udW1iZXJPZk1vbnRocyA+IDEpIG9wdGlvbnNbXCJudW1iZXJPZk1vbnRoc1wiXSA9IHRoaXMubnVtYmVyT2ZNb250aHM7XG4gICAgICAgIGlmICh0aGlzLm1pbkRhdGUpIG9wdGlvbnNbXCJtaW5EYXRlXCJdID0gXCInXCIgKyB0aGlzLm1pbkRhdGUgKyBcIidcIjtcbiAgICAgICAgaWYgKHRoaXMubWluRGF0ZSkgb3B0aW9uc1tcIm1heERhdGVcIl0gPSBcIidcIiArIHRoaXMubWF4RGF0ZSArIFwiJ1wiO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIHRydWU7IH1cbn1cbi8vYWRkIGNsYXNzIGFuZCBpdCdzIHByb3BlcnRpZXMgaW50byBqc29uIG1ldGEgZGF0YS5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJkYXRlXCIsIC8vXCJkYXRlXCIgLSBxdWVzdGlvbiB0eXBlIGlkZW50aWZpY2F0b3JcbiAgICAvL2xpc3Qgb2YgcHJvcGVydGllcyB3aXRoIHRoZWlyIHR5cGVzIChzdHJpbmcgaXMgZGVmYXVsdCkgYW5kIG90aGVyIG9wdGlvbnMuXG4gICAgLy9Gb3IgZXhhbXBsZTogY2hvaWNlcyBvcHRpb24gd2lsbCB1c2VkIGJ5IHN1cnZleSBlZGl0b3IuIFRoZXJlIHdpbGwgYmUgYSBkcm9wZG93biBlZGl0b3Igd2l0aCA1IG9wdGlvbnMuXG4gICAgW1wic2hvd090aGVyTW9udGhzOmJvb2xlYW5cIiwgXCJzZWxlY3RPdGhlck1vbnRoczpib29sZWFuXCIsIFwic2hvd0J1dHRvblBhbmVsOmJvb2xlYW5cIixcbiAgICAgICAgXCJjaGFuZ2VNb250aDpib29sZWFuXCIsIFwiY2hhbmdlWWVhcjpib29sZWFuXCIsIHsgbmFtZTogXCJudW1iZXJPZk1vbnRoc1wiLCBkZWZhdWx0OiAxLCBjaG9pY2VzOiBbMSwgMiwgMywgNCwgNV0gfSwgXCJtaW5EYXRlXCIsIFwibWF4RGF0ZVwiXSxcbiAgICAvL2pzb24gZGVzZXJpYWxpemVyIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRGF0ZU1vZGVsKFwiXCIpOyB9LFxuICAgIC8vdGVsbCBqc29uIHNlcmlhbGl6ZXIgdGhhdCB3ZSBhcmUgaW5oZXJpdGVkIGZyb20gJ3F1ZXN0aW9uJyBjbGFzcyBhbmQgd2Ugd2FudCB0byB1c2UgYWxsICdxdWVzdGlvbicgcHJvcGVydGllcyBhcyB3ZWxsLlxuICAgIFwicXVlc3Rpb25cIik7XG5cbi8vUmVnaXN0ZXIgdGhlIGNsYXNzIGFzIGEgcXVlc2l0b24uIFN1cnZleSBlZGl0b3Igd2lsbCBrbm93IGl0IGlzIGEgcXVlc3Rpb24gYW5kIGl0IHdpbGwgc2hvdyBpdCBpbiBxdWVzdGlvbiB0b29sYm94LlxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJkYXRlXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25EYXRlTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbHVnaW5zL3F1ZXN0aW9uX2RhdGUudHMiLCJleHBvcnQgdmFyIHN1cnZleUNzcyA9IHtcbiAgICBjdXJyZW50VHlwZTogXCJcIixcbiAgICBnZXRDc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudFR5cGUgPyB0aGlzW3RoaXMuY3VycmVudFR5cGVdIDogZGVmYXVsdFN0YW5kYXJkQ3NzO1xuICAgICAgICBpZiAoIWxvYykgbG9jID0gZGVmYXVsdFN0YW5kYXJkQ3NzO1xuICAgICAgICByZXR1cm4gbG9jO1xuICAgIH0sXG59O1xuXG5leHBvcnQgdmFyIGRlZmF1bHRTdGFuZGFyZENzcyA9IHtcbiAgICByb290OiBcInN2X21haW5cIixcbiAgICBoZWFkZXI6IFwiXCIsXG4gICAgYm9keTogXCJzdl9ib2R5XCIsXG4gICAgZm9vdGVyOiBcInN2X25hdlwiLFxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiXCIsIHByZXY6XCJcIiwgbmV4dDogXCJcIn0sXG4gICAgcHJvZ3Jlc3M6IFwic3ZfcHJvZ3Jlc3NcIiwgcHJvZ3Jlc3NCYXI6IFwiXCIsXG4gICAgcGFnZVRpdGxlOiBcInN2X3BfdGl0bGVcIixcbiAgICByb3c6IFwic3Zfcm93XCIsXG4gICAgcXVlc3Rpb246IHsgcm9vdDogXCJzdl9xXCIsIHRpdGxlOiBcInN2X3FfdGl0bGVcIiwgY29tbWVudDogXCJcIiwgaW5kZW50OiAyMCB9LFxuICAgIGVycm9yOiB7IHJvb3Q6IFwic3ZfcV9lcmJveFwiLCBpY29uOiBcIlwiLCBpdGVtOiBcIlwiIH0sXG5cbiAgICBjaGVja2JveDogeyByb290OiBcInN2X3FjYmNcIiwgaXRlbTogXCJzdl9xX2NoZWNrYm94XCIsIG90aGVyOiBcInN2X3Ffb3RoZXJcIiB9LFxuICAgIGNvbW1lbnQ6IFwiXCIsXG4gICAgZHJvcGRvd246IFwiXCIsXG4gICAgbWF0cml4OiB7IHJvb3Q6IFwic3ZfcV9tYXRyaXhcIiB9LFxuICAgIG1hdHJpeGRyb3Bkb3duOiB7IHJvb3Q6IFwic3ZfcV9tYXRyaXhcIiB9LFxuICAgIG1hdHJpeGR5bmFtaWM6IHsgcm9vdDogXCJ0YWJsZVwiLCBidXR0b246IFwiXCIgfSxcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJcIiwgaXRlbVRpdGxlOiBcIlwiLCBpdGVtVmFsdWU6IFwiXCIgfSxcbiAgICByYWRpb2dyb3VwOiB7IHJvb3Q6IFwic3ZfcWNiY1wiLCBpdGVtOiBcInN2X3FfcmFkaW9ncm91cFwiLCBvdGhlcjogXCJzdl9xX290aGVyXCIgfSxcbiAgICByYXRpbmc6IHsgcm9vdDogXCJzdl9xX3JhdGluZ1wiLCBpdGVtOiBcInN2X3FfcmF0aW5nX2l0ZW1cIiB9LFxuICAgIHRleHQ6IFwiXCIsXG4gICAgd2luZG93OiB7XG4gICAgICAgIHJvb3Q6IFwic3Zfd2luZG93XCIsIGJvZHk6IFwic3Zfd2luZG93X2NvbnRlbnRcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICByb290OiBcInN2X3dpbmRvd190aXRsZVwiLCB0aXRsZTogXCJcIiwgYnV0dG9uOiBcIlwiLCBidXR0b25FeHBhbmRlZDogXCJcIiwgYnV0dG9uQ29sbGFwc2VkOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5zdXJ2ZXlDc3NbXCJzdGFuZGFyZFwiXSA9IGRlZmF1bHRTdGFuZGFyZENzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdENzcy9jc3NzdGFuZGFyZC50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xuaW1wb3J0IHtJUGFnZSwgRXZlbnR9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCIuL2tvcGFnZVwiO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQge3N1cnZleUNzc30gZnJvbSBcIi4uL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmRcIjtcbmltcG9ydCB7a29UZW1wbGF0ZX0gZnJvbSBcIi4vdGVtcGxhdGUua28uaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5IGV4dGVuZHMgU3VydmV5TW9kZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNzc1R5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHN1cnZleUNzcy5jdXJyZW50VHlwZTsgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGNzc1R5cGUodmFsdWU6IHN0cmluZykgeyBzdXJ2ZXlDc3MuY3VycmVudFR5cGUgPSB2YWx1ZTsgfVxuICAgIHByaXZhdGUgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwdWJsaWMgb25SZW5kZXJlZDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0UmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGtvQ3VycmVudFBhZ2U6IGFueTsga29Jc0ZpcnN0UGFnZTogYW55OyBrb0lzTGFzdFBhZ2U6IGFueTsgZHVtbXlPYnNlcnZhYmxlOiBhbnk7IGtvU3RhdGU6IGFueTtcbiAgICBrb1Byb2dyZXNzOiBhbnk7IGtvUHJvZ3Jlc3NUZXh0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkgPSBudWxsLCByZW5kZXJlZEVsZW1lbnQ6IGFueSA9IG51bGwsIGNzczogYW55ID0gbnVsbCkge1xuICAgICAgICBzdXBlcihqc29uT2JqKTtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgdGhpcy5jc3MgPSBjc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSByZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBrbyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcigna25vY2tvdXRqcyBsaWJyYXJ5IGlzIG5vdCBsb2FkZWQuJyk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJlbmRlcmVkRWxlbWVudCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3NzTmF2aWdhdGlvbkNvbXBsZXRlKCkgeyByZXR1cm4gdGhpcy5nZXROYXZpZ2F0aW9uQ3NzKHRoaXMuY3NzLm5hdmlnYXRpb25CdXR0b24sIHRoaXMuY3NzLm5hdmlnYXRpb24uY29tcGxldGUpOyB9XG4gICAgcHVibGljIGdldCBjc3NOYXZpZ2F0aW9uUHJldigpIHsgcmV0dXJuIHRoaXMuZ2V0TmF2aWdhdGlvbkNzcyh0aGlzLmNzcy5uYXZpZ2F0aW9uQnV0dG9uLCB0aGlzLmNzcy5uYXZpZ2F0aW9uLnByZXYpOyB9XG4gICAgcHVibGljIGdldCBjc3NOYXZpZ2F0aW9uTmV4dCgpIHsgcmV0dXJuIHRoaXMuZ2V0TmF2aWdhdGlvbkNzcyh0aGlzLmNzcy5uYXZpZ2F0aW9uQnV0dG9uLCB0aGlzLmNzcy5uYXZpZ2F0aW9uLm5leHQpOyB9XG4gICAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uQ3NzKG1haW46IHN0cmluZywgYnRuOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlcyA9IFwiXCI7XG4gICAgICAgIGlmIChtYWluKSByZXMgPSBtYWluO1xuICAgICAgICBpZiAoYnRuKSByZXMgKz0gJyAnICsgYnRuO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNzcygpOiBhbnkgeyByZXR1cm4gc3VydmV5Q3NzLmdldENzcygpOyB9XG4gICAgcHVibGljIHNldCBjc3ModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1lcmdlVmFsdWVzKHZhbHVlLCB0aGlzLmNzcyk7XG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoZWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSgpO1xuICAgICAgICBzZWxmLmFwcGx5QmluZGluZygpO1xuICAgICAgICBzZWxmLm9uUmVuZGVyZWQuZmlyZShzZWxmLCB7fSk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQ6IHN0cmluZyA9IG51bGwsIHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAocmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IHJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5sb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0Q29tcGxldGVkKCkge1xuICAgICAgICBzdXBlci5zZXRDb21wbGV0ZWQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdQYWdlKG5hbWU6IHN0cmluZykgeyByZXR1cm4gbmV3IFBhZ2UobmFtZSk7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIGtvVGVtcGxhdGUuaHRtbDsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHVtbXlPYnNlcnZhYmxlID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5rb0N1cnJlbnRQYWdlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmR1bW15T2JzZXJ2YWJsZSgpOyByZXR1cm4gc2VsZi5jdXJyZW50UGFnZTsgfSk7XG4gICAgICAgIHRoaXMua29Jc0ZpcnN0UGFnZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuaXNGaXJzdFBhZ2U7IH0pO1xuICAgICAgICB0aGlzLmtvSXNMYXN0UGFnZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuaXNMYXN0UGFnZTsgfSk7XG4gICAgICAgIHRoaXMua29Qcm9ncmVzc1RleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYuZHVtbXlPYnNlcnZhYmxlKCk7IHJldHVybiBzZWxmLnByb2dyZXNzVGV4dDsgfSk7XG4gICAgICAgIHRoaXMua29Qcm9ncmVzcyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuZ2V0UHJvZ3Jlc3MoKTsgfSk7XG4gICAgICAgIHRoaXMua29TdGF0ZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuc3RhdGU7IH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VDaGFuZ2VkKG5ld1ZhbHVlOiBQYWdlTW9kZWwsIG9sZFZhbHVlOiBQYWdlTW9kZWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgICAgIHN1cGVyLmN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXNpZ25Nb2RlKSB0aGlzLmZvY3VzRmlyc3RRdWVzdGlvbigpO1xuICAgIH1cbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlS29DdXJyZW50UGFnZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkU3VydmV5RnJvbVNlcnZpY2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJlZEVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0UmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZpcnN0UmVuZGVyID0gZmFsc2U7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUtvQ3VycmVudFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuZHVtbXlPYnNlcnZhYmxlKHRoaXMuZHVtbXlPYnNlcnZhYmxlKCkgKyAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50UGFnZVF1ZXN0aW9ucygpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuY3VycmVudFBhZ2UgPyB0aGlzLmN1cnJlbnRQYWdlLnF1ZXN0aW9ucyA6IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHEgPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAocS52aXNpYmxlKSBxW1widXBkYXRlUXVlc3Rpb25cIl0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29zdXJ2ZXkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9XG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UGFnZU1vZGVsLCBRdWVzdGlvblJvd01vZGVsfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbmJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUm93IGV4dGVuZHMgUXVlc3Rpb25Sb3dNb2RlbCB7XG4gICAga29WaXNpYmxlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2VNb2RlbCwgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSwgcXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUodGhpcy52aXNpYmxlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29WaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuICAgIHB1YmxpYyBrb0FmdGVyUmVuZGVyKGVsLCBjb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRFbCA9IGVsW2ldO1xuICAgICAgICAgICAgdmFyIG5OYW1lID0gdEVsLm5vZGVOYW1lO1xuICAgICAgICAgICAgaWYgKG5OYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZSBleHRlbmRzIFBhZ2VNb2RlbCB7XG4gICAga29ObzogYW55O1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHRoaXMua29ObyA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUm93KHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBRdWVzdGlvblJvd01vZGVsIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJvdyh0aGlzLCBxdWVzdGlvbik7IH1cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGluZygpIHsgfVxuICAgIHByb3RlY3RlZCBvbk51bUNoYW5nZWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmtvTm8odmFsdWUgPiAwID8gdmFsdWUgKyBcIi4gXCIgOiBcIlwiKTtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInBhZ2VcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFBhZ2UoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcGFnZS50cyIsImV4cG9ydCB2YXIga29UZW1wbGF0ZSA9IHsgaHRtbCA6IFwiXCJ9OyBrb1RlbXBsYXRlLmh0bWwgPSAnPHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktY29tbWVudFwiPiAgPGlucHV0IGRhdGEtYmluZD1cInZhbHVlOiRkYXRhLnF1ZXN0aW9uLmtvQ29tbWVudCwgdmlzaWJsZTokZGF0YS52aXNpYmxlLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi5jb21tZW50XCI+PC9zY3JpcHQ+PGRpdiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5yb290XCI+ICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6ICh0aXRsZS5sZW5ndGggPiAwKSAmJiBzaG93VGl0bGUgJiYga29TdGF0ZSgpICE9IFxcJ2NvbXBsZXRlZFxcJywgY3NzOiAkcm9vdC5jc3MuaGVhZGVyXCI+ICAgIDxoMyBkYXRhLWJpbmQ9XCJ0ZXh0OnRpdGxlXCI+PC9oMz4gIDwvZGl2PiAgPCEtLSBrbyBpZjoga29TdGF0ZSgpID09IFwicnVubmluZ1wiIC0tPiAgPGRpdiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5ib2R5XCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogc2hvd1Byb2dyZXNzQmFyID09XFwndG9wXFwnLCB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcHJvZ3Jlc3NcXCcsIGRhdGE6ICRkYXRhIH1cIj48L2Rpdj4gICAgPGRpdiBpZD1cInNxX3BhZ2VcIiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcGFnZVxcJywgZGF0YToga29DdXJyZW50UGFnZSB9XCI+PC9kaXY+ICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzaG93UHJvZ3Jlc3NCYXIgPT1cXCdib3R0b21cXCcsIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1wcm9ncmVzc1xcJywgZGF0YTogJGRhdGEgfVwiPjwvZGl2PiAgPC9kaXY+ICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNob3dOYXZpZ2F0aW9uQnV0dG9ucyAmJiAhaXNEZXNpZ25Nb2RlLCBjc3M6ICRyb290LmNzcy5mb290ZXJcIj4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInBhZ2VQcmV2XCIgZGF0YS1iaW5kPVwidmFsdWU6IHBhZ2VQcmV2VGV4dCwgY2xpY2s6IHByZXZQYWdlLCB2aXNpYmxlOiAha29Jc0ZpcnN0UGFnZSgpLCBjc3M6ICRyb290LmNzc05hdmlnYXRpb25QcmV2XCI+ICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJQYWdlTmV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBwYWdlTmV4dFRleHQsIGNsaWNrOiBuZXh0UGFnZSwgdmlzaWJsZTogIWtvSXNMYXN0UGFnZSgpLCBjc3M6ICRyb290LmNzc05hdmlnYXRpb25OZXh0XCI+ICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwYWdlQ29tcGxldGVcIiBkYXRhLWJpbmQ9XCJ2YWx1ZTogY29tcGxldGVUZXh0LCBjbGljazogY29tcGxldGVMYXN0UGFnZSwgdmlzaWJsZToga29Jc0xhc3RQYWdlKCksIGNzczogJHJvb3QuY3NzTmF2aWdhdGlvbkNvbXBsZXRlXCI+ICA8L2Rpdj4gIDwhLS0gL2tvIC0tPiAgPCEtLSBrbyBpZjoga29TdGF0ZSgpID09IFwiY29tcGxldGVkXCIgLS0+ICA8ZGl2IGRhdGEtYmluZD1cImh0bWw6IHByb2Nlc3NlZENvbXBsZXRlZEh0bWxcIj48L2Rpdj4gIDwhLS0gL2tvIC0tPiAgPCEtLSBrbyBpZjoga29TdGF0ZSgpID09IFwibG9hZGluZ1wiIC0tPiAgPGRpdiBkYXRhLWJpbmQ9XCJodG1sOiBwcm9jZXNzZWRMb2FkaW5nSHRtbFwiPjwvZGl2PiAgPCEtLSAva28gLS0+ICA8IS0tIGtvIGlmOiBrb1N0YXRlKCkgPT0gXCJlbXB0eVwiIC0tPiAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZXh0OmVtcHR5U3VydmV5VGV4dCwgY3NzOiAkcm9vdC5jc3MuYm9keVwiPjwvZGl2PiAgPCEtLSAva28gLS0+PC9kaXY+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcGFnZVwiPiAgPGg0IGRhdGEtYmluZD1cInZpc2libGU6ICh0aXRsZS5sZW5ndGggPiAwKSAmJiBkYXRhLnNob3dQYWdlVGl0bGVzLCB0ZXh0OiBrb05vKCkgKyBwcm9jZXNzZWRUaXRsZSwgY3NzOiAkcm9vdC5jc3MucGFnZVRpdGxlXCI+PC9oND4gIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3dzLCBhczogXFwncm93XFwnfSAtLT4gIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcm93LmtvVmlzaWJsZSwgY3NzOiAkcm9vdC5jc3Mucm93XCI+ICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3cucXVlc3Rpb25zLCBhczogXFwncXVlc3Rpb25cXCcgLCBhZnRlclJlbmRlcjogcm93LmtvQWZ0ZXJSZW5kZXIgfSAtLT4gICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogcXVlc3Rpb24gfSAtLT48IS0tIC9rbyAtLT4gICAgPCEtLSAva28gLS0+ICA8L2Rpdj4gIDwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXByb2dyZXNzXCI+ICA8ZGl2IHN0eWxlPVwid2lkdGg6ODAlO2FsaWduOmNlbnRlclwiIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnByb2dyZXNzXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucHJvZ3Jlc3NCYXIsIHN0eWxlOnt3aWR0aDoga29Qcm9ncmVzcygpICsgXFwnJVxcJ31cIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj4gICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBrb1Byb2dyZXNzVGV4dFwiPjwvc3Bhbj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1jaGVja2JveFwiPiAgPGZvcm0gZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuY2hlY2tib3gucm9vdFwiPiAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcywgYXM6IFxcJ2l0ZW1cXCcsIGFmdGVyUmVuZGVyOiBxdWVzdGlvbi5rb0FmdGVyUmVuZGVyfSAgLS0+ICAgIDxkaXYgZGF0YS1iaW5kPVwic3R5bGU6e3dpZHRoOiBxdWVzdGlvbi5rb1dpZHRoLCBcXCdtYXJnaW4tcmlnaHRcXCc6IHF1ZXN0aW9uLmNvbENvdW50ID09IDAgPyBcXCc1cHhcXCc6IFxcJzBweFxcJ30sIGNzczogJHJvb3QuY3NzLmNoZWNrYm94Lml0ZW1cIj4gICAgICA8bGFiZWwgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuY2hlY2tib3guaXRlbVwiPiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImF0dHI6IHtuYW1lOiBxdWVzdGlvbi5uYW1lLCB2YWx1ZTogaXRlbS52YWx1ZSwgaWQ6ICgkaW5kZXgoKSA9PSAwKSA/IHF1ZXN0aW9uLmlucHV0SWQgOiBcXCdcXCd9LCBjaGVja2VkOiBxdWVzdGlvbi5rb1ZhbHVlXCIgLz4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGl0ZW0udGV4dFwiPjwvc3Bhbj4gICAgICA8L2xhYmVsPiAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzT3RoZXIgJiYgKCRpbmRleCgpID09IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMoKS5sZW5ndGgtMSlcIj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHF1ZXN0aW9uLmtvT3RoZXJWaXNpYmxlIH0gfSwgY3NzOiAkcm9vdC5jc3MuY2hlY2tib3gub3RoZXJcIj48L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDwhLS0gL2tvIC0tPiAgPC9mb3JtPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWNvbW1lbnRcIj4gIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cImF0dHI6IHtjb2xzOiBxdWVzdGlvbi5jb2xzLCByb3dzOiBxdWVzdGlvbi5yb3dzLCBpZDogcXVlc3Rpb24uaW5wdXRJZH0sIHZhbHVlOnF1ZXN0aW9uLmtvVmFsdWUsIGNzczogJHJvb3QuY3NzLmNvbW1lbnRcIiAvPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWRyb3Bkb3duXCI+ICA8c2VsZWN0IGRhdGEtYmluZD1cImF0dHI6IHtpZDogcXVlc3Rpb24uaW5wdXRJZH0sIG9wdGlvbnM6IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMsIG9wdGlvbnNUZXh0OiBcXCd0ZXh0XFwnLCBvcHRpb25zVmFsdWU6IFxcJ3ZhbHVlXFwnLCB2YWx1ZTogcXVlc3Rpb24ua29WYWx1ZSwgb3B0aW9uc0NhcHRpb246IHF1ZXN0aW9uLm9wdGlvbnNDYXB0aW9uLCBjc3M6ICRyb290LmNzcy5kcm9wZG93blwiPjwvc2VsZWN0PiAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNPdGhlclwiPiAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1jb21tZW50XFwnLCBkYXRhOiB7XFwncXVlc3Rpb25cXCc6IHF1ZXN0aW9uLCBcXCd2aXNpYmxlXFwnOiBxdWVzdGlvbi5rb090aGVyVmlzaWJsZSB9IH1cIj48L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWVycm9yc1wiPiAgPGRpdiByb2xlPVwiYWxlcnRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0Vycm9ycygpLmxlbmd0aCA+IDAsIGZvcmVhY2g6IHsgZGF0YToga29FcnJvcnMsIGFzOiBcXCdlcnJvclxcJ30sIGNzczogJHJvb3QuY3NzLmVycm9yLnJvb3RcIj4gICAgPGRpdj4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5lcnJvci5pY29uXCI+PC9zcGFuPiAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ZXJyb3IuZ2V0VGV4dCgpLCBjc3M6ICRyb290LmNzcy5lcnJvci5pdGVtXCI+PC9zcGFuPiAgICA8L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWZpbGVcIj4gIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5Ccm93c2U8aW5wdXQgdHlwZT1cImZpbGVcIiBkYXRhLWJpbmQ9XCJhdHRyOiB7aWQ6IHF1ZXN0aW9uLmlucHV0SWR9LCBldmVudDoge2NoYW5nZTogZG9jaGFuZ2V9XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiBvbmNoYW5nZT1cIiQoXFwnI3VwbG9hZC1maWxlLWluZm9cXCcpLmh0bWwoJCh0aGlzKS52YWwoKSk7XCI+PC9sYWJlbD4gIDxrYmQgaWQ9XCJ1cGxvYWQtZmlsZS1pbmZvXCI+UGxlYXNlIHNlbGVjdCBhIGltYWdlIGZpbGU8L2tiZD4gIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOjE1cHhcIj48aW1nIGRhdGEtYmluZD1cImF0dHI6IHsgc3JjOiBxdWVzdGlvbi5rb0RhdGEsIGhlaWdodDogcXVlc3Rpb24uaW1hZ2VIZWlnaHQsIHdpZHRoOiBxdWVzdGlvbi5pbWFnZVdpZHRoIH0sIHZpc2libGU6IHF1ZXN0aW9uLmtvSGFzVmFsdWVcIj48L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1odG1sXCI+ICA8ZGl2IGRhdGEtYmluZD1cImh0bWw6IHF1ZXN0aW9uLnByb2Nlc3NlZEh0bWxcIj48L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1tYXRyaXhcIj4gIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tYXRyaXgucm9vdFwiPiAgICA8dGhlYWQ+ICAgICAgPHRyPiAgICAgICAgPHRoIGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc1Jvd3NcIj48L3RoPiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6JGRhdGEudGV4dFwiPjwvdGg+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L3RyPiAgICA8L3RoZWFkPiAgICA8dGJvZHk+ICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHF1ZXN0aW9uLnZpc2libGVSb3dzLCBhczogXFwncm93XFwnIH0gLS0+ICAgICAgPHRyPiAgICAgICAgPHRkIGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc1Jvd3MsIHRleHQ6cm93LnRleHRcIj48L3RkPiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgPHRkPiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHJvdy5mdWxsTmFtZSwgdmFsdWU6ICRkYXRhLnZhbHVlLCBpZDogKCRpbmRleCgpID09IDApICYmICgkcGFyZW50Q29udGV4dC4kaW5kZXgoKSA9PSAwKSA/IHF1ZXN0aW9uLmlucHV0SWQgOiBcXCdcXCd9LCBjaGVja2VkOiByb3cua29WYWx1ZVwiLz4gICAgICAgIDwvdGQ+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L3RyPiAgICAgIDwhLS0gL2tvIC0tPiAgICA8L3Rib2R5PiAgPC90YWJsZT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1tYXRyaXhkcm9wZG93blwiPiAgPGRpdiBkYXRhLWJpbmQ9XCJzdHlsZToge292ZXJmbG93WDogcXVlc3Rpb24uaG9yaXpvbnRhbFNjcm9sbD8gXFwnc2Nyb2xsXFwnOiBcXCdcXCd9XCI+ICAgIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tYXRyaXhkcm9wZG93bi5yb290XCI+ICAgICAgPHRoZWFkPiAgICAgICAgPHRyPiAgICAgICAgICA8dGg+PC90aD4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogcXVlc3Rpb24uZ2V0Q29sdW1uVGl0bGUoJGRhdGEpLCBzdHlsZTogeyBtaW5XaWR0aDogcXVlc3Rpb24uZ2V0Q29sdW1uV2lkdGgoJGRhdGEpIH1cIj48L3RoPiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvdHI+ICAgICAgPC90aGVhZD4gICAgICA8dGJvZHk+ICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24udmlzaWJsZVJvd3MsIGFzOiBcXCdyb3dcXCcgfSAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6cm93LnRleHRcIj48L3RkPiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHJvdy5jZWxscy0tPiAgICAgICAgICA8dGQ+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb24tZXJyb3JzXFwnLCBkYXRhOiAkZGF0YS5xdWVzdGlvbiB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uLVxcJyArICRkYXRhLnF1ZXN0aW9uLmdldFR5cGUoKSwgZGF0YTogJGRhdGEucXVlc3Rpb24sIGFzOiBcXCdxdWVzdGlvblxcJyB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L3RkPiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvdHI+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L3Rib2R5PiAgICA8L3RhYmxlPiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tbWF0cml4ZHluYW1pY1wiPiAgPGRpdiBkYXRhLWJpbmQ9XCJzdHlsZToge292ZXJmbG93WDogcXVlc3Rpb24uaG9yaXpvbnRhbFNjcm9sbD8gXFwnc2Nyb2xsXFwnOiBcXCdcXCd9XCI+ICAgIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tYXRyaXhkeW5hbWljLnJvb3RcIj4gICAgICA8dGhlYWQ+ICAgICAgICA8dHI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb24uY29sdW1ucyAtLT4gICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6IHF1ZXN0aW9uLmdldENvbHVtblRpdGxlKCRkYXRhKSwgc3R5bGU6IHsgbWluV2lkdGg6IHF1ZXN0aW9uLmdldENvbHVtbldpZHRoKCRkYXRhKSB9XCI+PC90aD4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgPC90cj4gICAgICA8L3RoZWFkPiAgICAgIDx0Ym9keT4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiBxdWVzdGlvbi5rb1Jvd3MsIGFzOiBcXCdyb3dcXCcgfSAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiByb3cuY2VsbHMtLT4gICAgICAgICAgPHRkPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uLWVycm9yc1xcJywgZGF0YTogJGRhdGEucXVlc3Rpb24gfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyAkZGF0YS5xdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6ICRkYXRhLnF1ZXN0aW9uLCBhczogXFwncXVlc3Rpb25cXCcgfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPC90ZD4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImNsaWNrOnF1ZXN0aW9uLmtvUmVtb3ZlUm93Q2xpY2ssIGNzczogJHJvb3QuY3NzLm1hdHJpeGR5bmFtaWMuYnV0dG9uLCB2YWx1ZTogcXVlc3Rpb24ucmVtb3ZlUm93VGV4dFwiPjwvdGQ+ICAgICAgICA8L3RyPiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgPC90Ym9keT4gICAgPC90YWJsZT4gIDwvZGl2PiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJjbGljazpxdWVzdGlvbi5rb0FkZFJvd0NsaWNrLCBjc3M6ICRyb290LmNzcy5tYXRyaXhkeW5hbWljLmJ1dHRvbiwgdmFsdWU6IHF1ZXN0aW9uLmFkZFJvd1RleHRcIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1tdWx0aXBsZXRleHRcIj4gIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tdWx0aXBsZXRleHQucm9vdCwgZm9yZWFjaDogeyBkYXRhOiAgcXVlc3Rpb24ua29Sb3dzLCBhczogXFwncm93XFwnIH1cIj4gICAgPHRyIGRhdGEtYmluZD1cImZvcmVhY2g6IHsgZGF0YTogcm93LCBhczogXFwnaXRlbVxcJyB9XCI+ICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IGl0ZW0udGl0bGUsIGNzczogJHJvb3QuY3NzLm11bHRpcGxldGV4dC5pdGVtVGl0bGVcIj48L3RkPiAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT1cImZsb2F0OmxlZnRcIiBkYXRhLWJpbmQ9XCJhdHRyOiB7c2l6ZTogcXVlc3Rpb24uaXRlbVNpemUsIGlkOiAoJGluZGV4KCkgPT0gMCkgPyBxdWVzdGlvbi5pbnB1dElkIDogXFwnXFwnfSwgdmFsdWU6IGl0ZW0ua29WYWx1ZSwgY3NzOiAkcm9vdC5jc3MubXVsdGlwbGV0ZXh0Lml0ZW1WYWx1ZVwiPjwvdGQ+ICAgIDwvdHI+ICA8L3RhYmxlPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLXJhZGlvZ3JvdXBcIj4gIDxmb3JtIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnJhZGlvZ3JvdXAucm9vdFwiPiAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcywgYXM6IFxcJ2l0ZW1cXCcsIGFmdGVyUmVuZGVyOiBxdWVzdGlvbi5rb0FmdGVyUmVuZGVyfSAgLS0+ICAgIDxkaXYgIGRhdGEtYmluZD1cInN0eWxlOnt3aWR0aDogcXVlc3Rpb24ua29XaWR0aCwgXFwnbWFyZ2luLXJpZ2h0XFwnOiBxdWVzdGlvbi5jb2xDb3VudCA9PSAwID8gXFwnNXB4XFwnOiBcXCcwcHhcXCd9LCBjc3M6ICRyb290LmNzcy5yYWRpb2dyb3VwLml0ZW1cIj4gICAgICA8bGFiZWwgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucmFkaW9ncm91cC5pdGVtXCI+ICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHF1ZXN0aW9uLm5hbWUsIHZhbHVlOiBpdGVtLnZhbHVlLCBpZDogKCRpbmRleCgpID09IDApID8gcXVlc3Rpb24uaW5wdXRJZCA6IFxcJ1xcJ30sIGNoZWNrZWQ6IHF1ZXN0aW9uLmtvVmFsdWVcIiAvPiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogaXRlbS50ZXh0XCI+PC9zcGFuPiAgICAgIDwvbGFiZWw+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNPdGhlciAmJiAoJGluZGV4KCkgPT0gcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcygpLmxlbmd0aC0xKVwiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiwgXFwndmlzaWJsZVxcJzogcXVlc3Rpb24ua29PdGhlclZpc2libGV9fSwgY3NzOiAkcm9vdC5jc3MucmFkaW9ncm91cC5vdGhlclwiPjwvZGl2PiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gICAgPCEtLSAva28gLS0+ICA8L2Zvcm0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tcmF0aW5nXCI+ICA8ZGl2IGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnJhdGluZy5yb290XCI+ICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb24ua29WaXNpYmxlUmF0ZVZhbHVlcyAtLT4gICAgPGxhYmVsIGRhdGEtYmluZD1cImNzczogcXVlc3Rpb24ua29HZXRDc3MoJGRhdGEpXCI+ICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHF1ZXN0aW9uLm5hbWUsIGlkOiBxdWVzdGlvbi5uYW1lICsgJGluZGV4KCksIHZhbHVlOiAkZGF0YS52YWx1ZX0sIGV2ZW50OiB7IGNoYW5nZTogcXVlc3Rpb24ua29DaGFuZ2V9XCIgLz4gICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkaW5kZXgoKSA9PSAwLCB0ZXh0OiBxdWVzdGlvbi5taW5pbnVtUmF0ZURlc2NyaXB0aW9uXCI+PC9zcGFuPiAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRkYXRhLnRleHRcIj48L3NwYW4+ICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogJGluZGV4KCkgPT0gKHF1ZXN0aW9uLmtvVmlzaWJsZVJhdGVWYWx1ZXMoKS5sZW5ndGgtMSksIHRleHQ6IHF1ZXN0aW9uLm1heGltdW1SYXRlRGVzY3JpcHRpb25cIj48L3NwYW4+ICAgIDwvbGFiZWw+ICAgIDwhLS0gL2tvIC0tPiAgPC9kaXY+ICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc090aGVyXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24gfSB9XCI+PC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi10ZXh0XCI+ICA8aW5wdXQgZGF0YS1iaW5kPVwiYXR0cjoge3R5cGU6IHF1ZXN0aW9uLmlucHV0VHlwZSwgc2l6ZTogcXVlc3Rpb24uc2l6ZSwgaWQ6IHF1ZXN0aW9uLmlucHV0SWR9LCB2YWx1ZTpxdWVzdGlvbi5rb1ZhbHVlLCBjc3M6ICRyb290LmNzcy50ZXh0XCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb25cIj4gIDxkaXYgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5xdWVzdGlvbi5yb290LCBzdHlsZToge2Rpc3BsYXk6IHF1ZXN0aW9uLmtvVmlzaWJsZSgpID8gXFwnaW5saW5lLWJsb2NrXFwnOiBcXCdub25lXFwnLCBtYXJnaW5MZWZ0OiBxdWVzdGlvbi5rb01hcmdpbkxlZnQsIHBhZGRpbmdSaWdodDogcXVlc3Rpb24ua29QYWRkaW5nUmlnaHQsIHdpZHRoOiBxdWVzdGlvbi5rb1JlbmRlcldpZHRoIH0sIGF0dHI6IHtpZDogaWR9XCI+ICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICA8aDQgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QucXVlc3Rpb25UaXRsZUxvY2F0aW9uID09IFxcJ3RvcFxcJywgdGV4dDogcXVlc3Rpb24ua29UaXRsZSgpLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi50aXRsZVwiPjwvaDQ+ICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1lcnJvcnNcXCcsIGRhdGE6IHF1ZXN0aW9uIH0gLS0+ICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyBxdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6IHF1ZXN0aW9uLCBhZnRlclJlbmRlcjogcXVlc3Rpb24ua29RdWVzdGlvbkFmdGVyUmVuZGVyIH0gLS0+ICAgIDwhLS0gL2tvIC0tPiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc0NvbW1lbnRcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInRleHQ6cXVlc3Rpb24uY29tbWVudFRleHRcIiBjbGFzcz1cImNvbW1lbnRUZXh0XCI+PC9kaXY+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiwgXFwndmlzaWJsZVxcJzogdHJ1ZSB9IH1cIj48L2Rpdj4gICAgPC9kaXY+ICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICA8aDQgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QucXVlc3Rpb25UaXRsZUxvY2F0aW9uID09IFxcJ2JvdHRvbVxcJywgdGV4dDogcXVlc3Rpb24ua29UaXRsZSgpLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi50aXRsZVwiPjwvaDQ+ICAgIDwhLS0gL2tvIC0tPiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tZGF0ZVwiPiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwiYXR0cjoge3NpemU6IHF1ZXN0aW9uLnNpemUsIGlkOiBxdWVzdGlvbi5kYXRlSWR9LCB2YWx1ZTpxdWVzdGlvbi5rb1ZhbHVlLCBjc3M6ICRyb290LmNzcy50ZXh0XCI+PC9zY3JpcHQ+JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQvdGVtcGxhdGUua28uaHRtbC50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbmJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uSW1wbGVtZW50b3JCYXNlIHtcbiAgICBrb1Zpc2libGU6IGFueTsga29FcnJvcnM6IGFueTsga29NYXJnaW5MZWZ0OiBhbnk7IGtvUGFkZGluZ1JpZ2h0OiBhbnk7IGtvUmVuZGVyV2lkdGg6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHF1ZXN0aW9uLnZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25WaXNpYmlsaXR5Q2hhbmdlZCgpOyB9O1xuICAgICAgICBxdWVzdGlvbi5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblJlbmRlcldpZHRoQ2hhbmdlZCgpOyB9O1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi52aXNpYmxlKTtcbiAgICAgICAgdGhpcy5rb1JlbmRlcldpZHRoID0ga28ub2JzZXJ2YWJsZSh0aGlzLnF1ZXN0aW9uLnJlbmRlcldpZHRoKTtcbiAgICAgICAgdGhpcy5rb0Vycm9ycyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvTWFyZ2luTGVmdCA9IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYua29SZW5kZXJXaWR0aCgpOyByZXR1cm4gc2VsZi5nZXRJbmRlbnRTaXplKHNlbGYucXVlc3Rpb24uaW5kZW50KTsgfSk7XG4gICAgICAgIHRoaXMua29QYWRkaW5nUmlnaHQgPSBrby5vYnNlcnZhYmxlKHNlbGYuZ2V0SW5kZW50U2l6ZShzZWxmLnF1ZXN0aW9uLnJpZ2h0SW5kZW50KSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1Zpc2libGVcIl0gPSB0aGlzLmtvVmlzaWJsZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUmVuZGVyV2lkdGhcIl0gPSB0aGlzLmtvUmVuZGVyV2lkdGg7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0Vycm9yc1wiXSA9IHRoaXMua29FcnJvcnM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb01hcmdpbkxlZnRcIl0gPSB0aGlzLmtvTWFyZ2luTGVmdDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUGFkZGluZ1JpZ2h0XCJdID0gdGhpcy5rb1BhZGRpbmdSaWdodDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcInVwZGF0ZVF1ZXN0aW9uXCJdID0gZnVuY3Rpb24gKCkgeyBzZWxmLnVwZGF0ZVF1ZXN0aW9uKCk7IH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVF1ZXN0aW9uKCkgeyAgfVxuICAgIHByb3RlY3RlZCBvblZpc2liaWxpdHlDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSh0aGlzLnF1ZXN0aW9uLnZpc2libGUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25SZW5kZXJXaWR0aENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29SZW5kZXJXaWR0aCh0aGlzLnF1ZXN0aW9uLnJlbmRlcldpZHRoKTtcbiAgICAgICAgdGhpcy5rb1BhZGRpbmdSaWdodCh0aGlzLmdldEluZGVudFNpemUodGhpcy5xdWVzdGlvbi5yaWdodEluZGVudCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEluZGVudFNpemUoaW5kZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaW5kZW50IDwgMSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbltcImRhdGFcIl0pIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgY3NzID0gdGhpcy5xdWVzdGlvbltcImRhdGFcIl1bXCJjc3NcIl07XG4gICAgICAgIGlmICghY3NzKSByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIGluZGVudCAqIGNzcy5xdWVzdGlvbi5pbmRlbnQgKyBcInB4XCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uYmFzZS50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yQmFzZX0gZnJvbSBcIi4va29xdWVzdGlvbmJhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25JbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3JCYXNlIHtcbiAgICBwcml2YXRlIGlzVXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGtvRHVtbXk6IGFueTtcbiAgICBrb1ZhbHVlOiBhbnk7IGtvQ29tbWVudDogYW55OyBrb1RpdGxlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25WYWx1ZUNoYW5nZWQoKTsgfTtcbiAgICAgICAgcXVlc3Rpb24uY29tbWVudENoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkNvbW1lbnRDaGFuZ2VkKCk7IH07XG4gICAgICAgIHF1ZXN0aW9uLmVycm9yc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkVycm9yc0NoYW5nZWQoKTsgfTtcbiAgICAgICAgcXVlc3Rpb24udGl0bGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25WaXNpYmxlSW5kZXhDaGFuZ2VkKCk7IH07XG4gICAgICAgIHF1ZXN0aW9uLnZpc2libGVJbmRleENoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblZpc2libGVJbmRleENoYW5nZWQoKTsgfTtcbiAgICAgICAgdGhpcy5rb0R1bW15ID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0gdGhpcy5jcmVhdGVrb1ZhbHVlKCk7XG4gICAgICAgIHRoaXMua29Db21tZW50ID0ga28ub2JzZXJ2YWJsZSh0aGlzLnF1ZXN0aW9uLmNvbW1lbnQpO1xuICAgICAgICB0aGlzLmtvVGl0bGUgPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvRHVtbXkoKTsgcmV0dXJuIHNlbGYucXVlc3Rpb24uZnVsbFRpdGxlOyB9KTtcbiAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnF1ZXN0aW9uLmVycm9ycyk7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMua29Db21tZW50LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlQ29tbWVudChuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29WYWx1ZVwiXSA9IHRoaXMua29WYWx1ZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvQ29tbWVudFwiXSA9IHRoaXMua29Db21tZW50O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29UaXRsZVwiXSA9IHRoaXMua29UaXRsZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUXVlc3Rpb25BZnRlclJlbmRlclwiXSA9IHRoaXMua29RdWVzdGlvbkFmdGVyUmVuZGVyO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlc3Rpb24oKSB7XG4gICAgICAgIHRoaXMua29EdW1teSh0aGlzLmtvRHVtbXkoKSArIDEpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRrb1ZhbHVlKHRoaXMucXVlc3Rpb24udmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Db21tZW50Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvQ29tbWVudCh0aGlzLnF1ZXN0aW9uLmNvbW1lbnQpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WaXNpYmlsaXR5Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodGhpcy5xdWVzdGlvbi52aXNpYmxlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUluZGV4Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb0R1bW15KHRoaXMua29EdW1teSgpICsgMSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkVycm9yc0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29FcnJvcnModGhpcy5xdWVzdGlvbi5lcnJvcnMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRla29WYWx1ZSgpOiBhbnkgeyByZXR1cm4ga28ub2JzZXJ2YWJsZSh0aGlzLnF1ZXN0aW9uLnZhbHVlKTsgfVxuICAgIHByb3RlY3RlZCBzZXRrb1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNvbW1lbnQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNvbW1lbnQgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRObygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi52aXNpYmxlSW5kZXggPiAtMSA/IHRoaXMucXVlc3Rpb24udmlzaWJsZUluZGV4ICsgMSArIFwiLiBcIiA6IFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBrb1F1ZXN0aW9uQWZ0ZXJSZW5kZXIoZWwsIGNvbikge1xuICAgICAgICB2YXIgdEVsID0gZWxbMF07XG4gICAgICAgIGlmICh0RWwubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB0RWwuZGF0YSA9IFwiXCI7XG4gICAgICAgIHRFbCA9IGVsW2VsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodEVsLm5vZGVOYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbi50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlLCBRdWVzdGlvbkNoZWNrYm94QmFzZX0gZnJvbSBcIi4uL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2VsZWN0QmFzZUltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25JbXBsZW1lbnRvcntcbiAgICBrb090aGVyVmlzaWJsZTogYW55OyBrb1Zpc2libGVDaG9pY2VzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMua29PdGhlclZpc2libGUgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYua29WYWx1ZSgpOyByZXR1cm4gc2VsZi5pc090aGVyU2VsZWN0ZWQ7IH0pO1xuICAgICAgICB0aGlzLmtvVmlzaWJsZUNob2ljZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKDxRdWVzdGlvbkNoZWNrYm94QmFzZT5zZWxmLnF1ZXN0aW9uKS52aXNpYmxlQ2hvaWNlcyk7XG4gICAgICAgICg8UXVlc3Rpb25DaGVja2JveEJhc2U+cXVlc3Rpb24pLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29WaXNpYmxlQ2hvaWNlcygoPFF1ZXN0aW9uQ2hlY2tib3hCYXNlPnNlbGYucXVlc3Rpb24pLnZpc2libGVDaG9pY2VzKTsgfTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvT3RoZXJWaXNpYmxlXCJdID0gdGhpcy5rb090aGVyVmlzaWJsZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVmlzaWJsZUNob2ljZXNcIl0gPSB0aGlzLmtvVmlzaWJsZUNob2ljZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgaXNPdGhlclNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbikuaXNPdGhlclNlbGVjdGVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25TZWxlY3RCYXNlSW1wbGVtZW50b3Ige1xuICAgIGtvV2lkdGg6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvV2lkdGggPSBrby5vYnNlcnZhYmxlKHRoaXMuY29sV2lkdGgpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29XaWR0aFwiXSA9IHRoaXMua29XaWR0aDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvQWZ0ZXJSZW5kZXJcIl0gPSB0aGlzLmtvQWZ0ZXJSZW5kZXI7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgKDxRdWVzdGlvbkNoZWNrYm94QmFzZT50aGlzLnF1ZXN0aW9uKS5jb2xDb3VudENoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkNvbENvdW50Q2hhbmdlZCgpOyB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Db2xDb3VudENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1dpZHRoXCJdID0ga28ub2JzZXJ2YWJsZSh0aGlzLmNvbFdpZHRoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb2xXaWR0aCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgY29sQ291bnQgPSAoPFF1ZXN0aW9uQ2hlY2tib3hCYXNlPnRoaXMucXVlc3Rpb24pLmNvbENvdW50O1xuICAgICAgICByZXR1cm4gY29sQ291bnQgPiAwID8gKDEwMCAvIGNvbENvdW50KSArICclJyA6IFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUga29BZnRlclJlbmRlcihlbCwgY29uKSB7XG4gICAgICAgIHZhciB0RWwgPSBlbFswXTtcbiAgICAgICAgaWYgKHRFbC5ub2RlTmFtZSA9PSBcIiN0ZXh0XCIpIHRFbC5kYXRhID0gXCJcIjtcbiAgICAgICAgdEVsID0gZWxbZWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0RWwubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB0RWwuZGF0YSA9IFwiXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3QudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2VJbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkNoZWNrYm94TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9jaGVja2JveFwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5cbmNsYXNzIFF1ZXN0aW9uQ2hlY2tib3hJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uQ2hlY2tib3hCYXNlSW1wbGVtZW50b3Ige1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVrb1ZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uLnZhbHVlID8ga28ub2JzZXJ2YWJsZUFycmF5KHRoaXMucXVlc3Rpb24udmFsdWUpIDoga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRrb1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmtvVmFsdWUoW10uY29uY2F0KG5ld1ZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtvVmFsdWUoW10pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ2hlY2tib3ggZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkNoZWNrYm94SW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcImNoZWNrYm94XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNoZWNrYm94KFwiXCIpOyB9KTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY2hlY2tib3hcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25DaGVja2JveChuYW1lKTsgcS5jaG9pY2VzID0gUXVlc3Rpb25GYWN0b3J5LkRlZmF1bHRDaG9pY2VzOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkNvbW1lbnRNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2NvbW1lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Db21tZW50IGV4dGVuZHMgUXVlc3Rpb25Db21tZW50TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJjb21tZW50XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNvbW1lbnQoXCJcIik7IH0pO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjb21tZW50XCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25Db21tZW50KG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9jb21tZW50LnRzIiwiaW1wb3J0IHtRdWVzdGlvbkRyb3Bkb3duTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9kcm9wZG93blwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Ecm9wZG93biBleHRlbmRzIFF1ZXN0aW9uRHJvcGRvd25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uU2VsZWN0QmFzZUltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Ecm9wZG93bihcIlwiKTsgfSk7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImRyb3Bkb3duXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uRHJvcGRvd24obmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkZpbGVNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2ZpbGVcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkZpbGVJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xuICAgIGtvRGF0YVVwZGF0ZXI6IGFueTsga29EYXRhOiBhbnk7IGtvSGFzVmFsdWU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29EYXRhVXBkYXRlciA9IGtvLm9ic2VydmFibGUoMCk7XG4gICAgICAgIHRoaXMua29EYXRhID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvRGF0YVVwZGF0ZXIoKTsgcmV0dXJuICg8UXVlc3Rpb25GaWxlTW9kZWw+c2VsZi5xdWVzdGlvbikucHJldmlld1ZhbHVlOyB9KTtcbiAgICAgICAgdGhpcy5rb0hhc1ZhbHVlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0RhdGFcIl0gPSB0aGlzLmtvRGF0YTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvSGFzVmFsdWVcIl0gPSB0aGlzLmtvSGFzVmFsdWU7XG5cbiAgICAgICAgKDxRdWVzdGlvbkZpbGVNb2RlbD50aGlzLnF1ZXN0aW9uKS5wcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkxvYWRQcmV2aWV3KCk7IH07XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJkb2NoYW5nZVwiXSA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkgeyB2YXIgc3JjID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7IHNlbGYub25DaGFuZ2Uoc3JjKTsgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkNoYW5nZShzcmM6IGFueSkge1xuICAgICAgICBpZiAoIXdpbmRvd1tcIkZpbGVSZWFkZXJcIl0pIHJldHVybjtcbiAgICAgICAgaWYgKCFzcmMgfHwgIXNyYy5maWxlcyB8fCBzcmMuZmlsZXMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgICAgICAoPFF1ZXN0aW9uRmlsZU1vZGVsPnRoaXMucXVlc3Rpb24pLmxvYWRGaWxlKHNyYy5maWxlc1swXSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Mb2FkUHJldmlldygpIHtcbiAgICAgICAgdGhpcy5rb0RhdGFVcGRhdGVyKHRoaXMua29EYXRhVXBkYXRlcigpICsgMSk7XG4gICAgICAgIHRoaXMua29IYXNWYWx1ZSh0cnVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GaWxlIGV4dGVuZHMgUXVlc3Rpb25GaWxlTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkZpbGVJbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwiZmlsZVwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25GaWxlKFwiXCIpOyB9KTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZmlsZVwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uRmlsZShuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fZmlsZS50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3JCYXNlfSBmcm9tIFwiLi9rb3F1ZXN0aW9uYmFzZVwiO1xuaW1wb3J0IHtRdWVzdGlvbkh0bWxNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2h0bWxcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uSHRtbCBleHRlbmRzIFF1ZXN0aW9uSHRtbE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25JbXBsZW1lbnRvckJhc2UodGhpcyk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcImh0bWxcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uSHRtbChcIlwiKTsgfSk7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImh0bWxcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkh0bWwobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2h0bWwudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhNb2RlbCwgTWF0cml4Um93TW9kZWwsIElNYXRyaXhEYXRhfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhSb3cgZXh0ZW5kcyBNYXRyaXhSb3dNb2RlbCB7XG4gICAgcHJpdmF0ZSBpc1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcbiAgICBrb1ZhbHVlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IGFueSwgcHVibGljIHRleHQ6IHN0cmluZywgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcsIGRhdGE6IElNYXRyaXhEYXRhLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHRleHQsIGZ1bGxOYW1lLCBkYXRhLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUodGhpcy52YWx1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1ZhbHVlLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzVmFsdWVVcGRhdGluZykgdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuaXNWYWx1ZVVwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4IGV4dGVuZHMgUXVlc3Rpb25NYXRyaXhNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uSW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3cobmFtZTogYW55LCB0ZXh0OiBzdHJpbmcsIGZ1bGxOYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBNYXRyaXhSb3dNb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93KG5hbWUsIHRleHQsIGZ1bGxOYW1lLCB0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcIm1hdHJpeFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXgoXCJcIik7IH0pO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXgobmFtZSk7IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuY29sdW1ucyA9IFtcIkNvbHVtbiAxXCIsIFwiQ29sdW1uIDJcIiwgXCJDb2x1bW4gM1wiXTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeC50cyIsImltcG9ydCB7UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd24gZXh0ZW5kcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJtYXRyaXhkcm9wZG93blwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bihcIlwiKTsgfSk7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bihuYW1lKTsgcS5jaG9pY2VzID0gWzEsIDIsIDMsIDQsIDVdOyBxLnJvd3MgPSBbXCJSb3cgMVwiLCBcIlJvdyAyXCJdOyBxLmFkZENvbHVtbihcIkNvbHVtbiAxXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAyXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAzXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd24udHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZX0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZVwiO1xuaW1wb3J0IHtNYXRyaXhEeW5hbWljUm93TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeER5bmFtaWNJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xuICAgIGtvUm93czogYW55OyBrb1JlY2FsYzogYW55O1xuICAgIGtvQWRkUm93Q2xpY2s6IGFueTsga29SZW1vdmVSb3dDbGljazogYW55OyBrb092ZXJmbG93WDogYW55O1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29SZWNhbGMgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmtvUm93cyA9IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmtvUmVjYWxjKCk7IHJldHVybiAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5jYWNoZWRWaXNpYmxlUm93cztcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMua29PdmVyZmxvd1ggPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICg8UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZT50aGlzLnF1ZXN0aW9uKS5ob3Jpem9udGFsU2Nyb2xsID8gXCJzY3JvbGxcIjogXCJub25lXCI7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29Sb3dzXCJdID0gdGhpcy5rb1Jvd3M7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0FkZFJvd0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFkZFJvdygpOyB9XG4gICAgICAgIHRoaXMua29SZW1vdmVSb3dDbGljayA9IGZ1bmN0aW9uIChkYXRhKSB7IHNlbGYucmVtb3ZlUm93KGRhdGEpOyB9XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0FkZFJvd0NsaWNrXCJdID0gdGhpcy5rb0FkZFJvd0NsaWNrO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29SZW1vdmVSb3dDbGlja1wiXSA9IHRoaXMua29SZW1vdmVSb3dDbGljaztcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvT3ZlcmZsb3dYXCJdID0gdGhpcy5rb092ZXJmbG93WDtcbiAgICAgICAgKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikucm93Q291bnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Sb3dDb3VudENoYW5nZWQoKTsgfTtcbiAgICAgICAgKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikuY29sdW1uc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkNvbHVtbkNoYW5nZWQoKTsgfTtcbiAgICAgICAgKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikudXBkYXRlQ2VsbHNDYWxsYmFrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uVXBkYXRlQ2VsbHMoKTsgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlQ2VsbHMoKSB7XG4gICAgICAgIC8vR2VuZXJlYXRlIHJvd3MgYWdhaW4uXG4gICAgICAgIHZhciByb3dzID0gKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbilbXCJnZW5lcmF0ZWRWaXNpYmxlUm93c1wiXTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5jb2x1bW5zO1xuICAgICAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDAgJiYgY29sdW1ucyAmJiBjb2x1bW5zLmxlbmd0aCA+IDApIHRoaXMub25Db2x1bW5DaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNvbHVtbkNoYW5nZWQoKSB7XG4gICAgICAgIHZhciByb3dzID0gKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikudmlzaWJsZVJvd3M7XG4gICAgICAgIHRoaXMub25Sb3dDb3VudENoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUm93Q291bnRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvUmVjYWxjKHRoaXMua29SZWNhbGMoKSArIDEpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWRkUm93KCkge1xuICAgICAgICAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5hZGRSb3coKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbW92ZVJvdyhyb3c6IE1hdHJpeER5bmFtaWNSb3dNb2RlbCkge1xuICAgICAgICB2YXIgcm93cyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLmNhY2hlZFZpc2libGVSb3dzO1xuICAgICAgICB2YXIgaW5kZXggPSByb3dzLmluZGV4T2Yocm93KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnJlbW92ZVJvdyhpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeER5bmFtaWMgZXh0ZW5kcyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uTWF0cml4RHluYW1pY0ltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJtYXRyaXhkeW5hbWljXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWMoXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm1hdHJpeGR5bmFtaWNcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEeW5hbWljKG5hbWUpOyBxLmNob2ljZXMgPSBbMSwgMiwgMywgNCwgNV07IHEucm93Q291bnQgPSAyOyBxLmFkZENvbHVtbihcIkNvbHVtbiAxXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAyXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAzXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHluYW1pYy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsLCBNdWx0aXBsZVRleHRJdGVtTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9tdWx0aXBsZXRleHRcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVUZXh0SXRlbSBleHRlbmRzIE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCB7XG4gICAgcHJpdmF0ZSBpc0tPVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIGtvVmFsdWU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogYW55ID0gbnVsbCwgdGl0bGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRoaXMudmFsdWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNLT1ZhbHVlVXBkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNLT1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzS09WYWx1ZVVwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NdWx0aXBsZVRleHRJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xuICAgIGtvUm93czogYW55O1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29Sb3dzID0ga28ub2JzZXJ2YWJsZUFycmF5KCg8UXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbD50aGlzLnF1ZXN0aW9uKS5nZXRSb3dzKCkpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29Sb3dzXCJdID0gdGhpcy5rb1Jvd3M7XG4gICAgICAgIHRoaXMub25Db2xDb3VudENoYW5nZWQoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAoPFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWw+dGhpcy5xdWVzdGlvbikuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db2xDb3VudENoYW5nZWQoKTsgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQ29sQ291bnRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvUm93cygoPFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWw+dGhpcy5xdWVzdGlvbikuZ2V0Um93cygpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk11bHRpcGxlVGV4dCBleHRlbmRzIFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dEltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVGV4dEl0ZW0obmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogTXVsdGlwbGVUZXh0SXRlbU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZVRleHRJdGVtKG5hbWUsIHRpdGxlKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibXVsdGlwbGV0ZXh0aXRlbVwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbShcIlwiKTsgfSk7XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibXVsdGlwbGV0ZXh0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dChcIlwiKTsgfSk7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibXVsdGlwbGV0ZXh0XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTXVsdGlwbGVUZXh0KG5hbWUpOyBxLkFkZEl0ZW0oXCJ0ZXh0MVwiKTsgcS5BZGRJdGVtKFwidGV4dDJcIik7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tdWx0aXBsZXRleHQudHMiLCJpbXBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2VJbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhZGlvZ3JvdXAgZXh0ZW5kcyBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uQ2hlY2tib3hCYXNlSW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInJhZGlvZ3JvdXBcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uUmFkaW9ncm91cChcIlwiKTsgfSk7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmFkaW9ncm91cFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvblJhZGlvZ3JvdXAobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3JhZGlvZ3JvdXAudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvblJhdGluZ01vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fcmF0aW5nXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5cbmNsYXNzIFF1ZXN0aW9uUmF0aW5nSW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yIHtcbiAgICBrb1Zpc2libGVSYXRlVmFsdWVzOiBhbnk7IGtvQ2hhbmdlOiBhbnk7IGtvQ3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGVSYXRlVmFsdWVzID0ga28ub2JzZXJ2YWJsZUFycmF5KHRoaXMuZ2V0VmFsdWVzKCkpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29WaXNpYmxlUmF0ZVZhbHVlc1wiXSA9IHRoaXMua29WaXNpYmxlUmF0ZVZhbHVlcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvQ2hhbmdlID0gZnVuY3Rpb24gKHZhbCkgeyBzZWxmLmtvVmFsdWUodmFsLml0ZW1WYWx1ZSk7IH07XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0NoYW5nZVwiXSA9IHRoaXMua29DaGFuZ2U7XG4gICAgICAgICg8UXVlc3Rpb25SYXRpbmc+dGhpcy5xdWVzdGlvbikucmF0ZVZhbHVlc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblJhdGVWYWx1ZXNDaGFuZ2VkKCk7IH07XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0dldENzc1wiXSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHZhciBjc3MgPSAoPFF1ZXN0aW9uUmF0aW5nPnNlbGYucXVlc3Rpb24pLml0ZW1Dc3M7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5xdWVzdGlvbltcImtvVmFsdWVcIl0oKSA9PSB2YWwudmFsdWUgPyBjc3MgKyBcIiBhY3RpdmVcIiA6IGNzczsgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUmF0ZVZhbHVlc0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29WaXNpYmxlUmF0ZVZhbHVlcyh0aGlzLmdldFZhbHVlcygpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiAoPFF1ZXN0aW9uUmF0aW5nPnRoaXMucXVlc3Rpb24pLnZpc2libGVSYXRlVmFsdWVzOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhdGluZyBleHRlbmRzIFF1ZXN0aW9uUmF0aW5nTW9kZWwge1xuICAgIHB1YmxpYyBpdGVtQ3NzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uUmF0aW5nSW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7XG4gICAgICAgIHRoaXMuaXRlbUNzcyA9IHRoaXMuZGF0YVtcImNzc1wiXS5yYXRpbmcuaXRlbTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwicmF0aW5nXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhdGluZyhcIlwiKTsgfSk7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmF0aW5nXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmcobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3JhdGluZy50cyIsImltcG9ydCB7UXVlc3Rpb25UZXh0TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl90ZXh0XCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVGV4dEltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25JbXBsZW1lbnRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnF1ZXN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5xdWVzdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVGV4dCBleHRlbmRzIFF1ZXN0aW9uVGV4dE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25UZXh0SW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInRleHRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uVGV4dChcIlwiKTsgfSk7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwidGV4dFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uVGV4dChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fdGV4dC50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlXaW5kb3dNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVdpbmRvd1wiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xuaW1wb3J0IHtTdXJ2ZXl9IGZyb20gXCIuL2tvc3VydmV5XCI7XG5pbXBvcnQge2tvVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUud2luZG93LmtvLmh0bWwnXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlXaW5kb3cgZXh0ZW5kcyBTdXJ2ZXlXaW5kb3dNb2RlbCB7XG4gICAga29FeHBhbmRlZDogYW55O1xuICAgIGtvRXhwYW5kZWRDc3M6IGFueTtcbiAgICBkb0V4cGFuZDogYW55O1xuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSkge1xuICAgICAgICBzdXBlcihqc29uT2JqKTtcbiAgICAgICAgdGhpcy5rb0V4cGFuZGVkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29FeHBhbmRlZENzcyA9IGtvLm9ic2VydmFibGUodGhpcy5nZXRCdXR0b25Dc3MoKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kb0V4cGFuZCA9IGZ1bmN0aW9uICgpIHsgc2VsZi5jaGFuZ2VFeHBhbmRlZCgpOyB9XG4gICAgICAgIHRoaXMuc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IFN1cnZleU1vZGVsKSA9PiB7IHNlbGYub25Db21wbGV0ZSgpOyBzZWxmLmtvRXhwYW5kZWRDc3Moc2VsZi5nZXRCdXR0b25Dc3MoKSkgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVTdXJ2ZXkoanNvbk9iajogYW55KTogU3VydmV5TW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleShqc29uT2JqKVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZXhwYW5kY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIuZXhwYW5kY29sbGFwc2UodmFsdWUpO1xuICAgICAgICB0aGlzLmtvRXhwYW5kZWQodGhpcy5pc0V4cGFuZGVkVmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRlbXBsYXRlVmFsdWUgPyB0aGlzLnRlbXBsYXRlVmFsdWUgOiB0aGlzLmdldERlZmF1bHRUZW1wbGF0ZSgpOyB9XG4gICAgcHJvdGVjdGVkIHNldCB0ZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGVtcGxhdGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgICBrby5jbGVhbk5vZGUodGhpcy53aW5kb3dFbGVtZW50KTtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLCB0aGlzLndpbmRvd0VsZW1lbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud2luZG93RWxlbWVudCk7XG4gICAgICAgICg8U3VydmV5PnRoaXMuc3VydmV5KS5yZW5kZXIoU3VydmV5V2luZG93LnN1cnZleUVsZW1lbnROYW1lKTtcbiAgICAgICAgdGhpcy5pc1Nob3dpbmdWYWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIGtvVGVtcGxhdGUuaHRtbCB9XG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy53aW5kb3dFbGVtZW50KTtcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuaXNTaG93aW5nVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjc3MoKTogYW55IHsgcmV0dXJuIHRoaXMuc3VydmV5W1wiY3NzXCJdOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VFeHBhbmRlZCgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRjb2xsYXBzZSghdGhpcy5pc0V4cGFuZGVkKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRCdXR0b25Dc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtvRXhwYW5kZWQoKSA/IHRoaXMuY3NzLndpbmRvdy5oZWFkZXIuYnV0dG9uQ29sbGFwc2VkIDogdGhpcy5jc3Mud2luZG93LmhlYWRlci5idXR0b25FeHBhbmRlZDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvU3VydmV5V2luZG93LnRzIiwiZXhwb3J0IHZhciBrb1RlbXBsYXRlID0geyBodG1sIDogXCJcIn07IGtvVGVtcGxhdGUuaHRtbCA9ICc8ZGl2IHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBib3R0b206IDNweDsgcmlnaHQ6IDEwcHg7XCIgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3Mud2luZG93LnJvb3RcIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy53aW5kb3cuaGVhZGVyLnJvb3RcIj4gICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1iaW5kPVwiY2xpY2s6ZG9FeHBhbmRcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6MTBweFwiIGRhdGEtYmluZD1cInRleHQ6dGl0bGUsIGNzczogJHJvb3QuY3NzLndpbmRvdy5oZWFkZXIudGl0bGVcIj48L3NwYW4+ICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY3NzOiBrb0V4cGFuZGVkQ3NzXCI+PC9zcGFuPiAgICAgICAgPC9hPiAgICA8L2Rpdj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOmtvRXhwYW5kZWQsIGNzczogJHJvb3QuY3NzLndpbmRvdy5ib2R5XCI+ICAgICAgICA8ZGl2IGlkPVwid2luZG93U3VydmV5SlNcIj48L2Rpdj4gICAgPC9kaXY+PC9kaXY+JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQvdGVtcGxhdGUud2luZG93LmtvLmh0bWwudHMiLCJpbXBvcnQge2tvVGVtcGxhdGV9IGZyb20gXCIuL3RlbXBsYXRlLmtvLmh0bWxcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVRlbXBsYXRlVGV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcGxhY2VUZXh0KHJlcGxhY2VUZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIHF1ZXN0aW9uVHlwZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZCA9IHRoaXMuZ2V0SWQoaWQsIHF1ZXN0aW9uVHlwZSk7XG4gICAgICAgIHZhciBwb3MgPSB0aGlzLnRleHQuaW5kZXhPZihpZCk7XG4gICAgICAgIGlmIChwb3MgPCAwKSByZXR1cm47XG4gICAgICAgIHBvcyA9IHRoaXMudGV4dC5pbmRleE9mKCc+JywgcG9zKTtcbiAgICAgICAgaWYgKHBvcyA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gcG9zICsgMTtcbiAgICAgICAgdmFyIGVuZFN0cmluZyA9IFwiPC9zY3JpcHQ+XCI7XG4gICAgICAgIHBvcyA9IHRoaXMudGV4dC5pbmRleE9mKGVuZFN0cmluZywgc3RhcnRQb3MpO1xuICAgICAgICBpZiAocG9zIDwgMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIHN0YXJ0UG9zKSArIHJlcGxhY2VUZXh0ICsgdGhpcy50ZXh0LnN1YnN0cihwb3MpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SWQoaWQ6IHN0cmluZywgcXVlc3Rpb25UeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICdpZD1cInN1cnZleS0nICsgaWQ7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIi1cIiArIHF1ZXN0aW9uVHlwZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ1wiJztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0ZXh0KCk6IHN0cmluZyB7IHJldHVybiBrb1RlbXBsYXRlLmh0bWw7IH1cbiAgICBwcm90ZWN0ZWQgc2V0IHRleHQodmFsdWU6IHN0cmluZykgeyBrb1RlbXBsYXRlLmh0bWwgPSB2YWx1ZTsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC90ZW1wbGF0ZVRleHQudHMiLCJpbXBvcnQgUXVlc3Rpb25EYXRlTW9kZWwgZnJvbSBcIi4uL3F1ZXN0aW9uX2RhdGVcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi8uLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi8uLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4uLy4uL2tub2Nrb3V0L2tvcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGF0ZUltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25JbXBsZW1lbnRvciB7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImRhdGVJZFwiXSA9IHRoaXMuaW5wdXRJZDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGtvUXVlc3Rpb25BZnRlclJlbmRlcihlbCwgY29uKSB7XG4gICAgICAgIGV2YWwoY29uLmdldGpRdWVyeVNjcmlwdChjb25bXCJkYXRlSWRcIl0pKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaW5wdXRJZCgpIHsgcmV0dXJuIFwiZGF0ZV9cIiArIHRoaXMucXVlc3Rpb24uaWQ7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGF0ZSBleHRlbmRzIFF1ZXN0aW9uRGF0ZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25EYXRlSW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxufVxuXG4vL1RlbGwganNvbiBzZXJpYWxpemVyIGFuZCBzdXJ2ZXkgZWRpdG9yIHRvIGNyZWF0ZSBleGFjdGx5IHRoaXMgY2xhc3MuIE92ZXJyaWRlIGl0IGZyb20gdGhlIG1vZGVsIHRoYXQgZG9lc24ndCBoYXZlIGFueSByZW5kZXJpbmcgZnVuY3Rpb25hbGl0eS5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwiZGF0ZVwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25EYXRlKFwiXCIpOyB9KTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZGF0ZVwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uRGF0ZShuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsdWdpbnMva25vY2tvdXQva29xdWVzdGlvbl9kYXRlLnRzIiwiaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vZGFuaXNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2R1dGNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2Zpbm5pc2gnO1xuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vZnJlbmNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2dlcm1hbic7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi9ncmVlayc7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi9wb2xpc2gnO1xuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vcnVzc2lhbic7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi90dXJraXNoJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9jaHVua3MvbG9jYWxpemF0aW9uLnRzIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgZGFuaXNoU3VydmV5U3RyaW5ncyA9IHtcbiAgICBwYWdlUHJldlRleHQ6IFwiVGlsYmFnZVwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJWaWRlcmVcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiRsOmcmRpZ1wiLFxuICAgIHByb2dyZXNzVGV4dDogXCJTaWRlIHswfSBhZiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJEZXIgZXIgaW5nZW4gc3lubGlnZSBzcMO4cmdzbcOlbC5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1hbmdlIHRhayBmb3IgZGluIGJlc3ZhcmVsc2UhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCJTcMO4cmdlc2tlbWFldCBoZW50ZXMgZnJhIHNlcnZlcmVuLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJWYWxnZnJpdCBzdmFyLi4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiVsOmbGcuLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkJlc3ZhciB2ZW5saWdzdCBzcMO4cmdzbcOlbGV0LlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJBbmdpdiBldCB0YWwuXCIsXG4gICAgdGV4dE1pbkxlbmd0aDogXCJBbmdpdiBtaW5kc3QgezB9IHRlZ24uXCIsXG4gICAgbWluU2VsZWN0RXJyb3I6IFwiVsOmbGcgdmVubGlnc3QgbWluZHN0ICB7MH0gc3Zhcm11bGlnaGVkKGVyKS5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJWw6ZsZyB2ZW5saWdzdCBmw6ZycmUgezB9IHN2YXJtdWxpZ2hlZGVyKGVyKS5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHNrYWwgdsOmcmUgbGlnIG1lZCBlbGxlciBzdMO4cnJlIGVuZCB7MX0gb2cgbGlnIG1lZCBlbGxlciBtaW5kcmUgZW5kIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIHN0w7hycmUgZW5kIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIG1pbmRyZSBlbmQgezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIkFuZ2l2IHZlbmxpZ3N0IGVuIGd5bGRpZyBlLW1haWwgYWRyZXNzZS5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkZpbHN0w7hycmVsc2VuIG3DpSBpa2tlIG92ZXJzdGlnZSB7MH0uXCIsXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkFuZ2l2IGVuIHbDpnJkaSBmb3IgZGl0IHZhbGdmcmllIHN2YXIuXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGFcIl0gPSBkYW5pc2hTdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9kYW5pc2gudHMiLCIvL0NyZWF0ZWQgb24gYmVoYWxmIGh0dHBzOi8vZ2l0aHViLmNvbS9GcmFuazEzXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBkdXRjaFN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlZvcmlnZVwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJWb2xnZW5kZVwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJBZnNsdWl0ZW5cIixcbiAgICBvdGhlckl0ZW1UZXh0OiBcIkFuZGVyZVwiLFxuICAgIHByb2dyZXNzVGV4dDogXCJQYWdpbmEgezB9IHZhbiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJFciBpcyBnZWVuIHppY2h0YmFyZSBwYWdpbmEgb2YgdnJhYWcgaW4gZGV6ZSB2cmFnZW5saWpzdFwiLFxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiQmVkYW5rdCBvbSBkZXplIHZyYWdlbmxpanN0IGluIHRlIHZ1bGxlblwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiRGUgdnJhZ2VubGlqc3QgaXMgYWFuIGhldCBsYWRlbi4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIktpZXMuLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkdlbGlldmUgZWVuIGFudHdvb3JkIGluIHRlIHZ1bGxlblwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJIZXQgYW50d29vcmQgbW9ldCBlZW4gZ2V0YWwgemlqblwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiR2VsaWV2ZSBtaW5zdGVuIHswfSBrYXJha3RlcnMgaW4gdGUgdnVsbGVuLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIkdlbGlldmUgbWluaW11bSB7MH0gYW50d29vcmRlbiB0ZSBzZWxlY3RlcmVuLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIkdlbGlldmUgbmlldCBtZWVyIGRhbiB7MH0gYW50d29vcmRlbiB0ZSBzZWxlY3RlcmVuLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiVXcgYW50d29vcmQgJ3swfScgbW9ldCBncm90ZXIgb2YgZ2VsaWprIHppam4gYWFuIHsxfSBlbiBrbGVpbmVyIG9mIGdlbGlqayBhYW4gezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJVdyBhbnR3b29yZCAnezB9JyBtb2V0IGdyb3RlciBvZiBnZWxpamsgemlqbiBhYW4gezF9XCIsXG4gICAgbnVtZXJpY01heDogXCJVdyBhbnR3b29yZCAnezB9JyBtb2V0IGdyb3RlciBvZiBnZWxpamsgemlqbiBhYW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIkdlbGlldmUgZWVuIGdlbGRpZyBlLW1haWxhZHJlcyBpbiB0ZSB2dWxsZW4uXCIsXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJEZSBncm9vdHRlIHZhbiBoZXQgYmVzdGFuZCBtYWcgbmlldCBncm90ZXIgemlqbiBkYW4gezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJHZWxpZXZlIGhldCB2ZWxkICdBbmRlcmUnIGluIHRlIHZ1bGxlblwiXG59O1xuXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5sXCJdID0gZHV0Y2hTdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50cyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZpbm5pc2hTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJFZGVsbGluZW5cIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiU2V1cmFhdmFcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiVmFsbWlzXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJNdXUgKGt1dmFpbGUpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlNpdnUgezB9L3sxfVwiLFxuICAgIGVtcHR5U3VydmV5OiBcIlTDpHNzw6Qga3lzZWx5c3PDpCBlaSBvbGUgeWh0w6Rrw6TDpG4gbsOka3l2aWxsw6Qgb2xldmFhIHNpdnVhIHRhaSBreXN5bXlzdMOkLlwiLFxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiS2lpdG9zIGt5c2VseXluIHZhc3RhYW1pc2VzdGEhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCJLeXNlbHnDpCBsYWRhdGFhbiBwYWx2ZWxpbWVsdGEuLi5cIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJWYWxpdHNlLi4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCJWYXN0YWEga3lzeW15a3NlZW4sIGtpaXRvcy5cIixcbiAgICBudW1lcmljRXJyb3I6IFwiQXJ2b24gdHVsZWUgb2xsYSBudW1lZXJpbmVuLlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgdsOkaGludMOkw6RuIHswfSBtZXJra2nDpC5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJPbGUgaHl2w6QgamEgdmFsaXRzZSB2w6RoaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIk9sZSBoeXbDpCBqYSB2YWxpdHNlIGVuaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfSBqYSB2w6RoZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIHbDpGhlbW3DpG4gdGFpIHlodMOkIHN1dXJpIGt1aW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIlN5w7Z0w6QgdmFsaWRpIHPDpGhrw7Zwb3N0aW9zb2l0ZS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgXFxcIk11dSAoa3V2YWlsZSlcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmlcIl0gPSBmaW5uaXNoU3VydmV5U3RyaW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZmlubmlzaC50cyIsIi8vQ3JlYXRlZCBvbiBiZWhhbGYgaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5rMTNcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZyZW5jaFN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlByXFx1MDBlOWNcXHUwMGU5ZGVudFwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJTdWl2YW50XCIsXG4gICAgY29tcGxldGVUZXh0OiBcIlRlcm1pbmVyXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJBdXRyZSAocHJcXHUwMGU5Y2lzZXIpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlBhZ2UgezB9IHN1ciB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJJbCBuJ3kgYSBuaSBwYWdlIHZpc2libGUgbmkgcXVlc3Rpb24gdmlzaWJsZSBkYW5zIGNlIHF1ZXN0aW9ubmFpcmVcIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1lcmNpIGQnYXZvaXIgclxcdTAwZTlwb25kdSBhdSBxdWVzdGlvbm5haXJlIVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiTGUgcXVlc3Rpb25uYWlyZSBlc3QgZW4gY291cnMgZGUgY2hhcmdlbWVudC4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIkNob2lzaXNzZXouLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgXFx1MDBlMCBjZXR0ZSBxdWVzdGlvbiBlc3Qgb2JsaWdhdG9pcmUuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgZG9pdCBcXHUwMGVhdHJlIHVuIG5vbWJyZS5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIk1lcmNpIGQnZW50cmVyIGF1IG1vaW5zIHswfSBzeW1ib2xlcy5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJNZXJjaSBkZSBzXFx1MDBlOWxlY3Rpb25uZXIgYXUgbW9pbnMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiTWVyY2kgZGUgc1xcdTAwZTlsZWN0aW9ubmVyIGF1IHBsdXMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX0gZXQgaW5mXFx1MDBlOXJpZXVyZSBvdVxcdTAwZTlnYWxlIFxcdTAwZTAgezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIlZvdHJlIHJcXHUwMGU5cG9uc2UgJ3swfScgZG9pdCBcXHUwMGVhdHJlaW5mXFx1MDBlOXJpZXVyZSBvdSBcXHUwMGU5Z2FsZSBcXHUwMGUwIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJNZXJjaSBkJ2VudHJlciB1bmUgYWRyZXNzZSBtYWlsIHZhbGlkZS5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkxhIHRhaWxsZSBkdSBmaWNoaWVyIG5lIGRvaXQgcGFzIGV4Y1xcdTAwZTlkZXIgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJNZXJjaSBkZSBwclxcdTAwZTljaXNlciBsZSBjaGFtcCAnQXV0cmUnLlwiXG59O1xuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN1cnZleVN0cmluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBnZXJtYW5TdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJadXLDvGNrXCIsXG4gICAgcGFnZU5leHRUZXh0OiBcIldlaXRlclwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJGZXJ0aWdcIixcbiAgICBwcm9ncmVzc1RleHQ6IFwiU2VpdGUgezB9IHZvbiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJFcyBnaWJ0IGtlaW5lIHNpY2h0YmFyZSBGcmFnZS5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIlZpZWxlbiBEYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW4gZGVzIEZyYWdlYm9nZW5zIVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiRGVyIEZyYWdlYm9nZW4gd2lyZCB2b20gU2VydmVyIGdlbGFkZW4uLi5cIixcbiAgICBvdGhlckl0ZW1UZXh0OiBcIkJlbnV0emVyZGVmaW5pZXJ0ZSBBbnR3b3J0Li4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV8OkaGxlbi4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwiQml0dGUgYW50d29ydGVuIFNpZSBhdWYgZGllIEZyYWdlLlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJEZXIgV2VydCBzb2xsdGUgZWluZSBaYWhsIHNlaW4uXCIsXG4gICAgdGV4dE1pbkxlbmd0aDogXCJCaXR0ZSBnZWJlbiBTaWUgbWluZGVzdGVucyB7MH0gU3ltYm9sZS5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJCaXR0ZSB3w6RobGVuIFNpZSBtaW5kZXN0ZW5zIHswfSBWYXJpYW50ZW4uXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiQml0dGUgd8OkaGxlbiBTaWUgbmljaHQgbWVociBhbHMgezB9IFZhcmlhbnRlbi5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGdyw7bDn2VyIHNlaW4gYWxzIHsxfSB1bmQgZ2xlaWNoIG9kZXIga2xlaW5lciBhbHMgezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCInezB9JyBzb2x0ZSBnbGVpY2ggb2RlciBncsO2w59lciBzZWluIGFscyB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGtsZWluZXIgYWxzIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBFbWFpbC1BZHJlc3NlIGVpbi5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkRpZSBEYXRlaWdyw7bDn2Ugc29sbCBuaWNodCBtZWhyIGFscyB7MH0uXCIsXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkJpdHRlIGdlYmVuIFNpZSBlaW5lbiBXZXJ0IGbDvHIgSWhyZSBiZW51dHplcmRlZmluaWVydGUgQW50d29ydCBlaW4uXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGVcIl0gPSBnZXJtYW5TdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHMiLCIvL0NyZWF0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FnZWxvc3BhbmFnaW90YWtpc1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgZ3JlZWtTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCLOoM+Bzr/Ot86zzr/Pjc68zrXOvc6/XCIsXG4gICAgcGFnZU5leHRUZXh0OiBcIs6Vz4DPjM68zrXOvc6/XCIsXG4gICAgY29tcGxldGVUZXh0OiBcIs6fzrvOv866zrvOrs+Bz4nPg863XCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCLOhs67zrvOvyAoz4DOsc+BzrHOus6xzrvPjiDOtM65zrXPhc66z4HOuc69zq/Pg8+EzrUpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIs6jzrXOu86vzrTOsSB7MH0gzrHPgM+MIHsxfVwiLFxuICAgIGVtcHR5U3VydmV5OiBcIs6UzrXOvSDPhc+AzqzPgc+HzrXOuSDOus6xzrzOr86xIM6/z4HOsc+Ezq4gz4POtc67zq/OtM6xIM6uIM6/z4HOsc+Ezq4gzrXPgc+Oz4TOt8+Dzrcgz4POtSDOsc+Fz4TPjCDPhM6/IM61z4HPic+EzrfOvM6xz4TOv867z4zOs865zr8uXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCLOlc+Fz4fOsc+BzrnPg8+Ezr/Pjc68zrUgzrPOuc6xIM+EzrfOvSDPg8+FzrzPgM67zq7Pgc+Jz4POtyDOsc+Fz4TOv8+FIM+Ezr/PhSDOtc+Bz4nPhM63zrzOsc+Ezr/Ou86/zrPOr86/z4UhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCLOpM6/IM61z4HPic+EzrfOvM6xz4TOv867z4zOs865zr8gz4bOv8+Bz4TPjs69zrXPhM6xzrkgzrHPgM6/IM+Ezr8gzrTOuc6xzrrOv868zrnPg8+Ezq4uLi5cIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCLOlc+AzrnOu86tzr7PhM61Li4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCLOoM6xz4HOsc66zrHOu8+OIM6xz4DOsc69z4TOrs+Dz4TOtSDPg8+EzrfOvSDOtc+Bz47PhM63z4POty5cIixcbiAgICByZXF1aXJlZEluQWxsUm93c0Vycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gzrHPgM6xzr3PhM6uz4PPhM61IM+Dz4TOuc+CIM61z4HPic+Ezq7Pg861zrnPgiDPg861IM+MzrvOtc+CIM+EzrnPgiDOs8+BzrHOvM68zq3Pgi5cIixcbiAgICBudW1lcmljRXJyb3I6IFwizpcgz4TOuc68zq4gz4DPgc6tz4DOtc65IM69zrEgzrXOr869zrHOuSDOsc+BzrnOuM68zrnPhM65zrrOri5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIs6gzrHPgc6xzrrOsc67z44gz4PPhc68z4DOu863z4HPjs+Dz4TOtSDPhM6/z4XOu86sz4fOuc+Dz4TOv869IHswfSDPg8+NzrzOss6/zrvOsS5cIixcbiAgICBtaW5Sb3dDb3VudEVycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gz4PPhc68z4DOu863z4HPjs+Dz4TOtSDPhM6/z4XOu86sz4fOuc+Dz4TOv869IHswfSDOs8+BzrHOvM68zq3Pgi5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCLOoM6xz4HOsc66zrHOu8+OIM61z4DOuc67zq3Ovs+EzrUgz4TOv8+FzrvOrM+HzrnPg8+Ezr/OvSB7MH0gz4DOsc+BzrHOu867zrHOs86tz4IuXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwizqDOsc+BzrHOus6xzrvPjiDOtc+AzrnOu86tzr7PhM61IM+Mz4fOuSDPgM6xz4HOsc+AzqzOvc+JIM6xz4DOvyB7MH0gz4DOsc+BzrHOu867zrHOs86tz4IuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCLOpM6/ICd7MH0nIM64zrEgz4DPgc6tz4DOtc65IM69zrEgzrXOr869zrHOuSDOr8+Dzr8gzq4gzrzOtc6zzrHOu8+Nz4TOtc+Bzr8gzrHPgM6/IM+Ezr8gezF9IM66zrHOuSDOr8+Dzr8gzq4gzrzOuc66z4HPjM+EzrXPgc6/IM6xz4DOvyDPhM6/IHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwizqTOvyAnezB9JyDPgM+Bzq3PgM61zrkgzr3OsSDOtc6vzr3Osc65IM68zrXOs86xzrvPjc+EzrXPgc6/IM6uIM65z4POvyDOvM61IM+Ezr8gezF9XCIsXG4gICAgbnVtZXJpY01heDogXCLOpM6/ICd7MH0nIM+Az4HOrc+AzrXOuSDOvc6xIM61zq/Ovc6xzrkgzrzOuc66z4HPjM+EzrXPgc6/IM6uIM6vz4POvyDOsc+Azr8gz4TOvyB7MX1cIixcbiAgICBpbnZhbGlkRW1haWw6IFwizqDOsc+BzrHOus6xzrvPjiDOtM+Oz4PPhM61IM68zrnOsSDOsc+Azr/OtM61zrrPhM6uIM60zrnOtc+NzrjPhc69z4POtyBlLW1haWwuXCIsXG4gICAgdXJsUmVxdWVzdEVycm9yOiBcIs6XIM6xzq/PhM63z4POtyDOtc+Azq3Pg8+Ez4HOtc+IzrUgz4PPhs6szrvOvM6xICd7MH0nLiB7MX1cIixcbiAgICB1cmxHZXRDaG9pY2VzRXJyb3I6IFwizpcgzrHOr8+EzrfPg863IM61z4DOrc+Dz4TPgc61z4jOtSDOus61zr3OrCDOtM61zrTOv868zq3Ovc6xIM6uIM63IM65zrTPjM+EzrfPhM6xICfOvM6/zr3Ov8+AzqzPhM65L3BhdGgnIM61zq/Ovc6xzrkgzrXPg8+GzrHOu86tzrzOrc69zrdcIixcbiAgICBleGNlZWRNYXhTaXplOiBcIs6kzr8gzrzOrc6zzrXOuM6/z4IgzrTOtc69IM68z4DOv8+BzrXOryDOvc6xIM+Fz4DOtc+BzrLOrc69zrXOuSDPhM6xIHswfS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwizqDOsc+BzrHOus6xzrvPjiDPg8+FzrzPgM67zrfPgc+Oz4PPhM61IM+EzrfOvSDPhM65zrzOriDOs865zrEgz4TOvyDPgM61zrTOr86/ICfOrM67zrvOvycuXCIsXG4gICAgdXBsb2FkaW5nRmlsZTogXCLOpM6/IM6xz4HPh861zq/OvyDPg86xz4IgzrHOvc61zrLOsc6vzr3Otc65LiDOoM6xz4HOsc66zrHOu8+OIM+AzrXPgc65zrzOrc69zrXPhM61IM66zrHPgM6/zrnOsSDOtM61z4XPhM61z4HPjM67zrXPgM+EzrEgzrrOsc65IM60zr/Ous65zrzOrM+Dz4TOtSDOvs6xzr3OrC5cIixcbiAgICBhZGRSb3c6IFwizqDPgc6/z4POuM6uzrrOtyDOs8+BzrHOvM68zq7PglwiLFxuICAgIHJlbW92ZVJvdzogXCLOkc+GzrHOr8+BzrXPg863XCJcbn07XG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImdyXCJdID0gZ3JlZWtTdXJ2ZXlTdHJpbmdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZ3JlZWsudHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBwb2xpc2hTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJXc3RlY3pcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiRGFsZWpcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiR290b3dlXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlN0cm9uYSB7MH0geiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJOaWUgbWEgd2lkb2N6bnljaCBweXRhxYQuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCJEemnEmWt1amVteSB6YSB3eXBlxYJuaWVuaWUgYW5raWV0eSFcIixcbiAgICBsb2FkaW5nU3VydmV5OiBcIlRyd2Egd2N6eXR5d2FuaWUgYW5raWV0eS4uLlwiLFxuICAgIG90aGVySXRlbVRleHQ6IFwiSW5uYSBvZHBvd2llZMW6Li4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV3liaWVyei4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwiUHJvc3rEmSBvZHBvd2llZHppZcSHIG5hIHRvIHB5dGFuaWUuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcIlcgdHltIHBvbHUgbW/FvG5hIHdwaXNhxIcgdHlsa28gbGljemJ5LlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiUHJvc3rEmSB3cGlzYcSHIGNvIG5ham1uaWVqIHswfSB6bmFrw7N3LlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIlByb3N6xJkgd3licmHEhyBjbyBuYWptbmllaiB7MH0gcG96eWNqaS5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJQcm9zesSZIHd5YnJhxIcgbmllIHdpxJljZWogbmnFvCB7MH0gcG96eWNqaS5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIk9kcG93aWVkxbogJ3swfScgcG93aW5uYSBiecSHIHdpxJlrc3phIGx1YiByw7N3bmEgezF9IG9yYXogbW5pZWpzemEgbHViIHLDs3duYSB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIk9kcG93aWVkxbogJ3swfScgcG93aW5uYSBiecSHIHdpxJlrc3phIGx1YiByw7N3bmEgezF9XCIsXG4gICAgbnVtZXJpY01heDogXCJPZHBvd2llZMW6ICd7MH0nIHBvd2lubmEgYnnEhyBtbmllanN6YSBsdWIgcsOzd25hIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJQcm9zesSZIHBvZGHEhyBwcmF3aWTFgm93eSBhZHJlcyBlbWFpbC5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIlJvem1pYXIgcHJ6ZXPFgmFuZWdvIHBsaWt1IG5pZSBtb8W8ZSBwcnpla3JhY3phxIcgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJQcm9zesSZIHBvZGHEhyBpbm7EhSBvZHBvd2llZMW6LlwiXG59O1xuXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcInBsXCJdID0gcG9saXNoU3VydmV5U3RyaW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vcG9saXNoLnRzIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgcnVzc2lhblN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcItCd0LDQt9Cw0LRcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwi0JTQsNC70LXQtVwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCLQk9C+0YLQvtCy0L5cIixcbiAgICBwcm9ncmVzc1RleHQ6IFwi0KHRgtGA0LDQvdC40YbQsCB7MH0g0LjQtyB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCLQndC10YIg0L3QuCDQvtC00L3QvtCz0L4g0LLQvtC/0YDQvtGB0LAuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCLQkdC70LDQs9C+0LTQsNGA0LjQvCDQktCw0YEg0LfQsCDQt9Cw0L/QvtC70L3QtdC90LjQtSDQsNC90LrQtdGC0YshXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCLQl9Cw0LPRgNGD0LfQutCwINGBINGB0LXRgNCy0LXRgNCwLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCLQlNGA0YPQs9C+0LUgKNC/0L7QttCw0LvRg9C50YHRgtCwLCDQvtC/0LjRiNC40YLQtSlcIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCLQktGL0LHRgNCw0YLRjC4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINC+0YLQstC10YLRjNGC0LUg0L3QsCDQstC+0L/RgNC+0YEuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcItCe0YLQstC10YIg0LTQvtC70LbQtdC9INCx0YvRgtGMINGH0LjRgdC70L7QvC5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRhdC+0YLRjyDQsdGLIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstGL0LHQtdGA0LjRgtC1INGF0L7RgtGPINCx0YsgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLRi9Cx0LXRgNC40YLQtSDQvdC1INCx0L7Qu9C10LUgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfSwg0Lgg0YDQsNCy0L3Ri9C8INC40LvQuCDQvNC10L3RjNGI0LUsINGH0LXQvCB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScg0LTQvtC70LbQvdC+INCx0YvRgtGMINGA0LDQstC90YvQvCDQuNC70Lgg0LzQtdC90YzRiNC1LCDRh9C10LwgezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LTQsNC90L3Ri9C1INCyINC/0L7Qu9C1IFxcXCLQlNGA0YPQs9C+0LVcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wicnVcIl0gPSBydXNzaWFuU3VydmV5U3RyaW5ncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciB0dXJraXNoU3VydmV5U3RyaW5ncyA9IHtcbiAgICAgICAgcGFnZVByZXZUZXh0OiBcIkdlcmlcIixcbiAgICAgICAgcGFnZU5leHRUZXh0OiBcIsSwbGVyaVwiLFxuICAgICAgICBjb21wbGV0ZVRleHQ6IFwiQW5rZXRpIFRhbWFtbGFcIixcbiAgICAgICAgb3RoZXJJdGVtVGV4dDogXCJEacSfZXIgKGHDp8Sxa2xhecSxbsSxeilcIixcbiAgICAgICAgcHJvZ3Jlc3NUZXh0OiBcIlNheWZhIHswfSAvIHsxfVwiLFxuICAgICAgICBlbXB0eVN1cnZleTogXCJBbmtldHRlIGfDtnLDvG50w7xsZW5lY2VrIHNheWZhIHlhIGRhIHNvcnUgbWV2Y3V0IGRlxJ9pbC5cIixcbiAgICAgICAgY29tcGxldGluZ1N1cnZleTogXCJBbmtldGltaXppIHRhbWFtbGFkxLHEn8SxbsSxeiBpw6dpbiB0ZcWfZWtrw7xyIGVkZXJpei5cIixcbiAgICAgICAgbG9hZGluZ1N1cnZleTogXCJBbmtldCBzdW51Y3VkYW4gecO8a2xlbml5b3IgLi4uXCIsXG4gICAgICAgIG9wdGlvbnNDYXB0aW9uOiBcIlNlw6dpbml6IC4uLlwiLFxuICAgICAgICByZXF1aXJlZEVycm9yOiBcIkzDvHRmZW4gc29ydXlhIGNldmFwIHZlcmluaXpcIixcbiAgICAgICAgbnVtZXJpY0Vycm9yOiBcIkdpcmlsZW4gZGXEn2VyIG51bWVyaWsgb2xtYWzEsWTEsXJcIixcbiAgICAgICAgdGV4dE1pbkxlbmd0aDogXCJFbiBheiB7MH0gc2VtYm9sIGdpcmluaXouXCIsXG4gICAgICAgIG1pblJvd0NvdW50RXJyb3I6IFwiTMO8dGZlbiBlbiBheiB7MH0gc2F0xLFyxLEgZG9sZHVydW4uXCIsXG4gICAgICAgIG1pblNlbGVjdEVycm9yOiBcIkzDvHRmZW4gZW4gYXogezB9IHNlw6dlbmXEn2kgc2XDp2luaXouXCIsXG4gICAgICAgIG1heFNlbGVjdEVycm9yOiBcIkzDvHRmZW4gezB9IGFkZXR0ZW4gZmF6bGEgc2XDp21leWluaXouXCIsXG4gICAgICAgIG51bWVyaWNNaW5NYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBtb3JlIHRoYW4gezF9IGFuZCBlcXVhbCBvciBsZXNzIHRoYW4gezJ9XCIsXG4gICAgICAgIG51bWVyaWNNaW46IFwiJ3swfScgZGXEn2VyaSB7MX0gZGXEn2VyaW5lIGXFn2l0IHZleWEgYsO8ecO8ayBvbG1hbMSxZMSxclwiLFxuICAgICAgICBudW1lcmljTWF4OiBcIid7MH0nIGRlxJ9lcmkgezF9IGRlxJ9lcmluZSBlxZ9pdCB5YSBkYSBrw7zDp8O8ayBvbG1hbMSxZMSxci5cIixcbiAgICAgICAgaW52YWxpZEVtYWlsOiBcIkzDvHRmZW4gZ2XDp2VybGkgYmlyIGVwb3N0YSBhZHJlc2kgZ2lyaW5pei5cIixcbiAgICAgICAgdXJsUmVxdWVzdEVycm9yOiBcIlRhbGViaSDFn3UgaGF0YXnEsSBkw7ZuZMO8ICd7MH0nLiB7MX1cIixcbiAgICAgICAgdXJsR2V0Q2hvaWNlc0Vycm9yOiBcIlRhbGVwIGhlcmhhbmdpIGJpciB2ZXJpIGTDtm5tZWRpIHlhIGRhICdwYXRoJyDDtnplbGxpxJ9pIGhhdGFsxLEuXCIsXG4gICAgICAgIGV4Y2VlZE1heFNpemU6IFwiRG9zeWEgYm95dXR1IHswfSBkZcSfZXJpbmkgZ2XDp2VtZXouXCIsXG4gICAgICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJMw7x0ZmVuIGRpxJ9lciBkZcSfZXJsZXJpIGdpcmluaXouXCIsXG4gICAgICAgIHVwbG9hZGluZ0ZpbGU6IFwiRG9zeWFuxLF6IHnDvGtsZW5peW9yLiBMw5x0ZmVuIGJpcmthw6cgc2FuaXllIGJla2xleWluIHZlIHRla3JhciBkZW5leWluLlwiLFxuICAgICAgICBhZGRSb3c6IFwiU2F0xLFyIEVrbGVcIixcbiAgICAgICAgcmVtb3ZlUm93OiBcIkthbGTEsXJcIlxufTtcblxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJ0clwiXSA9IHR1cmtpc2hTdXJ2ZXlTdHJpbmdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vdHVya2lzaC50cyIsImltcG9ydCAnLi4vLi4vZGVmYXVsdENzcy9jc3Nib290c3RyYXAnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzIiwiaW1wb3J0IHtzdXJ2ZXlDc3N9IGZyb20gXCIuL2Nzc3N0YW5kYXJkXCI7XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEJvb3RzdHJhcENzcyA9IHtcbiAgICByb290OiBcIlwiLFxuICAgIGhlYWRlcjogXCJwYW5lbC1oZWFkaW5nXCIsXG4gICAgYm9keTogXCJwYW5lbC1ib2R5XCIsXG4gICAgZm9vdGVyOiBcInBhbmVsLWZvb3RlclwiLFxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiYnRuXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiYnRuLXByaW1hcnlcIiwgcHJldjogXCJidG4taW5mb1wiLCBuZXh0OiBcImJ0bi1pbmZvXCIgfSxcbiAgICBwcm9ncmVzczogXCJwcm9ncmVzcyBjZW50ZXItYmxvY2tcIiwgcHJvZ3Jlc3NCYXI6IFwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiLFxuICAgIHBhZ2VUaXRsZTogXCJwVGl0bGVcIixcbiAgICByb3c6IFwiZWFjaHF1ZXN0aW9uXCIsXG4gICAgcXVlc3Rpb246IHsgcm9vdDogXCJcIiwgdGl0bGU6IFwiXCIsIGNvbW1lbnQ6IFwiZm9ybS1jb250cm9sXCIsIGluZGVudDogMjAgfSxcbiAgICBlcnJvcjogeyByb290OiBcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC10aFwiLCBpY29uOiBcImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblwiLCBpdGVtOiBcIlwiIH0sXG4gICAgY2hlY2tib3g6IHsgcm9vdDogXCJmb3JtLWlubGluZVwiLCBpdGVtOiBcImNoZWNrYm94XCIsIG90aGVyOiBcIlwiIH0sXG4gICAgY29tbWVudDogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBkcm9wZG93bjogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBtYXRyaXg6IHsgcm9vdDogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sXG4gICAgbWF0cml4ZHJvcGRvd246IHsgcm9vdDogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sXG4gICAgbWF0cml4ZHluYW1pYzogeyByb290OiBcInRhYmxlIHRhYmxlLWhvdmVyXCIsIGJ1dHRvbjogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgfSxcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiLCBpdGVtVGl0bGU6IFwiXCIsIGl0ZW1WYWx1ZTogXCJmb3JtLWNvbnRyb2xcIiB9LFxuICAgIHJhZGlvZ3JvdXA6IHsgcm9vdDogXCJmb3JtLWlubGluZVwiLCBpdGVtOiBcInJhZGlvXCIsIG90aGVyOiBcIlwiIH0sXG4gICAgcmF0aW5nOiB7IHJvb3Q6IFwiYnRuLWdyb3VwXCIsIGl0ZW06IFwiYnRuIGJ0bi1kZWZhdWx0XCIgfSxcbiAgICB0ZXh0OiBcImZvcm0tY29udHJvbFwiLFxuICAgIHdpbmRvdzoge1xuICAgICAgICByb290OiBcIm1vZGFsLWNvbnRlbnRcIiwgYm9keTogXCJtb2RhbC1ib2R5XCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgcm9vdDogXCJtb2RhbC1oZWFkZXIgcGFuZWwtdGl0bGVcIiwgdGl0bGU6IFwicHVsbC1sZWZ0XCIsIGJ1dHRvbjogXCJnbHlwaGljb24gcHVsbC1yaWdodFwiLFxuICAgICAgICAgICAgYnV0dG9uRXhwYW5kZWQ6IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXBcIiwgYnV0dG9uQ29sbGFwc2VkOiBcImdseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIlxuICAgICAgICB9XG4gICAgfVxufTtcbnN1cnZleUNzc1tcImJvb3RzdHJhcFwiXSA9IGRlZmF1bHRCb290c3RyYXBDc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdENzcy9jc3Nib290c3RyYXAudHMiXSwic291cmNlUm9vdCI6IiJ9