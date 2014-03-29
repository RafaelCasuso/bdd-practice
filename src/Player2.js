/**
 * Created with JetBrains WebStorm.
 * User: Rafael
 * Date: 26/09/13
 * Time: 19:19
 * To change this template use File | Settings | File Templates.
 */

var Rover = function(posX, posY, direction, grid){
    this.posX = posX;
    this.posY = posY;
    this.grid = grid;

    this.direction = direction;

    this.mover = function (avanzar){
        var incremento = (avanzar) ? 1: -1;

        if ((this.direction=="N") || (this.direction=="S")){
            this.posY += incremento;
            if (this.posY > this.grid.height) this.posY = 0;
        }
        else {
            this.posX += incremento;
        }

    };
    this.girar = function (sentido){
        var direcciones = ["N","E","S","W"];
        var incremento = (sentido) ? 1 : -1;

        var indice = direcciones.indexOf(this.direction);
        indice = (indice + incremento +4) % 4;
        this.direction = direcciones[indice];

    };

    this.commands = function(arrayComandos){
        var comando;
        for(var i=0;i<arrayComandos.length;i++){
            comando = arrayComandos.substr(i,1);
            switch(comando){
                case "f":
                    this.mover(true);
                    break;
                case "b":
                    this.mover(false);
                    break;
                case "r":
                    this.girar(true);
                    break;
                case "l":
                    this.girar(false);
                    break;
            }
        }
    }

};

var Grid = function(width, height){
    this.width = width;
    this.height = height;
};


