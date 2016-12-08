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
	        file: "File",
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
	        newQuestionName: "question",
	        testSurvey: "Pilot test",
	        testSurveyAgain: "Run pilot test again",
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
	        items: "[ Items: {0} ]",
	        enterNewValue: "Please enter the value.",
	        noquestions: "No question in the survey.",
	        createtrigger: "Please create a trigger",
	        triggerOn: "On ",
	        triggerMakePagesVisible: "Make pages visible:",
	        triggerMakeQuestionsVisible: "Make questions visible:",
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
	        lessorequal: "Less or Equals"
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
	        title: { name: "title", title: "Leave it empty, if it is the same as 'Name'" },
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
	        if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
	            text = null;
	        }
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
	var html = exports.html = '<div class="svd_container">  <ul class="navbar-default container-fluid nav nav-tabs svd_menu">    <li data-bind="css: { active: koViewType() == \'designer\' }"><a data-bind="click: selectDesignerClick, text: $root.getLocString(\'ed.designer\')"></a></li>    <li data-bind="css: { active: koViewType() == \'test\' }"><a data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurvey\')"></a></li>    <li data-bind="css: { active: koViewType() == \'editor\' }"><a data-bind="click: selectEditorClick, text: $root.getLocString(\'ed.jsonEditor\')"></a></li>    <!-- <li data-bind="css: {active: koViewType() == \'embed\'}"><a data-bind="click: selectEmbedClick, text: $root.getLocString(\'ed.embedSurvey\')"></a></li> -->    <ul class="nav navbar-nav navbar-right">      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanUndo, click: doUndoClick"><span data-bind="text: $root.getLocString(\'ed.undo\')"></span></button></li>      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanRedo, click: doRedoClick"><span data-bind="text: $root.getLocString(\'ed.redo\')"></span></button></li>      <!-- <li class="svd_actions" data-bind="visible: koIsShowDesigner">        <div data-bind="visible: koShowOptions()" class="btn-group inline">          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: $root.getLocString(\'ed.options\')">Options <span class="caret"></span></button>          <ul class="dropdown-menu">            <li data-bind="css: {active: koGenerateValidJSON}"><a href="#" data-bind="click: generateValidJSONClick, text: $root.getLocString(\'ed.generateValidJSON\')"></a></li>            <li data-bind="css: {active: !koGenerateValidJSON()}"><a href="#" data-bind="click: generateReadableJSONClick, text: $root.getLocString(\'ed.generateReadableJSON\')"></a></li>          </ul>        </div>      </li> -->      <li class="svd_actions"><button type="button" class="btn btn-success btn-sm" data-bind="click: saveButtonClick, visible: koShowSaveButton"><span data-bind="text: $root.getLocString(\'ed.saveSurvey\')"></span></button></li>      <li class="svd_actions"><button type="button" class="btn btn-default btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li>      <!-- <li class="editor-topnav-right"><button type="button" class="btn btn-danger btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li> -->    </ul>  </ul>  <div class="panel svd_content">    <div class="row svd_survey_designer" data-bind="visible: koViewType() == \'designer\'">      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 panel panel-default svd_toolbox">        <div class="btn-group-vertical" style="width:100%;padding-right:2px">          <!-- ko foreach: questionTypes -->          <div class="btn btn-default" style="text-align:left; margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickQuestion, event: { dragstart: function(el, e) { $parent.draggingQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span data-bind="css: \'icon-\' + $data"></span>            <span class="svd_toolbox_item_text" data-bind="text: $root.getLocString(\'qt.\' + $data)"></span>          </div>          <!-- /ko -->          <!-- ko foreach: koCopiedQuestions -->          <div class="btn btn-default" style="text-align:left;margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickCopiedQuestion, event: { dragstart: function(el, e) { $parent.draggingCopiedQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span class="icon-default"></span>            <span class="svd_toolbox_item_text" data-bind="text: name"></span>          </div>          <!-- /ko -->        </div>      </div>      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 svd_editors">        <div class="svd_pages_editor" data-bind="template: { name: \'pageeditor\', data: pagesEditor }"></div>        <div class="svd_questions_editor" id="scrollableDiv">          <div id="surveyjs"></div>        </div>      </div>      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel panel-default svd_properties">        <div class="panel-heading input-group">          <div class="custom-select">            <select class="form-control input-sm" data-bind="options: koObjects, optionsText: \'text\', value: koSelectedObject"></select>          </div>          <div class="input-group-btn">            <button class="btn btn-default" type="button" data-bind="enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString(\'ed.delSelObject\')}"><i class="pe-remove"></i></button>          </div>        </div>        <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>        <div class="panel-footer" data-bind="visible: surveyVerbs.koHasVerbs">          <div data-bind="template: { name: \'objectverbs\', data: surveyVerbs }"></div>        </div>      </div>    </div>    <div id="surveyjsJSONEditor" class="svd_json_editor" data-bind="visible: koViewType() == \'editor\'"></div>    <div id="surveyjsTest" data-bind="visible: koViewType() == \'test\', style: {width: koTestSurveyWidth}">      <!-- <select class="form-control" data-bind="value: koTestSurveyWidth">        <option value="100%" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'100%\'"></option>        <option value="1200px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1200px\'"></option>        <option value="1000px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1000px\'"></option>        <option value="800px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'800px\'"></option>        <option value="600px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'600px\'"></option>        <option value="400px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'400px\'"></option>      </select> -->      <div id="surveyjsExample"></div>      <div id="surveyjsExampleResults"></div>      <button id="surveyjsExamplereRun" data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurveyAgain\')" style="display:none">Test Again</button>    </div>    <!-- <div id="surveyjsEmbed" data-bind="visible: koViewType() == \'embed\'">      <div data-bind="template: { name: \'surveyembeding\', data: surveyEmbeding }"></div>    </div> -->  </div></div><script type="text/html" id="objecteditor">  <table class="table svd_table-nowrap">    <tbody data-bind="foreach: koProperties">      <tr data-bind="click: $parent.changeActiveProperty($data), css: {\'active\': $parent.koActiveProperty() == $data}">        <td data-bind="text: displayName, attr: {title: title}" width="50%" style="font-family:ubuntu; font-size:11px"></td>        <td width="50%" style="font-family:boon;font-size:14px">          <span data-bind="text: koText, visible: $parent.koActiveProperty() != $data && (koText() || $data.editorType == \'boolean\'), attr: { title: koText }" style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden"></span>          <div data-bind="visible: $parent.koActiveProperty() == $data || (!koText() && $data.editorType != \'boolean\')">            <!-- ko template: { name: \'propertyeditor-\' + editorType, data: $data } -->            <!-- /ko -->          </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="objectverbs">  <!-- ko foreach: koVerbs -->    <div class="row">      <div class="input-group">        <span class="input-group-addon input-sm" data-bind="text: text"></span>        <select class="form-control input-sm" data-bind="options: koItems, optionsText: \'text\', optionsValue: \'value\', value: koSelectedItem"></select>      </div>    </div>  <!-- /ko --></script><script type="text/html" id="pageeditor">  <ul class="nav nav-tabs" data-bind="tabs: true">    <!-- ko foreach: koPages -->    <li data-bind="css: { active: koSelected()}, event: { keydown: function(el, e) { $parent.keyDown(el, e); }, dragstart: function(el, e) { $parent.dragStart(el); return true; }, dragover: function(el, e) { $parent.dragOver(el); }, dragend: function(el, e) { $parent.dragEnd(); }, drop: function(el, e) { $parent.dragDrop(el); } }">      <a class="svd_page_nav" data-bind="click: $parent.selectPageClick"><span data-bind="text: title"></span></a>    </li>    <!-- /ko -->    <li><button class="btn btn-default svd_add_new_page_btn" data-bind="click: addNewPageClick"><i class="pe-plus"></i></button></li>  </ul></script><script type="text/html" id="surveyembeding">  <div class="row">    <div class="col-sm-3">      <select data-bind="value: koLibraryVersion" class="form-control input-sm">        <option value="knockout" data-bind="text: $root.getLocString(\'ew.knockout\')"></option>        <option value="react" data-bind="text: $root.getLocString(\'ew.react\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koScriptUsing" class="form-control input-sm">        <option value="bootstrap" data-bind="text: $root.getLocString(\'ew.bootstrap\')"></option>        <option value="standard" data-bind="text: $root.getLocString(\'ew.standard\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koShowAsWindow" class="form-control input-sm">        <option value="page" data-bind="text: $root.getLocString(\'ew.showOnPage\')"></option>        <option value="window" data-bind="text: $root.getLocString(\'ew.showInWindow\')"></option>      </select>    </div>    <div class="col-sm-3">      <label data-bind="visible: koHasIds">        <input type="checkbox" data-bind="checked: koLoadSurvey">        <small data-bind="text: $root.getLocString(\'ew.loadFromServer\')"></small>      </label>    </div>  </div>  <br>  <div class="row">    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleScript\')"></h4>      <div id="surveyEmbedingHead" style="height:70px;width:100%"></div>    </div>    <div class="col-sm-12" data-bind="visible: koVisibleHtml">      <h4 data-bind="text: $root.getLocString(\'ew.titleHtml\')"></h4>      <div id="surveyEmbedingBody" style="height:30px;width:100%"></div>    </div>    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleJavaScript\')"></h4>      <div id="surveyEmbedingJava" style="height:300px;width:100%"></div>    </div>  </div></script><script type="text/html" id="propertyeditor-boolean">  <input class="form-control input-sm" type="checkbox" data-bind="checked: koValue"></script><script type="text/html" id="propertyeditor-dropdown">  <div class="custom-select">    <select class="form-control input-sm" data-bind="value: koValue, options: choices" style="width:100%"></select>  </div></script><script type="text/html" id="propertyeditor-html">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-html">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-itemvalues">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-itemvalues">  <div style="overflow-y: auto; overflow-x:hidden; max-height:400px">    <table class="table">      <thead>        <tr>          <th></th>          <th data-bind="text: $root.getLocString(\'pe.value\')"></th>          <th data-bind="text: $root.getLocString(\'pe.text\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td>            <div class="btn-group" role="group">              <button type="button" class="btn btn-xs" data-bind="visible: $index() > 0, click: $parent.onMoveUpClick"><i class="pe-arrow-up" aria-hidden="true"></i></button>              <button type="button" class="btn btn-xs" style="float:none" data-bind="visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick"><i class="pe-arrow-down" aria-hidden="true"></i></button>            </div>          </td>          <td>            <input type="text" class="form-control input-sm" data-bind="value: koValue" style="width:150px">            <div class="alert alert-danger no-padding" role="alert" data-bind="visible:koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>          </td>          <td><input type="text" class="form-control input-sm" data-bind="value: koText" style="width:150px"></td>          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->      </tbody>    </table>  </div>  <div class="row btn-toolbar">    <input type="button" class="btn btn-sm btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">    <input type="button" class="btn btn-sm btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">  </div></script><script type="text/html" id="propertyeditor-matrixdropdowncolumns">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-matrixdropdowncolumns">  <table class="table">    <thead>      <tr>        <th data-bind="text: $root.getLocString(\'pe.required\')"></th>        <th data-bind="text: $root.getLocString(\'pe.cellType\')"></th>        <th data-bind="text: $root.getLocString(\'pe.name\')"></th>        <th data-bind="text: $root.getLocString(\'pe.title\')"></th>        <th></th>      </tr>    </thead>    <tbody>      <!-- ko foreach: koItems -->      <tr>        <td>          <a data-bind="visible: koHasChoices, click: onShowChoicesClick"><span class="glyphicon" data-bind="css: {\'glyphicon-chevron-down\': !koShowChoices(), \'glyphicon-chevron-up\': koShowChoices()}"></span></a>          <input type="checkbox" data-bind="checked: koIsRequired">        </td>        <td>          <select class="form-control input-sm" data-bind="options: cellTypeChoices, value: koCellType" style="width:110px"></select>        </td>        <td>          <input type="text" class="form-control input-sm" data-bind="value: koName" style="width:100px">          <div class="alert alert-danger no-padding" role="alert" data-bind="visible: koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>        </td>        <td><input type="text" class="form-control input-sm" data-bind="value: koTitle" style="width:120px"></td>        <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>      </tr>      <tr data-bind="visible: koShowChoices() && koHasChoices()">        <td colspan="4" style="border-top-style:none">          <div class="form-group">            <label class="control-label col-sm-3" data-bind="text:$root.getLocString(\'pe.hasOther\')"></label>            <div class="col-sm-2"><input type="checkbox" data-bind="checked: koHasOther"></div>            <div class="col-sm-7" data-bind="visible: !koHasColCount()"></div>            <label class="control-label col-sm-3" data-bind="visible: koHasColCount, text: $root.getLocString(\'pe.colCount\')"></label>            <select class="form-control input-sm col-sm-4" data-bind="visible: koHasColCount, options: colCountChoices, value: koColCount" style="width:110px"></select>          </div>          <div class="modal-body svd_notopbottompaddings">            <!-- ko template: { name: \'propertyeditorcontent-itemvalues\', data: choicesEditor } -->            <!-- /ko -->          </div>        </td>      </tr>      <!-- /ko -->      <tr>        <td colspan="3">        <div class="row btn-toolbar">          <input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">          <input type="button" class="btn btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">        </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="propertyeditor-modal">  <div class="input-group" data-bind="visible: !editor.isEditable">    <span data-bind="text: koText"></span>    <div class="input-group-btn"><button type="button" class="btn btn-default" data-toggle="modal" style="padding:2px" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div class="input-group" data-bind="visible: editor.isEditable" style="display:table">    <input class="form-control input-sm" type="text" data-bind="value: koValue" style="display:table-cell; width:100%">    <div class="input-group-btn"><button type="button" class="btn btn-default" style="display:table-cell; padding:2px" data-toggle="modal" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div data-bind="attr: { id : modalName }" class="modal fade" role="dialog">    <div class="modal-dialog">      <div class="modal-content">        <div class="modal-header">          <button type="button" class="close" data-dismiss="modal">&times;</button>          <h4 class="modal-title" data-bind="text: editor.title"></h4>        </div>        <div class="modal-body svd_notopbottompaddings">          <!-- ko template: { name: \'propertyeditorcontent-\' + editorType, data: editor } -->          <!-- /ko -->        </div>        <div class="modal-footer">          <input type="button" class="btn btn-primary" data-bind="click: editor.onApplyClick, value: $root.getLocString(\'pe.apply\')" style="width:100px">          <input type="button" class="btn btn-default" data-bind="click: editor.onResetClick, value: $root.getLocString(\'pe.reset\')" style="width:100px">          <input type="button" class="btn btn-default" data-dismiss="modal" data-bind="value: $root.getLocString(\'pe.close\')" style="width:100px">        </div>      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-number">  <input class="form-control input-sm" type="number" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-restfull">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-restfull">  <form>    <div class="form-group">      <label for="url">Url:</label>      <input id="url" type="text" data-bind="value: koUrl" class="form-control">    </div>    <div class="form-group">      <label for="path">Path:</label>      <input id="path" type="text" data-bind="value: koPath" class="form-control">    </div>    <div class="form-group">      <label for="valueName">valueName:</label>      <input id="valueName" type="text" data-bind="value: koValueName" class="form-control">    </div>    <div class="form-group">      <label for="titleName">titleName:</label>      <input id="titleName" type="text" data-bind="value: koTitleName" class="form-control">    </div>  </form>  <div id="restfullSurvey" style="width:100%;height:150px"></div></script><script type="text/html" id="propertyeditor-string">  <input class="form-control input-sm" type="text" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-text">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-text">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-textitems">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-textitems">  <div class="panel">    <table class="table">      <thead>        <tr>          <th data-bind="text: $root.getLocString(\'pe.name\')"></th>          <th data-bind="text: $root.getLocString(\'pe.title\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td><input type="text" class="form-control" data-bind="value: koName" style="width:200px"></td>          <td><input type="text" class="form-control" data-bind="value: koTitle" style="width:200px"></td>          <!-- <td><input type="button" class="btn btn-xs btn-danger" data-bind="click: $parent.onDeleteClick, value: $root.getLocString(\'pe.delete\')"></td> -->          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->        <tr>          <td colspan="4"><input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')"></td>        </tr>      </tbody>    </table>  </div></script><script type="text/html" id="propertyeditor-triggers">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-triggers">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableTriggers -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'koText\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn btn-default"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="visible: koSelected() == null">      <div data-bind="visible: koQuestions().length == 0, text: $root.getLocString(\'pe.noquestions\')"></div>      <div data-bind="visible: koQuestions().length > 0, text: $root.getLocString(\'pe.createtrigger\')"></div>    </div>    <div data-bind="visible: koSelected() != null">      <div data-bind="with: koSelected">        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-4">            <span data-bind="text: $root.getLocString(\'pe.triggerOn\')"></span><select class="form-control input-sm" data-bind="options: $parent.koQuestions, value: koName"></select>          </div>          <div class="col-sm-4">            <select class="form-control input-sm" data-bind="options: availableOperators, optionsValue: \'name\', optionsText: \'text\', value: koOperator"></select>          </div>          <div class="col-sm-4">            <input class="form-control input-sm" type="text" data-bind="visible: koRequireValue, value: koValue">          </div>        </div>        <!-- ko if: koType() == \'visibletrigger\' -->        <div class="row">          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: pages } -->            <!-- /ko -->          </div>          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: questions } -->            <!-- /ko -->          </div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'completetrigger\' -->        <div class="row">          <div style="margin: 10px" data-bind="text: $root.getLocString(\'pe.triggerCompleteText\')"></div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'setvaluetrigger\' -->        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-6">            <span data-bind="text: $root.getLocString(\'pe.triggerSetToName\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetToName">          </div>          <div class="col-sm-1">          </div>          <div class="col-sm-5">            <span data-bind="text: $root.getLocString(\'pe.triggerSetValue\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetValue">          </div>        </div>          <div class="row form-inline" style="margin-top:10px">            <div class="col-sm-12">              <input type="checkbox" data-bind="checked: koisVariable"> <span data-bind="text: $root.getLocString(\'pe.triggerIsVariable\')"></span>            </div>          </div>          <!-- /ko -->      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-triggersitems">  <div class="panel no-margins no-padding">    <div class="panel-heading">      <span data-bind="text: title"></span>    </div>    <div class="input-group">      <select class="form-control" multiple="multiple" data-bind="options: koChoosen, value: koChoosenSelected"></select>      <span class="input-group-btn" style="vertical-align:top"><button type="button" data-bind="enable: koChoosenSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>    </div>    <div class="input-group" style="margin-top:5px">      <select class="form-control input-sm" data-bind="options: koObjects, value: koSelected"></select>      <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onAddClick" style="width:40px" class="btn btn-success"><i class="pe-plus"></i></button></span>    </div>  </div></script><script type="text/html" id="propertyeditor-validators">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-validators">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableValidators -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'text\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>  </div></script>';

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var html = exports.html = '<div data-bind="event:{           dragenter:function(el, e){ dragEnter(e);},           dragleave:function(el, e){ dragLeave(e);},           dragover:function(el, e){ return false;},           drop:function(el, e){ dragDrop(e);}}     ">    <h4 data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle"></h4>    <!-- ko foreach: { data: rows, as: \'row\'} -->    <div class="svd_question_container" data-bind="visible: row.koVisible, css: $root.css.row">        <!-- ko foreach: { data: row.questions, as: \'question\' , afterRender: row.koAfterRender } -->            <div data-bind="visible: question.koIsDragging">                <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->                <!-- /ko -->            </div>            <!-- ko template: { name: \'survey-question\', data: question, templateOptions: { isDragging: false } } -->            <!-- /ko -->        <!-- /ko -->    </div>    <!-- /ko -->    <div class="well" data-bind="visible:$root.isDesignMode && questions.length == 0">        <span data-bind="visible: !koDraggingBottom(), text:$root.getEditorLocString(\'survey.dropQuestion\')"></span>        <div data-bind="visible: koDraggingBottom">            <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->            <!-- /ko -->        </div>    </div>    <div data-bind="visible: questions.length > 0 && koDraggingBottom()">        <!-- ko template: { if: $root.koDraggingSource(), name: \'survey-question\', data: $root.koDraggingSource(), as: \'question\', templateOptions: { isDragging: true } } -->        <!-- /ko -->    </div></div>';

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var html = exports.html = '<div class="svd_question" style="vertical-align:top" data-bind="style: {display: question.koVisible()|| $root.isDesignMode ? \'inline-block\': \'none\', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth },     attr : {id: id, draggable: $root.isDesignMode}, click: $root.isDesignMode ? koOnClick: null,          event:{           dragstart:function(el, e){ dragStart(e); return true; },           dragover:function(el, e){ if(!question.isDragging) dragOver(e);},           dragend:function(el, e){ dragEnd(e);},           drop:function(el, e){ dragDrop(e);}         }, css:{svd_q_design_border: $root.isDesignMode, svd_q_selected : koIsSelected, \'well well-sm\': $root.isDesignMode}">    <div data-bind="css:{svd_q_design: $root.isDesignMode}, style:{opacity: question.koIsDraggingSource() ? 0.4 : 1}">        <div class="alert alert-danger" role="alert" data-bind="visible: koErrors().length > 0, foreach: koErrors">            <div>                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>                <span data-bind="text:$data.getText()"></span>            </div>        </div>        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'top\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->        <!-- ko template: { name: \'survey-question-\' + question.getType(), data: question } -->        <!-- /ko -->        <div data-bind="visible: question.hasComment">            <div data-bind="text:question.commentText"></div>            <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': true } }"></div>        </div>        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'bottom\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->    </div>    <div class="svd_question_menu" data-bind="visible: koIsSelected">        <button type="button" class="btn btn-primary  btn-xs dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">            <span class="glyphicon glyphicon-option-horizontal"></span>        </button>        <ul class="dropdown-menu">            <li>                <button class="btn btn-primary btn-xs" data-bind="click: $root.copyQuestionClick, text:$root.getEditorLocString(\'survey.addToToolbox\')"></button>            </li>            <li>                <button class="btn btn-primary btn-xs" data-bind="click: $root.fastCopyQuestionClick, text:$root.getEditorLocString(\'survey.copy\')"></button>            </li>        </ul>    </div></div>';

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZTQ0NWM2NzM3NDI0MmNkNzcyNCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImFtZFwiOlwic3VydmV5LWtub2Nrb3V0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dFdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanNvbjUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RWZXJicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5kb3JlZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVFZGl0b3Iua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVfcGFnZS5odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNyQ0E7Ozs7Ozs7OztnQ0FDNEI7Ozs7OztnQ0FBNEI7Ozs7OztnQ0FDeEI7Ozs7OztnQ0FBNkI7Ozs7OztnQ0FFN0Q7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7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SyxLQUFHO0FBQ2hDLGlCQUFLLEtBQUcsR0FBTSxTQUFVLE9BQU8sT0FDdEM7QUFBQztBQUNLLGdCQUFDLENBQ1g7QUFBQztBQUNPLDZCQUFPLFVBQWYsVUFBZ0M7QUFDNUIsYUFBVSxTQUFnQixjQUFRO0FBQy9CLGFBQWEsMkJBQWMsY0FBSyxRQUFXLHNCQUFNLE1BQUU7QUFDNUMsdUJBQWlCLGNBQzNCO0FBQUM7QUFDSyxnQkFBTyxTQUFlLDJCQUFjLGNBQzlDO0FBQUM7QUF4SWEsbUJBQU0sU0FBaUI7QUF5SXpDLFlBQUM7QUFBQSxLOzs7Ozs7Ozs7QUNsSk0sS0FBUSxzQkFBNC8wQix5LzBCOzs7Ozs7Ozs7QUNBcGcxQixLQUFRLHNCQUFvMUQsaTFEOzs7Ozs7Ozs7QUNBNTFELEtBQVEsc0JBQXFwRixrcEYiLCJmaWxlIjoic3VydmV5ZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VydmV5LWtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5RWRpdG9yXCIsIFtcInN1cnZleS1rbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXkta25vY2tvdXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN1cnZleUVkaXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlN1cnZleVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZTQ0NWM2NzM3NDI0MmNkNzcyNCIsImV4cG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuLi9kcmFnZHJvcGhlbHBlclwiO1xuZXhwb3J0IHtcbiAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UsIFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yLFxuICAgIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IsIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciwgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3Jcbn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IsIFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbX1cbiAgICBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xuXG5leHBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi4vb2JqZWN0UHJvcGVydHlcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi4vcGFnZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4uL3RleHRXb3JrZXJcIjtcbmV4cG9ydCB7T2JqVHlwZSwgU3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5leHBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmV4cG9ydCB7U3VydmV5VmVyYnMsIFN1cnZleVZlcmJJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbX0gZnJvbSBcIi4uL29iamVjdFZlcmJzXCI7XG5leHBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuLi91bmRvcmVkb1wiO1xuZXhwb3J0IHtTdXJ2ZXlFZGl0b3J9IGZyb20gXCIuLi9lZGl0b3JcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcEhlbHBlciB7XG4gICAgc3RhdGljIGRhdGFTdGFydDogc3RyaW5nID0gXCJzdXJ2ZXlqcyxcIjtcbiAgICBzdGF0aWMgZHJhZ0RhdGE6IGFueSA9IHt0ZXh0OiBcIlwiLCBqc29uOiBudWxsIH07XG4gICAgc3RhdGljIHByZXZFdmVudCA9IHsgcXVlc3Rpb246IG51bGwsIHg6IC0xLCB5OiAtMSB9O1xuICAgIHByaXZhdGUgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBzY3JvbGxhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgc291cmNlSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBTdXJ2ZXkuSVN1cnZleSwgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnksIHNjcm9sbGFibGVFbE5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2sgPSBvbk1vZGlmaWVkQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoc2Nyb2xsYWJsZUVsTmFtZSA/IHNjcm9sbGFibGVFbE5hbWUgOiBcInNjcm9sbGFibGVEaXZcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIDxTdXJ2ZXkuU3VydmV5PnRoaXMuZGF0YTsgfVxuICAgIHB1YmxpYyBzdGFydERyYWdOZXdRdWVzdGlvbihldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvblR5cGU6IHN0cmluZywgcXVlc3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgcXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnREcmFnUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YShldmVudCwgbnVsbCwgcXVlc3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXJ0RHJhZ0NvcGllZFF1ZXN0aW9uKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBxdWVzdGlvbkpzb246IGFueSkge1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBudWxsLCBxdWVzdGlvbk5hbWUsIHF1ZXN0aW9uSnNvbik7XG4gICAgfVxuICAgIHB1YmxpYyBpc1N1cnZleURyYWdnaW5nKGV2ZW50OiBEcmFnRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RGF0YShldmVudCkudGV4dDtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5pbmRleE9mKERyYWdEcm9wSGVscGVyLmRhdGFTdGFydCkgPT0gMDtcbiAgICB9XG4gICAgcHVibGljIGRvRHJhZ0Ryb3BPdmVyKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcbiAgICAgICAgdmFyIHRhcmdldFF1ZXN0aW9uID0gRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGFyZ2V0UXVlc3Rpb247XG4gICAgICAgIGlmICghcXVlc3Rpb24gfHwgcXVlc3Rpb24gPT0gdGFyZ2V0UXVlc3Rpb24gfHwgIXRoaXMuaXNTdXJ2ZXlEcmFnZ2luZyhldmVudCkgfHwgdGhpcy5pc1NhbWVQbGFjZShldmVudCwgcXVlc3Rpb24pKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0UXVlc3Rpb25JbmRleChldmVudCwgcXVlc3Rpb24pO1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2VJbmRleCA9PSBpbmRleCB8fCB0aGlzLnNvdXJjZUluZGV4ICsgMSA9PSBpbmRleCkgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKGluZGV4KTtcbiAgICB9XG4gICAgcHVibGljIGVuZCgpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldElzRHJhZ2dpbmdTb3VyY2UodGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKCksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKG51bGwpO1xuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oLTEpO1xuICAgICAgICB0aGlzLnNvdXJjZUluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgfVxuICAgIHB1YmxpYyBkb0Ryb3AoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UgPSBudWxsKSB7XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRhcmdldFF1ZXN0aW9uO1xuICAgICAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkSW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEluZGV4ID4gLTEgJiYgb2xkSW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVRdWVzdGlvblRvKHRhcmdldFF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGRvTGVhdmVQYWdlKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50KSByZXR1cm47XG4gICAgICAgIGlmIChldmVudC5jbGllbnRYIDw9IDAgfHwgZXZlbnQuY2xpZW50WSA8PSAwIHx8XG4gICAgICAgICAgICBldmVudC5jbGllbnRYID49IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZXZlbnQuY2xpZW50WSA+PSB0aGlzLnNjcm9sbGFibGVFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2VbXCJrb0RyYWdnaW5nXCJdKC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVRhcmdldFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZywganNvbjogYW55KTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIGlmICghcXVlc3Rpb25OYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRhcmdldFF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUocXVlc3Rpb25OYW1lKTtcbiAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IC0xO1xuICAgICAgICBpZiAodGFyZ2V0UXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlSW5kZXggPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXRRdWVzdGlvbikge1xuICAgICAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24oanNvbltcInR5cGVcIl0sIG5hbWUpO1xuICAgICAgICAgICAgICAgIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvT2JqZWN0KGpzb24sIHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5uYW1lID0gcXVlc3Rpb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXRRdWVzdGlvbiAmJiBxdWVzdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0UXVlc3Rpb24uc2V0RGF0YSh0aGlzLnN1cnZleSk7XG4gICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5yZW5kZXJXaWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SXNEcmFnZ2luZ1NvdXJjZSh0YXJnZXRRdWVzdGlvbiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRRdWVzdGlvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRJc0RyYWdnaW5nU291cmNlKHF1ZXN0aW9uOiBhbnksIHZhbDogYW55KSB7XG4gICAgICAgIGlmIChxdWVzdGlvbiAmJiBxdWVzdGlvbltcImtvSXNEcmFnZ2luZ1NvdXJjZVwiXSkgcXVlc3Rpb25bXCJrb0lzRHJhZ2dpbmdTb3VyY2VcIl0odmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRRdWVzdGlvbkluZGV4KGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG4gICAgICAgIGlmICghcXVlc3Rpb24pIHJldHVybiBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pO1xuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj5ldmVudC5jdXJyZW50VGFyZ2V0W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICB2YXIgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgICAgIGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnbGF5ZXJYJykpIHtcbiAgICAgICAgICAgIHkgPSBldmVudC5sYXllclkgLSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJvZmZzZXRUb3BcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPiBoZWlnaHQgLyAyKSBpbmRleCsrO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTYW1lUGxhY2UoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIGlmIChwcmV2LnF1ZXN0aW9uICE9IHF1ZXN0aW9uIHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSBwcmV2LngpID4gNSB8fCBNYXRoLmFicyhldmVudC5jbGllbnRZIC0gcHJldi55KSA+IDUpIHtcbiAgICAgICAgICAgIHByZXYucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgICAgICAgIHByZXYueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBwcmV2LnkgPSBldmVudC5jbGllbnRZO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzU2Nyb2xsU3RvcDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsRGVsYXk6IG51bWJlciA9IDMwO1xuICAgIHByaXZhdGUgc3RhdGljIFNjcm9sbE9mZnNldDogbnVtYmVyID0gMTAwO1xuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxZKGU6IERyYWdFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgdmFyIHkgPSB0aGlzLmdldFNjcm9sbGFibGVFbGVtZW50UG9zWShlKTtcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDxudW1iZXI+dGhpcy5zY3JvbGxhYmxlRWxlbWVudFtcImNsaWVudEhlaWdodFwiXTtcbiAgICAgICAgaWYgKHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb1Njcm9sbFkoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgLSB5IDwgRHJhZ0Ryb3BIZWxwZXIuU2Nyb2xsT2Zmc2V0ICYmIGhlaWdodCA+PSB5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb1Njcm9sbFkoMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb1Njcm9sbFkoc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gICAgICAgIHZhciBzY3JvbGxZID0gZWwuc2Nyb2xsVG9wICsgc3RlcDtcbiAgICAgICAgaWYgKHNjcm9sbFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gc2Nyb2xsWTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxTdG9wKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5kb1Njcm9sbFkoc3RlcCkgfSwgRHJhZ0Ryb3BIZWxwZXIuU2Nyb2xsRGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGU6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCB8fCAhZS5jdXJyZW50VGFyZ2V0KSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiBlLm9mZnNldFkgKyA8bnVtYmVyPmUuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXSAtIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IERyYWdFdmVudCB7XG4gICAgICAgIHJldHVybiBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gPyBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gOiBldmVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVRdWVzdGlvblRvKHRhcmdldFF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbiA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGFyZ2V0UXVlc3Rpb24pO1xuICAgICAgICBpZiAocGFnZSA9PSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSAmJiBpbmRleCA9PSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKSkgcmV0dXJuO1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgcGFnZS5yZW1vdmVRdWVzdGlvbih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UuYWRkUXVlc3Rpb24odGFyZ2V0UXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldERhdGFJbmZvKGV2ZW50OiBEcmFnRXZlbnQpOiBhbnkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0RGF0YShldmVudCk7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciB0ZXh0ID0gZGF0YS50ZXh0LnN1YnN0cihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQubGVuZ3RoKTtcbiAgICAgICAgdmFyIGFycmF5ID0gdGV4dC5zcGxpdCgnLCcpO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge2pzb246IG51bGx9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFycmF5W2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICByZXN1bHRbaXRlbVswXV0gPSBpdGVtWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5qc29uID0gZGF0YS5qc29uO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcblxuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xuICAgICAgICAgICAgZWxlbWVudCA9IDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHByZXBhcmVEYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZywganNvbjogYW55ID0gbnVsbCkge1xuICAgICAgICB2YXIgc3RyID0gRHJhZ0Ryb3BIZWxwZXIuZGF0YVN0YXJ0O1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlKSBzdHIgKz0gXCJxdWVzdGlvbnR5cGU6XCIgKyBxdWVzdGlvblR5cGUgKyAnLCc7XG4gICAgICAgIHN0ciArPSBcInF1ZXN0aW9ubmFtZTpcIiArIHF1ZXN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGV2ZW50LCBzdHIsIGpzb24pO1xuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSB0aGlzLmNyZWF0ZVRhcmdldFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgcXVlc3Rpb25OYW1lLCBqc29uKTtcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGFyZ2V0UXVlc3Rpb24gPSB0YXJnZXRRdWVzdGlvbjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlbXCJrb0RyYWdnaW5nU291cmNlXCJdKHRhcmdldFF1ZXN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHRleHQ6IHN0cmluZywganNvbjogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIlRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwiY29weVwiO1xuICAgICAgICB9XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0geyB0ZXh0OiB0ZXh0LCBqc29uOiBqc29uIH07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YShldmVudDogRHJhZ0V2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcIlRleHRcIik7XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGwsIHRhcmdldFF1ZXN0aW9uOiBudWxsfTtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIHByZXYucXVlc3Rpb24gPSBudWxsO1xuICAgICAgICBwcmV2LnggPSAtMTtcbiAgICAgICAgcHJldi55ID0gLTE7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kcmFnZHJvcGhlbHBlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0RWRpdG9yOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICAgIHByaXZhdGUgc3RhdGljIGVkaXRvclJlZ2lzdGVyZWRMaXN0ID0ge307XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckVkaXRvcihuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICgpID0+IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSkge1xuICAgICAgICBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbbmFtZV0gPSBjcmVhdG9yO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVkaXRvcihlZGl0b3JUeXBlOiBzdHJpbmcsIGZ1bmM6IChuZXdWYWx1ZTogYW55KSA9PiBhbnkpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgICAgICB2YXIgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtlZGl0b3JUeXBlXTtcbiAgICAgICAgaWYgKCFjcmVhdG9yKSBjcmVhdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5kZWZhdWx0RWRpdG9yXTtcbiAgICAgICAgdmFyIHByb3BlcnR5RWRpdG9yID0gY3JlYXRvcigpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vbkNoYW5nZWQgPSBmdW5jO1xuICAgICAgICByZXR1cm4gcHJvcGVydHlFZGl0b3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWx1ZV86IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG4gICAgcHVibGljIG9uQ2hhbmdlZDogKG5ld1ZhbHVlOiBhbnkpID0+IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHRocm93IFwiZWRpdG9yVHlwZSBpcyBub3QgZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy52YWx1ZV87IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZUNvcmUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlXyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VGl0bGUodmFsdWU6IHN0cmluZykgeyB9XG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHsgIHJldHVybiB2YWx1ZTsgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZHJvcGRvd25cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJib29sZWFuXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJudW1iZXJcIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJzdHJpbmdcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiYm9vbGVhblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJudW1iZXJcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2UudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5VmFsaWRhdG9yc0VkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0aXRlbXNcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7XG4gICAgICAgIHZhciBvYmpzID0gW107XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmpzLnB1c2goeyBuYW1lOiBpdGVtc1tpXS5rb05hbWUoKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWRpdEl0ZW0gPSB7IGtvTmFtZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBcInRleHRcIikpLCBrb1RpdGxlOiBrby5vYnNlcnZhYmxlKCkgfTtcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGVkaXRJdGVtLCBbXSk7XG4gICAgICAgIHJldHVybiBlZGl0SXRlbTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBlZGl0SXRlbSA9IHsga29OYW1lOiBrby5vYnNlcnZhYmxlKGl0ZW0ubmFtZSksIGtvVGl0bGU6IGtvLm9ic2VydmFibGUoaXRlbS50aXRsZSkgfTtcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGVkaXRJdGVtLCBpdGVtLnZhbGlkYXRvcnMpO1xuICAgICAgICByZXR1cm4gZWRpdEl0ZW07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IG5ldyBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbShlZGl0b3JJdGVtLmtvTmFtZSgpLCBlZGl0b3JJdGVtLmtvVGl0bGUoKSk7XG4gICAgICAgIGl0ZW1UZXh0LnZhbGlkYXRvcnMgPSBlZGl0b3JJdGVtLnZhbGlkYXRvcnM7XG4gICAgICAgIHJldHVybiBpdGVtVGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3JzRWRpdG9yKGl0ZW06IGFueSwgdmFsaWRhdG9yczogQXJyYXk8YW55Pikge1xuICAgICAgICBpdGVtLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLnNsaWNlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBpdGVtLnZhbGlkYXRvcnMgPSBuZXdWYWx1ZTsgaXRlbS5rb1RleHQoc2VsZi5nZXRUZXh0KG5ld1ZhbHVlLmxlbmd0aCkpOyB9O1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7XG4gICAgICAgIGl0ZW0uZWRpdG9yID0gcHJvcGVydHlFZGl0b3I7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IChuZXdWYWx1ZTogYW55KSA9PiB7IG9uSXRlbUNoYW5nZWQobmV3VmFsdWUpOyB9O1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci5vYmplY3QgPSBpdGVtO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvci50aXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKFwiVmFsaWRhdG9yc1wiKSk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLnZhbHVlID0gaXRlbS52YWxpZGF0b3JzO1xuICAgICAgICBpdGVtLmtvVGV4dCA9IGtvLm9ic2VydmFibGUodGhpcy5nZXRUZXh0KHZhbGlkYXRvcnMubGVuZ3RoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dChsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuaXRlbXNcIilbXCJmb3JtYXRcIl0obGVuZ3RoKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInRleHRpdGVtc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VGV4dEl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIHB1YmxpYyBrb0l0ZW1zOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25Nb3ZlVXBDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVEb3duQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2s6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25EZWxldGVDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoaXRlbSk7IH07XG4gICAgICAgIHNlbGYub25DbGVhckNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZUFsbCgpOyB9O1xuICAgICAgICBzZWxmLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuQWRkSXRlbSgpOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZVVwQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVVcChpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbk1vdmVEb3duQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLm1vdmVEb3duKGl0ZW0pOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLml0ZW1zXCIpW1wiZm9ybWF0XCJdKGxlbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtdO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBBZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0aGlzLmNyZWF0ZU5ld0VkaXRvckl0ZW0oKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlVXAoaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCAtIDFdO1xuICAgICAgICBhcnJbaW5kZXggLSAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbW92ZURvd24oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gYXJyLmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICAgICAgYXJyW2luZGV4XSA9IGFycltpbmRleCArIDFdO1xuICAgICAgICBhcnJbaW5kZXggKyAxXSA9IGl0ZW07XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLmdldEl0ZW1zRnJvbVZhbHVlKCkpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNGcm9tVmFsdWUoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlRWRpdG9ySXRlbSh2YWx1ZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB2YXIgaW50ZXJuYWxJdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludGVybmFsSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oaW50ZXJuYWxJdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWVDb3JlKGl0ZW1zKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgdGhyb3cgXCJPdmVycmlkZSAnY3JlYXRlTmV3RWRpdG9ySXRlbScgbWV0aG9kXCI7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkgeyAgcmV0dXJuIGVkaXRvckl0ZW07ICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgcHVibGljIG9iamVjdDogYW55O1xuICAgIHB1YmxpYyB0aXRsZTogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vblJlc2V0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYucmVzZXQoKTsgfTtcbiAgICB9XG4gICAgcHVibGljIHNldFRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZSh2YWx1ZSk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkgeyB9XG4gICAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRPYmplY3QodmFsdWU6IGFueSkgeyB0aGlzLm9iamVjdCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwcml2YXRlIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHRoaXMub25CZWZvcmVBcHBseSgpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0XCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodGhpcy5rb1ZhbHVlKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SHRtbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJodG1sXCI7IH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJodG1sXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SHRtbEVkaXRvcigpOyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsImV4cG9ydCB2YXIgZWRpdG9yTG9jYWxpemF0aW9uID0ge1xuICAgIGN1cnJlbnRMb2NhbGU6IFwiXCIsXG4gICAgbG9jYWxlczoge30sXG4gICAgZ2V0U3RyaW5nOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFsb2NhbGUpIGxvY2FsZSA9IHRoaXMuY3VycmVudExvY2FsZTtcbiAgICAgICAgdmFyIGxvYyA9IGxvY2FsZSA/IHRoaXMubG9jYWxlc1t0aGlzLmN1cnJlbnRMb2NhbGVdIDogZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RyaW5ncztcbiAgICAgICAgdmFyIHBhdGggPSBzdHJOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBvYmogPSBsb2M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jID09PSBkZWZhdWx0U3RyaW5ncykgcmV0dXJuIHBhdGhbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKHN0ck5hbWUsIFwiZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5TmFtZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eVRpdGxlOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XG4gICAgICAgIGlmIChvYmpbXCJ0aXRsZVwiXSkgcmV0dXJuIG9ialtcInRpdGxlXCJdO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqICE9PSBzdHJOYW1lKSByZXR1cm4gb2JqO1xuICAgICAgICB2YXIgcG9zID0gc3RyTmFtZS5pbmRleE9mKCdfJyk7XG4gICAgICAgIGlmIChwb3MgPCAtMSkgcmV0dXJuIG9iajtcbiAgICAgICAgc3RyTmFtZSA9IHN0ck5hbWUuc3Vic3RyKHBvcyArIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgIH0sXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBkZWZhdWx0U3RyaW5ncyA9IHtcbiAgICAvL3N1cnZleSB0ZW1wbGF0ZXNcbiAgICBzdXJ2ZXk6IHtcbiAgICAgICAgZHJvcFF1ZXN0aW9uOiBcIlBsZWFzZSBkcm9wIGEgcXVlc3Rpb24gaGVyZS5cIixcbiAgICAgICAgY29weTogXCJDb3B5XCIsXG4gICAgICAgIGFkZFRvVG9vbGJveDogXCJBZGQgdG8gdG9vbGJveFwiXG4gICAgfSxcbiAgICAvL3F1ZXN0aW9uVHlwZXNcbiAgICBxdDoge1xuICAgICAgICBjaGVja2JveDogXCJDaGVja2JveCAoTUEpXCIsXG4gICAgICAgIGNvbW1lbnQ6IFwiQ29tbWVudCAoT0UpXCIsXG4gICAgICAgIGRyb3Bkb3duOiBcIkRyb3Bkb3duIChTQSlcIixcbiAgICAgICAgZmlsZTogXCJGaWxlXCIsXG4gICAgICAgIGh0bWw6IFwiSFRNTFwiLFxuICAgICAgICBtYXRyaXg6IFwiQXR0cmlidXRlIChTQSlcIixcbiAgICAgICAgbWF0cml4ZHJvcGRvd246IFwiQXR0cmlidXRlIChNQSlcIixcbiAgICAgICAgbWF0cml4ZHluYW1pYzogXCJBdHRyaWJ1dGUgKGR5bmFtaWMpXCIsXG4gICAgICAgIG11bHRpcGxldGV4dDogXCJNdWx0aXBsZSBUZXh0IChPRSlcIixcbiAgICAgICAgcmFkaW9ncm91cDogXCJSYWRpbyAoU0EpXCIsXG4gICAgICAgIHJhdGluZzogXCJSYXRpbmcgKFNBKVwiLFxuICAgICAgICB0ZXh0OiBcIlRleHQgKE9FKVwiXG4gICAgfSxcbiAgICAvL1N0cmluZ3MgaW4gRWRpdG9yXG4gICAgZWQ6IHtcbiAgICAgICAgbmV3UGFnZU5hbWU6IFwicGFnZVwiLFxuICAgICAgICBuZXdRdWVzdGlvbk5hbWU6IFwicXVlc3Rpb25cIixcbiAgICAgICAgdGVzdFN1cnZleTogXCJQaWxvdCB0ZXN0XCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlBZ2FpbjogXCJSdW4gcGlsb3QgdGVzdCBhZ2FpblwiLFxuICAgICAgICB0ZXN0U3VydmV5V2lkdGg6IFwiU3VydmV5IHdpZHRoOiBcIixcbiAgICAgICAgZW1iZWRTdXJ2ZXk6IFwiRW1iZWQgc3VydmV5XCIsXG4gICAgICAgIHNhdmVTdXJ2ZXk6IFwiU2F2ZVwiLFxuICAgICAgICBkZXNpZ25lcjogXCJEZXNpZ25cIixcbiAgICAgICAganNvbkVkaXRvcjogXCJKU09OIGVkaXRvclwiLFxuICAgICAgICB1bmRvOiBcIlVuZG9cIixcbiAgICAgICAgcmVkbzogXCJSZWRvXCIsXG4gICAgICAgIG9wdGlvbnM6IFwiT3B0aW9uc1wiLFxuICAgICAgICBnZW5lcmF0ZVZhbGlkSlNPTjogXCJWYWxpZCBKU09OXCIsXG4gICAgICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiBcIlJlYWRhYmxlIEpTT05cIixcbiAgICAgICAgdG9vbGJveDogXCJUb29sYm94XCIsXG4gICAgICAgIGRlbFNlbE9iamVjdDogXCJEZWxldGUgc2VsZWN0ZWQgb2JqZWN0XCIsXG4gICAgICAgIGNvcnJlY3RKU09OOiBcIlBsZWFzZSBjb3JyZWN0IEpTT04uXCIsXG4gICAgICAgIHN1cnZleVJlc3VsdHM6IFwiU3VydmV5IHJlc3VsdDogXCJcbiAgICB9LFxuICAgIC8vUHJvcGVydHkgRWRpdG9yc1xuICAgIHBlOiB7XG4gICAgICAgIGFwcGx5OiBcIkFwcGx5XCIsXG4gICAgICAgIHJlc2V0OiBcIlJlc2V0XCIsXG4gICAgICAgIGNsb3NlOiBcIkNsb3NlXCIsXG4gICAgICAgIGRlbGV0ZTogXCJEZWxldGVcIixcbiAgICAgICAgYWRkTmV3OiBcIkFkZCBuZXdcIixcbiAgICAgICAgcmVtb3ZlQWxsOiBcIlJlbW92ZSBhbGxcIixcbiAgICAgICAgZWRpdDogXCJFZGl0XCIsXG4gICAgICAgIGVtcHR5OiBcIjxlbXB0eT5cIixcbiAgICAgICAgdGVzdFNlcnZpY2U6IFwiVGVzdCB0aGUgc2VydmljZVwiLFxuICAgICAgICB2YWx1ZTogXCJWYWx1ZVwiLFxuICAgICAgICB0ZXh0OiBcIlRleHRcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiUmVxdWlyZWQ/XCIsXG4gICAgICAgIGhhc090aGVyOiBcIkhhcyBvdGhlciBpdGVtXCIsXG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxuICAgICAgICBjZWxsVHlwZTogXCJUeXBlXCIsXG4gICAgICAgIGNvbENvdW50OiBcIkNvdW50XCIsXG4gICAgICAgIGVkaXRQcm9wZXJ0eTogXCJFZGl0IHByb3BlcnR5ICd7MH0nXCIsXG4gICAgICAgIGl0ZW1zOiBcIlsgSXRlbXM6IHswfSBdXCIsXG4gICAgICAgIGVudGVyTmV3VmFsdWU6IFwiUGxlYXNlIGVudGVyIHRoZSB2YWx1ZS5cIixcbiAgICAgICAgbm9xdWVzdGlvbnM6IFwiTm8gcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcbiAgICAgICAgY3JlYXRldHJpZ2dlcjogXCJQbGVhc2UgY3JlYXRlIGEgdHJpZ2dlclwiLFxuICAgICAgICB0cmlnZ2VyT246IFwiT24gXCIsXG4gICAgICAgIHRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlOiBcIk1ha2UgcGFnZXMgdmlzaWJsZTpcIixcbiAgICAgICAgdHJpZ2dlck1ha2VRdWVzdGlvbnNWaXNpYmxlOiBcIk1ha2UgcXVlc3Rpb25zIHZpc2libGU6XCIsXG4gICAgICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6IFwiQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkXCIsXG4gICAgICAgIHRyaWdnZXJOb3RTZXQ6IFwiVGhlIHRyaWdnZXIgaXMgbm90IHNldFwiLFxuICAgICAgICB0cmlnZ2VyUnVuSWY6IFwiUnVuIGlmXCIsXG4gICAgICAgIHRyaWdnZXJTZXRUb05hbWU6IFwiQ2hhbmdlIHZhbHVlIG9mOiBcIixcbiAgICAgICAgdHJpZ2dlclNldFZhbHVlOiBcInRvOiBcIixcbiAgICAgICAgdHJpZ2dlcklzVmFyaWFibGU6IFwiRG8gbm90IHB1dCB0aGUgdmFyaWFibGUgaW50byB0aGUgc3VydmV5IHJlc3VsdFwiLFxuICAgICAgICB2ZXJiQ2hhbmdlVHlwZTogXCJDaGFuZ2UgdHlwZSBcIixcbiAgICAgICAgdmVyYkNoYW5nZVBhZ2U6IFwiQ2hhbmdlIHBhZ2UgXCJcbiAgICB9LFxuICAgIC8vT3BlcmF0b3JzXG4gICAgb3A6IHtcbiAgICAgICAgZW1wdHk6IFwiaXMgZW1wdHlcIixcbiAgICAgICAgbm90ZW1wdHk6IFwiaXMgbm90IGVtcHR5XCIsXG4gICAgICAgIGVxdWFsOiBcImVxdWFsc1wiLFxuICAgICAgICBub3RlcXVhbDogXCJub3QgZXF1YWxcIixcbiAgICAgICAgY29udGFpbnM6IFwiY29udGFpbnNcIixcbiAgICAgICAgbm90Y29udGFpbnM6IFwibm90IGNvbnRhaW5cIixcbiAgICAgICAgZ3JlYXRlcjogXCJncmVhdGVyXCIsXG4gICAgICAgIGxlc3M6IFwibGVzc1wiLFxuICAgICAgICBncmVhdGVyb3JlcXVhbDogXCJncmVhdGVyIG9yIGVxdWFsc1wiLFxuICAgICAgICBsZXNzb3JlcXVhbDogXCJMZXNzIG9yIEVxdWFsc1wiXG4gICAgfSxcbiAgICAvL0VtYmVkIHdpbmRvd1xuICAgIGV3OiB7XG4gICAgICAgIGtub2Nrb3V0OiBcIlVzZSBLbm9ja291dFwiLFxuICAgICAgICByZWFjdDogXCJVc2UgUmVhY3RcIixcbiAgICAgICAgYm9vdHN0cmFwOiBcIldpdGggYm9vdHN0cmFwXCIsXG4gICAgICAgIHN0YW5kYXJkOiBcIldpdGhvdXQgYm9vdHN0cmFwXCIsXG4gICAgICAgIHNob3dPblBhZ2U6IFwiU2hvdyBzdXJ2ZXkgb24gYSBwYWdlXCIsXG4gICAgICAgIHNob3dJbldpbmRvdzogXCJTaG93IHN1cnZleSBpbiBhIHdpbmRvd1wiLFxuICAgICAgICBsb2FkRnJvbVNlcnZlcjogXCJMb2FkIHN1cnZleSBmcm9tIGEgc2VydmVyXCIsXG4gICAgICAgIHRpdGxlU2NyaXB0OiBcIlNjcmlwdHNcIixcbiAgICAgICAgdGl0bGVIdG1sOiBcIkhUTUxcIixcbiAgICAgICAgdGl0bGVKYXZhU2NyaXB0OiBcIkphdmFTY3JpcHRcIlxuICAgIH0sXG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgcDoge1xuICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJMZWF2ZSBpdCBlbXB0eSwgaWYgaXQgaXMgdGhlIHNhbWUgYXMgJ05hbWUnXCIgfSxcbiAgICAgICAgc3VydmV5X3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiSXQgd2lsbCBiZSBzaG93biBvbiBldmVyeSBwYWdlXCIgfSxcbiAgICAgICAgcGFnZV90aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIlBhZ2UgdGl0bGVcIiB9XG4gICAgfVxufTtcblxuZWRpdG9yTG9jYWxpemF0aW9uLmxvY2FsZXNbXCJlblwiXSA9IGRlZmF1bHRTdHJpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsImltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBlbnVtIE9ialR5cGUgeyBVbmtub3duLCBTdXJ2ZXksIFBhZ2UsIFF1ZXN0aW9uIH1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlIZWxwZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3UGFnZU5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1BhZ2VOYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdRdWVzdGlvbk5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1F1ZXN0aW9uTmFtZVwiKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3TmFtZShvYmpzOiBBcnJheTxhbnk+LCBiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGhhc2ggPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoW29ianNbaV0ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBudW0gPSAxO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFoYXNoW2Jhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCldKSBicmVhaztcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlTmFtZSArIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdFR5cGUob2JqOiBhbnkpOiBPYmpUeXBlIHtcbiAgICAgICAgaWYgKCFvYmogfHwgIW9ialtcImdldFR5cGVcIl0pIHJldHVybiBPYmpUeXBlLlVua25vd247XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwicGFnZVwiKSByZXR1cm4gT2JqVHlwZS5QYWdlO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInN1cnZleVwiKSByZXR1cm4gT2JqVHlwZS5TdXJ2ZXk7XG4gICAgICAgIGlmIChvYmpbXCJuYW1lXCJdKSByZXR1cm4gT2JqVHlwZS5RdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3ROYW1lKG9iajogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlICE9IE9ialR5cGUuUGFnZSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBkYXRhID0gPFN1cnZleS5TdXJ2ZXk+KDxTdXJ2ZXkuUGFnZT5vYmopLmRhdGE7XG4gICAgICAgIHZhciBpbmRleCA9IGRhdGEucGFnZXMuaW5kZXhPZig8U3VydmV5LlBhZ2U+b2JqKTtcbiAgICAgICAgcmV0dXJuIFwiW1BhZ2UgXCIgKyAoaW5kZXggKyAxKSArIFwiXVwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5SGVscGVyLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4uL29iamVjdEVkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBhdmFpbGFibGVWYWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JDbGFzc2VzOiBBcnJheTxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+ID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmFkZCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQob3B0aW9ucy5wcm9wZXJ0eSwgb3B0aW9ucy5vYmplY3QsIG9wdGlvbnMubmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdEVkaXRvci5zZWxlY3RlZE9iamVjdCA9IG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWxpZGF0b3IgOiBudWxsOyB9KTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dmFsaWRhdG9yXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVZhbGlkYXRvcnMgPSB0aGlzLmdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKHNlbGYua29TZWxlY3RlZCgpKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHZhbGlkYXRvclR5cGUpIHsgc2VsZi5hZGRJdGVtKHZhbGlkYXRvclR5cGUpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidmFsaWRhdG9yc1wiOyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdmFsaWRhdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0odmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSA8U3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtPmVkaXRvckl0ZW07XG4gICAgICAgIHJldHVybiBpdGVtLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKHZhbGlkYXRvclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgbmV3VmFsaWRhdG9yID0gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbShTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh2YWxpZGF0b3JUeXBlKSk7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChuZXdWYWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbGlkYXRvckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsaWRhdG9yQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQoKSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCgpLnZhbGlkYXRvcltwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsaWRhdG9yOiBTdXJ2ZXkuU3VydmV5VmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHZhbGlkYXRvci5nZXRUeXBlKCk7XG4gICAgfVxufVxuXG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInZhbGlkYXRvcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlPYmplY3RQcm9wZXJ0eX0gZnJvbSBcIi4vb2JqZWN0UHJvcGVydHlcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RFZGl0b3Ige1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RWYWx1ZTogYW55O1xuICAgIHB1YmxpYyBwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGtvUHJvcGVydGllczogYW55O1xuICAgIHB1YmxpYyBrb0FjdGl2ZVByb3BlcnR5OiBhbnk7XG4gICAgcHVibGljIGtvSGFzT2JqZWN0OiBhbnk7XG4gICAgcHVibGljIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQ6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlPYmplY3RFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlPYmplY3RFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMgPSBwcm9wZXJ0eUVkaXRvck9wdGlvbnM7XG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb0hhc09iamVjdCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzZWxlY3RlZE9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzZWxlY3RlZE9iamVjdCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb0hhc09iamVjdCh2YWx1ZSAhPSBudWxsKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFByb3BlcnR5RWRpdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMua29Qcm9wZXJ0aWVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gcHJvcGVydGllc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGNoYW5nZUFjdGl2ZVByb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgICBwdWJsaWMgT2JqZWN0Q2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRPYmplY3QgfHwgIXRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMoW10pO1xuICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyh0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSk7XG4gICAgICAgIHByb3BlcnRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA9PSBiLm5hbWUpIHJldHVybiAwO1xuICAgICAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkgcmV0dXJuIDE7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgb2JqZWN0UHJvcGVydGllcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9wRXZlbnQgPSAocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5LCBuZXdWYWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuZmlyZSh0aGlzLCB7IHByb3BlcnR5OiBwcm9wZXJ0eS5wcm9wZXJ0eSwgb2JqZWN0OiBwcm9wZXJ0eS5vYmplY3QsIG5ld1ZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuU2hvd1Byb3BlcnR5KHByb3BlcnRpZXNbaV0pKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBvYmplY3RQcm9wZXJ0eSA9IG5ldyBTdXJ2ZXlPYmplY3RQcm9wZXJ0eShwcm9wZXJ0aWVzW2ldLCBwcm9wRXZlbnQsIHRoaXMucHJvcGVydHlFZGl0b3JPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBsb2NOYW1lID0gdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKCkgKyAnXycgKyBwcm9wZXJ0aWVzW2ldLm5hbWU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eU5hbWUobG9jTmFtZSk7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0UHJvcGVydHlUaXRsZShsb2NOYW1lKTtcbiAgICAgICAgICAgIGlmICghdGl0bGUpIHRpdGxlID0gb2JqZWN0UHJvcGVydHkuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0eS50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydGllcy5wdXNoKG9iamVjdFByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhvYmplY3RQcm9wZXJ0aWVzKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KHRoaXMuZ2V0UHJvcGVydHlFZGl0b3IoXCJuYW1lXCIpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNhblNob3dQcm9wZXJ0eShwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BlcnR5Lm5hbWU7XG4gICAgICAgIGlmIChuYW1lID09ICdxdWVzdGlvbnMnIHx8IG5hbWUgPT0gJ3BhZ2VzJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzW2ldLm9iamVjdCA9IHRoaXMuc2VsZWN0ZWRPYmplY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2sgPSAocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0UHJvcGVydHkge1xuICAgIHByaXZhdGUgb2JqZWN0VmFsdWU6IGFueTtcbiAgICBwcml2YXRlIGlzVmFsdWVVcGRhdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIG9uUHJvcGVydHlDaGFuZ2VkOiBTdXJ2ZXlPblByb3BlcnR5Q2hhbmdlZENhbGxiYWNrO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcbiAgICBwdWJsaWMga29UZXh0OiBhbnk7XG4gICAgcHVibGljIG1vZGFsTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2RhbE5hbWVUYXJnZXQ6IHN0cmluZztcbiAgICBwdWJsaWMga29Jc0RlZmF1bHQ6IGFueTtcbiAgICBwdWJsaWMgZWRpdG9yOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2U7XG4gICAgcHVibGljIGVkaXRvclR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgYmFzZUVkaXRvclR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgY2hvaWNlczogQXJyYXk8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb25Qcm9wZXJ0eUNoYW5nZWQ6IFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsLCBwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlZCA9IG9uUHJvcGVydHlDaGFuZ2VkO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnByb3BlcnR5Lm5hbWU7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzID0gcHJvcGVydHkuY2hvaWNlcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSBwcm9wZXJ0eS50eXBlO1xuICAgICAgICAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uSXRlbUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3VmFsdWU6IGFueSkgeyBzZWxmLm9uQXBwbHlFZGl0b3JWYWx1ZShuZXdWYWx1ZSk7IH07XG4gICAgICAgIHRoaXMuZWRpdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmNyZWF0ZUVkaXRvcih0aGlzLmVkaXRvclR5cGUsIG9uSXRlbUNoYW5nZWQpO1xuICAgICAgICB0aGlzLmVkaXRvci5vcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xuICAgICAgICB0aGlzLmVkaXRvclR5cGUgPSB0aGlzLmVkaXRvci5lZGl0b3JUeXBlO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZSA9IFwibW9kZWxFZGl0b3JcIiArIHRoaXMuZWRpdG9yVHlwZSArIHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5tb2RhbE5hbWVUYXJnZXQgPSBcIiNcIiArIHRoaXMubW9kYWxOYW1lO1xuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLm9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHJldHVybiBzZWxmLmdldFZhbHVlVGV4dChzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvSXNEZWZhdWx0ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5wcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShzZWxmLmtvVmFsdWUoKSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmplY3RWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vYmplY3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T2JqZWN0KHRoaXMub2JqZWN0KTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVkaXRQcm9wZXJ0eVwiKVtcImZvcm1hdFwiXSh0aGlzLnByb3BlcnR5Lm5hbWUpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKHRoaXMua29WYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0FwcGx5aW5nTmV3VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uQXBwbHlFZGl0b3JWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNBcHBseWluZ05ld1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbmtvVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vYmplY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vYmplY3RbdGhpcy5uYW1lXSA9PSBuZXdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vblByb3BlcnR5Q2hhbmdlZCAhPSBudWxsICYmICF0aGlzLmlzVmFsdWVVcGRhdGluZykgdGhpcy5vblByb3BlcnR5Q2hhbmdlZCh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlRWRpdG9yRGF0YShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRWYWx1ZSh0aGlzLm9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdFt0aGlzLm5hbWVdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0VmFsdWVUZXh0KHZhbHVlKTsgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RQcm9wZXJ0eS50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJpdGVtdmFsdWVzXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtvSXRlbXMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmtvSXRlbXMoKVtpXTtcbiAgICAgICAgICAgIGl0ZW0ua29IYXNFcnJvcighaXRlbS5rb1ZhbHVlKCkpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGl0ZW0ua29IYXNFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiB7IGtvVmFsdWU6IGtvLm9ic2VydmFibGUoKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGl0ZW07XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IG51bGw7XG4gICAgICAgIGlmIChpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICBpdGVtVmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgaXRlbVRleHQgPSBpdGVtLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsga29WYWx1ZToga28ub2JzZXJ2YWJsZShpdGVtVmFsdWUpLCBrb1RleHQ6IGtvLm9ic2VydmFibGUoaXRlbVRleHQpLCBrb0hhc0Vycm9yOiBrby5vYnNlcnZhYmxlKGZhbHNlKSB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnM7XG4gICAgICAgIHZhciB0ZXh0ID0gZWRpdG9ySXRlbS5rb1RleHQoKTtcbiAgICAgICAgaWYgKCFhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnMgJiYgZWRpdG9ySXRlbS5rb1RleHQoKSA9PSBlZGl0b3JJdGVtLmtvVmFsdWUoKSkge1xuICAgICAgICAgICAgdGV4dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGVkaXRvckl0ZW0ua29WYWx1ZSgpLCB0ZXh0OiB0ZXh0IH07XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJpdGVtdmFsdWVzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmNvbHVtbnNcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5rb0l0ZW1zKClbaV0uaGFzRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbShuZXcgU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uKFwiXCIsIHRoaXMub3B0aW9ucykpOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKGl0ZW0sIHRoaXMub3B0aW9ucyk7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgY29sdW1JdGVtID0gPFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbT5lZGl0b3JJdGVtO1xuICAgICAgICBjb2x1bUl0ZW0uYXBwbHkoKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtSXRlbS5jb2x1bW47XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtIHtcbiAgICBwcml2YXRlIGtvQ2hvaWNlczogYW55O1xuICAgIHB1YmxpYyBjaG9pY2VzRWRpdG9yOiBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3I7XG4gICAga29OYW1lOiBhbnk7IGtvVGl0bGU6IGFueTsga29DZWxsVHlwZTogYW55OyBrb1Nob3dDaG9pY2VzOiBhbnk7XG4gICAga29IYXNFcnJvcjogYW55OyBrb0NvbENvdW50OiBhbnk7IGtvSXNSZXF1aXJlZDogYW55OyBrb0hhc090aGVyOiBhbnk7XG4gICAga29IYXNDaG9pY2VzOiBhbnk7IGtvSGFzQ29sQ291bnQ6IGFueTtcbiAgICBwdWJsaWMgb25TaG93Q2hvaWNlc0NsaWNrOiBhbnk7XG4gICAgcHVibGljIGNlbGxUeXBlQ2hvaWNlczogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgY29sQ291bnRDaG9pY2VzOiBBcnJheTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbiwgcHVibGljIG9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2VsbFR5cGVDaG9pY2VzID0gdGhpcy5nZXRQcm9wZXJ0eUNob2ljZXMoXCJjZWxsVHlwZVwiKTtcbiAgICAgICAgdGhpcy5jb2xDb3VudENob2ljZXMgPSB0aGlzLmdldFByb3BlcnR5Q2hvaWNlcyhcImNvbENvdW50XCIpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLm5hbWUpO1xuICAgICAgICB0aGlzLmtvQ2VsbFR5cGUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5jZWxsVHlwZSk7XG4gICAgICAgIHRoaXMua29Db2xDb3VudCA9IGtvLm9ic2VydmFibGUoY29sdW1uLmNvbENvdW50KTtcbiAgICAgICAgdGhpcy5rb0lzUmVxdWlyZWQgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5pc1JlcXVpcmVkID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0hhc090aGVyID0ga28ub2JzZXJ2YWJsZShjb2x1bW4uaGFzT3RoZXIgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICB0aGlzLmtvVGl0bGUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5uYW1lID09PSBjb2x1bW4udGl0bGUgPyBcIlwiIDogY29sdW1uLnRpdGxlKTtcbiAgICAgICAgdGhpcy5rb1Nob3dDaG9pY2VzID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29DaG9pY2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KGNvbHVtbi5jaG9pY2VzKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5jaG9pY2VzRWRpdG9yID0gbmV3IFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcigpO1xuICAgICAgICB0aGlzLmNob2ljZXNFZGl0b3Iub2JqZWN0ID0gdGhpcy5jb2x1bW47XG4gICAgICAgIHRoaXMuY2hvaWNlc0VkaXRvci52YWx1ZSA9IHRoaXMua29DaG9pY2VzKCk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0VkaXRvci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vblNob3dDaG9pY2VzQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29TaG93Q2hvaWNlcyghc2VsZi5rb1Nob3dDaG9pY2VzKCkpOyB9XG4gICAgICAgIHRoaXMua29IYXNDaG9pY2VzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb0NlbGxUeXBlKCkgPT0gXCJkcm9wZG93blwiIHx8IHNlbGYua29DZWxsVHlwZSgpID09IFwiY2hlY2tib3hcIiB8fCBzZWxmLmtvQ2VsbFR5cGUoKSA9PSBcInJhZGlvZ3JvdXBcIjsgfSk7XG4gICAgICAgIHRoaXMua29IYXNDb2xDb3VudCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29DZWxsVHlwZSgpID09IFwiY2hlY2tib3hcIiB8fCBzZWxmLmtvQ2VsbFR5cGUoKSA9PSBcInJhZGlvZ3JvdXBcIjsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yKCF0aGlzLmtvTmFtZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMua29IYXNFcnJvcigpIHx8IHRoaXMuY2hvaWNlc0VkaXRvci5oYXNFcnJvcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuY29sdW1uLm5hbWUgPSB0aGlzLmtvTmFtZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi50aXRsZSA9IHRoaXMua29UaXRsZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5jZWxsVHlwZSA9IHRoaXMua29DZWxsVHlwZSgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5jb2xDb3VudCA9IHRoaXMua29Db2xDb3VudCgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5pc1JlcXVpcmVkID0gdGhpcy5rb0lzUmVxdWlyZWQoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uaGFzT3RoZXIgPSB0aGlzLmtvSGFzT3RoZXIoKTtcblxuICAgICAgICB0aGlzLmNob2ljZXNFZGl0b3Iub25BcHBseUNsaWNrKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNob2ljZXMgPSB0aGlzLmNob2ljZXNFZGl0b3IudmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvcGVydHlDaG9pY2VzKHByb3BldHlOYW1lOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXR5TmFtZSkgcmV0dXJuIHByb3BlcnRpZXNbaV0uY2hvaWNlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJtYXRyaXhkcm9wZG93bmNvbHVtbnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBrb1VybDogYW55OyBrb1BhdGg6IGFueTsga29WYWx1ZU5hbWU6IGFueTsga29UaXRsZU5hbWU6IGFueTtcbiAgICBwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5O1xuICAgIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uRHJvcGRvd247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rb1VybCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1BhdGggPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29WYWx1ZU5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3VydmV5KCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1VybC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnVybCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1BhdGguc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC5wYXRoID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudmFsdWVOYW1lID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudGl0bGVOYW1lID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicmVzdGZ1bGxcIjsgfVxuICAgIHB1YmxpYyBnZXQgcmVzdGZ1bGxWYWx1ZSgpIHsgcmV0dXJuIDxTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsPnRoaXMudmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS51cmwpIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZW1wdHlcIik7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZS51cmw7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgMjApICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnJlc3RmdWxsVmFsdWU7XG4gICAgICAgIHRoaXMua29VcmwodmFsID8gdmFsLnVybCA6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvUGF0aCh2YWwgPyB2YWwucGF0aCA6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lKHZhbCA/IHZhbC52YWx1ZU5hbWUgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZSh2YWwgPyB2YWwudGl0bGVOYW1lIDogXCJcIik7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcihcInJlc3RmdWxsU3VydmV5XCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIHZhbCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XG4gICAgICAgIHZhbC51cmwgPSB0aGlzLmtvVXJsKCk7XG4gICAgICAgIHZhbC5wYXRoID0gdGhpcy5rb1BhdGgoKTtcbiAgICAgICAgdmFsLnZhbHVlTmFtZSA9IHRoaXMua29WYWx1ZU5hbWUoKTtcbiAgICAgICAgdmFsLnRpdGxlTmFtZSA9IHRoaXMua29UaXRsZU5hbWUoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW4oKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleSgpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuc2hvd1F1ZXN0aW9uTnVtYmVycyA9IFwib2ZmXCI7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuYWRkTmV3UGFnZShcInBhZ2UxXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duPnBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJkcm9wZG93blwiLCBcInExXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRlc3RTZXJ2aWNlXCIpXG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoXCJyZXN0ZnVsbFN1cnZleVwiKTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInJlc3RmdWxsXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIGtvUXVlc3Rpb25zOiBhbnk7IGtvUGFnZXM6IGFueTtcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBhdmFpbGFibGVUcmlnZ2VyczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgdHJpZ2dlckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoc2VsZi5rb1NlbGVjdGVkKCkpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAodHJpZ2dlclR5cGUpIHsgc2VsZi5hZGRJdGVtKHRyaWdnZXJUeXBlKTsgfTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgdGhpcy5rb1BhZ2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29RdWVzdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xhc3NlcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldENoaWxkcmVuQ2xhc3NlcyhcInN1cnZleXRyaWdnZXJcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVHJpZ2dlcnMgPSB0aGlzLmdldEF2YWlsYWJsZVRyaWdnZXJzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0cmlnZ2Vyc1wiOyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5vYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkucGFnZXMpKTtcbiAgICAgICAgICAgIHRoaXMua29RdWVzdGlvbnModGhpcy5nZXROYW1lcygoPFN1cnZleS5TdXJ2ZXk+dGhpcy5vYmplY3QpLmdldEFsbFF1ZXN0aW9ucygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRoaXMua29JdGVtcygpLmxlbmd0aCA+IDAgPyB0aGlzLmtvSXRlbXMoKVswXSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJdGVtKHRyaWdnZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0cmlnZ2VyVHlwZSk7XG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IHRoaXMuY3JlYXRlUHJvcGVydHlUcmlnZ2VyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLmtvSXRlbXMucHVzaCh0cmlnZ2VySXRlbSk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCh0cmlnZ2VySXRlbSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGl0ZW0uZ2V0VHlwZSgpKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB0cmlnZ2VyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvcGVydHlUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj50cmlnZ2VyKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGVkaXRvclRyaWdnZXIgPSA8U3VydmV5UHJvcGVydHlUcmlnZ2VyPmVkaXRvckl0ZW07XG4gICAgICAgIHJldHVybiBlZGl0b3JUcmlnZ2VyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBdmFpbGFibGVUcmlnZ2VycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJpZ2dlckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudHJpZ2dlckNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROYW1lcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goaXRlbVtcIm5hbWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lcztcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlckl0ZW0gPSBudWxsO1xuICAgICAgICBpZiAodHJpZ2dlci5nZXRUeXBlKCkgPT0gXCJ2aXNpYmxldHJpZ2dlclwiKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyKDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+dHJpZ2dlciwgdGhpcy5rb1BhZ2VzLCB0aGlzLmtvUXVlc3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlci5nZXRUeXBlKCkgPT0gXCJzZXR2YWx1ZXRyaWdnZXJcIikge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlTZXRWYWx1ZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+dHJpZ2dlciwgdGhpcy5rb1F1ZXN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmlnZ2VySXRlbSkge1xuICAgICAgICAgICAgdHJpZ2dlckl0ZW0gPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyKHRyaWdnZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmlnZ2VySXRlbTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBwcml2YXRlIG9wZXJhdG9ycyA9IFtcImVtcHR5XCIsIFwibm90ZW1wdHlcIiwgXCJlcXVhbFwiLCBcIm5vdGVxdWFsXCIsIFwiY29udGFpbnNcIiwgXCJub3Rjb250YWluc1wiLCBcImdyZWF0ZXJcIiwgXCJsZXNzXCIsIFwiZ3JlYXRlcm9yZXF1YWxcIiwgXCJsZXNzb3JlcXVhbFwiXTtcbiAgICBwcml2YXRlIHRyaWdnZXJUeXBlOiBzdHJpbmc7XG4gICAgYXZhaWxhYmxlT3BlcmF0b3JzID0gW107XG4gICAga29OYW1lOiBhbnk7IGtvT3BlcmF0b3I6IGFueTsga29WYWx1ZTogYW55OyBrb1R5cGU6IGFueTtcbiAgICBrb1RleHQ6IGFueTsga29Jc1ZhbGlkOiBhbnk7IGtvUmVxdWlyZVZhbHVlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVPcGVyYXRvcnMoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyVHlwZSA9IHRyaWdnZXIuZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLmtvVHlwZSA9IGtvLm9ic2VydmFibGUodGhpcy50cmlnZ2VyVHlwZSk7XG4gICAgICAgIHRoaXMua29OYW1lID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLm5hbWUpO1xuICAgICAgICB0aGlzLmtvT3BlcmF0b3IgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIub3BlcmF0b3IpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIudmFsdWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29SZXF1aXJlVmFsdWUgPSBrby5jb21wdXRlZCgoKSA9PiB7IHJldHVybiBzZWxmLmtvT3BlcmF0b3IoKSAhPSBcImVtcHR5XCIgJiYgc2VsZi5rb09wZXJhdG9yKCkgIT0gXCJub3RlbXB0eVwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5jb21wdXRlZCgoKSA9PiB7IGlmIChzZWxmLmtvTmFtZSgpICYmICghc2VsZi5rb1JlcXVpcmVWYWx1ZSgpIHx8IHNlbGYua29WYWx1ZSgpKSkgcmV0dXJuIHRydWU7IHJldHVybiBmYWxzZTsgfSk7XG4gICAgICAgIHRoaXMua29UZXh0ID0ga28uY29tcHV0ZWQoKCkgPT4geyBzZWxmLmtvTmFtZSgpOyBzZWxmLmtvT3BlcmF0b3IoKTsgc2VsZi5rb1ZhbHVlKCk7IHJldHVybiBzZWxmLmdldFRleHQoKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVUcmlnZ2VyKCk6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSA8U3VydmV5LlN1cnZleVRyaWdnZXI+U3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModGhpcy50cmlnZ2VyVHlwZSk7XG4gICAgICAgIHRyaWdnZXIubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRyaWdnZXIub3BlcmF0b3IgPSB0aGlzLmtvT3BlcmF0b3IoKTtcbiAgICAgICAgdHJpZ2dlci52YWx1ZSA9IHRoaXMua29WYWx1ZSgpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVPcGVyYXRvcnMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcGVyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5vcGVyYXRvcnNbaV07XG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5wdXNoKHsgbmFtZTogbmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm9wLlwiICsgbmFtZSkgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5rb0lzVmFsaWQoKSkgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTm90U2V0XCIpO1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJSdW5JZlwiKSArIFwiICdcIiArIHRoaXMua29OYW1lKCkgKyBcIicgXCIgKyB0aGlzLmdldE9wZXJhdG9yVGV4dCgpICsgdGhpcy5nZXRWYWx1ZVRleHQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRPcGVyYXRvclRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIG9wID0gdGhpcy5rb09wZXJhdG9yKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdmFpbGFibGVPcGVyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZU9wZXJhdG9yc1tpXS5uYW1lID09IG9wKSByZXR1cm4gdGhpcy5hdmFpbGFibGVPcGVyYXRvcnNbaV0udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5rb1JlcXVpcmVWYWx1ZSgpKSByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIFwiIFwiICsgdGhpcy5rb1ZhbHVlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWaXNpYmxlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgcHVibGljIHBhZ2VzOiBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzO1xuICAgIHB1YmxpYyBxdWVzdGlvbnM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZSwga29QYWdlczogYW55LCBrb1F1ZXN0aW9uczogYW55KSB7XG4gICAgICAgIHN1cGVyKHRyaWdnZXIpO1xuICAgICAgICB0aGlzLnBhZ2VzID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlXCIpLCBrb1BhZ2VzKCksIHRyaWdnZXIucGFnZXMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJPYmplY3RzKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGVcIiksIGtvUXVlc3Rpb25zKCksIHRyaWdnZXIucXVlc3Rpb25zKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclZpc2libGU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgICAgICB0cmlnZ2VyLnBhZ2VzID0gdGhpcy5wYWdlcy5rb0Nob29zZW4oKTtcbiAgICAgICAgdHJpZ2dlci5xdWVzdGlvbnMgPSB0aGlzLnF1ZXN0aW9ucy5rb0Nob29zZW4oKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlTZXRWYWx1ZVRyaWdnZXIgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIGtvUXVlc3Rpb25zOiBhbnk7IGtvc2V0VG9OYW1lOiBhbnk7IGtvc2V0VmFsdWU6IGFueTsga29pc1ZhcmlhYmxlOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRyaWdnZXI6IFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUsIGtvUXVlc3Rpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMua29RdWVzdGlvbnMgPSBrb1F1ZXN0aW9ucztcbiAgICAgICAgdGhpcy5rb3NldFRvTmFtZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRUb05hbWUpO1xuICAgICAgICB0aGlzLmtvc2V0VmFsdWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIuc2V0VmFsdWUpO1xuICAgICAgICB0aGlzLmtvaXNWYXJpYWJsZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5pc1ZhcmlhYmxlKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlclNldFZhbHVlPnN1cGVyLmNyZWF0ZVRyaWdnZXIoKTtcbiAgICAgICAgdHJpZ2dlci5zZXRUb05hbWUgPSB0aGlzLmtvc2V0VG9OYW1lKCk7XG4gICAgICAgIHRyaWdnZXIuc2V0VmFsdWUgPSB0aGlzLmtvc2V0VmFsdWUoKTtcbiAgICAgICAgdHJpZ2dlci5pc1ZhcmlhYmxlID0gdGhpcy5rb2lzVmFyaWFibGUoKTtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMge1xuICAgIGtvT2JqZWN0czogYW55O1xuICAgIGtvQ2hvb3NlbjogYW55O1xuICAgIGtvU2VsZWN0ZWQ6IGFueTtcbiAgICBrb0Nob29zZW5TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBvbkRlbGV0ZUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uQWRkQ2xpY2s6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgYWxsT2JqZWN0czogQXJyYXk8c3RyaW5nPiwgY2hvb3Nlbk9iamVjdHM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5rb0Nob29zZW4gPSBrby5vYnNlcnZhYmxlQXJyYXkoY2hvb3Nlbk9iamVjdHMpO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFsbE9iamVjdHNbaV07XG4gICAgICAgICAgICBpZiAoY2hvb3Nlbk9iamVjdHMuaW5kZXhPZihpdGVtKSA8IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29PYmplY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KGFycmF5KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvQ2hvb3NlblNlbGVjdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kZWxldGVJdGVtKCk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hZGRJdGVtKCk7IH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVJdGVtKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29DaG9vc2VuU2VsZWN0ZWQoKSwgdGhpcy5rb0Nob29zZW4sIHRoaXMua29PYmplY3RzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1zKHRoaXMua29TZWxlY3RlZCgpLCB0aGlzLmtvT2JqZWN0cywgdGhpcy5rb0Nob29zZW4pO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYW5nZUl0ZW1zKGl0ZW06IHN0cmluZywgcmVtb3ZlZEZyb206IGFueSwgYWRkVG86IGFueSkge1xuICAgICAgICByZW1vdmVkRnJvbS5yZW1vdmUoaXRlbSk7XG4gICAgICAgIGFkZFRvLnB1c2goaXRlbSk7XG4gICAgICAgIHJlbW92ZWRGcm9tLnNvcnQoKTtcbiAgICAgICAgYWRkVG8uc29ydCgpO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidHJpZ2dlcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2Vyc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleUhlbHBlcn0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4gdm9pZDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5TW92ZVBhZ2VDYWxsYmFjayA9IChpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UGFnZXNFZGl0b3Ige1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIGtvUGFnZXM6IGFueTtcbiAgICBrb0lzVmFsaWQ6IGFueTtcbiAgICBzZWxlY3RQYWdlQ2xpY2s6IGFueTtcbiAgICBvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgIG9uU2VsZWN0UGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjaztcbiAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2s7XG4gICAgZHJhZ2dpbmdQYWdlOiBhbnkgPSBudWxsO1xuICAgIGRyYWdTdGFydDogYW55OyBkcmFnT3ZlcjogYW55OyBkcmFnRW5kOiBhbnk7IGRyYWdEcm9wOiBhbnk7IGtleURvd246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKG9uQWRkTmV3UGFnZUNhbGxiYWNrOiBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSBudWxsLCBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICAgICAgICBvbk1vdmVQYWdlQ2FsbGJhY2s6IFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSBudWxsLCBvbkRlbGV0ZVBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjayA9IG9uQWRkTmV3UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uU2VsZWN0UGFnZUNhbGxiYWNrID0gb25TZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrID0gb25Nb3ZlUGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrID0gb25EZWxldGVQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RQYWdlQ2xpY2sgPSBmdW5jdGlvbihwYWdlSXRlbSkge1xuICAgICAgICAgICAgaWYgKHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKHBhZ2VJdGVtLnBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmtleURvd24gPSBmdW5jdGlvbiAoZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkgeyBzZWxmLm9uS2V5RG93bihlbCwgZSk7IH1cbiAgICAgICAgdGhpcy5kcmFnU3RhcnQgPSBmdW5jdGlvbiAoZWw6IGFueSkgeyBzZWxmLmRyYWdnaW5nUGFnZSA9IGVsOyB9O1xuICAgICAgICB0aGlzLmRyYWdPdmVyID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgIH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBudWxsOyB9O1xuICAgICAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5tb3ZlRHJhZ2dpbmdQYWdlVG8oZWwpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkKHRoaXMuc3VydmV5VmFsdWUgIT0gbnVsbCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9XG4gICAgcHVibGljIHNldFNlbGVjdGVkUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXNbaV0ua29TZWxlY3RlZChwYWdlc1tpXS5wYWdlID09IHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdQYWdlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5UGFnZShwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VOYW1lKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMoKVtpbmRleF0udGl0bGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRJbmRleEJ5UGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSk6IG51bWJlciB7XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFnZXNbaV0ucGFnZSA9PSBwYWdlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZWw6IGFueSwgZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5rb1BhZ2VzKCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIHZhciBwYWdlSW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgJiYgcGFnZXNbaV0ua29TZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGFnZUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZUluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2ICYmIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2spIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2soZWwucGFnZSk7XG4gICAgICAgIGlmICgoZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOSkgJiYgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgcGFnZUluZGV4ICs9IChlLmtleUNvZGUgPT0gMzcgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHBhZ2VJbmRleCA9IHBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAocGFnZUluZGV4ID49IHBhZ2VzLmxlbmd0aCkgcGFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBwYWdlID0gcGFnZXNbcGFnZUluZGV4XS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQYWdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKFtdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5VmFsdWUucGFnZXNbaV07XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZToga28ub2JzZXJ2YWJsZShTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSksIHBhZ2U6IHBhZ2UsIGtvU2VsZWN0ZWQ6IGtvLm9ic2VydmFibGUoZmFsc2UpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvUGFnZXMocGFnZXMpO1xuICAgIH1cbiAgICBwcml2YXRlIG1vdmVEcmFnZ2luZ1BhZ2VUbyh0b1BhZ2U6IGFueSkge1xuICAgICAgICBpZiAodG9QYWdlID09IG51bGwgfHwgdG9QYWdlID09IHRoaXMuZHJhZ2dpbmdQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUGFnZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQYWdlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0aGlzLmRyYWdnaW5nUGFnZSk7XG4gICAgICAgIHZhciBpbmRleFRvID0gdGhpcy5rb1BhZ2VzKCkuaW5kZXhPZih0b1BhZ2UpO1xuICAgICAgICBpZiAodGhpcy5vbk1vdmVQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKGluZGV4LCBpbmRleFRvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuY2xhc3MgVGV4dFBhcnNlclByb3Blcnkge1xuICAgIGlzRm91bmQ6IGJvb2xlYW47XG4gICAgcHJvcGVydGllc0NvdW50OiBudW1iZXI7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbiAgICB2YWx1ZVN0YXJ0OiBudW1iZXI7XG4gICAgdmFsdWVFbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVRleHRXb3JrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgbmV3TGluZUNoYXI6IHN0cmluZztcbiAgICBwdWJsaWMgZXJyb3JzOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHJpdmF0ZSBqc29uVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHN1cnZleU9iamVjdHM6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBpc1N1cnZleUFzUGFnZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRleHQgfHwgdGhpcy50ZXh0LnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcInt9XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9jZXNzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNKc29uQ29ycmVjdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWUgIT0gbnVsbDsgfVxuICAgIHByb3RlY3RlZCBwcm9jZXNzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5qc29uVmFsdWUgPSBuZXcgU3VydmV5SlNPTjUoMSkucGFyc2UodGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goeyBwb3M6IHsgc3RhcnQ6IGVycm9yLmF0LCBlbmQ6IC0xIH0sIHRleHQ6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuanNvblZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSnNvblBvc2l0aW9ucyh0aGlzLmpzb25WYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleS5TdXJ2ZXkodGhpcy5qc29uVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9ycyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5nZXRGdWxsRGVzY3JpcHRpb24oKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzID0gdGhpcy5jcmVhdGVTdXJ2ZXlPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5zdXJ2ZXlPYmplY3RzKTtcbiAgICAgICAgdGhpcy5zZXRFZGl0b3JQb3NpdGlvbkJ5Q2hhcnRBdCh0aGlzLmVycm9ycyk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlSnNvblBvc2l0aW9ucyhqc29uT2JqOiBhbnkpIHtcbiAgICAgICAganNvbk9ialtcInBvc1wiXVtcInNlbGZcIl0gPSBqc29uT2JqO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbk9iaikge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGpzb25PYmpba2V5XTtcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqW1wicG9zXCJdKSB7XG4gICAgICAgICAgICAgICAganNvbk9ialtcInBvc1wiXVtrZXldID0gb2JqW1wicG9zXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSnNvblBvc2l0aW9ucyhvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlU3VydmV5T2JqZWN0cygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZSA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICB0aGlzLmlzU3VydmV5QXNQYWdlID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzW2ldO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCAmJiAhcGFnZVtcInBvc1wiXSkge1xuICAgICAgICAgICAgICAgIHBhZ2VbXCJwb3NcIl0gPSB0aGlzLnN1cnZleVZhbHVlW1wicG9zXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdXJ2ZXlBc1BhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFnZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFnZS5xdWVzdGlvbnNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQob2JqZWN0czogYW55W10pIHtcbiAgICAgICAgaWYgKG9iamVjdHMgPT0gbnVsbCB8fCBvYmplY3RzLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHsgcm93OiAwLCBjb2x1bW46IDAgfTtcbiAgICAgICAgdmFyIGF0T2JqZWN0c0FycmF5ID0gdGhpcy5nZXRBdEFycmF5KG9iamVjdHMpO1xuICAgICAgICB2YXIgc3RhcnRBdDogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdE9iamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF0ID0gYXRPYmplY3RzQXJyYXlbaV0uYXQ7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zdGlvbkJ5Q2hhcnRBdChwb3NpdGlvbiwgc3RhcnRBdCwgYXQpO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGF0T2JqZWN0c0FycmF5W2ldLm9iajtcbiAgICAgICAgICAgIGlmICghb2JqLnBvc2l0aW9uKSBvYmoucG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChhdCA9PSBvYmoucG9zLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLnN0YXJ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhdCA9PSBvYmoucG9zLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24uZW5kID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRBdCA9IGF0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UG9zdGlvbkJ5Q2hhcnRBdChzdGFydFBvc2l0aW9uOiBBY2VBamF4LlBvc2l0aW9uLCBzdGFydEF0OiBudW1iZXIsIGF0OiBudW1iZXIpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyByb3c6IHN0YXJ0UG9zaXRpb24ucm93LCBjb2x1bW46IHN0YXJ0UG9zaXRpb24uY29sdW1uIH07XG4gICAgICAgIHZhciBjdXJDaGFyID0gc3RhcnRBdDtcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIgPCBhdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5jaGFyQXQoY3VyQ2hhcikgPT0gU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5yb3crKztcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyQ2hhcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXRBcnJheShvYmplY3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuICAgICAgICAgICAgdmFyIHBvcyA9IG9iai5wb3M7XG4gICAgICAgICAgICBpZiAoIXBvcykgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3Muc3RhcnQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgaWYgKHBvcy5lbmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLmVuZCwgb2JqOiBvYmogfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zb3J0KChlbDEsIGVsMikgPT4ge1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA+IGVsMi5hdCkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoZWwxLmF0IDwgZWwyLmF0KSByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0V29ya2VyLnRzIiwiLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIEpTT041LCBodHRwOi8vanNvbjUub3JnL1xuLy8gVGhlIG1vZGlmaWNhdGlvbiBmb3IgZ2V0dGluZyBvYmplY3QgYW5kIHByb3BlcnRpZXMgbG9jYXRpb24gJ2F0JyB3ZXJlIG1hZGVuLlxuXG5leHBvcnQgY2xhc3MgU3VydmV5SlNPTjUge1xuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb25OYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGVlID0ge1xuICAgICAgICBcIidcIjogXCInXCIsXG4gICAgICAgICdcIic6ICdcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICAgICAnLyc6ICcvJyxcbiAgICAgICAgJ1xcbic6ICcnLCAgICAgICAvLyBSZXBsYWNlIGVzY2FwZWQgbmV3bGluZXMgaW4gc3RyaW5ncyB3LyBlbXB0eSBzdHJpbmdcbiAgICAgICAgYjogJ1xcYicsXG4gICAgICAgIGY6ICdcXGYnLFxuICAgICAgICBuOiAnXFxuJyxcbiAgICAgICAgcjogJ1xccicsXG4gICAgICAgIHQ6ICdcXHQnXG4gICAgfTtcbiAgICBwcml2YXRlIHN0YXRpYyB3cyA9IFtcbiAgICAgICAgJyAnLFxuICAgICAgICAnXFx0JyxcbiAgICAgICAgJ1xccicsXG4gICAgICAgICdcXG4nLFxuICAgICAgICAnXFx2JyxcbiAgICAgICAgJ1xcZicsXG4gICAgICAgICdcXHhBMCcsXG4gICAgICAgICdcXHVGRUZGJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBlbmRBdDogbnVtYmVyO1xuICAgIHByaXZhdGUgYXQ6IG51bWJlcjsgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIGNoOiBhbnk7ICAgICAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhcnNlVHlwZTogbnVtYmVyOyAvLyAwIC0gc3RhZGFyZCwgMSAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBvYmplY3RzLCAyIC0gZ2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9wZXJ0aWVzXG4gICAgY29uc3RydWN0b3IocGFyc2VUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyc2VUeXBlID0gcGFyc2VUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHJldml2ZXI6IGFueSA9IG51bGwsIHN0YXJ0RnJvbTogbnVtYmVyID0gMCwgZW5kQXQ6IG51bWJlciA9IC0xKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnRleHQgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgICAgdGhpcy5hdCA9IHN0YXJ0RnJvbTtcbiAgICAgICAgdGhpcy5lbmRBdCA9IGVuZEF0O1xuICAgICAgICB0aGlzLmNoID0gJyAnO1xuICAgICAgICByZXN1bHQgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsXG4gICAgICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxuICAgICAgICAvLyBpbiBhbiBlbXB0eSBrZXkuIElmIHRoZXJlIGlzIG5vdCBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHNpbXBseSByZXR1cm4gdGhlXG4gICAgICAgIC8vIHJlc3VsdC5cblxuICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyAoZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9ICh7ICcnOiByZXN1bHQgfSwgJycpKSA6IHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBlcnJvcihtOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ2FsbCBlcnJvciB3aGVuIHNvbWV0aGluZyBpcyB3cm9uZy5cbiAgICAgICAgdmFyIGVycm9yID0gbmV3IFN5bnRheEVycm9yKCk7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSBtO1xuICAgICAgICBlcnJvcltcImF0XCJdID0gdGhpcy5hdDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgbmV4dChjOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSB0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHRoaXMuY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nLlxuICAgICAgICB0aGlzLmNoID0gdGhpcy5jaGFydEF0KCk7XG4gICAgICAgIHRoaXMuYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2g7XG4gICAgfVxuICAgIHByaXZhdGUgcGVlaygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyIHdpdGhvdXQgY29uc3VtaW5nIGl0IG9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCB0byB0aGUgdGhpcy5jaCB2YXJhaWJsZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnRBdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYXJ0QXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZEF0ID4gLTEgJiYgdGhpcy5hdCA+PSB0aGlzLmVuZEF0KSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpO1xuICAgIH1cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIC8vIFBhcnNlIGFuIGlkZW50aWZpZXIuIE5vcm1hbGx5LCByZXNlcnZlZCB3b3JkcyBhcmUgZGlzYWxsb3dlZCBoZXJlLCBidXQgd2VcbiAgICAgICAgLy8gb25seSB1c2UgdGhpcyBmb3IgdW5xdW90ZWQgb2JqZWN0IGtleXMsIHdoZXJlIHJlc2VydmVkIHdvcmRzIGFyZSBhbGxvd2VkLFxuICAgICAgICAvLyBzbyB3ZSBkb24ndCBjaGVjayBmb3IgdGhvc2UgaGVyZS4gUmVmZXJlbmNlczpcbiAgICAgICAgLy8gLSBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g3LjZcbiAgICAgICAgLy8gLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X0d1aWRlL0NvcmVfTGFuZ3VhZ2VfRmVhdHVyZXMjVmFyaWFibGVzXG4gICAgICAgIC8vIC0gaHR0cDovL2RvY3N0b3JlLm1pay51YS9vcmVsbHkvd2VicHJvZy9qc2NyaXB0L2NoMDJfMDcuaHRtXG4gICAgICAgIC8vIFRPRE8gSWRlbnRpZmllcnMgY2FuIGhhdmUgVW5pY29kZSBcImxldHRlcnNcIiBpbiB0aGVtOyBhZGQgc3VwcG9ydCBmb3IgdGhvc2UuXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmNoO1xuXG4gICAgICAgIC8vIElkZW50aWZpZXJzIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgXyBvciAkLlxuICAgICAgICBpZiAoKHRoaXMuY2ggIT09ICdfJyAmJiB0aGlzLmNoICE9PSAnJCcpICYmXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdhJyB8fCB0aGlzLmNoID4gJ3onKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnQScgfHwgdGhpcy5jaCA+ICdaJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgaWRlbnRpZmllclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1YnNlcXVlbnQgY2hhcmFjdGVycyBjYW4gY29udGFpbiBkaWdpdHMuXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiAoXG4gICAgICAgIHRoaXMuY2ggPT09ICdfJyB8fCB0aGlzLmNoID09PSAnJCcgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ3onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnWicpIHx8XG4gICAgICAgICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JykpKSB7XG4gICAgICAgICAgICBrZXkgKz0gdGhpcy5jaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxuXG4gICAgICAgIHZhciBudW1iZXIsXG4gICAgICAgICAgICBzaWduID0gJycsXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xuICAgICAgICAgICAgc2lnbiA9IHRoaXMuY2g7XG4gICAgICAgICAgICB0aGlzLm5leHQodGhpcy5jaCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBJbmZpbml0eSAoY291bGQgdHdlYWsgdG8gYWxsb3cgb3RoZXIgd29yZHMpOlxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ0knKSB7XG4gICAgICAgICAgICBudW1iZXIgPSB0aGlzLndvcmQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5leHBlY3RlZCB3b3JkIGZvciBudW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoc2lnbiA9PT0gJy0nKSA/IC1udW1iZXIgOiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBOYU5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdOJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdleHBlY3RlZCB3b3JkIHRvIGJlIE5hTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWdub3JlIHNpZ24gYXMgLU5hTiBhbHNvIGlzIE5hTlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnMCcpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3gnIHx8IHRoaXMuY2ggPT09ICdYJykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSAxNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdPY3RhbCBsaXRlcmFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGJhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnZScgfHwgdGhpcy5jaCA9PT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgfHwgdGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnRicgfHwgdGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAnZicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduID09PSAnLScpIHtcbiAgICAgICAgICAgIG51bWJlciA9IC1zdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXIgPSArc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG51bWJlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdHJpbmcoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXG5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGRlbGltLCAgICAgIC8vIGRvdWJsZSBxdW90ZSBvciBzaW5nbGUgcXVvdGVcbiAgICAgICAgICAgIHVmZmZmO1xuXG4gICAgICAgIC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciAnIG9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnXCInIHx8IHRoaXMuY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICBkZWxpbSA9IHRoaXMuY2g7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gZGVsaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludCh0aGlzLm5leHQoKSwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUoaGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmVzY2FwZWQgbmV3bGluZXMgYXJlIGludmFsaWQ7IHNlZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtay9qc29uNS9pc3N1ZXMvMjRcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIGZlZWxzIHNwZWNpYWwtY2FzZWQ7IGFyZSB0aGVyZSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIHVuZXNjYXBlZCBjaGFycz9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGlubGluZUNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhbiBpbmxpbmUgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGRcbiAgICAgICAgLy8gYmUgdGhlIHNlY29uZCAvIGNoYXJhY3RlciBpbiB0aGUgLy8gcGFpciB0aGF0IGJlZ2lucyB0aGlzIGlubGluZSBjb21tZW50LlxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGlubGluZSBjb21tZW50LCB3ZSBsb29rIGZvciBhIG5ld2xpbmUgb3IgdGhlIGVuZCBvZiB0aGUgdGV4dC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGFuIGlubGluZSBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1xcbicgfHwgdGhpcy5jaCA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuICAgIH1cbiAgICBwcml2YXRlIGJsb2NrQ29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGEgYmxvY2sgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGQgYmVcbiAgICAgICAgLy8gdGhlICogY2hhcmFjdGVyIGluIHRoZSAvKiBwYWlyIHRoYXQgYmVnaW5zIHRoaXMgYmxvY2sgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBibG9jayBjb21tZW50LCB3ZSBsb29rIGZvciBhbiBlbmRpbmcgKi8gcGFpciBvZiBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBidXQgd2UgYWxzbyB3YXRjaCBmb3IgdGhlIGVuZCBvZiB0ZXh0IGJlZm9yZSB0aGUgY29tbWVudCBpcyB0ZXJtaW5hdGVkLlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYSBibG9jayBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcqJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5jaCk7XG5cbiAgICAgICAgdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBibG9jayBjb21tZW50XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGNvbW1lbnQsIHdoZXRoZXIgaW5saW5lIG9yIGJsb2NrLWxldmVsLCBhc3N1bWluZyB0aGlzIGlzIG9uZS5cbiAgICAgICAgLy8gQ29tbWVudHMgYWx3YXlzIGJlZ2luIHdpdGggYSAvIGNoYXJhY3Rlci5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmV4dCgnLycpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lQ29tbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0NvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdoaXRlKCkge1xuXG4gICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSBhbmQgY29tbWVudHMuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSdyZSBkZXRlY3RpbmcgY29tbWVudHMgYnkgb25seSBhIHNpbmdsZSAvIGNoYXJhY3Rlci5cbiAgICAgICAgLy8gVGhpcyB3b3JrcyBzaW5jZSByZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3QgdmFsaWQgSlNPTig1KSwgYnV0IHRoaXMgd2lsbFxuICAgICAgICAvLyBicmVhayBpZiB0aGVyZSBhcmUgb3RoZXIgdmFsaWQgdmFsdWVzIHRoYXQgYmVnaW4gd2l0aCBhIC8gY2hhcmFjdGVyIVxuXG4gICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFN1cnZleUpTT041LndzLmluZGV4T2YodGhpcy5jaCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3b3JkKCk6IGFueSB7XG5cbiAgICAgICAgLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgncycpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdJJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdmJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiVW5leHBlY3RlZCAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGFycmF5KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnWycpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgnWycpO1xuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRVM1IGFsbG93cyBvbWl0dGluZyBlbGVtZW50cyBpbiBhcnJheXMsIGUuZy4gWyxdIGFuZFxuICAgICAgICAgICAgICAgIC8vIFssbnVsbF0uIFdlIGRvbid0IGFsbG93IHRoaXMgaW4gSlNPTjUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiTWlzc2luZyBhcnJheSBlbGVtZW50XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyB2YWx1ZSwgdGhpcyBuZWVkcyB0b1xuICAgICAgICAgICAgICAgIC8vIGJlIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfVxuICAgIHByaXZhdGUgb2JqZWN0KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSB0cnVlLFxuICAgICAgICAgICAgb2JqZWN0ID0ge307XG4gICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdID0geyBzdGFydDogdGhpcy5hdCAtIDEgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ3snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gS2V5cyBjYW4gYmUgdW5xdW90ZWQuIElmIHRoZXkgYXJlLCB0aGV5IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBKUyBpZGVudGlmaWVycy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0gPSB7IHN0YXJ0OiBzdGFydCwgdmFsdWVTdGFydDogdGhpcy5hdCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyBwYWlyLCB0aGlzIG5lZWRzIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXS5lbmQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZSgpOiBhbnkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxuICAgICAgICAvLyBvciBhIHdvcmQuXG5cbiAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKTtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JyA/IHRoaXMubnVtYmVyKCkgOiB0aGlzLndvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVwbGFjZXI6IGFueTtcbiAgICBwcml2YXRlIGluZGVudFN0cjogc3RyaW5nO1xuICAgIHByaXZhdGUgb2JqU3RhY2s7XG5cbiAgICBwdWJsaWMgc3RyaW5naWZ5KG9iajogYW55LCByZXBsYWNlcjogYW55ID0gbnVsbCwgc3BhY2U6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcGxhY2VyICYmICh0eXBlb2YgKHJlcGxhY2VyKSAhPT0gXCJmdW5jdGlvblwiICYmICF0aGlzLmlzQXJyYXkocmVwbGFjZXIpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYWNlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICAgIHRoaXMuaW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnQoc3BhY2UpO1xuICAgICAgICB0aGlzLm9ialN0YWNrID0gW107XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZS4uLndoZW4gdW5kZWZpbmVkIGlzIHVzZWQgaW5zaWRlIG9mXG4gICAgICAgIC8vIGEgY29tcG91bmQgb2JqZWN0L2FycmF5LCByZXR1cm4gbnVsbC5cbiAgICAgICAgLy8gYnV0IHdoZW4gdG9wLWxldmVsLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIHZhciB0b3BMZXZlbEhvbGRlciA9IHsgXCJcIjogb2JqIH07XG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRlbnQoc3BhY2U6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGFjZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiICYmIHNwYWNlID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW5kZW50KFwiIFwiLCBzcGFjZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSB3aXRoIGl0cyB0b0pTT04gdmFsdWUgZmlyc3QsIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50b0pTT04gJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXItc3VwcGxpZWQgcmVwbGFjZXIgaWYgYSBmdW5jdGlvbiwgY2FsbCBpdC4gSWYgaXQncyBhbiBhcnJheSwgY2hlY2sgb2JqZWN0cycgc3RyaW5nIGtleXMgZm9yXG4gICAgICAgIC8vIHByZXNlbmNlIGluIHRoZSBhcnJheSAocmVtb3ZpbmcgdGhlIGtleS92YWx1ZSBwYWlyIGZyb20gdGhlIHJlc3VsdGluZyBKU09OIGlmIHRoZSBrZXkgaXMgbWlzc2luZykuXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucmVwbGFjZXIpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGxhY2VyKSB7XG4gICAgICAgICAgICBpZiAoaXNUb3BMZXZlbCB8fCB0aGlzLmlzQXJyYXkoaG9sZGVyKSB8fCB0aGlzLnJlcGxhY2VyLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRDaGFyKGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZFN0YXJ0KGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZChrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNXb3JkU3RhcnQoa2V5WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMSwgbGVuZ3RoID0ga2V5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dvcmRDaGFyKGtleVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHBvbHlmaWxsc1xuICAgIHByaXZhdGUgaXNBcnJheShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNEYXRlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNOYU4odmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCAhPT0gdmFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JDaXJjdWxhcihvYmo6IGFueSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JqU3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG1ha2VJbmRlbnQoc3RyOiBzdHJpbmcsIG51bTogbnVtYmVyLCBub05ld0xpbmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5kZW50YXRpb24gbm8gbW9yZSB0aGFuIDEwIGNoYXJzXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGVudCA9IG5vTmV3TGluZSA/IFwiXCIgOiBcIlxcblwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRlbnQgKz0gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudDtcbiAgICB9XG5cbiAgICAvLyBDb3BpZWQgZnJvbSBDcm9rZm9yZCdzIGltcGxlbWVudGF0aW9uIG9mIEpTT05cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2RvdWdsYXNjcm9ja2ZvcmQvSlNPTi1qcy9ibG9iL2UzOWRiNGI3ZTYyNDlmMDRhMTk1ZTdkZDA4NDBlNjEwY2M5ZTk0MWUvanNvbjIuanMjTDE5NVxuICAgIC8vIEJlZ2luXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAgIHByaXZhdGUgc3RhdGljIG1ldGEgPSB7IC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgJ1wiJzogJ1xcXFxcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgIH07XG4gICAgcHJpdmF0ZSBlc2NhcGVTdHJpbmcoc3RyOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4gICAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgICAgICAvLyBzZXF1ZW5jZXMuXG4gICAgICAgIFN1cnZleUpTT041LmVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gU3VydmV5SlNPTjUuZXNjYXBhYmxlLnRlc3Qoc3RyKSA/ICdcIicgKyBzdHIucmVwbGFjZShTdXJ2ZXlKU09ONS5lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IFN1cnZleUpTT041Lm1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICBjIDpcbiAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyICsgJ1wiJztcbiAgICB9XG4gICAgLy8gRW5kXG5cbiAgICBwcml2YXRlIGludGVybmFsU3RyaW5naWZ5KGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgYnVmZmVyLCByZXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgb2JqX3BhcnQgPSB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXIsIGtleSwgaXNUb3BMZXZlbCk7XG5cbiAgICAgICAgaWYgKG9ial9wYXJ0ICYmICF0aGlzLmlzRGF0ZShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgIC8vIHVuYm94IG9iamVjdHNcbiAgICAgICAgICAgIC8vIGRvbid0IHVuYm94IGRhdGVzLCBzaW5jZSB3aWxsIHR1cm4gaXQgaW50byBudW1iZXJcbiAgICAgICAgICAgIG9ial9wYXJ0ID0gb2JqX3BhcnQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG9ial9wYXJ0KSB8fCAhaXNGaW5pdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lc2NhcGVTdHJpbmcob2JqX3BhcnQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBcIltcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ial9wYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzID09PSBudWxsIHx8IHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG9ial9wYXJ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZW50U3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgsIHRydWUpICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJ7XCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub25FbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnB1c2gob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBwcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3BMZXZlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25FbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gdGhpcy5pc1dvcmQocHJvcCkgPyBwcm9wIDogdGhpcy5lc2NhcGVTdHJpbmcocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBwcm9wS2V5ICsgXCI6XCIgKyAodGhpcy5pbmRlbnRTdHIgPyAnICcgOiAnJykgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zdWJzdHJpbmcoMCwgYnVmZmVyLmxlbmd0aCAtIDEpICsgdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCkgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICd7fSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb25zIGFuZCB1bmRlZmluZWQgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uNS50cyIsImltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlFbWJlZGluZ1dpbmRvdyB7XG4gICAgcHJpdmF0ZSBqc29uVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nSGVhZDogQWNlQWpheC5FZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0phdmE6IEFjZUFqYXguRWRpdG9yO1xuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGtvU2hvd0FzV2luZG93OiBhbnk7XG4gICAga29TY3JpcHRVc2luZzogYW55O1xuICAgIGtvSGFzSWRzOiBhbnk7XG4gICAga29Mb2FkU3VydmV5OiBhbnk7XG4gICAga29MaWJyYXJ5VmVyc2lvbjogYW55O1xuICAgIGtvVmlzaWJsZUh0bWw6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24gPSBrby5vYnNlcnZhYmxlKFwia25vY2tvdXRcIik7XG4gICAgICAgIHRoaXMua29TaG93QXNXaW5kb3cgPSBrby5vYnNlcnZhYmxlKFwicGFnZVwiKTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nID0ga28ub2JzZXJ2YWJsZShcImJvb3RzdHJhcFwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0lkcyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvVmlzaWJsZUh0bWwgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYua29MaWJyYXJ5VmVyc2lvbigpID09IFwicmVhY3RcIiB8fCBzZWxmLmtvU2hvd0FzV2luZG93KCkgPT1cInBhZ2VcIjsgfSk7XG4gICAgICAgIHRoaXMua29MaWJyYXJ5VmVyc2lvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SGVhZFRleHQoKTsgc2VsZi5zdXJ2ZXlFbWJlZGluZ0phdmEuc2V0VmFsdWUoc2VsZi5nZXRKYXZhVGV4dCgpKTsgfSk7XG4gICAgICAgIHRoaXMua29TaG93QXNXaW5kb3cuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnN1cnZleUVtYmVkaW5nSmF2YS5zZXRWYWx1ZShzZWxmLmdldEphdmFUZXh0KCkpOyB9KTtcbiAgICAgICAgdGhpcy5rb1NjcmlwdFVzaW5nLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRIZWFkVGV4dCgpOyBzZWxmLnN1cnZleUVtYmVkaW5nSmF2YS5zZXRWYWx1ZShzZWxmLmdldEphdmFUZXh0KCkpOyB9KTtcbiAgICAgICAgdGhpcy5rb0xvYWRTdXJ2ZXkuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnN1cnZleUVtYmVkaW5nSmF2YS5zZXRWYWx1ZShzZWxmLmdldEphdmFUZXh0KCkpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPSBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGpzb24oKTogYW55IHsgcmV0dXJuIHRoaXMuanNvblZhbHVlOyB9XG4gICAgcHVibGljIHNldCBqc29uKHZhbHVlOiBhbnkpIHsgdGhpcy5qc29uVmFsdWUgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0hlYWQgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nSGVhZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVhZFRleHQoKTtcbiAgICAgICAgICAgIHZhciBib2R5RWRpdG9yID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0JvZHlcIik7XG4gICAgICAgICAgICBib2R5RWRpdG9yLnNldFZhbHVlKFwiPGRpdiBpZD1cXFwibXlTdXJ2ZXlKU05hbWVcXFwiPjwvZGl2PlwiKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdKYXZhID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0phdmFcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0hhc0lkcyh0aGlzLnN1cnZleUlkICYmIHRoaXMuc3VydmV5UG9zdElkKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEuc2V0VmFsdWUodGhpcy5nZXRKYXZhVGV4dCgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRIZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmtvTGlicmFyeVZlcnNpb24oKSA9PSBcImtub2Nrb3V0XCIpIHtcbiAgICAgICAgICAgIHN0ciA9IFwiPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2tub2Nrb3V0LzMuMy4wL2tub2Nrb3V0LW1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxuPHNjcmlwdCBzcmM9XFxcImpzL3N1cnZleS5rby5taW4uanNcXFwiPjwvc2NyaXB0PlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gXCI8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9mYi5tZS9yZWFjdC0wLjE0LjguanNcXFwiPjwvc2NyaXB0PlxcbjxzY3JpcHQgc3JjPSBcXFwiaHR0cHM6Ly9mYi5tZS9yZWFjdC1kb20tMC4xNC44LmpzXFxcIj48L3NjcmlwdD5cXG48c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYmFiZWwtY29yZS81LjguMjMvYnJvd3Nlci5taW4uanNcXFwiPjwvc2NyaXB0PlxcblwiO1xuICAgICAgICAgICAgc3RyICs9IFwiPHNjcmlwdCBzcmM9XFxcImpzL3N1cnZleS5yZWFjdC5taW4uanNcXFwiPjwvc2NyaXB0PlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtvU2NyaXB0VXNpbmcoKSAhPSBcImJvb3RzdHJhcFwiKSB7XG4gICAgICAgICAgICBzdHIgKz0gXCJcXG48bGluayBocmVmPVxcXCJjc3Mvc3VydmV5LmNzc1xcXCIgdHlwZT1cXFwidGV4dC9jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgLz5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZC5zZXRWYWx1ZShzdHIpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUVkaXRvcihlbGVtZW50TmFtZTogc3RyaW5nKTogQWNlQWpheC5FZGl0b3Ige1xuICAgICAgICB2YXIgZWRpdG9yID0gYWNlLmVkaXQoZWxlbWVudE5hbWUpO1xuICAgICAgICBlZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvY2hyb21lXCIpO1xuICAgICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRNb2RlKFwiYWNlL21vZGUvanNvblwiKTtcbiAgICAgICAgZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICAgICAgICBlZGl0b3Iuc2V0U2hvd1ByaW50TWFyZ2luKGZhbHNlKTtcbiAgICAgICAgZWRpdG9yLnJlbmRlcmVyLnNldFNob3dHdXR0ZXIoZmFsc2UpO1xuICAgICAgICBlZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XG4gICAgICAgIHJldHVybiBlZGl0b3I7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SmF2YVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGlzT25QYWdlID0gdGhpcy5rb1Nob3dBc1dpbmRvdygpID09IFwicGFnZVwiO1xuICAgICAgICB2YXIgc3RyID0gdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCkgPT0gXCJrbm9ja291dFwiID8gdGhpcy5nZXRLbm9ja291dEphdmFUZXh0KGlzT25QYWdlKSA6IHRoaXMuZ2V0UmVhY3RKYXZhVGV4dChpc09uUGFnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNldENzcygpICsgc3RyO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNldENzcygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb1NjcmlwdFVzaW5nKCkgIT0gXCJib290c3RyYXBcIikgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBcIlN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFxcXCJib290c3RyYXBcXFwiO1xcblwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEtub2Nrb3V0SmF2YVRleHQoaXNPblBhZ2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICB2YXIgdGV4dCA9IGlzT25QYWdlID8gXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5TdXJ2ZXkoXFxuXCIgOiBcInZhciBzdXJ2ZXlXaW5kb3cgPSBuZXcgU3VydmV5LlN1cnZleVdpbmRvdyhcXG5cIjtcbiAgICAgICAgdGV4dCArPSB0aGlzLmdldEpzb25UZXh0KCk7XG4gICAgICAgIHRleHQgKz0gXCIpO1xcblwiO1xuICAgICAgICBpZiAoIWlzT25QYWdlKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IFwic3VydmV5V2luZG93LlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzYXZlRnVuYyA9IHRoaXMuZ2V0U2F2ZUZ1bmNDb2RlKCk7XG4gICAgICAgIHRleHQgKz0gXCJzdXJ2ZXkub25Db21wbGV0ZS5hZGQoZnVuY3Rpb24gKHMpIHtcXG5cIiArIHNhdmVGdW5jICsgXCJcXG4gfSk7XFxuXCI7XG4gICAgICAgIGlmIChpc09uUGFnZSkge1xuICAgICAgICAgICAgdGV4dCArPSBcInN1cnZleS5yZW5kZXIoXFxcIm15U3VydmV5SlNOYW1lXFxcIik7XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ICs9IFwiLy9CeSBkZWZhdWx0IFN1cnZleS50aXRsZSBpcyB1c2VkLlxcblwiXG4gICAgICAgICAgICB0ZXh0ICs9IFwiLy9zdXJ2ZXlXaW5kb3cudGl0bGUgPSBcXFwiTXkgU3VydmV5IFdpbmRvdyBUaXRsZS5cXFwiO1xcblwiO1xuICAgICAgICAgICAgdGV4dCArPSBcInN1cnZleVdpbmRvdy5zaG93KCk7XCI7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRSZWFjdEphdmFUZXh0KGlzT25QYWdlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHNhdmVGdW5jID0gdGhpcy5nZXRTYXZlRnVuY0NvZGUoKTtcbiAgICAgICAgdmFyIHNlbmRSZXN1bHRUZXh0ID0gXCJ2YXIgc3VydmV5U2VuZFJlc3VsdCA9IGZ1bmN0aW9uIChzKSB7XFxuXCIgKyBzYXZlRnVuYyArIFwiXFxuIH0pO1xcblwiO1xuICAgICAgICB2YXIgbmFtZSA9IGlzT25QYWdlID8gXCJSZWFjdFN1cnZleVwiIDogXCJSZWFjdFN1cnZleVdpbmRvd1wiO1xuICAgICAgICB2YXIganNvblRleHQgPSBcInZhciBzdXJ2ZXlKc29uID0gXCIgKyB0aGlzLmdldEpzb25UZXh0KCkgKyBcIlxcblxcblwiO1xuICAgICAgICB2YXIgdGV4dCA9IGpzb25UZXh0ICsgc2VuZFJlc3VsdFRleHQgKyBcIlJlYWN0RE9NLnJlbmRlcihcXG48XCIgKyBuYW1lICsgXCIganNvbj17c3VydmV5SnNvbn0gb25Db21wbGV0ZT17c3VydmV5U2VuZFJlc3VsdH0gLz4sIFxcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwibXlTdXJ2ZXlKU05hbWVcXFwiKSk7XCI7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNhdmVGdW5jQ29kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSkgcmV0dXJuIFwic3VydmV5LnNlbmRSZXN1bHQoJ1wiICsgdGhpcy5zdXJ2ZXlQb3N0SWQgKyBcIicpO1wiO1xuICAgICAgICByZXR1cm4gXCJhbGVydChcXFwiVGhlIHJlc3VsdHMgYXJlOlxcXCIgKyBKU09OLnN0cmluZ2lmeShzLmRhdGEpKTtcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRKc29uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5rb0hhc0lkcygpICYmIHRoaXMua29Mb2FkU3VydmV5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInsgc3VydmV5SWQ6ICdcIiArIHRoaXMuc3VydmV5SWQgKyBcIid9XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KHRoaXMuanNvbik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJzIHtcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUgb2JqVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIGNob2ljZXNDbGFzc2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIGtvVmVyYnM6IGFueTtcbiAgICBrb0hhc1ZlcmJzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMua29WZXJicyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvSGFzVmVyYnMgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBjbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic2VsZWN0YmFzZVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzQ2xhc3NlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlc0NsYXNzZXMucHVzaChjbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkuU3VydmV5KSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb2JqKCk6IGFueSB7IHJldHVybiB0aGlzLm9ialZhbHVlIH1cbiAgICBwdWJsaWMgc2V0IG9iaih2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLm9ialZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMub2JqVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5idWlsZFZlcmJzKCk7XG4gICAgfVxuICAgIHByaXZhdGUgYnVpbGRWZXJicygpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUodGhpcy5vYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uQmFzZT50aGlzLm9iajtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXcgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtKHRoaXMuc3VydmV5LCBxdWVzdGlvbiwgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNob2ljZXNDbGFzc2VzLmluZGV4T2YocXVlc3Rpb24uZ2V0VHlwZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChuZXcgU3VydmV5VmVyYkNoYW5nZVR5cGVJdGVtKHRoaXMuc3VydmV5LCBxdWVzdGlvbiwgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvVmVyYnMoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvSGFzVmVyYnMoYXJyYXkubGVuZ3RoID4gMCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBrb0l0ZW1zOiBhbnk7XG4gICAga29TZWxlY3RlZEl0ZW06IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICB0aGlzLmtvSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7IHJldHVybiBcIlwiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkNoYW5nZVR5cGVJdGVtIGV4dGVuZHMgU3VydmV5VmVyYkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHN1cGVyKHN1cnZleSwgcXVlc3Rpb24sIG9uTW9kaWZpZWRDYWxsYmFjayk7XG4gICAgICAgIHZhciBjbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic2VsZWN0YmFzZVwiLCB0cnVlKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaCh7IHZhbHVlOiBjbGFzc2VzW2ldLm5hbWUsIHRleHQ6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJxdC5cIiArIGNsYXNzZXNbaV0ubmFtZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbShxdWVzdGlvbi5nZXRUeXBlKCkpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLmNoYW5nZVR5cGUobmV3VmFsdWUpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7IHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudmVyYkNoYW5nZVR5cGVcIik7IH1cbiAgICBwcml2YXRlIGNoYW5nZVR5cGUocXVlc3Rpb25UeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uVHlwZSA9PSB0aGlzLnF1ZXN0aW9uLmdldFR5cGUoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICB2YXIgaW5kZXggPSBwYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICB2YXIgbmV3UXVlc3Rpb24gPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgdGhpcy5xdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIGpzb24gPSBqc29uT2JqLnRvSnNvbk9iamVjdCh0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChqc29uLCBuZXdRdWVzdGlvbik7XG4gICAgICAgIHBhZ2UucmVtb3ZlUXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHBhZ2UuYWRkUXVlc3Rpb24obmV3UXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaygpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW0gZXh0ZW5kcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAgcHJpdmF0ZSBwcmV2UGFnZTogU3VydmV5LlBhZ2U7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc3VydmV5LCBxdWVzdGlvbiwgb25Nb2RpZmllZENhbGxiYWNrKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkucGFnZXNbaV07XG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgdmFsdWU6IHBhZ2UsIHRleHQ6IFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKHBhZ2UpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29JdGVtcyhhcnJheSk7XG4gICAgICAgIHRoaXMucHJldlBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHRoaXMucHJldlBhZ2UpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLmNoYW5nZVBhZ2UobmV3VmFsdWUpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7IHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudmVyYkNoYW5nZVBhZ2VcIik7IH1cbiAgICBwcml2YXRlIGNoYW5nZVBhZ2UobmV3UGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgaWYgKG5ld1BhZ2UgPT0gbnVsbCB8fCBuZXdQYWdlID09IHRoaXMucHJldlBhZ2UpIHJldHVybjtcbiAgICAgICAgdGhpcy5wcmV2UGFnZS5yZW1vdmVRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgbmV3UGFnZS5hZGRRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMub25Nb2RpZmllZENhbGxiYWNrKSB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0VmVyYnMudHMiLCJpbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5VW5kb1JlZG8ge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PFVuZG9SZWRvSXRlbT47XG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIGtvQ2FuVW5kbzogYW55OyBrb0NhblJlZG86IGFueTtcbiAgICBwdWJsaWMgbWF4aW11bUNvdW50OiBudW1iZXIgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8oZmFsc2UpO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyhmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDdXJyZW50KHN1cnZleTogU3VydmV5LlN1cnZleSwgc2VsZWN0ZWRPYmpOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVW5kb1JlZG9JdGVtKCk7XG4gICAgICAgIGl0ZW0uc3VydmV5SlNPTiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChzdXJ2ZXkpO1xuICAgICAgICBpdGVtLnNlbGVjdGVkT2JqTmFtZSA9IHNlbGVjdGVkT2JqTmFtZTtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMucmVtb3ZlT2xkRGF0YSgpO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUNhblVuZG9SZWRvKCk7XG4gICAgfVxuICAgIHB1YmxpYyB1bmRvKCk6IFVuZG9SZWRvSXRlbSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5VbmRvKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9VbmRvUmVkbygtMSk7XG4gICAgfVxuICAgIHB1YmxpYyByZWRvKCk6IFVuZG9SZWRvSXRlbSAge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUmVkbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oMSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlQ2FuVW5kb1JlZG8oKSB7XG4gICAgICAgIHRoaXMua29DYW5VbmRvKHRoaXMuY2FuVW5kbyk7XG4gICAgICAgIHRoaXMua29DYW5SZWRvKHRoaXMuY2FuUmVkbyk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9VbmRvUmVkbyhkSW5kZXg6IG51bWJlcik6IFVuZG9SZWRvSXRlbSB7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gZEluZGV4O1xuICAgICAgICB0aGlzLnVwZGF0ZUNhblVuZG9SZWRvKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDAgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy5pdGVtc1t0aGlzLmluZGV4XSA6IG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY2FuVW5kbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPj0gMSAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY2FuUmVkbygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID4gMSAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBwcml2YXRlIHJlbW92ZU9sZERhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEgPCB0aGlzLm1heGltdW1Db3VudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSgwLCB0aGlzLml0ZW1zLmxlbmd0aCAtIHRoaXMubWF4aW11bUNvdW50IC0gMSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5kb1JlZG9JdGVtIHtcbiAgICBzdXJ2ZXlKU09OOiBhbnk7XG4gICAgc2VsZWN0ZWRPYmpOYW1lOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdW5kb3JlZG8udHMiLCJpbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi9wYWdlc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0c30gZnJvbSBcIi4vc3VydmV5T2JqZWN0c1wiO1xuaW1wb3J0IHtTdXJ2ZXlWZXJic30gZnJvbSBcIi4vb2JqZWN0VmVyYnNcIjtcbmltcG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4vdGV4dFdvcmtlclwiO1xuaW1wb3J0IHtTdXJ2ZXlVbmRvUmVkbywgVW5kb1JlZG9JdGVtfSBmcm9tIFwiLi91bmRvcmVkb1wiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXIsIE9ialR5cGV9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0IHtEcmFnRHJvcEhlbHBlcn0gZnJvbSBcIi4vZHJhZ2Ryb3BoZWxwZXJcIjtcbmltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG5pbXBvcnQge2h0bWwgYXMgdGVtcGxhdGVFZGl0b3JIdG1sfSBmcm9tIFwiLi90ZW1wbGF0ZUVkaXRvci5rby5odG1sXCI7XG5pbXBvcnQge2h0bWwgYXMgdGVtcGxhdGVQYWdlSHRtbH0gZnJvbSBcIi4vdGVtcGxhdGVfcGFnZS5odG1sXCI7XG5pbXBvcnQge2h0bWwgYXMgdGVtcGxhdGVRdWVzdGlvbkh0bWx9IGZyb20gXCIuL3RlbXBsYXRlX3F1ZXN0aW9uLmh0bWxcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlFZGl0b3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlVGV4dFRpbWVvdXQ6IG51bWJlciA9IDEwMDA7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0TmV3U3VydmV5VGV4dDogc3RyaW5nID0gXCJ7IHBhZ2VzOiBbeyBuYW1lOiAncGFnZTEnfV0gfVwiO1xuICAgIHByaXZhdGUgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN1cnZleWpzOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHN1cnZleWpzRXhhbXBsZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGpzb25FZGl0b3I6IEFjZUFqYXguRWRpdG9yO1xuICAgIHByaXZhdGUgaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xuICAgIHByaXZhdGUgcGFnZXNFZGl0b3I6IFN1cnZleVBhZ2VzRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmc6IFN1cnZleUVtYmVkaW5nV2luZG93O1xuICAgIHByaXZhdGUgc3VydmV5T2JqZWN0czogU3VydmV5T2JqZWN0cztcbiAgICBwcml2YXRlIHN1cnZleVZlcmJzOiBTdXJ2ZXlWZXJicztcbiAgICBwcml2YXRlIHRleHRXb3JrZXI6IFN1cnZleVRleHRXb3JrZXI7XG4gICAgcHJpdmF0ZSB1bmRvUmVkbzogU3VydmV5VW5kb1JlZG87XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIHNhdmVTdXJ2ZXlGdW5jVmFsdWU6IChubzogbnVtYmVyLCBvblNhdmVDYWxsYmFjazogKG5vOiBudW1iZXIsIGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIG9wdGlvbnM6IGFueTtcbiAgICBwcml2YXRlIHN0YXRlVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkcmFnRHJvcEhlbHBlcjogRHJhZ0Ryb3BIZWxwZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHF1ZXN0aW9uVHlwZXM6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBrb0NvcGllZFF1ZXN0aW9uczogYW55O1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjazogKGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGtvSXNTaG93RGVzaWduZXI6IGFueTtcbiAgICBrb1ZpZXdUeXBlOiBhbnk7XG4gICAga29DYW5EZWxldGVPYmplY3Q6IGFueTtcbiAgICBrb09iamVjdHM6IGFueTsga29TZWxlY3RlZE9iamVjdDogYW55O1xuICAgIGtvU2hvd1NhdmVCdXR0b246IGFueTtcbiAgICBrb0dlbmVyYXRlVmFsaWRKU09OOiBhbnk7IGtvU2hvd09wdGlvbnM6IGFueTsga29UZXN0U3VydmV5V2lkdGg6IGFueTtcbiAgICBzZWxlY3REZXNpZ25lckNsaWNrOiBhbnk7IHNlbGVjdEVkaXRvckNsaWNrOiBhbnk7IHNlbGVjdFRlc3RDbGljazogYW55OyBzZWxlY3RFbWJlZENsaWNrOiBhbnk7XG4gICAgZ2VuZXJhdGVWYWxpZEpTT05DbGljazogYW55OyBnZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrOiBhbnk7XG4gICAgZG9VbmRvQ2xpY2s6IGFueTsgZG9SZWRvQ2xpY2s6IGFueTtcbiAgICBkZWxldGVPYmplY3RDbGljazogYW55O1xuICAgIGtvU3RhdGU6IGFueTtcbiAgICBydW5TdXJ2ZXlDbGljazogYW55OyBlbWJlZGluZ1N1cnZleUNsaWNrOiBhbnk7XG4gICAgc2F2ZUJ1dHRvbkNsaWNrOiBhbnk7XG4gICAgZHJhZ2dpbmdRdWVzdGlvbjogYW55OyBjbGlja1F1ZXN0aW9uOiBhbnk7XG4gICAgZHJhZ2dpbmdDb3BpZWRRdWVzdGlvbjogYW55OyBjbGlja0NvcGllZFF1ZXN0aW9uOiBhbnk7XG4gICAgZHJhZ0VuZDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZWRFbGVtZW50OiBhbnkgPSBudWxsLCBvcHRpb25zOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25UeXBlcyA9IHRoaXMuZ2V0UXVlc3Rpb25UeXBlcygpO1xuICAgICAgICB0aGlzLmtvQ29waWVkUXVlc3Rpb25zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5rb1N0YXRlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb1Nob3dPcHRpb25zID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29UZXN0U3VydmV5V2lkdGggPSBrby5vYnNlcnZhYmxlKFwiMTAwJVwiKTtcbiAgICAgICAgdGhpcy5zYXZlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZG9TYXZlKCk7IH07XG4gICAgICAgIHRoaXMua29PYmplY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZE9iamVjdCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkT2JqZWN0LnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdENoYW5nZWQobmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbHVlIDogbnVsbCk7IH0pO1xuICAgICAgICB0aGlzLmtvR2VuZXJhdGVWYWxpZEpTT04gPSBrby5vYnNlcnZhYmxlKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pO1xuICAgICAgICB0aGlzLmtvR2VuZXJhdGVWYWxpZEpTT04uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMpIHNlbGYub3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoc2VsZi5nZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjaykgc2VsZi5nZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjayhuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMgPSBuZXcgU3VydmV5T2JqZWN0cyh0aGlzLmtvT2JqZWN0cywgdGhpcy5rb1NlbGVjdGVkT2JqZWN0KTtcbiAgICAgICAgdGhpcy51bmRvUmVkbyA9IG5ldyBTdXJ2ZXlVbmRvUmVkbygpO1xuXG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMgPSBuZXcgU3VydmV5VmVyYnMoZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCk7IH0pO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IgPSBuZXcgU3VydmV5T2JqZWN0RWRpdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKG9wdGlvbnMucHJvcGVydHksIG9wdGlvbnMub2JqZWN0LCBvcHRpb25zLm5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3IgPSBuZXcgU3VydmV5UGFnZXNFZGl0b3IoKCkgPT4geyBzZWxmLmFkZFBhZ2UoKTsgfSwgKHBhZ2U6IFN1cnZleS5QYWdlKSA9PiB7IHNlbGYuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSk7IH0sXG4gICAgICAgICAgICAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4geyBzZWxmLm1vdmVQYWdlKGluZGV4RnJvbSwgaW5kZXhUbyk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcgPSBuZXcgU3VydmV5RW1iZWRpbmdXaW5kb3coKTtcblxuICAgICAgICB0aGlzLmtvVmlld1R5cGUgPSBrby5vYnNlcnZhYmxlKFwiZGVzaWduZXJcIik7XG4gICAgICAgIHRoaXMua29Jc1Nob3dEZXNpZ25lciA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29WaWV3VHlwZSgpID09IFwiZGVzaWduZXJcIjsgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0RGVzaWduZXJDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93RGVzaWduZXIoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RFZGl0b3JDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93SnNvbkVkaXRvcigpOyB9O1xuICAgICAgICB0aGlzLnNlbGVjdFRlc3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93VGVzdFN1cnZleSgpOyB9O1xuICAgICAgICB0aGlzLnNlbGVjdEVtYmVkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0VtYmVkRWRpdG9yKCk7IH07XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVWYWxpZEpTT05DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0dlbmVyYXRlVmFsaWRKU09OKHRydWUpOyB9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTihmYWxzZSk7IH07XG4gICAgICAgIHRoaXMucnVuU3VydmV5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0xpdmVTdXJ2ZXkoKTsgfTtcbiAgICAgICAgdGhpcy5lbWJlZGluZ1N1cnZleUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dTdXJ2ZXlFbWJlZGluZygpOyB9O1xuICAgICAgICB0aGlzLmRlbGV0ZU9iamVjdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTsgfTtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1F1ZXN0aW9uID0gZnVuY3Rpb24gKHF1ZXN0aW9uVHlwZSwgZSkgeyBzZWxmLmRvRHJhZ2dpbmdRdWVzdGlvbihxdWVzdGlvblR5cGUsIGUpOyB9O1xuICAgICAgICB0aGlzLmNsaWNrUXVlc3Rpb24gPSBmdW5jdGlvbiAocXVlc3Rpb25UeXBlKSB7IHNlbGYuZG9DbGlja1F1ZXN0aW9uKHF1ZXN0aW9uVHlwZSk7IH07XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDb3BpZWRRdWVzdGlvbiA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZG9EcmFnZ2luZ0NvcGllZFF1ZXN0aW9uKGl0ZW0uanNvbiwgZSk7IH07XG4gICAgICAgIHRoaXMuY2xpY2tDb3BpZWRRdWVzdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYuZG9DbGlja0NvcGllZFF1ZXN0aW9uKGl0ZW0uanNvbik7IH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIuZW5kKCk7IH07XG5cbiAgICAgICAgdGhpcy5kb1VuZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8udW5kbygpKTsgfTtcbiAgICAgICAgdGhpcy5kb1JlZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8ucmVkbygpKTsgfTtcblxuICAgICAgICBpZiAocmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihyZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHJlbmRlcihlbGVtZW50OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IHRoaXMucmVuZGVyZWRFbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZUVkaXRvckh0bWw7XG4gICAgICAgIHNlbGYuYXBwbHlCaW5kaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkU3VydmV5KHN1cnZleUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBuZXcgU3VydmV5LmR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkoc3VydmV5SWQsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMua29Jc1Nob3dEZXNpZ25lcigpKSByZXR1cm4gdGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmpzb25FZGl0b3IgIT0gbnVsbCA/IHRoaXMuanNvbkVkaXRvci5nZXRWYWx1ZSgpIDogXCJcIjtcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy50ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy50ZXh0V29ya2VyLnN1cnZleSkpO1xuICAgICAgICAgICAgdGhpcy5zaG93RGVzaWduZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFRleHRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdGF0ZVZhbHVlOyB9XG4gICAgcHJvdGVjdGVkIHNldFN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29TdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgc2F2ZU5vOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBkb1NhdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJzYXZpbmdcIik7XG4gICAgICAgIGlmICh0aGlzLnNhdmVTdXJ2ZXlGdW5jKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVObysrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zYXZlU3VydmV5RnVuYyh0aGlzLnNhdmVObyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1NhdmVDYWxsYmFjayhubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZShcInNhdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zYXZlTm8gPT0gbm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZSBUT0RPXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0TW9kaWZpZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJtb2RpZmllZFwiKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFVuZG9SZWRvQ3VycmVudFN0YXRlKGNsZWFyU3RhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoY2xlYXJTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51bmRvUmVkby5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxPYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKSA/IHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy51bmRvUmVkby5zZXRDdXJyZW50KHRoaXMuc3VydmV5VmFsdWUsIHNlbE9iaiA/IHNlbE9iai5uYW1lIDogbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2F2ZVN1cnZleUZ1bmMoKSB7IHJldHVybiB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNhdmVTdXJ2ZXlGdW5jKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zYXZlU3VydmV5RnVuY1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29TaG93U2F2ZUJ1dHRvbih2YWx1ZSAhPSBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzaG93T3B0aW9ucygpIHsgcmV0dXJuIHRoaXMua29TaG93T3B0aW9ucygpOyB9XG4gICAgcHVibGljIHNldCBzaG93T3B0aW9ucyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmtvU2hvd09wdGlvbnModmFsdWUpOyB9XG4gICAgcHJpdmF0ZSBzZXRUZXh0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvci5yZW5kZXJlci51cGRhdGVGdWxsKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvY2Vzc0pzb24odmFsdWUpO1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQYWdlKCkge1xuICAgICAgICB2YXIgbmFtZSA9IFN1cnZleUhlbHBlci5nZXROZXdQYWdlTmFtZSh0aGlzLnN1cnZleS5wYWdlcyk7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5VmFsdWUuYWRkTmV3UGFnZShuYW1lKTtcbiAgICAgICAgdGhpcy5hZGRQYWdlVG9VSShwYWdlKTtcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0TG9jU3RyaW5nKHN0cjogc3RyaW5nKSB7IHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKHN0cik7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0UXVlc3Rpb25UeXBlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHZhciBhbGxUeXBlcyA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuZ2V0QWxsVHlwZXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgIXRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzIHx8ICF0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcy5sZW5ndGgpIHJldHVybiBhbGxUeXBlcztcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb25UeXBlID0gdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXNbaV07XG4gICAgICAgICAgICBpZiAoYWxsVHlwZXMuaW5kZXhPZihxdWVzdGlvblR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChxdWVzdGlvblR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgbW92ZVBhZ2UoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpbmRleEZyb21dO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhGcm9tLCAxKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucGFnZXMuc3BsaWNlKGluZGV4VG8sIDAsIHBhZ2UpO1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHBhZ2UpXG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQYWdlVG9VSShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5VmFsdWU7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRQYWdlKHBhZ2UpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUXVlc3Rpb25BZGRlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRRdWVzdGlvbihwYWdlLCBxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUXVlc3Rpb25SZW1vdmVkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3QocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvYmo6IGFueSwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgaXNEZWZhdWx0ID0gcHJvcGVydHkuaXNEZWZhdWx0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBvYmpbcHJvcGVydHkubmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lm5hbWUgPT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5uYW1lQ2hhbmdlZChvYmopO1xuICAgICAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5jaGFuZ2VOYW1lKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9VbmRvUmVkbyhpdGVtOiBVbmRvUmVkb0l0ZW0pIHtcbiAgICAgICAgdGhpcy5pbml0U3VydmV5KGl0ZW0uc3VydmV5SlNPTik7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkT2JqTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMuZmluZE9iakJ5TmFtZShpdGVtLnNlbGVjdGVkT2JqTmFtZSk7XG4gICAgICAgICAgICBpZiAoc2VsT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChzZWxPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy51bmRvUmVkby5rb0NhblVuZG8oKSA/IFwibW9kaWZpZWRcIiA6IFwic2F2ZWRcIik7XG4gICAgfVxuICAgIHByaXZhdGUgZmluZE9iakJ5TmFtZShuYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuQmFzZSB7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHBhZ2UpIHJldHVybiBwYWdlO1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uQmFzZT50aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGNhblN3aXRjaFZpZXdUeXBlKG5ld1R5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAobmV3VHlwZSAmJiB0aGlzLmtvVmlld1R5cGUoKSA9PSBuZXdUeXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSAhPSBcImVkaXRvclwiIHx8ICF0aGlzLnRleHRXb3JrZXIpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0KSB7XG4gICAgICAgICAgICBhbGVydCh0aGlzLmdldExvY1N0cmluZyhcImVkLmNvcnJlY3RKU09OXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkobmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMudGV4dFdvcmtlci5zdXJ2ZXkpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0Rlc2lnbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUoXCJkZXNpZ25lclwiKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJkZXNpZ25lclwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93SnNvbkVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpID09IFwiZWRpdG9yXCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNldFZhbHVlKHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpKTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLmZvY3VzKCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImVkaXRvclwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93VGVzdFN1cnZleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKG51bGwpKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd0xpdmVTdXJ2ZXkoKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwidGVzdFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93RW1iZWRFZGl0b3IoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImVtYmVkXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd1N1cnZleUVtYmVkaW5nKCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImVtYmVkXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuc3VydmV5KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdENoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgY2FuRGVsZXRlT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2VsZWN0ZWRPYmplY3QgPSBvYmo7XG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMub2JqID0gb2JqO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPSA8U3VydmV5LlBhZ2U+b2JqO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0ob2JqKTtcbiAgICAgICAgICAgIGNhbkRlbGV0ZU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5W1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvQ2FuRGVsZXRlT2JqZWN0KGNhbkRlbGV0ZU9iamVjdCk7XG4gICAgfVxuICAgIHByaXZhdGUgYXBwbHlCaW5kaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBrby5jbGVhbk5vZGUodGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIHRoaXMucmVuZGVyZWRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlqcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5anNcIik7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleWpzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnN1cnZleWpzLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0Nikgc2VsZi5kZWxldGVRdWVzdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMzggfHwgZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0UXVlc3Rpb24oZS5rZXlDb2RlID09IDM4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuanNvbkVkaXRvciA9IGFjZS5lZGl0KFwic3VydmV5anNKU09ORWRpdG9yXCIpO1xuICAgICAgICB0aGlzLnN1cnZleWpzRXhhbXBsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5anNFeGFtcGxlXCIpO1xuXG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5SlNPTjUoKS5wYXJzZShTdXJ2ZXlFZGl0b3IuZGVmYXVsdE5ld1N1cnZleVRleHQpKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5tb2RlID0gXCJkZXNpZ25lclwiO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLnJlbmRlcih0aGlzLnN1cnZleWpzKTtcblxuICAgICAgICB0aGlzLmluaXRKc29uRWRpdG9yKCk7XG4gICAgICAgIFN1cnZleVRleHRXb3JrZXIubmV3TGluZUNoYXIgPSB0aGlzLmpzb25FZGl0b3Iuc2Vzc2lvbi5kb2MuZ2V0TmV3TGluZUNoYXJhY3RlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRKc29uRWRpdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9jaHJvbWVcIik7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IuZ2V0U2Vzc2lvbigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25Kc29uRWRpdG9yQ2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLmdldFNlc3Npb24oKS5zZXRVc2VXb3JrZXIodHJ1ZSk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdFN1cnZleShqc29uOiBhbnkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleS5TdXJ2ZXkoKTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlciA9IG5ldyBEcmFnRHJvcEhlbHBlcig8U3VydmV5LklTdXJ2ZXk+dGhpcy5zdXJ2ZXksIGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRNb2RpZmllZCgpIH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wiZHJhZ0Ryb3BIZWxwZXJcIl0gPSB0aGlzLmRyYWdEcm9wSGVscGVyO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wic2V0SnNvbk9iamVjdFwiXShqc29uKTsgLy9UT0RPXG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmlzRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSBuZXcgU3VydmV5LlN1cnZleShuZXcgU3VydmV5SlNPTjUoKS5wYXJzZShTdXJ2ZXlFZGl0b3IuZGVmYXVsdE5ld1N1cnZleVRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5tb2RlID0gXCJkZXNpZ25lclwiO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIodGhpcy5zdXJ2ZXlqcyk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWZXJicy5zdXJ2ZXkgPSB0aGlzLnN1cnZleTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChzZW5kZXJbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0pOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcIm9uQ29weVF1ZXN0aW9uXCJdLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuY29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJvbkZhc3RDb3B5UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5mYXN0Q29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25Qcm9jZXNzSHRtbC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLmh0bWwgPSBzZWxmLnByb2Nlc3NIdG1sKG9wdGlvbnMuaHRtbCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uQ3VycmVudFBhZ2VDaGFuZ2VkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYucGFnZXNFZGl0b3Iuc2V0U2VsZWN0ZWRQYWdlKDxTdXJ2ZXkuUGFnZT5zZW5kZXIuY3VycmVudFBhZ2UpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblF1ZXN0aW9uQWRkZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5vblF1ZXN0aW9uQWRkZWQob3B0aW9ucy5xdWVzdGlvbik7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25SZW1vdmVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYub25RdWVzdGlvblJlbW92ZWQob3B0aW9ucy5xdWVzdGlvbik7IH0pO1xuICAgIH1cbiAgICBwcml2YXRlIHByb2Nlc3NIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghaHRtbCkgcmV0dXJuIGh0bWw7XG4gICAgICAgIHZhciBzY3JpcHRSZWdFeCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xuICAgICAgICB3aGlsZSAoc2NyaXB0UmVnRXgudGVzdChodG1sKSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShzY3JpcHRSZWdFeCwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHByaXZhdGUgdGltZW91dElkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG9uSnNvbkVkaXRvckNoYW5nZWQoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkID4gLTEpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGltZW91dElkID0gLTE7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzSnNvbihzZWxmLnRleHQpO1xuICAgICAgICAgICAgfSwgU3VydmV5RWRpdG9yLnVwZGF0ZVRleHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHByb2Nlc3NKc29uKHRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHRoaXMudGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHRleHQpO1xuICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3IuZ2V0U2Vzc2lvbigpLnNldEFubm90YXRpb25zKHRoaXMuY3JlYXRlQW5ub3RhdGlvbnModGV4dCwgdGhpcy50ZXh0V29ya2VyLmVycm9ycykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZG9EcmFnZ2luZ1F1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogYW55LCBlKSB7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc3RhcnREcmFnTmV3UXVlc3Rpb24oZSwgcXVlc3Rpb25UeXBlLCB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0RyYWdnaW5nQ29waWVkUXVlc3Rpb24oanNvbjogYW55LCBlKSB7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIuc3RhcnREcmFnQ29waWVkUXVlc3Rpb24oZSwgdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKSwganNvbik7XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja1F1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogYW55KSB7XG4gICAgICAgIHRoaXMuZG9DbGlja1F1ZXN0aW9uQ29yZShTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgdGhpcy5nZXROZXdRdWVzdGlvbk5hbWUoKSkpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvQ2xpY2tDb3BpZWRRdWVzdGlvbihqc29uOiBhbnkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpO1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSBTdXJ2ZXkuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKGpzb25bXCJ0eXBlXCJdLCBuYW1lKTtcbiAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgcXVlc3Rpb24pO1xuICAgICAgICBxdWVzdGlvbi5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kb0NsaWNrUXVlc3Rpb25Db3JlKHF1ZXN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROZXdRdWVzdGlvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdRdWVzdGlvbk5hbWUodGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvQ2xpY2tRdWVzdGlvbkNvcmUocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZTtcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVtcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGhpcy5zdXJ2ZXlbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0pICsgMTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlLmFkZFF1ZXN0aW9uKHF1ZXN0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVRdWVzdGlvbigpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNlbGVjdFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZE9iakFzUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaik6IG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlQ3VycmVudE9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3QodGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgY29weVF1ZXN0aW9uKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUocXVlc3Rpb24pO1xuICAgICAgICBpZiAob2JqVHlwZSAhPSBPYmpUeXBlLlF1ZXN0aW9uKSByZXR1cm47XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0Q29waWVkUXVlc3Rpb25CeU5hbWUocXVlc3Rpb24ubmFtZSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmpzb24gPSBqc29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb0NvcGllZFF1ZXN0aW9ucy5wdXNoKHsgbmFtZTogcXVlc3Rpb24ubmFtZSwganNvbjoganNvbiB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rb0NvcGllZFF1ZXN0aW9ucygpLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMua29Db3BpZWRRdWVzdGlvbnMuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZhc3RDb3B5UXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QocXVlc3Rpb24pO1xuICAgICAgICBqc29uLnR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMuZG9DbGlja0NvcGllZFF1ZXN0aW9uKCBqc29uICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb3BpZWRRdWVzdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5rb0NvcGllZFF1ZXN0aW9ucygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gaXRlbXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlT2JqZWN0KG9iajogYW55KSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3Qob2JqKTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNFZGl0b3IucmVtb3ZlUGFnZShvYmopO1xuICAgICAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnJlbW92ZVF1ZXN0aW9uKG9iaik7XG4gICAgICAgICAgICB0aGlzLnN1cnZleVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0obnVsbCk7XG4gICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93TGl2ZVN1cnZleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1cnZleWpzRXhhbXBsZSkgcmV0dXJuO1xuICAgICAgICB2YXIganNvbiA9IHRoaXMuZ2V0U3VydmV5SlNPTigpO1xuICAgICAgICBpZiAoanNvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb29raWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGpzb24uY29va2llTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleShqc29uKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXCIpO1xuICAgICAgICAgICAgdmFyIHN1cnZleWpzRXhhbXBsZXJlUnVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVyZVJ1blwiKTtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5KSA9PiB7IGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuc3VydmV5UmVzdWx0c1wiKSArIEpTT04uc3RyaW5naWZ5KHN1cnZleS5kYXRhKTsgaWYgKHN1cnZleWpzRXhhbXBsZXJlUnVuKSBzdXJ2ZXlqc0V4YW1wbGVyZVJ1bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjsgfSk7XG4gICAgICAgICAgICBzdXJ2ZXkucmVuZGVyKHRoaXMuc3VydmV5anNFeGFtcGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuY29ycmVjdEpTT05cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93U3VydmV5RW1iZWRpbmcoKSB7XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuanNvbiA9IGpzb247XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5SWQgPSB0aGlzLnN1cnZleUlkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnN1cnZleVBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLmdlbmVyYXRlVmFsaWRKU09OID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zaG93KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3VydmV5SlNPTigpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkpICByZXR1cm4gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuc3VydmV5KTtcbiAgICAgICAgaWYgKHRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0KSByZXR1cm4gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMudGV4dFdvcmtlci5zdXJ2ZXkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVBbm5vdGF0aW9ucyh0ZXh0OiBzdHJpbmcsIGVycm9yczogYW55W10pOiBBY2VBamF4LkFubm90YXRpb25bXSB7XG4gICAgICAgIHZhciBhbm5vdGF0aW9ucyA9IG5ldyBBcnJheTxBY2VBamF4LkFubm90YXRpb24+KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnNbaV07XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbjogQWNlQWpheC5Bbm5vdGF0aW9uID0geyByb3c6IGVycm9yLnBvc2l0aW9uLnN0YXJ0LnJvdywgY29sdW1uOiBlcnJvci5wb3NpdGlvbi5zdGFydC5jb2x1bW4sIHRleHQ6IGVycm9yLnRleHQsIHR5cGU6IFwiZXJyb3JcIiB9O1xuICAgICAgICAgICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxufVxuXG5TdXJ2ZXkuU3VydmV5LmNzc1R5cGUgPSBcImJvb3RzdHJhcFwiO1xubmV3IFN1cnZleS5TdXJ2ZXlUZW1wbGF0ZVRleHQoKS5yZXBsYWNlVGV4dCh0ZW1wbGF0ZVBhZ2VIdG1sLCBcInBhZ2VcIik7XG5uZXcgU3VydmV5LlN1cnZleVRlbXBsYXRlVGV4dCgpLnJlcGxhY2VUZXh0KHRlbXBsYXRlUXVlc3Rpb25IdG1sLCBcInF1ZXN0aW9uXCIpO1xuXG5TdXJ2ZXkuU3VydmV5LnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMub25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZCA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICB0aGlzLm9uQ29weVF1ZXN0aW9uID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHRoaXMub25GYXN0Q29weVF1ZXN0aW9uID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmNvcHlRdWVzdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29weVF1ZXN0aW9uLmZpcmUoc2VsZik7IH07XG4gICAgdGhpcy5mYXN0Q29weVF1ZXN0aW9uQ2xpY2sgPSBmdW5jdGlvbiAocXVlc3Rpb24pIHsgc2VsZi5vbkZhc3RDb3B5UXVlc3Rpb24uZmlyZShzZWxmLyosIHF1ZXN0aW9uKi8pOyB9O1xuICAgIHRoaXMua29EcmFnZ2luZ1NvdXJjZSA9IGtvLm9ic2VydmFibGUobnVsbCk7XG59O1xuU3VydmV5LlN1cnZleS5wcm90b3R5cGVbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdID0gZnVuY3Rpb24odmFsdWU6IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICBpZiAodmFsdWUgPT0gdGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUpIHJldHVybjtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSA9IHZhbHVlO1xuICAgIGlmIChvbGRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIG9sZFZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZFF1ZXN0aW9uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0oKTtcbiAgICB9XG4gICAgdGhpcy5vblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkLmZpcmUodGhpcywgeyAnb2xkU2VsZWN0ZWRRdWVzdGlvbic6IG9sZFZhbHVlLCAnbmV3U2VsZWN0ZWRRdWVzdGlvbic6IHZhbHVlIH0pO1xufTtcblN1cnZleS5TdXJ2ZXkucHJvdG90eXBlW1wiZ2V0RWRpdG9yTG9jU3RyaW5nXCJdID0gZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKHZhbHVlKTtcbn07XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgdGhpcy5rb0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZSgtMSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24gPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgIHRoaXMua29EcmFnZ2luZ0JvdHRvbSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMua29EcmFnZ2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgICAgICAgICBzZWxmLmtvRHJhZ2dpbmdRdWVzdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ0JvdHRvbShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDwgc2VsZi5xdWVzdGlvbnMubGVuZ3RoID8gc2VsZi5xdWVzdGlvbnNbbmV3VmFsdWVdIDogbnVsbDtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ1F1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ0JvdHRvbShuZXdWYWx1ZSA9PSBzZWxmLnF1ZXN0aW9ucy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBpZiAobmV3VmFsdWUpIG5ld1ZhbHVlLmtvSXNEcmFnZ2luZyh0cnVlKTsgfSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nUXVlc3Rpb24uc3Vic2NyaWJlKGZ1bmN0aW9uIChvbGRWYWx1ZSkgeyBpZiAob2xkVmFsdWUpIG9sZFZhbHVlLmtvSXNEcmFnZ2luZyhmYWxzZSk7IH0sIHRoaXMsIFwiYmVmb3JlQ2hhbmdlXCIpO1xuICAgIHRoaXMuZHJhZ0VudGVyID0gZnVuY3Rpb24gKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzZWxmLmRyYWdFbnRlckNvdW50ZXIrKzsgc2VsZi5kb0RyYWdFbnRlcihlKTsgfTtcbiAgICB0aGlzLmRyYWdMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0VudGVyQ291bnRlci0tOyBpZiAoc2VsZi5kcmFnRW50ZXJDb3VudGVyID09PSAwKSBzZWxmLmRvRHJhZ0xlYXZlKGUpOyB9O1xuICAgIHRoaXMuZHJhZ0Ryb3AgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRvRHJvcChlKTsgfTtcbn07XG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJkb0Ryb3BcIl0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlcikge1xuICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0Ryb3AoZSk7XG4gICAgfVxufTtcblN1cnZleS5QYWdlLnByb3RvdHlwZVtcImRvRHJhZ0VudGVyXCJdID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5sZW5ndGggPiAwIHx8IHRoaXMua29EcmFnZ2luZygpID4gMCkgcmV0dXJuO1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlciAmJiBkcmFnRHJvcEhlbHBlci5pc1N1cnZleURyYWdnaW5nKGUpKSB7XG4gICAgICAgIHRoaXMua29EcmFnZ2luZygwKTtcbiAgICB9XG59O1xuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9EcmFnTGVhdmVcIl0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkcmFnRHJvcEhlbHBlciA9IHRoaXMuZGF0YVtcImRyYWdEcm9wSGVscGVyXCJdO1xuICAgIGlmIChkcmFnRHJvcEhlbHBlcikge1xuICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTtcbiAgICB9XG59O1xuXG5TdXJ2ZXkuUXVlc3Rpb25CYXNlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5rb0lzRHJhZ2dpbmcgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmtvSXNEcmFnZ2luZ1NvdXJjZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID0gc2VsZi5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuZHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7IH07XG4gICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0Ryb3AoZSwgc2VsZik7IH07XG4gICAgdGhpcy5kcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuc3RhcnREcmFnUXVlc3Rpb24oZSwgc2VsZi5uYW1lKTsgfTtcbiAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoZSkgeyBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZW5kKCk7IH07XG4gICAgdGhpcy5rb0lzU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB0aGlzLmtvT25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNlbGYuZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHNlbGYuZGF0YVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0odGhpcyk7XG4gICAgfVxufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkXCJdID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5rb0lzU2VsZWN0ZWQodGhpcy5kYXRhW1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdID09IHRoaXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0SXRlbSB7XG4gICAgcHVibGljIHZhbHVlOiBTdXJ2ZXkuQmFzZTtcbiAgICBwdWJsaWMgdGV4dDogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0cyB7XG4gICAgcHVibGljIHN0YXRpYyBpbnRlbmQ6IHN0cmluZyA9IFwiLi4uXCI7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMga29PYmplY3RzOiBhbnksIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnkpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBwYWdlSXRlbSA9IHRoaXMuY3JlYXRlUGFnZShwYWdlKTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdXJ2ZXkucGFnZXMuaW5kZXhPZihwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZQYWdlID0gdGhpcy5zdXJ2ZXkucGFnZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocHJldlBhZ2UpICsgMTtcbiAgICAgICAgICAgIGluZGV4ICs9IHByZXZQYWdlLnF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDE7IC8vMCAtIFN1cnZleVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbShwYWdlSXRlbSwgaW5kZXgpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY3JlYXRlUXVlc3Rpb24ocGFnZS5xdWVzdGlvbnNbaV0pO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIGluZGV4ICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHBhZ2VJdGVtKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFF1ZXN0aW9uKHBhZ2U6IFN1cnZleS5QYWdlLCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcXVlc3Rpb25JbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pICsgMTtcbiAgICAgICAgaW5kZXggKz0gcXVlc3Rpb25JbmRleDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKGl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0T2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IG9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2ldKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlbW92ZU9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGNvdW50VG9SZW1vdmUgPSAxO1xuICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHZhciBwYWdlOiBTdXJ2ZXkuUGFnZSA9IDxTdXJ2ZXkuUGFnZT5vYmo7XG4gICAgICAgICAgICBjb3VudFRvUmVtb3ZlICs9IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cy5zcGxpY2UoaW5kZXgsIGNvdW50VG9SZW1vdmUpO1xuICAgIH1cbiAgICBwdWJsaWMgbmFtZUNoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMua29PYmplY3RzKClbaW5kZXhdLnRleHQodGhpcy5nZXRUZXh0KG9iaikpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VsZWN0TmV4dFF1ZXN0aW9uKGlzVXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRTZWxlY3RlZFF1ZXN0aW9uKCk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChxdWVzdGlvbik7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPCAwKSByZXR1cm4gcXVlc3Rpb247XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgdmFyIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleCArIChpc1VwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgaXRlbUluZGV4ID0gbmV3SXRlbUluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SXRlbUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKG5ld0l0ZW1JbmRleCA8IG9ianMubGVuZ3RoICYmIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9ianNbbmV3SXRlbUluZGV4XS52YWx1ZSkgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSW5kZXggKz0gKGlzVXAgPyAxIDogLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChvYmpzW2l0ZW1JbmRleF0pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIGlmICghdGhpcy5rb1NlbGVjdGVkKCkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5rb1NlbGVjdGVkKCkudmFsdWU7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopIDogbnVsbDtcblxuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oaXRlbTogU3VydmV5T2JqZWN0SXRlbSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmtvT2JqZWN0cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWJ1aWxkKCkge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMob2Jqcyk7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2Jqcy5wdXNoKHRoaXMuY3JlYXRlSXRlbSh0aGlzLnN1cnZleSwgXCJTdXJ2ZXlcIikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZVBhZ2UocGFnZSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG9ianMucHVzaCh0aGlzLmNyZWF0ZVF1ZXN0aW9uKHBhZ2UucXVlc3Rpb25zW2pdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMob2Jqcyk7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLnN1cnZleSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJdGVtKHBhZ2UsIHRoaXMuZ2V0VGV4dChwYWdlKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlbShxdWVzdGlvbiwgdGhpcy5nZXRUZXh0KHF1ZXN0aW9uKSk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlSXRlbSh2YWx1ZTogU3VydmV5LkJhc2UsIHRleHQ6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBTdXJ2ZXlPYmplY3RJdGVtKCk7XG4gICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaXRlbS50ZXh0ID0ga28ub2JzZXJ2YWJsZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SXRlbUluZGV4KHZhbHVlOiBTdXJ2ZXkuQmFzZSk6IG51bWJlciB7XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2Jqc1tpXS52YWx1ZSA9PSB2YWx1ZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQob2JqOiBTdXJ2ZXkuQmFzZSk6IHN0cmluZyB7XG4gICAgICAgIHZhciBpbnRlbmQgPSBTdXJ2ZXlPYmplY3RzLmludGVuZDtcbiAgICAgICAgaWYgKFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgIT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICBpbnRlbmQgKz0gU3VydmV5T2JqZWN0cy5pbnRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVuZCArIFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKG9iaik7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlPYmplY3RzLnRzIiwiZXhwb3J0IHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJzdmRfY29udGFpbmVyXCI+ICA8dWwgY2xhc3M9XCJuYXZiYXItZGVmYXVsdCBjb250YWluZXItZmx1aWQgbmF2IG5hdi10YWJzIHN2ZF9tZW51XCI+ICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHsgYWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZGVzaWduZXJcXCcgfVwiPjxhIGRhdGEtYmluZD1cImNsaWNrOiBzZWxlY3REZXNpZ25lckNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuZGVzaWduZXJcXCcpXCI+PC9hPjwvbGk+ICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHsgYWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gXFwndGVzdFxcJyB9XCI+PGEgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlcXCcpXCI+PC9hPjwvbGk+ICAgIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHsgYWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZWRpdG9yXFwnIH1cIj48YSBkYXRhLWJpbmQ9XCJjbGljazogc2VsZWN0RWRpdG9yQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5qc29uRWRpdG9yXFwnKVwiPjwvYT48L2xpPiAgICA8IS0tIDxsaSBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSBcXCdlbWJlZFxcJ31cIj48YSBkYXRhLWJpbmQ9XCJjbGljazogc2VsZWN0RW1iZWRDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmVtYmVkU3VydmV5XFwnKVwiPjwvYT48L2xpPiAtLT4gICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+ICAgICAgPGxpIGNsYXNzPVwic3ZkX2FjdGlvbnNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0lzU2hvd0Rlc2lnbmVyXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiB1bmRvUmVkby5rb0NhblVuZG8sIGNsaWNrOiBkb1VuZG9DbGlja1wiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC51bmRvXFwnKVwiPjwvc3Bhbj48L2J1dHRvbj48L2xpPiAgICAgIDxsaSBjbGFzcz1cInN2ZF9hY3Rpb25zXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29Jc1Nob3dEZXNpZ25lclwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGRhdGEtYmluZD1cImVuYWJsZTogdW5kb1JlZG8ua29DYW5SZWRvLCBjbGljazogZG9SZWRvQ2xpY2tcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQucmVkb1xcJylcIj48L3NwYW4+PC9idXR0b24+PC9saT4gICAgICA8IS0tIDxsaSBjbGFzcz1cInN2ZF9hY3Rpb25zXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29Jc1Nob3dEZXNpZ25lclwiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1Nob3dPcHRpb25zKClcIiBjbGFzcz1cImJ0bi1ncm91cCBpbmxpbmVcIj4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLm9wdGlvbnNcXCcpXCI+T3B0aW9ucyA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPjwvYnV0dG9uPiAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgICAgICAgPGxpIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZToga29HZW5lcmF0ZVZhbGlkSlNPTn1cIj48YSBocmVmPVwiI1wiIGRhdGEtYmluZD1cImNsaWNrOiBnZW5lcmF0ZVZhbGlkSlNPTkNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuZ2VuZXJhdGVWYWxpZEpTT05cXCcpXCI+PC9hPjwvbGk+ICAgICAgICAgICAgPGxpIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogIWtvR2VuZXJhdGVWYWxpZEpTT04oKX1cIj48YSBocmVmPVwiI1wiIGRhdGEtYmluZD1cImNsaWNrOiBnZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuZ2VuZXJhdGVSZWFkYWJsZUpTT05cXCcpXCI+PC9hPjwvbGk+ICAgICAgICAgIDwvdWw+ICAgICAgICA8L2Rpdj4gICAgICA8L2xpPiAtLT4gICAgICA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIGRhdGEtYmluZD1cImNsaWNrOiBzYXZlQnV0dG9uQ2xpY2ssIHZpc2libGU6IGtvU2hvd1NhdmVCdXR0b25cIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuc2F2ZVN1cnZleVxcJylcIj48L3NwYW4+PC9idXR0b24+PC9saT4gICAgICA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPVxcJy9hZG1pbi8/dz1zdXJ2ZXlzXFwnXCI+PHNwYW4+QmFjazwvc3Bhbj48L2J1dHRvbj48L2xpPiAgICAgIDwhLS0gPGxpIGNsYXNzPVwiZWRpdG9yLXRvcG5hdi1yaWdodFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25jbGljaz1cImxvY2F0aW9uLmhyZWY9XFwnL2FkbWluLz93PXN1cnZleXNcXCdcIj48c3Bhbj5CYWNrPC9zcGFuPjwvYnV0dG9uPjwvbGk+IC0tPiAgICA8L3VsPiAgPC91bD4gIDxkaXYgY2xhc3M9XCJwYW5lbCBzdmRfY29udGVudFwiPiAgICA8ZGl2IGNsYXNzPVwicm93IHN2ZF9zdXJ2ZXlfZGVzaWduZXJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZGVzaWduZXJcXCdcIj4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTEyIGNvbC14cy0xMiBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF90b29sYm94XCI+ICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwLXZlcnRpY2FsXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6MnB4XCI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb25UeXBlcyAtLT4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0OyBtYXJnaW46MXB4O3dpZHRoOjEwMCVcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2xpY2tRdWVzdGlvbiwgZXZlbnQ6IHsgZHJhZ3N0YXJ0OiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdnaW5nUXVlc3Rpb24oJGRhdGEsIGUpOyByZXR1cm4gdHJ1ZTt9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfX1cIj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJjc3M6IFxcJ2ljb24tXFwnICsgJGRhdGFcIj48L3NwYW4+ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmRfdG9vbGJveF9pdGVtX3RleHRcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncXQuXFwnICsgJGRhdGEpXCI+PC9zcGFuPiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29Db3BpZWRRdWVzdGlvbnMgLS0+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdDttYXJnaW46MXB4O3dpZHRoOjEwMCVcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2xpY2tDb3BpZWRRdWVzdGlvbiwgZXZlbnQ6IHsgZHJhZ3N0YXJ0OiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdnaW5nQ29waWVkUXVlc3Rpb24oJGRhdGEsIGUpOyByZXR1cm4gdHJ1ZTt9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfX1cIj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tZGVmYXVsdFwiPjwvc3Bhbj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2ZF90b29sYm94X2l0ZW1fdGV4dFwiIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3NwYW4+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvZGl2PiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNyBjb2wtbWQtNyBjb2wtc20tMTIgY29sLXhzLTEyIHN2ZF9lZGl0b3JzXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwic3ZkX3BhZ2VzX2VkaXRvclwiIGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3BhZ2VlZGl0b3JcXCcsIGRhdGE6IHBhZ2VzRWRpdG9yIH1cIj48L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJzdmRfcXVlc3Rpb25zX2VkaXRvclwiIGlkPVwic2Nyb2xsYWJsZURpdlwiPiAgICAgICAgICA8ZGl2IGlkPVwic3VydmV5anNcIj48L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTIgY29sLXhzLTEyIHBhbmVsIHBhbmVsLWRlZmF1bHQgc3ZkX3Byb3BlcnRpZXNcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIGlucHV0LWdyb3VwXCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tc2VsZWN0XCI+ICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvT2JqZWN0cywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIHZhbHVlOiBrb1NlbGVjdGVkT2JqZWN0XCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+ICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IGtvQ2FuRGVsZXRlT2JqZWN0LCBjbGljazogZGVsZXRlQ3VycmVudE9iamVjdCwgYXR0cjogeyB0aXRsZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmRlbFNlbE9iamVjdFxcJyl9XCI+PGkgY2xhc3M9XCJwZS1yZW1vdmVcIj48L2k+PC9idXR0b24+ICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ29iamVjdGVkaXRvclxcJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVwiPjwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiIGRhdGEtYmluZD1cInZpc2libGU6IHN1cnZleVZlcmJzLmtvSGFzVmVyYnNcIj4gICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdvYmplY3R2ZXJic1xcJywgZGF0YTogc3VydmV5VmVyYnMgfVwiPjwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGlkPVwic3VydmV5anNKU09ORWRpdG9yXCIgY2xhc3M9XCJzdmRfanNvbl9lZGl0b3JcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZWRpdG9yXFwnXCI+PC9kaXY+ICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc1Rlc3RcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwndGVzdFxcJywgc3R5bGU6IHt3aWR0aDoga29UZXN0U3VydmV5V2lkdGh9XCI+ICAgICAgPCEtLSA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGVzdFN1cnZleVdpZHRoXCI+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwJVwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnMTAwJVxcJ1wiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyMDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnMTIwMHB4XFwnXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCcxMDAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnODAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnNjAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnNDAwcHhcXCdcIj48L29wdGlvbj4gICAgICA8L3NlbGVjdD4gLS0+ICAgICAgPGRpdiBpZD1cInN1cnZleWpzRXhhbXBsZVwiPjwvZGl2PiAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXCI+PC9kaXY+ICAgICAgPGJ1dHRvbiBpZD1cInN1cnZleWpzRXhhbXBsZXJlUnVuXCIgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlBZ2FpblxcJylcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlRlc3QgQWdhaW48L2J1dHRvbj4gICAgPC9kaXY+ICAgIDwhLS0gPGRpdiBpZD1cInN1cnZleWpzRW1iZWRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZW1iZWRcXCdcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleWVtYmVkaW5nXFwnLCBkYXRhOiBzdXJ2ZXlFbWJlZGluZyB9XCI+PC9kaXY+ICAgIDwvZGl2PiAtLT4gIDwvZGl2PjwvZGl2PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwib2JqZWN0ZWRpdG9yXCI+ICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBzdmRfdGFibGUtbm93cmFwXCI+ICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiBrb1Byb3BlcnRpZXNcIj4gICAgICA8dHIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2hhbmdlQWN0aXZlUHJvcGVydHkoJGRhdGEpLCBjc3M6IHtcXCdhY3RpdmVcXCc6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhfVwiPiAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IGRpc3BsYXlOYW1lLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVwiIHdpZHRoPVwiNTAlXCIgc3R5bGU9XCJmb250LWZhbWlseTp1YnVudHU7IGZvbnQtc2l6ZToxMXB4XCI+PC90ZD4gICAgICAgIDx0ZCB3aWR0aD1cIjUwJVwiIHN0eWxlPVwiZm9udC1mYW1pbHk6Ym9vbjtmb250LXNpemU6MTRweFwiPiAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBrb1RleHQsIHZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpICE9ICRkYXRhICYmIChrb1RleHQoKSB8fCAkZGF0YS5lZGl0b3JUeXBlID09IFxcJ2Jvb2xlYW5cXCcpLCBhdHRyOiB7IHRpdGxlOiBrb1RleHQgfVwiIHN0eWxlPVwidGV4dC1vdmVyZmxvdzplbGxpcHNpczsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW5cIj48L3NwYW4+ICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGEgfHwgKCFrb1RleHQoKSAmJiAkZGF0YS5lZGl0b3JUeXBlICE9IFxcJ2Jvb2xlYW5cXCcpXCI+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1cXCcgKyBlZGl0b3JUeXBlLCBkYXRhOiAkZGF0YSB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgPC90Ym9keT4gIDwvdGFibGU+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJvYmplY3R2ZXJic1wiPiAgPCEtLSBrbyBmb3JlYWNoOiBrb1ZlcmJzIC0tPiAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+ICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidGV4dDogdGV4dFwiPjwvc3Bhbj4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogXFwndGV4dFxcJywgb3B0aW9uc1ZhbHVlOiBcXCd2YWx1ZVxcJywgdmFsdWU6IGtvU2VsZWN0ZWRJdGVtXCI+PC9zZWxlY3Q+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwYWdlZWRpdG9yXCI+ICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBkYXRhLWJpbmQ9XCJ0YWJzOiB0cnVlXCI+ICAgIDwhLS0ga28gZm9yZWFjaDoga29QYWdlcyAtLT4gICAgPGxpIGRhdGEtYmluZD1cImNzczogeyBhY3RpdmU6IGtvU2VsZWN0ZWQoKX0sIGV2ZW50OiB7IGtleWRvd246IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQua2V5RG93bihlbCwgZSk7IH0sIGRyYWdzdGFydDogZnVuY3Rpb24oZWwsIGUpIHsgJHBhcmVudC5kcmFnU3RhcnQoZWwpOyByZXR1cm4gdHJ1ZTsgfSwgZHJhZ292ZXI6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ092ZXIoZWwpOyB9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfSwgZHJvcDogZnVuY3Rpb24oZWwsIGUpIHsgJHBhcmVudC5kcmFnRHJvcChlbCk7IH0gfVwiPiAgICAgIDxhIGNsYXNzPVwic3ZkX3BhZ2VfbmF2XCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuc2VsZWN0UGFnZUNsaWNrXCI+PHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdGl0bGVcIj48L3NwYW4+PC9hPiAgICA8L2xpPiAgICA8IS0tIC9rbyAtLT4gICAgPGxpPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc3ZkX2FkZF9uZXdfcGFnZV9idG5cIiBkYXRhLWJpbmQ9XCJjbGljazogYWRkTmV3UGFnZUNsaWNrXCI+PGkgY2xhc3M9XCJwZS1wbHVzXCI+PC9pPjwvYnV0dG9uPjwvbGk+ICA8L3VsPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5ZW1iZWRpbmdcIj4gIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJ2YWx1ZToga29MaWJyYXJ5VmVyc2lvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCI+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwia25vY2tvdXRcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcua25vY2tvdXRcXCcpXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVhY3RcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcucmVhY3RcXCcpXCI+PC9vcHRpb24+ICAgICAgPC9zZWxlY3Q+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4gICAgICA8c2VsZWN0IGRhdGEtYmluZD1cInZhbHVlOiBrb1NjcmlwdFVzaW5nXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJib290c3RyYXBcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuYm9vdHN0cmFwXFwnKVwiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YW5kYXJkXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnN0YW5kYXJkXFwnKVwiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJ2YWx1ZToga29TaG93QXNXaW5kb3dcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhZ2VcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuc2hvd09uUGFnZVxcJylcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3aW5kb3dcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuc2hvd0luV2luZG93XFwnKVwiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPGxhYmVsIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzSWRzXCI+ICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29Mb2FkU3VydmV5XCI+ICAgICAgICA8c21hbGwgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LmxvYWRGcm9tU2VydmVyXFwnKVwiPjwvc21hbGw+ICAgICAgPC9sYWJlbD4gICAgPC9kaXY+ICA8L2Rpdj4gIDxicj4gIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVTY3JpcHRcXCcpXCI+PC9oND4gICAgICA8ZGl2IGlkPVwic3VydmV5RW1iZWRpbmdIZWFkXCIgc3R5bGU9XCJoZWlnaHQ6NzBweDt3aWR0aDoxMDAlXCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29WaXNpYmxlSHRtbFwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVIdG1sXFwnKVwiPjwvaDQ+ICAgICAgPGRpdiBpZD1cInN1cnZleUVtYmVkaW5nQm9keVwiIHN0eWxlPVwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVwiPjwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVKYXZhU2NyaXB0XFwnKVwiPjwvaDQ+ICAgICAgPGRpdiBpZD1cInN1cnZleUVtYmVkaW5nSmF2YVwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O3dpZHRoOjEwMCVcIj48L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLWJvb2xlYW5cIj4gIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImNoZWNrZWQ6IGtvVmFsdWVcIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLWRyb3Bkb3duXCI+ICA8ZGl2IGNsYXNzPVwiY3VzdG9tLXNlbGVjdFwiPiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXNcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48L3NlbGVjdD4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItaHRtbFwiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1odG1sXCI+ICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHJvd3M9XCIxMFwiIGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiPjwvdGV4dGFyZWE+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzXCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LWl0ZW12YWx1ZXNcIj4gIDxkaXYgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweFwiPiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPiAgICAgIDx0aGVhZD4gICAgICAgIDx0cj4gICAgICAgICAgPHRoPjwvdGg+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudmFsdWVcXCcpXCI+PC90aD4gICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50ZXh0XFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgPC90cj4gICAgICA8L3RoZWFkPiAgICAgIDx0Ym9keT4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkPiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14c1wiIGRhdGEtYmluZD1cInZpc2libGU6ICRpbmRleCgpID4gMCwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlVXBDbGlja1wiPjxpIGNsYXNzPVwicGUtYXJyb3ctdXBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+ICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHNcIiBzdHlsZT1cImZsb2F0Om5vbmVcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkaW5kZXgoKSA8ICRwYXJlbnQua29JdGVtcygpLmxlbmd0aCAtIDEsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZURvd25DbGlja1wiPjxpIGNsYXNzPVwicGUtYXJyb3ctZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPC90ZD4gICAgICAgICAgPHRkPiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWVcIiBzdHlsZT1cIndpZHRoOjE1MHB4XCI+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1iaW5kPVwidmlzaWJsZTprb0hhc0Vycm9yLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuZW50ZXJOZXdWYWx1ZVxcJylcIj48L2Rpdj4gICAgICAgICAgPC90ZD4gICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGV4dFwiIHN0eWxlPVwid2lkdGg6MTUwcHhcIj48L3RkPiAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXCI+PGkgY2xhc3M9XCJwZS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj48L3RkPiAgICAgICAgPC90cj4gICAgICAgIDwhLS0gL2tvIC0tPiAgICAgIDwvdGJvZHk+ICAgIDwvdGFibGU+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJyb3cgYnRuLXRvb2xiYXJcIj4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJpbmQ9XCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5hZGROZXdcXCcpXCI+ICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBkYXRhLWJpbmQ9XCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnJlbW92ZUFsbFxcJylcIj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zXCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LW1hdHJpeGRyb3Bkb3duY29sdW1uc1wiPiAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj4gICAgPHRoZWFkPiAgICAgIDx0cj4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUucmVxdWlyZWRcXCcpXCI+PC90aD4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuY2VsbFR5cGVcXCcpXCI+PC90aD4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUubmFtZVxcJylcIj48L3RoPiAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50aXRsZVxcJylcIj48L3RoPiAgICAgICAgPHRoPjwvdGg+ICAgICAgPC90cj4gICAgPC90aGVhZD4gICAgPHRib2R5PiAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT4gICAgICA8dHI+ICAgICAgICA8dGQ+ICAgICAgICAgIDxhIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzQ2hvaWNlcywgY2xpY2s6IG9uU2hvd0Nob2ljZXNDbGlja1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uXCIgZGF0YS1iaW5kPVwiY3NzOiB7XFwnZ2x5cGhpY29uLWNoZXZyb24tZG93blxcJzogIWtvU2hvd0Nob2ljZXMoKSwgXFwnZ2x5cGhpY29uLWNoZXZyb24tdXBcXCc6IGtvU2hvd0Nob2ljZXMoKX1cIj48L3NwYW4+PC9hPiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29Jc1JlcXVpcmVkXCI+ICAgICAgICA8L3RkPiAgICAgICAgPHRkPiAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwib3B0aW9uczogY2VsbFR5cGVDaG9pY2VzLCB2YWx1ZToga29DZWxsVHlwZVwiIHN0eWxlPVwid2lkdGg6MTEwcHhcIj48L3NlbGVjdD4gICAgICAgIDwvdGQ+ICAgICAgICA8dGQ+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvTmFtZVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmVudGVyTmV3VmFsdWVcXCcpXCI+PC9kaXY+ICAgICAgICA8L3RkPiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGl0bGVcIiBzdHlsZT1cIndpZHRoOjEyMHB4XCI+PC90ZD4gICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcIj48aSBjbGFzcz1cInBlLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvdGQ+ICAgICAgPC90cj4gICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZToga29TaG93Q2hvaWNlcygpICYmIGtvSGFzQ2hvaWNlcygpXCI+ICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIiBzdHlsZT1cImJvcmRlci10b3Atc3R5bGU6bm9uZVwiPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiRyb290LmdldExvY1N0cmluZyhcXCdwZS5oYXNPdGhlclxcJylcIj48L2xhYmVsPiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWJpbmQ9XCJjaGVja2VkOiBrb0hhc090aGVyXCI+PC9kaXY+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCIgZGF0YS1iaW5kPVwidmlzaWJsZTogIWtvSGFzQ29sQ291bnQoKVwiPjwvZGl2PiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0hhc0NvbENvdW50LCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuY29sQ291bnRcXCcpXCI+PC9sYWJlbD4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtIGNvbC1zbS00XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29IYXNDb2xDb3VudCwgb3B0aW9uczogY29sQ291bnRDaG9pY2VzLCB2YWx1ZToga29Db2xDb3VudFwiIHN0eWxlPVwid2lkdGg6MTEwcHhcIj48L3NlbGVjdD4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHN2ZF9ub3RvcGJvdHRvbXBhZGRpbmdzXCI+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaXRlbXZhbHVlc1xcJywgZGF0YTogY2hvaWNlc0VkaXRvciB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgICA8IS0tIC9rbyAtLT4gICAgICA8dHI+ICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYnRuLXRvb2xiYXJcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtYmluZD1cImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFkZE5ld1xcJylcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1iaW5kPVwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5yZW1vdmVBbGxcXCcpXCI+ICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgPC90Ym9keT4gIDwvdGFibGU+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1tb2RhbFwiPiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogIWVkaXRvci5pc0VkaXRhYmxlXCI+ICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGtvVGV4dFwiPjwvc3Bhbj4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIHN0eWxlPVwicGFkZGluZzoycHhcIiBkYXRhLWJpbmQ9XCJhdHRyOiB7IFxcJ2RhdGEtdGFyZ2V0XFwnIDogbW9kYWxOYW1lVGFyZ2V0IH1cIj48aSBjbGFzcz1cInBlLWVkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC9kaXY+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiIGRhdGEtYmluZD1cInZpc2libGU6IGVkaXRvci5pc0VkaXRhYmxlXCIgc3R5bGU9XCJkaXNwbGF5OnRhYmxlXCI+ICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWVcIiBzdHlsZT1cImRpc3BsYXk6dGFibGUtY2VsbDsgd2lkdGg6MTAwJVwiPiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBzdHlsZT1cImRpc3BsYXk6dGFibGUtY2VsbDsgcGFkZGluZzoycHhcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1iaW5kPVwiYXR0cjogeyBcXCdkYXRhLXRhcmdldFxcJyA6IG1vZGFsTmFtZVRhcmdldCB9XCI+PGkgY2xhc3M9XCJwZS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvZGl2PiAgPC9kaXY+ICA8ZGl2IGRhdGEtYmluZD1cImF0dHI6IHsgaWQgOiBtb2RhbE5hbWUgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIj4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+ICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+ICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj4gICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiBlZGl0b3IudGl0bGVcIj48L2g0PiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1wiPiAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yY29udGVudC1cXCcgKyBlZGl0b3JUeXBlLCBkYXRhOiBlZGl0b3IgfSAtLT4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtYmluZD1cImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFwcGx5XFwnKVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtYmluZD1cImNsaWNrOiBlZGl0b3Iub25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnJlc2V0XFwnKVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1iaW5kPVwidmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5jbG9zZVxcJylcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCI+ICAgICAgICA8L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLW51bWJlclwiPiAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cIm51bWJlclwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbFwiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1yZXN0ZnVsbFwiPiAgPGZvcm0+ICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+ICAgICAgPGxhYmVsIGZvcj1cInVybFwiPlVybDo8L2xhYmVsPiAgICAgIDxpbnB1dCBpZD1cInVybFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVXJsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+ICAgICAgPGxhYmVsIGZvcj1cInBhdGhcIj5QYXRoOjwvbGFiZWw+ICAgICAgPGlucHV0IGlkPVwicGF0aFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvUGF0aFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJ2YWx1ZU5hbWVcIj52YWx1ZU5hbWU6PC9sYWJlbD4gICAgICA8aW5wdXQgaWQ9XCJ2YWx1ZU5hbWVcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlTmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZU5hbWVcIj50aXRsZU5hbWU6PC9sYWJlbD4gICAgICA8aW5wdXQgaWQ9XCJ0aXRsZU5hbWVcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RpdGxlTmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgPC9mb3JtPiAgPGRpdiBpZD1cInJlc3RmdWxsU3VydmV5XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxNTBweFwiPjwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Itc3RyaW5nXCI+ICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10ZXh0XCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LXRleHRcIj4gIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgcm93cz1cIjEwXCIgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCI+PC90ZXh0YXJlYT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXRleHRpdGVtc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0aXRlbXNcIj4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiPiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPiAgICAgIDx0aGVhZD4gICAgICAgIDx0cj4gICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5uYW1lXFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudGl0bGVcXCcpXCI+PC90aD4gICAgICAgICAgPHRoPjwvdGg+ICAgICAgICA8L3RyPiAgICAgIDwvdGhlYWQ+ICAgICAgPHRib2R5PiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPiAgICAgICAgPHRyPiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29OYW1lXCIgc3R5bGU9XCJ3aWR0aDoyMDBweFwiPjwvdGQ+ICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RpdGxlXCIgc3R5bGU9XCJ3aWR0aDoyMDBweFwiPjwvdGQ+ICAgICAgICAgIDwhLS0gPHRkPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kYW5nZXJcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmRlbGV0ZVxcJylcIj48L3RkPiAtLT4gICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1wiPjxpIGNsYXNzPVwicGUtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC90ZD4gICAgICAgIDwvdHI+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtYmluZD1cImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFkZE5ld1xcJylcIj48L3RkPiAgICAgICAgPC90cj4gICAgICA8L3Rib2R5PiAgICA8L3RhYmxlPiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC10cmlnZ2Vyc1wiPiAgPGRpdiBjbGFzcz1cInBhbmVsXCI+ICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+ICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dC1ncm91cFwiPiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgaW5wdXQtZ3JvdXAtYWRkb25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzcz1cInBlLXBsdXNcIj48L2k+PC9idXR0b24+ICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVHJpZ2dlcnMgLS0+ICAgICAgICAgIDxsaT48YSBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVwiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRkYXRhXCI+PC9zcGFuPjwvYT48L2xpPiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvdWw+ICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6IFxcJ2tvVGV4dFxcJywgdmFsdWU6IGtvU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzPVwicGUtcmVtb3ZlXCI+PC9pPjwvYnV0dG9uPjwvc3Bhbj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZToga29TZWxlY3RlZCgpID09IG51bGxcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID09IDAsIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5ub3F1ZXN0aW9uc1xcJylcIj48L2Rpdj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID4gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmNyZWF0ZXRyaWdnZXJcXCcpXCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsXCI+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ3aXRoOiBrb1NlbGVjdGVkXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZvcm0taW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRyaWdnZXJPblxcJylcIj48L3NwYW4+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6ICRwYXJlbnQua29RdWVzdGlvbnMsIHZhbHVlOiBrb05hbWVcIj48L3NlbGVjdD4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBhdmFpbGFibGVPcGVyYXRvcnMsIG9wdGlvbnNWYWx1ZTogXFwnbmFtZVxcJywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIHZhbHVlOiBrb09wZXJhdG9yXCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvUmVxdWlyZVZhbHVlLCB2YWx1ZToga29WYWx1ZVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gXFwndmlzaWJsZXRyaWdnZXJcXCcgLS0+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcJywgZGF0YTogcGFnZXMgfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcJywgZGF0YTogcXVlc3Rpb25zIH0gLS0+ICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09IFxcJ2NvbXBsZXRldHJpZ2dlclxcJyAtLT4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VyQ29tcGxldGVUZXh0XFwnKVwiPjwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09IFxcJ3NldHZhbHVldHJpZ2dlclxcJyAtLT4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZm9ybS1pbmxpbmVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudHJpZ2dlclNldFRvTmFtZVxcJylcIj48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29zZXRUb05hbWVcIj4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRyaWdnZXJTZXRWYWx1ZVxcJylcIj48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29zZXRWYWx1ZVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZvcm0taW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+ICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29pc1ZhcmlhYmxlXCI+IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VySXNWYXJpYWJsZVxcJylcIj48L3NwYW4+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXNcIj4gIDxkaXYgY2xhc3M9XCJwYW5lbCBuby1tYXJnaW5zIG5vLXBhZGRpbmdcIj4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj4gICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB0aXRsZVwiPjwvc3Bhbj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtdWx0aXBsZT1cIm11bHRpcGxlXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29DaG9vc2VuLCB2YWx1ZToga29DaG9vc2VuU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiBrb0Nob29zZW5TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXCIgY2xhc3M9XCJidG5cIj48aSBjbGFzcz1cInBlLXJlbW92ZVwiPjwvaT48L2J1dHRvbj48L3NwYW4+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi10b3A6NXB4XCI+ICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvT2JqZWN0cywgdmFsdWU6IGtvU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkFkZENsaWNrXCIgc3R5bGU9XCJ3aWR0aDo0MHB4XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48aSBjbGFzcz1cInBlLXBsdXNcIj48L2k+PC9idXR0b24+PC9zcGFuPiAgICA8L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItdmFsaWRhdG9yc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC12YWxpZGF0b3JzXCI+ICA8ZGl2IGNsYXNzPVwicGFuZWxcIj4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj4gICAgICA8ZGl2IGNsYXNzPVwicm93IGlucHV0LWdyb3VwXCI+ICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBpbnB1dC1ncm91cC1hZGRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPjxpIGNsYXNzPVwicGUtcGx1c1wiPjwvaT48L2J1dHRvbj4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVWYWxpZGF0b3JzIC0tPiAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGljaygkZGF0YSlcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkZGF0YVwiPjwvc3Bhbj48L2E+PC9saT4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L3VsPiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvSXRlbXMsIG9wdGlvbnNUZXh0OiBcXCd0ZXh0XFwnLCB2YWx1ZToga29TZWxlY3RlZFwiPjwvc2VsZWN0PiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1wiIGNsYXNzPVwiYnRuXCI+PGkgY2xhc3M9XCJwZS1yZW1vdmVcIj48L2k+PC9idXR0b24+PC9zcGFuPiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdvYmplY3RlZGl0b3JcXCcsIGRhdGE6IHNlbGVjdGVkT2JqZWN0RWRpdG9yIH1cIj48L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0Pic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RlbXBsYXRlRWRpdG9yLmtvLmh0bWwudHMiLCJleHBvcnQgdmFyIGh0bWwgPSAnPGRpdiBkYXRhLWJpbmQ9XCJldmVudDp7ICAgICAgICAgICBkcmFnZW50ZXI6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnRW50ZXIoZSk7fSwgICAgICAgICAgIGRyYWdsZWF2ZTpmdW5jdGlvbihlbCwgZSl7IGRyYWdMZWF2ZShlKTt9LCAgICAgICAgICAgZHJhZ292ZXI6ZnVuY3Rpb24oZWwsIGUpeyByZXR1cm4gZmFsc2U7fSwgICAgICAgICAgIGRyb3A6ZnVuY3Rpb24oZWwsIGUpeyBkcmFnRHJvcChlKTt9fSAgICAgXCI+ICAgIDxoNCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAodGl0bGUubGVuZ3RoID4gMCkgJiYgZGF0YS5zaG93UGFnZVRpdGxlcywgdGV4dDoga29ObygpICsgcHJvY2Vzc2VkVGl0bGUsIGNzczogJHJvb3QuY3NzLnBhZ2VUaXRsZVwiPjwvaDQ+ICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3dzLCBhczogXFwncm93XFwnfSAtLT4gICAgPGRpdiBjbGFzcz1cInN2ZF9xdWVzdGlvbl9jb250YWluZXJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiByb3cua29WaXNpYmxlLCBjc3M6ICRyb290LmNzcy5yb3dcIj4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3cucXVlc3Rpb25zLCBhczogXFwncXVlc3Rpb25cXCcgLCBhZnRlclJlbmRlcjogcm93LmtvQWZ0ZXJSZW5kZXIgfSAtLT4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmtvSXNEcmFnZ2luZ1wiPiAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IGlmOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBhczogXFwncXVlc3Rpb25cXCcsIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiB0cnVlIH0gfSAtLT4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6IHF1ZXN0aW9uLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogZmFsc2UgfSB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZGl2PiAgICA8IS0tIC9rbyAtLT4gICAgPGRpdiBjbGFzcz1cIndlbGxcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiRyb290LmlzRGVzaWduTW9kZSAmJiBxdWVzdGlvbnMubGVuZ3RoID09IDBcIj4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6ICFrb0RyYWdnaW5nQm90dG9tKCksIHRleHQ6JHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKFxcJ3N1cnZleS5kcm9wUXVlc3Rpb25cXCcpXCI+PC9zcGFuPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0RyYWdnaW5nQm90dG9tXCI+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBpZjogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgYXM6IFxcJ3F1ZXN0aW9uXFwnLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogdHJ1ZSB9IH0gLS0+ICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb25zLmxlbmd0aCA+IDAgJiYga29EcmFnZ2luZ0JvdHRvbSgpXCI+ICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IGlmOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBhczogXFwncXVlc3Rpb25cXCcsIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiB0cnVlIH0gfSAtLT4gICAgICAgIDwhLS0gL2tvIC0tPiAgICA8L2Rpdj48L2Rpdj4nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wbGF0ZV9wYWdlLmh0bWwudHMiLCJleHBvcnQgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInN2ZF9xdWVzdGlvblwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCIgZGF0YS1iaW5kPVwic3R5bGU6IHtkaXNwbGF5OiBxdWVzdGlvbi5rb1Zpc2libGUoKXx8ICRyb290LmlzRGVzaWduTW9kZSA/IFxcJ2lubGluZS1ibG9ja1xcJzogXFwnbm9uZVxcJywgbWFyZ2luTGVmdDogcXVlc3Rpb24ua29NYXJnaW5MZWZ0LCBwYWRkaW5nUmlnaHQ6IHF1ZXN0aW9uLmtvUGFkZGluZ1JpZ2h0LCB3aWR0aDogcXVlc3Rpb24ua29SZW5kZXJXaWR0aCB9LCAgICAgYXR0ciA6IHtpZDogaWQsIGRyYWdnYWJsZTogJHJvb3QuaXNEZXNpZ25Nb2RlfSwgY2xpY2s6ICRyb290LmlzRGVzaWduTW9kZSA/IGtvT25DbGljazogbnVsbCwgICAgICAgICAgZXZlbnQ6eyAgICAgICAgICAgZHJhZ3N0YXJ0OmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ1N0YXJ0KGUpOyByZXR1cm4gdHJ1ZTsgfSwgICAgICAgICAgIGRyYWdvdmVyOmZ1bmN0aW9uKGVsLCBlKXsgaWYoIXF1ZXN0aW9uLmlzRHJhZ2dpbmcpIGRyYWdPdmVyKGUpO30sICAgICAgICAgICBkcmFnZW5kOmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ0VuZChlKTt9LCAgICAgICAgICAgZHJvcDpmdW5jdGlvbihlbCwgZSl7IGRyYWdEcm9wKGUpO30gICAgICAgICB9LCBjc3M6e3N2ZF9xX2Rlc2lnbl9ib3JkZXI6ICRyb290LmlzRGVzaWduTW9kZSwgc3ZkX3Ffc2VsZWN0ZWQgOiBrb0lzU2VsZWN0ZWQsIFxcJ3dlbGwgd2VsbC1zbVxcJzogJHJvb3QuaXNEZXNpZ25Nb2RlfVwiPiAgICA8ZGl2IGRhdGEtYmluZD1cImNzczp7c3ZkX3FfZGVzaWduOiAkcm9vdC5pc0Rlc2lnbk1vZGV9LCBzdHlsZTp7b3BhY2l0eTogcXVlc3Rpb24ua29Jc0RyYWdnaW5nU291cmNlKCkgPyAwLjQgOiAxfVwiPiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvRXJyb3JzKCkubGVuZ3RoID4gMCwgZm9yZWFjaDoga29FcnJvcnNcIj4gICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDokZGF0YS5nZXRUZXh0KClcIj48L3NwYW4+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICAgICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCd0b3BcXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyBxdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6IHF1ZXN0aW9uIH0gLS0+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzQ29tbWVudFwiPiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGV4dDpxdWVzdGlvbi5jb21tZW50VGV4dFwiPjwvZGl2PiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHRydWUgfSB9XCI+PC9kaXY+ICAgICAgICA8L2Rpdj4gICAgICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICAgICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCdib3R0b21cXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwic3ZkX3F1ZXN0aW9uX21lbnVcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0lzU2VsZWN0ZWRcIj4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5ICBidG4teHMgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCI+PC9zcGFuPiAgICAgICAgPC9idXR0b24+ICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgICAgICAgPGxpPiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiIGRhdGEtYmluZD1cImNsaWNrOiAkcm9vdC5jb3B5UXVlc3Rpb25DbGljaywgdGV4dDokcm9vdC5nZXRFZGl0b3JMb2NTdHJpbmcoXFwnc3VydmV5LmFkZFRvVG9vbGJveFxcJylcIj48L2J1dHRvbj4gICAgICAgICAgICA8L2xpPiAgICAgICAgICAgIDxsaT4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIiBkYXRhLWJpbmQ9XCJjbGljazogJHJvb3QuZmFzdENvcHlRdWVzdGlvbkNsaWNrLCB0ZXh0OiRyb290LmdldEVkaXRvckxvY1N0cmluZyhcXCdzdXJ2ZXkuY29weVxcJylcIj48L2J1dHRvbj4gICAgICAgICAgICA8L2xpPiAgICAgICAgPC91bD4gICAgPC9kaXY+PC9kaXY+JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVtcGxhdGVfcXVlc3Rpb24uaHRtbC50cyJdLCJzb3VyY2VSb290IjoiIn0=