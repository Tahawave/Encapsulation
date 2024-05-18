var password = "13006530";
function passcheck() {
if (document.getElementById('manipulation').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('manipulation').value == password) {
alert('Correct, decapsulation process beginning');
}
}
