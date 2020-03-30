// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long
//    email format is correct
//    name has 0 or 2 whitespaces benween words
//    name length is 1 or more chars
//    phone length is 12 or more digits
//    phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion
//    message is 10 or more characters.
//    message must not iclude bad language: ugly, dumm, stupid, pig, ignorant
// 2. Validate each input on the fly using onchange event
// 3. Define re-usable validators: length, format,  

const emailFormatReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const emailMaxLength = 50;
const emailMinLength = 5;

const messageMinLength = 10;
const messageFormatReg = /(ugly)|(pig)|(dumm)|(stupid)|(ignorant)/;

const phoneMinLength = 12;
const phoneFormatReg = /^[+0]\d{3}\(?\d{2}[\s)]?([\s-]?\d{3}){2}[\s-]?\d{2}/;

const nameMinLength = 1;
const nameFormatReg = /(\S\s\S)|(\s{3,})/;

let form = document.getElementById('form');
form.addEventListener('change', validateMe(form));

function validateMe(event){
  var res = true;

  event.preventDefault();

  const emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul'); 
  emailErrors.setAttribute("role", "alert");

  if(emailNode.value.length < emailMinLength){
    let li = document.createElement('li'); 
    li.innerText = 'Email is too short'; 
    emailErrors.appendChild(li);
  }

  if (!emailNode.value.match(emailFormatReg)){
    let li = document.createElement('li');
    li.innerText = 'Email format is incorrect';
    emailErrors.appendChild(li);
  }

  if (emailNode.value.length > emailMaxLength){
    let li = document.createElement('li');
    li.innerText = 'Email is too long';
    emailErrors.appendChild(li);
  }

  if(emailErrors.childElementCount > 0){
    emailErrorNode.appendChild(emailErrors);
    res = false;
  }

  const phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block');
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul'); 
  phoneErrors.setAttribute("role", "alert");

  if(phoneNode.value.length < phoneMinLength){
    let li = document.createElement('li'); 
    li.innerText = 'Phone is too short'; 
    phoneErrors.appendChild(li);
  }

  if(!phoneNode.value.match(phoneFormatReg)){
    let li = document.createElement('li');
    li.innerText = 'Phone format is incorrect';
    phoneErrors.appendChild(li);
  }

  if(phoneErrors.childElementCount > 0){
    phoneErrorNode.appendChild(phoneErrors);
    res = false;
  }

  const messageNode = event.target.elements['message'];
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block');
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul'); 
  messageErrors.setAttribute("role", "alert");

  if(messageNode.value.length < messageMinLength){
    let li = document.createElement('li'); 
    li.innerText = 'message is too short'; 
    messageErrors.appendChild(li);
  }

  if(messageNode.value.match(messageFormatReg)){
    let li = document.createElement('li');
    li.innerText = 'message format is incorrect';
    messageErrors.appendChild(li);
  }

  if(messageErrors.childElementCount > 0){
    messageErrorNode.appendChild(messageErrors);
    res = false;
  }

  const nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul'); 
  nameErrors.setAttribute("role", "alert");

  if(nameNode.value.length < nameMinLength){
    let li = document.createElement('li'); 
    li.innerText = 'Name is too short'; 
    nameErrors.appendChild(li);
  }

  if(nameNode.value.match(nameFormatReg)){
    let li = document.createElement('li');
    li.innerText = 'Name format is incorrect';
    nameErrors.appendChild(li);
  }

  if(nameErrors.childElementCount > 0){
    nameErrorNode.appendChild(nameErrors);
    res = false;
  }

  return res;
}