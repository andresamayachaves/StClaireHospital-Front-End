"use strict";
let messageElem1 = document.getElementById("message1");
let messageElem2 = document.getElementById("message2");
let messageElem3 = document.getElementById("message3");
let messageElem4 = document.getElementById("message4");
let messageElem5 = document.getElementById("message5");
let messageElem6 = document.getElementById("message6");
let messageElem7 = document.getElementById("message7");
let messageElem8 = document.getElementById("message8");
let messageElem9 = document.getElementById("message9");
let messageElem10 = document.getElementById("message10");
const spName1 = document.getElementById("sp-1");
const spName2 = document.getElementById("sp-2");
const spName3 = document.getElementById("sp-3");
const spName4 = document.getElementById("sp-4");
const spName5 = document.getElementById("sp-5");
const spName6 = document.getElementById("sp-6");
const ph1 = document.getElementById("sp-1");
const ph2 = document.getElementById("sp-1");
const ph3 = document.getElementById("sp-1");
const ph4 = document.getElementById("sp-1");
const ph5 = document.getElementById("sp-1");
const ph6 = document.getElementById("sp-1");
const input1 = document.createElement('input');
input1.classList.add('form-control');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'specialtyName');
input1.setAttribute('placeholder', 'Specialty Name');
input1.setAttribute('aria-label', 'Specialty Name');
let nextBoxToUse = 1;
function createSpecialtyButton() {
    updateElementContent(messageElem1, "Please provide the info of the specialty to add.");
}
function createSpecialty() {
    updateElementContent(messageElem1, "ToDo, connect to Backend via DTO");
    let newRegistry = initNewRegistry();
    //let newSpecialtyX:specialtyInterface = {
    //specialtyName: readInput1().value,
    //physician:readInput2().value,
    //patientRegistries: [newRegistry]
    //}  
    //newSpecialtyToBack(newSpecialtyX)
    nextBoxToUse += 1;
}
function newSpecialtyToBack(specialtyToSend) {
    updateElementContent(messageElem2, "Succesfully sent to Backend");
    updateElementContent(messageElem3, "ToDo, connect to Backend via DTO");
    switch (nextBoxToUse) {
        case 1: {
            updateBox(spName1, ph1, specialtyToSend);
            break;
        }
        case 2: {
            updateBox(spName2, ph2, specialtyToSend);
            break;
        }
        case 3: {
            updateBox(spName3, ph3, specialtyToSend);
            break;
        }
        case 4: {
            updateBox(spName4, ph4, specialtyToSend);
            break;
        }
        case 5: {
            updateBox(spName5, ph5, specialtyToSend);
            break;
        }
        case 6: {
            updateBox(spName6, ph6, specialtyToSend);
            break;
        }
    }
    updateElementContent(messageElem3, "ToDo, connect to Backend via DTO");
}
function updateBox(spName, ph, spSend) {
    spName.textContent = spSend.specialtyName;
    ph.textContent = spSend.physician;
}
function initNewRegistry() {
    const newRegistry = {
        //then, retrieve from input
        name: "testName",
        age: null,
        identification_number: 0,
        dates_of_appointments: ["notYet", "notYet"],
        number_of_appointments: 0
    };
    return newRegistry;
}
function readInput1() {
    const inputLine1 = document.querySelector('.input-line1');
    return inputLine1;
}
function readInput2() {
    const inputLine2 = document.querySelector('.input-line2');
    return inputLine2;
}
function updateElementContent(Elem, newContent) {
    Elem.textContent = newContent;
}
