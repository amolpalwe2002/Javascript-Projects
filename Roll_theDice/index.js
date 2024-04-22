

document.getElementById("btn").onclick = function(){
    // Generate Random No. b/w 1 to 6
    let n;
    n = Math.floor(Math.random()*6) + 1;

    if(n==1) document.getElementById("dieFace").attributes[1].value = "./images/die-1.svg";
    else if(n==2) document.getElementById("dieFace").attributes[1].value = "./images/die-2.svg";
    else if(n==3) document.getElementById("dieFace").attributes[1].value = "./images/die-3.svg";
    else if(n==4) document.getElementById("dieFace").attributes[1].value = "./images/die-4.svg";
    else if(n==5) document.getElementById("dieFace").attributes[1].value = "./images/die-5.svg";
    else if(n==6) document.getElementById("dieFace").attributes[1].value = "./images/die-6.svg";
    
}




