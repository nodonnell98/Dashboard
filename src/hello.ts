import { url } from "inspector";

console.log("hello");

let article: HTMLCollection = document.getElementsByClassName("article")
let flexContainer: HTMLElement = document.getElementById("section1")
let gridBtn: HTMLElement = document.getElementById("gridBtn");
let listBtn: HTMLElement = document.getElementById("listBtn");


gridBtn.addEventListener("click", grid);
listBtn.addEventListener("click", list);


function list(){
    for(let i = 0; i < article.length; i++){      
        
        article.item(i).classList.add("flexList");
        article.item(i).classList.remove("flexGrid");         
    }
    flexContainer.classList.add("flexListContainer");
        flexContainer.classList.remove("flexGridContainer");         
}

function grid(){
    for(let i = 0; i < article.length; i++){        
        
        article.item(i).classList.remove("flexList");
        article.item(i).classList.add("flexGrid");           
    }
    flexContainer.classList.remove("flexListContainer");
        flexContainer.classList.add("flexGridContainer");  
}