/*!
* surveyjs Editor v0.10.0
* (c) Andrew Telnov - http://surveyjs.org/builder/
* Github - https://github.com/andrewtelnov/survey.js.editor
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-knockout"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["survey-knockout"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("survey-knockout"));
	else
		root["SurveyEditor"] = factory(root["Survey"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	var _dragdrophelper = __webpack_require__(1);
	
	Object.defineProperty(exports, "DragDropHelper", {
	  enumerable: true,
	  get: function get() {
	    return _dragdrophelper.DragDropHelper;
	  }
	});
	
	var _propertyEditorBase = __webpack_require__(3);
	
	Object.defineProperty(exports, "SurveyPropertyEditorBase", {
	  enumerable: true,
	  get: function get() {
	    return _propertyEditorBase.SurveyPropertyEditorBase;
	  }
	});
	Object.defineProperty(exports, "SurveyStringPropertyEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyEditorBase.SurveyStringPropertyEditor;
	  }
	});
	Object.defineProperty(exports, "SurveyDropdownPropertyEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyEditorBase.SurveyDropdownPropertyEditor;
	  }
	});
	Object.defineProperty(exports, "SurveyBooleanPropertyEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyEditorBase.SurveyBooleanPropertyEditor;
	  }
	});
	Object.defineProperty(exports, "SurveyNumberPropertyEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyEditorBase.SurveyNumberPropertyEditor;
	  }
	});
	
	var _propertyTextItemsEditor = __webpack_require__(4);
	
	Object.defineProperty(exports, "SurveyPropertyTextItemsEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyTextItemsEditor.SurveyPropertyTextItemsEditor;
	  }
	});
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	Object.defineProperty(exports, "SurveyPropertyItemsEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyItemsEditor.SurveyPropertyItemsEditor;
	  }
	});
	
	var _propertyItemValuesEditor = __webpack_require__(12);
	
	Object.defineProperty(exports, "SurveyPropertyItemValuesEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyItemValuesEditor.SurveyPropertyItemValuesEditor;
	  }
	});
	
	var _propertyMatrixDropdownColumnsEditor = __webpack_require__(13);
	
	Object.defineProperty(exports, "SurveyPropertyDropdownColumnsEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyMatrixDropdownColumnsEditor.SurveyPropertyDropdownColumnsEditor;
	  }
	});
	Object.defineProperty(exports, "SurveyPropertyMatrixDropdownColumnsItem", {
	  enumerable: true,
	  get: function get() {
	    return _propertyMatrixDropdownColumnsEditor.SurveyPropertyMatrixDropdownColumnsItem;
	  }
	});
	
	var _propertyModalEditor = __webpack_require__(6);
	
	Object.defineProperty(exports, "SurveyPropertyModalEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyModalEditor.SurveyPropertyModalEditor;
	  }
	});
	
	var _propertyRestfullEditor = __webpack_require__(14);
	
	Object.defineProperty(exports, "SurveyPropertyResultfullEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyRestfullEditor.SurveyPropertyResultfullEditor;
	  }
	});
	
	var _propertyTriggersEditor = __webpack_require__(15);
	
	Object.defineProperty(exports, "SurveyPropertyTriggersEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyTriggersEditor.SurveyPropertyTriggersEditor;
	  }
	});
	
	var _propertyValidatorsEditor = __webpack_require__(9);
	
	Object.defineProperty(exports, "SurveyPropertyValidatorsEditor", {
	  enumerable: true,
	  get: function get() {
	    return _propertyValidatorsEditor.SurveyPropertyValidatorsEditor;
	  }
	});
	
	var _objectProperty = __webpack_require__(11);
	
	Object.defineProperty(exports, "SurveyObjectProperty", {
	  enumerable: true,
	  get: function get() {
	    return _objectProperty.SurveyObjectProperty;
	  }
	});
	
	var _objectEditor = __webpack_require__(10);
	
	Object.defineProperty(exports, "SurveyObjectEditor", {
	  enumerable: true,
	  get: function get() {
	    return _objectEditor.SurveyObjectEditor;
	  }
	});
	
	var _pagesEditor = __webpack_require__(16);
	
	Object.defineProperty(exports, "SurveyPagesEditor", {
	  enumerable: true,
	  get: function get() {
	    return _pagesEditor.SurveyPagesEditor;
	  }
	});
	
	var _textWorker = __webpack_require__(17);
	
	Object.defineProperty(exports, "SurveyTextWorker", {
	  enumerable: true,
	  get: function get() {
	    return _textWorker.SurveyTextWorker;
	  }
	});
	
	var _surveyHelper = __webpack_require__(8);
	
	Object.defineProperty(exports, "ObjType", {
	  enumerable: true,
	  get: function get() {
	    return _surveyHelper.ObjType;
	  }
	});
	Object.defineProperty(exports, "SurveyHelper", {
	  enumerable: true,
	  get: function get() {
	    return _surveyHelper.SurveyHelper;
	  }
	});
	
	var _surveyEmbedingWindow = __webpack_require__(19);
	
	Object.defineProperty(exports, "SurveyEmbedingWindow", {
	  enumerable: true,
	  get: function get() {
	    return _surveyEmbedingWindow.SurveyEmbedingWindow;
	  }
	});
	
	var _objectVerbs = __webpack_require__(20);
	
	Object.defineProperty(exports, "SurveyVerbs", {
	  enumerable: true,
	  get: function get() {
	    return _objectVerbs.SurveyVerbs;
	  }
	});
	Object.defineProperty(exports, "SurveyVerbItem", {
	  enumerable: true,
	  get: function get() {
	    return _objectVerbs.SurveyVerbItem;
	  }
	});
	Object.defineProperty(exports, "SurveyVerbChangeTypeItem", {
	  enumerable: true,
	  get: function get() {
	    return _objectVerbs.SurveyVerbChangeTypeItem;
	  }
	});
	Object.defineProperty(exports, "SurveyVerbChangePageItem", {
	  enumerable: true,
	  get: function get() {
	    return _objectVerbs.SurveyVerbChangePageItem;
	  }
	});
	
	var _undoredo = __webpack_require__(21);
	
	Object.defineProperty(exports, "SurveyUndoRedo", {
	  enumerable: true,
	  get: function get() {
	    return _undoredo.SurveyUndoRedo;
	  }
	});
	Object.defineProperty(exports, "UndoRedoItem", {
	  enumerable: true,
	  get: function get() {
	    return _undoredo.UndoRedoItem;
	  }
	});
	
	var _editor = __webpack_require__(22);
	
	Object.defineProperty(exports, "SurveyEditor", {
	  enumerable: true,
	  get: function get() {
	    return _editor.SurveyEditor;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.DragDropHelper = undefined;
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var DragDropHelper = exports.DragDropHelper = function () {
	    function DragDropHelper(data, onModifiedCallback, scrollableElName) {
	        if (scrollableElName === void 0) {
	            scrollableElName = null;
	        }
	        this.data = data;
	        this.scrollableElement = null;
	        this.sourceIndex = -1;
	        this.isScrollStop = true;
	        this.onModifiedCallback = onModifiedCallback;
	        this.scrollableElement = document.getElementById(scrollableElName ? scrollableElName : "scrollableDiv");
	    }
	    Object.defineProperty(DragDropHelper.prototype, "survey", {
	        get: function get() {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DragDropHelper.prototype.startDragNewQuestion = function (event, questionType, questionName) {
	        this.prepareData(event, questionType, questionName);
	    };
	    DragDropHelper.prototype.startDragQuestion = function (event, questionName) {
	        this.prepareData(event, null, questionName);
	    };
	    DragDropHelper.prototype.startDragCopiedQuestion = function (event, questionName, questionJson) {
	        this.prepareData(event, null, questionName, questionJson);
	    };
	    DragDropHelper.prototype.isSurveyDragging = function (event) {
	        if (!event) return false;
	        var data = this.getData(event).text;
	        return data && data.indexOf(DragDropHelper.dataStart) == 0;
	    };
	    DragDropHelper.prototype.doDragDropOver = function (event, question) {
	        event = this.getEvent(event);
	        this.checkScrollY(event);
	        var targetQuestion = DragDropHelper.dragData.targetQuestion;
	        if (!question || question == targetQuestion || !this.isSurveyDragging(event) || this.isSamePlace(event, question)) return;
	        var index = this.getQuestionIndex(event, question);
	        if (this.sourceIndex > -1) {
	            if (this.sourceIndex == index || this.sourceIndex + 1 == index) index = -1;
	        }
	        this.survey.currentPage["koDragging"](index);
	    };
	    DragDropHelper.prototype.end = function () {
	        this.isScrollStop = true;
	        this.setIsDraggingSource(this.survey["koDraggingSource"](), false);
	        this.survey["koDraggingSource"](null);
	        this.survey.currentPage["koDragging"](-1);
	        this.sourceIndex = -1;
	        this.clearData();
	    };
	    DragDropHelper.prototype.doDrop = function (event, question) {
	        if (question === void 0) {
	            question = null;
	        }
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        if (this.isSurveyDragging(event)) {
	            var index = this.survey.currentPage["koDragging"]();
	            var targetQuestion = DragDropHelper.dragData.targetQuestion;
	            if (targetQuestion && index > -1) {
	                var oldIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
	                if (oldIndex > -1 && oldIndex < index) {
	                    index--;
	                }
	                this.moveQuestionTo(targetQuestion, index);
	            }
	        }
	        this.end();
	    };
	    DragDropHelper.prototype.doLeavePage = function (event) {
	        event = this.getEvent(event);
	        if (!this.scrollableElement) return;
	        if (event.clientX <= 0 || event.clientY <= 0 || event.clientX >= this.scrollableElement.offsetWidth || event.clientY >= this.scrollableElement.offsetHeight) {
	            this.survey.currentPage["koDragging"](-1);
	        }
	    };
	    DragDropHelper.prototype.createTargetQuestion = function (questionType, questionName, json) {
	        if (!questionName) return null;
	        var targetQuestion = this.survey.getQuestionByName(questionName);
	        this.sourceIndex = -1;
	        if (targetQuestion) {
	            this.sourceIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
	        }
	        if (!targetQuestion) {
	            if (json) {
	                targetQuestion = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
	                new Survey.JsonObject().toObject(json, targetQuestion);
	                targetQuestion.name = questionName;
	            }
	            if (!targetQuestion && questionType) {
	                targetQuestion = Survey.QuestionFactory.Instance.createQuestion(questionType, questionName);
	            }
	            targetQuestion.setData(this.survey);
	            targetQuestion.renderWidth = "100%";
	        }
	        this.setIsDraggingSource(targetQuestion, true);
	        return targetQuestion;
	    };
	    DragDropHelper.prototype.setIsDraggingSource = function (question, val) {
	        if (question && question["koIsDraggingSource"]) question["koIsDraggingSource"](val);
	    };
	    DragDropHelper.prototype.getQuestionIndex = function (event, question) {
	        var page = this.survey.currentPage;
	        if (!question) return page.questions.length;
	        var index = page.questions.indexOf(question);
	        event = this.getEvent(event);
	        var height = event.currentTarget["clientHeight"];
	        var y = event.offsetY;
	        if (event.hasOwnProperty('layerX')) {
	            y = event.layerY - event.currentTarget["offsetTop"];
	        }
	        if (y > height / 2) index++;
	        return index;
	    };
	    DragDropHelper.prototype.isSamePlace = function (event, question) {
	        var prev = DragDropHelper.prevEvent;
	        if (prev.question != question || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
	            prev.question = question;
	            prev.x = event.clientX;
	            prev.y = event.clientY;
	            return false;
	        }
	        return true;
	    };
	    DragDropHelper.prototype.checkScrollY = function (e) {
	        if (!this.scrollableElement) return;
	        var y = this.getScrollableElementPosY(e);
	        if (y < 0) return;
	        this.isScrollStop = true;
	        var height = this.scrollableElement["clientHeight"];
	        if (y < DragDropHelper.ScrollOffset && y >= 0) {
	            this.isScrollStop = false;
	            this.doScrollY(-1);
	        }
	        if (height - y < DragDropHelper.ScrollOffset && height >= y) {
	            this.isScrollStop = false;
	            this.doScrollY(1);
	        }
	    };
	    DragDropHelper.prototype.doScrollY = function (step) {
	        var el = this.scrollableElement;
	        var scrollY = el.scrollTop + step;
	        if (scrollY < 0) {
	            this.isScrollStop = true;
	            return;
	        }
	        el.scrollTop = scrollY;
	        var self = this;
	        if (!this.isScrollStop) {
	            setTimeout(function () {
	                self.doScrollY(step);
	            }, DragDropHelper.ScrollDelay);
	        }
	    };
	    DragDropHelper.prototype.getScrollableElementPosY = function (e) {
	        if (!this.scrollableElement || !e.currentTarget) return -1;
	        return e.offsetY + e.currentTarget["offsetTop"] - this.scrollableElement.offsetTop - this.scrollableElement.scrollTop;
	    };
	    DragDropHelper.prototype.getEvent = function (event) {
	        return event["originalEvent"] ? event["originalEvent"] : event;
	    };
	    DragDropHelper.prototype.moveQuestionTo = function (targetQuestion, index) {
	        if (targetQuestion == null) return;
	        var page = this.survey.getPageByQuestion(targetQuestion);
	        if (page == this.survey.currentPage && index == page.questions.indexOf(targetQuestion)) return;
	        if (page) {
	            page.removeQuestion(targetQuestion);
	        }
	        this.survey.currentPage.addQuestion(targetQuestion, index);
	        if (this.onModifiedCallback) this.onModifiedCallback();
	    };
	    DragDropHelper.prototype.getDataInfo = function (event) {
	        var data = this.getData(event);
	        if (!data) return null;
	        var text = data.text.substr(DragDropHelper.dataStart.length);
	        var array = text.split(',');
	        var result = { json: null };
	        for (var i = 0; i < array.length; i++) {
	            var item = array[i].split(':');
	            result[item[0]] = item[1];
	        }
	        result.json = data.json;
	        return result;
	    };
	    DragDropHelper.prototype.getY = function (element) {
	        var result = 0;
	        while (element) {
	            result += element.offsetTop - element.scrollTop + element.clientTop;
	            element = element.offsetParent;
	        }
	        return result;
	    };
	    DragDropHelper.prototype.prepareData = function (event, questionType, questionName, json) {
	        if (json === void 0) {
	            json = null;
	        }
	        var str = DragDropHelper.dataStart;
	        if (questionType) str += "questiontype:" + questionType + ',';
	        str += "questionname:" + questionName;
	        this.setData(event, str, json);
	        var targetQuestion = this.createTargetQuestion(questionType, questionName, json);
	        DragDropHelper.dragData.targetQuestion = targetQuestion;
	        this.survey["koDraggingSource"](targetQuestion);
	    };
	    DragDropHelper.prototype.setData = function (event, text, json) {
	        if (json === void 0) {
	            json = null;
	        }
	        if (event["originalEvent"]) {
	            event = event["originalEvent"];
	        }
	        if (event.dataTransfer) {
	            event.dataTransfer.setData("Text", text);
	            event.dataTransfer.effectAllowed = "copy";
	        }
	        DragDropHelper.dragData = { text: text, json: json };
	    };
	    DragDropHelper.prototype.getData = function (event) {
	        if (event["originalEvent"]) {
	            event = event["originalEvent"];
	        }
	        if (event.dataTransfer) {
	            var text = event.dataTransfer.getData("Text");
	            if (text) {
	                DragDropHelper.dragData.text = text;
	            }
	        }
	        return DragDropHelper.dragData;
	    };
	    DragDropHelper.prototype.clearData = function () {
	        DragDropHelper.dragData = { text: "", json: null, targetQuestion: null };
	        var prev = DragDropHelper.prevEvent;
	        prev.question = null;
	        prev.x = -1;
	        prev.y = -1;
	    };
	    DragDropHelper.dataStart = "surveyjs,";
	    DragDropHelper.dragData = { text: "", json: null };
	    DragDropHelper.prevEvent = { question: null, x: -1, y: -1 };
	    DragDropHelper.ScrollDelay = 30;
	    DragDropHelper.ScrollOffset = 100;
	    return DragDropHelper;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyEditorBase = exports.SurveyPropertyEditorBase = function () {
	    function SurveyPropertyEditorBase() {
	        this.value_ = null;
	        this.options = null;
	    }
	    SurveyPropertyEditorBase.registerEditor = function (name, creator) {
	        SurveyPropertyEditorBase.editorRegisteredList[name] = creator;
	    };
	    SurveyPropertyEditorBase.createEditor = function (editorType, func) {
	        var creator = SurveyPropertyEditorBase.editorRegisteredList[editorType];
	        if (!creator) creator = SurveyPropertyEditorBase.editorRegisteredList[SurveyPropertyEditorBase.defaultEditor];
	        var propertyEditor = creator();
	        propertyEditor.onChanged = func;
	        return propertyEditor;
	    };
	    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editorType", {
	        get: function get() {
	            throw "editorType is not defined";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyEditorBase.prototype.getValueText = function (value) {
	        return value;
	    };
	    Object.defineProperty(SurveyPropertyEditorBase.prototype, "value", {
	        get: function get() {
	            return this.value_;
	        },
	        set: function set(value) {
	            value = this.getCorrectedValue(value);
	            this.setValueCore(value);
	            this.onValueChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyEditorBase.prototype.setValueCore = function (value) {
	        this.value_ = value;
	    };
	    SurveyPropertyEditorBase.prototype.setTitle = function (value) {};
	    SurveyPropertyEditorBase.prototype.setObject = function (value) {};
	    SurveyPropertyEditorBase.prototype.onValueChanged = function () {};
	    SurveyPropertyEditorBase.prototype.getCorrectedValue = function (value) {
	        return value;
	    };
	    SurveyPropertyEditorBase.defaultEditor = "string";
	    SurveyPropertyEditorBase.editorRegisteredList = {};
	    return SurveyPropertyEditorBase;
	}();
	var SurveyStringPropertyEditor = exports.SurveyStringPropertyEditor = function (_super) {
	    __extends(SurveyStringPropertyEditor, _super);
	    function SurveyStringPropertyEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyStringPropertyEditor.prototype, "editorType", {
	        get: function get() {
	            return "string";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyStringPropertyEditor;
	}(SurveyPropertyEditorBase);
	var SurveyDropdownPropertyEditor = exports.SurveyDropdownPropertyEditor = function (_super) {
	    __extends(SurveyDropdownPropertyEditor, _super);
	    function SurveyDropdownPropertyEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyDropdownPropertyEditor.prototype, "editorType", {
	        get: function get() {
	            return "dropdown";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyDropdownPropertyEditor;
	}(SurveyPropertyEditorBase);
	var SurveyBooleanPropertyEditor = exports.SurveyBooleanPropertyEditor = function (_super) {
	    __extends(SurveyBooleanPropertyEditor, _super);
	    function SurveyBooleanPropertyEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "editorType", {
	        get: function get() {
	            return "boolean";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyBooleanPropertyEditor;
	}(SurveyPropertyEditorBase);
	var SurveyNumberPropertyEditor = exports.SurveyNumberPropertyEditor = function (_super) {
	    __extends(SurveyNumberPropertyEditor, _super);
	    function SurveyNumberPropertyEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyNumberPropertyEditor.prototype, "editorType", {
	        get: function get() {
	            return "number";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyNumberPropertyEditor;
	}(SurveyPropertyEditorBase);
	SurveyPropertyEditorBase.registerEditor("string", function () {
	    return new SurveyStringPropertyEditor();
	});
	SurveyPropertyEditorBase.registerEditor("dropdown", function () {
	    return new SurveyDropdownPropertyEditor();
	});
	SurveyPropertyEditorBase.registerEditor("boolean", function () {
	    return new SurveyBooleanPropertyEditor();
	});
	SurveyPropertyEditorBase.registerEditor("number", function () {
	    return new SurveyNumberPropertyEditor();
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyTextItemsEditor = undefined;
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _surveyHelper = __webpack_require__(8);
	
	var _editorLocalization = __webpack_require__(7);
	
	var _propertyValidatorsEditor = __webpack_require__(9);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyTextItemsEditor = exports.SurveyPropertyTextItemsEditor = function (_super) {
	    __extends(SurveyPropertyTextItemsEditor, _super);
	    function SurveyPropertyTextItemsEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyPropertyTextItemsEditor.prototype, "editorType", {
	        get: function get() {
	            return "textitems";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyTextItemsEditor.prototype.createNewEditorItem = function () {
	        var objs = [];
	        var items = this.koItems();
	        for (var i = 0; i < items.length; i++) {
	            objs.push({ name: items[i].koName() });
	        }
	        var editItem = { koName: ko.observable(_surveyHelper.SurveyHelper.getNewName(objs, "text")), koTitle: ko.observable() };
	        this.createValidatorsEditor(editItem, []);
	        return editItem;
	    };
	    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) {
	        var editItem = { koName: ko.observable(item.name), koTitle: ko.observable(item.title) };
	        this.createValidatorsEditor(editItem, item.validators);
	        return editItem;
	    };
	    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        var itemText = new Survey.MultipleTextItem(editorItem.koName(), editorItem.koTitle());
	        itemText.validators = editorItem.validators;
	        return itemText;
	    };
	    SurveyPropertyTextItemsEditor.prototype.createValidatorsEditor = function (item, validators) {
	        item.validators = validators.slice();
	        var self = this;
	        var onItemChanged = function onItemChanged(newValue) {
	            item.validators = newValue;item.koText(self.getText(newValue.length));
	        };
	        var propertyEditor = new _propertyValidatorsEditor.SurveyPropertyValidatorsEditor();
	        item.editor = propertyEditor;
	        propertyEditor.onChanged = function (newValue) {
	            onItemChanged(newValue);
	        };
	        propertyEditor.object = item;
	        propertyEditor.title(_editorLocalization.editorLocalization.getString("pe.editProperty")["format"]("Validators"));
	        propertyEditor.value = item.validators;
	        item.koText = ko.observable(this.getText(validators.length));
	    };
	    SurveyPropertyTextItemsEditor.prototype.getText = function (length) {
	        return _editorLocalization.editorLocalization.getString("pe.items")["format"](length);
	    };
	    return SurveyPropertyTextItemsEditor;
	}(_propertyItemsEditor.SurveyPropertyItemsEditor);
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("textitems", function () {
	    return new SurveyPropertyTextItemsEditor();
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyItemsEditor = undefined;
	
	var _propertyModalEditor = __webpack_require__(6);
	
	var _editorLocalization = __webpack_require__(7);
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyItemsEditor = exports.SurveyPropertyItemsEditor = function (_super) {
	    __extends(SurveyPropertyItemsEditor, _super);
	    function SurveyPropertyItemsEditor() {
	        _super.call(this);
	        this.koItems = ko.observableArray();
	        this.value = [];
	        var self = this;
	        self.onDeleteClick = function (item) {
	            self.koItems.remove(item);
	        };
	        self.onClearClick = function (item) {
	            self.koItems.removeAll();
	        };
	        self.onAddClick = function () {
	            self.AddItem();
	        };
	        self.onMoveUpClick = function (item) {
	            self.moveUp(item);
	        };
	        self.onMoveDownClick = function (item) {
	            self.moveDown(item);
	        };
	    }
	    SurveyPropertyItemsEditor.prototype.getValueText = function (value) {
	        var len = value ? value.length : 0;
	        return _editorLocalization.editorLocalization.getString("pe.items")["format"](len);
	    };
	    SurveyPropertyItemsEditor.prototype.getCorrectedValue = function (value) {
	        if (value == null || !Array.isArray(value)) value = [];
	        return value;
	    };
	    SurveyPropertyItemsEditor.prototype.AddItem = function () {
	        this.koItems.push(this.createNewEditorItem());
	    };
	    SurveyPropertyItemsEditor.prototype.moveUp = function (item) {
	        var arr = this.koItems();
	        var index = arr.indexOf(item);
	        if (index < 1) return;
	        arr[index] = arr[index - 1];
	        arr[index - 1] = item;
	        this.koItems(arr);
	    };
	    SurveyPropertyItemsEditor.prototype.moveDown = function (item) {
	        var arr = this.koItems();
	        var index = arr.indexOf(item);
	        if (index < 0 || index >= arr.length - 1) return;
	        arr[index] = arr[index + 1];
	        arr[index + 1] = item;
	        this.koItems(arr);
	    };
	    SurveyPropertyItemsEditor.prototype.onValueChanged = function () {
	        this.koItems(this.getItemsFromValue());
	    };
	    SurveyPropertyItemsEditor.prototype.getItemsFromValue = function () {
	        var items = [];
	        var value = this.value;
	        for (var i = 0; i < value.length; i++) {
	            items.push(this.createEditorItem(value[i]));
	        }
	        return items;
	    };
	    SurveyPropertyItemsEditor.prototype.onBeforeApply = function () {
	        var items = [];
	        var internalItems = this.koItems();
	        for (var i = 0; i < internalItems.length; i++) {
	            items.push(this.createItemFromEditorItem(internalItems[i]));
	        }
	        this.setValueCore(items);
	    };
	    SurveyPropertyItemsEditor.prototype.createNewEditorItem = function () {
	        throw "Override 'createNewEditorItem' method";
	    };
	    SurveyPropertyItemsEditor.prototype.createEditorItem = function (item) {
	        return item;
	    };
	    SurveyPropertyItemsEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        return editorItem;
	    };
	    return SurveyPropertyItemsEditor;
	}(_propertyModalEditor.SurveyPropertyModalEditor);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyHtmlEditor = exports.SurveyPropertyTextEditor = exports.SurveyPropertyModalEditor = undefined;
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyModalEditor = exports.SurveyPropertyModalEditor = function (_super) {
	    __extends(SurveyPropertyModalEditor, _super);
	    function SurveyPropertyModalEditor() {
	        _super.call(this);
	        this.title = ko.observable();
	        var self = this;
	        self.onApplyClick = function () {
	            self.apply();
	        };
	        self.onResetClick = function () {
	            self.reset();
	        };
	    }
	    SurveyPropertyModalEditor.prototype.setTitle = function (value) {
	        this.title(value);
	    };
	    SurveyPropertyModalEditor.prototype.hasError = function () {
	        return false;
	    };
	    SurveyPropertyModalEditor.prototype.onBeforeApply = function () {};
	    SurveyPropertyModalEditor.prototype.reset = function () {
	        this.value = this.value;
	    };
	    SurveyPropertyModalEditor.prototype.setObject = function (value) {
	        this.object = value;
	    };
	    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isEditable", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyModalEditor.prototype.apply = function () {
	        if (this.hasError()) return;
	        this.onBeforeApply();
	        if (this.onChanged) {
	            this.onChanged(this.value);
	        }
	    };
	    return SurveyPropertyModalEditor;
	}(_propertyEditorBase.SurveyPropertyEditorBase);
	var SurveyPropertyTextEditor = exports.SurveyPropertyTextEditor = function (_super) {
	    __extends(SurveyPropertyTextEditor, _super);
	    function SurveyPropertyTextEditor() {
	        _super.call(this);
	        this.koValue = ko.observable();
	    }
	    Object.defineProperty(SurveyPropertyTextEditor.prototype, "editorType", {
	        get: function get() {
	            return "text";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyPropertyTextEditor.prototype, "isEditable", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyTextEditor.prototype.getValueText = function (value) {
	        if (!value) return null;
	        var str = value;
	        if (str.length > 20) {
	            str = str.substr(0, 20) + "...";
	        }
	        return str;
	    };
	    SurveyPropertyTextEditor.prototype.onValueChanged = function () {
	        this.koValue(this.value);
	    };
	    SurveyPropertyTextEditor.prototype.onBeforeApply = function () {
	        this.setValueCore(this.koValue());
	    };
	    return SurveyPropertyTextEditor;
	}(SurveyPropertyModalEditor);
	var SurveyPropertyHtmlEditor = exports.SurveyPropertyHtmlEditor = function (_super) {
	    __extends(SurveyPropertyHtmlEditor, _super);
	    function SurveyPropertyHtmlEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyPropertyHtmlEditor.prototype, "editorType", {
	        get: function get() {
	            return "html";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyPropertyHtmlEditor;
	}(SurveyPropertyTextEditor);
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("text", function () {
	    return new SurveyPropertyTextEditor();
	});
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("html", function () {
	    return new SurveyPropertyHtmlEditor();
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var editorLocalization = exports.editorLocalization = {
	    currentLocale: "",
	    locales: {},
	    getString: function getString(strName, locale) {
	        if (locale === void 0) {
	            locale = null;
	        }
	        if (!locale) locale = this.currentLocale;
	        var loc = locale ? this.locales[this.currentLocale] : defaultStrings;
	        if (!loc) loc = defaultStrings;
	        var path = strName.split('.');
	        var obj = loc;
	        for (var i = 0; i < path.length; i++) {
	            obj = obj[path[i]];
	            if (!obj) {
	                if (loc === defaultStrings) return path[i];
	                return this.getString(strName, "en");
	            }
	        }
	        return obj;
	    },
	    getPropertyName: function getPropertyName(strName, local) {
	        if (local === void 0) {
	            local = null;
	        }
	        var obj = this.getProperty(strName, local);
	        if (obj["name"]) return obj["name"];
	        return obj;
	    },
	    getPropertyTitle: function getPropertyTitle(strName, local) {
	        if (local === void 0) {
	            local = null;
	        }
	        var obj = this.getProperty(strName, local);
	        if (obj["title"]) return obj["title"];
	        return "";
	    },
	    getProperty: function getProperty(strName, local) {
	        if (local === void 0) {
	            local = null;
	        }
	        var obj = this.getString("p." + strName, local);
	        if (obj !== strName) return obj;
	        var pos = strName.indexOf('_');
	        if (pos < -1) return obj;
	        strName = strName.substr(pos + 1);
	        return this.getString("p." + strName, local);
	    },
	    getLocales: function getLocales() {
	        var res = [];
	        res.push("");
	        for (var key in this.locales) {
	            res.push(key);
	        }
	        return res;
	    }
	};
	var defaultStrings = exports.defaultStrings = {
	    //survey templates
	    survey: {
	        dropQuestion: "Please drop a question here.",
	        copy: "Copy",
	        addToToolbox: "Add to toolbox"
	    },
	    //questionTypes
	    qt: {
	        checkbox: "Checkbox (MA)",
	        comment: "Comment (OE)",
	        dropdown: "Dropdown (SA)",
	        file: "File Upload",
	        html: "HTML",
	        matrix: "Attribute (SA)",
	        matrixdropdown: "Attribute (MA)",
	        matrixdynamic: "Attribute (dynamic)",
	        multipletext: "Multiple Text (OE)",
	        radiogroup: "Radio (SA)",
	        rating: "Rating (SA)",
	        text: "Text (OE)"
	    },
	    //Strings in Editor
	    ed: {
	        newPageName: "page",
	        newQuestionName: "Q",
	        testSurvey: "Test",
	        testSurveyAgain: "Run test again",
	        testSurveyWidth: "Survey width: ",
	        embedSurvey: "Embed survey",
	        saveSurvey: "Save",
	        designer: "Design",
	        jsonEditor: "JSON editor",
	        undo: "Undo",
	        redo: "Redo",
	        options: "Options",
	        generateValidJSON: "Valid JSON",
	        generateReadableJSON: "Readable JSON",
	        toolbox: "Toolbox",
	        delSelObject: "Delete selected object",
	        correctJSON: "Please correct JSON.",
	        surveyResults: "Survey result: "
	    },
	    //Property Editors
	    pe: {
	        apply: "Apply",
	        reset: "Reset",
	        close: "Close",
	        delete: "Delete",
	        addNew: "Add new",
	        removeAll: "Remove all",
	        edit: "Edit",
	        empty: "<empty>",
	        testService: "Test the service",
	        value: "Value",
	        text: "Text",
	        required: "Required?",
	        hasOther: "Has other item",
	        name: "Name",
	        title: "Title",
	        cellType: "Type",
	        colCount: "Count",
	        editProperty: "Edit property '{0}'",
	        items: "[items:{0}]",
	        enterNewValue: "Please enter the value",
	        noquestions: "No question in the survey",
	        createtrigger: "Please create a trigger",
	        triggerOn: "On ",
	        triggerMakePagesVisible: "Make pages visible: ",
	        triggerMakeQuestionsVisible: "Make questions visible: ",
	        triggerCompleteText: "Complete the survey if succeed",
	        triggerNotSet: "The trigger is not set",
	        triggerRunIf: "Run if",
	        triggerSetToName: "Change value of: ",
	        triggerSetValue: "to: ",
	        triggerIsVariable: "Do not put the variable into the survey result",
	        verbChangeType: "Change type ",
	        verbChangePage: "Change page "
	    },
	    //Operators
	    op: {
	        empty: "is empty",
	        notempty: "is not empty",
	        equal: "equals",
	        notequal: "not equal",
	        contains: "contains",
	        notcontains: "not contain",
	        greater: "greater",
	        less: "less",
	        greaterorequal: "greater or equals",
	        lessorequal: "less or equals"
	    },
	    //Embed window
	    ew: {
	        knockout: "Use Knockout",
	        react: "Use React",
	        bootstrap: "With bootstrap",
	        standard: "Without bootstrap",
	        showOnPage: "Show survey on a page",
	        showInWindow: "Show survey in a window",
	        loadFromServer: "Load survey from a server",
	        titleScript: "Scripts",
	        titleHtml: "HTML",
	        titleJavaScript: "JavaScript"
	    },
	    //Properties
	    p: {
	        name: "name",
	        title: { name: "title", title: "Leave it blank if it is the same as 'Name'" },
	        survey_title: { name: "title", title: "It will be shown on every page" },
	        page_title: { name: "title", title: "Page title" }
	    }
	};
	editorLocalization.locales["en"] = defaultStrings;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyHelper = exports.ObjType = undefined;
	
	var _editorLocalization = __webpack_require__(7);
	
	var ObjType = exports.ObjType = undefined;
	(function (ObjType) {
	    ObjType[ObjType["Unknown"] = 0] = "Unknown";
	    ObjType[ObjType["Survey"] = 1] = "Survey";
	    ObjType[ObjType["Page"] = 2] = "Page";
	    ObjType[ObjType["Question"] = 3] = "Question";
	})(ObjType || (exports.ObjType = ObjType = {}));
	var SurveyHelper = exports.SurveyHelper = function () {
	    function SurveyHelper() {}
	    SurveyHelper.getNewPageName = function (objs) {
	        return SurveyHelper.getNewName(objs, _editorLocalization.editorLocalization.getString("ed.newPageName"));
	    };
	    SurveyHelper.getNewQuestionName = function (objs) {
	        return SurveyHelper.getNewName(objs, _editorLocalization.editorLocalization.getString("ed.newQuestionName"));
	    };
	    SurveyHelper.getNewName = function (objs, baseName) {
	        var hash = {};
	        for (var i = 0; i < objs.length; i++) {
	            hash[objs[i].name] = true;
	        }
	        var num = 1;
	        while (true) {
	            if (!hash[baseName + num.toString()]) break;
	            num++;
	        }
	        return baseName + num.toString();
	    };
	    SurveyHelper.getObjectType = function (obj) {
	        if (!obj || !obj["getType"]) return ObjType.Unknown;
	        if (obj.getType() == "page") return ObjType.Page;
	        if (obj.getType() == "survey") return ObjType.Survey;
	        if (obj["name"]) return ObjType.Question;
	        return ObjType.Unknown;
	    };
	    SurveyHelper.getObjectName = function (obj) {
	        if (obj["name"]) return obj["name"];
	        var objType = SurveyHelper.getObjectType(obj);
	        if (objType != ObjType.Page) return "";
	        var data = obj.data;
	        var index = data.pages.indexOf(obj);
	        return "[Page " + (index + 1) + "]";
	    };
	    return SurveyHelper;
	}();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyValidatorItem = exports.SurveyPropertyValidatorsEditor = undefined;
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _objectEditor = __webpack_require__(10);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyValidatorsEditor = exports.SurveyPropertyValidatorsEditor = function (_super) {
	    __extends(SurveyPropertyValidatorsEditor, _super);
	    function SurveyPropertyValidatorsEditor() {
	        _super.call(this);
	        this.availableValidators = [];
	        this.validatorClasses = [];
	        var self = this;
	        this.selectedObjectEditor = new _objectEditor.SurveyObjectEditor();
	        this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
	            self.onPropertyValueChanged(options.property, options.object, options.newValue);
	        });
	        this.koSelected = ko.observable(null);
	        this.koSelected.subscribe(function (newValue) {
	            self.selectedObjectEditor.selectedObject = newValue != null ? newValue.validator : null;
	        });
	        this.validatorClasses = Survey.JsonObject.metaData.getChildrenClasses("surveyvalidator", true);
	        this.availableValidators = this.getAvailableValidators();
	        this.onDeleteClick = function () {
	            self.koItems.remove(self.koSelected());
	        };
	        this.onAddClick = function (validatorType) {
	            self.addItem(validatorType);
	        };
	    }
	    Object.defineProperty(SurveyPropertyValidatorsEditor.prototype, "editorType", {
	        get: function get() {
	            return "validators";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyValidatorsEditor.prototype.onValueChanged = function () {
	        _super.prototype.onValueChanged.call(this);
	        if (this.koSelected) {
	            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
	        }
	    };
	    SurveyPropertyValidatorsEditor.prototype.createEditorItem = function (item) {
	        var jsonObj = new Survey.JsonObject();
	        var validator = Survey.JsonObject.metaData.createClass(item.getType());
	        jsonObj.toObject(item, validator);
	        return new SurveyPropertyValidatorItem(validator);
	    };
	    SurveyPropertyValidatorsEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        var item = editorItem;
	        return item.validator;
	    };
	    SurveyPropertyValidatorsEditor.prototype.addItem = function (validatorType) {
	        var newValidator = new SurveyPropertyValidatorItem(Survey.JsonObject.metaData.createClass(validatorType));
	        this.koItems.push(newValidator);
	        this.koSelected(newValidator);
	    };
	    SurveyPropertyValidatorsEditor.prototype.getAvailableValidators = function () {
	        var result = [];
	        for (var i = 0; i < this.validatorClasses.length; i++) {
	            result.push(this.validatorClasses[i].name);
	        }
	        return result;
	    };
	    SurveyPropertyValidatorsEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
	        if (this.koSelected() == null) return;
	        this.koSelected().validator[property.name] = newValue;
	    };
	    return SurveyPropertyValidatorsEditor;
	}(_propertyItemsEditor.SurveyPropertyItemsEditor);
	var SurveyPropertyValidatorItem = exports.SurveyPropertyValidatorItem = function () {
	    function SurveyPropertyValidatorItem(validator) {
	        this.validator = validator;
	        this.text = validator.getType();
	    }
	    return SurveyPropertyValidatorItem;
	}();
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("validators", function () {
	    return new SurveyPropertyValidatorsEditor();
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyObjectEditor = undefined;
	
	var _objectProperty = __webpack_require__(11);
	
	var _editorLocalization = __webpack_require__(7);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyObjectEditor = exports.SurveyObjectEditor = function () {
	    function SurveyObjectEditor(propertyEditorOptions) {
	        if (propertyEditorOptions === void 0) {
	            propertyEditorOptions = null;
	        }
	        this.propertyEditorOptions = null;
	        this.onPropertyValueChanged = new Survey.Event();
	        this.propertyEditorOptions = propertyEditorOptions;
	        this.koProperties = ko.observableArray();
	        this.koActiveProperty = ko.observable();
	        this.koHasObject = ko.observable();
	    }
	    Object.defineProperty(SurveyObjectEditor.prototype, "selectedObject", {
	        get: function get() {
	            return this.selectedObjectValue;
	        },
	        set: function set(value) {
	            if (this.selectedObjectValue == value) return;
	            this.koHasObject(value != null);
	            this.selectedObjectValue = value;
	            this.updateProperties();
	            this.updatePropertiesObject();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyObjectEditor.prototype.getPropertyEditor = function (name) {
	        var properties = this.koProperties();
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].name == name) return properties[i];
	        }
	        return null;
	    };
	    SurveyObjectEditor.prototype.changeActiveProperty = function (property) {
	        this.koActiveProperty(property);
	    };
	    SurveyObjectEditor.prototype.ObjectChanged = function () {
	        this.updatePropertiesObject();
	    };
	    SurveyObjectEditor.prototype.updateProperties = function () {
	        var _this = this;
	        if (!this.selectedObject || !this.selectedObject.getType) {
	            this.koProperties([]);
	            this.koActiveProperty(null);
	            return;
	        }
	        var properties = Survey.JsonObject.metaData.getProperties(this.selectedObject.getType());
	        properties.sort(function (a, b) {
	            if (a.name == b.name) return 0;
	            if (a.name > b.name) return 1;
	            return -1;
	        });
	        var objectProperties = [];
	        var self = this;
	        var propEvent = function propEvent(property, newValue) {
	            self.onPropertyValueChanged.fire(_this, { property: property.property, object: property.object, newValue: newValue });
	        };
	        for (var i = 0; i < properties.length; i++) {
	            if (!this.canShowProperty(properties[i])) continue;
	            var objectProperty = new _objectProperty.SurveyObjectProperty(properties[i], propEvent, this.propertyEditorOptions);
	            var locName = this.selectedObject.getType() + '_' + properties[i].name;
	            objectProperty.displayName = _editorLocalization.editorLocalization.getPropertyName(locName);
	            var title = _editorLocalization.editorLocalization.getPropertyTitle(locName);
	            if (!title) title = objectProperty.displayName;
	            objectProperty.title = title;
	            objectProperties.push(objectProperty);
	        }
	        this.koProperties(objectProperties);
	        this.koActiveProperty(this.getPropertyEditor("name"));
	    };
	    SurveyObjectEditor.prototype.canShowProperty = function (property) {
	        var name = property.name;
	        if (name == 'questions' || name == 'pages') return false;
	        return true;
	    };
	    SurveyObjectEditor.prototype.updatePropertiesObject = function () {
	        var properties = this.koProperties();
	        for (var i = 0; i < properties.length; i++) {
	            properties[i].object = this.selectedObject;
	        }
	    };
	    return SurveyObjectEditor;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyObjectProperty = undefined;
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _editorLocalization = __webpack_require__(7);
	
	var SurveyObjectProperty = exports.SurveyObjectProperty = function () {
	    function SurveyObjectProperty(property, onPropertyChanged, propertyEditorOptions) {
	        if (onPropertyChanged === void 0) {
	            onPropertyChanged = null;
	        }
	        if (propertyEditorOptions === void 0) {
	            propertyEditorOptions = null;
	        }
	        this.property = property;
	        this.isApplyingNewValue = false;
	        this.onPropertyChanged = onPropertyChanged;
	        this.name = this.property.name;
	        this.koValue = ko.observable();
	        this.choices = property.choices;
	        var self = this;
	        this.editorType = property.type;
	        //TODO
	        if (this.choices != null) {
	            this.editorType = "dropdown";
	        }
	        var onItemChanged = function onItemChanged(newValue) {
	            self.onApplyEditorValue(newValue);
	        };
	        this.editor = _propertyEditorBase.SurveyPropertyEditorBase.createEditor(this.editorType, onItemChanged);
	        this.editor.options = propertyEditorOptions;
	        this.editorType = this.editor.editorType;
	        this.modalName = "modelEditor" + this.editorType + this.name;
	        this.modalNameTarget = "#" + this.modalName;
	        this.koValue.subscribe(function (newValue) {
	            self.onkoValueChanged(newValue);
	        });
	        this.koText = ko.computed(function () {
	            return self.getValueText(self.koValue());
	        });
	        this.koIsDefault = ko.computed(function () {
	            return self.property.isDefaultValue(self.koValue());
	        });
	    }
	    Object.defineProperty(SurveyObjectProperty.prototype, "object", {
	        get: function get() {
	            return this.objectValue;
	        },
	        set: function set(value) {
	            this.objectValue = value;
	            this.updateValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyObjectProperty.prototype.updateValue = function () {
	        this.isValueUpdating = true;
	        this.koValue(this.getValue());
	        this.editor.setObject(this.object);
	        this.editor.setTitle(_editorLocalization.editorLocalization.getString("pe.editProperty")["format"](this.property.name));
	        this.updateEditorData(this.koValue());
	        this.isValueUpdating = false;
	    };
	    SurveyObjectProperty.prototype.onApplyEditorValue = function (newValue) {
	        this.isApplyingNewValue = true;
	        this.koValue(newValue);
	        this.isApplyingNewValue = false;
	    };
	    SurveyObjectProperty.prototype.onkoValueChanged = function (newValue) {
	        if (!this.isApplyingNewValue) {
	            this.updateEditorData(newValue);
	        }
	        if (this.object == null) return;
	        if (this.object[this.name] == newValue) return;
	        if (this.onPropertyChanged != null && !this.isValueUpdating) this.onPropertyChanged(this, newValue);
	    };
	    SurveyObjectProperty.prototype.updateEditorData = function (newValue) {
	        this.editor.value = newValue;
	    };
	    SurveyObjectProperty.prototype.getValue = function () {
	        if (this.property.hasToUseGetValue) return this.property.getValue(this.object);
	        return this.object[this.name];
	    };
	    SurveyObjectProperty.prototype.getValueText = function (value) {
	        return this.editor.getValueText(value);
	    };
	    return SurveyObjectProperty;
	}();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyItemValuesEditor = undefined;
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyItemValuesEditor = exports.SurveyPropertyItemValuesEditor = function (_super) {
	    __extends(SurveyPropertyItemValuesEditor, _super);
	    function SurveyPropertyItemValuesEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "editorType", {
	        get: function get() {
	            return "itemvalues";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyItemValuesEditor.prototype.hasError = function () {
	        var result = false;
	        for (var i = 0; i < this.koItems().length; i++) {
	            var item = this.koItems()[i];
	            item.koHasError(!item.koValue());
	            result = result || item.koHasError();
	        }
	        return result;
	    };
	    SurveyPropertyItemValuesEditor.prototype.createNewEditorItem = function () {
	        return { koValue: ko.observable(), koText: ko.observable(), koHasError: ko.observable(false) };
	    };
	    SurveyPropertyItemValuesEditor.prototype.createEditorItem = function (item) {
	        var itemValue = item;
	        var itemText = null;
	        if (item.value) {
	            itemValue = item.value;
	            itemText = item.text;
	        }
	        return { koValue: ko.observable(itemValue), koText: ko.observable(itemText), koHasError: ko.observable(false) };
	    };
	    SurveyPropertyItemValuesEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
	        var text = editorItem.koText();
	        //if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
	        //    text = null;
	        //}
	        return { value: editorItem.koValue(), text: text };
	    };
	    return SurveyPropertyItemValuesEditor;
	}(_propertyItemsEditor.SurveyPropertyItemsEditor);
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("itemvalues", function () {
	    return new SurveyPropertyItemValuesEditor();
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyMatrixDropdownColumnsItem = exports.SurveyPropertyDropdownColumnsEditor = undefined;
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _propertyItemValuesEditor = __webpack_require__(12);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyDropdownColumnsEditor = exports.SurveyPropertyDropdownColumnsEditor = function (_super) {
	    __extends(SurveyPropertyDropdownColumnsEditor, _super);
	    function SurveyPropertyDropdownColumnsEditor() {
	        _super.call(this);
	    }
	    Object.defineProperty(SurveyPropertyDropdownColumnsEditor.prototype, "editorType", {
	        get: function get() {
	            return "matrixdropdowncolumns";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyDropdownColumnsEditor.prototype.hasError = function () {
	        var result = false;
	        for (var i = 0; i < this.koItems().length; i++) {
	            result = result || this.koItems()[i].hasError();
	        }
	        return result;
	    };
	    SurveyPropertyDropdownColumnsEditor.prototype.createNewEditorItem = function () {
	        return new SurveyPropertyMatrixDropdownColumnsItem(new Survey.MatrixDropdownColumn("", this.options));
	    };
	    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItem = function (item) {
	        return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options);
	    };
	    SurveyPropertyDropdownColumnsEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        var columItem = editorItem;
	        columItem.apply();
	        return columItem.column;
	    };
	    return SurveyPropertyDropdownColumnsEditor;
	}(_propertyItemsEditor.SurveyPropertyItemsEditor);
	var SurveyPropertyMatrixDropdownColumnsItem = exports.SurveyPropertyMatrixDropdownColumnsItem = function () {
	    function SurveyPropertyMatrixDropdownColumnsItem(column, options) {
	        if (options === void 0) {
	            options = null;
	        }
	        this.column = column;
	        this.options = options;
	        this.cellTypeChoices = this.getPropertyChoices("cellType");
	        this.colCountChoices = this.getPropertyChoices("colCount");
	        this.koName = ko.observable(column.name);
	        this.koCellType = ko.observable(column.cellType);
	        this.koColCount = ko.observable(column.colCount);
	        this.koIsRequired = ko.observable(column.isRequired ? true : false);
	        this.koHasOther = ko.observable(column.hasOther ? true : false);
	        this.koTitle = ko.observable(column.name === column.title ? "" : column.title);
	        this.koShowChoices = ko.observable(false);
	        this.koChoices = ko.observableArray(column.choices);
	        this.koHasError = ko.observable(false);
	        this.choicesEditor = new _propertyItemValuesEditor.SurveyPropertyItemValuesEditor();
	        this.choicesEditor.object = this.column;
	        this.choicesEditor.value = this.koChoices();
	        this.choicesEditor.options = this.options;
	        var self = this;
	        this.onShowChoicesClick = function () {
	            self.koShowChoices(!self.koShowChoices());
	        };
	        this.koHasChoices = ko.computed(function () {
	            return self.koCellType() == "dropdown" || self.koCellType() == "checkbox" || self.koCellType() == "radiogroup";
	        });
	        this.koHasColCount = ko.computed(function () {
	            return self.koCellType() == "checkbox" || self.koCellType() == "radiogroup";
	        });
	    }
	    SurveyPropertyMatrixDropdownColumnsItem.prototype.hasError = function () {
	        this.koHasError(!this.koName());
	        return this.koHasError() || this.choicesEditor.hasError();
	    };
	    SurveyPropertyMatrixDropdownColumnsItem.prototype.apply = function () {
	        this.column.name = this.koName();
	        this.column.title = this.koTitle();
	        this.column.cellType = this.koCellType();
	        this.column.colCount = this.koColCount();
	        this.column.isRequired = this.koIsRequired();
	        this.column.hasOther = this.koHasOther();
	        this.choicesEditor.onApplyClick();
	        this.column.choices = this.choicesEditor.value;
	    };
	    SurveyPropertyMatrixDropdownColumnsItem.prototype.getPropertyChoices = function (propetyName) {
	        var properties = Survey.JsonObject.metaData.getProperties("matrixdropdowncolumn");
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].name == propetyName) return properties[i].choices;
	        }
	        return [];
	    };
	    return SurveyPropertyMatrixDropdownColumnsItem;
	}();
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("matrixdropdowncolumns", function () {
	    return new SurveyPropertyDropdownColumnsEditor();
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyResultfullEditor = undefined;
	
	var _propertyModalEditor = __webpack_require__(6);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _editorLocalization = __webpack_require__(7);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyResultfullEditor = exports.SurveyPropertyResultfullEditor = function (_super) {
	    __extends(SurveyPropertyResultfullEditor, _super);
	    function SurveyPropertyResultfullEditor() {
	        _super.call(this);
	        this.koUrl = ko.observable();
	        this.koPath = ko.observable();
	        this.koValueName = ko.observable();
	        this.koTitleName = ko.observable();
	        this.createSurvey();
	        var self = this;
	        this.koUrl.subscribe(function (newValue) {
	            self.question.choicesByUrl.url = newValue;self.run();
	        });
	        this.koPath.subscribe(function (newValue) {
	            self.question.choicesByUrl.path = newValue;self.run();
	        });
	        this.koValueName.subscribe(function (newValue) {
	            self.question.choicesByUrl.valueName = newValue;self.run();
	        });
	        this.koTitleName.subscribe(function (newValue) {
	            self.question.choicesByUrl.titleName = newValue;self.run();
	        });
	    }
	    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "editorType", {
	        get: function get() {
	            return "restfull";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "restfullValue", {
	        get: function get() {
	            return this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyResultfullEditor.prototype.getValueText = function (value) {
	        if (!value || !value.url) return _editorLocalization.editorLocalization.getString("pe.empty");
	        var str = value.url;
	        if (str.length > 20) {
	            str = str.substr(0, 20) + "...";
	        }
	        return str;
	    };
	    SurveyPropertyResultfullEditor.prototype.onValueChanged = function () {
	        var val = this.restfullValue;
	        this.koUrl(val ? val.url : "");
	        this.koPath(val ? val.path : "");
	        this.koValueName(val ? val.valueName : "");
	        this.koTitleName(val ? val.titleName : "");
	        this.survey.render("restfullSurvey");
	    };
	    SurveyPropertyResultfullEditor.prototype.onBeforeApply = function () {
	        var val = new Survey.ChoicesRestfull();
	        val.url = this.koUrl();
	        val.path = this.koPath();
	        val.valueName = this.koValueName();
	        val.titleName = this.koTitleName();
	        this.setValueCore(val);
	    };
	    SurveyPropertyResultfullEditor.prototype.run = function () {
	        this.question.choicesByUrl.run();
	    };
	    SurveyPropertyResultfullEditor.prototype.createSurvey = function () {
	        this.survey = new Survey.Survey();
	        this.survey.showNavigationButtons = false;
	        this.survey.showQuestionNumbers = "off";
	        var page = this.survey.addNewPage("page1");
	        this.question = page.addNewQuestion("dropdown", "q1");
	        this.question.title = _editorLocalization.editorLocalization.getString("pe.testService");
	        this.question.choices = [];
	        this.survey.render("restfullSurvey");
	    };
	    return SurveyPropertyResultfullEditor;
	}(_propertyModalEditor.SurveyPropertyModalEditor);
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("restfull", function () {
	    return new SurveyPropertyResultfullEditor();
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPropertyTriggerObjects = exports.SurveyPropertySetValueTrigger = exports.SurveyPropertyVisibleTrigger = exports.SurveyPropertyTrigger = exports.SurveyPropertyTriggersEditor = undefined;
	
	var _propertyItemsEditor = __webpack_require__(5);
	
	var _propertyEditorBase = __webpack_require__(3);
	
	var _editorLocalization = __webpack_require__(7);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyPropertyTriggersEditor = exports.SurveyPropertyTriggersEditor = function (_super) {
	    __extends(SurveyPropertyTriggersEditor, _super);
	    function SurveyPropertyTriggersEditor() {
	        _super.call(this);
	        this.availableTriggers = [];
	        this.triggerClasses = [];
	        var self = this;
	        this.onDeleteClick = function () {
	            self.koItems.remove(self.koSelected());
	        };
	        this.onAddClick = function (triggerType) {
	            self.addItem(triggerType);
	        };
	        this.koSelected = ko.observable(null);
	        this.koPages = ko.observableArray();
	        this.koQuestions = ko.observableArray();
	        this.triggerClasses = Survey.JsonObject.metaData.getChildrenClasses("surveytrigger", true);
	        this.availableTriggers = this.getAvailableTriggers();
	    }
	    Object.defineProperty(SurveyPropertyTriggersEditor.prototype, "editorType", {
	        get: function get() {
	            return "triggers";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPropertyTriggersEditor.prototype.onValueChanged = function () {
	        _super.prototype.onValueChanged.call(this);
	        if (this.object) {
	            this.koPages(this.getNames(this.object.pages));
	            this.koQuestions(this.getNames(this.object.getAllQuestions()));
	        }
	        if (this.koSelected) {
	            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
	        }
	    };
	    SurveyPropertyTriggersEditor.prototype.addItem = function (triggerType) {
	        var trigger = Survey.JsonObject.metaData.createClass(triggerType);
	        var triggerItem = this.createPropertyTrigger(trigger);
	        this.koItems.push(triggerItem);
	        this.koSelected(triggerItem);
	    };
	    SurveyPropertyTriggersEditor.prototype.createEditorItem = function (item) {
	        var jsonObj = new Survey.JsonObject();
	        var trigger = Survey.JsonObject.metaData.createClass(item.getType());
	        jsonObj.toObject(item, trigger);
	        return this.createPropertyTrigger(trigger);
	    };
	    SurveyPropertyTriggersEditor.prototype.createItemFromEditorItem = function (editorItem) {
	        var editorTrigger = editorItem;
	        return editorTrigger.createTrigger();
	    };
	    SurveyPropertyTriggersEditor.prototype.getAvailableTriggers = function () {
	        var result = [];
	        for (var i = 0; i < this.triggerClasses.length; i++) {
	            result.push(this.triggerClasses[i].name);
	        }
	        return result;
	    };
	    SurveyPropertyTriggersEditor.prototype.getNames = function (items) {
	        var names = [];
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item["name"]) {
	                names.push(item["name"]);
	            }
	        }
	        return names;
	    };
	    SurveyPropertyTriggersEditor.prototype.createPropertyTrigger = function (trigger) {
	        var triggerItem = null;
	        if (trigger.getType() == "visibletrigger") {
	            triggerItem = new SurveyPropertyVisibleTrigger(trigger, this.koPages, this.koQuestions);
	        }
	        if (trigger.getType() == "setvaluetrigger") {
	            triggerItem = new SurveyPropertySetValueTrigger(trigger, this.koQuestions);
	        }
	        if (!triggerItem) {
	            triggerItem = new SurveyPropertyTrigger(trigger);
	        }
	        return triggerItem;
	    };
	    return SurveyPropertyTriggersEditor;
	}(_propertyItemsEditor.SurveyPropertyItemsEditor);
	var SurveyPropertyTrigger = exports.SurveyPropertyTrigger = function () {
	    function SurveyPropertyTrigger(trigger) {
	        this.trigger = trigger;
	        this.operators = ["empty", "notempty", "equal", "notequal", "contains", "notcontains", "greater", "less", "greaterorequal", "lessorequal"];
	        this.availableOperators = [];
	        this.createOperators();
	        this.triggerType = trigger.getType();
	        this.koType = ko.observable(this.triggerType);
	        this.koName = ko.observable(trigger.name);
	        this.koOperator = ko.observable(trigger.operator);
	        this.koValue = ko.observable(trigger.value);
	        var self = this;
	        this.koRequireValue = ko.computed(function () {
	            return self.koOperator() != "empty" && self.koOperator() != "notempty";
	        });
	        this.koIsValid = ko.computed(function () {
	            if (self.koName() && (!self.koRequireValue() || self.koValue())) return true;return false;
	        });
	        this.koText = ko.computed(function () {
	            self.koName();self.koOperator();self.koValue();return self.getText();
	        });
	    }
	    SurveyPropertyTrigger.prototype.createTrigger = function () {
	        var trigger = Survey.JsonObject.metaData.createClass(this.triggerType);
	        trigger.name = this.koName();
	        trigger.operator = this.koOperator();
	        trigger.value = this.koValue();
	        return trigger;
	    };
	    SurveyPropertyTrigger.prototype.createOperators = function () {
	        for (var i = 0; i < this.operators.length; i++) {
	            var name = this.operators[i];
	            this.availableOperators.push({ name: name, text: _editorLocalization.editorLocalization.getString("op." + name) });
	        }
	    };
	    SurveyPropertyTrigger.prototype.getText = function () {
	        if (!this.koIsValid()) return _editorLocalization.editorLocalization.getString("pe.triggerNotSet");
	        return _editorLocalization.editorLocalization.getString("pe.triggerRunIf") + " '" + this.koName() + "' " + this.getOperatorText() + this.getValueText();
	    };
	    SurveyPropertyTrigger.prototype.getOperatorText = function () {
	        var op = this.koOperator();
	        for (var i = 0; i < this.availableOperators.length; i++) {
	            if (this.availableOperators[i].name == op) return this.availableOperators[i].text;
	        }
	        return op;
	    };
	    SurveyPropertyTrigger.prototype.getValueText = function () {
	        if (!this.koRequireValue()) return "";
	        return " " + this.koValue();
	    };
	    return SurveyPropertyTrigger;
	}();
	var SurveyPropertyVisibleTrigger = exports.SurveyPropertyVisibleTrigger = function (_super) {
	    __extends(SurveyPropertyVisibleTrigger, _super);
	    function SurveyPropertyVisibleTrigger(trigger, koPages, koQuestions) {
	        _super.call(this, trigger);
	        this.trigger = trigger;
	        this.pages = new SurveyPropertyTriggerObjects(_editorLocalization.editorLocalization.getString("pe.triggerMakePagesVisible"), koPages(), trigger.pages);
	        this.questions = new SurveyPropertyTriggerObjects(_editorLocalization.editorLocalization.getString("pe.triggerMakeQuestionsVisible"), koQuestions(), trigger.questions);
	    }
	    SurveyPropertyVisibleTrigger.prototype.createTrigger = function () {
	        var trigger = _super.prototype.createTrigger.call(this);
	        trigger.pages = this.pages.koChoosen();
	        trigger.questions = this.questions.koChoosen();
	        return trigger;
	    };
	    return SurveyPropertyVisibleTrigger;
	}(SurveyPropertyTrigger);
	var SurveyPropertySetValueTrigger = exports.SurveyPropertySetValueTrigger = function (_super) {
	    __extends(SurveyPropertySetValueTrigger, _super);
	    function SurveyPropertySetValueTrigger(trigger, koQuestions) {
	        _super.call(this, trigger);
	        this.trigger = trigger;
	        this.koQuestions = koQuestions;
	        this.kosetToName = ko.observable(trigger.setToName);
	        this.kosetValue = ko.observable(trigger.setValue);
	        this.koisVariable = ko.observable(trigger.isVariable);
	    }
	    SurveyPropertySetValueTrigger.prototype.createTrigger = function () {
	        var trigger = _super.prototype.createTrigger.call(this);
	        trigger.setToName = this.kosetToName();
	        trigger.setValue = this.kosetValue();
	        trigger.isVariable = this.koisVariable();
	        return trigger;
	    };
	    return SurveyPropertySetValueTrigger;
	}(SurveyPropertyTrigger);
	var SurveyPropertyTriggerObjects = exports.SurveyPropertyTriggerObjects = function () {
	    function SurveyPropertyTriggerObjects(title, allObjects, choosenObjects) {
	        this.title = title;
	        this.koChoosen = ko.observableArray(choosenObjects);
	        var array = [];
	        for (var i = 0; i < allObjects.length; i++) {
	            var item = allObjects[i];
	            if (choosenObjects.indexOf(item) < 0) {
	                array.push(item);
	            }
	        }
	        this.koObjects = ko.observableArray(array);
	        this.koSelected = ko.observable();
	        this.koChoosenSelected = ko.observable();
	        var self = this;
	        this.onDeleteClick = function () {
	            self.deleteItem();
	        };
	        this.onAddClick = function () {
	            self.addItem();
	        };
	    }
	    SurveyPropertyTriggerObjects.prototype.deleteItem = function () {
	        this.changeItems(this.koChoosenSelected(), this.koChoosen, this.koObjects);
	    };
	    SurveyPropertyTriggerObjects.prototype.addItem = function () {
	        this.changeItems(this.koSelected(), this.koObjects, this.koChoosen);
	    };
	    SurveyPropertyTriggerObjects.prototype.changeItems = function (item, removedFrom, addTo) {
	        removedFrom.remove(item);
	        addTo.push(item);
	        removedFrom.sort();
	        addTo.sort();
	    };
	    return SurveyPropertyTriggerObjects;
	}();
	_propertyEditorBase.SurveyPropertyEditorBase.registerEditor("triggers", function () {
	    return new SurveyPropertyTriggersEditor();
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyPagesEditor = undefined;
	
	var _surveyHelper = __webpack_require__(8);
	
	var SurveyPagesEditor = exports.SurveyPagesEditor = function () {
	    function SurveyPagesEditor(onAddNewPageCallback, onSelectPageCallback, onMovePageCallback, onDeletePageCallback) {
	        if (onAddNewPageCallback === void 0) {
	            onAddNewPageCallback = null;
	        }
	        if (onSelectPageCallback === void 0) {
	            onSelectPageCallback = null;
	        }
	        if (onMovePageCallback === void 0) {
	            onMovePageCallback = null;
	        }
	        if (onDeletePageCallback === void 0) {
	            onDeletePageCallback = null;
	        }
	        this.draggingPage = null;
	        this.koPages = ko.observableArray();
	        this.koIsValid = ko.observable(false);
	        this.onAddNewPageCallback = onAddNewPageCallback;
	        this.onSelectPageCallback = onSelectPageCallback;
	        this.onMovePageCallback = onMovePageCallback;
	        this.onDeletePageCallback = onDeletePageCallback;
	        var self = this;
	        this.selectPageClick = function (pageItem) {
	            if (self.onSelectPageCallback) {
	                self.onSelectPageCallback(pageItem.page);
	            }
	        };
	        this.keyDown = function (el, e) {
	            self.onKeyDown(el, e);
	        };
	        this.dragStart = function (el) {
	            self.draggingPage = el;
	        };
	        this.dragOver = function (el) {};
	        this.dragEnd = function () {
	            self.draggingPage = null;
	        };
	        this.dragDrop = function (el) {
	            self.moveDraggingPageTo(el);
	        };
	    }
	    Object.defineProperty(SurveyPagesEditor.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        set: function set(value) {
	            this.surveyValue = value;
	            this.koIsValid(this.surveyValue != null);
	            this.updatePages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyPagesEditor.prototype.setSelectedPage = function (page) {
	        var pages = this.koPages();
	        for (var i = 0; i < pages.length; i++) {
	            pages[i].koSelected(pages[i].page == page);
	        }
	    };
	    SurveyPagesEditor.prototype.addNewPageClick = function () {
	        if (this.onAddNewPageCallback) {
	            this.onAddNewPageCallback();
	        }
	    };
	    SurveyPagesEditor.prototype.removePage = function (page) {
	        var index = this.getIndexByPage(page);
	        if (index > -1) {
	            this.koPages.splice(index, 1);
	        }
	    };
	    SurveyPagesEditor.prototype.changeName = function (page) {
	        var index = this.getIndexByPage(page);
	        if (index > -1) {
	            this.koPages()[index].title(_surveyHelper.SurveyHelper.getObjectName(page));
	        }
	    };
	    SurveyPagesEditor.prototype.getIndexByPage = function (page) {
	        var pages = this.koPages();
	        for (var i = 0; i < pages.length; i++) {
	            if (pages[i].page == page) return i;
	        }
	        return -1;
	    };
	    SurveyPagesEditor.prototype.onKeyDown = function (el, e) {
	        if (this.koPages().length <= 1) return;
	        var pages = this.koPages();
	        var pageIndex = -1;
	        for (var i = 0; i < pages.length; i++) {
	            if (pages[i].page && pages[i].koSelected()) {
	                pageIndex = i;
	            }
	        }
	        if (pageIndex < 0) return;
	        if (e.keyCode == 46 && this.onDeletePageCallback) this.onDeletePageCallback(el.page);
	        if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
	            pageIndex += e.keyCode == 37 ? -1 : 1;
	            if (pageIndex < 0) pageIndex = pages.length - 1;
	            if (pageIndex >= pages.length) pageIndex = 0;
	            var page = pages[pageIndex].page;
	            this.onSelectPageCallback(page);
	            this.setSelectedPage(page);
	        }
	    };
	    SurveyPagesEditor.prototype.updatePages = function () {
	        if (this.surveyValue == null) {
	            this.koPages([]);
	            return;
	        }
	        var pages = [];
	        for (var i = 0; i < this.surveyValue.pages.length; i++) {
	            var page = this.surveyValue.pages[i];
	            pages.push({
	                title: ko.observable(_surveyHelper.SurveyHelper.getObjectName(page)), page: page, koSelected: ko.observable(false)
	            });
	        }
	        this.koPages(pages);
	    };
	    SurveyPagesEditor.prototype.moveDraggingPageTo = function (toPage) {
	        if (toPage == null || toPage == this.draggingPage) {
	            this.draggingPage = null;
	            return;
	        }
	        if (this.draggingPage == null) return;
	        var index = this.koPages().indexOf(this.draggingPage);
	        var indexTo = this.koPages().indexOf(toPage);
	        if (this.onMovePageCallback) {
	            this.onMovePageCallback(index, indexTo);
	        }
	    };
	    return SurveyPagesEditor;
	}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyTextWorker = undefined;
	
	var _json = __webpack_require__(18);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var TextParserPropery = function () {
	    function TextParserPropery() {}
	    return TextParserPropery;
	}();
	var SurveyTextWorker = exports.SurveyTextWorker = function () {
	    function SurveyTextWorker(text) {
	        this.text = text;
	        if (!this.text || this.text.trim() == "") {
	            this.text = "{}";
	        }
	        this.errors = [];
	        this.process();
	    }
	    Object.defineProperty(SurveyTextWorker.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyTextWorker.prototype, "isJsonCorrect", {
	        get: function get() {
	            return this.surveyValue != null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyTextWorker.prototype.process = function () {
	        try {
	            this.jsonValue = new _json.SurveyJSON5(1).parse(this.text);
	        } catch (error) {
	            this.errors.push({ pos: { start: error.at, end: -1 }, text: error.message });
	        }
	        if (this.jsonValue != null) {
	            this.updateJsonPositions(this.jsonValue);
	            this.surveyValue = new Survey.Survey(this.jsonValue);
	            if (this.surveyValue.jsonErrors != null) {
	                for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
	                    var error = this.surveyValue.jsonErrors[i];
	                    this.errors.push({ pos: { start: error.at, end: -1 }, text: error.getFullDescription() });
	                }
	            }
	        }
	        this.surveyObjects = this.createSurveyObjects();
	        this.setEditorPositionByChartAt(this.surveyObjects);
	        this.setEditorPositionByChartAt(this.errors);
	    };
	    SurveyTextWorker.prototype.updateJsonPositions = function (jsonObj) {
	        jsonObj["pos"]["self"] = jsonObj;
	        for (var key in jsonObj) {
	            var obj = jsonObj[key];
	            if (obj && obj["pos"]) {
	                jsonObj["pos"][key] = obj["pos"];
	                this.updateJsonPositions(obj);
	            }
	        }
	    };
	    SurveyTextWorker.prototype.createSurveyObjects = function () {
	        var result = [];
	        if (this.surveyValue == null) return result;
	        this.isSurveyAsPage = false;
	        for (var i = 0; i < this.surveyValue.pages.length; i++) {
	            var page = this.surveyValue.pages[i];
	            if (i == 0 && !page["pos"]) {
	                page["pos"] = this.surveyValue["pos"];
	                this.isSurveyAsPage = true;
	            }
	            result.push(page);
	            for (var j = 0; j < page.questions.length; j++) {
	                result.push(page.questions[j]);
	            }
	        }
	        return result;
	    };
	    SurveyTextWorker.prototype.setEditorPositionByChartAt = function (objects) {
	        if (objects == null || objects.length == 0) return;
	        var position = { row: 0, column: 0 };
	        var atObjectsArray = this.getAtArray(objects);
	        var startAt = 0;
	        for (var i = 0; i < atObjectsArray.length; i++) {
	            var at = atObjectsArray[i].at;
	            position = this.getPostionByChartAt(position, startAt, at);
	            var obj = atObjectsArray[i].obj;
	            if (!obj.position) obj.position = {};
	            if (at == obj.pos.start) {
	                obj.position.start = position;
	            } else {
	                if (at == obj.pos.end) {
	                    obj.position.end = position;
	                }
	            }
	            startAt = at;
	        }
	    };
	    SurveyTextWorker.prototype.getPostionByChartAt = function (startPosition, startAt, at) {
	        var result = { row: startPosition.row, column: startPosition.column };
	        var curChar = startAt;
	        while (curChar < at) {
	            if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
	                result.row++;
	                result.column = 0;
	            } else {
	                result.column++;
	            }
	            curChar++;
	        }
	        return result;
	    };
	    SurveyTextWorker.prototype.getAtArray = function (objects) {
	        var result = [];
	        for (var i = 0; i < objects.length; i++) {
	            var obj = objects[i];
	            var pos = obj.pos;
	            if (!pos) continue;
	            result.push({ at: pos.start, obj: obj });
	            if (pos.end > 0) {
	                result.push({ at: pos.end, obj: obj });
	            }
	        }
	        return result.sort(function (el1, el2) {
	            if (el1.at > el2.at) return 1;
	            if (el1.at < el2.at) return -1;
	            return 0;
	        });
	    };
	    return SurveyTextWorker;
	}();

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// This file is based on JSON5, http://json5.org/
	// The modification for getting object and properties location 'at' were maden.
	var SurveyJSON5 = exports.SurveyJSON5 = function () {
	    function SurveyJSON5(parseType) {
	        if (parseType === void 0) {
	            parseType = 0;
	        }
	        this.parseType = parseType;
	    }
	    SurveyJSON5.prototype.parse = function (source, reviver, startFrom, endAt) {
	        if (reviver === void 0) {
	            reviver = null;
	        }
	        if (startFrom === void 0) {
	            startFrom = 0;
	        }
	        if (endAt === void 0) {
	            endAt = -1;
	        }
	        var result;
	        this.text = String(source);
	        this.at = startFrom;
	        this.endAt = endAt;
	        this.ch = ' ';
	        result = this.value();
	        this.white();
	        if (this.ch) {
	            this.error("Syntax error");
	        }
	        // If there is a reviver function, we recursively walk the new structure,
	        // passing each name/value pair to the reviver function for possible
	        // transformation, starting with a temporary root object that holds the result
	        // in an empty key. If there is not a reviver function, we simply return the
	        // result.
	        return typeof reviver === 'function' ? function walk(holder, key) {
	            var k,
	                v,
	                value = holder[key];
	            if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = walk(value, k);
	                        if (v !== undefined) {
	                            value[k] = v;
	                        } else {
	                            delete value[k];
	                        }
	                    }
	                }
	            }
	            return reviver.call(holder, key, value);
	        }({ '': result }, '') : result;
	    };
	    SurveyJSON5.prototype.error = function (m) {
	        // Call error when something is wrong.
	        var error = new SyntaxError();
	        error.message = m;
	        error["at"] = this.at;
	        throw error;
	    };
	    SurveyJSON5.prototype.next = function (c) {
	        if (c === void 0) {
	            c = null;
	        }
	        // If a c parameter is provided, verify that it matches the current character.
	        if (c && c !== this.ch) {
	            this.error("Expected '" + c + "' instead of '" + this.ch + "'");
	        }
	        // Get the this.next character. When there are no more characters,
	        // return the empty string.
	        this.ch = this.chartAt();
	        this.at += 1;
	        return this.ch;
	    };
	    SurveyJSON5.prototype.peek = function () {
	        // Get the this.next character without consuming it or
	        // assigning it to the this.ch varaible.
	        return this.chartAt();
	    };
	    SurveyJSON5.prototype.chartAt = function () {
	        if (this.endAt > -1 && this.at >= this.endAt) return '';
	        return this.text.charAt(this.at);
	    };
	    SurveyJSON5.prototype.identifier = function () {
	        // Parse an identifier. Normally, reserved words are disallowed here, but we
	        // only use this for unquoted object keys, where reserved words are allowed,
	        // so we don't check for those here. References:
	        // - http://es5.github.com/#x7.6
	        // - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
	        // - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
	        // TODO Identifiers can have Unicode "letters" in them; add support for those.
	        var key = this.ch;
	        // Identifiers must start with a letter, _ or $.
	        if (this.ch !== '_' && this.ch !== '$' && (this.ch < 'a' || this.ch > 'z') && (this.ch < 'A' || this.ch > 'Z')) {
	            this.error("Bad identifier");
	        }
	        // Subsequent characters can contain digits.
	        while (this.next() && (this.ch === '_' || this.ch === '$' || this.ch >= 'a' && this.ch <= 'z' || this.ch >= 'A' && this.ch <= 'Z' || this.ch >= '0' && this.ch <= '9')) {
	            key += this.ch;
	        }
	        return key;
	    };
	    SurveyJSON5.prototype.number = function () {
	        // Parse a number value.
	        var number,
	            sign = '',
	            string = '',
	            base = 10;
	        if (this.ch === '-' || this.ch === '+') {
	            sign = this.ch;
	            this.next(this.ch);
	        }
	        // support for Infinity (could tweak to allow other words):
	        if (this.ch === 'I') {
	            number = this.word();
	            if (typeof number !== 'number' || isNaN(number)) {
	                this.error('Unexpected word for number');
	            }
	            return sign === '-' ? -number : number;
	        }
	        // support for NaN
	        if (this.ch === 'N') {
	            number = this.word();
	            if (!isNaN(number)) {
	                this.error('expected word to be NaN');
	            }
	            // ignore sign as -NaN also is NaN
	            return number;
	        }
	        if (this.ch === '0') {
	            string += this.ch;
	            this.next();
	            if (this.ch === 'x' || this.ch === 'X') {
	                string += this.ch;
	                this.next();
	                base = 16;
	            } else if (this.ch >= '0' && this.ch <= '9') {
	                this.error('Octal literal');
	            }
	        }
	        switch (base) {
	            case 10:
	                while (this.ch >= '0' && this.ch <= '9') {
	                    string += this.ch;
	                    this.next();
	                }
	                if (this.ch === '.') {
	                    string += '.';
	                    while (this.next() && this.ch >= '0' && this.ch <= '9') {
	                        string += this.ch;
	                    }
	                }
	                if (this.ch === 'e' || this.ch === 'E') {
	                    string += this.ch;
	                    this.next();
	                    if (this.ch === '-' || this.ch === '+') {
	                        string += this.ch;
	                        this.next();
	                    }
	                    while (this.ch >= '0' && this.ch <= '9') {
	                        string += this.ch;
	                        this.next();
	                    }
	                }
	                break;
	            case 16:
	                while (this.ch >= '0' && this.ch <= '9' || this.ch >= 'A' && this.ch <= 'F' || this.ch >= 'a' && this.ch <= 'f') {
	                    string += this.ch;
	                    this.next();
	                }
	                break;
	        }
	        if (sign === '-') {
	            number = -string;
	        } else {
	            number = +string;
	        }
	        if (!isFinite(number)) {
	            this.error("Bad number");
	        } else {
	            return number;
	        }
	    };
	    SurveyJSON5.prototype.string = function () {
	        // Parse a string value.
	        var hex,
	            i,
	            string = '',
	            delim,
	            // double quote or single quote
	        uffff;
	        // When parsing for string values, we must look for ' or " and \ characters.
	        if (this.ch === '"' || this.ch === "'") {
	            delim = this.ch;
	            while (this.next()) {
	                if (this.ch === delim) {
	                    this.next();
	                    return string;
	                } else if (this.ch === '\\') {
	                    this.next();
	                    if (this.ch === 'u') {
	                        uffff = 0;
	                        for (i = 0; i < 4; i += 1) {
	                            hex = parseInt(this.next(), 16);
	                            if (!isFinite(hex)) {
	                                break;
	                            }
	                            uffff = uffff * 16 + hex;
	                        }
	                        string += String.fromCharCode(uffff);
	                    } else if (this.ch === '\r') {
	                        if (this.peek() === '\n') {
	                            this.next();
	                        }
	                    } else if (typeof SurveyJSON5.escapee[this.ch] === 'string') {
	                        string += SurveyJSON5.escapee[this.ch];
	                    } else {
	                        break;
	                    }
	                } else if (this.ch === '\n') {
	                    // unescaped newlines are invalid; see:
	                    // https://github.com/aseemk/json5/issues/24
	                    // TODO this feels special-cased; are there other
	                    // invalid unescaped chars?
	                    break;
	                } else {
	                    string += this.ch;
	                }
	            }
	        }
	        this.error("Bad string");
	    };
	    SurveyJSON5.prototype.inlineComment = function () {
	        // Skip an inline comment, assuming this is one. The current character should
	        // be the second / character in the // pair that begins this inline comment.
	        // To finish the inline comment, we look for a newline or the end of the text.
	        if (this.ch !== '/') {
	            this.error("Not an inline comment");
	        }
	        do {
	            this.next();
	            if (this.ch === '\n' || this.ch === '\r') {
	                this.next();
	                return;
	            }
	        } while (this.ch);
	    };
	    SurveyJSON5.prototype.blockComment = function () {
	        // Skip a block comment, assuming this is one. The current character should be
	        // the * character in the /* pair that begins this block comment.
	        // To finish the block comment, we look for an ending */ pair of characters,
	        // but we also watch for the end of text before the comment is terminated.
	        if (this.ch !== '*') {
	            this.error("Not a block comment");
	        }
	        do {
	            this.next();
	            while (this.ch === '*') {
	                this.next('*');
	                if (this.ch === '/') {
	                    this.next('/');
	                    return;
	                }
	            }
	        } while (this.ch);
	        this.error("Unterminated block comment");
	    };
	    SurveyJSON5.prototype.comment = function () {
	        // Skip a comment, whether inline or block-level, assuming this is one.
	        // Comments always begin with a / character.
	        if (this.ch !== '/') {
	            this.error("Not a comment");
	        }
	        this.next('/');
	        if (this.ch === '/') {
	            this.inlineComment();
	        } else if (this.ch === '*') {
	            this.blockComment();
	        } else {
	            this.error("Unrecognized comment");
	        }
	    };
	    SurveyJSON5.prototype.white = function () {
	        // Skip whitespace and comments.
	        // Note that we're detecting comments by only a single / character.
	        // This works since regular expressions are not valid JSON(5), but this will
	        // break if there are other valid values that begin with a / character!
	        while (this.ch) {
	            if (this.ch === '/') {
	                this.comment();
	            } else if (SurveyJSON5.ws.indexOf(this.ch) >= 0) {
	                this.next();
	            } else {
	                return;
	            }
	        }
	    };
	    SurveyJSON5.prototype.word = function () {
	        // true, false, or null.
	        switch (this.ch) {
	            case 't':
	                this.next('t');
	                this.next('r');
	                this.next('u');
	                this.next('e');
	                return true;
	            case 'f':
	                this.next('f');
	                this.next('a');
	                this.next('l');
	                this.next('s');
	                this.next('e');
	                return false;
	            case 'n':
	                this.next('n');
	                this.next('u');
	                this.next('l');
	                this.next('l');
	                return null;
	            case 'I':
	                this.next('I');
	                this.next('n');
	                this.next('f');
	                this.next('i');
	                this.next('n');
	                this.next('i');
	                this.next('t');
	                this.next('y');
	                return Infinity;
	            case 'N':
	                this.next('N');
	                this.next('a');
	                this.next('N');
	                return NaN;
	        }
	        this.error("Unexpected '" + this.ch + "'");
	    };
	    SurveyJSON5.prototype.array = function () {
	        // Parse an array value.
	        var array = [];
	        if (this.ch === '[') {
	            this.next('[');
	            this.white();
	            while (this.ch) {
	                if (this.ch === ']') {
	                    this.next(']');
	                    return array; // Potentially empty array
	                }
	                // ES5 allows omitting elements in arrays, e.g. [,] and
	                // [,null]. We don't allow this in JSON5.
	                if (this.ch === ',') {
	                    this.error("Missing array element");
	                } else {
	                    array.push(this.value());
	                }
	                this.white();
	                // If there's no comma after this value, this needs to
	                // be the end of the array.
	                if (this.ch !== ',') {
	                    this.next(']');
	                    return array;
	                }
	                this.next(',');
	                this.white();
	            }
	        }
	        this.error("Bad array");
	    };
	    SurveyJSON5.prototype.object = function () {
	        // Parse an object value.
	        var key,
	            start,
	            isFirstProperty = true,
	            object = {};
	        if (this.parseType > 0) {
	            object[SurveyJSON5.positionName] = { start: this.at - 1 };
	        }
	        if (this.ch === '{') {
	            this.next('{');
	            this.white();
	            start = this.at - 1;
	            while (this.ch) {
	                if (this.ch === '}') {
	                    if (this.parseType > 0) {
	                        object[SurveyJSON5.positionName].end = start;
	                    }
	                    this.next('}');
	                    return object; // Potentially empty object
	                }
	                // Keys can be unquoted. If they are, they need to be
	                // valid JS identifiers.
	                if (this.ch === '"' || this.ch === "'") {
	                    key = this.string();
	                } else {
	                    key = this.identifier();
	                }
	                this.white();
	                if (this.parseType > 1) {
	                    object[SurveyJSON5.positionName][key] = { start: start, valueStart: this.at };
	                }
	                this.next(':');
	                object[key] = this.value();
	                if (this.parseType > 1) {
	                    start = this.at - 1;
	                    object[SurveyJSON5.positionName][key].valueEnd = start;
	                    object[SurveyJSON5.positionName][key].end = start;
	                }
	                this.white();
	                // If there's no comma after this pair, this needs to be
	                // the end of the object.
	                if (this.ch !== ',') {
	                    if (this.parseType > 1) {
	                        object[SurveyJSON5.positionName][key].valueEnd--;
	                        object[SurveyJSON5.positionName][key].end--;
	                    }
	                    if (this.parseType > 0) {
	                        object[SurveyJSON5.positionName].end = this.at - 1;
	                    }
	                    this.next('}');
	                    return object;
	                }
	                if (this.parseType > 1) {
	                    object[SurveyJSON5.positionName][key].valueEnd--;
	                    if (!isFirstProperty) {
	                        object[SurveyJSON5.positionName][key].end--;
	                    }
	                }
	                this.next(',');
	                this.white();
	                isFirstProperty = false;
	            }
	        }
	        this.error("Bad object");
	    };
	    SurveyJSON5.prototype.value = function () {
	        // Parse a JSON value. It could be an object, an array, a string, a number,
	        // or a word.
	        this.white();
	        switch (this.ch) {
	            case '{':
	                return this.object();
	            case '[':
	                return this.array();
	            case '"':
	            case "'":
	                return this.string();
	            case '-':
	            case '+':
	            case '.':
	                return this.number();
	            default:
	                return this.ch >= '0' && this.ch <= '9' ? this.number() : this.word();
	        }
	    };
	    SurveyJSON5.prototype.stringify = function (obj, replacer, space) {
	        if (replacer === void 0) {
	            replacer = null;
	        }
	        if (space === void 0) {
	            space = null;
	        }
	        if (replacer && typeof replacer !== "function" && !this.isArray(replacer)) {
	            throw new Error('Replacer must be a function or an array');
	        }
	        this.replacer = replacer;
	        this.indentStr = this.getIndent(space);
	        this.objStack = [];
	        // special case...when undefined is used inside of
	        // a compound object/array, return null.
	        // but when top-level, return undefined
	        var topLevelHolder = { "": obj };
	        if (obj === undefined) {
	            return this.getReplacedValueOrUndefined(topLevelHolder, '', true);
	        }
	        return this.internalStringify(topLevelHolder, '', true);
	    };
	    SurveyJSON5.prototype.getIndent = function (space) {
	        if (space) {
	            if (typeof space === "string") {
	                return space;
	            } else if (typeof space === "number" && space >= 0) {
	                return this.makeIndent(" ", space, true);
	            }
	        }
	        return "";
	    };
	    SurveyJSON5.prototype.getReplacedValueOrUndefined = function (holder, key, isTopLevel) {
	        var value = holder[key];
	        // Replace the value with its toJSON value first, if possible
	        if (value && value.toJSON && typeof value.toJSON === "function") {
	            value = value.toJSON();
	        }
	        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
	        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
	        if (typeof this.replacer === "function") {
	            return this.replacer.call(holder, key, value);
	        } else if (this.replacer) {
	            if (isTopLevel || this.isArray(holder) || this.replacer.indexOf(key) >= 0) {
	                return value;
	            } else {
	                return undefined;
	            }
	        } else {
	            return value;
	        }
	    };
	    SurveyJSON5.prototype.isWordChar = function (char) {
	        return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= '0' && char <= '9' || char === '_' || char === '$';
	    };
	    SurveyJSON5.prototype.isWordStart = function (char) {
	        return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char === '_' || char === '$';
	    };
	    SurveyJSON5.prototype.isWord = function (key) {
	        if (typeof key !== 'string') {
	            return false;
	        }
	        if (!this.isWordStart(key[0])) {
	            return false;
	        }
	        var i = 1,
	            length = key.length;
	        while (i < length) {
	            if (!this.isWordChar(key[i])) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    };
	    // polyfills
	    SurveyJSON5.prototype.isArray = function (obj) {
	        if (Array.isArray) {
	            return Array.isArray(obj);
	        } else {
	            return Object.prototype.toString.call(obj) === '[object Array]';
	        }
	    };
	    SurveyJSON5.prototype.isDate = function (obj) {
	        return Object.prototype.toString.call(obj) === '[object Date]';
	    };
	    SurveyJSON5.prototype.isNaN = function (val) {
	        return typeof val === 'number' && val !== val;
	    };
	    SurveyJSON5.prototype.checkForCircular = function (obj) {
	        for (var i = 0; i < this.objStack.length; i++) {
	            if (this.objStack[i] === obj) {
	                throw new TypeError("Converting circular structure to JSON");
	            }
	        }
	    };
	    SurveyJSON5.prototype.makeIndent = function (str, num, noNewLine) {
	        if (noNewLine === void 0) {
	            noNewLine = false;
	        }
	        if (!str) {
	            return "";
	        }
	        // indentation no more than 10 chars
	        if (str.length > 10) {
	            str = str.substring(0, 10);
	        }
	        var indent = noNewLine ? "" : "\n";
	        for (var i = 0; i < num; i++) {
	            indent += str;
	        }
	        return indent;
	    };
	    SurveyJSON5.prototype.escapeString = function (str) {
	        // If the string contains no control characters, no quote characters, and no
	        // backslash characters, then we can safely slap some quotes around it.
	        // Otherwise we must also replace the offending characters with safe escape
	        // sequences.
	        SurveyJSON5.escapable.lastIndex = 0;
	        return SurveyJSON5.escapable.test(str) ? '"' + str.replace(SurveyJSON5.escapable, function (a) {
	            var c = SurveyJSON5.meta[a];
	            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + '"' : '"' + str + '"';
	    };
	    // End
	    SurveyJSON5.prototype.internalStringify = function (holder, key, isTopLevel) {
	        var buffer, res;
	        // Replace the value, if necessary
	        var obj_part = this.getReplacedValueOrUndefined(holder, key, isTopLevel);
	        if (obj_part && !this.isDate(obj_part)) {
	            // unbox objects
	            // don't unbox dates, since will turn it into number
	            obj_part = obj_part.valueOf();
	        }
	        switch (typeof obj_part === 'undefined' ? 'undefined' : _typeof(obj_part)) {
	            case "boolean":
	                return obj_part.toString();
	            case "number":
	                if (isNaN(obj_part) || !isFinite(obj_part)) {
	                    return "null";
	                }
	                return obj_part.toString();
	            case "string":
	                return this.escapeString(obj_part.toString());
	            case "object":
	                if (obj_part === null) {
	                    return "null";
	                } else if (this.isArray(obj_part)) {
	                    this.checkForCircular(obj_part);
	                    buffer = "[";
	                    this.objStack.push(obj_part);
	                    for (var i = 0; i < obj_part.length; i++) {
	                        res = this.internalStringify(obj_part, i, false);
	                        buffer += this.makeIndent(this.indentStr, this.objStack.length);
	                        if (res === null || typeof res === "undefined") {
	                            buffer += "null";
	                        } else {
	                            buffer += res;
	                        }
	                        if (i < obj_part.length - 1) {
	                            buffer += ",";
	                        } else if (this.indentStr) {
	                            buffer += "\n";
	                        }
	                    }
	                    this.objStack.pop();
	                    buffer += this.makeIndent(this.indentStr, this.objStack.length, true) + "]";
	                } else {
	                    this.checkForCircular(obj_part);
	                    buffer = "{";
	                    var nonEmpty = false;
	                    this.objStack.push(obj_part);
	                    for (var prop in obj_part) {
	                        if (obj_part.hasOwnProperty(prop)) {
	                            var value = this.internalStringify(obj_part, prop, false);
	                            isTopLevel = false;
	                            if (typeof value !== "undefined" && value !== null) {
	                                buffer += this.makeIndent(this.indentStr, this.objStack.length);
	                                nonEmpty = true;
	                                var propKey = this.isWord(prop) ? prop : this.escapeString(prop);
	                                buffer += propKey + ":" + (this.indentStr ? ' ' : '') + value + ",";
	                            }
	                        }
	                    }
	                    this.objStack.pop();
	                    if (nonEmpty) {
	                        buffer = buffer.substring(0, buffer.length - 1) + this.makeIndent(this.indentStr, this.objStack.length) + "}";
	                    } else {
	                        buffer = '{}';
	                    }
	                }
	                return buffer;
	            default:
	                // functions and undefined should be ignored
	                return undefined;
	        }
	    };
	    SurveyJSON5.positionName = "pos";
	    SurveyJSON5.escapee = {
	        "'": "'",
	        '"': '"',
	        '\\': '\\',
	        '/': '/',
	        '\n': '',
	        b: '\b',
	        f: '\f',
	        n: '\n',
	        r: '\r',
	        t: '\t'
	    };
	    SurveyJSON5.ws = [' ', '\t', '\r', '\n', '\v', '\f', '\xA0', '\uFEFF'];
	    // Copied from Crokford's implementation of JSON
	    // See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
	    // Begin
	    SurveyJSON5.cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	    SurveyJSON5.escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	    SurveyJSON5.meta = {
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"': '\\"',
	        '\\': '\\\\'
	    };
	    return SurveyJSON5;
	}();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyEmbedingWindow = undefined;
	
	var _json = __webpack_require__(18);
	
	var SurveyEmbedingWindow = exports.SurveyEmbedingWindow = function () {
	    function SurveyEmbedingWindow() {
	        this.surveyId = null;
	        this.surveyPostId = null;
	        this.generateValidJSON = false;
	        var self = this;
	        this.koLibraryVersion = ko.observable("knockout");
	        this.koShowAsWindow = ko.observable("page");
	        this.koScriptUsing = ko.observable("bootstrap");
	        this.koHasIds = ko.observable(false);
	        this.koLoadSurvey = ko.observable(false);
	        this.koVisibleHtml = ko.computed(function () {
	            return self.koLibraryVersion() == "react" || self.koShowAsWindow() == "page";
	        });
	        this.koLibraryVersion.subscribe(function (newValue) {
	            self.setHeadText();self.surveyEmbedingJava.setValue(self.getJavaText());
	        });
	        this.koShowAsWindow.subscribe(function (newValue) {
	            self.surveyEmbedingJava.setValue(self.getJavaText());
	        });
	        this.koScriptUsing.subscribe(function (newValue) {
	            self.setHeadText();self.surveyEmbedingJava.setValue(self.getJavaText());
	        });
	        this.koLoadSurvey.subscribe(function (newValue) {
	            self.surveyEmbedingJava.setValue(self.getJavaText());
	        });
	        this.surveyEmbedingHead = null;
	    }
	    Object.defineProperty(SurveyEmbedingWindow.prototype, "json", {
	        get: function get() {
	            return this.jsonValue;
	        },
	        set: function set(value) {
	            this.jsonValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyEmbedingWindow.prototype.show = function () {
	        if (this.surveyEmbedingHead == null) {
	            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
	            this.setHeadText();
	            var bodyEditor = this.createEditor("surveyEmbedingBody");
	            bodyEditor.setValue("<div id=\"mySurveyJSName\"></div>");
	            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
	        }
	        this.koHasIds(this.surveyId && this.surveyPostId);
	        this.surveyEmbedingJava.setValue(this.getJavaText());
	    };
	    SurveyEmbedingWindow.prototype.setHeadText = function () {
	        var str = "";
	        if (this.koLibraryVersion() == "knockout") {
	            str = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js\"></script>\n<script src=\"js/survey.ko.min.js\"></script>";
	        } else {
	            str = "<script src=\"https://fb.me/react-0.14.8.js\"></script>\n<script src= \"https://fb.me/react-dom-0.14.8.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\"></script>\n";
	            str += "<script src=\"js/survey.react.min.js\"></script>";
	        }
	        if (this.koScriptUsing() != "bootstrap") {
	            str += "\n<link href=\"css/survey.css\" type=\"text/css\" rel=\"stylesheet\" />";
	        }
	        this.surveyEmbedingHead.setValue(str);
	    };
	    SurveyEmbedingWindow.prototype.createEditor = function (elementName) {
	        var editor = ace.edit(elementName);
	        editor.setTheme("ace/theme/chrome");
	        editor.session.setMode("ace/mode/json");
	        editor.$blockScrolling = Infinity;
	        editor.setShowPrintMargin(false);
	        editor.renderer.setShowGutter(false);
	        editor.setReadOnly(true);
	        return editor;
	    };
	    SurveyEmbedingWindow.prototype.getJavaText = function () {
	        var isOnPage = this.koShowAsWindow() == "page";
	        var str = this.koLibraryVersion() == "knockout" ? this.getKnockoutJavaText(isOnPage) : this.getReactJavaText(isOnPage);
	        return this.getSetCss() + str;
	    };
	    SurveyEmbedingWindow.prototype.getSetCss = function () {
	        if (this.koScriptUsing() != "bootstrap") return "";
	        return "Survey.Survey.cssType = \"bootstrap\";\n";
	    };
	    SurveyEmbedingWindow.prototype.getKnockoutJavaText = function (isOnPage) {
	        var text = isOnPage ? "var survey = new Survey.Survey(\n" : "var surveyWindow = new Survey.SurveyWindow(\n";
	        text += this.getJsonText();
	        text += ");\n";
	        if (!isOnPage) {
	            text += "surveyWindow.";
	        }
	        var saveFunc = this.getSaveFuncCode();
	        text += "survey.onComplete.add(function (s) {\n" + saveFunc + "\n });\n";
	        if (isOnPage) {
	            text += "survey.render(\"mySurveyJSName\");";
	        } else {
	            text += "//By default Survey.title is used.\n";
	            text += "//surveyWindow.title = \"My Survey Window Title.\";\n";
	            text += "surveyWindow.show();";
	        }
	        return text;
	    };
	    SurveyEmbedingWindow.prototype.getReactJavaText = function (isOnPage) {
	        var saveFunc = this.getSaveFuncCode();
	        var sendResultText = "var surveySendResult = function (s) {\n" + saveFunc + "\n });\n";
	        var name = isOnPage ? "ReactSurvey" : "ReactSurveyWindow";
	        var jsonText = "var surveyJson = " + this.getJsonText() + "\n\n";
	        var text = jsonText + sendResultText + "ReactDOM.render(\n<" + name + " json={surveyJson} onComplete={surveySendResult} />, \n document.getElementById(\"mySurveyJSName\"));";
	        return text;
	    };
	    SurveyEmbedingWindow.prototype.getSaveFuncCode = function () {
	        if (this.koHasIds()) return "survey.sendResult('" + this.surveyPostId + "');";
	        return "alert(\"The results are:\" + JSON.stringify(s.data));";
	    };
	    SurveyEmbedingWindow.prototype.getJsonText = function () {
	        if (this.koHasIds() && this.koLoadSurvey()) {
	            return "{ surveyId: '" + this.surveyId + "'}";
	        }
	        if (this.generateValidJSON) return JSON.stringify(this.json);
	        return new _json.SurveyJSON5().stringify(this.json);
	    };
	    return SurveyEmbedingWindow;
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyVerbChangePageItem = exports.SurveyVerbChangeTypeItem = exports.SurveyVerbItem = exports.SurveyVerbs = undefined;
	
	var _editorLocalization = __webpack_require__(7);
	
	var _surveyHelper = __webpack_require__(8);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SurveyVerbs = exports.SurveyVerbs = function () {
	    function SurveyVerbs(onModifiedCallback) {
	        this.onModifiedCallback = onModifiedCallback;
	        this.koVerbs = ko.observableArray();
	        this.koHasVerbs = ko.observable();
	        var classes = Survey.JsonObject.metaData.getChildrenClasses("selectbase", true);
	        this.choicesClasses = [];
	        for (var i = 0; i < classes.length; i++) {
	            this.choicesClasses.push(classes[i].name);
	        }
	    }
	    Object.defineProperty(SurveyVerbs.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        set: function set(value) {
	            if (this.survey == value) return;
	            this.surveyValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyVerbs.prototype, "obj", {
	        get: function get() {
	            return this.objValue;
	        },
	        set: function set(value) {
	            if (this.objValue == value) return;
	            this.objValue = value;
	            this.buildVerbs();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyVerbs.prototype.buildVerbs = function () {
	        var array = [];
	        var objType = _surveyHelper.SurveyHelper.getObjectType(this.obj);
	        if (objType == _surveyHelper.ObjType.Question) {
	            var question = this.obj;
	            if (this.survey.pages.length > 1) {
	                array.push(new SurveyVerbChangePageItem(this.survey, question, this.onModifiedCallback));
	            }
	            if (this.choicesClasses.indexOf(question.getType()) > -1) {
	                array.push(new SurveyVerbChangeTypeItem(this.survey, question, this.onModifiedCallback));
	            }
	        }
	        this.koVerbs(array);
	        this.koHasVerbs(array.length > 0);
	    };
	    return SurveyVerbs;
	}();
	var SurveyVerbItem = exports.SurveyVerbItem = function () {
	    function SurveyVerbItem(survey, question, onModifiedCallback) {
	        this.survey = survey;
	        this.question = question;
	        this.onModifiedCallback = onModifiedCallback;
	        this.koItems = ko.observableArray();
	        this.koSelectedItem = ko.observable();
	    }
	    Object.defineProperty(SurveyVerbItem.prototype, "text", {
	        get: function get() {
	            return "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyVerbItem;
	}();
	var SurveyVerbChangeTypeItem = exports.SurveyVerbChangeTypeItem = function (_super) {
	    __extends(SurveyVerbChangeTypeItem, _super);
	    function SurveyVerbChangeTypeItem(survey, question, onModifiedCallback) {
	        _super.call(this, survey, question, onModifiedCallback);
	        this.survey = survey;
	        this.question = question;
	        this.onModifiedCallback = onModifiedCallback;
	        var classes = Survey.JsonObject.metaData.getChildrenClasses("selectbase", true);
	        var array = [];
	        for (var i = 0; i < classes.length; i++) {
	            array.push({ value: classes[i].name, text: _editorLocalization.editorLocalization.getString("qt." + classes[i].name) });
	        }
	        this.koItems(array);
	        this.koSelectedItem(question.getType());
	        var self = this;
	        this.koSelectedItem.subscribe(function (newValue) {
	            self.changeType(newValue);
	        });
	    }
	    Object.defineProperty(SurveyVerbChangeTypeItem.prototype, "text", {
	        get: function get() {
	            return _editorLocalization.editorLocalization.getString("pe.verbChangeType");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyVerbChangeTypeItem.prototype.changeType = function (questionType) {
	        if (questionType == this.question.getType()) return;
	        var page = this.survey.getPageByQuestion(this.question);
	        var index = page.questions.indexOf(this.question);
	        var newQuestion = Survey.QuestionFactory.Instance.createQuestion(questionType, this.question.name);
	        var jsonObj = new Survey.JsonObject();
	        var json = jsonObj.toJsonObject(this.question);
	        jsonObj.toObject(json, newQuestion);
	        page.removeQuestion(this.question);
	        page.addQuestion(newQuestion, index);
	        if (this.onModifiedCallback) this.onModifiedCallback();
	    };
	    return SurveyVerbChangeTypeItem;
	}(SurveyVerbItem);
	var SurveyVerbChangePageItem = exports.SurveyVerbChangePageItem = function (_super) {
	    __extends(SurveyVerbChangePageItem, _super);
	    function SurveyVerbChangePageItem(survey, question, onModifiedCallback) {
	        _super.call(this, survey, question, onModifiedCallback);
	        this.survey = survey;
	        this.question = question;
	        this.onModifiedCallback = onModifiedCallback;
	        var array = [];
	        for (var i = 0; i < this.survey.pages.length; i++) {
	            var page = this.survey.pages[i];
	            array.push({ value: page, text: _surveyHelper.SurveyHelper.getObjectName(page) });
	        }
	        this.koItems(array);
	        this.prevPage = this.survey.getPageByQuestion(question);
	        this.koSelectedItem(this.prevPage);
	        var self = this;
	        this.koSelectedItem.subscribe(function (newValue) {
	            self.changePage(newValue);
	        });
	    }
	    Object.defineProperty(SurveyVerbChangePageItem.prototype, "text", {
	        get: function get() {
	            return _editorLocalization.editorLocalization.getString("pe.verbChangePage");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyVerbChangePageItem.prototype.changePage = function (newPage) {
	        if (newPage == null || newPage == this.prevPage) return;
	        this.prevPage.removeQuestion(this.question);
	        newPage.addQuestion(this.question);
	        if (this.onModifiedCallback) this.onModifiedCallback();
	    };
	    return SurveyVerbChangePageItem;
	}(SurveyVerbItem);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.UndoRedoItem = exports.SurveyUndoRedo = undefined;
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyUndoRedo = exports.SurveyUndoRedo = function () {
	    function SurveyUndoRedo() {
	        this.index = -1;
	        this.maximumCount = 10;
	        this.items = [];
	        this.koCanUndo = ko.observable(false);
	        this.koCanRedo = ko.observable(false);
	    }
	    SurveyUndoRedo.prototype.clear = function () {
	        this.items = [];
	        this.koCanUndo(false);
	        this.koCanRedo(false);
	    };
	    SurveyUndoRedo.prototype.setCurrent = function (survey, selectedObjName) {
	        var item = new UndoRedoItem();
	        item.surveyJSON = new Survey.JsonObject().toJsonObject(survey);
	        item.selectedObjName = selectedObjName;
	        if (this.index < this.items.length - 1) {
	            this.items.splice(this.index + 1);
	        }
	        this.items.push(item);
	        this.removeOldData();
	        this.index = this.items.length - 1;
	        this.updateCanUndoRedo();
	    };
	    SurveyUndoRedo.prototype.undo = function () {
	        if (!this.canUndo) return null;
	        return this.doUndoRedo(-1);
	    };
	    SurveyUndoRedo.prototype.redo = function () {
	        if (!this.canRedo) return null;
	        return this.doUndoRedo(1);
	    };
	    SurveyUndoRedo.prototype.updateCanUndoRedo = function () {
	        this.koCanUndo(this.canUndo);
	        this.koCanRedo(this.canRedo);
	    };
	    SurveyUndoRedo.prototype.doUndoRedo = function (dIndex) {
	        this.index += dIndex;
	        this.updateCanUndoRedo();
	        return this.index >= 0 && this.index < this.items.length ? this.items[this.index] : null;
	    };
	    Object.defineProperty(SurveyUndoRedo.prototype, "canUndo", {
	        get: function get() {
	            return this.index >= 1 && this.index < this.items.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyUndoRedo.prototype, "canRedo", {
	        get: function get() {
	            return this.items.length > 1 && this.index < this.items.length - 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyUndoRedo.prototype.removeOldData = function () {
	        if (this.items.length - 1 < this.maximumCount) return;
	        this.items.splice(0, this.items.length - this.maximumCount - 1);
	    };
	    return SurveyUndoRedo;
	}();
	var UndoRedoItem = exports.UndoRedoItem = function () {
	    function UndoRedoItem() {}
	    return UndoRedoItem;
	}();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyEditor = undefined;
	
	var _editorLocalization = __webpack_require__(7);
	
	var _objectEditor = __webpack_require__(10);
	
	var _pagesEditor = __webpack_require__(16);
	
	var _surveyEmbedingWindow = __webpack_require__(19);
	
	var _surveyObjects = __webpack_require__(23);
	
	var _objectVerbs = __webpack_require__(20);
	
	var _textWorker = __webpack_require__(17);
	
	var _undoredo = __webpack_require__(21);
	
	var _surveyHelper = __webpack_require__(8);
	
	var _dragdrophelper = __webpack_require__(1);
	
	var _json = __webpack_require__(18);
	
	var _templateEditorKo = __webpack_require__(24);
	
	var _template_page = __webpack_require__(25);
	
	var _template_question = __webpack_require__(26);
	
	var _surveyKnockout = __webpack_require__(2);
	
	var Survey = _interopRequireWildcard(_surveyKnockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyEditor = exports.SurveyEditor = function () {
	    function SurveyEditor(renderedElement, options) {
	        if (renderedElement === void 0) {
	            renderedElement = null;
	        }
	        if (options === void 0) {
	            options = null;
	        }
	        this.stateValue = "";
	        this.dragDropHelper = null;
	        this.surveyId = null;
	        this.surveyPostId = null;
	        this.alwaySaveTextInPropertyEditors = false;
	        this.saveNo = 0;
	        this.timeoutId = -1;
	        this.options = options;
	        this.questionTypes = this.getQuestionTypes();
	        this.koCopiedQuestions = ko.observableArray();
	        this.koCanDeleteObject = ko.observable(false);
	        var self = this;
	        this.koState = ko.observable();
	        this.koShowSaveButton = ko.observable(false);
	        this.koShowOptions = ko.observable(false);
	        this.koTestSurveyWidth = ko.observable("100%");
	        this.saveButtonClick = function () {
	            self.doSave();
	        };
	        this.koObjects = ko.observableArray();
	        this.koSelectedObject = ko.observable();
	        this.koSelectedObject.subscribe(function (newValue) {
	            self.selectedObjectChanged(newValue != null ? newValue.value : null);
	        });
	        this.koGenerateValidJSON = ko.observable(this.options && this.options.generateValidJSON);
	        this.koGenerateValidJSON.subscribe(function (newValue) {
	            if (!self.options) self.options = {};
	            self.options.generateValidJSON = newValue;
	            if (self.generateValidJSONChangedCallback) self.generateValidJSONChangedCallback(newValue);
	        });
	        this.surveyObjects = new _surveyObjects.SurveyObjects(this.koObjects, this.koSelectedObject);
	        this.undoRedo = new _undoredo.SurveyUndoRedo();
	        this.surveyVerbs = new _objectVerbs.SurveyVerbs(function () {
	            self.setModified();
	        });
	        this.selectedObjectEditor = new _objectEditor.SurveyObjectEditor(this.options);
	        this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
	            self.onPropertyValueChanged(options.property, options.object, options.newValue);
	        });
	        this.pagesEditor = new _pagesEditor.SurveyPagesEditor(function () {
	            self.addPage();
	        }, function (page) {
	            self.surveyObjects.selectObject(page);
	        }, function (indexFrom, indexTo) {
	            self.movePage(indexFrom, indexTo);
	        }, function (page) {
	            self.deleteCurrentObject();
	        });
	        this.surveyEmbeding = new _surveyEmbedingWindow.SurveyEmbedingWindow();
	        this.koViewType = ko.observable("designer");
	        this.koIsShowDesigner = ko.computed(function () {
	            return self.koViewType() == "designer";
	        });
	        this.selectDesignerClick = function () {
	            self.showDesigner();
	        };
	        this.selectEditorClick = function () {
	            self.showJsonEditor();
	        };
	        this.selectTestClick = function () {
	            self.showTestSurvey();
	        };
	        this.selectEmbedClick = function () {
	            self.showEmbedEditor();
	        };
	        this.generateValidJSONClick = function () {
	            self.koGenerateValidJSON(true);
	        };
	        this.generateReadableJSONClick = function () {
	            self.koGenerateValidJSON(false);
	        };
	        this.runSurveyClick = function () {
	            self.showLiveSurvey();
	        };
	        this.embedingSurveyClick = function () {
	            self.showSurveyEmbeding();
	        };
	        this.deleteObjectClick = function () {
	            self.deleteCurrentObject();
	        };
	        this.draggingQuestion = function (questionType, e) {
	            self.doDraggingQuestion(questionType, e);
	        };
	        this.clickQuestion = function (questionType) {
	            self.doClickQuestion(questionType);
	        };
	        this.draggingCopiedQuestion = function (item, e) {
	            self.doDraggingCopiedQuestion(item.json, e);
	        };
	        this.clickCopiedQuestion = function (item) {
	            self.doClickCopiedQuestion(item.json);
	        };
	        this.dragEnd = function (item, e) {
	            self.dragDropHelper.end();
	        };
	        this.doUndoClick = function () {
	            self.doUndoRedo(self.undoRedo.undo());
	        };
	        this.doRedoClick = function () {
	            self.doUndoRedo(self.undoRedo.redo());
	        };
	        if (renderedElement) {
	            this.render(renderedElement);
	        }
	    }
	    Object.defineProperty(SurveyEditor.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyEditor.prototype.render = function (element) {
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
	        element.innerHTML = _templateEditorKo.html;
	        self.applyBinding();
	    };
	    SurveyEditor.prototype.loadSurvey = function (surveyId) {
	        var self = this;
	        new Survey.dxSurveyService().loadSurvey(surveyId, function (success, result, response) {
	            if (success && result) {
	                self.text = JSON.stringify(result);
	            }
	        });
	    };
	    Object.defineProperty(SurveyEditor.prototype, "text", {
	        get: function get() {
	            if (this.koIsShowDesigner()) return this.getSurveyTextFromDesigner();
	            return this.jsonEditor != null ? this.jsonEditor.getValue() : "";
	        },
	        set: function set(value) {
	            this.textWorker = new _textWorker.SurveyTextWorker(value);
	            if (this.textWorker.isJsonCorrect) {
	                this.initSurvey(new Survey.JsonObject().toJsonObject(this.textWorker.survey));
	                this.showDesigner();
	                this.setUndoRedoCurrentState(true);
	            } else {
	                this.setTextValue(value);
	                this.koViewType("editor");
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyEditor.prototype, "state", {
	        get: function get() {
	            return this.stateValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyEditor.prototype.setState = function (value) {
	        this.stateValue = value;
	        this.koState(this.state);
	    };
	    SurveyEditor.prototype.doSave = function () {
	        this.setState("saving");
	        if (this.saveSurveyFunc) {
	            this.saveNo++;
	            var self = this;
	            this.saveSurveyFunc(this.saveNo, function doSaveCallback(no, isSuccess) {
	                self.setState("saved");
	                if (self.saveNo == no) {
	                    if (isSuccess) self.setState("saved");
	                }
	            });
	        }
	    };
	    SurveyEditor.prototype.setModified = function () {
	        this.setState("modified");
	        this.setUndoRedoCurrentState();
	    };
	    SurveyEditor.prototype.setUndoRedoCurrentState = function (clearState) {
	        if (clearState === void 0) {
	            clearState = false;
	        }
	        if (clearState) {
	            this.undoRedo.clear();
	        }
	        var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
	        this.undoRedo.setCurrent(this.surveyValue, selObj ? selObj.name : null);
	    };
	    Object.defineProperty(SurveyEditor.prototype, "saveSurveyFunc", {
	        get: function get() {
	            return this.saveSurveyFuncValue;
	        },
	        set: function set(value) {
	            this.saveSurveyFuncValue = value;
	            this.koShowSaveButton(value != null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyEditor.prototype, "showOptions", {
	        get: function get() {
	            return this.koShowOptions();
	        },
	        set: function set(value) {
	            this.koShowOptions(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyEditor.prototype.setTextValue = function (value) {
	        this.isProcessingImmediately = true;
	        if (this.jsonEditor) {
	            this.jsonEditor.setValue(value);
	            this.jsonEditor.renderer.updateFull(true);
	        }
	        this.processJson(value);
	        this.isProcessingImmediately = false;
	    };
	    SurveyEditor.prototype.addPage = function () {
	        var name = _surveyHelper.SurveyHelper.getNewPageName(this.survey.pages);
	        var page = this.surveyValue.addNewPage(name);
	        this.addPageToUI(page);
	        this.setModified();
	    };
	    SurveyEditor.prototype.getLocString = function (str) {
	        return _editorLocalization.editorLocalization.getString(str);
	    };
	    SurveyEditor.prototype.getQuestionTypes = function () {
	        var allTypes = Survey.QuestionFactory.Instance.getAllTypes();
	        if (!this.options || !this.options.questionTypes || !this.options.questionTypes.length) return allTypes;
	        var result = [];
	        for (var i = 0; i < this.options.questionTypes.length; i++) {
	            var questionType = this.options.questionTypes[i];
	            if (allTypes.indexOf(questionType) > -1) {
	                result.push(questionType);
	            }
	        }
	        return result;
	    };
	    SurveyEditor.prototype.movePage = function (indexFrom, indexTo) {
	        var page = this.survey.pages[indexFrom];
	        this.survey.pages.splice(indexFrom, 1);
	        this.survey.pages.splice(indexTo, 0, page);
	        this.pagesEditor.survey = this.survey;
	        this.surveyObjects.selectObject(page);
	        this.setModified();
	    };
	    SurveyEditor.prototype.addPageToUI = function (page) {
	        this.pagesEditor.survey = this.surveyValue;
	        this.surveyObjects.addPage(page);
	    };
	    SurveyEditor.prototype.onQuestionAdded = function (question) {
	        var page = this.survey.getPageByQuestion(question);
	        this.surveyObjects.addQuestion(page, question);
	        this.survey.render();
	    };
	    SurveyEditor.prototype.onQuestionRemoved = function (question) {
	        this.surveyObjects.removeObject(question);
	        this.survey.render();
	    };
	    SurveyEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
	        var isDefault = property.isDefaultValue(newValue);
	        obj[property.name] = newValue;
	        if (property.name == "name") {
	            this.surveyObjects.nameChanged(obj);
	            if (_surveyHelper.SurveyHelper.getObjectType(obj) == _surveyHelper.ObjType.Page) {
	                this.pagesEditor.changeName(obj);
	            }
	        }
	        this.setModified();
	        this.survey.render();
	    };
	    SurveyEditor.prototype.doUndoRedo = function (item) {
	        this.initSurvey(item.surveyJSON);
	        if (item.selectedObjName) {
	            var selObj = this.findObjByName(item.selectedObjName);
	            if (selObj) {
	                this.surveyObjects.selectObject(selObj);
	            }
	        }
	        this.setState(this.undoRedo.koCanUndo() ? "modified" : "saved");
	    };
	    SurveyEditor.prototype.findObjByName = function (name) {
	        var page = this.survey.getPageByName(name);
	        if (page) return page;
	        var question = this.survey.getQuestionByName(name);
	        if (question) return question;
	        return null;
	    };
	    SurveyEditor.prototype.canSwitchViewType = function (newType) {
	        if (newType && this.koViewType() == newType) return false;
	        if (this.koViewType() != "editor" || !this.textWorker) return true;
	        if (!this.textWorker.isJsonCorrect) {
	            alert(this.getLocString("ed.correctJSON"));
	            return false;
	        }
	        this.initSurvey(new Survey.JsonObject().toJsonObject(this.textWorker.survey));
	        return true;
	    };
	    SurveyEditor.prototype.showDesigner = function () {
	        if (!this.canSwitchViewType("designer")) return;
	        this.koViewType("designer");
	    };
	    SurveyEditor.prototype.showJsonEditor = function () {
	        if (this.koViewType() == "editor") return;
	        this.jsonEditor.setValue(this.getSurveyTextFromDesigner());
	        this.jsonEditor.focus();
	        this.koViewType("editor");
	    };
	    SurveyEditor.prototype.showTestSurvey = function () {
	        if (!this.canSwitchViewType(null)) return;
	        this.showLiveSurvey();
	        this.koViewType("test");
	    };
	    SurveyEditor.prototype.showEmbedEditor = function () {
	        if (!this.canSwitchViewType("embed")) return;
	        this.showSurveyEmbeding();
	        this.koViewType("embed");
	    };
	    SurveyEditor.prototype.getSurveyTextFromDesigner = function () {
	        var json = new Survey.JsonObject().toJsonObject(this.survey);
	        if (this.options && this.options.generateValidJSON) return JSON.stringify(json, null, 1);
	        return new _json.SurveyJSON5().stringify(json, null, 1);
	    };
	    SurveyEditor.prototype.selectedObjectChanged = function (obj) {
	        var canDeleteObject = false;
	        this.selectedObjectEditor.selectedObject = obj;
	        this.surveyVerbs.obj = obj;
	        var objType = _surveyHelper.SurveyHelper.getObjectType(obj);
	        if (objType == _surveyHelper.ObjType.Page) {
	            this.survey.currentPage = obj;
	            canDeleteObject = this.survey.pages.length > 1;
	        }
	        if (objType == _surveyHelper.ObjType.Question) {
	            this.survey["setselectedQuestion"](obj);
	            canDeleteObject = true;
	            this.survey.currentPage = this.survey.getPageByQuestion(this.survey["selectedQuestionValue"]);
	        } else {
	            this.survey["setselectedQuestion"](null);
	        }
	        this.koCanDeleteObject(canDeleteObject);
	    };
	    SurveyEditor.prototype.applyBinding = function () {
	        if (this.renderedElement == null) return;
	        ko.cleanNode(this.renderedElement);
	        ko.applyBindings(this, this.renderedElement);
	        this.surveyjs = document.getElementById("surveyjs");
	        if (this.surveyjs) {
	            var self = this;
	            this.surveyjs.onkeydown = function (e) {
	                if (!e) return;
	                if (e.keyCode == 46) self.deleteQuestion();
	                if (e.keyCode == 38 || e.keyCode == 40) {
	                    self.selectQuestion(e.keyCode == 38);
	                }
	            };
	        }
	        this.jsonEditor = ace.edit("surveyjsJSONEditor");
	        this.surveyjsExample = document.getElementById("surveyjsExample");
	        this.initSurvey(new _json.SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
	        this.setUndoRedoCurrentState(true);
	        this.surveyValue.mode = "designer";
	        this.surveyValue.render(this.surveyjs);
	        this.initJsonEditor();
	        _textWorker.SurveyTextWorker.newLineChar = this.jsonEditor.session.doc.getNewLineCharacter();
	    };
	    SurveyEditor.prototype.initJsonEditor = function () {
	        var self = this;
	        this.jsonEditor.setTheme("ace/theme/chrome");
	        this.jsonEditor.session.setMode("ace/mode/json");
	        this.jsonEditor.$blockScrolling = Infinity;
	        this.jsonEditor.setShowPrintMargin(false);
	        this.jsonEditor.getSession().on("change", function () {
	            self.onJsonEditorChanged();
	        });
	        this.jsonEditor.getSession().setUseWorker(true);
	    };
	    SurveyEditor.prototype.initSurvey = function (json) {
	        var self = this;
	        this.surveyValue = new Survey.Survey();
	        this.dragDropHelper = new _dragdrophelper.DragDropHelper(this.survey, function () {
	            self.setModified();
	        });
	        this.surveyValue["dragDropHelper"] = this.dragDropHelper;
	        this.surveyValue["setJsonObject"](json); //TODO
	        if (this.surveyValue.isEmpty) {
	            this.surveyValue = new Survey.Survey(new _json.SurveyJSON5().parse(SurveyEditor.defaultNewSurveyText));
	        }
	        this.survey.mode = "designer";
	        this.survey.render(this.surveyjs);
	        this.surveyObjects.survey = this.survey;
	        this.pagesEditor.survey = this.survey;
	        this.pagesEditor.setSelectedPage(this.survey.currentPage);
	        this.surveyVerbs.survey = this.survey;
	        this.surveyValue["onSelectedQuestionChanged"].add(function (sender, options) {
	            self.surveyObjects.selectObject(sender["selectedQuestionValue"]);
	        });
	        this.surveyValue["onCopyQuestion"].add(function (sender, options) {
	            self.copyQuestion(self.koSelectedObject().value);
	        });
	        this.surveyValue["onFastCopyQuestion"].add(function (sender, options) {
	            self.fastCopyQuestion(self.koSelectedObject().value);
	        });
	        this.surveyValue.onProcessHtml.add(function (sender, options) {
	            options.html = self.processHtml(options.html);
	        });
	        this.surveyValue.onCurrentPageChanged.add(function (sender, options) {
	            self.pagesEditor.setSelectedPage(sender.currentPage);
	        });
	        this.surveyValue.onQuestionAdded.add(function (sender, options) {
	            self.onQuestionAdded(options.question);
	        });
	        this.surveyValue.onQuestionRemoved.add(function (sender, options) {
	            self.onQuestionRemoved(options.question);
	        });
	    };
	    SurveyEditor.prototype.processHtml = function (html) {
	        if (!html) return html;
	        var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	        while (scriptRegEx.test(html)) {
	            html = html.replace(scriptRegEx, "");
	        }
	        return html;
	    };
	    SurveyEditor.prototype.onJsonEditorChanged = function () {
	        if (this.timeoutId > -1) {
	            clearTimeout(this.timeoutId);
	        }
	        if (this.isProcessingImmediately) {
	            this.timeoutId = -1;
	        } else {
	            var self = this;
	            this.timeoutId = setTimeout(function () {
	                self.timeoutId = -1;
	                self.processJson(self.text);
	            }, SurveyEditor.updateTextTimeout);
	        }
	    };
	    SurveyEditor.prototype.processJson = function (text) {
	        this.textWorker = new _textWorker.SurveyTextWorker(text);
	        if (this.jsonEditor) {
	            this.jsonEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
	        }
	    };
	    SurveyEditor.prototype.doDraggingQuestion = function (questionType, e) {
	        this.dragDropHelper.startDragNewQuestion(e, questionType, this.getNewQuestionName());
	    };
	    SurveyEditor.prototype.doDraggingCopiedQuestion = function (json, e) {
	        this.dragDropHelper.startDragCopiedQuestion(e, this.getNewQuestionName(), json);
	    };
	    SurveyEditor.prototype.doClickQuestion = function (questionType) {
	        this.doClickQuestionCore(Survey.QuestionFactory.Instance.createQuestion(questionType, this.getNewQuestionName()));
	    };
	    SurveyEditor.prototype.doClickCopiedQuestion = function (json) {
	        var name = this.getNewQuestionName();
	        var question = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
	        new Survey.JsonObject().toObject(json, question);
	        question.name = name;
	        this.doClickQuestionCore(question);
	    };
	    SurveyEditor.prototype.getNewQuestionName = function () {
	        return _surveyHelper.SurveyHelper.getNewQuestionName(this.survey.getAllQuestions());
	    };
	    SurveyEditor.prototype.doClickQuestionCore = function (question) {
	        var page = this.survey.currentPage;
	        var index = -1;
	        if (this.survey["selectedQuestionValue"] != null) {
	            index = page.questions.indexOf(this.survey["selectedQuestionValue"]) + 1;
	        }
	        page.addQuestion(question, index);
	        this.setModified();
	    };
	    SurveyEditor.prototype.deleteQuestion = function () {
	        var question = this.getSelectedObjAsQuestion();
	        if (question) {
	            this.deleteCurrentObject();
	        }
	    };
	    SurveyEditor.prototype.selectQuestion = function (isUp) {
	        var question = this.getSelectedObjAsQuestion();
	        if (question) {
	            this.surveyObjects.selectNextQuestion(isUp);
	        }
	    };
	    SurveyEditor.prototype.getSelectedObjAsQuestion = function () {
	        var obj = this.koSelectedObject().value;
	        if (!obj) return null;
	        return _surveyHelper.SurveyHelper.getObjectType(obj) == _surveyHelper.ObjType.Question ? obj : null;
	    };
	    SurveyEditor.prototype.deleteCurrentObject = function () {
	        this.deleteObject(this.koSelectedObject().value);
	    };
	    SurveyEditor.prototype.copyQuestion = function (question) {
	        var objType = _surveyHelper.SurveyHelper.getObjectType(question);
	        if (objType != _surveyHelper.ObjType.Question) return;
	        var json = new Survey.JsonObject().toJsonObject(question);
	        json.type = question.getType();
	        var item = this.getCopiedQuestionByName(question.name);
	        if (item) {
	            item.json = json;
	        } else {
	            this.koCopiedQuestions.push({ name: question.name, json: json });
	        }
	        if (this.koCopiedQuestions().length > 3) {
	            this.koCopiedQuestions.splice(0, 1);
	        }
	    };
	    SurveyEditor.prototype.fastCopyQuestion = function (question) {
	        var json = new Survey.JsonObject().toJsonObject(question);
	        json.type = question.getType();
	        this.doClickCopiedQuestion(json);
	    };
	    SurveyEditor.prototype.getCopiedQuestionByName = function (name) {
	        var items = this.koCopiedQuestions();
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].name == name) return items[i];
	        }
	        return null;
	    };
	    SurveyEditor.prototype.deleteObject = function (obj) {
	        this.surveyObjects.removeObject(obj);
	        var objType = _surveyHelper.SurveyHelper.getObjectType(obj);
	        if (objType == _surveyHelper.ObjType.Page) {
	            this.survey.removePage(obj);
	            this.pagesEditor.removePage(obj);
	            this.setModified();
	        }
	        if (objType == _surveyHelper.ObjType.Question) {
	            this.survey.currentPage.removeQuestion(obj);
	            this.survey["setselectedQuestion"](null);
	            this.surveyObjects.selectObject(this.survey.currentPage);
	            this.setModified();
	        }
	        this.survey.render();
	    };
	    SurveyEditor.prototype.showLiveSurvey = function () {
	        var _this = this;
	        if (!this.surveyjsExample) return;
	        var json = this.getSurveyJSON();
	        if (json != null) {
	            if (json.cookieName) {
	                delete json.cookieName;
	            }
	            var survey = new Survey.Survey(json);
	            var self = this;
	            var surveyjsExampleResults = document.getElementById("surveyjsExampleResults");
	            var surveyjsExamplereRun = document.getElementById("surveyjsExamplereRun");
	            if (surveyjsExampleResults) surveyjsExampleResults.innerHTML = "";
	            if (surveyjsExamplereRun) surveyjsExamplereRun.style.display = "none";
	            survey.onComplete.add(function (sender) {
	                if (surveyjsExampleResults) surveyjsExampleResults.innerHTML = _this.getLocString("ed.surveyResults") + JSON.stringify(survey.data);if (surveyjsExamplereRun) surveyjsExamplereRun.style.display = "";
	            });
	            survey.render(this.surveyjsExample);
	        } else {
	            this.surveyjsExample.innerHTML = this.getLocString("ed.correctJSON");
	        }
	    };
	    SurveyEditor.prototype.showSurveyEmbeding = function () {
	        var json = this.getSurveyJSON();
	        this.surveyEmbeding.json = json;
	        this.surveyEmbeding.surveyId = this.surveyId;
	        this.surveyEmbeding.surveyPostId = this.surveyPostId;
	        this.surveyEmbeding.generateValidJSON = this.options && this.options.generateValidJSON;
	        this.surveyEmbeding.show();
	    };
	    SurveyEditor.prototype.getSurveyJSON = function () {
	        if (this.koIsShowDesigner()) return new Survey.JsonObject().toJsonObject(this.survey);
	        if (this.textWorker.isJsonCorrect) return new Survey.JsonObject().toJsonObject(this.textWorker.survey);
	        return null;
	    };
	    SurveyEditor.prototype.createAnnotations = function (text, errors) {
	        var annotations = new Array();
	        for (var i = 0; i < errors.length; i++) {
	            var error = errors[i];
	            var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
	            annotations.push(annotation);
	        }
	        return annotations;
	    };
	    SurveyEditor.updateTextTimeout = 1000;
	    SurveyEditor.defaultNewSurveyText = "{ pages: [{ name: 'page1'}] }";
	    return SurveyEditor;
	}();
	Survey.Survey.cssType = "bootstrap";
	new Survey.SurveyTemplateText().replaceText(_template_page.html, "page");
	new Survey.SurveyTemplateText().replaceText(_template_question.html, "question");
	Survey.Survey.prototype["onCreating"] = function () {
	    this.selectedQuestionValue = null;
	    this.onSelectedQuestionChanged = new Survey.Event();
	    this.onCopyQuestion = new Survey.Event();
	    this.onFastCopyQuestion = new Survey.Event();
	    var self = this;
	    this.copyQuestionClick = function () {
	        self.onCopyQuestion.fire(self);
	    };
	    this.fastCopyQuestionClick = function (question) {
	        self.onFastCopyQuestion.fire(self /*, question*/);
	    };
	    this.koDraggingSource = ko.observable(null);
	};
	Survey.Survey.prototype["setselectedQuestion"] = function (value) {
	    if (value == this.selectedQuestionValue) return;
	    var oldValue = this.selectedQuestionValue;
	    this.selectedQuestionValue = value;
	    if (oldValue != null) {
	        oldValue["onSelectedQuestionChanged"]();
	    }
	    if (this.selectedQuestionValue != null) {
	        this.selectedQuestionValue["onSelectedQuestionChanged"]();
	    }
	    this.onSelectedQuestionChanged.fire(this, { 'oldSelectedQuestion': oldValue, 'newSelectedQuestion': value });
	};
	Survey.Survey.prototype["getEditorLocString"] = function (value) {
	    return _editorLocalization.editorLocalization.getString(value);
	};
	Survey.Page.prototype["onCreating"] = function () {
	    var self = this;
	    this.dragEnterCounter = 0;
	    this.koDragging = ko.observable(-1);
	    this.koDraggingQuestion = ko.observable(null);
	    this.koDraggingBottom = ko.observable(false);
	    this.koDragging.subscribe(function (newValue) {
	        if (newValue < 0) {
	            self.dragEnterCounter = 0;
	            self.koDraggingQuestion(null);
	            self.koDraggingBottom(false);
	        } else {
	            var question = newValue >= 0 && newValue < self.questions.length ? self.questions[newValue] : null;
	            self.koDraggingQuestion(question);
	            self.koDraggingBottom(newValue == self.questions.length);
	        }
	    });
	    this.koDraggingQuestion.subscribe(function (newValue) {
	        if (newValue) newValue.koIsDragging(true);
	    });
	    this.koDraggingQuestion.subscribe(function (oldValue) {
	        if (oldValue) oldValue.koIsDragging(false);
	    }, this, "beforeChange");
	    this.dragEnter = function (e) {
	        e.preventDefault();self.dragEnterCounter++;self.doDragEnter(e);
	    };
	    this.dragLeave = function (e) {
	        self.dragEnterCounter--;if (self.dragEnterCounter === 0) self.doDragLeave(e);
	    };
	    this.dragDrop = function (e) {
	        self.doDrop(e);
	    };
	};
	Survey.Page.prototype["doDrop"] = function (e) {
	    var dragDropHelper = this.data["dragDropHelper"];
	    if (dragDropHelper) {
	        dragDropHelper.doDrop(e);
	    }
	};
	Survey.Page.prototype["doDragEnter"] = function (e) {
	    if (this.questions.length > 0 || this.koDragging() > 0) return;
	    var dragDropHelper = this.data["dragDropHelper"];
	    if (dragDropHelper && dragDropHelper.isSurveyDragging(e)) {
	        this.koDragging(0);
	    }
	};
	Survey.Page.prototype["doDragLeave"] = function (e) {
	    var dragDropHelper = this.data["dragDropHelper"];
	    if (dragDropHelper) {
	        dragDropHelper.doLeavePage(e);
	    }
	};
	Survey.QuestionBase.prototype["onCreating"] = function () {
	    var self = this;
	    this.dragDropHelperValue = null;
	    this.koIsDragging = ko.observable(false);
	    this.koIsDraggingSource = ko.observable(false);
	    this.dragDropHelper = function () {
	        if (self.dragDropHelperValue == null) {
	            self.dragDropHelperValue = self.data["dragDropHelper"];
	        }
	        return self.dragDropHelperValue;
	    };
	    this.dragOver = function (e) {
	        self.dragDropHelper().doDragDropOver(e, self);
	    };
	    this.dragDrop = function (e) {
	        self.dragDropHelper().doDrop(e, self);
	    };
	    this.dragStart = function (e) {
	        self.dragDropHelper().startDragQuestion(e, self.name);
	    };
	    this.dragEnd = function (e) {
	        self.dragDropHelper().end();
	    };
	    this.koIsSelected = ko.observable(false);
	    this.koOnClick = function () {
	        if (self.data == null) return;
	        self.data["setselectedQuestion"](this);
	    };
	};
	Survey.QuestionBase.prototype["onSelectedQuestionChanged"] = function () {
	    if (this.data == null) return;
	    this.koIsSelected(this.data["selectedQuestionValue"] == this);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyObjects = exports.SurveyObjectItem = undefined;
	
	var _surveyHelper = __webpack_require__(8);
	
	var SurveyObjectItem = exports.SurveyObjectItem = function () {
	    function SurveyObjectItem() {}
	    return SurveyObjectItem;
	}();
	var SurveyObjects = exports.SurveyObjects = function () {
	    function SurveyObjects(koObjects, koSelected) {
	        this.koObjects = koObjects;
	        this.koSelected = koSelected;
	    }
	    Object.defineProperty(SurveyObjects.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        set: function set(value) {
	            if (this.survey == value) return;
	            this.surveyValue = value;
	            this.rebuild();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyObjects.prototype.addPage = function (page) {
	        var pageItem = this.createPage(page);
	        var index = this.survey.pages.indexOf(page);
	        if (index > 0) {
	            var prevPage = this.survey.pages[index - 1];
	            index = this.getItemIndex(prevPage) + 1;
	            index += prevPage.questions.length;
	        } else {
	            index = 1; //0 - Survey
	        }
	        this.addItem(pageItem, index);
	        index++;
	        for (var i = 0; i < page.questions.length; i++) {
	            var item = this.createQuestion(page.questions[i]);
	            this.addItem(item, index + i);
	        }
	        this.koSelected(pageItem);
	    };
	    SurveyObjects.prototype.addQuestion = function (page, question) {
	        var index = this.getItemIndex(page);
	        if (index < 0) return;
	        var questionIndex = page.questions.indexOf(question) + 1;
	        index += questionIndex;
	        var item = this.createQuestion(question);
	        this.addItem(item, index);
	        this.koSelected(item);
	    };
	    SurveyObjects.prototype.selectObject = function (obj) {
	        var objs = this.koObjects();
	        for (var i = 0; i < objs.length; i++) {
	            if (objs[i].value == obj) {
	                this.koSelected(objs[i]);
	                return;
	            }
	        }
	    };
	    SurveyObjects.prototype.removeObject = function (obj) {
	        var index = this.getItemIndex(obj);
	        if (index < 0) return;
	        var countToRemove = 1;
	        if (_surveyHelper.SurveyHelper.getObjectType(obj) == _surveyHelper.ObjType.Page) {
	            var page = obj;
	            countToRemove += page.questions.length;
	        }
	        this.koObjects.splice(index, countToRemove);
	    };
	    SurveyObjects.prototype.nameChanged = function (obj) {
	        var index = this.getItemIndex(obj);
	        if (index < 0) return;
	        this.koObjects()[index].text(this.getText(obj));
	    };
	    SurveyObjects.prototype.selectNextQuestion = function (isUp) {
	        var question = this.getSelectedQuestion();
	        var itemIndex = this.getItemIndex(question);
	        if (itemIndex < 0) return question;
	        var objs = this.koObjects();
	        var newItemIndex = itemIndex + (isUp ? -1 : 1);
	        if (newItemIndex < objs.length && _surveyHelper.SurveyHelper.getObjectType(objs[newItemIndex].value) == _surveyHelper.ObjType.Question) {
	            itemIndex = newItemIndex;
	        } else {
	            newItemIndex = itemIndex;
	            while (newItemIndex < objs.length && _surveyHelper.SurveyHelper.getObjectType(objs[newItemIndex].value) == _surveyHelper.ObjType.Question) {
	                itemIndex = newItemIndex;
	                newItemIndex += isUp ? 1 : -1;
	            }
	        }
	        this.koSelected(objs[itemIndex]);
	    };
	    SurveyObjects.prototype.getSelectedQuestion = function () {
	        if (!this.koSelected()) return null;
	        var obj = this.koSelected().value;
	        if (!obj) return null;
	        return _surveyHelper.SurveyHelper.getObjectType(obj) == _surveyHelper.ObjType.Question ? obj : null;
	    };
	    SurveyObjects.prototype.addItem = function (item, index) {
	        if (index > this.koObjects().length) {
	            this.koObjects.push(item);
	        } else {
	            this.koObjects.splice(index, 0, item);
	        }
	    };
	    SurveyObjects.prototype.rebuild = function () {
	        var objs = [];
	        if (this.survey == null) {
	            this.koObjects(objs);
	            this.koSelected(null);
	            return;
	        }
	        objs.push(this.createItem(this.survey, "Survey"));
	        for (var i = 0; i < this.survey.pages.length; i++) {
	            var page = this.survey.pages[i];
	            objs.push(this.createPage(page));
	            for (var j = 0; j < page.questions.length; j++) {
	                objs.push(this.createQuestion(page.questions[j]));
	            }
	        }
	        this.koObjects(objs);
	        this.koSelected(this.survey);
	    };
	    SurveyObjects.prototype.createPage = function (page) {
	        return this.createItem(page, this.getText(page));
	    };
	    SurveyObjects.prototype.createQuestion = function (question) {
	        return this.createItem(question, this.getText(question));
	    };
	    SurveyObjects.prototype.createItem = function (value, text) {
	        var item = new SurveyObjectItem();
	        item.value = value;
	        item.text = ko.observable(text);
	        return item;
	    };
	    SurveyObjects.prototype.getItemIndex = function (value) {
	        var objs = this.koObjects();
	        for (var i = 0; i < objs.length; i++) {
	            if (objs[i].value == value) return i;
	        }
	        return -1;
	    };
	    SurveyObjects.prototype.getText = function (obj) {
	        var intend = SurveyObjects.intend;
	        if (_surveyHelper.SurveyHelper.getObjectType(obj) != _surveyHelper.ObjType.Page) {
	            intend += SurveyObjects.intend;
	        }
	        return intend + _surveyHelper.SurveyHelper.getObjectName(obj);
	    };
	    SurveyObjects.intend = "...";
	    return SurveyObjects;
	}();

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var html = exports.html = '<div class="svd_container">  <ul class="navbar-default container-fluid nav nav-tabs svd_menu">    <li data-bind="css: { active: koViewType() == \'designer\' }"><a data-bind="click: selectDesignerClick, text: $root.getLocString(\'ed.designer\')"></a></li>    <li data-bind="css: { active: koViewType() == \'test\' }"><a data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurvey\')"></a></li>    <li data-bind="css: { active: koViewType() == \'editor\' }"><a data-bind="click: selectEditorClick, text: $root.getLocString(\'ed.jsonEditor\')"></a></li>    <!-- <li data-bind="css: {active: koViewType() == \'embed\'}"><a data-bind="click: selectEmbedClick, text: $root.getLocString(\'ed.embedSurvey\')"></a></li> -->    <ul class="nav navbar-nav navbar-right">      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanUndo, click: doUndoClick"><span data-bind="text: $root.getLocString(\'ed.undo\')"></span></button></li>      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanRedo, click: doRedoClick"><span data-bind="text: $root.getLocString(\'ed.redo\')"></span></button></li>      <!-- <li class="svd_actions" data-bind="visible: koIsShowDesigner">        <div data-bind="visible: koShowOptions()" class="btn-group inline">          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: $root.getLocString(\'ed.options\')">Options <span class="caret"></span></button>          <ul class="dropdown-menu">            <li data-bind="css: {active: koGenerateValidJSON}"><a href="#" data-bind="click: generateValidJSONClick, text: $root.getLocString(\'ed.generateValidJSON\')"></a></li>            <li data-bind="css: {active: !koGenerateValidJSON()}"><a href="#" data-bind="click: generateReadableJSONClick, text: $root.getLocString(\'ed.generateReadableJSON\')"></a></li>          </ul>        </div>      </li> -->      <li class="svd_actions"><button type="button" class="btn btn-success btn-sm" data-bind="click: saveButtonClick, visible: koShowSaveButton" id="btn-save" data-loading-text="<i class=\'pe-circle-o-notch pe-spin pe-fw\'></i> Saving..." data-saved-text="<i class=\'pe-save pe-fw\'></i> Saved"><span data-bind="text: $root.getLocString(\'ed.saveSurvey\')"></span></button></li>      <li class="svd_actions"><button type="button" class="btn btn-default btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li>      <!-- <li class="editor-topnav-right"><button type="button" class="btn btn-danger btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li> -->    </ul>  </ul>  <div class="panel svd_content">    <div class="row svd_survey_designer" data-bind="visible: koViewType() == \'designer\'">      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 panel panel-default svd_toolbox">        <div class="btn-group-vertical" style="width:100%;padding-right:2px">          <!-- ko foreach: questionTypes -->          <div class="btn btn-default" style="text-align:left; margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickQuestion, event: { dragstart: function(el, e) { $parent.draggingQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span data-bind="css: \'icon-\' + $data"></span>            <span class="svd_toolbox_item_text" data-bind="text: $root.getLocString(\'qt.\' + $data)"></span>          </div>          <!-- /ko -->          <!-- ko foreach: koCopiedQuestions -->          <div class="btn btn-default" style="text-align:left;margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickCopiedQuestion, event: { dragstart: function(el, e) { $parent.draggingCopiedQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span class="icon-default"></span>            <span class="svd_toolbox_item_text" data-bind="text: name"></span>          </div>          <!-- /ko -->        </div>      </div>      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 svd_editors">        <div class="svd_pages_editor" data-bind="template: { name: \'pageeditor\', data: pagesEditor }"></div>        <div class="svd_questions_editor" id="scrollableDiv">          <div id="surveyjs"></div>        </div>      </div>      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel panel-default svd_properties">        <div class="panel-heading input-group">          <div class="custom-select">            <select class="form-control input-sm" data-bind="options: koObjects, optionsText: \'text\', value: koSelectedObject"></select>          </div>          <div class="input-group-btn">            <button class="btn btn-default" type="button" data-bind="enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString(\'ed.delSelObject\')}"><i class="pe-remove"></i></button>          </div>        </div>        <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>        <div class="panel-footer" data-bind="visible: surveyVerbs.koHasVerbs">          <div data-bind="template: { name: \'objectverbs\', data: surveyVerbs }"></div>        </div>      </div>    </div>    <div id="surveyjsJSONEditor" class="svd_json_editor" data-bind="visible: koViewType() == \'editor\'"></div>    <div id="surveyjsTest" data-bind="visible: koViewType() == \'test\', style: {width: koTestSurveyWidth}">      <!-- <select class="form-control" data-bind="value: koTestSurveyWidth">        <option value="100%" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'100%\'"></option>        <option value="1200px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1200px\'"></option>        <option value="1000px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1000px\'"></option>        <option value="800px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'800px\'"></option>        <option value="600px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'600px\'"></option>        <option value="400px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'400px\'"></option>      </select> -->      <div id="surveyjsExample"></div>      <div id="surveyjsExampleResults"></div>      <button id="surveyjsExamplereRun" data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurveyAgain\')" style="display:none">Test Again</button>    </div>    <!-- <div id="surveyjsEmbed" data-bind="visible: koViewType() == \'embed\'">      <div data-bind="template: { name: \'surveyembeding\', data: surveyEmbeding }"></div>    </div> -->  </div></div><script type="text/html" id="objecteditor">  <table class="table svd_table-nowrap">    <tbody data-bind="foreach: koProperties">      <tr data-bind="click: $parent.changeActiveProperty($data), css: {\'active\': $parent.koActiveProperty() == $data}">        <td data-bind="text: displayName, attr: {title: title}" width="50%" style="font-family:ubuntu; font-size:10px"></td>        <td width="50%" style="font-family:boon;font-size:12px;color:#555">          <span data-bind="text: koText, visible: $parent.koActiveProperty() != $data && (koText() || $data.editorType == \'boolean\'), attr: { title: koText }" style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden"></span>          <div data-bind="visible: $parent.koActiveProperty() == $data || (!koText() && $data.editorType != \'boolean\')">            <!-- ko template: { name: \'propertyeditor-\' + editorType, data: $data } -->            <!-- /ko -->          </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="objectverbs">  <!-- ko foreach: koVerbs -->    <div class="row">      <div class="input-group">        <span class="input-group-addon input-sm" data-bind="text: text"></span>        <select class="form-control input-sm" data-bind="options: koItems, optionsText: \'text\', optionsValue: \'value\', value: koSelectedItem"></select>      </div>    </div>  <!-- /ko --></script><script type="text/html" id="pageeditor">  <ul class="nav nav-tabs" data-bind="tabs: true">    <!-- ko foreach: koPages -->    <li data-bind="css: { active: koSelected()}, event: { keydown: function(el, e) { $parent.keyDown(el, e); }, dragstart: function(el, e) { $parent.dragStart(el); return true; }, dragover: function(el, e) { $parent.dragOver(el); }, dragend: function(el, e) { $parent.dragEnd(); }, drop: function(el, e) { $parent.dragDrop(el); } }">      <a class="svd_page_nav" data-bind="click: $parent.selectPageClick"><span data-bind="text: title"></span></a>    </li>    <!-- /ko -->    <li><button class="btn btn-default svd_add_new_page_btn" data-bind="click: addNewPageClick"><i class="pe-plus"></i></button></li>  </ul></script><script type="text/html" id="surveyembeding">  <div class="row">    <div class="col-sm-3">      <select data-bind="value: koLibraryVersion" class="form-control input-sm">        <option value="knockout" data-bind="text: $root.getLocString(\'ew.knockout\')"></option>        <option value="react" data-bind="text: $root.getLocString(\'ew.react\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koScriptUsing" class="form-control input-sm">        <option value="bootstrap" data-bind="text: $root.getLocString(\'ew.bootstrap\')"></option>        <option value="standard" data-bind="text: $root.getLocString(\'ew.standard\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koShowAsWindow" class="form-control input-sm">        <option value="page" data-bind="text: $root.getLocString(\'ew.showOnPage\')"></option>        <option value="window" data-bind="text: $root.getLocString(\'ew.showInWindow\')"></option>      </select>    </div>    <div class="col-sm-3">      <label data-bind="visible: koHasIds">        <input type="checkbox" data-bind="checked: koLoadSurvey">        <small data-bind="text: $root.getLocString(\'ew.loadFromServer\')"></small>      </label>    </div>  </div>  <br>  <div class="row">    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleScript\')"></h4>      <div id="surveyEmbedingHead" style="height:70px;width:100%"></div>    </div>    <div class="col-sm-12" data-bind="visible: koVisibleHtml">      <h4 data-bind="text: $root.getLocString(\'ew.titleHtml\')"></h4>      <div id="surveyEmbedingBody" style="height:30px;width:100%"></div>    </div>    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleJavaScript\')"></h4>      <div id="surveyEmbedingJava" style="height:300px;width:100%"></div>    </div>  </div></script><script type="text/html" id="propertyeditor-boolean">  <input class="form-control input-sm" type="checkbox" data-bind="checked: koValue"></script><script type="text/html" id="propertyeditor-dropdown">  <div class="custom-select">    <select class="form-control input-sm" data-bind="value: koValue, options: choices" style="width:100%"></select>  </div></script><script type="text/html" id="propertyeditor-html">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-html">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-itemvalues">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-itemvalues">  <div style="overflow-y: auto; overflow-x:hidden; max-height:400px">    <table class="table">      <thead>        <tr>          <th></th>          <th data-bind="text: $root.getLocString(\'pe.value\')"></th>          <th data-bind="text: $root.getLocString(\'pe.text\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td>            <div class="btn-group" role="group">              <button type="button" class="btn btn-xs" data-bind="visible: $index() > 0, click: $parent.onMoveUpClick"><i class="pe-arrow-up" aria-hidden="true"></i></button>              <button type="button" class="btn btn-xs" style="float:none" data-bind="visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick"><i class="pe-arrow-down" aria-hidden="true"></i></button>            </div>          </td>          <td>            <input type="text" class="form-control" data-bind="value: koValue" style="width:150px">            <div class="alert alert-danger no-padding" role="alert" data-bind="visible:koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>          </td>          <td><input type="text" class="form-control" data-bind="value: koText" style="width:150px"></td>          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->      </tbody>    </table>  </div>  <div class="row btn-toolbar">    <input type="button" class="btn btn-sm btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">    <input type="button" class="btn btn-sm btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">  </div></script><script type="text/html" id="propertyeditor-matrixdropdowncolumns">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-matrixdropdowncolumns">  <table class="table">    <thead>      <tr>        <th data-bind="text: $root.getLocString(\'pe.required\')"></th>        <th data-bind="text: $root.getLocString(\'pe.cellType\')"></th>        <th data-bind="text: $root.getLocString(\'pe.name\')"></th>        <th data-bind="text: $root.getLocString(\'pe.title\')"></th>        <th></th>      </tr>    </thead>    <tbody>      <!-- ko foreach: koItems -->      <tr>        <td>          <a data-bind="visible: koHasChoices, click: onShowChoicesClick"><span class="glyphicon" data-bind="css: {\'glyphicon-chevron-down\': !koShowChoices(), \'glyphicon-chevron-up\': koShowChoices()}"></span></a>          <input type="checkbox" data-bind="checked: koIsRequired">        </td>        <td>          <select class="form-control input-sm" data-bind="options: cellTypeChoices, value: koCellType" style="width:110px"></select>        </td>        <td>          <input type="text" class="form-control input-sm" data-bind="value: koName" style="width:100px">          <div class="alert alert-danger no-padding" role="alert" data-bind="visible: koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>        </td>        <td><input type="text" class="form-control input-sm" data-bind="value: koTitle" style="width:120px"></td>        <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>      </tr>      <tr data-bind="visible: koShowChoices() && koHasChoices()">        <td colspan="4" style="border-top-style:none">          <div class="form-group">            <label class="control-label col-sm-3" data-bind="text:$root.getLocString(\'pe.hasOther\')"></label>            <div class="col-sm-2"><input type="checkbox" data-bind="checked: koHasOther"></div>            <div class="col-sm-7" data-bind="visible: !koHasColCount()"></div>            <label class="control-label col-sm-3" data-bind="visible: koHasColCount, text: $root.getLocString(\'pe.colCount\')"></label>            <select class="form-control input-sm col-sm-4" data-bind="visible: koHasColCount, options: colCountChoices, value: koColCount" style="width:110px"></select>          </div>          <div class="modal-body svd_notopbottompaddings">            <!-- ko template: { name: \'propertyeditorcontent-itemvalues\', data: choicesEditor } -->            <!-- /ko -->          </div>        </td>      </tr>      <!-- /ko -->      <tr>        <td colspan="3">        <div class="row btn-toolbar">          <input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">          <input type="button" class="btn btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">        </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="propertyeditor-modal">  <div class="input-group" data-bind="visible: !editor.isEditable">    <span data-bind="text: koText"></span>    <div class="input-group-btn"><button type="button" class="btn btn-default" data-toggle="modal" style="padding:2px" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div class="input-group" data-bind="visible: editor.isEditable" style="display:table">    <input class="form-control input-sm" type="text" data-bind="value: koValue" style="display:table-cell; width:100%">    <div class="input-group-btn"><button type="button" class="btn btn-default" style="display:table-cell; padding:2px" data-toggle="modal" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div data-bind="attr: { id : modalName }" class="modal fade" role="dialog">    <div class="modal-dialog">      <div class="modal-content">        <div class="modal-header">          <button type="button" class="close" data-dismiss="modal">&times;</button>          <h4 class="modal-title" data-bind="text: editor.title"></h4>        </div>        <div class="modal-body svd_notopbottompaddings">          <!-- ko template: { name: \'propertyeditorcontent-\' + editorType, data: editor } -->          <!-- /ko -->        </div>        <div class="modal-footer">          <input type="button" class="btn btn-primary" data-bind="click: editor.onApplyClick, value: $root.getLocString(\'pe.apply\')" style="width:100px">          <input type="button" class="btn btn-default" data-bind="click: editor.onResetClick, value: $root.getLocString(\'pe.reset\')" style="width:100px">          <input type="button" class="btn btn-default" data-dismiss="modal" data-bind="value: $root.getLocString(\'pe.close\')" style="width:100px">        </div>      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-number">  <input class="form-control input-sm" type="number" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-restfull">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-restfull">  <form>    <div class="form-group">      <label for="url">Url:</label>      <input id="url" type="text" data-bind="value: koUrl" class="form-control">    </div>    <div class="form-group">      <label for="path">Path:</label>      <input id="path" type="text" data-bind="value: koPath" class="form-control">    </div>    <div class="form-group">      <label for="valueName">valueName:</label>      <input id="valueName" type="text" data-bind="value: koValueName" class="form-control">    </div>    <div class="form-group">      <label for="titleName">titleName:</label>      <input id="titleName" type="text" data-bind="value: koTitleName" class="form-control">    </div>  </form>  <div id="restfullSurvey" style="width:100%;height:150px"></div></script><script type="text/html" id="propertyeditor-string">  <input class="form-control input-sm" type="text" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-text">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-text">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-textitems">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-textitems">  <div class="panel">    <table class="table">      <thead>        <tr>          <th data-bind="text: $root.getLocString(\'pe.name\')"></th>          <th data-bind="text: $root.getLocString(\'pe.title\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td><input type="text" class="form-control" data-bind="value: koName" style="width:200px"></td>          <td><input type="text" class="form-control" data-bind="value: koTitle" style="width:200px"></td>          <!-- <td><input type="button" class="btn btn-xs btn-danger" data-bind="click: $parent.onDeleteClick, value: $root.getLocString(\'pe.delete\')"></td> -->          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->        <tr>          <td colspan="4"><input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')"></td>        </tr>      </tbody>    </table>  </div></script><script type="text/html" id="propertyeditor-triggers">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-triggers">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableTriggers -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'koText\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn btn-default"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="visible: koSelected() == null">      <div data-bind="visible: koQuestions().length == 0, text: $root.getLocString(\'pe.noquestions\')"></div>      <div data-bind="visible: koQuestions().length > 0, text: $root.getLocString(\'pe.createtrigger\')"></div>    </div>    <div data-bind="visible: koSelected() != null">      <div data-bind="with: koSelected">        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-4">            <span data-bind="text: $root.getLocString(\'pe.triggerOn\')"></span><select class="form-control input-sm" data-bind="options: $parent.koQuestions, value: koName"></select>          </div>          <div class="col-sm-4">            <select class="form-control input-sm" data-bind="options: availableOperators, optionsValue: \'name\', optionsText: \'text\', value: koOperator"></select>          </div>          <div class="col-sm-4">            <input class="form-control input-sm" type="text" data-bind="visible: koRequireValue, value: koValue">          </div>        </div>        <!-- ko if: koType() == \'visibletrigger\' -->        <div class="row">          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: pages } -->            <!-- /ko -->          </div>          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: questions } -->            <!-- /ko -->          </div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'completetrigger\' -->        <div class="row">          <div style="margin: 10px" data-bind="text: $root.getLocString(\'pe.triggerCompleteText\')"></div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'setvaluetrigger\' -->        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-6">            <span data-bind="text: $root.getLocString(\'pe.triggerSetToName\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetToName">          </div>          <div class="col-sm-1">          </div>          <div class="col-sm-5">            <span data-bind="text: $root.getLocString(\'pe.triggerSetValue\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetValue">          </div>        </div>          <div class="row form-inline" style="margin-top:10px">            <div class="col-sm-12">              <input type="checkbox" data-bind="checked: koisVariable"> <span data-bind="text: $root.getLocString(\'pe.triggerIsVariable\')"></span>            </div>          </div>          <!-- /ko -->      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-triggersitems">  <div class="panel no-margins no-padding">    <div class="panel-heading">      <span data-bind="text: title"></span>    </div>    <div class="input-group">      <select class="form-control" multiple="multiple" data-bind="options: koChoosen, value: koChoosenSelected"></select>      <span class="input-group-btn" style="vertical-align:top"><button type="button" data-bind="enable: koChoosenSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>    </div>    <div class="input-group" style="margin-top:5px">      <select class="form-control input-sm" data-bind="options: koObjects, value: koSelected"></select>      <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onAddClick" style="width:40px" class="btn"><i class="pe-plus"></i></button></span>    </div>  </div></script><script type="text/html" id="propertyeditor-validators">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-validators">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableValidators -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'text\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>  </div></script>';

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var html = exports.html = '<div data-bind="event: { dragenter: function(el, e) { dragEnter(e); }, dragleave: function(el, e) { dragLeave(e); }, dragover: function(el, e) { return false; }, drop: function(el, e) { dragDrop(e); }}">  <h4 data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle"></h4>  <!-- ko foreach: { data: rows, as: \'row\'} -->  <div class="svd_question_container" data-bind="visible: row.koVisible, css: $root.css.row">    <!-- ko foreach: { data: row.questions, as: \'question\' , afterRender: row.koAfterRender } -->      <div data-bind="visible: question.koIsDragging">        <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->        <!-- /ko -->      </div>      <!-- ko template: { name: \'survey-question\', data: question, templateOptions: { isDragging: false } } -->      <!-- /ko -->    <!-- /ko -->  </div>  <!-- /ko -->  <div class="well" data-bind="visible: $root.isDesignMode && questions.length == 0">    <span data-bind="visible: !koDraggingBottom(), text: $root.getEditorLocString(\'survey.dropQuestion\')"></span>    <div data-bind="visible: koDraggingBottom">      <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->      <!-- /ko -->    </div>  </div>  <div data-bind="visible: questions.length > 0 && koDraggingBottom()">    <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->    <!-- /ko -->  </div></div>';

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var html = exports.html = '<div class="svd_question" style="vertical-align:top" data-bind="style: { display: question.koVisible()|| $root.isDesignMode ? \'inline-block\': \'none\', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr : { id: id, draggable: $root.isDesignMode }, click: $root.isDesignMode ? koOnClick: null, event: { dragstart:function(el, e){ dragStart(e); return true; }, dragover: function(el, e) { if(!question.isDragging) dragOver(e); }, dragend: function(el, e) { dragEnd(e); }, drop: function(el, e) { dragDrop(e); } }, css: { svd_q_design_border: $root.isDesignMode, svd_q_selected : koIsSelected, \'well well-sm\': $root.isDesignMode }">  <div data-bind="css: { svd_q_design: $root.isDesignMode }, style: { opacity: question.koIsDraggingSource() ? 0.4 : 1 }">    <div class="alert alert-danger" role="alert" data-bind="visible: koErrors().length > 0, foreach: koErrors">      <div><i class="pe-exclamation-sign" aria-hidden="true"></i> <span data-bind="text: $data.getText()"></span></div>    </div>    <!-- ko if: question.hasTitle -->    <h5 data-bind="visible: $root.questionTitleLocation == \'top\', text: question.koTitle(), css: $root.css.question.title"></h5>    <!-- /ko -->    <!-- ko template: { name: \'survey-question-\' + question.getType(), data: question } -->    <!-- /ko -->    <div data-bind="visible: question.hasComment">      <div data-bind="text: question.commentText"></div>      <div data-bind="template: { name: \'survey-comment\', data: { \'question\': question, \'visible\': true } }"></div>    </div>    <!-- ko if: question.hasTitle -->    <h5 data-bind="visible: $root.questionTitleLocation == \'bottom\', text: question.koTitle(), css: $root.css.question.title"></h5>    <!-- /ko -->  </div>  <div class="svd_question_menu" data-bind="visible: koIsSelected">    <button type="button" class="btn btn-xs dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-option-horizontal"></span></button>    <ul class="dropdown-menu">      <li><button class="btn btn-primary btn-xs" data-bind="click: $root.copyQuestionClick, text: $root.getEditorLocString(\'survey.addToToolbox\')"></button></li>      <li><button class="btn btn-primary btn-xs" data-bind="click: $root.fastCopyQuestionClick, text: $root.getEditorLocString(\'survey.copy\')"></button></li>    </ul>  </div></div>';

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMDM4NzVhYWI3MjQyZDQyYjM0OSIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImFtZFwiOlwic3VydmV5LWtub2Nrb3V0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dFdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanNvbjUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RWZXJicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5kb3JlZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVFZGl0b3Iua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVfcGFnZS5odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNyQ0E7Ozs7Ozs7OztnQ0FDNEI7Ozs7OztnQ0FBNEI7Ozs7OztnQ0FDeEI7Ozs7OztnQ0FBNkI7Ozs7OztnQ0FFN0Q7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7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QUFBQztBQUNLLGdCQUFDLENBQ1g7QUFBQztBQUNPLDZCQUFPLFVBQWYsVUFBZ0M7QUFDNUIsYUFBVSxTQUFnQixjQUFRO0FBQy9CLGFBQWEsMkJBQWMsY0FBSyxRQUFXLHNCQUFNLE1BQUU7QUFDNUMsdUJBQWlCLGNBQzNCO0FBQUM7QUFDSyxnQkFBTyxTQUFlLDJCQUFjLGNBQzlDO0FBQUM7QUF4SWEsbUJBQU0sU0FBaUI7QUF5SXpDLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7QUNsSk0sS0FBUSxzQkFBK24xQiw0bjFCOzs7Ozs7Ozs7QUNBdm8xQixLQUFRLHNCQUFvdEQsaXREOzs7Ozs7Ozs7QUNBNXRELEtBQVEsc0JBQXMzRSxtM0UiLCJmaWxlIjoic3VydmV5ZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5RWRpdG9yXCIsIFtcInN1cnZleS1rbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXkta25vY2tvdXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUVkaXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMDM4NzVhYWI3MjQyZDQyYjM0OSIsImV4cG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuLi9kcmFnZHJvcGhlbHBlclwiO1xuZXhwb3J0IHtcbiAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UsIFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yLFxuICAgIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IsIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciwgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3Jcbn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IsIFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbX1cbiAgICBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xuXG5leHBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi4vb2JqZWN0UHJvcGVydHlcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi4vcGFnZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4uL3RleHRXb3JrZXJcIjtcbmV4cG9ydCB7T2JqVHlwZSwgU3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5leHBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmV4cG9ydCB7U3VydmV5VmVyYnMsIFN1cnZleVZlcmJJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbX0gZnJvbSBcIi4uL29iamVjdFZlcmJzXCI7XG5leHBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuLi91bmRvcmVkb1wiO1xuZXhwb3J0IHtTdXJ2ZXlFZGl0b3J9IGZyb20gXCIuLi9lZGl0b3JcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcEhlbHBlciB7XG4gICAgc3RhdGljIGRhdGFTdGFydDogc3RyaW5nID0gXCJzdXJ2ZXlqcyxcIjtcbiAgICBzdGF0aWMgZHJhZ0RhdGE6IGFueSA9IHt0ZXh0OiBcIlwiLCBqc29uOiBudWxsIH07XG4gICAgc3RhdGljIHByZXZFdmVudCA9IHsgcXVlc3Rpb246IG51bGwsIHg6IC0xLCB5OiAtMSB9O1xuICAgIHByaXZhdGUgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBzY3JvbGxhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgc291cmNlSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBTdXJ2ZXkuSVN1cnZleSwgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnksIHNjcm9sbGFibGVFbE5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2sgPSBvbk1vZGlmaWVkQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoc2Nyb2xsYWJsZUVsTmFtZSA/IHNjcm9sbGFibGVFbE5hbWUgOiBcInNjcm9sbGFibGVEaXZcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIDxTdXJ2ZXkuU3VydmV5PnRoaXMuZGF0YTsgfVxuICAgIHB1YmxpYyBzdGFydERyYWdOZXdRdWVzdGlvbihldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvblR5cGU6IHN0cmluZywgcXVlc3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgcXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnREcmFnUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgbnVsbCwgcXVlc3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXJ0RHJhZ0NvcGllZFF1ZXN0aW9uKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBxdWVzdGlvbkpzb246IGFueSkge1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBudWxsLCBxdWVzdGlvbk5hbWUsIHF1ZXN0aW9uSnNvbik7XG4gICAgfVxuICAgIHB1YmxpYyBpc1N1cnZleURyYWdnaW5nKGV2ZW50OiBEcmFnRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RGF0YShldmVudCkudGV4dDtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5pbmRleE9mKERyYWdEcm9wSGVscGVyLmRhdGFTdGFydCkgPT0gMDtcbiAgICB9XG4gICAgcHVibGljIGRvRHJhZ0Ryb3BPdmVyKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcbiAgICAgICAgdmFyIHRhcmdldFF1ZXN0aW9uID0gRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGFyZ2V0UXVlc3Rpb247XG4gICAgICAgIGlmICghcXVlc3Rpb24gfHwgcXVlc3Rpb24gPT0gdGFyZ2V0UXVlc3Rpb24gfHwgIXRoaXMuaXNTdXJ2ZXlEcmFnZ2luZyhldmVudCkgfHwgdGhpcy5pc1NhbWVQbGFjZShldmVudCwgcXVlc3Rpb24pKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UXVlc3Rpb25JbmRleChldmVudCwgcXVlc3Rpb24pO1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2VJbmRleCA9PSBpbmRleCB8fCB0aGlzLnNvdXJjZUluZGV4ICsgMSA9PSBpbmRleCkgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKGluZGV4KTtcbiAgICB9XG4gICAgcHVibGljIGVuZCgpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldElzRHJhZ2dpbmdTb3VyY2UodGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKCksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKG51bGwpO1xuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oLTEpO1xuICAgICAgICB0aGlzLnNvdXJjZUluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgfVxuICAgIHB1YmxpYyBkb0Ryb3AoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UgPSBudWxsKSB7XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRhcmdldFF1ZXN0aW9uO1xuICAgICAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkSW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEluZGV4ID4gLTEgJiYgb2xkSW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVRdWVzdGlvblRvKHRhcmdldFF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGRvTGVhdmVQYWdlKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50KSByZXR1cm47XG4gICAgICAgIGlmIChldmVudC5jbGllbnRYIDw9IDAgfHwgZXZlbnQuY2xpZW50WSA8PSAwIHx8XG4gICAgICAgICAgICBldmVudC5jbGllbnRYID49IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZXZlbnQuY2xpZW50WSA+PSB0aGlzLnNjcm9sbGFibGVFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVRhcmdldFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZywganNvbjogYW55KTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIGlmICghcXVlc3Rpb25OYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRhcmdldFF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUocXVlc3Rpb25OYW1lKTtcbiAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IC0xO1xuICAgICAgICBpZiAodGFyZ2V0UXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlSW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXRRdWVzdGlvbikge1xuICAgICAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24oanNvbltcInR5cGVcIl0sIG5hbWUpO1xuICAgICAgICAgICAgICAgIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvT2JqZWN0KGpzb24sIHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5uYW1lID0gcXVlc3Rpb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXRRdWVzdGlvbiAmJiBxdWVzdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0UXVlc3Rpb24uc2V0RGF0YSh0aGlzLnN1cnZleSk7XG4gICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5yZW5kZXJXaWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SXNEcmFnZ2luZ1NvdXJjZSh0YXJnZXRRdWVzdGlvbiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRRdWVzdGlvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRJc0RyYWdnaW5nU291cmNlKHF1ZXN0aW9uOiBhbnksIHZhbDogYW55KSB7XG4gICAgICAgIGlmIChxdWVzdGlvbiAmJiBxdWVzdGlvbltcImtvSXNEcmFnZ2luZ1NvdXJjZVwiXSkgcXVlc3Rpb25bXCJrb0lzRHJhZ2dpbmdTb3VyY2VcIl0odmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRRdWVzdGlvbkluZGV4KGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG4gICAgICAgIGlmICghcXVlc3Rpb24pIHJldHVybiBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pO1xuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj5ldmVudC5jdXJyZW50VGFyZ2V0W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICB2YXIgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgICAgIGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnbGF5ZXJYJykpIHtcbiAgICAgICAgICAgIHkgPSBldmVudC5sYXllclkgLSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJvZmZzZXRUb3BcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPiBoZWlnaHQgLyAyKSBpbmRleCsrO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTYW1lUGxhY2UoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIGlmIChwcmV2LnF1ZXN0aW9uICE9IHF1ZXN0aW9uIHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwcmV2LngpID4gNSB8fCBNYXRoLmFicyhldmVudC5jbGllbnRZIC0gcHJldi55KSA+IDUpIHtcbiAgICAgICAgICAgIHByZXYucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgICAgICAgIHByZXYueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBwcmV2LnkgPSBldmVudC5jbGllbnRZO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzU2Nyb2xsU3RvcDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsRGVsYXk6IG51bWJlciA9IDMwO1xuICAgIHByaXZhdGUgc3RhdGljIFNjcm9sbE9mZnNldDogbnVtYmVyID0gMTAwO1xuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxZKGU6IERyYWdFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgdmFyIHkgPSB0aGlzLmdldFNjcm9sbGFibGVFbGVtZW50UG9zWShlKTtcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDxudW1iZXI+dGhpcy5zY3JvbGxhYmxlRWxlbWVudFtcImNsaWVudEhlaWdodFwiXTtcbiAgICAgICAgaWYgKHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb1Njcm9sbFkoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgLSB5IDwgRHJhZ0Ryb3BIZWxwZXIuU2Nyb2xsT2Zmc2V0ICYmIGhlaWdodCA+PSB5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb1Njcm9sbFkoMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb1Njcm9sbFkoc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gZWwuc2Nyb2xsVG9wICsgc3RlcDtcbiAgICAgICAgaWYgKHNjcm9sbFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gc2Nyb2xsWTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxTdG9wKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5kb1Njcm9sbFkoc3RlcCkgfSwgRHJhZ0Ryb3BIZWxwZXIuU2Nyb2xsRGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGU6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCB8fCAhZS5jdXJyZW50VGFyZ2V0KSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiBlLm9mZnNldFkgKyA8bnVtYmVyPmUuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXSAtIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IERyYWdFdmVudCB7XG4gICAgICAgIHJldHVybiBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gPyBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gOiBldmVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVRdWVzdGlvblRvKHRhcmdldFF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbiA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGFyZ2V0UXVlc3Rpb24pO1xuICAgICAgICBpZiAocGFnZSA9PSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSAmJiBpbmRleCA9PSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKSkgcmV0dXJuO1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgcGFnZS5yZW1vdmVRdWVzdGlvbih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UuYWRkUXVlc3Rpb24odGFyZ2V0UXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldERhdGFJbmZvKGV2ZW50OiBEcmFnRXZlbnQpOiBhbnkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RGF0YShldmVudCk7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciB0ZXh0ID0gZGF0YS50ZXh0LnN1YnN0cihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQubGVuZ3RoKTtcbiAgICAgICAgdmFyIGFycmF5ID0gdGV4dC5zcGxpdCgnLCcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge2pzb246IG51bGx9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFycmF5W2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICByZXN1bHRbaXRlbVswXV0gPSBpdGVtWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5qc29uID0gZGF0YS5qc29uO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcblxuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xuICAgICAgICAgICAgZWxlbWVudCA9IDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHByZXBhcmVEYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZywganNvbjogYW55ID0gbnVsbCkge1xuICAgICAgICB2YXIgc3RyID0gRHJhZ0Ryb3BIZWxwZXIuZGF0YVN0YXJ0O1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlKSBzdHIgKz0gXCJxdWVzdGlvbnR5cGU6XCIgKyBxdWVzdGlvblR5cGUgKyAnLCc7XG4gICAgICAgIHN0ciArPSBcInF1ZXN0aW9ubmFtZTpcIiArIHF1ZXN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGV2ZW50LCBzdHIsIGpzb24pO1xuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSB0aGlzLmNyZWF0ZVRhcmdldFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgcXVlc3Rpb25OYW1lLCBqc29uKTtcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGFyZ2V0UXVlc3Rpb24gPSB0YXJnZXRRdWVzdGlvbjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKHRhcmdldFF1ZXN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHRleHQ6IHN0cmluZywganNvbjogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIlRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwiY29weVwiO1xuICAgICAgICB9XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0geyB0ZXh0OiB0ZXh0LCBqc29uOiBqc29uIH07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YShldmVudDogRHJhZ0V2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcIlRleHRcIik7XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGwsIHRhcmdldFF1ZXN0aW9uOiBudWxsfTtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIHByZXYucXVlc3Rpb24gPSBudWxsO1xuICAgICAgICBwcmV2LnggPSAtMTtcbiAgICAgICAgcHJldi55ID0gLTE7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kcmFnZHJvcGhlbHBlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0RWRpdG9yOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICAgIHByaXZhdGUgc3RhdGljIGVkaXRvclJlZ2lzdGVyZWRMaXN0ID0ge307XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckVkaXRvcihuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICgpID0+IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSkge1xuICAgICAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbbmFtZV0gPSBjcmVhdG9yO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVkaXRvcihlZGl0b3JUeXBlOiBzdHJpbmcsIGZ1bmM6IChuZXdWYWx1ZTogYW55KSA9PiBhbnkpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgICAgICB2YXIgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtlZGl0b3JUeXBlXTtcbiAgICAgICAgaWYgKCFjcmVhdG9yKSBjcmVhdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5kZWZhdWx0RWRpdG9yXTtcbiAgICAgICAgdmFyIHByb3BlcnR5RWRpdG9yID0gY3JlYXRvcigpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vbkNoYW5nZWQgPSBmdW5jO1xuICAgICAgICByZXR1cm4gcHJvcGVydHlFZGl0b3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWx1ZV86IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9uQ2hhbmdlZDogKG5ld1ZhbHVlOiBhbnkpID0+IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHRocm93IFwiZWRpdG9yVHlwZSBpcyBub3QgZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy52YWx1ZV87IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZUNvcmUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlXyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VGl0bGUodmFsdWU6IHN0cmluZykgeyB9XG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHsgIHJldHVybiB2YWx1ZTsgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZHJvcGRvd25cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJib29sZWFuXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJudW1iZXJcIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJzdHJpbmdcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiYm9vbGVhblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJudW1iZXJcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2UudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0aXRlbXNcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7XG4gICAgICAgIHZhciBvYmpzID0gW107XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmpzLnB1c2goeyBuYW1lOiBpdGVtc1tpXS5rb05hbWUoKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWRpdEl0ZW0gPSB7IGtvTmFtZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBcInRleHRcIikpLCBrb1RpdGxlOiBrby5vYnNlcnZhYmxlKCkgfTtcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGVkaXRJdGVtLCBbXSk7XG4gICAgICAgIHJldHVybiBlZGl0SXRlbTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBlZGl0SXRlbSA9IHsga29OYW1lOiBrby5vYnNlcnZhYmxlKGl0ZW0ubmFtZSksIGtvVGl0bGU6IGtvLm9ic2VydmFibGUoaXRlbS50aXRsZSkgfTtcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGVkaXRJdGVtLCBpdGVtLnZhbGlkYXRvcnMpO1xuICAgICAgICByZXR1cm4gZWRpdEl0ZW07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IG5ldyBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbShlZGl0b3JJdGVtLmtvTmFtZSgpLCBlZGl0b3JJdGVtLmtvVGl0bGUoKSk7XG4gICAgICAgIGl0ZW1UZXh0LnZhbGlkYXRvcnMgPSBlZGl0b3JJdGVtLnZhbGlkYXRvcnM7XG4gICAgICAgIHJldHVybiBpdGVtVGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGl0ZW06IGFueSwgdmFsaWRhdG9yczogQXJyYXk8YW55Pikge1xuICAgICAgICBpdGVtLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLnNsaWNlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBpdGVtLnZhbGlkYXRvcnMgPSBuZXdWYWx1ZTsgaXRlbS5rb1RleHQoc2VsZi5nZXRUZXh0KG5ld1ZhbHVlLmxlbmd0aCkpOyB9O1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7XG4gICAgICAgIGl0ZW0uZWRpdG9yID0gcHJvcGVydHlFZGl0b3I7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IChuZXdWYWx1ZTogYW55KSA9PiB7IG9uSXRlbUNoYW5nZWQobmV3VmFsdWUpOyB9O1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vYmplY3QgPSBpdGVtO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci50aXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKFwiVmFsaWRhdG9yc1wiKSk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLnZhbHVlID0gaXRlbS52YWxpZGF0b3JzO1xuICAgICAgICBpdGVtLmtvVGV4dCA9IGtvLm9ic2VydmFibGUodGhpcy5nZXRUZXh0KHZhbGlkYXRvcnMubGVuZ3RoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dChsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuaXRlbXNcIilbXCJmb3JtYXRcIl0obGVuZ3RoKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRleHRpdGVtc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIHB1YmxpYyBrb0l0ZW1zOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25Nb3ZlVXBDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVEb3duQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2s6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25EZWxldGVDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoaXRlbSk7IH07XG4gICAgICAgIHNlbGYub25DbGVhckNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZUFsbCgpOyB9O1xuICAgICAgICBzZWxmLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuQWRkSXRlbSgpOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZVVwQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVVcChpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbk1vdmVEb3duQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVEb3duKGl0ZW0pOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtdO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBBZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0aGlzLmNyZWF0ZU5ld0VkaXRvckl0ZW0oKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlVXAoaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCAtIDFdO1xuICAgICAgICBhcnJbaW5kZXggLSAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbW92ZURvd24oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gYXJyLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCArIDFdO1xuICAgICAgICBhcnJbaW5kZXggKyAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLmdldEl0ZW1zRnJvbVZhbHVlKCkpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNGcm9tVmFsdWUoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlRWRpdG9ySXRlbSh2YWx1ZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgaW50ZXJuYWxJdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludGVybmFsSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oaW50ZXJuYWxJdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKGl0ZW1zKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgdGhyb3cgXCJPdmVycmlkZSAnY3JlYXRlTmV3RWRpdG9ySXRlbScgbWV0aG9kXCI7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkgeyAgcmV0dXJuIGVkaXRvckl0ZW07ICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIG9iamVjdDogYW55O1xuICAgIHB1YmxpYyB0aXRsZTogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICB9XG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZSh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkgeyB9XG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPYmplY3QodmFsdWU6IGFueSkgeyB0aGlzLm9iamVjdCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwcml2YXRlIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHRoaXMub25CZWZvcmVBcHBseSgpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0XCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodGhpcy5rb1ZhbHVlKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SHRtbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJodG1sXCI7IH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJodG1sXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SHRtbEVkaXRvcigpOyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsImV4cG9ydCB2YXIgZWRpdG9yTG9jYWxpemF0aW9uID0ge1xuICAgIGN1cnJlbnRMb2NhbGU6IFwiXCIsXG4gICAgbG9jYWxlczoge30sXG4gICAgZ2V0U3RyaW5nOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFsb2NhbGUpIGxvY2FsZSA9IHRoaXMuY3VycmVudExvY2FsZTtcbiAgICAgICAgdmFyIGxvYyA9IGxvY2FsZSA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdIDogZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RyaW5ncztcbiAgICAgICAgdmFyIHBhdGggPSBzdHJOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBvYmogPSBsb2M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jID09PSBkZWZhdWx0U3RyaW5ncykgcmV0dXJuIHBhdGhbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKHN0ck5hbWUsIFwiZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5TmFtZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eVRpdGxlOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XG4gICAgICAgIGlmIChvYmpbXCJ0aXRsZVwiXSkgcmV0dXJuIG9ialtcInRpdGxlXCJdO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqICE9PSBzdHJOYW1lKSByZXR1cm4gb2JqO1xuICAgICAgICB2YXIgcG9zID0gc3RyTmFtZS5pbmRleE9mKCdfJyk7XG4gICAgICAgIGlmIChwb3MgPCAtMSkgcmV0dXJuIG9iajtcbiAgICAgICAgc3RyTmFtZSA9IHN0ck5hbWUuc3Vic3RyKHBvcyArIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgIH0sXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBkZWZhdWx0U3RyaW5ncyA9IHtcbiAgICAvL3N1cnZleSB0ZW1wbGF0ZXNcbiAgICBzdXJ2ZXk6IHtcbiAgICAgICAgZHJvcFF1ZXN0aW9uOiBcIlBsZWFzZSBkcm9wIGEgcXVlc3Rpb24gaGVyZS5cIixcbiAgICAgICAgY29weTogXCJDb3B5XCIsXG4gICAgICAgIGFkZFRvVG9vbGJveDogXCJBZGQgdG8gdG9vbGJveFwiXG4gICAgfSxcbiAgICAvL3F1ZXN0aW9uVHlwZXNcbiAgICBxdDoge1xuICAgICAgICBjaGVja2JveDogXCJDaGVja2JveCAoTUEpXCIsXG4gICAgICAgIGNvbW1lbnQ6IFwiQ29tbWVudCAoT0UpXCIsXG4gICAgICAgIGRyb3Bkb3duOiBcIkRyb3Bkb3duIChTQSlcIixcbiAgICAgICAgZmlsZTogXCJGaWxlIFVwbG9hZFwiLFxuICAgICAgICBodG1sOiBcIkhUTUxcIixcbiAgICAgICAgbWF0cml4OiBcIkF0dHJpYnV0ZSAoU0EpXCIsXG4gICAgICAgIG1hdHJpeGRyb3Bkb3duOiBcIkF0dHJpYnV0ZSAoTUEpXCIsXG4gICAgICAgIG1hdHJpeGR5bmFtaWM6IFwiQXR0cmlidXRlIChkeW5hbWljKVwiLFxuICAgICAgICBtdWx0aXBsZXRleHQ6IFwiTXVsdGlwbGUgVGV4dCAoT0UpXCIsXG4gICAgICAgIHJhZGlvZ3JvdXA6IFwiUmFkaW8gKFNBKVwiLFxuICAgICAgICByYXRpbmc6IFwiUmF0aW5nIChTQSlcIixcbiAgICAgICAgdGV4dDogXCJUZXh0IChPRSlcIlxuICAgIH0sXG4gICAgLy9TdHJpbmdzIGluIEVkaXRvclxuICAgIGVkOiB7XG4gICAgICAgIG5ld1BhZ2VOYW1lOiBcInBhZ2VcIixcbiAgICAgICAgbmV3UXVlc3Rpb25OYW1lOiBcIlFcIixcbiAgICAgICAgdGVzdFN1cnZleTogXCJUZXN0XCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlBZ2FpbjogXCJSdW4gdGVzdCBhZ2FpblwiLFxuICAgICAgICB0ZXN0U3VydmV5V2lkdGg6IFwiU3VydmV5IHdpZHRoOiBcIixcbiAgICAgICAgZW1iZWRTdXJ2ZXk6IFwiRW1iZWQgc3VydmV5XCIsXG4gICAgICAgIHNhdmVTdXJ2ZXk6IFwiU2F2ZVwiLFxuICAgICAgICBkZXNpZ25lcjogXCJEZXNpZ25cIixcbiAgICAgICAganNvbkVkaXRvcjogXCJKU09OIGVkaXRvclwiLFxuICAgICAgICB1bmRvOiBcIlVuZG9cIixcbiAgICAgICAgcmVkbzogXCJSZWRvXCIsXG4gICAgICAgIG9wdGlvbnM6IFwiT3B0aW9uc1wiLFxuICAgICAgICBnZW5lcmF0ZVZhbGlkSlNPTjogXCJWYWxpZCBKU09OXCIsXG4gICAgICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiBcIlJlYWRhYmxlIEpTT05cIixcbiAgICAgICAgdG9vbGJveDogXCJUb29sYm94XCIsXG4gICAgICAgIGRlbFNlbE9iamVjdDogXCJEZWxldGUgc2VsZWN0ZWQgb2JqZWN0XCIsXG4gICAgICAgIGNvcnJlY3RKU09OOiBcIlBsZWFzZSBjb3JyZWN0IEpTT04uXCIsXG4gICAgICAgIHN1cnZleVJlc3VsdHM6IFwiU3VydmV5IHJlc3VsdDogXCJcbiAgICB9LFxuICAgIC8vUHJvcGVydHkgRWRpdG9yc1xuICAgIHBlOiB7XG4gICAgICAgIGFwcGx5OiBcIkFwcGx5XCIsXG4gICAgICAgIHJlc2V0OiBcIlJlc2V0XCIsXG4gICAgICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gICAgICAgIGRlbGV0ZTogXCJEZWxldGVcIixcbiAgICAgICAgYWRkTmV3OiBcIkFkZCBuZXdcIixcbiAgICAgICAgcmVtb3ZlQWxsOiBcIlJlbW92ZSBhbGxcIixcbiAgICAgICAgZWRpdDogXCJFZGl0XCIsXG4gICAgICAgIGVtcHR5OiBcIjxlbXB0eT5cIixcbiAgICAgICAgdGVzdFNlcnZpY2U6IFwiVGVzdCB0aGUgc2VydmljZVwiLFxuICAgICAgICB2YWx1ZTogXCJWYWx1ZVwiLFxuICAgICAgICB0ZXh0OiBcIlRleHRcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWQ/XCIsXG4gICAgICAgIGhhc090aGVyOiBcIkhhcyBvdGhlciBpdGVtXCIsXG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxuICAgICAgICBjZWxsVHlwZTogXCJUeXBlXCIsXG4gICAgICAgIGNvbENvdW50OiBcIkNvdW50XCIsXG4gICAgICAgIGVkaXRQcm9wZXJ0eTogXCJFZGl0IHByb3BlcnR5ICd7MH0nXCIsXG4gICAgICAgIGl0ZW1zOiBcIltpdGVtczp7MH1dXCIsXG4gICAgICAgIGVudGVyTmV3VmFsdWU6IFwiUGxlYXNlIGVudGVyIHRoZSB2YWx1ZVwiLFxuICAgICAgICBub3F1ZXN0aW9uczogXCJObyBxdWVzdGlvbiBpbiB0aGUgc3VydmV5XCIsXG4gICAgICAgIGNyZWF0ZXRyaWdnZXI6IFwiUGxlYXNlIGNyZWF0ZSBhIHRyaWdnZXJcIixcbiAgICAgICAgdHJpZ2dlck9uOiBcIk9uIFwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZTogXCJNYWtlIHBhZ2VzIHZpc2libGU6IFwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGU6IFwiTWFrZSBxdWVzdGlvbnMgdmlzaWJsZTogXCIsXG4gICAgICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6IFwiQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkXCIsXG4gICAgICAgIHRyaWdnZXJOb3RTZXQ6IFwiVGhlIHRyaWdnZXIgaXMgbm90IHNldFwiLFxuICAgICAgICB0cmlnZ2VyUnVuSWY6IFwiUnVuIGlmXCIsXG4gICAgICAgIHRyaWdnZXJTZXRUb05hbWU6IFwiQ2hhbmdlIHZhbHVlIG9mOiBcIixcbiAgICAgICAgdHJpZ2dlclNldFZhbHVlOiBcInRvOiBcIixcbiAgICAgICAgdHJpZ2dlcklzVmFyaWFibGU6IFwiRG8gbm90IHB1dCB0aGUgdmFyaWFibGUgaW50byB0aGUgc3VydmV5IHJlc3VsdFwiLFxuICAgICAgICB2ZXJiQ2hhbmdlVHlwZTogXCJDaGFuZ2UgdHlwZSBcIixcbiAgICAgICAgdmVyYkNoYW5nZVBhZ2U6IFwiQ2hhbmdlIHBhZ2UgXCJcbiAgICB9LFxuICAgIC8vT3BlcmF0b3JzXG4gICAgb3A6IHtcbiAgICAgICAgZW1wdHk6IFwiaXMgZW1wdHlcIixcbiAgICAgICAgbm90ZW1wdHk6IFwiaXMgbm90IGVtcHR5XCIsXG4gICAgICAgIGVxdWFsOiBcImVxdWFsc1wiLFxuICAgICAgICBub3RlcXVhbDogXCJub3QgZXF1YWxcIixcbiAgICAgICAgY29udGFpbnM6IFwiY29udGFpbnNcIixcbiAgICAgICAgbm90Y29udGFpbnM6IFwibm90IGNvbnRhaW5cIixcbiAgICAgICAgZ3JlYXRlcjogXCJncmVhdGVyXCIsXG4gICAgICAgIGxlc3M6IFwibGVzc1wiLFxuICAgICAgICBncmVhdGVyb3JlcXVhbDogXCJncmVhdGVyIG9yIGVxdWFsc1wiLFxuICAgICAgICBsZXNzb3JlcXVhbDogXCJsZXNzIG9yIGVxdWFsc1wiXG4gICAgfSxcbiAgICAvL0VtYmVkIHdpbmRvd1xuICAgIGV3OiB7XG4gICAgICAgIGtub2Nrb3V0OiBcIlVzZSBLbm9ja291dFwiLFxuICAgICAgICByZWFjdDogXCJVc2UgUmVhY3RcIixcbiAgICAgICAgYm9vdHN0cmFwOiBcIldpdGggYm9vdHN0cmFwXCIsXG4gICAgICAgIHN0YW5kYXJkOiBcIldpdGhvdXQgYm9vdHN0cmFwXCIsXG4gICAgICAgIHNob3dPblBhZ2U6IFwiU2hvdyBzdXJ2ZXkgb24gYSBwYWdlXCIsXG4gICAgICAgIHNob3dJbldpbmRvdzogXCJTaG93IHN1cnZleSBpbiBhIHdpbmRvd1wiLFxuICAgICAgICBsb2FkRnJvbVNlcnZlcjogXCJMb2FkIHN1cnZleSBmcm9tIGEgc2VydmVyXCIsXG4gICAgICAgIHRpdGxlU2NyaXB0OiBcIlNjcmlwdHNcIixcbiAgICAgICAgdGl0bGVIdG1sOiBcIkhUTUxcIixcbiAgICAgICAgdGl0bGVKYXZhU2NyaXB0OiBcIkphdmFTY3JpcHRcIlxuICAgIH0sXG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgcDoge1xuICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJMZWF2ZSBpdCBibGFuayBpZiBpdCBpcyB0aGUgc2FtZSBhcyAnTmFtZSdcIiB9LFxuICAgICAgICBzdXJ2ZXlfdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJJdCB3aWxsIGJlIHNob3duIG9uIGV2ZXJ5IHBhZ2VcIiB9LFxuICAgICAgICBwYWdlX3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiUGFnZSB0aXRsZVwiIH1cbiAgICB9XG59O1xuXG5lZGl0b3JMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZGVmYXVsdFN0cmluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGVudW0gT2JqVHlwZSB7IFVua25vd24sIFN1cnZleSwgUGFnZSwgUXVlc3Rpb24gfVxuZXhwb3J0IGNsYXNzIFN1cnZleUhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UGFnZU5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UXVlc3Rpb25OYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdOYW1lKG9ianM6IEFycmF5PGFueT4sIGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaGFzaCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbb2Jqc1tpXS5uYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bSA9IDE7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWhhc2hbYmFzZU5hbWUgKyBudW0udG9TdHJpbmcoKV0pIGJyZWFrO1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0VHlwZShvYmo6IGFueSk6IE9ialR5cGUge1xuICAgICAgICBpZiAoIW9iaiB8fCAhb2JqW1wiZ2V0VHlwZVwiXSkgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKCkgPT0gXCJwYWdlXCIpIHJldHVybiBPYmpUeXBlLlBhZ2U7XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwic3VydmV5XCIpIHJldHVybiBPYmpUeXBlLlN1cnZleTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBPYmpUeXBlLlF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gT2JqVHlwZS5Vbmtub3duO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdE5hbWUob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgIT0gT2JqVHlwZS5QYWdlKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGRhdGEgPSA8U3VydmV5LlN1cnZleT4oPFN1cnZleS5QYWdlPm9iaikuZGF0YTtcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5wYWdlcy5pbmRleE9mKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICByZXR1cm4gXCJbUGFnZSBcIiArIChpbmRleCArIDEpICsgXCJdXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHZhbGlkYXRvckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gbmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbGlkYXRvciA6IG51bGw7IH0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRvckNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzdXJ2ZXl2YWxpZGF0b3JcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVmFsaWRhdG9ycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoc2VsZi5rb1NlbGVjdGVkKCkpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSkgeyBzZWxmLmFkZEl0ZW0odmFsaWRhdG9yVHlwZSk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ2YWxpZGF0b3JzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGl0ZW0uZ2V0VHlwZSgpKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB2YWxpZGF0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSh2YWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsaWRhdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0odmFsaWRhdG9yVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBuZXdWYWxpZGF0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHZhbGlkYXRvclR5cGUpKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2gobmV3VmFsaWRhdG9yKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG5ld1ZhbGlkYXRvcik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsaWRhdG9yQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWxpZGF0b3JDbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb2JqOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCgpID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKCkudmFsaWRhdG9yW3Byb3BlcnR5Lm5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtIHtcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWxpZGF0b3I6IFN1cnZleS5TdXJ2ZXlWYWxpZGF0b3IpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsaWRhdG9yLmdldFR5cGUoKTtcbiAgICB9XG59XG5cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidmFsaWRhdG9yc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi9vYmplY3RQcm9wZXJ0eVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEVkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdFZhbHVlOiBhbnk7XG4gICAgcHVibGljIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMga29Qcm9wZXJ0aWVzOiBhbnk7XG4gICAgcHVibGljIGtvQWN0aXZlUHJvcGVydHk6IGFueTtcbiAgICBwdWJsaWMga29IYXNPYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyA9IHByb3BlcnR5RWRpdG9yT3B0aW9ucztcbiAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkT2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0KHZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlFZGl0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlQWN0aXZlUHJvcGVydHkocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHB1YmxpYyBPYmplY3RDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZE9iamVjdCB8fCAhdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhbXSk7XG4gICAgICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpKTtcbiAgICAgICAgcHJvcGVydGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID09IGIubmFtZSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvYmplY3RQcm9wZXJ0aWVzID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb3BFdmVudCA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5maXJlKHRoaXMsIHsgcHJvcGVydHk6IHByb3BlcnR5LnByb3BlcnR5LCBvYmplY3Q6IHByb3BlcnR5Lm9iamVjdCwgbmV3VmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5TaG93UHJvcGVydHkocHJvcGVydGllc1tpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIG9iamVjdFByb3BlcnR5ID0gbmV3IFN1cnZleU9iamVjdFByb3BlcnR5KHByb3BlcnRpZXNbaV0sIHByb3BFdmVudCwgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xuICAgICAgICAgICAgdmFyIGxvY05hbWUgPSB0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSArICdfJyArIHByb3BlcnRpZXNbaV0ubmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFByb3BlcnR5TmFtZShsb2NOYW1lKTtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eVRpdGxlKGxvY05hbWUpO1xuICAgICAgICAgICAgaWYgKCF0aXRsZSkgdGl0bGUgPSBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0aWVzLnB1c2gob2JqZWN0UHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKG9iamVjdFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkodGhpcy5nZXRQcm9wZXJ0eUVkaXRvcihcIm5hbWVcIikpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY2FuU2hvd1Byb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3F1ZXN0aW9ucycgfHwgbmFtZSA9PSAncGFnZXMnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvcGVydGllc09iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmtvUHJvcGVydGllcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXNbaV0ub2JqZWN0ID0gdGhpcy5zZWxlY3RlZE9iamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0RWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSB7XG4gICAgcHJpdmF0ZSBvYmplY3RWYWx1ZTogYW55O1xuICAgIHByaXZhdGUgaXNWYWx1ZVVwZGF0aW5nOiBib29sZWFuO1xuICAgIHByaXZhdGUgb25Qcm9wZXJ0eUNoYW5nZWQ6IFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2s7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuICAgIHB1YmxpYyBrb1RleHQ6IGFueTtcbiAgICBwdWJsaWMgbW9kYWxOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGFsTmFtZVRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyBrb0lzRGVmYXVsdDogYW55O1xuICAgIHB1YmxpYyBlZGl0b3I6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZTtcbiAgICBwdWJsaWMgZWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBiYXNlRWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IG51bGwsIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkID0gb25Qcm9wZXJ0eUNoYW5nZWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHByb3BlcnR5LnR5cGU7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMuZWRpdG9yVHlwZSwgb25JdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMgPSBwcm9wZXJ0eUVkaXRvck9wdGlvbnM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHRoaXMuZWRpdG9yLmVkaXRvclR5cGU7XG4gICAgICAgIHRoaXMubW9kYWxOYW1lID0gXCJtb2RlbEVkaXRvclwiICsgdGhpcy5lZGl0b3JUeXBlICsgdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZVRhcmdldCA9IFwiI1wiICsgdGhpcy5tb2RhbE5hbWU7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYub25rb1ZhbHVlQ2hhbmdlZChuZXdWYWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYuZ2V0VmFsdWVUZXh0KHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgICAgIHRoaXMua29Jc0RlZmF1bHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLm9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRPYmplY3QodGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKHRoaXMucHJvcGVydHkubmFtZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEodGhpcy5rb1ZhbHVlKCkpO1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQXBwbHlpbmdOZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgb25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIG9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBcHBseWluZ05ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFt0aGlzLm5hbWVdID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICE9IG51bGwgJiYgIXRoaXMuaXNWYWx1ZVVwZGF0aW5nKSB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMubmFtZV07XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZVRleHQodmFsdWUpOyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIml0ZW12YWx1ZXNcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMua29JdGVtcygpW2ldO1xuICAgICAgICAgICAgaXRlbS5rb0hhc0Vycm9yKCFpdGVtLmtvVmFsdWUoKSk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgaXRlbS5rb0hhc0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgcmV0dXJuIHsga29WYWx1ZToga28ub2JzZXJ2YWJsZSgpLCBrb1RleHQ6IGtvLm9ic2VydmFibGUoKSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbTtcbiAgICAgICAgdmFyIGl0ZW1UZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGl0ZW1WYWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW0udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBrb1ZhbHVlOiBrby5vYnNlcnZhYmxlKGl0ZW1WYWx1ZSksIGtvVGV4dDoga28ub2JzZXJ2YWJsZShpdGVtVGV4dCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycztcbiAgICAgICAgdmFyIHRleHQgPSBlZGl0b3JJdGVtLmtvVGV4dCgpO1xuICAgICAgICAvL2lmICghYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzICYmIGVkaXRvckl0ZW0ua29UZXh0KCkgPT0gZWRpdG9ySXRlbS5rb1ZhbHVlKCkpIHtcbiAgICAgICAgLy8gICAgdGV4dCA9IG51bGw7XG4gICAgICAgIC8vfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZWRpdG9ySXRlbS5rb1ZhbHVlKCksIHRleHQ6IHRleHQgfTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcIml0ZW12YWx1ZXNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yKCk7IH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtvSXRlbXMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHRoaXMua29JdGVtcygpW2ldLmhhc0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0obmV3IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbihcIlwiLCB0aGlzLm9wdGlvbnMpKTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbShpdGVtLCB0aGlzLm9wdGlvbnMpOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGNvbHVtSXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0+ZWRpdG9ySXRlbTtcbiAgICAgICAgY29sdW1JdGVtLmFwcGx5KCk7XG4gICAgICAgIHJldHVybiBjb2x1bUl0ZW0uY29sdW1uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbSB7XG4gICAgcHJpdmF0ZSBrb0Nob2ljZXM6IGFueTtcbiAgICBwdWJsaWMgY2hvaWNlc0VkaXRvcjogU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yO1xuICAgIGtvTmFtZTogYW55OyBrb1RpdGxlOiBhbnk7IGtvQ2VsbFR5cGU6IGFueTsga29TaG93Q2hvaWNlczogYW55O1xuICAgIGtvSGFzRXJyb3I6IGFueTsga29Db2xDb3VudDogYW55OyBrb0lzUmVxdWlyZWQ6IGFueTsga29IYXNPdGhlcjogYW55O1xuICAgIGtvSGFzQ2hvaWNlczogYW55OyBrb0hhc0NvbENvdW50OiBhbnk7XG4gICAgcHVibGljIG9uU2hvd0Nob2ljZXNDbGljazogYW55O1xuICAgIHB1YmxpYyBjZWxsVHlwZUNob2ljZXM6IEFycmF5PGFueT47XG4gICAgcHVibGljIGNvbENvdW50Q2hvaWNlczogQXJyYXk8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4sIHB1YmxpYyBvcHRpb25zID0gbnVsbCkge1xuICAgICAgICB0aGlzLmNlbGxUeXBlQ2hvaWNlcyA9IHRoaXMuZ2V0UHJvcGVydHlDaG9pY2VzKFwiY2VsbFR5cGVcIik7XG4gICAgICAgIHRoaXMuY29sQ291bnRDaG9pY2VzID0gdGhpcy5nZXRQcm9wZXJ0eUNob2ljZXMoXCJjb2xDb3VudFwiKTtcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgdGhpcy5rb0NlbGxUeXBlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4uY2VsbFR5cGUpO1xuICAgICAgICB0aGlzLmtvQ29sQ291bnQgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5jb2xDb3VudCk7XG4gICAgICAgIHRoaXMua29Jc1JlcXVpcmVkID0ga28ub2JzZXJ2YWJsZShjb2x1bW4uaXNSZXF1aXJlZCA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMua29IYXNPdGhlciA9IGtvLm9ic2VydmFibGUoY29sdW1uLmhhc090aGVyID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSA9PT0gY29sdW1uLnRpdGxlID8gXCJcIiA6IGNvbHVtbi50aXRsZSk7XG4gICAgICAgIHRoaXMua29TaG93Q2hvaWNlcyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvQ2hvaWNlcyA9IGtvLm9ic2VydmFibGVBcnJheShjb2x1bW4uY2hvaWNlcyk7XG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuY2hvaWNlc0VkaXRvciA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzRWRpdG9yLm9iamVjdCA9IHRoaXMuY29sdW1uO1xuICAgICAgICB0aGlzLmNob2ljZXNFZGl0b3IudmFsdWUgPSB0aGlzLmtvQ2hvaWNlcygpO1xuICAgICAgICB0aGlzLmNob2ljZXNFZGl0b3Iub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25TaG93Q2hvaWNlc0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvU2hvd0Nob2ljZXMoIXNlbGYua29TaG93Q2hvaWNlcygpKTsgfVxuICAgICAgICB0aGlzLmtvSGFzQ2hvaWNlcyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29DZWxsVHlwZSgpID09IFwiZHJvcGRvd25cIiB8fCBzZWxmLmtvQ2VsbFR5cGUoKSA9PSBcImNoZWNrYm94XCIgfHwgc2VsZi5rb0NlbGxUeXBlKCkgPT0gXCJyYWRpb2dyb3VwXCI7IH0pO1xuICAgICAgICB0aGlzLmtvSGFzQ29sQ291bnQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvQ2VsbFR5cGUoKSA9PSBcImNoZWNrYm94XCIgfHwgc2VsZi5rb0NlbGxUeXBlKCkgPT0gXCJyYWRpb2dyb3VwXCI7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMua29IYXNFcnJvcighdGhpcy5rb05hbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmtvSGFzRXJyb3IoKSB8fCB0aGlzLmNob2ljZXNFZGl0b3IuaGFzRXJyb3IoKTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLmNvbHVtbi5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4udGl0bGUgPSB0aGlzLmtvVGl0bGUoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uY2VsbFR5cGUgPSB0aGlzLmtvQ2VsbFR5cGUoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uY29sQ291bnQgPSB0aGlzLmtvQ29sQ291bnQoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uaXNSZXF1aXJlZCA9IHRoaXMua29Jc1JlcXVpcmVkKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmhhc090aGVyID0gdGhpcy5rb0hhc090aGVyKCk7XG5cbiAgICAgICAgdGhpcy5jaG9pY2VzRWRpdG9yLm9uQXBwbHlDbGljaygpO1xuICAgICAgICB0aGlzLmNvbHVtbi5jaG9pY2VzID0gdGhpcy5jaG9pY2VzRWRpdG9yLnZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFByb3BlcnR5Q2hvaWNlcyhwcm9wZXR5TmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGV0eU5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldLmNob2ljZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5TW9kYWxFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAga29Vcmw6IGFueTsga29QYXRoOiBhbnk7IGtvVmFsdWVOYW1lOiBhbnk7IGtvVGl0bGVOYW1lOiBhbnk7XG4gICAgcHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleTtcbiAgICBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29VcmwgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29QYXRoID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN1cnZleSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29Vcmwuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC51cmwgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29QYXRoLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucGF0aCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnRpdGxlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlc3RmdWxsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHJlc3RmdWxsVmFsdWUoKSB7IHJldHVybiA8U3VydmV5LkNob2ljZXNSZXN0ZnVsbD50aGlzLnZhbHVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVtcHR5XCIpO1xuICAgICAgICB2YXIgc3RyID0gdmFsdWUudXJsO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5yZXN0ZnVsbFZhbHVlO1xuICAgICAgICB0aGlzLmtvVXJsKHZhbCA/IHZhbC51cmwgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1BhdGgodmFsID8gdmFsLnBhdGggOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZSh2YWwgPyB2YWwudmFsdWVOYW1lIDogXCJcIik7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUodmFsID8gdmFsLnRpdGxlTmFtZSA6IFwiXCIpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoXCJyZXN0ZnVsbFN1cnZleVwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIHZhciB2YWwgPSBuZXcgU3VydmV5LkNob2ljZXNSZXN0ZnVsbCgpO1xuICAgICAgICB2YWwudXJsID0gdGhpcy5rb1VybCgpO1xuICAgICAgICB2YWwucGF0aCA9IHRoaXMua29QYXRoKCk7XG4gICAgICAgIHZhbC52YWx1ZU5hbWUgPSB0aGlzLmtvVmFsdWVOYW1lKCk7XG4gICAgICAgIHZhbC50aXRsZU5hbWUgPSB0aGlzLmtvVGl0bGVOYW1lKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKHZhbCk7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuKCkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNob2ljZXNCeVVybC5ydW4oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVTdXJ2ZXkoKSB7XG4gICAgICAgIHRoaXMuc3VydmV5ID0gbmV3IFN1cnZleS5TdXJ2ZXkoKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuc2hvd05hdmlnYXRpb25CdXR0b25zID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VydmV5LnNob3dRdWVzdGlvbk51bWJlcnMgPSBcIm9mZlwiO1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmFkZE5ld1BhZ2UoXCJwYWdlMVwiKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25Ecm9wZG93bj5wYWdlLmFkZE5ld1F1ZXN0aW9uKFwiZHJvcGRvd25cIiwgXCJxMVwiKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi50aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50ZXN0U2VydmljZVwiKVxuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNob2ljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKFwicmVzdGZ1bGxTdXJ2ZXlcIik7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJyZXN0ZnVsbFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb1F1ZXN0aW9uczogYW55OyBrb1BhZ2VzOiBhbnk7XG4gICAgcHVibGljIGtvU2VsZWN0ZWQ6IGFueTtcbiAgICBwdWJsaWMgYXZhaWxhYmxlVHJpZ2dlcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHRyaWdnZXJDbGFzc2VzOiBBcnJheTxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+ID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKHNlbGYua29TZWxlY3RlZCgpKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHRyaWdnZXJUeXBlKSB7IHNlbGYuYWRkSXRlbSh0cmlnZ2VyVHlwZSk7IH07XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29QYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzdXJ2ZXl0cmlnZ2VyXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVRyaWdnZXJzID0gdGhpcy5nZXRBdmFpbGFibGVUcmlnZ2VycygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidHJpZ2dlcnNcIjsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXModGhpcy5nZXROYW1lcygoPFN1cnZleS5TdXJ2ZXk+dGhpcy5vYmplY3QpLnBhZ2VzKSk7XG4gICAgICAgICAgICB0aGlzLmtvUXVlc3Rpb25zKHRoaXMuZ2V0TmFtZXMoKDxTdXJ2ZXkuU3VydmV5PnRoaXMub2JqZWN0KS5nZXRBbGxRdWVzdGlvbnMoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSXRlbSh0cmlnZ2VyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModHJpZ2dlclR5cGUpO1xuICAgICAgICB2YXIgdHJpZ2dlckl0ZW0gPSB0aGlzLmNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2godHJpZ2dlckl0ZW0pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodHJpZ2dlckl0ZW0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdHJpZ2dlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVByb3BlcnR5VHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXI+dHJpZ2dlcik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBlZGl0b3JUcmlnZ2VyID0gPFN1cnZleVByb3BlcnR5VHJpZ2dlcj5lZGl0b3JJdGVtO1xuICAgICAgICByZXR1cm4gZWRpdG9yVHJpZ2dlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyaWdnZXJDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnRyaWdnZXJDbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmFtZXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbVtcIm5hbWVcIl0pIHtcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGl0ZW1bXCJuYW1lXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUHJvcGVydHlUcmlnZ2VyKHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyKTogU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXJJdGVtID0gbnVsbDtcbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwidmlzaWJsZXRyaWdnZXJcIikge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlWaXNpYmxlVHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlPnRyaWdnZXIsIHRoaXMua29QYWdlcywgdGhpcy5rb1F1ZXN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaWdnZXIuZ2V0VHlwZSgpID09IFwic2V0dmFsdWV0cmlnZ2VyXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5U2V0VmFsdWVUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlPnRyaWdnZXIsIHRoaXMua29RdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHJpZ2dlckl0ZW0pIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJpZ2dlckl0ZW07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgcHJpdmF0ZSBvcGVyYXRvcnMgPSBbXCJlbXB0eVwiLCBcIm5vdGVtcHR5XCIsIFwiZXF1YWxcIiwgXCJub3RlcXVhbFwiLCBcImNvbnRhaW5zXCIsIFwibm90Y29udGFpbnNcIiwgXCJncmVhdGVyXCIsIFwibGVzc1wiLCBcImdyZWF0ZXJvcmVxdWFsXCIsIFwibGVzc29yZXF1YWxcIl07XG4gICAgcHJpdmF0ZSB0cmlnZ2VyVHlwZTogc3RyaW5nO1xuICAgIGF2YWlsYWJsZU9wZXJhdG9ycyA9IFtdO1xuICAgIGtvTmFtZTogYW55OyBrb09wZXJhdG9yOiBhbnk7IGtvVmFsdWU6IGFueTsga29UeXBlOiBhbnk7XG4gICAga29UZXh0OiBhbnk7IGtvSXNWYWxpZDogYW55OyBrb1JlcXVpcmVWYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlT3BlcmF0b3JzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlclR5cGUgPSB0cmlnZ2VyLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5rb1R5cGUgPSBrby5vYnNlcnZhYmxlKHRoaXMudHJpZ2dlclR5cGUpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5uYW1lKTtcbiAgICAgICAgdGhpcy5rb09wZXJhdG9yID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLm9wZXJhdG9yKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnZhbHVlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvUmVxdWlyZVZhbHVlID0ga28uY29tcHV0ZWQoKCkgPT4geyByZXR1cm4gc2VsZi5rb09wZXJhdG9yKCkgIT0gXCJlbXB0eVwiICYmIHNlbGYua29PcGVyYXRvcigpICE9IFwibm90ZW1wdHlcIjsgfSk7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28uY29tcHV0ZWQoKCkgPT4geyBpZiAoc2VsZi5rb05hbWUoKSAmJiAoIXNlbGYua29SZXF1aXJlVmFsdWUoKSB8fCBzZWxmLmtvVmFsdWUoKSkpIHJldHVybiB0cnVlOyByZXR1cm4gZmFsc2U7IH0pO1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgc2VsZi5rb05hbWUoKTsgc2VsZi5rb09wZXJhdG9yKCk7IHNlbGYua29WYWx1ZSgpOyByZXR1cm4gc2VsZi5nZXRUZXh0KCk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPlN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRoaXMudHJpZ2dlclR5cGUpO1xuICAgICAgICB0cmlnZ2VyLm5hbWUgPSB0aGlzLmtvTmFtZSgpO1xuICAgICAgICB0cmlnZ2VyLm9wZXJhdG9yID0gdGhpcy5rb09wZXJhdG9yKCk7XG4gICAgICAgIHRyaWdnZXIudmFsdWUgPSB0aGlzLmtvVmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlT3BlcmF0b3JzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMub3BlcmF0b3JzW2ldO1xuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVPcGVyYXRvcnMucHVzaCh7IG5hbWU6IG5hbWUsIHRleHQ6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvcC5cIiArIG5hbWUpIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMua29Jc1ZhbGlkKCkpIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck5vdFNldFwiKTtcbiAgICAgICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyUnVuSWZcIikgKyBcIiAnXCIgKyB0aGlzLmtvTmFtZSgpICsgXCInIFwiICsgdGhpcy5nZXRPcGVyYXRvclRleHQoKSArIHRoaXMuZ2V0VmFsdWVUZXh0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0T3BlcmF0b3JUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBvcCA9IHRoaXMua29PcGVyYXRvcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVPcGVyYXRvcnNbaV0ubmFtZSA9PSBvcCkgcmV0dXJuIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZhbHVlVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMua29SZXF1aXJlVmFsdWUoKSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBcIiBcIiArIHRoaXMua29WYWx1ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmlzaWJsZVRyaWdnZXIgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIHB1YmxpYyBwYWdlczogU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cztcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGUsIGtvUGFnZXM6IGFueSwga29RdWVzdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5wYWdlcyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZVwiKSwga29QYWdlcygpLCB0cmlnZ2VyLnBhZ2VzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyhlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck1ha2VRdWVzdGlvbnNWaXNpYmxlXCIpLCBrb1F1ZXN0aW9ucygpLCB0cmlnZ2VyLnF1ZXN0aW9ucyk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlPnN1cGVyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICAgICAgdHJpZ2dlci5wYWdlcyA9IHRoaXMucGFnZXMua29DaG9vc2VuKCk7XG4gICAgICAgIHRyaWdnZXIucXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnMua29DaG9vc2VuKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5U2V0VmFsdWVUcmlnZ2VyIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBrb1F1ZXN0aW9uczogYW55OyBrb3NldFRvTmFtZTogYW55OyBrb3NldFZhbHVlOiBhbnk7IGtvaXNWYXJpYWJsZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlLCBrb1F1ZXN0aW9uczogYW55KSB7XG4gICAgICAgIHN1cGVyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLmtvUXVlc3Rpb25zID0ga29RdWVzdGlvbnM7XG4gICAgICAgIHRoaXMua29zZXRUb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuc2V0VG9OYW1lKTtcbiAgICAgICAgdGhpcy5rb3NldFZhbHVlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnNldFZhbHVlKTtcbiAgICAgICAgdGhpcy5rb2lzVmFyaWFibGUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuaXNWYXJpYWJsZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgICAgIHRyaWdnZXIuc2V0VG9OYW1lID0gdGhpcy5rb3NldFRvTmFtZSgpO1xuICAgICAgICB0cmlnZ2VyLnNldFZhbHVlID0gdGhpcy5rb3NldFZhbHVlKCk7XG4gICAgICAgIHRyaWdnZXIuaXNWYXJpYWJsZSA9IHRoaXMua29pc1ZhcmlhYmxlKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzIHtcbiAgICBrb09iamVjdHM6IGFueTtcbiAgICBrb0Nob29zZW46IGFueTtcbiAgICBrb1NlbGVjdGVkOiBhbnk7XG4gICAga29DaG9vc2VuU2VsZWN0ZWQ6IGFueTtcbiAgICBwdWJsaWMgb25EZWxldGVDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFkZENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcsIGFsbE9iamVjdHM6IEFycmF5PHN0cmluZz4sIGNob29zZW5PYmplY3RzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMua29DaG9vc2VuID0ga28ub2JzZXJ2YWJsZUFycmF5KGNob29zZW5PYmplY3RzKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbGxPYmplY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGNob29zZW5PYmplY3RzLmluZGV4T2YoaXRlbSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cyA9IGtvLm9ic2VydmFibGVBcnJheShhcnJheSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0Nob29zZW5TZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlSXRlbSgpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYWRkSXRlbSgpOyB9XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJdGVtcyh0aGlzLmtvQ2hvb3NlblNlbGVjdGVkKCksIHRoaXMua29DaG9vc2VuLCB0aGlzLmtvT2JqZWN0cyk7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJdGVtcyh0aGlzLmtvU2VsZWN0ZWQoKSwgdGhpcy5rb09iamVjdHMsIHRoaXMua29DaG9vc2VuKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VJdGVtcyhpdGVtOiBzdHJpbmcsIHJlbW92ZWRGcm9tOiBhbnksIGFkZFRvOiBhbnkpIHtcbiAgICAgICAgcmVtb3ZlZEZyb20ucmVtb3ZlKGl0ZW0pO1xuICAgICAgICBhZGRUby5wdXNoKGl0ZW0pO1xuICAgICAgICByZW1vdmVkRnJvbS5zb3J0KCk7XG4gICAgICAgIGFkZFRvLnNvcnQoKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRyaWdnZXJzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSAocGFnZTogU3VydmV5LlBhZ2UpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVBhZ2VzRWRpdG9yIHtcbiAgICBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBrb1BhZ2VzOiBhbnk7XG4gICAga29Jc1ZhbGlkOiBhbnk7XG4gICAgc2VsZWN0UGFnZUNsaWNrOiBhbnk7XG4gICAgb25BZGROZXdQYWdlQ2FsbGJhY2s6IFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgIG9uRGVsZXRlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrO1xuICAgIGRyYWdnaW5nUGFnZTogYW55ID0gbnVsbDtcbiAgICBkcmFnU3RhcnQ6IGFueTsgZHJhZ092ZXI6IGFueTsgZHJhZ0VuZDogYW55OyBkcmFnRHJvcDogYW55OyBrZXlEb3duOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gbnVsbCwgb25TZWxlY3RQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgICAgICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrID0gbnVsbCwgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rb1BhZ2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMub25BZGROZXdQYWdlQ2FsbGJhY2sgPSBvbkFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayA9IG9uU2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayA9IG9uTW92ZVBhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZVBhZ2VDYWxsYmFjayA9IG9uRGVsZXRlUGFnZUNhbGxiYWNrO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFnZUNsaWNrID0gZnVuY3Rpb24ocGFnZUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlSXRlbS5wYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gZnVuY3Rpb24gKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHsgc2VsZi5vbktleURvd24oZWwsIGUpOyB9XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBlbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnT3ZlciA9IGZ1bmN0aW9uIChlbDogYW55KSB7ICB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZHJhZ2dpbmdQYWdlID0gbnVsbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlbDogYW55KSB7IHNlbGYubW92ZURyYWdnaW5nUGFnZVRvKGVsKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCh0aGlzLnN1cnZleVZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZFBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VzW2ldLmtvU2VsZWN0ZWQocGFnZXNbaV0ucGFnZSA9PSBwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWRkTmV3UGFnZUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlTmFtZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlQYWdlKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKClbaW5kZXhdLnRpdGxlKFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKHBhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SW5kZXhCeVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgPT0gcGFnZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMua29QYWdlcygpLmxlbmd0aCA8PSAxKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICB2YXIgcGFnZUluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYWdlc1tpXS5wYWdlICYmIHBhZ2VzW2ldLmtvU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHBhZ2VJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0NiAmJiB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKSB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKGVsLnBhZ2UpO1xuICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAzNyB8fCBlLmtleUNvZGUgPT0gMzkpICYmIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHBhZ2VJbmRleCArPSAoZS5rZXlDb2RlID09IDM3ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSBwYWdlSW5kZXggPSBwYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA+PSBwYWdlcy5sZW5ndGgpIHBhZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VJbmRleF0ucGFnZTtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZSk7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkUGFnZShwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUGFnZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyhbXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZ2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzW2ldO1xuICAgICAgICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGtvLm9ic2VydmFibGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpLCBwYWdlOiBwYWdlLCBrb1NlbGVjdGVkOiBrby5vYnNlcnZhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1BhZ2VzKHBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBtb3ZlRHJhZ2dpbmdQYWdlVG8odG9QYWdlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRvUGFnZSA9PSBudWxsIHx8IHRvUGFnZSA9PSB0aGlzLmRyYWdnaW5nUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BhZ2UgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nUGFnZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodGhpcy5kcmFnZ2luZ1BhZ2UpO1xuICAgICAgICB2YXIgaW5kZXhUbyA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodG9QYWdlKTtcbiAgICAgICAgaWYgKHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayhpbmRleCwgaW5kZXhUbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmNsYXNzIFRleHRQYXJzZXJQcm9wZXJ5IHtcbiAgICBpc0ZvdW5kOiBib29sZWFuO1xuICAgIHByb3BlcnRpZXNDb3VudDogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG4gICAgdmFsdWVTdGFydDogbnVtYmVyO1xuICAgIHZhbHVlRW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZXh0V29ya2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIG5ld0xpbmVDaGFyOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgaXNTdXJ2ZXlBc1BhZ2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0IHx8IHRoaXMudGV4dC50cmltKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJ7fVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlICE9IG51bGw7IH1cbiAgICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuanNvblZhbHVlID0gbmV3IFN1cnZleUpTT041KDEpLnBhcnNlKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmpzb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnModGhpcy5qc29uVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IuZ2V0RnVsbERlc2NyaXB0aW9uKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IHRoaXMuY3JlYXRlU3VydmV5T2JqZWN0cygpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuc3VydmV5T2JqZWN0cyk7XG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5lcnJvcnMpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUpzb25Qb3NpdGlvbnMoanNvbk9iajogYW55KSB7XG4gICAgICAgIGpzb25PYmpbXCJwb3NcIl1bXCJzZWxmXCJdID0ganNvbk9iajtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICBpZiAob2JqICYmIG9ialtcInBvc1wiXSkge1xuICAgICAgICAgICAgICAgIGpzb25PYmpbXCJwb3NcIl1ba2V5XSA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnMob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleU9iamVjdHMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGlmIChpID09IDAgJiYgIXBhZ2VbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBwYWdlW1wicG9zXCJdID0gdGhpcy5zdXJ2ZXlWYWx1ZVtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VydmV5QXNQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UucXVlc3Rpb25zW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KG9iamVjdHM6IGFueVtdKSB7XG4gICAgICAgIGlmIChvYmplY3RzID09IG51bGwgfHwgb2JqZWN0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB7IHJvdzogMCwgY29sdW1uOiAwIH07XG4gICAgICAgIHZhciBhdE9iamVjdHNBcnJheSA9IHRoaXMuZ2V0QXRBcnJheShvYmplY3RzKTtcbiAgICAgICAgdmFyIHN0YXJ0QXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXRPYmplY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdCA9IGF0T2JqZWN0c0FycmF5W2ldLmF0O1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc3Rpb25CeUNoYXJ0QXQocG9zaXRpb24sIHN0YXJ0QXQsIGF0KTtcbiAgICAgICAgICAgIHZhciBvYmogPSBhdE9iamVjdHNBcnJheVtpXS5vYmo7XG4gICAgICAgICAgICBpZiAoIW9iai5wb3NpdGlvbikgb2JqLnBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5zdGFydCkge1xuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5zdGFydCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmVuZCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0QXQgPSBhdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFBvc3Rpb25CeUNoYXJ0QXQoc3RhcnRQb3NpdGlvbjogQWNlQWpheC5Qb3NpdGlvbiwgc3RhcnRBdDogbnVtYmVyLCBhdDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgcm93OiBzdGFydFBvc2l0aW9uLnJvdywgY29sdW1uOiBzdGFydFBvc2l0aW9uLmNvbHVtbiB9O1xuICAgICAgICB2YXIgY3VyQ2hhciA9IHN0YXJ0QXQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGFyIDwgYXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQuY2hhckF0KGN1ckNoYXIpID09IFN1cnZleVRleHRXb3JrZXIubmV3TGluZUNoYXIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucm93Kys7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2x1bW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1ckNoYXIrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF0QXJyYXkob2JqZWN0czogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIHZhciBwb3MgPSBvYmoucG9zO1xuICAgICAgICAgICAgaWYgKCFwb3MpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLnN0YXJ0LCBvYmo6IG9iaiB9KTtcbiAgICAgICAgICAgIGlmIChwb3MuZW5kID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgYXQ6IHBvcy5lbmQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuc29ydCgoZWwxLCBlbDIpID0+IHtcbiAgICAgICAgICAgIGlmIChlbDEuYXQgPiBlbDIuYXQpIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA8IGVsMi5hdCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dFdvcmtlci50cyIsIi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBKU09ONSwgaHR0cDovL2pzb241Lm9yZy9cbi8vIFRoZSBtb2RpZmljYXRpb24gZm9yIGdldHRpbmcgb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGxvY2F0aW9uICdhdCcgd2VyZSBtYWRlbi5cblxuZXhwb3J0IGNsYXNzIFN1cnZleUpTT041IHtcbiAgICBwdWJsaWMgc3RhdGljIHBvc2l0aW9uTmFtZSA9IFwicG9zXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXNjYXBlZSA9IHtcbiAgICAgICAgXCInXCI6IFwiJ1wiLFxuICAgICAgICAnXCInOiAnXCInLFxuICAgICAgICAnXFxcXCc6ICdcXFxcJyxcbiAgICAgICAgJy8nOiAnLycsXG4gICAgICAgICdcXG4nOiAnJywgICAgICAgLy8gUmVwbGFjZSBlc2NhcGVkIG5ld2xpbmVzIGluIHN0cmluZ3Mgdy8gZW1wdHkgc3RyaW5nXG4gICAgICAgIGI6ICdcXGInLFxuICAgICAgICBmOiAnXFxmJyxcbiAgICAgICAgbjogJ1xcbicsXG4gICAgICAgIHI6ICdcXHInLFxuICAgICAgICB0OiAnXFx0J1xuICAgIH07XG4gICAgcHJpdmF0ZSBzdGF0aWMgd3MgPSBbXG4gICAgICAgICcgJyxcbiAgICAgICAgJ1xcdCcsXG4gICAgICAgICdcXHInLFxuICAgICAgICAnXFxuJyxcbiAgICAgICAgJ1xcdicsXG4gICAgICAgICdcXGYnLFxuICAgICAgICAnXFx4QTAnLFxuICAgICAgICAnXFx1RkVGRidcbiAgICBdO1xuICAgIHByaXZhdGUgZW5kQXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGF0OiBudW1iZXI7ICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gICAgcHJpdmF0ZSBjaDogYW55OyAgICAgLy8gVGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXJzZVR5cGU6IG51bWJlcjsgLy8gMCAtIHN0YWRhcmQsIDEgLSBnZXQgaW5mb3JtYXRpb24gYWJvdXQgb2JqZWN0cywgMiAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgcHJvcGVydGllc1xuICAgIGNvbnN0cnVjdG9yKHBhcnNlVHlwZTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLnBhcnNlVHlwZSA9IHBhcnNlVHlwZTtcbiAgICB9XG4gICAgcHVibGljIHBhcnNlKHNvdXJjZTogYW55LCByZXZpdmVyOiBhbnkgPSBudWxsLCBzdGFydEZyb206IG51bWJlciA9IDAsIGVuZEF0OiBudW1iZXIgPSAtMSk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gU3RyaW5nKHNvdXJjZSk7XG4gICAgICAgIHRoaXMuYXQgPSBzdGFydEZyb207XG4gICAgICAgIHRoaXMuZW5kQXQgPSBlbmRBdDtcbiAgICAgICAgdGhpcy5jaCA9ICcgJztcbiAgICAgICAgcmVzdWx0ID0gdGhpcy52YWx1ZSgpO1xuICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgIGlmICh0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLFxuICAgICAgICAvLyBwYXNzaW5nIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIHRoZSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZVxuICAgICAgICAvLyB0cmFuc2Zvcm1hdGlvbiwgc3RhcnRpbmcgd2l0aCBhIHRlbXBvcmFyeSByb290IG9iamVjdCB0aGF0IGhvbGRzIHRoZSByZXN1bHRcbiAgICAgICAgLy8gaW4gYW4gZW1wdHkga2V5LiBJZiB0aGVyZSBpcyBub3QgYSByZXZpdmVyIGZ1bmN0aW9uLCB3ZSBzaW1wbHkgcmV0dXJuIHRoZVxuICAgICAgICAvLyByZXN1bHQuXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID8gKGZ1bmN0aW9uIHdhbGsoaG9sZGVyLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB3YWxrKHZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXZpdmVyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSAoeyAnJzogcmVzdWx0IH0sICcnKSkgOiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZXJyb3IobTogc3RyaW5nKSB7XG4gICAgICAgIC8vIENhbGwgZXJyb3Igd2hlbiBzb21ldGhpbmcgaXMgd3JvbmcuXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gbTtcbiAgICAgICAgZXJyb3JbXCJhdFwiXSA9IHRoaXMuYXQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBwcml2YXRlIG5leHQoYzogYW55ID0gbnVsbCkge1xuICAgICAgICAvLyBJZiBhIGMgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB2ZXJpZnkgdGhhdCBpdCBtYXRjaGVzIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKGMgJiYgYyAhPT0gdGhpcy5jaCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkV4cGVjdGVkICdcIiArIGMgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgdGhpcy5uZXh0IGNoYXJhY3Rlci4gV2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyByZXR1cm4gdGhlIGVtcHR5IHN0cmluZy5cbiAgICAgICAgdGhpcy5jaCA9IHRoaXMuY2hhcnRBdCgpO1xuICAgICAgICB0aGlzLmF0ICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzLmNoO1xuICAgIH1cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdGhpcy5uZXh0IGNoYXJhY3RlciB3aXRob3V0IGNvbnN1bWluZyBpdCBvclxuICAgICAgICAvLyBhc3NpZ25pbmcgaXQgdG8gdGhlIHRoaXMuY2ggdmFyYWlibGUuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0QXQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGFydEF0KCkge1xuICAgICAgICBpZiAodGhpcy5lbmRBdCA+IC0xICYmIHRoaXMuYXQgPj0gdGhpcy5lbmRBdCkgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmF0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xuICAgICAgICAvLyBQYXJzZSBhbiBpZGVudGlmaWVyLiBOb3JtYWxseSwgcmVzZXJ2ZWQgd29yZHMgYXJlIGRpc2FsbG93ZWQgaGVyZSwgYnV0IHdlXG4gICAgICAgIC8vIG9ubHkgdXNlIHRoaXMgZm9yIHVucXVvdGVkIG9iamVjdCBrZXlzLCB3aGVyZSByZXNlcnZlZCB3b3JkcyBhcmUgYWxsb3dlZCxcbiAgICAgICAgLy8gc28gd2UgZG9uJ3QgY2hlY2sgZm9yIHRob3NlIGhlcmUuIFJlZmVyZW5jZXM6XG4gICAgICAgIC8vIC0gaHR0cDovL2VzNS5naXRodWIuY29tLyN4Ny42XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ29yZV9KYXZhU2NyaXB0XzEuNV9HdWlkZS9Db3JlX0xhbmd1YWdlX0ZlYXR1cmVzI1ZhcmlhYmxlc1xuICAgICAgICAvLyAtIGh0dHA6Ly9kb2NzdG9yZS5taWsudWEvb3JlbGx5L3dlYnByb2cvanNjcmlwdC9jaDAyXzA3Lmh0bVxuICAgICAgICAvLyBUT0RPIElkZW50aWZpZXJzIGNhbiBoYXZlIFVuaWNvZGUgXCJsZXR0ZXJzXCIgaW4gdGhlbTsgYWRkIHN1cHBvcnQgZm9yIHRob3NlLlxuICAgICAgICB2YXIga2V5ID0gdGhpcy5jaDtcblxuICAgICAgICAvLyBJZGVudGlmaWVycyBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIF8gb3IgJC5cbiAgICAgICAgaWYgKCh0aGlzLmNoICE9PSAnXycgJiYgdGhpcy5jaCAhPT0gJyQnKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnYScgfHwgdGhpcy5jaCA+ICd6JykgJiZcbiAgICAgICAgICAgICh0aGlzLmNoIDwgJ0EnIHx8IHRoaXMuY2ggPiAnWicpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIGlkZW50aWZpZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdWJzZXF1ZW50IGNoYXJhY3RlcnMgY2FuIGNvbnRhaW4gZGlnaXRzLlxuICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgKFxuICAgICAgICB0aGlzLmNoID09PSAnXycgfHwgdGhpcy5jaCA9PT0gJyQnIHx8XG4gICAgICAgICh0aGlzLmNoID49ICdhJyAmJiB0aGlzLmNoIDw9ICd6JykgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ0EnICYmIHRoaXMuY2ggPD0gJ1onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpKSkge1xuICAgICAgICAgICAga2V5ICs9IHRoaXMuY2g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBwcml2YXRlIG51bWJlcigpIHtcblxuICAgICAgICAvLyBQYXJzZSBhIG51bWJlciB2YWx1ZS5cblxuICAgICAgICB2YXIgbnVtYmVyLFxuICAgICAgICAgICAgc2lnbiA9ICcnLFxuICAgICAgICAgICAgc3RyaW5nID0gJycsXG4gICAgICAgICAgICBiYXNlID0gMTA7XG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgIHNpZ24gPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KHRoaXMuY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgSW5maW5pdHkgKGNvdWxkIHR3ZWFrIHRvIGFsbG93IG90aGVyIHdvcmRzKTpcbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdJJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ251bWJlcicgfHwgaXNOYU4obnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VuZXhwZWN0ZWQgd29yZCBmb3IgbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHNpZ24gPT09ICctJykgPyAtbnVtYmVyIDogbnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgTmFOXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnTicpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHRoaXMud29yZCgpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignZXhwZWN0ZWQgd29yZCB0byBiZSBOYU4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlnbm9yZSBzaWduIGFzIC1OYU4gYWxzbyBpcyBOYU5cbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJzAnKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd4JyB8fCB0aGlzLmNoID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBiYXNlID0gMTY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignT2N0YWwgbGl0ZXJhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChiYXNlKSB7XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9ICcuJztcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMubmV4dCgpICYmIHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ2UnIHx8IHRoaXMuY2ggPT09ICdFJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLScgfHwgdGhpcy5jaCA9PT0gJysnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknIHx8IHRoaXMuY2ggPj0gJ0EnICYmIHRoaXMuY2ggPD0gJ0YnIHx8IHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ2YnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lnbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICBudW1iZXIgPSAtc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtYmVyID0gK3N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBudW1iZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc3RyaW5nKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgc3RyaW5nIHZhbHVlLlxuXG4gICAgICAgIHZhciBoZXgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgc3RyaW5nID0gJycsXG4gICAgICAgICAgICBkZWxpbSwgICAgICAvLyBkb3VibGUgcXVvdGUgb3Igc2luZ2xlIHF1b3RlXG4gICAgICAgICAgICB1ZmZmZjtcblxuICAgICAgICAvLyBXaGVuIHBhcnNpbmcgZm9yIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgJyBvciBcIiBhbmQgXFwgY2hhcmFjdGVycy5cblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgZGVsaW0gPSB0aGlzLmNoO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09IGRlbGltKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4ID0gcGFyc2VJbnQodGhpcy5uZXh0KCksIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKGhleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gdWZmZmYgKiAxNiArIGhleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVmZmZmKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBTdXJ2ZXlKU09ONS5lc2NhcGVlW3RoaXMuY2hdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5lc2NhcGVkIG5ld2xpbmVzIGFyZSBpbnZhbGlkOyBzZWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2VlbWsvanNvbjUvaXNzdWVzLzI0XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBmZWVscyBzcGVjaWFsLWNhc2VkOyBhcmUgdGhlcmUgb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZCB1bmVzY2FwZWQgY2hhcnM/XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIHN0cmluZ1wiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbmxpbmVDb21tZW50KCkge1xuXG4gICAgICAgIC8vIFNraXAgYW4gaW5saW5lIGNvbW1lbnQsIGFzc3VtaW5nIHRoaXMgaXMgb25lLiBUaGUgY3VycmVudCBjaGFyYWN0ZXIgc2hvdWxkXG4gICAgICAgIC8vIGJlIHRoZSBzZWNvbmQgLyBjaGFyYWN0ZXIgaW4gdGhlIC8vIHBhaXIgdGhhdCBiZWdpbnMgdGhpcyBpbmxpbmUgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBpbmxpbmUgY29tbWVudCwgd2UgbG9vayBmb3IgYSBuZXdsaW5lIG9yIHRoZSBlbmQgb2YgdGhlIHRleHQuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhbiBpbmxpbmUgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcXG4nIHx8IHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLmNoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBibG9ja0NvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGJsb2NrIGNvbW1lbnQsIGFzc3VtaW5nIHRoaXMgaXMgb25lLiBUaGUgY3VycmVudCBjaGFyYWN0ZXIgc2hvdWxkIGJlXG4gICAgICAgIC8vIHRoZSAqIGNoYXJhY3RlciBpbiB0aGUgLyogcGFpciB0aGF0IGJlZ2lucyB0aGlzIGJsb2NrIGNvbW1lbnQuXG4gICAgICAgIC8vIFRvIGZpbmlzaCB0aGUgYmxvY2sgY29tbWVudCwgd2UgbG9vayBmb3IgYW4gZW5kaW5nICovIHBhaXIgb2YgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gYnV0IHdlIGFsc28gd2F0Y2ggZm9yIHRoZSBlbmQgb2YgdGV4dCBiZWZvcmUgdGhlIGNvbW1lbnQgaXMgdGVybWluYXRlZC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJyonKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgYmxvY2sgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnKicpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IoXCJVbnRlcm1pbmF0ZWQgYmxvY2sgY29tbWVudFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb21tZW50KCkge1xuXG4gICAgICAgIC8vIFNraXAgYSBjb21tZW50LCB3aGV0aGVyIGlubGluZSBvciBibG9jay1sZXZlbCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuXG4gICAgICAgIC8vIENvbW1lbnRzIGFsd2F5cyBiZWdpbiB3aXRoIGEgLyBjaGFyYWN0ZXIuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhIGNvbW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5leHQoJy8nKTtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmlubGluZUNvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tDb21tZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiVW5yZWNvZ25pemVkIGNvbW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3aGl0ZSgpIHtcblxuICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgYW5kIGNvbW1lbnRzLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UncmUgZGV0ZWN0aW5nIGNvbW1lbnRzIGJ5IG9ubHkgYSBzaW5nbGUgLyBjaGFyYWN0ZXIuXG4gICAgICAgIC8vIFRoaXMgd29ya3Mgc2luY2UgcmVndWxhciBleHByZXNzaW9ucyBhcmUgbm90IHZhbGlkIEpTT04oNSksIGJ1dCB0aGlzIHdpbGxcbiAgICAgICAgLy8gYnJlYWsgaWYgdGhlcmUgYXJlIG90aGVyIHZhbGlkIHZhbHVlcyB0aGF0IGJlZ2luIHdpdGggYSAvIGNoYXJhY3RlciFcblxuICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChTdXJ2ZXlKU09ONS53cy5pbmRleE9mKHRoaXMuY2gpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgd29yZCgpOiBhbnkge1xuXG4gICAgICAgIC8vIHRydWUsIGZhbHNlLCBvciBudWxsLlxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5jaCkge1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd1Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2YnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2EnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3MnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICduJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2wnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ0knOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnSScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgneScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnTicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnTicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIlVuZXhwZWN0ZWQgJ1wiICsgdGhpcy5jaCArIFwiJ1wiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcnJheSgpIHtcblxuICAgICAgICAvLyBQYXJzZSBhbiBhcnJheSB2YWx1ZS5cblxuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ1snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5OyAgIC8vIFBvdGVudGlhbGx5IGVtcHR5IGFycmF5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEVTNSBhbGxvd3Mgb21pdHRpbmcgZWxlbWVudHMgaW4gYXJyYXlzLCBlLmcuIFssXSBhbmRcbiAgICAgICAgICAgICAgICAvLyBbLG51bGxdLiBXZSBkb24ndCBhbGxvdyB0aGlzIGluIEpTT041LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIk1pc3NpbmcgYXJyYXkgZWxlbWVudFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHRoaXMudmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGNvbW1hIGFmdGVyIHRoaXMgdmFsdWUsIHRoaXMgbmVlZHMgdG9cbiAgICAgICAgICAgICAgICAvLyBiZSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCAhPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIGFycmF5XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIG9iamVjdCgpIHtcblxuICAgICAgICAvLyBQYXJzZSBhbiBvYmplY3QgdmFsdWUuXG5cbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgaXNGaXJzdFByb3BlcnR5ID0gdHJ1ZSxcbiAgICAgICAgICAgIG9iamVjdCA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXSA9IHsgc3RhcnQ6IHRoaXMuYXQgLSAxIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd7Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCd7Jyk7XG4gICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuYXQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdLmVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnfScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0OyAgIC8vIFBvdGVudGlhbGx5IGVtcHR5IG9iamVjdFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEtleXMgY2FuIGJlIHVucXVvdGVkLiBJZiB0aGV5IGFyZSwgdGhleSBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdmFsaWQgSlMgaWRlbnRpZmllcnMuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcIicgfHwgdGhpcy5jaCA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldID0geyBzdGFydDogc3RhcnQsIHZhbHVlU3RhcnQ6IHRoaXMuYXQgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCc6Jyk7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMuYXQgLSAxO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGNvbW1hIGFmdGVyIHRoaXMgcGFpciwgdGhpcyBuZWVkcyB0byBiZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBlbmQgb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCAhPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmlyc3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgaXNGaXJzdFByb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBvYmplY3RcIik7XG4gICAgfVxuICAgIHByaXZhdGUgdmFsdWUoKTogYW55IHtcblxuICAgICAgICAvLyBQYXJzZSBhIEpTT04gdmFsdWUuIEl0IGNvdWxkIGJlIGFuIG9iamVjdCwgYW4gYXJyYXksIGEgc3RyaW5nLCBhIG51bWJlcixcbiAgICAgICAgLy8gb3IgYSB3b3JkLlxuXG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5KCk7XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm51bWJlcigpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgPyB0aGlzLm51bWJlcigpIDogdGhpcy53b3JkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcGxhY2VyOiBhbnk7XG4gICAgcHJpdmF0ZSBpbmRlbnRTdHI6IHN0cmluZztcbiAgICBwcml2YXRlIG9ialN0YWNrO1xuXG4gICAgcHVibGljIHN0cmluZ2lmeShvYmo6IGFueSwgcmVwbGFjZXI6IGFueSA9IG51bGwsIHNwYWNlOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChyZXBsYWNlciAmJiAodHlwZW9mIChyZXBsYWNlcikgIT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpcy5pc0FycmF5KHJlcGxhY2VyKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVwbGFjZXIgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgICB0aGlzLmluZGVudFN0ciA9IHRoaXMuZ2V0SW5kZW50KHNwYWNlKTtcbiAgICAgICAgdGhpcy5vYmpTdGFjayA9IFtdO1xuICAgICAgICAvLyBzcGVjaWFsIGNhc2UuLi53aGVuIHVuZGVmaW5lZCBpcyB1c2VkIGluc2lkZSBvZlxuICAgICAgICAvLyBhIGNvbXBvdW5kIG9iamVjdC9hcnJheSwgcmV0dXJuIG51bGwuXG4gICAgICAgIC8vIGJ1dCB3aGVuIHRvcC1sZXZlbCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB2YXIgdG9wTGV2ZWxIb2xkZXIgPSB7IFwiXCI6IG9iaiB9O1xuICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZCh0b3BMZXZlbEhvbGRlciwgJycsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RyaW5naWZ5KHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SW5kZW50KHNwYWNlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoc3BhY2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhY2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJudW1iZXJcIiAmJiBzcGFjZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUluZGVudChcIiBcIiwgc3BhY2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXI6IGFueSwga2V5OiBhbnksIGlzVG9wTGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaG9sZGVyW2tleV07XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUgd2l0aCBpdHMgdG9KU09OIHZhbHVlIGZpcnN0LCBpZiBwb3NzaWJsZVxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudG9KU09OICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB1c2VyLXN1cHBsaWVkIHJlcGxhY2VyIGlmIGEgZnVuY3Rpb24sIGNhbGwgaXQuIElmIGl0J3MgYW4gYXJyYXksIGNoZWNrIG9iamVjdHMnIHN0cmluZyBrZXlzIGZvclxuICAgICAgICAvLyBwcmVzZW5jZSBpbiB0aGUgYXJyYXkgKHJlbW92aW5nIHRoZSBrZXkvdmFsdWUgcGFpciBmcm9tIHRoZSByZXN1bHRpbmcgSlNPTiBpZiB0aGUga2V5IGlzIG1pc3NpbmcpLlxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnJlcGxhY2VyKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBsYWNlcikge1xuICAgICAgICAgICAgaWYgKGlzVG9wTGV2ZWwgfHwgdGhpcy5pc0FycmF5KGhvbGRlcikgfHwgdGhpcy5yZXBsYWNlci5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNXb3JkQ2hhcihjaGFyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICcwJyAmJiBjaGFyIDw9ICc5JykgfHxcbiAgICAgICAgICAgIGNoYXIgPT09ICdfJyB8fCBjaGFyID09PSAnJCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRTdGFydChjaGFyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChjaGFyID49ICdhJyAmJiBjaGFyIDw9ICd6JykgfHxcbiAgICAgICAgICAgIChjaGFyID49ICdBJyAmJiBjaGFyIDw9ICdaJykgfHxcbiAgICAgICAgICAgIGNoYXIgPT09ICdfJyB8fCBjaGFyID09PSAnJCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmQoa2V5OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzV29yZFN0YXJ0KGtleVswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDEsIGxlbmd0aCA9IGtleS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNXb3JkQ2hhcihrZXlbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBwb2x5ZmlsbHNcbiAgICBwcml2YXRlIGlzQXJyYXkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRGF0ZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTmFOKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiB2YWwgIT09IHZhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRm9yQ2lyY3VsYXIob2JqOiBhbnkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9ialN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmpTdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT05cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtYWtlSW5kZW50KHN0cjogc3RyaW5nLCBudW06IG51bWJlciwgbm9OZXdMaW5lOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluZGVudGF0aW9uIG5vIG1vcmUgdGhhbiAxMCBjaGFyc1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRlbnQgPSBub05ld0xpbmUgPyBcIlwiIDogXCJcXG5cIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgaW5kZW50ICs9IHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRlbnQ7XG4gICAgfVxuXG4gICAgLy8gQ29waWVkIGZyb20gQ3Jva2ZvcmQncyBpbXBsZW1lbnRhdGlvbiBvZiBKU09OXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kb3VnbGFzY3JvY2tmb3JkL0pTT04tanMvYmxvYi9lMzlkYjRiN2U2MjQ5ZjA0YTE5NWU3ZGQwODQwZTYxMGNjOWU5NDFlL2pzb24yLmpzI0wxOTVcbiAgICAvLyBCZWdpblxuICAgIHByaXZhdGUgc3RhdGljIGN4ID0gL1tcXHUwMDAwXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXNjYXBhYmxlID0gL1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4OWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhID0geyAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICdcIic6ICdcXFxcXCInLFxuICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICB9O1xuICAgIHByaXZhdGUgZXNjYXBlU3RyaW5nKHN0cjogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuICAgICAgICAvLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgbXVzdCBhbHNvIHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcbiAgICAgICAgLy8gc2VxdWVuY2VzLlxuICAgICAgICBTdXJ2ZXlKU09ONS5lc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUpTT041LmVzY2FwYWJsZS50ZXN0KHN0cikgPyAnXCInICsgc3RyLnJlcGxhY2UoU3VydmV5SlNPTjUuZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgdmFyIGMgPSBTdXJ2ZXlKU09ONS5tZXRhW2FdO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgYyA6XG4gICAgICAgICAgICAnXFxcXHUnICsgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgfSkgKyAnXCInIDogJ1wiJyArIHN0ciArICdcIic7XG4gICAgfVxuICAgIC8vIEVuZFxuXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFN0cmluZ2lmeShob2xkZXI6IGFueSwga2V5OiBhbnksIGlzVG9wTGV2ZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIGJ1ZmZlciwgcmVzO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIHZhbHVlLCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIG9ial9wYXJ0ID0gdGhpcy5nZXRSZXBsYWNlZFZhbHVlT3JVbmRlZmluZWQoaG9sZGVyLCBrZXksIGlzVG9wTGV2ZWwpO1xuXG4gICAgICAgIGlmIChvYmpfcGFydCAmJiAhdGhpcy5pc0RhdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAvLyB1bmJveCBvYmplY3RzXG4gICAgICAgICAgICAvLyBkb24ndCB1bmJveCBkYXRlcywgc2luY2Ugd2lsbCB0dXJuIGl0IGludG8gbnVtYmVyXG4gICAgICAgICAgICBvYmpfcGFydCA9IG9ial9wYXJ0LnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvYmpfcGFydCkge1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqX3BhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgIGlmIChpc05hTihvYmpfcGFydCkgfHwgIWlzRmluaXRlKG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlU3RyaW5nKG9ial9wYXJ0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgaWYgKG9ial9wYXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBcnJheShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJbXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucHVzaChvYmpfcGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpfcGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gdGhpcy5pbnRlcm5hbFN0cmluZ2lmeShvYmpfcGFydCwgaSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBvYmpfcGFydC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGVudFN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIlxcblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoLCB0cnVlKSArIFwiXVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaXJjdWxhcihvYmpfcGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFwie1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9uRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmpfcGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ial9wYXJ0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5pbnRlcm5hbFN0cmluZ2lmeShvYmpfcGFydCwgcHJvcCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9wTGV2ZWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcEtleSA9IHRoaXMuaXNXb3JkKHByb3ApID8gcHJvcCA6IHRoaXMuZXNjYXBlU3RyaW5nKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gcHJvcEtleSArIFwiOlwiICsgKHRoaXMuaW5kZW50U3RyID8gJyAnIDogJycpICsgdmFsdWUgKyBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBidWZmZXIuc3Vic3RyaW5nKDAsIGJ1ZmZlci5sZW5ndGggLSAxKSArIHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSAne30nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9ucyBhbmQgdW5kZWZpbmVkIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanNvbjUudHMiLCJpbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5RW1iZWRpbmdXaW5kb3cge1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0hlYWQ6IEFjZUFqYXguRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdKYXZhOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwdWJsaWMgc3VydmV5SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN1cnZleVBvc3RJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZ2VuZXJhdGVWYWxpZEpTT046IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBrb1Nob3dBc1dpbmRvdzogYW55O1xuICAgIGtvU2NyaXB0VXNpbmc6IGFueTtcbiAgICBrb0hhc0lkczogYW55O1xuICAgIGtvTG9hZFN1cnZleTogYW55O1xuICAgIGtvTGlicmFyeVZlcnNpb246IGFueTtcbiAgICBrb1Zpc2libGVIdG1sOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0xpYnJhcnlWZXJzaW9uID0ga28ub2JzZXJ2YWJsZShcImtub2Nrb3V0XCIpO1xuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93ID0ga28ub2JzZXJ2YWJsZShcInBhZ2VcIik7XG4gICAgICAgIHRoaXMua29TY3JpcHRVc2luZyA9IGtvLm9ic2VydmFibGUoXCJib290c3RyYXBcIik7XG4gICAgICAgIHRoaXMua29IYXNJZHMgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0xvYWRTdXJ2ZXkgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGVIdG1sID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLmtvTGlicmFyeVZlcnNpb24oKSA9PSBcInJlYWN0XCIgfHwgc2VsZi5rb1Nob3dBc1dpbmRvdygpID09XCJwYWdlXCI7IH0pO1xuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc3VydmV5RW1iZWRpbmdKYXZhLnNldFZhbHVlKHNlbGYuZ2V0SmF2YVRleHQoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zdXJ2ZXlFbWJlZGluZ0phdmEuc2V0VmFsdWUoc2VsZi5nZXRKYXZhVGV4dCgpKTsgfSk7XG4gICAgICAgIHRoaXMua29TY3JpcHRVc2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SGVhZFRleHQoKTsgc2VsZi5zdXJ2ZXlFbWJlZGluZ0phdmEuc2V0VmFsdWUoc2VsZi5nZXRKYXZhVGV4dCgpKTsgfSk7XG4gICAgICAgIHRoaXMua29Mb2FkU3VydmV5LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zdXJ2ZXlFbWJlZGluZ0phdmEuc2V0VmFsdWUoc2VsZi5nZXRKYXZhVGV4dCgpKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldCBqc29uKCk6IGFueSB7IHJldHVybiB0aGlzLmpzb25WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQganNvbih2YWx1ZTogYW55KSB7IHRoaXMuanNvblZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0hlYWRcIik7XG4gICAgICAgICAgICB0aGlzLnNldEhlYWRUZXh0KCk7XG4gICAgICAgICAgICB2YXIgYm9keUVkaXRvciA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdCb2R5XCIpO1xuICAgICAgICAgICAgYm9keUVkaXRvci5zZXRWYWx1ZShcIjxkaXYgaWQ9XFxcIm15U3VydmV5SlNOYW1lXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSmF2YSA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdKYXZhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29IYXNJZHModGhpcy5zdXJ2ZXlJZCAmJiB0aGlzLnN1cnZleVBvc3RJZCk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdKYXZhLnNldFZhbHVlKHRoaXMuZ2V0SmF2YVRleHQoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0SGVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5rb0xpYnJhcnlWZXJzaW9uKCkgPT0gXCJrbm9ja291dFwiKSB7XG4gICAgICAgICAgICBzdHIgPSBcIjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9rbm9ja291dC8zLjMuMC9rbm9ja291dC1taW4uanNcXFwiPjwvc2NyaXB0PlxcbjxzY3JpcHQgc3JjPVxcXCJqcy9zdXJ2ZXkua28ubWluLmpzXFxcIj48L3NjcmlwdD5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IFwiPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vZmIubWUvcmVhY3QtMC4xNC44LmpzXFxcIj48L3NjcmlwdD5cXG48c2NyaXB0IHNyYz0gXFxcImh0dHBzOi8vZmIubWUvcmVhY3QtZG9tLTAuMTQuOC5qc1xcXCI+PC9zY3JpcHQ+XFxuPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2JhYmVsLWNvcmUvNS44LjIzL2Jyb3dzZXIubWluLmpzXFxcIj48L3NjcmlwdD5cXG5cIjtcbiAgICAgICAgICAgIHN0ciArPSBcIjxzY3JpcHQgc3JjPVxcXCJqcy9zdXJ2ZXkucmVhY3QubWluLmpzXFxcIj48L3NjcmlwdD5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikge1xuICAgICAgICAgICAgc3RyICs9IFwiXFxuPGxpbmsgaHJlZj1cXFwiY3NzL3N1cnZleS5jc3NcXFwiIHR5cGU9XFxcInRleHQvY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiIC8+XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQuc2V0VmFsdWUoc3RyKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVFZGl0b3IoZWxlbWVudE5hbWU6IHN0cmluZyk6IEFjZUFqYXguRWRpdG9yIHtcbiAgICAgICAgdmFyIGVkaXRvciA9IGFjZS5lZGl0KGVsZW1lbnROYW1lKTtcbiAgICAgICAgZWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL2Nocm9tZVwiKTtcbiAgICAgICAgZWRpdG9yLnNlc3Npb24uc2V0TW9kZShcImFjZS9tb2RlL2pzb25cIik7XG4gICAgICAgIGVkaXRvci4kYmxvY2tTY3JvbGxpbmcgPSBJbmZpbml0eTtcbiAgICAgICAgZWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XG4gICAgICAgIGVkaXRvci5yZW5kZXJlci5zZXRTaG93R3V0dGVyKGZhbHNlKTtcbiAgICAgICAgZWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xuICAgICAgICByZXR1cm4gZWRpdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEphdmFUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBpc09uUGFnZSA9IHRoaXMua29TaG93QXNXaW5kb3coKSA9PSBcInBhZ2VcIjtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMua29MaWJyYXJ5VmVyc2lvbigpID09IFwia25vY2tvdXRcIiA/IHRoaXMuZ2V0S25vY2tvdXRKYXZhVGV4dChpc09uUGFnZSkgOiB0aGlzLmdldFJlYWN0SmF2YVRleHQoaXNPblBhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTZXRDc3MoKSArIHN0cjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZXRDc3MoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHJldHVybiBcIlwiO1xuICAgICAgICByZXR1cm4gXCJTdXJ2ZXkuU3VydmV5LmNzc1R5cGUgPSBcXFwiYm9vdHN0cmFwXFxcIjtcXG5cIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRLbm9ja291dEphdmFUZXh0KGlzT25QYWdlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHRleHQgPSBpc09uUGFnZSA/IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KFxcblwiIDogXCJ2YXIgc3VydmV5V2luZG93ID0gbmV3IFN1cnZleS5TdXJ2ZXlXaW5kb3coXFxuXCI7XG4gICAgICAgIHRleHQgKz0gdGhpcy5nZXRKc29uVGV4dCgpO1xuICAgICAgICB0ZXh0ICs9IFwiKTtcXG5cIjtcbiAgICAgICAgaWYgKCFpc09uUGFnZSkge1xuICAgICAgICAgICAgdGV4dCArPSBcInN1cnZleVdpbmRvdy5cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2F2ZUZ1bmMgPSB0aGlzLmdldFNhdmVGdW5jQ29kZSgpO1xuICAgICAgICB0ZXh0ICs9IFwic3VydmV5Lm9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uIChzKSB7XFxuXCIgKyBzYXZlRnVuYyArIFwiXFxuIH0pO1xcblwiO1xuICAgICAgICBpZiAoaXNPblBhZ2UpIHtcbiAgICAgICAgICAgIHRleHQgKz0gXCJzdXJ2ZXkucmVuZGVyKFxcXCJteVN1cnZleUpTTmFtZVxcXCIpO1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCArPSBcIi8vQnkgZGVmYXVsdCBTdXJ2ZXkudGl0bGUgaXMgdXNlZC5cXG5cIlxuICAgICAgICAgICAgdGV4dCArPSBcIi8vc3VydmV5V2luZG93LnRpdGxlID0gXFxcIk15IFN1cnZleSBXaW5kb3cgVGl0bGUuXFxcIjtcXG5cIjtcbiAgICAgICAgICAgIHRleHQgKz0gXCJzdXJ2ZXlXaW5kb3cuc2hvdygpO1wiO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVhY3RKYXZhVGV4dChpc09uUGFnZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIHZhciBzYXZlRnVuYyA9IHRoaXMuZ2V0U2F2ZUZ1bmNDb2RlKCk7XG4gICAgICAgIHZhciBzZW5kUmVzdWx0VGV4dCA9IFwidmFyIHN1cnZleVNlbmRSZXN1bHQgPSBmdW5jdGlvbiAocykge1xcblwiICsgc2F2ZUZ1bmMgKyBcIlxcbiB9KTtcXG5cIjtcbiAgICAgICAgdmFyIG5hbWUgPSBpc09uUGFnZSA/IFwiUmVhY3RTdXJ2ZXlcIiA6IFwiUmVhY3RTdXJ2ZXlXaW5kb3dcIjtcbiAgICAgICAgdmFyIGpzb25UZXh0ID0gXCJ2YXIgc3VydmV5SnNvbiA9IFwiICsgdGhpcy5nZXRKc29uVGV4dCgpICsgXCJcXG5cXG5cIjtcbiAgICAgICAgdmFyIHRleHQgPSBqc29uVGV4dCArIHNlbmRSZXN1bHRUZXh0ICsgXCJSZWFjdERPTS5yZW5kZXIoXFxuPFwiICsgbmFtZSArIFwiIGpzb249e3N1cnZleUpzb259IG9uQ29tcGxldGU9e3N1cnZleVNlbmRSZXN1bHR9IC8+LCBcXG4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcIm15U3VydmV5SlNOYW1lXFxcIikpO1wiO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTYXZlRnVuY0NvZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvSGFzSWRzKCkpIHJldHVybiBcInN1cnZleS5zZW5kUmVzdWx0KCdcIiArIHRoaXMuc3VydmV5UG9zdElkICsgXCInKTtcIjtcbiAgICAgICAgcmV0dXJuIFwiYWxlcnQoXFxcIlRoZSByZXN1bHRzIGFyZTpcXFwiICsgSlNPTi5zdHJpbmdpZnkocy5kYXRhKSk7XCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SnNvblRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSAmJiB0aGlzLmtvTG9hZFN1cnZleSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ7IHN1cnZleUlkOiAnXCIgKyB0aGlzLnN1cnZleUlkICsgXCInfVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlVmFsaWRKU09OKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlFbWJlZGluZ1dpbmRvdy50cyIsImltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJicyB7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIG9ialZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBjaG9pY2VzQ2xhc3NlczogQXJyYXk8c3RyaW5nPjtcbiAgICBrb1ZlcmJzOiBhbnk7XG4gICAga29IYXNWZXJiczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICB0aGlzLmtvVmVyYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0NsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzLnB1c2goY2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iaigpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmpWYWx1ZSB9XG4gICAgcHVibGljIHNldCBvYmoodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5vYmpWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9ialZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRWZXJicygpO1xuICAgIH1cbiAgICBwcml2YXRlIGJ1aWxkVmVyYnMoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKHRoaXMub2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5vYmo7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VzQ2xhc3Nlcy5pbmRleE9mKHF1ZXN0aW9uLmdldFR5cGUoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSh0aGlzLnN1cnZleSwgcXVlc3Rpb24sIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1ZlcmJzKGFycmF5KTtcbiAgICAgICAgdGhpcy5rb0hhc1ZlcmJzKGFycmF5Lmxlbmd0aCA+IDApO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAga29JdGVtczogYW55O1xuICAgIGtvU2VsZWN0ZWRJdGVtOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0gPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInNlbGVjdGJhc2VcIiwgdHJ1ZSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogY2xhc3Nlc1tpXS5uYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicXQuXCIgKyBjbGFzc2VzW2ldLm5hbWUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnJheSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0ocXVlc3Rpb24uZ2V0VHlwZSgpKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VUeXBlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VUeXBlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VUeXBlKHF1ZXN0aW9uVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUgPT0gdGhpcy5xdWVzdGlvbi5nZXRUeXBlKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgdmFyIG5ld1F1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHRoaXMucXVlc3Rpb24ubmFtZSk7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciBqc29uID0ganNvbk9iai50b0pzb25PYmplY3QodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoanNvbiwgbmV3UXVlc3Rpb24pO1xuICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKG5ld1F1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtIGV4dGVuZHMgU3VydmV5VmVyYkl0ZW0ge1xuICAgIHByaXZhdGUgcHJldlBhZ2U6IFN1cnZleS5QYWdlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHN1cGVyKHN1cnZleSwgcXVlc3Rpb24sIG9uTW9kaWZpZWRDYWxsYmFjayk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LnBhZ2VzW2ldO1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7IHZhbHVlOiBwYWdlLCB0ZXh0OiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLnByZXZQYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbSh0aGlzLnByZXZQYWdlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5jaGFuZ2VQYWdlKG5ld1ZhbHVlKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnZlcmJDaGFuZ2VQYWdlXCIpOyB9XG4gICAgcHJpdmF0ZSBjaGFuZ2VQYWdlKG5ld1BhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIGlmIChuZXdQYWdlID09IG51bGwgfHwgbmV3UGFnZSA9PSB0aGlzLnByZXZQYWdlKSByZXR1cm47XG4gICAgICAgIHRoaXMucHJldlBhZ2UucmVtb3ZlUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIG5ld1BhZ2UuYWRkUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIGlmICh0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2soKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFZlcmJzLnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVVuZG9SZWRvIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxVbmRvUmVkb0l0ZW0+O1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBrb0NhblVuZG86IGFueTsga29DYW5SZWRvOiBhbnk7XG4gICAgcHVibGljIG1heGltdW1Db3VudDogbnVtYmVyID0gMTA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMua29DYW5VbmRvKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8oZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q3VycmVudChzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFVuZG9SZWRvSXRlbSgpO1xuICAgICAgICBpdGVtLnN1cnZleUpTT04gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3Qoc3VydmV5KTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZE9iak5hbWUgPSBzZWxlY3RlZE9iak5hbWU7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnJlbW92ZU9sZERhdGEoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgIH1cbiAgICBwdWJsaWMgdW5kbygpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICBpZiAoIXRoaXMuY2FuVW5kbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oLTEpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVkbygpOiBVbmRvUmVkb0l0ZW0gIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblJlZG8pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5kb1VuZG9SZWRvKDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUNhblVuZG9SZWRvKCkge1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyh0aGlzLmNhblVuZG8pO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyh0aGlzLmNhblJlZG8pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oZEluZGV4OiBudW1iZXIpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICB0aGlzLmluZGV4ICs9IGRJbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAwICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaXRlbXNbdGhpcy5pbmRleF0gOiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblVuZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVPbGREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggLSAxIDwgdGhpcy5tYXhpbXVtQ291bnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoMCwgdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm1heGltdW1Db3VudCAtIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZG9SZWRvSXRlbSB7XG4gICAgc3VydmV5SlNPTjogYW55O1xuICAgIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VuZG9yZWRvLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlPYmplY3RFZGl0b3J9IGZyb20gXCIuL29iamVjdEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQYWdlc0VkaXRvcn0gZnJvbSBcIi4vcGFnZXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5RW1iZWRpbmdXaW5kb3d9IGZyb20gXCIuL3N1cnZleUVtYmVkaW5nV2luZG93XCI7XG5pbXBvcnQge1N1cnZleU9iamVjdHN9IGZyb20gXCIuL3N1cnZleU9iamVjdHNcIjtcbmltcG9ydCB7U3VydmV5VmVyYnN9IGZyb20gXCIuL29iamVjdFZlcmJzXCI7XG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIjtcbmltcG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4vdW5kb3JlZG9cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuL2RyYWdkcm9waGVscGVyXCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xuaW1wb3J0IHtodG1sIGFzIHRlbXBsYXRlRWRpdG9ySHRtbH0gZnJvbSBcIi4vdGVtcGxhdGVFZGl0b3Iua28uaHRtbFwiO1xuaW1wb3J0IHtodG1sIGFzIHRlbXBsYXRlUGFnZUh0bWx9IGZyb20gXCIuL3RlbXBsYXRlX3BhZ2UuaHRtbFwiO1xuaW1wb3J0IHtodG1sIGFzIHRlbXBsYXRlUXVlc3Rpb25IdG1sfSBmcm9tIFwiLi90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5RWRpdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVRleHRUaW1lb3V0OiBudW1iZXIgPSAxMDAwO1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdE5ld1N1cnZleVRleHQ6IHN0cmluZyA9IFwieyBwYWdlczogW3sgbmFtZTogJ3BhZ2UxJ31dIH1cIjtcbiAgICBwcml2YXRlIHJlbmRlcmVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlqc0V4YW1wbGU6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBqc29uRWRpdG9yOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIGlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5OiBib29sZWFuO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwcml2YXRlIHBhZ2VzRWRpdG9yOiBTdXJ2ZXlQYWdlc0VkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nOiBTdXJ2ZXlFbWJlZGluZ1dpbmRvdztcbiAgICBwcml2YXRlIHN1cnZleU9iamVjdHM6IFN1cnZleU9iamVjdHM7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWZXJiczogU3VydmV5VmVyYnM7XG4gICAgcHJpdmF0ZSB0ZXh0V29ya2VyOiBTdXJ2ZXlUZXh0V29ya2VyO1xuICAgIHByaXZhdGUgdW5kb1JlZG86IFN1cnZleVVuZG9SZWRvO1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHJpdmF0ZSBzYXZlU3VydmV5RnVuY1ZhbHVlOiAobm86IG51bWJlciwgb25TYXZlQ2FsbGJhY2s6IChubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XG4gICAgcHJpdmF0ZSBzdGF0ZVZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgZHJhZ0Ryb3BIZWxwZXI6IERyYWdEcm9wSGVscGVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBxdWVzdGlvblR5cGVzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMga29Db3BpZWRRdWVzdGlvbnM6IGFueTtcbiAgICBwdWJsaWMgZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2s6IChnZW5lcmF0ZVZhbGlkSlNPTjogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBrb0lzU2hvd0Rlc2lnbmVyOiBhbnk7XG4gICAga29WaWV3VHlwZTogYW55O1xuICAgIGtvQ2FuRGVsZXRlT2JqZWN0OiBhbnk7XG4gICAga29PYmplY3RzOiBhbnk7IGtvU2VsZWN0ZWRPYmplY3Q6IGFueTtcbiAgICBrb1Nob3dTYXZlQnV0dG9uOiBhbnk7XG4gICAga29HZW5lcmF0ZVZhbGlkSlNPTjogYW55OyBrb1Nob3dPcHRpb25zOiBhbnk7IGtvVGVzdFN1cnZleVdpZHRoOiBhbnk7XG4gICAgc2VsZWN0RGVzaWduZXJDbGljazogYW55OyBzZWxlY3RFZGl0b3JDbGljazogYW55OyBzZWxlY3RUZXN0Q2xpY2s6IGFueTsgc2VsZWN0RW1iZWRDbGljazogYW55O1xuICAgIGdlbmVyYXRlVmFsaWRKU09OQ2xpY2s6IGFueTsgZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljazogYW55O1xuICAgIGRvVW5kb0NsaWNrOiBhbnk7IGRvUmVkb0NsaWNrOiBhbnk7XG4gICAgZGVsZXRlT2JqZWN0Q2xpY2s6IGFueTtcbiAgICBrb1N0YXRlOiBhbnk7XG4gICAgcnVuU3VydmV5Q2xpY2s6IGFueTsgZW1iZWRpbmdTdXJ2ZXlDbGljazogYW55O1xuICAgIHNhdmVCdXR0b25DbGljazogYW55O1xuICAgIGRyYWdnaW5nUXVlc3Rpb246IGFueTsgY2xpY2tRdWVzdGlvbjogYW55O1xuICAgIGRyYWdnaW5nQ29waWVkUXVlc3Rpb246IGFueTsgY2xpY2tDb3BpZWRRdWVzdGlvbjogYW55O1xuICAgIGRyYWdFbmQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uVHlwZXMgPSB0aGlzLmdldFF1ZXN0aW9uVHlwZXMoKTtcbiAgICAgICAgdGhpcy5rb0NvcGllZFF1ZXN0aW9ucyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvQ2FuRGVsZXRlT2JqZWN0ID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMua29TdGF0ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1Nob3dTYXZlQnV0dG9uID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvVGVzdFN1cnZleVdpZHRoID0ga28ub2JzZXJ2YWJsZShcIjEwMCVcIik7XG4gICAgICAgIHRoaXMuc2F2ZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2F2ZSgpOyB9O1xuICAgICAgICB0aGlzLmtvT2JqZWN0cyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZE9iamVjdC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2VsZWN0ZWRPYmplY3RDaGFuZ2VkKG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWx1ZSA6IG51bGwpOyB9KTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OID0ga28ub2JzZXJ2YWJsZSh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OKTtcbiAgICAgICAgdGhpcy5rb0dlbmVyYXRlVmFsaWRKU09OLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zKSBzZWxmLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTiA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2spIHNlbGYuZ2VuZXJhdGVWYWxpZEpTT05DaGFuZ2VkQ2FsbGJhY2sobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzID0gbmV3IFN1cnZleU9iamVjdHModGhpcy5rb09iamVjdHMsIHRoaXMua29TZWxlY3RlZE9iamVjdCk7XG4gICAgICAgIHRoaXMudW5kb1JlZG8gPSBuZXcgU3VydmV5VW5kb1JlZG8oKTtcblxuICAgICAgICB0aGlzLnN1cnZleVZlcmJzID0gbmV3IFN1cnZleVZlcmJzKGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRNb2RpZmllZCgpOyB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yID0gbmV3IFN1cnZleVBhZ2VzRWRpdG9yKCgpID0+IHsgc2VsZi5hZGRQYWdlKCk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpOyB9LFxuICAgICAgICAgICAgKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpID0+IHsgc2VsZi5tb3ZlUGFnZShpbmRleEZyb20sIGluZGV4VG8pOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nID0gbmV3IFN1cnZleUVtYmVkaW5nV2luZG93KCk7XG5cbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlID0ga28ub2JzZXJ2YWJsZShcImRlc2lnbmVyXCIpO1xuICAgICAgICB0aGlzLmtvSXNTaG93RGVzaWduZXIgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvVmlld1R5cGUoKSA9PSBcImRlc2lnbmVyXCI7IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdERlc2lnbmVyQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0Rlc2lnbmVyKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RWRpdG9yQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0pzb25FZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RUZXN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1Rlc3RTdXJ2ZXkoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RFbWJlZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dFbWJlZEVkaXRvcigpOyB9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlVmFsaWRKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTih0cnVlKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04oZmFsc2UpOyB9O1xuICAgICAgICB0aGlzLnJ1blN1cnZleUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dMaXZlU3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuZW1iZWRpbmdTdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93U3VydmV5RW1iZWRpbmcoKTsgfTtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH07XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdRdWVzdGlvbiA9IGZ1bmN0aW9uIChxdWVzdGlvblR5cGUsIGUpIHsgc2VsZi5kb0RyYWdnaW5nUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBlKTsgfTtcbiAgICAgICAgdGhpcy5jbGlja1F1ZXN0aW9uID0gZnVuY3Rpb24gKHF1ZXN0aW9uVHlwZSkgeyBzZWxmLmRvQ2xpY2tRdWVzdGlvbihxdWVzdGlvblR5cGUpOyB9O1xuICAgICAgICB0aGlzLmRyYWdnaW5nQ29waWVkUXVlc3Rpb24gPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRvRHJhZ2dpbmdDb3BpZWRRdWVzdGlvbihpdGVtLmpzb24sIGUpOyB9O1xuICAgICAgICB0aGlzLmNsaWNrQ29waWVkUXVlc3Rpb24gPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmRvQ2xpY2tDb3BpZWRRdWVzdGlvbihpdGVtLmpzb24pOyB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoaXRlbSwgZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyLmVuZCgpOyB9O1xuXG4gICAgICAgIHRoaXMuZG9VbmRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnVuZG8oKSk7IH07XG4gICAgICAgIHRoaXMuZG9SZWRvQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9VbmRvUmVkbyhzZWxmLnVuZG9SZWRvLnJlZG8oKSk7IH07XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoZWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVFZGl0b3JIdG1sO1xuICAgICAgICBzZWxmLmFwcGx5QmluZGluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZFN1cnZleShzdXJ2ZXlJZDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IFN1cnZleS5keFN1cnZleVNlcnZpY2UoKS5sb2FkU3VydmV5KHN1cnZleUlkLCBmdW5jdGlvbiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGV4dCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5qc29uRWRpdG9yICE9IG51bGwgPyB0aGlzLmpzb25FZGl0b3IuZ2V0VmFsdWUoKSA6IFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMudGV4dFdvcmtlci5zdXJ2ZXkpKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Rlc2lnbmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3RhdGVWYWx1ZTsgfVxuICAgIHByb3RlY3RlZCBzZXRTdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHNhdmVObzogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgZG9TYXZlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwic2F2aW5nXCIpO1xuICAgICAgICBpZiAodGhpcy5zYXZlU3VydmV5RnVuYykge1xuICAgICAgICAgICAgdGhpcy5zYXZlTm8rKztcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmModGhpcy5zYXZlTm8sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9TYXZlQ2FsbGJhY2sobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2F2ZU5vID09IG5vKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSBzZWxmLnNldFN0YXRlKFwic2F2ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgVE9ET1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE1vZGlmaWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFwibW9kaWZpZWRcIik7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZShjbGVhclN0YXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNsZWFyU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudW5kb1JlZG8uY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsT2JqID0gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkgPyB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMudW5kb1JlZG8uc2V0Q3VycmVudCh0aGlzLnN1cnZleVZhbHVlLCBzZWxPYmogPyBzZWxPYmoubmFtZSA6IG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNhdmVTdXJ2ZXlGdW5jKCkgeyByZXR1cm4gdGhpcy5zYXZlU3VydmV5RnVuY1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzYXZlU3VydmV5RnVuYyh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2F2ZVN1cnZleUZ1bmNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24odmFsdWUgIT0gbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd09wdGlvbnMoKSB7IHJldHVybiB0aGlzLmtvU2hvd09wdGlvbnMoKTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd09wdGlvbnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5rb1Nob3dPcHRpb25zKHZhbHVlKTsgfVxuICAgIHByaXZhdGUgc2V0VGV4dFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmpzb25FZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3IucmVuZGVyZXIudXBkYXRlRnVsbCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2Nlc3NKc29uKHZhbHVlKTtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUGFnZSgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFnZU5hbWUodGhpcy5zdXJ2ZXkucGFnZXMpO1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleVZhbHVlLmFkZE5ld1BhZ2UobmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUGFnZVRvVUkocGFnZSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldExvY1N0cmluZyhzdHI6IHN0cmluZykgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhzdHIpOyB9XG4gICAgcHJvdGVjdGVkIGdldFF1ZXN0aW9uVHlwZXMoKTogc3RyaW5nW10ge1xuICAgICAgICB2YXIgYWxsVHlwZXMgPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmdldEFsbFR5cGVzKCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zIHx8ICF0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcyB8fCAhdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMubGVuZ3RoKSByZXR1cm4gYWxsVHlwZXM7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uVHlwZSA9IHRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzW2ldO1xuICAgICAgICAgICAgaWYgKGFsbFR5cGVzLmluZGV4T2YocXVlc3Rpb25UeXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocXVlc3Rpb25UeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIG1vdmVQYWdlKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaW5kZXhGcm9tXTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucGFnZXMuc3BsaWNlKGluZGV4RnJvbSwgMSk7XG4gICAgICAgIHRoaXMuc3VydmV5LnBhZ2VzLnNwbGljZShpbmRleFRvLCAwLCBwYWdlKTtcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChwYWdlKVxuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkUGFnZVRvVUkocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zdXJ2ZXkgPSB0aGlzLnN1cnZleVZhbHVlO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuYWRkUGFnZShwYWdlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuYWRkUXVlc3Rpb24ocGFnZSwgcXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb2JqOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFyIGlzRGVmYXVsdCA9IHByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgb2JqW3Byb3BlcnR5Lm5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5uYW1lID09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMubmFtZUNoYW5nZWQob2JqKTtcbiAgICAgICAgICAgIGlmIChTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZXNFZGl0b3IuY2hhbmdlTmFtZSg8U3VydmV5LlBhZ2U+b2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oaXRlbTogVW5kb1JlZG9JdGVtKSB7XG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShpdGVtLnN1cnZleUpTT04pO1xuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZE9iak5hbWUpIHtcbiAgICAgICAgICAgIHZhciBzZWxPYmogPSB0aGlzLmZpbmRPYmpCeU5hbWUoaXRlbS5zZWxlY3RlZE9iak5hbWUpO1xuICAgICAgICAgICAgaWYgKHNlbE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3Qoc2VsT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudW5kb1JlZG8ua29DYW5VbmRvKCkgPyBcIm1vZGlmaWVkXCIgOiBcInNhdmVkXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRPYmpCeU5hbWUobmFtZTogc3RyaW5nKTogU3VydmV5LkJhc2Uge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChwYWdlKSByZXR1cm4gcGFnZTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChxdWVzdGlvbikgcmV0dXJuIHF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5Td2l0Y2hWaWV3VHlwZShuZXdUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG5ld1R5cGUgJiYgdGhpcy5rb1ZpZXdUeXBlKCkgPT0gbmV3VHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgIT0gXCJlZGl0b3JcIiB8fCAhdGhpcy50ZXh0V29ya2VyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgYWxlcnQodGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnRleHRXb3JrZXIuc3VydmV5KSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dEZXNpZ25lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKFwiZGVzaWduZXJcIikpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZGVzaWduZXJcIik7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0pzb25FZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSA9PSBcImVkaXRvclwiKSByZXR1cm47XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zZXRWYWx1ZSh0aGlzLmdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKSk7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5mb2N1cygpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd1Rlc3RTdXJ2ZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShudWxsKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dMaXZlU3VydmV5KCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcInRlc3RcIik7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0VtYmVkRWRpdG9yKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUoXCJlbWJlZFwiKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dTdXJ2ZXlFbWJlZGluZygpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlbWJlZFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMSk7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5SlNPTjUoKS5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMSk7XG4gICAgfVxuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGNhbkRlbGV0ZU9iamVjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gb2JqO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLm9iaiA9IG9iajtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gPFN1cnZleS5QYWdlPm9iajtcbiAgICAgICAgICAgIGNhbkRlbGV0ZU9iamVjdCA9IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aCA+IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdKG9iaik7XG4gICAgICAgICAgICBjYW5EZWxldGVPYmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0aGlzLnN1cnZleVtcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0obnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdChjYW5EZWxldGVPYmplY3QpO1xuICAgIH1cbiAgICBwcml2YXRlIGFwcGx5QmluZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRFbGVtZW50ID09IG51bGwpIHJldHVybjtcbiAgICAgICAga28uY2xlYW5Ob2RlKHRoaXMucmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLCB0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc3VydmV5anMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzXCIpO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlqcykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqcy5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gNDYpIHNlbGYuZGVsZXRlUXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDM4IHx8IGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdFF1ZXN0aW9uKGUua2V5Q29kZSA9PSAzOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmpzb25FZGl0b3IgPSBhY2UuZWRpdChcInN1cnZleWpzSlNPTkVkaXRvclwiKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVwiKTtcblxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7XG4gICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUubW9kZSA9IFwiZGVzaWduZXJcIjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5yZW5kZXIodGhpcy5zdXJ2ZXlqcyk7XG5cbiAgICAgICAgdGhpcy5pbml0SnNvbkVkaXRvcigpO1xuICAgICAgICBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyID0gdGhpcy5qc29uRWRpdG9yLnNlc3Npb24uZG9jLmdldE5ld0xpbmVDaGFyYWN0ZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0SnNvbkVkaXRvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvY2hyb21lXCIpO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLmdldFNlc3Npb24oKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uSnNvbkVkaXRvckNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV29ya2VyKHRydWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRTdXJ2ZXkoanNvbjogYW55KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KCk7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIgPSBuZXcgRHJhZ0Ryb3BIZWxwZXIoPFN1cnZleS5JU3VydmV5PnRoaXMuc3VydmV5LCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0TW9kaWZpZWQoKSB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcImRyYWdEcm9wSGVscGVyXCJdID0gdGhpcy5kcmFnRHJvcEhlbHBlcjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0oanNvbik7IC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZS5pc0VtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleS5TdXJ2ZXkobmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkubW9kZSA9IFwiZGVzaWduZXJcIjtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKHRoaXMuc3VydmV5anMpO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc2V0U2VsZWN0ZWRQYWdlKDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5jdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkXCJdLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3Qoc2VuZGVyW1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvbkNvcHlRdWVzdGlvblwiXS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmNvcHlRdWVzdGlvbihzZWxmLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25GYXN0Q29weVF1ZXN0aW9uXCJdLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZmFzdENvcHlRdWVzdGlvbihzZWxmLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUHJvY2Vzc0h0bWwuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgb3B0aW9ucy5odG1sID0gc2VsZi5wcm9jZXNzSHRtbChvcHRpb25zLmh0bWwpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vbkN1cnJlbnRQYWdlQ2hhbmdlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+c2VuZGVyLmN1cnJlbnRQYWdlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25RdWVzdGlvbkFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYub25RdWVzdGlvbkFkZGVkKG9wdGlvbnMucXVlc3Rpb24pOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblF1ZXN0aW9uUmVtb3ZlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLm9uUXVlc3Rpb25SZW1vdmVkKG9wdGlvbnMucXVlc3Rpb24pOyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWh0bWwpIHJldHVybiBodG1sO1xuICAgICAgICB2YXIgc2NyaXB0UmVnRXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgd2hpbGUgKHNjcmlwdFJlZ0V4LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2Uoc2NyaXB0UmVnRXgsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBvbkpzb25FZGl0b3JDaGFuZ2VkKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCA+IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0pzb24oc2VsZi50ZXh0KTtcbiAgICAgICAgICAgIH0sIFN1cnZleUVkaXRvci51cGRhdGVUZXh0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBwcm9jZXNzSnNvbih0ZXh0OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICB0aGlzLnRleHRXb3JrZXIgPSBuZXcgU3VydmV5VGV4dFdvcmtlcih0ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yLmdldFNlc3Npb24oKS5zZXRBbm5vdGF0aW9ucyh0aGlzLmNyZWF0ZUFubm90YXRpb25zKHRleHQsIHRoaXMudGV4dFdvcmtlci5lcnJvcnMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGRvRHJhZ2dpbmdRdWVzdGlvbihxdWVzdGlvblR5cGU6IGFueSwgZSkge1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyLnN0YXJ0RHJhZ05ld1F1ZXN0aW9uKGUsIHF1ZXN0aW9uVHlwZSwgdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9EcmFnZ2luZ0NvcGllZFF1ZXN0aW9uKGpzb246IGFueSwgZSkge1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyLnN0YXJ0RHJhZ0NvcGllZFF1ZXN0aW9uKGUsIHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCksIGpzb24pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvQ2xpY2tRdWVzdGlvbihxdWVzdGlvblR5cGU6IGFueSkge1xuICAgICAgICB0aGlzLmRvQ2xpY2tRdWVzdGlvbkNvcmUoU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCkpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrQ29waWVkUXVlc3Rpb24oanNvbjogYW55KSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihqc29uW1widHlwZVwiXSwgbmFtZSk7XG4gICAgICAgIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvT2JqZWN0KGpzb24sIHF1ZXN0aW9uKTtcbiAgICAgICAgcXVlc3Rpb24ubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3UXVlc3Rpb25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UXVlc3Rpb25OYW1lKHRoaXMuc3VydmV5LmdldEFsbFF1ZXN0aW9ucygpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrUXVlc3Rpb25Db3JlKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kZXggPSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdKSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZS5hZGRRdWVzdGlvbihxdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlUXVlc3Rpb24oKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJyZW50T2JqZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzZWxlY3RRdWVzdGlvbihpc1VwOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE5leHRRdWVzdGlvbihpc1VwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk6IFN1cnZleS5RdWVzdGlvbkJhc2Uge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWU7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopOiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUN1cnJlbnRPYmplY3QoKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0KHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGNvcHlRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKHF1ZXN0aW9uKTtcbiAgICAgICAgaWYgKG9ialR5cGUgIT0gT2JqVHlwZS5RdWVzdGlvbikgcmV0dXJuO1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldENvcGllZFF1ZXN0aW9uQnlOYW1lKHF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5qc29uID0ganNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua29Db3BpZWRRdWVzdGlvbnMucHVzaCh7IG5hbWU6IHF1ZXN0aW9uLm5hbWUsIGpzb246IGpzb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua29Db3BpZWRRdWVzdGlvbnMoKS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICB0aGlzLmtvQ29waWVkUXVlc3Rpb25zLnNwbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmYXN0Q29weVF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLmRvQ2xpY2tDb3BpZWRRdWVzdGlvbigganNvbiApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29waWVkUXVlc3Rpb25CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29Db3BpZWRRdWVzdGlvbnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIGl0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZU9iamVjdChvYmo6IGFueSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMucmVtb3ZlT2JqZWN0KG9iaik7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5yZW1vdmVQYWdlKG9iaik7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5yZW1vdmVRdWVzdGlvbihvYmopO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdCh0aGlzLnN1cnZleS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0xpdmVTdXJ2ZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdXJ2ZXlqc0V4YW1wbGUpIHJldHVybjtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGpzb24uY29va2llTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBqc29uLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5TdXJ2ZXkoanNvbik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5anNFeGFtcGxlUmVzdWx0c1wiKTtcbiAgICAgICAgICAgIHZhciBzdXJ2ZXlqc0V4YW1wbGVyZVJ1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5anNFeGFtcGxlcmVSdW5cIik7XG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlUmVzdWx0cykgc3VydmV5anNFeGFtcGxlUmVzdWx0cy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHN1cnZleWpzRXhhbXBsZXJlUnVuKSBzdXJ2ZXlqc0V4YW1wbGVyZVJ1bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSkgPT4geyBpZiAoc3VydmV5anNFeGFtcGxlUmVzdWx0cykgc3VydmV5anNFeGFtcGxlUmVzdWx0cy5pbm5lckhUTUwgPSB0aGlzLmdldExvY1N0cmluZyhcImVkLnN1cnZleVJlc3VsdHNcIikgKyBKU09OLnN0cmluZ2lmeShzdXJ2ZXkuZGF0YSk7IGlmIChzdXJ2ZXlqc0V4YW1wbGVyZVJ1bikgc3VydmV5anNFeGFtcGxlcmVSdW4uc3R5bGUuZGlzcGxheSA9IFwiXCI7IH0pO1xuICAgICAgICAgICAgc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzRXhhbXBsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleWpzRXhhbXBsZS5pbm5lckhUTUwgPSB0aGlzLmdldExvY1N0cmluZyhcImVkLmNvcnJlY3RKU09OXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd1N1cnZleUVtYmVkaW5nKCkge1xuICAgICAgICB2YXIganNvbiA9IHRoaXMuZ2V0U3VydmV5SlNPTigpO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLmpzb24gPSBqc29uO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnN1cnZleUlkID0gdGhpcy5zdXJ2ZXlJZDtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlQb3N0SWQgPSB0aGlzLnN1cnZleVBvc3RJZDtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5nZW5lcmF0ZVZhbGlkSlNPTiA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT047XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc2hvdygpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFN1cnZleUpTT04oKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMua29Jc1Nob3dEZXNpZ25lcigpKSAgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnN1cnZleSk7XG4gICAgICAgIGlmICh0aGlzLnRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkgcmV0dXJuIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnRleHRXb3JrZXIuc3VydmV5KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlQW5ub3RhdGlvbnModGV4dDogc3RyaW5nLCBlcnJvcnM6IGFueVtdKTogQWNlQWpheC5Bbm5vdGF0aW9uW10ge1xuICAgICAgICB2YXIgYW5ub3RhdGlvbnMgPSBuZXcgQXJyYXk8QWNlQWpheC5Bbm5vdGF0aW9uPigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb246IEFjZUFqYXguQW5ub3RhdGlvbiA9IHsgcm93OiBlcnJvci5wb3NpdGlvbi5zdGFydC5yb3csIGNvbHVtbjogZXJyb3IucG9zaXRpb24uc3RhcnQuY29sdW1uLCB0ZXh0OiBlcnJvci50ZXh0LCB0eXBlOiBcImVycm9yXCIgfTtcbiAgICAgICAgICAgIGFubm90YXRpb25zLnB1c2goYW5ub3RhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbn1cblxuU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXCJib290c3RyYXBcIjtcbm5ldyBTdXJ2ZXkuU3VydmV5VGVtcGxhdGVUZXh0KCkucmVwbGFjZVRleHQodGVtcGxhdGVQYWdlSHRtbCwgXCJwYWdlXCIpO1xubmV3IFN1cnZleS5TdXJ2ZXlUZW1wbGF0ZVRleHQoKS5yZXBsYWNlVGV4dCh0ZW1wbGF0ZVF1ZXN0aW9uSHRtbCwgXCJxdWVzdGlvblwiKTtcblxuU3VydmV5LlN1cnZleS5wcm90b3R5cGVbXCJvbkNyZWF0aW5nXCJdID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWQgPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgdGhpcy5vbkNvcHlRdWVzdGlvbiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB0aGlzLm9uRmFzdENvcHlRdWVzdGlvbiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkNvcHlRdWVzdGlvbi5maXJlKHNlbGYpOyB9O1xuICAgIHRoaXMuZmFzdENvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKHF1ZXN0aW9uKSB7IHNlbGYub25GYXN0Q29weVF1ZXN0aW9uLmZpcmUoc2VsZi8qLCBxdWVzdGlvbiovKTsgfTtcbiAgICB0aGlzLmtvRHJhZ2dpbmdTb3VyY2UgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xufTtcblN1cnZleS5TdXJ2ZXkucHJvdG90eXBlW1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXSA9IGZ1bmN0aW9uKHZhbHVlOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgaWYgKHZhbHVlID09IHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlKSByZXR1cm47XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAob2xkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBvbGRWYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWVbXCJvblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkXCJdKCk7XG4gICAgfVxuICAgIHRoaXMub25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ29sZFNlbGVjdGVkUXVlc3Rpb24nOiBvbGRWYWx1ZSwgJ25ld1NlbGVjdGVkUXVlc3Rpb24nOiB2YWx1ZSB9KTtcbn07XG5TdXJ2ZXkuU3VydmV5LnByb3RvdHlwZVtcImdldEVkaXRvckxvY1N0cmluZ1wiXSA9IGZ1bmN0aW9uICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyh2YWx1ZSk7XG59O1xuXG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJvbkNyZWF0aW5nXCJdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuICAgIHRoaXMua29EcmFnZ2luZyA9IGtvLm9ic2VydmFibGUoLTEpO1xuICAgIHRoaXMua29EcmFnZ2luZ1F1ZXN0aW9uID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICB0aGlzLmtvRHJhZ2dpbmdCb3R0b20gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmtvRHJhZ2dpbmcuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgPCAwKSB7XG4gICAgICAgICAgICBzZWxmLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nUXVlc3Rpb24obnVsbCk7XG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdCb3R0b20oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gbmV3VmFsdWUgPj0gMCAmJiBuZXdWYWx1ZSA8IHNlbGYucXVlc3Rpb25zLmxlbmd0aCA/IHNlbGYucXVlc3Rpb25zW25ld1ZhbHVlXSA6IG51bGw7XG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdCb3R0b20obmV3VmFsdWUgPT0gc2VsZi5xdWVzdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMua29EcmFnZ2luZ1F1ZXN0aW9uLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgaWYgKG5ld1ZhbHVlKSBuZXdWYWx1ZS5rb0lzRHJhZ2dpbmcodHJ1ZSk7IH0pO1xuICAgIHRoaXMua29EcmFnZ2luZ1F1ZXN0aW9uLnN1YnNjcmliZShmdW5jdGlvbiAob2xkVmFsdWUpIHsgaWYgKG9sZFZhbHVlKSBvbGRWYWx1ZS5rb0lzRHJhZ2dpbmcoZmFsc2UpOyB9LCB0aGlzLCBcImJlZm9yZUNoYW5nZVwiKTtcbiAgICB0aGlzLmRyYWdFbnRlciA9IGZ1bmN0aW9uIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgc2VsZi5kcmFnRW50ZXJDb3VudGVyKys7IHNlbGYuZG9EcmFnRW50ZXIoZSk7IH07XG4gICAgdGhpcy5kcmFnTGVhdmUgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdFbnRlckNvdW50ZXItLTsgaWYgKHNlbGYuZHJhZ0VudGVyQ291bnRlciA9PT0gMCkgc2VsZi5kb0RyYWdMZWF2ZShlKTsgfTtcbiAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kb0Ryb3AoZSk7IH07XG59O1xuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9Ecm9wXCJdID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICBpZiAoZHJhZ0Ryb3BIZWxwZXIpIHtcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9Ecm9wKGUpO1xuICAgIH1cbn07XG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJkb0RyYWdFbnRlclwiXSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5xdWVzdGlvbnMubGVuZ3RoID4gMCB8fCB0aGlzLmtvRHJhZ2dpbmcoKSA+IDApIHJldHVybjtcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICBpZiAoZHJhZ0Ryb3BIZWxwZXIgJiYgZHJhZ0Ryb3BIZWxwZXIuaXNTdXJ2ZXlEcmFnZ2luZyhlKSkge1xuICAgICAgICB0aGlzLmtvRHJhZ2dpbmcoMCk7XG4gICAgfVxufTtcblN1cnZleS5QYWdlLnByb3RvdHlwZVtcImRvRHJhZ0xlYXZlXCJdID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICBpZiAoZHJhZ0Ryb3BIZWxwZXIpIHtcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9MZWF2ZVBhZ2UoZSk7XG4gICAgfVxufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvbkNyZWF0aW5nXCJdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmRyYWdEcm9wSGVscGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMua29Jc0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgdGhpcy5rb0lzRHJhZ2dpbmdTb3VyY2UgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9IHNlbGYuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLmRyYWdPdmVyID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmRvRHJhZ0Ryb3BPdmVyKGUsIHNlbGYpOyB9O1xuICAgIHRoaXMuZHJhZ0Ryb3AgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9Ecm9wKGUsIHNlbGYpOyB9O1xuICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLnN0YXJ0RHJhZ1F1ZXN0aW9uKGUsIHNlbGYubmFtZSk7IH07XG4gICAgdGhpcy5kcmFnRW5kID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmVuZCgpOyB9O1xuICAgIHRoaXMua29Jc1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgdGhpcy5rb09uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBzZWxmLmRhdGFbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdKHRoaXMpO1xuICAgIH1cbn07XG5cblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMua29Jc1NlbGVjdGVkKHRoaXMuZGF0YVtcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEl0ZW0ge1xuICAgIHB1YmxpYyB2YWx1ZTogU3VydmV5LkJhc2U7XG4gICAgcHVibGljIHRleHQ6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdHMge1xuICAgIHB1YmxpYyBzdGF0aWMgaW50ZW5kOiBzdHJpbmcgPSBcIi4uLlwiO1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGtvT2JqZWN0czogYW55LCBwdWJsaWMga29TZWxlY3RlZDogYW55KSB7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkuU3VydmV5KSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVidWlsZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgcGFnZUl0ZW0gPSB0aGlzLmNyZWF0ZVBhZ2UocGFnZSk7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3VydmV5LnBhZ2VzLmluZGV4T2YocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHZhciBwcmV2UGFnZSA9IHRoaXMuc3VydmV5LnBhZ2VzW2luZGV4IC0gMV07XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHByZXZQYWdlKSArIDE7XG4gICAgICAgICAgICBpbmRleCArPSBwcmV2UGFnZS5xdWVzdGlvbnMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAxOyAvLzAgLSBTdXJ2ZXlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEl0ZW0ocGFnZUl0ZW0sIGluZGV4KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uKHBhZ2UucXVlc3Rpb25zW2ldKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShpdGVtLCBpbmRleCArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChwYWdlSXRlbSk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbihwYWdlOiBTdXJ2ZXkuUGFnZSwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIHF1ZXN0aW9uSW5kZXggPSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKSArIDE7XG4gICAgICAgIGluZGV4ICs9IHF1ZXN0aW9uSW5kZXg7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuYWRkSXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChpdGVtKTtcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdE9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2Jqc1tpXS52YWx1ZSA9PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQob2Jqc1tpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVPYmplY3Qob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHZhciBjb3VudFRvUmVtb3ZlID0gMTtcbiAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB2YXIgcGFnZTogU3VydmV5LlBhZ2UgPSA8U3VydmV5LlBhZ2U+b2JqO1xuICAgICAgICAgICAgY291bnRUb1JlbW92ZSArPSBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCBjb3VudFRvUmVtb3ZlKTtcbiAgICB9XG4gICAgcHVibGljIG5hbWVDaGFuZ2VkKG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvT2JqZWN0cygpW2luZGV4XS50ZXh0KHRoaXMuZ2V0VGV4dChvYmopKTtcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdE5leHRRdWVzdGlvbihpc1VwOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRRdWVzdGlvbigpO1xuICAgICAgICB2YXIgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocXVlc3Rpb24pO1xuICAgICAgICBpZiAoaXRlbUluZGV4IDwgMCkgcmV0dXJuIHF1ZXN0aW9uO1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIHZhciBuZXdJdGVtSW5kZXggPSBpdGVtSW5kZXggKyAoaXNVcCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChuZXdJdGVtSW5kZXggPCBvYmpzLmxlbmd0aCAmJiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmpzW25ld0l0ZW1JbmRleF0udmFsdWUpID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgICAgIHdoaWxlIChuZXdJdGVtSW5kZXggPCBvYmpzLmxlbmd0aCAmJiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmpzW25ld0l0ZW1JbmRleF0udmFsdWUpID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBuZXdJdGVtSW5kZXg7XG4gICAgICAgICAgICAgICAgbmV3SXRlbUluZGV4ICs9IChpc1VwID8gMSA6IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQob2Jqc1tpdGVtSW5kZXhdKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZFF1ZXN0aW9uKCk6IFN1cnZleS5RdWVzdGlvbkJhc2Uge1xuICAgICAgICBpZiAoIXRoaXMua29TZWxlY3RlZCgpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua29TZWxlY3RlZCgpLnZhbHVlO1xuICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUXVlc3Rpb24gPyA8U3VydmV5LlF1ZXN0aW9uQmFzZT4ob2JqKSA6IG51bGw7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKGl0ZW06IFN1cnZleU9iamVjdEl0ZW0sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5rb09iamVjdHMoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzLnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVidWlsZCgpIHtcbiAgICAgICAgdmFyIG9ianMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzKG9ianMpO1xuICAgICAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZUl0ZW0odGhpcy5zdXJ2ZXksIFwiU3VydmV5XCIpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaV07XG4gICAgICAgICAgICBvYmpzLnB1c2godGhpcy5jcmVhdGVQYWdlKHBhZ2UpKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2godGhpcy5jcmVhdGVRdWVzdGlvbihwYWdlLnF1ZXN0aW9uc1tqXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29PYmplY3RzKG9ianMpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5zdXJ2ZXkpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlbShwYWdlLCB0aGlzLmdldFRleHQocGFnZSkpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUl0ZW0ocXVlc3Rpb24sIHRoaXMuZ2V0VGV4dChxdWVzdGlvbikpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW0odmFsdWU6IFN1cnZleS5CYXNlLCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgU3VydmV5T2JqZWN0SXRlbSgpO1xuICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGl0ZW0udGV4dCA9IGtvLm9ic2VydmFibGUodGV4dCk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEl0ZW1JbmRleCh2YWx1ZTogU3VydmV5LkJhc2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gdmFsdWUpIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KG9iajogU3VydmV5LkJhc2UpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaW50ZW5kID0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIGlmIChTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopICE9IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgaW50ZW5kICs9IFN1cnZleU9iamVjdHMuaW50ZW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRlbmQgKyBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShvYmopO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsImV4cG9ydCB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwic3ZkX2NvbnRhaW5lclwiPiAgPHVsIGNsYXNzPVwibmF2YmFyLWRlZmF1bHQgY29udGFpbmVyLWZsdWlkIG5hdiBuYXYtdGFicyBzdmRfbWVudVwiPiAgICA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7IGFjdGl2ZToga29WaWV3VHlwZSgpID09IFxcJ2Rlc2lnbmVyXFwnIH1cIj48YSBkYXRhLWJpbmQ9XCJjbGljazogc2VsZWN0RGVzaWduZXJDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmRlc2lnbmVyXFwnKVwiPjwvYT48L2xpPiAgICA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7IGFjdGl2ZToga29WaWV3VHlwZSgpID09IFxcJ3Rlc3RcXCcgfVwiPjxhIGRhdGEtYmluZD1cImNsaWNrOiBzZWxlY3RUZXN0Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5XFwnKVwiPjwvYT48L2xpPiAgICA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7IGFjdGl2ZToga29WaWV3VHlwZSgpID09IFxcJ2VkaXRvclxcJyB9XCI+PGEgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdEVkaXRvckNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuanNvbkVkaXRvclxcJylcIj48L2E+PC9saT4gICAgPCEtLSA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZW1iZWRcXCd9XCI+PGEgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdEVtYmVkQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5lbWJlZFN1cnZleVxcJylcIj48L2E+PC9saT4gLS0+ICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPiAgICAgIDxsaSBjbGFzcz1cInN2ZF9hY3Rpb25zXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29Jc1Nob3dEZXNpZ25lclwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGRhdGEtYmluZD1cImVuYWJsZTogdW5kb1JlZG8ua29DYW5VbmRvLCBjbGljazogZG9VbmRvQ2xpY2tcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQudW5kb1xcJylcIj48L3NwYW4+PC9idXR0b24+PC9saT4gICAgICA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSXNTaG93RGVzaWduZXJcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IHVuZG9SZWRvLmtvQ2FuUmVkbywgY2xpY2s6IGRvUmVkb0NsaWNrXCI+PHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnJlZG9cXCcpXCI+PC9zcGFuPjwvYnV0dG9uPjwvbGk+ICAgICAgPCEtLSA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSXNTaG93RGVzaWduZXJcIj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZToga29TaG93T3B0aW9ucygpXCIgY2xhc3M9XCJidG4tZ3JvdXAgaW5saW5lXCI+ICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5vcHRpb25zXFwnKVwiPk9wdGlvbnMgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj48L2J1dHRvbj4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPiAgICAgICAgICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGtvR2VuZXJhdGVWYWxpZEpTT059XCI+PGEgaHJlZj1cIiNcIiBkYXRhLWJpbmQ9XCJjbGljazogZ2VuZXJhdGVWYWxpZEpTT05DbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmdlbmVyYXRlVmFsaWRKU09OXFwnKVwiPjwvYT48L2xpPiAgICAgICAgICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICFrb0dlbmVyYXRlVmFsaWRKU09OKCl9XCI+PGEgaHJlZj1cIiNcIiBkYXRhLWJpbmQ9XCJjbGljazogZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmdlbmVyYXRlUmVhZGFibGVKU09OXFwnKVwiPjwvYT48L2xpPiAgICAgICAgICA8L3VsPiAgICAgICAgPC9kaXY+ICAgICAgPC9saT4gLS0+ICAgICAgPGxpIGNsYXNzPVwic3ZkX2FjdGlvbnNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiBkYXRhLWJpbmQ9XCJjbGljazogc2F2ZUJ1dHRvbkNsaWNrLCB2aXNpYmxlOiBrb1Nob3dTYXZlQnV0dG9uXCIgaWQ9XCJidG4tc2F2ZVwiIGRhdGEtbG9hZGluZy10ZXh0PVwiPGkgY2xhc3M9XFwncGUtY2lyY2xlLW8tbm90Y2ggcGUtc3BpbiBwZS1md1xcJz48L2k+IFNhdmluZy4uLlwiIGRhdGEtc2F2ZWQtdGV4dD1cIjxpIGNsYXNzPVxcJ3BlLXNhdmUgcGUtZndcXCc+PC9pPiBTYXZlZFwiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5zYXZlU3VydmV5XFwnKVwiPjwvc3Bhbj48L2J1dHRvbj48L2xpPiAgICAgIDxsaSBjbGFzcz1cInN2ZF9hY3Rpb25zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgb25jbGljaz1cImxvY2F0aW9uLmhyZWY9XFwnL2FkbWluLz93PXN1cnZleXNcXCdcIj48c3Bhbj5CYWNrPC9zcGFuPjwvYnV0dG9uPjwvbGk+ICAgICAgPCEtLSA8bGkgY2xhc3M9XCJlZGl0b3ItdG9wbmF2LXJpZ2h0XCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj1cXCcvYWRtaW4vP3c9c3VydmV5c1xcJ1wiPjxzcGFuPkJhY2s8L3NwYW4+PC9idXR0b24+PC9saT4gLS0+ICAgIDwvdWw+ICA8L3VsPiAgPGRpdiBjbGFzcz1cInBhbmVsIHN2ZF9jb250ZW50XCI+ICAgIDxkaXYgY2xhc3M9XCJyb3cgc3ZkX3N1cnZleV9kZXNpZ25lclwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSBcXCdkZXNpZ25lclxcJ1wiPiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMTIgY29sLXhzLTEyIHBhbmVsIHBhbmVsLWRlZmF1bHQgc3ZkX3Rvb2xib3hcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAtdmVydGljYWxcIiBzdHlsZT1cIndpZHRoOjEwMCU7cGFkZGluZy1yaWdodDoycHhcIj4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvblR5cGVzIC0tPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7IG1hcmdpbjoxcHg7d2lkdGg6MTAwJVwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5jbGlja1F1ZXN0aW9uLCBldmVudDogeyBkcmFnc3RhcnQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ2dpbmdRdWVzdGlvbigkZGF0YSwgZSk7IHJldHVybiB0cnVlO30sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ0VuZCgpOyB9fVwiPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cImNzczogXFwnaWNvbi1cXCcgKyAkZGF0YVwiPjwvc3Bhbj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2ZF90b29sYm94X2l0ZW1fdGV4dFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdxdC5cXCcgKyAkZGF0YSlcIj48L3NwYW4+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0NvcGllZFF1ZXN0aW9ucyAtLT4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O21hcmdpbjoxcHg7d2lkdGg6MTAwJVwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5jbGlja0NvcGllZFF1ZXN0aW9uLCBldmVudDogeyBkcmFnc3RhcnQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ2dpbmdDb3BpZWRRdWVzdGlvbigkZGF0YSwgZSk7IHJldHVybiB0cnVlO30sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ0VuZCgpOyB9fVwiPiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1kZWZhdWx0XCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZkX3Rvb2xib3hfaXRlbV90ZXh0XCIgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvc3Bhbj4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPC9kaXY+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy03IGNvbC1tZC03IGNvbC1zbS0xMiBjb2wteHMtMTIgc3ZkX2VkaXRvcnNcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJzdmRfcGFnZXNfZWRpdG9yXCIgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwncGFnZWVkaXRvclxcJywgZGF0YTogcGFnZXNFZGl0b3IgfVwiPjwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cInN2ZF9xdWVzdGlvbnNfZWRpdG9yXCIgaWQ9XCJzY3JvbGxhYmxlRGl2XCI+ICAgICAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc1wiPjwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMiBjb2wteHMtMTIgcGFuZWwgcGFuZWwtZGVmYXVsdCBzdmRfcHJvcGVydGllc1wiPiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgaW5wdXQtZ3JvdXBcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1zZWxlY3RcIj4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29PYmplY3RzLCBvcHRpb25zVGV4dDogXFwndGV4dFxcJywgdmFsdWU6IGtvU2VsZWN0ZWRPYmplY3RcIj48L3NlbGVjdD4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImVuYWJsZToga29DYW5EZWxldGVPYmplY3QsIGNsaWNrOiBkZWxldGVDdXJyZW50T2JqZWN0LCBhdHRyOiB7IHRpdGxlOiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuZGVsU2VsT2JqZWN0XFwnKX1cIj48aSBjbGFzcz1cInBlLXJlbW92ZVwiPjwvaT48L2J1dHRvbj4gICAgICAgICAgPC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnb2JqZWN0ZWRpdG9yXFwnLCBkYXRhOiBzZWxlY3RlZE9iamVjdEVkaXRvciB9XCI+PC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogc3VydmV5VmVyYnMua29IYXNWZXJic1wiPiAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ29iamVjdHZlcmJzXFwnLCBkYXRhOiBzdXJ2ZXlWZXJicyB9XCI+PC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc0pTT05FZGl0b3JcIiBjbGFzcz1cInN2ZF9qc29uX2VkaXRvclwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSBcXCdlZGl0b3JcXCdcIj48L2Rpdj4gICAgPGRpdiBpZD1cInN1cnZleWpzVGVzdFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSBcXCd0ZXN0XFwnLCBzdHlsZToge3dpZHRoOiBrb1Rlc3RTdXJ2ZXlXaWR0aH1cIj4gICAgICA8IS0tIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29UZXN0U3VydmV5V2lkdGhcIj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAlXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCcxMDAlXFwnXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTIwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCcxMjAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDAwcHhcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQudGVzdFN1cnZleVdpZHRoXFwnKSArIFxcJzEwMDBweFxcJ1wiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjgwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCc4MDBweFxcJ1wiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCc2MDBweFxcJ1wiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCc0MDBweFxcJ1wiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAtLT4gICAgICA8ZGl2IGlkPVwic3VydmV5anNFeGFtcGxlXCI+PC9kaXY+ICAgICAgPGRpdiBpZD1cInN1cnZleWpzRXhhbXBsZVJlc3VsdHNcIj48L2Rpdj4gICAgICA8YnV0dG9uIGlkPVwic3VydmV5anNFeGFtcGxlcmVSdW5cIiBkYXRhLWJpbmQ9XCJjbGljazogc2VsZWN0VGVzdENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQudGVzdFN1cnZleUFnYWluXFwnKVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+VGVzdCBBZ2FpbjwvYnV0dG9uPiAgICA8L2Rpdj4gICAgPCEtLSA8ZGl2IGlkPVwic3VydmV5anNFbWJlZFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSBcXCdlbWJlZFxcJ1wiPiAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5ZW1iZWRpbmdcXCcsIGRhdGE6IHN1cnZleUVtYmVkaW5nIH1cIj48L2Rpdj4gICAgPC9kaXY+IC0tPiAgPC9kaXY+PC9kaXY+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJvYmplY3RlZGl0b3JcIj4gIDx0YWJsZSBjbGFzcz1cInRhYmxlIHN2ZF90YWJsZS1ub3dyYXBcIj4gICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IGtvUHJvcGVydGllc1wiPiAgICAgIDx0ciBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5jaGFuZ2VBY3RpdmVQcm9wZXJ0eSgkZGF0YSksIGNzczoge1xcJ2FjdGl2ZVxcJzogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGF9XCI+ICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogZGlzcGxheU5hbWUsIGF0dHI6IHt0aXRsZTogdGl0bGV9XCIgd2lkdGg9XCI1MCVcIiBzdHlsZT1cImZvbnQtZmFtaWx5OnVidW50dTsgZm9udC1zaXplOjEwcHhcIj48L3RkPiAgICAgICAgPHRkIHdpZHRoPVwiNTAlXCIgc3R5bGU9XCJmb250LWZhbWlseTpib29uO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM1NTVcIj4gICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDoga29UZXh0LCB2aXNpYmxlOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSAhPSAkZGF0YSAmJiAoa29UZXh0KCkgfHwgJGRhdGEuZWRpdG9yVHlwZSA9PSBcXCdib29sZWFuXFwnKSwgYXR0cjogeyB0aXRsZToga29UZXh0IH1cIiBzdHlsZT1cInRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IHdoaXRlLXNwYWNlOm5vd3JhcDsgb3ZlcmZsb3c6aGlkZGVuXCI+PC9zcGFuPiAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhIHx8ICgha29UZXh0KCkgJiYgJGRhdGEuZWRpdG9yVHlwZSAhPSBcXCdib29sZWFuXFwnKVwiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItXFwnICsgZWRpdG9yVHlwZSwgZGF0YTogJGRhdGEgfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPC9kaXY+ICAgICAgICA8L3RkPiAgICAgIDwvdHI+ICAgIDwvdGJvZHk+ICA8L3RhYmxlPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwib2JqZWN0dmVyYnNcIj4gIDwhLS0ga28gZm9yZWFjaDoga29WZXJicyAtLT4gICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBpbnB1dC1zbVwiIGRhdGEtYmluZD1cInRleHQ6IHRleHRcIj48L3NwYW4+ICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIG9wdGlvbnNWYWx1ZTogXFwndmFsdWVcXCcsIHZhbHVlOiBrb1NlbGVjdGVkSXRlbVwiPjwvc2VsZWN0PiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gIDwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicGFnZWVkaXRvclwiPiAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgZGF0YS1iaW5kPVwidGFiczogdHJ1ZVwiPiAgICA8IS0tIGtvIGZvcmVhY2g6IGtvUGFnZXMgLS0+ICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHsgYWN0aXZlOiBrb1NlbGVjdGVkKCl9LCBldmVudDogeyBrZXlkb3duOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmtleURvd24oZWwsIGUpOyB9LCBkcmFnc3RhcnQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ1N0YXJ0KGVsKTsgcmV0dXJuIHRydWU7IH0sIGRyYWdvdmVyOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdPdmVyKGVsKTsgfSwgZHJhZ2VuZDogZnVuY3Rpb24oZWwsIGUpIHsgJHBhcmVudC5kcmFnRW5kKCk7IH0sIGRyb3A6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ0Ryb3AoZWwpOyB9IH1cIj4gICAgICA8YSBjbGFzcz1cInN2ZF9wYWdlX25hdlwiIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50LnNlbGVjdFBhZ2VDbGlja1wiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHRpdGxlXCI+PC9zcGFuPjwvYT4gICAgPC9saT4gICAgPCEtLSAva28gLS0+ICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHN2ZF9hZGRfbmV3X3BhZ2VfYnRuXCIgZGF0YS1iaW5kPVwiY2xpY2s6IGFkZE5ld1BhZ2VDbGlja1wiPjxpIGNsYXNzPVwicGUtcGx1c1wiPjwvaT48L2J1dHRvbj48L2xpPiAgPC91bD48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleWVtYmVkaW5nXCI+ICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPiAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVwidmFsdWU6IGtvTGlicmFyeVZlcnNpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtub2Nrb3V0XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3Lmtub2Nrb3V0XFwnKVwiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlYWN0XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnJlYWN0XFwnKVwiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJ2YWx1ZToga29TY3JpcHRVc2luZ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCI+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9vdHN0cmFwXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LmJvb3RzdHJhcFxcJylcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdGFuZGFyZFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdldy5zdGFuZGFyZFxcJylcIj48L29wdGlvbj4gICAgICA8L3NlbGVjdD4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPiAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVwidmFsdWU6IGtvU2hvd0FzV2luZG93XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYWdlXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnNob3dPblBhZ2VcXCcpXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2luZG93XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnNob3dJbldpbmRvd1xcJylcIj48L29wdGlvbj4gICAgICA8L3NlbGVjdD4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPiAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0hhc0lkc1wiPiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImNoZWNrZWQ6IGtvTG9hZFN1cnZleVwiPiAgICAgICAgPHNtYWxsIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdldy5sb2FkRnJvbVNlcnZlclxcJylcIj48L3NtYWxsPiAgICAgIDwvbGFiZWw+ICAgIDwvZGl2PiAgPC9kaXY+ICA8YnI+ICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4gICAgICA8aDQgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnRpdGxlU2NyaXB0XFwnKVwiPjwvaDQ+ICAgICAgPGRpdiBpZD1cInN1cnZleUVtYmVkaW5nSGVhZFwiIHN0eWxlPVwiaGVpZ2h0OjcwcHg7d2lkdGg6MTAwJVwiPjwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvVmlzaWJsZUh0bWxcIj4gICAgICA8aDQgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnRpdGxlSHRtbFxcJylcIj48L2g0PiAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXlFbWJlZGluZ0JvZHlcIiBzdHlsZT1cImhlaWdodDozMHB4O3dpZHRoOjEwMCVcIj48L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4gICAgICA8aDQgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnRpdGxlSmF2YVNjcmlwdFxcJylcIj48L2g0PiAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXlFbWJlZGluZ0phdmFcIiBzdHlsZT1cImhlaWdodDozMDBweDt3aWR0aDoxMDAlXCI+PC9kaXY+ICAgIDwvZGl2PiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1ib29sZWFuXCI+ICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWJpbmQ9XCJjaGVja2VkOiBrb1ZhbHVlXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1kcm9wZG93blwiPiAgPGRpdiBjbGFzcz1cImN1c3RvbS1zZWxlY3RcIj4gICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlLCBvcHRpb25zOiBjaG9pY2VzXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9zZWxlY3Q+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLWh0bWxcIj4gIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItbW9kYWxcXCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaHRtbFwiPiAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWVcIiBzdHlsZT1cIndpZHRoOjEwMCVcIiByb3dzPVwiMTBcIiBhdXRvZm9jdXM9XCJhdXRvZm9jdXNcIj48L3RleHRhcmVhPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItaXRlbXZhbHVlc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1pdGVtdmFsdWVzXCI+ICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDpoaWRkZW47IG1heC1oZWlnaHQ6NDAwcHhcIj4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj4gICAgICA8dGhlYWQ+ICAgICAgICA8dHI+ICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnZhbHVlXFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudGV4dFxcJylcIj48L3RoPiAgICAgICAgICA8dGg+PC90aD4gICAgICAgIDwvdHI+ICAgICAgPC90aGVhZD4gICAgICA8dGJvZHk+ICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+ICAgICAgICA8dHI+ICAgICAgICAgIDx0ZD4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+ICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkaW5kZXgoKSA+IDAsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZVVwQ2xpY2tcIj48aSBjbGFzcz1cInBlLWFycm93LXVwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzXCIgc3R5bGU9XCJmbG9hdDpub25lXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogJGluZGV4KCkgPCAkcGFyZW50LmtvSXRlbXMoKS5sZW5ndGggLSAxLCBjbGljazogJHBhcmVudC5vbk1vdmVEb3duQ2xpY2tcIj48aSBjbGFzcz1cInBlLWFycm93LWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIDwvdGQ+ICAgICAgICAgIDx0ZD4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxNTBweFwiPiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgbm8tcGFkZGluZ1wiIHJvbGU9XCJhbGVydFwiIGRhdGEtYmluZD1cInZpc2libGU6a29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmVudGVyTmV3VmFsdWVcXCcpXCI+PC9kaXY+ICAgICAgICAgIDwvdGQ+ICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RleHRcIiBzdHlsZT1cIndpZHRoOjE1MHB4XCI+PC90ZD4gICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1wiPjxpIGNsYXNzPVwicGUtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC90ZD4gICAgICAgIDwvdHI+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L3Rib2R5PiAgICA8L3RhYmxlPiAgPC9kaXY+ICA8ZGl2IGNsYXNzPVwicm93IGJ0bi10b29sYmFyXCI+ICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIgZGF0YS1iaW5kPVwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuYWRkTmV3XFwnKVwiPiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgZGF0YS1iaW5kPVwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5yZW1vdmVBbGxcXCcpXCI+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1uc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1tYXRyaXhkcm9wZG93bmNvbHVtbnNcIj4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+ICAgIDx0aGVhZD4gICAgICA8dHI+ICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnJlcXVpcmVkXFwnKVwiPjwvdGg+ICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmNlbGxUeXBlXFwnKVwiPjwvdGg+ICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLm5hbWVcXCcpXCI+PC90aD4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudGl0bGVcXCcpXCI+PC90aD4gICAgICAgIDx0aD48L3RoPiAgICAgIDwvdHI+ICAgIDwvdGhlYWQ+ICAgIDx0Ym9keT4gICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+ICAgICAgPHRyPiAgICAgICAgPHRkPiAgICAgICAgICA8YSBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0hhc0Nob2ljZXMsIGNsaWNrOiBvblNob3dDaG9pY2VzQ2xpY2tcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvblwiIGRhdGEtYmluZD1cImNzczoge1xcJ2dseXBoaWNvbi1jaGV2cm9uLWRvd25cXCc6ICFrb1Nob3dDaG9pY2VzKCksIFxcJ2dseXBoaWNvbi1jaGV2cm9uLXVwXFwnOiBrb1Nob3dDaG9pY2VzKCl9XCI+PC9zcGFuPjwvYT4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImNoZWNrZWQ6IGtvSXNSZXF1aXJlZFwiPiAgICAgICAgPC90ZD4gICAgICAgIDx0ZD4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGNlbGxUeXBlQ2hvaWNlcywgdmFsdWU6IGtvQ2VsbFR5cGVcIiBzdHlsZT1cIndpZHRoOjExMHB4XCI+PC9zZWxlY3Q+ICAgICAgICA8L3RkPiAgICAgICAgPHRkPiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cInZhbHVlOiBrb05hbWVcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgbm8tcGFkZGluZ1wiIHJvbGU9XCJhbGVydFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzRXJyb3IsIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5lbnRlck5ld1ZhbHVlXFwnKVwiPjwvZGl2PiAgICAgICAgPC90ZD4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RpdGxlXCIgc3R5bGU9XCJ3aWR0aDoxMjBweFwiPjwvdGQ+ICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXCI+PGkgY2xhc3M9XCJwZS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj48L3RkPiAgICAgIDwvdHI+ICAgICAgPHRyIGRhdGEtYmluZD1cInZpc2libGU6IGtvU2hvd0Nob2ljZXMoKSAmJiBrb0hhc0Nob2ljZXMoKVwiPiAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgc3R5bGU9XCJib3JkZXItdG9wLXN0eWxlOm5vbmVcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCIgZGF0YS1iaW5kPVwidGV4dDokcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuaGFzT3RoZXJcXCcpXCI+PC9sYWJlbD4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29IYXNPdGhlclwiPjwvZGl2PiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiIGRhdGEtYmluZD1cInZpc2libGU6ICFrb0hhc0NvbENvdW50KClcIj48L2Rpdj4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29IYXNDb2xDb3VudCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmNvbENvdW50XFwnKVwiPjwvbGFiZWw+ICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbSBjb2wtc20tNFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzQ29sQ291bnQsIG9wdGlvbnM6IGNvbENvdW50Q2hvaWNlcywgdmFsdWU6IGtvQ29sQ291bnRcIiBzdHlsZT1cIndpZHRoOjExMHB4XCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1wiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3Jjb250ZW50LWl0ZW12YWx1ZXNcXCcsIGRhdGE6IGNob2ljZXNFZGl0b3IgfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPC9kaXY+ICAgICAgICA8L3RkPiAgICAgIDwvdHI+ICAgICAgPCEtLSAva28gLS0+ICAgICAgPHRyPiAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGJ0bi10b29sYmFyXCI+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJpbmQ9XCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5hZGROZXdcXCcpXCI+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtYmluZD1cImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUucmVtb3ZlQWxsXFwnKVwiPiAgICAgICAgPC9kaXY+ICAgICAgICA8L3RkPiAgICAgIDwvdHI+ICAgIDwvdGJvZHk+ICA8L3RhYmxlPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItbW9kYWxcIj4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiIGRhdGEtYmluZD1cInZpc2libGU6ICFlZGl0b3IuaXNFZGl0YWJsZVwiPiAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBrb1RleHRcIj48L3NwYW4+ICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBzdHlsZT1cInBhZGRpbmc6MnB4XCIgZGF0YS1iaW5kPVwiYXR0cjogeyBcXCdkYXRhLXRhcmdldFxcJyA6IG1vZGFsTmFtZVRhcmdldCB9XCI+PGkgY2xhc3M9XCJwZS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvZGl2PiAgPC9kaXY+ICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBlZGl0b3IuaXNFZGl0YWJsZVwiIHN0eWxlPVwiZGlzcGxheTp0YWJsZVwiPiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLWNlbGw7IHdpZHRoOjEwMCVcIj4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLWNlbGw7IHBhZGRpbmc6MnB4XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYmluZD1cImF0dHI6IHsgXFwnZGF0YS10YXJnZXRcXCcgOiBtb2RhbE5hbWVUYXJnZXQgfVwiPjxpIGNsYXNzPVwicGUtZWRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj48L2Rpdj4gIDwvZGl2PiAgPGRpdiBkYXRhLWJpbmQ9XCJhdHRyOiB7IGlkIDogbW9kYWxOYW1lIH1cIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+ICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+ICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgZGF0YS1iaW5kPVwidGV4dDogZWRpdG9yLnRpdGxlXCI+PC9oND4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgc3ZkX25vdG9wYm90dG9tcGFkZGluZ3NcIj4gICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtXFwnICsgZWRpdG9yVHlwZSwgZGF0YTogZWRpdG9yIH0gLS0+ICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWJpbmQ9XCJjbGljazogZWRpdG9yLm9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5hcHBseVxcJylcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCI+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWJpbmQ9XCJjbGljazogZWRpdG9yLm9uUmVzZXRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5yZXNldFxcJylcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCI+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtYmluZD1cInZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuY2xvc2VcXCcpXCIgc3R5bGU9XCJ3aWR0aDoxMDBweFwiPiAgICAgICAgPC9kaXY+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1udW1iZXJcIj4gIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJudW1iZXJcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItcmVzdGZ1bGxcIj4gIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItbW9kYWxcXCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtcmVzdGZ1bGxcIj4gIDxmb3JtPiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJ1cmxcIj5Vcmw6PC9sYWJlbD4gICAgICA8aW5wdXQgaWQ9XCJ1cmxcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1VybFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJwYXRoXCI+UGF0aDo8L2xhYmVsPiAgICAgIDxpbnB1dCBpZD1cInBhdGhcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1BhdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4gICAgICA8bGFiZWwgZm9yPVwidmFsdWVOYW1lXCI+dmFsdWVOYW1lOjwvbGFiZWw+ICAgICAgPGlucHV0IGlkPVwidmFsdWVOYW1lXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZU5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVOYW1lXCI+dGl0bGVOYW1lOjwvbGFiZWw+ICAgICAgPGlucHV0IGlkPVwidGl0bGVOYW1lXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29UaXRsZU5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPiAgICA8L2Rpdj4gIDwvZm9ybT4gIDxkaXYgaWQ9XCJyZXN0ZnVsbFN1cnZleVwiIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTUwcHhcIj48L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXN0cmluZ1wiPiAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItdGV4dFwiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0XCI+ICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHJvd3M9XCIxMFwiIGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiPjwvdGV4dGFyZWE+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXNcIj4gIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItbW9kYWxcXCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdGV4dGl0ZW1zXCI+ICA8ZGl2IGNsYXNzPVwicGFuZWxcIj4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj4gICAgICA8dGhlYWQ+ICAgICAgICA8dHI+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUubmFtZVxcJylcIj48L3RoPiAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRpdGxlXFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgPC90cj4gICAgICA8L3RoZWFkPiAgICAgIDx0Ym9keT4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvTmFtZVwiIHN0eWxlPVwid2lkdGg6MjAwcHhcIj48L3RkPiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29UaXRsZVwiIHN0eWxlPVwid2lkdGg6MjAwcHhcIj48L3RkPiAgICAgICAgICA8IS0tIDx0ZD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tZGFuZ2VyXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5kZWxldGVcXCcpXCI+PC90ZD4gLS0+ICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcIj48aSBjbGFzcz1cInBlLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvdGQ+ICAgICAgICA8L3RyPiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8dHI+ICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJpbmQ9XCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5hZGROZXdcXCcpXCI+PC90ZD4gICAgICAgIDwvdHI+ICAgICAgPC90Ym9keT4gICAgPC90YWJsZT4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItdHJpZ2dlcnNcIj4gIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItbW9kYWxcXCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdHJpZ2dlcnNcIj4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiPiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaW5wdXQtZ3JvdXBcIj4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGlucHV0LWdyb3VwLWFkZG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PGkgY2xhc3M9XCJwZS1wbHVzXCI+PC9pPjwvYnV0dG9uPiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGF2YWlsYWJsZVRyaWdnZXJzIC0tPiAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGljaygkZGF0YSlcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkZGF0YVwiPjwvc3Bhbj48L2E+PC9saT4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L3VsPiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvSXRlbXMsIG9wdGlvbnNUZXh0OiBcXCdrb1RleHRcXCcsIHZhbHVlOiBrb1NlbGVjdGVkXCI+PC9zZWxlY3Q+ICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzcz1cInBlLXJlbW92ZVwiPjwvaT48L2J1dHRvbj48L3NwYW4+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvU2VsZWN0ZWQoKSA9PSBudWxsXCI+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA9PSAwLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUubm9xdWVzdGlvbnNcXCcpXCI+PC9kaXY+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA+IDAsIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5jcmVhdGV0cmlnZ2VyXFwnKVwiPjwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbFwiPiAgICAgIDxkaXYgZGF0YS1iaW5kPVwid2l0aDoga29TZWxlY3RlZFwiPiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmb3JtLWlubGluZVwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VyT25cXCcpXCI+PC9zcGFuPjxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiAkcGFyZW50LmtvUXVlc3Rpb25zLCB2YWx1ZToga29OYW1lXCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwib3B0aW9uczogYXZhaWxhYmxlT3BlcmF0b3JzLCBvcHRpb25zVmFsdWU6IFxcJ25hbWVcXCcsIG9wdGlvbnNUZXh0OiBcXCd0ZXh0XFwnLCB2YWx1ZToga29PcGVyYXRvclwiPjwvc2VsZWN0PiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+ICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1JlcXVpcmVWYWx1ZSwgdmFsdWU6IGtvVmFsdWVcIj4gICAgICAgICAgPC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09IFxcJ3Zpc2libGV0cmlnZ2VyXFwnIC0tPiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXNcXCcsIGRhdGE6IHBhZ2VzIH0gLS0+ICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXNcXCcsIGRhdGE6IHF1ZXN0aW9ucyB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSBcXCdjb21wbGV0ZXRyaWdnZXJcXCcgLS0+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDEwcHhcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudHJpZ2dlckNvbXBsZXRlVGV4dFxcJylcIj48L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSBcXCdzZXR2YWx1ZXRyaWdnZXJcXCcgLS0+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZvcm0taW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRyaWdnZXJTZXRUb05hbWVcXCcpXCI+PC9zcGFuPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvc2V0VG9OYW1lXCI+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VyU2V0VmFsdWVcXCcpXCI+PC9zcGFuPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvc2V0VmFsdWVcIj4gICAgICAgICAgPC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmb3JtLWlubGluZVwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCI+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImNoZWNrZWQ6IGtvaXNWYXJpYWJsZVwiPiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudHJpZ2dlcklzVmFyaWFibGVcXCcpXCI+PC9zcGFuPiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zXCI+ICA8ZGl2IGNsYXNzPVwicGFuZWwgbm8tbWFyZ2lucyBuby1wYWRkaW5nXCI+ICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+ICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdGl0bGVcIj48L3NwYW4+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4gICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbXVsdGlwbGU9XCJtdWx0aXBsZVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvQ2hvb3NlbiwgdmFsdWU6IGtvQ2hvb3NlblNlbGVjdGVkXCI+PC9zZWxlY3Q+ICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImVuYWJsZToga29DaG9vc2VuU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1wiIGNsYXNzPVwiYnRuXCI+PGkgY2xhc3M9XCJwZS1yZW1vdmVcIj48L2k+PC9idXR0b24+PC9zcGFuPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweFwiPiAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBrb09iamVjdHMsIHZhbHVlOiBrb1NlbGVjdGVkXCI+PC9zZWxlY3Q+ICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25BZGRDbGlja1wiIHN0eWxlPVwid2lkdGg6NDBweFwiIGNsYXNzPVwiYnRuXCI+PGkgY2xhc3M9XCJwZS1wbHVzXCI+PC9pPjwvYnV0dG9uPjwvc3Bhbj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnNcIj4gIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItbW9kYWxcXCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdmFsaWRhdG9yc1wiPiAgPGRpdiBjbGFzcz1cInBhbmVsXCI+ICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+ICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dC1ncm91cFwiPiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgaW5wdXQtZ3JvdXAtYWRkb25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzcz1cInBlLXBsdXNcIj48L2k+PC9idXR0b24+ICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVmFsaWRhdG9ycyAtLT4gICAgICAgICAgPGxpPjxhIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50Lm9uQWRkQ2xpY2soJGRhdGEpXCI+PHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJGRhdGFcIj48L3NwYW4+PC9hPjwvbGk+ICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPC91bD4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogXFwndGV4dFxcJywgdmFsdWU6IGtvU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcIiBjbGFzcz1cImJ0blwiPjxpIGNsYXNzPVwicGUtcmVtb3ZlXCI+PC9pPjwvYnV0dG9uPjwvc3Bhbj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnb2JqZWN0ZWRpdG9yXFwnLCBkYXRhOiBzZWxlY3RlZE9iamVjdEVkaXRvciB9XCI+PC9kaXY+ICA8L2Rpdj48L3NjcmlwdD4nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wbGF0ZUVkaXRvci5rby5odG1sLnRzIiwiZXhwb3J0IHZhciBodG1sID0gJzxkaXYgZGF0YS1iaW5kPVwiZXZlbnQ6IHsgZHJhZ2VudGVyOiBmdW5jdGlvbihlbCwgZSkgeyBkcmFnRW50ZXIoZSk7IH0sIGRyYWdsZWF2ZTogZnVuY3Rpb24oZWwsIGUpIHsgZHJhZ0xlYXZlKGUpOyB9LCBkcmFnb3ZlcjogZnVuY3Rpb24oZWwsIGUpIHsgcmV0dXJuIGZhbHNlOyB9LCBkcm9wOiBmdW5jdGlvbihlbCwgZSkgeyBkcmFnRHJvcChlKTsgfX1cIj4gIDxoNCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAodGl0bGUubGVuZ3RoID4gMCkgJiYgZGF0YS5zaG93UGFnZVRpdGxlcywgdGV4dDoga29ObygpICsgcHJvY2Vzc2VkVGl0bGUsIGNzczogJHJvb3QuY3NzLnBhZ2VUaXRsZVwiPjwvaDQ+ICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93cywgYXM6IFxcJ3Jvd1xcJ30gLS0+ICA8ZGl2IGNsYXNzPVwic3ZkX3F1ZXN0aW9uX2NvbnRhaW5lclwiIGRhdGEtYmluZD1cInZpc2libGU6IHJvdy5rb1Zpc2libGUsIGNzczogJHJvb3QuY3NzLnJvd1wiPiAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcm93LnF1ZXN0aW9ucywgYXM6IFxcJ3F1ZXN0aW9uXFwnICwgYWZ0ZXJSZW5kZXI6IHJvdy5rb0FmdGVyUmVuZGVyIH0gLS0+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5rb0lzRHJhZ2dpbmdcIj4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgaWY6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uXFwnLCBkYXRhOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIGFzOiBcXCdxdWVzdGlvblxcJywgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IHRydWUgfSB9IC0tPiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgPC9kaXY+ICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6IHF1ZXN0aW9uLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogZmFsc2UgfSB9IC0tPiAgICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIC9rbyAtLT4gIDwvZGl2PiAgPCEtLSAva28gLS0+ICA8ZGl2IGNsYXNzPVwid2VsbFwiIGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LmlzRGVzaWduTW9kZSAmJiBxdWVzdGlvbnMubGVuZ3RoID09IDBcIj4gICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogIWtvRHJhZ2dpbmdCb3R0b20oKSwgdGV4dDogJHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKFxcJ3N1cnZleS5kcm9wUXVlc3Rpb25cXCcpXCI+PC9zcGFuPiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvRHJhZ2dpbmdCb3R0b21cIj4gICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IGlmOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBhczogXFwncXVlc3Rpb25cXCcsIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiB0cnVlIH0gfSAtLT4gICAgICA8IS0tIC9rbyAtLT4gICAgPC9kaXY+ICA8L2Rpdj4gIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb25zLmxlbmd0aCA+IDAgJiYga29EcmFnZ2luZ0JvdHRvbSgpXCI+ICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgaWY6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uXFwnLCBkYXRhOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIGFzOiBcXCdxdWVzdGlvblxcJywgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IHRydWUgfSB9IC0tPiAgICA8IS0tIC9rbyAtLT4gIDwvZGl2PjwvZGl2Pic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RlbXBsYXRlX3BhZ2UuaHRtbC50cyIsImV4cG9ydCB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwic3ZkX3F1ZXN0aW9uXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjp0b3BcIiBkYXRhLWJpbmQ9XCJzdHlsZTogeyBkaXNwbGF5OiBxdWVzdGlvbi5rb1Zpc2libGUoKXx8ICRyb290LmlzRGVzaWduTW9kZSA/IFxcJ2lubGluZS1ibG9ja1xcJzogXFwnbm9uZVxcJywgbWFyZ2luTGVmdDogcXVlc3Rpb24ua29NYXJnaW5MZWZ0LCBwYWRkaW5nUmlnaHQ6IHF1ZXN0aW9uLmtvUGFkZGluZ1JpZ2h0LCB3aWR0aDogcXVlc3Rpb24ua29SZW5kZXJXaWR0aCB9LCBhdHRyIDogeyBpZDogaWQsIGRyYWdnYWJsZTogJHJvb3QuaXNEZXNpZ25Nb2RlIH0sIGNsaWNrOiAkcm9vdC5pc0Rlc2lnbk1vZGUgPyBrb09uQ2xpY2s6IG51bGwsIGV2ZW50OiB7IGRyYWdzdGFydDpmdW5jdGlvbihlbCwgZSl7IGRyYWdTdGFydChlKTsgcmV0dXJuIHRydWU7IH0sIGRyYWdvdmVyOiBmdW5jdGlvbihlbCwgZSkgeyBpZighcXVlc3Rpb24uaXNEcmFnZ2luZykgZHJhZ092ZXIoZSk7IH0sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7IGRyYWdFbmQoZSk7IH0sIGRyb3A6IGZ1bmN0aW9uKGVsLCBlKSB7IGRyYWdEcm9wKGUpOyB9IH0sIGNzczogeyBzdmRfcV9kZXNpZ25fYm9yZGVyOiAkcm9vdC5pc0Rlc2lnbk1vZGUsIHN2ZF9xX3NlbGVjdGVkIDoga29Jc1NlbGVjdGVkLCBcXCd3ZWxsIHdlbGwtc21cXCc6ICRyb290LmlzRGVzaWduTW9kZSB9XCI+ICA8ZGl2IGRhdGEtYmluZD1cImNzczogeyBzdmRfcV9kZXNpZ246ICRyb290LmlzRGVzaWduTW9kZSB9LCBzdHlsZTogeyBvcGFjaXR5OiBxdWVzdGlvbi5rb0lzRHJhZ2dpbmdTb3VyY2UoKSA/IDAuNCA6IDEgfVwiPiAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29FcnJvcnMoKS5sZW5ndGggPiAwLCBmb3JlYWNoOiBrb0Vycm9yc1wiPiAgICAgIDxkaXY+PGkgY2xhc3M9XCJwZS1leGNsYW1hdGlvbi1zaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkZGF0YS5nZXRUZXh0KClcIj48L3NwYW4+PC9kaXY+ICAgIDwvZGl2PiAgICA8IS0tIGtvIGlmOiBxdWVzdGlvbi5oYXNUaXRsZSAtLT4gICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCd0b3BcXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICA8IS0tIC9rbyAtLT4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb24tXFwnICsgcXVlc3Rpb24uZ2V0VHlwZSgpLCBkYXRhOiBxdWVzdGlvbiB9IC0tPiAgICA8IS0tIC9rbyAtLT4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNDb21tZW50XCI+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZXh0OiBxdWVzdGlvbi5jb21tZW50VGV4dFwiPjwvZGl2PiAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHsgXFwncXVlc3Rpb25cXCc6IHF1ZXN0aW9uLCBcXCd2aXNpYmxlXFwnOiB0cnVlIH0gfVwiPjwvZGl2PiAgICA8L2Rpdj4gICAgPCEtLSBrbyBpZjogcXVlc3Rpb24uaGFzVGl0bGUgLS0+ICAgIDxoNSBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkcm9vdC5xdWVzdGlvblRpdGxlTG9jYXRpb24gPT0gXFwnYm90dG9tXFwnLCB0ZXh0OiBxdWVzdGlvbi5rb1RpdGxlKCksIGNzczogJHJvb3QuY3NzLnF1ZXN0aW9uLnRpdGxlXCI+PC9oNT4gICAgPCEtLSAva28gLS0+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJzdmRfcXVlc3Rpb25fbWVudVwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSXNTZWxlY3RlZFwiPiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHMgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCI+PC9zcGFuPjwvYnV0dG9uPiAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRyb290LmNvcHlRdWVzdGlvbkNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRFZGl0b3JMb2NTdHJpbmcoXFwnc3VydmV5LmFkZFRvVG9vbGJveFxcJylcIj48L2J1dHRvbj48L2xpPiAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiIGRhdGEtYmluZD1cImNsaWNrOiAkcm9vdC5mYXN0Q29weVF1ZXN0aW9uQ2xpY2ssIHRleHQ6ICRyb290LmdldEVkaXRvckxvY1N0cmluZyhcXCdzdXJ2ZXkuY29weVxcJylcIj48L2J1dHRvbj48L2xpPiAgICA8L3VsPiAgPC9kaXY+PC9kaXY+JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVtcGxhdGVfcXVlc3Rpb24uaHRtbC50cyJdLCJzb3VyY2VSb290IjoiIn0=