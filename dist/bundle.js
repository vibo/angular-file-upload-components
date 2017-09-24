/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var file_drop_zone_component_1 = __webpack_require__(2);
var file_input_component_1 = __webpack_require__(4);
var file_selection_combo_component_1 = __webpack_require__(6);
__webpack_require__(7);
exports.default = angular
    .module('AngularFileUploadComponents', [])
    .component('afuFileDropZone', file_drop_zone_component_1.FileDropZoneComponent)
    .component('afuFileInput', file_input_component_1.FileInputComponent)
    .component('afuFileSelectionCombo', file_selection_combo_component_1.FileSelectionComboComponent)
    .name;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(3);
// FIXME: Posible to bubble nv-file-over?
exports.FileDropZoneComponent = {
    transclude: true,
    bindings: {
        onSet: '&'
    },
    template: "\n        <div \n            nv-file-drop \n            nv-file-over \n            uploader=\"$ctrl.uploader\" \n            over-class=\"afu-file-drop-zone--active\" \n            class=\"afu-file-drop-zone afu-flex\"\n        >\n            <ng-transclude class=\"afu-file-drop-zone__content afu-flex--flexed\">\n            </ng-transclude>\n        </div>\n    ",
    controller: (_a = /** @class */ (function () {
            function FileDropZoneCOmponentController(FileUploader) {
                this.FileUploader = FileUploader;
                this.uploader = new FileUploader();
            }
            FileDropZoneCOmponentController.prototype.$onInit = function () {
                this.uploader.onAfterAddingAll = this.handleFileDrop.bind(this);
            };
            FileDropZoneCOmponentController.prototype.$onDestroy = function () {
                this.uploader.destroy();
            };
            FileDropZoneCOmponentController.prototype.clearDropZone = function () {
                this.uploader.clearQueue();
            };
            FileDropZoneCOmponentController.prototype.handleFileDrop = function (files) {
                if (files && files.length) {
                    this.onSet({
                        $event: files.map(function (file) { return file._file; })
                    });
                }
                this.clearDropZone();
            };
            return FileDropZoneCOmponentController;
        }()),
        _a.$inject = [
            'FileUploader'
        ],
        _a)
};
var _a;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(5);
exports.FileInputComponent = {
    bindings: {
        buttonText: '<',
        onSet: '&'
    },
    template: "\n        <button  \n            class=\"afu-button afu-file-input__button\"\n        >\n            {{ $ctrl.buttonText || 'Select a file' }}\n            <input \n                type=\"file\" \n                nv-file-select \n                uploader=\"$ctrl.uploader\" \n                class=\"afu-file-input__field\" \n            />\n        </button>\n    ",
    controller: (_a = /** @class */ (function () {
            function FileInputComponentController(FileUploader) {
                this.FileUploader = FileUploader;
                this.uploader = new FileUploader();
            }
            FileInputComponentController.prototype.$onInit = function () {
                this.uploader.onAfterAddingAll = this.handleFileDrop.bind(this);
            };
            FileInputComponentController.prototype.$onDestroy = function () {
                this.uploader.destroy();
            };
            FileInputComponentController.prototype.clearFileInput = function () {
                this.uploader.clearQueue();
            };
            FileInputComponentController.prototype.handleFileDrop = function (files) {
                if (files && files.length) {
                    this.onSet({
                        $event: files.map(function (file) { return file._file; })
                    });
                }
                this.clearFileInput();
            };
            return FileInputComponentController;
        }()),
        _a.$inject = [
            'FileUploader'
        ],
        _a)
};
var _a;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// FIXME: Settle with one type of text definition, perhaps config object instead
exports.FileSelectionComboComponent = {
    bindings: {
        descriptionText: '<',
        file: '<',
        textEmpty: '<',
        textSelected: '<',
        onSet: '&'
    },
    template: "\n        <afu-file-drop-zone \n            on-set=\"$ctrl.onSet({$event: $event})\"\n            class=\"afu--text-center\"\n        >\n            <div \n                class=\"afu-flex afu-flex--centralize\"\n            >\n                <div \n                    ng-if=\"!$ctrl.file\"\n                >\n                    {{ $ctrl.descriptionText || 'Drag a file here' }}\n                </div>\n\n                <div ng-if=\"$ctrl.file\">\n                    <span>You have selected the file</span>\n                    <span>{{ $ctrl.file.name }}</span>\n                </div>\n\n                <afu-file-input \n                    button-text=\"$ctrl.getFileInputText()\" \n                    on-change=\"$ctrl.onSet({$event: $event})\"\n                >\n                </afu-file-input>\n            </div>\n        </afu-file-drop-zone>\n    ",
    controller: (_a = /** @class */ (function () {
            function FileSelectionComboComponentController() {
            }
            FileSelectionComboComponentController.prototype.getFileInputText = function () {
                return this.file
                    ? this.textSelected || 'Change file'
                    : this.textEmpty || 'Choose a file';
            };
            return FileSelectionComboComponentController;
        }()),
        _a.$inject = [],
        _a)
};
var _a;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map