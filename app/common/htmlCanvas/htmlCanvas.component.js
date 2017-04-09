class HtmlCanvasController {
    constructor() {
        var vm = this;

        // Lifecycle hooks
        this.$onInit = () => {
            console.log('Init: ' + this);
        };

        this.$onChanges = (changesObj) => {
            console.log('Changes: ' + changesObj);
        };

        this.$postLink = () => {
            console.log('PostLink: ' + this);
            let bpCanvas = document.getElementById('bpCanvas');
            bpCanvas.width = window.innerWidth;
            bpCanvas.height = window.innerHeight;
            let bpCanvasContext = bpCanvas.getContext('2d');
            let img = new Image();
            img.onload = function () {
                bpCanvasContext.drawImage(img, 0, 0);
            };
            img.src = '../images/image.svg';

        };
    }
}

HtmlCanvasController.$inject = [];

const htmlCanvasComponentConfig = {
    bindings: {
        data: '<'
    },
    templateUrl: require("./htmlCanvas.html"),
    controller: HtmlCanvasController,
};

export default htmlCanvasComponentConfig;