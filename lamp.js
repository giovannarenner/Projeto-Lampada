var $ligar = document.getElementById('ligar')
var $desligar= document.getElementById('desligar')
var $lampada= document.getElementById('lamp')
var $verde = document.getElementById('verde')
var $roxa = document.getElementById('roxa')
var $azul = document.getElementById('azul')
var $ros = document.getElementById('rosa')
var $verm = document.getElementById('vermelha')


function ligarLamp(){
    $lampada.src ="./img/ligada.jpeg"
}
function desligarLamp(){
    $lampada.src ="./img/desligada.jpeg"

}

function verde(){
    $lampada.src ="./img/verde.jpeg"
}

function roxa(){
    $lampada.src ="./img/roxa.jpeg"
}

function azul(){
    $lampada.src ="./img/azul.jpeg"
}

function ros(){
    $lampada.src ="./img/rosa.jpeg"
}

function verm(){
    $lampada.src ="./img/vermelha.jpeg"
}

$verm.addEventListener('click',verm)
$ros.addEventListener('click',ros)
$azul.addEventListener('click',azul)
$roxa.addEventListener('click', roxa)
$ligar.addEventListener('click', ligarLamp)
$desligar.addEventListener('click',desligarLamp) 
$verde.addEventListener('click',verde)