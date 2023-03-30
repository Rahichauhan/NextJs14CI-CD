console.log("Rahi");
    // console.warn("!!!!");
    // console.error("errorrrrr");
    // console.clear();
    // console.assert(4==(6-8);)
//javascript variables
var number=31;
var nuber2=75;

console.log(number+nuber2);
var arr=[1,2,3,4,5];
console.log(arr);
/*There are two types of DataTypes in JS
1)primitive-undefinied,null,number,string,boolean,symbol
2)Reference-Arrays,objects
*/
/*Arithematic operators
Assignment operators
Comparison operators
Logical operators
*/
console.log(true&&true);
console.log(true&&false);

console.log(false&&true);

console.log(false&&false);
//Functions in JS
function avg(a,b)
{
    c=(a+b)/2;
    return c;
}
c1=avg(2,3);
c2=avg(4,6);
console.log(c1);
console.log(c2);
//Conditionals in JS
var age=34;
if(age>8)
{
    console.log("yo are not a kid");
}
else{
    console.log("you are a kid");



}
//forEach
var arr=[1,3,6,8,9,];
arr.forEach(function(element){
    
       console.log(element); 
    
})
//let can used in place of var
//let has a scope inside the function only
let j=0;
const ac=0;
let A=["arahi" ,"disha","yuu",24];
console.log(A.length);
A.push("sangu");
console.log(A);
// A.pop("disha");
// console.log(A);
A.shift()
console.log(A);
A.unshift("disha");
console.log(A);
A.sort()
console.log(A);
A.toString()
console.log(A);
//String methods in JS
//IndexOf gives only the index of first word but not all the index of same words in the string.
let Rahi="rahi is a good girl";
console.log(Rahi.indexOf("good"));

//replace method replaces only the first word
 d=Rahi.replace("is","what");
console.log(d,Rahi);
let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());

// console.log(myDate.getDay());console.log(myDate.getMinutes());
//DOM manipulation
let ele=document.getElementById('click');
console.log(ele);
let elem=document.getElementsByClassName('container');
console.log(elem)
//elem[0].style.background='yellow';
elem[0].classList.add("bgprimary");
elem[0].classList.add("text");
//HTML aur text ke andar ka sab kuch print krne ke liye.
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elem[0].innerHTML);
console.log(elem[0].innerText);
tn=document.getElementsByTagName('div');
console.log(tn);
createelement=document.createElement('p');
createelement.innerHTML="This is a created prara"
tn[0].appendChild(createelement);
createelement2=document.createElement('b');
createelement2.innerHTML="This is a created bold"
tn[0].replaceChild(createelement2,createelement);

//Selecting using query
sel=document.querySelectorAll('.container')
console.log(sel);

//Events in js
function clicked()
{
   console.log("The button is clicked");
}
// container.addEventListener('click',function()
// {
//     console.log("Clicked on container");
// })
// container.addEventListener('mouseover',function()
// {
//     console.log("mouse on container");
// })
// container.addEventListener('mouseout',function()
// {
//     console.log("mouse out of container");
// })
// container.addEventListener('mouseup',function()
// {
//     console.log("mouse on container");
// })
// container.addEventListener('mousedown',function()
// {
//     console.log("mouse on container");
// })
//Arrow

function sum(a, b)
{
    return a+b;
}
//or
 sum=(a,b)=>{
   return a+b;
 }


//setTimeout and setInterval
logkaro=()=>{
    document.querySelectorAll('.container')[0].innerHTML="<b> set interval fired </b>"
    console.log("I am your log");
}
setTimeout(logkaro,2000);
//repeatedly krn hai to setInterval
setInterval(logkaro,2000);
//setInterval ko rokne ke liye clearInterval/clearTimeout use hoga
//clearInterval(clr);

//JS localstorage
//localStorage.setItem('name','harry');
//localstorage.getItem('name');
//localstorage.removeItem('name');
//localstorage.clear();


//JSON-jS object notation 
//used for data exchange
//valid JSON has only double quotes
obj={name:"Rahi",length:1}
js=JSON.stringify(obj);
console.log( typeof js);
parsed=JSON.parse({"name":"harry", "length" :1,"a":{"this":"tha\"t"}})
console.log(parsed);

//Template literals-Bactics 









