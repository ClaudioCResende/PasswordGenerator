const $password = document.querySelector('.password');
const $qtd = document.getElementById('quantidade')
const $minusculas = document.getElementById('minusculas');
const $maiusculas = document.getElementById('maiusculas');
const $numeros = document.getElementById('numeros');
const $simbolos = document.getElementById('simbolos');
const $btnSubmit = document.querySelector('.submit');

const rand = (max, min) => Math.floor(Math.random() * (max-min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => Number(String.fromCharCode(rand(48, 58)));
const simbolosLista ='!#$%&/()=@£§€{[]}?<>;,:.-_~^|'
const geraSimbolo = () => simbolosLista[rand(0,simbolosLista.length)]

// console.log(geraMaiuscula())

function geraPassword(qtd, minusculas, maiusculas, numeros, simbolos){
    const passwordArray = [ ];
    for(let i=0;i<qtd;i++){
        minusculas && passwordArray.push(geraMinuscula());
        maiusculas && passwordArray.push(geraMaiuscula());
        numeros && passwordArray.push(geraNumero());
        simbolos && passwordArray.push(geraSimbolo())
    }
    const passwordClean = passwordArray.join('')
    $password.innerHTML ='Password:  ' + passwordClean.slice(0, qtd)
}

$btnSubmit.addEventListener('click', (qtd, minusculas, maiusculas, numeros, simbolos)=>{
    qtd = $qtd.value;
    minusculas = $minusculas.checked;
    maiusculas = $maiusculas.checked;
    numeros = $numeros.checked;
    simbolos = $simbolos.checked;
    geraPassword(qtd, minusculas, maiusculas, numeros, simbolos);
})

document.body.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        (function(qtd, minusculas, maiusculas, numeros, simbolos){
            console.log(e.key)
            qtd = $qtd.value;
            minusculas = $minusculas.checked;
            maiusculas = $maiusculas.checked;
            numeros = $numeros.checked;
            simbolos = $simbolos.checked;
            geraPassword(qtd, minusculas, maiusculas, numeros, simbolos);
        })()
           
        }
})