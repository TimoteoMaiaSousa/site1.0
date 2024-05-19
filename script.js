var opcs = document.getElementById('menuopcs')
opcs.style.display = 'none'

var x = document.getElementById('exit')
x.style.display = 'none'

var menu = document.getElementById('menu')
function entrar_menu(){
    menu.style.display = 'none'
    x.style.display = 'flex'
    opcs.style.display = 'flex'
}
function sair_menu(){
    menu.style.display = 'flex'
    x.style.display = 'none'
    opcs.style.display = 'none'
}
var b = 1+1