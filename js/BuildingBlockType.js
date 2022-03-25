class BuildingBlockType {
    
    static SimpleWall = new BuildingBlockType("SimpleWall");
    static NiceWall = new BuildingBlockType("NiceWall");
    static Door = new BuildingBlockType("Door");
    static Window = new BuildingBlockType("Window");
    static Counter = new BuildingBlockType("Counter");

    constructor(name) {
        this.name = name;
    }

}