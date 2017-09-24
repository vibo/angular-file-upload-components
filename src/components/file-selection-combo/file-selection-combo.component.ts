// FIXME: Settle with one type of text definition, perhaps config object instead
export const FileSelectionComboComponent = {
    bindings: {
        descriptionText: '<',
        file: '<',
        textEmpty: '<',
        textSelected: '<',
        onSet: '&'
    },
    template: `
        <afu-file-drop-zone 
            on-set="$ctrl.onSet({$event: $event})"
            class="afu--text-center"
        >
            <div 
                class="afu-flex afu-flex--centralize"
            >
                <div 
                    ng-if="!$ctrl.file"
                >
                    {{ $ctrl.descriptionText || 'Drag a file here' }}
                </div>

                <div ng-if="$ctrl.file">
                    <span>You have selected the file</span>
                    <span>{{ $ctrl.file.name }}</span>
                </div>

                <afu-file-input 
                    button-text="$ctrl.getFileInputText()" 
                    on-change="$ctrl.onSet({$event: $event})"
                >
                </afu-file-input>
            </div>
        </afu-file-drop-zone>
    `,
    controller: class FileSelectionComboComponentController {
        public descriptionText: string;
        public file: File;
        public textEmpty: string;
        public textSelected: string;
        public onSet: (payload: {$event: File[]}) => void;

        static $inject: string[] = [];

        constructor() {
        }

        public getFileInputText(): string {
            return this.file
                ? this.textSelected || 'Change file'
                : this.textEmpty || 'Choose a file';
        }
    } 
};
