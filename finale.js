var password = "Victory is ours";
function passcheck() {
if (document.getElementById('Victory is ours').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('Victory is ours').value == password) {
alert('Correct, Encapsulation 3 of 3 completed.');
}
}
