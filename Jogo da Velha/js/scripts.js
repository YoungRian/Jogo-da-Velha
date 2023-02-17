/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const player1 = "X";
const player2 = "O";

let FimJogo = false;
let vez = player1;

vezJogador();
iniciar();
verificarGanhador();
verificarEmpate();

function vezJogador() {
    if (FimJogo) {
        return;
    }
    
    if (vez == player1) {
        let player = document.querySelectorAll("div#VezJogador img")[0];
        player.setAttribute("src", "assets/img/X.png");
        
    }

    else {
        let player = document.querySelectorAll("div#VezJogador img")[0];
        player.setAttribute("src", "assets/img/Circulo.png");

        
    }
}
function iniciar() {
    let butoes = document.getElementsByClassName("butoes");
    for (let i = 0; i < butoes.length; i++) {
        butoes[i].addEventListener("click", addplayer)
        
    }
}
function addplayer(){
        
    if(FimJogo){
        return;
    }
    if(this.getAttribute('jogada') != "X" && this.getAttribute('jogada') != "O" ){
        if(vez == player1){
            this.src = "assets/img/X.png";
            this.setAttribute("jogada", player1);
            vez = player2;
        }
        else{
            this.src = "assets/img/Circulo.png";
            this.setAttribute("jogada", player2);
            vez = player1;
        }
        vezJogador();
        }
let a = document.getElementById("a").getAttribute("jogada");
let b = document.getElementById("b").getAttribute("jogada");
let c = document.getElementById("c").getAttribute("jogada");
let d = document.getElementById("d").getAttribute("jogada");
let e = document.getElementById("e").getAttribute("jogada");
let f = document.getElementById("f").getAttribute("jogada");
let g = document.getElementById("g").getAttribute("jogada");
let h = document.getElementById("h").getAttribute("jogada");
let i = document.getElementById("i").getAttribute("jogada");
    function VerificarGanhador(){
        let vencedor = "";
        //Verificar "a"
        if(a == b && a == c && a != ""){
            vencedor = a;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        }
        else if(a == d && a == g && a != ""){
            vencedor = a;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        }
        else if(a == e && a == i && a != ""){
            vencedor = a;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        } 
        //Verificar "b"
        else if(b == a && b == c && b != ""){
            vencedor = b;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        }
        else if(b == e && b == h && b != ""){
            vencedor = b;
            alert("O Vencedor foi " + vencedor);
            FimJogo = true;
        }
        //Verificar "c"
        else if(c == a && c == b && c != ""){
            vencedor = b;
            alert("O Vencedor foi " + vencedor);
            FimJogo = true;
        }
        else if(c == f && c == i && c != ""){
            vencedor = c;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        }
        else if(c == e && c == g && c != ""){
            vencedor = c;
            alert("O vencedor foi " + vencedor);
            FimJogo = true;
        }
        //Verificar "d"
        else if(d == e && d == f && d != ""){
            vencedor = d;
            alert("O Vencedor foi " + vencedor);
            FimJogo = true;
        }
        //Verificar "g"
        else if(g == h && g == i && g != ""){
            vencedor = g;
            alert("O Vencedor foi " + vencedor);
            FimJogo = true;
        }
        // Verificar Empate
        else if(a != "" && b != "" && c != "" && d !="" && e !="" && f != "" && g != "" && h !="" && i !="" && vencedor == ""){
            vencedor = "";
            alert("Empate");
            FimJogo = true;
        }   
    }
    VerificarGanhador();
    Resultado();
}
function restar(){
    window.location.reload(true)
}
