//------------ Get Elements as HTMLElements-----------------------
//import { deleteSpecialtyById } from './Hospital.js';
//import { currentSpecialty } from './Hospital.js';
//import { createSpecialtyButton } from './Hospital.js';
var messageElem11 = document.getElementById("message1");
var messageElem12 = document.getElementById("message2");
var messageElem13 = document.getElementById("message3");
var messageElem14 = document.getElementById("message4");
var messageElem15 = document.getElementById("message5");
var messageElem16 = document.getElementById("message6");
var messageElem17 = document.getElementById("message7");
var messageElem18 = document.getElementById("message8");
var messageElem19 = document.getElementById("message9");
var messageElem20 = document.getElementById("message10");
var specialtyTitle = document.getElementById("specialtyTitle");
var specialtyBox = document.getElementById("sp");
var input3 = document.createElement('input');
input3.classList.add('form-control');
input3.setAttribute('type', 'text');
input3.setAttribute('name', 'specialtyName');
input3.setAttribute('placeholder', 'Specialty Name');
input3.setAttribute('aria-label', 'Specialty Name');
// Ready----------------
//------------ Button Functions-----------------------
function editSpecialty() {
    hideAllMessages();
    //  createSpecialtyButton()
}
function deleteThisSpecialty() {
    //deleteSpecialtyById(currentSpecialty)      
}
function showRegistries() {
}
function addRegistry() {
}
function deleteRegistry() {
}
function previousRegistryPage() {
}
function nextRegistryPage() {
}
//------------ Button Functions End-----------------------
//------------ Service -----------------------
function hideAllMessages() {
    messageElem11.style.visibility = "hidden";
    messageElem12.style.visibility = "hidden";
    messageElem13.style.visibility = "hidden";
    messageElem14.style.visibility = "hidden";
    messageElem15.style.visibility = "hidden";
    messageElem16.style.visibility = "hidden";
    messageElem17.style.visibility = "hidden";
    messageElem18.style.visibility = "hidden";
    messageElem19.style.visibility = "hidden";
    messageElem20.style.visibility = "hidden";
}
function updateElementContentSpecialty(Elem, newContent) {
    Elem.textContent = newContent;
}
specialtyTitle.textContent = "casikhbacs";
