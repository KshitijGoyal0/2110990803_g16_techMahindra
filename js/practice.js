// function two(){
//     return 2;
// }
// console.log(1);
// console.log(two());
// setInterval(() => {
//     console.log(3)
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3)
// },5000)
// console.log(6);






// for(var i=1;i<=6;i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }



// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();









// var count=0;

// function increment(){
//     count++;
//     return count;
// }
// console.log(increment());
// console.log(increment());
// console.log(increment());







// function counter(){
//     var count = 0;
//     this.increment=function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement=function(){
//         count--;
//         console.log(count);
//     }
// }
// var counter1=counter();
// counter1();
// counter1();
// counter1();
// counter1();











// // console.log(1);
// // console.log(sumOfTwo(10,5));
// // sumOfTwo(a,b){
// //     return a+b;
// // }
// // setTimeout(console(4),2000)
// // var start = 1;
// // var end = 100000000;
// // while(start<end){
// //     start++;
// // }
// // console("End");
// // setInterval(console(9),4000){

// // }





// console.log(1);

// function sumOfTwo(a, b) {
//     return a + b;
// }

// console.log(sumOfTwo(10, 5));

// setTimeout(() => console.log(4), 2000);

// var start = 1;
// var end = 1000000000000000000000;
// while (start < end) {
//     start++;
// }
// console.log("End");

// setInterval(() => console.log(9), 4000);






// // 17/02/25




// function a(){
//     console.log("first");
// }
// function b(a){
//     console.log("second");
// }
// b(a);




// let btn = document.querySelector("button");

// (function() {
//     let eventCount = 0;

//     btn.addEventListener('click', () => {
//         eventCount++;
//         console.log("clicked");
//     });
//     btn.addEventListener('click-2', () => {
//         eventCount++;
//         console.log("clicked");
//     });
// })();


// btn.addEventListener('click', () => {
//     console.log("Event 2: Button Clicked");
// });

// btn.addEventListener('click', () => {
//     console.log("Event 3: Button Clicked");
// });

// btn.addEventListener('click', () => {
//     console.log("Event 4: Button Clicked");
// });

// btn.addEventListener('click', () => {
//     console.log("Event 5: Button Clicked");
// });








// function reachedRestaurant(callback){
//     console.log("Reached Restaurant");
//     setTimeout(callback, 1000);
// }
// function findingTable(callback){
//     console.log("Finding Table");
//     setTimeout(callback, 1000);
// }
// function discoveringMenu(callback){
//     console.log("Discovering Menu");
//     setTimeout(callback, 1000);
// }
// function checkingPrice(callback){
//     console.log("Checking Price");
//     setTimeout(callback, 1000);
// }
// function orderingStarters(callback){
//     console.log("Ordering Starters");
//     setTimeout(callback, 1000);
// }
// function orderingMainCourse(callback){
//     console.log("Ordering Main Course");
//     setTimeout(callback, 1000);
// }
// function orderingDesserts(callback){
//     console.log("Ordering Desserts");
//     setTimeout(callback, 1000);
// }
// function payingBill(callback){
//     console.log("Paying Bill");
//     setTimeout(callback, 1000);
// }
// function eatingSauf(callback){
//     console.log("Eating Sauf");
//     setTimeout(callback, 1000);
// }
// function leavingRestaurant(callback){
//     console.log("Leaving Restaurant");
//     setTimeout(callback, 1000);
// }


// // chaining the callbacks


// reachedRestaurant(function(){
//     findingTable(function(){
//         discoveringMenu(function(){
//             checkingPrice(function(){
//                 orderingStarters(function(){
//                     orderingMainCourse(function(){
//                         orderingDesserts(function(){
//                             payingBill(function(){
//                                 eatingSauf(function(){
//                                     leavingRestaurant(function(){
//                                         console.log("done!");
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });











// function x(){
//     console.log("I am x");
// }
// function y(args){
//     console.log("I am y");
//     args();
// }
// y(x);










// data = [2,4,6,8,10];


// const calculateDoubleData = function(data){
//     const output=[];
//     for(let i=0; i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }
// console.log(calculateDoubleData(data));

// const calculateHalfData = function(data){
//     const output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;   
// }
// console.log(calculateHalfData(data));

// const calculateAddTen = function(data){
//     const output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }
// console.log(calculateAddTen(data));





// const users = [
//     {firstName:"Pratiyush", lastName:"Ray", age:25},
//     {firstName:"Piyush", lastName:"Saini", age:22},
//     {firstName:"Sahil", lastName:"Aggarwal", age:21},
//     {firstName:"Ayush", lastName:"Jawa",age:22},
//     {firstName:"Daksh", lastName:"Singh",age:21},
// ]

// const fullName = users.map((user)=> user.firstName + " " + user.lastName);
// console.log(fullName);











const myPromiseFromNetflix = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Fetched data from Netflix");
    }, 1000);
});

const myPromiseFromTwitter = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Fetched data from Twitter");
    }, 2000);
});

const myPromiseFromGitHub = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Failed to fetch data from GitHub");
    }, 3000);
});

const myPromiseFromHotstar = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Fetched data from Hotstar");
    }, 4000);
});

const dataFromAll = Promise.all([
    myPromiseFromNetflix,
    myPromiseFromTwitter,
    myPromiseFromGitHub,
    myPromiseFromHotstar
]);

dataFromAll
    .then(results => console.log("All data fetched:", results))
    .catch(error => console.log("Error:", error));





    const fromRace = Promise.allSettled([myPromiseFromGitHub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
    console.log(fromRace);

    const fromAny = Promise.any([myPromiseFromGitHub, myPromiseFromHotstar, myPromiseFromNetflix, myPromiseFromTwitter]);
    console.log(fromAny);














    document.getElementById("searchBox").addEventListener("input", debouncingFunction);
    document.getElementById("submitBtn").addEventListener("click", fetchData);
    
    let whichCall = 0;
    let debounceTimer;
    
    function fetchData() {
        console.log("Fetching Data", whichCall++);
    }
    
    function debouncingFunction() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fetchData, 2000);
    }
    