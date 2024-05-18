var password = "13006530";
function passcheck() {
if (document.getElementById('manipulation').value != password) {
alert('Wrong Password, Try Again');
return false;
}
if (document.getElementById('manipulation').value == password) {
alert('Correct, But you will need to encapsulate 2 more times to finally encapsulate 532.');
}
}
