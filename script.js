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
/* function button_10() {
    A = getValue("display");
    document.getElementById("display").value = ('.'); 
    
} */
function percent() {
    A = getValue("display");
    document.getElementById("display").value = 0; 
    action = "%"; 
}

function factorial(n){
    
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}
function factorials() {
    A = getValue("display");
    if(A < 0){
        alert('Значение факториала должно быть больше 0');
    } else{
    document.getElementById("display").value = factorial(A); 
    }
    
}
/* console.log(factorial(5)); */
    
    
 

function stepen() {
    A = getValue("display");
    document.getElementById("display").value = Math.pow(A, 2); 
}

function sinus() {
    A = getValue("display");
    let rounded = parseFloat(Math.sin(A).toFixed(9)); 
    document.getElementById("display").value = rounded;
    
}
function cosinus() {
    A = getValue("display");
    let rounded = parseFloat(Math.cos(A).toFixed(9)); 
    document.getElementById("display").value = rounded;
    
}
function tangens() {
    A = getValue("display");
    let rounded = parseFloat(Math.tan(A).toFixed(9)); 
    document.getElementById("display").value = rounded;
    
}
function catangens() {
    A = getValue("display");
    document.getElementById("display").value = 1/Math.tan(A); 
}

function getTanDeg(deg){
    var rad = deg * Math.PI/180;
    return rad;
}
function grad() {
    alert(' Далее необходимо нажать функцию')
    A = getValue("display");
    document.getElementById("display").value = getTanDeg(A); 
}
    

function equil() {
    
    B = getValue("display");
    
    switch(action) {
        case "+":
            
            function epsEqu(x, y) {
                return Math.abs(x - y) < Number.EPSILON * Math.max(Math.abs(x), Math.abs(y));
            }
            
            C = A + B;
            epsEqu(A + B, C);
            console.log(epsEqu(A + B, C));
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
    let rounded = parseFloat(C.toFixed(9));
    document.getElementById("display").value = rounded;
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
/*     document.getElementById("button_10").addEventListener("click", button_10);
 */
    document.getElementById("factorial").addEventListener("click", factorials);
    document.getElementById("stepen").addEventListener("click", stepen);

    document.getElementById("grad").addEventListener("click", grad);
    document.getElementById("sinus").addEventListener("click", sinus);
    document.getElementById("cosinus").addEventListener("click", cosinus);
    document.getElementById("tangens").addEventListener("click", tangens);
    document.getElementById("catangens").addEventListener("click", catangens);
}

/* 
var inputData = document.querySelector('input[type="text"]');
var menuList = document.getElementById('list');
var saveBtn = document.getElementById('save');
function loadToDo(){
    if(localStorage.getItem('todoApplication')){
        menuList.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};

inputData.addEventListener('keypress', function(keyPressed){
     
    if(keyPressed.which === 13){

        var newLi = document.createElement('li');
        var newTodo = this.value;
        this.value = '';
        menuList.appendChild(newLi).append(newSpan, newTodo);

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', menuList.innerHTML);
});

loadToDo() */