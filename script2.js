/*VAR. GLOBAIS*/
let count = 1;
var larguraAtual = window.screen.width;

//Função que recarrega a página toda vez que há uma alteração em seu tamanho ("resize")
window.addEventListener('resize', function(event){ 
    var larguraR = window.screen.width;
    if (larguraR != larguraAtual) {
        this.location.reload(true);
        larguraAtual = larguraR;
    }
});

Window.sr = ScrollReveal({ reset: true }); //Delay no scrool da página afetando itens e seus carregamentos
ScrollReveal().reveal('.delayHardReveal', { delay: 300, origin: "top",distance: "50px", duration: 1000 });
ScrollReveal().reveal('.delayMediumReveal', { delay: 200, origin: "top",distance: "50px", duration: 500 });
ScrollReveal().reveal('.delayFastReveal', { delay: 100, origin: "top",distance: "50px", duration: 200 });

window.addEventListener('scroll', function(){
    var navBar = document.querySelector('.navBar');
    navBar.classList.remove('delayMediumReveal');
    navBar.classList.toggle('sticky', window.scrollY > 0);
})

/* FUNÇÕES PARA O MENU MOBILE NAVBAR */

function openHamb() { //Abrir menu mobile
    document.querySelector("#navBarMobileOp").style.display = "block"; 
    document.querySelector("#terceiraSessãoDeInfo").style.display = "none";
    document.querySelector("#quintaSessãoDeInfo").style.display = "none"; 
    document.querySelector("#footerInfo").style.display = "none";
}

function closeHamb() { //Fechar menu mobile
    document.querySelector("#navBarMobileOp").style.display = "none"; 
    document.querySelector("#terceiraSessãoDeInfo").style.display = "block";
    document.querySelector("#quintaSessãoDeInfo").style.display = "block"; 
    document.querySelector("#footerInfo").style.display = "block";
    
}

/* FUNÇÕES PARA OS MENUS POP-UP */

function openPopUp1() { //mostrar menu popup "HOME CARE" no display
        document.querySelector("#ctf1").style.display = "block"; 
        document.querySelector(".wrap").style.overflowY = "hidden";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".navBar").style.display = "none";
}

function openPopUp2() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf2").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp3() { //mostrar menu popup "NUTRIÇÃO" no display
    document.querySelector("#ctf3").style.display = "block"; 
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".navBar").style.display = "none";  
}

function openPopUp4() { //mostrar menu popup "PSICOLOGIA" no display
    document.querySelector("#ctf4").style.display = "block";
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";   
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp5() { //mostrar menu popup "ENFERMAGEM" no display
    document.querySelector("#ctf5").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp6() { //mostrar menu popup "FONOAUDIOLOGIA" no display
    document.querySelector("#ctf6").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp7() { //mostrar menu popup "TRANSPORTE AMBULATORIAL" no display
    document.querySelector("#ctf7").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp8() { //mostrar menu popup "ATENDIMENTO MÉDICO" no display
    document.querySelector("#ctf8").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".navBar").style.display = "none";
}

function openPopUp9() { //mostrar menu popup "DESENVOLVIMENTO PROFISSIONAL" no display
    document.querySelector("#ctf9").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector(".navBar").style.display = "none";
}

function closePopUp() {//ocultar menu popup no display
   

    document.querySelector("#ctf1").style.display = "none";
    document.querySelector("#ctf2").style.display = "none";
    document.querySelector("#ctf3").style.display = "none";
    document.querySelector("#ctf4").style.display = "none";
    document.querySelector("#ctf5").style.display = "none";
    document.querySelector("#ctf6").style.display = "none";
    document.querySelector("#ctf7").style.display = "none";
    document.querySelector("#ctf8").style.display = "none";
    document.querySelector("#ctf9").style.display = "none";

    if (window.matchMedia("(min-width:723px)").matches) { 
        document.querySelector(".wrap").style.overflowY = "initial";
        document.querySelector("body").style.overflowY = "initial";
        document.querySelector(".navBar").style.display = "flex";
    }
    else {
        document.querySelector(".wrap").style.overflowY = "initial";
        document.querySelector("body").style.overflowY = "initial";
        document.querySelector(".navBar").style.display = "none";
    }
           
}

if (window.matchMedia("(min-width:723px)").matches) { //Verificador tipo mediacarie (@media) para saber o taamnho atual da tela;
    
    /* a viewport tem pelo menos 723 pixels de largura */
    console.log('a viewport tem pelo menos 723 pixels de largura')

  } else {
    /* a viewport menos que 723 pixels de largura */
    console.log('a viewport menos que 723 pixels de largura')
    document.querySelector("body").style.backgroundImage = "url(img/newff2.png)";
  }




