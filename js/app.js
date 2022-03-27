
let timeWarp;
let totemImg;
let signImg;
let carImgs = [];
let blockImgs = {};

function preload() {
    totemImg = loadImage('assets/totem.png');
    signImg = loadImage('assets/sign.png');
    carImgs.push(loadImage('assets/car1.png'));
    carImgs.push(loadImage('assets/car2.png'));
    carImgs.push(loadImage('assets/car3.png'));
    carImgs.push(loadImage('assets/car4.png'));
    blockImgs = {
        "Counter": loadImage('assets/counter.png'),
        "NiceWall": loadImage('assets/niceWall.png'),
        "SimpleWall": loadImage('assets/simpleWall.png'),
        "Door": loadImage('assets/door.png'),
        "Window": loadImage('assets/window.png'),
    }
}

function setup() {
    createCanvas(900,220);
    //createCanvas(1800,440);
    
    start();    
}


function draw() {
    background('#BAE3FA');
    scale(0.5);

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
    let burgers = selectAll('.burger');
    for (let b = 0; b < burgers.length; b++) {
        burgers[b].removeClass('selected');
    }    
    b = new Building(300,200,totemImg,signImg);
    c = new Car(b);
    timeWarp = 1;
}