import * as angular from 'angular';

export const FileInputComponent = {
    bindings: {
        text: '<',
        onChange: '&'
    },
    template: `
        <button 
            ng-click="$ctrl.triggerFilePicker()" 
            class="afu-button"
        >
            {{ $ctrl.text }}
        </button>

        <input 
            type="file" 
            nv-file-select 
            uploader="$ctrl.uploader" 
            class="afu-file-input__input afu--hidden" 
        />
    `,
    controller: class FileInputComponentController {
        public onChange: (payload: {$event: File[]}) => void;
        public text: string;
        public uploader: any;

        static $inject: string[] = [
            '$element',
            'FileUploader'
        ];

        constructor(
            private $element: angular.IRootElementService,
            private FileUploader: any
        ) {
            this.uploader = new FileUploader();
        }

        $onInit() {
            this.uploader.onAfterAddingAll = this.handleFileDrop.bind(this);
        }

        $onDestroy() {
            this.uploader.destroy();
        }

        private clearFileInput() {
            this.uploader.clearQueue();
        }

        private handleFileDrop(files: any) {
            if (files && files.length) {
                this.onChange({
                    $event: files.map(function(file: any) { return file._file; })
                });
            }

            this.clearFileInput();
        }

        public triggerFilePicker() {
            this.$element
                .find('input[type="file"]')
                .triggerHandler('click');
        }
    } 
};
