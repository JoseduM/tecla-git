const miPromesa= new Promise ((resolve, reject) => {
    setTimeout(() => {
        //resolve('ok')//resolve es como un return
        reject('OK')//DA ERROR 
    }, 3000);
})

const mensaje = (data) => console.log(data)

function main (callback){
    if (typeof callback == 'function'){
        miPromesa
            .then((resp)=>{
                callback('Ejecutado dentro del then')
            })//resp es una respuesta
        .catch((err)=>{//si es que algo sale mal
            callback('Hubo un error')
        })
    callback('fuera del callback1 ')
    callback('fuera del callback2 ')
    }
    else{
        console.log('necesitamos una función')
    }
}


//main(mensaje);








//FETCH


const url = 'https://api.giub.com/users'
/*
function getUsuariosGit(id){
    let urlId = 'https://api.giub.com/users/' +id;
    fetch(urlId)//devuelve una promesa
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log('Hubo un error')
        })
}*/

//getUsuariosGit('JoseduM')


//async -await

async function getUsuariosGit(id) {
    let urlId = 'https://api.github.com/users/' +id;
    const response = await fetch (urlId);
    const data = await response.json();
    return data;
} 


async function getGit(id) {
    const resultado = getUsuariosGit(id)
    console.log(resultado)
}

//getGit('JoseduM')





/////////////////////7actividad

/*https://api.chucknorris.io/jokes/random hacemos 
la consulta desde un método de nuestra clase
*/
let testChuck = document.getElementById('testChuck')

class ChuckNorrisServise {
    constructor (url){ 
        this.url = url;
    }

    getChuckNorris () {
        return fetch (url)
    }
}

function renderData (ChuckNorrisObject){
    ChuckNorrisObject.getChuckNorris()
        .then((resp) => resp.json());
        .then((data) => {
            let legend = document.createElement('h2');
            legend.textContent = '${data.value}';

            let createChuck = document.createElement('img');
            createChuck.setAttribute('src',data.icon_url)
            createChuck.style.widith = '200px';

            textChuck.appendChild(legend)
            textChuck.appendChild(createChuck);

        })

        .catch((err) => {
            console.log(err);
        })
}



const newChuckNorris = new ChuckNorrisServise('https://api.chucknorris.io/jokes/random')

renderData(newChuckNorris);

























