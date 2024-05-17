import {PI,textArret,textadd,textio} from './math.js';



console.log(PI);

const comunuty = textArret(10);

console.log(comunuty.toFixed(2))


function func1(calkblak){
    setTimeout(() => {console.log('taks1');calkblak()},3000);
}
function func2(){
    console.log('taks2')
    console.log('taks3')
    console.log('taks4')
}


func1(func2);



// try{
//     const dividend = Number(window.prompt("ENter your number"));
//     const dividend2 = Number(window.prompt("ENter your number"));
//     const send = dividend * dividend2;
//     console.log(send);
//     if(dividend == 0){
//         throw new Error("your zero");
//     }
//     if(isNaN(dividend2) || isNaN(dividend)){
//         throw new Error("no is a number")
//     }

// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("ok");
// }

const username = "";

const test = document.getElementById("username");
test.textContent += username === "" ? 'Grat' : username;


const element = document.getElementById("element");

console.log(element);


const classname = document.getElementsByClassName("friuts");

classname[0].style.backgroundColor= "red";
console.log(classname[0]);

for(let name of classname){
    name.style.backgroundColor="red"
}

Array.from(classname).forEach(classname => {classname.style.backgroundColor="black"});



//ขั้นตอนที่ 1 สร้าง .THE องค์ประกอบ

const new1 = document.createElement("h1")


// ขั้นตอนที่ 2 เพิ่มคุณสมบัติ/คุณสมบัติ
new1.textContent = "I'Like pizza";
new1.id ="myh1";
new1.style.textAlign = "center";
new1.style.color = "tomato";



// ขั้นตอนที่ 3 ผนวกองค์ประกอบเข้ากับ DOM
// document.body.append(new1);
// document.body.prepend(new1);
document.getElementById("box1").append(new1);

// ลบองค์ประกอบ HTML


// function task1(callblack){
//     setTimeout(() => {
//         console.log("tahs1");
//         callblack()
//     },2000);
// }
// function task2(callblack){
//     setTimeout(() => {
//         console.log("tahs2");
//         callblack()
//     },3000);
// }
// function task3(callblack){
//     setTimeout(() => {
//         console.log("tahs3");
//         callblack()
//     },3500);
// }

// task1(()=> {
//     task2(()=>{
//         task3(()=> console.log("ALl task complact"))
//     })
// })


function task1(){
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            const a =true;
            if(a){
                resolve("tahs1");
            }
            else{
                reject("no repleact")
            }
         },2000);
    });
};
function task2(){
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            const b =true;
            if(b){
                resolve("tahs1");
            }
            else{
                reject("no repleact")
            }
            resolve("tahs2");
         },3000);
    });
};
function task3(){
    return new Promise((resolve,reject) => {
         setTimeout(() => {
            const c = false;

            if(c){
                resolve("tahs1");
            }
            else{
                reject("no repleact")
            }

            resolve("tahs3");
         },4000);
    });
};

task1().then(value => {console.log(value);return task2()})
    .then(value => {console.log(value);return task3()})
    .then(value => {console.log(value); console.log("You finidhas all the neet")})
    .catch(error => console.log(error));





// Async/Await = Async  NO reaning







