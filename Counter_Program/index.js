let count = document.getElementById("count").innerHTML;

document.getElementById("dec").onclick = function(){
    
    count--;
    document.getElementById("count").innerHTML = count;
    // console.log(count);
}

document.getElementById("res").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;
    // console.log(count);
}

document.getElementById("inc").onclick = function(){
    
    count++;
    document.getElementById("count").innerHTML = count;
    // console.log(count);
}