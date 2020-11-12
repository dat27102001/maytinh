function sum(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let sum=num1+num2
    alert("Tong la :" +sum );
}
function sub() {
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let sub=num1-num2;
    alert("Hieu la:" +sub);
}
function multi() {
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let multi=num1*num2;
    alert("Tich la:" +multi);
}
function div() {
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let div=num1/num2;
    alert("Thuong la:" +div);
}
