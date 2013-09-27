/**
 * Created with JetBrains WebStorm.
 * User: Rafael
 * Date: 26/09/13
 * Time: 19:18
 * To change this template use File | Settings | File Templates.
 */
describe("Conjunto de tests para Rover", function(){

    var rover;
    var grid;

    beforeEach(function() {
        grid = new Grid(11,11);
        rover = new Rover(0,10,"N",grid);
    });

    it("Existe el objeto Rover",function(){
        expect(rover).toBeDefined();
    });
    it("Existe el objeto Grid",function(){
        expect(grid).toBeDefined();
    });
    it("El objeto Rover esta en posicion y tiene direccion",function(){
        expect(rover.posX).not.toBe(null);
        expect(rover.posY).not.toBe(null);
        expect(rover.direction).not.toBe(null);
    });
    it("Avanza con comando 'f'",function(){
        rover.commands('f');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(11);
        expect(rover.direction).toEqual('N');
    });
    it("Retrocede con comando 'b'",function(){
        rover.commands('b');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(9);
        expect(rover.direction).toEqual('N');
    });
    it("Gira a la derecha con comando 'r'",function(){
        rover.commands('r');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(10);
        expect(rover.direction).toEqual('E');
    });
    it("Gira a la izquierda con comando 'l'",function(){
        rover.commands('l');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(10);
        expect(rover.direction).toEqual('W');
    });
    it("Gira a la derecha y avanza con comandos 'rf'",function(){
        rover.commands('rf');
        expect(rover.posX).toEqual(1);
        expect(rover.posY).toEqual(10);
        expect(rover.direction).toEqual('E');
    });
     it("Vuelve a inicio de eje Y cuando sobrepasa el limite del grid",function(){
        rover.commands('ff');
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(0);
        expect(rover.direction).toEqual('N');
    });
})
