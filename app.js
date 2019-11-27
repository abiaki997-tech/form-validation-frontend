document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('password').addEventListener('blur',validatePassword);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(){
  const name = document.getElementById('name');
  const re_x= /^[a-zA-Z](3,20)$/;

  if(!re_x.test(name.value)){
     name.classList.add('is-invalid')
  }
  else{
    name.classList.remove('is-invalid')
  }
}
function validateEmail(){
  const email=document.getElementById('email')
  const re_x=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if(!re_x.test(email.value)){
    email.classList.add('is-invalid')
 }
 else{
   email.classList.remove('is-invalid')
 }
}
function validateZip(){
  const zip=document.getElementById('zip')
  const re_x=/^[0-9]{3}(-[0-9]{3})$/

  if(!re_x.test(zip.value)){
    zip.classList.add('is-invalid')
 }
 else{
   zip.classList.remove('is-invalid')
 }
}
function validatePhone(){
  const phone=document.getElementById('phone')
  const re_x=/^\(?\d{3}\)?[.-]?\d{3}[-.]?\d{4}$/

  if(!re_x.test(phone.value)){
    phone.classList.add('is-invalid')
 }
 else{
   phone.classList.remove('is-invalid')
 }
}
function validatePassword(){
  const password=document.getElementById('password')
  const re_x=/^([a-zA-Z0-9\!\@\#\*\.]){8,25}$/

  if(!re_x.test(password.value)){
    password.classList.add('is-invalid')
 }
 else{
    password.classList.remove('is-invalid')
 }
}