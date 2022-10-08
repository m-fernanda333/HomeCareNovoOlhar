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