function setup() {
    createCanvas(1500,500);
    
}


function draw() {
    background(200);

    b = new Building(10,10);
    b.render();

    noLoop();
}