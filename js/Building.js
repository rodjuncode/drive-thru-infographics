const _BUILDINGS_MAX_SIZE = 15;
const _COUNTER_CHANCE = 0.25;
const _ROOF_HEIGHT = 50;

class Building {

    static buildinsMaxSize = _BUILDINGS_MAX_SIZE;
    static counterChance = _COUNTER_CHANCE;
    static roofHeight = _ROOF_HEIGHT;

    constructor(x,y,s) {
        this.position = createVector(x,y);
        this.blocks = [];
        this.size = Building.buildinsMaxSize;
        while (this.generate() < 3);
    }

    generate() {

        this.blocks = [];
        let possibleBlocks = [BuildingBlockType.Window, BuildingBlockType.Door, BuildingBlockType.SimpleWall, BuildingBlockType.NiceWall];

        let countersCount = 0;
        let pastBlockWasCounter = false;
        for (let i = 0; i < this.size; i++) {
            if (!pastBlockWasCounter && countersCount < 3 && random(1) > 1 - Building.counterChance) {
                this.blocks.push(new BuildingBlock(BuildingBlockType.Counter));
                countersCount++;
                console.log(countersCount);
                pastBlockWasCounter = true;
            } else {
                this.blocks.push(new BuildingBlock(possibleBlocks[floor(random(possibleBlocks.length))]));
                pastBlockWasCounter = false;
            }
            
        }
        return countersCount;
    }

    render() {
        push();
        translate(this.position.x, this.position.y);

        // roof
        fill(30);
        noStroke();
        rect(0,0,BuildingBlock.size*this.blocks.length,Building.roofHeight);
        // sign

        // blocks
        translate(0, Building.roofHeight);
        for (let i = 0; i < this.blocks.length; i++) {
            push();
            translate(i*BuildingBlock.size,0);
            this.blocks[i].render();
            pop();
        }
        pop();
    }
}