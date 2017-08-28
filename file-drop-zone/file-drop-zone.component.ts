export const FileDropZoneComponent = {
    bindings: {
        onDrop: '&'
    },
    template: `
        <div 
            nv-file-drop 
            nv-file-over 
            uploader="$ctrl.uploader" 
            over-class="file-drop-zone--active" 
            class="file-drop-zone"
        >
            <ng-transclude class="file-drop-zone__content">
            </ng-transclude>
        </div>
    `,
    controller: class FileDropZoneCOmponentController {
        public onDrop: (payload: {$event: File[]}) => void;
        public uploader;

        static $inject: string[] = [
            'FileUpload'
        ];

        constructor(
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

        private clearDropZone() {
            this.uploader.clearQueue();
        }

        private handleFileDrop(files) {
            if (files && files.length) {
                this.onDrop({
                    $event: files.map(function(file) { return file._file; })
                });
            }

            this.clearDropZone();
        }
    } 
};
