var passfield = document.getElementById("pass")
var showbtn = document.querySelector("span i")


showbtn.addEventListener("click" ,function(){
    if(passfield.type === "password"){
        passfield.type = "text"
        showbtn.classList.add("hide")
    }else{
        passfield.type = "password";
         showbtn.classList.remove("hide")
    }
})