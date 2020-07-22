const body = document.querySelector('body');
var num=0;
let questionOne = function(){   
        setInterval(changeBg, 5000);
}

let changeBg = function(){    
    let colorarr = ['teal','darkslateblue','indigo','tomato','blue'];
    body.setAttribute('style',`background-color:${colorarr[num]}`);
    num==colorarr.length?num=0 : num+=1;
   console.log(num);
}

function table() {
    let no=window.prompt('Enter a number to display it\'s multiplication table','1');
    //let table=document.getElementById('table');
    document.write('<h4>The multiplication table of '+ no +' is as follows</h4>');
    for (let index = 1; index <= 10; index++) {
        document.write(`${no} x ${index} = ${no*index} <br>`);
    }
}

let clock = function(){
    let d=new Date();
        document.getElementById('clock').innerText=d.toLocaleTimeString();
}

function darkMode(){
    if(document.body.className=='gradient')
        document.body.setAttribute('class','darkmode');
    else
        document.body.setAttribute('class','gradient');
   
}