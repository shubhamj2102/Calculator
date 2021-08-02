function updateDisplay(value){
    document.getElementById("display").innerHTML+=value;
    
}

function solve(){

    let r=eval( document.getElementById("display").innerHTML);
    r="="+r;
    document.getElementById("display").innerHTML+=r;
}

function clr(){
    document.getElementById("display").innerHTML=' ';
}

function dlt(){
    let str=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=str.substring(0,str.length-1);
}

