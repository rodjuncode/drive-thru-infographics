const _BUILDINGS_BLOCK_WIDTH = 90;
const _BUILDINGS_BLOCK_HEIGHT = 128;

class BuildingBlock {

    static width = _BUILDINGS_BLOCK_WIDTH;
    static height = _BUILDINGS_BLOCK_HEIGHT;

    constructor(t) {
        this.type = t;
    }

    render() {
        push();
        noStroke();
        if (this.type == BuildingBlockType.Door) {
            fill(0,0,255);
        } else if (this.type == BuildingBlockType.SimpleWall) {
            fill(100);
        } else if (this.type == BuildingBlockType.NiceWall) {
            fill(50);
        } else if (this.type == BuildingBlockType.Window) {
            fill(0,255,0);
        } else if (this.type == BuildingBlockType.Counter) {
            fill(255,0,0);
        }
        rect(0,0,BuildingBlock.width,BuildingBlock.height);
        pop();
    }

}