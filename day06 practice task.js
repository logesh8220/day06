

//fixed code

aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);



//fixed code

function add(n)
{
let sum =0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add([1,2,3]));


//fixed code
(function() {
const arr = [9,8,5,6,4,3,2,1];
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
})();


//fixed code
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i]);
 }
}
ano(arr);


const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i!==0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);


//fixed code
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const result = num.reduce(sum)
console.log(result);




var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(3, 11);

 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();


//fixed code
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();


//fixed code
(function(str){
    str1 = str.split("").reverse().join(" ");
    console.log(str1); 
   })("abcd")

//fixed code
   var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) != arr) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])


//fixed code

   var as=[12,34,5,6,2,56,6,2,1];
    let odsss = []
    for(let key of as){
        if(key%2!==0){
        odsss.push(key)
        }
    }
    var s=odsss.reduce(function(a,c){
     return a + c
    });
    console.log(s)
//fixed code

    aa = data=>{
        var a=data;
       for(i=0;i<a.length-1;i++){
        var l="";
        var s=a[i+1]
        var b=a[i]
        l+=s
        l+=b
        i=i+1
       }
       if((a.length%2)!=0){
        l+=a[a.length-1]
       }
       console.log(l);
       }
       aa("1234");

//fixed code
       var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//fixed code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 !== 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);