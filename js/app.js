
let timeWarp;
let totemImg;
let signImg;
let carImgs = [];
let blockImgs = {};
let canvas;
let b;
let c;
let blinkSkyCount = 10;

function preload() {
    totemImg = loadImage('assets/totem.png');
    signImg = loadImage('assets/sign.png');
    carImgs.push(loadImage('assets/car1.png'));
    carImgs.push(loadImage('assets/car2.png'));
    carImgs.push(loadImage('assets/car3.png'));
    carImgs.push(loadImage('assets/car4.png'));
    carImgs.push(loadImage('assets/car5.png'));
    carImgs.push(loadImage('assets/car6.png'));
    carImgs.push(loadImage('assets/car7.png'));
    carImgs.push(loadImage('assets/car8.png'));
    carImgs.push(loadImage('assets/car9.png'));
    carImgs.push(loadImage('assets/car10.png'));    
    carImgs.push(loadImage('assets/car11.png'));   
    carImgs.push(loadImage('assets/car12.png'));           
    blockImgs = {
        "Counter": loadImage('assets/counter.png'),
        "NiceWall": loadImage('assets/niceWall.png'),
        "SimpleWall": loadImage('assets/simpleWall.png'),
        "Door": loadImage('assets/door.png'),
        "Window": loadImage('assets/window.png'),
    }
}

function setup() {
    canvas = createCanvas(900,710);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    //createCanvas(1800,440);
    
    start();    
}


function draw() {
    if (blinkSkyCount > 0 & frameCount % 5 == 0) {
        background('#F8BA98');
        blinkSkyCount--;
    } else {
        background('#BAE3FA');
    }
    scale(0.5);

    b.render();

    c.update(timeWarp);
    c.render();

    if (c.finished) {
        blinkSkyCount = 10;
        c.restart();
    }    
}


function mouseClicked() {
    // timeWarp++;
    // if (timeWarp > 5) {
    //     timeWarp = 1;
    // }
}
function keyPressed(){
    if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
        blinkSkyCount = 10;
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
    b = new Building(300,1180,totemImg,signImg);
    c = new Car(b);
    timeWarp = 1;
}