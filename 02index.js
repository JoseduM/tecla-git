/*
const uno = () =>{
    setTimeout(() => {
        console.log('uno')
    },1000);
}

const dos = () =>{
    setTimeout(() => {
        console.log('dos')
    },500);
}

const tres = () =>{
    setTimeout(() => {
        console.log('tres')
    },3000);
}

const final = () =>{
    setTimeout(() => {
        console.log('final')
    },2000);
}

function main() {
    console.log('Inicio')
    uno()
    dos()
    tres()
    final()
}

main();
*/


////////////////////////////////////
////////        CALLBACK//////////////////////////

function saludo(){
    console.log('Hola mundo');
}

const llamadora = (callback1) =>{
    //console.log('el tipo de parámetro es ->',typeof (callback1));


    if (typeof (callback1)== 'function'){
        console.log('Abajo vamos a llamar a nuestra función callback1');
        callback1();

    }
    else{
        console.log('El parámetro no es una función');
    }
}


llamadora(saludo);

////////////////////////////////////////////////

let miarray =[10,20,30,40];

//for each es para abreviar un for normal. 
miarray.forEach(element => console.log(element));


