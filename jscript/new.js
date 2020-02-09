// console.log('salam')
// var name2="shahin"
// console.log(name2)

// // console.log(typeof name3)
// // console.log(name3[1]);
// var listName={
//     name:"shahin",
//     family:"hashemi",
//     job:"student",
//     age:25
// };
// // listName.age.toString();
// var age1=listName.age+"";
// var age2=listName.age.toString();
// console.log(typeof listName.age);
// console.log(typeof age1)
// console.log(typeof age2)
// console.log(age2)
// console.log(listName.family);

var arr3=["shahin","jafar","pooya"]



arr3.forEach(e => {
    console.log(e)
});


for (let i = 0; i < arr3.length; i++) {
    console.log ( arr3[i]);
    
}

for (const i of arr3) {
    console.log ( i);

}


for (const i of arr3) {
    console.log (arr3[i]);

}


var inp1=document.getElementById("mytext").value;
