const first = document.querySelector('.q div');
const second = document.querySelector('.q div:nth-of-type(2)');
const third = document.querySelector('.q div:nth-of-type(3)');

const LampMaker = function (elementNode, { 
    workColor: workColor = getComputedStyle(elementNode).backgroundColor,
    colorOff: colorOff = 'white',
    flashingSpeed: flashingSpeed = 700,
} = {}) {
    this.elementNode = elementNode;
    this.timerId = '';
    this.workColor = workColor;
    this.colorOff = colorOff;
    this.flashingSpeed = flashingSpeed;
    this.LightOn = function () {
        this.elementNode.style.backgroundColor = this.workColor
    };
    this.LightOff = function () {
        this.elementNode.style.backgroundColor = this.colorOff
    };    
    this.lightChange = function () {
        if ( this.elementNode.style.backgroundColor === '') {
            this.LightOff();
        } else {
            this.elementNode.style.backgroundColor === this.workColor
                ? this.LightOff()
                : this.LightOn();  
        } 
    };
    this.flashingOn = function () {
        this.timerId = setInterval(() => this.lightChange(), this.flashingSpeed) 
    };
    this.flashingOff = function () {
        clearTimeout(this.timerId)
    };    
};

const firstLamp = new LampMaker(first);
const secondLamp = new LampMaker(second);
const thirdLamp = new LampMaker(third);
