let oddEve = function(num) {
    return num % 2;
}

let fetchOs = function () {
    let os = window.prompt('Enter your OS name and it\'s version (leave a space inbetween)'); 
    let arr = os.split(' ');   
    return arr;
}

function evaluation() {
    let marks = window.prompt('Enter your marks out of 100 : '); 
    let arrOfObjects = [];
    arrOfObjects.push(ifEval(marks));
    arrOfObjects.push(switchEval(marks));
    arrOfObjects.push(ternaryEval(marks));
    return arrOfObjects;
}

let ifEval = function (marks) {
    
    let grade;
    if(marks <= 100 && marks >= 85)
        grade='A+';
    else if(marks < 85 && marks >= 75)
        grade='A';
    else if(marks < 75 && marks >= 60)
        grade='B+';
    else if(marks < 60 && marks >= 50)
        grade='B';
    else if(marks < 50 && marks >= 40)
        grade='C+';    
    else if(marks < 40 && marks >= 35)
        grade='C';
    else
        grade='F';
    
    return {"marks":marks, "grade":grade};
}


function switchEval(marks) {
    let grade;
    
    switch(Math.round(marks/10) ){
        case 10 :
        case 9 :
        case 8 :
            grade='A';
            break;
        case 7 :
        case 6 :
        case 5 :
            grade='B';
            break;
        case 4 :
            grade='C';    
            break;
        default :
            grade='F';
    }
    let obj={'marks':marks, 'grade':grade,};
    return obj;
}

let ternaryEval= function(marks){
    let grade;
    marks <= 100 && marks >= 85 ? grade='A+' :
    marks < 85 && marks >= 75 ? grade='A' : 
    marks < 75 && marks >= 60 ? grade='B+' : 
    marks < 60 && marks >= 50 ? grade='B' :
    marks < 50 && marks >= 40 ? grade='C+' : 
    marks < 40 && marks >= 35 ? grade='C' : grade='F';
    return {'grade':grade,'marks':marks,};
}
