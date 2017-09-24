import * as angular from 'angular';
import * as angularFileUpload from 'angular-file-upload';

import { FileDropZoneComponent } from './components/file-drop-zone/file-drop-zone.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { FileSelectionComboComponent } from './components/file-selection-combo/file-selection-combo.component';

export default angular
    .module('AngularFileUploadComponents', [])
    .component('afuDropZone', FileDropZoneComponent)
    .component('afuFileInput', FileInputComponent)
    .component('afuSelectionCombo', FileSelectionComboComponent)
    .name;
