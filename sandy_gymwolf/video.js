
let data=JSON.parse(localStorage.getItem("data"))
console.log(data)


let title=document.getElementById("title")
title.innerText=data.title

let con=document.getElementById("f")

let video=document.createElement("iframe")
video.src=data.videos

con.append(video)

let data_container=document.getElementById("data_div")
let sort=document.createElement("p")
sort.innerText=data.Sort
sort.setAttribute("id","sort")

let fault=document.createElement("h4")
fault.innerText="Muscle group:"
fault.setAttribute("id","fault")

let muscleGroup=document.createElement("p")
muscleGroup.innerText=data.muscleGroup
muscleGroup.setAttribute("id","muscleGroup")

let step=document.createElement("h2")
step.innerText=data.stepname
step.setAttribute("id","step")

let steps=document.createElement("p")
steps.innerText=data.steps
steps.setAttribute("id","steps")

let tip=document.createElement("h2")
tip.innerText=data.tipname
tip.setAttribute("id","tip")



let tips=document.createElement("p")
tips.innerText=data.tips
tips.setAttribute("id","tips")

let button=document.createElement("button")
button.innerText="❮ All exercise"
button.setAttribute("id","btn")


data_container.append(sort,fault,muscleGroup,step,steps,tip,tips,button)

document.getElementById("video").addEventListener("click",function(){
//    let x= document.getElementById("video")
//    x.setAttribute("id","x")
//     let y=document.getElementById("photo")
//     y.setAttribute("id","y")
    window.location.reload()
})

document.getElementById("photo").addEventListener("click",function(){
    let video= document.getElementById("video")
    video.style.border="none",
    video.style.borderBottom ="1px solid grey",
    video.style.color="#428bca"

    // video.setAttribute("id","video2")
     let photo=document.getElementById("photo")
     photo.style.border="1px solid grey"
     photo.style.borderBottom="none"
     photo.style.borderRadius="3px"
     photo.style.color="none"
     let data=JSON.parse(localStorage.getItem("data"))
     
console.log(data)


let con=document.getElementById("f")
con.innerHTML=null
con.setAttribute("id","con")
let videos=document.createElement("img")
videos.src=data.bigImg
videos.setAttribute("id","pic")
con.append(videos)
 })