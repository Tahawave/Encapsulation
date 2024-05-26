var password = "He is all powerful";
function passcheck() {
if (document.getElementById('He is all powerful').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('He is all powerful').value == password) {
alert('Correct, Encapsulation 2 of 3 beginning');
}
}
