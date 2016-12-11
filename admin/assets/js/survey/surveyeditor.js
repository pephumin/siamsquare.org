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
	var html = exports.html = '<div class="svd_container">  <ul class="navbar-default container-fluid nav nav-tabs svd_menu">    <li data-bind="css: { active: koViewType() == \'designer\' }"><a data-bind="click: selectDesignerClick, text: $root.getLocString(\'ed.designer\')"></a></li>    <li data-bind="css: { active: koViewType() == \'test\' }"><a data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurvey\')"></a></li>    <li data-bind="css: { active: koViewType() == \'editor\' }"><a data-bind="click: selectEditorClick, text: $root.getLocString(\'ed.jsonEditor\')"></a></li>    <!-- <li data-bind="css: {active: koViewType() == \'embed\'}"><a data-bind="click: selectEmbedClick, text: $root.getLocString(\'ed.embedSurvey\')"></a></li> -->    <ul class="nav navbar-nav navbar-right">      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanUndo, click: doUndoClick"><span data-bind="text: $root.getLocString(\'ed.undo\')"></span></button></li>      <li class="svd_actions" data-bind="visible: koIsShowDesigner"><button type="button" class="btn btn-primary btn-sm" data-bind="enable: undoRedo.koCanRedo, click: doRedoClick"><span data-bind="text: $root.getLocString(\'ed.redo\')"></span></button></li>      <!-- <li class="svd_actions" data-bind="visible: koIsShowDesigner">        <div data-bind="visible: koShowOptions()" class="btn-group inline">          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: $root.getLocString(\'ed.options\')">Options <span class="caret"></span></button>          <ul class="dropdown-menu">            <li data-bind="css: {active: koGenerateValidJSON}"><a href="#" data-bind="click: generateValidJSONClick, text: $root.getLocString(\'ed.generateValidJSON\')"></a></li>            <li data-bind="css: {active: !koGenerateValidJSON()}"><a href="#" data-bind="click: generateReadableJSONClick, text: $root.getLocString(\'ed.generateReadableJSON\')"></a></li>          </ul>        </div>      </li> -->      <li class="svd_actions"><button type="button" class="btn btn-success btn-sm" data-bind="click: saveButtonClick, visible: koShowSaveButton" id="btn-save"><span data-bind="text: $root.getLocString(\'ed.saveSurvey\')"></span></button></li>      <li class="svd_actions"><button type="button" class="btn btn-default btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li>      <!-- <li class="editor-topnav-right"><button type="button" class="btn btn-danger btn-sm" onclick="location.href=\'/admin/?w=surveys\'"><span>Back</span></button></li> -->    </ul>  </ul>  <div class="panel svd_content">    <div class="row svd_survey_designer" data-bind="visible: koViewType() == \'designer\'">      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 panel panel-default svd_toolbox">        <div class="btn-group-vertical" style="width:100%;padding-right:2px">          <!-- ko foreach: questionTypes -->          <div class="btn btn-default" style="text-align:left; margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickQuestion, event: { dragstart: function(el, e) { $parent.draggingQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span data-bind="css: \'icon-\' + $data"></span>            <span class="svd_toolbox_item_text" data-bind="text: $root.getLocString(\'qt.\' + $data)"></span>          </div>          <!-- /ko -->          <!-- ko foreach: koCopiedQuestions -->          <div class="btn btn-default" style="text-align:left;margin:1px;width:100%" draggable="true" data-bind="click: $parent.clickCopiedQuestion, event: { dragstart: function(el, e) { $parent.draggingCopiedQuestion($data, e); return true;}, dragend: function(el, e) { $parent.dragEnd(); }}">            <span class="icon-default"></span>            <span class="svd_toolbox_item_text" data-bind="text: name"></span>          </div>          <!-- /ko -->        </div>      </div>      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 svd_editors">        <div class="svd_pages_editor" data-bind="template: { name: \'pageeditor\', data: pagesEditor }"></div>        <div class="svd_questions_editor" id="scrollableDiv">          <div id="surveyjs"></div>        </div>      </div>      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel panel-default svd_properties">        <div class="panel-heading input-group">          <div class="custom-select">            <select class="form-control input-sm" data-bind="options: koObjects, optionsText: \'text\', value: koSelectedObject"></select>          </div>          <div class="input-group-btn">            <button class="btn btn-default" type="button" data-bind="enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString(\'ed.delSelObject\')}"><i class="pe-remove"></i></button>          </div>        </div>        <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>        <div class="panel-footer" data-bind="visible: surveyVerbs.koHasVerbs">          <div data-bind="template: { name: \'objectverbs\', data: surveyVerbs }"></div>        </div>      </div>    </div>    <div id="surveyjsJSONEditor" class="svd_json_editor" data-bind="visible: koViewType() == \'editor\'"></div>    <div id="surveyjsTest" data-bind="visible: koViewType() == \'test\', style: {width: koTestSurveyWidth}">      <!-- <select class="form-control" data-bind="value: koTestSurveyWidth">        <option value="100%" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'100%\'"></option>        <option value="1200px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1200px\'"></option>        <option value="1000px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'1000px\'"></option>        <option value="800px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'800px\'"></option>        <option value="600px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'600px\'"></option>        <option value="400px" data-bind="text: $root.getLocString(\'ed.testSurveyWidth\') + \'400px\'"></option>      </select> -->      <div id="surveyjsExample"></div>      <div id="surveyjsExampleResults"></div>      <button id="surveyjsExamplereRun" data-bind="click: selectTestClick, text: $root.getLocString(\'ed.testSurveyAgain\')" style="display:none">Test Again</button>    </div>    <!-- <div id="surveyjsEmbed" data-bind="visible: koViewType() == \'embed\'">      <div data-bind="template: { name: \'surveyembeding\', data: surveyEmbeding }"></div>    </div> -->  </div></div><script type="text/html" id="objecteditor">  <table class="table svd_table-nowrap">    <tbody data-bind="foreach: koProperties">      <tr data-bind="click: $parent.changeActiveProperty($data), css: {\'active\': $parent.koActiveProperty() == $data}">        <td data-bind="text: displayName, attr: {title: title}" width="50%" style="font-family:ubuntu; font-size:11px"></td>        <td width="50%" style="font-family:boon;font-size:14px">          <span data-bind="text: koText, visible: $parent.koActiveProperty() != $data && (koText() || $data.editorType == \'boolean\'), attr: { title: koText }" style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden"></span>          <div data-bind="visible: $parent.koActiveProperty() == $data || (!koText() && $data.editorType != \'boolean\')">            <!-- ko template: { name: \'propertyeditor-\' + editorType, data: $data } -->            <!-- /ko -->          </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="objectverbs">  <!-- ko foreach: koVerbs -->    <div class="row">      <div class="input-group">        <span class="input-group-addon input-sm" data-bind="text: text"></span>        <select class="form-control input-sm" data-bind="options: koItems, optionsText: \'text\', optionsValue: \'value\', value: koSelectedItem"></select>      </div>    </div>  <!-- /ko --></script><script type="text/html" id="pageeditor">  <ul class="nav nav-tabs" data-bind="tabs: true">    <!-- ko foreach: koPages -->    <li data-bind="css: { active: koSelected()}, event: { keydown: function(el, e) { $parent.keyDown(el, e); }, dragstart: function(el, e) { $parent.dragStart(el); return true; }, dragover: function(el, e) { $parent.dragOver(el); }, dragend: function(el, e) { $parent.dragEnd(); }, drop: function(el, e) { $parent.dragDrop(el); } }">      <a class="svd_page_nav" data-bind="click: $parent.selectPageClick"><span data-bind="text: title"></span></a>    </li>    <!-- /ko -->    <li><button class="btn btn-default svd_add_new_page_btn" data-bind="click: addNewPageClick"><i class="pe-plus"></i></button></li>  </ul></script><script type="text/html" id="surveyembeding">  <div class="row">    <div class="col-sm-3">      <select data-bind="value: koLibraryVersion" class="form-control input-sm">        <option value="knockout" data-bind="text: $root.getLocString(\'ew.knockout\')"></option>        <option value="react" data-bind="text: $root.getLocString(\'ew.react\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koScriptUsing" class="form-control input-sm">        <option value="bootstrap" data-bind="text: $root.getLocString(\'ew.bootstrap\')"></option>        <option value="standard" data-bind="text: $root.getLocString(\'ew.standard\')"></option>      </select>    </div>    <div class="col-sm-3">      <select data-bind="value: koShowAsWindow" class="form-control input-sm">        <option value="page" data-bind="text: $root.getLocString(\'ew.showOnPage\')"></option>        <option value="window" data-bind="text: $root.getLocString(\'ew.showInWindow\')"></option>      </select>    </div>    <div class="col-sm-3">      <label data-bind="visible: koHasIds">        <input type="checkbox" data-bind="checked: koLoadSurvey">        <small data-bind="text: $root.getLocString(\'ew.loadFromServer\')"></small>      </label>    </div>  </div>  <br>  <div class="row">    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleScript\')"></h4>      <div id="surveyEmbedingHead" style="height:70px;width:100%"></div>    </div>    <div class="col-sm-12" data-bind="visible: koVisibleHtml">      <h4 data-bind="text: $root.getLocString(\'ew.titleHtml\')"></h4>      <div id="surveyEmbedingBody" style="height:30px;width:100%"></div>    </div>    <div class="col-sm-12">      <h4 data-bind="text: $root.getLocString(\'ew.titleJavaScript\')"></h4>      <div id="surveyEmbedingJava" style="height:300px;width:100%"></div>    </div>  </div></script><script type="text/html" id="propertyeditor-boolean">  <input class="form-control input-sm" type="checkbox" data-bind="checked: koValue"></script><script type="text/html" id="propertyeditor-dropdown">  <div class="custom-select">    <select class="form-control input-sm" data-bind="value: koValue, options: choices" style="width:100%"></select>  </div></script><script type="text/html" id="propertyeditor-html">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-html">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-itemvalues">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-itemvalues">  <div style="overflow-y: auto; overflow-x:hidden; max-height:400px">    <table class="table">      <thead>        <tr>          <th></th>          <th data-bind="text: $root.getLocString(\'pe.value\')"></th>          <th data-bind="text: $root.getLocString(\'pe.text\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td>            <div class="btn-group" role="group">              <button type="button" class="btn btn-xs" data-bind="visible: $index() > 0, click: $parent.onMoveUpClick"><i class="pe-arrow-up" aria-hidden="true"></i></button>              <button type="button" class="btn btn-xs" style="float:none" data-bind="visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick"><i class="pe-arrow-down" aria-hidden="true"></i></button>            </div>          </td>          <td>            <input type="text" class="form-control input-sm" data-bind="value: koValue" style="width:150px">            <div class="alert alert-danger no-padding" role="alert" data-bind="visible:koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>          </td>          <td><input type="text" class="form-control input-sm" data-bind="value: koText" style="width:150px"></td>          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->      </tbody>    </table>  </div>  <div class="row btn-toolbar">    <input type="button" class="btn btn-sm btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">    <input type="button" class="btn btn-sm btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">  </div></script><script type="text/html" id="propertyeditor-matrixdropdowncolumns">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-matrixdropdowncolumns">  <table class="table">    <thead>      <tr>        <th data-bind="text: $root.getLocString(\'pe.required\')"></th>        <th data-bind="text: $root.getLocString(\'pe.cellType\')"></th>        <th data-bind="text: $root.getLocString(\'pe.name\')"></th>        <th data-bind="text: $root.getLocString(\'pe.title\')"></th>        <th></th>      </tr>    </thead>    <tbody>      <!-- ko foreach: koItems -->      <tr>        <td>          <a data-bind="visible: koHasChoices, click: onShowChoicesClick"><span class="glyphicon" data-bind="css: {\'glyphicon-chevron-down\': !koShowChoices(), \'glyphicon-chevron-up\': koShowChoices()}"></span></a>          <input type="checkbox" data-bind="checked: koIsRequired">        </td>        <td>          <select class="form-control input-sm" data-bind="options: cellTypeChoices, value: koCellType" style="width:110px"></select>        </td>        <td>          <input type="text" class="form-control input-sm" data-bind="value: koName" style="width:100px">          <div class="alert alert-danger no-padding" role="alert" data-bind="visible: koHasError, text: $root.getLocString(\'pe.enterNewValue\')"></div>        </td>        <td><input type="text" class="form-control input-sm" data-bind="value: koTitle" style="width:120px"></td>        <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>      </tr>      <tr data-bind="visible: koShowChoices() && koHasChoices()">        <td colspan="4" style="border-top-style:none">          <div class="form-group">            <label class="control-label col-sm-3" data-bind="text:$root.getLocString(\'pe.hasOther\')"></label>            <div class="col-sm-2"><input type="checkbox" data-bind="checked: koHasOther"></div>            <div class="col-sm-7" data-bind="visible: !koHasColCount()"></div>            <label class="control-label col-sm-3" data-bind="visible: koHasColCount, text: $root.getLocString(\'pe.colCount\')"></label>            <select class="form-control input-sm col-sm-4" data-bind="visible: koHasColCount, options: colCountChoices, value: koColCount" style="width:110px"></select>          </div>          <div class="modal-body svd_notopbottompaddings">            <!-- ko template: { name: \'propertyeditorcontent-itemvalues\', data: choicesEditor } -->            <!-- /ko -->          </div>        </td>      </tr>      <!-- /ko -->      <tr>        <td colspan="3">        <div class="row btn-toolbar">          <input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')">          <input type="button" class="btn btn-danger" data-bind="click: onClearClick, value: $root.getLocString(\'pe.removeAll\')">        </div>        </td>      </tr>    </tbody>  </table></script><script type="text/html" id="propertyeditor-modal">  <div class="input-group" data-bind="visible: !editor.isEditable">    <span data-bind="text: koText"></span>    <div class="input-group-btn"><button type="button" class="btn btn-default" data-toggle="modal" style="padding:2px" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div class="input-group" data-bind="visible: editor.isEditable" style="display:table">    <input class="form-control input-sm" type="text" data-bind="value: koValue" style="display:table-cell; width:100%">    <div class="input-group-btn"><button type="button" class="btn btn-default" style="display:table-cell; padding:2px" data-toggle="modal" data-bind="attr: { \'data-target\' : modalNameTarget }"><i class="pe-edit" aria-hidden="true"></i></button></div>  </div>  <div data-bind="attr: { id : modalName }" class="modal fade" role="dialog">    <div class="modal-dialog">      <div class="modal-content">        <div class="modal-header">          <button type="button" class="close" data-dismiss="modal">&times;</button>          <h4 class="modal-title" data-bind="text: editor.title"></h4>        </div>        <div class="modal-body svd_notopbottompaddings">          <!-- ko template: { name: \'propertyeditorcontent-\' + editorType, data: editor } -->          <!-- /ko -->        </div>        <div class="modal-footer">          <input type="button" class="btn btn-primary" data-bind="click: editor.onApplyClick, value: $root.getLocString(\'pe.apply\')" style="width:100px">          <input type="button" class="btn btn-default" data-bind="click: editor.onResetClick, value: $root.getLocString(\'pe.reset\')" style="width:100px">          <input type="button" class="btn btn-default" data-dismiss="modal" data-bind="value: $root.getLocString(\'pe.close\')" style="width:100px">        </div>      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-number">  <input class="form-control input-sm" type="number" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-restfull">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-restfull">  <form>    <div class="form-group">      <label for="url">Url:</label>      <input id="url" type="text" data-bind="value: koUrl" class="form-control">    </div>    <div class="form-group">      <label for="path">Path:</label>      <input id="path" type="text" data-bind="value: koPath" class="form-control">    </div>    <div class="form-group">      <label for="valueName">valueName:</label>      <input id="valueName" type="text" data-bind="value: koValueName" class="form-control">    </div>    <div class="form-group">      <label for="titleName">titleName:</label>      <input id="titleName" type="text" data-bind="value: koTitleName" class="form-control">    </div>  </form>  <div id="restfullSurvey" style="width:100%;height:150px"></div></script><script type="text/html" id="propertyeditor-string">  <input class="form-control input-sm" type="text" data-bind="value: koValue" style="width:100%"></script><script type="text/html" id="propertyeditor-text">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-text">  <textarea class="form-control" data-bind="value: koValue" style="width:100%" rows="10" autofocus="autofocus"></textarea></script><script type="text/html" id="propertyeditor-textitems">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-textitems">  <div class="panel">    <table class="table">      <thead>        <tr>          <th data-bind="text: $root.getLocString(\'pe.name\')"></th>          <th data-bind="text: $root.getLocString(\'pe.title\')"></th>          <th></th>        </tr>      </thead>      <tbody>        <!-- ko foreach: koItems -->        <tr>          <td><input type="text" class="form-control" data-bind="value: koName" style="width:200px"></td>          <td><input type="text" class="form-control" data-bind="value: koTitle" style="width:200px"></td>          <!-- <td><input type="button" class="btn btn-xs btn-danger" data-bind="click: $parent.onDeleteClick, value: $root.getLocString(\'pe.delete\')"></td> -->          <td><button type="button" class="btn btn-danger btn-xs" data-bind="click: $parent.onDeleteClick"><i class="pe-trash" aria-hidden="true"></i></button></td>        </tr>        <!-- /ko -->        <tr>          <td colspan="4"><input type="button" class="btn btn-success" data-bind="click: onAddClick, value: $root.getLocString(\'pe.addNew\')"></td>        </tr>      </tbody>    </table>  </div></script><script type="text/html" id="propertyeditor-triggers">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-triggers">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableTriggers -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'koText\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn btn-default"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="visible: koSelected() == null">      <div data-bind="visible: koQuestions().length == 0, text: $root.getLocString(\'pe.noquestions\')"></div>      <div data-bind="visible: koQuestions().length > 0, text: $root.getLocString(\'pe.createtrigger\')"></div>    </div>    <div data-bind="visible: koSelected() != null">      <div data-bind="with: koSelected">        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-4">            <span data-bind="text: $root.getLocString(\'pe.triggerOn\')"></span><select class="form-control input-sm" data-bind="options: $parent.koQuestions, value: koName"></select>          </div>          <div class="col-sm-4">            <select class="form-control input-sm" data-bind="options: availableOperators, optionsValue: \'name\', optionsText: \'text\', value: koOperator"></select>          </div>          <div class="col-sm-4">            <input class="form-control input-sm" type="text" data-bind="visible: koRequireValue, value: koValue">          </div>        </div>        <!-- ko if: koType() == \'visibletrigger\' -->        <div class="row">          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: pages } -->            <!-- /ko -->          </div>          <div class="col-sm-6">            <!-- ko template: { name: \'propertyeditor-triggersitems\', data: questions } -->            <!-- /ko -->          </div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'completetrigger\' -->        <div class="row">          <div style="margin: 10px" data-bind="text: $root.getLocString(\'pe.triggerCompleteText\')"></div>        </div>        <!-- /ko -->        <!-- ko if: koType() == \'setvaluetrigger\' -->        <div class="row form-inline" style="margin-top:10px">          <div class="col-sm-6">            <span data-bind="text: $root.getLocString(\'pe.triggerSetToName\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetToName">          </div>          <div class="col-sm-1">          </div>          <div class="col-sm-5">            <span data-bind="text: $root.getLocString(\'pe.triggerSetValue\')"></span><input class="form-control input-sm" type="text" data-bind="value: kosetValue">          </div>        </div>          <div class="row form-inline" style="margin-top:10px">            <div class="col-sm-12">              <input type="checkbox" data-bind="checked: koisVariable"> <span data-bind="text: $root.getLocString(\'pe.triggerIsVariable\')"></span>            </div>          </div>          <!-- /ko -->      </div>    </div>  </div></script><script type="text/html" id="propertyeditor-triggersitems">  <div class="panel no-margins no-padding">    <div class="panel-heading">      <span data-bind="text: title"></span>    </div>    <div class="input-group">      <select class="form-control" multiple="multiple" data-bind="options: koChoosen, value: koChoosenSelected"></select>      <span class="input-group-btn" style="vertical-align:top"><button type="button" data-bind="enable: koChoosenSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>    </div>    <div class="input-group" style="margin-top:5px">      <select class="form-control input-sm" data-bind="options: koObjects, value: koSelected"></select>      <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onAddClick" style="width:40px" class="btn btn-success"><i class="pe-plus"></i></button></span>    </div>  </div></script><script type="text/html" id="propertyeditor-validators">  <!-- ko template: { name: \'propertyeditor-modal\', data: $data } --><!-- /ko --></script><script type="text/html" id="propertyeditorcontent-validators">  <div class="panel">    <div class="panel-heading">      <div class="row input-group">        <button type="button" class="dropdown-toggle input-group-addon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="pe-plus"></i></button>        <ul class="dropdown-menu">          <!-- ko foreach: availableValidators -->          <li><a data-bind="click: $parent.onAddClick($data)"><span data-bind="text: $data"></span></a></li>          <!-- /ko -->        </ul>        <select class="form-control" data-bind="options: koItems, optionsText: \'text\', value: koSelected"></select>        <span class="input-group-btn"><button type="button" data-bind="enable: koSelected() != null, click: onDeleteClick" class="btn"><i class="pe-remove"></i></button></span>      </div>    </div>    <div data-bind="template: { name: \'objecteditor\', data: selectedObjectEditor }"></div>  </div></script>';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YWRhNzA1M2Y5ZDBhZWQwNjQyNSIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImFtZFwiOlwic3VydmV5LWtub2Nrb3V0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNb2RhbEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0UHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRyaWdnZXJzRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dFdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanNvbjUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RWZXJicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5kb3JlZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VydmV5T2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVFZGl0b3Iua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVfcGFnZS5odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNyQ0E7Ozs7Ozs7OztnQ0FDNEI7Ozs7OztnQ0FBNEI7Ozs7OztnQ0FDeEI7Ozs7OztnQ0FBNkI7Ozs7OztnQ0FFN0Q7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7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LEtBQUc7QUFDaEMsaUJBQUssS0FBRyxHQUFNLFNBQVUsT0FBTyxPQUN0QztBQUFDO0FBQ0ssZ0JBQUMsQ0FDWDtBQUFDO0FBQ08sNkJBQU8sVUFBZixVQUFnQztBQUM1QixhQUFVLFNBQWdCLGNBQVE7QUFDL0IsYUFBYSwyQkFBYyxjQUFLLFFBQVcsc0JBQU0sTUFBRTtBQUM1Qyx1QkFBaUIsY0FDM0I7QUFBQztBQUNLLGdCQUFPLFNBQWUsMkJBQWMsY0FDOUM7QUFBQztBQXhJYSxtQkFBTSxTQUFpQjtBQXlJekMsWUFBQztBQUFBLEs7Ozs7Ozs7OztBQ2xKTSxLQUFRLHNCQUEwZzFCLHVnMUI7Ozs7Ozs7OztBQ0FsaDFCLEtBQVEsc0JBQW90RCxpdEQ7Ozs7Ozs7OztBQ0E1dEQsS0FBUSxzQkFBczNFLG0zRSIsImZpbGUiOiJzdXJ2ZXllZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJ2ZXkta25vY2tvdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdXJ2ZXlFZGl0b3JcIiwgW1wic3VydmV5LWtub2Nrb3V0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInN1cnZleS1rbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wiU3VydmV5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhZGE3MDUzZjlkMGFlZDA2NDI1IiwiZXhwb3J0IHtEcmFnRHJvcEhlbHBlcn0gZnJvbSBcIi4uL2RyYWdkcm9waGVscGVyXCI7XG5leHBvcnQge1xuICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IsXG4gICAgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvciwgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvclxufSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciwgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtfVxuICAgIGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yXCI7XG5cbmV4cG9ydCB7U3VydmV5T2JqZWN0UHJvcGVydHl9IGZyb20gXCIuLi9vYmplY3RQcm9wZXJ0eVwiO1xuZXhwb3J0IHtTdXJ2ZXlPYmplY3RFZGl0b3J9IGZyb20gXCIuLi9vYmplY3RFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UGFnZXNFZGl0b3J9IGZyb20gXCIuLi9wYWdlc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi4vdGV4dFdvcmtlclwiO1xuZXhwb3J0IHtPYmpUeXBlLCBTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmV4cG9ydCB7U3VydmV5RW1iZWRpbmdXaW5kb3d9IGZyb20gXCIuLi9zdXJ2ZXlFbWJlZGluZ1dpbmRvd1wiO1xuZXhwb3J0IHtTdXJ2ZXlWZXJicywgU3VydmV5VmVyYkl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VUeXBlSXRlbSwgU3VydmV5VmVyYkNoYW5nZVBhZ2VJdGVtfSBmcm9tIFwiLi4vb2JqZWN0VmVyYnNcIjtcbmV4cG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4uL3VuZG9yZWRvXCI7XG5leHBvcnQge1N1cnZleUVkaXRvcn0gZnJvbSBcIi4uL2VkaXRvclwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIERyYWdEcm9wSGVscGVyIHtcbiAgICBzdGF0aWMgZGF0YVN0YXJ0OiBzdHJpbmcgPSBcInN1cnZleWpzLFwiO1xuICAgIHN0YXRpYyBkcmFnRGF0YTogYW55ID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGwgfTtcbiAgICBzdGF0aWMgcHJldkV2ZW50ID0geyBxdWVzdGlvbjogbnVsbCwgeDogLTEsIHk6IC0xIH07XG4gICAgcHJpdmF0ZSBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueTtcbiAgICBwcml2YXRlIHNjcm9sbGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBzb3VyY2VJbmRleDogbnVtYmVyID0gLTE7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IFN1cnZleS5JU3VydmV5LCBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSwgc2Nyb2xsYWJsZUVsTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjayA9IG9uTW9kaWZpZWRDYWxsYmFjaztcbiAgICAgICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKChzY3JvbGxhYmxlRWxOYW1lID8gc2Nyb2xsYWJsZUVsTmFtZSA6IFwic2Nyb2xsYWJsZURpdlwiKSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gPFN1cnZleS5TdXJ2ZXk+dGhpcy5kYXRhOyB9XG4gICAgcHVibGljIHN0YXJ0RHJhZ05ld1F1ZXN0aW9uKGV2ZW50OiBEcmFnRXZlbnQsIHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBxdWVzdGlvblR5cGUsIHF1ZXN0aW9uTmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydERyYWdRdWVzdGlvbihldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbk5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBudWxsLCBxdWVzdGlvbk5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnREcmFnQ29waWVkUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25OYW1lOiBzdHJpbmcsIHF1ZXN0aW9uSnNvbjogYW55KSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsIG51bGwsIHF1ZXN0aW9uTmFtZSwgcXVlc3Rpb25Kc29uKTtcbiAgICB9XG4gICAgcHVibGljIGlzU3VydmV5RHJhZ2dpbmcoZXZlbnQ6IERyYWdFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXREYXRhKGV2ZW50KS50ZXh0O1xuICAgICAgICByZXR1cm4gZGF0YSAmJiBkYXRhLmluZGV4T2YoRHJhZ0Ryb3BIZWxwZXIuZGF0YVN0YXJ0KSA9PSAwO1xuICAgIH1cbiAgICBwdWJsaWMgZG9EcmFnRHJvcE92ZXIoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbFkoZXZlbnQpO1xuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbjtcbiAgICAgICAgaWYgKCFxdWVzdGlvbiB8fCBxdWVzdGlvbiA9PSB0YXJnZXRRdWVzdGlvbiB8fCAhdGhpcy5pc1N1cnZleURyYWdnaW5nKGV2ZW50KSB8fCB0aGlzLmlzU2FtZVBsYWNlKGV2ZW50LCBxdWVzdGlvbikpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRRdWVzdGlvbkluZGV4KGV2ZW50LCBxdWVzdGlvbik7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZUluZGV4ID09IGluZGV4IHx8IHRoaXMuc291cmNlSW5kZXggKyAxID09IGluZGV4KSAgaW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oaW5kZXgpO1xuICAgIH1cbiAgICBwdWJsaWMgZW5kKCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsU3RvcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0SXNEcmFnZ2luZ1NvdXJjZSh0aGlzLnN1cnZleVtcImtvRHJhZ2dpbmdTb3VyY2VcIl0oKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN1cnZleVtcImtvRHJhZ2dpbmdTb3VyY2VcIl0obnVsbCk7XG4gICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXSgtMSk7XG4gICAgICAgIHRoaXMuc291cmNlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB9XG4gICAgcHVibGljIGRvRHJvcChldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdXJ2ZXlEcmFnZ2luZyhldmVudCkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlW1wia29EcmFnZ2luZ1wiXSgpO1xuICAgICAgICAgICAgdmFyIHRhcmdldFF1ZXN0aW9uID0gRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGFyZ2V0UXVlc3Rpb247XG4gICAgICAgICAgICBpZiAodGFyZ2V0UXVlc3Rpb24gJiYgaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBvbGRJbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkSW5kZXggPiAtMSAmJiBvbGRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVF1ZXN0aW9uVG8odGFyZ2V0UXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZG9MZWF2ZVBhZ2UoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBldmVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPD0gMCB8fCBldmVudC5jbGllbnRZIDw9IDAgfHxcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPj0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCBldmVudC5jbGllbnRZID49IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZVtcImtvRHJhZ2dpbmdcIl0oLTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlVGFyZ2V0UXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBqc29uOiBhbnkpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgaWYgKCFxdWVzdGlvbk5hbWUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGFyZ2V0UXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uQmFzZT50aGlzLnN1cnZleS5nZXRRdWVzdGlvbkJ5TmFtZShxdWVzdGlvbk5hbWUpO1xuICAgICAgICB0aGlzLnNvdXJjZUluZGV4ID0gLTE7XG4gICAgICAgIGlmICh0YXJnZXRRdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VJbmRleCA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLnF1ZXN0aW9ucy5pbmRleE9mKHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoanNvbikge1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihqc29uW1widHlwZVwiXSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgdGFyZ2V0UXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uLm5hbWUgPSBxdWVzdGlvbk5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRhcmdldFF1ZXN0aW9uICYmIHF1ZXN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIHF1ZXN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRRdWVzdGlvbi5zZXREYXRhKHRoaXMuc3VydmV5KTtcbiAgICAgICAgICAgIHRhcmdldFF1ZXN0aW9uLnJlbmRlcldpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJc0RyYWdnaW5nU291cmNlKHRhcmdldFF1ZXN0aW9uLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFF1ZXN0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIHNldElzRHJhZ2dpbmdTb3VyY2UocXVlc3Rpb246IGFueSwgdmFsOiBhbnkpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmIHF1ZXN0aW9uW1wia29Jc0RyYWdnaW5nU291cmNlXCJdKSBxdWVzdGlvbltcImtvSXNEcmFnZ2luZ1NvdXJjZVwiXSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFF1ZXN0aW9uSW5kZXgoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5jdXJyZW50UGFnZTtcbiAgICAgICAgaWYgKCFxdWVzdGlvbikgcmV0dXJuIHBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbik7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSA8bnVtYmVyPmV2ZW50LmN1cnJlbnRUYXJnZXRbXCJjbGllbnRIZWlnaHRcIl07XG4gICAgICAgIHZhciB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICAgICAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCdsYXllclgnKSkge1xuICAgICAgICAgICAgeSA9IGV2ZW50LmxheWVyWSAtIDxudW1iZXI+ZXZlbnQuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA+IGhlaWdodCAvIDIpIGluZGV4Kys7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NhbWVQbGFjZShldmVudDogRHJhZ0V2ZW50LCBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgaWYgKHByZXYucXVlc3Rpb24gIT0gcXVlc3Rpb24gfHwgTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHByZXYueCkgPiA1IHx8IE1hdGguYWJzKGV2ZW50LmNsaWVudFkgLSBwcmV2LnkpID4gNSkge1xuICAgICAgICAgICAgcHJldi5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICAgICAgcHJldi54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIHByZXYueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTY3JvbGxTdG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEZWxheTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFkoZTogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgeSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGUpO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj50aGlzLnNjcm9sbGFibGVFbGVtZW50W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICBpZiAoeSA8IERyYWdEcm9wSGVscGVyLlNjcm9sbE9mZnNldCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAtIHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgaGVpZ2h0ID49IHkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGRvU2Nyb2xsWShzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBlbC5zY3JvbGxUb3AgKyBzdGVwO1xuICAgICAgICBpZiAoc2Nyb2xsWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxZO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1Njcm9sbFN0b3ApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2Nyb2xsWShzdGVwKSB9LCBEcmFnRHJvcEhlbHBlci5TY3JvbGxEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlLmN1cnJlbnRUYXJnZXQpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIGUub2Zmc2V0WSArIDxudW1iZXI+ZS5jdXJyZW50VGFyZ2V0W1wib2Zmc2V0VG9wXCJdIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLnNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRFdmVudChldmVudDogRHJhZ0V2ZW50KTogRHJhZ0V2ZW50IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA/IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSA6IGV2ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZVF1ZXN0aW9uVG8odGFyZ2V0UXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldFF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbih0YXJnZXRRdWVzdGlvbik7XG4gICAgICAgIGlmIChwYWdlID09IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlICYmIGluZGV4ID09IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGFyZ2V0UXVlc3Rpb24pKSByZXR1cm47XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICBwYWdlLnJlbW92ZVF1ZXN0aW9uKHRhcmdldFF1ZXN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZS5hZGRRdWVzdGlvbih0YXJnZXRRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YUluZm8oZXZlbnQ6IERyYWdFdmVudCk6IGFueSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXREYXRhKGV2ZW50KTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRleHQgPSBkYXRhLnRleHQuc3Vic3RyKERyYWdEcm9wSGVscGVyLmRhdGFTdGFydC5sZW5ndGgpO1xuICAgICAgICB2YXIgYXJyYXkgPSB0ZXh0LnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciByZXN1bHQgPSB7anNvbjogbnVsbH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYXJyYXlbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHJlc3VsdFtpdGVtWzBdXSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lmpzb24gPSBkYXRhLmpzb247XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0WShlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgIHZhciByZXN1bHQgPSAwO1xuXG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gPEhUTUxFbGVtZW50PmVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgcHJlcGFyZURhdGEoZXZlbnQ6IERyYWdFdmVudCwgcXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uTmFtZTogc3RyaW5nLCBqc29uOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHZhciBzdHIgPSBEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQ7XG4gICAgICAgIGlmIChxdWVzdGlvblR5cGUpIHN0ciArPSBcInF1ZXN0aW9udHlwZTpcIiArIHF1ZXN0aW9uVHlwZSArICcsJztcbiAgICAgICAgc3RyICs9IFwicXVlc3Rpb25uYW1lOlwiICsgcXVlc3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnNldERhdGEoZXZlbnQsIHN0ciwganNvbik7XG4gICAgICAgIHZhciB0YXJnZXRRdWVzdGlvbiA9IHRoaXMuY3JlYXRlVGFyZ2V0UXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBxdWVzdGlvbk5hbWUsIGpzb24pO1xuICAgICAgICBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YS50YXJnZXRRdWVzdGlvbiA9IHRhcmdldFF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnN1cnZleVtcImtvRHJhZ2dpbmdTb3VyY2VcIl0odGFyZ2V0UXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIHNldERhdGEoZXZlbnQ6IERyYWdFdmVudCwgdGV4dDogc3RyaW5nLCBqc29uOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiVGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJjb3B5XCI7XG4gICAgICAgIH1cbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7IHRleHQ6IHRleHQsIGpzb246IGpzb24gfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQpOiBhbnkge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiVGV4dFwiKTtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICAgICAgRHJhZ0Ryb3BIZWxwZXIuZHJhZ0RhdGEgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCwgdGFyZ2V0UXVlc3Rpb246IG51bGx9O1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgcHJldi5xdWVzdGlvbiA9IG51bGw7XG4gICAgICAgIHByZXYueCA9IC0xO1xuICAgICAgICBwcmV2LnkgPSAtMTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyYWdkcm9waGVscGVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJTdXJ2ZXlcIixcImNvbW1vbmpzMlwiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwic3VydmV5LWtub2Nrb3V0XCIsXCJhbWRcIjpcInN1cnZleS1rbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRFZGl0b3I6IHN0cmluZyA9IFwic3RyaW5nXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZWRpdG9yUmVnaXN0ZXJlZExpc3QgPSB7fTtcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRWRpdG9yKG5hbWU6IHN0cmluZywgY3JlYXRvcjogKCkgPT4gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlKSB7XG4gICAgICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtuYW1lXSA9IGNyZWF0b3I7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWRpdG9yKGVkaXRvclR5cGU6IHN0cmluZywgZnVuYzogKG5ld1ZhbHVlOiBhbnkpID0+IGFueSk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgICAgIHZhciBjcmVhdG9yID0gU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W2VkaXRvclR5cGVdO1xuICAgICAgICBpZiAoIWNyZWF0b3IpIGNyZWF0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmRlZmF1bHRFZGl0b3JdO1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3IgPSBjcmVhdG9yKCk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9uQ2hhbmdlZCA9IGZ1bmM7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eUVkaXRvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbHVlXzogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb3B0aW9uczogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb25DaGFuZ2VkOiAobmV3VmFsdWU6IGFueSkgPT4gYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgdGhyb3cgXCJlZGl0b3JUeXBlIGlzIG5vdCBkZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnZhbHVlXzsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29ycmVjdGVkVmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldFZhbHVlQ29yZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWVfID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7IH1cbiAgICBwdWJsaWMgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvcnJlY3RlZFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkgeyAgcmV0dXJuIHZhbHVlOyAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVN0cmluZ1Byb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInN0cmluZ1wiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJkcm9wZG93blwiOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImJvb2xlYW5cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleU51bWJlclByb3BlcnR5RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm51bWJlclwiOyB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInN0cmluZ1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImRyb3Bkb3duXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJib29sZWFuXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcIm51bWJlclwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZS50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRleHRpdGVtc1wiOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHtcbiAgICAgICAgdmFyIG9ianMgPSBbXTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9ianMucHVzaCh7IG5hbWU6IGl0ZW1zW2ldLmtvTmFtZSgpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlZGl0SXRlbSA9IHsga29OYW1lOiBrby5vYnNlcnZhYmxlKFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIFwidGV4dFwiKSksIGtvVGl0bGU6IGtvLm9ic2VydmFibGUoKSB9O1xuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcnNFZGl0b3IoZWRpdEl0ZW0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGVkaXRJdGVtO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGVkaXRJdGVtID0geyBrb05hbWU6IGtvLm9ic2VydmFibGUoaXRlbS5uYW1lKSwga29UaXRsZToga28ub2JzZXJ2YWJsZShpdGVtLnRpdGxlKSB9O1xuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcnNFZGl0b3IoZWRpdEl0ZW0sIGl0ZW0udmFsaWRhdG9ycyk7XG4gICAgICAgIHJldHVybiBlZGl0SXRlbTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1UZXh0ID0gbmV3IFN1cnZleS5NdWx0aXBsZVRleHRJdGVtKGVkaXRvckl0ZW0ua29OYW1lKCksIGVkaXRvckl0ZW0ua29UaXRsZSgpKTtcbiAgICAgICAgaXRlbVRleHQudmFsaWRhdG9ycyA9IGVkaXRvckl0ZW0udmFsaWRhdG9ycztcbiAgICAgICAgcmV0dXJuIGl0ZW1UZXh0O1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVZhbGlkYXRvcnNFZGl0b3IoaXRlbTogYW55LCB2YWxpZGF0b3JzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGl0ZW0udmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuc2xpY2UoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IGl0ZW0udmFsaWRhdG9ycyA9IG5ld1ZhbHVlOyBpdGVtLmtvVGV4dChzZWxmLmdldFRleHQobmV3VmFsdWUubGVuZ3RoKSk7IH07XG4gICAgICAgIHZhciBwcm9wZXJ0eUVkaXRvciA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IoKTtcbiAgICAgICAgaXRlbS5lZGl0b3IgPSBwcm9wZXJ0eUVkaXRvcjtcbiAgICAgICAgcHJvcGVydHlFZGl0b3Iub25DaGFuZ2VkID0gKG5ld1ZhbHVlOiBhbnkpID0+IHsgb25JdGVtQ2hhbmdlZChuZXdWYWx1ZSk7IH07XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLm9iamVjdCA9IGl0ZW07XG4gICAgICAgIHByb3BlcnR5RWRpdG9yLnRpdGxlKGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5lZGl0UHJvcGVydHlcIilbXCJmb3JtYXRcIl0oXCJWYWxpZGF0b3JzXCIpKTtcbiAgICAgICAgcHJvcGVydHlFZGl0b3IudmFsdWUgPSBpdGVtLnZhbGlkYXRvcnM7XG4gICAgICAgIGl0ZW0ua29UZXh0ID0ga28ub2JzZXJ2YWJsZSh0aGlzLmdldFRleHQodmFsaWRhdG9ycy5sZW5ndGgpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRUZXh0KGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5pdGVtc1wiKVtcImZvcm1hdFwiXShsZW5ndGgpO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dGl0ZW1zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5TW9kYWxFZGl0b3JcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvSXRlbXM6IGFueTtcbiAgICBwdWJsaWMgb25EZWxldGVDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVVcENsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uTW92ZURvd25DbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFkZENsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uQ2xlYXJDbGljazogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbkNsZWFyQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlQWxsKCk7IH07XG4gICAgICAgIHNlbGYub25BZGRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5BZGRJdGVtKCk7IH07XG4gICAgICAgIHNlbGYub25Nb3ZlVXBDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYubW92ZVVwKGl0ZW0pOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZURvd25DbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYubW92ZURvd24oaXRlbSk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHZhciBsZW4gPSB2YWx1ZSA/IHZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuaXRlbXNcIilbXCJmb3JtYXRcIl0obGVuKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvcnJlY3RlZFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW107XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIEFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRoaXMuY3JlYXRlTmV3RWRpdG9ySXRlbSgpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG1vdmVVcChpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMSkgcmV0dXJuO1xuICAgICAgICBhcnJbaW5kZXhdID0gYXJyW2luZGV4IC0gMV07XG4gICAgICAgIGFycltpbmRleCAtIDFdID0gaXRlbTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlRG93bihpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBhcnIubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgICAgICBhcnJbaW5kZXhdID0gYXJyW2luZGV4ICsgMV07XG4gICAgICAgIGFycltpbmRleCArIDFdID0gaXRlbTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuZ2V0SXRlbXNGcm9tVmFsdWUoKSk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBnZXRJdGVtc0Zyb21WYWx1ZSgpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jcmVhdGVFZGl0b3JJdGVtKHZhbHVlW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciBpbnRlcm5hbEl0ZW1zID0gdGhpcy5rb0l0ZW1zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW50ZXJuYWxJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShpbnRlcm5hbEl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUoaXRlbXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyB0aHJvdyBcIk92ZXJyaWRlICdjcmVhdGVOZXdFZGl0b3JJdGVtJyBtZXRob2RcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7ICByZXR1cm4gZWRpdG9ySXRlbTsgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICBwdWJsaWMgb2JqZWN0OiBhbnk7XG4gICAgcHVibGljIHRpdGxlOiBhbnk7XG4gICAgcHVibGljIG9uQXBwbHlDbGljazogYW55O1xuICAgIHB1YmxpYyBvblJlc2V0Q2xpY2s6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm9uQXBwbHlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5hcHBseSgpOyB9O1xuICAgICAgICBzZWxmLm9uUmVzZXRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5yZXNldCgpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VGl0bGUodmFsdWU6IHN0cmluZykgeyB0aGlzLnRpdGxlKHZhbHVlKTsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7IH1cbiAgICBwcml2YXRlIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IHRoaXMub2JqZWN0ID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuICAgIHByaXZhdGUgYXBwbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5vbkJlZm9yZUFwcGx5KCk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRleHRcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgZ2V0VmFsdWVUZXh0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh0aGlzLmtvVmFsdWUoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImh0bWxcIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImh0bWxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlIdG1sRWRpdG9yKCk7IH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwiZXhwb3J0IHZhciBlZGl0b3JMb2NhbGl6YXRpb24gPSB7XG4gICAgY3VycmVudExvY2FsZTogXCJcIixcbiAgICBsb2NhbGVzOiB7fSxcbiAgICBnZXRTdHJpbmc6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAoIWxvY2FsZSkgbG9jYWxlID0gdGhpcy5jdXJyZW50TG9jYWxlO1xuICAgICAgICB2YXIgbG9jID0gbG9jYWxlID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV0gOiBkZWZhdWx0U3RyaW5ncztcbiAgICAgICAgaWYgKCFsb2MpIGxvYyA9IGRlZmF1bHRTdHJpbmdzO1xuICAgICAgICB2YXIgcGF0aCA9IHN0ck5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG9iaiA9IGxvYztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgIGlmIChsb2MgPT09IGRlZmF1bHRTdHJpbmdzKSByZXR1cm4gcGF0aFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoc3RyTmFtZSwgXCJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHlOYW1lOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XG4gICAgICAgIGlmIChvYmpbXCJuYW1lXCJdKSByZXR1cm4gb2JqW1wibmFtZVwiXTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5VGl0bGU6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldFByb3BlcnR5KHN0ck5hbWUsIGxvY2FsKTtcbiAgICAgICAgaWYgKG9ialtcInRpdGxlXCJdKSByZXR1cm4gb2JqW1widGl0bGVcIl07XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH0sXG4gICAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIChzdHJOYW1lOiBzdHJpbmcsIGxvY2FsOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldFN0cmluZyhcInAuXCIgKyBzdHJOYW1lLCBsb2NhbCk7XG4gICAgICAgIGlmIChvYmogIT09IHN0ck5hbWUpIHJldHVybiBvYmo7XG4gICAgICAgIHZhciBwb3MgPSBzdHJOYW1lLmluZGV4T2YoJ18nKTtcbiAgICAgICAgaWYgKHBvcyA8IC0xKSByZXR1cm4gb2JqO1xuICAgICAgICBzdHJOYW1lID0gc3RyTmFtZS5zdWJzdHIocG9zICsgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhcInAuXCIgKyBzdHJOYW1lLCBsb2NhbCk7XG4gICAgfSxcbiAgICBnZXRMb2NhbGVzOiBmdW5jdGlvbiAoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgcmVzLnB1c2goXCJcIik7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxvY2FsZXMpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59O1xuXG5leHBvcnQgdmFyIGRlZmF1bHRTdHJpbmdzID0ge1xuICAgIC8vc3VydmV5IHRlbXBsYXRlc1xuICAgIHN1cnZleToge1xuICAgICAgICBkcm9wUXVlc3Rpb246IFwiUGxlYXNlIGRyb3AgYSBxdWVzdGlvbiBoZXJlLlwiLFxuICAgICAgICBjb3B5OiBcIkNvcHlcIixcbiAgICAgICAgYWRkVG9Ub29sYm94OiBcIkFkZCB0byB0b29sYm94XCJcbiAgICB9LFxuICAgIC8vcXVlc3Rpb25UeXBlc1xuICAgIHF0OiB7XG4gICAgICAgIGNoZWNrYm94OiBcIkNoZWNrYm94IChNQSlcIixcbiAgICAgICAgY29tbWVudDogXCJDb21tZW50IChPRSlcIixcbiAgICAgICAgZHJvcGRvd246IFwiRHJvcGRvd24gKFNBKVwiLFxuICAgICAgICBmaWxlOiBcIkZpbGVcIixcbiAgICAgICAgaHRtbDogXCJIVE1MXCIsXG4gICAgICAgIG1hdHJpeDogXCJBdHRyaWJ1dGUgKFNBKVwiLFxuICAgICAgICBtYXRyaXhkcm9wZG93bjogXCJBdHRyaWJ1dGUgKE1BKVwiLFxuICAgICAgICBtYXRyaXhkeW5hbWljOiBcIkF0dHJpYnV0ZSAoZHluYW1pYylcIixcbiAgICAgICAgbXVsdGlwbGV0ZXh0OiBcIk11bHRpcGxlIFRleHQgKE9FKVwiLFxuICAgICAgICByYWRpb2dyb3VwOiBcIlJhZGlvIChTQSlcIixcbiAgICAgICAgcmF0aW5nOiBcIlJhdGluZyAoU0EpXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dCAoT0UpXCJcbiAgICB9LFxuICAgIC8vU3RyaW5ncyBpbiBFZGl0b3JcbiAgICBlZDoge1xuICAgICAgICBuZXdQYWdlTmFtZTogXCJwYWdlXCIsXG4gICAgICAgIG5ld1F1ZXN0aW9uTmFtZTogXCJxdWVzdGlvblwiLFxuICAgICAgICB0ZXN0U3VydmV5OiBcIlRlc3RcIixcbiAgICAgICAgdGVzdFN1cnZleUFnYWluOiBcIlJ1biB0ZXN0IGFnYWluXCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlXaWR0aDogXCJTdXJ2ZXkgd2lkdGg6IFwiLFxuICAgICAgICBlbWJlZFN1cnZleTogXCJFbWJlZCBzdXJ2ZXlcIixcbiAgICAgICAgc2F2ZVN1cnZleTogXCJTYXZlXCIsXG4gICAgICAgIGRlc2lnbmVyOiBcIkRlc2lnblwiLFxuICAgICAgICBqc29uRWRpdG9yOiBcIkpTT04gZWRpdG9yXCIsXG4gICAgICAgIHVuZG86IFwiVW5kb1wiLFxuICAgICAgICByZWRvOiBcIlJlZG9cIixcbiAgICAgICAgb3B0aW9uczogXCJPcHRpb25zXCIsXG4gICAgICAgIGdlbmVyYXRlVmFsaWRKU09OOiBcIlZhbGlkIEpTT05cIixcbiAgICAgICAgZ2VuZXJhdGVSZWFkYWJsZUpTT046IFwiUmVhZGFibGUgSlNPTlwiLFxuICAgICAgICB0b29sYm94OiBcIlRvb2xib3hcIixcbiAgICAgICAgZGVsU2VsT2JqZWN0OiBcIkRlbGV0ZSBzZWxlY3RlZCBvYmplY3RcIixcbiAgICAgICAgY29ycmVjdEpTT046IFwiUGxlYXNlIGNvcnJlY3QgSlNPTi5cIixcbiAgICAgICAgc3VydmV5UmVzdWx0czogXCJTdXJ2ZXkgcmVzdWx0OiBcIlxuICAgIH0sXG4gICAgLy9Qcm9wZXJ0eSBFZGl0b3JzXG4gICAgcGU6IHtcbiAgICAgICAgYXBwbHk6IFwiQXBwbHlcIixcbiAgICAgICAgcmVzZXQ6IFwiUmVzZXRcIixcbiAgICAgICAgY2xvc2U6IFwiQ2xvc2VcIixcbiAgICAgICAgZGVsZXRlOiBcIkRlbGV0ZVwiLFxuICAgICAgICBhZGROZXc6IFwiQWRkIG5ld1wiLFxuICAgICAgICByZW1vdmVBbGw6IFwiUmVtb3ZlIGFsbFwiLFxuICAgICAgICBlZGl0OiBcIkVkaXRcIixcbiAgICAgICAgZW1wdHk6IFwiPGVtcHR5PlwiLFxuICAgICAgICB0ZXN0U2VydmljZTogXCJUZXN0IHRoZSBzZXJ2aWNlXCIsXG4gICAgICAgIHZhbHVlOiBcIlZhbHVlXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dFwiLFxuICAgICAgICByZXF1aXJlZDogXCJSZXF1aXJlZD9cIixcbiAgICAgICAgaGFzT3RoZXI6IFwiSGFzIG90aGVyIGl0ZW1cIixcbiAgICAgICAgbmFtZTogXCJOYW1lXCIsXG4gICAgICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgICAgIGNlbGxUeXBlOiBcIlR5cGVcIixcbiAgICAgICAgY29sQ291bnQ6IFwiQ291bnRcIixcbiAgICAgICAgZWRpdFByb3BlcnR5OiBcIkVkaXQgcHJvcGVydHkgJ3swfSdcIixcbiAgICAgICAgaXRlbXM6IFwiW2l0ZW1zOnswfV1cIixcbiAgICAgICAgZW50ZXJOZXdWYWx1ZTogXCJQbGVhc2UgZW50ZXIgdGhlIHZhbHVlLlwiLFxuICAgICAgICBub3F1ZXN0aW9uczogXCJObyBxdWVzdGlvbiBpbiB0aGUgc3VydmV5LlwiLFxuICAgICAgICBjcmVhdGV0cmlnZ2VyOiBcIlBsZWFzZSBjcmVhdGUgYSB0cmlnZ2VyXCIsXG4gICAgICAgIHRyaWdnZXJPbjogXCJPbiBcIixcbiAgICAgICAgdHJpZ2dlck1ha2VQYWdlc1Zpc2libGU6IFwiTWFrZSBwYWdlcyB2aXNpYmxlOlwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGU6IFwiTWFrZSBxdWVzdGlvbnMgdmlzaWJsZTpcIixcbiAgICAgICAgdHJpZ2dlckNvbXBsZXRlVGV4dDogXCJDb21wbGV0ZSB0aGUgc3VydmV5IGlmIHN1Y2NlZWRcIixcbiAgICAgICAgdHJpZ2dlck5vdFNldDogXCJUaGUgdHJpZ2dlciBpcyBub3Qgc2V0XCIsXG4gICAgICAgIHRyaWdnZXJSdW5JZjogXCJSdW4gaWZcIixcbiAgICAgICAgdHJpZ2dlclNldFRvTmFtZTogXCJDaGFuZ2UgdmFsdWUgb2Y6IFwiLFxuICAgICAgICB0cmlnZ2VyU2V0VmFsdWU6IFwidG86IFwiLFxuICAgICAgICB0cmlnZ2VySXNWYXJpYWJsZTogXCJEbyBub3QgcHV0IHRoZSB2YXJpYWJsZSBpbnRvIHRoZSBzdXJ2ZXkgcmVzdWx0XCIsXG4gICAgICAgIHZlcmJDaGFuZ2VUeXBlOiBcIkNoYW5nZSB0eXBlIFwiLFxuICAgICAgICB2ZXJiQ2hhbmdlUGFnZTogXCJDaGFuZ2UgcGFnZSBcIlxuICAgIH0sXG4gICAgLy9PcGVyYXRvcnNcbiAgICBvcDoge1xuICAgICAgICBlbXB0eTogXCJpcyBlbXB0eVwiLFxuICAgICAgICBub3RlbXB0eTogXCJpcyBub3QgZW1wdHlcIixcbiAgICAgICAgZXF1YWw6IFwiZXF1YWxzXCIsXG4gICAgICAgIG5vdGVxdWFsOiBcIm5vdCBlcXVhbFwiLFxuICAgICAgICBjb250YWluczogXCJjb250YWluc1wiLFxuICAgICAgICBub3Rjb250YWluczogXCJub3QgY29udGFpblwiLFxuICAgICAgICBncmVhdGVyOiBcImdyZWF0ZXJcIixcbiAgICAgICAgbGVzczogXCJsZXNzXCIsXG4gICAgICAgIGdyZWF0ZXJvcmVxdWFsOiBcImdyZWF0ZXIgb3IgZXF1YWxzXCIsXG4gICAgICAgIGxlc3NvcmVxdWFsOiBcIkxlc3Mgb3IgRXF1YWxzXCJcbiAgICB9LFxuICAgIC8vRW1iZWQgd2luZG93XG4gICAgZXc6IHtcbiAgICAgICAga25vY2tvdXQ6IFwiVXNlIEtub2Nrb3V0XCIsXG4gICAgICAgIHJlYWN0OiBcIlVzZSBSZWFjdFwiLFxuICAgICAgICBib290c3RyYXA6IFwiV2l0aCBib290c3RyYXBcIixcbiAgICAgICAgc3RhbmRhcmQ6IFwiV2l0aG91dCBib290c3RyYXBcIixcbiAgICAgICAgc2hvd09uUGFnZTogXCJTaG93IHN1cnZleSBvbiBhIHBhZ2VcIixcbiAgICAgICAgc2hvd0luV2luZG93OiBcIlNob3cgc3VydmV5IGluIGEgd2luZG93XCIsXG4gICAgICAgIGxvYWRGcm9tU2VydmVyOiBcIkxvYWQgc3VydmV5IGZyb20gYSBzZXJ2ZXJcIixcbiAgICAgICAgdGl0bGVTY3JpcHQ6IFwiU2NyaXB0c1wiLFxuICAgICAgICB0aXRsZUh0bWw6IFwiSFRNTFwiLFxuICAgICAgICB0aXRsZUphdmFTY3JpcHQ6IFwiSmF2YVNjcmlwdFwiXG4gICAgfSxcbiAgICAvL1Byb3BlcnRpZXNcbiAgICBwOiB7XG4gICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICB0aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkxlYXZlIGl0IGVtcHR5LCBpZiBpdCBpcyB0aGUgc2FtZSBhcyAnTmFtZSdcIiB9LFxuICAgICAgICBzdXJ2ZXlfdGl0bGU6IHsgbmFtZTogXCJ0aXRsZVwiLCB0aXRsZTogXCJJdCB3aWxsIGJlIHNob3duIG9uIGV2ZXJ5IHBhZ2VcIiB9LFxuICAgICAgICBwYWdlX3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiUGFnZSB0aXRsZVwiIH1cbiAgICB9XG59O1xuXG5lZGl0b3JMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZGVmYXVsdFN0cmluZ3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yTG9jYWxpemF0aW9uLnRzIiwiaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGVudW0gT2JqVHlwZSB7IFVua25vd24sIFN1cnZleSwgUGFnZSwgUXVlc3Rpb24gfVxuZXhwb3J0IGNsYXNzIFN1cnZleUhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UGFnZU5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UXVlc3Rpb25OYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdOYW1lKG9ianM6IEFycmF5PGFueT4sIGJhc2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaGFzaCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbb2Jqc1tpXS5uYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bSA9IDE7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWhhc2hbYmFzZU5hbWUgKyBudW0udG9TdHJpbmcoKV0pIGJyZWFrO1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0VHlwZShvYmo6IGFueSk6IE9ialR5cGUge1xuICAgICAgICBpZiAoIW9iaiB8fCAhb2JqW1wiZ2V0VHlwZVwiXSkgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKCkgPT0gXCJwYWdlXCIpIHJldHVybiBPYmpUeXBlLlBhZ2U7XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwic3VydmV5XCIpIHJldHVybiBPYmpUeXBlLlN1cnZleTtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBPYmpUeXBlLlF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gT2JqVHlwZS5Vbmtub3duO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdE5hbWUob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgIT0gT2JqVHlwZS5QYWdlKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGRhdGEgPSA8U3VydmV5LlN1cnZleT4oPFN1cnZleS5QYWdlPm9iaikuZGF0YTtcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5wYWdlcy5pbmRleE9mKDxTdXJ2ZXkuUGFnZT5vYmopO1xuICAgICAgICByZXR1cm4gXCJbUGFnZSBcIiArIChpbmRleCArIDEpICsgXCJdXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJpbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdEVkaXRvcjogU3VydmV5T2JqZWN0RWRpdG9yO1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVZhbGlkYXRvcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIHZhbGlkYXRvckNsYXNzZXM6IEFycmF5PFN1cnZleS5Kc29uTWV0YWRhdGFDbGFzcz4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yID0gbmV3IFN1cnZleU9iamVjdEVkaXRvcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChvcHRpb25zLnByb3BlcnR5LCBvcHRpb25zLm9iamVjdCwgb3B0aW9ucy5uZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNlbGVjdGVkT2JqZWN0RWRpdG9yLnNlbGVjdGVkT2JqZWN0ID0gbmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnZhbGlkYXRvciA6IG51bGw7IH0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRvckNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzdXJ2ZXl2YWxpZGF0b3JcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlVmFsaWRhdG9ycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29JdGVtcy5yZW1vdmUoc2VsZi5rb1NlbGVjdGVkKCkpOyB9O1xuICAgICAgICB0aGlzLm9uQWRkQ2xpY2sgPSBmdW5jdGlvbiAodmFsaWRhdG9yVHlwZSkgeyBzZWxmLmFkZEl0ZW0odmFsaWRhdG9yVHlwZSk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ2YWxpZGF0b3JzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZCh0aGlzLmtvSXRlbXMoKS5sZW5ndGggPiAwID8gdGhpcy5rb0l0ZW1zKClbMF0gOiBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGpzb25PYmogPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKTtcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGl0ZW0uZ2V0VHlwZSgpKTtcbiAgICAgICAganNvbk9iai50b09iamVjdChpdGVtLCB2YWxpZGF0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSh2YWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbSA9IDxTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsaWRhdG9yO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0odmFsaWRhdG9yVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBuZXdWYWxpZGF0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtKFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHZhbGlkYXRvclR5cGUpKTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zLnB1c2gobmV3VmFsaWRhdG9yKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG5ld1ZhbGlkYXRvcik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXZhaWxhYmxlVmFsaWRhdG9ycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsaWRhdG9yQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWxpZGF0b3JDbGFzc2VzW2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSwgb2JqOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMua29TZWxlY3RlZCgpID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKCkudmFsaWRhdG9yW3Byb3BlcnR5Lm5hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtIHtcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWxpZGF0b3I6IFN1cnZleS5TdXJ2ZXlWYWxpZGF0b3IpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdmFsaWRhdG9yLmdldFR5cGUoKTtcbiAgICB9XG59XG5cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidmFsaWRhdG9yc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJpbXBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi9vYmplY3RQcm9wZXJ0eVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdEVkaXRvciB7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdFZhbHVlOiBhbnk7XG4gICAgcHVibGljIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMga29Qcm9wZXJ0aWVzOiBhbnk7XG4gICAgcHVibGljIGtvQWN0aXZlUHJvcGVydHk6IGFueTtcbiAgICBwdWJsaWMga29IYXNPYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyA9IHByb3BlcnR5RWRpdG9yT3B0aW9ucztcbiAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkT2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmtvSGFzT2JqZWN0KHZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlFZGl0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5rb1Byb3BlcnRpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlQWN0aXZlUHJvcGVydHkocHJvcGVydHk6IFN1cnZleU9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHB1YmxpYyBPYmplY3RDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNPYmplY3QoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZE9iamVjdCB8fCAhdGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmtvUHJvcGVydGllcyhbXSk7XG4gICAgICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpKTtcbiAgICAgICAgcHJvcGVydGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID09IGIubmFtZSkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvYmplY3RQcm9wZXJ0aWVzID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb3BFdmVudCA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNlbGYub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5maXJlKHRoaXMsIHsgcHJvcGVydHk6IHByb3BlcnR5LnByb3BlcnR5LCBvYmplY3Q6IHByb3BlcnR5Lm9iamVjdCwgbmV3VmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5TaG93UHJvcGVydHkocHJvcGVydGllc1tpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIG9iamVjdFByb3BlcnR5ID0gbmV3IFN1cnZleU9iamVjdFByb3BlcnR5KHByb3BlcnRpZXNbaV0sIHByb3BFdmVudCwgdGhpcy5wcm9wZXJ0eUVkaXRvck9wdGlvbnMpO1xuICAgICAgICAgICAgdmFyIGxvY05hbWUgPSB0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUoKSArICdfJyArIHByb3BlcnRpZXNbaV0ubmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFByb3BlcnR5TmFtZShsb2NOYW1lKTtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRQcm9wZXJ0eVRpdGxlKGxvY05hbWUpO1xuICAgICAgICAgICAgaWYgKCF0aXRsZSkgdGl0bGUgPSBvYmplY3RQcm9wZXJ0eS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnR5LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBvYmplY3RQcm9wZXJ0aWVzLnB1c2gob2JqZWN0UHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKG9iamVjdFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkodGhpcy5nZXRQcm9wZXJ0eUVkaXRvcihcIm5hbWVcIikpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY2FuU2hvd1Byb3BlcnR5KHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3F1ZXN0aW9ucycgfHwgbmFtZSA9PSAncGFnZXMnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvcGVydGllc09iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmtvUHJvcGVydGllcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXNbaV0ub2JqZWN0ID0gdGhpcy5zZWxlY3RlZE9iamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JqZWN0RWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSB7XG4gICAgcHJpdmF0ZSBvYmplY3RWYWx1ZTogYW55O1xuICAgIHByaXZhdGUgaXNWYWx1ZVVwZGF0aW5nOiBib29sZWFuO1xuICAgIHByaXZhdGUgb25Qcm9wZXJ0eUNoYW5nZWQ6IFN1cnZleU9uUHJvcGVydHlDaGFuZ2VkQ2FsbGJhY2s7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuICAgIHB1YmxpYyBrb1RleHQ6IGFueTtcbiAgICBwdWJsaWMgbW9kYWxOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGFsTmFtZVRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyBrb0lzRGVmYXVsdDogYW55O1xuICAgIHB1YmxpYyBlZGl0b3I6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZTtcbiAgICBwdWJsaWMgZWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBiYXNlRWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IG51bGwsIHByb3BlcnR5RWRpdG9yT3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkID0gb25Qcm9wZXJ0eUNoYW5nZWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHByb3BlcnR5LnR5cGU7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMuZWRpdG9yVHlwZSwgb25JdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMgPSBwcm9wZXJ0eUVkaXRvck9wdGlvbnM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHRoaXMuZWRpdG9yLmVkaXRvclR5cGU7XG4gICAgICAgIHRoaXMubW9kYWxOYW1lID0gXCJtb2RlbEVkaXRvclwiICsgdGhpcy5lZGl0b3JUeXBlICsgdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm1vZGFsTmFtZVRhcmdldCA9IFwiI1wiICsgdGhpcy5tb2RhbE5hbWU7XG4gICAgICAgIHRoaXMua29WYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYub25rb1ZhbHVlQ2hhbmdlZChuZXdWYWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYuZ2V0VmFsdWVUZXh0KHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgICAgIHRoaXMua29Jc0RlZmF1bHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHNlbGYua29WYWx1ZSgpKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLm9iamVjdFZhbHVlOyB9XG4gICAgcHVibGljIHNldCBvYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9iamVjdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRPYmplY3QodGhpcy5vYmplY3QpO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaXRsZShlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuZWRpdFByb3BlcnR5XCIpW1wiZm9ybWF0XCJdKHRoaXMucHJvcGVydHkubmFtZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEodGhpcy5rb1ZhbHVlKCkpO1xuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQXBwbHlpbmdOZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgb25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIG9ua29WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBcHBseWluZ05ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckRhdGEobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9iamVjdFt0aGlzLm5hbWVdID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICE9IG51bGwgJiYgIXRoaXMuaXNWYWx1ZVVwZGF0aW5nKSB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMubmFtZV07XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZVRleHQodmFsdWUpOyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIml0ZW12YWx1ZXNcIjsgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMua29JdGVtcygpW2ldO1xuICAgICAgICAgICAgaXRlbS5rb0hhc0Vycm9yKCFpdGVtLmtvVmFsdWUoKSk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgaXRlbS5rb0hhc0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgcmV0dXJuIHsga29WYWx1ZToga28ub2JzZXJ2YWJsZSgpLCBrb1RleHQ6IGtvLm9ic2VydmFibGUoKSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbTtcbiAgICAgICAgdmFyIGl0ZW1UZXh0ID0gbnVsbDtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGl0ZW1WYWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW0udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBrb1ZhbHVlOiBrby5vYnNlcnZhYmxlKGl0ZW1WYWx1ZSksIGtvVGV4dDoga28ub2JzZXJ2YWJsZShpdGVtVGV4dCksIGtvSGFzRXJyb3I6IGtvLm9ic2VydmFibGUoZmFsc2UpIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBhbHdheVNhdmVUZXh0SW5Qcm9wZXJ0eUVkaXRvcnMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycztcbiAgICAgICAgdmFyIHRleHQgPSBlZGl0b3JJdGVtLmtvVGV4dCgpO1xuICAgICAgICBpZiAoIWFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyAmJiBlZGl0b3JJdGVtLmtvVGV4dCgpID09IGVkaXRvckl0ZW0ua29WYWx1ZSgpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZWRpdG9ySXRlbS5rb1ZhbHVlKCksIHRleHQ6IHRleHQgfTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcIml0ZW12YWx1ZXNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlEcm9wZG93bkNvbHVtbnNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rb0l0ZW1zKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB0aGlzLmtvSXRlbXMoKVtpXS5oYXNFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKG5ldyBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4oXCJcIiwgdGhpcy5vcHRpb25zKSk7IH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0oaXRlbSwgdGhpcy5vcHRpb25zKTsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVJdGVtRnJvbUVkaXRvckl0ZW0oZWRpdG9ySXRlbTogYW55KSB7XG4gICAgICAgIHZhciBjb2x1bUl0ZW0gPSA8U3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtPmVkaXRvckl0ZW07XG4gICAgICAgIGNvbHVtSXRlbS5hcHBseSgpO1xuICAgICAgICByZXR1cm4gY29sdW1JdGVtLmNvbHVtbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0l0ZW0ge1xuICAgIHByaXZhdGUga29DaG9pY2VzOiBhbnk7XG4gICAgcHVibGljIGNob2ljZXNFZGl0b3I6IFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcjtcbiAgICBrb05hbWU6IGFueTsga29UaXRsZTogYW55OyBrb0NlbGxUeXBlOiBhbnk7IGtvU2hvd0Nob2ljZXM6IGFueTtcbiAgICBrb0hhc0Vycm9yOiBhbnk7IGtvQ29sQ291bnQ6IGFueTsga29Jc1JlcXVpcmVkOiBhbnk7IGtvSGFzT3RoZXI6IGFueTtcbiAgICBrb0hhc0Nob2ljZXM6IGFueTsga29IYXNDb2xDb3VudDogYW55O1xuICAgIHB1YmxpYyBvblNob3dDaG9pY2VzQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgY2VsbFR5cGVDaG9pY2VzOiBBcnJheTxhbnk+O1xuICAgIHB1YmxpYyBjb2xDb3VudENob2ljZXM6IEFycmF5PGFueT47XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uLCBwdWJsaWMgb3B0aW9ucyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jZWxsVHlwZUNob2ljZXMgPSB0aGlzLmdldFByb3BlcnR5Q2hvaWNlcyhcImNlbGxUeXBlXCIpO1xuICAgICAgICB0aGlzLmNvbENvdW50Q2hvaWNlcyA9IHRoaXMuZ2V0UHJvcGVydHlDaG9pY2VzKFwiY29sQ291bnRcIik7XG4gICAgICAgIHRoaXMua29OYW1lID0ga28ub2JzZXJ2YWJsZShjb2x1bW4ubmFtZSk7XG4gICAgICAgIHRoaXMua29DZWxsVHlwZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLmNlbGxUeXBlKTtcbiAgICAgICAgdGhpcy5rb0NvbENvdW50ID0ga28ub2JzZXJ2YWJsZShjb2x1bW4uY29sQ291bnQpO1xuICAgICAgICB0aGlzLmtvSXNSZXF1aXJlZCA9IGtvLm9ic2VydmFibGUoY29sdW1uLmlzUmVxdWlyZWQgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICB0aGlzLmtvSGFzT3RoZXIgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5oYXNPdGhlciA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMua29UaXRsZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLm5hbWUgPT09IGNvbHVtbi50aXRsZSA/IFwiXCIgOiBjb2x1bW4udGl0bGUpO1xuICAgICAgICB0aGlzLmtvU2hvd0Nob2ljZXMgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0Nob2ljZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoY29sdW1uLmNob2ljZXMpO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNob2ljZXNFZGl0b3IgPSBuZXcgU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yKCk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0VkaXRvci5vYmplY3QgPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5jaG9pY2VzRWRpdG9yLnZhbHVlID0gdGhpcy5rb0Nob2ljZXMoKTtcbiAgICAgICAgdGhpcy5jaG9pY2VzRWRpdG9yLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uU2hvd0Nob2ljZXNDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb1Nob3dDaG9pY2VzKCFzZWxmLmtvU2hvd0Nob2ljZXMoKSk7IH1cbiAgICAgICAgdGhpcy5rb0hhc0Nob2ljZXMgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvQ2VsbFR5cGUoKSA9PSBcImRyb3Bkb3duXCIgfHwgc2VsZi5rb0NlbGxUeXBlKCkgPT0gXCJjaGVja2JveFwiIHx8IHNlbGYua29DZWxsVHlwZSgpID09IFwicmFkaW9ncm91cFwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0hhc0NvbENvdW50ID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb0NlbGxUeXBlKCkgPT0gXCJjaGVja2JveFwiIHx8IHNlbGYua29DZWxsVHlwZSgpID09IFwicmFkaW9ncm91cFwiOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IoIXRoaXMua29OYW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5rb0hhc0Vycm9yKCkgfHwgdGhpcy5jaG9pY2VzRWRpdG9yLmhhc0Vycm9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4ubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNlbGxUeXBlID0gdGhpcy5rb0NlbGxUeXBlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNvbENvdW50ID0gdGhpcy5rb0NvbENvdW50KCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmlzUmVxdWlyZWQgPSB0aGlzLmtvSXNSZXF1aXJlZCgpO1xuICAgICAgICB0aGlzLmNvbHVtbi5oYXNPdGhlciA9IHRoaXMua29IYXNPdGhlcigpO1xuXG4gICAgICAgIHRoaXMuY2hvaWNlc0VkaXRvci5vbkFwcGx5Q2xpY2soKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uY2hvaWNlcyA9IHRoaXMuY2hvaWNlc0VkaXRvci52YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eUNob2ljZXMocHJvcGV0eU5hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMoXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydGllc1tpXS5uYW1lID09IHByb3BldHlOYW1lKSByZXR1cm4gcHJvcGVydGllc1tpXS5jaG9pY2VzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcIm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zRWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3Ige1xuICAgIGtvVXJsOiBhbnk7IGtvUGF0aDogYW55OyBrb1ZhbHVlTmFtZTogYW55OyBrb1RpdGxlTmFtZTogYW55O1xuICAgIHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25Ecm9wZG93bjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvVXJsID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvUGF0aCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdXJ2ZXkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvVXJsLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwudXJsID0gbmV3VmFsdWU7IHNlbGYucnVuKCk7IH0pO1xuICAgICAgICB0aGlzLmtvUGF0aC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnBhdGggPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29WYWx1ZU5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC52YWx1ZU5hbWUgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC50aXRsZU5hbWUgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJyZXN0ZnVsbFwiOyB9XG4gICAgcHVibGljIGdldCByZXN0ZnVsbFZhbHVlKCkgeyByZXR1cm4gPFN1cnZleS5DaG9pY2VzUmVzdGZ1bGw+dGhpcy52YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnVybCkgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5lbXB0eVwiKTtcbiAgICAgICAgdmFyIHN0ciA9IHZhbHVlLnVybDtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMucmVzdGZ1bGxWYWx1ZTtcbiAgICAgICAgdGhpcy5rb1VybCh2YWwgPyB2YWwudXJsIDogXCJcIik7XG4gICAgICAgIHRoaXMua29QYXRoKHZhbCA/IHZhbC5wYXRoIDogXCJcIik7XG4gICAgICAgIHRoaXMua29WYWx1ZU5hbWUodmFsID8gdmFsLnZhbHVlTmFtZSA6IFwiXCIpO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lKHZhbCA/IHZhbC50aXRsZU5hbWUgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKFwicmVzdGZ1bGxTdXJ2ZXlcIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB2YXIgdmFsID0gbmV3IFN1cnZleS5DaG9pY2VzUmVzdGZ1bGwoKTtcbiAgICAgICAgdmFsLnVybCA9IHRoaXMua29VcmwoKTtcbiAgICAgICAgdmFsLnBhdGggPSB0aGlzLmtvUGF0aCgpO1xuICAgICAgICB2YWwudmFsdWVOYW1lID0gdGhpcy5rb1ZhbHVlTmFtZSgpO1xuICAgICAgICB2YWwudGl0bGVOYW1lID0gdGhpcy5rb1RpdGxlTmFtZSgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIHJ1bigpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucnVuKCk7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlU3VydmV5KCkge1xuICAgICAgICB0aGlzLnN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnNob3dOYXZpZ2F0aW9uQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93UXVlc3Rpb25OdW1iZXJzID0gXCJvZmZcIjtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5hZGROZXdQYWdlKFwicGFnZTFcIik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSA8U3VydmV5LlF1ZXN0aW9uRHJvcGRvd24+cGFnZS5hZGROZXdRdWVzdGlvbihcImRyb3Bkb3duXCIsIFwicTFcIik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24udGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudGVzdFNlcnZpY2VcIilcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jaG9pY2VzID0gW107XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcihcInJlc3RmdWxsU3VydmV5XCIpO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwicmVzdGZ1bGxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29QYWdlczogYW55O1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVRyaWdnZXJzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB0cmlnZ2VyQ2xhc3NlczogQXJyYXk8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICh0cmlnZ2VyVHlwZSkgeyBzZWxmLmFkZEl0ZW0odHJpZ2dlclR5cGUpOyB9O1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dHJpZ2dlclwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUcmlnZ2VycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRyaWdnZXJzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKHRoaXMuZ2V0TmFtZXMoKDxTdXJ2ZXkuU3VydmV5PnRoaXMub2JqZWN0KS5wYWdlcykpO1xuICAgICAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkuZ2V0QWxsUXVlc3Rpb25zKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEl0ZW0odHJpZ2dlclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRyaWdnZXJUeXBlKTtcbiAgICAgICAgdmFyIHRyaWdnZXJJdGVtID0gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRyaWdnZXJJdGVtKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRyaWdnZXJJdGVtKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoaXRlbS5nZXRUeXBlKCkpO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGl0ZW0sIHRyaWdnZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPnRyaWdnZXIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgZWRpdG9yVHJpZ2dlciA9IDxTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXI+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGVkaXRvclRyaWdnZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVRyaWdnZXJzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmlnZ2VyQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy50cmlnZ2VyQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5hbWVzKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChpdGVtW1wibmFtZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWVzO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcik6IFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IG51bGw7XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInZpc2libGV0cmlnZ2VyXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5VmlzaWJsZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT50cmlnZ2VyLCB0aGlzLmtvUGFnZXMsIHRoaXMua29RdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInNldHZhbHVldHJpZ2dlclwiKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT50cmlnZ2VyLCB0aGlzLmtvUXVlc3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRyaWdnZXJJdGVtKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyaWdnZXJJdGVtO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIHByaXZhdGUgb3BlcmF0b3JzID0gW1wiZW1wdHlcIiwgXCJub3RlbXB0eVwiLCBcImVxdWFsXCIsIFwibm90ZXF1YWxcIiwgXCJjb250YWluc1wiLCBcIm5vdGNvbnRhaW5zXCIsIFwiZ3JlYXRlclwiLCBcImxlc3NcIiwgXCJncmVhdGVyb3JlcXVhbFwiLCBcImxlc3NvcmVxdWFsXCJdO1xuICAgIHByaXZhdGUgdHJpZ2dlclR5cGU6IHN0cmluZztcbiAgICBhdmFpbGFibGVPcGVyYXRvcnMgPSBbXTtcbiAgICBrb05hbWU6IGFueTsga29PcGVyYXRvcjogYW55OyBrb1ZhbHVlOiBhbnk7IGtvVHlwZTogYW55O1xuICAgIGtvVGV4dDogYW55OyBrb0lzVmFsaWQ6IGFueTsga29SZXF1aXJlVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcikge1xuICAgICAgICB0aGlzLmNyZWF0ZU9wZXJhdG9ycygpO1xuICAgICAgICB0aGlzLnRyaWdnZXJUeXBlID0gdHJpZ2dlci5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMua29UeXBlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIubmFtZSk7XG4gICAgICAgIHRoaXMua29PcGVyYXRvciA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5vcGVyYXRvcik7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci52YWx1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1JlcXVpcmVWYWx1ZSA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYua29PcGVyYXRvcigpICE9IFwiZW1wdHlcIiAmJiBzZWxmLmtvT3BlcmF0b3IoKSAhPSBcIm5vdGVtcHR5XCI7IH0pO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgaWYgKHNlbGYua29OYW1lKCkgJiYgKCFzZWxmLmtvUmVxdWlyZVZhbHVlKCkgfHwgc2VsZi5rb1ZhbHVlKCkpKSByZXR1cm4gdHJ1ZTsgcmV0dXJuIGZhbHNlOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHNlbGYua29OYW1lKCk7IHNlbGYua29PcGVyYXRvcigpOyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuZ2V0VGV4dCgpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj5TdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdHJpZ2dlci5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5vcGVyYXRvciA9IHRoaXMua29PcGVyYXRvcigpO1xuICAgICAgICB0cmlnZ2VyLnZhbHVlID0gdGhpcy5rb1ZhbHVlKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZU9wZXJhdG9ycygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm9wZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLnB1c2goeyBuYW1lOiBuYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3AuXCIgKyBuYW1lKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvSXNWYWxpZCgpKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJOb3RTZXRcIik7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlclJ1bklmXCIpICsgXCIgJ1wiICsgdGhpcy5rb05hbWUoKSArIFwiJyBcIiArIHRoaXMuZ2V0T3BlcmF0b3JUZXh0KCkgKyB0aGlzLmdldFZhbHVlVGV4dCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE9wZXJhdG9yVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3AgPSB0aGlzLmtvT3BlcmF0b3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLm5hbWUgPT0gb3ApIHJldHVybiB0aGlzLmF2YWlsYWJsZU9wZXJhdG9yc1tpXS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvUmVxdWlyZVZhbHVlKCkpIHJldHVybiBcIlwiO1xuICAgICAgICByZXR1cm4gXCIgXCIgKyB0aGlzLmtvVmFsdWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBwdWJsaWMgcGFnZXM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XG4gICAgcHVibGljIHF1ZXN0aW9uczogU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlLCBrb1BhZ2VzOiBhbnksIGtvUXVlc3Rpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMucGFnZXMgPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyhlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck1ha2VQYWdlc1Zpc2libGVcIiksIGtvUGFnZXMoKSwgdHJpZ2dlci5wYWdlcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZVwiKSwga29RdWVzdGlvbnMoKSwgdHJpZ2dlci5xdWVzdGlvbnMpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgICAgIHRyaWdnZXIucGFnZXMgPSB0aGlzLnBhZ2VzLmtvQ2hvb3NlbigpO1xuICAgICAgICB0cmlnZ2VyLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLmtvQ2hvb3NlbigpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29zZXRUb05hbWU6IGFueTsga29zZXRWYWx1ZTogYW55OyBrb2lzVmFyaWFibGU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZSwga29RdWVzdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvUXVlc3Rpb25zO1xuICAgICAgICB0aGlzLmtvc2V0VG9OYW1lID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnNldFRvTmFtZSk7XG4gICAgICAgIHRoaXMua29zZXRWYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRWYWx1ZSk7XG4gICAgICAgIHRoaXMua29pc1ZhcmlhYmxlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLmlzVmFyaWFibGUpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgICAgICB0cmlnZ2VyLnNldFRvTmFtZSA9IHRoaXMua29zZXRUb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5zZXRWYWx1ZSA9IHRoaXMua29zZXRWYWx1ZSgpO1xuICAgICAgICB0cmlnZ2VyLmlzVmFyaWFibGUgPSB0aGlzLmtvaXNWYXJpYWJsZSgpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyB7XG4gICAga29PYmplY3RzOiBhbnk7XG4gICAga29DaG9vc2VuOiBhbnk7XG4gICAga29TZWxlY3RlZDogYW55O1xuICAgIGtvQ2hvb3NlblNlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBhbGxPYmplY3RzOiBBcnJheTxzdHJpbmc+LCBjaG9vc2VuT2JqZWN0czogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmtvQ2hvb3NlbiA9IGtvLm9ic2VydmFibGVBcnJheShjaG9vc2VuT2JqZWN0cyk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYWxsT2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGlmIChjaG9vc2VuT2JqZWN0cy5pbmRleE9mKGl0ZW0pIDwgMCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29DaG9vc2VuU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRlbGV0ZUl0ZW0oKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFkZEl0ZW0oKTsgfVxuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb0Nob29zZW5TZWxlY3RlZCgpLCB0aGlzLmtvQ2hvb3NlbiwgdGhpcy5rb09iamVjdHMpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb1NlbGVjdGVkKCksIHRoaXMua29PYmplY3RzLCB0aGlzLmtvQ2hvb3Nlbik7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhbmdlSXRlbXMoaXRlbTogc3RyaW5nLCByZW1vdmVkRnJvbTogYW55LCBhZGRUbzogYW55KSB7XG4gICAgICAgIHJlbW92ZWRGcm9tLnJlbW92ZShpdGVtKTtcbiAgICAgICAgYWRkVG8ucHVzaChpdGVtKTtcbiAgICAgICAgcmVtb3ZlZEZyb20uc29ydCgpO1xuICAgICAgICBhZGRUby5zb3J0KCk7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0cmlnZ2Vyc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsImltcG9ydCB7U3VydmV5SGVscGVyfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gKCkgPT4gdm9pZDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrID0gKHBhZ2U6IFN1cnZleS5QYWdlKSA9PiB2b2lkO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrID0gKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQYWdlc0VkaXRvciB7XG4gICAgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAga29QYWdlczogYW55O1xuICAgIGtvSXNWYWxpZDogYW55O1xuICAgIHNlbGVjdFBhZ2VDbGljazogYW55O1xuICAgIG9uQWRkTmV3UGFnZUNhbGxiYWNrOiBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2s7XG4gICAgb25TZWxlY3RQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjaztcbiAgICBvbkRlbGV0ZVBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgIG9uTW92ZVBhZ2VDYWxsYmFjazogU3VydmV5TW92ZVBhZ2VDYWxsYmFjaztcbiAgICBkcmFnZ2luZ1BhZ2U6IGFueSA9IG51bGw7XG4gICAgZHJhZ1N0YXJ0OiBhbnk7IGRyYWdPdmVyOiBhbnk7IGRyYWdFbmQ6IGFueTsgZHJhZ0Ryb3A6IGFueTsga2V5RG93bjogYW55O1xuXG4gICAgY29uc3RydWN0b3Iob25BZGROZXdQYWdlQ2FsbGJhY2s6IFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjayA9IG51bGwsIG9uU2VsZWN0UGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgICAgICAgIG9uTW92ZVBhZ2VDYWxsYmFjazogU3VydmV5TW92ZVBhZ2VDYWxsYmFjayA9IG51bGwsIG9uRGVsZXRlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSBudWxsKSB7XG4gICAgICAgIHRoaXMua29QYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLm9uQWRkTmV3UGFnZUNhbGxiYWNrID0gb25BZGROZXdQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2sgPSBvblNlbGVjdFBhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vbk1vdmVQYWdlQ2FsbGJhY2sgPSBvbk1vdmVQYWdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMub25EZWxldGVQYWdlQ2FsbGJhY2sgPSBvbkRlbGV0ZVBhZ2VDYWxsYmFjaztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbGVjdFBhZ2VDbGljayA9IGZ1bmN0aW9uKHBhZ2VJdGVtKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5vblNlbGVjdFBhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNlbGYub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZUl0ZW0ucGFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMua2V5RG93biA9IGZ1bmN0aW9uIChlbDogYW55LCBlOiBLZXlib2FyZEV2ZW50KSB7IHNlbGYub25LZXlEb3duKGVsLCBlKTsgfVxuICAgICAgICB0aGlzLmRyYWdTdGFydCA9IGZ1bmN0aW9uIChlbDogYW55KSB7IHNlbGYuZHJhZ2dpbmdQYWdlID0gZWw7IH07XG4gICAgICAgIHRoaXMuZHJhZ092ZXIgPSBmdW5jdGlvbiAoZWw6IGFueSkgeyAgfTtcbiAgICAgICAgdGhpcy5kcmFnRW5kID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRyYWdnaW5nUGFnZSA9IG51bGw7IH07XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3AgPSBmdW5jdGlvbiAoZWw6IGFueSkgeyBzZWxmLm1vdmVEcmFnZ2luZ1BhZ2VUbyhlbCk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkuU3VydmV5KSB7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5rb0lzVmFsaWQodGhpcy5zdXJ2ZXlWYWx1ZSAhPSBudWxsKTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWRQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlc1tpXS5rb1NlbGVjdGVkKHBhZ2VzW2ldLnBhZ2UgPT0gcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFkZE5ld1BhZ2VDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMub25BZGROZXdQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub25BZGROZXdQYWdlQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlQYWdlKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNoYW5nZU5hbWUocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5UGFnZShwYWdlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcygpW2luZGV4XS50aXRsZShTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShwYWdlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEluZGV4QnlQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYWdlc1tpXS5wYWdlID09IHBhZ2UpIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihlbDogYW55LCBlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmtvUGFnZXMoKS5sZW5ndGggPD0gMSkgcmV0dXJuO1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgdmFyIHBhZ2VJbmRleCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFnZXNbaV0ucGFnZSAmJiBwYWdlc1tpXS5rb1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICBwYWdlSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gNDYgJiYgdGhpcy5vbkRlbGV0ZVBhZ2VDYWxsYmFjaykgdGhpcy5vbkRlbGV0ZVBhZ2VDYWxsYmFjayhlbC5wYWdlKTtcbiAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMzcgfHwgZS5rZXlDb2RlID09IDM5KSAmJiB0aGlzLm9uU2VsZWN0UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBwYWdlSW5kZXggKz0gKGUua2V5Q29kZSA9PSAzNyA/IC0xIDogMSk7XG4gICAgICAgICAgICBpZiAocGFnZUluZGV4IDwgMCkgcGFnZUluZGV4ID0gcGFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPj0gcGFnZXMubGVuZ3RoKSBwYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlSW5kZXhdLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0UGFnZUNhbGxiYWNrKHBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFBhZ2UocGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMoW10pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBrby5vYnNlcnZhYmxlKFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKHBhZ2UpKSwgcGFnZTogcGFnZSwga29TZWxlY3RlZDoga28ub2JzZXJ2YWJsZShmYWxzZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29QYWdlcyhwYWdlcyk7XG4gICAgfVxuICAgIHByaXZhdGUgbW92ZURyYWdnaW5nUGFnZVRvKHRvUGFnZTogYW55KSB7XG4gICAgICAgIGlmICh0b1BhZ2UgPT0gbnVsbCB8fCB0b1BhZ2UgPT0gdGhpcy5kcmFnZ2luZ1BhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQYWdlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZ1BhZ2UgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmtvUGFnZXMoKS5pbmRleE9mKHRoaXMuZHJhZ2dpbmdQYWdlKTtcbiAgICAgICAgdmFyIGluZGV4VG8gPSB0aGlzLmtvUGFnZXMoKS5pbmRleE9mKHRvUGFnZSk7XG4gICAgICAgIGlmICh0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbk1vdmVQYWdlQ2FsbGJhY2soaW5kZXgsIGluZGV4VG8pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlc0VkaXRvci50cyIsImltcG9ydCB7U3VydmV5SlNPTjV9IGZyb20gXCIuL2pzb241XCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5jbGFzcyBUZXh0UGFyc2VyUHJvcGVyeSB7XG4gICAgaXNGb3VuZDogYm9vbGVhbjtcbiAgICBwcm9wZXJ0aWVzQ291bnQ6IG51bWJlcjtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xuICAgIHZhbHVlU3RhcnQ6IG51bWJlcjtcbiAgICB2YWx1ZUVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VGV4dFdvcmtlciB7XG4gICAgcHVibGljIHN0YXRpYyBuZXdMaW5lQ2hhcjogc3RyaW5nO1xuICAgIHB1YmxpYyBlcnJvcnM6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBwcml2YXRlIGpzb25WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgc3VydmV5T2JqZWN0czogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIGlzU3VydmV5QXNQYWdlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudGV4dCB8fCB0aGlzLnRleHQudHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwie31cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnByb2Nlc3MoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIGdldCBpc0pzb25Db3JyZWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZSAhPSBudWxsOyB9XG4gICAgcHJvdGVjdGVkIHByb2Nlc3MoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmpzb25WYWx1ZSA9IG5ldyBTdXJ2ZXlKU09ONSgxKS5wYXJzZSh0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5qc29uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVKc29uUG9zaXRpb25zKHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSBuZXcgU3VydmV5LlN1cnZleSh0aGlzLmpzb25WYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goeyBwb3M6IHsgc3RhcnQ6IGVycm9yLmF0LCBlbmQ6IC0xIH0sIHRleHQ6IGVycm9yLmdldEZ1bGxEZXNjcmlwdGlvbigpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMgPSB0aGlzLmNyZWF0ZVN1cnZleU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5zZXRFZGl0b3JQb3NpdGlvbkJ5Q2hhcnRBdCh0aGlzLnN1cnZleU9iamVjdHMpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuZXJyb3JzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVKc29uUG9zaXRpb25zKGpzb25PYmo6IGFueSkge1xuICAgICAgICBqc29uT2JqW1wicG9zXCJdW1wic2VsZlwiXSA9IGpzb25PYmo7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uT2JqKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0ganNvbk9ialtrZXldO1xuICAgICAgICAgICAgaWYgKG9iaiAmJiBvYmpbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBqc29uT2JqW1wicG9zXCJdW2tleV0gPSBvYmpbXCJwb3NcIl07XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVKc29uUG9zaXRpb25zKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVTdXJ2ZXlPYmplY3RzKCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHRoaXMuaXNTdXJ2ZXlBc1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5VmFsdWUucGFnZXNbaV07XG4gICAgICAgICAgICBpZiAoaSA9PSAwICYmICFwYWdlW1wicG9zXCJdKSB7XG4gICAgICAgICAgICAgICAgcGFnZVtcInBvc1wiXSA9IHRoaXMuc3VydmV5VmFsdWVbXCJwb3NcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYWdlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYWdlLnF1ZXN0aW9uc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRFZGl0b3JQb3NpdGlvbkJ5Q2hhcnRBdChvYmplY3RzOiBhbnlbXSkge1xuICAgICAgICBpZiAob2JqZWN0cyA9PSBudWxsIHx8IG9iamVjdHMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0geyByb3c6IDAsIGNvbHVtbjogMCB9O1xuICAgICAgICB2YXIgYXRPYmplY3RzQXJyYXkgPSB0aGlzLmdldEF0QXJyYXkob2JqZWN0cyk7XG4gICAgICAgIHZhciBzdGFydEF0OiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0T2JqZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXQgPSBhdE9iamVjdHNBcnJheVtpXS5hdDtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3N0aW9uQnlDaGFydEF0KHBvc2l0aW9uLCBzdGFydEF0LCBhdCk7XG4gICAgICAgICAgICB2YXIgb2JqID0gYXRPYmplY3RzQXJyYXlbaV0ub2JqO1xuICAgICAgICAgICAgaWYgKCFvYmoucG9zaXRpb24pIG9iai5wb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3Muc3RhcnQpIHtcbiAgICAgICAgICAgICAgICBvYmoucG9zaXRpb24uc3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0ID09IG9iai5wb3MuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5lbmQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydEF0ID0gYXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQb3N0aW9uQnlDaGFydEF0KHN0YXJ0UG9zaXRpb246IEFjZUFqYXguUG9zaXRpb24sIHN0YXJ0QXQ6IG51bWJlciwgYXQ6IG51bWJlcik6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7IHJvdzogc3RhcnRQb3NpdGlvbi5yb3csIGNvbHVtbjogc3RhcnRQb3NpdGlvbi5jb2x1bW4gfTtcbiAgICAgICAgdmFyIGN1ckNoYXIgPSBzdGFydEF0O1xuICAgICAgICB3aGlsZSAoY3VyQ2hhciA8IGF0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0LmNoYXJBdChjdXJDaGFyKSA9PSBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJvdysrO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2x1bW4gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJDaGFyKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBdEFycmF5KG9iamVjdHM6IGFueVtdKTogYW55W10ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG4gICAgICAgICAgICB2YXIgcG9zID0gb2JqLnBvcztcbiAgICAgICAgICAgIGlmICghcG9zKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgYXQ6IHBvcy5zdGFydCwgb2JqOiBvYmogfSk7XG4gICAgICAgICAgICBpZiAocG9zLmVuZCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3MuZW5kLCBvYmo6IG9iaiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKGVsMSwgZWwyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwxLmF0ID4gZWwyLmF0KSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChlbDEuYXQgPCBlbDIuYXQpIHJldHVybiAtMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHRXb3JrZXIudHMiLCIvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gSlNPTjUsIGh0dHA6Ly9qc29uNS5vcmcvXG4vLyBUaGUgbW9kaWZpY2F0aW9uIGZvciBnZXR0aW5nIG9iamVjdCBhbmQgcHJvcGVydGllcyBsb2NhdGlvbiAnYXQnIHdlcmUgbWFkZW4uXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ONSB7XG4gICAgcHVibGljIHN0YXRpYyBwb3NpdGlvbk5hbWUgPSBcInBvc1wiO1xuICAgIHByaXZhdGUgc3RhdGljIGVzY2FwZWUgPSB7XG4gICAgICAgIFwiJ1wiOiBcIidcIixcbiAgICAgICAgJ1wiJzogJ1wiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgICAgICcvJzogJy8nLFxuICAgICAgICAnXFxuJzogJycsICAgICAgIC8vIFJlcGxhY2UgZXNjYXBlZCBuZXdsaW5lcyBpbiBzdHJpbmdzIHcvIGVtcHR5IHN0cmluZ1xuICAgICAgICBiOiAnXFxiJyxcbiAgICAgICAgZjogJ1xcZicsXG4gICAgICAgIG46ICdcXG4nLFxuICAgICAgICByOiAnXFxyJyxcbiAgICAgICAgdDogJ1xcdCdcbiAgICB9O1xuICAgIHByaXZhdGUgc3RhdGljIHdzID0gW1xuICAgICAgICAnICcsXG4gICAgICAgICdcXHQnLFxuICAgICAgICAnXFxyJyxcbiAgICAgICAgJ1xcbicsXG4gICAgICAgICdcXHYnLFxuICAgICAgICAnXFxmJyxcbiAgICAgICAgJ1xceEEwJyxcbiAgICAgICAgJ1xcdUZFRkYnXG4gICAgXTtcbiAgICBwcml2YXRlIGVuZEF0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhdDogbnVtYmVyOyAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGNoYXJhY3RlclxuICAgIHByaXZhdGUgY2g6IGFueTsgICAgIC8vIFRoZSBjdXJyZW50IGNoYXJhY3RlclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFyc2VUeXBlOiBudW1iZXI7IC8vIDAgLSBzdGFkYXJkLCAxIC0gZ2V0IGluZm9ybWF0aW9uIGFib3V0IG9iamVjdHMsIDIgLSBnZXQgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHByb3BlcnRpZXNcbiAgICBjb25zdHJ1Y3RvcihwYXJzZVR5cGU6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5wYXJzZVR5cGUgPSBwYXJzZVR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBwYXJzZShzb3VyY2U6IGFueSwgcmV2aXZlcjogYW55ID0gbnVsbCwgc3RhcnRGcm9tOiBudW1iZXIgPSAwLCBlbmRBdDogbnVtYmVyID0gLTEpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMudGV4dCA9IFN0cmluZyhzb3VyY2UpO1xuICAgICAgICB0aGlzLmF0ID0gc3RhcnRGcm9tO1xuICAgICAgICB0aGlzLmVuZEF0ID0gZW5kQXQ7XG4gICAgICAgIHRoaXMuY2ggPSAnICc7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICBpZiAodGhpcy5jaCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIlN5bnRheCBlcnJvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcmV2aXZlciBmdW5jdGlvbiwgd2UgcmVjdXJzaXZlbHkgd2FsayB0aGUgbmV3IHN0cnVjdHVyZSxcbiAgICAgICAgLy8gcGFzc2luZyBlYWNoIG5hbWUvdmFsdWUgcGFpciB0byB0aGUgcmV2aXZlciBmdW5jdGlvbiBmb3IgcG9zc2libGVcbiAgICAgICAgLy8gdHJhbnNmb3JtYXRpb24sIHN0YXJ0aW5nIHdpdGggYSB0ZW1wb3Jhcnkgcm9vdCBvYmplY3QgdGhhdCBob2xkcyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIGluIGFuIGVtcHR5IGtleS4gSWYgdGhlcmUgaXMgbm90IGEgcmV2aXZlciBmdW5jdGlvbiwgd2Ugc2ltcGx5IHJldHVybiB0aGVcbiAgICAgICAgLy8gcmVzdWx0LlxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/IChmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XG4gICAgICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gd2Fsayh2YWx1ZSwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV2aXZlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gKHsgJyc6IHJlc3VsdCB9LCAnJykpIDogcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGVycm9yKG06IHN0cmluZykge1xuICAgICAgICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgU3ludGF4RXJyb3IoKTtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9IG07XG4gICAgICAgIGVycm9yW1wiYXRcIl0gPSB0aGlzLmF0O1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBuZXh0KGM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgLy8gSWYgYSBjIHBhcmFtZXRlciBpcyBwcm92aWRlZCwgdmVyaWZ5IHRoYXQgaXQgbWF0Y2hlcyB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gICAgICAgIGlmIChjICYmIGMgIT09IHRoaXMuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJFeHBlY3RlZCAnXCIgKyBjICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdGhpcy5jaCArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHRoaXMubmV4dCBjaGFyYWN0ZXIuIFdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcuXG4gICAgICAgIHRoaXMuY2ggPSB0aGlzLmNoYXJ0QXQoKTtcbiAgICAgICAgdGhpcy5hdCArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5jaDtcbiAgICB9XG4gICAgcHJpdmF0ZSBwZWVrKCkge1xuICAgICAgICAvLyBHZXQgdGhlIHRoaXMubmV4dCBjaGFyYWN0ZXIgd2l0aG91dCBjb25zdW1pbmcgaXQgb3JcbiAgICAgICAgLy8gYXNzaWduaW5nIGl0IHRvIHRoZSB0aGlzLmNoIHZhcmFpYmxlLlxuICAgICAgICByZXR1cm4gdGhpcy5jaGFydEF0KCk7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhcnRBdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kQXQgPiAtMSAmJiB0aGlzLmF0ID49IHRoaXMuZW5kQXQpIHJldHVybiAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQodGhpcy5hdCk7XG4gICAgfVxuICAgIHByaXZhdGUgaWRlbnRpZmllcigpIHtcbiAgICAgICAgLy8gUGFyc2UgYW4gaWRlbnRpZmllci4gTm9ybWFsbHksIHJlc2VydmVkIHdvcmRzIGFyZSBkaXNhbGxvd2VkIGhlcmUsIGJ1dCB3ZVxuICAgICAgICAvLyBvbmx5IHVzZSB0aGlzIGZvciB1bnF1b3RlZCBvYmplY3Qga2V5cywgd2hlcmUgcmVzZXJ2ZWQgd29yZHMgYXJlIGFsbG93ZWQsXG4gICAgICAgIC8vIHNvIHdlIGRvbid0IGNoZWNrIGZvciB0aG9zZSBoZXJlLiBSZWZlcmVuY2VzOlxuICAgICAgICAvLyAtIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDcuNlxuICAgICAgICAvLyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NvcmVfSmF2YVNjcmlwdF8xLjVfR3VpZGUvQ29yZV9MYW5ndWFnZV9GZWF0dXJlcyNWYXJpYWJsZXNcbiAgICAgICAgLy8gLSBodHRwOi8vZG9jc3RvcmUubWlrLnVhL29yZWxseS93ZWJwcm9nL2pzY3JpcHQvY2gwMl8wNy5odG1cbiAgICAgICAgLy8gVE9ETyBJZGVudGlmaWVycyBjYW4gaGF2ZSBVbmljb2RlIFwibGV0dGVyc1wiIGluIHRoZW07IGFkZCBzdXBwb3J0IGZvciB0aG9zZS5cbiAgICAgICAgdmFyIGtleSA9IHRoaXMuY2g7XG5cbiAgICAgICAgLy8gSWRlbnRpZmllcnMgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBfIG9yICQuXG4gICAgICAgIGlmICgodGhpcy5jaCAhPT0gJ18nICYmIHRoaXMuY2ggIT09ICckJykgJiZcbiAgICAgICAgICAgICh0aGlzLmNoIDwgJ2EnIHx8IHRoaXMuY2ggPiAneicpICYmXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdBJyB8fCB0aGlzLmNoID4gJ1onKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBpZGVudGlmaWVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3Vic2VxdWVudCBjaGFyYWN0ZXJzIGNhbiBjb250YWluIGRpZ2l0cy5cbiAgICAgICAgd2hpbGUgKHRoaXMubmV4dCgpICYmIChcbiAgICAgICAgdGhpcy5jaCA9PT0gJ18nIHx8IHRoaXMuY2ggPT09ICckJyB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAneicpIHx8XG4gICAgICAgICh0aGlzLmNoID49ICdBJyAmJiB0aGlzLmNoIDw9ICdaJykgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSkpIHtcbiAgICAgICAgICAgIGtleSArPSB0aGlzLmNoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgcHJpdmF0ZSBudW1iZXIoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBudW1iZXIgdmFsdWUuXG5cbiAgICAgICAgdmFyIG51bWJlcixcbiAgICAgICAgICAgIHNpZ24gPSAnJyxcbiAgICAgICAgICAgIHN0cmluZyA9ICcnLFxuICAgICAgICAgICAgYmFzZSA9IDEwO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLScgfHwgdGhpcy5jaCA9PT0gJysnKSB7XG4gICAgICAgICAgICBzaWduID0gdGhpcy5jaDtcbiAgICAgICAgICAgIHRoaXMubmV4dCh0aGlzLmNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIEluZmluaXR5IChjb3VsZCB0d2VhayB0byBhbGxvdyBvdGhlciB3b3Jkcyk6XG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnSScpIHtcbiAgICAgICAgICAgIG51bWJlciA9IHRoaXMud29yZCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBudW1iZXIgIT09ICdudW1iZXInIHx8IGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmV4cGVjdGVkIHdvcmQgZm9yIG51bWJlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChzaWduID09PSAnLScpID8gLW51bWJlciA6IG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIE5hTlxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ04nKSB7XG4gICAgICAgICAgICBudW1iZXIgPSB0aGlzLndvcmQoKTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ2V4cGVjdGVkIHdvcmQgdG8gYmUgTmFOJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZ25vcmUgc2lnbiBhcyAtTmFOIGFsc28gaXMgTmFOXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcwJykge1xuICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAneCcgfHwgdGhpcy5jaCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgYmFzZSA9IDE2O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ09jdGFsIGxpdGVyYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoYmFzZSkge1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSAnLic7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiB0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdlJyB8fCB0aGlzLmNoID09PSAnRScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JyB8fCB0aGlzLmNoID49ICdBJyAmJiB0aGlzLmNoIDw9ICdGJyB8fCB0aGlzLmNoID49ICdhJyAmJiB0aGlzLmNoIDw9ICdmJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZ24gPT09ICctJykge1xuICAgICAgICAgICAgbnVtYmVyID0gLXN0cmluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlciA9ICtzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgbnVtYmVyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHN0cmluZygpIHtcblxuICAgICAgICAvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cblxuICAgICAgICB2YXIgaGV4LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHN0cmluZyA9ICcnLFxuICAgICAgICAgICAgZGVsaW0sICAgICAgLy8gZG91YmxlIHF1b3RlIG9yIHNpbmdsZSBxdW90ZVxuICAgICAgICAgICAgdWZmZmY7XG5cbiAgICAgICAgLy8gV2hlbiBwYXJzaW5nIGZvciBzdHJpbmcgdmFsdWVzLCB3ZSBtdXN0IGxvb2sgZm9yICcgb3IgXCIgYW5kIFxcIGNoYXJhY3RlcnMuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdcIicgfHwgdGhpcy5jaCA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgIGRlbGltID0gdGhpcy5jaDtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSBkZWxpbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleCA9IHBhcnNlSW50KHRoaXMubmV4dCgpLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShoZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ZmZmZiA9IHVmZmZmICogMTYgKyBoZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1ZmZmZik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdXJ2ZXlKU09ONS5lc2NhcGVlW3RoaXMuY2hdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZXNjYXBlZCBuZXdsaW5lcyBhcmUgaW52YWxpZDsgc2VlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXNlZW1rL2pzb241L2lzc3Vlcy8yNFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHRoaXMgZmVlbHMgc3BlY2lhbC1jYXNlZDsgYXJlIHRoZXJlIG90aGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWQgdW5lc2NhcGVkIGNoYXJzP1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBzdHJpbmdcIik7XG4gICAgfVxuICAgIHByaXZhdGUgaW5saW5lQ29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGFuIGlubGluZSBjb21tZW50LCBhc3N1bWluZyB0aGlzIGlzIG9uZS4gVGhlIGN1cnJlbnQgY2hhcmFjdGVyIHNob3VsZFxuICAgICAgICAvLyBiZSB0aGUgc2Vjb25kIC8gY2hhcmFjdGVyIGluIHRoZSAvLyBwYWlyIHRoYXQgYmVnaW5zIHRoaXMgaW5saW5lIGNvbW1lbnQuXG4gICAgICAgIC8vIFRvIGZpbmlzaCB0aGUgaW5saW5lIGNvbW1lbnQsIHdlIGxvb2sgZm9yIGEgbmV3bGluZSBvciB0aGUgZW5kIG9mIHRoZSB0ZXh0LlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYW4gaW5saW5lIGNvbW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnXFxuJyB8fCB0aGlzLmNoID09PSAnXFxyJykge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5jaCk7XG4gICAgfVxuICAgIHByaXZhdGUgYmxvY2tDb21tZW50KCkge1xuXG4gICAgICAgIC8vIFNraXAgYSBibG9jayBjb21tZW50LCBhc3N1bWluZyB0aGlzIGlzIG9uZS4gVGhlIGN1cnJlbnQgY2hhcmFjdGVyIHNob3VsZCBiZVxuICAgICAgICAvLyB0aGUgKiBjaGFyYWN0ZXIgaW4gdGhlIC8qIHBhaXIgdGhhdCBiZWdpbnMgdGhpcyBibG9jayBjb21tZW50LlxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGJsb2NrIGNvbW1lbnQsIHdlIGxvb2sgZm9yIGFuIGVuZGluZyAqLyBwYWlyIG9mIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIGJ1dCB3ZSBhbHNvIHdhdGNoIGZvciB0aGUgZW5kIG9mIHRleHQgYmVmb3JlIHRoZSBjb21tZW50IGlzIHRlcm1pbmF0ZWQuXG5cbiAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIk5vdCBhIGJsb2NrIGNvbW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJyonKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0aGlzLmNoKTtcblxuICAgICAgICB0aGlzLmVycm9yKFwiVW50ZXJtaW5hdGVkIGJsb2NrIGNvbW1lbnRcIik7XG4gICAgfVxuICAgIHByaXZhdGUgY29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGEgY29tbWVudCwgd2hldGhlciBpbmxpbmUgb3IgYmxvY2stbGV2ZWwsIGFzc3VtaW5nIHRoaXMgaXMgb25lLlxuICAgICAgICAvLyBDb21tZW50cyBhbHdheXMgYmVnaW4gd2l0aCBhIC8gY2hhcmFjdGVyLlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYSBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZXh0KCcvJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgdGhpcy5pbmxpbmVDb21tZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA9PT0gJyonKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrQ29tbWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIlVucmVjb2duaXplZCBjb21tZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgd2hpdGUoKSB7XG5cbiAgICAgICAgLy8gU2tpcCB3aGl0ZXNwYWNlIGFuZCBjb21tZW50cy5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlJ3JlIGRldGVjdGluZyBjb21tZW50cyBieSBvbmx5IGEgc2luZ2xlIC8gY2hhcmFjdGVyLlxuICAgICAgICAvLyBUaGlzIHdvcmtzIHNpbmNlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYXJlIG5vdCB2YWxpZCBKU09OKDUpLCBidXQgdGhpcyB3aWxsXG4gICAgICAgIC8vIGJyZWFrIGlmIHRoZXJlIGFyZSBvdGhlciB2YWxpZCB2YWx1ZXMgdGhhdCBiZWdpbiB3aXRoIGEgLyBjaGFyYWN0ZXIhXG5cbiAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU3VydmV5SlNPTjUud3MuaW5kZXhPZih0aGlzLmNoKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdvcmQoKTogYW55IHtcblxuICAgICAgICAvLyB0cnVlLCBmYWxzZSwgb3IgbnVsbC5cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgncicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAnZic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdmJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd1Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdJJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ0knKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2YnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2knKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2knKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3knKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ04nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2EnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ04nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJVbmV4cGVjdGVkICdcIiArIHRoaXMuY2ggKyBcIidcIik7XG4gICAgfVxuICAgIHByaXZhdGUgYXJyYXkoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYW4gYXJyYXkgdmFsdWUuXG5cbiAgICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdbJykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCdbJyk7XG4gICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTsgICAvLyBQb3RlbnRpYWxseSBlbXB0eSBhcnJheVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFUzUgYWxsb3dzIG9taXR0aW5nIGVsZW1lbnRzIGluIGFycmF5cywgZS5nLiBbLF0gYW5kXG4gICAgICAgICAgICAgICAgLy8gWyxudWxsXS4gV2UgZG9uJ3QgYWxsb3cgdGhpcyBpbiBKU09ONS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJNaXNzaW5nIGFycmF5IGVsZW1lbnRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh0aGlzLnZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBjb21tYSBhZnRlciB0aGlzIHZhbHVlLCB0aGlzIG5lZWRzIHRvXG4gICAgICAgICAgICAgICAgLy8gYmUgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJywnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcihcIkJhZCBhcnJheVwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvYmplY3QoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYW4gb2JqZWN0IHZhbHVlLlxuXG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGlzRmlyc3RQcm9wZXJ0eSA9IHRydWUsXG4gICAgICAgICAgICBvYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0gPSB7IHN0YXJ0OiB0aGlzLmF0IC0gMSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoID09PSAneycpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgneycpO1xuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDsgICAvLyBQb3RlbnRpYWxseSBlbXB0eSBvYmplY3RcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBLZXlzIGNhbiBiZSB1bnF1b3RlZC4gSWYgdGhleSBhcmUsIHRoZXkgbmVlZCB0byBiZVxuICAgICAgICAgICAgICAgIC8vIHZhbGlkIEpTIGlkZW50aWZpZXJzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnXCInIHx8IHRoaXMuY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XSA9IHsgc3RhcnQ6IHN0YXJ0LCB2YWx1ZVN0YXJ0OiB0aGlzLmF0IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnOicpO1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gdGhpcy52YWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBjb21tYSBhZnRlciB0aGlzIHBhaXIsIHRoaXMgbmVlZHMgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgZW5kIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggIT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdLmVuZCA9IHRoaXMuYXQgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnfScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ZpcnN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0uZW5kLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIGlzRmlyc3RQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgb2JqZWN0XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIHZhbHVlKCk6IGFueSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBKU09OIHZhbHVlLiBJdCBjb3VsZCBiZSBhbiBvYmplY3QsIGFuIGFycmF5LCBhIHN0cmluZywgYSBudW1iZXIsXG4gICAgICAgIC8vIG9yIGEgd29yZC5cblxuICAgICAgICB0aGlzLndoaXRlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jaCkge1xuICAgICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0KCk7XG4gICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheSgpO1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5udW1iZXIoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknID8gdGhpcy5udW1iZXIoKSA6IHRoaXMud29yZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXBsYWNlcjogYW55O1xuICAgIHByaXZhdGUgaW5kZW50U3RyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvYmpTdGFjaztcblxuICAgIHB1YmxpYyBzdHJpbmdpZnkob2JqOiBhbnksIHJlcGxhY2VyOiBhbnkgPSBudWxsLCBzcGFjZTogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAocmVwbGFjZXIgJiYgKHR5cGVvZiAocmVwbGFjZXIpICE9PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXMuaXNBcnJheShyZXBsYWNlcikpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcGxhY2VyIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgICAgdGhpcy5pbmRlbnRTdHIgPSB0aGlzLmdldEluZGVudChzcGFjZSk7XG4gICAgICAgIHRoaXMub2JqU3RhY2sgPSBbXTtcbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlLi4ud2hlbiB1bmRlZmluZWQgaXMgdXNlZCBpbnNpZGUgb2ZcbiAgICAgICAgLy8gYSBjb21wb3VuZCBvYmplY3QvYXJyYXksIHJldHVybiBudWxsLlxuICAgICAgICAvLyBidXQgd2hlbiB0b3AtbGV2ZWwsIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgdmFyIHRvcExldmVsSG9sZGVyID0geyBcIlwiOiBvYmogfTtcbiAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXBsYWNlZFZhbHVlT3JVbmRlZmluZWQodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmluZ2lmeSh0b3BMZXZlbEhvbGRlciwgJycsIHRydWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEluZGVudChzcGFjZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHNwYWNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09IFwibnVtYmVyXCIgJiYgc3BhY2UgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbmRlbnQoXCIgXCIsIHNwYWNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRSZXBsYWNlZFZhbHVlT3JVbmRlZmluZWQoaG9sZGVyOiBhbnksIGtleTogYW55LCBpc1RvcExldmVsOiBib29sZWFuKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGhvbGRlcltrZXldO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIHZhbHVlIHdpdGggaXRzIHRvSlNPTiB2YWx1ZSBmaXJzdCwgaWYgcG9zc2libGVcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRvSlNPTiAmJiB0eXBlb2YgdmFsdWUudG9KU09OID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdXNlci1zdXBwbGllZCByZXBsYWNlciBpZiBhIGZ1bmN0aW9uLCBjYWxsIGl0LiBJZiBpdCdzIGFuIGFycmF5LCBjaGVjayBvYmplY3RzJyBzdHJpbmcga2V5cyBmb3JcbiAgICAgICAgLy8gcHJlc2VuY2UgaW4gdGhlIGFycmF5IChyZW1vdmluZyB0aGUga2V5L3ZhbHVlIHBhaXIgZnJvbSB0aGUgcmVzdWx0aW5nIEpTT04gaWYgdGhlIGtleSBpcyBtaXNzaW5nKS5cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5yZXBsYWNlcikgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVwbGFjZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1RvcExldmVsIHx8IHRoaXMuaXNBcnJheShob2xkZXIpIHx8IHRoaXMucmVwbGFjZXIuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZENoYXIoY2hhcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAneicpIHx8XG4gICAgICAgICAgICAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpIHx8XG4gICAgICAgICAgICAoY2hhciA+PSAnMCcgJiYgY2hhciA8PSAnOScpIHx8XG4gICAgICAgICAgICBjaGFyID09PSAnXycgfHwgY2hhciA9PT0gJyQnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNXb3JkU3RhcnQoY2hhcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoY2hhciA+PSAnYScgJiYgY2hhciA8PSAneicpIHx8XG4gICAgICAgICAgICAoY2hhciA+PSAnQScgJiYgY2hhciA8PSAnWicpIHx8XG4gICAgICAgICAgICBjaGFyID09PSAnXycgfHwgY2hhciA9PT0gJyQnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNXb3JkKGtleTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1dvcmRTdGFydChrZXlbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAxLCBsZW5ndGggPSBrZXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzV29yZENoYXIoa2V5W2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gcG9seWZpbGxzXG4gICAgcHJpdmF0ZSBpc0FycmF5KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0RhdGUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc05hTih2YWw6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgdmFsICE9PSB2YWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0ZvckNpcmN1bGFyKG9iajogYW55KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYmpTdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMub2JqU3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDb252ZXJ0aW5nIGNpcmN1bGFyIHN0cnVjdHVyZSB0byBKU09OXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbWFrZUluZGVudChzdHI6IHN0cmluZywgbnVtOiBudW1iZXIsIG5vTmV3TGluZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbmRlbnRhdGlvbiBubyBtb3JlIHRoYW4gMTAgY2hhcnNcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZW50ID0gbm9OZXdMaW5lID8gXCJcIiA6IFwiXFxuXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGluZGVudCArPSBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZW50O1xuICAgIH1cblxuICAgIC8vIENvcGllZCBmcm9tIENyb2tmb3JkJ3MgaW1wbGVtZW50YXRpb24gb2YgSlNPTlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZG91Z2xhc2Nyb2NrZm9yZC9KU09OLWpzL2Jsb2IvZTM5ZGI0YjdlNjI0OWYwNGExOTVlN2RkMDg0MGU2MTBjYzllOTQxZS9qc29uMi5qcyNMMTk1XG4gICAgLy8gQmVnaW5cbiAgICBwcml2YXRlIHN0YXRpYyBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAgIHByaXZhdGUgc3RhdGljIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbWV0YSA9IHsgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgJ1xcYic6ICdcXFxcYicsXG4gICAgICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgJ1xcZic6ICdcXFxcZicsXG4gICAgICAgICdcXHInOiAnXFxcXHInLFxuICAgICAgICAnXCInOiAnXFxcXFwiJyxcbiAgICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnXG4gICAgfTtcbiAgICBwcml2YXRlIGVzY2FwZVN0cmluZyhzdHI6IHN0cmluZykge1xuXG4gICAgICAgIC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbiAgICAgICAgLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIG11c3QgYWxzbyByZXBsYWNlIHRoZSBvZmZlbmRpbmcgY2hhcmFjdGVycyB3aXRoIHNhZmUgZXNjYXBlXG4gICAgICAgIC8vIHNlcXVlbmNlcy5cbiAgICAgICAgU3VydmV5SlNPTjUuZXNjYXBhYmxlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlKU09ONS5lc2NhcGFibGUudGVzdChzdHIpID8gJ1wiJyArIHN0ci5yZXBsYWNlKFN1cnZleUpTT041LmVzY2FwYWJsZSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHZhciBjID0gU3VydmV5SlNPTjUubWV0YVthXTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIGMgOlxuICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHIgKyAnXCInO1xuICAgIH1cbiAgICAvLyBFbmRcblxuICAgIHByaXZhdGUgaW50ZXJuYWxTdHJpbmdpZnkoaG9sZGVyOiBhbnksIGtleTogYW55LCBpc1RvcExldmVsOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBidWZmZXIsIHJlcztcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSwgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHZhciBvYmpfcGFydCA9IHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlciwga2V5LCBpc1RvcExldmVsKTtcblxuICAgICAgICBpZiAob2JqX3BhcnQgJiYgIXRoaXMuaXNEYXRlKG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgLy8gdW5ib3ggb2JqZWN0c1xuICAgICAgICAgICAgLy8gZG9uJ3QgdW5ib3ggZGF0ZXMsIHNpbmNlIHdpbGwgdHVybiBpdCBpbnRvIG51bWJlclxuICAgICAgICAgICAgb2JqX3BhcnQgPSBvYmpfcGFydC52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlb2Ygb2JqX3BhcnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ob2JqX3BhcnQpIHx8ICFpc0Zpbml0ZShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqX3BhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVzY2FwZVN0cmluZyhvYmpfcGFydC50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgIGlmIChvYmpfcGFydCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXJyYXkob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JDaXJjdWxhcihvYmpfcGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFwiW1wiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnB1c2gob2JqX3BhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqX3BhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkob2JqX3BhcnQsIGksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IG51bGwgfHwgdHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgb2JqX3BhcnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRlbnRTdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJcXG5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCwgdHJ1ZSkgKyBcIl1cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBcIntcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vbkVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucHVzaChvYmpfcGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqX3BhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpfcGFydC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkob2JqX3BhcnQsIHByb3AsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RvcExldmVsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbkVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BLZXkgPSB0aGlzLmlzV29yZChwcm9wKSA/IHByb3AgOiB0aGlzLmVzY2FwZVN0cmluZyhwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHByb3BLZXkgKyBcIjpcIiArICh0aGlzLmluZGVudFN0ciA/ICcgJyA6ICcnKSArIHZhbHVlICsgXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub25FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnN1YnN0cmluZygwLCBidWZmZXIubGVuZ3RoIC0gMSkgKyB0aGlzLm1ha2VJbmRlbnQodGhpcy5pbmRlbnRTdHIsIHRoaXMub2JqU3RhY2subGVuZ3RoKSArIFwifVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gJ3t9JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbnMgYW5kIHVuZGVmaW5lZCBzaG91bGQgYmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzb241LnRzIiwiaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUVtYmVkaW5nV2luZG93IHtcbiAgICBwcml2YXRlIGpzb25WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdIZWFkOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nSmF2YTogQWNlQWpheC5FZGl0b3I7XG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuID0gZmFsc2U7XG4gICAga29TaG93QXNXaW5kb3c6IGFueTtcbiAgICBrb1NjcmlwdFVzaW5nOiBhbnk7XG4gICAga29IYXNJZHM6IGFueTtcbiAgICBrb0xvYWRTdXJ2ZXk6IGFueTtcbiAgICBrb0xpYnJhcnlWZXJzaW9uOiBhbnk7XG4gICAga29WaXNpYmxlSHRtbDogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29MaWJyYXJ5VmVyc2lvbiA9IGtvLm9ic2VydmFibGUoXCJrbm9ja291dFwiKTtcbiAgICAgICAgdGhpcy5rb1Nob3dBc1dpbmRvdyA9IGtvLm9ic2VydmFibGUoXCJwYWdlXCIpO1xuICAgICAgICB0aGlzLmtvU2NyaXB0VXNpbmcgPSBrby5vYnNlcnZhYmxlKFwiYm9vdHN0cmFwXCIpO1xuICAgICAgICB0aGlzLmtvSGFzSWRzID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29Mb2FkU3VydmV5ID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29WaXNpYmxlSHRtbCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5rb0xpYnJhcnlWZXJzaW9uKCkgPT0gXCJyZWFjdFwiIHx8IHNlbGYua29TaG93QXNXaW5kb3coKSA9PVwicGFnZVwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0xpYnJhcnlWZXJzaW9uLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRIZWFkVGV4dCgpOyBzZWxmLnN1cnZleUVtYmVkaW5nSmF2YS5zZXRWYWx1ZShzZWxmLmdldEphdmFUZXh0KCkpOyB9KTtcbiAgICAgICAgdGhpcy5rb1Nob3dBc1dpbmRvdy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc3VydmV5RW1iZWRpbmdKYXZhLnNldFZhbHVlKHNlbGYuZ2V0SmF2YVRleHQoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvU2NyaXB0VXNpbmcuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEhlYWRUZXh0KCk7IHNlbGYuc3VydmV5RW1iZWRpbmdKYXZhLnNldFZhbHVlKHNlbGYuZ2V0SmF2YVRleHQoKSk7IH0pO1xuICAgICAgICB0aGlzLmtvTG9hZFN1cnZleS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc3VydmV5RW1iZWRpbmdKYXZhLnNldFZhbHVlKHNlbGYuZ2V0SmF2YVRleHQoKSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9IG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQganNvbigpOiBhbnkgeyByZXR1cm4gdGhpcy5qc29uVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGpzb24odmFsdWU6IGFueSkgeyB0aGlzLmpzb25WYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdIZWFkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXRIZWFkVGV4dCgpO1xuICAgICAgICAgICAgdmFyIGJvZHlFZGl0b3IgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nQm9keVwiKTtcbiAgICAgICAgICAgIGJvZHlFZGl0b3Iuc2V0VmFsdWUoXCI8ZGl2IGlkPVxcXCJteVN1cnZleUpTTmFtZVxcXCI+PC9kaXY+XCIpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0phdmEgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nSmF2YVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSGFzSWRzKHRoaXMuc3VydmV5SWQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSmF2YS5zZXRWYWx1ZSh0aGlzLmdldEphdmFUZXh0KCkpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldEhlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMua29MaWJyYXJ5VmVyc2lvbigpID09IFwia25vY2tvdXRcIikge1xuICAgICAgICAgICAgc3RyID0gXCI8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMva25vY2tvdXQvMy4zLjAva25vY2tvdXQtbWluLmpzXFxcIj48L3NjcmlwdD5cXG48c2NyaXB0IHNyYz1cXFwianMvc3VydmV5LmtvLm1pbi5qc1xcXCI+PC9zY3JpcHQ+XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBcIjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2ZiLm1lL3JlYWN0LTAuMTQuOC5qc1xcXCI+PC9zY3JpcHQ+XFxuPHNjcmlwdCBzcmM9IFxcXCJodHRwczovL2ZiLm1lL3JlYWN0LWRvbS0wLjE0LjguanNcXFwiPjwvc2NyaXB0PlxcbjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9iYWJlbC1jb3JlLzUuOC4yMy9icm93c2VyLm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxuXCI7XG4gICAgICAgICAgICBzdHIgKz0gXCI8c2NyaXB0IHNyYz1cXFwianMvc3VydmV5LnJlYWN0Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHtcbiAgICAgICAgICAgIHN0ciArPSBcIlxcbjxsaW5rIGhyZWY9XFxcImNzcy9zdXJ2ZXkuY3NzXFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiAvPlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdIZWFkLnNldFZhbHVlKHN0cik7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlRWRpdG9yKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBBY2VBamF4LkVkaXRvciB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBhY2UuZWRpdChlbGVtZW50TmFtZSk7XG4gICAgICAgIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9jaHJvbWVcIik7XG4gICAgICAgIGVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICBlZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gICAgICAgIGVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICBlZGl0b3IucmVuZGVyZXIuc2V0U2hvd0d1dHRlcihmYWxzZSk7XG4gICAgICAgIGVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGVkaXRvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRKYXZhVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaXNPblBhZ2UgPSB0aGlzLmtvU2hvd0FzV2luZG93KCkgPT0gXCJwYWdlXCI7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzLmtvTGlicmFyeVZlcnNpb24oKSA9PSBcImtub2Nrb3V0XCIgPyB0aGlzLmdldEtub2Nrb3V0SmF2YVRleHQoaXNPblBhZ2UpIDogdGhpcy5nZXRSZWFjdEphdmFUZXh0KGlzT25QYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2V0Q3NzKCkgKyBzdHI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2V0Q3NzKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmtvU2NyaXB0VXNpbmcoKSAhPSBcImJvb3RzdHJhcFwiKSByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIFwiU3VydmV5LlN1cnZleS5jc3NUeXBlID0gXFxcImJvb3RzdHJhcFxcXCI7XFxuXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0S25vY2tvdXRKYXZhVGV4dChpc09uUGFnZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIHZhciB0ZXh0ID0gaXNPblBhZ2UgPyBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleShcXG5cIiA6IFwidmFyIHN1cnZleVdpbmRvdyA9IG5ldyBTdXJ2ZXkuU3VydmV5V2luZG93KFxcblwiO1xuICAgICAgICB0ZXh0ICs9IHRoaXMuZ2V0SnNvblRleHQoKTtcbiAgICAgICAgdGV4dCArPSBcIik7XFxuXCI7XG4gICAgICAgIGlmICghaXNPblBhZ2UpIHtcbiAgICAgICAgICAgIHRleHQgKz0gXCJzdXJ2ZXlXaW5kb3cuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNhdmVGdW5jID0gdGhpcy5nZXRTYXZlRnVuY0NvZGUoKTtcbiAgICAgICAgdGV4dCArPSBcInN1cnZleS5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAocykge1xcblwiICsgc2F2ZUZ1bmMgKyBcIlxcbiB9KTtcXG5cIjtcbiAgICAgICAgaWYgKGlzT25QYWdlKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IFwic3VydmV5LnJlbmRlcihcXFwibXlTdXJ2ZXlKU05hbWVcXFwiKTtcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgKz0gXCIvL0J5IGRlZmF1bHQgU3VydmV5LnRpdGxlIGlzIHVzZWQuXFxuXCJcbiAgICAgICAgICAgIHRleHQgKz0gXCIvL3N1cnZleVdpbmRvdy50aXRsZSA9IFxcXCJNeSBTdXJ2ZXkgV2luZG93IFRpdGxlLlxcXCI7XFxuXCI7XG4gICAgICAgICAgICB0ZXh0ICs9IFwic3VydmV5V2luZG93LnNob3coKTtcIjtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFJlYWN0SmF2YVRleHQoaXNPblBhZ2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICB2YXIgc2F2ZUZ1bmMgPSB0aGlzLmdldFNhdmVGdW5jQ29kZSgpO1xuICAgICAgICB2YXIgc2VuZFJlc3VsdFRleHQgPSBcInZhciBzdXJ2ZXlTZW5kUmVzdWx0ID0gZnVuY3Rpb24gKHMpIHtcXG5cIiArIHNhdmVGdW5jICsgXCJcXG4gfSk7XFxuXCI7XG4gICAgICAgIHZhciBuYW1lID0gaXNPblBhZ2UgPyBcIlJlYWN0U3VydmV5XCIgOiBcIlJlYWN0U3VydmV5V2luZG93XCI7XG4gICAgICAgIHZhciBqc29uVGV4dCA9IFwidmFyIHN1cnZleUpzb24gPSBcIiArIHRoaXMuZ2V0SnNvblRleHQoKSArIFwiXFxuXFxuXCI7XG4gICAgICAgIHZhciB0ZXh0ID0ganNvblRleHQgKyBzZW5kUmVzdWx0VGV4dCArIFwiUmVhY3RET00ucmVuZGVyKFxcbjxcIiArIG5hbWUgKyBcIiBqc29uPXtzdXJ2ZXlKc29ufSBvbkNvbXBsZXRlPXtzdXJ2ZXlTZW5kUmVzdWx0fSAvPiwgXFxuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJteVN1cnZleUpTTmFtZVxcXCIpKTtcIjtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2F2ZUZ1bmNDb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5rb0hhc0lkcygpKSByZXR1cm4gXCJzdXJ2ZXkuc2VuZFJlc3VsdCgnXCIgKyB0aGlzLnN1cnZleVBvc3RJZCArIFwiJyk7XCI7XG4gICAgICAgIHJldHVybiBcImFsZXJ0KFxcXCJUaGUgcmVzdWx0cyBhcmU6XFxcIiArIEpTT04uc3RyaW5naWZ5KHMuZGF0YSkpO1wiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEpzb25UZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmtvSGFzSWRzKCkgJiYgdGhpcy5rb0xvYWRTdXJ2ZXkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwieyBzdXJ2ZXlJZDogJ1wiICsgdGhpcy5zdXJ2ZXlJZCArIFwiJ31cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZVZhbGlkSlNPTikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbik7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5SlNPTjUoKS5zdHJpbmdpZnkodGhpcy5qc29uKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJpbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYnMge1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHJpdmF0ZSBvYmpWYWx1ZTogYW55O1xuICAgIHByaXZhdGUgY2hvaWNlc0NsYXNzZXM6IEFycmF5PHN0cmluZz47XG4gICAga29WZXJiczogYW55O1xuICAgIGtvSGFzVmVyYnM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb1ZlcmJzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzQ2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvYmooKTogYW55IHsgcmV0dXJuIHRoaXMub2JqVmFsdWUgfVxuICAgIHB1YmxpYyBzZXQgb2JqKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqVmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5vYmpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkVmVyYnMoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZFZlcmJzKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZSh0aGlzLm9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMub2JqO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlc0NsYXNzZXMuaW5kZXhPZihxdWVzdGlvbi5nZXRUeXBlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29WZXJicyhhcnJheSk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyhhcnJheS5sZW5ndGggPiAwKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkl0ZW0ge1xuICAgIGtvSXRlbXM6IGFueTtcbiAgICBrb1NlbGVjdGVkSXRlbTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0gZXh0ZW5kcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc3VydmV5LCBxdWVzdGlvbiwgb25Nb2RpZmllZENhbGxiYWNrKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgdmFsdWU6IGNsYXNzZXNbaV0ubmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInF0LlwiICsgY2xhc3Nlc1tpXS5uYW1lKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHF1ZXN0aW9uLmdldFR5cGUoKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlVHlwZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlVHlwZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlVHlwZShxdWVzdGlvblR5cGU6IHN0cmluZykge1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlID09IHRoaXMucXVlc3Rpb24uZ2V0VHlwZSgpKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCB0aGlzLnF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIganNvbiA9IGpzb25PYmoudG9Kc29uT2JqZWN0KHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGpzb24sIG5ld1F1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5yZW1vdmVRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5hZGRRdWVzdGlvbihuZXdRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBwcml2YXRlIHByZXZQYWdlOiBTdXJ2ZXkuUGFnZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogcGFnZSwgdGV4dDogU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcbiAgICAgICAgdGhpcy5wcmV2UGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0odGhpcy5wcmV2UGFnZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlUGFnZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlUGFnZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlUGFnZShuZXdQYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICBpZiAobmV3UGFnZSA9PSBudWxsIHx8IG5ld1BhZ2UgPT0gdGhpcy5wcmV2UGFnZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnByZXZQYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBuZXdQYWdlLmFkZFF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RWZXJicy50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlVbmRvUmVkbyB7XG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8VW5kb1JlZG9JdGVtPjtcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMga29DYW5VbmRvOiBhbnk7IGtvQ2FuUmVkbzogYW55O1xuICAgIHB1YmxpYyBtYXhpbXVtQ291bnQ6IG51bWJlciA9IDEwO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMua29DYW5VbmRvID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua29DYW5SZWRvID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyhmYWxzZSk7XG4gICAgICAgIHRoaXMua29DYW5SZWRvKGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIHNldEN1cnJlbnQoc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBzZWxlY3RlZE9iak5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBVbmRvUmVkb0l0ZW0oKTtcbiAgICAgICAgaXRlbS5zdXJ2ZXlKU09OID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHN1cnZleSk7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWRPYmpOYW1lID0gc2VsZWN0ZWRPYmpOYW1lO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UodGhpcy5pbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5yZW1vdmVPbGREYXRhKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FuVW5kb1JlZG8oKTtcbiAgICB9XG4gICAgcHVibGljIHVuZG8oKTogVW5kb1JlZG9JdGVtIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblVuZG8pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5kb1VuZG9SZWRvKC0xKTtcbiAgICB9XG4gICAgcHVibGljIHJlZG8oKTogVW5kb1JlZG9JdGVtICB7XG4gICAgICAgIGlmICghdGhpcy5jYW5SZWRvKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9VbmRvUmVkbygxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVDYW5VbmRvUmVkbygpIHtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8odGhpcy5jYW5VbmRvKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8odGhpcy5jYW5SZWRvKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb1VuZG9SZWRvKGRJbmRleDogbnVtYmVyKTogVW5kb1JlZG9JdGVtIHtcbiAgICAgICAgdGhpcy5pbmRleCArPSBkSW5kZXg7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FuVW5kb1JlZG8oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPj0gMCAmJiB0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdIDogbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjYW5VbmRvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAxICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjYW5SZWRvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiAxICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHByaXZhdGUgcmVtb3ZlT2xkRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA8IHRoaXMubWF4aW11bUNvdW50KSByZXR1cm47XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKDAsIHRoaXMuaXRlbXMubGVuZ3RoIC0gdGhpcy5tYXhpbXVtQ291bnQgLSAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmRvUmVkb0l0ZW0ge1xuICAgIHN1cnZleUpTT046IGFueTtcbiAgICBzZWxlY3RlZE9iak5hbWU6IHN0cmluZztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91bmRvcmVkby50cyIsImltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi9vYmplY3RFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UGFnZXNFZGl0b3J9IGZyb20gXCIuL3BhZ2VzRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi9zdXJ2ZXlFbWJlZGluZ1dpbmRvd1wiO1xuaW1wb3J0IHtTdXJ2ZXlPYmplY3RzfSBmcm9tIFwiLi9zdXJ2ZXlPYmplY3RzXCI7XG5pbXBvcnQge1N1cnZleVZlcmJzfSBmcm9tIFwiLi9vYmplY3RWZXJic1wiO1xuaW1wb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi90ZXh0V29ya2VyXCI7XG5pbXBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuL3VuZG9yZWRvXCI7XG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQge0RyYWdEcm9wSGVscGVyfSBmcm9tIFwiLi9kcmFnZHJvcGhlbHBlclwiO1xuaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcbmltcG9ydCB7aHRtbCBhcyB0ZW1wbGF0ZUVkaXRvckh0bWx9IGZyb20gXCIuL3RlbXBsYXRlRWRpdG9yLmtvLmh0bWxcIjtcbmltcG9ydCB7aHRtbCBhcyB0ZW1wbGF0ZVBhZ2VIdG1sfSBmcm9tIFwiLi90ZW1wbGF0ZV9wYWdlLmh0bWxcIjtcbmltcG9ydCB7aHRtbCBhcyB0ZW1wbGF0ZVF1ZXN0aW9uSHRtbH0gZnJvbSBcIi4vdGVtcGxhdGVfcXVlc3Rpb24uaHRtbFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUVkaXRvciB7XG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVUZXh0VGltZW91dDogbnVtYmVyID0gMTAwMDtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHROZXdTdXJ2ZXlUZXh0OiBzdHJpbmcgPSBcInsgcGFnZXM6IFt7IG5hbWU6ICdwYWdlMSd9XSB9XCI7XG4gICAgcHJpdmF0ZSByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3VydmV5anM6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3VydmV5anNFeGFtcGxlOiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUganNvbkVkaXRvcjogQWNlQWpheC5FZGl0b3I7XG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdJbW1lZGlhdGVseTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0RWRpdG9yOiBTdXJ2ZXlPYmplY3RFZGl0b3I7XG4gICAgcHJpdmF0ZSBwYWdlc0VkaXRvcjogU3VydmV5UGFnZXNFZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZzogU3VydmV5RW1iZWRpbmdXaW5kb3c7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBTdXJ2ZXlPYmplY3RzO1xuICAgIHByaXZhdGUgc3VydmV5VmVyYnM6IFN1cnZleVZlcmJzO1xuICAgIHByaXZhdGUgdGV4dFdvcmtlcjogU3VydmV5VGV4dFdvcmtlcjtcbiAgICBwcml2YXRlIHVuZG9SZWRvOiBTdXJ2ZXlVbmRvUmVkbztcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUgc2F2ZVN1cnZleUZ1bmNWYWx1ZTogKG5vOiBudW1iZXIsIG9uU2F2ZUNhbGxiYWNrOiAobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgb3B0aW9uczogYW55O1xuICAgIHByaXZhdGUgc3RhdGVWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGRyYWdEcm9wSGVscGVyOiBEcmFnRHJvcEhlbHBlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3VydmV5SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN1cnZleVBvc3RJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgcXVlc3Rpb25UeXBlczogc3RyaW5nW107XG4gICAgcHVibGljIGtvQ29waWVkUXVlc3Rpb25zOiBhbnk7XG4gICAgcHVibGljIGdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrOiAoZ2VuZXJhdGVWYWxpZEpTT046IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgcHVibGljIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAga29Jc1Nob3dEZXNpZ25lcjogYW55O1xuICAgIGtvVmlld1R5cGU6IGFueTtcbiAgICBrb0NhbkRlbGV0ZU9iamVjdDogYW55O1xuICAgIGtvT2JqZWN0czogYW55OyBrb1NlbGVjdGVkT2JqZWN0OiBhbnk7XG4gICAga29TaG93U2F2ZUJ1dHRvbjogYW55O1xuICAgIGtvR2VuZXJhdGVWYWxpZEpTT046IGFueTsga29TaG93T3B0aW9uczogYW55OyBrb1Rlc3RTdXJ2ZXlXaWR0aDogYW55O1xuICAgIHNlbGVjdERlc2lnbmVyQ2xpY2s6IGFueTsgc2VsZWN0RWRpdG9yQ2xpY2s6IGFueTsgc2VsZWN0VGVzdENsaWNrOiBhbnk7IHNlbGVjdEVtYmVkQ2xpY2s6IGFueTtcbiAgICBnZW5lcmF0ZVZhbGlkSlNPTkNsaWNrOiBhbnk7IGdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2s6IGFueTtcbiAgICBkb1VuZG9DbGljazogYW55OyBkb1JlZG9DbGljazogYW55O1xuICAgIGRlbGV0ZU9iamVjdENsaWNrOiBhbnk7XG4gICAga29TdGF0ZTogYW55O1xuICAgIHJ1blN1cnZleUNsaWNrOiBhbnk7IGVtYmVkaW5nU3VydmV5Q2xpY2s6IGFueTtcbiAgICBzYXZlQnV0dG9uQ2xpY2s6IGFueTtcbiAgICBkcmFnZ2luZ1F1ZXN0aW9uOiBhbnk7IGNsaWNrUXVlc3Rpb246IGFueTtcbiAgICBkcmFnZ2luZ0NvcGllZFF1ZXN0aW9uOiBhbnk7IGNsaWNrQ29waWVkUXVlc3Rpb246IGFueTtcbiAgICBkcmFnRW5kOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlZEVsZW1lbnQ6IGFueSA9IG51bGwsIG9wdGlvbnM6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5xdWVzdGlvblR5cGVzID0gdGhpcy5nZXRRdWVzdGlvblR5cGVzKCk7XG4gICAgICAgIHRoaXMua29Db3BpZWRRdWVzdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmtvU3RhdGUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29TaG93U2F2ZUJ1dHRvbiA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmtvU2hvd09wdGlvbnMgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCA9IGtvLm9ic2VydmFibGUoXCIxMDAlXCIpO1xuICAgICAgICB0aGlzLnNhdmVCdXR0b25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1NhdmUoKTsgfTtcbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkT2JqZWN0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNlbGVjdGVkT2JqZWN0Q2hhbmdlZChuZXdWYWx1ZSAhPSBudWxsID8gbmV3VmFsdWUudmFsdWUgOiBudWxsKTsgfSk7XG4gICAgICAgIHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTiA9IGtvLm9ic2VydmFibGUodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTik7XG4gICAgICAgIHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYub3B0aW9ucykgc2VsZi5vcHRpb25zID0ge307XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmIChzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKSBzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IG5ldyBTdXJ2ZXlPYmplY3RzKHRoaXMua29PYmplY3RzLCB0aGlzLmtvU2VsZWN0ZWRPYmplY3QpO1xuICAgICAgICB0aGlzLnVuZG9SZWRvID0gbmV3IFN1cnZleVVuZG9SZWRvKCk7XG5cbiAgICAgICAgdGhpcy5zdXJ2ZXlWZXJicyA9IG5ldyBTdXJ2ZXlWZXJicyhmdW5jdGlvbiAoKSB7IHNlbGYuc2V0TW9kaWZpZWQoKTsgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmFkZCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQob3B0aW9ucy5wcm9wZXJ0eSwgb3B0aW9ucy5vYmplY3QsIG9wdGlvbnMubmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYWdlc0VkaXRvciA9IG5ldyBTdXJ2ZXlQYWdlc0VkaXRvcigoKSA9PiB7IHNlbGYuYWRkUGFnZSgpOyB9LCAocGFnZTogU3VydmV5LlBhZ2UpID0+IHsgc2VsZi5zdXJ2ZXlPYmplY3RzLnNlbGVjdE9iamVjdChwYWdlKTsgfSxcbiAgICAgICAgICAgIChpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSA9PiB7IHNlbGYubW92ZVBhZ2UoaW5kZXhGcm9tLCBpbmRleFRvKTsgfSwgKHBhZ2U6IFN1cnZleS5QYWdlKSA9PiB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZyA9IG5ldyBTdXJ2ZXlFbWJlZGluZ1dpbmRvdygpO1xuXG4gICAgICAgIHRoaXMua29WaWV3VHlwZSA9IGtvLm9ic2VydmFibGUoXCJkZXNpZ25lclwiKTtcbiAgICAgICAgdGhpcy5rb0lzU2hvd0Rlc2lnbmVyID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5rb1ZpZXdUeXBlKCkgPT0gXCJkZXNpZ25lclwiOyB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3REZXNpZ25lckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dEZXNpZ25lcigpOyB9O1xuICAgICAgICB0aGlzLnNlbGVjdEVkaXRvckNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dKc29uRWRpdG9yKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0VGVzdENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dUZXN0U3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RW1iZWRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93RW1iZWRFZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVZhbGlkSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04odHJ1ZSk7IH07XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0dlbmVyYXRlVmFsaWRKU09OKGZhbHNlKTsgfTtcbiAgICAgICAgdGhpcy5ydW5TdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93TGl2ZVN1cnZleSgpOyB9O1xuICAgICAgICB0aGlzLmVtYmVkaW5nU3VydmV5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1N1cnZleUVtYmVkaW5nKCk7IH07XG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9O1xuICAgICAgICB0aGlzLmRyYWdnaW5nUXVlc3Rpb24gPSBmdW5jdGlvbiAocXVlc3Rpb25UeXBlLCBlKSB7IHNlbGYuZG9EcmFnZ2luZ1F1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgZSk7IH07XG4gICAgICAgIHRoaXMuY2xpY2tRdWVzdGlvbiA9IGZ1bmN0aW9uIChxdWVzdGlvblR5cGUpIHsgc2VsZi5kb0NsaWNrUXVlc3Rpb24ocXVlc3Rpb25UeXBlKTsgfTtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ0NvcGllZFF1ZXN0aW9uID0gZnVuY3Rpb24gKGl0ZW0sIGUpIHsgc2VsZi5kb0RyYWdnaW5nQ29waWVkUXVlc3Rpb24oaXRlbS5qc29uLCBlKTsgfTtcbiAgICAgICAgdGhpcy5jbGlja0NvcGllZFF1ZXN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5kb0NsaWNrQ29waWVkUXVlc3Rpb24oaXRlbS5qc29uKTsgfTtcbiAgICAgICAgdGhpcy5kcmFnRW5kID0gZnVuY3Rpb24gKGl0ZW0sIGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlci5lbmQoKTsgfTtcblxuICAgICAgICB0aGlzLmRvVW5kb0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvVW5kb1JlZG8oc2VsZi51bmRvUmVkby51bmRvKCkpOyB9O1xuICAgICAgICB0aGlzLmRvUmVkb0NsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRvVW5kb1JlZG8oc2VsZi51bmRvUmVkby5yZWRvKCkpOyB9O1xuXG4gICAgICAgIGlmIChyZW5kZXJlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1cnZleVZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVuZGVyKGVsZW1lbnQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudCA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gdGhpcy5yZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlRWRpdG9ySHRtbDtcbiAgICAgICAgc2VsZi5hcHBseUJpbmRpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIGxvYWRTdXJ2ZXkoc3VydmV5SWQ6IHN0cmluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIG5ldyBTdXJ2ZXkuZHhTdXJ2ZXlTZXJ2aWNlKCkubG9hZFN1cnZleShzdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoc3VjY2VzcyAmJiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRleHQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkpIHJldHVybiB0aGlzLmdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbkVkaXRvciAhPSBudWxsID8gdGhpcy5qc29uRWRpdG9yLmdldFZhbHVlKCkgOiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHRXb3JrZXIgPSBuZXcgU3VydmV5VGV4dFdvcmtlcih2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLnRleHRXb3JrZXIuc3VydmV5KSk7XG4gICAgICAgICAgICB0aGlzLnNob3dEZXNpZ25lcigpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMua29WaWV3VHlwZShcImVkaXRvclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN0YXRlVmFsdWU7IH1cbiAgICBwcm90ZWN0ZWQgc2V0U3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0YXRlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5rb1N0YXRlKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICBzYXZlTm86IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIGRvU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcInNhdmluZ1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZVN1cnZleUZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZU5vKys7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNhdmVTdXJ2ZXlGdW5jKHRoaXMuc2F2ZU5vLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvU2F2ZUNhbGxiYWNrKG5vOiBudW1iZXIsIGlzU3VjY2VzczogYm9vbGVhbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKFwic2F2ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNhdmVObyA9PSBubykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3VjY2Vzcykgc2VsZi5zZXRTdGF0ZShcInNhdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbHNlIFRPRE9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRNb2RpZmllZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcIm1vZGlmaWVkXCIpO1xuICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoY2xlYXJTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjbGVhclN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVuZG9SZWRvLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMua29TZWxlY3RlZE9iamVjdCgpID8gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLnVuZG9SZWRvLnNldEN1cnJlbnQodGhpcy5zdXJ2ZXlWYWx1ZSwgc2VsT2JqID8gc2VsT2JqLm5hbWUgOiBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzYXZlU3VydmV5RnVuYygpIHsgcmV0dXJuIHRoaXMuc2F2ZVN1cnZleUZ1bmNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2F2ZVN1cnZleUZ1bmModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5rb1Nob3dTYXZlQnV0dG9uKHZhbHVlICE9IG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNob3dPcHRpb25zKCkgeyByZXR1cm4gdGhpcy5rb1Nob3dPcHRpb25zKCk7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7IHRoaXMua29TaG93T3B0aW9ucyh2YWx1ZSk7IH1cbiAgICBwcml2YXRlIHNldFRleHRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yLnJlbmRlcmVyLnVwZGF0ZUZ1bGwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzSnNvbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGFkZFBhZ2UoKSB7XG4gICAgICAgIHZhciBuYW1lID0gU3VydmV5SGVscGVyLmdldE5ld1BhZ2VOYW1lKHRoaXMuc3VydmV5LnBhZ2VzKTtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXlWYWx1ZS5hZGROZXdQYWdlKG5hbWUpO1xuICAgICAgICB0aGlzLmFkZFBhZ2VUb1VJKHBhZ2UpO1xuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRMb2NTdHJpbmcoc3RyOiBzdHJpbmcpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoc3RyKTsgfVxuICAgIHByb3RlY3RlZCBnZXRRdWVzdGlvblR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgdmFyIGFsbFR5cGVzID0gU3VydmV5LlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5nZXRBbGxUeXBlcygpO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMgfHwgIXRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzLmxlbmd0aCkgcmV0dXJuIGFsbFR5cGVzO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnF1ZXN0aW9uVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlc1tpXTtcbiAgICAgICAgICAgIGlmIChhbGxUeXBlcy5pbmRleE9mKHF1ZXN0aW9uVHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHF1ZXN0aW9uVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBtb3ZlUGFnZShpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LnBhZ2VzW2luZGV4RnJvbV07XG4gICAgICAgIHRoaXMuc3VydmV5LnBhZ2VzLnNwbGljZShpbmRleEZyb20sIDEpO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhUbywgMCwgcGFnZSk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSlcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFBhZ2VUb1VJKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZFBhZ2UocGFnZSk7XG4gICAgfVxuICAgIHByaXZhdGUgb25RdWVzdGlvbkFkZGVkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZFF1ZXN0aW9uKHBhZ2UsIHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25RdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnJlbW92ZU9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSBwcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIG9ialtwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAocHJvcGVydHkubmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLm5hbWVDaGFuZ2VkKG9iaik7XG4gICAgICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLmNoYW5nZU5hbWUoPFN1cnZleS5QYWdlPm9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb1VuZG9SZWRvKGl0ZW06IFVuZG9SZWRvSXRlbSkge1xuICAgICAgICB0aGlzLmluaXRTdXJ2ZXkoaXRlbS5zdXJ2ZXlKU09OKTtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWRPYmpOYW1lKSB7XG4gICAgICAgICAgICB2YXIgc2VsT2JqID0gdGhpcy5maW5kT2JqQnlOYW1lKGl0ZW0uc2VsZWN0ZWRPYmpOYW1lKTtcbiAgICAgICAgICAgIGlmIChzZWxPYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbE9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnVuZG9SZWRvLmtvQ2FuVW5kbygpID8gXCJtb2RpZmllZFwiIDogXCJzYXZlZFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kT2JqQnlOYW1lKG5hbWU6IHN0cmluZyk6IFN1cnZleS5CYXNlIHtcbiAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5nZXRQYWdlQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAocGFnZSkgcmV0dXJuIHBhZ2U7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMuc3VydmV5LmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHJldHVybiBxdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY2FuU3dpdGNoVmlld1R5cGUobmV3VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChuZXdUeXBlICYmIHRoaXMua29WaWV3VHlwZSgpID09IG5ld1R5cGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMua29WaWV3VHlwZSgpICE9IFwiZWRpdG9yXCIgfHwgIXRoaXMudGV4dFdvcmtlcikgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghdGhpcy50ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3QpIHtcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuY29ycmVjdEpTT05cIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy50ZXh0V29ya2VyLnN1cnZleSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93RGVzaWduZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImRlc2lnbmVyXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImRlc2lnbmVyXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dKc29uRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgPT0gXCJlZGl0b3JcIikgcmV0dXJuO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3Iuc2V0VmFsdWUodGhpcy5nZXRTdXJ2ZXlUZXh0RnJvbURlc2lnbmVyKCkpO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dUZXN0U3VydmV5KCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpdGNoVmlld1R5cGUobnVsbCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93TGl2ZVN1cnZleSgpO1xuICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJ0ZXN0XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dFbWJlZEVkaXRvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXRjaFZpZXdUeXBlKFwiZW1iZWRcIikpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93U3VydmV5RW1iZWRpbmcoKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZW1iZWRcIik7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpIHtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5zdXJ2ZXkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDEpO1xuICAgICAgICByZXR1cm4gbmV3IFN1cnZleUpTT041KCkuc3RyaW5naWZ5KGpzb24sIG51bGwsIDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0Q2hhbmdlZChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBjYW5EZWxldGVPYmplY3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5zZWxlY3RlZE9iamVjdCA9IG9iajtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWZXJicy5vYmogPSBvYmo7XG4gICAgICAgIHZhciBvYmpUeXBlID0gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKTtcbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5QYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5jdXJyZW50UGFnZSA9IDxTdXJ2ZXkuUGFnZT5vYmo7XG4gICAgICAgICAgICBjYW5EZWxldGVPYmplY3QgPSB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGggPiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5W1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXShvYmopO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5zdXJ2ZXlbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlbXCJzZXRzZWxlY3RlZFF1ZXN0aW9uXCJdKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29DYW5EZWxldGVPYmplY3QoY2FuRGVsZXRlT2JqZWN0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRWxlbWVudCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnN1cnZleWpzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5anMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anMub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDQ2KSBzZWxmLmRlbGV0ZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAzOCB8fCBlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RRdWVzdGlvbihlLmtleUNvZGUgPT0gMzgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5qc29uRWRpdG9yID0gYWNlLmVkaXQoXCJzdXJ2ZXlqc0pTT05FZGl0b3JcIik7XG4gICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJ2ZXlqc0V4YW1wbGVcIik7XG5cbiAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXlKU09ONSgpLnBhcnNlKFN1cnZleUVkaXRvci5kZWZhdWx0TmV3U3VydmV5VGV4dCkpO1xuICAgICAgICB0aGlzLnNldFVuZG9SZWRvQ3VycmVudFN0YXRlKHRydWUpO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm1vZGUgPSBcImRlc2lnbmVyXCI7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUucmVuZGVyKHRoaXMuc3VydmV5anMpO1xuXG4gICAgICAgIHRoaXMuaW5pdEpzb25FZGl0b3IoKTtcbiAgICAgICAgU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhciA9IHRoaXMuanNvbkVkaXRvci5zZXNzaW9uLmRvYy5nZXROZXdMaW5lQ2hhcmFjdGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdEpzb25FZGl0b3IoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL2Nocm9tZVwiKTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNlc3Npb24uc2V0TW9kZShcImFjZS9tb2RlL2pzb25cIik7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci4kYmxvY2tTY3JvbGxpbmcgPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5qc29uRWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5nZXRTZXNzaW9uKCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFVzZVdvcmtlcih0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0U3VydmV5KGpzb246IGFueSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLmRyYWdEcm9wSGVscGVyID0gbmV3IERyYWdEcm9wSGVscGVyKDxTdXJ2ZXkuSVN1cnZleT50aGlzLnN1cnZleSwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldE1vZGlmaWVkKCkgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJkcmFnRHJvcEhlbHBlclwiXSA9IHRoaXMuZHJhZ0Ryb3BIZWxwZXI7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJzZXRKc29uT2JqZWN0XCJdKGpzb24pOyAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KG5ldyBTdXJ2ZXlKU09ONSgpLnBhcnNlKFN1cnZleUVkaXRvci5kZWZhdWx0TmV3U3VydmV5VGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5Lm1vZGUgPSBcImRlc2lnbmVyXCI7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbmRlcltcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlW1wib25Db3B5UXVlc3Rpb25cIl0uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5jb3B5UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcIm9uRmFzdENvcHlRdWVzdGlvblwiXS5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmZhc3RDb3B5UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblByb2Nlc3NIdG1sLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMuaHRtbCA9IHNlbGYucHJvY2Vzc0h0bWwob3B0aW9ucy5odG1sKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnNlbmRlci5jdXJyZW50UGFnZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25BZGRlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLm9uUXVlc3Rpb25BZGRlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25RdWVzdGlvblJlbW92ZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5vblF1ZXN0aW9uUmVtb3ZlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0h0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFodG1sKSByZXR1cm4gaHRtbDtcbiAgICAgICAgdmFyIHNjcmlwdFJlZ0V4ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XG4gICAgICAgIHdoaWxlIChzY3JpcHRSZWdFeC50ZXN0KGh0bWwpKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKHNjcmlwdFJlZ0V4LCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgb25Kc29uRWRpdG9yQ2hhbmdlZCgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0SWQgPiAtMSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmdJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0SWQgPSAtMTtcbiAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NKc29uKHNlbGYudGV4dCk7XG4gICAgICAgICAgICB9LCBTdXJ2ZXlFZGl0b3IudXBkYXRlVGV4dFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0pzb24odGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGV4dCk7XG4gICAgICAgIGlmICh0aGlzLmpzb25FZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvci5nZXRTZXNzaW9uKCkuc2V0QW5ub3RhdGlvbnModGhpcy5jcmVhdGVBbm5vdGF0aW9ucyh0ZXh0LCB0aGlzLnRleHRXb3JrZXIuZXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkb0RyYWdnaW5nUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBhbnksIGUpIHtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zdGFydERyYWdOZXdRdWVzdGlvbihlLCBxdWVzdGlvblR5cGUsIHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvRHJhZ2dpbmdDb3BpZWRRdWVzdGlvbihqc29uOiBhbnksIGUpIHtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zdGFydERyYWdDb3BpZWRRdWVzdGlvbihlLCB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpLCBqc29uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb0NsaWNrUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kb0NsaWNrUXVlc3Rpb25Db3JlKFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCB0aGlzLmdldE5ld1F1ZXN0aW9uTmFtZSgpKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja0NvcGllZFF1ZXN0aW9uKGpzb246IGFueSkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCk7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24oanNvbltcInR5cGVcIl0sIG5hbWUpO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCBxdWVzdGlvbik7XG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRvQ2xpY2tRdWVzdGlvbkNvcmUocXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld1F1ZXN0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld1F1ZXN0aW9uTmFtZSh0aGlzLnN1cnZleS5nZXRBbGxRdWVzdGlvbnMoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5W1wic2VsZWN0ZWRRdWVzdGlvblZhbHVlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZih0aGlzLnN1cnZleVtcInNlbGVjdGVkUXVlc3Rpb25WYWx1ZVwiXSkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2UuYWRkUXVlc3Rpb24ocXVlc3Rpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZVF1ZXN0aW9uKCkge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VycmVudE9iamVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2VsZWN0UXVlc3Rpb24oaXNVcDogYm9vbGVhbikge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpO1xuICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3ROZXh0UXVlc3Rpb24oaXNVcClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkT2JqQXNRdWVzdGlvbigpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlO1xuICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUXVlc3Rpb24gPyA8U3VydmV5LlF1ZXN0aW9uQmFzZT4ob2JqKTogbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVDdXJyZW50T2JqZWN0KCkge1xuICAgICAgICB0aGlzLmRlbGV0ZU9iamVjdCh0aGlzLmtvU2VsZWN0ZWRPYmplY3QoKS52YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjb3B5UXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShxdWVzdGlvbik7XG4gICAgICAgIGlmIChvYmpUeXBlICE9IE9ialR5cGUuUXVlc3Rpb24pIHJldHVybjtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QocXVlc3Rpb24pO1xuICAgICAgICBqc29uLnR5cGUgPSBxdWVzdGlvbi5nZXRUeXBlKCk7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRDb3BpZWRRdWVzdGlvbkJ5TmFtZShxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uanNvbiA9IGpzb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtvQ29waWVkUXVlc3Rpb25zLnB1c2goeyBuYW1lOiBxdWVzdGlvbi5uYW1lLCBqc29uOiBqc29uIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtvQ29waWVkUXVlc3Rpb25zKCkubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgdGhpcy5rb0NvcGllZFF1ZXN0aW9ucy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmFzdENvcHlRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgdGhpcy5kb0NsaWNrQ29waWVkUXVlc3Rpb24oIGpzb24gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvcGllZFF1ZXN0aW9uQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvQ29waWVkUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiBpdGVtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVPYmplY3Qob2JqOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnJlbW92ZU9iamVjdChvYmopO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkucmVtb3ZlUGFnZShvYmopO1xuICAgICAgICAgICAgdGhpcy5wYWdlc0VkaXRvci5yZW1vdmVQYWdlKG9iaik7XG4gICAgICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialR5cGUgPT0gT2JqVHlwZS5RdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UucmVtb3ZlUXVlc3Rpb24ob2JqKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5W1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXShudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QodGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3dMaXZlU3VydmV5KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3VydmV5anNFeGFtcGxlKSByZXR1cm47XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIGlmIChqc29uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvb2tpZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUganNvbi5jb29raWVOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuU3VydmV5KGpzb24pO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZVJlc3VsdHNcIik7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlcmVSdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnZleWpzRXhhbXBsZXJlUnVuXCIpO1xuICAgICAgICAgICAgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVyZVJ1bikgc3VydmV5anNFeGFtcGxlcmVSdW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXkpID0+IHsgaWYgKHN1cnZleWpzRXhhbXBsZVJlc3VsdHMpIHN1cnZleWpzRXhhbXBsZVJlc3VsdHMuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5zdXJ2ZXlSZXN1bHRzXCIpICsgSlNPTi5zdHJpbmdpZnkoc3VydmV5LmRhdGEpOyBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIlwiOyB9KTtcbiAgICAgICAgICAgIHN1cnZleS5yZW5kZXIodGhpcy5zdXJ2ZXlqc0V4YW1wbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlqc0V4YW1wbGUuaW5uZXJIVE1MID0gdGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNob3dTdXJ2ZXlFbWJlZGluZygpIHtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5qc29uID0ganNvbjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zdXJ2ZXlJZCA9IHRoaXMuc3VydmV5SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5UG9zdElkID0gdGhpcy5zdXJ2ZXlQb3N0SWQ7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuZ2VuZXJhdGVWYWxpZEpTT04gPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmdlbmVyYXRlVmFsaWRKU09OO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnNob3coKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTdXJ2ZXlKU09OKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5zdXJ2ZXkpO1xuICAgICAgICBpZiAodGhpcy50ZXh0V29ya2VyLmlzSnNvbkNvcnJlY3QpIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy50ZXh0V29ya2VyLnN1cnZleSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG59XG5cblN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFwiYm9vdHN0cmFwXCI7XG5uZXcgU3VydmV5LlN1cnZleVRlbXBsYXRlVGV4dCgpLnJlcGxhY2VUZXh0KHRlbXBsYXRlUGFnZUh0bWwsIFwicGFnZVwiKTtcbm5ldyBTdXJ2ZXkuU3VydmV5VGVtcGxhdGVUZXh0KCkucmVwbGFjZVRleHQodGVtcGxhdGVRdWVzdGlvbkh0bWwsIFwicXVlc3Rpb25cIik7XG5cblN1cnZleS5TdXJ2ZXkucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5vblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHRoaXMub25Db3B5UXVlc3Rpb24gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgdGhpcy5vbkZhc3RDb3B5UXVlc3Rpb24gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuY29weVF1ZXN0aW9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db3B5UXVlc3Rpb24uZmlyZShzZWxmKTsgfTtcbiAgICB0aGlzLmZhc3RDb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uIChxdWVzdGlvbikgeyBzZWxmLm9uRmFzdENvcHlRdWVzdGlvbi5maXJlKHNlbGYvKiwgcXVlc3Rpb24qLyk7IH07XG4gICAgdGhpcy5rb0RyYWdnaW5nU291cmNlID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbn07XG5TdXJ2ZXkuU3VydmV5LnByb3RvdHlwZVtcInNldHNlbGVjdGVkUXVlc3Rpb25cIl0gPSBmdW5jdGlvbih2YWx1ZTogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgIGlmICh2YWx1ZSA9PSB0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSkgcmV0dXJuO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlID0gdmFsdWU7XG4gICAgaWYgKG9sZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgb2xkVmFsdWVbXCJvblNlbGVjdGVkUXVlc3Rpb25DaGFuZ2VkXCJdKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkUXVlc3Rpb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvblZhbHVlW1wib25TZWxlY3RlZFF1ZXN0aW9uQ2hhbmdlZFwiXSgpO1xuICAgIH1cbiAgICB0aGlzLm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWQuZmlyZSh0aGlzLCB7ICdvbGRTZWxlY3RlZFF1ZXN0aW9uJzogb2xkVmFsdWUsICduZXdTZWxlY3RlZFF1ZXN0aW9uJzogdmFsdWUgfSk7XG59O1xuU3VydmV5LlN1cnZleS5wcm90b3R5cGVbXCJnZXRFZGl0b3JMb2NTdHJpbmdcIl0gPSBmdW5jdGlvbiAodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcodmFsdWUpO1xufTtcblxuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5kcmFnRW50ZXJDb3VudGVyID0gMDtcbiAgICB0aGlzLmtvRHJhZ2dpbmcgPSBrby5vYnNlcnZhYmxlKC0xKTtcbiAgICB0aGlzLmtvRHJhZ2dpbmdRdWVzdGlvbiA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgdGhpcy5rb0RyYWdnaW5nQm90dG9tID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgdGhpcy5rb0RyYWdnaW5nLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlIDwgMCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRW50ZXJDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHNlbGYua29EcmFnZ2luZ1F1ZXN0aW9uKG51bGwpO1xuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nQm90dG9tKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IG5ld1ZhbHVlID49IDAgJiYgbmV3VmFsdWUgPCBzZWxmLnF1ZXN0aW9ucy5sZW5ndGggPyBzZWxmLnF1ZXN0aW9uc1tuZXdWYWx1ZV0gOiBudWxsO1xuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nUXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICAgICAgc2VsZi5rb0RyYWdnaW5nQm90dG9tKG5ld1ZhbHVlID09IHNlbGYucXVlc3Rpb25zLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmtvRHJhZ2dpbmdRdWVzdGlvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IGlmIChuZXdWYWx1ZSkgbmV3VmFsdWUua29Jc0RyYWdnaW5nKHRydWUpOyB9KTtcbiAgICB0aGlzLmtvRHJhZ2dpbmdRdWVzdGlvbi5zdWJzY3JpYmUoZnVuY3Rpb24gKG9sZFZhbHVlKSB7IGlmIChvbGRWYWx1ZSkgb2xkVmFsdWUua29Jc0RyYWdnaW5nKGZhbHNlKTsgfSwgdGhpcywgXCJiZWZvcmVDaGFuZ2VcIik7XG4gICAgdGhpcy5kcmFnRW50ZXIgPSBmdW5jdGlvbiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IHNlbGYuZHJhZ0VudGVyQ291bnRlcisrOyBzZWxmLmRvRHJhZ0VudGVyKGUpOyB9O1xuICAgIHRoaXMuZHJhZ0xlYXZlID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRW50ZXJDb3VudGVyLS07IGlmIChzZWxmLmRyYWdFbnRlckNvdW50ZXIgPT09IDApIHNlbGYuZG9EcmFnTGVhdmUoZSk7IH07XG4gICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZG9Ecm9wKGUpOyB9O1xufTtcblN1cnZleS5QYWdlLnByb3RvdHlwZVtcImRvRHJvcFwiXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGRyYWdEcm9wSGVscGVyID0gdGhpcy5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgaWYgKGRyYWdEcm9wSGVscGVyKSB7XG4gICAgICAgIGRyYWdEcm9wSGVscGVyLmRvRHJvcChlKTtcbiAgICB9XG59O1xuU3VydmV5LlBhZ2UucHJvdG90eXBlW1wiZG9EcmFnRW50ZXJcIl0gPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMucXVlc3Rpb25zLmxlbmd0aCA+IDAgfHwgdGhpcy5rb0RyYWdnaW5nKCkgPiAwKSByZXR1cm47XG4gICAgdmFyIGRyYWdEcm9wSGVscGVyID0gdGhpcy5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgaWYgKGRyYWdEcm9wSGVscGVyICYmIGRyYWdEcm9wSGVscGVyLmlzU3VydmV5RHJhZ2dpbmcoZSkpIHtcbiAgICAgICAgdGhpcy5rb0RyYWdnaW5nKDApO1xuICAgIH1cbn07XG5TdXJ2ZXkuUGFnZS5wcm90b3R5cGVbXCJkb0RyYWdMZWF2ZVwiXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGRyYWdEcm9wSGVscGVyID0gdGhpcy5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgaWYgKGRyYWdEcm9wSGVscGVyKSB7XG4gICAgICAgIGRyYWdEcm9wSGVscGVyLmRvTGVhdmVQYWdlKGUpO1xuICAgIH1cbn07XG5cblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5kcmFnRHJvcEhlbHBlclZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmtvSXNEcmFnZ2luZyA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMua29Jc0RyYWdnaW5nU291cmNlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgdGhpcy5kcmFnRHJvcEhlbHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPSBzZWxmLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5kcmFnT3ZlciA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0RyYWdEcm9wT3ZlcihlLCBzZWxmKTsgfTtcbiAgICB0aGlzLmRyYWdEcm9wID0gZnVuY3Rpb24gKGUpIHsgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmRvRHJvcChlLCBzZWxmKTsgfTtcbiAgICB0aGlzLmRyYWdTdGFydCA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5zdGFydERyYWdRdWVzdGlvbihlLCBzZWxmLm5hbWUpOyB9O1xuICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uIChlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5lbmQoKTsgfTtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHRoaXMua29PbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgICAgc2VsZi5kYXRhW1wic2V0c2VsZWN0ZWRRdWVzdGlvblwiXSh0aGlzKTtcbiAgICB9XG59O1xuXG5TdXJ2ZXkuUXVlc3Rpb25CYXNlLnByb3RvdHlwZVtcIm9uU2VsZWN0ZWRRdWVzdGlvbkNoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZFF1ZXN0aW9uVmFsdWVcIl0gPT0gdGhpcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci50cyIsImltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RJdGVtIHtcbiAgICBwdWJsaWMgdmFsdWU6IFN1cnZleS5CYXNlO1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RzIHtcbiAgICBwdWJsaWMgc3RhdGljIGludGVuZDogc3RyaW5nID0gXCIuLi5cIjtcbiAgICBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBrb09iamVjdHM6IGFueSwgcHVibGljIGtvU2VsZWN0ZWQ6IGFueSkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHN1cnZleSh2YWx1ZTogU3VydmV5LlN1cnZleSkge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlYnVpbGQoKTtcbiAgICB9XG4gICAgcHVibGljIGFkZFBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIHBhZ2VJdGVtID0gdGhpcy5jcmVhdGVQYWdlKHBhZ2UpO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnN1cnZleS5wYWdlcy5pbmRleE9mKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICB2YXIgcHJldlBhZ2UgPSB0aGlzLnN1cnZleS5wYWdlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChwcmV2UGFnZSkgKyAxO1xuICAgICAgICAgICAgaW5kZXggKz0gcHJldlBhZ2UucXVlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMTsgLy8wIC0gU3VydmV5XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJdGVtKHBhZ2VJdGVtLCBpbmRleCk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVRdWVzdGlvbihwYWdlLnF1ZXN0aW9uc1tpXSk7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgaW5kZXggKyBpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQocGFnZUl0ZW0pO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUXVlc3Rpb24ocGFnZTogU3VydmV5LlBhZ2UsIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHZhciBxdWVzdGlvbkluZGV4ID0gcGFnZS5xdWVzdGlvbnMuaW5kZXhPZihxdWVzdGlvbikgKyAxO1xuICAgICAgICBpbmRleCArPSBxdWVzdGlvbkluZGV4O1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQoaXRlbSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZWxlY3RPYmplY3Qob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9ianNbaV0udmFsdWUgPT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG9ianNbaV0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlT2JqZWN0KG9iajogU3VydmV5LkJhc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgICB2YXIgY291bnRUb1JlbW92ZSA9IDE7XG4gICAgICAgIGlmIChTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgdmFyIHBhZ2U6IFN1cnZleS5QYWdlID0gPFN1cnZleS5QYWdlPm9iajtcbiAgICAgICAgICAgIGNvdW50VG9SZW1vdmUgKz0gcGFnZS5xdWVzdGlvbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29PYmplY3RzLnNwbGljZShpbmRleCwgY291bnRUb1JlbW92ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBuYW1lQ2hhbmdlZChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5rb09iamVjdHMoKVtpbmRleF0udGV4dCh0aGlzLmdldFRleHQob2JqKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZWxlY3ROZXh0UXVlc3Rpb24oaXNVcDogYm9vbGVhbikge1xuICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFNlbGVjdGVkUXVlc3Rpb24oKTtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHF1ZXN0aW9uKTtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA8IDApIHJldHVybiBxdWVzdGlvbjtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICB2YXIgbmV3SXRlbUluZGV4ID0gaXRlbUluZGV4ICsgKGlzVXAgPyAtMSA6IDEpO1xuICAgICAgICBpZiAobmV3SXRlbUluZGV4IDwgb2Jqcy5sZW5ndGggJiYgU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2Jqc1tuZXdJdGVtSW5kZXhdLnZhbHVlKSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBpdGVtSW5kZXggPSBuZXdJdGVtSW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJdGVtSW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICAgICAgICB3aGlsZSAobmV3SXRlbUluZGV4IDwgb2Jqcy5sZW5ndGggJiYgU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2Jqc1tuZXdJdGVtSW5kZXhdLnZhbHVlKSA9PSBPYmpUeXBlLlF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gbmV3SXRlbUluZGV4O1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1JbmRleCArPSAoaXNVcCA/IDEgOiAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKG9ianNbaXRlbUluZGV4XSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRRdWVzdGlvbigpOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvU2VsZWN0ZWQoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtvU2VsZWN0ZWQoKS52YWx1ZTtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlF1ZXN0aW9uID8gPFN1cnZleS5RdWVzdGlvbkJhc2U+KG9iaikgOiBudWxsO1xuXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShpdGVtOiBTdXJ2ZXlPYmplY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMua29PYmplY3RzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlYnVpbGQoKSB7XG4gICAgICAgIHZhciBvYmpzID0gW107XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgICAgIHRoaXMua29TZWxlY3RlZChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvYmpzLnB1c2godGhpcy5jcmVhdGVJdGVtKHRoaXMuc3VydmV5LCBcIlN1cnZleVwiKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LnBhZ2VzW2ldO1xuICAgICAgICAgICAgb2Jqcy5wdXNoKHRoaXMuY3JlYXRlUGFnZShwYWdlKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhZ2UucXVlc3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHRoaXMuY3JlYXRlUXVlc3Rpb24ocGFnZS5xdWVzdGlvbnNbal0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRoaXMuc3VydmV5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUl0ZW0ocGFnZSwgdGhpcy5nZXRUZXh0KHBhZ2UpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJdGVtKHF1ZXN0aW9uLCB0aGlzLmdldFRleHQocXVlc3Rpb24pKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVJdGVtKHZhbHVlOiBTdXJ2ZXkuQmFzZSwgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFN1cnZleU9iamVjdEl0ZW0oKTtcbiAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpdGVtLnRleHQgPSBrby5vYnNlcnZhYmxlKHRleHQpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJdGVtSW5kZXgodmFsdWU6IFN1cnZleS5CYXNlKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IHZhbHVlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dChvYmo6IFN1cnZleS5CYXNlKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGludGVuZCA9IFN1cnZleU9iamVjdHMuaW50ZW5kO1xuICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSAhPSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIGludGVuZCArPSBTdXJ2ZXlPYmplY3RzLmludGVuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50ZW5kICsgU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUob2JqKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleU9iamVjdHMudHMiLCJleHBvcnQgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInN2ZF9jb250YWluZXJcIj4gIDx1bCBjbGFzcz1cIm5hdmJhci1kZWZhdWx0IGNvbnRhaW5lci1mbHVpZCBuYXYgbmF2LXRhYnMgc3ZkX21lbnVcIj4gICAgPGxpIGRhdGEtYmluZD1cImNzczogeyBhY3RpdmU6IGtvVmlld1R5cGUoKSA9PSBcXCdkZXNpZ25lclxcJyB9XCI+PGEgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdERlc2lnbmVyQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5kZXNpZ25lclxcJylcIj48L2E+PC9saT4gICAgPGxpIGRhdGEtYmluZD1cImNzczogeyBhY3RpdmU6IGtvVmlld1R5cGUoKSA9PSBcXCd0ZXN0XFwnIH1cIj48YSBkYXRhLWJpbmQ9XCJjbGljazogc2VsZWN0VGVzdENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQudGVzdFN1cnZleVxcJylcIj48L2E+PC9saT4gICAgPGxpIGRhdGEtYmluZD1cImNzczogeyBhY3RpdmU6IGtvVmlld1R5cGUoKSA9PSBcXCdlZGl0b3JcXCcgfVwiPjxhIGRhdGEtYmluZD1cImNsaWNrOiBzZWxlY3RFZGl0b3JDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmpzb25FZGl0b3JcXCcpXCI+PC9hPjwvbGk+ICAgIDwhLS0gPGxpIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09IFxcJ2VtYmVkXFwnfVwiPjxhIGRhdGEtYmluZD1cImNsaWNrOiBzZWxlY3RFbWJlZENsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuZW1iZWRTdXJ2ZXlcXCcpXCI+PC9hPjwvbGk+IC0tPiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj4gICAgICA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6IGtvSXNTaG93RGVzaWduZXJcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IHVuZG9SZWRvLmtvQ2FuVW5kbywgY2xpY2s6IGRvVW5kb0NsaWNrXCI+PHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnVuZG9cXCcpXCI+PC9zcGFuPjwvYnV0dG9uPjwvbGk+ICAgICAgPGxpIGNsYXNzPVwic3ZkX2FjdGlvbnNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0lzU2hvd0Rlc2lnbmVyXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiB1bmRvUmVkby5rb0NhblJlZG8sIGNsaWNrOiBkb1JlZG9DbGlja1wiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5yZWRvXFwnKVwiPjwvc3Bhbj48L2J1dHRvbj48L2xpPiAgICAgIDwhLS0gPGxpIGNsYXNzPVwic3ZkX2FjdGlvbnNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0lzU2hvd0Rlc2lnbmVyXCI+ICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvU2hvd09wdGlvbnMoKVwiIGNsYXNzPVwiYnRuLWdyb3VwIGlubGluZVwiPiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQub3B0aW9uc1xcJylcIj5PcHRpb25zIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+PC9idXR0b24+ICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj4gICAgICAgICAgICA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBrb0dlbmVyYXRlVmFsaWRKU09OfVwiPjxhIGhyZWY9XCIjXCIgZGF0YS1iaW5kPVwiY2xpY2s6IGdlbmVyYXRlVmFsaWRKU09OQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5nZW5lcmF0ZVZhbGlkSlNPTlxcJylcIj48L2E+PC9saT4gICAgICAgICAgICA8bGkgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAha29HZW5lcmF0ZVZhbGlkSlNPTigpfVwiPjxhIGhyZWY9XCIjXCIgZGF0YS1iaW5kPVwiY2xpY2s6IGdlbmVyYXRlUmVhZGFibGVKU09OQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC5nZW5lcmF0ZVJlYWRhYmxlSlNPTlxcJylcIj48L2E+PC9saT4gICAgICAgICAgPC91bD4gICAgICAgIDwvZGl2PiAgICAgIDwvbGk+IC0tPiAgICAgIDxsaSBjbGFzcz1cInN2ZF9hY3Rpb25zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgZGF0YS1iaW5kPVwiY2xpY2s6IHNhdmVCdXR0b25DbGljaywgdmlzaWJsZToga29TaG93U2F2ZUJ1dHRvblwiIGlkPVwiYnRuLXNhdmVcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZWQuc2F2ZVN1cnZleVxcJylcIj48L3NwYW4+PC9idXR0b24+PC9saT4gICAgICA8bGkgY2xhc3M9XCJzdmRfYWN0aW9uc1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPVxcJy9hZG1pbi8/dz1zdXJ2ZXlzXFwnXCI+PHNwYW4+QmFjazwvc3Bhbj48L2J1dHRvbj48L2xpPiAgICAgIDwhLS0gPGxpIGNsYXNzPVwiZWRpdG9yLXRvcG5hdi1yaWdodFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25jbGljaz1cImxvY2F0aW9uLmhyZWY9XFwnL2FkbWluLz93PXN1cnZleXNcXCdcIj48c3Bhbj5CYWNrPC9zcGFuPjwvYnV0dG9uPjwvbGk+IC0tPiAgICA8L3VsPiAgPC91bD4gIDxkaXYgY2xhc3M9XCJwYW5lbCBzdmRfY29udGVudFwiPiAgICA8ZGl2IGNsYXNzPVwicm93IHN2ZF9zdXJ2ZXlfZGVzaWduZXJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZGVzaWduZXJcXCdcIj4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTEyIGNvbC14cy0xMiBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF90b29sYm94XCI+ICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwLXZlcnRpY2FsXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO3BhZGRpbmctcmlnaHQ6MnB4XCI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcXVlc3Rpb25UeXBlcyAtLT4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0OyBtYXJnaW46MXB4O3dpZHRoOjEwMCVcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2xpY2tRdWVzdGlvbiwgZXZlbnQ6IHsgZHJhZ3N0YXJ0OiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdnaW5nUXVlc3Rpb24oJGRhdGEsIGUpOyByZXR1cm4gdHJ1ZTt9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfX1cIj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJjc3M6IFxcJ2ljb24tXFwnICsgJGRhdGFcIj48L3NwYW4+ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmRfdG9vbGJveF9pdGVtX3RleHRcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncXQuXFwnICsgJGRhdGEpXCI+PC9zcGFuPiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29Db3BpZWRRdWVzdGlvbnMgLS0+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBzdHlsZT1cInRleHQtYWxpZ246bGVmdDttYXJnaW46MXB4O3dpZHRoOjEwMCVcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2xpY2tDb3BpZWRRdWVzdGlvbiwgZXZlbnQ6IHsgZHJhZ3N0YXJ0OiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdnaW5nQ29waWVkUXVlc3Rpb24oJGRhdGEsIGUpOyByZXR1cm4gdHJ1ZTt9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfX1cIj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tZGVmYXVsdFwiPjwvc3Bhbj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2ZF90b29sYm94X2l0ZW1fdGV4dFwiIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3NwYW4+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvZGl2PiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNyBjb2wtbWQtNyBjb2wtc20tMTIgY29sLXhzLTEyIHN2ZF9lZGl0b3JzXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwic3ZkX3BhZ2VzX2VkaXRvclwiIGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3BhZ2VlZGl0b3JcXCcsIGRhdGE6IHBhZ2VzRWRpdG9yIH1cIj48L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJzdmRfcXVlc3Rpb25zX2VkaXRvclwiIGlkPVwic2Nyb2xsYWJsZURpdlwiPiAgICAgICAgICA8ZGl2IGlkPVwic3VydmV5anNcIj48L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTIgY29sLXhzLTEyIHBhbmVsIHBhbmVsLWRlZmF1bHQgc3ZkX3Byb3BlcnRpZXNcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIGlucHV0LWdyb3VwXCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tc2VsZWN0XCI+ICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvT2JqZWN0cywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIHZhbHVlOiBrb1NlbGVjdGVkT2JqZWN0XCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+ICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IGtvQ2FuRGVsZXRlT2JqZWN0LCBjbGljazogZGVsZXRlQ3VycmVudE9iamVjdCwgYXR0cjogeyB0aXRsZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLmRlbFNlbE9iamVjdFxcJyl9XCI+PGkgY2xhc3M9XCJwZS1yZW1vdmVcIj48L2k+PC9idXR0b24+ICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ29iamVjdGVkaXRvclxcJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVwiPjwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiIGRhdGEtYmluZD1cInZpc2libGU6IHN1cnZleVZlcmJzLmtvSGFzVmVyYnNcIj4gICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdvYmplY3R2ZXJic1xcJywgZGF0YTogc3VydmV5VmVyYnMgfVwiPjwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGlkPVwic3VydmV5anNKU09ORWRpdG9yXCIgY2xhc3M9XCJzdmRfanNvbl9lZGl0b3JcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZWRpdG9yXFwnXCI+PC9kaXY+ICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc1Rlc3RcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwndGVzdFxcJywgc3R5bGU6IHt3aWR0aDoga29UZXN0U3VydmV5V2lkdGh9XCI+ICAgICAgPCEtLSA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGVzdFN1cnZleVdpZHRoXCI+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwJVwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnMTAwJVxcJ1wiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyMDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnMTIwMHB4XFwnXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTAwMHB4XCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlXaWR0aFxcJykgKyBcXCcxMDAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnODAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnNjAwcHhcXCdcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdlZC50ZXN0U3VydmV5V2lkdGhcXCcpICsgXFwnNDAwcHhcXCdcIj48L29wdGlvbj4gICAgICA8L3NlbGVjdD4gLS0+ICAgICAgPGRpdiBpZD1cInN1cnZleWpzRXhhbXBsZVwiPjwvZGl2PiAgICAgIDxkaXYgaWQ9XCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXCI+PC9kaXY+ICAgICAgPGJ1dHRvbiBpZD1cInN1cnZleWpzRXhhbXBsZXJlUnVuXCIgZGF0YS1iaW5kPVwiY2xpY2s6IHNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2VkLnRlc3RTdXJ2ZXlBZ2FpblxcJylcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlRlc3QgQWdhaW48L2J1dHRvbj4gICAgPC9kaXY+ICAgIDwhLS0gPGRpdiBpZD1cInN1cnZleWpzRW1iZWRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gXFwnZW1iZWRcXCdcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleWVtYmVkaW5nXFwnLCBkYXRhOiBzdXJ2ZXlFbWJlZGluZyB9XCI+PC9kaXY+ICAgIDwvZGl2PiAtLT4gIDwvZGl2PjwvZGl2PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwib2JqZWN0ZWRpdG9yXCI+ICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBzdmRfdGFibGUtbm93cmFwXCI+ICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiBrb1Byb3BlcnRpZXNcIj4gICAgICA8dHIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuY2hhbmdlQWN0aXZlUHJvcGVydHkoJGRhdGEpLCBjc3M6IHtcXCdhY3RpdmVcXCc6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhfVwiPiAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IGRpc3BsYXlOYW1lLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVwiIHdpZHRoPVwiNTAlXCIgc3R5bGU9XCJmb250LWZhbWlseTp1YnVudHU7IGZvbnQtc2l6ZToxMXB4XCI+PC90ZD4gICAgICAgIDx0ZCB3aWR0aD1cIjUwJVwiIHN0eWxlPVwiZm9udC1mYW1pbHk6Ym9vbjtmb250LXNpemU6MTRweFwiPiAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBrb1RleHQsIHZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpICE9ICRkYXRhICYmIChrb1RleHQoKSB8fCAkZGF0YS5lZGl0b3JUeXBlID09IFxcJ2Jvb2xlYW5cXCcpLCBhdHRyOiB7IHRpdGxlOiBrb1RleHQgfVwiIHN0eWxlPVwidGV4dC1vdmVyZmxvdzplbGxpcHNpczsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW5cIj48L3NwYW4+ICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogJHBhcmVudC5rb0FjdGl2ZVByb3BlcnR5KCkgPT0gJGRhdGEgfHwgKCFrb1RleHQoKSAmJiAkZGF0YS5lZGl0b3JUeXBlICE9IFxcJ2Jvb2xlYW5cXCcpXCI+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1cXCcgKyBlZGl0b3JUeXBlLCBkYXRhOiAkZGF0YSB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgPC90Ym9keT4gIDwvdGFibGU+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJvYmplY3R2ZXJic1wiPiAgPCEtLSBrbyBmb3JlYWNoOiBrb1ZlcmJzIC0tPiAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+ICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidGV4dDogdGV4dFwiPjwvc3Bhbj4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogXFwndGV4dFxcJywgb3B0aW9uc1ZhbHVlOiBcXCd2YWx1ZVxcJywgdmFsdWU6IGtvU2VsZWN0ZWRJdGVtXCI+PC9zZWxlY3Q+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwYWdlZWRpdG9yXCI+ICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBkYXRhLWJpbmQ9XCJ0YWJzOiB0cnVlXCI+ICAgIDwhLS0ga28gZm9yZWFjaDoga29QYWdlcyAtLT4gICAgPGxpIGRhdGEtYmluZD1cImNzczogeyBhY3RpdmU6IGtvU2VsZWN0ZWQoKX0sIGV2ZW50OiB7IGtleWRvd246IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQua2V5RG93bihlbCwgZSk7IH0sIGRyYWdzdGFydDogZnVuY3Rpb24oZWwsIGUpIHsgJHBhcmVudC5kcmFnU3RhcnQoZWwpOyByZXR1cm4gdHJ1ZTsgfSwgZHJhZ292ZXI6IGZ1bmN0aW9uKGVsLCBlKSB7ICRwYXJlbnQuZHJhZ092ZXIoZWwpOyB9LCBkcmFnZW5kOiBmdW5jdGlvbihlbCwgZSkgeyAkcGFyZW50LmRyYWdFbmQoKTsgfSwgZHJvcDogZnVuY3Rpb24oZWwsIGUpIHsgJHBhcmVudC5kcmFnRHJvcChlbCk7IH0gfVwiPiAgICAgIDxhIGNsYXNzPVwic3ZkX3BhZ2VfbmF2XCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQuc2VsZWN0UGFnZUNsaWNrXCI+PHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdGl0bGVcIj48L3NwYW4+PC9hPiAgICA8L2xpPiAgICA8IS0tIC9rbyAtLT4gICAgPGxpPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc3ZkX2FkZF9uZXdfcGFnZV9idG5cIiBkYXRhLWJpbmQ9XCJjbGljazogYWRkTmV3UGFnZUNsaWNrXCI+PGkgY2xhc3M9XCJwZS1wbHVzXCI+PC9pPjwvYnV0dG9uPjwvbGk+ICA8L3VsPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5ZW1iZWRpbmdcIj4gIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJ2YWx1ZToga29MaWJyYXJ5VmVyc2lvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCI+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwia25vY2tvdXRcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcua25vY2tvdXRcXCcpXCI+PC9vcHRpb24+ICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVhY3RcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcucmVhY3RcXCcpXCI+PC9vcHRpb24+ICAgICAgPC9zZWxlY3Q+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4gICAgICA8c2VsZWN0IGRhdGEtYmluZD1cInZhbHVlOiBrb1NjcmlwdFVzaW5nXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJib290c3RyYXBcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuYm9vdHN0cmFwXFwnKVwiPjwvb3B0aW9uPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YW5kYXJkXCIgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LnN0YW5kYXJkXFwnKVwiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJ2YWx1ZToga29TaG93QXNXaW5kb3dcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiPiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhZ2VcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuc2hvd09uUGFnZVxcJylcIj48L29wdGlvbj4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3aW5kb3dcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcuc2hvd0luV2luZG93XFwnKVwiPjwvb3B0aW9uPiAgICAgIDwvc2VsZWN0PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+ICAgICAgPGxhYmVsIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzSWRzXCI+ICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29Mb2FkU3VydmV5XCI+ICAgICAgICA8c21hbGwgZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ2V3LmxvYWRGcm9tU2VydmVyXFwnKVwiPjwvc21hbGw+ICAgICAgPC9sYWJlbD4gICAgPC9kaXY+ICA8L2Rpdj4gIDxicj4gIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVTY3JpcHRcXCcpXCI+PC9oND4gICAgICA8ZGl2IGlkPVwic3VydmV5RW1iZWRpbmdIZWFkXCIgc3R5bGU9XCJoZWlnaHQ6NzBweDt3aWR0aDoxMDAlXCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29WaXNpYmxlSHRtbFwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVIdG1sXFwnKVwiPjwvaDQ+ICAgICAgPGRpdiBpZD1cInN1cnZleUVtYmVkaW5nQm9keVwiIHN0eWxlPVwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVwiPjwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPiAgICAgIDxoNCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwnZXcudGl0bGVKYXZhU2NyaXB0XFwnKVwiPjwvaDQ+ICAgICAgPGRpdiBpZD1cInN1cnZleUVtYmVkaW5nSmF2YVwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O3dpZHRoOjEwMCVcIj48L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLWJvb2xlYW5cIj4gIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJjaGVja2JveFwiIGRhdGEtYmluZD1cImNoZWNrZWQ6IGtvVmFsdWVcIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLWRyb3Bkb3duXCI+ICA8ZGl2IGNsYXNzPVwiY3VzdG9tLXNlbGVjdFwiPiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXNcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj48L3NlbGVjdD4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItaHRtbFwiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1odG1sXCI+ICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29WYWx1ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHJvd3M9XCIxMFwiIGF1dG9mb2N1cz1cImF1dG9mb2N1c1wiPjwvdGV4dGFyZWE+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzXCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LWl0ZW12YWx1ZXNcIj4gIDxkaXYgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweFwiPiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPiAgICAgIDx0aGVhZD4gICAgICAgIDx0cj4gICAgICAgICAgPHRoPjwvdGg+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudmFsdWVcXCcpXCI+PC90aD4gICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50ZXh0XFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aD48L3RoPiAgICAgICAgPC90cj4gICAgICA8L3RoZWFkPiAgICAgIDx0Ym9keT4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkPiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14c1wiIGRhdGEtYmluZD1cInZpc2libGU6ICRpbmRleCgpID4gMCwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlVXBDbGlja1wiPjxpIGNsYXNzPVwicGUtYXJyb3ctdXBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+ICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4teHNcIiBzdHlsZT1cImZsb2F0Om5vbmVcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkaW5kZXgoKSA8ICRwYXJlbnQua29JdGVtcygpLmxlbmd0aCAtIDEsIGNsaWNrOiAkcGFyZW50Lm9uTW92ZURvd25DbGlja1wiPjxpIGNsYXNzPVwicGUtYXJyb3ctZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPC90ZD4gICAgICAgICAgPHRkPiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWVcIiBzdHlsZT1cIndpZHRoOjE1MHB4XCI+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1iaW5kPVwidmlzaWJsZTprb0hhc0Vycm9yLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuZW50ZXJOZXdWYWx1ZVxcJylcIj48L2Rpdj4gICAgICAgICAgPC90ZD4gICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGV4dFwiIHN0eWxlPVwid2lkdGg6MTUwcHhcIj48L3RkPiAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXCI+PGkgY2xhc3M9XCJwZS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj48L3RkPiAgICAgICAgPC90cj4gICAgICAgIDwhLS0gL2tvIC0tPiAgICAgIDwvdGJvZHk+ICAgIDwvdGFibGU+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJyb3cgYnRuLXRvb2xiYXJcIj4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiBkYXRhLWJpbmQ9XCJjbGljazogb25BZGRDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5hZGROZXdcXCcpXCI+ICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBkYXRhLWJpbmQ9XCJjbGljazogb25DbGVhckNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnJlbW92ZUFsbFxcJylcIj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zXCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LW1hdHJpeGRyb3Bkb3duY29sdW1uc1wiPiAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj4gICAgPHRoZWFkPiAgICAgIDx0cj4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUucmVxdWlyZWRcXCcpXCI+PC90aD4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuY2VsbFR5cGVcXCcpXCI+PC90aD4gICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUubmFtZVxcJylcIj48L3RoPiAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50aXRsZVxcJylcIj48L3RoPiAgICAgICAgPHRoPjwvdGg+ICAgICAgPC90cj4gICAgPC90aGVhZD4gICAgPHRib2R5PiAgICAgIDwhLS0ga28gZm9yZWFjaDoga29JdGVtcyAtLT4gICAgICA8dHI+ICAgICAgICA8dGQ+ICAgICAgICAgIDxhIGRhdGEtYmluZD1cInZpc2libGU6IGtvSGFzQ2hvaWNlcywgY2xpY2s6IG9uU2hvd0Nob2ljZXNDbGlja1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uXCIgZGF0YS1iaW5kPVwiY3NzOiB7XFwnZ2x5cGhpY29uLWNoZXZyb24tZG93blxcJzogIWtvU2hvd0Nob2ljZXMoKSwgXFwnZ2x5cGhpY29uLWNoZXZyb24tdXBcXCc6IGtvU2hvd0Nob2ljZXMoKX1cIj48L3NwYW4+PC9hPiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29Jc1JlcXVpcmVkXCI+ICAgICAgICA8L3RkPiAgICAgICAgPHRkPiAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwib3B0aW9uczogY2VsbFR5cGVDaG9pY2VzLCB2YWx1ZToga29DZWxsVHlwZVwiIHN0eWxlPVwid2lkdGg6MTEwcHhcIj48L3NlbGVjdD4gICAgICAgIDwvdGQ+ICAgICAgICA8dGQ+ICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvTmFtZVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBuby1wYWRkaW5nXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmVudGVyTmV3VmFsdWVcXCcpXCI+PC9kaXY+ICAgICAgICA8L3RkPiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVGl0bGVcIiBzdHlsZT1cIndpZHRoOjEyMHB4XCI+PC90ZD4gICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcIj48aSBjbGFzcz1cInBlLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvdGQ+ICAgICAgPC90cj4gICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZToga29TaG93Q2hvaWNlcygpICYmIGtvSGFzQ2hvaWNlcygpXCI+ICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIiBzdHlsZT1cImJvcmRlci10b3Atc3R5bGU6bm9uZVwiPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiRyb290LmdldExvY1N0cmluZyhcXCdwZS5oYXNPdGhlclxcJylcIj48L2xhYmVsPiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWJpbmQ9XCJjaGVja2VkOiBrb0hhc090aGVyXCI+PC9kaXY+ICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCIgZGF0YS1iaW5kPVwidmlzaWJsZTogIWtvSGFzQ29sQ291bnQoKVwiPjwvZGl2PiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0hhc0NvbENvdW50LCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUuY29sQ291bnRcXCcpXCI+PC9sYWJlbD4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtIGNvbC1zbS00XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29IYXNDb2xDb3VudCwgb3B0aW9uczogY29sQ291bnRDaG9pY2VzLCB2YWx1ZToga29Db2xDb3VudFwiIHN0eWxlPVwid2lkdGg6MTEwcHhcIj48L3NlbGVjdD4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHN2ZF9ub3RvcGJvdHRvbXBhZGRpbmdzXCI+ICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaXRlbXZhbHVlc1xcJywgZGF0YTogY2hvaWNlc0VkaXRvciB9IC0tPiAgICAgICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgICA8IS0tIC9rbyAtLT4gICAgICA8dHI+ICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYnRuLXRvb2xiYXJcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtYmluZD1cImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFkZE5ld1xcJylcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1iaW5kPVwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5yZW1vdmVBbGxcXCcpXCI+ICAgICAgICA8L2Rpdj4gICAgICAgIDwvdGQ+ICAgICAgPC90cj4gICAgPC90Ym9keT4gIDwvdGFibGU+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1tb2RhbFwiPiAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogIWVkaXRvci5pc0VkaXRhYmxlXCI+ICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGtvVGV4dFwiPjwvc3Bhbj4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIHN0eWxlPVwicGFkZGluZzoycHhcIiBkYXRhLWJpbmQ9XCJhdHRyOiB7IFxcJ2RhdGEtdGFyZ2V0XFwnIDogbW9kYWxOYW1lVGFyZ2V0IH1cIj48aSBjbGFzcz1cInBlLWVkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC9kaXY+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiIGRhdGEtYmluZD1cInZpc2libGU6IGVkaXRvci5pc0VkaXRhYmxlXCIgc3R5bGU9XCJkaXNwbGF5OnRhYmxlXCI+ICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVmFsdWVcIiBzdHlsZT1cImRpc3BsYXk6dGFibGUtY2VsbDsgd2lkdGg6MTAwJVwiPiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBzdHlsZT1cImRpc3BsYXk6dGFibGUtY2VsbDsgcGFkZGluZzoycHhcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1iaW5kPVwiYXR0cjogeyBcXCdkYXRhLXRhcmdldFxcJyA6IG1vZGFsTmFtZVRhcmdldCB9XCI+PGkgY2xhc3M9XCJwZS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPjwvZGl2PiAgPC9kaXY+ICA8ZGl2IGRhdGEtYmluZD1cImF0dHI6IHsgaWQgOiBtb2RhbE5hbWUgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIj4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+ICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+ICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj4gICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiBlZGl0b3IudGl0bGVcIj48L2g0PiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1wiPiAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yY29udGVudC1cXCcgKyBlZGl0b3JUeXBlLCBkYXRhOiBlZGl0b3IgfSAtLT4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtYmluZD1cImNsaWNrOiBlZGl0b3Iub25BcHBseUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFwcGx5XFwnKVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtYmluZD1cImNsaWNrOiBlZGl0b3Iub25SZXNldENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnJlc2V0XFwnKVwiIHN0eWxlPVwid2lkdGg6MTAwcHhcIj4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1iaW5kPVwidmFsdWU6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5jbG9zZVxcJylcIiBzdHlsZT1cIndpZHRoOjEwMHB4XCI+ICAgICAgICA8L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLW51bWJlclwiPiAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cIm51bWJlclwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbFwiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC1yZXN0ZnVsbFwiPiAgPGZvcm0+ICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+ICAgICAgPGxhYmVsIGZvcj1cInVybFwiPlVybDo8L2xhYmVsPiAgICAgIDxpbnB1dCBpZD1cInVybFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvVXJsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+ICAgICAgPGxhYmVsIGZvcj1cInBhdGhcIj5QYXRoOjwvbGFiZWw+ICAgICAgPGlucHV0IGlkPVwicGF0aFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwidmFsdWU6IGtvUGF0aFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJ2YWx1ZU5hbWVcIj52YWx1ZU5hbWU6PC9sYWJlbD4gICAgICA8aW5wdXQgaWQ9XCJ2YWx1ZU5hbWVcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlTmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZU5hbWVcIj50aXRsZU5hbWU6PC9sYWJlbD4gICAgICA8aW5wdXQgaWQ9XCJ0aXRsZU5hbWVcIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RpdGxlTmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+ICAgIDwvZGl2PiAgPC9mb3JtPiAgPGRpdiBpZD1cInJlc3RmdWxsU3VydmV5XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxNTBweFwiPjwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Itc3RyaW5nXCI+ICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10ZXh0XCI+ICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsXFwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3Jjb250ZW50LXRleHRcIj4gIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1ZhbHVlXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgcm93cz1cIjEwXCIgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCI+PC90ZXh0YXJlYT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXRleHRpdGVtc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0aXRlbXNcIj4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiPiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPiAgICAgIDx0aGVhZD4gICAgICAgIDx0cj4gICAgICAgICAgPHRoIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5uYW1lXFwnKVwiPjwvdGg+ICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudGl0bGVcXCcpXCI+PC90aD4gICAgICAgICAgPHRoPjwvdGg+ICAgICAgICA8L3RyPiAgICAgIDwvdGhlYWQ+ICAgICAgPHRib2R5PiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBrb0l0ZW1zIC0tPiAgICAgICAgPHRyPiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29OYW1lXCIgc3R5bGU9XCJ3aWR0aDoyMDBweFwiPjwvdGQ+ICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cInZhbHVlOiBrb1RpdGxlXCIgc3R5bGU9XCJ3aWR0aDoyMDBweFwiPjwvdGQ+ICAgICAgICAgIDwhLS0gPHRkPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1kYW5nZXJcIiBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmRlbGV0ZVxcJylcIj48L3RkPiAtLT4gICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25EZWxldGVDbGlja1wiPjxpIGNsYXNzPVwicGUtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+PC90ZD4gICAgICAgIDwvdHI+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDx0cj4gICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGRhdGEtYmluZD1cImNsaWNrOiBvbkFkZENsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmFkZE5ld1xcJylcIj48L3RkPiAgICAgICAgPC90cj4gICAgICA8L3Rib2R5PiAgICA8L3RhYmxlPiAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC10cmlnZ2Vyc1wiPiAgPGRpdiBjbGFzcz1cInBhbmVsXCI+ICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+ICAgICAgPGRpdiBjbGFzcz1cInJvdyBpbnB1dC1ncm91cFwiPiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgaW5wdXQtZ3JvdXAtYWRkb25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzcz1cInBlLXBsdXNcIj48L2k+PC9idXR0b24+ICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+ICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVHJpZ2dlcnMgLS0+ICAgICAgICAgIDxsaT48YSBkYXRhLWJpbmQ9XCJjbGljazogJHBhcmVudC5vbkFkZENsaWNrKCRkYXRhKVwiPjxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRkYXRhXCI+PC9zcGFuPjwvYT48L2xpPiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvdWw+ICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6IFxcJ2tvVGV4dFxcJywgdmFsdWU6IGtvU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzPVwicGUtcmVtb3ZlXCI+PC9pPjwvYnV0dG9uPjwvc3Bhbj4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZToga29TZWxlY3RlZCgpID09IG51bGxcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID09IDAsIHRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS5ub3F1ZXN0aW9uc1xcJylcIj48L2Rpdj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID4gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLmNyZWF0ZXRyaWdnZXJcXCcpXCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsXCI+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ3aXRoOiBrb1NlbGVjdGVkXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZvcm0taW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRyaWdnZXJPblxcJylcIj48L3NwYW4+PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6ICRwYXJlbnQua29RdWVzdGlvbnMsIHZhbHVlOiBrb05hbWVcIj48L3NlbGVjdD4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkYXRhLWJpbmQ9XCJvcHRpb25zOiBhdmFpbGFibGVPcGVyYXRvcnMsIG9wdGlvbnNWYWx1ZTogXFwnbmFtZVxcJywgb3B0aW9uc1RleHQ6IFxcJ3RleHRcXCcsIHZhbHVlOiBrb09wZXJhdG9yXCI+PC9zZWxlY3Q+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiB0eXBlPVwidGV4dFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvUmVxdWlyZVZhbHVlLCB2YWx1ZToga29WYWx1ZVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gXFwndmlzaWJsZXRyaWdnZXJcXCcgLS0+ICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcJywgZGF0YTogcGFnZXMgfSAtLT4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtc1xcJywgZGF0YTogcXVlc3Rpb25zIH0gLS0+ICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09IFxcJ2NvbXBsZXRldHJpZ2dlclxcJyAtLT4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTBweFwiIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VyQ29tcGxldGVUZXh0XFwnKVwiPjwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09IFxcJ3NldHZhbHVldHJpZ2dlclxcJyAtLT4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZm9ybS1pbmxpbmVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoXFwncGUudHJpZ2dlclNldFRvTmFtZVxcJylcIj48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29zZXRUb05hbWVcIj4gICAgICAgICAgPC9kaXY+ICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKFxcJ3BlLnRyaWdnZXJTZXRWYWx1ZVxcJylcIj48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBkYXRhLWJpbmQ9XCJ2YWx1ZToga29zZXRWYWx1ZVwiPiAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZvcm0taW5saW5lXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjEwcHhcIj4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+ICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1iaW5kPVwiY2hlY2tlZDoga29pc1ZhcmlhYmxlXCI+IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRyb290LmdldExvY1N0cmluZyhcXCdwZS50cmlnZ2VySXNWYXJpYWJsZVxcJylcIj48L3NwYW4+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIDwvZGl2PiAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXNcIj4gIDxkaXYgY2xhc3M9XCJwYW5lbCBuby1tYXJnaW5zIG5vLXBhZGRpbmdcIj4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj4gICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB0aXRsZVwiPjwvc3Bhbj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtdWx0aXBsZT1cIm11bHRpcGxlXCIgZGF0YS1iaW5kPVwib3B0aW9uczoga29DaG9vc2VuLCB2YWx1ZToga29DaG9vc2VuU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1iaW5kPVwiZW5hYmxlOiBrb0Nob29zZW5TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkRlbGV0ZUNsaWNrXCIgY2xhc3M9XCJidG5cIj48aSBjbGFzcz1cInBlLXJlbW92ZVwiPjwvaT48L2J1dHRvbj48L3NwYW4+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi10b3A6NXB4XCI+ICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1zbVwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvT2JqZWN0cywgdmFsdWU6IGtvU2VsZWN0ZWRcIj48L3NlbGVjdD4gICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImVuYWJsZToga29TZWxlY3RlZCgpICE9IG51bGwsIGNsaWNrOiBvbkFkZENsaWNrXCIgc3R5bGU9XCJ3aWR0aDo0MHB4XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48aSBjbGFzcz1cInBlLXBsdXNcIj48L2k+PC9idXR0b24+PC9zcGFuPiAgICA8L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwicHJvcGVydHllZGl0b3ItdmFsaWRhdG9yc1wiPiAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdwcm9wZXJ0eWVkaXRvci1tb2RhbFxcJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInByb3BlcnR5ZWRpdG9yY29udGVudC12YWxpZGF0b3JzXCI+ICA8ZGl2IGNsYXNzPVwicGFuZWxcIj4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj4gICAgICA8ZGl2IGNsYXNzPVwicm93IGlucHV0LWdyb3VwXCI+ICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBpbnB1dC1ncm91cC1hZGRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPjxpIGNsYXNzPVwicGUtcGx1c1wiPjwvaT48L2J1dHRvbj4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhdmFpbGFibGVWYWxpZGF0b3JzIC0tPiAgICAgICAgICA8bGk+PGEgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGljaygkZGF0YSlcIj48c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiAkZGF0YVwiPjwvc3Bhbj48L2E+PC9saT4gICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8L3VsPiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtYmluZD1cIm9wdGlvbnM6IGtvSXRlbXMsIG9wdGlvbnNUZXh0OiBcXCd0ZXh0XFwnLCB2YWx1ZToga29TZWxlY3RlZFwiPjwvc2VsZWN0PiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1wiIGNsYXNzPVwiYnRuXCI+PGkgY2xhc3M9XCJwZS1yZW1vdmVcIj48L2k+PC9idXR0b24+PC9zcGFuPiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdvYmplY3RlZGl0b3JcXCcsIGRhdGE6IHNlbGVjdGVkT2JqZWN0RWRpdG9yIH1cIj48L2Rpdj4gIDwvZGl2Pjwvc2NyaXB0Pic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RlbXBsYXRlRWRpdG9yLmtvLmh0bWwudHMiLCJleHBvcnQgdmFyIGh0bWwgPSAnPGRpdiBkYXRhLWJpbmQ9XCJldmVudDogeyBkcmFnZW50ZXI6IGZ1bmN0aW9uKGVsLCBlKSB7IGRyYWdFbnRlcihlKTsgfSwgZHJhZ2xlYXZlOiBmdW5jdGlvbihlbCwgZSkgeyBkcmFnTGVhdmUoZSk7IH0sIGRyYWdvdmVyOiBmdW5jdGlvbihlbCwgZSkgeyByZXR1cm4gZmFsc2U7IH0sIGRyb3A6IGZ1bmN0aW9uKGVsLCBlKSB7IGRyYWdEcm9wKGUpOyB9fVwiPiAgPGg0IGRhdGEtYmluZD1cInZpc2libGU6ICh0aXRsZS5sZW5ndGggPiAwKSAmJiBkYXRhLnNob3dQYWdlVGl0bGVzLCB0ZXh0OiBrb05vKCkgKyBwcm9jZXNzZWRUaXRsZSwgY3NzOiAkcm9vdC5jc3MucGFnZVRpdGxlXCI+PC9oND4gIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3dzLCBhczogXFwncm93XFwnfSAtLT4gIDxkaXYgY2xhc3M9XCJzdmRfcXVlc3Rpb25fY29udGFpbmVyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogcm93LmtvVmlzaWJsZSwgY3NzOiAkcm9vdC5jc3Mucm93XCI+ICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3cucXVlc3Rpb25zLCBhczogXFwncXVlc3Rpb25cXCcgLCBhZnRlclJlbmRlcjogcm93LmtvQWZ0ZXJSZW5kZXIgfSAtLT4gICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmtvSXNEcmFnZ2luZ1wiPiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBpZjogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgYXM6IFxcJ3F1ZXN0aW9uXFwnLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogdHJ1ZSB9IH0gLS0+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICA8L2Rpdj4gICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogcXVlc3Rpb24sIHRlbXBsYXRlT3B0aW9uczogeyBpc0RyYWdnaW5nOiBmYWxzZSB9IH0gLS0+ICAgICAgPCEtLSAva28gLS0+ICAgIDwhLS0gL2tvIC0tPiAgPC9kaXY+ICA8IS0tIC9rbyAtLT4gIDxkaXYgY2xhc3M9XCJ3ZWxsXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QuaXNEZXNpZ25Nb2RlICYmIHF1ZXN0aW9ucy5sZW5ndGggPT0gMFwiPiAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAha29EcmFnZ2luZ0JvdHRvbSgpLCB0ZXh0OiAkcm9vdC5nZXRFZGl0b3JMb2NTdHJpbmcoXFwnc3VydmV5LmRyb3BRdWVzdGlvblxcJylcIj48L3NwYW4+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZToga29EcmFnZ2luZ0JvdHRvbVwiPiAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgaWY6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uXFwnLCBkYXRhOiAkcm9vdC5rb0RyYWdnaW5nU291cmNlKCksIGFzOiBcXCdxdWVzdGlvblxcJywgdGVtcGxhdGVPcHRpb25zOiB7IGlzRHJhZ2dpbmc6IHRydWUgfSB9IC0tPiAgICAgIDwhLS0gL2tvIC0tPiAgICA8L2Rpdj4gIDwvZGl2PiAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbnMubGVuZ3RoID4gMCAmJiBrb0RyYWdnaW5nQm90dG9tKClcIj4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBpZjogJHJvb3Qua29EcmFnZ2luZ1NvdXJjZSgpLCBuYW1lOiBcXCdzdXJ2ZXktcXVlc3Rpb25cXCcsIGRhdGE6ICRyb290LmtvRHJhZ2dpbmdTb3VyY2UoKSwgYXM6IFxcJ3F1ZXN0aW9uXFwnLCB0ZW1wbGF0ZU9wdGlvbnM6IHsgaXNEcmFnZ2luZzogdHJ1ZSB9IH0gLS0+ICAgIDwhLS0gL2tvIC0tPiAgPC9kaXY+PC9kaXY+JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGVtcGxhdGVfcGFnZS5odG1sLnRzIiwiZXhwb3J0IHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJzdmRfcXVlc3Rpb25cIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiIGRhdGEtYmluZD1cInN0eWxlOiB7IGRpc3BsYXk6IHF1ZXN0aW9uLmtvVmlzaWJsZSgpfHwgJHJvb3QuaXNEZXNpZ25Nb2RlID8gXFwnaW5saW5lLWJsb2NrXFwnOiBcXCdub25lXFwnLCBtYXJnaW5MZWZ0OiBxdWVzdGlvbi5rb01hcmdpbkxlZnQsIHBhZGRpbmdSaWdodDogcXVlc3Rpb24ua29QYWRkaW5nUmlnaHQsIHdpZHRoOiBxdWVzdGlvbi5rb1JlbmRlcldpZHRoIH0sIGF0dHIgOiB7IGlkOiBpZCwgZHJhZ2dhYmxlOiAkcm9vdC5pc0Rlc2lnbk1vZGUgfSwgY2xpY2s6ICRyb290LmlzRGVzaWduTW9kZSA/IGtvT25DbGljazogbnVsbCwgZXZlbnQ6IHsgZHJhZ3N0YXJ0OmZ1bmN0aW9uKGVsLCBlKXsgZHJhZ1N0YXJ0KGUpOyByZXR1cm4gdHJ1ZTsgfSwgZHJhZ292ZXI6IGZ1bmN0aW9uKGVsLCBlKSB7IGlmKCFxdWVzdGlvbi5pc0RyYWdnaW5nKSBkcmFnT3ZlcihlKTsgfSwgZHJhZ2VuZDogZnVuY3Rpb24oZWwsIGUpIHsgZHJhZ0VuZChlKTsgfSwgZHJvcDogZnVuY3Rpb24oZWwsIGUpIHsgZHJhZ0Ryb3AoZSk7IH0gfSwgY3NzOiB7IHN2ZF9xX2Rlc2lnbl9ib3JkZXI6ICRyb290LmlzRGVzaWduTW9kZSwgc3ZkX3Ffc2VsZWN0ZWQgOiBrb0lzU2VsZWN0ZWQsIFxcJ3dlbGwgd2VsbC1zbVxcJzogJHJvb3QuaXNEZXNpZ25Nb2RlIH1cIj4gIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiB7IHN2ZF9xX2Rlc2lnbjogJHJvb3QuaXNEZXNpZ25Nb2RlIH0sIHN0eWxlOiB7IG9wYWNpdHk6IHF1ZXN0aW9uLmtvSXNEcmFnZ2luZ1NvdXJjZSgpID8gMC40IDogMSB9XCI+ICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBrb0Vycm9ycygpLmxlbmd0aCA+IDAsIGZvcmVhY2g6IGtvRXJyb3JzXCI+ICAgICAgPGRpdj48aSBjbGFzcz1cInBlLWV4Y2xhbWF0aW9uLXNpZ25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRkYXRhLmdldFRleHQoKVwiPjwvc3Bhbj48L2Rpdj4gICAgPC9kaXY+ICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICA8aDUgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QucXVlc3Rpb25UaXRsZUxvY2F0aW9uID09IFxcJ3RvcFxcJywgdGV4dDogcXVlc3Rpb24ua29UaXRsZSgpLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi50aXRsZVwiPjwvaDU+ICAgIDwhLS0gL2tvIC0tPiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyBxdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6IHF1ZXN0aW9uIH0gLS0+ICAgIDwhLS0gL2tvIC0tPiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc0NvbW1lbnRcIj4gICAgICA8ZGl2IGRhdGEtYmluZD1cInRleHQ6IHF1ZXN0aW9uLmNvbW1lbnRUZXh0XCI+PC9kaXY+ICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YTogeyBcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHRydWUgfSB9XCI+PC9kaXY+ICAgIDwvZGl2PiAgICA8IS0tIGtvIGlmOiBxdWVzdGlvbi5oYXNUaXRsZSAtLT4gICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCdib3R0b21cXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICA8IS0tIC9rbyAtLT4gIDwvZGl2PiAgPGRpdiBjbGFzcz1cInN2ZF9xdWVzdGlvbl9tZW51XCIgZGF0YS1iaW5kPVwidmlzaWJsZToga29Jc1NlbGVjdGVkXCI+ICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi14cyBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWxcIj48L3NwYW4+PC9idXR0b24+ICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj4gICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIiBkYXRhLWJpbmQ9XCJjbGljazogJHJvb3QuY29weVF1ZXN0aW9uQ2xpY2ssIHRleHQ6ICRyb290LmdldEVkaXRvckxvY1N0cmluZyhcXCdzdXJ2ZXkuYWRkVG9Ub29sYm94XFwnKVwiPjwvYnV0dG9uPjwvbGk+ICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRyb290LmZhc3RDb3B5UXVlc3Rpb25DbGljaywgdGV4dDogJHJvb3QuZ2V0RWRpdG9yTG9jU3RyaW5nKFxcJ3N1cnZleS5jb3B5XFwnKVwiPjwvYnV0dG9uPjwvbGk+ICAgIDwvdWw+ICA8L2Rpdj48L2Rpdj4nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wbGF0ZV9xdWVzdGlvbi5odG1sLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==