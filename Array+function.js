
console.log( shoppinglist);

let Marks=[97,87,56,90];
let marks=Marks.toString ();
console.log(marks);
concatination
 let a=[1,2,3,4,5,6];
 let b=[7,8,9,10];
 let number= a.concat(b);
 console.log("new array list:",number); 

//  shift and unshift Array method
let number1=[];
 number1= number.unshift("6");
  console.log( number1);
  
  
let fruits=["apple","banana","mango"]
fruits.unshift("graps");
// console.log(fruits);
fruits.shift();
console.log(fruits);
let y=fruits.slice(0,2);
console.log(y);

create araay:-"Blomberg",Microsoft,"uber","google,"IBM","Netflix"
let arr=[];
arr.push("Blomberg");
arr.push("Microsoft");
arr.push("uber");
arr.push("google");
arr.push("IBM");
arr.push("Netflix");
console.log (arr);
 arr.shift("Blomberg");//Remove first company 
console.log (arr);
let removed = arr.splice(2, 1,"ola"); 

console.log (removed);
console.log (arr);
let  add = arr.splice(6, 0,"Amazon"); 
console.log (arr);

  
// Array problem ----------
 let a =[];
 count = 0;

 for( let i=0; i <= 10; i++)

 {

    a.push(i);  
    console.log( a[i]);
    count++;

 }
 console.log(a);
let sum = 0;
 for( let i = 0; i < a.length; i++)
 {

sum += a[i];

 }
 console.log( " total sum of array ", sum);

let x = [];
let evennumber = [];
let oddnumber = [];
let max = Number.NEGATIVE_INFINITY;
let min= Number.POSITIVE_INFINITY;
let reverse=[];

for (let i = 40; i >= 0; i--) {
  x.push(i);

  if (i % 2 === 0) {
    evennumber.push(i);
  } else {
    oddnumber.push(i);
  }

  if (i > max) {
    max = i;
  }
   if (i < min) {
    min = i;
  }
//  for(let i = x.length - 1; i >= 0; i--)
//   {
//  reverse.push(i);

  }
// }  


console.log("Full Array:", x);
console.log("Even Numbers:", evennumber);
console.log("Odd Numbers:", oddnumber);
console.log("Largest Number of Array is:", max);
console.log("smallest Number of Array is:", min);
console.log("reverse:",reverse );
let numbers =[89,6,45,23,67,30,40];
let target =87;
if(numbers.includes(target)){
  console.log( "the number",target,"is in array");
}
else{

  console.log("the number",target,"is not in array");

if(numbers.indexOf(target) !==  -1)
  {

 console.log( "the number",target,"is in array");
}
else{

   console.log("the number",target,"is not in array");
 }

///Remove Duplicates (Set দিয়ে)
---------------------------------------
 
const arr =[1,1,1,2,2,2,3,3,3,4,5,6];
 const unique = [...new Set(arr)];
 console.log(unique);

const arr =[1,1,1,2,2,2,3,3,3,4,5,6];
const seen={}
 const unique = [];

 for(const x of arr){
if(!seen[x])               // যদি সেই সংখ্যা আগে দেখা না হয়ে থাকে (মানে seen object এ না থাকে),
                                //  তাহলে ভিতরের কোড চলবে।
  {


seen[x]= true;   
unique.push(x);

}


 }
 console.log(unique);


2) Find Second Largest Element
[Duplicate বাদ দিচ্ছেDuplicate বাদ দিচ্ছে
// 
বড় থেকে ছোট করে সাজাচ্ছে

দ্বিতীয় বড় সংখ্যাটা বের করছে]


--------------------------------


 const arr=[ 20,15,15,29,40,30,30,30];
 const unique=[...new Set(arr)];
 unique.sort((a,b)=>b-a); // descending
 const Secondlargest = unique.length >= 2?unique[1]:null;
 console.log(Secondlargest);

--------------------------------

  Rotate an Array by K Steps


-----------------------------------
function rotateRight(arr,k) 
{
const n = arr.length;
if(n===0) return arr;
k=k%n;
if(k===0) return arr.slice();
return arr.slice(n-k).concat(arr.slice(0,n-k));


}
console.log(rotateRight([1,5,8,9,5,7], 2));
 

function rotateLeft(arr,k) {
  const n = arr.length;
  if(n===0) return arr;
     k=k%n
     if(k===0)  return arr.slice();
    
  return arr.slice(k).concat(arr.slice(0,k));
}
console.log(rotateLeft([1,2,3,4,5,],2));

-------------------------------------


 Merge and Sort Two Array


 
