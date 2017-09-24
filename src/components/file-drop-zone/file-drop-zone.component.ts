import './file-drop-zone.component.less';

// FIXME: Posible to bubble nv-file-over?
export const FileDropZoneComponent = {
    transclude: true,
    bindings: {
        onSet: '&'
    },
    template: `
        <div 
            nv-file-drop 
            nv-file-over 
            uploader="$ctrl.uploader" 
            over-class="afu-file-drop-zone--active" 
            class="afu-file-drop-zone afu-flex"
        >
            <ng-transclude class="afu-file-drop-zone__content afu-flex--flexed">
            </ng-transclude>
        </div>
    `,
    controller: class FileDropZoneCOmponentController {
        public onSet: (payload: {$event: File[]}) => void;
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
                this.onSet({
                    $event: files.map(function(file: any) { return file._file; })
                });
            }

            this.clearDropZone();
        }
    } 
};
