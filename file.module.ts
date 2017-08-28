import * as angular from 'angular';

import { FileDropZoneComponent } from './file-drop-zone/file-drop-zone.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FileSelectionComboComponent } from './file-selection-combo/file-selection-combo.component';

export default angular
    .module('AngularFileUploadComponentsModule', [])
    .component('fileDropZone', FileDropZoneComponent)
    .component('fileInput', FileInputComponent)
    .component('fileSelectionCombo', FileSelectionComboComponent)
    .name;
