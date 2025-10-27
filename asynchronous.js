console.log("start");
setTimeout(()=>{

 console.log("watting done");
},2000);
console.log("End");

// promise 

const task = new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    console.log("task done");

resolve({
   status : "success",
})

 },2000)

});
task.then( result=>console.log(result));
console.log( "keep working.....");


// Another way -----
// ==============================
const task = new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    console.log("task done");

resolve({
   status : "success",
})
 reject({
 error:"Forcefully Stopped",

 })

 },2000)

});
task.then(function(response){
console.log( response);
})
 task.catch(function(error){


    console.log("incide catch")
    console.log(error);
 }
)
// 


const task = new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    console.log("task done");

resolve({
   status : "success",
})
 reject({
 error:"Forcefully Stopped",

 })

 },2000)

});
task.then(function(response){
  console.log("incide  take")
console.log( response);
})
 task.catch(function(error){


    console.log("incide catch")
    console.log(error);
 }
)
 .finally(function (){
console.log("Ah finally")

 })
 console.log("printing after ");


//  set interval 

 var i=0;
  const intervalID = setInterval ( function () {
   i=i+1000;
 console.log(` After ${i}ms`);

  },1000);
  console.log(intervalID);
//    dependence function 

 function def(func3){

    func3();
 } function xyz( func2){

     def(func2);

 }
 function abc ( func1){
    xyz(func1)
 }
 abc(function(){
console.log("callback  function");
 })

//  async/awaits --------
const task = new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    console.log("task done");

resolve({
   status : "success",
})
//  reject({
//  error:"Forcefully Stopped",

//  })

 },2000)

})
 async function giveMeSyncFeelings () 
 {
   const response = await task ;
   console.log("inside then");
   console.log(response);
 }