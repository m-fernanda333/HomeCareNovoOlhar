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

function openPopUp4() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf4").style.display = "block";
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";   
}

function openPopUp5() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf5").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
}

function openPopUp6() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf6").style.display = "block";  
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden"; 
}

function openPopUp7() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf7").style.display = "block";   
    document.querySelector(".wrap").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
}

function openPopUp8() { //mostrar menu popup "FISOTERAPIA" no display
    document.querySelector("#ctf8").style.display = "block";   
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
    document.querySelector(".wrap").style.overflowY = "initial";
    document.querySelector("body").style.overflowY = "initial";
           
}

//Função para trocar de fundo (simulando um slider) e setar o btn radius junto

let count = 1;

setInterval ( function(){ //definindo o intervalo de tempo em que irá chamar a proxima imagem (atraves da função nexImg)
    nextImage();
}, 4000)

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
        
        document.getElementById("radio1").checked = true;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.querySelector("body").style.backgroundImage = "url(img/hd1.png)";
        document.getElementById("text2News").style.display = "none";
        document.getElementById("text1News").style.display = "block";
        count = 1;
}

function slider2 () {
   
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = true;
    document.getElementById("radio3").checked = false;
    document.querySelector("body").style.backgroundImage = "url(img/hdd2.png)";
    document.getElementById("text1News").style.display = "none";
    document.getElementById("text2News").style.display = "block";
    count = 2;
}

function slider3 () {
        document.querySelector("body").style.backgroundImage = "url(img/hdd3.png)";
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = "true";
        document.getElementById("text2News").style.display = "none";
        document.getElementById("text1News").style.display = "block";
        count = 3;

}