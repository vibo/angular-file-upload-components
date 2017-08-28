import * as angular from 'angular';

export const FileInputComponent = {
    bindings: {
        text: '<',
        onChange: '&'
    },
    template: `
        <button 
            ng-click="$ctrl.triggerFilePicker()" 
            class="btn btn-default"
        >
            {{ $ctrl.text }}
        </button>

        <input 
            type="file" 
            nv-file-select 
            uploader="$ctrl.uploader" 
            class="file-input__input hidden" 
        />
    `,
    controller: class FileInputComponentController {
        public text: string;
        public onChange: (payload: {$event: File[]}) => void;
        public uploader;

        static $inject: string[] = [
            '$element',
            'FileUpload'
        ];

        constructor(
            private $element,
            private FileUploader
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

        private handleFileDrop(files) {
            if (files && files.length) {
                this.onChange({
                    $event: files.map(function(file) { return file._file; })
                });
            }

            this.clearFileInput();
        }

        public triggerFilePicker() {
            angular
                .element('.file-input__input', this.$element)
                .trigger('click');
        }
    } 
};
