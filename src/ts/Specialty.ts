//------------ Get Elements as HTMLElements-----------------------

//import { deleteSpecialtyById } from './Hospital.js';
//import { currentSpecialty } from './Hospital.js';
//import { createSpecialtyButton } from './Hospital.js';

let messageElem11 = document.getElementById("message1")  as HTMLElement
let messageElem12 = document.getElementById("message2")  as HTMLElement
let messageElem13 = document.getElementById("message3")  as HTMLElement
let messageElem14 = document.getElementById("message4")  as HTMLElement
let messageElem15 = document.getElementById("message5")  as HTMLElement
let messageElem16 = document.getElementById("message6")  as HTMLElement
let messageElem17 = document.getElementById("message7")  as HTMLElement
let messageElem18 = document.getElementById("message8")  as HTMLElement
let messageElem19 = document.getElementById("message9")  as HTMLElement
let messageElem20 = document.getElementById("message10") as HTMLElement

let specialtyTitle= document.getElementById("specialtyTitle") as HTMLElement
let specialtyBox  = document.getElementById("sp")  as HTMLElement

const input3 = document.createElement('input') as HTMLInputElement
input3.classList.add('form-control')
input3.setAttribute('type','text')
input3.setAttribute('name','specialtyName')
input3.setAttribute('placeholder', 'Specialty Name')
input3.setAttribute('aria-label', 'Specialty Name')

// Ready----------------




//------------ Button Functions-----------------------
function editSpecialty(){
    hideAllMessages()
  //  createSpecialtyButton()
}

function deleteThisSpecialty(){
//deleteSpecialtyById(currentSpecialty)      
}

function showRegistries(){

}

function addRegistry(){

}

function deleteRegistry(){

}

function previousRegistryPage(){

}
function nextRegistryPage(){
    
}

//------------ Button Functions End-----------------------


//------------ Service -----------------------

function hideAllMessages(){
    messageElem11.style.visibility = "hidden"
    messageElem12.style.visibility = "hidden"
    messageElem13.style.visibility = "hidden"
    messageElem14.style.visibility = "hidden"
    messageElem15.style.visibility = "hidden"
    messageElem16.style.visibility = "hidden"
    messageElem17.style.visibility = "hidden"
    messageElem18.style.visibility = "hidden"
    messageElem19.style.visibility = "hidden"
    messageElem20.style.visibility= "hidden"
}

function updateElementContentSpecialty(Elem:HTMLElement, newContent:string){
    Elem.textContent = newContent
  }

specialtyTitle.textContent = "casikhbacs"

