const _STREET_LINE = 30;
const _START_LINE = -200;
const _RANDOM_WAIT = 500;
const _MIN_WAIT = 200;
const _MIN_VEL = 0.75;

class Car {

    static streetLine = _STREET_LINE;
    static startLine = _START_LINE;
    static randomWait = _RANDOM_WAIT;
    static minWait = _MIN_WAIT;
    static minVel = _MIN_VEL;

    constructor(b) {
        this.building = b;
        this.currCounter = -1;        
        this.moving = false;
        this.vel = 0;
        this.acc = 0.5;
        this.brk = 0.26;
        this.prevX = -1;
        this.nextX = -1;
        this.finished = false;
        this.color = color(floor(random(255)),floor(random(255)),floor(random(255)));
        this.position = createVector(Car.startLine,b.position.y+Building.roofHeight+BuildingBlock.height+Car.streetLine);
        this.waiting = random(Car.randomWait) + Car.minWait;
        console.log('new');
    }


    render() {
        push();
        translate(this.position.x-200,this.position.y);
        strokeWeight(4)
        fill(this.color);
        rect(60,0,200,-100);
        pop();
    }

    nextCounter() {
        if (!this.moving) {
            this.prevX = this.position.x;
            this.moving = true;
            if (this.currCounter < Building.counterQty-1) {
                this.nextX = this.building.position.x + this.building.counterXPosition(this.currCounter+1);
            } else {
                this.nextX = 2500;
            }
        } 
    }

    move(timeWarp) {
        if (this.moving) {
            console.log('moving');
            if (this.position.x <= ((this.nextX - this.position.x)*.5) + this.prevX) {
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
            console.log('waiting');
        } else {
            this.waiting = 0;
            this.nextCounter();
        }
        this.move(timeWarp);
    }

}