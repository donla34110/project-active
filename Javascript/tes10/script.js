

// // การแสดงผลออกมาทางหน้าจอ
// console.log('Hello word'); 
// document.getElementById("tage").innerHTML = "Patjanmin Janchot";
// document.write("dinao");

// // สเตจเมนต์   คือการทำงานตามลำดับขั้นตอน ศัพท์ statment in Developer is (value, operatot,exspaaction , Keyword, coment ) 
// /* ตัวแปล เก็บข้อมูล */
// var x = 5;
// var r =4;
// var f=x+r;
// console.log(f);

// // การเชื่ือมต่อ str ตัวแปร

// var firstname ="patjamin"
// var firstname2 ="Janchot"
// var fullname = firstname +"  "+ firstname2; //concatnet คืแการเขื่อมต่อ
// console.log(fullname);

// // ฝฃ oparator
// // fuction มันเป็น สร้าง โปรแกรมย่อยๆ เพื่อไห้มันทำงานในส่วนนั้นนๆๆๆๆๆ 
// // มันเป็น blog ของ โคด ที่ถูกออกแบบมา เพื่อทงานเฉพราะส่่วน นั้นนนน
// function myfuction(value1 , value2){
//     return value1 * value2;
// }
// // การเรัยกใช้ fuction 
// console.log(myfuction(5,5));

// function changBG(){
//     document.body.style.backgroundColor = "red";
// }
// function chef(cele){
//     var tem =cele;
//     var fahr = tem * 9/5 +32;
//     var messege = tem +"is" + fahr
//     console.log(messege);
// }
// chef(34);


// function fToc(farenhai){
//     var don = farenhai;
//     var foctech = (don-32) * 5 / 9;
//     var loh = don +"\xB0F is  "+ foctech + "\xB0C";
//     console.log(loh);
// }
// fToc(100);

// //  เรียงของการใช้ object
// var car = {
//     fod: "res",
//     moterdizwe: "suzuki",
//     real: function(){
//         return this.fod +"  "+ this.moterdizwe;
//         }
// };
// console.log(car.real());
 

// function displaydate(){
//     document.getElementById('DEMO').innerHTML=Date();
// }
// for (var i = 3;
//     i <=10;
//     i++
//     ){
//         console.log(i);
//     }
// var car = ["b1","b2","b3"];
// for (var i =0; i<car.length; i++){
//     console.log([i]);
// }

// var person ={
//     patjamin: "donla",
//     Janthachot: "laaaaa",

// };
// // loop in ผ่่าน poperty
// for (var x in person ){
//     console.log(person[x]);
// }
// console.log(`hello word`);


// // let username;
// //  username=window.prompt('This is a website');
// //  console.log(username);

// document.getElementById("H3").innerHTML = `hi I am a mamy`;
// document.getElementById("P1").textContent = `ejkl;hgbns;jhn`;



document.getElementById("mytext").onclick= function domls(){
    let wowder = document.getElementById("finder").value;
    document.getElementById("H1").textContent = `Helo ${wowder}`
}
var sonla = window.prompt("HOw old are you");
sonla =Number(sonla);
sonla+=1;
console.log(sonla);


const mod  = 3.4343;


document.getElementById("sumid").onclick = function(){
    let gtoif = document.getElementById("myboll").value;
    gtoif= Number(gtoif);
    let conder = 2  * mod * gtoif;
    document.getElementById("Htree").textContent = conder;

}



const dresbtn = document.getElementById("dresbtn");
const resetbtn = document.getElementById("resetbtn");
const incressbtn = document.getElementById("incressbtn");
const contlabel = document.getElementById("contlabel");

let count = 0;
incressbtn.onclick= function(){
    count ++;
    contlabel.innerHTML = count;

}
dresbtn.onclick= function(){
    count --;
    contlabel.innerHTML = count;

}
resetbtn.onclick= function(){
    count =0;
    contlabel.innerHTML = count;

}

// let crodss = Math.floor(Math.random() * (max-min) ) +min ;
// console.log(crodss);



const dron = document.getElementById("dron");
const donla = document.getElementById("donla");
const donla2 = document.getElementById("donla1");
const donla3 = document.getElementById("donla2");
const max = 6;
const min = 1;
let contsnumbar;
let contsnumbar1;
let contsnumbar2;
dron.onclick = function(){
    contsnumbar= Math.floor(Math.random() * max) + min;
    contsnumbar1= Math.floor(Math.random() * max) + min;
    contsnumbar2= Math.floor(Math.random() * max) + min;
    donla.innerHTML= contsnumbar;
    donla2.innerHTML= contsnumbar1;
    donla3.innerHTML= contsnumbar2;

}


var age = 40;


if (age >=78){
    console.log("ok");
}
else{
    console.log("not fale");
}
 




var car = 2;
var bot = true;


if (car >= 20){
    console.log("ok");
    if(bot){
        console.log("no");
    }
    else {
        console.log("not fales")
    }
}
else{
    console.log("kkkkkkkk")
}




var textder = document.getElementById("textder");
var btn = document.getElementById("btn");
var cronn = document.getElementById("cronn");

let  send;

btn.onclick= function(){
    send=textder.value;
    send=Number(send);
    if (send>=100){
        cronn.innerHTML =`คุณมีอายุเกิน 100 ปึ`;
    }
    else if (send <= 100){
        cronn.innerHTML =`คุฯนยังเป้นวัยรุ่น`;
    }
    else if (send >=0){
        cronn.innerHTML= `คุนพึ่งเกิด`;
    }
    else {
        cronn.innerHTML =`คุณเป็นอมตะ`
    }

}










