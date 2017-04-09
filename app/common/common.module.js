import DialogComponent from './dialog/dialog.component';
import HtmlCanvasComponent from './htmlCanvas/htmlCanvas.component';

let commonModule = angular.module('bpui.components', []);

// Note: Register all common components here
commonModule.component('dialogComponent', DialogComponent);
commonModule.component('htmlCanvasComponent', HtmlCanvasComponent);

export default commonModule = commonModule.name