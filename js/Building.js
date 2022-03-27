const _BUILDINGS_MAX_SIZE = 15;
const _COUNTER_CHANCE = 0.25;
const _ROOF_HEIGHT = 70;
const _COUNTER_QTY = 3;

class Building {

    static buildinsMaxSize = _BUILDINGS_MAX_SIZE;
    static counterChance = _COUNTER_CHANCE;
    static roofHeight = _ROOF_HEIGHT;
    static counterQty = _COUNTER_QTY;

    constructor(x,y,totemImg,signImg) {
        this.position = createVector(x,y);
        this.blocks = [];
        this.counters = [];
        this.signPos = 0;
        this.size = Building.buildinsMaxSize;
        this.totemImg = totemImg;
        this.signImg = signImg;
        while (this.generate() < Building.counterQty);
    }

    generate() {

        this.blocks = [];
        this.counters = [];
        let possibleBlocks = [BuildingBlockType.Window, BuildingBlockType.Door, BuildingBlockType.SimpleWall, BuildingBlockType.NiceWall];

        let countersCount = 0;
        let pastBlockWasCounter = false;
        for (let i = 0; i < this.size; i++) {
            if (!pastBlockWasCounter && countersCount < Building.counterQty && random(1) > 1 - Building.counterChance) {
                this.blocks.push(new BuildingBlock(BuildingBlockType.Counter));
                this.counters.push(i);
                countersCount++;
                pastBlockWasCounter = true;
            } else {
                this.blocks.push(new BuildingBlock(possibleBlocks[floor(random(possibleBlocks.length))]));
                pastBlockWasCounter = false;
            }
            
        }
        this.signPos = floor(random(this.blocks.length-1));
        return countersCount;
    }

    render() {
        push();
        this.gutter();
        this.street();
        translate(this.position.x, this.position.y);
        this.roof();
        this.sign();
        this.totem();
        this.facade();
        pop();
    }

    gutter() {
        push();
        translate(0,1420);
        fill(200);
        noStroke();
        rect(0,0,1800,-42);
        pop();
    }

    street() {
        push();
        translate(0,1420);
        fill(80);
        noStroke();
        rect(0,0,1800,-32);
        pop();        
    }

    facade() {
        translate(0, Building.roofHeight);
        for (let i = 0; i < this.blocks.length; i++) {
            push();
            translate(i*BuildingBlock.width,0);
            this.blocks[i].render();
            pop();
        }
    }

    totem() {
        fill(77);
        rect(-200,Building.roofHeight,65,128);
        image(this.totemImg,-200,Building.roofHeight);
    }

    sign() {
        fill(237,27,46);
        rect(this.signPos*BuildingBlock.width,-80,BuildingBlock.width*2,135);
        image(this.signImg,this.signPos*BuildingBlock.width,-80);
    }

    roof() {
        fill(77);
        noStroke();
        rect(0,0,BuildingBlock.width*this.blocks.length,Building.roofHeight);
        fill(204);
        rect(-45,Building.roofHeight-15,BuildingBlock.width*this.blocks.length+90,15);
    }

    counterXPosition(c) {
        return (this.counters[c]*BuildingBlock.width) + BuildingBlock.width/2;
    }
}