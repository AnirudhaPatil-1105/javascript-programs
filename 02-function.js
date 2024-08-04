console.log("===== functionn with no arguments and no return value =====");
 function show(){

    console.log("Inside show function");
    }
     show();   // Function  call or invoke

 console.log("===== functionn with arguments and no return value =====");
 function multiply(n1,n2){

    console.log("Given numbers:", n1, n2);
    var result= n1*n2;
    console.log("Multiplication is:", result);
    
    }
     multiply(8,9);
     multiply(90,95);
     multiply(456,9809);
     multiply(50);

console.log("===== functionn with no arguments and return value ====="); 
 function demo(){
       console.log("Inside demo function...  ");
       
      return "Good Morning";    // whenever we write return then the values must be stored in variable. 
     
 }
var result = demo(); 
console.log(result);

function square(num){
console.log("Given number for sqaure is:", num);
var result = num * num;
return result;


}
var returnValue = square(5);
console.log("Square is:", returnValue);

   

