/* let buttons = document.querySelector('button');
let values = document.querySelector('button').value;

let disp = document.querySekectorAll('#display').value;
 
console.log(disp);
let number = document.querySelectorAll('.numbers button');

for (let i = 0; i < number.length; i++){
    number[i].addEventListener('click',function(e){

    })
}
console.log(number);
*/

 
function getValue(id) {
    var res = document.getElementById(id).value - 0;
    if (!isNaN(res)) 
        return res;
    alert("В элементе " + id + " не численное значение!!!");
}
 
function PutNum(val) {
    document.getElementById("display").value = (document.getElementById("display").value + val)-0;
 
}
 
function plus() {
    A = getValue("display");
    document.getElementById("display").value = 0;
    action = "+";
}
 
function minus() {
    A = getValue("display");
    document.getElementById("display").value = 0;
    action = "-";
}
 
function umnogenie() {
    A = getValue("display");
    document.getElementById("display").value = 0;
    action = "*";
}
 
function divide() {
    A = getValue("display");
    document.getElementById("display").value = 0;
    action = "/";
}
 
function del() {
    document.getElementById("display").value = 0;
}
function calcRoot() {
    A = getValue("display");
    document.getElementById("display").value = Math.sqrt(A);
}
function plus_minus() {
    A = getValue("display");
    document.getElementById("display").value = 0-A;    
}
function percent() {
    A = getValue("display");
    document.getElementById("display").value = 0; 
    action = "%"; 
}
/* function factorial() {
    A = getValue("display");
    function factorials(A) {
        return (A != 1) ? A * factorial(A - 1) : 1;
      }
    A =  factorials(A);
      
    document.getElementById("display").value = A;    
} */

/* function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}
function factorials(A){
    A = getValue("display");
    
    return document.getElementById("display").value = factorial(A);
}
console.log(factorial(A)); */
function stepen() {
    A = getValue("display");
    document.getElementById("display").value = Math.pow(A, 2); 
    
}

function equil() {
    B = getValue("display");
    switch(action) {
        case "+":
            C = A + B;
            break;
        case "-":
            C = A - B;
            break;
        case "*":
            C = A * B;
            break;
        case "%":
            C = A * B/100 ;
            C = A+'% от '+B+' = '+C;
            break;
        case "/":
            if (B == 0) {
                alert("Нельзя делить на ноль!");
            }
            else {
                C = A / B;
            }
            break;
    }
    document.getElementById("display").value = C;
}
 
window.onload = function () {
 
    for (var i = 0; i < 11; i++) {
        (function (val) {
            document.getElementById("button_" + val).onclick = function () {
                PutNum(val);
            }
           
        }) 
        /* if(i = 10){
            i = 0.5;
        } */(i);
    }
    document.getElementById("plus").addEventListener("click", plus);
    document.getElementById("equil").addEventListener("click", equil);
    document.getElementById("minus").addEventListener("click", minus);
    document.getElementById("umnogenie").addEventListener("click", umnogenie);
    document.getElementById("divide").addEventListener("click", divide);
    document.getElementById("del").addEventListener("click", del);
    document.getElementById("rootBtn").addEventListener("click", calcRoot);
    document.getElementById("plus_minus").addEventListener("click", plus_minus);
    document.getElementById("pr").addEventListener("click", percent);
    document.getElementById("factorial").addEventListener("click", factorial);
    document.getElementById("stepen").addEventListener("click", stepen);

}