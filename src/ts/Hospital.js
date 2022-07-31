var messageElem1 = document.getElementById("message1");
var messageElem2 = document.getElementById("message2");
var messageElem3 = document.getElementById("message3");
var messageElem4 = document.getElementById("message4");
var messageElem5 = document.getElementById("message5");
var messageElem6 = document.getElementById("message6");
var messageElem7 = document.getElementById("message7");
var messageElem8 = document.getElementById("message8");
var messageElem9 = document.getElementById("message9");
var messageElem10 = document.getElementById("message10");
var prebox1 = document.getElementById("preBox1");
var prebox2 = document.getElementById("preBox2");
var updateBtn = document.getElementById("updateBtn");
var spName1 = document.getElementById("sp-1");
var spName2 = document.getElementById("sp-2");
var spName3 = document.getElementById("sp-3");
var spName4 = document.getElementById("sp-4");
var spName5 = document.getElementById("sp-5");
var spName6 = document.getElementById("sp-6");
var ph1 = document.getElementById("ph-1");
var ph2 = document.getElementById("ph-2");
var ph3 = document.getElementById("ph-3");
var ph4 = document.getElementById("ph-4");
var ph5 = document.getElementById("ph-5");
var ph6 = document.getElementById("ph-6");
var input1 = document.createElement('input');
input1.classList.add('form-control');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'specialtyName');
input1.setAttribute('placeholder', 'Specialty Name');
input1.setAttribute('aria-label', 'Specialty Name');
let listOfSpecialties = ["Specialty 1", "Specialty 2",
                                  "Specialty 3", "Specialty 4",
                                  "Specialty 5", "Specialty 6"]
var nextBoxToUse = 1;
var currentSpecialty = 1;
prebox1.style.visibility = "hidden";
prebox2.style.visibility = "hidden";
updateBtn.style.visibility = "hidden" ;
function createSpecialtyButton() {
    updateElementContent(messageElem1, "Please provide the info of the specialty to add.");
    prebox1.style.visibility = "visible"
    prebox2.style.visibility = "visible"
    updateBtn.style.visibility = "visible" 
}
function createSpecialty() {
    updateElementContent(messageElem1, "ToDo, connect to Backend via DTO");
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
    prebox1.style.visibility = "hidden";
    prebox2.style.visibility = "hidden";
    updateBtn.style.visibility = "hidden";
    nextBoxToUse += 1;
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
