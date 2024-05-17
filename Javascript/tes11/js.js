const mastercard =document.getElementById('mastercard');
const visa =document.getElementById('visa');
const paypal =document.getElementById('paypal');
const mysumit =document.getElementById('mysumit');
const tralell1 =document.getElementById('tralell1');
const tralell2 =document.getElementById('tralell2');

mysumit.onclick= function(){
    if(mastercard.checked){
        tralell1.textContent = `you are subskaibar`;
    }
    else {
        tralell1.textContent= `you are not fale`;
    }
}



var total = 120;
var taol =total >=100 ? 10 : 0;
console.log(`ราคาที่รวมคือ bah ${total-total * (taol/100)}`);



var main = 4;
var koy = main <=5 ? "ok" : "not";
console.log(koy);


var num = 1;


switch(num){
    case 1:
        console.log(`to day manday`);
        break;
    case 2:
        console.log(`to day trucday`);
        break;
    default :
        console.log(`not fale`);
        break;

}
var foot = 100;

switch(foot){
    case 100:
        var tants = "A";
        console.log(tants);
        break;
    case foot <=80:
        var tants = "B";
        console.log(tants);
        break;
    default:
        var tants = "F";
        console.log(tants);
        break;
}


let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);



let loget = false;

while(!loget){
    var username1 = window.prompt(`Enter your name`);
    var password = window.prompt(`Emter your password`);

    if(username1 === "donla" && password === "aaaa"){
        loget = true;
        console.log(`You are sussessfuly`);
    }
    else{
        console.log(`NOt fales`);
    }
}



for(let i =1; i <=10; i++){

    if(i == 8){
        continue;
    }
    else{
        console.log(i);
    }

}



const minnum = 1;
const maxnum =100;
const anwar = Math.floor(Math.random() * (maxnum - minnum +1)) +minnum;
console.log(anwar);

let attmty =0;
let guss;
let running = true;

while(running){
    guss= window.prompt(`ENter your Game   ${minnum} - ${maxnum}`);
    guss = Number(guss);

    if(isNaN(guss)){
        window.alert(`กรุนาป้อนตัวเลข`);
    }
    else if (guss < minnum || guss > maxnum){
        window.alert(`ตูนป้อนเกินตามเงื่อนไข`);
    }
    else{
        attmty++;
        if(guss < anwar){
            window.alert(`น้อยเกินยไป`);
        }
        else if (guss > anwar){
            window.alert(`มากเกินไป`);
        }
        else {
            window.alert(`เลขที่ทายถูกคตือ ${anwar}. ทายไปทั้งหมด ${attmty}`);
            running = false;
        }


    }
}




function mybriday(username, age){
    console.log(`Hi i am a nice ${username} and ${age}`);
}
mybriday("Donla",19);




function donola(x,y){
    return x+y ;
}
console.log(donola(4,5));



function ool(res){
    return res % 2 === 0 ? true : false;

}
console.log(ool(10));


function hot(dent){
    return dent.includes("@") ? true : false;
}
console.log(hot("donla@gmail.com"));
console.log(hot("donlagmail.com"));




const textBox = document.getElementById("textBox");
const textBox2 = document.getElementById("textBox2");
const chackbox1 = document.getElementById("chackbox1");
const chackbox2 = document.getElementById("chackbox2");
const submit = document.getElementById("submit");

let legth;

function click(){
    if(chackbox1.checked){
        legth = Number(textBox.value);
        legth = legth * 9 / 5 + 32;
        submit.textContent= resulth.toFixed(2) + "F";
    }
    else if(chackbox2.checked){
        legth = Number(textBox.value);
        legth = (legth-32) * (5/9);
        submit.textContent= resulth.toFixed(2) + "C";
    }
    else {
        window.alert(`กรุณาป้อนหน่วย`);
    }
}


function convertTemperature() {
    const textBox = document.getElementById("textBox");
    const result = document.getElementById("result");
    const chackbox1 = document.getElementById("chackbox1");
    const chackbox2 = document.getElementById("chackbox2");

    let temperature;

    if (chackbox1.checked) {
        temperature = Number(textBox.value);
        temperature = (temperature * 9 / 5) + 32;
        result.textContent = temperature.toFixed(2) + "°F";
    } else if (chackbox2.checked) {
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * (5 / 9);
        result.textContent = temperature.toFixed(2) + "°C";
    } else {
        window.alert("Please select a unit.");
    }
}


let up = ["apple","banana","oren"];



for(let i =up.length -1; i > 0; i--){
    console.log(up[i]);
}

 let gop= up.indexOf("apple");
console.log(gop);


let number = [1,2,3,4,5];

let maximum = Math.max(...number);
let minmax = Math.min(...number);

console.log(maximum);
console.log(minmax);


let bonder = "Bro code";

let bun = [...bonder];

console.log(bun);

function mydoll(...car){

    console.log(...car);
}

const foot1 = 'Pizza';
const foot2  = 'Hamberger';
const foot3 = 'siagrod';

mydoll(foot1,foot2,foot3);


function attnew(...member){
    for(let members of member){
        var ore = +members
        console.log(ore);

    }
}
const att =attnew(6,1,1,1);
console.log(att);





let fruits = ["Apple", "Banana", "Orange"];
var vonto  =fruits.join("+")
 // รวมสมาชิกของอาร์เรย์ fruits ด้วยตัวแยกเป็นคอมมา (,)
console.log(vonto); // Output: "Apple, Banana, Orange"

function briteday(...dateder){
    return dateder.join(" ");

}

const goabl = briteday("Mr","Pattjamin","JanthaChot");
console.log(goabl);

function onmybad(){
    const gamecenter = document.getElementById("gamecenter").value;
    const Roleresulth = document.getElementById("Roleresulth");
    const Roleimg = document.getElementById("Roleimg");
    const valuse =[];
    const imges =[];

    for(let i= 0; i<gamecenter; i++){
        const value = Math.floor(Math.random()*6)+1;
        valuse.push(value);
        imges.push(`<img src="img-tes/${value}.jpg" alt="Die${value}">`);
    }

    Roleresulth.textContent = `Die : ${valuse.join(",")}`;
    Roleimg.innerHTML = imges.join("");

}

function sum(Datenot,x,y){
    let resulth  = x+y;
    Datenot(resulth);
}

function display(resulth){
    console.log(resulth);
}
function displaypage(resulth){
    document.getElementById("Hm1").textContent = resulth;
}

sum(displaypage,1,2)

  

let Atty =["allw","Yeeloo","Res","Pren"];


Atty.forEach(Conmize);
Atty.forEach(Enterten);

function Enterten(element){
    console.log(element);
}
function doble(element,postision,namew){
    namew[postision] = element * 7;
}
function Conmize(element,postision,array){
    array[postision]= element.charAt(0).toUpperCase() + element.slice(1);
}
function squre(element,index,array){
    array[index] = Math.pow(element,3);
}


let Foyu =[1,2,3,4,5,6];


let rop =Foyu.map(repos);

console.log(rop);
function repos(sender){
    return Math.pow(sender,2);
}


