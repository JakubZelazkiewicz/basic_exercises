function showAllNumbers() {
var value1 = document.getElementById("input1").value;
var value2 = document.getElementById("input2").value;
var result ="";
if(value2>=value1){
for(i=value1; i<=value2; i++){
result = result + i + " ";
}
}
else if (value2<value1){
result = 'SORRY BUT  ' + value2 +'<' + value1;
}
document.getElementById("answer").innerHTML = result;
}