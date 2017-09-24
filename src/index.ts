import { FileDropZoneComponent } from './components/file-drop-zone/file-drop-zone.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { FileSelectionComboComponent } from './components/file-selection-combo/file-selection-combo.component';

import './styles/index.less';

// Ugly fix
declare const angular: any;

export default angular
    .module('AngularFileUploadComponents', [])
    .component('afuFileDropZone', FileDropZoneComponent)
    .component('afuFileInput', FileInputComponent)
    .component('afuFileSelectionCombo', FileSelectionComboComponent)
    .name;
