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
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__) {
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
	exports.__extends = exports.SurveyTemplateText = exports.SurveyWindow = exports.QuestionText = exports.QuestionRating = exports.QuestionRadiogroup = exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = exports.QuestionMatrixDropdown = exports.QuestionMatrix = exports.MatrixRow = exports.QuestionHtml = exports.QuestionFile = exports.QuestionDropdown = exports.QuestionComment = exports.QuestionCheckbox = exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = exports.QuestionImplementor = exports.QuestionImplementorBase = exports.Page = exports.QuestionRow = exports.Survey = exports.defaultStandardCss = undefined;
	
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
	
	var _cssstandard = __webpack_require__(34);
	
	Object.defineProperty(exports, "defaultStandardCss", {
	  enumerable: true,
	  get: function get() {
	    return _cssstandard.defaultStandardCss;
	  }
	});
	
	var _kosurvey = __webpack_require__(35);
	
	Object.defineProperty(exports, "Survey", {
	  enumerable: true,
	  get: function get() {
	    return _kosurvey.Survey;
	  }
	});
	
	var _kopage = __webpack_require__(37);
	
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
	
	var _koquestionbase = __webpack_require__(39);
	
	Object.defineProperty(exports, "QuestionImplementorBase", {
	  enumerable: true,
	  get: function get() {
	    return _koquestionbase.QuestionImplementorBase;
	  }
	});
	
	var _koquestion = __webpack_require__(40);
	
	Object.defineProperty(exports, "QuestionImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion.QuestionImplementor;
	  }
	});
	
	var _koquestion_baseselect = __webpack_require__(41);
	
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
	
	var _koquestion_checkbox = __webpack_require__(42);
	
	Object.defineProperty(exports, "QuestionCheckbox", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_checkbox.QuestionCheckbox;
	  }
	});
	
	var _koquestion_comment = __webpack_require__(43);
	
	Object.defineProperty(exports, "QuestionComment", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_comment.QuestionComment;
	  }
	});
	
	var _koquestion_dropdown = __webpack_require__(44);
	
	Object.defineProperty(exports, "QuestionDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_dropdown.QuestionDropdown;
	  }
	});
	
	var _koquestion_file = __webpack_require__(45);
	
	Object.defineProperty(exports, "QuestionFile", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_file.QuestionFile;
	  }
	});
	
	var _koquestion_html = __webpack_require__(46);
	
	Object.defineProperty(exports, "QuestionHtml", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_html.QuestionHtml;
	  }
	});
	
	var _koquestion_matrix = __webpack_require__(47);
	
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
	
	var _koquestion_matrixdropdown = __webpack_require__(48);
	
	Object.defineProperty(exports, "QuestionMatrixDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdropdown.QuestionMatrixDropdown;
	  }
	});
	
	var _koquestion_matrixdynamic = __webpack_require__(49);
	
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
	
	var _koquestion_multipletext = __webpack_require__(50);
	
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
	
	var _koquestion_radiogroup = __webpack_require__(51);
	
	Object.defineProperty(exports, "QuestionRadiogroup", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_radiogroup.QuestionRadiogroup;
	  }
	});
	
	var _koquestion_rating = __webpack_require__(52);
	
	Object.defineProperty(exports, "QuestionRating", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_rating.QuestionRating;
	  }
	});
	
	var _koquestion_text = __webpack_require__(53);
	
	Object.defineProperty(exports, "QuestionText", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_text.QuestionText;
	  }
	});
	
	var _koSurveyWindow = __webpack_require__(54);
	
	Object.defineProperty(exports, "SurveyWindow", {
	  enumerable: true,
	  get: function get() {
	    return _koSurveyWindow.SurveyWindow;
	  }
	});
	
	var _templateText = __webpack_require__(56);
	
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
	
	__webpack_require__(57);
	
	__webpack_require__(66);

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
	        return value.constructor.toString().indexOf("Array") > -1;
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
	        if (!this.currentPage.hasErrors(false, false)) {
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Survey = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _survey = __webpack_require__(30);
	
	var _base = __webpack_require__(4);
	
	var _kopage = __webpack_require__(37);
	
	var _cssstandard = __webpack_require__(34);
	
	var _templateKo = __webpack_require__(38);
	
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
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Page = exports.QuestionRow = undefined;
	
	var _knockout = __webpack_require__(36);
	
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
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<script type="text/html" id="survey-comment">  <input data-bind="value:$data.question.koComment, visible:$data.visible, css: $root.css.question.comment" /></script><div data-bind="css: $root.css.root">    <div data-bind="visible: (title.length > 0) && showTitle && koState() != \'completed\', css: $root.css.header">        <h3 data-bind="text:title"></h3>    </div>    <!-- ko if: koState() == "running" -->    <div data-bind="css: $root.css.body">        <div data-bind="visible: showProgressBar ==\'top\', template: { name: \'survey-progress\', data: $data }"></div>        <div id="sq_page" data-bind="template: { name: \'survey-page\', data: koCurrentPage }"></div>        <div style="margin-top:10px" data-bind="visible: showProgressBar ==\'bottom\', template: { name: \'survey-progress\', data: $data }"></div>    </div>    <div data-bind="visible: showNavigationButtons && !isDesignMode, css: $root.css.footer">        <input type="button" data-bind="value: pagePrevText, click: prevPage, visible: !koIsFirstPage(), css: $root.cssNavigationPrev" />        <input type="button" data-bind="value: pageNextText, click: nextPage, visible: !koIsLastPage(), css: $root.cssNavigationNext" />        <input type="button" data-bind="value: completeText, click: completeLastPage, visible: koIsLastPage(), css: $root.cssNavigationComplete" />    </div>    <!-- /ko -->    <!-- ko if: koState() == "completed" -->    <div data-bind="html: processedCompletedHtml"></div>    <!-- /ko -->    <!-- ko if: koState() == "loading" -->    <div data-bind="html: processedLoadingHtml"></div>    <!-- /ko -->    <!-- ko if: koState() == "empty" -->    <div data-bind="text:emptySurveyText, css: $root.css.body"></div>    <!-- /ko --></div><script type="text/html" id="survey-page">    <h4 data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle"></h4>    <!-- ko foreach: { data: rows, as: \'row\'} -->    <div data-bind="visible: row.koVisible, css: $root.css.row">        <!-- ko foreach: { data: row.questions, as: \'question\' , afterRender: row.koAfterRender } -->            <!-- ko template: { name: \'survey-question\', data: question } --><!-- /ko -->        <!-- /ko -->    </div>    <!-- /ko --></script><script type="text/html" id="survey-progress">    <div style="width:60%;" data-bind="css: $root.css.progress">        <div data-bind="css: $root.css.progressBar, style:{width: koProgress() + \'%\'}"             role="progressbar" aria-valuemin="0"             aria-valuemax="100">            <span data-bind="text:koProgressText"></span>        </div>    </div></script><script type="text/html" id="survey-question-checkbox">    <form data-bind="css: $root.css.checkbox.root">        <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->        <div data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.checkbox.item">            <label data-bind="css: $root.css.checkbox.item">                <input type="checkbox" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />                <span data-bind="text: item.text"></span>            </label>            <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">                <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }, css: $root.css.checkbox.other"></div>            </div>        </div>        <!-- /ko -->    </form></script><script type="text/html" id="survey-question-comment">    <textarea type="text" data-bind="attr: {cols: question.cols, rows: question.rows, id: question.inputId}, value:question.koValue, css: $root.css.comment" /></script><script type="text/html" id="survey-question-dropdown">    <select data-bind="attr: {id: question.inputId}, options: question.koVisibleChoices, optionsText: \'text\', optionsValue: \'value\', value: question.koValue, optionsCaption: question.optionsCaption, css: $root.css.dropdown"></select>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>    </div></script><script type="text/html" id="survey-question-errors">    <div role="alert" data-bind="visible: koErrors().length > 0, foreach: { data: koErrors, as: \'error\'}, css: $root.css.error.root">        <div>            <span aria-hidden="true" data-bind="css: $root.css.error.icon"></span>            <span data-bind="text:error.getText(), css: $root.css.error.item"></span>        </div>    </div></script><script type="text/html" id="survey-question-file">    <input type="file" data-bind="attr: {id: question.inputId}, event: {change: dochange}">    <div>        <img data-bind="attr: { src: question.koData, height: question.imageHeight, width: question.imageWidth }, visible: question.koHasValue">    </div></script><script type="text/html" id="survey-question-html">    <div data-bind="html: question.processedHtml"></div></script><script type="text/html" id="survey-question-matrix">    <table data-bind="css: $root.css.matrix.root">        <thead>            <tr>                <th data-bind="visible: question.hasRows"></th>                <!-- ko foreach: question.columns -->                <th data-bind="text:$data.text"></th>                <!-- /ko -->            </tr>        </thead>        <tbody>            <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->            <tr>                <td data-bind="visible: question.hasRows, text:row.text"></td>                <!-- ko foreach: question.columns -->                <td>                    <input type="radio" data-bind="attr: {name: row.fullName, value: $data.value, id: ($index() == 0) && ($parentContext.$index() == 0) ? question.inputId : \'\'}, checked: row.koValue"/>                </td>                <!-- /ko -->            </tr>            <!-- /ko -->        </tbody>    </table></script><script type="text/html" id="survey-question-matrixdropdown">    <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">        <table data-bind="css: $root.css.matrixdropdown.root">            <thead>                <tr>                    <th></th>                    <!-- ko foreach: question.columns -->                    <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>                    <!-- /ko -->                </tr>            </thead>            <tbody>                <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->                <tr>                    <td data-bind="text:row.text"></td>                    <!-- ko foreach: row.cells-->                    <td>                        <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->                        <!-- /ko -->                        <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->                        <!-- /ko -->                    </td>                    <!-- /ko -->                </tr>                <!-- /ko -->            </tbody>        </table>    </div></script><script type="text/html" id="survey-question-matrixdynamic">    <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">        <table data-bind="css: $root.css.matrixdynamic.root">            <thead>                <tr>                    <!-- ko foreach: question.columns -->                    <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>                    <!-- /ko -->                    <th></th>                </tr>            </thead>            <tbody>                <!-- ko foreach: { data: question.koRows, as: \'row\' } -->                <tr>                    <!-- ko foreach: row.cells-->                    <td>                        <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->                        <!-- /ko -->                        <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->                        <!-- /ko -->                    </td>                    <!-- /ko -->                    <td><input type="button" data-bind="click:question.koRemoveRowClick, css: $root.css.matrixdynamic.button, value: question.removeRowText" /></td>                </tr>                <!-- /ko -->            </tbody>        </table>    </div>    <input type="button" data-bind="click:question.koAddRowClick, css: $root.css.matrixdynamic.button, value: question.addRowText" /></script><script type="text/html" id="survey-question-multipletext">    <table data-bind="css: $root.css.multipletext.root, foreach: { data:  question.koRows, as: \'row\' }">        <tr data-bind="foreach: { data: row, as: \'item\' }">            <td data-bind="text: item.title, css: $root.css.multipletext.itemTitle"></td>            <td><input type="text" style="float:left" data-bind="attr: {size: question.itemSize, id: ($index() == 0) ? question.inputId : \'\'}, value: item.koValue, css: $root.css.multipletext.itemValue" /></td>        </tr>    </table></script><script type="text/html" id="survey-question-radiogroup">    <form data-bind="css: $root.css.radiogroup.root">        <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->        <div  data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.radiogroup.item">            <label data-bind="css: $root.css.radiogroup.item">                <input type="radio" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />                <span data-bind="text: item.text"></span>            </label>            <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">                <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible}}, css: $root.css.radiogroup.other"></div>            </div>        </div>        <!-- /ko -->    </form></script><script type="text/html" id="survey-question-rating">    <div data-bind="css: $root.css.rating.root">        <!-- ko foreach: question.koVisibleRateValues -->        <label data-bind="css: question.koGetCss($data)">            <input type="radio" style="display: none;"                    data-bind="attr: {name: question.name, id: question.name + $index(), value: $data.value}, event: { change: question.koChange}" />            <span data-bind="visible: $index() == 0, text: question.mininumRateDescription"></span>            <span data-bind="text: $data.text"></span>            <span data-bind="visible: $index() == (question.koVisibleRateValues().length-1), text: question.maximumRateDescription"></span>        </label>        <!-- /ko -->    </div>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question } }"></div>    </div></script><script type="text/html" id="survey-question-text">    <input data-bind="attr: {type: question.inputType, size: question.size, id: question.inputId}, value:question.koValue, css: $root.css.text"/></script><script type="text/html" id="survey-question">    <div style="vertical-align:top" data-bind="css: $root.css.question.root, style: {display: question.koVisible() ? \'inline-block\': \'none\', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr: {id: id}">        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'top\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->        <!-- ko template: { name: \'survey-question-errors\', data: question } -->        <!-- /ko -->        <!-- ko template: { name: \'survey-question-\' + question.getType(), data: question, afterRender: question.koQuestionAfterRender } -->        <!-- /ko -->        <div data-bind="visible: question.hasComment">            <div data-bind="text:question.commentText"></div>            <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': true } }"></div>        </div>        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'bottom\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->    </div></script>';

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementorBase = undefined;
	
	var _knockout = __webpack_require__(36);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestionbase = __webpack_require__(39);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckbox = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionComment = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_comment = __webpack_require__(23);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdown = undefined;
	
	var _question_dropdown = __webpack_require__(24);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFile = exports.QuestionFileImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_file = __webpack_require__(25);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtml = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestionbase = __webpack_require__(39);
	
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrix = exports.MatrixRow = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_matrix = __webpack_require__(19);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdown = undefined;
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_multipletext = __webpack_require__(20);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroup = undefined;
	
	var _question_radiogroup = __webpack_require__(27);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRating = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionText = exports.QuestionTextImplementor = undefined;
	
	var _question_text = __webpack_require__(29);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindow = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _surveyWindow = __webpack_require__(33);
	
	var _kosurvey = __webpack_require__(35);
	
	var _templateWindowKo = __webpack_require__(55);
	
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
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<div style="position: fixed; bottom: 3px; right: 10px;" data-bind="css: $root.css.window.root">    <div data-bind="css: $root.css.window.header.root">        <a href="#" data-bind="click:doExpand" style="width:100%">            <span style="padding-right:10px" data-bind="text:title, css: $root.css.window.header.title"></span>            <span aria-hidden="true" data-bind="css: koExpandedCss"></span>        </a>    </div>    <div data-bind="visible:koExpanded, css: $root.css.window.body">        <div id="windowSurveyJS"></div>    </div></div>';

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyTemplateText = undefined;
	
	var _templateKo = __webpack_require__(38);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);

