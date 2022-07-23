
function any(){
  window.location.reload()
}

function chest(){
  let a=document.getElementById("chesst").innerHTML
  getdata(a)
  let obj={
    body_name:document.getElementById("chesst").innerText,
    image:document.getElementById("img_chest").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
  window.location.reload()
}

function biceps(){
  let a=document.getElementById("Chest").innerHTML
  getdata(a)
  let obj={
    body_name:document.getElementById("Chest").innerText,
    image:document.getElementById("img_chest").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
  window.location.reload()
}

 function biceps(){
  let a=document.getElementById("Biceps").innerHTML
  getdata(a)
  let obj={
    body_name:document.getElementById("Biceps").innerText,
    image:document.getElementById("img_biceps").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
  window.location.reload()
 }
 function triceps(){
  let b=document.getElementById("Triceps").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Triceps").innerText,
    image:document.getElementById("img_triceps").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }

 function back(){
  let c=document.getElementById("Back").innerHTML
  console.log(c)
  getdata(c)
  let obj={
    body_name:document.getElementById("Back").innerText,
    image:document.getElementById("img_back").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 function leg(){
  let b=document.getElementById("Leg").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Leg").innerText,
    image:document.getElementById("img_leg").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 function combined(){
  let b=document.getElementById("Combined").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Combined").innerText,
    image:document.getElementById("img_combined").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 function abdominal(){
  let b=document.getElementById("Abdominal").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Abdominal").innerText,
    image:document.getElementById("img_abdominal").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 function shoulder(){
  let b=document.getElementById("Shoulder").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Shoulder").innerText,
    image:document.getElementById("img_shoulder").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 function cardio(){
  let b=document.getElementById("Cardio").innerHTML
  console.log(b)
  getdata(b)
  let obj={
    body_name:document.getElementById("Cardio").innerText,
    image:document.getElementById("img_cardio").src
}
localStorage.setItem("body_name",JSON.stringify(obj))
window.location.reload()
 }
 


let data=JSON.parse(localStorage.getItem("body_name"))
document.getElementById("type_name").innerHTML=data.body_name

// if(data.body_name=="Chest"){
//   document.getElementsByClassName("child1").style.display="none"
// }
document.getElementById("Any").innerHTML=data.body_name
let a=document.getElementById("b_img")
console.log(data.image)
a.src=data.image
console.log(data)
getdata(data.body_name)

    async function getdata(d){
      let url=`http://localhost:3000/${d}`
        try{
            let res= await fetch(url)
            let data=await res.json();
            console.log(data)
            append(data)
        }catch(err){
            console.log(err)
        }
    }
    function append(data){
      
            let container=document.getElementById("data")
            container.innerHTML=null
            data.forEach(function(el){
                 let div=document.createElement("div")
                 let div1=document.createElement("div")
        
                 div1.setAttribute("id","div1")
                 let div2=document.createElement("div")
                 div2.setAttribute("id","div2")
                 let div3=document.createElement("div")
                 div3.setAttribute("id","div3")
                 let img=document.createElement("img")
                 img.src=el.smallImg
                 div1.append(img)
                 
                 let title=document.createElement("p")
                 title.innerText=el.title
                 title.setAttribute("id","title")
                 title.addEventListener("click",function(){
                    adddata(el)
                 })
                  document.getElementById("body_div").addEventListener("click",function(){
                    document.getElementById("body_img").src=el.bigImg
                    console.log(el.bigImg)
                    document.getElementById("body_name").innerText=el.muscleGroup
                    console.log("hiii")
                  })

                 let sort=document.createElement("p")
                 sort.innerText=el.Sort
                 sort.setAttribute("id","sort")
                div3.append(div1)
                 div2.append(title,sort)
                 div.append(div3,div2)
                 container.append(div)
            });
            function adddata(el){
              console.log(el.video)
              if(el.video==""){
                localStorage.setItem("data",JSON.stringify(el))
                window.location.href="chestobj.html"
                
              }else{
                window.location.href="video.html"
                localStorage.setItem("data",JSON.stringify(el))
              }
             
            }
        
    }