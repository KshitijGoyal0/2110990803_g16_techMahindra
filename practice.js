function two(){
    return 2;
}
console.log(1);
console.log(two());
setInterval(() => {
    console.log(3)
},3000)
console.log(four());
setInterval(()=>{
    console.log(3)
},5000)
console.log(6);






for(var i=1;i<=6;i++){
    setTimeout(() => {
        console.log(i);
    },1000);
}



function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();









var count=0;

function increment(){
    count++;
    return count;
}
console.log(increment());
console.log(increment());
console.log(increment());







function counter(){
    var count = 0;
    this.increment=function(){
        count++;
        console.log(count);
    }
    this.decrement=function(){
        count--;
        console.log(count);
    }
}
var counter1=counter();
counter1();
counter1();
counter1();
counter1();














console.log(1);

function sumOfTwo(a, b) {
    return a + b;
}

console.log(sumOfTwo(10, 5));

setTimeout(() => console.log(4), 2000);

var start = 1;
var end = 1000000000000000000000;
while (start < end) {
    start++;
}
console.log("End");

setInterval(() => console.log(9), 4000);






function xyz(){
    console.log(1);
}
var abc = function cdf(){
    console.log(2);
}