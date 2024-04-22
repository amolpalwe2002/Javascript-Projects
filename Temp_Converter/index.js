const textBox = document.getElementById("temp");
const fTOc = document.getElementById("fTOc");
const cTOf = document.getElementById("cTOf");
const sub = document.getElementById("subBtn");

let temp;

document.getElementById("subBtn").onclick = function convert(){
    if(fTOc.checked){
        temp =Number(textBox.value);
        let tempc = Math.round((temp-32) * (9/5));
        // console.log(tempc);

        document.getElementById("temp1").innerHTML = temp + " <sup>o</sup>F" ;
        document.getElementById("temp2").innerHTML = tempc + " <sup>o</sup>C" ;



        // console.log("fTOc");
    }
    else if(cTOf.checked){

        temp =Number(textBox.value);
        let tempf = Math.round((temp*(9/5)+32));
        // console.log("cTOf");

        document.getElementById("temp1").innerHTML = temp + " <sup>o</sup>C" ;
        document.getElementById("temp2").innerHTML = tempf + " <sup>o</sup>F" ;

    }
    else{
        document.getElementById("res").innerHTML = "Please Select a Conversion Type...";
    }
}
