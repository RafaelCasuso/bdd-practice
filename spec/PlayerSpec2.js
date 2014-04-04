/**
 * Created with JetBrains WebStorm.
 * User: Rafael
 * Date: 26/09/13
 * Time: 19:18
 * To change this template use File | Settings | File Templates.
 */
describe("El Rover", function(){

    var rover;
    var grid;

    beforeEach(function() {
        grid = new Grid(11,11);
        rover = new Rover(0,10,"N",grid);
    });

    it("Existe",function(){
        expect(rover).toBeDefined();
    });
    it("Tiene un Grid sobre el que desplazarse",function(){
        expect(grid).toBeDefined();
    });
    it("Tiene una posición y una dirección",function(){
        expect(rover.posX).not.toBe(null);
        expect(rover.posY).not.toBe(null);
        expect(rover.direction).not.toBe(null);
    });
    it("Se mueve hacia adelante",function(){
        rover.commands('f');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(11);
        expect(rover.direction).toEqual('N');
    });
    it("Se mueve hacia atrás",function(){
        rover.commands('b');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(9);
        expect(rover.direction).toEqual('N');
    });
//    it("Gira a la derecha",function(){
//        rover.commands('r');
//        expect(rover.posX).toEqual(0);
//        expect(rover.posY).toEqual(10);
//        expect(rover.direction).toEqual('E');
//    });
//    it("Gira a la izquierda",function(){
//        rover.commands('l');
//        expect(rover.posX).toEqual(0);
//        expect(rover.posY).toEqual(10);
//        expect(rover.direction).toEqual('W');
//    });
//    it("Gira a la derecha y se mueve hacia adelante",function(){
//        rover.commands('rf');
//        expect(rover.posX).toEqual(1);
//        expect(rover.posY).toEqual(10);
//        expect(rover.direction).toEqual('E');
//    });
//     it("sobrepasa el límite del Grid en el eje Y",function(){
//        rover.commands('ff');
//        expect(rover.posX).toEqual(0);
//        expect(rover.posY).toEqual(0);
//        expect(rover.direction).toEqual('N');
//    });
});
