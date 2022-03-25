
let timeWarp;
let totemImg;
let signImg;
let blockImgs = {};

function preload() {
    totemImg = loadImage('assets/totem.png');
    signImg = loadImage('assets/sign.png');
    blockImgs = {
        "Counter": loadImage('assets/counter.png'),
        "NiceWall": loadImage('assets/niceWall.png'),
        "SimpleWall": loadImage('assets/simpleWall.png'),
        "Door": loadImage('assets/door.png'),
        "Window": loadImage('assets/window.png'),
    }
    console.log(blockImgs);
}

function setup() {
    createCanvas(1800,500);
    start();    
}


function draw() {
    background(255);

    b.render();

    c.update(timeWarp);
    c.render();

    if (c.finished) {
        c = new Car(b);
    }

    
}

function mouseClicked() {
    timeWarp++;
    if (timeWarp > 5) {
        timeWarp = 1;
    }
}
function keyPressed(){
    if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
      start();
    }  
    else if (keyCode === ENTER){
    }
}

function start() {
    b = new Building(300,200,totemImg,signImg);
    c = new Car(b);
    c.waiting = 20;
    timeWarp = 1;
}