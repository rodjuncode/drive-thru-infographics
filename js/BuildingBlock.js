const _BUILDINGS_BLOCK_SIZE = 90;

class BuildingBlock {

    static size = _BUILDINGS_BLOCK_SIZE;

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
        rect(0,0,90,128);
        pop();
    }

}