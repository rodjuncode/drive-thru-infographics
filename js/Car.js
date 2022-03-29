const _STREET_LINE = 30;
const _START_LINE = -200;
const _RANDOM_WAIT = 100;
const _MIN_WAIT = 50;
const _MIN_VEL = 0.75;

class Car {

    static streetLine = _STREET_LINE;
    static startLine = _START_LINE;
    static randomWait = _RANDOM_WAIT;
    static minWait = _MIN_WAIT;
    static minVel = _MIN_VEL;

    constructor(b) {
        this.building = b;
        this.restart();
    }

    restart() {
        this.currCounter = -1;        
        this.moving = false;
        this.vel = 0;
        this.acc = 0.5;
        this.brk = 0.26;
        this.prevX = -1;
        this.nextX = -1;
        this.finished = false;
        //this.color = color(floor(random(255)),floor(random(255)),floor(random(255)));
        this.image = carImgs[floor(random(carImgs.length))];
        //this.position = createVector(Car.startLine,b.position.y+Building.roofHeight+BuildingBlock.height+Car.streetLine);
        this.position = { x: Car.startLine, y: b.position.y+Building.roofHeight+BuildingBlock.height+Car.streetLine };
        //this.waiting = random(Car.randomWait) + Car.minWait;
        this.waiting = 50;
    }


    render() {
        push();
        translate(this.position.x-200,this.position.y);
        //strokeWeight(4)
        //fill(this.color);
        //rect(60,0,200,-100);
        image(this.image,40,0,270,-100,0,((frameCount % 5 == 0) & this.moving ? 110 : 0),310,110);
        pop();
    }

    nextCounter() {
        if (!this.moving) {
            this.prevX = this.position.x;
            this.moving = true;
            let burgers = selectAll('.burger');
            for (let b = 0; b < burgers.length; b++) {
                burgers[b].removeClass('selected');
            }
            if (this.currCounter == -1) {
                select('span.one').addClass('selected');
            }
            if (this.currCounter == 0) {
                select('span.two').addClass('selected');
            }
            if (this.currCounter == 1) {
                select('span.three').addClass('selected');
            }
            if (this.currCounter < Building.counterQty-1) {
                this.nextX = this.building.position.x + this.building.counterXPosition(this.currCounter+1);
            } else {
                this.nextX = 2100;
            }
        } 
    }

    move(timeWarp) {
        if (this.moving) {
            if ((this.position.x <= ((this.nextX - this.position.x)*.5) + this.prevX) || this.currCounter == 2) {
                this.vel += this.acc*timeWarp;
            } else {
                this.vel -= this.brk*timeWarp;
                if (this.vel < Car.minVel*timeWarp) this.vel = Car.minVel*timeWarp;
            }
            this.position.x += this.vel;
            if (this.position.x >= this.nextX) {
                // arrived
                this.moving = false;
                this.prevX = -1;
                this.nextX = -1;
                this.currCounter++;
                this.waiting = random(Car.randomWait) + Car.minWait;
                this.vel = 0;
                if (this.currCounter == Building.counterQty) {
                    this.finished = true;
                }
            }
        }
    }

    update(timeWarp) {
        if (this.waiting > 0) {
            this.waiting -= 1*timeWarp;
        } else {
            this.waiting = 0;
            this.nextCounter();
        }
        this.move(timeWarp);
    }

}