import {header,list} from "../componentss/header.js"


document.querySelector("#mainDiv").innerHTML = header();
document.querySelector("#list").innerHTML = list();

 let d;
let workout = () => {

    let url = "http://127.0.0.1:3000/api/workout"

    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((res)=> {
        console.log(res);
        append(res);
        d=res;
    })
}


workout();


let append = (data) => {

  data.forEach((el) => {
    let {smallImg,bigImg,Sort,title,video,id} = el;
     
    let div = document.createElement("div");
    div.setAttribute("class","div");

    if(id%2!==0){
      div.style.backgroundColor = "whitesmoke";
    }

    let div1 = document.createElement("div");
    div1.setAttribute("class","div1")

    let div2 = document.createElement("div");
    div2.setAttribute("class","div2")

    let img = document.createElement("img");
    img.setAttribute("class","img")
    img.src=smallImg

    let h3 = document.createElement("h3");
    h3.setAttribute("class","h3")
    h3.innerText = title

    let h31 = document.createElement("h3");
    h31.setAttribute("class","h31")
    h31.innerText = video;


    let p = document.createElement("p");
    p.setAttribute("class","p")
    p.innerText = Sort;

    div1.append(img);
    div2.append(h3,p,h31)

    if(bigImg!==""){
    let h32 = document.createElement("h3");
    h32.setAttribute("class","h32")
    h32.innerText = bigImg;
    div2.append(h3,p,h31,h32)
    }
    
    let div3 = document.createElement("div");
    div3.setAttribute("class","div3")
    
    let btn = document.createElement("button");
    btn.setAttribute("class","btn")
   

    let h1 = document.createElement("h1");
    h1.innerText = "+";
    
    let h34 = document.createElement("h3");
    h34.innerText = "Add to my workout plans";

    btn.append(h1,h34);

    div3.append(btn)

    div.append(div1,div2,div3);

    document.querySelector("#workoutList").append(div);
  }) 

}



let work = () => {
  let arr =[];
  let query = document.querySelector("#search").value
    let data = d.filter(({video})=>{
     
           arr.push(video);
        for(let i=0; video.length; i++){
            return arr[i]==query;
        }
    })
    console.log(data);
}


document.querySelector("#class1").addEventListener("click",work);