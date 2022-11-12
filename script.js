/* FUNÇÕES PARA O MENU MOBILE NAVBAR */

function openHamb() { //Abrir menu mobile
    document.querySelector("#navBarMobile").style.display = "block"; 
    document.querySelector("#openHamb").style.display = "none"; 
    document.querySelector("#closeHamb").style.display = "block"; 
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
}

function closeHamb() { //Fechar menu mobile
    document.querySelector("#navBarMobile").style.display = "none"; 
    document.querySelector("#openHamb").style.display = "block"; 
    document.querySelector("#closeHamb").style.display = "none"; 
    document.querySelector(".wrap").style.overflowY = "initial";
    document.querySelector("body").style.overflowY = "initial";
}

/* FUNÇÕES PARA OS MENUS POP-UP */

function openPopUp1() { //mostrar menu popup "HOME CARE" no display
        document.querySelector("#ctf1").style.display = "block"; 
        document.querySelector(".wrap").style.overflowY = "hidden";
        document.querySelector("body").style.overflowY = "hidden";
}

function openPopUp2() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf2").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
}

function openPopUp3() { //mostrar menu popup "NUTRIÇÃO" no display
    document.querySelector("#ctf3").style.display = "block"; 
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";  
}

function openPopUp4() { //mostrar menu popup "PSICOLOGIA" no display
    document.querySelector("#ctf4").style.display = "block";
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";   
}

function openPopUp5() { //mostrar menu popup "ENFERMAGEM" no display
    document.querySelector("#ctf5").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
}

function openPopUp6() { //mostrar menu popup "FONOAUDIOLOGIA" no display
    document.querySelector("#ctf6").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
}

function openPopUp7() { //mostrar menu popup "TRANSPORTE AMBULATORIAL" no display
    document.querySelector("#ctf7").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
}

function openPopUp8() { //mostrar menu popup "ATENDIMENTO MÉDICO" no display
    document.querySelector("#ctf8").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
}

function openPopUp9() { //mostrar menu popup "DESENVOLVIMENTO PROFISSIONAL" no display
    document.querySelector("#ctf9").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
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
    document.querySelector(".wrap").style.overflowY = "initial";
    document.querySelector("body").style.overflowY = "initial";
           
}

//Função para trocar de fundo (simulando um slider) e setar o btn radius junto

let count = 1;

setInterval ( function(){ //definindo o intervalo de tempo em que irá chamar a proxima imagem (atraves da função nexImg)
    nextImage();
}, 7500)

function nextImage () { //função que define  a proxima imagem e a sutuacao do btn radius
    
    count++;

    if (count > 3) {
        count = 1
    }


    if (count == 1) {
       slider1();
    }

    if (count == 2) {
       slider2();
    }

    if (count == 3) {
        slider3();
    }

}

function slider1 () {
    document.querySelector("body").style.backgroundImage = "url(img/hd1.png)";
        document.getElementById("radio1").checked = true;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
       
        document.getElementById("text2News").style.display = "none";
        document.getElementById("text1News").style.display = "block";
        document.getElementById("text3News").style.display = "none";

        document.getElementById("btnP1").style.display = "block";
        document.getElementById("btnP2").style.display = "none";
        count = 1;
}

function slider2 () {
    document.querySelector("body").style.backgroundImage = "url(img/hdd2.webp)";
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = true;
    document.getElementById("radio3").checked = false;
   
    document.getElementById("text1News").style.display = "none";
    document.getElementById("text2News").style.display = "block";
    document.getElementById("text3News").style.display = "none";

    document.getElementById("btnP1").style.display = "block";
    document.getElementById("btnP2").style.display = "none";
    count = 2;
}

function slider3 () {
        document.querySelector("body").style.backgroundImage = "url(img/hdd3.webp)";
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = "true";
        document.getElementById("text2News").style.display = "none";
        document.getElementById("text1News").style.display = "none";
        document.getElementById("text3News").style.display = "block";

        document.getElementById("btnP1").style.display = "none";
        document.getElementById("btnP2").style.display = "block";
        count = 3;

}

Window.sr = ScrollReveal({ reset: true });
ScrollReveal().reveal('.delayHardReveal', { delay: 300, origin: "top",distance: "50px", duration: 1000 });
ScrollReveal().reveal('.delayMediumReveal', { delay: 200, origin: "top",distance: "50px", duration: 500 });
ScrollReveal().reveal('.delayFastReveal', { delay: 100, origin: "top",distance: "50px", duration: 200 });
