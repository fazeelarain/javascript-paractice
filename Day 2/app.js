var count = 0;

var value = document.getElementById("value");



function decrease(){
    count--
    value.innerHTML = count
    if(count < 0){
       value.style.color = "red"
    }
}

function increase(){
    count++
    value.innerHTML = count
    if(count > 0 ){
        value.style.color = "green"
    }
}

function reset(){
    count = 0;
    value.innerHTML = count
    if(count == 0 ){
        value.style.color = "#222"
    }
}