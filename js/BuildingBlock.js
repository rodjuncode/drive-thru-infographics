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
        let blockImage;
        if (this.type == BuildingBlockType.Door) {
            blockImage = blockImgs[BuildingBlockType.Door.name]
        } else if (this.type == BuildingBlockType.SimpleWall) {
            blockImage = blockImgs[BuildingBlockType.SimpleWall.name]
        } else if (this.type == BuildingBlockType.NiceWall) {
            blockImage = blockImgs[BuildingBlockType.NiceWall.name]
        } else if (this.type == BuildingBlockType.Window) {
            blockImage = blockImgs[BuildingBlockType.Window.name]
        } else if (this.type == BuildingBlockType.Counter) {
            blockImage = blockImgs[BuildingBlockType.Counter.name]
        }
        fill(100);
        rect(0,0,BuildingBlock.width,BuildingBlock.height);
        image(blockImage,0,0);
        pop();
    }

}