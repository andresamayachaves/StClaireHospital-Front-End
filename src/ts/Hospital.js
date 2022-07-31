"use strict";
exports.__esModule = true;
var messageElem1 = document.querySelector("#message1");
var messageElem2 = document.querySelector("#message2");
var messageElem3 = document.querySelector("#message3");
var prebox1 = document.querySelector("#preBox1");
var prebox2 = document.querySelector("#preBox2");
var updateBtn = document.querySelector("#updateBtn");
var spName1 = document.querySelector("#sp-1");
var spName2 = document.querySelector("#sp-2");
var spName3 = document.querySelector("#sp-3");
var spName4 = document.querySelector("#sp-4");
var spName5 = document.querySelector("#sp-5");
var spName6 = document.querySelector("#sp-6");
var ph1 = document.querySelector("#ph-1");
var ph2 = document.querySelector("#ph-2");
var ph3 = document.querySelector("#ph-3");
var ph4 = document.querySelector("#ph-4");
var ph5 = document.querySelector("#ph-5");
var ph6 = document.querySelector("#ph-6");
var input1 = document.createElement('input');
input1.classList.add('form-control');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'specialtyName');
input1.setAttribute('placeholder', 'Specialty Name');
input1.setAttribute('aria-label', 'Specialty Name');
var listOfSpecialties = ["Specialty 1", "Specialty 2",
    "Specialty 3", "Specialty 4",
    "Specialty 5", "Specialty 6"];
var nextBoxToUse = 1;
var currentSpecialty = 1;
var state = 1;
/*1. Initial State
  2. State when Creating a New Specialty
  3. State when deleting a Spetialty*/
setVisualState(1);
function setVisualState(set) {
    if (set == 1) {
        prebox1.style.visibility = "hidden";
        prebox2.style.visibility = "hidden";
        updateBtn.style.visibility = "hidden";
    }
    else if (set == 2) {
        prebox1.style.visibility = "visible";
        prebox2.style.visibility = "visible";
        updateBtn.style.visibility = "visible";
    }
    else if (set == 3) {
        prebox1.style.visibility = "visible";
        prebox2.style.visibility = "hidden";
        updateBtn.style.visibility = "visible";
    }
}
function createSpecialtyButton() {
    if (state == 1) {
        state = 2;
        updateElementContent(messageElem1, "Please provide the info of the specialty to add.");
        updateElementContent(messageElem2, "");
        updateElementContent(messageElem2, "");
        setVisualState(2);
    }
    else {
        updateElementContent(messageElem2, "Not valid option. Please continue.");
        updateElementContent(messageElem3, "");
    }
}
function createSpecialty() {
    var newRegistry = initNewRegistry();
    var newSpecialtyX = {
        specialtyName: readInput1().value,
        physician: readInput2().value,
        patientRegistries: [newRegistry]
    };
    newSpecialtyToBack(newSpecialtyX);
    updateSelectedBox(newSpecialtyX);
    clearInput1();
    clearInput2();
    setVisualState(1);
    nextBoxToUse += 1;
    updateElementContent(messageElem1, "Specialty successfully created");
}
function newSpecialtyToBack(specialtyToSend) {
    updateElementContent(messageElem2, "Succesfully sent to Backend");
    updateElementContent(messageElem3, "ToDo, connect to Backend via DTO");
}
function updateSelectedBox(specialtyToUpdate) {
    switch (nextBoxToUse) {
        case 1: {
            updateBox(spName1, ph1, specialtyToUpdate);
            break;
        }
        case 2: {
            updateBox(spName2, ph2, specialtyToUpdate);
            break;
        }
        case 3: {
            updateBox(spName3, ph3, specialtyToUpdate);
            break;
        }
        case 4: {
            updateBox(spName4, ph4, specialtyToUpdate);
            break;
        }
        case 5: {
            updateBox(spName5, ph5, specialtyToUpdate);
            break;
        }
        case 6: {
            updateBox(spName6, ph6, specialtyToUpdate);
            break;
        }
    }
}
function updateBox(spName, ph, spUpdate) {
    spName.textContent = spUpdate.specialtyName;
    ph.textContent = spUpdate.physician;
}
function clearBox(spName, ph) {
    spName.textContent = "---------";
    ph.textContent = "-----";
}
function initNewRegistry() {
    var newRegistry = {
        //then, retrieve from input
        name: "testName",
        age: null,
        identification_number: 0,
        dates_of_appointments: ["notYet", "notYet"],
        number_of_appointments: 0
    };
    return newRegistry;
}
function deleteSpecialty() {
    updateElementContent(messageElem1, "Please enter the NUMBER of the specialty to delete");
    prebox1.style.visibility = "visible";
    prebox2.style.visibility = "hidden";
    updateBtn.style.visibility = "visible";
    var boxToErase = Number(readInput1().value);
    deleteSpecialtyById(boxToErase);
}
function deleteSpecialtyById(ID) {
    switch (ID) {
        case 1: {
            clearBox(spName1, ph1);
            break;
        }
        case 2: {
            clearBox(spName2, ph2);
            break;
        }
        case 3: {
            clearBox(spName3, ph3);
            break;
        }
        case 4: {
            clearBox(spName4, ph4);
            break;
        }
        case 5: {
            clearBox(spName5, ph5);
            break;
        }
        case 6: {
            clearBox(spName6, ph6);
            break;
        }
    }
    deleteSpecialtyInBackend();
}
function selectCuerrentSpecialty(which) {
    currentSpecialty = which;
}
function deleteSpecialtyInBackend() {
    //ToDo connection with Backend
}
function readInput1() {
    var inputLine1 = document.querySelector('#input-line1');
    return inputLine1;
}
function readInput2() {
    var inputLine2 = document.querySelector('#input-line2');
    return inputLine2;
}
function clearInput1() {
    var inputLine1 = document.querySelector('#input-line1');
    inputLine1.value = "";
}
function clearInput2() {
    var inputLine2 = document.querySelector('#input-line2');
    inputLine2.value = "";
}
function updateElementContent(Elem, newContent) {
    Elem.textContent = newContent;
}
/*
fetch('url', {
  method: 'GET',
  headers:{
    'Content-type': 'application/jason'
  },
})
.then(response=> response.json)
.then( data => {
  debugger})*/
