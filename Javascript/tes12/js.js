


var date = ["2023-1-3","2034-3-02"];

var confrom = date.map(hot);

function hot(elememt){
    var don = elememt.split("-");
    return `${don[0]}/${don[1]}/${don[2]}`;
}
console.log(confrom);


const price =[1,2,3,4,5];


const total = price.reduce(sum);

function sum(accmit,elememt1){
    return Math.min(accmit,elememt1);
}

console.log(total);


setTimeout(function(){
    console.log("hello");
},2000);



setTimeout(function(){
    console.log(`donmla`);

},2000)



setTimeout(function(){
    console.log(`olefr`)
},2000);

const setfer = [2,6,76,7,8,8];
const Dos = setfer.map(function donlaaa(roeter){
    return Math.pow(roeter,3);
})
console.log(Dos);


const Fot =setfer.filter(function gop(ffg){
    return ffg % 2 ===0;

})
console.log(Fot);


const Hot= setfer.reduce(function joi(lop,pol){
    return lop - pol;
})
console.log(Hot);


const hello = (name,age) => {console.log(`wow ${name}`)
                            console.log(`name ${age} yeer ol`)};

hello("bro",35);

const number = [1,2,3,4,5];

const squrer = number.map((foty) => Math.pow(foty,3));
console.log(squrer);




// What is THIS-------------------------------------------------------------------------------------
const car={
    Honda: "web", Ezusu: "Demat", yammaha: "websiut",
    gotre: function(){console.log(`cae a ${this.Honda}`)}
}
console.log(car.Honda);





// Constructors ------------------------------------------------------------------------
function foj(make,model,yeare,color){
    this.make = make,
     this.model = model, 
     this.yeare = yeare,
      this.color= color
}
const rop = new foj("food","var",2034,"Blue");

console.log(rop.make);


class Product{
constructor(name,price){
        this.com = name;//shif
        this.vot= price;//10.00
  }
  Display(){
    console.log(`Product ${this.com}`);
    console.log(`Product ${this.vot}`);
  }
}
const roeter  = new Product("Shift",10.00);
roeter.Display();

class problem{
   constructor (username,lassname){
    this.tomme = username;
    this.midnee = lassname;
   }
   gidhub(){
    console.log(`username ${this.tomme}`);
    console.log(`lassname ${this.midnee.toFixed(2)}`);
    };
    calcilat(){
        return this.tomme + (this.midnee * saltax);
    };
}
const saltax= 0.05;
const sel1 = new problem("Shif",19.99);
sel1.gidhub();
const userlass = sel1.calcilat(saltax);
console.log(`Username (tax-with) ${userlass.toFixed(2)}`);


// STATIC----------------------------------------------------------------------------------

class MyClass {
    static myStaticProperty = 3.14;
    static getparas (radiod){
        return this.myStaticProperty * radiod * radiod;
    }

}
console.log(MyClass.myStaticProperty); // แสดงค่าของคุณสมบัติสถิตโดยตรง
console.log(MyClass.getparas(10))

class User{
    static usercout  = 0;
    constructor(username){
        this.name = username;
        User.usercout++;
    }

    static display(){
        console.log(`Therer are ${User.usercout}`)
    }

    sayHello(){
        console.log(`Heloo${this.name}`)
    }

}

const user1 = new User("Patjaimin");
const user2 = new User("Patjaimin");
const user3 = new User("Patjaimin");
const user4 = new User("Patjaimin");
console.log(User.usercout);
console.log(user1.name);
console.log(user2.name);
console.log(user3.name);
console.log(user4.name);

user1.sayHello();

User.display();


// inheritance-----------มันคือการไห้ class ไหม สื่บทอดคุณสมบัติจาก class แม่---ทำไห้ code กลับ มาทำซ้ำได----------------------------------------------------------------------------
class Anime{
    actice = true;
    eat(){
        console.log(`This is ${this.name} is eating`);
    }
    sleep(){
        console.log(`This is ${this.name} is sleeping`);
    }
}
class Rabits extends Anime{
    name= "rabite";

    run(){
        console.log(`this ${this.name} is a run`)
    }
}
class Fsih extends Anime{
    name= "fish";
    run(){
        console.log(`this ${this.name} is a run`)
    }
}
class Hawk extends Anime{
    name= "hawk";
}
const rabite = new Rabits();
const fish =  new Fsih();
const hawk  = new Hawk();

fish.eat();
fish.sleep()
fish.run();
console.log(fish.actice);



// คลาสแม่
function Animal(name) {
    this.name = name;
}

// เพิ่มเมทอดให้กับคลาสแม่ผ่าน prototype
Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// คลาสลูกที่สืบทอดจากคลาสแม่
function Dog(name, breed) {
    Animal.call(this, name); // เรียก constructor ของคลาสแม่
    this.breed = breed;
}

// สร้างการสืบทอดจากคลาสแม่โดยใช้ prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // กำหนด constructor ของคลาสลูก

// เพิ่มเมทอดใหม่สำหรับคลาสลูก
Dog.prototype.bark = function() {
    console.log('Woof woof!');
};

