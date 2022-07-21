import {header,list} from "../componentss/header.js"


document.querySelector("#mainDiv").innerHTML = header();
document.querySelector("#list").innerHTML = list();


let  workout = [

    {img:"https://www.gymwolf.com/images/category_chest.jpg",heading:"Chest"},
    {img:"https://www.gymwolf.com/images/category_biceps.jpg",heading:"Biceps"},
    {img:"https://www.gymwolf.com/images/category_triceps.jpg",heading:"Triceps"},
    {img:"https://www.gymwolf.com/images/category_back.jpg",heading:"Back"},
    {img:"https://www.gymwolf.com/images/category_shoulder.jpg",heading:"Shoulder"},
    {img:"https://www.gymwolf.com/images/category_legs.jpg",heading:"Legs"},
    {img:"https://www.gymwolf.com/images/category_abdominal.jpg",heading:"Abdominal"},
    {img:"https://www.gymwolf.com/images/category_combined.jpg",heading:"Combined"},
    {img:"https://www.gymwolf.com/images/category_cardio.jpg",heading:"Cardio"},

]



 
let picture = (workout) => {
    
    workout.forEach(({img,heading}) => {
        let div=document.createElement("div");
      
        let image= document.createElement("img");
        image.src=img;
        
        let smallDiv=document.createElement("div");
        smallDiv.setAttribute("class","smallDiv")
        let h1 = document.createElement("h2");
         h1.innerText=heading;

         smallDiv.append(h1);

         div.append(image,smallDiv);
    

         document.querySelector("#picture").append(div)
    })
      
}  

picture(workout);
let abdominal = document.querySelector("#abdominal");


let append = () => {
let url = "http://127.0.0.1:3000/api/abdominal"

fetch(url)
.then((res)=>{
    return res.json()
})
.then((res)=> {
    console.log(res);
    displayTable(res,abdominal);
})

}

append();



let displayTable = (data,abdominal) => {

    data.forEach((el) => {
        let {smallImg,title,Sort}=el;
 
      let div = document.createElement("div");
      div.setAttribute("class","mainDiv")

      let div1 = document.createElement("div");
      div1.setAttribute("class","div1")

      let div2 = document.createElement("div");
      div2.setAttribute("class","div2")
      if(smallImg!==""){
      let img= document.createElement("img");
      img.src = smallImg;
      img.setAttribute("class","img")
      div1.append(img);
    }

      let h3 = document.createElement("h3");
      h3.innerText = title;
      h3.setAttribute("class","h3")

      let h31 = document.createElement("h31");
      h31.innerText = Sort;
      h31.setAttribute("class","h31")

      
      div2.append(h3,h31)
      div.append(div1,div2);

      abdominal.append(div);
    })
    
}

let back = document.querySelector("#back");

let append1 = () => {
    let url = "http://127.0.0.1:3000/api/back"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,back);
    })
    
    }
    
 append1();


 let biceps = document.querySelector("#biceps");

let append2 = () => {
    let url = "http://127.0.0.1:3000/api/biceps"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,biceps);
    })
    
    }
    
 append2();



 let chest = document.querySelector("#chest");

let append3 = () => {
    let url = "http://127.0.0.1:3000/api/chest"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,chest);
    })
    
    }
    
 append3();



 let combined = document.querySelector("#combined");

let append4 = () => {
    let url = "http://127.0.0.1:3000/api/combined"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,combined);
    })
    
    }
    
 append4();


 let legs = document.querySelector("#legs");

let append5 = () => {
    let url = "http://127.0.0.1:3000/api/legs"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,legs);
    })
    
    }
    
 append5();


 let shoulder = document.querySelector("#shoulder");

let append7 = () => {
    let url = "http://127.0.0.1:3000/api/shoulder"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
       
        displayTable(res,shoulder);
    })
    
    }
    
 append7();


 let triceps = document.querySelector("#triceps");

let append8 = () => {
    let url = "http://127.0.0.1:3000/api/triceps"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
       
        displayTable(res,triceps);
    })
    
    }
    
 append8();


