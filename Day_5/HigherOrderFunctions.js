//map, filter

let questionOne = (number) => {
    let arr=[];
    for (let i = 0; i < number; i++) {
         arr.push(i);
    }

    return arr.filter(val => val % 2 != 0 ).map( val => val ** 3);

}