const arr1 = [1,2,3,4,4,4,6,7];
const arr2 = [8,8,8,9,10,11,12,13];
const mergedUniqueSorted= [...new Set([...arr1,...arr2])].sort((a,b)=>(a-b));
console.log(mergedUniqueSorted);

-------------------------------------

 Find Frequency of Each Element
 ------------------------------

const arr = [2,2,2,3,3,3,4,4,5,6,6,7,7,];
const freq = {};
for( const x of arr) 
  {

freq[x]=((freq[x] || 0)+1 );


}
console.log(freq);
const arr = [2,2,2,3,3,4,5,5,5,6,6,6,7,8];
const freqMap = new  Map ();
for( const x of arr) 
  {
freqMap.set(x,(freqMap.get(x)|| 0)+1);

}
console.log(Object.fromEntries(freqMap));
=========================================================

“Find Pair with Given Sum
--------------------------
const arr =[ 1,2,3,4,5,6,7];
const target = 9 ;
for( let i=0;  i<arr.length; i++)
  {
for( let j=i+1; j<arr.length; j++){

  if(( arr[i]+arr[j])===target)
    {
console.log( arr[i],"+",arr[j],"=",target);

  }
}    Another solution ----=====
------------------------------------------



function pairWithSum(arr,target){

const seen = new  Map();
for(let i=0; i< arr.length;i++)
{

const need = target-arr[i];
if(seen.got(need))
  {
 return [need,arr[i]];


}
seen.set(arr[i],i);
}
return null;

}
console.log(pairWithSum([ 1,2,3,4,5,6,7],9));
another way ------------------------------------

const arr = [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7];
const unique = [...new Set(arr)];
const target = 9;

function allPairsWithSum(arr, target) {
  arr.sort((a, b) => a - b); 

  let left = 0;
  let right = arr.length - 1;
  const pairs = [];

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      pairs.push([arr[left], arr[right]]); 
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return pairs.length ? pairs : null; 
}

console.log(allPairsWithSum(unique, target));



=========================================

function maxSubarrayKadane(arr) {
  let bestSum = -Infinity, currSum = 0;
  let start = 0, bestL = 0, bestR = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currSum <= 0) { 
      currSum = arr[i];
      start = i;
    } else {
      currSum += arr[i];
    }

    if (currSum > bestSum) {
      bestSum = currSum;
      bestL = start;
      bestR = i;
    }
  }
  return { maxSum: bestSum, subarray: arr.slice(bestL, bestR + 1) };
}

console.log(maxSubarrayKadane([-2,1,-3,4,-1,2,1,-5,4]));
// { maxSum: 6, subarray: [4,-1,2,1] }
=============================================
Move Zeros to the End (স্টেবল অর্ডার)
---------------------------------
function moveZerosEnd(arr) {
  let write = 0; // non-zero 
  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== 0) {
      [arr[write], arr[read]] = [arr[read], arr[write]];
      write++;
    }
  }
  return arr;
}

console.log(moveZerosEnd([0,1,0,3,12])); // [1,3,12,0,0]
===========================================================another way====

function moveZerosEnd2(arr) {
  const nonZero = arr.filter(x => x !== 0);
  const zeros = Array(arr.length - nonZero.length).fill(0);
  return nonZero.concat(zeros);
}

console.log(moveZerosEnd2([0,1,0,3,12])); // [1,3,12,0,0]
===============================================================
Flatten Nested Array------------------------
---------------------
const nested = [1, [2, [3, 4]], 5];
const flat1 = nested.flat(Infinity);
console.log(flat1); // [1,2,3,4,5]
==========================================another way--------
function flatten(arr) {
  const out = [];
  for (const x of arr) {
    if (Array.isArray(x)) out.push(...flatten(x));
    else out.push(x);
  }
  return out;
}

console.log(flatten([1,[2,[3,4]],5])); // [1,2,3,4,5]
========================================================
Find Missing Number----------------
---------------------------
function findMissingSum(arr, n) {
  const total = n * (n + 1) / 2;
  const sum = arr.reduce((a,b)=>a+b, 0);
  return total - sum;
}

console.log(findMissingSum([1,2,4,5], 5)); // 3
================================================another way----------
function findMissingXOR(arr, n) {
  let x = 0;         // 1..n
  for (let i = 1; i <= n; i++) x ^= i;
  let y = 0;         // array elements
  for (const v of arr) y ^= v;
  return x ^ y;
}

console.log(findMissingXOR([1,2,4,5], 5)); // 3
======================================================
