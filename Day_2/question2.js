// Default string methods in JS
console.log('results of string methods in js');
let str1='javascript';
console.log(str1.charAt(2));
console.log(str1.length);
console.log(str1.substr(1,4));
console.log(str1.split('a'));
console.log(str1.replace('java','python'));
console.log(str1.endsWith('pt'));
console.log(str1.endsWith('on'));
console.log(str1.charCodeAt(1));
let str2='node'
console.log(str1.concat('|',str2,"|",'angular'));
console.log(str1.indexOf('a'));
console.log(str1.lastIndexOf('a'));
console.log(str1.includes('scr'));
str2=str1.slice(1,4);
console.log(str2);
str2=str1.toUpperCase();
console.log(str2)
console.log(str2.toLowerCase());
console.log(str1.toLocaleUpperCase());
console.log(str2.toLocaleLowerCase());
console.log(str1.match(/asc/g));
console.log(str1.startsWith('java'));
console.log(str2.repeat(3));
str2='    Javascript    ';
console.log(str2);
console.log(str2.trim());

// Default Array methods in JS
console.log('results of array methods in js');
let arr=['js','java','python','smalltalk'];
let res;
res=arr.toString();
console.log(res, typeof(res));
res=arr.join();
console.log(res);
res=arr.join('_');
console.log(res);
res=arr.pop();
console.log(res,arr);
res=arr.push('C');
console.log(res,arr);
res=arr.shift();
console.log(res,arr);
res=arr.unshift('javascript');
console.log(res,arr);
arr[1]='python';
console.log(arr);
arr[2]='java';
console.log(arr);
arr[arr.length]='R';
console.log(arr);
console.log(arr.length);
res=arr.splice(3,1,'C++','C#');
console.log(res,arr);
console.log(arr.concat(res));
res=arr.slice(3,5);
console.log(res,arr);



