export const FileSelectionComboComponent = {
    bindings: {
        file: '<',
        onSet: '&'
    },
    template: `
        <file-drop-zone 
            on-file-drop="$ctrl.onSet({$event: $event})"
            class="text-center"
        >
            <div 
                class="flex--centralize" 
                style="height: 100%;"
            >
                <div>
                    <div ng-if="!$ctrl.file">
                        <h3>Dra en fil hit</h3>
                    </div>
    
                    <div ng-if="$ctrl.file">
                        <h5>Du har valt filen</h5>
                        <h4>{{ $ctrl.file.name }}</h4>
                    </div>
    
                    <file-input 
                        text="$ctrl.getFileInputText()" 
                        on-change="$ctrl.onSet({ $event: $event })"
                    >
                    </file-input>
                </div>
            </div>
        </file-drop-zone>
    `,
    controller: class FileSelectionComboComponentController {
        public file: File;
        public onSet: (payload: {$event: File[]}) => void;

        static $inject: string[] = [];

        constructor() {
        }

        public getFileInputText(): string {
            return this.file
                ? 'Ändra fil att ladda upp'
                : 'Välj en fil att ladda upp';
        }
    } 
};