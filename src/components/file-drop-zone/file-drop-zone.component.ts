export const FileDropZoneComponent = {
    transclude: true,
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

        private clearDropZone() {
            this.uploader.clearQueue();
        }

        private handleFileDrop(files: any) {
            if (files && files.length) {
                this.onDrop({
                    $event: files.map(function(file: any) { return file._file; })
                });
            }

            this.clearDropZone();
        }
    } 
};
