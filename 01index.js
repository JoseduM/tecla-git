/*
function mifuncion(){
    console.log('Hola mundo!');
};

mifuncion();



function segunda(){
    let nombre = prompt ('Ingrese su nombre')
    alert('El nombre ingresado es ${nombre}')
};

segunda();

const miarray = ['datos', 'pepe', 123, 'auto', 'final del array'];

let tercera = (data) => {
    for (let i = 0; i<miarray.length;i++){
        console.log('la posición ${i}, tiene como valor ${miarray[i]')
    }
    //miarray.array.forEach(element => )
};

tercera();
//
*/

class FabricaBicicletas {
    constructor(materiaPrima, pintura, pintado, armado){
        this.armada= pintado || false; //si me da el valor de pintado, se le asigna, sino, es false
        this.pintado = armado || false;
        this.materiaPrima = materiaPrima;
        this.pintura = pintura;
    }
    informar(mensaje){
        console.log(mensaje);
    }
    armar(){
        this.materiaPrima = this.materiaPrima -1;
        this.informar('Tu bici fue ensamblada');
        this.armado=true;
    }

    pintar(){
        if (this.armado){
            this.pintura = this.pintura-1;
            this.informar('La bici fue pintada.');
            this.pintado= true;
        }
        else{
            this.informar('Debemos primero armarla antes de pintarla.');
        }
    }
    
    finalizar(){
        if(this.armado && this.pintado){
            this.informar('La bici está lista.')
        }
        else{
            this.informar('Faltan cosas por hacer.')
        }
    }
}


const Fabrica = new FabricaBicicletas(10,10,false,false);

console.log(Fabrica)

Fabrica.armar();
console.log(Fabrica);