// function f1() {
//     console.log("function f1");
// }
// f1();

// function avg(...p) {
//     var sum = 0;
//     for (const i of p) {
//         sum = sum + i;

//     }
//     console.log(sum / p.length);

// }

// avg(2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8);

// function login(username, password, succ, rejc) {
//     if (username == "admin" && password == "123") {
//         succ();
//     } else {
//         rejc();
//     }
// }
// login("admin", "123", succ, rejc)
// function succ() {
//     console.log("welcome")
// }
// function rejc() {
//     console.log("loginpage")
// }
// var i1 = 1;
// var t = setInterval(() => {
//     i1++;
//     console.log(i1);
// }, 1000)
// setTimeout(() => {
//     clearInterval(t)
// }, 8001)



class School{
    constructor(name,family,age){
    this.age=age;
    this.name=name;
    this.family=family;
    }
    getname(){
        console.log(this.name)
    }
    getfamily(){
        console.log(this.family)
    }
    getage(){
        console.log(this.age)
    }
}


var q1=new School("shahin","hashemi",26);
q1.getname();
q1.getfamily();
q1.getage();