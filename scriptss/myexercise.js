import {header,list} from "../componentss/header.js"


document.querySelector("#mainDiv").innerHTML = header();
document.querySelector("#list").innerHTML = list();




let display = () => {

    document.querySelector("#smallInputDiv").style.display="none";
    document.querySelector("#main").style.display="flex";
}

document.querySelector("#more").addEventListener("click",display)