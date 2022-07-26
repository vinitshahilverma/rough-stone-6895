

import footer from "../Homepage/footer.js"

document.getElementById("footer-top").innerHTML=footer()


import navbar from "../sandy_gymwolf/sandy_navbar.js"
document.getElementById("nav").innerHTML=navbar()



  let data=JSON.parse(localStorage.getItem("userData"))
  
  data.forEach(function(el){
    console.log(el.name)
  document.getElementById("baljor").innerHTML=el.name
  })