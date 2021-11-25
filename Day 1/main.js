var colors = ["red" , "green" ,"blue","rgb(255, 69, 0)", "#BDB76B", "rgb(147, 112, 219)", "Magenta"]
var color = document.querySelector(".color")
var box = document.querySelector(".box");



function changebg(){
    var random = randomcolor()
    box.style.backgroundColor = colors[random];
    color.textContent = colors[random]
}



function randomcolor(){
    return Math.floor(Math.random()*colors.length);
}



