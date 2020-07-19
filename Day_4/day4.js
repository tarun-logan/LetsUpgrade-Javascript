let isPrime = function (num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

let questionSix = function(){
     let input = window.prompt('Enter a number greather than 100!');
     let flag=true;
     while(flag){
        (input === null || input === '')? flag = false :
        (input <= 100 && input >= 0) ? input = window.prompt('Enter a number greather than 100!') : flag=false;
    }
    return input;
}

let questionFive = function(sales){
    let commission=0;
    if(sales <= 5000 && sales >= 0){
        commission = sales * 0.02;
    }else if(sales <= 10000 && sales > 5000){
        commission = (5000 * 0.02) + (sales-5000) * 0.05;
    }else if(sales <= 20000 && sales > 10000){
        commission = (5000 * 0.02) + (5000 * 0.05) + (sales-10000) * 0.07;
    }else if(sales > 20000){
        commission = (5000 * 0.02) + (5000 * 0.05) + (10000 * 0.07) + (sales-20000) * 0.1;
    }
    return commission;
}

let calculator = function(operator){
    let result;
    let operand1=parseInt(window.prompt('Enter first number : ',0));
    let operand2=parseInt(window.prompt('Enter second number : ',0));
    switch (operator) {
        
        case '1': result = operand1 + operand2;
                return `${operand1} + ${operand2} = ${result}`;
            break;
        case '2': result = operand1 - operand2;
                return `${operand1} - ${operand2} = ${result}`;
            break;
        case '3': result = operand1 * operand2;
                return `${operand1} * ${operand2} = ${result}`;
            break;
        case '4': result = operand1 / operand2;
            return `${operand1} / ${operand2} = ${result}`;
            break;
        case '5': result = operand1 % operand2;
            return `${operand1} % ${operand2} = ${result}`;
            break;
        default:
            return 'invalid choice';
            break;
    }
}

let squareRoot = (num) => Math.sqrt(num);

let ask = (question, yes, no) => window.confirm(question)?yes():no();