/***/ },
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(67);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultBootstrapCss = undefined;
	
	var _cssstandard = __webpack_require__(34);
	
	var defaultBootstrapCss = exports.defaultBootstrapCss = {
	    root: "",
	    header: "panel-heading",
	    body: "panel-body",
	    footer: "panel-footer",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "progress center-block", progressBar: "progress-bar",
	    pageTitle: "",
	    row: "",
	    question: { root: "", title: "", comment: "form-control", indent: 20 },
	    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
	    checkbox: { root: "form-inline", item: "checkbox", other: "" },
	    comment: "form-control",
	    dropdown: "form-control",
	    matrix: { root: "table" },
	    matrixdropdown: { root: "table" },
	    matrixdynamic: { root: "table", button: "button" },
	    multipletext: { root: "table", itemTitle: "", itemValue: "form-control" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NzUyNjA4MmU4NTYwYzRmMmNkOSIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9rby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVua3MvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleVN0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb25vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9uc1BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0UHJlUHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX211bHRpcGxldGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHhTdXJ2ZXlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmlnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvc3VydmV5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlLmtvLmh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY29tbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbXVsdGlwbGV0ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3JhZGlvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmF0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvU3VydmV5V2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC90ZW1wbGF0ZS53aW5kb3cua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQvdGVtcGxhdGVUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kYW5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL2Zpbm5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9wb2xpc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9ydXNzaWFuLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb24vdHVya2lzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVua3MvY3NzRnJhbWV3b3Jrcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmYXVsdENzcy9jc3Nib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDK0I7Ozs7Ozs7Ozs7Ozs7Ozt5QkFNOEI7Ozs7Ozs7OztzQkFNN0Q7Ozs7Ozs7OztvQkFBbUI7Ozs7OztvQkFDbkI7Ozs7Ozs7Ozs0QkFDQTs7Ozs7Ozs7O3dCQUNBOzs7Ozs7Ozs7bUNBQ0E7Ozs7OzttQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7Ozs7Z0NBQ0E7Ozs7Ozs7OztpQ0FDQTs7Ozs7Ozs7OzZCQUNBOzs7Ozs7Ozs7NkJBQ0E7Ozs7Ozs7OzsrQkFBaUI7Ozs7OzsrQkFDakI7Ozs7Ozs7Ozt1Q0FDQTs7Ozs7Ozs7O3NDQUNvQzs7Ozs7O3NDQUdwQzs7Ozs7Ozs7O3FDQUNvQjs7Ozs7O3FDQUFpQzs7Ozs7O3FDQUdyRDs7Ozs7Ozs7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QUUsRUFBVSxVQUFJLElBQU0sTUFBSSxJQUFNLE1BQU07QUFDOUQsZUFBeUIseUJBQWEsYUFBZ0I7QUFDckQsZ0JBQUk7QUFDVixVQUFJO0FBQ0MsZUFBRSxFQUFNLE1BQUksSUFBTyxPQUFJLElBQVMsU0FBZ0IsZ0JBQVEsUUFBTTtBQUNqRSxZQUFFLEVBQU0sTUFBc0Isc0JBQU0sTUFBd0Msd0NBQU0sTUFBTTtBQUVyRixlQUFFLEVBQU0sTUFBZSxlQUFNLE1BQVksWUFBTyxPQUFNO0FBQ3ZELGNBQWdCO0FBQ2YsZUFBZ0I7QUFDbEIsYUFBRSxFQUFNLE1BQVc7QUFDWCxxQkFBRSxFQUFNLE1BQVc7QUFDcEIsb0JBQUUsRUFBTSxNQUFTLFNBQVEsUUFBWTtBQUN0QyxtQkFBRSxFQUFNLE1BQVMsU0FBVyxXQUFJLElBQVcsV0FBa0I7QUFDL0QsaUJBQUUsRUFBTSxNQUFlLGVBQU0sTUFBUyxTQUFPLE9BQU07QUFDdkQsYUFBRSxFQUFNLE1BQWEsYUFBTSxNQUFxQjtBQUNsRCxXQUFnQjtBQUNkO0FBQ0UsZUFBaUIsaUJBQU0sTUFBYztBQUNuQztBQUNFLG1CQUE0Qiw0QkFBTyxPQUFhLGFBQVEsUUFBd0I7QUFDdEUsNkJBQTZDLDZDQUFpQixpQkFHdEY7QUFMYztBQUZKO0FBdEJxQjtBQThCeEIsd0JBQWEsZUFBdUIsb0IiLCJmaWxlIjoic3VydmV5LmtvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlcIiwgW1wia25vY2tvdXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3VydmV5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleVwiXSA9IGZhY3Rvcnkocm9vdFtcImtvXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NzUyNjA4MmU4NTYwYzRmMmNkOSIsIi8vIG1vZGVsXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVua3MvbW9kZWxcIjtcblxuLy8gbG9jYWxpemF0aW9uXG5pbXBvcnQgJy4vY2h1bmtzL2xvY2FsaXphdGlvbic7XG5cbi8vIGNzcyBzdGFuZGFyZFxuZXhwb3J0IHtkZWZhdWx0U3RhbmRhcmRDc3N9IGZyb20gXCIuLi9kZWZhdWx0Q3NzL2Nzc3N0YW5kYXJkXCI7XG4vL2NzcyBmcmFtZXdvcmtzXG5pbXBvcnQgJy4vY2h1bmtzL2Nzc0ZyYW1ld29ya3MnO1xuXG4vLyBrbm9ja291dFxuZXhwb3J0IHtTdXJ2ZXl9IGZyb20gXCIuLi9rbm9ja291dC9rb3N1cnZleVwiO1xuZXhwb3J0IHtRdWVzdGlvblJvdywgUGFnZX0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcGFnZVwiO1xuZXhwb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yQmFzZX0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25iYXNlXCI7XG5leHBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uXCI7XG5leHBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZUltcGxlbWVudG9yfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5leHBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcbmV4cG9ydCB7UXVlc3Rpb25DaGVja2JveH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fY2hlY2tib3hcIjtcbmV4cG9ydCB7UXVlc3Rpb25Db21tZW50fSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9jb21tZW50XCI7XG5leHBvcnQge1F1ZXN0aW9uRHJvcGRvd259IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2Ryb3Bkb3duXCI7XG5leHBvcnQge1F1ZXN0aW9uRmlsZX0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fZmlsZVwiO1xuZXhwb3J0IHtRdWVzdGlvbkh0bWx9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2h0bWxcIjtcbmV4cG9ydCB7TWF0cml4Um93LCBRdWVzdGlvbk1hdHJpeH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4XCI7XG5leHBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd259IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XG5leHBvcnQge1xuICAgIFF1ZXN0aW9uTWF0cml4RHluYW1pY0ltcGxlbWVudG9yLFxuICAgIFF1ZXN0aW9uTWF0cml4RHluYW1pY1xufSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XG5leHBvcnQge1xuICAgIE11bHRpcGxlVGV4dEl0ZW0sIFF1ZXN0aW9uTXVsdGlwbGVUZXh0SW1wbGVtZW50b3IsXG4gICAgUXVlc3Rpb25NdWx0aXBsZVRleHRcbn0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fbXVsdGlwbGV0ZXh0XCI7XG5leHBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xuZXhwb3J0IHtRdWVzdGlvblJhdGluZ30gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmF0aW5nXCI7XG5leHBvcnQge1F1ZXN0aW9uVGV4dH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fdGV4dFwiO1xuZXhwb3J0IHtTdXJ2ZXlXaW5kb3d9IGZyb20gXCIuLi9rbm9ja291dC9rb1N1cnZleVdpbmRvd1wiO1xuZXhwb3J0IHtTdXJ2ZXlUZW1wbGF0ZVRleHR9IGZyb20gXCIuLi9rbm9ja291dC90ZW1wbGF0ZVRleHRcIjtcblxuZXhwb3J0IHtfX2V4dGVuZHN9IGZyb20gXCIuLi9leHRlbmRzXCI7XG5cbi8vVW5jb21tZW50IHRvIGluY2x1ZGUgdGhlIFwiZGF0ZVwiIHF1ZXN0aW9uIHR5cGUuXG4vL2V4cG9ydCB7UXVlc3Rpb25EYXRlfSBmcm9tIFwiLi4vcGx1Z2lucy9rbm9ja291dC9rb3F1ZXN0aW9uX2RhdGVcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9rby50cyIsImV4cG9ydCB7XG4gICAgQW5zd2VyQ291bnRWYWxpZGF0b3IsIEVtYWlsVmFsaWRhdG9yLCBOdW1lcmljVmFsaWRhdG9yLCBSZWdleFZhbGlkYXRvcixcbiAgICBTdXJ2ZXlWYWxpZGF0b3IsIFRleHRWYWxpZGF0b3IsIFZhbGlkYXRvclJlc3VsdCwgVmFsaWRhdG9yUnVubmVyXG59IGZyb20gXCIuLi8uLi92YWxpZGF0b3JcIjtcbmV4cG9ydCB7QmFzZSwgRXZlbnQsIEl0ZW1WYWx1ZSwgU3VydmV5RXJyb3IsIElTdXJ2ZXl9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5leHBvcnQge0Nob2ljZXNSZXN0ZnVsbH0gZnJvbSBcIi4uLy4uL2Nob2ljZXNSZXN0ZnVsbFwiO1xuZXhwb3J0IHtDb25kaXRpb24sIENvbmRpdGlvbk5vZGUsIENvbmRpdGlvblJ1bm5lcn0gZnJvbSBcIi4uLy4uL2NvbmRpdGlvbnNcIjtcbmV4cG9ydCB7Q29uZGl0aW9uc1BhcnNlcn0gZnJvbSBcIi4uLy4uL2NvbmRpdGlvbnNQYXJzZXJcIjtcbmV4cG9ydCB7Q3VzdG9tRXJyb3IsIEV4Y2VlZFNpemVFcnJvciwgUmVxdXJlTnVtZXJpY0Vycm9yfSBmcm9tIFwiLi4vLi4vZXJyb3JcIjtcbmV4cG9ydCB7XG4gICAgSnNvbkVycm9yLCBKc29uSW5jb3JyZWN0VHlwZUVycm9yLCBKc29uTWV0YWRhdGEsIEpzb25NZXRhZGF0YUNsYXNzLFxuICAgIEpzb25NaXNzaW5nVHlwZUVycm9yLCBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2UsIEpzb25PYmplY3QsIEpzb25PYmplY3RQcm9wZXJ0eSxcbiAgICBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yLCBKc29uVW5rbm93blByb3BlcnR5RXJyb3Jcbn0gZnJvbSBcIi4uLy4uL2pzb25vYmplY3RcIjtcbmV4cG9ydCB7XG4gICAgTWF0cml4RHJvcGRvd25DZWxsLCBNYXRyaXhEcm9wZG93bkNvbHVtbiwgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsXG4gICAgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZVxufSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XG5leHBvcnQge01hdHJpeERyb3Bkb3duUm93TW9kZWwsIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XG5leHBvcnQge01hdHJpeER5bmFtaWNSb3dNb2RlbCwgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XG5leHBvcnQge01hdHJpeFJvd01vZGVsLCBRdWVzdGlvbk1hdHJpeE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4XCI7XG5leHBvcnQge011bHRpcGxlVGV4dEl0ZW1Nb2RlbCwgUXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX211bHRpcGxldGV4dFwiO1xuZXhwb3J0IHtQYWdlTW9kZWwsIFF1ZXN0aW9uUm93TW9kZWx9IGZyb20gXCIuLi8uLi9wYWdlXCI7XG5leHBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25cIjtcbmV4cG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25iYXNlXCI7XG5leHBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlLCBRdWVzdGlvblNlbGVjdEJhc2V9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5leHBvcnQge1F1ZXN0aW9uQ2hlY2tib3hNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2NoZWNrYm94XCI7XG5leHBvcnQge1F1ZXN0aW9uQ29tbWVudE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fY29tbWVudFwiO1xuZXhwb3J0IHsgUXVlc3Rpb25Ecm9wZG93bk1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fZHJvcGRvd25cIjtcbmV4cG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5leHBvcnQge1F1ZXN0aW9uRmlsZU1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fZmlsZVwiO1xuZXhwb3J0IHtRdWVzdGlvbkh0bWxNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2h0bWxcIjtcbmV4cG9ydCB7UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9yYWRpb2dyb3VwXCI7XG5leHBvcnQge1F1ZXN0aW9uUmF0aW5nTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9yYXRpbmdcIjtcbmV4cG9ydCB7UXVlc3Rpb25UZXh0TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl90ZXh0XCI7XG5leHBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi4vLi4vc3VydmV5XCI7XG5leHBvcnQge1xuICAgIFN1cnZleVRyaWdnZXIsIFN1cnZleVRyaWdnZXJDb21wbGV0ZSwgU3VydmV5VHJpZ2dlclNldFZhbHVlLCBTdXJ2ZXlUcmlnZ2VyVmlzaWJsZSxcbiAgICBUcmlnZ2VyXG59IGZyb20gXCIuLi8uLi90cmlnZ2VyXCI7XG5leHBvcnQge1N1cnZleVdpbmRvd01vZGVsfSBmcm9tIFwiLi4vLi4vc3VydmV5V2luZG93XCI7XG5leHBvcnQge1RleHRQcmVQcm9jZXNzb3J9IGZyb20gXCIuLi8uLi90ZXh0UHJlUHJvY2Vzc29yXCI7XG5cbmV4cG9ydCB7ZHhTdXJ2ZXlTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZHhTdXJ2ZXlTZXJ2aWNlXCI7XG5leHBvcnQge3N1cnZleUxvY2FsaXphdGlvbiwgc3VydmV5U3RyaW5nc30gZnJvbSBcIi4uLy4uL3N1cnZleVN0cmluZ3NcIjtcblxuLy9VbmNvbW1lbnQgdG8gaW5jbHVkZSB0aGUgXCJkYXRlXCIgcXVlc3Rpb24gdHlwZS5cbi8vZXhwb3J0IHtkZWZhdWx0IGFzIFF1ZXN0aW9uRGF0ZU1vZGVsfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9xdWVzdGlvbl9kYXRlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvY2h1bmtzL21vZGVsLnRzIiwiaW1wb3J0IHtCYXNlLCBTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtDdXN0b21FcnJvciwgUmVxdXJlTnVtZXJpY0Vycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBhbnksIHB1YmxpYyBlcnJvcjogU3VydmV5RXJyb3IgPSBudWxsKSB7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VmFsaWRhdG9yIGV4dGVuZHMgQmFzZSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRFcnJvclRleHQobmFtZTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRleHQpIHJldHVybiB0aGlzLnRleHQ7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRFcnJvclRleHQobmFtZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0RXJyb3JUZXh0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRvck93bmVyIHtcbiAgICB2YWxpZGF0b3JzOiBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+O1xuICAgIHZhbHVlOiBhbnk7XG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJ1bm5lciB7XG4gICAgcHVibGljIHJ1bihvd25lcjogSVZhbGlkYXRvck93bmVyKTogU3VydmV5RXJyb3Ige1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG93bmVyLnZhbGlkYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3JSZXN1bHQgPSBvd25lci52YWxpZGF0b3JzW2ldLnZhbGlkYXRlKG93bmVyLnZhbHVlLCBvd25lci5nZXRWYWxpZGF0b3JUaXRsZSgpKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQuZXJyb3IpIHJldHVybiB2YWxpZGF0b3JSZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvclJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvd25lci52YWx1ZSA9IHZhbGlkYXRvclJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTnVtZXJpY1ZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1pblZhbHVlOiBudW1iZXIgPSBudWxsLCBwdWJsaWMgbWF4VmFsdWU6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibnVtZXJpY3ZhbGlkYXRvclwiOyB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICBpZiAoIXZhbHVlIHx8ICF0aGlzLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IFJlcXVyZU51bWVyaWNFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWluVmFsdWUgPiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heFZhbHVlICYmIHRoaXMubWF4VmFsdWUgPCByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgPyBudWxsIDogcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHZOYW1lID0gbmFtZSA/IG5hbWUgOiBcInZhbHVlXCI7XG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibnVtZXJpY01pbk1heFwiKVtcImZvcm1hdFwiXSh2TmFtZSwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibnVtZXJpY01pblwiKVtcImZvcm1hdFwiXSh2TmFtZSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNNYXhcIilbXCJmb3JtYXRcIl0odk5hbWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaXNOdW1iZXIodmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidGV4dHZhbGlkYXRvclwiOyB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICBpZiAodGhpcy5taW5MZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ0ZXh0TWluTGVuZ3RoXCIpW1wiZm9ybWF0XCJdKHRoaXMubWluTGVuZ3RoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb3VudFZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1pbkNvdW50OiBudW1iZXIgPSBudWxsLCBwdWJsaWMgbWF4Q291bnQ6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiYW5zd2VyY291bnR2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUuY29uc3RydWN0b3IgIT0gQXJyYXkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm1pbkNvdW50ICYmIGNvdW50IDwgdGhpcy5taW5Db3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtaW5TZWxlY3RFcnJvclwiKVtcImZvcm1hdFwiXSh0aGlzLm1pbkNvdW50KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXhDb3VudCAmJiBjb3VudCA+IHRoaXMubWF4Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWF4U2VsZWN0RXJyb3JcIilbXCJmb3JtYXRcIl0odGhpcy5tYXhDb3VudCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0RXJyb3JUZXh0KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdleFZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlZ2V4OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlZ2V4dmFsaWRhdG9yXCI7IH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIGlmICghdGhpcy5yZWdleCB8fCAhdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHRoaXMucmVnZXgpO1xuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdCh2YWx1ZSwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KG5hbWUpKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHJlID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZW1haWx2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJlLnRlc3QodmFsdWUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQodmFsdWUsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSkpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJpbnZhbGlkRW1haWxcIik7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic3VydmV5dmFsaWRhdG9yXCIsIFtcInRleHRcIl0pO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm51bWVyaWN2YWxpZGF0b3JcIiwgW1wibWluVmFsdWU6bnVtYmVyXCIsIFwibWF4VmFsdWU6bnVtYmVyXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTnVtZXJpY1ZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0ZXh0dmFsaWRhdG9yXCIsIFtcIm1pbkxlbmd0aDpudW1iZXJcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBUZXh0VmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImFuc3dlcmNvdW50dmFsaWRhdG9yXCIsIFtcIm1pbkNvdW50Om51bWJlclwiLCBcIm1heENvdW50Om51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEFuc3dlckNvdW50VmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInJlZ2V4dmFsaWRhdG9yXCIsIFtcInJlZ2V4XCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUmVnZXhWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZW1haWx2YWxpZGF0b3JcIiwgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBFbWFpbFZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9yLnRzIiwiZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX19leHRlbmRzO1xufVxuXG5leHBvcnRzLl9fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXh0ZW5kcy50cyIsImV4cG9ydCBpbnRlcmZhY2UgSGFzaFRhYmxlPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU3VydmV5RGF0YSB7XG4gICAgZ2V0VmFsdWUobmFtZTogc3RyaW5nKTogYW55O1xuICAgIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSk7XG4gICAgZ2V0Q29tbWVudChuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgc2V0Q29tbWVudChuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU3VydmV5IGV4dGVuZHMgSVN1cnZleURhdGEge1xuICAgIGN1cnJlbnRQYWdlOiBJUGFnZTtcbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKTtcbiAgICBxdWVzdGlvblZpc2liaWxpdHlDaGFuZ2VkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIG5ld1ZhbHVlOiBib29sZWFuKTtcbiAgICBxdWVzdGlvbkFkZGVkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIGluZGV4OiBudW1iZXIpO1xuICAgIHF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbjogSVF1ZXN0aW9uKTtcbiAgICB2YWxpZGF0ZVF1ZXN0aW9uKG5hbWU6IHN0cmluZyk6IFN1cnZleUVycm9yO1xuICAgIHByb2Nlc3NIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcm9jZXNzVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgaXNEZXNpZ25Nb2RlOiBib29sZWFuO1xuICAgIHJlcXVpcmVkVGV4dDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uU3RhcnRJbmRleDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uVGl0bGVUZW1wbGF0ZTogc3RyaW5nO1xuICAgIHN0b3JlT3RoZXJzQXNDb21tZW50OiBib29sZWFuO1xuICAgIHVwbG9hZEZpbGUobmFtZTogc3RyaW5nLCBmaWxlOiBGaWxlLCBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW4sIHVwbG9hZGluZ0NhbGxiYWNrOiAoc3RhdHVzOiBzdHJpbmcpID0+IGFueSk6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb25kaXRpb25SdW5uZXIge1xuICAgIHJ1bkNvbmRpdGlvbih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uIGV4dGVuZHMgSUNvbmRpdGlvblJ1bm5lciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgaGFzVGl0bGU6IGJvb2xlYW47XG4gICAgc2V0VmlzaWJsZUluZGV4KHZhbHVlOiBudW1iZXIpO1xuICAgIG9uU3VydmV5VmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpO1xuICAgIG9uU3VydmV5TG9hZCgpO1xuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCk6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElQYWdlIGV4dGVuZHMgSUNvbmRpdGlvblJ1bm5lciB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1WYWx1ZSB7XG4gICAgcHVibGljIHN0YXRpYyBTZXBhcmF0b3IgPSAnfCc7XG4gICAgcHVibGljIHN0YXRpYyBzZXREYXRhKGl0ZW1zOiBBcnJheTxJdGVtVmFsdWU+LCB2YWx1ZXM6IEFycmF5PGFueT4pIHtcbiAgICAgICAgaXRlbXMubGVuZ3RoID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IEl0ZW1WYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbHVlLnZhbHVlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhjZXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWx1ZS5nZXRUeXBlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUuZ2V0VHlwZSgpID09ICdpdGVtdmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLml0ZW1WYWx1ZSA9IHZhbHVlLml0ZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pdGVtVGV4dCA9IHZhbHVlLml0ZW1UZXh0O1xuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBJdGVtVmFsdWUuaXRlbVZhbHVlUHJvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSXRlbVZhbHVlLmNvcHlBdHRyaWJ1dGVzKHZhbHVlLCBpdGVtLCBleGNlcHRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YShpdGVtczogQXJyYXk8SXRlbVZhbHVlPik6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc1RleHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IHZhbHVlOiBpdGVtLnZhbHVlLCB0ZXh0OiBpdGVtLnRleHQgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SXRlbUJ5VmFsdWUoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4sIHZhbDogYW55KTogSXRlbVZhbHVlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS52YWx1ZSA9PSB2YWwpIHJldHVybiBpdGVtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlbVZhbHVlUHJvcCA9IFsgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgXCJoYXNUZXh0XCJdO1xuICAgIHByaXZhdGUgc3RhdGljIGNvcHlBdHRyaWJ1dGVzKHNyYzogYW55LCBkZXN0OiBhbnksIGV4Y2VwdG9uczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBzcmNba2V5XSA9PSAnZnVuY3Rpb24nKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoZXhjZXB0b25zICYmIGV4Y2VwdG9ucy5pbmRleE9mKGtleSkgPiAtMSkgY29udGludWU7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGl0ZW1WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgaXRlbVRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0ZXh0OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiaXRlbXZhbHVlXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLml0ZW1WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLml0ZW1WYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBzdHI6IHN0cmluZyA9IHRoaXMuaXRlbVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBpbmRleCA9IHN0ci5pbmRleE9mKEl0ZW1WYWx1ZS5TZXBhcmF0b3IpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtVmFsdWUgPSBzdHIuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gc3RyLnNsaWNlKGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNUZXh0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pdGVtVGV4dCA/IHRydWUgOiBmYWxzZTsgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5oYXNUZXh0KSByZXR1cm4gdGhpcy5pdGVtVGV4dDtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQobmV3VGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbVRleHQgPSBuZXdUZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QnKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5RXJyb3Ige1xuICAgIHB1YmxpYyBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTdXJ2ZXlQYWdlSWQgPSBcInNxX3BhZ2VcIjtcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlFbGVtZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIFNjcm9sbEVsZW1lbnRUb1RvcChlbGVtZW50SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRJZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgICAgICBpZiAoIWVsIHx8ICFlbC5zY3JvbGxJbnRvVmlldykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZWxlbVRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgaWYgKGVsZW1Ub3AgPCAwKSAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgcmV0dXJuIGVsZW1Ub3AgPCAwO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEZvY3VzRWxlbWVudChlbGVtZW50SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRJZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnQ8VCBleHRlbmRzIEZ1bmN0aW9uLCBPcHRpb25zPiAge1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBBcnJheTxUPjtcbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNhbGxiYWNrcyA9PSBudWxsIHx8IHRoaXMuY2FsbGJhY2tzLmxlbmd0aCA9PSAwOyB9XG4gICAgcHVibGljIGZpcmUoc2VuZGVyOiBhbnksIG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzID09IG51bGwpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsUmVzdWx0ID0gdGhpcy5jYWxsYmFja3NbaV0oc2VuZGVyLCBvcHRpb25zKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGQoZnVuYzogVCkge1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQXJyYXk8VD4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGZ1bmMpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlKGZ1bmM6IFQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jYWxsYmFja3MuaW5kZXhPZihmdW5jLCAwKTtcbiAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFzZS50cyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tICcuL3N1cnZleVN0cmluZ3MnO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5zd2VyUmVxdWlyZWRFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicmVxdWlyZWRFcnJvclwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVxdXJlTnVtZXJpY0Vycm9yIGV4dGVuZHMgU3VydmV5RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNFcnJvclwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXhjZWVkU2l6ZUVycm9yIGV4dGVuZHMgU3VydmV5RXJyb3Ige1xuICAgIHByaXZhdGUgbWF4U2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1heFNpemU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcImV4Y2VlZE1heFNpemVcIilbXCJmb3JtYXRcIl0odGhpcy5nZXRUZXh0U2l6ZSgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0U2l6ZSgpIHtcbiAgICAgICAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICAgICAgICB2YXIgZml4ZWQgPSBbMCwgMCwgMiwgMywgM107XG4gICAgICAgIGlmICh0aGlzLm1heFNpemUgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xuICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2codGhpcy5tYXhTaXplKSAvIE1hdGgubG9nKDEwMjQpKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tYXhTaXplIC8gTWF0aC5wb3coMTAyNCwgaSk7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKGZpeGVkW2ldKSArICcgJyArIHNpemVzW2ldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbUVycm9yIGV4dGVuZHMgU3VydmV5RXJyb3Ige1xuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXJyb3IudHMiLCJleHBvcnQgdmFyIHN1cnZleUxvY2FsaXphdGlvbiA9IHtcbiAgICBjdXJyZW50TG9jYWxlOiBcIlwiLFxuICAgIGxvY2FsZXM6IHt9LFxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV0gOiBzdXJ2ZXlTdHJpbmdzO1xuICAgICAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSBzdXJ2ZXlTdHJpbmdzO1xuICAgICAgICByZXR1cm4gbG9jW3N0ck5hbWVdO1xuICAgIH0sXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zb3J0KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IHtcbiAgICBwYWdlUHJldlRleHQ6IFwiUHJldmlvdXNcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiTmV4dFwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJDb21wbGV0ZVwiLFxuICAgIG90aGVySXRlbVRleHQ6IFwiT3RoZXIgKGRlc2NyaWJlKVwiLFxuICAgIHByb2dyZXNzVGV4dDogXCJQYWdlIHswfSBvZiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJUaGVyZSBpcyBubyBhbnkgdmlzaWJsZSBwYWdlIG9yIHZpc2libGUgcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIlRoYW5rIFlvdSBmb3IgQ29tcGxldGluZyB0aGUgU3VydmV5IVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiU3VydmV5IGlzIGxvYWRpbmcgZnJvbSB0aGUgc2VydmVyLi4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiQ2hvb3NlLi4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCJQbGVhc2UgYW5zd2VyIHRoZSBxdWVzdGlvbi5cIixcbiAgICByZXF1aXJlZEluQWxsUm93c0Vycm9yOiBcIlBsZWFzZSBhbnN3ZXIgcXVlc3Rpb25zIGluIGFsbCByb3dzLlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgbnVtZXJpYy5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gc3ltYm9scy5cIixcbiAgICBtaW5Sb3dDb3VudEVycm9yOiBcIlBsZWFzZSBmaWxsIGF0IGxlYXN0IHswfSByb3dzLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3QgezB9IHZhcmlhbnRzLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIlBsZWFzZSBzZWxlY3Qgbm90IG1vcmUgdGhhbiB7MH0gdmFyaWFudHMuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCJUaGUgJ3swfScgc2hvdWxkIGJlIGVxdWFsIG9yIG1vcmUgdGhhbiB7MX0gYW5kIGVxdWFsIG9yIGxlc3MgdGhhbiB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIlRoZSAnezB9JyBzaG91bGQgYmUgZXF1YWwgb3IgbW9yZSB0aGFuIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBsZXNzIHRoYW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGUtbWFpbC5cIixcbiAgICB1cmxSZXF1ZXN0RXJyb3I6IFwiVGhlIHJlcXVlc3QgcmV0dXJuIGVycm9yICd7MH0nLiB7MX1cIixcbiAgICB1cmxHZXRDaG9pY2VzRXJyb3I6IFwiVGhlIHJlcXVlc3QgcmV0dXJucyBlbXB0eSBkYXRhIG9yIHRoZSAncGF0aCcgcHJvcGVydHkgaXMgaW5jb3JyZWN0XCIsXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJUaGUgZmlsZSBzaXplIHNob3VsZCBub3QgZXhjZWVkIHswfS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiUGxlYXNlIGVudGVyIHRoZSBvdGhlcnMgdmFsdWUuXCIsXG4gICAgdXBsb2FkaW5nRmlsZTogXCJZb3VyIGZpbGUgaXMgdXBsb2FkaW5nLiBQbGVhc2Ugd2FpdCBzZXZlcmFsIHNlY29uZHMgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgICBhZGRSb3c6IFwiQWRkIFJvd1wiLFxuICAgIHJlbW92ZVJvdzogXCJSZW1vdmVcIlxufTtcbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBzdXJ2ZXlTdHJpbmdzO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGVbXCJmb3JtYXRcIl0pIHtcbiAgICBTdHJpbmcucHJvdG90eXBlW1wiZm9ybWF0XCJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgveyhcXGQrKX0vZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJnc1tudW1iZXJdICE9ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBhcmdzW251bWJlcl1cbiAgICAgICAgICAgICAgICA6IG1hdGNoXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlTdHJpbmdzLnRzIiwiaW1wb3J0IHtIYXNoVGFibGV9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBKc29uT2JqZWN0UHJvcGVydHkge1xuICAgIHByaXZhdGUgdHlwZVZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgY2hvaWNlc1ZhbHVlOiBBcnJheTxhbnk+ID0gbnVsbDtcbiAgICBwcml2YXRlIGNob2ljZXNmdW5jOiAoKSA9PiBBcnJheTxhbnk+ID0gbnVsbDtcbiAgICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjbGFzc05hbWVQYXJ0OiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9uR2V0VmFsdWU6IChvYmo6IGFueSkgPT4gYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb25TZXRWYWx1ZTogKG9iajogYW55LCB2YWx1ZTogYW55LCBqc29uQ29udjogSnNvbk9iamVjdCkgPT4gYW55XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50eXBlVmFsdWUgPyB0aGlzLnR5cGVWYWx1ZSA6IFwic3RyaW5nXCI7IH1cbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykgeyB0aGlzLnR5cGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBoYXNUb1VzZUdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5vbkdldFZhbHVlOyB9XG4gICAgcHVibGljIGlzRGVmYXVsdFZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRlZmF1bHRWYWx1ZSkgPyAodGhpcy5kZWZhdWx0VmFsdWUgPT0gdmFsdWUpIDogISh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZShvYmo6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLm9uR2V0VmFsdWUpIHJldHVybiB0aGlzLm9uR2V0VmFsdWUob2JqKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzVG9Vc2VTZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMub25TZXRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShvYmo6IGFueSwgdmFsdWU6IGFueSwganNvbkNvbnY6IEpzb25PYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMub25TZXRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vblNldFZhbHVlKG9iaiwgdmFsdWUsIGpzb25Db252KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0T2JqVHlwZShvYmpUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzTmFtZVBhcnQpIHJldHVybiBvYmpUeXBlO1xuICAgICAgICByZXR1cm4gb2JqVHlwZS5yZXBsYWNlKHRoaXMuY2xhc3NOYW1lUGFydCwgXCJcIik7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoY2xhc3NOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2xhc3NOYW1lUGFydCAmJiBjbGFzc05hbWUuaW5kZXhPZih0aGlzLmNsYXNzTmFtZVBhcnQpIDwgMCkgPyBjbGFzc05hbWUgKyB0aGlzLmNsYXNzTmFtZVBhcnQgOiBjbGFzc05hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlc1ZhbHVlICE9IG51bGwpIHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlc2Z1bmMgIT0gbnVsbCkgcmV0dXJuIHRoaXMuY2hvaWNlc2Z1bmMoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDaG9pY2VzKHZhbHVlOiBBcnJheTxhbnk+LCB2YWx1ZUZ1bmM6ICgpID0+IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaG9pY2VzZnVuYyA9IHZhbHVlRnVuYztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbk1ldGFkYXRhQ2xhc3Mge1xuICAgIHN0YXRpYyByZXF1aXJlZFN5bWJvbCA9ICchJztcbiAgICBzdGF0aWMgdHlwZVN5bWJvbCA9ICc6JztcbiAgICBwcm9wZXJ0aWVzOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+ID0gbnVsbDtcbiAgICByZXF1aXJlZFByb3BlcnRpZXM6IEFycmF5PHN0cmluZz4gPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IEFycmF5PGFueT4sIHB1YmxpYyBjcmVhdG9yOiAoKSA9PiBhbnkgPSBudWxsLCBwdWJsaWMgcGFyZW50TmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGZpbmQobmFtZTogc3RyaW5nKTogSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlUHJvcGVydHkocHJvcEluZm86IGFueSk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB0eXBlb2YgcHJvcEluZm8gPT09IFwic3RyaW5nXCIgPyBwcm9wSW5mbyA6IHByb3BJbmZvLm5hbWU7XG4gICAgICAgIGlmICghcHJvcGVydHlOYW1lKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9wZXJ0eVR5cGUgPSBudWxsO1xuICAgICAgICB2YXIgdHlwZUluZGV4ID0gcHJvcGVydHlOYW1lLmluZGV4T2YoSnNvbk1ldGFkYXRhQ2xhc3MudHlwZVN5bWJvbCk7XG4gICAgICAgIGlmICh0eXBlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cmluZyh0eXBlSW5kZXggKyAxKTtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcoMCwgdHlwZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLmdldFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB2YXIgcHJvcCA9IG5ldyBKc29uT2JqZWN0UHJvcGVydHkocHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZSkge1xuICAgICAgICAgICAgcHJvcC50eXBlID0gcHJvcGVydHlUeXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcEluZm8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wSW5mby50eXBlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC50eXBlID0gcHJvcEluZm8udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgcHJvcC5kZWZhdWx0VmFsdWUgPSBwcm9wSW5mby5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3AubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uY2hvaWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBjaG9pY2VzRnVuYyA9IHR5cGVvZiBwcm9wSW5mby5jaG9pY2VzID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wSW5mby5jaG9pY2VzIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgY2hvaWNlc1ZhbHVlID0gdHlwZW9mIHByb3BJbmZvLmNob2ljZXMgIT09IFwiZnVuY3Rpb25cIiA/IHByb3BJbmZvLmNob2ljZXMgOiBudWxsO1xuICAgICAgICAgICAgICAgIHByb3Auc2V0Q2hvaWNlcyhjaG9pY2VzVmFsdWUsIGNob2ljZXNGdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5vbkdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5vbkdldFZhbHVlID0gcHJvcEluZm8ub25HZXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5vblNldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5vblNldFZhbHVlID0gcHJvcEluZm8ub25TZXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wLmNsYXNzTmFtZSA9IHByb3BJbmZvLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5iYXNlQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5iYXNlQ2xhc3NOYW1lID0gcHJvcEluZm8uYmFzZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5jbGFzc05hbWVQYXJ0KSB7XG4gICAgICAgICAgICAgICAgcHJvcC5jbGFzc05hbWVQYXJ0ID0gcHJvcEluZm8uY2xhc3NOYW1lUGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lLmxlbmd0aCA9PSAwIHx8IHByb3BlcnR5TmFtZVswXSAhPSBKc29uTWV0YWRhdGFDbGFzcy5yZXF1aXJlZFN5bWJvbCkgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lLnNsaWNlKDEpO1xuICAgICAgICB0aGlzLm1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuICAgIHByaXZhdGUgbWFrZVByb3BlcnR5UmVxdWlyZWQocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlcXVpcmVkUHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZFByb3BlcnRpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWlyZWRQcm9wZXJ0aWVzLnB1c2gocHJvcGVydHlOYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbk1ldGFkYXRhIHtcbiAgICBwcml2YXRlIGNsYXNzZXM6IEhhc2hUYWJsZTxKc29uTWV0YWRhdGFDbGFzcz4gPSB7fTtcbiAgICBwcml2YXRlIGNoaWxkcmVuQ2xhc3NlczogSGFzaFRhYmxlPEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPj4gPSB7fTtcbiAgICBwcml2YXRlIGNsYXNzUHJvcGVydGllczogSGFzaFRhYmxlPEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4+ID0ge307XG4gICAgcHJpdmF0ZSBjbGFzc1JlcXVpcmVkUHJvcGVydGllczogSGFzaFRhYmxlPEFycmF5PHN0cmluZz4+ID0ge307XG4gICAgcHVibGljIGFkZENsYXNzKG5hbWU6IHN0cmluZywgcHJvcGVydGllczogQXJyYXk8YW55PiwgY3JlYXRvcjogKCkgPT4gYW55ID0gbnVsbCwgcGFyZW50TmFtZTogc3RyaW5nID0gbnVsbCk6IEpzb25NZXRhZGF0YUNsYXNzIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSBuZXcgSnNvbk1ldGFkYXRhQ2xhc3MobmFtZSwgcHJvcGVydGllcywgY3JlYXRvciwgcGFyZW50TmFtZSk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1tuYW1lXSA9IG1ldGFEYXRhQ2xhc3M7XG4gICAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuQ2xhc3Nlc1twYXJlbnROYW1lXTtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuQ2xhc3Nlc1twYXJlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV0ucHVzaChtZXRhRGF0YUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YURhdGFDbGFzcztcbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlQ2xhc3NDcmVhdG9yZShuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICgpID0+IGFueSkge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcykge1xuICAgICAgICAgICAgbWV0YURhdGFDbGFzcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydGllcyhuYW1lOiBzdHJpbmcpOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmNsYXNzUHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbmV3IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4oKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFByb3BlcnRpZXMobmFtZSwgcHJvcGVydGllcyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzUHJvcGVydGllc1tuYW1lXSA9IHByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVDbGFzcyhuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbWV0YURhdGFDbGFzcy5jcmVhdG9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDaGlsZHJlbkNsYXNzZXMobmFtZTogc3RyaW5nLCBjYW5CZUNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdGhpcy5maWxsQ2hpbGRyZW5DbGFzc2VzKG5hbWUsIGNhbkJlQ3JlYXRlZCwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldFJlcXVpcmVkUHJvcGVydGllcyhuYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmNsYXNzUmVxdWlyZWRQcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgdGhpcy5maWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG5hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc1JlcXVpcmVkUHJvcGVydGllc1tuYW1lXSA9IHByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQcm9wZXJ0eShjbGFzc05hbWU6IHN0cmluZywgcHJvcGVydHlJbmZvOiBhbnkpIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybjtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbWV0YURhdGFDbGFzcy5jcmVhdGVQcm9wZXJ0eShwcm9wZXJ0eUluZm8pO1xuICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvcGVydHlUb0NsYXNzKG1ldGFEYXRhQ2xhc3MsIHByb3BlcnR5KTtcbiAgICAgICAgICAgIHRoaXMuZW1wdHlDbGFzc1Byb3BlcnRpZXNIYXNoKG1ldGFEYXRhQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVQcm9wZXJ0eShjbGFzc05hbWU6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbWV0YURhdGFDbGFzcy5maW5kKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcm9wZXJ0eUZyb21DbGFzcyhtZXRhRGF0YUNsYXNzLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB0aGlzLmVtcHR5Q2xhc3NQcm9wZXJ0aWVzSGFzaChtZXRhRGF0YUNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZFByb3BlcnR5VG9DbGFzcyhtZXRhRGF0YUNsYXNzOiBKc29uTWV0YWRhdGFDbGFzcywgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5maW5kKHByb3BlcnR5Lm5hbWUpICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgbWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlbW92ZVByb3BlcnR5RnJvbUNsYXNzKG1ldGFEYXRhQ2xhc3M6IEpzb25NZXRhZGF0YUNsYXNzLCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHZhciBpbmRleCA9IG1ldGFEYXRhQ2xhc3MucHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICBtZXRhRGF0YUNsYXNzLnByb3BlcnRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpbmRleCA9IG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkubmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBlbXB0eUNsYXNzUHJvcGVydGllc0hhc2gobWV0YURhdGFDbGFzczogSnNvbk1ldGFkYXRhQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5jbGFzc1Byb3BlcnRpZXNbbWV0YURhdGFDbGFzcy5uYW1lXSA9IG51bGw7XG4gICAgICAgIHZhciBjaGlsZENsYXNzZXMgPSB0aGlzLmdldENoaWxkcmVuQ2xhc3NlcyhtZXRhRGF0YUNsYXNzLm5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jbGFzc1Byb3BlcnRpZXNbY2hpbGRDbGFzc2VzW2ldLm5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbGxDaGlsZHJlbkNsYXNzZXMobmFtZTogc3RyaW5nLCBjYW5CZUNyZWF0ZWQ6IGJvb2xlYW4sIHJlc3VsdDogQXJyYXk8SnNvbk1ldGFkYXRhQ2xhc3M+KSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5DbGFzc2VzW25hbWVdO1xuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY2FuQmVDcmVhdGVkIHx8IGNoaWxkcmVuW2ldLmNyZWF0b3IpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGxDaGlsZHJlbkNsYXNzZXMoY2hpbGRyZW5baV0ubmFtZSwgY2FuQmVDcmVhdGVkLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZmluZENsYXNzKG5hbWU6IHN0cmluZyk6IEpzb25NZXRhZGF0YUNsYXNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlc1tuYW1lXTtcbiAgICB9XG4gICAgcHJpdmF0ZSBmaWxsUHJvcGVydGllcyhuYW1lOiBzdHJpbmcsIGxpc3Q6IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4pIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhuYW1lKTtcbiAgICAgICAgaWYgKCFtZXRhRGF0YUNsYXNzKSByZXR1cm47XG4gICAgICAgIGlmIChtZXRhRGF0YUNsYXNzLnBhcmVudE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFByb3BlcnRpZXMobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lLCBsaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFEYXRhQ2xhc3MucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9wZXJ0eUNvcmUobWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzW2ldLCBsaXN0LCBsaXN0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQcm9wZXJ0eUNvcmUocHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSwgbGlzdDogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PiwgZW5kSW5kZXg6IG51bWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXS5uYW1lID09IHByb3BlcnR5Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgbGlzdC5wdXNoKHByb3BlcnR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdFtpbmRleF0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbGxSZXF1aXJlZFByb3BlcnRpZXMobmFtZTogc3RyaW5nLCBsaXN0OiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MobmFtZSk7XG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuO1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5yZXF1aXJlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGxpc3QsIG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxSZXF1aXJlZFByb3BlcnRpZXMobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lLCBsaXN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uRXJyb3Ige1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgYXQ6IE51bWJlciA9IC0xO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB9XG4gICAgcHVibGljIGdldEZ1bGxEZXNjcmlwdGlvbigpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZSArICh0aGlzLmRlc2NyaXB0aW9uID8gXCJcXG5cIiArIHRoaXMuZGVzY3JpcHRpb24gOiBcIlwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvblVua25vd25Qcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcInVua25vd25wcm9wZXJ0eVwiLCBcIlRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgaW4gY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInIGlzIHVua25vd24uXCIpO1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgYXJlOiBcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkgdGhpcy5kZXNjcmlwdGlvbiArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBwcm9wZXJ0aWVzW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uICs9ICcuJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2UgZXh0ZW5kcyBKc29uRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRoZSBmb2xsb3dpbmcgdHlwZXMgYXJlIGF2YWlsYWJsZTogXCI7XG4gICAgICAgIHZhciB0eXBlcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKGJhc2VDbGFzc05hbWUsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHRoaXMuZGVzY3JpcHRpb24gKz0gXCIsIFwiO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBcIidcIiArIHR5cGVzW2ldLm5hbWUgKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uICs9IFwiLlwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uTWlzc2luZ1R5cGVFcnJvciBleHRlbmRzIEpzb25NaXNzaW5nVHlwZUVycm9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGJhc2VDbGFzc05hbWUsIFwibWlzc2luZ3R5cGVwcm9wZXJ0eVwiLCBcIlRoZSBwcm9wZXJ0eSB0eXBlIGlzIG1pc3NpbmcgaW4gdGhlIG9iamVjdC4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHByb3BlcnR5OiAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uSW5jb3JyZWN0VHlwZUVycm9yIGV4dGVuZHMgSnNvbk1pc3NpbmdUeXBlRXJyb3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYmFzZUNsYXNzTmFtZSwgXCJpbmNvcnJlY3R0eXBlcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgdHlwZSBpcyBpbmNvcnJlY3QgaW4gdGhlIG9iamVjdC4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHByb3BlcnR5OiAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcInJlcXVpcmVkcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGlzIHJlcXVpcmVkIGluIGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJy5cIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSnNvbk9iamVjdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVByb3BlcnR5TmFtZSA9IFwidHlwZVwiO1xuICAgIHByaXZhdGUgc3RhdGljIHBvc2l0aW9uUHJvcGVydHlOYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhRGF0YVZhbHVlID0gbmV3IEpzb25NZXRhZGF0YSgpO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1ldGFEYXRhKCkgeyByZXR1cm4gSnNvbk9iamVjdC5tZXRhRGF0YVZhbHVlOyB9XG4gICAgcHVibGljIGVycm9ycyA9IG5ldyBBcnJheTxKc29uRXJyb3I+KCk7XG4gICAgcHVibGljIHRvSnNvbk9iamVjdChvYmo6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvSnNvbk9iamVjdENvcmUob2JqLCBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIHRvT2JqZWN0KGpzb25PYmo6IGFueSwgb2JqOiBhbnkpIHtcbiAgICAgICAgaWYgKCFqc29uT2JqKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbDtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKG9iai5nZXRUeXBlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbk9iaikge1xuICAgICAgICAgICAgaWYgKGtleSA9PSBKc29uT2JqZWN0LnR5cGVQcm9wZXJ0eU5hbWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGtleSA9PSBKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLmZpbmRQcm9wZXJ0eShwcm9wZXJ0aWVzLCBrZXkpO1xuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IobmV3IEpzb25Vbmtub3duUHJvcGVydHlFcnJvcihrZXkudG9TdHJpbmcoKSwgb2JqLmdldFR5cGUoKSksIGpzb25PYmopO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZVRvT2JqKGpzb25PYmpba2V5XSwgb2JqLCBrZXksIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdG9Kc29uT2JqZWN0Q29yZShvYmo6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSk6IGFueSB7XG4gICAgICAgIGlmICghb2JqLmdldFR5cGUpIHJldHVybiBvYmo7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9IG51bGwgJiYgKCFwcm9wZXJ0eS5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHRbSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lXSA9IHByb3BlcnR5LmdldE9ialR5cGUob2JqLmdldFR5cGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVG9Kc29uKG9iaiwgcmVzdWx0LCBwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0pzb24ob2JqOiBhbnksIHJlc3VsdDogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5LmdldFZhbHVlKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9ialtwcm9wZXJ0eS5uYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuaXNEZWZhdWx0VmFsdWUodmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBhcnJWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclZhbHVlLnB1c2godGhpcy50b0pzb25PYmplY3RDb3JlKHZhbHVlW2ldLCBwcm9wZXJ0eSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBhcnJWYWx1ZS5sZW5ndGggPiAwID8gYXJyVmFsdWUgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnRvSnNvbk9iamVjdENvcmUodmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5Lm5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9PYmoodmFsdWU6IGFueSwgb2JqOiBhbnksIGtleTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5Lmhhc1RvVXNlU2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5LnNldFZhbHVlKG9iaiwgdmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVUb0FycmF5KHZhbHVlLCBvYmosIGtleSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdPYmogPSB0aGlzLmNyZWF0ZU5ld09iaih2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICBpZiAobmV3T2JqLm5ld09iaikge1xuICAgICAgICAgICAgdGhpcy50b09iamVjdCh2YWx1ZSwgbmV3T2JqLm5ld09iaik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld09iai5uZXdPYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuZXdPYmouZXJyb3IpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlQXJyYXkodmFsdWU6IGFueSk6IGJvb2xlYW4geyByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IudG9TdHJpbmcoKS5pbmRleE9mKFwiQXJyYXlcIikgPiAtMTsgfVxuICAgIHByaXZhdGUgY3JlYXRlTmV3T2JqKHZhbHVlOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyBuZXdPYmo6IG51bGwsIGVycm9yOiBudWxsIH07XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSB2YWx1ZVtKc29uT2JqZWN0LnR5cGVQcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSAmJiBwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5LmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvcGVydHkuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BlcnR5LmdldENsYXNzTmFtZShjbGFzc05hbWUpO1xuICAgICAgICByZXN1bHQubmV3T2JqID0gKGNsYXNzTmFtZSkgPyBKc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGNsYXNzTmFtZSkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZXJyb3IgPSB0aGlzLmNoZWNrTmV3T2JqZWN0T25FcnJvcnMocmVzdWx0Lm5ld09iaiwgdmFsdWUsIHByb3BlcnR5LCBjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrTmV3T2JqZWN0T25FcnJvcnMobmV3T2JqOiBhbnksIHZhbHVlOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHksIGNsYXNzTmFtZTogc3RyaW5nKTogSnNvbkVycm9yIHtcbiAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVkUHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UmVxdWlyZWRQcm9wZXJ0aWVzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVxdWlyZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXF1aXJlZFByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZVtyZXF1aXJlZFByb3BlcnRpZXNbaV1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yKHJlcXVpcmVkUHJvcGVydGllc1tpXSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmJhc2VDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uTWlzc2luZ1R5cGVFcnJvcihwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uSW5jb3JyZWN0VHlwZUVycm9yKHByb3BlcnR5Lm5hbWUsIHByb3BlcnR5LmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IoZXJyb3IsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkTmV3RXJyb3IoZXJyb3I6IEpzb25FcnJvciwganNvbk9iajogYW55KSB7XG4gICAgICAgIGlmIChqc29uT2JqICYmIGpzb25PYmpbSnNvbk9iamVjdC5wb3NpdGlvblByb3BlcnR5TmFtZV0pIHtcbiAgICAgICAgICAgIGVycm9yLmF0ID0ganNvbk9ialtKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lXS5zdGFydDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZVRvQXJyYXkodmFsdWU6IEFycmF5PGFueT4sIG9iajogYW55LCBrZXk6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWx1ZUFycmF5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNyZWF0ZU5ld09iaih2YWx1ZVtpXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLm5ld09iaikge1xuICAgICAgICAgICAgICAgIG9ialtrZXldLnB1c2gobmV3VmFsdWUubmV3T2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvT2JqZWN0KHZhbHVlW2ldLCBuZXdWYWx1ZS5uZXdPYmopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldLnB1c2godmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbmRQcm9wZXJ0eShwcm9wZXJ0aWVzOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+LCBrZXk6IGFueSk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBrZXkpIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanNvbm9iamVjdC50cyIsImltcG9ydCB7QmFzZSwgSXRlbVZhbHVlLCBTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcblxuZXhwb3J0IGNsYXNzIENob2ljZXNSZXN0ZnVsbCBleHRlbmRzIEJhc2Uge1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHBhdGg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHZhbHVlTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgdGl0bGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBnZXRSZXN1bHRDYWxsYmFjazogKGl0ZW1zOiBBcnJheTxJdGVtVmFsdWU+KSA9PiB2b2lkO1xuICAgIHB1YmxpYyBlcnJvcjogU3VydmV5RXJyb3IgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgcnVuKCkge1xuICAgICAgICBpZiAoIXRoaXMudXJsIHx8ICF0aGlzLmdldFJlc3VsdENhbGxiYWNrKSByZXR1cm47XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLnVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImNob2ljZXNCeVVybFwiOyB9XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMudXJsICYmICF0aGlzLnBhdGggJiYgIXRoaXMudmFsdWVOYW1lICYmICF0aGlzLnRpdGxlTmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldERhdGEoanNvbjogYW55KSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKGpzb24udXJsKSB0aGlzLnVybCA9IGpzb24udXJsO1xuICAgICAgICBpZiAoanNvbi5wYXRoKSB0aGlzLnBhdGggPSBqc29uLnBhdGg7XG4gICAgICAgIGlmIChqc29uLnZhbHVlTmFtZSkgdGhpcy52YWx1ZU5hbWUgPSBqc29uLnZhbHVlTmFtZTtcbiAgICAgICAgaWYgKGpzb24udGl0bGVOYW1lKSB0aGlzLnRpdGxlTmFtZSA9IGpzb24udGl0bGVOYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudXJsID0gXCJcIjtcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZU5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnRpdGxlTmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWQocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0UmVzdWx0QWZ0ZXJQYXRoKHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0W1wibGVuZ3RoXCJdKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtVmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaXRlbVZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFRpdGxlKGl0ZW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgSXRlbVZhbHVlKHZhbHVlLCB0aXRsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidXJsR2V0Q2hvaWNlc0Vycm9yXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFJlc3VsdENhbGxiYWNrKGl0ZW1zKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkVycm9yKHN0YXR1czogc3RyaW5nLCByZXNwb25zZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInVybFJlcXVlc3RFcnJvclwiKVtcImZvcm1hdFwiXShzdGF0dXMsIHJlc3BvbnNlKSk7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0Q2FsbGJhY2soW10pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFJlc3VsdEFmdGVyUGF0aChyZXN1bHQ6IGFueSkge1xuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgaWYgKCF0aGlzLnBhdGgpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHZhciBwYXRoZXMgPSB0aGlzLmdldFBhdGhlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3BhdGhlc1tpXV07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQYXRoZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciBwYXRoZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucGF0aC5pbmRleE9mKCc7JykgPiAtMSkge1xuICAgICAgICAgICAgcGF0aGVzID0gdGhpcy5wYXRoLnNwbGl0KCc7Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoZXMgPSB0aGlzLnBhdGguc3BsaXQoJywnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aGVzLmxlbmd0aCA9PSAwKSBwYXRoZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgICAgICByZXR1cm4gcGF0aGVzO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlTmFtZSkgcmV0dXJuIGl0ZW1bdGhpcy52YWx1ZU5hbWVdO1xuICAgICAgICB2YXIgbGVuID0gT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoO1xuICAgICAgICBpZiAobGVuIDwgMSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBpdGVtW09iamVjdC5rZXlzKGl0ZW0pWzBdXTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUaXRsZShpdGVtOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMudGl0bGVOYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy50aXRsZU5hbWVdO1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjaG9pY2VzQnlVcmxcIiwgW1widXJsXCIsIFwicGF0aFwiLCBcInZhbHVlTmFtZVwiLCBcInRpdGxlTmFtZVwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IENob2ljZXNSZXN0ZnVsbCgpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hvaWNlc1Jlc3RmdWxsLnRzIiwiaW1wb3J0IHtIYXNoVGFibGV9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge0NvbmRpdGlvbnNQYXJzZXJ9IGZyb20gJy4vY29uZGl0aW9uc1BhcnNlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb24ge1xuICAgIHN0YXRpYyBvcGVyYXRvcnNWYWx1ZTogSGFzaFRhYmxlPEZ1bmN0aW9uPiA9IG51bGw7XG4gICAgc3RhdGljIGdldCBvcGVyYXRvcnMoKSB7XG4gICAgICAgIGlmIChDb25kaXRpb24ub3BlcmF0b3JzVmFsdWUgIT0gbnVsbCkgcmV0dXJuIENvbmRpdGlvbi5vcGVyYXRvcnNWYWx1ZTtcbiAgICAgICAgQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlID0ge1xuICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gIWxlZnQ7IH0sXG4gICAgICAgICAgICBub3RlbXB0eTogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiAhKCFsZWZ0KTsgfSxcbiAgICAgICAgICAgIGVxdWFsOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPT0gcmlnaHQ7IH0sXG4gICAgICAgICAgICBub3RlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ICE9IHJpZ2h0OyB9LFxuICAgICAgICAgICAgY29udGFpbnM6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCAmJiBsZWZ0W1wiaW5kZXhPZlwiXSAmJiBsZWZ0LmluZGV4T2YocmlnaHQpID4gLTE7IH0sXG4gICAgICAgICAgICBub3Rjb250YWluczogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiAhbGVmdCB8fCAhbGVmdFtcImluZGV4T2ZcIl0gfHwgbGVmdC5pbmRleE9mKHJpZ2h0KSA9PSAtMTsgfSxcbiAgICAgICAgICAgIGdyZWF0ZXI6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA+IHJpZ2h0OyB9LFxuICAgICAgICAgICAgbGVzczogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0IDwgcmlnaHQ7IH0sXG4gICAgICAgICAgICBncmVhdGVyb3JlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ID49IHJpZ2h0OyB9LFxuICAgICAgICAgICAgbGVzc29yZXF1YWw6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA8PSByaWdodDsgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIG9wVmFsdWU6IHN0cmluZyA9IFwiZXF1YWxcIjtcbiAgICBwdWJsaWMgbGVmdDogYW55O1xuICAgIHB1YmxpYyByaWdodDogYW55O1xuICAgIHB1YmxpYyBnZXQgb3BlcmF0b3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3BWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgb3BlcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFDb25kaXRpb24ub3BlcmF0b3JzW3ZhbHVlXSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9wVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHBlcmZvcm0obGVmdDogYW55ID0gbnVsbCwgcmlnaHQ6IGFueSA9IG51bGwpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFsZWZ0KSBsZWZ0ID0gdGhpcy5sZWZ0O1xuICAgICAgICBpZiAoIXJpZ2h0KSByaWdodCA9IHRoaXMucmlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbi5vcGVyYXRvcnNbdGhpcy5vcGVyYXRvcl0odGhpcy5nZXRQdXJlVmFsdWUobGVmdCksIHRoaXMuZ2V0UHVyZVZhbHVlKHJpZ2h0KSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHVyZVZhbHVlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF2YWwgfHwgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikpIHJldHVybiB2YWw7XG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDAgJiYgKHZhbFswXSA9PSBcIidcIiB8fCB2YWxbMF0gPT0gJ1wiJykpICB2YWwgPSB2YWwuc3Vic3RyKDEpO1xuICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDAgJiYgKHZhbFtsZW4gLSAxXSA9PSBcIidcIiB8fCB2YWxbbGVuIC0gMV0gPT0gJ1wiJykpICB2YWwgPSB2YWwuc3Vic3RyKDAsIGxlbiAtIDEpO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25Ob2RlIHtcbiAgICBwcml2YXRlIGNvbm5lY3RpdmVWYWx1ZTogc3RyaW5nID0gXCJhbmRcIjtcbiAgICBwdWJsaWMgY2hpbGRyZW46IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RpdmUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29ubmVjdGl2ZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb25uZWN0aXZlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBcIiZcIiB8fCB2YWx1ZSA9PSBcIiYmXCIpIHZhbHVlID0gXCJhbmRcIjtcbiAgICAgICAgaWYgKHZhbHVlID09IFwifFwiIHx8IHZhbHVlID09IFwifHxcIikgdmFsdWUgPSBcIm9yXCI7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBcImFuZFwiICYmIHZhbHVlICE9IFwib3JcIikgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbm5lY3RpdmVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKSB7IHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PSAwOyB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGl2ZSA9IFwiYW5kXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbmRpdGlvblJ1bm5lciB7XG4gICAgcHJpdmF0ZSBleHByZXNzaW9uVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIHJvb3Q6IENvbmRpdGlvbk5vZGU7XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+O1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB9XG4gICAgcHVibGljIGdldCBleHByZXNzaW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmV4cHJlc3Npb25WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgZXhwcmVzc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb24gPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgbmV3IENvbmRpdGlvbnNQYXJzZXIoKS5wYXJzZSh0aGlzLmV4cHJlc3Npb25WYWx1ZSwgdGhpcy5yb290KTtcbiAgICB9XG4gICAgcHVibGljIHJ1bih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5Ob2RlKHRoaXMucm9vdCk7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuTm9kZShub2RlOiBDb25kaXRpb25Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBvbkZpcnN0RmFpbCA9IG5vZGUuY29ubmVjdGl2ZSA9PSBcImFuZFwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnJ1bk5vZGVDb25kaXRpb24obm9kZS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICBpZiAoIXJlcyAmJiBvbkZpcnN0RmFpbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiAhb25GaXJzdEZhaWwpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvbkZpcnN0RmFpbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW5Ob2RlQ29uZGl0aW9uKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodmFsdWVbXCJjaGlsZHJlblwiXSkgcmV0dXJuIHRoaXMucnVuTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZVtcImxlZnRcIl0pIHJldHVybiB0aGlzLnJ1bkNvbmRpdGlvbih2YWx1ZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW5Db25kaXRpb24oY29uZGl0aW9uOiBDb25kaXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGxlZnQgPSBjb25kaXRpb24ubGVmdDtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldFZhbHVlTmFtZShsZWZ0KTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy52YWx1ZXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy52YWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJpZ2h0ID0gY29uZGl0aW9uLnJpZ2h0O1xuICAgICAgICBuYW1lID0gdGhpcy5nZXRWYWx1ZU5hbWUocmlnaHQpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLnZhbHVlcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy52YWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbi5wZXJmb3JtKGxlZnQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZU5hbWUobm9kZVZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCFub2RlVmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVWYWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAobm9kZVZhbHVlLmxlbmd0aCA8IDMgfHwgbm9kZVZhbHVlWzBdICE9ICd7JyB8fCBub2RlVmFsdWVbbm9kZVZhbHVlLmxlbmd0aCAtIDFdICE9ICd9JykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBub2RlVmFsdWUuc3Vic3RyKDEsIG5vZGVWYWx1ZS5sZW5ndGggLSAyKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmRpdGlvbnMudHMiLCJpbXBvcnQge0NvbmRpdGlvbiwgQ29uZGl0aW9uTm9kZX0gZnJvbSBcIi4vY29uZGl0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uc1BhcnNlciB7XG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb290OiBDb25kaXRpb25Ob2RlO1xuICAgIHByaXZhdGUgZXhwcmVzc2lvbk5vZGVzOiBBcnJheTxDb25kaXRpb25Ob2RlPjtcbiAgICBwcml2YXRlIG5vZGU6IENvbmRpdGlvbk5vZGU7XG4gICAgcHJpdmF0ZSBhdDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXI7XG4gICAgcHVibGljIHBhcnNlKHRleHQ6IHN0cmluZywgcm9vdDogQ29uZGl0aW9uTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLnJvb3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hdCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucGFyc2VUZXh0KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHB1YmxpYyB0b1N0cmluZyhyb290OiBDb25kaXRpb25Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVRvU3RyaW5nKHJvb3QpO1xuICAgIH1cbiAgICBwcml2YXRlIHRvU3RyaW5nQ29yZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIGlmICh2YWx1ZVtcImNoaWxkcmVuXCJdKSByZXR1cm4gdGhpcy5ub2RlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVbXCJsZWZ0XCJdKSByZXR1cm4gdGhpcy5jb25kaXRpb25Ub1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIG5vZGVUb1N0cmluZyhub2RlOiBDb25kaXRpb25Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5vZGUuaXNFbXB0eSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciByZXMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlVGV4dCA9IHRoaXMudG9TdHJpbmdDb3JlKG5vZGUuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKG5vZGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykgcmVzICs9ICcgJyArIG5vZGUuY29ubmVjdGl2ZSArICcgJztcbiAgICAgICAgICAgICAgICByZXMgKz0gbm9kZVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT0gdGhpcy5yb290ICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmVzID0gJygnICsgcmVzICsgJyknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgY29uZGl0aW9uVG9TdHJpbmcoY29uZGl0aW9uOiBDb25kaXRpb24pOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWNvbmRpdGlvbi5yaWdodCB8fCAhY29uZGl0aW9uLm9wZXJhdG9yKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGxlZnQgPSBjb25kaXRpb24ubGVmdDtcbiAgICAgICAgaWYgKGxlZnQgJiYgIXRoaXMuaXNOdW1lcmljKGxlZnQpKSBsZWZ0ID0gXCInXCIgKyBsZWZ0ICsgXCInXCI7XG4gICAgICAgIHZhciByZXMgPSBsZWZ0ICsgJyAnICsgdGhpcy5vcGVyYXRpb25Ub1N0cmluZyhjb25kaXRpb24ub3BlcmF0b3IpO1xuICAgICAgICBpZiAodGhpcy5pc05vUmlnaHRPcGVyYXRpb24oY29uZGl0aW9uLm9wZXJhdG9yKSkgcmV0dXJuIHJlcztcbiAgICAgICAgdmFyIHJpZ2h0ID0gY29uZGl0aW9uLnJpZ2h0O1xuICAgICAgICBpZiAocmlnaHQgJiYgIXRoaXMuaXNOdW1lcmljKHJpZ2h0KSkgcmlnaHQgPSBcIidcIiArIHJpZ2h0ICsgXCInXCI7XG4gICAgICAgIHJldHVybiByZXMgKyAnICcgKyByaWdodDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcGVyYXRpb25Ub1N0cmluZyhvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9wID09IFwiZXF1YWxcIikgcmV0dXJuIFwiPVwiO1xuICAgICAgICBpZiAob3AgPT0gXCJub3RlcXVhbFwiKSByZXR1cm4gXCIhPVwiO1xuICAgICAgICBpZiAob3AgPT0gXCJncmVhdGVyXCIpIHJldHVybiBcIj5cIjtcbiAgICAgICAgaWYgKG9wID09IFwibGVzc1wiKSByZXR1cm4gXCI8XCI7XG4gICAgICAgIGlmIChvcCA9PSBcImdyZWF0ZXJvcmVxdWFsXCIpIHJldHVybiBcIj49XCI7XG4gICAgICAgIGlmIChvcCA9PSBcImxlc3NvcmVxdWFsXCIpIHJldHVybiBcIjw9XCI7XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc051bWVyaWModmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmIChpc05hTih2YWwpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIHBhcnNlVGV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5ub2RlID0gdGhpcy5yb290O1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2Rlcy5wdXNoKHRoaXMubm9kZSk7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnJlYWRDb25kaXRpb25zKCk7XG4gICAgICAgIHJldHVybiByZXMgJiYgdGhpcy5hdCA+PSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkQ29uZGl0aW9ucygpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVhZENvbmRpdGlvbigpO1xuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIHJlcztcbiAgICAgICAgdmFyIGNvbm5lY3RpdmUgPSB0aGlzLnJlYWRDb25uZWN0aXZlKCk7XG4gICAgICAgIGlmIChjb25uZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3RpdmUoY29ubmVjdGl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkQ29uZGl0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRDb25kaXRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkRXhwcmVzc2lvbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWFkU3RyaW5nKCk7XG4gICAgICAgIGlmICghbGVmdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgb3AgPSB0aGlzLnJlYWRPcGVyYXRvcigpO1xuICAgICAgICBpZiAoIW9wKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBjID0gbmV3IENvbmRpdGlvbigpO1xuICAgICAgICBjLmxlZnQgPSBsZWZ0OyBjLm9wZXJhdG9yID0gb3A7XG4gICAgICAgIGlmICghdGhpcy5pc05vUmlnaHRPcGVyYXRpb24ob3ApKSB7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICghcmlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGMucmlnaHQgPSByaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZENvbmRpdGlvbihjKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZEV4cHJlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICBpZiAodGhpcy5hdCA+PSB0aGlzLmxlbmd0aCB8fCB0aGlzLmNoICE9ICcoJykgcmV0dXJuIHRydWU7XG4gICAgICAgIHRoaXMuYXQrKztcbiAgICAgICAgdGhpcy5wdXNoRXhwcmVzc2lvbigpO1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5yZWFkQ29uZGl0aW9ucygpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuY2ggPT0gJyknO1xuICAgICAgICAgICAgdGhpcy5hdCsrO1xuICAgICAgICAgICAgdGhpcy5wb3BFeHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgY2goKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQodGhpcy5hdCk7IH1cbiAgICBwcml2YXRlIHNraXAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmF0IDwgdGhpcy5sZW5ndGggJiYgdGhpcy5pc1NwYWNlKHRoaXMuY2gpKSB0aGlzLmF0Kys7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTcGFjZShjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPT0gJyAnIHx8IGMgPT0gJ1xcbicgfHwgYyA9PSAnXFx0JyB8fCBjID09ICdcXHInO1xuICAgIH1cbiAgICBwcml2YXRlIGlzUXVvdGVzKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYyA9PSBcIidcIiB8fCBjID09ICdcIidcbiAgICB9XG4gICAgcHJpdmF0ZSBpc09wZXJhdG9yQ2hhcihjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPT0gJz4nIHx8IGMgPT0gJzwnIHx8IGMgPT0gJz0nIHx8IGMgPT0gJyEnO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQnJhY2tldHMoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjID09ICcoJyB8fCBjID09ICcpJztcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICBpZiAodGhpcy5hdCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuYXQ7XG4gICAgICAgIHZhciBoYXNRdW90ZXMgPSB0aGlzLmlzUXVvdGVzKHRoaXMuY2gpO1xuICAgICAgICBpZiAoaGFzUXVvdGVzKSB0aGlzLmF0Kys7XG4gICAgICAgIHZhciBpc0ZpcnN0T3BDaCA9IHRoaXMuaXNPcGVyYXRvckNoYXIodGhpcy5jaCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmF0IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghaGFzUXVvdGVzICYmIHRoaXMuaXNTcGFjZSh0aGlzLmNoKSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1b3Rlcyh0aGlzLmNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNRdW90ZXMpIHRoaXMuYXQrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RPcENoICE9IHRoaXMuaXNPcGVyYXRvckNoYXIodGhpcy5jaCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQnJhY2tldHModGhpcy5jaCkpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0IDw9IHN0YXJ0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMudGV4dC5zdWJzdHIoc3RhcnQsIHRoaXMuYXQgLSBzdGFydCk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gMSAmJiB0aGlzLmlzUXVvdGVzKHJlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNRdW90ZXMocmVzW3Jlcy5sZW5ndGggLSAxXSkpIGxlbi0tO1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5zdWJzdHIoMSwgbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzTm9SaWdodE9wZXJhdGlvbihvcDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBvcCA9PSBcImVtcHR5XCIgfHwgb3AgPT0gXCJub3RlbXB0eVwiO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRPcGVyYXRvcigpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3AgPSB0aGlzLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgaWYgKCFvcCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG9wID0gb3AudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG9wID09ICc+Jykgb3AgPSBcImdyZWF0ZXJcIjtcbiAgICAgICAgaWYgKG9wID09ICc8Jykgb3AgPSBcImxlc3NcIjtcbiAgICAgICAgaWYgKG9wID09ICc+PScgfHwgb3AgPT0gJz0+Jykgb3AgPSBcImdyZWF0ZXJvcmVxdWFsXCI7XG4gICAgICAgIGlmIChvcCA9PSAnPD0nIHx8IG9wID09ICc9PCcpIG9wID0gXCJsZXNzb3JlcXVhbFwiO1xuICAgICAgICBpZiAob3AgPT0gJz0nIHx8IG9wID09ICc9PScpIG9wID0gXCJlcXVhbFwiO1xuICAgICAgICBpZiAob3AgPT0gJzw+JyB8fCBvcCA9PSAnIT0nKSBvcCA9IFwibm90ZXF1YWxcIjtcbiAgICAgICAgaWYgKG9wID09ICdjb250YWluJykgb3AgPSBcImNvbnRhaW5zXCI7XG4gICAgICAgIGlmIChvcCA9PSAnbm90Y29udGFpbicpIG9wID0gXCJub3Rjb250YWluc1wiO1xuICAgICAgICByZXR1cm4gb3A7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZENvbm5lY3RpdmUoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGNvbiA9IHRoaXMucmVhZFN0cmluZygpO1xuICAgICAgICBpZiAoIWNvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbiA9IGNvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY29uID09IFwiJlwiIHx8IGNvbiA9PSBcIiYmXCIpIGNvbiA9IFwiYW5kXCI7XG4gICAgICAgIGlmIChjb24gPT0gXCJ8XCIgfHwgY29uID09IFwifHxcIikgY29uID0gXCJvclwiO1xuICAgICAgICBpZiAoY29uICE9IFwiYW5kXCIgJiYgY29uICE9IFwib3JcIikgY29uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBwdXNoRXhwcmVzc2lvbigpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQ29uZGl0aW9uTm9kZSgpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cbiAgICBwcml2YXRlIHBvcEV4cHJlc3Npb24oKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5leHByZXNzaW9uTm9kZXMucG9wKCk7XG4gICAgICAgIHRoaXMubm9kZSA9IHRoaXMuZXhwcmVzc2lvbk5vZGVzW3RoaXMuZXhwcmVzc2lvbk5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRDb25kaXRpb24oYzogQ29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKGMpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZENvbm5lY3RpdmUoY29uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29ubmVjdGl2ZSA9IGNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuY29ubmVjdGl2ZSAhPSBjb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ29uID0gdGhpcy5ub2RlLmNvbm5lY3RpdmU7XG4gICAgICAgICAgICAgICAgdmFyIG9sZENoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb25uZWN0aXZlID0gY29uO1xuICAgICAgICAgICAgICAgIHZhciBvbGROb2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgICAgICAgICBvbGROb2RlLmNvbm5lY3RpdmUgPSBvbGRDb247XG4gICAgICAgICAgICAgICAgb2xkTm9kZS5jaGlsZHJlbiA9IG9sZENoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25kaXRpb25zUGFyc2VyLnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtCYXNlLCBJdGVtVmFsdWUsIElTdXJ2ZXlEYXRhLCBIYXNoVGFibGV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkRyb3Bkb3duTW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX2Ryb3Bkb3duXCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hNb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fY2hlY2tib3hcIjtcbmltcG9ydCB7UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX3JhZGlvZ3JvdXBcIjtcbmltcG9ydCB7UXVlc3Rpb25UZXh0TW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX3RleHRcIjtcbmltcG9ydCB7UXVlc3Rpb25Db21tZW50TW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX2NvbW1lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4RHJvcGRvd25EYXRhIHtcbiAgICBvblJvd0NoYW5nZWQoY2VsbDogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIG5ld1Jvd1ZhbHVlOiBhbnkpO1xuICAgIGNvbHVtbnM6IEFycmF5PE1hdHJpeERyb3Bkb3duQ29sdW1uPjtcbiAgICBjcmVhdGVRdWVzdGlvbihyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93bkNvbHVtbiBleHRlbmRzIEJhc2Uge1xuICAgIHByaXZhdGUgY2hvaWNlc1ZhbHVlOiBJdGVtVmFsdWVbXSA9IFtdO1xuICAgIHByaXZhdGUgdGl0bGVWYWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBvcHRpb25zQ2FwdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGhhc090aGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG1pbldpZHRoOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBjZWxsVHlwZTogc3RyaW5nID0gXCJkZWZhdWx0XCI7XG4gICAgcHJpdmF0ZSBjb2xDb3VudFZhbHVlOiBudW1iZXIgPSAtMTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIHsgcmV0dXJuIFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMubmFtZTsgfVxuICAgIHB1YmxpYyBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykgeyB0aGlzLnRpdGxlVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2xDb3VudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb2xDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IC0xIHx8IHZhbHVlID4gNCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbENvdW50VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBjaG9pY2VzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY2hvaWNlc1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0cml4RHJvcGRvd25DZWxsIHtcbiAgICBwcml2YXRlIHF1ZXN0aW9uVmFsdWU6IFF1ZXN0aW9uO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uLCBwdWJsaWMgcm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVmFsdWUgPSBkYXRhLmNyZWF0ZVF1ZXN0aW9uKHRoaXMucm93LCB0aGlzLmNvbHVtbik7XG4gICAgICAgIHRoaXMucXVlc3Rpb25WYWx1ZS5zZXREYXRhKHJvdyk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcXVlc3Rpb24oKTogUXVlc3Rpb24geyByZXR1cm4gdGhpcy5xdWVzdGlvblZhbHVlOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5xdWVzdGlvbi52YWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UgaW1wbGVtZW50cyBJU3VydmV5RGF0YSB7XG4gICAgcHJvdGVjdGVkIGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGE7XG4gICAgcHJpdmF0ZSByb3dWYWx1ZXM6IEhhc2hUYWJsZTxhbnk+ID0ge307XG4gICAgcHJpdmF0ZSByb3dDb21tZW50czogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIGlzU2V0dGluZ1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgY2VsbHM6IEFycmF5PE1hdHJpeERyb3Bkb3duQ2VsbD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGEsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkQ2VsbHMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCByb3dOYW1lKCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLnJvd1ZhbHVlczsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3dWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm93VmFsdWVzW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXS5xdWVzdGlvbi5vblN1cnZleVZhbHVlQ2hhbmdlZCh0aGlzLmdldFZhbHVlKHRoaXMuY2VsbHNbaV0uY29sdW1uLm5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2V0dGluZ1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dWYWx1ZXNbbmFtZV07XG4gICAgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXR0aW5nVmFsdWUpIHJldHVybjtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBcIlwiKSBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvd1ZhbHVlc1tuYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm93VmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5vblJvd0NoYW5nZWQodGhpcywgdGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDb21tZW50KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0NvbW1lbnRzW25hbWVdO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29tbWVudChuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3dDb21tZW50c1tuYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgYnVpbGRDZWxscygpIHtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLmRhdGEuY29sdW1ucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaCh0aGlzLmNyZWF0ZUNlbGwoY29sdW1uKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNlbGwoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IE1hdHJpeERyb3Bkb3duQ2VsbCB7XG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4RHJvcGRvd25DZWxsKGNvbHVtbiwgdGhpcywgdGhpcy5kYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcbiAgICBwcml2YXRlIGNvbHVtbnNWYWx1ZTogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+ID0gW107XG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSBvcHRpb25zQ2FwdGlvblZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlZFZpc2libGVSb3dzOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT47XG4gICAgcHJpdmF0ZSBjZWxsVHlwZVZhbHVlOiBzdHJpbmcgPSBcImRyb3Bkb3duXCI7XG4gICAgcHJpdmF0ZSBjb2x1bW5Db2xDb3VudFZhbHVlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBjb2x1bW5NaW5XaWR0aDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgaG9yaXpvbnRhbFNjcm9sbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2x1bW5zQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyB1cGRhdGVDZWxsc0NhbGxiYWs6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmJhc2VcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb2x1bW5zKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duQ29sdW1uPiB7IHJldHVybiB0aGlzLmNvbHVtbnNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1ucyh2YWx1ZTogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+KSB7XG4gICAgICAgIHRoaXMuY29sdW1uc1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29sdW1uc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2VsbFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2VsbFR5cGVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY2VsbFR5cGUobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jZWxsVHlwZSA9PSBuZXdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNlbGxUeXBlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy51cGRhdGVDZWxsc0NhbGxiYWspO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbHVtbkNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbHVtbkNvbENvdW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNvbHVtbkNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb2x1bW5Db2xDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudXBkYXRlQ2VsbHNDYWxsYmFrKTtcbiAgICB9XG4gICAgcHVibGljIGdldENvbHVtblRpdGxlKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY29sdW1uLnRpdGxlO1xuICAgICAgICBpZiAoY29sdW1uLmlzUmVxdWlyZWQgJiYgdGhpcy5zdXJ2ZXkpIHtcbiAgICAgICAgICAgIHZhciByZXF1aXJlVGV4dCA9IHRoaXMuc3VydmV5LnJlcXVpcmVkVGV4dDtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlVGV4dCkgcmVxdWlyZVRleHQgKz0gXCIgXCI7XG4gICAgICAgICAgICByZXN1bHQgPSByZXF1aXJlVGV4dCArIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q29sdW1uV2lkdGgoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBjb2x1bW4ubWluV2lkdGggPyBjb2x1bW4ubWluV2lkdGggOiB0aGlzLmNvbHVtbk1pbldpZHRoO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY2hvaWNlcyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNob2ljZXNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnNDYXB0aW9uKCkgeyByZXR1cm4gKHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSkgPyB0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3B0aW9uc0NhcHRpb25cIik7IH1cbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNDYXB0aW9uKG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlID0gbmV3VmFsdWU7IH1cbiAgICBwdWJsaWMgYWRkQ29sdW1uKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwpOiBNYXRyaXhEcm9wZG93bkNvbHVtbiB7XG4gICAgICAgIHZhciBjb2x1bW4gPSBuZXcgTWF0cml4RHJvcGRvd25Db2x1bW4obmFtZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLmNvbHVtbnNWYWx1ZS5wdXNoKGNvbHVtbik7XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aXNpYmxlUm93cygpOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3M7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZVJvd3MoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2U+IHsgcmV0dXJuIG51bGw7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1ZhbHVlKGN1clZhbHVlOiBhbnkpOiBhbnkgeyByZXR1cm4gIWN1clZhbHVlID8ge30gOiBjdXJWYWx1ZTsgfVxuICAgIHByb3RlY3RlZCBnZXRSb3dWYWx1ZShyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBxdWVzdGlvblZhbHVlOiBhbnksIGNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHF1ZXN0aW9uVmFsdWVbcm93LnJvd05hbWVdID8gcXVlc3Rpb25WYWx1ZVtyb3cucm93TmFtZV0gOiBudWxsO1xuICAgICAgICBpZiAoIXJlc3VsdCAmJiBjcmVhdGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgcXVlc3Rpb25WYWx1ZVtyb3cucm93TmFtZV0gPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Jvd0NoYW5naW5nIHx8ICEodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykgfHwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV0udmFsdWUgPSB0aGlzLmdldFJvd1ZhbHVlKHJvdywgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9ycyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBlcnJvc0luQ29sdW1ucyA9IHRoaXMuaGFzRXJyb3JJbkNvbHVtbnMoZmlyZUNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc0Vycm9ycyhmaXJlQ2FsbGJhY2spIHx8IGVycm9zSW5Db2x1bW5zO1xuICAgIH1cbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Db2x1bW5zKGZpcmVDYWxsYmFjazogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHJlcyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgY29sSW5kZXgrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXS5jZWxscztcbiAgICAgICAgICAgICAgICByZXMgPSBjZWxscyAmJiBjZWxsc1tjb2xJbmRleF0gJiYgY2VsbHNbY29sSW5kZXhdLnF1ZXN0aW9uICYmIGNlbGxzW2NvbEluZGV4XS5xdWVzdGlvbi5oYXNFcnJvcnMoZmlyZUNhbGxiYWNrKSB8fCByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEZpcnN0SW5wdXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRGaXJzdENlbGxRdWVzdGlvbihmYWxzZSk7XG4gICAgICAgIHJldHVybiBxdWVzdGlvbiA/IHF1ZXN0aW9uLmlucHV0SWQgOiBzdXBlci5nZXRGaXJzdElucHV0RWxlbWVudElkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRGaXJzdEVycm9ySW5wdXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRGaXJzdENlbGxRdWVzdGlvbih0cnVlKTtcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uID8gcXVlc3Rpb24uaW5wdXRJZCA6IHN1cGVyLmdldEZpcnN0RXJyb3JJbnB1dEVsZW1lbnRJZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RDZWxsUXVlc3Rpb24ob25FcnJvcjogYm9vbGVhbik6IFF1ZXN0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldLmNlbGxzO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9uRXJyb3IpIHJldHVybiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2NvbEluZGV4XS5xdWVzdGlvbi5jdXJyZW50RXJyb3JDb3VudCA+IDApIHJldHVybiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy9JTWF0cml4RHJvcGRvd25EYXRhXG4gICAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbiB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuY3JlYXRlUXVlc3Rpb25Db3JlKHJvdywgY29sdW1uKTtcbiAgICAgICAgcXVlc3Rpb24ubmFtZSA9IGNvbHVtbi5uYW1lO1xuICAgICAgICBxdWVzdGlvbi5pc1JlcXVpcmVkID0gY29sdW1uLmlzUmVxdWlyZWQ7XG4gICAgICAgIHF1ZXN0aW9uLmhhc090aGVyID0gY29sdW1uLmhhc090aGVyO1xuICAgICAgICBpZiAoY29sdW1uLmhhc090aGVyKSB7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb24gaW5zdGFuY2VvZiBRdWVzdGlvblNlbGVjdEJhc2UpIHtcbiAgICAgICAgICAgICAgICAoPFF1ZXN0aW9uU2VsZWN0QmFzZT5xdWVzdGlvbikuc3RvcmVPdGhlcnNBc0NvbW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlc3Rpb247XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVRdWVzdGlvbkNvcmUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uIHtcbiAgICAgICAgdmFyIGNlbGxUeXBlID0gY29sdW1uLmNlbGxUeXBlID09IFwiZGVmYXVsdFwiID8gdGhpcy5jZWxsVHlwZSA6IGNvbHVtbi5jZWxsVHlwZTtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldFF1ZXN0aW9uTmFtZShyb3csIGNvbHVtbik7XG4gICAgICAgIGlmIChjZWxsVHlwZSA9PSBcImNoZWNrYm94XCIpIHJldHVybiB0aGlzLmNyZWF0ZUNoZWNrYm94KG5hbWUsIGNvbHVtbik7XG4gICAgICAgIGlmIChjZWxsVHlwZSA9PSBcInJhZGlvZ3JvdXBcIikgcmV0dXJuIHRoaXMuY3JlYXRlUmFkaW9ncm91cChuYW1lLCBjb2x1bW4pO1xuICAgICAgICBpZiAoY2VsbFR5cGUgPT0gXCJ0ZXh0XCIpIHJldHVybiB0aGlzLmNyZWF0ZVRleHQobmFtZSwgY29sdW1uKTtcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwiY29tbWVudFwiKSByZXR1cm4gdGhpcy5jcmVhdGVDb21tZW50KG5hbWUsIGNvbHVtbik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZURyb3Bkb3duKG5hbWUsIGNvbHVtbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRRdWVzdGlvbk5hbWUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7IHJldHVybiByb3cucm93TmFtZSArIFwiX1wiICsgY29sdW1uLm5hbWU7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uQ2hvaWNlcyhjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uY2hvaWNlcyAmJiBjb2x1bW4uY2hvaWNlcy5sZW5ndGggPiAwID8gY29sdW1uLmNob2ljZXMgOiB0aGlzLmNob2ljZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5PcHRpb25zQ2FwdGlvbihjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5vcHRpb25zQ2FwdGlvbiA/IGNvbHVtbi5vcHRpb25zQ2FwdGlvbiA6IHRoaXMub3B0aW9uc0NhcHRpb247XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVEcm9wZG93bihuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbkRyb3Bkb3duTW9kZWwge1xuICAgICAgICB2YXIgcSA9IDxRdWVzdGlvbkRyb3Bkb3duTW9kZWw+dGhpcy5jcmVhdGVDZWxsUXVlc3Rpb24oXCJkcm9wZG93blwiLCBuYW1lKTtcbiAgICAgICAgcS5jaG9pY2VzID0gdGhpcy5nZXRDb2x1bW5DaG9pY2VzKGNvbHVtbik7XG4gICAgICAgIHEub3B0aW9uc0NhcHRpb24gPSB0aGlzLmdldENvbHVtbk9wdGlvbnNDYXB0aW9uKGNvbHVtbik7XG4gICAgICAgIHJldHVybiBxO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hlY2tib3gobmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25DaGVja2JveE1vZGVsIHtcbiAgICAgICAgdmFyIHEgPSA8UXVlc3Rpb25DaGVja2JveE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwiY2hlY2tib3hcIiwgbmFtZSk7XG4gICAgICAgIHEuY2hvaWNlcyA9IHRoaXMuZ2V0Q29sdW1uQ2hvaWNlcyhjb2x1bW4pO1xuICAgICAgICBxLmNvbENvdW50ID0gY29sdW1uLmNvbENvdW50ID4gLSAxID8gY29sdW1uLmNvbENvdW50IDogdGhpcy5jb2x1bW5Db2xDb3VudDtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVSYWRpb2dyb3VwKG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsIHtcbiAgICAgICAgdmFyIHEgPSA8UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWw+dGhpcy5jcmVhdGVDZWxsUXVlc3Rpb24oXCJyYWRpb2dyb3VwXCIsIG5hbWUpO1xuICAgICAgICBxLmNob2ljZXMgPSB0aGlzLmdldENvbHVtbkNob2ljZXMoY29sdW1uKTtcbiAgICAgICAgcS5jb2xDb3VudCA9IGNvbHVtbi5jb2xDb3VudCA+IC0gMSA/IGNvbHVtbi5jb2xDb3VudCA6IHRoaXMuY29sdW1uQ29sQ291bnQ7XG4gICAgICAgIHJldHVybiBxO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVGV4dChuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvblRleHRNb2RlbCB7XG4gICAgICAgIHJldHVybiA8UXVlc3Rpb25UZXh0TW9kZWw+dGhpcy5jcmVhdGVDZWxsUXVlc3Rpb24oXCJ0ZXh0XCIsIG5hbWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29tbWVudChuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbkNvbW1lbnRNb2RlbCB7XG4gICAgICAgIHJldHVybiA8UXVlc3Rpb25Db21tZW50TW9kZWw+dGhpcy5jcmVhdGVDZWxsUXVlc3Rpb24oXCJjb21tZW50XCIsIG5hbWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2VsbFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBRdWVzdGlvbiB7XG4gICAgICAgIHJldHVybiA8UXVlc3Rpb24+UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgbmFtZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBkZWxldGVSb3dWYWx1ZShuZXdWYWx1ZTogYW55LCByb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlKTogYW55IHtcbiAgICAgICAgZGVsZXRlIG5ld1ZhbHVlW3Jvdy5yb3dOYW1lXTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1ZhbHVlKS5sZW5ndGggPT0gMCA/IG51bGwgOiBuZXdWYWx1ZTtcbiAgICB9XG4gICAgb25Sb3dDaGFuZ2VkKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIG5ld1Jvd1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gdGhpcy5nZXRSb3dWYWx1ZShyb3csIG5ld1ZhbHVlLCB0cnVlKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHJvd1ZhbHVlKSBkZWxldGUgcm93VmFsdWVba2V5XTtcbiAgICAgICAgaWYgKG5ld1Jvd1ZhbHVlKSB7XG4gICAgICAgICAgICBuZXdSb3dWYWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3Um93VmFsdWUpKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBuZXdSb3dWYWx1ZSkgcm93VmFsdWVba2V5XSA9IG5ld1Jvd1ZhbHVlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJvd1ZhbHVlKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmRlbGV0ZVJvd1ZhbHVlKG5ld1ZhbHVlLCByb3cpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiLCBbXCJuYW1lXCIsIHsgbmFtZTogXCJ0aXRsZVwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai50aXRsZVZhbHVlOyB9IH0sXG4gICAgICAgIHsgbmFtZTogXCJjaG9pY2VzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmouY2hvaWNlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmouY2hvaWNlcyA9IHZhbHVlOyB9fSxcbiAgICAgICAgXCJvcHRpb25zQ2FwdGlvblwiLCB7IG5hbWU6IFwiY2VsbFR5cGVcIiwgZGVmYXVsdDogXCJkZWZhdWx0XCIsIGNob2ljZXM6IFtcImRlZmF1bHRcIiwgXCJkcm9wZG93blwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9ncm91cFwiLCBcInRleHRcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgICAgIHsgbmFtZTogXCJjb2xDb3VudFwiLCBkZWZhdWx0OiAtMSwgY2hvaWNlczogWy0xLCAwLCAxLCAyLCAzLCA0XSB9LCBcImlzUmVxdWlyZWQ6Ym9vbGVhblwiLCBcImhhc090aGVyOmJvb2xlYW5cIiwgXCJtaW5XaWR0aFwiXSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWF0cml4RHJvcGRvd25Db2x1bW4oXCJcIik7IH0pO1xuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHJvcGRvd25iYXNlXCIsIFt7IG5hbWU6IFwiY29sdW1uczptYXRyaXhkcm9wZG93bmNvbHVtbnNcIiwgY2xhc3NOYW1lOiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIgfSxcbiAgICAgICAgXCJob3Jpem9udGFsU2Nyb2xsOmJvb2xlYW5cIixcbiAgICAgICAgeyBuYW1lOiBcImNob2ljZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LFxuICAgICAgICB7IG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoub3B0aW9uc0NhcHRpb25WYWx1ZTsgfSB9LFxuICAgICAgICB7IG5hbWU6IFwiY2VsbFR5cGVcIiwgZGVmYXVsdDogXCJkcm9wZG93blwiLCBjaG9pY2VzOiBbXCJkcm9wZG93blwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9ncm91cFwiLCBcInRleHRcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgICAgIHsgbmFtZTogXCJjb2x1bW5Db2xDb3VudFwiLCBkZWZhdWx0OiAwLCBjaG9pY2VzOiBbMCwgMSwgMiwgMywgNF0gfSwgXCJjb2x1bW5NaW5XaWR0aFwiXSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZShcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlLnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tICcuL2pzb25vYmplY3QnO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gJy4vcXVlc3Rpb25iYXNlJztcbmltcG9ydCB7U3VydmV5RXJyb3IsIFN1cnZleUVsZW1lbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge0Fuc3dlclJlcXVpcmVkRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQge1N1cnZleVZhbGlkYXRvciwgSVZhbGlkYXRvck93bmVyLCBWYWxpZGF0b3JSdW5uZXJ9IGZyb20gXCIuL3ZhbGlkYXRvclwiO1xuaW1wb3J0IHtUZXh0UHJlUHJvY2Vzc29yfSBmcm9tIFwiLi90ZXh0UHJlUHJvY2Vzc29yXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbiBleHRlbmRzIFF1ZXN0aW9uQmFzZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JPd25lciB7XG4gICAgcHJpdmF0ZSB0aXRsZVZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgcXVlc3Rpb25WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgcXVlc3Rpb25Db21tZW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc1JlcXVpcmVkVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGhhc0NvbW1lbnRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaGFzT3RoZXJWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY29tbWVudFRleHRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHRleHRQcmVQcm9jZXNzb3I6IFRleHRQcmVQcm9jZXNzb3I7XG4gICAgZXJyb3JzOiBBcnJheTxTdXJ2ZXlFcnJvcj4gPSBbXTtcbiAgICB2YWxpZGF0b3JzOiBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+ID0gbmV3IEFycmF5PFN1cnZleVZhbGlkYXRvcj4oKTtcbiAgICB2YWx1ZUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBjb21tZW50Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGVycm9yc0NoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICB0aXRsZUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzVGl0bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWQgKyBcImlcIjsgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuICh0aGlzLnRpdGxlVmFsdWUpID8gdGhpcy50aXRsZVZhbHVlIDogdGhpcy5uYW1lOyB9XG4gICAgcHVibGljIHNldCB0aXRsZShuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnRpdGxlQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRUaXRsZSgpIHsgcmV0dXJuIHRoaXMuc3VydmV5ICE9IG51bGwgPyB0aGlzLnN1cnZleS5wcm9jZXNzVGV4dCh0aGlzLnRpdGxlKSA6IHRoaXMudGl0bGU7IH1cbiAgICBwdWJsaWMgZ2V0IGZ1bGxUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5zdXJ2ZXkucXVlc3Rpb25UaXRsZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGV4dFByZVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3IgPSBuZXcgVGV4dFByZVByb2Nlc3NvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vbkhhc1ZhbHVlID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykgeyByZXR1cm4gc2VsZi5jYW5Qcm9jZXNzZWRUZXh0VmFsdWVzKG5hbWUudG9Mb3dlckNhc2UoKSk7IH07XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uUHJvY2VzcyA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHNlbGYuZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWUpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dFByZVByb2Nlc3Nvci5wcm9jZXNzKHRoaXMuc3VydmV5LnF1ZXN0aW9uVGl0bGVUZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVpcmVUZXh0ID0gdGhpcy5yZXF1aXJlZFRleHQ7XG4gICAgICAgIGlmIChyZXF1aXJlVGV4dCkgcmVxdWlyZVRleHQgKz0gXCIgXCI7XG4gICAgICAgIHZhciBubyA9IHRoaXMubm87XG4gICAgICAgIGlmIChubykgbm8gKz0gXCIuIFwiO1xuICAgICAgICByZXR1cm4gbm8gKyByZXF1aXJlVGV4dCArIHRoaXMucHJvY2Vzc2VkVGl0bGU7XG4gICAgfVxuICAgIHB1YmxpYyBmb2N1cyhvbkVycm9yOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgU3VydmV5RWxlbWVudC5TY3JvbGxFbGVtZW50VG9Ub3AodGhpcy5pZCk7XG4gICAgICAgIHZhciBpZCA9ICFvbkVycm9yID8gdGhpcy5nZXRGaXJzdElucHV0RWxlbWVudElkKCkgOiB0aGlzLmdldEZpcnN0RXJyb3JJbnB1dEVsZW1lbnRJZCgpO1xuICAgICAgICBpZiAoU3VydmV5RWxlbWVudC5Gb2N1c0VsZW1lbnQoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmZvY3VzQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRGaXJzdElucHV0RWxlbWVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0SWQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRGaXJzdEVycm9ySW5wdXRFbGVtZW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY2FuUHJvY2Vzc2VkVGV4dFZhbHVlcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgPT0gXCJub1wiIHx8IG5hbWUgPT0gXCJ0aXRsZVwiIHx8IG5hbWUgPT0gXCJyZXF1aXJlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRQcm9jZXNzZWRUZXh0VmFsdWUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJub1wiKSByZXR1cm4gdGhpcy5ubztcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ0aXRsZVwiKSByZXR1cm4gdGhpcy5wcm9jZXNzZWRUaXRsZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJyZXF1aXJlXCIpIHJldHVybiB0aGlzLnJlcXVpcmVkVGV4dDtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIHN1cHBvcnRPdGhlcigpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGdldCBpc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1JlcXVpcmVkVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGlzUmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWQgPT0gdmFsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSZXF1aXJlZFZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnRpdGxlQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5oYXNDb21tZW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGhhc0NvbW1lbnQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5zdXBwb3J0Q29tbWVudCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFzQ29tbWVudFZhbHVlID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5oYXNDb21tZW50KSB0aGlzLmhhc090aGVyID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29tbWVudFRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29tbWVudFRleHRWYWx1ZSA/IHRoaXMuY29tbWVudFRleHRWYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckl0ZW1UZXh0XCIpOyB9XG4gICAgcHVibGljIHNldCBjb21tZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29tbWVudFRleHRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc090aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5oYXNPdGhlclZhbHVlOyB9XG4gICAgcHVibGljIHNldCBoYXNPdGhlcih2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRPdGhlcigpIHx8IHRoaXMuaGFzT3RoZXIgPT0gdmFsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaGFzT3RoZXJWYWx1ZSA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3RoZXIpIHRoaXMuaGFzQ29tbWVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc090aGVyQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFzT3RoZXJDaGFuZ2VkKCkgeyB9XG4gICAgcHJvdGVjdGVkIGdldCBubygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlSW5kZXggPCAwKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAxO1xuICAgICAgICB2YXIgaXNOdW1lcmljID0gdHJ1ZTtcbiAgICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSAmJiB0aGlzLnN1cnZleS5xdWVzdGlvblN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgIHN0ciA9IHRoaXMuc3VydmV5LnF1ZXN0aW9uU3RhcnRJbmRleDtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChzdHIpKSBzdGFydEluZGV4ID0gcGFyc2VJbnQoc3RyKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHN0ci5sZW5ndGggPT0gMSkgaXNOdW1lcmljID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtZXJpYykgcmV0dXJuICh0aGlzLnZpc2libGVJbmRleCArIHN0YXJ0SW5kZXgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0ci5jaGFyQ29kZUF0KDApICsgdGhpcy52aXNpYmxlSW5kZXgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25TZXREYXRhKCkge1xuICAgICAgICBzdXBlci5vblNldERhdGEoKTtcbiAgICAgICAgdGhpcy5vblN1cnZleVZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUZyb21EYXRhKHRoaXMuZ2V0VmFsdWVDb3JlKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudmFsdWVDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbW1lbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZ2V0Q29tbWVudCgpOyB9XG4gICAgcHVibGljIHNldCBjb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudCA9PSBuZXdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldENvbW1lbnQobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29tbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5kYXRhICE9IG51bGwgPyB0aGlzLmRhdGEuZ2V0Q29tbWVudCh0aGlzLm5hbWUpIDogdGhpcy5xdWVzdGlvbkNvbW1lbnQ7IH1cbiAgICBwcm90ZWN0ZWQgc2V0Q29tbWVudChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0TmV3Q29tbWVudChuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsOyB9XG4gICAgcHVibGljIGhhc0Vycm9ycyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JFcnJvcnMoZmlyZUNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3VycmVudEVycm9yQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aDsgfVxuICAgIHB1YmxpYyBnZXQgcmVxdWlyZWRUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN1cnZleSAhPSBudWxsICYmIHRoaXMuaXNSZXF1aXJlZCA/IHRoaXMuc3VydmV5LnJlcXVpcmVkVGV4dCA6IFwiXCI7IH1cbiAgICBwdWJsaWMgYWRkRXJyb3IoZXJyb3I6IFN1cnZleUVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmVycm9yc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tGb3JFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBlcnJvckxlbmd0aCA9IHRoaXMuZXJyb3JzID8gdGhpcy5lcnJvcnMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNoZWNrRm9yRXJyb3JzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA9PSAwICYmIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMucnVuVmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ICYmIHRoaXMuZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnN1cnZleS52YWxpZGF0ZVF1ZXN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyZUNhbGxiYWNrICYmIChlcnJvckxlbmd0aCAhPSB0aGlzLmVycm9ycy5sZW5ndGggfHwgZXJyb3JMZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1JlcXVpcmVkRXJyb3IoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgQW5zd2VyUmVxdWlyZWRFcnJvcigpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFzUmVxdWlyZWRFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZXF1aXJlZCAmJiB0aGlzLmlzRW1wdHkoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJ1blZhbGlkYXRvcnMoKTogU3VydmV5RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJ1bm5lcigpLnJ1bih0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZUluRGF0YShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlSW5EYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsdWVDaGFuZ2VkSW5TdXJ2ZXkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZVRvRGF0YShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlQ29yZShuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZUNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEgIT0gbnVsbCA/IHRoaXMuZGF0YS5nZXRWYWx1ZSh0aGlzLm5hbWUpIDogdGhpcy5xdWVzdGlvblZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFZhbHVlQ29yZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldFZhbHVlKHRoaXMubmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGEodmFsOiBhbnkpOiBhbnkgeyByZXR1cm4gdmFsOyB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhKHZhbDogYW55KTogYW55IHsgcmV0dXJuIHZhbDsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHsgfVxuICAgIHByb3RlY3RlZCBzZXROZXdDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0Q29tbWVudCh0aGlzLm5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHRoaXMucXVlc3Rpb25Db21tZW50ID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIC8vSVF1ZXN0aW9uXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzVmFsdWVDaGFuZ2VkSW5TdXJ2ZXkgPSB0cnVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZUZyb21EYXRhKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb21tZW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5pc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vSVZhbGlkYXRvck93bmVyXG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJxdWVzdGlvblwiLCBbeyBuYW1lOiBcInRpdGxlOnRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoudGl0bGVWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJjb21tZW50VGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jb21tZW50VGV4dFZhbHVlOyB9IH0sXG4gICAgXCJpc1JlcXVpcmVkOmJvb2xlYW5cIiwgeyBuYW1lOiBcInZhbGlkYXRvcnM6dmFsaWRhdG9yc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXZhbGlkYXRvclwiLCBjbGFzc05hbWVQYXJ0OiBcInZhbGlkYXRvclwifV0sIG51bGwsIFwicXVlc3Rpb25iYXNlXCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbi50cyIsImltcG9ydCB7QmFzZSwgSVF1ZXN0aW9uLCBJQ29uZGl0aW9uUnVubmVyLCBJU3VydmV5RGF0YSwgSVN1cnZleSwgSGFzaFRhYmxlfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tICcuL2pzb25vYmplY3QnO1xuaW1wb3J0IHtDb25kaXRpb25SdW5uZXJ9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkJhc2UgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVF1ZXN0aW9uLCBJQ29uZGl0aW9uUnVubmVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBxdWVzdGlvbkNvdW50ZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UXVlc3Rpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcV9cIiArIFF1ZXN0aW9uQmFzZS5xdWVzdGlvbkNvdW50ZXIrKztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGRhdGE6IElTdXJ2ZXlEYXRhO1xuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IElTdXJ2ZXk7XG4gICAgcHJpdmF0ZSBjb25kaXRpb25SdW5uZXI6IENvbmRpdGlvblJ1bm5lciA9IG51bGw7XG4gICAgcHVibGljIHZpc2libGVJZjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGlkVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIHZpc2libGVWYWx1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHN0YXJ0V2l0aE5ld0xpbmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgdmlzaWJsZUluZGV4VmFsdWU6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHJlbmRlcldpZHRoVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSByaWdodEluZGVudFZhbHVlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpbmRlbnQ6IG51bWJlciA9IDA7XG4gICAgZm9jdXNDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICByZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICByb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgdmlzaWJsZUluZGV4Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkVmFsdWUgPSBRdWVzdGlvbkJhc2UuZ2V0UXVlc3Rpb25JZCgpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52aXNpYmxlVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHZpc2libGUodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnJvd1Zpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnF1ZXN0aW9uVmlzaWJpbGl0eUNoYW5nZWQoPElRdWVzdGlvbj50aGlzLCB0aGlzLnZpc2libGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnZpc2libGVJbmRleFZhbHVlOyB9XG4gICAgcHVibGljIGhhc0Vycm9ycyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHB1YmxpYyBnZXQgY3VycmVudEVycm9yQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDA7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc1RpdGxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc0lucHV0KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnQoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWRWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgcmVuZGVyV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucmVuZGVyV2lkdGhWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgcmVuZGVyV2lkdGgodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLnJlbmRlcldpZHRoKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyV2lkdGhWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcmlnaHRJbmRlbnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMucmlnaHRJbmRlbnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgcmlnaHRJbmRlbnQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLnJpZ2h0SW5kZW50KSByZXR1cm47XG4gICAgICAgIHRoaXMucmlnaHRJbmRlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBmb2N1cyhvbkVycm9yOiBib29sZWFuID0gZmFsc2UpIHsgfVxuICAgIHNldERhdGEobmV3VmFsdWU6IElTdXJ2ZXlEYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnN1cnZleSA9IChuZXdWYWx1ZSAmJiBuZXdWYWx1ZVtcInF1ZXN0aW9uQWRkZWRcIl0pID8gPElTdXJ2ZXk+bmV3VmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLm9uU2V0RGF0YSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZmlyZUNhbGxiYWNrKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU2V0RGF0YSgpIHsgfVxuICAgIHByb3RlY3RlZCBvbkNyZWF0aW5nKCkgeyB9XG4gICAgcHVibGljIHJ1bkNvbmRpdGlvbih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlSWYpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvblJ1bm5lcikgdGhpcy5jb25kaXRpb25SdW5uZXIgPSBuZXcgQ29uZGl0aW9uUnVubmVyKHRoaXMudmlzaWJsZUlmKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb25SdW5uZXIuZXhwcmVzc2lvbiA9IHRoaXMudmlzaWJsZUlmO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLmNvbmRpdGlvblJ1bm5lci5ydW4odmFsdWVzKTtcbiAgICB9XG4gICAgLy9JUXVlc3Rpb25cbiAgICBvblN1cnZleVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KSB7XG4gICAgfVxuICAgIG9uU3VydmV5TG9hZCgpIHtcbiAgICB9XG4gICAgc2V0VmlzaWJsZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZUluZGV4VmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy52aXNpYmxlSW5kZXhWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnZpc2libGVJbmRleENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gZmFsc2U7IH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJxdWVzdGlvbmJhc2VcIiwgW1wiIW5hbWVcIiwgeyBuYW1lOiBcInZpc2libGU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sIFwidmlzaWJsZUlmOnRleHRcIixcbiAgICB7IG5hbWU6IFwid2lkdGhcIiB9LCB7IG5hbWU6IFwic3RhcnRXaXRoTmV3TGluZTpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWV9LCB7bmFtZTogXCJpbmRlbnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDAsIGNob2ljZXM6IFswLCAxLCAyLCAzXX1dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25iYXNlLnRzIiwiZXhwb3J0IGNsYXNzIFRleHRQcmVQcm9jZXNzb3JJdGVtIHtcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0UHJlUHJvY2Vzc29yIHtcbiAgICBwdWJsaWMgb25Qcm9jZXNzOiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XG4gICAgcHVibGljIG9uSGFzVmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgcHJvY2Vzcyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRleHQpIHJldHVybiB0ZXh0O1xuICAgICAgICBpZiAoIXRoaXMub25Qcm9jZXNzKSByZXR1cm4gdGV4dDtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyh0ZXh0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5hbWUodGV4dC5zdWJzdHJpbmcoaXRlbS5zdGFydCArIDEsIGl0ZW0uZW5kKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2Vzc05hbWUobmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMub25IYXNWYWx1ZSAmJiAhdGhpcy5vbkhhc1ZhbHVlKG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMub25Qcm9jZXNzKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cigwLCBpdGVtLnN0YXJ0KSArIHZhbHVlICsgdGV4dC5zdWJzdHIoaXRlbS5lbmQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJdGVtcyh0ZXh0OiBzdHJpbmcpOiBBcnJheTxUZXh0UHJlUHJvY2Vzc29ySXRlbT4ge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgICAgICB2YXIgc3RhcnQgPSAtMTtcbiAgICAgICAgdmFyIGNoID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChjaCA9PSAneycpIHN0YXJ0ID0gaTtcbiAgICAgICAgICAgIGlmIChjaCA9PSAnfScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXh0UHJlUHJvY2Vzc29ySXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnQgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIG5hbWUudHJpbSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNhblByb2Nlc3NOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSBuYW1lW2ldO1xuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgICAgICBpZiAoY2ggPT0gJyAnIHx8IGNoID09ICctJyB8fCBjaCA9PSAnJicpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHRQcmVQcm9jZXNzb3IudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0l0ZW1WYWx1ZSwgU3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtDaG9pY2VzUmVzdGZ1bGx9IGZyb20gXCIuL2Nob2ljZXNSZXN0ZnVsbFwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TZWxlY3RCYXNlIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHByaXZhdGUgdmlzaWJsZUNob2ljZXNDYWNoZTogQXJyYXk8SXRlbVZhbHVlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjb21tZW50VmFsdWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY2FjaGVkVmFsdWU6IGFueTtcbiAgICBvdGhlckl0ZW06IEl0ZW1WYWx1ZSA9IG5ldyBJdGVtVmFsdWUoXCJvdGhlclwiLCBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKSk7XG4gICAgcHJpdmF0ZSBjaG9pY2VzRnJvbVVybDogQXJyYXk8SXRlbVZhbHVlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRWYWx1ZUZvclVybFJlcXVlc3Rpb246IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWVzOiBBcnJheTxJdGVtVmFsdWU+ID0gbmV3IEFycmF5PEl0ZW1WYWx1ZT4oKTtcbiAgICBwdWJsaWMgY2hvaWNlc0J5VXJsOiBDaG9pY2VzUmVzdGZ1bGw7XG4gICAgcHVibGljIG90aGVyRXJyb3JUZXh0OiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgY2hvaWNlc09yZGVyVmFsdWU6IHN0cmluZyA9IFwibm9uZVwiO1xuICAgIGNob2ljZXNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLmNob2ljZXNCeVVybCA9IHRoaXMuY3JlYXRlUmVzdGZ1bGwoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNob2ljZXNCeVVybC5nZXRSZXN1bHRDYWxsYmFjayA9IGZ1bmN0aW9uIChpdGVtczogQXJyYXk8SXRlbVZhbHVlPikgeyBzZWxmLm9uTG9hZENob2ljZXNGcm9tVXJsKGl0ZW1zKSB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzT3RoZXJTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSA/IHRoaXMuZ2V0SGFzT3RoZXIodGhpcy52YWx1ZSkgOiB0aGlzLmdldEhhc090aGVyKHRoaXMuY2FjaGVkVmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SGFzT3RoZXIodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlc3RmdWxsKCk6IENob2ljZXNSZXN0ZnVsbCB7IHJldHVybiBuZXcgQ2hvaWNlc1Jlc3RmdWxsKCk7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29tbWVudCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKSByZXR1cm4gc3VwZXIuZ2V0Q29tbWVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50VmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTZXR0aW5nQ29tbWVudDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzZXRDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSlcbiAgICAgICAgICAgIHN1cGVyLnNldENvbW1lbnQobmV3VmFsdWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NldHRpbmdDb21tZW50ICYmIG5ld1ZhbHVlICE9IHRoaXMuY29tbWVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NldHRpbmdDb21tZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3RoZXJTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE5ld1ZhbHVlSW5EYXRhKHRoaXMuY2FjaGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzU2V0dGluZ0NvbW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0TmV3VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHRoaXMuY2FjaGVkVmFsdWVGb3JVcmxSZXF1ZXN0aW9uID0gbmV3VmFsdWU7ICAgICAgICBcbiAgICAgICAgc3VwZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVGcm9tRGF0YSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkpIHJldHVybiBzdXBlci52YWx1ZUZyb21EYXRhKHZhbCk7XG4gICAgICAgIHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlRnJvbURhdGFDb3JlKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0RhdGEodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKSByZXR1cm4gc3VwZXIudmFsdWVUb0RhdGEodmFsKTtcbiAgICAgICAgdGhpcy5jYWNoZWRWYWx1ZSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUb0RhdGFDb3JlKHZhbCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZUZyb21EYXRhQ29yZSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNVbmtub3duVmFsdWUodmFsKSkgcmV0dXJuIHZhbDtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZSkgcmV0dXJuIHZhbDtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcy5vdGhlckl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YUNvcmUodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodmFsID09IHRoaXMub3RoZXJJdGVtLnZhbHVlICYmIHRoaXMuZ2V0Q29tbWVudCgpKSB7XG4gICAgICAgICAgICB2YWwgPSB0aGlzLmdldENvbW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFzVW5rbm93blZhbHVlKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmFsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuYWN0aXZlQ2hvaWNlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLnZhbHVlID09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlczsgfVxuICAgIHNldCBjaG9pY2VzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY2hvaWNlc1ZhbHVlcywgbmV3VmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmlzaWJsZUNob2ljZXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBoYXNPdGhlckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hvaWNlc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgZ2V0IGNob2ljZXNPcmRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jaG9pY2VzT3JkZXJWYWx1ZTsgfVxuICAgIHNldCBjaG9pY2VzT3JkZXIobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT0gdGhpcy5jaG9pY2VzT3JkZXJWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNob2ljZXNPcmRlclZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hvaWNlc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgZ2V0IG90aGVyVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vdGhlckl0ZW0udGV4dDsgfVxuICAgIHNldCBvdGhlclRleHQodmFsdWU6IHN0cmluZykgeyB0aGlzLm90aGVySXRlbS50ZXh0ID0gdmFsdWU7IH1cbiAgICBnZXQgdmlzaWJsZUNob2ljZXMoKTogQXJyYXk8SXRlbVZhbHVlPiB7XG4gICAgICAgIGlmICghdGhpcy5oYXNPdGhlciAmJiB0aGlzLmNob2ljZXNPcmRlciA9PSBcIm5vbmVcIikgcmV0dXJuIHRoaXMuYWN0aXZlQ2hvaWNlcztcbiAgICAgICAgaWYoIXRoaXMudmlzaWJsZUNob2ljZXNDYWNoZSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ2hvaWNlc0NhY2hlID0gdGhpcy5zb3J0VmlzaWJsZUNob2ljZXModGhpcy5hY3RpdmVDaG9pY2VzLnNsaWNlKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3RoZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUucHVzaCh0aGlzLm90aGVySXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZUNob2ljZXNDYWNoZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgYWN0aXZlQ2hvaWNlcygpOiBBcnJheTxJdGVtVmFsdWU+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc0Zyb21VcmwgPyB0aGlzLmNob2ljZXNGcm9tVXJsIDogdGhpcy5jaG9pY2VzOyB9XG4gICAgcHVibGljIHN1cHBvcnRDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHB1YmxpYyBzdXBwb3J0T3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHJvdGVjdGVkIG9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzOiBBcnJheTxTdXJ2ZXlFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIub25DaGVja0ZvckVycm9ycyhlcnJvcnMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNPdGhlclNlbGVjdGVkIHx8IHRoaXMuY29tbWVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgdGV4dCA9IHRoaXMub3RoZXJFcnJvclRleHQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgdGV4dCA9IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlclJlcXVpcmVkRXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3JzLnB1c2gobmV3IEN1c3RvbUVycm9yKHRleHQpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkgeyByZXR1cm4gdGhpcy5zdG9yZU90aGVyc0FzQ29tbWVudCAmJiAodGhpcy5zdXJ2ZXkgIT0gbnVsbCA/IHRoaXMuc3VydmV5LnN0b3JlT3RoZXJzQXNDb21tZW50IDogdHJ1ZSk7IH1cbiAgICBvblN1cnZleUxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZXNCeVVybCkgdGhpcy5jaG9pY2VzQnlVcmwucnVuKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Mb2FkQ2hvaWNlc0Zyb21VcmwoYXJyYXk6IEFycmF5PEl0ZW1WYWx1ZT4pIHtcbiAgICAgICAgdmFyIGVycm9yQ291bnQgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIGlmICh0aGlzLmNob2ljZXNCeVVybCAmJiB0aGlzLmNob2ljZXNCeVVybC5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh0aGlzLmNob2ljZXNCeVVybC5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yQ291bnQgPiAwIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3Q2hvaWNlcyA9IG51bGw7XG4gICAgICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBuZXdDaG9pY2VzID0gbmV3IEFycmF5PEl0ZW1WYWx1ZT4oKTtcbiAgICAgICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKG5ld0Nob2ljZXMsIGFycmF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNob2ljZXNGcm9tVXJsID0gbmV3Q2hvaWNlcztcbiAgICAgICAgdGhpcy5vblZpc2libGVDaG9pY2VzQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRWYWx1ZUZvclVybFJlcXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNhY2hlZFZhbHVlRm9yVXJsUmVxdWVzdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG9uVmlzaWJsZUNob2ljZXNDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwcml2YXRlIHNvcnRWaXNpYmxlQ2hvaWNlcyhhcnJheTogQXJyYXk8SXRlbVZhbHVlPik6IEFycmF5PEl0ZW1WYWx1ZT4ge1xuICAgICAgICB2YXIgb3JkZXIgPSB0aGlzLmNob2ljZXNPcmRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAob3JkZXIgPT0gXCJhc2NcIikgcmV0dXJuIHRoaXMuc29ydEFycmF5KGFycmF5LCAxKTtcbiAgICAgICAgaWYgKG9yZGVyID09IFwiZGVzY1wiKSByZXR1cm4gdGhpcy5zb3J0QXJyYXkoYXJyYXksIC0xKTtcbiAgICAgICAgaWYgKG9yZGVyID09IFwicmFuZG9tXCIpIHJldHVybiB0aGlzLnJhbmRvbWl6ZUFycmF5KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBwcml2YXRlIHNvcnRBcnJheShhcnJheTogQXJyYXk8SXRlbVZhbHVlPiwgbXVsdDogbnVtYmVyKTogQXJyYXk8SXRlbVZhbHVlPiB7XG4gICAgICAgIHJldHVybiBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS50ZXh0IDwgYi50ZXh0KSByZXR1cm4gLTEgKiBtdWx0O1xuICAgICAgICAgICAgaWYgKGEudGV4dCA+IGIudGV4dCkgcmV0dXJuIDEgKiBtdWx0O1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIHJhbmRvbWl6ZUFycmF5KGFycmF5OiBBcnJheTxJdGVtVmFsdWU+KTogQXJyYXk8SXRlbVZhbHVlPiB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ2hlY2tib3hCYXNlIGV4dGVuZHMgUXVlc3Rpb25TZWxlY3RCYXNlIHtcbiAgICBwcml2YXRlIGNvbENvdW50VmFsdWU6IG51bWJlciA9IDE7XG4gICAgY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2xDb3VudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb2xDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiA0KSByZXR1cm47XG4gICAgICAgIHRoaXMuY29sQ291bnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2VsZWN0YmFzZVwiLCBbXCJoYXNDb21tZW50OmJvb2xlYW5cIiwgXCJoYXNPdGhlcjpib29sZWFuXCIsXG4gICAgeyBuYW1lOiBcImNob2ljZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LFxuICAgIHsgbmFtZTogXCJjaG9pY2VzT3JkZXJcIiwgZGVmYXVsdDogXCJub25lXCIsIGNob2ljZXM6IFtcIm5vbmVcIiwgXCJhc2NcIiwgXCJkZXNjXCIsIFwicmFuZG9tXCJdIH0sXG4gICAgeyBuYW1lOiBcImNob2ljZXNCeVVybDpyZXN0ZnVsbFwiLCBjbGFzc05hbWU6IFwiQ2hvaWNlc1Jlc3RmdWxsXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLmNob2ljZXNCeVVybC5pc0VtcHR5ID8gbnVsbCA6IG9iai5jaG9pY2VzQnlVcmw7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmouY2hvaWNlc0J5VXJsLnNldERhdGEodmFsdWUpOyB9IH0sXG4gICAgeyBuYW1lOiBcIm90aGVyVGV4dFwiLCBkZWZhdWx0OiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKSB9LCBcIm90aGVyRXJyb3JUZXh0XCIsXG4gICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50OmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZX1dLCBudWxsLCBcInF1ZXN0aW9uXCIpO1xuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY2hlY2tib3hiYXNlXCIsIFt7IG5hbWU6IFwiY29sQ291bnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDEsIGNob2ljZXM6IFswLCAxLCAyLCAzLCA0XSB9XSwgbnVsbCwgXCJzZWxlY3RiYXNlXCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwiaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gJy4vcXVlc3Rpb25iYXNlJztcbmltcG9ydCB7SGFzaFRhYmxlfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkZhY3Rvcnkge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFF1ZXN0aW9uRmFjdG9yeSA9IG5ldyBRdWVzdGlvbkZhY3RvcnkoKTtcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRDaG9pY2VzID0gW1wib25lXCIsIFwidHdvfHNlY29uZCB2YWx1ZVwiLCBcInRocmVlfHRoaXJkIHZhbHVlXCJdO1xuICAgIHByaXZhdGUgY3JlYXRvckhhc2g6IEhhc2hUYWJsZTwobmFtZTogc3RyaW5nKSA9PiBRdWVzdGlvbkJhc2U+ID0ge307XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgcXVlc3Rpb25DcmVhdG9yOiAobmFtZTogc3RyaW5nKSA9PiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy5jcmVhdG9ySGFzaFtxdWVzdGlvblR5cGVdID0gcXVlc3Rpb25DcmVhdG9yO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0QWxsVHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICBmb3IodmFyIGtleSBpbiB0aGlzLmNyZWF0b3JIYXNoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuc29ydCgpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIHZhciBjcmVhdG9yID0gdGhpcy5jcmVhdG9ySGFzaFtxdWVzdGlvblR5cGVdO1xuICAgICAgICBpZiAoY3JlYXRvciA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0b3IobmFtZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbmZhY3RvcnkudHMiLCJpbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UsXG4gICAgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsXG4gICAgSU1hdHJpeERyb3Bkb3duRGF0YVxufSBmcm9tIFwiLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duUm93TW9kZWwgZXh0ZW5kcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IGFueSwgcHVibGljIHRleHQ6IHN0cmluZywgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcihkYXRhLCB2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcbiAgICBwcml2YXRlIHJvd3NWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm1hdHJpeGRyb3Bkb3duXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93cygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMucm93c1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCByb3dzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMucm93c1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZVJvd3MoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbD4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWw+KCk7XG4gICAgICAgIGlmICghdGhpcy5yb3dzIHx8IHRoaXMucm93cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucm93c1tpXS52YWx1ZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLnJvd3NbaV0udmFsdWUsIHRoaXMucm93c1tpXS50ZXh0LCB2YWxbdGhpcy5yb3dzW2ldLnZhbHVlXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3cobmFtZTogYW55LCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBNYXRyaXhEcm9wZG93blJvd01vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhEcm9wZG93blJvd01vZGVsKG5hbWUsIHRleHQsIHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkcm9wZG93blwiLCBbeyBuYW1lOiBcInJvd3M6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5yb3dzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5yb3dzID0gdmFsdWU7IH19XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsKFwiXCIpOyB9LCBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkcm9wZG93blwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFsxLCAyLCAzLCA0LCA1XTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bi50cyIsImltcG9ydCB7UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZSxcbiAgICBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgSU1hdHJpeERyb3Bkb3duRGF0YVxufSBmcm9tIFwiLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7Q3VzdG9tRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhEeW5hbWljUm93TW9kZWwgZXh0ZW5kcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGluZGV4OiBudW1iZXIsIGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGEsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoZGF0YSwgdmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd05hbWUoKSB7IHJldHVybiBcInJvd1wiICsgdGhpcy5pbmRleDsgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlIGltcGxlbWVudHMgSU1hdHJpeERyb3Bkb3duRGF0YSB7XG4gICAgc3RhdGljIE1heFJvd0NvdW50ID0gMTAwO1xuICAgIHByaXZhdGUgcm93Q291bnRlciA9IDA7XG4gICAgcHJpdmF0ZSByb3dDb3VudFZhbHVlOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgYWRkUm93VGV4dFZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgcmVtb3ZlUm93VGV4dFZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBtaW5Sb3dDb3VudCA9IDA7XG4gICAgcHVibGljIHJvd0NvdW50Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm1hdHJpeGR5bmFtaWNcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCByb3dDb3VudCgpIHsgcmV0dXJuIHRoaXMucm93Q291bnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgcm93Q291bnQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbCA8IDAgfHwgdmFsID4gUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwuTWF4Um93Q291bnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb3dDb3VudFZhbHVlID0gdmFsO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IHZhbCkge1xuICAgICAgICAgICAgdmFyIHFWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgcVZhbC5zcGxpY2UodmFsKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBxVmFsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucm93Q291bnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUm93KCkge1xuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5wdXNoKHRoaXMuY3JlYXRlTWF0cml4Um93KG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvd0NvdW50Kys7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucm93Q291bnQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgJiYgaW5kZXggPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHZhbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdmFsID0gdGhpcy5kZWxldGVSb3dWYWx1ZSh2YWwsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvd0NvdW50LS07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYWRkUm93VGV4dCgpIHsgcmV0dXJuIHRoaXMuYWRkUm93VGV4dFZhbHVlID8gdGhpcy5hZGRSb3dUZXh0VmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYWRkUm93XCIpOyB9XG4gICAgcHVibGljIHNldCBhZGRSb3dUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hZGRSb3dUZXh0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCByZW1vdmVSb3dUZXh0KCkgeyByZXR1cm4gdGhpcy5yZW1vdmVSb3dUZXh0VmFsdWUgPyB0aGlzLnJlbW92ZVJvd1RleHRWYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJyZW1vdmVSb3dcIik7IH1cbiAgICBwdWJsaWMgc2V0IHJlbW92ZVJvd1RleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlbW92ZVJvd1RleHRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNhY2hlZFZpc2libGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPiB7XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzICYmIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoID09IHRoaXMucm93Q291bnQpIHJldHVybiB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzO1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUm93cztcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzOiBBcnJheTxTdXJ2ZXlFcnJvcj4pIHtcbiAgICAgICAgc3VwZXIub25DaGVja0ZvckVycm9ycyhlcnJvcnMpO1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvckluUm93cygpKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1pblJvd0NvdW50RXJyb3JcIilbXCJmb3JtYXRcIl0odGhpcy5taW5Sb3dDb3VudCkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Sb3dzKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5taW5Sb3dDb3VudCA8PSAwIHx8ICF0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciByZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNldFJvd0NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICBpZiAoIXJvdy5pc0VtcHR5KSBzZXRSb3dDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRSb3dDb3VudCA8IHRoaXMubWluUm93Q291bnQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZVJvd3MoKTogQXJyYXk8TWF0cml4RHluYW1pY1Jvd01vZGVsPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8TWF0cml4RHluYW1pY1Jvd01vZGVsPigpO1xuICAgICAgICBpZiAodGhpcy5yb3dDb3VudCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuY3JlYXRlTmV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLmdldFJvd1ZhbHVlQnlJbmRleCh2YWwsIGkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1hdHJpeFJvdyh2YWx1ZTogYW55KTogTWF0cml4RHluYW1pY1Jvd01vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhEeW5hbWljUm93TW9kZWwodGhpcy5yb3dDb3VudGVyICsrLCB0aGlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdWYWx1ZShjdXJWYWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1clZhbHVlO1xuICAgICAgICBpZiAoIXJlc3VsdCkgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciByID0gW107XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gdGhpcy5yb3dDb3VudCkgcmVzdWx0LnNwbGljZSh0aGlzLnJvd0NvdW50IC0gMSk7XG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoOyBpIDwgdGhpcy5yb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGRlbGV0ZVJvd1ZhbHVlKG5ld1ZhbHVlOiBhbnksIHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UpOiBhbnkge1xuICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3VmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdWYWx1ZVtpXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNFbXB0eSA/IG51bGwgOiBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJvd1ZhbHVlQnlJbmRleChxdWVzdGlvblZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHF1ZXN0aW9uVmFsdWUubGVuZ3RoID8gcXVlc3Rpb25WYWx1ZVtpbmRleF0gOiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Um93VmFsdWUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgcXVlc3Rpb25WYWx1ZTogYW55LCBjcmVhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJvd1ZhbHVlQnlJbmRleChxdWVzdGlvblZhbHVlLCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmluZGV4T2Yocm93KSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHluYW1pY1wiLCBbeyBuYW1lOiBcInJvd0NvdW50Om51bWJlclwiLCBkZWZhdWx0OiAyIH0sIHsgbmFtZTogXCJtaW5Sb3dDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMCB9LFxuICAgICAgICB7IG5hbWU6IFwiYWRkUm93VGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5hZGRSb3dUZXh0VmFsdWU7IH0gfSxcbiAgICAgICAgeyBuYW1lOiBcInJlbW92ZVJvd1RleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucmVtb3ZlUm93VGV4dFZhbHVlOyB9IH1dLFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbChcIlwiKTsgfSwgXCJtYXRyaXhkcm9wZG93bmJhc2VcIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHluYW1pY1wiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbChuYW1lKTsgcS5jaG9pY2VzID0gWzEsIDIsIDMsIDQsIDVdOyBxLmFkZENvbHVtbihcIkNvbHVtbiAxXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAyXCIpOyBxLmFkZENvbHVtbihcIkNvbHVtbiAzXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGR5bmFtaWMudHMiLCJpbXBvcnQge0Jhc2UsIEl0ZW1WYWx1ZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gJy4vc3VydmV5U3RyaW5ncyc7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhEYXRhIHtcbiAgICBvbk1hdHJpeFJvd0NoYW5nZWQocm93OiBNYXRyaXhSb3dNb2RlbCk7XG59XG5leHBvcnQgY2xhc3MgTWF0cml4Um93TW9kZWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBwcml2YXRlIGRhdGE6IElNYXRyaXhEYXRhO1xuICAgIHByb3RlY3RlZCByb3dWYWx1ZTogYW55OyBcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnksIHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBkYXRhOiBJTWF0cml4RGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJvd1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLnJvd1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMucm93VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkgdGhpcy5kYXRhLm9uTWF0cml4Um93Q2hhbmdlZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiBpbXBsZW1lbnRzIElNYXRyaXhEYXRhIHtcbiAgICBwcml2YXRlIGNvbHVtbnNWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIHJvd3NWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIGlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGdlbmVyYXRlZFZpc2libGVSb3dzOiBBcnJheTxNYXRyaXhSb3dNb2RlbD47XG4gICAgcHVibGljIGlzQWxsUm93UmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtYXRyaXhcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNSb3dzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzVmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZ2V0IGNvbHVtbnMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNvbHVtbnNWYWx1ZTsgfVxuICAgIHNldCBjb2x1bW5zKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY29sdW1uc1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGdldCByb3dzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yb3dzVmFsdWU7IH1cbiAgICBzZXQgcm93cyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLnJvd3NWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVSb3dzKCk6IEFycmF5PE1hdHJpeFJvd01vZGVsPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8TWF0cml4Um93TW9kZWw+KCk7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucm93c1tpXS52YWx1ZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLnJvd3NbaV0udmFsdWUsIHRoaXMucm93c1tpXS50ZXh0LCB0aGlzLm5hbWUgKyAnXycgKyB0aGlzLnJvd3NbaV0udmFsdWUudG9TdHJpbmcoKSwgdmFsW3RoaXMucm93c1tpXS52YWx1ZV0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyhudWxsLCBcIlwiLCB0aGlzLm5hbWUsIHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3JJblJvd3MoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkSW5BbGxSb3dzRXJyb3JcIikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Sb3dzKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbGxSb3dSZXF1aXJlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcm93cyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3M7XG4gICAgICAgIGlmICghcm93cykgcm93cyA9IHRoaXMudmlzaWJsZVJvd3M7XG4gICAgICAgIGlmICghcm93cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSByb3dzW2ldLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCF2YWwpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCBmdWxsTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4Um93TW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvd01vZGVsKG5hbWUsIHRleHQsIGZ1bGxOYW1lLCB0aGlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dDaGFuZ2luZyB8fCAhKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHx8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdmFsKSB2YWwgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucm93cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1swXS52YWx1ZSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldO1xuICAgICAgICAgICAgICAgIHZhciByb3dWYWwgPSB2YWxbcm93Lm5hbWVdID8gdmFsW3Jvdy5uYW1lXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXS52YWx1ZSA9IHJvd1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLy9JTWF0cml4RGF0YVxuICAgIG9uTWF0cml4Um93Q2hhbmdlZChyb3c6IE1hdHJpeFJvd01vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Jvd3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUocm93LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlW3Jvdy5uYW1lXSA9IHJvdy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeFwiLCBbeyBuYW1lOiBcImNvbHVtbnM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jb2x1bW5zKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jb2x1bW5zID0gdmFsdWU7IH19LFxuICAgIHsgbmFtZTogXCJyb3dzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmoucm93cyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmoucm93cyA9IHZhbHVlOyB9IH0sXG4gICAgXCJpc0FsbFJvd1JlcXVpcmVkOmJvb2xlYW5cIl0sICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhNb2RlbChuYW1lKTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5jb2x1bW5zID0gW1wiQ29sdW1uIDFcIiwgXCJDb2x1bW4gMlwiLCBcIkNvbHVtbiAzXCJdOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX21hdHJpeC50cyIsImltcG9ydCB7QmFzZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlWYWxpZGF0b3IsIElWYWxpZGF0b3JPd25lciwgVmFsaWRhdG9yUnVubmVyfSBmcm9tIFwiLi92YWxpZGF0b3JcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlwbGVUZXh0RGF0YSB7XG4gICAgZ2V0TXVsdGlwbGVUZXh0VmFsdWUobmFtZTogc3RyaW5nKTogYW55O1xuICAgIHNldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZVRleHRJdGVtTW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVZhbGlkYXRvck93bmVyIHtcbiAgICBwcml2YXRlIGRhdGE6IElNdWx0aXBsZVRleHREYXRhO1xuICAgIHByaXZhdGUgdGl0bGVWYWx1ZTogc3RyaW5nO1xuICAgIHZhbGlkYXRvcnM6IEFycmF5PFN1cnZleVZhbGlkYXRvcj4gPSBuZXcgQXJyYXk8U3VydmV5VmFsaWRhdG9yPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IGFueSA9IG51bGwsIHRpdGxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibXVsdGlwbGV0ZXh0aXRlbVwiO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGE6IElNdWx0aXBsZVRleHREYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKSB7IHJldHVybiB0aGlzLnRpdGxlVmFsdWUgPyB0aGlzLnRpdGxlVmFsdWUgOiB0aGlzLm5hbWU7IH1cbiAgICBwdWJsaWMgc2V0IHRpdGxlKG5ld1RleHQ6IHN0cmluZykgeyB0aGlzLnRpdGxlVmFsdWUgPSBuZXdUZXh0OyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5nZXRNdWx0aXBsZVRleHRWYWx1ZSh0aGlzLm5hbWUpIDogbnVsbDtcbiAgICB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldE11bHRpcGxlVGV4dFZhbHVlKHRoaXMubmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB9XG4gICAgLy9JVmFsaWRhdG9yT3duZXJcbiAgICBnZXRWYWxpZGF0b3JUaXRsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50aXRsZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbCBleHRlbmRzIFF1ZXN0aW9uIGltcGxlbWVudHMgSU11bHRpcGxlVGV4dERhdGEge1xuICAgIHByaXZhdGUgY29sQ291bnRWYWx1ZTogbnVtYmVyID0gMTtcbiAgICBjb2xDb3VudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgaXRlbVNpemU6IG51bWJlciA9IDI1O1xuICAgIHByaXZhdGUgaXRlbXNWYWx1ZXM6IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4gPSBuZXcgQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPigpO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXREYXRhKHNlbGYpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5maXJlQ2FsbGJhY2soc2VsZi5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtdWx0aXBsZXRleHRcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBpdGVtcygpOiBBcnJheTxNdWx0aXBsZVRleHRJdGVtTW9kZWw+IHsgcmV0dXJuIHRoaXMuaXRlbXNWYWx1ZXM7IH1cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxNdWx0aXBsZVRleHRJdGVtTW9kZWw+KSB7XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBBZGRJdGVtKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwpOiBNdWx0aXBsZVRleHRJdGVtTW9kZWwge1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY3JlYXRlVGV4dEl0ZW0obmFtZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbENvdW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSB8fCB2YWx1ZSA+IDQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb2xDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Um93cygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIGNvbENvdW50ID0gdGhpcy5jb2xDb3VudDtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgdmFyIHJvd3MgPSBbXTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93c1tyb3dzLmxlbmd0aCAtIDFdLnB1c2goaXRlbXNbaV0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBjb2xDb3VudCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc011bHRpcGxlSXRlbVZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMub25JdGVtVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVUZXh0SXRlbShuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiBNdWx0aXBsZVRleHRJdGVtTW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbChuYW1lLCB0aXRsZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkl0ZW1WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZykgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgKHRoaXMuaXRlbXNbaV0ubmFtZSBpbiB0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZSA9IHRoaXMudmFsdWVbdGhpcy5pdGVtc1tpXS5uYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0ub25WYWx1ZUNoYW5nZWQoaXRlbVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgcnVuVmFsaWRhdG9ycygpOiBTdXJ2ZXlFcnJvciB7XG4gICAgICAgIHZhciBlcnJvciA9IHN1cGVyLnJ1blZhbGlkYXRvcnMoKTtcbiAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHJldHVybiBlcnJvcjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBWYWxpZGF0b3JSdW5uZXIoKS5ydW4odGhpcy5pdGVtc1tpXSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgIT0gbnVsbCkgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvL0lNdWx0aXBsZVRleHREYXRhXG4gICAgZ2V0TXVsdGlwbGVUZXh0VmFsdWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlW25hbWVdO1xuICAgIH1cbiAgICBzZXRNdWx0aXBsZVRleHRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc011bHRpcGxlSXRlbVZhbHVlQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIG5ld1ZhbHVlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgW1wibmFtZVwiLCB7IG5hbWU6IFwidGl0bGVcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoudGl0bGVWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJ2YWxpZGF0b3JzOnZhbGlkYXRvcnNcIiwgYmFzZUNsYXNzTmFtZTogXCJzdXJ2ZXl2YWxpZGF0b3JcIiwgY2xhc3NOYW1lUGFydDogXCJ2YWxpZGF0b3JcIiB9XSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbChcIlwiKTsgfSk7XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtdWx0aXBsZXRleHRcIiwgW3sgbmFtZTogXCIhaXRlbXM6dGV4dGl0ZW1zXCIsIGNsYXNzTmFtZTogXCJtdWx0aXBsZXRleHRpdGVtXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIml0ZW1TaXplOm51bWJlclwiLCBkZWZhdWx0OiAyNSB9LCB7IG5hbWU6IFwiY29sQ291bnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDEsIGNob2ljZXM6IFsxLCAyLCAzLCA0XSB9XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtdWx0aXBsZXRleHRcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbChuYW1lKTsgcS5BZGRJdGVtKFwidGV4dDFcIik7IHEuQWRkSXRlbShcInRleHQyXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX211bHRpcGxldGV4dC50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtCYXNlLCBJUGFnZSwgSUNvbmRpdGlvblJ1bm5lciwgSVN1cnZleSwgSVF1ZXN0aW9uLCBIYXNoVGFibGUsIFN1cnZleUVsZW1lbnQsIFN1cnZleVBhZ2VJZH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uYmFzZVwiO1xuaW1wb3J0IHtDb25kaXRpb25SdW5uZXJ9IGZyb20gXCIuL2NvbmRpdGlvbnNcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUm93TW9kZWwge1xuICAgIHByaXZhdGUgdmlzaWJsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgdmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZTogUGFnZU1vZGVsLCBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlc3Rpb24ucm93VmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblJvd1Zpc2liaWxpdHlDaGFuZ2VkKCk7IH1cbiAgICB9XG4gICAgcHVibGljIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb25CYXNlPiA9IFtdO1xuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmlzaWJsZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsID09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpc2libGVWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHB1YmxpYyB1cGRhdGVWaXNpYmxlKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLmNhbGNWaXNpYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFF1ZXN0aW9uKHE6IFF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKHEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2spIHRoaXMudmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0V2lkdGgoKSB7XG4gICAgICAgIHZhciB2aXNDb3VudCA9IHRoaXMuZ2V0VmlzaWJsZUNvdW50KCk7XG4gICAgICAgIGlmICh2aXNDb3VudCA9PSAwKSByZXR1cm47XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUXVlc3Rpb25WaXNpYmxlKHRoaXMucXVlc3Rpb25zW2ldKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJlbmRlcldpZHRoID0gdGhpcy5xdWVzdGlvbi53aWR0aCA/IHRoaXMucXVlc3Rpb24ud2lkdGggOiBNYXRoLmZsb29yKDEwMCAvIHZpc0NvdW50KSArICclJztcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5yaWdodEluZGVudCA9IGNvdW50ZXIgPCB2aXNDb3VudCAtIDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgb25Sb3dWaXNpYmlsaXR5Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLm9uUm93VmlzaWJpbGl0eUNoYW5nZWQodGhpcyk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmlzaWJsZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHZhciByZXMgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1ZXN0aW9uVmlzaWJsZSh0aGlzLnF1ZXN0aW9uc1tpXSkpIHJlcysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgaXNRdWVzdGlvblZpc2libGUocTogUXVlc3Rpb25CYXNlKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhZ2UuaXNRdWVzdGlvblZpc2libGUocSk7IH1cbiAgICBwcml2YXRlIGNhbGNWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5nZXRWaXNpYmxlQ291bnQoKSA+IDA7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJUGFnZSwgSUNvbmRpdGlvblJ1bm5lciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFnZUNvdW50ZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGFnZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNwX1wiICsgUGFnZU1vZGVsLnBhZ2VDb3VudGVyKys7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpZFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb3dWYWx1ZXM6IEFycmF5PFF1ZXN0aW9uUm93TW9kZWw+ID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbmRpdGlvblJ1bm5lcjogQ29uZGl0aW9uUnVubmVyID0gbnVsbDtcbiAgICBxdWVzdGlvbnM6IEFycmF5PFF1ZXN0aW9uQmFzZT4gPSBuZXcgQXJyYXk8UXVlc3Rpb25CYXNlPigpO1xuICAgIHB1YmxpYyBkYXRhOiBJU3VydmV5ID0gbnVsbDtcbiAgICBwdWJsaWMgdmlzaWJsZUlmOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyB2aXNpYmxlSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbnVtVmFsdWU6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgdmlzaWJsZVZhbHVlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkVmFsdWUgPSBQYWdlTW9kZWwuZ2V0UGFnZUlkKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuc2V0RGF0YShzZWxmLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHJvd3MoKTogQXJyYXk8UXVlc3Rpb25Sb3dNb2RlbD4ge1xuICAgICAgICB0aGlzLnJvd1ZhbHVlcyA9IHRoaXMuYnVpbGRSb3dzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd1ZhbHVlcztcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpIHsgcmV0dXJuICghdGhpcy5kYXRhKSB8fCB0aGlzLmRhdGEuY3VycmVudFBhZ2UgPT0gdGhpczsgfVxuICAgIHB1YmxpYyBpc1F1ZXN0aW9uVmlzaWJsZShxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogYm9vbGVhbiB7IHJldHVybiBxdWVzdGlvbi52aXNpYmxlIHx8IHRoaXMuaXNEZXNpZ25Nb2RlOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJvdyhxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogUXVlc3Rpb25Sb3dNb2RlbCB7IHJldHVybiBuZXcgUXVlc3Rpb25Sb3dNb2RlbCh0aGlzLCBxdWVzdGlvbik7IH1cbiAgICBwcml2YXRlIGdldCBpc0Rlc2lnbk1vZGUoKSB7IHJldHVybiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmlzRGVzaWduTW9kZTsgfVxuICAgIHByaXZhdGUgYnVpbGRSb3dzKCk6IEFycmF5PFF1ZXN0aW9uUm93TW9kZWw+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxRdWVzdGlvblJvd01vZGVsPigpO1xuICAgICAgICB2YXIgbGFzdFJvd1Zpc2libGVJbmRleCA9IC0xO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxID0gdGhpcy5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZVJvdyhxKSk7XG4gICAgICAgICAgICBpZiAocS5zdGFydFdpdGhOZXdMaW5lKSB7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1Zpc2libGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldLmFkZFF1ZXN0aW9uKHEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFJvd1Zpc2libGVJbmRleCA8IDApIGxhc3RSb3dWaXNpYmxlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtsYXN0Um93VmlzaWJsZUluZGV4XS5hZGRRdWVzdGlvbihxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldLnNldFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgb25Sb3dWaXNpYmlsaXR5Q2hhbmdlZChyb3c6IFF1ZXN0aW9uUm93TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8ICF0aGlzLnJvd1ZhbHVlcykgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJvd1ZhbHVlcy5pbmRleE9mKHJvdyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd1ZhbHVlc1tpXS5xdWVzdGlvbnMuaW5kZXhPZihyb3cucXVlc3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd1ZhbHVlc1tpXS51cGRhdGVWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRUaXRsZSgpIHsgcmV0dXJuIHRoaXMuZGF0YSAhPSBudWxsID8gdGhpcy5kYXRhLnByb2Nlc3NUZXh0KHRoaXMudGl0bGUpIDogdGhpcy50aXRsZTsgfVxuICAgIHB1YmxpYyBnZXQgbnVtKCkgeyByZXR1cm4gdGhpcy5udW1WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtVmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5udW1WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uTnVtQ2hhbmdlZCh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmlzaWJsZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZCh0aGlzLCB0aGlzLnZpc2libGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInBhZ2VcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4geyAgcmV0dXJuIHRoaXMuZ2V0SXNQYWdlVmlzaWJsZShudWxsKTsgfVxuICAgIHB1YmxpYyBnZXRJc1BhZ2VWaXNpYmxlKGV4Y2VwdGlvblF1ZXN0aW9uOiBJUXVlc3Rpb24pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zW2ldID09IGV4Y2VwdGlvblF1ZXN0aW9uKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UsIGluZGV4OiBudW1iZXIgPSAtMSkge1xuICAgICAgICBpZiAocXVlc3Rpb24gPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaChxdWVzdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDAsIHF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uLnNldERhdGEodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5xdWVzdGlvbkFkZGVkKHF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFkZE5ld1F1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBRdWVzdGlvbkJhc2Uge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSBRdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBuYW1lKTtcbiAgICAgICAgdGhpcy5hZGRRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHJldHVybiBxdWVzdGlvbjtcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB0aGlzLmRhdGEucXVlc3Rpb25SZW1vdmVkKHF1ZXN0aW9uKTtcbiAgICB9XG4gICAgcHVibGljIGZvY3VzRmlyc3RRdWVzdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uLnZpc2libGUgfHwgIXF1ZXN0aW9uLmhhc0lucHV0KSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmZvY3VzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZm9jdXNGaXJzdEVycm9yUXVlc3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSB8fCB0aGlzLnF1ZXN0aW9uc1tpXS5jdXJyZW50RXJyb3JDb3VudCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmZvY3VzKHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNjcm9sbFRvVG9wKCkge1xuICAgICAgICBTdXJ2ZXlFbGVtZW50LlNjcm9sbEVsZW1lbnRUb1RvcChTdXJ2ZXlQYWdlSWQpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUsIGZvY3VzZU9uRmlyc3RFcnJvcjogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZpcnN0RXJyb3JRdWVzdGlvbiA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHRoaXMucXVlc3Rpb25zW2ldLmhhc0Vycm9ycyhmaXJlQ2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzZU9uRmlyc3RFcnJvciAmJiBmaXJzdEVycm9yUXVlc3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVycm9yUXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3RFcnJvclF1ZXN0aW9uKSBmaXJzdEVycm9yUXVlc3Rpb24uZm9jdXModHJ1ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbnNUb0xpc3QobGlzdDogQXJyYXk8SVF1ZXN0aW9uPiwgdmlzaWJsZU9ubHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAodmlzaWJsZU9ubHkgJiYgIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2aXNpYmxlT25seSAmJiAhdGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSkgY29udGludWU7XG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy5xdWVzdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pikge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUlmKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5jb25kaXRpb25SdW5uZXIpIHRoaXMuY29uZGl0aW9uUnVubmVyID0gbmV3IENvbmRpdGlvblJ1bm5lcih0aGlzLnZpc2libGVJZik7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uUnVubmVyLmV4cHJlc3Npb24gPSB0aGlzLnZpc2libGVJZjtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25kaXRpb25SdW5uZXIucnVuKHZhbHVlcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbk51bUNoYW5nZWQodmFsdWU6IG51bWJlcikge1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJwYWdlXCIsIFtcIm5hbWVcIiwgeyBuYW1lOiBcInF1ZXN0aW9uc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInF1ZXN0aW9uXCIgfSwgeyBuYW1lOiBcInZpc2libGU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sIFwidmlzaWJsZUlmXCIsIFwidGl0bGVcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBQYWdlTW9kZWwoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2UudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ2hlY2tib3hNb2RlbCBleHRlbmRzIFF1ZXN0aW9uQ2hlY2tib3hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SGFzT3RoZXIodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF2YWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHZhbC5pbmRleE9mKHRoaXMub3RoZXJJdGVtLnZhbHVlKSA+PSAwO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVGcm9tRGF0YUNvcmUodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkgcmV0dXJuIHZhbDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbFtpXSA9PSB0aGlzLm90aGVySXRlbS52YWx1ZSkgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Vua25vd25WYWx1ZSh2YWxbaV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ID0gdmFsW2ldO1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSB2YWwuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBuZXdWYWxbaV0gPSB0aGlzLm90aGVySXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YUNvcmUodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkgcmV0dXJuIHZhbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWxbaV0gPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb21tZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IHZhbC5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWxbaV0gPSB0aGlzLmdldENvbW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tib3hcIjtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY2hlY2tib3hcIiwgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNoZWNrYm94TW9kZWwoXCJcIik7IH0sIFwiY2hlY2tib3hiYXNlXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjaGVja2JveFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbkNoZWNrYm94TW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9jaGVja2JveC50cyIsImltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29tbWVudE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXIgPSA0O1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXIgPSA1MDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuICAgIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzdXBlci5pc0VtcHR5KCkgfHwgdGhpcy52YWx1ZSA9PSBcIlwiO1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjb21tZW50XCIsIFt7IG5hbWU6IFwiY29sczpudW1iZXJcIiwgZGVmYXVsdDogNTAgfSwgeyBuYW1lOiBcInJvd3M6bnVtYmVyXCIsIGRlZmF1bHQ6IDQgfV0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY29tbWVudFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uQ29tbWVudE1vZGVsKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fY29tbWVudC50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvblNlbGVjdEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkRyb3Bkb3duTW9kZWwgZXh0ZW5kcyBRdWVzdGlvblNlbGVjdEJhc2Uge1xuICAgIHByaXZhdGUgb3B0aW9uc0NhcHRpb25WYWx1ZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0NhcHRpb24oKSB7IHJldHVybiAodGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlKSA/IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvcHRpb25zQ2FwdGlvblwiKTsgfVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0NhcHRpb24obmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUgPSBuZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImRyb3Bkb3duXCI7XG4gICAgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImRyb3Bkb3duXCIsIFt7IG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoub3B0aW9uc0NhcHRpb25WYWx1ZTsgfX1dLFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkRyb3Bkb3duTW9kZWwoXCJcIik7IH0sIFwic2VsZWN0YmFzZVwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25Ecm9wZG93bk1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fZHJvcGRvd24udHMiLCJpbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yLCBFeGNlZWRTaXplRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GaWxlTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiB7XG4gICAgcHJpdmF0ZSBzaG93UHJldmlld1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc1VwbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByZXZpZXdWYWx1ZUxvYWRlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBpbWFnZUhlaWdodDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbWFnZVdpZHRoOiBzdHJpbmc7XG4gICAgcHVibGljIHN0b3JlRGF0YUFzVGV4dDogYm9vbGVhbjtcbiAgICBwdWJsaWMgbWF4U2l6ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImZpbGVcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBzaG93UHJldmlldygpIHsgcmV0dXJuIHRoaXMuc2hvd1ByZXZpZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd1ByZXZpZXcodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5zaG93UHJldmlld1ZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgbG9hZEZpbGUoZmlsZTogRmlsZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSAmJiAhdGhpcy5zdXJ2ZXkudXBsb2FkRmlsZSh0aGlzLm5hbWUsIGZpbGUsIHRoaXMuc3RvcmVEYXRhQXNUZXh0LCBmdW5jdGlvbiAoc3RhdHVzOiBzdHJpbmcpIHsgc2VsZi5pc1VwbG9hZGluZyA9IHN0YXR1cyA9PSBcInVwbG9hZGluZ1wiOyAgfSkpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRGaWxlVmFsdWUoZmlsZSk7XG4gICAgfVxuICAgIHB1YmxpYyBwcmV2aWV3VmFsdWU6IGFueTtcbiAgICBwcm90ZWN0ZWQgc2V0RmlsZVZhbHVlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgaWYgKCFGaWxlUmVhZGVyKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5zaG93UHJldmlldyAmJiAhdGhpcy5zdG9yZURhdGFBc1RleHQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWxlRm9yRXJyb3JzKGZpbGUpKSByZXR1cm47XG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zaG93UHJldmlldykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJldmlld1ZhbHVlID0gc2VsZi5pc0ZpbGVJbWFnZShmaWxlKSA/IGZpbGVSZWFkZXIucmVzdWx0IDogbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDYWxsYmFjayhzZWxmLnByZXZpZXdWYWx1ZUxvYWRlZENhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLnN0b3JlRGF0YUFzVGV4dCkge1xuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUgPSBmaWxlUmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNVcGxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1cGxvYWRpbmdGaWxlXCIpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja0ZpbGVGb3JFcnJvcnMoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgZXJyb3JMZW5ndGggPSB0aGlzLmVycm9ycyA/IHRoaXMuZXJyb3JzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIGlmICh0aGlzLm1heFNpemUgPiAwICYmIGZpbGUuc2l6ZSA+IHRoaXMubWF4U2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgRXhjZWVkU2l6ZUVycm9yKHRoaXMubWF4U2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckxlbmd0aCAhPSB0aGlzLmVycm9ycy5sZW5ndGggfHwgdGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBwcml2YXRlIGlzRmlsZUltYWdlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgaWYgKCFmaWxlIHx8ICFmaWxlLnR5cGUpIHJldHVybjtcbiAgICAgICAgdmFyIHN0ciA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gc3RyLmluZGV4T2YoXCJpbWFnZVwiKSA9PSAwO1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJmaWxlXCIsIFtcInNob3dQcmV2aWV3OmJvb2xlYW5cIiwgXCJpbWFnZUhlaWdodFwiLCBcImltYWdlV2lkdGhcIiwgXCJzdG9yZURhdGFBc1RleHQ6Ym9vbGVhblwiLCBcIm1heFNpemU6bnVtYmVyXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25GaWxlTW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImZpbGVcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkZpbGVNb2RlbChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uX2ZpbGUudHMiLCJpbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uSHRtbE1vZGVsIGV4dGVuZHMgUXVlc3Rpb25CYXNlIHtcbiAgICBwcml2YXRlIGh0bWxWYWx1ZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImh0bWxcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBodG1sKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmh0bWxWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgaHRtbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaHRtbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkSHRtbCgpIHsgcmV0dXJuIHRoaXMuc3VydmV5ID8gdGhpcy5zdXJ2ZXkucHJvY2Vzc0h0bWwodGhpcy5odG1sKSA6IHRoaXMuaHRtbDsgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImh0bWxcIiwgW1wiaHRtbDpodG1sXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sTW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25iYXNlXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJodG1sXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9odG1sLnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlfSBmcm9tIFwiLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbCBleHRlbmRzIFF1ZXN0aW9uQ2hlY2tib3hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyYWRpb2dyb3VwXCI7XG4gICAgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicmFkaW9ncm91cFwiLCBbXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsKFwiXCIpOyB9LCBcImNoZWNrYm94YmFzZVwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYWRpb2dyb3VwXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxO30pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwiaW1wb3J0IHtJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUmF0aW5nTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiB7XG4gICAgc3RhdGljIGRlZmF1bHRSYXRlVmFsdWVzOiBJdGVtVmFsdWVbXSA9IFtdO1xuICAgIHByaXZhdGUgcmF0ZXM6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHVibGljIG1pbmludW1SYXRlRGVzY3JpcHRpb246IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIG1heGltdW1SYXRlRGVzY3JpcHRpb246IHN0cmluZyA9IG51bGw7XG5cbiAgICByYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgZ2V0IHJhdGVWYWx1ZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLnJhdGVzOyB9XG4gICAgc2V0IHJhdGVWYWx1ZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5yYXRlcywgbmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnJhdGVWYWx1ZXNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZVJhdGVWYWx1ZXMoKTogSXRlbVZhbHVlW10ge1xuICAgICAgICBpZiAodGhpcy5yYXRlVmFsdWVzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLnJhdGVWYWx1ZXM7XG4gICAgICAgIHJldHVybiBRdWVzdGlvblJhdGluZ01vZGVsLmRlZmF1bHRSYXRlVmFsdWVzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyYXRpbmdcIjtcbiAgICB9XG4gICAgcHVibGljIHN1cHBvcnRDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHB1YmxpYyBzdXBwb3J0T3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XG59XG5JdGVtVmFsdWUuc2V0RGF0YShRdWVzdGlvblJhdGluZ01vZGVsLmRlZmF1bHRSYXRlVmFsdWVzLCBbMSwgMiwgMywgNCwgNV0pO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInJhdGluZ1wiLCBbXCJoYXNDb21tZW50OmJvb2xlYW5cIiwgeyBuYW1lOiBcInJhdGVWYWx1ZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5yYXRlVmFsdWVzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5yYXRlVmFsdWVzID0gdmFsdWU7IH19LFxuICAgIFwibWluaW51bVJhdGVEZXNjcmlwdGlvblwiLCBcIm1heGltdW1SYXRlRGVzY3JpcHRpb25cIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhdGluZ01vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYXRpbmdcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhdGluZ01vZGVsKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fcmF0aW5nLnRzIiwiaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25UZXh0TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiB7XG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IDI1O1xuICAgIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9IFwidGV4dFwiO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRleHRcIjtcbiAgICB9XG4gICAgaXNFbXB0eSgpOiBib29sZWFuIHsgIHJldHVybiBzdXBlci5pc0VtcHR5KCkgfHwgdGhpcy52YWx1ZSA9PSBcIlwiOyB9XG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmNvcnJlY3RWYWx1ZVR5cGUobmV3VmFsdWUpO1xuICAgICAgICBzdXBlci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjb3JyZWN0VmFsdWVUeXBlKG5ld1ZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIW5ld1ZhbHVlKSByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PSBcIm51bWJlclwiIHx8IHRoaXMuaW5wdXRUeXBlID09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIobmV3VmFsdWUpID8gcGFyc2VGbG9hdChuZXdWYWx1ZSkgOiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc051bWJlcih2YWx1ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwidGV4dFwiLCBbeyBuYW1lOiBcImlucHV0VHlwZVwiLCBkZWZhdWx0OiBcInRleHRcIiwgY2hvaWNlczogW1wiY29sb3JcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcImVtYWlsXCIsIFwibW9udGhcIiwgXCJudW1iZXJcIiwgXCJwYXNzd29yZFwiLCBcInJhbmdlXCIsIFwidGVsXCIsIFwidGV4dFwiLCBcInRpbWVcIiwgXCJ1cmxcIiwgXCJ3ZWVrXCJdIH0sXG4gICAgeyBuYW1lOiBcInNpemU6bnVtYmVyXCIsIGRlZmF1bHQ6IDI1IH1dLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25UZXh0TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XG5cblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwidGV4dFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uVGV4dE1vZGVsKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25fdGV4dC50cyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtCYXNlLCBJU3VydmV5LCBIYXNoVGFibGUsIElRdWVzdGlvbiwgSUNvbmRpdGlvblJ1bm5lciwgSVBhZ2UsIFN1cnZleUVycm9yLCBFdmVudH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtJU3VydmV5VHJpZ2dlck93bmVyLCBTdXJ2ZXlUcmlnZ2VyfSBmcm9tIFwiLi90cmlnZ2VyXCI7XG5pbXBvcnQge1BhZ2VNb2RlbH0gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHtUZXh0UHJlUHJvY2Vzc29yfSBmcm9tIFwiLi90ZXh0UHJlUHJvY2Vzc29yXCI7XG5pbXBvcnQge2R4U3VydmV5U2VydmljZX0gZnJvbSBcIi4vZHhTdXJ2ZXlTZXJ2aWNlXCI7XG5pbXBvcnQge0pzb25FcnJvcn0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tIFwiLi9xdWVzdGlvbmJhc2VcIjtcbmltcG9ydCB7Q3VzdG9tRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlNb2RlbCBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJU3VydmV5LCBJU3VydmV5VHJpZ2dlck93bmVyIHtcbiAgICBwdWJsaWMgc3VydmV5SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN1cnZleVBvc3RJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgY2xpZW50SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGNvb2tpZU5hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHNlbmRSZXN1bHRPblBhZ2VOZXh0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgY29tbWVudFByZWZpeDogc3RyaW5nID0gXCItQ29tbWVudFwiO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgc2hvd05hdmlnYXRpb25CdXR0b25zOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1BhZ2VUaXRsZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjb21wbGV0ZWRIdG1sOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyByZXF1aXJlZFRleHQ6IHN0cmluZyA9IFwiKlwiO1xuICAgIHB1YmxpYyBxdWVzdGlvblN0YXJ0SW5kZXg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHF1ZXN0aW9uVGl0bGVUZW1wbGF0ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzQmFyOiBzdHJpbmcgPSBcIm9mZlwiO1xuICAgIHB1YmxpYyBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGdvTmV4dFBhZ2VBdXRvbWF0aWM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgcGFnZXM6IEFycmF5PFBhZ2VNb2RlbD4gPSBuZXcgQXJyYXk8UGFnZU1vZGVsPigpO1xuICAgIHB1YmxpYyB0cmlnZ2VyczogQXJyYXk8U3VydmV5VHJpZ2dlcj4gPSBuZXcgQXJyYXk8U3VydmV5VHJpZ2dlcj4oKTtcbiAgICBwdWJsaWMgY2xlYXJJbnZpc2libGVWYWx1ZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGN1cnJlbnRQYWdlVmFsdWU6IFBhZ2VNb2RlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSB2YWx1ZXNIYXNoOiBIYXNoVGFibGU8YW55PiA9IHt9O1xuICAgIHByaXZhdGUgdmFyaWFibGVzSGFzaDogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHBhZ2VQcmV2VGV4dFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYWdlTmV4dFRleHRWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcGxldGVUZXh0VmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIHNob3dQYWdlTnVtYmVyc1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzaG93UXVlc3Rpb25OdW1iZXJzVmFsdWU6IHN0cmluZyA9IFwib25cIjtcbiAgICBwcml2YXRlIHF1ZXN0aW9uVGl0bGVMb2NhdGlvblZhbHVlOiBzdHJpbmcgPSBcInRvcFwiO1xuICAgIHByaXZhdGUgbG9jYWxlVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBpc0NvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBwcm9jZXNzZWRUZXh0VmFsdWVzOiBIYXNoVGFibGU8YW55PiA9IHt9O1xuICAgIHByaXZhdGUgdGV4dFByZVByb2Nlc3NvcjogVGV4dFByZVByb2Nlc3NvcjtcbiAgICBwcml2YXRlIGlzVmFsaWRhdGluZ09uU2VydmVyVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBvbkNvbXBsZXRlOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsKSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25DdXJyZW50UGFnZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25WaXNpYmxlQ2hhbmdlZDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblBhZ2VWaXNpYmxlQ2hhbmdlZDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblF1ZXN0aW9uQWRkZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25RdWVzdGlvblJlbW92ZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25WYWxpZGF0ZVF1ZXN0aW9uOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uU2VydmVyVmFsaWRhdGVRdWVzdGlvbnM6IChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueTtcbiAgICBwdWJsaWMgb25Qcm9jZXNzSHRtbDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblNlbmRSZXN1bHQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25HZXRSZXN1bHQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25VcGxvYWRGaWxlOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIGpzb25FcnJvcnM6IEFycmF5PEpzb25FcnJvcj4gPSBudWxsO1xuXG4gICAgcHVibGljIG1vZGU6IHN0cmluZyA9IFwibm9ybWFsXCI7XG5cblxuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3IgPSBuZXcgVGV4dFByZVByb2Nlc3NvcigpO1xuICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3Iub25IYXNWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHNlbGYucHJvY2Vzc2VkVGV4dFZhbHVlc1tuYW1lLnRvTG93ZXJDYXNlKCldOyB9O1xuICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3Iub25Qcm9jZXNzID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykgeyByZXR1cm4gc2VsZi5nZXRQcm9jZXNzZWRUZXh0VmFsdWUobmFtZSk7IH07XG4gICAgICAgIHRoaXMucGFnZXMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUuZGF0YSA9IHNlbGY7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJpZ2dlcnMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUuc2V0T3duZXIoc2VsZik7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlUHJvY2Vzc2VkVGV4dFZhbHVlcygpO1xuICAgICAgICB0aGlzLm9uQmVmb3JlQ3JlYXRpbmcoKTtcbiAgICAgICAgaWYgKGpzb25PYmopIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SnNvbk9iamVjdChqc29uT2JqKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleUlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3VydmV5RnJvbVNlcnZpY2UodGhpcy5zdXJ2ZXlJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNyZWF0aW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInN1cnZleVwiOyB9XG4gICAgcHVibGljIGdldCBsb2NhbGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubG9jYWxlVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgc3VydmV5TG9jYWxpemF0aW9uLmN1cnJlbnRMb2NhbGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldExvY1N0cmluZyhzdHI6IHN0cmluZykgeyByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhzdHIpOyB9XG4gICAgcHVibGljIGdldCBlbXB0eVN1cnZleVRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZ2V0TG9jU3RyaW5nKFwiZW1wdHlTdXJ2ZXlcIik7IH1cbiAgICBwdWJsaWMgZ2V0IHBhZ2VQcmV2VGV4dCgpIHsgcmV0dXJuICh0aGlzLnBhZ2VQcmV2VGV4dFZhbHVlKSA/IHRoaXMucGFnZVByZXZUZXh0VmFsdWUgOiB0aGlzLmdldExvY1N0cmluZyhcInBhZ2VQcmV2VGV4dFwiKTsgfVxuICAgIHB1YmxpYyBzZXQgcGFnZVByZXZUZXh0KG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYWdlUHJldlRleHRWYWx1ZSA9IG5ld1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBwYWdlTmV4dFRleHQoKSB7IHJldHVybiAodGhpcy5wYWdlTmV4dFRleHRWYWx1ZSkgPyB0aGlzLnBhZ2VOZXh0VGV4dFZhbHVlIDogdGhpcy5nZXRMb2NTdHJpbmcoXCJwYWdlTmV4dFRleHRcIik7IH1cbiAgICBwdWJsaWMgc2V0IHBhZ2VOZXh0VGV4dChuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMucGFnZU5leHRUZXh0VmFsdWUgPSBuZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY29tcGxldGVUZXh0KCkgeyByZXR1cm4gKHRoaXMuY29tcGxldGVUZXh0VmFsdWUpID8gdGhpcy5jb21wbGV0ZVRleHRWYWx1ZSA6IHRoaXMuZ2V0TG9jU3RyaW5nKFwiY29tcGxldGVUZXh0XCIpOyB9XG4gICAgcHVibGljIHNldCBjb21wbGV0ZVRleHQobmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLmNvbXBsZXRlVGV4dFZhbHVlID0gbmV3VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHNob3dQYWdlTnVtYmVycygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc2hvd1BhZ2VOdW1iZXJzVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dQYWdlTnVtYmVycyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc2hvd1BhZ2VOdW1iZXJzKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd1BhZ2VOdW1iZXJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNob3dRdWVzdGlvbk51bWJlcnMoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlOyB9O1xuICAgIHB1YmxpYyBzZXQgc2hvd1F1ZXN0aW9uTnVtYmVycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICB9O1xuICAgIHB1YmxpYyBnZXQgcXVlc3Rpb25UaXRsZUxvY2F0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnF1ZXN0aW9uVGl0bGVMb2NhdGlvblZhbHVlOyB9O1xuICAgIHB1YmxpYyBzZXQgcXVlc3Rpb25UaXRsZUxvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnF1ZXN0aW9uVGl0bGVMb2NhdGlvblZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMucXVlc3Rpb25UaXRsZUxvY2F0aW9uVmFsdWUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhbHVlc0hhc2gpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy52YWx1ZXNIYXNoW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBkYXRhKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlc0hhc2ggPSB7fTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1RyaWdnZXJzKGtleSwgZGF0YVtrZXldLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3RpZnlBbGxRdWVzdGlvbnNPblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLnJ1bkNvbmRpdGlvbnMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb21tZW50cygpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhbHVlc0hhc2gpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZih0aGlzLmNvbW1lbnRQcmVmaXgpID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy52YWx1ZXNIYXNoW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZ2V0IHZpc2libGVQYWdlcygpOiBBcnJheTxQYWdlTW9kZWw+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNpZ25Nb2RlKSByZXR1cm4gdGhpcy5wYWdlcztcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxQYWdlTW9kZWw+KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZXNbaV0uaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5wYWdlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wYWdlcy5sZW5ndGggPT0gMDsgfVxuICAgIHB1YmxpYyBnZXQgUGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzLmxlbmd0aDtcbiAgICB9XG4gICAgcHVibGljIGdldCB2aXNpYmxlUGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVQYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3VycmVudFBhZ2UoKTogUGFnZU1vZGVsIHtcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlVmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlVmFsdWUgPT0gbnVsbCAmJiB2UGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZVZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRQYWdlKHZhbHVlOiBQYWdlTW9kZWwpIHtcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2UGFnZXMuaW5kZXhPZih2YWx1ZSkgPCAwKSByZXR1cm47XG4gICAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLmN1cnJlbnRQYWdlVmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5jdXJyZW50UGFnZVZhbHVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZUNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGZvY3VzRmlyc3RRdWVzdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZVZhbHVlLnNjcm9sbFRvVG9wKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUuZm9jdXNGaXJzdFF1ZXN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHJldHVybiBcImxvYWRpbmdcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHJldHVybiBcImNvbXBsZXRlZFwiO1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudFBhZ2UpID8gXCJydW5uaW5nXCIgOiBcImVtcHR5XCJcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnZhcmlhYmxlc0hhc2ggPSB7fTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMudmlzaWJsZVBhZ2VzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBtZXJnZVZhbHVlcyhzcmM6IGFueSwgZGVzdDogYW55KSB7XG4gICAgICAgIGlmICghZGVzdCB8fCAhc3JjKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3Rba2V5XSkgZGVzdFtrZXldID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZVZhbHVlcyh2YWx1ZSwgZGVzdFtrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVzdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZTogUGFnZU1vZGVsLCBvbGRWYWx1ZTogUGFnZU1vZGVsKSB7XG4gICAgICAgIHRoaXMub25DdXJyZW50UGFnZUNoYW5nZWQuZmlyZSh0aGlzLCB7ICdvbGRDdXJyZW50UGFnZSc6IG9sZFZhbHVlLCAnbmV3Q3VycmVudFBhZ2UnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldFByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiAwO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZpc2libGVQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2UpICsgMTtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoaW5kZXggKiAxMDAgLyB0aGlzLnZpc2libGVQYWdlQ291bnQpKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0Rlc2lnbk1vZGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1vZGUgPT0gXCJkZXNpZ25lclwiOyB9XG4gICAgcHVibGljIGdldCBoYXNDb29raWUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llO1xuICAgICAgICByZXR1cm4gY29va2llcyAmJiBjb29raWVzLmluZGV4T2YodGhpcy5jb29raWVOYW1lICsgXCI9dHJ1ZVwiKSA+IC0xO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29va2llKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29va2llTmFtZSkgcmV0dXJuO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLmNvb2tpZU5hbWUgKyBcIj10cnVlOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMDowOjAgR01UXCI7XG4gICAgfVxuICAgIHB1YmxpYyBkZWxldGVDb29raWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuY29va2llTmFtZSArIFwiPTtcIjtcbiAgICB9XG4gICAgcHVibGljIG5leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0xhc3RQYWdlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ3VycmVudFBhZ2VIYXNFcnJvcnMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZG9TZXJ2ZXJWYWxpZGF0aW9uKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5kb05leHRQYWdlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXQgaXNDdXJyZW50UGFnZUhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlLmhhc0Vycm9ycyh0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgcHVibGljIHByZXZQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0UGFnZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIHZhciBpbmRleCA9IHZQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdlBhZ2VzW2luZGV4IC0gMV07XG4gICAgfVxuICAgIHB1YmxpYyBjb21wbGV0ZUxhc3RQYWdlKCkgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDdXJyZW50UGFnZUhhc0Vycm9ycykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5kb1NlcnZlclZhbGlkYXRpb24oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNGaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSA9PSAwO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzTGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIHJldHVybiB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSA9PSB2UGFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHVibGljIGRvQ29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsZWFySW52aXNpYmxlVmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW52aXNpYmxlUXVlc3Rpb25WYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENvb2tpZSgpO1xuICAgICAgICB0aGlzLnNldENvbXBsZXRlZCgpO1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUuZmlyZSh0aGlzLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5UG9zdElkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzVmFsaWRhdGluZ09uU2VydmVyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1ZhbGlkYXRpbmdPblNlcnZlclZhbHVlOyB9XG4gICAgcHJpdmF0ZSBzZXRJc1ZhbGlkYXRpbmdPblNlcnZlcih2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLmlzVmFsaWRhdGluZ09uU2VydmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNWYWxpZGF0aW5nT25TZXJ2ZXJWYWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5vbklzVmFsaWRhdGluZ09uU2VydmVyQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Jc1ZhbGlkYXRpbmdPblNlcnZlckNoYW5nZWQoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZG9TZXJ2ZXJWYWxpZGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMub25TZXJ2ZXJWYWxpZGF0ZVF1ZXN0aW9ucykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBkYXRhOiB7fSwgZXJyb3JzOiB7fSwgc3VydmV5OiB0aGlzLCBjb21wbGV0ZSA6IGZ1bmN0aW9uICgpIHsgc2VsZi5jb21wbGV0ZVNlcnZlclZhbGlkYXRpb24ob3B0aW9ucyk7IH0gfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UGFnZS5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uLnZpc2libGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkgb3B0aW9ucy5kYXRhW3F1ZXN0aW9uLm5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJc1ZhbGlkYXRpbmdPblNlcnZlcih0cnVlKTtcbiAgICAgICAgdGhpcy5vblNlcnZlclZhbGlkYXRlUXVlc3Rpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb21wbGV0ZVNlcnZlclZhbGlkYXRpb24ob3B0aW9uczogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0SXNWYWxpZGF0aW5nT25TZXJ2ZXIoZmFsc2UpO1xuICAgICAgICBpZiAoIW9wdGlvbnMgJiYgIW9wdGlvbnMuc3VydmV5KSByZXR1cm47XG4gICAgICAgIHZhciBzZWxmID0gb3B0aW9ucy5zdXJ2ZXk7XG4gICAgICAgIHZhciBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3JzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gc2VsZi5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24gJiYgcXVlc3Rpb25bXCJlcnJvcnNcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25bXCJhZGRFcnJvclwiXShuZXcgQ3VzdG9tRXJyb3Iob3B0aW9ucy5lcnJvcnNbbmFtZV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNFcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzTGFzdFBhZ2UpIHNlbGYuZG9Db21wbGV0ZSgpO1xuICAgICAgICAgICAgZWxzZSBzZWxmLmRvTmV4dFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZG9OZXh0UGFnZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja09uUGFnZVRyaWdnZXJzKCk7XG4gICAgICAgIGlmICh0aGlzLnNlbmRSZXN1bHRPblBhZ2VOZXh0ICYmIHRoaXMuY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlc3VsdCh0aGlzLnN1cnZleVBvc3RJZCwgdGhpcy5jbGllbnRJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1tpbmRleCArIDFdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0Q29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRDb21wbGV0ZWRIdG1sKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZEh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NIdG1sKHRoaXMuY29tcGxldGVkSHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPGgzPlwiICsgdGhpcy5nZXRMb2NTdHJpbmcoXCJjb21wbGV0aW5nU3VydmV5XCIpICsgXCI8L2gzPlwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3NlZExvYWRpbmdIdG1sKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIjxoMz5cIiArIHRoaXMuZ2V0TG9jU3RyaW5nKFwibG9hZGluZ1N1cnZleVwiKSArIFwiPC9oMz5cIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcbiAgICAgICAgdmFyIGluZGV4ID0gdlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgKyAxO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMb2NTdHJpbmcoXCJwcm9ncmVzc1RleHRcIilbXCJmb3JtYXRcIl0oaW5kZXgsIHZQYWdlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBwdWJsaWMgdXBsb2FkRmlsZShuYW1lOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHN0b3JlRGF0YUFzVGV4dDogYm9vbGVhbiwgdXBsb2FkaW5nQ2FsbGJhY2s6IChzdGF0dXM6IHN0cmluZyk9PmFueSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgYWNjZXB0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblVwbG9hZEZpbGUuZmlyZSh0aGlzLCB7IG5hbWU6IG5hbWUsIGZpbGU6IGZpbGUsIGFjY2VwdDogYWNjZXB0IH0pO1xuICAgICAgICBpZiAoIWFjY2VwdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXN0b3JlRGF0YUFzVGV4dCAmJiB0aGlzLnN1cnZleVBvc3RJZCkge1xuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlQ29yZShuYW1lLCBmaWxlLCB1cGxvYWRpbmdDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGxvYWRGaWxlQ29yZShuYW1lOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHVwbG9hZGluZ0NhbGxiYWNrOiAoc3RhdHVzOiBzdHJpbmcpID0+IGFueSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh1cGxvYWRpbmdDYWxsYmFjaykgdXBsb2FkaW5nQ2FsbGJhY2soXCJ1cGxvYWRpbmdcIik7XG4gICAgICAgIG5ldyBkeFN1cnZleVNlcnZpY2UoKS5zZW5kRmlsZSh0aGlzLnN1cnZleVBvc3RJZCwgZmlsZSwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgIGlmICh1cGxvYWRpbmdDYWxsYmFjaykgdXBsb2FkaW5nQ2FsbGJhY2soc3VjY2VzcyA/IFwic3VjY2Vzc1wiIDogXCJlcnJvclwiKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRWYWx1ZShuYW1lLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQYWdlKGluZGV4OiBudW1iZXIpOiBQYWdlTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpbmRleF07XG4gICAgfVxuICAgIGFkZFBhZ2UocGFnZTogUGFnZU1vZGVsKSB7XG4gICAgICAgIGlmIChwYWdlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIGFkZE5ld1BhZ2UobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5jcmVhdGVOZXdQYWdlKG5hbWUpO1xuICAgICAgICB0aGlzLmFkZFBhZ2UocGFnZSk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICByZW1vdmVQYWdlKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhZ2VzLmluZGV4T2YocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5wYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlID09IHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLnBhZ2VzWzBdIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRRdWVzdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKTogSVF1ZXN0aW9uIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbk5hbWUgPSBxdWVzdGlvbnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIHF1ZXN0aW9uTmFtZSA9IHF1ZXN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYocXVlc3Rpb25OYW1lID09IG5hbWUpIHJldHVybiBxdWVzdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRRdWVzdGlvbnNCeU5hbWVzKG5hbWVzOiBzdHJpbmdbXSwgY2FzZUluc2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpOiBJUXVlc3Rpb25bXSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFuYW1lcykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZXNbaV0sIGNhc2VJbnNlbnNpdGl2ZSk7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb24pIHJlc3VsdC5wdXNoKHF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb246IElRdWVzdGlvbik6IFBhZ2VNb2RlbCB7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMucGFnZXNbaV07XG4gICAgICAgICAgICBpZiAocGFnZS5xdWVzdGlvbnMuaW5kZXhPZig8UXVlc3Rpb25CYXNlPnF1ZXN0aW9uKSA+IC0xKSByZXR1cm4gcGFnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldFBhZ2VCeU5hbWUobmFtZTogc3RyaW5nKTogUGFnZU1vZGVsIHtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHRoaXMucGFnZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRQYWdlc0J5TmFtZXMobmFtZXM6IHN0cmluZ1tdKTogUGFnZU1vZGVsW117XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFuYW1lcykgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5nZXRQYWdlQnlOYW1lKG5hbWVzW2ldKTtcbiAgICAgICAgICAgIGlmIChwYWdlKSByZXN1bHQucHVzaChwYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0QWxsUXVlc3Rpb25zKHZpc2libGVPbmx5OiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxJUXVlc3Rpb24+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxJUXVlc3Rpb24+KCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzW2ldLmFkZFF1ZXN0aW9uc1RvTGlzdChyZXN1bHQsIHZpc2libGVPbmx5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3UGFnZShuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBQYWdlTW9kZWwobmFtZSk7IH1cbiAgICBwcml2YXRlIG5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucygpO1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zW2ldLm5hbWUgIT0gbmFtZSkgY29udGludWU7XG4gICAgICAgICAgICBxdWVzdGlvbiA9IHF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIHRoaXMuZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb24sIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmZpcmUodGhpcywgeyAnbmFtZSc6IG5hbWUsICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAndmFsdWUnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBub3RpZnlBbGxRdWVzdGlvbnNPblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb25zW2ldLCB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGRvU3VydmV5VmFsdWVDaGFuZ2VkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgcXVlc3Rpb24ub25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrT25QYWdlVHJpZ2dlcnMoKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1RyaWdnZXJzKHF1ZXN0aW9uLm5hbWUsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk6IEFycmF5PFF1ZXN0aW9uQmFzZT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICAgICAgaWYgKCFwYWdlKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBwYWdlLnF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb24udmlzaWJsZSB8fCAhcXVlc3Rpb24ubmFtZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaChxdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja1RyaWdnZXJzKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgaXNPbk5leHRQYWdlOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnRyaWdnZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcnNbaV07XG4gICAgICAgICAgICBpZiAodHJpZ2dlci5uYW1lID09IG5hbWUgJiYgdHJpZ2dlci5pc09uTmV4dFBhZ2UgPT0gaXNPbk5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlci5jaGVjayhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb1F1ZXN0aW9uc09uTG9hZCgpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5vblN1cnZleUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJ1bkNvbmRpdGlvbnMoKSB7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9uc0Zvckxpc3QodGhpcy5nZXRBbGxRdWVzdGlvbnMoZmFsc2UpKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zRm9yTGlzdCh0aGlzLnBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW5Db25kaXRpb25zRm9yTGlzdChsaXN0OiBBcnJheTxJQ29uZGl0aW9uUnVubmVyPikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RbaV0ucnVuQ29uZGl0aW9uKHRoaXMudmFsdWVzSGFzaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNlbmRSZXN1bHQocG9zdElkOiBzdHJpbmcgPSBudWxsLCBjbGllbnRJZDogc3RyaW5nID0gbnVsbCwgaXNQYXJ0aWFsQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFwb3N0SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpIHtcbiAgICAgICAgICAgIHBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcG9zdElkKSByZXR1cm47XG4gICAgICAgIGlmIChjbGllbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLnNlbmRSZXN1bHQocG9zdElkLCB0aGlzLmRhdGEsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLm9uU2VuZFJlc3VsdC5maXJlKHNlbGYsIHsgc3VjY2Vzczogc3VjY2VzcywgcmVzcG9uc2U6IHJlc3BvbnNlfSk7XG4gICAgICAgIH0sIHRoaXMuY2xpZW50SWQsIGlzUGFydGlhbENvbXBsZXRlZCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZXN1bHQocmVzdWx0SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLmdldFJlc3VsdChyZXN1bHRJZCwgbmFtZSwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgZGF0YUxpc3Q6IGFueVtdLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLm9uR2V0UmVzdWx0LmZpcmUoc2VsZiwgeyBzdWNjZXNzOiBzdWNjZXNzLCBkYXRhOiBkYXRhLCBkYXRhTGlzdDogZGF0YUxpc3QsIHJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHN1cnZleUlkKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUlkID0gc3VydmV5SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25Mb2FkaW5nU3VydmV5RnJvbVNlcnZpY2UoKTtcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkodGhpcy5zdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBzZWxmLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRKc29uT2JqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlBbGxRdWVzdGlvbnNPblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkU3VydmV5RnJvbVNlcnZpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uTG9hZFN1cnZleUZyb21TZXJ2aWNlKCkge1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrUGFnZVZpc2liaWxpdHkocXVlc3Rpb246IElRdWVzdGlvbiwgb2xkUXVlc3Rpb25WaXNpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIGlmICghcGFnZSkgcmV0dXJuO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBwYWdlLmlzVmlzaWJsZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IHBhZ2UuZ2V0SXNQYWdlVmlzaWJsZShxdWVzdGlvbikgfHwgb2xkUXVlc3Rpb25WaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlSW5kZXhlcygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXModGhpcy5zaG93UGFnZU51bWJlcnMpO1xuICAgICAgICBpZiAodGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25QYWdlXCIpIHtcbiAgICAgICAgICAgIHZhciB2aXNQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyh2aXNQYWdlc1tpXS5xdWVzdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVzdGlvblZpc2libGVJbmRleGVzKHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKSwgdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXMoc2hvd0luZGV4OiBib29sZWFuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS52aXNpYmxlSW5kZXggPSB0aGlzLnBhZ2VzW2ldLnZpc2libGUgPyAoaW5kZXgrKykgOiAtMTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0ubnVtID0gc2hvd0luZGV4ICYmIHRoaXMucGFnZXNbaV0udmlzaWJsZSA/IHRoaXMucGFnZXNbaV0udmlzaWJsZUluZGV4ICsgMSA6IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyhxdWVzdGlvbnM6IElRdWVzdGlvbltdLCBzaG93SW5kZXg6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5zZXRWaXNpYmxlSW5kZXgoc2hvd0luZGV4ICYmIHF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHF1ZXN0aW9uc1tpXS5oYXNUaXRsZSA/IChpbmRleCsrKSA6IC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNldEpzb25PYmplY3QoanNvbk9iajogYW55KSB7XG4gICAgICAgIGlmICghanNvbk9iaikgcmV0dXJuO1xuICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBudWxsO1xuICAgICAgICB2YXIganNvbkNvbnZlcnRlciA9IG5ldyBKc29uT2JqZWN0KCk7XG4gICAgICAgIGpzb25Db252ZXJ0ZXIudG9PYmplY3QoanNvbk9iaiwgdGhpcyk7XG4gICAgICAgIGlmIChqc29uQ29udmVydGVyLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBqc29uQ29udmVydGVyLmVycm9ycztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29va2llKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvUXVlc3Rpb25zT25Mb2FkKCk7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkgeyB9XG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRpbmcoKSB7IH1cbiAgICBwcml2YXRlIHVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tcInBhZ2Vub1wiXSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzZWxmLmN1cnJlbnRQYWdlICE9IG51bGwgPyBzZWxmLnZpc2libGVQYWdlcy5pbmRleE9mKHNlbGYuY3VycmVudFBhZ2UpICsgMSA6IDA7IH1cbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW1wicGFnZWNvdW50XCJdID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHNlbGYudmlzaWJsZVBhZ2VDb3VudDsgfVxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRBbGxRdWVzdGlvbnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1Byb2Nlc3NlZFRleHRWYWx1ZXMocXVlc3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZFF1ZXN0aW9uVG9Qcm9jZXNzZWRUZXh0VmFsdWVzKHF1ZXN0aW9uOiBJUXVlc3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW3F1ZXN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBcInF1ZXN0aW9uXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWVdO1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh2YWwgPT0gXCJxdWVzdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uICE9IG51bGwgPyB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uLm5hbWUpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09IFwidmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PSBcInZhcmlhYmxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcmlhYmxlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwobmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJJbnZpc2libGVRdWVzdGlvblZhbHVlcygpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNbaV0udmlzaWJsZSkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFibGVzSGFzaFtuYW1lXTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhcmlhYmxlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy52YXJpYWJsZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gXCJ2YXJpYWJsZVwiO1xuICAgIH1cbiAgICAvL0lTdXJ2ZXkgZGF0YVxuICAgIHByaXZhdGUgZ2V0VW5iaW5kVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgLy9kbyBub3QgcmV0dXJuIHRoZSBzYW1lIG9iamVjdCBpbnN0YW5jZSEhIVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNIYXNoW25hbWVdO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmJpbmRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwobmFtZSwgbmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiIHx8IG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZ2V0VW5iaW5kVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZFRleHRWYWx1ZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IFwidmFsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrVHJpZ2dlcnMobmFtZSwgbmV3VmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XG4gICAgICAgIHRoaXMudHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlRXF1YWwobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiKSBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCB8fCBvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUd29WYWx1ZUVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGlzVHdvVmFsdWVFcXVhbHMoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhKHkgaW5zdGFuY2VvZiBPYmplY3QpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIHAgaW4geCkge1xuICAgICAgICAgICAgaWYgKCF4Lmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgheS5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHhbcF0gPT09IHlbcF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoeFtwXSkgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1R3b1ZhbHVlRXF1YWxzKHhbcF0sIHlbcF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwIGluIHkpIHtcbiAgICAgICAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICYmICF4Lmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgdHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdvTmV4dFBhZ2VBdXRvbWF0aWMgfHwgIXRoaXMuY3VycmVudFBhZ2UpIHJldHVybjtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmICFxdWVzdGlvbi5zdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpKSByZXR1cm47XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VmFsdWUocXVlc3Rpb25zW2ldLm5hbWUpKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQYWdlLmhhc0Vycm9ycyhmYWxzZSwgZmFsc2UpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXN0UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tbWVudChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kYXRhW25hbWUgKyB0aGlzLmNvbW1lbnRQcmVmaXhdO1xuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lICsgdGhpcy5jb21tZW50UHJlZml4O1xuICAgICAgICBpZiAobmV3VmFsdWUgPT0gXCJcIiB8fCBuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNIYXNoW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRyeUdvTmV4dFBhZ2VBdXRvbWF0aWMobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSwgJ3Zpc2libGUnOiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgdGhpcy5jaGVja1BhZ2VWaXNpYmlsaXR5KHF1ZXN0aW9uLCAhbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmxlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ3BhZ2UnOiBwYWdlLCAndmlzaWJsZSc6IG5ld1ZhbHVlIH0pO1xuICAgIH1cbiAgICBxdWVzdGlvbkFkZGVkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgICAgICB0aGlzLmFkZFF1ZXN0aW9uVG9Qcm9jZXNzZWRUZXh0VmFsdWVzKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5vblF1ZXN0aW9uQWRkZWQuZmlyZSh0aGlzLCB7ICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsICdpbmRleCc6IGluZGV4IH0pO1xuICAgIH1cbiAgICBxdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IElRdWVzdGlvbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMub25RdWVzdGlvblJlbW92ZWQuZmlyZSh0aGlzLCB7ICdxdWVzdGlvbic6IHF1ZXN0aW9uLCAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlUXVlc3Rpb24obmFtZTogc3RyaW5nKTogU3VydmV5RXJyb3Ige1xuICAgICAgICBpZiAodGhpcy5vblZhbGlkYXRlUXVlc3Rpb24uaXNFbXB0eSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBuYW1lOiBuYW1lLCB2YWx1ZTogdGhpcy5nZXRWYWx1ZShuYW1lKSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRlUXVlc3Rpb24uZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZXJyb3IgPyBuZXcgQ3VzdG9tRXJyb3Iob3B0aW9ucy5lcnJvcikgOiBudWxsO1xuICAgIH1cbiAgICBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgaHRtbDogaHRtbCB9O1xuICAgICAgICB0aGlzLm9uUHJvY2Vzc0h0bWwuZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RleHQob3B0aW9ucy5odG1sKTtcbiAgICB9XG4gICAgcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFByZVByb2Nlc3Nvci5wcm9jZXNzKHRleHQpO1xuICAgIH1cbiAgICAvL0lTdXJ2ZXlUcmlnZ2VyT3duZXJcbiAgICBnZXRPYmplY3RzKHBhZ2VzOiBzdHJpbmdbXSwgcXVlc3Rpb25zOiBzdHJpbmdbXSk6IGFueVtde1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJlc3VsdCwgdGhpcy5nZXRQYWdlc0J5TmFtZXMocGFnZXMpKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCB0aGlzLmdldFF1ZXN0aW9uc0J5TmFtZXMocXVlc3Rpb25zKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldFRyaWdnZXJWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGlzVmFyaWFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgICAgIGlmIChpc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhcmlhYmxlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic3VydmV5XCIsIFt7IG5hbWU6IFwibG9jYWxlXCIsIGNob2ljZXM6ICgpID0+IHsgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRMb2NhbGVzKCkgfSB9LFxuICAgIFwidGl0bGVcIiwgXCJjb21wbGV0ZWRIdG1sOmh0bWxcIiwgeyBuYW1lOiBcInBhZ2VzXCIsIGNsYXNzTmFtZTogXCJwYWdlXCIgfSxcbiAgICB7IG5hbWU6IFwicXVlc3Rpb25zXCIsIGJhc2VDbGFzc05hbWU6IFwicXVlc3Rpb25cIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gbnVsbDsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iaiwgdmFsdWUsIGpzb25Db252ZXJ0ZXIpIHsgdmFyIHBhZ2UgPSBvYmouYWRkTmV3UGFnZShcIlwiKTsganNvbkNvbnZlcnRlci50b09iamVjdCh7IHF1ZXN0aW9uczogdmFsdWUgfSwgcGFnZSk7IH0gfSxcbiAgICB7IG5hbWU6IFwidHJpZ2dlcnM6dHJpZ2dlcnNcIiwgYmFzZUNsYXNzTmFtZTogXCJzdXJ2ZXl0cmlnZ2VyXCIsIGNsYXNzTmFtZVBhcnQ6IFwidHJpZ2dlclwiIH0sXG4gICAgXCJzdXJ2ZXlJZFwiLCBcInN1cnZleVBvc3RJZFwiLCBcImNvb2tpZU5hbWVcIiwgXCJzZW5kUmVzdWx0T25QYWdlTmV4dDpib29sZWFuXCIsXG4gICAgeyBuYW1lOiBcInNob3dOYXZpZ2F0aW9uQnV0dG9uczpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgeyBuYW1lOiBcInNob3dUaXRsZTpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgeyBuYW1lOiBcInNob3dQYWdlVGl0bGVzOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIFwic2hvd1BhZ2VOdW1iZXJzOmJvb2xlYW5cIiwgeyBuYW1lOiBcInNob3dRdWVzdGlvbk51bWJlcnNcIiwgZGVmYXVsdDogXCJvblwiLCBjaG9pY2VzOiBbXCJvblwiLCBcIm9uUGFnZVwiLCBcIm9mZlwiXSB9LFxuICAgIHsgbmFtZTogXCJxdWVzdGlvblRpdGxlTG9jYXRpb25cIiwgZGVmYXVsdDogXCJ0b3BcIiwgY2hvaWNlczogW1widG9wXCIsIFwiYm90dG9tXCJdIH0sXG4gICAgeyBuYW1lOiBcInNob3dQcm9ncmVzc0JhclwiLCBkZWZhdWx0OiBcIm9mZlwiLCBjaG9pY2VzOiBbXCJvZmZcIiwgXCJ0b3BcIiwgXCJib3R0b21cIl0gfSxcbiAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnQ6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sIFwiZ29OZXh0UGFnZUF1dG9tYXRpYzpib29sZWFuXCIsIFwiY2xlYXJJbnZpc2libGVWYWx1ZXM6Ym9vbGVhblwiLFxuICAgIHsgbmFtZTogXCJwYWdlUHJldlRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucGFnZVByZXZUZXh0VmFsdWU7IH0gfSxcbiAgICB7IG5hbWU6IFwicGFnZU5leHRUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnBhZ2VOZXh0VGV4dFZhbHVlOyB9IH0sXG4gICAgeyBuYW1lOiBcImNvbXBsZXRlVGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jb21wbGV0ZVRleHRWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJyZXF1aXJlZFRleHRcIiwgZGVmYXVsdDogXCIqXCIgfSwgXCJxdWVzdGlvblN0YXJ0SW5kZXhcIiwgXCJxdWVzdGlvblRpdGxlVGVtcGxhdGVcIl0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXkudHMiLCJleHBvcnQgY2xhc3MgZHhTdXJ2ZXlTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIHNlcnZpY2VVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9keHN1cnZleWFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvU3VydmV5XCI7XG4gICAgLy9wdWJsaWMgc3RhdGljIHNlcnZpY2VVcmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDQ4OC9hcGkvU3VydmV5XCI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5KHN1cnZleUlkOiBzdHJpbmcsIG9uTG9hZDogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9nZXRTdXJ2ZXk/c3VydmV5SWQ9JyArIHN1cnZleUlkKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBvbkxvYWQoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIHNlbmRSZXN1bHQocG9zdElkOiBzdHJpbmcsIHJlc3VsdDogSlNPTiwgb25TZW5kUmVzdWx0OiAoc3VjY2VzczogYm9vbGVhbiwgcmVzcG9uc2U6IGFueSk9PiB2b2lkLCBjbGllbnRJZDogc3RyaW5nID0gbnVsbCwgaXNQYXJ0aWFsQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9wb3N0LycpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgICAgdmFyIGRhdGEgPSB7IHBvc3RJZDogcG9zdElkLCBzdXJ2ZXlSZXN1bHQ6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkgfTtcbiAgICAgICAgaWYgKGNsaWVudElkKSBkYXRhWydjbGllbnRJZCddID0gY2xpZW50SWQ7XG4gICAgICAgIGlmIChpc1BhcnRpYWxDb21wbGV0ZWQpIGRhdGFbJ2lzUGFydGlhbENvbXBsZXRlZCddID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRhdGFTdHJpbmdpZnk6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHhoci5vbmxvYWQgPSB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghb25TZW5kUmVzdWx0KSByZXR1cm47XG4gICAgICAgICAgICBvblNlbmRSZXN1bHQoeGhyLnN0YXR1cyA9PSAyMDAsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKGRhdGFTdHJpbmdpZnkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VuZEZpbGUocG9zdElkOiBzdHJpbmcsIGZpbGU6IEZpbGUsIG9uU2VuZEZpbGU6IChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFvblNlbmRGaWxlKSByZXR1cm47XG4gICAgICAgICAgICBvblNlbmRGaWxlKHhoci5zdGF0dXMgPT0gMjAwLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL3VwbG9hZC8nLCB0cnVlKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBvc3RJZFwiLCBwb3N0SWQpO1xuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZXN1bHQocmVzdWx0SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBvbkdldFJlc3VsdDogKHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IGFueSwgZGF0YUxpc3Q6IEFycmF5PGFueT4sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZGF0YSA9ICdyZXN1bHRJZD0nICsgcmVzdWx0SWQgKyAnJm5hbWU9JyArIG5hbWU7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBkeFN1cnZleVNlcnZpY2Uuc2VydmljZVVybCArICcvZ2V0UmVzdWx0PycgKyBkYXRhKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiByZXN1bHQuUXVlc3Rpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0geyBuYW1lOiBrZXksIHZhbHVlOiByZXN1bHQuUXVlc3Rpb25SZXN1bHRba2V5XSB9O1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uR2V0UmVzdWx0KHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIGxpc3QsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc0NvbXBsZXRlZChyZXN1bHRJZDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBvbklzQ29tcGxldGVkOiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZGF0YSA9ICdyZXN1bHRJZD0nICsgcmVzdWx0SWQgKyAnJmNsaWVudElkPScgKyBjbGllbnRJZDtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9pc0NvbXBsZXRlZD8nICsgZGF0YSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Jc0NvbXBsZXRlZCh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHhTdXJ2ZXlTZXJ2aWNlLnRzIiwiaW1wb3J0IHtCYXNlLCBIYXNoVGFibGV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgVHJpZ2dlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBvcGVyYXRvcnNWYWx1ZTogSGFzaFRhYmxlPEZ1bmN0aW9uPiA9IG51bGw7XG4gICAgc3RhdGljIGdldCBvcGVyYXRvcnMoKSB7XG4gICAgICAgIGlmIChUcmlnZ2VyLm9wZXJhdG9yc1ZhbHVlICE9IG51bGwpIHJldHVybiBUcmlnZ2VyLm9wZXJhdG9yc1ZhbHVlO1xuICAgICAgICBUcmlnZ2VyLm9wZXJhdG9yc1ZhbHVlID0ge1xuICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gIXZhbHVlOyB9LFxuICAgICAgICAgICAgbm90ZW1wdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gISghdmFsdWUpOyB9LFxuICAgICAgICAgICAgZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPT0gZXhwZWN0ZWRWYWx1ZTsgfSxcbiAgICAgICAgICAgIG5vdGVxdWFsOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9IGV4cGVjdGVkVmFsdWU7IH0sXG4gICAgICAgICAgICBjb250YWluczogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSAmJiB2YWx1ZVtcImluZGV4T2ZcIl0gJiYgdmFsdWUuaW5kZXhPZihleHBlY3RlZFZhbHVlKSA+IC0xOyB9LFxuICAgICAgICAgICAgbm90Y29udGFpbnM6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gIXZhbHVlIHx8ICF2YWx1ZVtcImluZGV4T2ZcIl0gfHwgdmFsdWUuaW5kZXhPZihleHBlY3RlZFZhbHVlKSA9PSAtMTsgfSxcbiAgICAgICAgICAgIGdyZWF0ZXI6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPiBleHBlY3RlZFZhbHVlOyB9LFxuICAgICAgICAgICAgbGVzczogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA8IGV4cGVjdGVkVmFsdWU7IH0sXG4gICAgICAgICAgICBncmVhdGVyb3JlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA+PSBleHBlY3RlZFZhbHVlOyB9LFxuICAgICAgICAgICAgbGVzc29yZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPD0gZXhwZWN0ZWRWYWx1ZTsgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcFZhbHVlOiBzdHJpbmcgPSBcImVxdWFsXCI7XG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb3BlcmF0b3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3BWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgb3BlcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFUcmlnZ2VyLm9wZXJhdG9yc1t2YWx1ZV0pIHJldHVybjtcbiAgICAgICAgdGhpcy5vcFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBjaGVjayh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmIChUcmlnZ2VyLm9wZXJhdG9yc1t0aGlzLm9wZXJhdG9yXSh2YWx1ZSwgdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uRmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7IH1cbiAgICBwcm90ZWN0ZWQgb25GYWlsdXJlKCkgeyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleVRyaWdnZXJPd25lciB7XG4gICAgZ2V0T2JqZWN0cyhwYWdlczogc3RyaW5nW10sIHF1ZXN0aW9uczogc3RyaW5nW10pOiBhbnlbXTtcbiAgICBkb0NvbXBsZXRlKCk7XG4gICAgc2V0VHJpZ2dlclZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgaXNWYXJpYWJsZTogYm9vbGVhbik7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUcmlnZ2VyIGV4dGVuZHMgVHJpZ2dlciB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgb3duZXI6IElTdXJ2ZXlUcmlnZ2VyT3duZXIgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IElTdXJ2ZXlUcmlnZ2VyT3duZXIpIHtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzT25OZXh0UGFnZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUcmlnZ2VyVmlzaWJsZSBleHRlbmRzIFN1cnZleVRyaWdnZXIge1xuICAgIHB1YmxpYyBwYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ2aXNpYmxldHJpZ2dlclwiOyB9XG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHsgdGhpcy5vblRyaWdnZXIodGhpcy5vbkl0ZW1TdWNjZXNzKTsgfVxuICAgIHByb3RlY3RlZCBvbkZhaWx1cmUoKSB7IHRoaXMub25UcmlnZ2VyKHRoaXMub25JdGVtRmFpbHVyZSk7IH1cbiAgICBwcml2YXRlIG9uVHJpZ2dlcihmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMub3duZXIpIHJldHVybjtcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLm93bmVyLmdldE9iamVjdHModGhpcy5wYWdlcywgdGhpcy5xdWVzdGlvbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZ1bmMob2JqZWN0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uSXRlbVN1Y2Nlc3MoaXRlbTogYW55KSB7IGl0ZW0udmlzaWJsZSA9IHRydWU7IH1cbiAgICBwcm90ZWN0ZWQgb25JdGVtRmFpbHVyZShpdGVtOiBhbnkpIHsgaXRlbS52aXNpYmxlID0gZmFsc2U7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUcmlnZ2VyQ29tcGxldGUgZXh0ZW5kcyBTdXJ2ZXlUcmlnZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiY29tcGxldGV0cmlnZ2VyXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzT25OZXh0UGFnZSgpIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwcm90ZWN0ZWQgb25TdWNjZXNzKCkgeyBpZiAodGhpcy5vd25lcikgdGhpcy5vd25lci5kb0NvbXBsZXRlKCk7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUgZXh0ZW5kcyBTdXJ2ZXlUcmlnZ2VyIHtcbiAgICBwdWJsaWMgc2V0VG9OYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHNldFZhbHVlOiBhbnk7XG4gICAgcHVibGljIGlzVmFyaWFibGU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInNldHZhbHVldHJpZ2dlclwiOyB9XG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNldFRvTmFtZSB8fCAhdGhpcy5vd25lcikgcmV0dXJuO1xuICAgICAgICB0aGlzLm93bmVyLnNldFRyaWdnZXJWYWx1ZSh0aGlzLnNldFRvTmFtZSwgdGhpcy5zZXRWYWx1ZSwgdGhpcy5pc1ZhcmlhYmxlKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0cmlnZ2VyXCIsIFtcIm9wZXJhdG9yXCIsIFwiIXZhbHVlXCJdKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzdXJ2ZXl0cmlnZ2VyXCIsIFtcIiFuYW1lXCJdLCBudWxsLCBcInRyaWdnZXJcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwidmlzaWJsZXRyaWdnZXJcIiwgW1wicGFnZXNcIiwgXCJxdWVzdGlvbnNcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlUcmlnZ2VyVmlzaWJsZSgpOyB9LCBcInN1cnZleXRyaWdnZXJcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY29tcGxldGV0cmlnZ2VyXCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3VydmV5VHJpZ2dlckNvbXBsZXRlKCk7IH0sIFwic3VydmV5dHJpZ2dlclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZXR2YWx1ZXRyaWdnZXJcIiwgW1wiIXNldFRvTmFtZVwiLCBcInNldFZhbHVlXCIsIFwiaXNWYXJpYWJsZTpib29sZWFuXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3VydmV5VHJpZ2dlclNldFZhbHVlKCk7IH0sIFwic3VydmV5dHJpZ2dlclwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJpZ2dlci50cyIsImltcG9ydCB7QmFzZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4vc3VydmV5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlXaW5kb3dNb2RlbCBleHRlbmRzIEJhc2UgIHtcbiAgICBwdWJsaWMgc3RhdGljIHN1cnZleUVsZW1lbnROYW1lID0gXCJ3aW5kb3dTdXJ2ZXlKU1wiO1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXlNb2RlbDtcbiAgICB3aW5kb3dFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBpc1Nob3dpbmdWYWx1ZTogYm9vbGVhbjtcbiAgICBpc0V4cGFuZGVkVmFsdWU6IGJvb2xlYW47XG4gICAgdGl0bGVWYWx1ZTogc3RyaW5nO1xuICAgIHRlbXBsYXRlVmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdGhpcy5jcmVhdGVTdXJ2ZXkoanNvbk9iaik7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUuc2hvd1RpdGxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogc3RyaW5nIHsgcmV0dXJuIFwid2luZG93XCIgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleU1vZGVsIHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzU2hvd2luZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNTaG93aW5nVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzRXhwYW5kZWRWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMuc3VydmV5LnRpdGxlOyB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGV4cGFuZCgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRjb2xsYXBzZSh0cnVlKTtcbiAgICB9XG4gICAgcHVibGljIGNvbGxhcHNlKCkge1xuICAgICAgICB0aGlzLmV4cGFuZGNvbGxhcHNlKGZhbHNlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleShqc29uT2JqOiBhbnkpOiBTdXJ2ZXlNb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5TW9kZWwoanNvbk9iailcbiAgICB9XG4gICAgcHJvdGVjdGVkIGV4cGFuZGNvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZFZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlXaW5kb3cudHMiLCJleHBvcnQgdmFyIHN1cnZleUNzcyA9IHtcbiAgICBjdXJyZW50VHlwZTogXCJcIixcbiAgICBnZXRDc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudFR5cGUgPyB0aGlzW3RoaXMuY3VycmVudFR5cGVdIDogZGVmYXVsdFN0YW5kYXJkQ3NzO1xuICAgICAgICBpZiAoIWxvYykgbG9jID0gZGVmYXVsdFN0YW5kYXJkQ3NzO1xuICAgICAgICByZXR1cm4gbG9jO1xuICAgIH0sXG59O1xuXG5leHBvcnQgdmFyIGRlZmF1bHRTdGFuZGFyZENzcyA9IHtcbiAgICByb290OiBcInN2X21haW5cIixcbiAgICBoZWFkZXI6IFwiXCIsXG4gICAgYm9keTogXCJzdl9ib2R5XCIsXG4gICAgZm9vdGVyOiBcInN2X25hdlwiLFxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiXCIsIHByZXY6XCJcIiwgbmV4dDogXCJcIn0sXG4gICAgcHJvZ3Jlc3M6IFwic3ZfcHJvZ3Jlc3NcIiwgcHJvZ3Jlc3NCYXI6IFwiXCIsXG4gICAgcGFnZVRpdGxlOiBcInN2X3BfdGl0bGVcIixcbiAgICByb3c6IFwic3Zfcm93XCIsXG4gICAgcXVlc3Rpb246IHsgcm9vdDogXCJzdl9xXCIsIHRpdGxlOiBcInN2X3FfdGl0bGVcIiwgY29tbWVudDogXCJcIiwgaW5kZW50OiAyMCB9LFxuICAgIGVycm9yOiB7IHJvb3Q6IFwic3ZfcV9lcmJveFwiLCBpY29uOiBcIlwiLCBpdGVtOiBcIlwiIH0sXG5cbiAgICBjaGVja2JveDogeyByb290OiBcInN2X3FjYmNcIiwgaXRlbTogXCJzdl9xX2NoZWNrYm94XCIsIG90aGVyOiBcInN2X3Ffb3RoZXJcIiB9LFxuICAgIGNvbW1lbnQ6IFwiXCIsXG4gICAgZHJvcGRvd246IFwiXCIsXG4gICAgbWF0cml4OiB7IHJvb3Q6IFwic3ZfcV9tYXRyaXhcIiB9LFxuICAgIG1hdHJpeGRyb3Bkb3duOiB7IHJvb3Q6IFwic3ZfcV9tYXRyaXhcIiB9LFxuICAgIG1hdHJpeGR5bmFtaWM6IHsgcm9vdDogXCJ0YWJsZVwiLCBidXR0b246IFwiXCIgfSxcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJcIiwgaXRlbVRpdGxlOiBcIlwiLCBpdGVtVmFsdWU6IFwiXCIgfSxcbiAgICByYWRpb2dyb3VwOiB7IHJvb3Q6IFwic3ZfcWNiY1wiLCBpdGVtOiBcInN2X3FfcmFkaW9ncm91cFwiLCBvdGhlcjogXCJzdl9xX290aGVyXCIgfSxcbiAgICByYXRpbmc6IHsgcm9vdDogXCJzdl9xX3JhdGluZ1wiLCBpdGVtOiBcInN2X3FfcmF0aW5nX2l0ZW1cIiB9LFxuICAgIHRleHQ6IFwiXCIsXG4gICAgd2luZG93OiB7XG4gICAgICAgIHJvb3Q6IFwic3Zfd2luZG93XCIsIGJvZHk6IFwic3Zfd2luZG93X2NvbnRlbnRcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICByb290OiBcInN2X3dpbmRvd190aXRsZVwiLCB0aXRsZTogXCJcIiwgYnV0dG9uOiBcIlwiLCBidXR0b25FeHBhbmRlZDogXCJcIiwgYnV0dG9uQ29sbGFwc2VkOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5zdXJ2ZXlDc3NbXCJzdGFuZGFyZFwiXSA9IGRlZmF1bHRTdGFuZGFyZENzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdENzcy9jc3NzdGFuZGFyZC50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xuaW1wb3J0IHtJUGFnZSwgRXZlbnR9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCIuL2tvcGFnZVwiO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQge3N1cnZleUNzc30gZnJvbSBcIi4uL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmRcIjtcbmltcG9ydCB7a29UZW1wbGF0ZX0gZnJvbSBcIi4vdGVtcGxhdGUua28uaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5IGV4dGVuZHMgU3VydmV5TW9kZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNzc1R5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHN1cnZleUNzcy5jdXJyZW50VHlwZTsgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGNzc1R5cGUodmFsdWU6IHN0cmluZykgeyBzdXJ2ZXlDc3MuY3VycmVudFR5cGUgPSB2YWx1ZTsgfVxuICAgIHByaXZhdGUgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwdWJsaWMgb25SZW5kZXJlZDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0UmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGtvQ3VycmVudFBhZ2U6IGFueTsga29Jc0ZpcnN0UGFnZTogYW55OyBrb0lzTGFzdFBhZ2U6IGFueTsgZHVtbXlPYnNlcnZhYmxlOiBhbnk7IGtvU3RhdGU6IGFueTtcbiAgICBrb1Byb2dyZXNzOiBhbnk7IGtvUHJvZ3Jlc3NUZXh0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkgPSBudWxsLCByZW5kZXJlZEVsZW1lbnQ6IGFueSA9IG51bGwsIGNzczogYW55ID0gbnVsbCkge1xuICAgICAgICBzdXBlcihqc29uT2JqKTtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgdGhpcy5jc3MgPSBjc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSByZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBrbyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcigna25vY2tvdXRqcyBsaWJyYXJ5IGlzIG5vdCBsb2FkZWQuJyk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJlbmRlcmVkRWxlbWVudCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3NzTmF2aWdhdGlvbkNvbXBsZXRlKCkgeyByZXR1cm4gdGhpcy5nZXROYXZpZ2F0aW9uQ3NzKHRoaXMuY3NzLm5hdmlnYXRpb25CdXR0b24sIHRoaXMuY3NzLm5hdmlnYXRpb24uY29tcGxldGUpOyB9XG4gICAgcHVibGljIGdldCBjc3NOYXZpZ2F0aW9uUHJldigpIHsgcmV0dXJuIHRoaXMuZ2V0TmF2aWdhdGlvbkNzcyh0aGlzLmNzcy5uYXZpZ2F0aW9uQnV0dG9uLCB0aGlzLmNzcy5uYXZpZ2F0aW9uLnByZXYpOyB9XG4gICAgcHVibGljIGdldCBjc3NOYXZpZ2F0aW9uTmV4dCgpIHsgcmV0dXJuIHRoaXMuZ2V0TmF2aWdhdGlvbkNzcyh0aGlzLmNzcy5uYXZpZ2F0aW9uQnV0dG9uLCB0aGlzLmNzcy5uYXZpZ2F0aW9uLm5leHQpOyB9XG4gICAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uQ3NzKG1haW46IHN0cmluZywgYnRuOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlcyA9IFwiXCI7XG4gICAgICAgIGlmIChtYWluKSByZXMgPSBtYWluO1xuICAgICAgICBpZiAoYnRuKSByZXMgKz0gJyAnICsgYnRuO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNzcygpOiBhbnkgeyByZXR1cm4gc3VydmV5Q3NzLmdldENzcygpOyB9XG4gICAgcHVibGljIHNldCBjc3ModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1lcmdlVmFsdWVzKHZhbHVlLCB0aGlzLmNzcyk7XG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoZWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nZXRUZW1wbGF0ZSgpO1xuICAgICAgICBzZWxmLmFwcGx5QmluZGluZygpO1xuICAgICAgICBzZWxmLm9uUmVuZGVyZWQuZmlyZShzZWxmLCB7fSk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQ6IHN0cmluZyA9IG51bGwsIHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAocmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IHJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5sb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0Q29tcGxldGVkKCkge1xuICAgICAgICBzdXBlci5zZXRDb21wbGV0ZWQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdQYWdlKG5hbWU6IHN0cmluZykgeyByZXR1cm4gbmV3IFBhZ2UobmFtZSk7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIGtvVGVtcGxhdGUuaHRtbDsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHVtbXlPYnNlcnZhYmxlID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5rb0N1cnJlbnRQYWdlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmR1bW15T2JzZXJ2YWJsZSgpOyByZXR1cm4gc2VsZi5jdXJyZW50UGFnZTsgfSk7XG4gICAgICAgIHRoaXMua29Jc0ZpcnN0UGFnZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuaXNGaXJzdFBhZ2U7IH0pO1xuICAgICAgICB0aGlzLmtvSXNMYXN0UGFnZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuaXNMYXN0UGFnZTsgfSk7XG4gICAgICAgIHRoaXMua29Qcm9ncmVzc1RleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYuZHVtbXlPYnNlcnZhYmxlKCk7IHJldHVybiBzZWxmLnByb2dyZXNzVGV4dDsgfSk7XG4gICAgICAgIHRoaXMua29Qcm9ncmVzcyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuZ2V0UHJvZ3Jlc3MoKTsgfSk7XG4gICAgICAgIHRoaXMua29TdGF0ZSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5kdW1teU9ic2VydmFibGUoKTsgcmV0dXJuIHNlbGYuc3RhdGU7IH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VDaGFuZ2VkKG5ld1ZhbHVlOiBQYWdlTW9kZWwsIG9sZFZhbHVlOiBQYWdlTW9kZWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgICAgIHN1cGVyLmN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXNpZ25Nb2RlKSB0aGlzLmZvY3VzRmlyc3RRdWVzdGlvbigpO1xuICAgIH1cbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlS29DdXJyZW50UGFnZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkU3VydmV5RnJvbVNlcnZpY2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJlZEVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0UmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZpcnN0UmVuZGVyID0gZmFsc2U7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUtvQ3VycmVudFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuZHVtbXlPYnNlcnZhYmxlKHRoaXMuZHVtbXlPYnNlcnZhYmxlKCkgKyAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50UGFnZVF1ZXN0aW9ucygpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuY3VycmVudFBhZ2UgPyB0aGlzLmN1cnJlbnRQYWdlLnF1ZXN0aW9ucyA6IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHEgPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAocS52aXNpYmxlKSBxW1widXBkYXRlUXVlc3Rpb25cIl0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29zdXJ2ZXkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9XG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UGFnZU1vZGVsLCBRdWVzdGlvblJvd01vZGVsfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbmJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUm93IGV4dGVuZHMgUXVlc3Rpb25Sb3dNb2RlbCB7XG4gICAga29WaXNpYmxlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2VNb2RlbCwgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgc3VwZXIocGFnZSwgcXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUodGhpcy52aXNpYmxlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29WaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuICAgIHB1YmxpYyBrb0FmdGVyUmVuZGVyKGVsLCBjb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRFbCA9IGVsW2ldO1xuICAgICAgICAgICAgdmFyIG5OYW1lID0gdEVsLm5vZGVOYW1lO1xuICAgICAgICAgICAgaWYgKG5OYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZSBleHRlbmRzIFBhZ2VNb2RlbCB7XG4gICAga29ObzogYW55O1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHRoaXMua29ObyA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUm93KHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBRdWVzdGlvblJvd01vZGVsIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJvdyh0aGlzLCBxdWVzdGlvbik7IH1cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGluZygpIHsgfVxuICAgIHByb3RlY3RlZCBvbk51bUNoYW5nZWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmtvTm8odmFsdWUgPiAwID8gdmFsdWUgKyBcIi4gXCIgOiBcIlwiKTtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInBhZ2VcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFBhZ2UoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcGFnZS50cyIsImV4cG9ydCB2YXIga29UZW1wbGF0ZSA9IHsgaHRtbCA6IFwiXCJ9OyBrb1RlbXBsYXRlLmh0bWwgPSAnPHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktY29tbWVudFwiPiAgPGlucHV0IGRhdGEtYmluZD1cInZhbHVlOiRkYXRhLnF1ZXN0aW9uLmtvQ29tbWVudCwgdmlzaWJsZTokZGF0YS52aXNpYmxlLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi5jb21tZW50XCIgLz48L3NjcmlwdD48ZGl2IGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnJvb3RcIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAodGl0bGUubGVuZ3RoID4gMCkgJiYgc2hvd1RpdGxlICYmIGtvU3RhdGUoKSAhPSBcXCdjb21wbGV0ZWRcXCcsIGNzczogJHJvb3QuY3NzLmhlYWRlclwiPiAgICAgICAgPGgzIGRhdGEtYmluZD1cInRleHQ6dGl0bGVcIj48L2gzPiAgICA8L2Rpdj4gICAgPCEtLSBrbyBpZjoga29TdGF0ZSgpID09IFwicnVubmluZ1wiIC0tPiAgICA8ZGl2IGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLmJvZHlcIj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogc2hvd1Byb2dyZXNzQmFyID09XFwndG9wXFwnLCB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcHJvZ3Jlc3NcXCcsIGRhdGE6ICRkYXRhIH1cIj48L2Rpdj4gICAgICAgIDxkaXYgaWQ9XCJzcV9wYWdlXCIgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXBhZ2VcXCcsIGRhdGE6IGtvQ3VycmVudFBhZ2UgfVwiPjwvZGl2PiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiIGRhdGEtYmluZD1cInZpc2libGU6IHNob3dQcm9ncmVzc0JhciA9PVxcJ2JvdHRvbVxcJywgdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXByb2dyZXNzXFwnLCBkYXRhOiAkZGF0YSB9XCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNob3dOYXZpZ2F0aW9uQnV0dG9ucyAmJiAhaXNEZXNpZ25Nb2RlLCBjc3M6ICRyb290LmNzcy5mb290ZXJcIj4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwidmFsdWU6IHBhZ2VQcmV2VGV4dCwgY2xpY2s6IHByZXZQYWdlLCB2aXNpYmxlOiAha29Jc0ZpcnN0UGFnZSgpLCBjc3M6ICRyb290LmNzc05hdmlnYXRpb25QcmV2XCIgLz4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwidmFsdWU6IHBhZ2VOZXh0VGV4dCwgY2xpY2s6IG5leHRQYWdlLCB2aXNpYmxlOiAha29Jc0xhc3RQYWdlKCksIGNzczogJHJvb3QuY3NzTmF2aWdhdGlvbk5leHRcIiAvPiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJ2YWx1ZTogY29tcGxldGVUZXh0LCBjbGljazogY29tcGxldGVMYXN0UGFnZSwgdmlzaWJsZToga29Jc0xhc3RQYWdlKCksIGNzczogJHJvb3QuY3NzTmF2aWdhdGlvbkNvbXBsZXRlXCIgLz4gICAgPC9kaXY+ICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIGtvIGlmOiBrb1N0YXRlKCkgPT0gXCJjb21wbGV0ZWRcIiAtLT4gICAgPGRpdiBkYXRhLWJpbmQ9XCJodG1sOiBwcm9jZXNzZWRDb21wbGV0ZWRIdG1sXCI+PC9kaXY+ICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIGtvIGlmOiBrb1N0YXRlKCkgPT0gXCJsb2FkaW5nXCIgLS0+ICAgIDxkaXYgZGF0YS1iaW5kPVwiaHRtbDogcHJvY2Vzc2VkTG9hZGluZ0h0bWxcIj48L2Rpdj4gICAgPCEtLSAva28gLS0+ICAgIDwhLS0ga28gaWY6IGtvU3RhdGUoKSA9PSBcImVtcHR5XCIgLS0+ICAgIDxkaXYgZGF0YS1iaW5kPVwidGV4dDplbXB0eVN1cnZleVRleHQsIGNzczogJHJvb3QuY3NzLmJvZHlcIj48L2Rpdj4gICAgPCEtLSAva28gLS0+PC9kaXY+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcGFnZVwiPiAgICA8aDQgZGF0YS1iaW5kPVwidmlzaWJsZTogKHRpdGxlLmxlbmd0aCA+IDApICYmIGRhdGEuc2hvd1BhZ2VUaXRsZXMsIHRleHQ6IGtvTm8oKSArIHByb2Nlc3NlZFRpdGxlLCBjc3M6ICRyb290LmNzcy5wYWdlVGl0bGVcIj48L2g0PiAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93cywgYXM6IFxcJ3Jvd1xcJ30gLS0+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcm93LmtvVmlzaWJsZSwgY3NzOiAkcm9vdC5jc3Mucm93XCI+ICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93LnF1ZXN0aW9ucywgYXM6IFxcJ3F1ZXN0aW9uXFwnICwgYWZ0ZXJSZW5kZXI6IHJvdy5rb0FmdGVyUmVuZGVyIH0gLS0+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6IHF1ZXN0aW9uIH0gLS0+PCEtLSAva28gLS0+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgPC9kaXY+ICAgIDwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXByb2dyZXNzXCI+ICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDo2MCU7XCIgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucHJvZ3Jlc3NcIj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucHJvZ3Jlc3NCYXIsIHN0eWxlOnt3aWR0aDoga29Qcm9ncmVzcygpICsgXFwnJVxcJ31cIiAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiICAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OmtvUHJvZ3Jlc3NUZXh0XCI+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWNoZWNrYm94XCI+ICAgIDxmb3JtIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLmNoZWNrYm94LnJvb3RcIj4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzLCBhczogXFwnaXRlbVxcJywgYWZ0ZXJSZW5kZXI6IHF1ZXN0aW9uLmtvQWZ0ZXJSZW5kZXJ9ICAtLT4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwic3R5bGU6e3dpZHRoOiBxdWVzdGlvbi5rb1dpZHRoLCBcXCdtYXJnaW4tcmlnaHRcXCc6IHF1ZXN0aW9uLmNvbENvdW50ID09IDAgPyBcXCc1cHhcXCc6IFxcJzBweFxcJ30sIGNzczogJHJvb3QuY3NzLmNoZWNrYm94Lml0ZW1cIj4gICAgICAgICAgICA8bGFiZWwgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuY2hlY2tib3guaXRlbVwiPiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHF1ZXN0aW9uLm5hbWUsIHZhbHVlOiBpdGVtLnZhbHVlLCBpZDogKCRpbmRleCgpID09IDApID8gcXVlc3Rpb24uaW5wdXRJZCA6IFxcJ1xcJ30sIGNoZWNrZWQ6IHF1ZXN0aW9uLmtvVmFsdWVcIiAvPiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBpdGVtLnRleHRcIj48L3NwYW4+ICAgICAgICAgICAgPC9sYWJlbD4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc090aGVyICYmICgkaW5kZXgoKSA9PSBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzKCkubGVuZ3RoLTEpXCI+ICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHF1ZXN0aW9uLmtvT3RoZXJWaXNpYmxlIH0gfSwgY3NzOiAkcm9vdC5jc3MuY2hlY2tib3gub3RoZXJcIj48L2Rpdj4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZm9ybT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1jb21tZW50XCI+ICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cImF0dHI6IHtjb2xzOiBxdWVzdGlvbi5jb2xzLCByb3dzOiBxdWVzdGlvbi5yb3dzLCBpZDogcXVlc3Rpb24uaW5wdXRJZH0sIHZhbHVlOnF1ZXN0aW9uLmtvVmFsdWUsIGNzczogJHJvb3QuY3NzLmNvbW1lbnRcIiAvPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWRyb3Bkb3duXCI+ICAgIDxzZWxlY3QgZGF0YS1iaW5kPVwiYXR0cjoge2lkOiBxdWVzdGlvbi5pbnB1dElkfSwgb3B0aW9uczogcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIG9wdGlvbnNWYWx1ZTogXFwndmFsdWVcXCcsIHZhbHVlOiBxdWVzdGlvbi5rb1ZhbHVlLCBvcHRpb25zQ2FwdGlvbjogcXVlc3Rpb24ub3B0aW9uc0NhcHRpb24sIGNzczogJHJvb3QuY3NzLmRyb3Bkb3duXCI+PC9zZWxlY3Q+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzT3RoZXJcIj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHF1ZXN0aW9uLmtvT3RoZXJWaXNpYmxlIH0gfVwiPjwvZGl2PiAgICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1lcnJvcnNcIj4gICAgPGRpdiByb2xlPVwiYWxlcnRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0Vycm9ycygpLmxlbmd0aCA+IDAsIGZvcmVhY2g6IHsgZGF0YToga29FcnJvcnMsIGFzOiBcXCdlcnJvclxcJ30sIGNzczogJHJvb3QuY3NzLmVycm9yLnJvb3RcIj4gICAgICAgIDxkaXY+ICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuZXJyb3IuaWNvblwiPjwvc3Bhbj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OmVycm9yLmdldFRleHQoKSwgY3NzOiAkcm9vdC5jc3MuZXJyb3IuaXRlbVwiPjwvc3Bhbj4gICAgICAgIDwvZGl2PiAgICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1maWxlXCI+ICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGRhdGEtYmluZD1cImF0dHI6IHtpZDogcXVlc3Rpb24uaW5wdXRJZH0sIGV2ZW50OiB7Y2hhbmdlOiBkb2NoYW5nZX1cIj4gICAgPGRpdj4gICAgICAgIDxpbWcgZGF0YS1iaW5kPVwiYXR0cjogeyBzcmM6IHF1ZXN0aW9uLmtvRGF0YSwgaGVpZ2h0OiBxdWVzdGlvbi5pbWFnZUhlaWdodCwgd2lkdGg6IHF1ZXN0aW9uLmltYWdlV2lkdGggfSwgdmlzaWJsZTogcXVlc3Rpb24ua29IYXNWYWx1ZVwiPiAgICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1odG1sXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwiaHRtbDogcXVlc3Rpb24ucHJvY2Vzc2VkSHRtbFwiPjwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLW1hdHJpeFwiPiAgICA8dGFibGUgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MubWF0cml4LnJvb3RcIj4gICAgICAgIDx0aGVhZD4gICAgICAgICAgICA8dHI+ICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNSb3dzXCI+PC90aD4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDokZGF0YS50ZXh0XCI+PC90aD4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgPC90cj4gICAgICAgIDwvdGhlYWQ+ICAgICAgICA8dGJvZHk+ICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHF1ZXN0aW9uLnZpc2libGVSb3dzLCBhczogXFwncm93XFwnIH0gLS0+ICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzUm93cywgdGV4dDpyb3cudGV4dFwiPjwvdGQ+ICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb24uY29sdW1ucyAtLT4gICAgICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRhdGEtYmluZD1cImF0dHI6IHtuYW1lOiByb3cuZnVsbE5hbWUsIHZhbHVlOiAkZGF0YS52YWx1ZSwgaWQ6ICgkaW5kZXgoKSA9PSAwKSAmJiAoJHBhcmVudENvbnRleHQuJGluZGV4KCkgPT0gMCkgPyBxdWVzdGlvbi5pbnB1dElkIDogXFwnXFwnfSwgY2hlY2tlZDogcm93LmtvVmFsdWVcIi8+ICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L3Rib2R5PiAgICA8L3RhYmxlPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLW1hdHJpeGRyb3Bkb3duXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwic3R5bGU6IHtvdmVyZmxvd1g6IHF1ZXN0aW9uLmhvcml6b250YWxTY3JvbGw/IFxcJ3Njcm9sbFxcJzogXFwnXFwnfVwiPiAgICAgICAgPHRhYmxlIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLm1hdHJpeGRyb3Bkb3duLnJvb3RcIj4gICAgICAgICAgICA8dGhlYWQ+ICAgICAgICAgICAgICAgIDx0cj4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6IHF1ZXN0aW9uLmdldENvbHVtblRpdGxlKCRkYXRhKSwgc3R5bGU6IHsgbWluV2lkdGg6IHF1ZXN0aW9uLmdldENvbHVtbldpZHRoKCRkYXRhKSB9XCI+PC90aD4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgIDwvdGhlYWQ+ICAgICAgICAgICAgPHRib2R5PiAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24udmlzaWJsZVJvd3MsIGFzOiBcXCdyb3dcXCcgfSAtLT4gICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6cm93LnRleHRcIj48L3RkPiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiByb3cuY2VsbHMtLT4gICAgICAgICAgICAgICAgICAgIDx0ZD4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1lcnJvcnNcXCcsIGRhdGE6ICRkYXRhLnF1ZXN0aW9uIH0gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb24tXFwnICsgJGRhdGEucXVlc3Rpb24uZ2V0VHlwZSgpLCBkYXRhOiAkZGF0YS5xdWVzdGlvbiwgYXM6IFxcJ3F1ZXN0aW9uXFwnIH0gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgIDwvdGJvZHk+ICAgICAgICA8L3RhYmxlPiAgICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1tYXRyaXhkeW5hbWljXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwic3R5bGU6IHtvdmVyZmxvd1g6IHF1ZXN0aW9uLmhvcml6b250YWxTY3JvbGw/IFxcJ3Njcm9sbFxcJzogXFwnXFwnfVwiPiAgICAgICAgPHRhYmxlIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLm1hdHJpeGR5bmFtaWMucm9vdFwiPiAgICAgICAgICAgIDx0aGVhZD4gICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6IHF1ZXN0aW9uLmdldENvbHVtblRpdGxlKCRkYXRhKSwgc3R5bGU6IHsgbWluV2lkdGg6IHF1ZXN0aW9uLmdldENvbHVtbldpZHRoKCRkYXRhKSB9XCI+PC90aD4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+ICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgPC90aGVhZD4gICAgICAgICAgICA8dGJvZHk+ICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiBxdWVzdGlvbi5rb1Jvd3MsIGFzOiBcXCdyb3dcXCcgfSAtLT4gICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiByb3cuY2VsbHMtLT4gICAgICAgICAgICAgICAgICAgIDx0ZD4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1lcnJvcnNcXCcsIGRhdGE6ICRkYXRhLnF1ZXN0aW9uIH0gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb24tXFwnICsgJGRhdGEucXVlc3Rpb24uZ2V0VHlwZSgpLCBkYXRhOiAkZGF0YS5xdWVzdGlvbiwgYXM6IFxcJ3F1ZXN0aW9uXFwnIH0gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJjbGljazpxdWVzdGlvbi5rb1JlbW92ZVJvd0NsaWNrLCBjc3M6ICRyb290LmNzcy5tYXRyaXhkeW5hbWljLmJ1dHRvbiwgdmFsdWU6IHF1ZXN0aW9uLnJlbW92ZVJvd1RleHRcIiAvPjwvdGQ+ICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICAgIDwvdGJvZHk+ICAgICAgICA8L3RhYmxlPiAgICA8L2Rpdj4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJjbGljazpxdWVzdGlvbi5rb0FkZFJvd0NsaWNrLCBjc3M6ICRyb290LmNzcy5tYXRyaXhkeW5hbWljLmJ1dHRvbiwgdmFsdWU6IHF1ZXN0aW9uLmFkZFJvd1RleHRcIiAvPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLW11bHRpcGxldGV4dFwiPiAgICA8dGFibGUgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MubXVsdGlwbGV0ZXh0LnJvb3QsIGZvcmVhY2g6IHsgZGF0YTogIHF1ZXN0aW9uLmtvUm93cywgYXM6IFxcJ3Jvd1xcJyB9XCI+ICAgICAgICA8dHIgZGF0YS1iaW5kPVwiZm9yZWFjaDogeyBkYXRhOiByb3csIGFzOiBcXCdpdGVtXFwnIH1cIj4gICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogaXRlbS50aXRsZSwgY3NzOiAkcm9vdC5jc3MubXVsdGlwbGV0ZXh0Lml0ZW1UaXRsZVwiPjwvdGQ+ICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPVwiZmxvYXQ6bGVmdFwiIGRhdGEtYmluZD1cImF0dHI6IHtzaXplOiBxdWVzdGlvbi5pdGVtU2l6ZSwgaWQ6ICgkaW5kZXgoKSA9PSAwKSA/IHF1ZXN0aW9uLmlucHV0SWQgOiBcXCdcXCd9LCB2YWx1ZTogaXRlbS5rb1ZhbHVlLCBjc3M6ICRyb290LmNzcy5tdWx0aXBsZXRleHQuaXRlbVZhbHVlXCIgLz48L3RkPiAgICAgICAgPC90cj4gICAgPC90YWJsZT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1yYWRpb2dyb3VwXCI+ICAgIDxmb3JtIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnJhZGlvZ3JvdXAucm9vdFwiPiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMsIGFzOiBcXCdpdGVtXFwnLCBhZnRlclJlbmRlcjogcXVlc3Rpb24ua29BZnRlclJlbmRlcn0gIC0tPiAgICAgICAgPGRpdiAgZGF0YS1iaW5kPVwic3R5bGU6e3dpZHRoOiBxdWVzdGlvbi5rb1dpZHRoLCBcXCdtYXJnaW4tcmlnaHRcXCc6IHF1ZXN0aW9uLmNvbENvdW50ID09IDAgPyBcXCc1cHhcXCc6IFxcJzBweFxcJ30sIGNzczogJHJvb3QuY3NzLnJhZGlvZ3JvdXAuaXRlbVwiPiAgICAgICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5yYWRpb2dyb3VwLml0ZW1cIj4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRhdGEtYmluZD1cImF0dHI6IHtuYW1lOiBxdWVzdGlvbi5uYW1lLCB2YWx1ZTogaXRlbS52YWx1ZSwgaWQ6ICgkaW5kZXgoKSA9PSAwKSA/IHF1ZXN0aW9uLmlucHV0SWQgOiBcXCdcXCd9LCBjaGVja2VkOiBxdWVzdGlvbi5rb1ZhbHVlXCIgLz4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogaXRlbS50ZXh0XCI+PC9zcGFuPiAgICAgICAgICAgIDwvbGFiZWw+ICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNPdGhlciAmJiAoJGluZGV4KCkgPT0gcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcygpLmxlbmd0aC0xKVwiPiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1jb21tZW50XFwnLCBkYXRhOiB7XFwncXVlc3Rpb25cXCc6IHF1ZXN0aW9uLCBcXCd2aXNpYmxlXFwnOiBxdWVzdGlvbi5rb090aGVyVmlzaWJsZX19LCBjc3M6ICRyb290LmNzcy5yYWRpb2dyb3VwLm90aGVyXCI+PC9kaXY+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDwhLS0gL2tvIC0tPiAgICA8L2Zvcm0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tcmF0aW5nXCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucmF0aW5nLnJvb3RcIj4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb24ua29WaXNpYmxlUmF0ZVZhbHVlcyAtLT4gICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XCJjc3M6IHF1ZXN0aW9uLmtvR2V0Q3NzKCRkYXRhKVwiPiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImF0dHI6IHtuYW1lOiBxdWVzdGlvbi5uYW1lLCBpZDogcXVlc3Rpb24ubmFtZSArICRpbmRleCgpLCB2YWx1ZTogJGRhdGEudmFsdWV9LCBldmVudDogeyBjaGFuZ2U6IHF1ZXN0aW9uLmtvQ2hhbmdlfVwiIC8+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogJGluZGV4KCkgPT0gMCwgdGV4dDogcXVlc3Rpb24ubWluaW51bVJhdGVEZXNjcmlwdGlvblwiPjwvc3Bhbj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkZGF0YS50ZXh0XCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6ICRpbmRleCgpID09IChxdWVzdGlvbi5rb1Zpc2libGVSYXRlVmFsdWVzKCkubGVuZ3RoLTEpLCB0ZXh0OiBxdWVzdGlvbi5tYXhpbXVtUmF0ZURlc2NyaXB0aW9uXCI+PC9zcGFuPiAgICAgICAgPC9sYWJlbD4gICAgICAgIDwhLS0gL2tvIC0tPiAgICA8L2Rpdj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNPdGhlclwiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiB9IH1cIj48L2Rpdj4gICAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tdGV4dFwiPiAgICA8aW5wdXQgZGF0YS1iaW5kPVwiYXR0cjoge3R5cGU6IHF1ZXN0aW9uLmlucHV0VHlwZSwgc2l6ZTogcXVlc3Rpb24uc2l6ZSwgaWQ6IHF1ZXN0aW9uLmlucHV0SWR9LCB2YWx1ZTpxdWVzdGlvbi5rb1ZhbHVlLCBjc3M6ICRyb290LmNzcy50ZXh0XCIvPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uXCI+ICAgIDxkaXYgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5xdWVzdGlvbi5yb290LCBzdHlsZToge2Rpc3BsYXk6IHF1ZXN0aW9uLmtvVmlzaWJsZSgpID8gXFwnaW5saW5lLWJsb2NrXFwnOiBcXCdub25lXFwnLCBtYXJnaW5MZWZ0OiBxdWVzdGlvbi5rb01hcmdpbkxlZnQsIHBhZGRpbmdSaWdodDogcXVlc3Rpb24ua29QYWRkaW5nUmlnaHQsIHdpZHRoOiBxdWVzdGlvbi5rb1JlbmRlcldpZHRoIH0sIGF0dHI6IHtpZDogaWR9XCI+ICAgICAgICA8IS0tIGtvIGlmOiBxdWVzdGlvbi5oYXNUaXRsZSAtLT4gICAgICAgIDxoNSBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkcm9vdC5xdWVzdGlvblRpdGxlTG9jYXRpb24gPT0gXFwndG9wXFwnLCB0ZXh0OiBxdWVzdGlvbi5rb1RpdGxlKCksIGNzczogJHJvb3QuY3NzLnF1ZXN0aW9uLnRpdGxlXCI+PC9oNT4gICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb24tZXJyb3JzXFwnLCBkYXRhOiBxdWVzdGlvbiB9IC0tPiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyBxdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6IHF1ZXN0aW9uLCBhZnRlclJlbmRlcjogcXVlc3Rpb24ua29RdWVzdGlvbkFmdGVyUmVuZGVyIH0gLS0+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzQ29tbWVudFwiPiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGV4dDpxdWVzdGlvbi5jb21tZW50VGV4dFwiPjwvZGl2PiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHRydWUgfSB9XCI+PC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICAgICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCdib3R0b21cXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZGl2Pjwvc2NyaXB0Pic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlLmtvLmh0bWwudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tIFwiLi4vcXVlc3Rpb25iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkltcGxlbWVudG9yQmFzZSB7XG4gICAga29WaXNpYmxlOiBhbnk7IGtvRXJyb3JzOiBhbnk7IGtvTWFyZ2luTGVmdDogYW55OyBrb1BhZGRpbmdSaWdodDogYW55OyBrb1JlbmRlcldpZHRoOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBxdWVzdGlvbi52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uVmlzaWJpbGl0eUNoYW5nZWQoKTsgfTtcbiAgICAgICAgcXVlc3Rpb24ucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25SZW5kZXJXaWR0aENoYW5nZWQoKTsgfTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUgPSBrby5vYnNlcnZhYmxlKHRoaXMucXVlc3Rpb24udmlzaWJsZSk7XG4gICAgICAgIHRoaXMua29SZW5kZXJXaWR0aCA9IGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi5yZW5kZXJXaWR0aCk7XG4gICAgICAgIHRoaXMua29FcnJvcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb01hcmdpbkxlZnQgPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvUmVuZGVyV2lkdGgoKTsgcmV0dXJuIHNlbGYuZ2V0SW5kZW50U2l6ZShzZWxmLnF1ZXN0aW9uLmluZGVudCk7IH0pO1xuICAgICAgICB0aGlzLmtvUGFkZGluZ1JpZ2h0ID0ga28ub2JzZXJ2YWJsZShzZWxmLmdldEluZGVudFNpemUoc2VsZi5xdWVzdGlvbi5yaWdodEluZGVudCkpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29WaXNpYmxlXCJdID0gdGhpcy5rb1Zpc2libGU7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1JlbmRlcldpZHRoXCJdID0gdGhpcy5rb1JlbmRlcldpZHRoO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29FcnJvcnNcIl0gPSB0aGlzLmtvRXJyb3JzO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29NYXJnaW5MZWZ0XCJdID0gdGhpcy5rb01hcmdpbkxlZnQ7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1BhZGRpbmdSaWdodFwiXSA9IHRoaXMua29QYWRkaW5nUmlnaHQ7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJ1cGRhdGVRdWVzdGlvblwiXSA9IGZ1bmN0aW9uICgpIHsgc2VsZi51cGRhdGVRdWVzdGlvbigpOyB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVRdWVzdGlvbigpIHsgIH1cbiAgICBwcm90ZWN0ZWQgb25WaXNpYmlsaXR5Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodGhpcy5xdWVzdGlvbi52aXNpYmxlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uUmVuZGVyV2lkdGhDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvUmVuZGVyV2lkdGgodGhpcy5xdWVzdGlvbi5yZW5kZXJXaWR0aCk7XG4gICAgICAgIHRoaXMua29QYWRkaW5nUmlnaHQodGhpcy5nZXRJbmRlbnRTaXplKHRoaXMucXVlc3Rpb24ucmlnaHRJbmRlbnQpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRlbnRTaXplKGluZGVudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGluZGVudCA8IDEpIHJldHVybiBcIlwiO1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25bXCJkYXRhXCJdKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGNzcyA9IHRoaXMucXVlc3Rpb25bXCJkYXRhXCJdW1wiY3NzXCJdO1xuICAgICAgICBpZiAoIWNzcykgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBpbmRlbnQgKiBjc3MucXVlc3Rpb24uaW5kZW50ICsgXCJweFwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbmJhc2UudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvckJhc2V9IGZyb20gXCIuL2tvcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uSW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yQmFzZSB7XG4gICAgcHJpdmF0ZSBpc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrb0R1bW15OiBhbnk7XG4gICAga29WYWx1ZTogYW55OyBrb0NvbW1lbnQ6IGFueTsga29UaXRsZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uVmFsdWVDaGFuZ2VkKCk7IH07XG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db21tZW50Q2hhbmdlZCgpOyB9O1xuICAgICAgICBxdWVzdGlvbi5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25FcnJvcnNDaGFuZ2VkKCk7IH07XG4gICAgICAgIHF1ZXN0aW9uLnRpdGxlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uVmlzaWJsZUluZGV4Q2hhbmdlZCgpOyB9O1xuICAgICAgICBxdWVzdGlvbi52aXNpYmxlSW5kZXhDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25WaXNpYmxlSW5kZXhDaGFuZ2VkKCk7IH07XG4gICAgICAgIHRoaXMua29EdW1teSA9IGtvLm9ic2VydmFibGUoMCk7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IHRoaXMuY3JlYXRla29WYWx1ZSgpO1xuICAgICAgICB0aGlzLmtvQ29tbWVudCA9IGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi5jb21tZW50KTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5rb0R1bW15KCk7IHJldHVybiBzZWxmLnF1ZXN0aW9uLmZ1bGxUaXRsZTsgfSk7XG4gICAgICAgIHRoaXMua29FcnJvcnModGhpcy5xdWVzdGlvbi5lcnJvcnMpO1xuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtvQ29tbWVudC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbW1lbnQobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVmFsdWVcIl0gPSB0aGlzLmtvVmFsdWU7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0NvbW1lbnRcIl0gPSB0aGlzLmtvQ29tbWVudDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVGl0bGVcIl0gPSB0aGlzLmtvVGl0bGU7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1F1ZXN0aW9uQWZ0ZXJSZW5kZXJcIl0gPSB0aGlzLmtvUXVlc3Rpb25BZnRlclJlbmRlcjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVF1ZXN0aW9uKCkge1xuICAgICAgICB0aGlzLmtvRHVtbXkodGhpcy5rb0R1bW15KCkgKyAxKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5pc1VwZGF0aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0a29WYWx1ZSh0aGlzLnF1ZXN0aW9uLnZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQ29tbWVudENoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb0NvbW1lbnQodGhpcy5xdWVzdGlvbi5jb21tZW50KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmlzaWJpbGl0eUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29WaXNpYmxlKHRoaXMucXVlc3Rpb24udmlzaWJsZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZpc2libGVJbmRleENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29EdW1teSh0aGlzLmtvRHVtbXkoKSArIDEpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25FcnJvcnNDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvRXJyb3JzKHRoaXMucXVlc3Rpb24uZXJyb3JzKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZWtvVmFsdWUoKTogYW55IHsgcmV0dXJuIGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi52YWx1ZSk7IH1cbiAgICBwcm90ZWN0ZWQgc2V0a29WYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMua29WYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucXVlc3Rpb24udmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVDb21tZW50KG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jb21tZW50ID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Tm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb24udmlzaWJsZUluZGV4ID4gLTEgPyB0aGlzLnF1ZXN0aW9uLnZpc2libGVJbmRleCArIDEgKyBcIi4gXCIgOiBcIlwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQga29RdWVzdGlvbkFmdGVyUmVuZGVyKGVsLCBjb24pIHtcbiAgICAgICAgdmFyIHRFbCA9IGVsWzBdO1xuICAgICAgICBpZiAodEVsLm5vZGVOYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xuICAgICAgICB0RWwgPSBlbFtlbC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRFbC5ub2RlTmFtZSA9PSBcIiN0ZXh0XCIpIHRFbC5kYXRhID0gXCJcIjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb24udHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZSwgUXVlc3Rpb25DaGVja2JveEJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblNlbGVjdEJhc2VJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3J7XG4gICAga29PdGhlclZpc2libGU6IGFueTsga29WaXNpYmxlQ2hvaWNlczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmtvT3RoZXJWaXNpYmxlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuaXNPdGhlclNlbGVjdGVkOyB9KTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGVDaG9pY2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCg8UXVlc3Rpb25DaGVja2JveEJhc2U+c2VsZi5xdWVzdGlvbikudmlzaWJsZUNob2ljZXMpO1xuICAgICAgICAoPFF1ZXN0aW9uQ2hlY2tib3hCYXNlPnF1ZXN0aW9uKS5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvVmlzaWJsZUNob2ljZXMoKDxRdWVzdGlvbkNoZWNrYm94QmFzZT5zZWxmLnF1ZXN0aW9uKS52aXNpYmxlQ2hvaWNlcyk7IH07XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb090aGVyVmlzaWJsZVwiXSA9IHRoaXMua29PdGhlclZpc2libGU7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1Zpc2libGVDaG9pY2VzXCJdID0gdGhpcy5rb1Zpc2libGVDaG9pY2VzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGlzT3RoZXJTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICg8UXVlc3Rpb25TZWxlY3RCYXNlPnRoaXMucXVlc3Rpb24pLmlzT3RoZXJTZWxlY3RlZDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUXVlc3Rpb25DaGVja2JveEJhc2VJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uU2VsZWN0QmFzZUltcGxlbWVudG9yIHtcbiAgICBrb1dpZHRoOiBhbnk7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5rb1dpZHRoID0ga28ub2JzZXJ2YWJsZSh0aGlzLmNvbFdpZHRoKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvV2lkdGhcIl0gPSB0aGlzLmtvV2lkdGg7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0FmdGVyUmVuZGVyXCJdID0gdGhpcy5rb0FmdGVyUmVuZGVyO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICg8UXVlc3Rpb25DaGVja2JveEJhc2U+dGhpcy5xdWVzdGlvbikuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db2xDb3VudENoYW5nZWQoKTsgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQ29sQ291bnRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29XaWR0aFwiXSA9IGtvLm9ic2VydmFibGUodGhpcy5jb2xXaWR0aCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29sV2lkdGgoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGNvbENvdW50ID0gKDxRdWVzdGlvbkNoZWNrYm94QmFzZT50aGlzLnF1ZXN0aW9uKS5jb2xDb3VudDtcbiAgICAgICAgcmV0dXJuIGNvbENvdW50ID4gMCA/ICgxMDAgLyBjb2xDb3VudCkgKyAnJScgOiBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIGtvQWZ0ZXJSZW5kZXIoZWwsIGNvbikge1xuICAgICAgICB2YXIgdEVsID0gZWxbMF07XG4gICAgICAgIGlmICh0RWwubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB0RWwuZGF0YSA9IFwiXCI7XG4gICAgICAgIHRFbCA9IGVsW2VsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodEVsLm5vZGVOYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fY2hlY2tib3hcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xuXG5jbGFzcyBRdWVzdGlvbkNoZWNrYm94SW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yIHtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRla29WYWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi52YWx1ZSA/IGtvLm9ic2VydmFibGVBcnJheSh0aGlzLnF1ZXN0aW9uLnZhbHVlKSA6IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0a29WYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5rb1ZhbHVlKFtdLmNvbmNhdChuZXdWYWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb1ZhbHVlKFtdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94IGV4dGVuZHMgUXVlc3Rpb25DaGVja2JveE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25DaGVja2JveEltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJjaGVja2JveFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25DaGVja2JveChcIlwiKTsgfSk7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImNoZWNrYm94XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uQ2hlY2tib3gobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2NoZWNrYm94LnRzIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25Db21tZW50TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9jb21tZW50XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29tbWVudCBleHRlbmRzIFF1ZXN0aW9uQ29tbWVudE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25JbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwiY29tbWVudFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Db21tZW50KFwiXCIpOyB9KTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY29tbWVudFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uQ29tbWVudChuYW1lKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY29tbWVudC50cyIsImltcG9ydCB7UXVlc3Rpb25Ecm9wZG93bk1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fZHJvcGRvd25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZUltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRHJvcGRvd24gZXh0ZW5kcyBRdWVzdGlvbkRyb3Bkb3duTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvblNlbGVjdEJhc2VJbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwiZHJvcGRvd25cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRHJvcGRvd24oXCJcIik7IH0pO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJkcm9wZG93blwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbkRyb3Bkb3duKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93bi50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25GaWxlTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9maWxlXCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GaWxlSW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yIHtcbiAgICBrb0RhdGFVcGRhdGVyOiBhbnk7IGtvRGF0YTogYW55OyBrb0hhc1ZhbHVlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvRGF0YVVwZGF0ZXIgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmtvRGF0YSA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5rb0RhdGFVcGRhdGVyKCk7IHJldHVybiAoPFF1ZXN0aW9uRmlsZU1vZGVsPnNlbGYucXVlc3Rpb24pLnByZXZpZXdWYWx1ZTsgfSk7XG4gICAgICAgIHRoaXMua29IYXNWYWx1ZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29EYXRhXCJdID0gdGhpcy5rb0RhdGE7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0hhc1ZhbHVlXCJdID0gdGhpcy5rb0hhc1ZhbHVlO1xuXG4gICAgICAgICg8UXVlc3Rpb25GaWxlTW9kZWw+dGhpcy5xdWVzdGlvbikucHJldmlld1ZhbHVlTG9hZGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Mb2FkUHJldmlldygpOyB9O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wiZG9jaGFuZ2VcIl0gPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHsgdmFyIHNyYyA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50OyBzZWxmLm9uQ2hhbmdlKHNyYyk7IH07XG4gICAgfVxuICAgIHByaXZhdGUgb25DaGFuZ2Uoc3JjOiBhbnkpIHtcbiAgICAgICAgaWYgKCF3aW5kb3dbXCJGaWxlUmVhZGVyXCJdKSByZXR1cm47XG4gICAgICAgIGlmICghc3JjIHx8ICFzcmMuZmlsZXMgfHwgc3JjLmZpbGVzLmxlbmd0aCA8IDEpIHJldHVybjtcbiAgICAgICAgKDxRdWVzdGlvbkZpbGVNb2RlbD50aGlzLnF1ZXN0aW9uKS5sb2FkRmlsZShzcmMuZmlsZXNbMF0pO1xuICAgIH1cbiAgICBwcml2YXRlIG9uTG9hZFByZXZpZXcoKSB7XG4gICAgICAgIHRoaXMua29EYXRhVXBkYXRlcih0aGlzLmtvRGF0YVVwZGF0ZXIoKSArIDEpO1xuICAgICAgICB0aGlzLmtvSGFzVmFsdWUodHJ1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRmlsZSBleHRlbmRzIFF1ZXN0aW9uRmlsZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25GaWxlSW1wbGVtZW50b3IodGhpcyk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcImZpbGVcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRmlsZShcIlwiKTsgfSk7XG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImZpbGVcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkZpbGUobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2ZpbGUudHMiLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yQmFzZX0gZnJvbSBcIi4va29xdWVzdGlvbmJhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb25IdG1sTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9odG1sXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkh0bWwgZXh0ZW5kcyBRdWVzdGlvbkh0bWxNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uSW1wbGVtZW50b3JCYXNlKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJodG1sXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkh0bWwoXCJcIik7IH0pO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJodG1sXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9odG1sLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1F1ZXN0aW9uTWF0cml4TW9kZWwsIE1hdHJpeFJvd01vZGVsLCBJTWF0cml4RGF0YX0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeFwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgTWF0cml4Um93IGV4dGVuZHMgTWF0cml4Um93TW9kZWwge1xuICAgIHByaXZhdGUgaXNWYWx1ZVVwZGF0aW5nID0gZmFsc2U7XG4gICAga29WYWx1ZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnksIHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBkYXRhOiBJTWF0cml4RGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcihuYW1lLCB0ZXh0LCBmdWxsTmFtZSwgZGF0YSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRoaXMudmFsdWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1ZhbHVlVXBkYXRpbmcpIHRydWU7XG4gICAgICAgICAgICBzZWxmLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaXNWYWx1ZVVwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCBmdWxsTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4Um93TW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvdyhuYW1lLCB0ZXh0LCBmdWxsTmFtZSwgdGhpcywgdmFsdWUpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJtYXRyaXhcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4KFwiXCIpOyB9KTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4KG5hbWUpOyBxLnJvd3MgPSBbXCJSb3cgMVwiLCBcIlJvdyAyXCJdOyBxLmNvbHVtbnMgPSBbXCJDb2x1bW4gMVwiLCBcIkNvbHVtbiAyXCIsIFwiQ29sdW1uIDNcIl07IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tYXRyaXgudHMiLCJpbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duIGV4dGVuZHMgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25JbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibWF0cml4ZHJvcGRvd25cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4RHJvcGRvd24oXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm1hdHJpeGRyb3Bkb3duXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4RHJvcGRvd24obmFtZSk7IHEuY2hvaWNlcyA9IFsxLCAyLCAzLCA0LCA1XTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHluYW1pY1wiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcbmltcG9ydCB7TWF0cml4RHluYW1pY1Jvd01vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHluYW1pY1wiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEeW5hbWljSW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yIHtcbiAgICBrb1Jvd3M6IGFueTsga29SZWNhbGM6IGFueTtcbiAgICBrb0FkZFJvd0NsaWNrOiBhbnk7IGtvUmVtb3ZlUm93Q2xpY2s6IGFueTsga29PdmVyZmxvd1g6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvUmVjYWxjID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5rb1Jvd3MgPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5rb1JlY2FsYygpOyByZXR1cm4gKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikuY2FjaGVkVmlzaWJsZVJvd3M7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLmtvT3ZlcmZsb3dYID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoPFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2U+dGhpcy5xdWVzdGlvbikuaG9yaXpvbnRhbFNjcm9sbCA/IFwic2Nyb2xsXCI6IFwibm9uZVwiO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUm93c1wiXSA9IHRoaXMua29Sb3dzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29BZGRSb3dDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hZGRSb3coKTsgfVxuICAgICAgICB0aGlzLmtvUmVtb3ZlUm93Q2xpY2sgPSBmdW5jdGlvbiAoZGF0YSkgeyBzZWxmLnJlbW92ZVJvdyhkYXRhKTsgfVxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29BZGRSb3dDbGlja1wiXSA9IHRoaXMua29BZGRSb3dDbGljaztcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUmVtb3ZlUm93Q2xpY2tcIl0gPSB0aGlzLmtvUmVtb3ZlUm93Q2xpY2s7XG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb092ZXJmbG93WFwiXSA9IHRoaXMua29PdmVyZmxvd1g7XG4gICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnJvd0NvdW50Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uUm93Q291bnRDaGFuZ2VkKCk7IH07XG4gICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLmNvbHVtbnNDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db2x1bW5DaGFuZ2VkKCk7IH07XG4gICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnVwZGF0ZUNlbGxzQ2FsbGJhayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblVwZGF0ZUNlbGxzKCk7IH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblVwZGF0ZUNlbGxzKCkge1xuICAgICAgICAvL0dlbmVyZWF0ZSByb3dzIGFnYWluLlxuICAgICAgICB2YXIgcm93cyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pW1wiZ2VuZXJhdGVkVmlzaWJsZVJvd3NcIl07XG4gICAgICAgIHZhciBjb2x1bW5zID0gKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikuY29sdW1ucztcbiAgICAgICAgaWYgKHJvd3MgJiYgcm93cy5sZW5ndGggPiAwICYmIGNvbHVtbnMgJiYgY29sdW1ucy5sZW5ndGggPiAwKSB0aGlzLm9uQ29sdW1uQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Db2x1bW5DaGFuZ2VkKCkge1xuICAgICAgICB2YXIgcm93cyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnZpc2libGVSb3dzO1xuICAgICAgICB0aGlzLm9uUm93Q291bnRDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblJvd0NvdW50Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1JlY2FsYyh0aGlzLmtvUmVjYWxjKCkgKyAxKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFkZFJvdygpIHtcbiAgICAgICAgKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikuYWRkUm93KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW1vdmVSb3cocm93OiBNYXRyaXhEeW5hbWljUm93TW9kZWwpIHtcbiAgICAgICAgdmFyIHJvd3MgPSAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5jYWNoZWRWaXNpYmxlUm93cztcbiAgICAgICAgdmFyIGluZGV4ID0gcm93cy5pbmRleE9mKHJvdyk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5yZW1vdmVSb3coaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWNJbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibWF0cml4ZHluYW1pY1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEeW5hbWljKFwiXCIpOyB9KTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkeW5hbWljXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4RHluYW1pYyhuYW1lKTsgcS5jaG9pY2VzID0gWzEsIDIsIDMsIDQsIDVdOyBxLnJvd0NvdW50ID0gMjsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGR5bmFtaWMudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7UXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbCwgTXVsdGlwbGVUZXh0SXRlbU1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbXVsdGlwbGV0ZXh0XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlVGV4dEl0ZW0gZXh0ZW5kcyBNdWx0aXBsZVRleHRJdGVtTW9kZWwge1xuICAgIHByaXZhdGUgaXNLT1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcbiAgICBrb1ZhbHVlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IGFueSA9IG51bGwsIHRpdGxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLmlzS09WYWx1ZVVwZGF0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzS09WYWx1ZVVwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc0tPVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTXVsdGlwbGVUZXh0SW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yIHtcbiAgICBrb1Jvd3M6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvUm93cyA9IGtvLm9ic2VydmFibGVBcnJheSgoPFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWw+dGhpcy5xdWVzdGlvbikuZ2V0Um93cygpKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUm93c1wiXSA9IHRoaXMua29Sb3dzO1xuICAgICAgICB0aGlzLm9uQ29sQ291bnRDaGFuZ2VkKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgKDxRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsPnRoaXMucXVlc3Rpb24pLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29sQ291bnRDaGFuZ2VkKCk7IH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNvbENvdW50Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1Jvd3MoKDxRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsPnRoaXMucXVlc3Rpb24pLmdldFJvd3MoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NdWx0aXBsZVRleHQgZXh0ZW5kcyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICBuZXcgUXVlc3Rpb25NdWx0aXBsZVRleHRJbXBsZW1lbnRvcih0aGlzKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRleHRJdGVtKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbShuYW1lLCB0aXRsZSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcIm11bHRpcGxldGV4dGl0ZW1cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE11bHRpcGxlVGV4dEl0ZW0oXCJcIik7IH0pO1xuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcIm11bHRpcGxldGV4dFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NdWx0aXBsZVRleHQoXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm11bHRpcGxldGV4dFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dChuYW1lKTsgcS5BZGRJdGVtKFwidGV4dDFcIik7IHEuQWRkSXRlbShcInRleHQyXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbXVsdGlwbGV0ZXh0LnRzIiwiaW1wb3J0IHtRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX3JhZGlvZ3JvdXBcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25SYWRpb2dyb3VwIGV4dGVuZHMgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJyYWRpb2dyb3VwXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhZGlvZ3JvdXAoXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInJhZGlvZ3JvdXBcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25SYWRpb2dyb3VwKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcbmltcG9ydCB7UXVlc3Rpb25SYXRpbmdNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX3JhdGluZ1wiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xuXG5jbGFzcyBRdWVzdGlvblJhdGluZ0ltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25JbXBsZW1lbnRvciB7XG4gICAga29WaXNpYmxlUmF0ZVZhbHVlczogYW55OyBrb0NoYW5nZTogYW55OyBrb0NzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbikge1xuICAgICAgICBzdXBlcihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29WaXNpYmxlUmF0ZVZhbHVlcyA9IGtvLm9ic2VydmFibGVBcnJheSh0aGlzLmdldFZhbHVlcygpKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVmlzaWJsZVJhdGVWYWx1ZXNcIl0gPSB0aGlzLmtvVmlzaWJsZVJhdGVWYWx1ZXM7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0NoYW5nZSA9IGZ1bmN0aW9uICh2YWwpIHsgc2VsZi5rb1ZhbHVlKHZhbC5pdGVtVmFsdWUpOyB9O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29DaGFuZ2VcIl0gPSB0aGlzLmtvQ2hhbmdlO1xuICAgICAgICAoPFF1ZXN0aW9uUmF0aW5nPnRoaXMucXVlc3Rpb24pLnJhdGVWYWx1ZXNDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25SYXRlVmFsdWVzQ2hhbmdlZCgpOyB9O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29HZXRDc3NcIl0gPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICB2YXIgY3NzID0gKDxRdWVzdGlvblJhdGluZz5zZWxmLnF1ZXN0aW9uKS5pdGVtQ3NzO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucXVlc3Rpb25bXCJrb1ZhbHVlXCJdKCkgPT0gdmFsLnZhbHVlID8gY3NzICsgXCIgYWN0aXZlXCIgOiBjc3M7IH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblJhdGVWYWx1ZXNDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvVmlzaWJsZVJhdGVWYWx1ZXModGhpcy5nZXRWYWx1ZXMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVzKCk6IEFycmF5PGFueT4geyByZXR1cm4gKDxRdWVzdGlvblJhdGluZz50aGlzLnF1ZXN0aW9uKS52aXNpYmxlUmF0ZVZhbHVlczsgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25SYXRpbmcgZXh0ZW5kcyBRdWVzdGlvblJhdGluZ01vZGVsIHtcbiAgICBwdWJsaWMgaXRlbUNzczogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIG5ldyBRdWVzdGlvblJhdGluZ0ltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25TZXREYXRhKCkge1xuICAgICAgICB0aGlzLml0ZW1Dc3MgPSB0aGlzLmRhdGFbXCJjc3NcIl0ucmF0aW5nLml0ZW07XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInJhdGluZ1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmcoXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInJhdGluZ1wiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uUmF0aW5nKG5hbWUpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9yYXRpbmcudHMiLCJpbXBvcnQge1F1ZXN0aW9uVGV4dE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fdGV4dFwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblRleHRJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb24pIHtcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlci51cGRhdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5xdWVzdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMucXVlc3Rpb24udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblRleHQgZXh0ZW5kcyBRdWVzdGlvblRleHRNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgbmV3IFF1ZXN0aW9uVGV4dEltcGxlbWVudG9yKHRoaXMpO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblRleHQoXCJcIik7IH0pO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInRleHRcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblRleHQobmFtZSk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3RleHQudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5V2luZG93TW9kZWx9IGZyb20gXCIuLi9zdXJ2ZXlXaW5kb3dcIjtcbmltcG9ydCB7U3VydmV5TW9kZWx9IGZyb20gXCIuLi9zdXJ2ZXlcIjtcbmltcG9ydCB7U3VydmV5fSBmcm9tIFwiLi9rb3N1cnZleVwiO1xuaW1wb3J0IHtrb1RlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLndpbmRvdy5rby5odG1sJ1xuXG5leHBvcnQgY2xhc3MgU3VydmV5V2luZG93IGV4dGVuZHMgU3VydmV5V2luZG93TW9kZWwge1xuICAgIGtvRXhwYW5kZWQ6IGFueTtcbiAgICBrb0V4cGFuZGVkQ3NzOiBhbnk7XG4gICAgZG9FeHBhbmQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoanNvbk9iaik7XG4gICAgICAgIHRoaXMua29FeHBhbmRlZCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvRXhwYW5kZWRDc3MgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0QnV0dG9uQ3NzKCkpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9FeHBhbmQgPSBmdW5jdGlvbiAoKSB7IHNlbGYuY2hhbmdlRXhwYW5kZWQoKTsgfVxuICAgICAgICB0aGlzLnN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4geyBzZWxmLm9uQ29tcGxldGUoKTsgc2VsZi5rb0V4cGFuZGVkQ3NzKHNlbGYuZ2V0QnV0dG9uQ3NzKCkpIH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3VydmV5KGpzb25PYmo6IGFueSk6IFN1cnZleU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXkoanNvbk9iailcbiAgICB9XG4gICAgcHJvdGVjdGVkIGV4cGFuZGNvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyLmV4cGFuZGNvbGxhcHNlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5rb0V4cGFuZGVkKHRoaXMuaXNFeHBhbmRlZFZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0ZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVZhbHVlID8gdGhpcy50ZW1wbGF0ZVZhbHVlIDogdGhpcy5nZXREZWZhdWx0VGVtcGxhdGUoKTsgfVxuICAgIHByb3RlY3RlZCBzZXQgdGVtcGxhdGUodmFsdWU6IHN0cmluZykgeyB0aGlzLnRlbXBsYXRlVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLndpbmRvd0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgICAga28uY2xlYW5Ob2RlKHRoaXMud2luZG93RWxlbWVudCk7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy53aW5kb3dFbGVtZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndpbmRvd0VsZW1lbnQpO1xuICAgICAgICAoPFN1cnZleT50aGlzLnN1cnZleSkucmVuZGVyKFN1cnZleVdpbmRvdy5zdXJ2ZXlFbGVtZW50TmFtZSk7XG4gICAgICAgIHRoaXMuaXNTaG93aW5nVmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBrb1RlbXBsYXRlLmh0bWwgfVxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMud2luZG93RWxlbWVudCk7XG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLmlzU2hvd2luZ1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3NzKCk6IGFueSB7IHJldHVybiB0aGlzLnN1cnZleVtcImNzc1wiXTsgfVxuICAgIHByaXZhdGUgY2hhbmdlRXhwYW5kZWQoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kY29sbGFwc2UoIXRoaXMuaXNFeHBhbmRlZCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Db21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QnV0dG9uQ3NzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5rb0V4cGFuZGVkKCkgPyB0aGlzLmNzcy53aW5kb3cuaGVhZGVyLmJ1dHRvbkNvbGxhcHNlZCA6IHRoaXMuY3NzLndpbmRvdy5oZWFkZXIuYnV0dG9uRXhwYW5kZWQ7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rbm9ja291dC9rb1N1cnZleVdpbmRvdy50cyIsImV4cG9ydCB2YXIga29UZW1wbGF0ZSA9IHsgaHRtbCA6IFwiXCJ9OyBrb1RlbXBsYXRlLmh0bWwgPSAnPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAzcHg7IHJpZ2h0OiAxMHB4O1wiIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLndpbmRvdy5yb290XCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3Mud2luZG93LmhlYWRlci5yb290XCI+ICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYmluZD1cImNsaWNrOmRvRXhwYW5kXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+ICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBkYXRhLWJpbmQ9XCJ0ZXh0OnRpdGxlLCBjc3M6ICRyb290LmNzcy53aW5kb3cuaGVhZGVyLnRpdGxlXCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtYmluZD1cImNzczoga29FeHBhbmRlZENzc1wiPjwvc3Bhbj4gICAgICAgIDwvYT4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTprb0V4cGFuZGVkLCBjc3M6ICRyb290LmNzcy53aW5kb3cuYm9keVwiPiAgICAgICAgPGRpdiBpZD1cIndpbmRvd1N1cnZleUpTXCI+PC9kaXY+ICAgIDwvZGl2PjwvZGl2Pic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlLndpbmRvdy5rby5odG1sLnRzIiwiaW1wb3J0IHtrb1RlbXBsYXRlfSBmcm9tIFwiLi90ZW1wbGF0ZS5rby5odG1sXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZW1wbGF0ZVRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyByZXBsYWNlVGV4dChyZXBsYWNlVGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBxdWVzdGlvblR5cGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWQgPSB0aGlzLmdldElkKGlkLCBxdWVzdGlvblR5cGUpO1xuICAgICAgICB2YXIgcG9zID0gdGhpcy50ZXh0LmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAocG9zIDwgMCkgcmV0dXJuO1xuICAgICAgICBwb3MgPSB0aGlzLnRleHQuaW5kZXhPZignPicsIHBvcyk7XG4gICAgICAgIGlmIChwb3MgPCAwKSByZXR1cm47XG4gICAgICAgIHZhciBzdGFydFBvcyA9IHBvcyArIDE7XG4gICAgICAgIHZhciBlbmRTdHJpbmcgPSBcIjwvc2NyaXB0PlwiO1xuICAgICAgICBwb3MgPSB0aGlzLnRleHQuaW5kZXhPZihlbmRTdHJpbmcsIHN0YXJ0UG9zKTtcbiAgICAgICAgaWYgKHBvcyA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBzdGFydFBvcykgKyByZXBsYWNlVGV4dCArIHRoaXMudGV4dC5zdWJzdHIocG9zKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldElkKGlkOiBzdHJpbmcsIHF1ZXN0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnaWQ9XCJzdXJ2ZXktJyArIGlkO1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCItXCIgKyBxdWVzdGlvblR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdcIic7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4ga29UZW1wbGF0ZS5odG1sOyB9XG4gICAgcHJvdGVjdGVkIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHsga29UZW1wbGF0ZS5odG1sID0gdmFsdWU7IH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva25vY2tvdXQvdGVtcGxhdGVUZXh0LnRzIiwiaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vZGFuaXNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2R1dGNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2Zpbm5pc2gnO1xuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vZnJlbmNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2dlcm1hbic7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi9wb2xpc2gnO1xuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vcnVzc2lhbic7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi90dXJraXNoJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9jaHVua3MvbG9jYWxpemF0aW9uLnRzIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgZGFuaXNoU3VydmV5U3RyaW5ncyA9IHtcbiAgICBwYWdlUHJldlRleHQ6IFwiVGlsYmFnZVwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJWaWRlcmVcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiRsOmcmRpZ1wiLFxuICAgIHByb2dyZXNzVGV4dDogXCJTaWRlIHswfSBhZiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJEZXIgZXIgaW5nZW4gc3lubGlnZSBzcMO4cmdzbcOlbC5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1hbmdlIHRhayBmb3IgZGluIGJlc3ZhcmVsc2UhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCJTcMO4cmdlc2tlbWFldCBoZW50ZXMgZnJhIHNlcnZlcmVuLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJWYWxnZnJpdCBzdmFyLi4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiVsOmbGcuLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkJlc3ZhciB2ZW5saWdzdCBzcMO4cmdzbcOlbGV0LlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJBbmdpdiBldCB0YWwuXCIsXG4gICAgdGV4dE1pbkxlbmd0aDogXCJBbmdpdiBtaW5kc3QgezB9IHRlZ24uXCIsXG4gICAgbWluU2VsZWN0RXJyb3I6IFwiVsOmbGcgdmVubGlnc3QgbWluZHN0ICB7MH0gc3Zhcm11bGlnaGVkKGVyKS5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJWw6ZsZyB2ZW5saWdzdCBmw6ZycmUgezB9IHN2YXJtdWxpZ2hlZGVyKGVyKS5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHNrYWwgdsOmcmUgbGlnIG1lZCBlbGxlciBzdMO4cnJlIGVuZCB7MX0gb2cgbGlnIG1lZCBlbGxlciBtaW5kcmUgZW5kIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIHN0w7hycmUgZW5kIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIG1pbmRyZSBlbmQgezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIkFuZ2l2IHZlbmxpZ3N0IGVuIGd5bGRpZyBlLW1haWwgYWRyZXNzZS5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkZpbHN0w7hycmVsc2VuIG3DpSBpa2tlIG92ZXJzdGlnZSB7MH0uXCIsXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkFuZ2l2IGVuIHbDpnJkaSBmb3IgZGl0IHZhbGdmcmllIHN2YXIuXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGFcIl0gPSBkYW5pc2hTdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9kYW5pc2gudHMiLCIvL0NyZWF0ZWQgb24gYmVoYWxmIGh0dHBzOi8vZ2l0aHViLmNvbS9GcmFuazEzXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBkdXRjaFN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlZvcmlnZVwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJWb2xnZW5kZVwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJBZnNsdWl0ZW5cIixcbiAgICBvdGhlckl0ZW1UZXh0OiBcIkFuZGVyZVwiLFxuICAgIHByb2dyZXNzVGV4dDogXCJQYWdpbmEgezB9IHZhbiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJFciBpcyBnZWVuIHppY2h0YmFyZSBwYWdpbmEgb2YgdnJhYWcgaW4gZGV6ZSB2cmFnZW5saWpzdFwiLFxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiQmVkYW5rdCBvbSBkZXplIHZyYWdlbmxpanN0IGluIHRlIHZ1bGxlblwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiRGUgdnJhZ2VubGlqc3QgaXMgYWFuIGhldCBsYWRlbi4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIktpZXMuLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkdlbGlldmUgZWVuIGFudHdvb3JkIGluIHRlIHZ1bGxlblwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJIZXQgYW50d29vcmQgbW9ldCBlZW4gZ2V0YWwgemlqblwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiR2VsaWV2ZSBtaW5zdGVuIHswfSBrYXJha3RlcnMgaW4gdGUgdnVsbGVuLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIkdlbGlldmUgbWluaW11bSB7MH0gYW50d29vcmRlbiB0ZSBzZWxlY3RlcmVuLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIkdlbGlldmUgbmlldCBtZWVyIGRhbiB7MH0gYW50d29vcmRlbiB0ZSBzZWxlY3RlcmVuLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiVXcgYW50d29vcmQgJ3swfScgbW9ldCBncm90ZXIgb2YgZ2VsaWprIHppam4gYWFuIHsxfSBlbiBrbGVpbmVyIG9mIGdlbGlqayBhYW4gezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJVdyBhbnR3b29yZCAnezB9JyBtb2V0IGdyb3RlciBvZiBnZWxpamsgemlqbiBhYW4gezF9XCIsXG4gICAgbnVtZXJpY01heDogXCJVdyBhbnR3b29yZCAnezB9JyBtb2V0IGdyb3RlciBvZiBnZWxpamsgemlqbiBhYW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIkdlbGlldmUgZWVuIGdlbGRpZyBlLW1haWxhZHJlcyBpbiB0ZSB2dWxsZW4uXCIsXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJEZSBncm9vdHRlIHZhbiBoZXQgYmVzdGFuZCBtYWcgbmlldCBncm90ZXIgemlqbiBkYW4gezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJHZWxpZXZlIGhldCB2ZWxkICdBbmRlcmUnIGluIHRlIHZ1bGxlblwiXG59O1xuXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcIm5sXCJdID0gZHV0Y2hTdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50cyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZpbm5pc2hTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJFZGVsbGluZW5cIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiU2V1cmFhdmFcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiVmFsbWlzXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJNdXUgKGt1dmFpbGUpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlNpdnUgezB9L3sxfVwiLFxuICAgIGVtcHR5U3VydmV5OiBcIlTDpHNzw6Qga3lzZWx5c3PDpCBlaSBvbGUgeWh0w6Rrw6TDpG4gbsOka3l2aWxsw6Qgb2xldmFhIHNpdnVhIHRhaSBreXN5bXlzdMOkLlwiLFxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiS2lpdG9zIGt5c2VseXluIHZhc3RhYW1pc2VzdGEhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCJLeXNlbHnDpCBsYWRhdGFhbiBwYWx2ZWxpbWVsdGEuLi5cIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJWYWxpdHNlLi4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCJWYXN0YWEga3lzeW15a3NlZW4sIGtpaXRvcy5cIixcbiAgICBudW1lcmljRXJyb3I6IFwiQXJ2b24gdHVsZWUgb2xsYSBudW1lZXJpbmVuLlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgdsOkaGludMOkw6RuIHswfSBtZXJra2nDpC5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJPbGUgaHl2w6QgamEgdmFsaXRzZSB2w6RoaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIk9sZSBoeXbDpCBqYSB2YWxpdHNlIGVuaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfSBqYSB2w6RoZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIHbDpGhlbW3DpG4gdGFpIHlodMOkIHN1dXJpIGt1aW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIlN5w7Z0w6QgdmFsaWRpIHPDpGhrw7Zwb3N0aW9zb2l0ZS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgXFxcIk11dSAoa3V2YWlsZSlcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmlcIl0gPSBmaW5uaXNoU3VydmV5U3RyaW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vZmlubmlzaC50cyIsIi8vQ3JlYXRlZCBvbiBiZWhhbGYgaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5rMTNcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZyZW5jaFN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlByXFx1MDBlOWNcXHUwMGU5ZGVudFwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJTdWl2YW50XCIsXG4gICAgY29tcGxldGVUZXh0OiBcIlRlcm1pbmVyXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJBdXRyZSAocHJcXHUwMGU5Y2lzZXIpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlBhZ2UgezB9IHN1ciB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJJbCBuJ3kgYSBuaSBwYWdlIHZpc2libGUgbmkgcXVlc3Rpb24gdmlzaWJsZSBkYW5zIGNlIHF1ZXN0aW9ubmFpcmVcIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1lcmNpIGQnYXZvaXIgclxcdTAwZTlwb25kdSBhdSBxdWVzdGlvbm5haXJlIVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiTGUgcXVlc3Rpb25uYWlyZSBlc3QgZW4gY291cnMgZGUgY2hhcmdlbWVudC4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIkNob2lzaXNzZXouLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgXFx1MDBlMCBjZXR0ZSBxdWVzdGlvbiBlc3Qgb2JsaWdhdG9pcmUuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgZG9pdCBcXHUwMGVhdHJlIHVuIG5vbWJyZS5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIk1lcmNpIGQnZW50cmVyIGF1IG1vaW5zIHswfSBzeW1ib2xlcy5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJNZXJjaSBkZSBzXFx1MDBlOWxlY3Rpb25uZXIgYXUgbW9pbnMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiTWVyY2kgZGUgc1xcdTAwZTlsZWN0aW9ubmVyIGF1IHBsdXMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX0gZXQgaW5mXFx1MDBlOXJpZXVyZSBvdVxcdTAwZTlnYWxlIFxcdTAwZTAgezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIlZvdHJlIHJcXHUwMGU5cG9uc2UgJ3swfScgZG9pdCBcXHUwMGVhdHJlaW5mXFx1MDBlOXJpZXVyZSBvdSBcXHUwMGU5Z2FsZSBcXHUwMGUwIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJNZXJjaSBkJ2VudHJlciB1bmUgYWRyZXNzZSBtYWlsIHZhbGlkZS5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkxhIHRhaWxsZSBkdSBmaWNoaWVyIG5lIGRvaXQgcGFzIGV4Y1xcdTAwZTlkZXIgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJNZXJjaSBkZSBwclxcdTAwZTljaXNlciBsZSBjaGFtcCAnQXV0cmUnLlwiXG59O1xuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN1cnZleVN0cmluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBnZXJtYW5TdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJadXLDvGNrXCIsXG4gICAgcGFnZU5leHRUZXh0OiBcIldlaXRlclwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJGZXJ0aWdcIixcbiAgICBwcm9ncmVzc1RleHQ6IFwiU2VpdGUgezB9IHZvbiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJFcyBnaWJ0IGtlaW5lIHNpY2h0YmFyZSBGcmFnZS5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIlZpZWxlbiBEYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW4gZGVzIEZyYWdlYm9nZW5zIVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiRGVyIEZyYWdlYm9nZW4gd2lyZCB2b20gU2VydmVyIGdlbGFkZW4uLi5cIixcbiAgICBvdGhlckl0ZW1UZXh0OiBcIkJlbnV0emVyZGVmaW5pZXJ0ZSBBbnR3b3J0Li4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV8OkaGxlbi4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwiQml0dGUgYW50d29ydGVuIFNpZSBhdWYgZGllIEZyYWdlLlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJEZXIgV2VydCBzb2xsdGUgZWluZSBaYWhsIHNlaW4uXCIsXG4gICAgdGV4dE1pbkxlbmd0aDogXCJCaXR0ZSBnZWJlbiBTaWUgbWluZGVzdGVucyB7MH0gU3ltYm9sZS5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJCaXR0ZSB3w6RobGVuIFNpZSBtaW5kZXN0ZW5zIHswfSBWYXJpYW50ZW4uXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiQml0dGUgd8OkaGxlbiBTaWUgbmljaHQgbWVociBhbHMgezB9IFZhcmlhbnRlbi5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGdyw7bDn2VyIHNlaW4gYWxzIHsxfSB1bmQgZ2xlaWNoIG9kZXIga2xlaW5lciBhbHMgezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCInezB9JyBzb2x0ZSBnbGVpY2ggb2RlciBncsO2w59lciBzZWluIGFscyB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGtsZWluZXIgYWxzIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBFbWFpbC1BZHJlc3NlIGVpbi5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkRpZSBEYXRlaWdyw7bDn2Ugc29sbCBuaWNodCBtZWhyIGFscyB7MH0uXCIsXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkJpdHRlIGdlYmVuIFNpZSBlaW5lbiBXZXJ0IGbDvHIgSWhyZSBiZW51dHplcmRlZmluaWVydGUgQW50d29ydCBlaW4uXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGVcIl0gPSBnZXJtYW5TdXJ2ZXlTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciBwb2xpc2hTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJXc3RlY3pcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiRGFsZWpcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiR290b3dlXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlN0cm9uYSB7MH0geiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJOaWUgbWEgd2lkb2N6bnljaCBweXRhxYQuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCJEemnEmWt1amVteSB6YSB3eXBlxYJuaWVuaWUgYW5raWV0eSFcIixcbiAgICBsb2FkaW5nU3VydmV5OiBcIlRyd2Egd2N6eXR5d2FuaWUgYW5raWV0eS4uLlwiLFxuICAgIG90aGVySXRlbVRleHQ6IFwiSW5uYSBvZHBvd2llZMW6Li4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV3liaWVyei4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwiUHJvc3rEmSBvZHBvd2llZHppZcSHIG5hIHRvIHB5dGFuaWUuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcIlcgdHltIHBvbHUgbW/FvG5hIHdwaXNhxIcgdHlsa28gbGljemJ5LlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiUHJvc3rEmSB3cGlzYcSHIGNvIG5ham1uaWVqIHswfSB6bmFrw7N3LlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIlByb3N6xJkgd3licmHEhyBjbyBuYWptbmllaiB7MH0gcG96eWNqaS5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJQcm9zesSZIHd5YnJhxIcgbmllIHdpxJljZWogbmnFvCB7MH0gcG96eWNqaS5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIk9kcG93aWVkxbogJ3swfScgcG93aW5uYSBiecSHIHdpxJlrc3phIGx1YiByw7N3bmEgezF9IG9yYXogbW5pZWpzemEgbHViIHLDs3duYSB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIk9kcG93aWVkxbogJ3swfScgcG93aW5uYSBiecSHIHdpxJlrc3phIGx1YiByw7N3bmEgezF9XCIsXG4gICAgbnVtZXJpY01heDogXCJPZHBvd2llZMW6ICd7MH0nIHBvd2lubmEgYnnEhyBtbmllanN6YSBsdWIgcsOzd25hIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJQcm9zesSZIHBvZGHEhyBwcmF3aWTFgm93eSBhZHJlcyBlbWFpbC5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIlJvem1pYXIgcHJ6ZXPFgmFuZWdvIHBsaWt1IG5pZSBtb8W8ZSBwcnpla3JhY3phxIcgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJQcm9zesSZIHBvZGHEhyBpbm7EhSBvZHBvd2llZMW6LlwiXG59O1xuXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcInBsXCJdID0gcG9saXNoU3VydmV5U3RyaW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vcG9saXNoLnRzIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgcnVzc2lhblN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcItCd0LDQt9Cw0LRcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwi0JTQsNC70LXQtVwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCLQk9C+0YLQvtCy0L5cIixcbiAgICBwcm9ncmVzc1RleHQ6IFwi0KHRgtGA0LDQvdC40YbQsCB7MH0g0LjQtyB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCLQndC10YIg0L3QuCDQvtC00L3QvtCz0L4g0LLQvtC/0YDQvtGB0LAuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCLQkdC70LDQs9C+0LTQsNGA0LjQvCDQktCw0YEg0LfQsCDQt9Cw0L/QvtC70L3QtdC90LjQtSDQsNC90LrQtdGC0YshXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCLQl9Cw0LPRgNGD0LfQutCwINGBINGB0LXRgNCy0LXRgNCwLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCLQlNGA0YPQs9C+0LUgKNC/0L7QttCw0LvRg9C50YHRgtCwLCDQvtC/0LjRiNC40YLQtSlcIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCLQktGL0LHRgNCw0YLRjC4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINC+0YLQstC10YLRjNGC0LUg0L3QsCDQstC+0L/RgNC+0YEuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcItCe0YLQstC10YIg0LTQvtC70LbQtdC9INCx0YvRgtGMINGH0LjRgdC70L7QvC5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRhdC+0YLRjyDQsdGLIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstGL0LHQtdGA0LjRgtC1INGF0L7RgtGPINCx0YsgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLRi9Cx0LXRgNC40YLQtSDQvdC1INCx0L7Qu9C10LUgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfSwg0Lgg0YDQsNCy0L3Ri9C8INC40LvQuCDQvNC10L3RjNGI0LUsINGH0LXQvCB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScg0LTQvtC70LbQvdC+INCx0YvRgtGMINGA0LDQstC90YvQvCDQuNC70Lgg0LzQtdC90YzRiNC1LCDRh9C10LwgezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LTQsNC90L3Ri9C1INCyINC/0L7Qu9C1IFxcXCLQlNGA0YPQs9C+0LVcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wicnVcIl0gPSBydXNzaWFuU3VydmV5U3RyaW5ncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IHZhciB0dXJraXNoU3VydmV5U3RyaW5ncyA9IHtcbiAgICAgICAgcGFnZVByZXZUZXh0OiBcIkdlcmlcIixcbiAgICAgICAgcGFnZU5leHRUZXh0OiBcIsSwbGVyaVwiLFxuICAgICAgICBjb21wbGV0ZVRleHQ6IFwiQW5rZXRpIFRhbWFtbGFcIixcbiAgICAgICAgb3RoZXJJdGVtVGV4dDogXCJEacSfZXIgKGHDp8Sxa2xhecSxbsSxeilcIixcbiAgICAgICAgcHJvZ3Jlc3NUZXh0OiBcIlNheWZhIHswfSAvIHsxfVwiLFxuICAgICAgICBlbXB0eVN1cnZleTogXCJBbmtldHRlIGfDtnLDvG50w7xsZW5lY2VrIHNheWZhIHlhIGRhIHNvcnUgbWV2Y3V0IGRlxJ9pbC5cIixcbiAgICAgICAgY29tcGxldGluZ1N1cnZleTogXCJBbmtldGltaXppIHRhbWFtbGFkxLHEn8SxbsSxeiBpw6dpbiB0ZcWfZWtrw7xyIGVkZXJpei5cIixcbiAgICAgICAgbG9hZGluZ1N1cnZleTogXCJBbmtldCBzdW51Y3VkYW4gecO8a2xlbml5b3IgLi4uXCIsXG4gICAgICAgIG9wdGlvbnNDYXB0aW9uOiBcIlNlw6dpbml6IC4uLlwiLFxuICAgICAgICByZXF1aXJlZEVycm9yOiBcIkzDvHRmZW4gc29ydXlhIGNldmFwIHZlcmluaXpcIixcbiAgICAgICAgbnVtZXJpY0Vycm9yOiBcIkdpcmlsZW4gZGXEn2VyIG51bWVyaWsgb2xtYWzEsWTEsXJcIixcbiAgICAgICAgdGV4dE1pbkxlbmd0aDogXCJFbiBheiB7MH0gc2VtYm9sIGdpcmluaXouXCIsXG4gICAgICAgIG1pblJvd0NvdW50RXJyb3I6IFwiTMO8dGZlbiBlbiBheiB7MH0gc2F0xLFyxLEgZG9sZHVydW4uXCIsXG4gICAgICAgIG1pblNlbGVjdEVycm9yOiBcIkzDvHRmZW4gZW4gYXogezB9IHNlw6dlbmXEn2kgc2XDp2luaXouXCIsXG4gICAgICAgIG1heFNlbGVjdEVycm9yOiBcIkzDvHRmZW4gezB9IGFkZXR0ZW4gZmF6bGEgc2XDp21leWluaXouXCIsXG4gICAgICAgIG51bWVyaWNNaW5NYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBtb3JlIHRoYW4gezF9IGFuZCBlcXVhbCBvciBsZXNzIHRoYW4gezJ9XCIsXG4gICAgICAgIG51bWVyaWNNaW46IFwiJ3swfScgZGXEn2VyaSB7MX0gZGXEn2VyaW5lIGXFn2l0IHZleWEgYsO8ecO8ayBvbG1hbMSxZMSxclwiLFxuICAgICAgICBudW1lcmljTWF4OiBcIid7MH0nIGRlxJ9lcmkgezF9IGRlxJ9lcmluZSBlxZ9pdCB5YSBkYSBrw7zDp8O8ayBvbG1hbMSxZMSxci5cIixcbiAgICAgICAgaW52YWxpZEVtYWlsOiBcIkzDvHRmZW4gZ2XDp2VybGkgYmlyIGVwb3N0YSBhZHJlc2kgZ2lyaW5pei5cIixcbiAgICAgICAgdXJsUmVxdWVzdEVycm9yOiBcIlRhbGViaSDFn3UgaGF0YXnEsSBkw7ZuZMO8ICd7MH0nLiB7MX1cIixcbiAgICAgICAgdXJsR2V0Q2hvaWNlc0Vycm9yOiBcIlRhbGVwIGhlcmhhbmdpIGJpciB2ZXJpIGTDtm5tZWRpIHlhIGRhICdwYXRoJyDDtnplbGxpxJ9pIGhhdGFsxLEuXCIsXG4gICAgICAgIGV4Y2VlZE1heFNpemU6IFwiRG9zeWEgYm95dXR1IHswfSBkZcSfZXJpbmkgZ2XDp2VtZXouXCIsXG4gICAgICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJMw7x0ZmVuIGRpxJ9lciBkZcSfZXJsZXJpIGdpcmluaXouXCIsXG4gICAgICAgIHVwbG9hZGluZ0ZpbGU6IFwiRG9zeWFuxLF6IHnDvGtsZW5peW9yLiBMw5x0ZmVuIGJpcmthw6cgc2FuaXllIGJla2xleWluIHZlIHRla3JhciBkZW5leWluLlwiLFxuICAgICAgICBhZGRSb3c6IFwiU2F0xLFyIEVrbGVcIixcbiAgICAgICAgcmVtb3ZlUm93OiBcIkthbGTEsXJcIlxufTtcblxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJ0clwiXSA9IHR1cmtpc2hTdXJ2ZXlTdHJpbmdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2NhbGl6YXRpb24vdHVya2lzaC50cyIsImltcG9ydCAnLi4vLi4vZGVmYXVsdENzcy9jc3Nib290c3RyYXAnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzIiwiaW1wb3J0IHtzdXJ2ZXlDc3N9IGZyb20gXCIuL2Nzc3N0YW5kYXJkXCI7XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEJvb3RzdHJhcENzcyA9IHtcbiAgICByb290OiBcIlwiLFxuICAgIGhlYWRlcjogXCJwYW5lbC1oZWFkaW5nXCIsXG4gICAgYm9keTogXCJwYW5lbC1ib2R5XCIsXG4gICAgZm9vdGVyOiBcInBhbmVsLWZvb3RlclwiLFxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiXCIsIHByZXY6IFwiXCIsIG5leHQ6IFwiXCIgfSxcbiAgICBwcm9ncmVzczogXCJwcm9ncmVzcyBjZW50ZXItYmxvY2tcIiwgcHJvZ3Jlc3NCYXI6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgcGFnZVRpdGxlOiBcIlwiLFxuICAgIHJvdzogXCJcIixcbiAgICBxdWVzdGlvbjogeyByb290OiBcIlwiLCB0aXRsZTogXCJcIiwgY29tbWVudDogXCJmb3JtLWNvbnRyb2xcIiwgaW5kZW50OiAyMCB9LFxuICAgIGVycm9yOiB7IHJvb3Q6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGljb246IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXCIsIGl0ZW06IFwiXCIgfSxcblxuICAgIGNoZWNrYm94OiB7IHJvb3Q6IFwiZm9ybS1pbmxpbmVcIiwgaXRlbTogXCJjaGVja2JveFwiLCBvdGhlcjogXCJcIiB9LFxuICAgIGNvbW1lbnQ6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgZHJvcGRvd246IFwiZm9ybS1jb250cm9sXCIsXG4gICAgbWF0cml4OiB7IHJvb3Q6IFwidGFibGVcIiB9LFxuICAgIG1hdHJpeGRyb3Bkb3duOiB7IHJvb3Q6IFwidGFibGVcIiB9LFxuICAgIG1hdHJpeGR5bmFtaWM6IHsgcm9vdDogXCJ0YWJsZVwiLCBidXR0b246IFwiYnV0dG9uXCIgfSxcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJ0YWJsZVwiLCBpdGVtVGl0bGU6IFwiXCIsIGl0ZW1WYWx1ZTogXCJmb3JtLWNvbnRyb2xcIiB9LFxuICAgIHJhZGlvZ3JvdXA6IHsgcm9vdDogXCJmb3JtLWlubGluZVwiLCBpdGVtOiBcInJhZGlvXCIsIG90aGVyOiBcIlwiIH0sXG4gICAgcmF0aW5nOiB7IHJvb3Q6IFwiYnRuLWdyb3VwXCIsIGl0ZW06IFwiYnRuIGJ0bi1kZWZhdWx0XCIgfSxcbiAgICB0ZXh0OiBcImZvcm0tY29udHJvbFwiLFxuICAgIHdpbmRvdzoge1xuICAgICAgICByb290OiBcIm1vZGFsLWNvbnRlbnRcIiwgYm9keTogXCJtb2RhbC1ib2R5XCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgcm9vdDogXCJtb2RhbC1oZWFkZXIgcGFuZWwtdGl0bGVcIiwgdGl0bGU6IFwicHVsbC1sZWZ0XCIsIGJ1dHRvbjogXCJnbHlwaGljb24gcHVsbC1yaWdodFwiLFxuICAgICAgICAgICAgYnV0dG9uRXhwYW5kZWQ6IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXBcIiwgYnV0dG9uQ29sbGFwc2VkOiBcImdseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIlxuICAgICAgICB9XG4gICAgfVxufTtcbnN1cnZleUNzc1tcImJvb3RzdHJhcFwiXSA9IGRlZmF1bHRCb290c3RyYXBDc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmF1bHRDc3MvY3NzYm9vdHN0cmFwLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==