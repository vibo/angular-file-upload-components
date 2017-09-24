import './file-input.component.less';

export const FileInputComponent = {
    bindings: {
        buttonText: '<',
        onSet: '&'
    },
    template: `
        <button  
            class="afu-button afu-file-input__button"
        >
            {{ $ctrl.buttonText || 'Select a file' }}
            <input 
                type="file" 
                nv-file-select 
                uploader="$ctrl.uploader" 
                class="afu-file-input__field" 
            />
        </button>
    `,
    controller: class FileInputComponentController {
        public onSet: (payload: {$event: File[]}) => void;
        public buttonText: string;
        public uploader: any;

        static $inject: string[] = [
            'FileUploader'
        ];

        constructor(
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
                this.onSet({
                    $event: files.map(function(file: any) { return file._file; })
                });
            }

            this.clearFileInput();
        }
    } 
};