// สร้างอ็อบเจกต์จากคลาสลูก
const myDog = new Dog('Max', 'Golden Retriever');
myDog.sayHello(); // แสดง Hello, my name is Max
myDog.bark(); // แสดง Woof woof!



class Setter{
    constructor(wigth, heigth){

        this.wigth = wigth;
        this.heigth = heigth;

    }

    set wigth(newwigth){
        if(newwigth > 0){
            this._wigth = newwigth;
        }
        else 
        {
            console.log("Wigth muct be a positve number");
        }
    }

    set higth(hewwigth){
        if(hewwigth > 0){
            this._heigth = hewwigth;
        }
        else 
        {
            console.log("Wigth muct be a positve number");
        }
    }

    get witgh1(){
        return this._wigth;
    }
    get heigth1(){
        return this._heigth;

    }
    get are(){
        return this._wigth * this._wigth;
    }
}


const recat = new Setter(4,4);
console.log(recat.are);
console.log(recat.wigth);
console.log(recat.heigth);

class Objecttive{
    constructor(firename,lasname,age){
        this.firename= firename;
        this.lasname = lasname;
        this.age=age
    }
    set firename(newfirt){
        if(newfirt === "string" && newfirt.length > 0){
            this._firename = newfirt;
        }
        else {
            console.error("Lasrt name must be a non-emty");
        }
    }
    set lasname(newlass){
        if(newlass === "string" && newlass.length > 0){
            this._lasname = newlass;
        }
        else {
            console.error("Lasrt name must be a non-emty");
        }
    }
    set age(newage){
        if(typeof newage === "number" && newage.length >=0){
            this._age = newage;
        }else{
            console.error("Age must be a noo-nagtive number");
        }
        
    }

    get firename(){
        return this._firename;

    }
    get lasname(){
        return this._lasname;
    }
    get flullname(){
        return this._firename +" "+ this.lasname;
    }
    get age(){
        return this._age;
    }

}

const perzon = new Objecttive("name","aptjkamin",8);
console.log(perzon.lasname);
console.log(perzon.firename);
console.log(perzon.flullname);
console.log(perzon.age);

const color =["res","greem","Blue","White"];

const [frirecolor,twocolor,...treecolor] = color;

console.log(frirecolor);


function Dispaw({frietname,lassname,age,job="drgerg"}){
    console.log(`name: ${frietname}`);
    console.log(`name: ${lassname}`);
    console.log(`name: ${age}`);
    console.log(`name: ${job}`);
}
const person={
    frietname: "patjamiu",
    lassname: "JanthaCoht",
    age: 19,
    job: "programmer",   
}
const {frietname,lassname,age,job} = person;
Dispaw(person);
console.log(job);


const problem  = {
    fritname: "patjamin",
    lassname: "Janthavghor",
    istabtL: true,
    hobile: ["swiminm","coking"],
    addess: {
        ban: "Noonkonn",
        age: 266,
        procent: "pibooobn",
    }
}
for(property in problem.addess){
    console.log(problem.addess[property]);
}


class Person {
    constructor(name,age,...addess) {
    this.name=  name;
    this.age = age;
    this.addess =  new Addess(...addess);
    }
}
class Addess{
    constructor(stress,city,county){
    this.stress = stress;
    this.city = city;
    this.county = county;

    }
}

const person1 = new Person("supperrr",30,"124 Cout St","Bikini Bot","rgkomdorik");


console.log(person1.name);

const array = [{name:"Patjamin",color:"red",caleris:3},
              {name:"Dpml;a",color:"red",caleris:2}, 
              {name:"fghmfg",color:"red",caleris:1}];
const Evho = array.sort((f, g) => f.name.localeCompare(g.name));


console.log(Evho);
// const Evho = array.reduce((re,nomal) => nomal.caleris > re.caleris ? nomal : re );
       //    array.forEach( sdrgg => console.log(array.color));
// const Evho =array.filter(fox => fox.name  ==="Patjamin");
       // const tone = array.map(jok => jok.name);


const card =["A",1,2,3,4,5,"H","D","E"];

const Shift=shuffle(card);


function shuffle(bon){
       for(let i = bon.length-1; i > 0; i-- ){

              const random = Math.floor(Math.random() * (i+1));

              [bon[i],bon[random]]= [bon[random],bon[i]];
       }
       return bon;
}

function creat(){
       let cout = 0;
       function imcument(){
              cout++;
              console.log(`Ccout incumenrt ${cout}`);
       }
       return{imcument};
}
const couter = creat();

couter.imcument();
couter.imcument();
couter.imcument();
couter.imcument();


function got(){
       let con = 0;
       function there(ponit){
              con +=ponit;
              console.log(`+ ${ponit}`);
       }
       function tree(ponit){
              con -=ponit;
              console.log(`-${ponit}`);
       }
     
       return {there, tree,};
}
const  trem = got();
trem.there(3);
trem.tree(9);
let timeoutid;
function time(){
       timeoutid=setTimeout(() => window.alert("Hello"),3000);
       console.log("STARTED")
}
function clear(){
       clearTimeout(timeoutid);
       console.log("CLEARTIME")

}
