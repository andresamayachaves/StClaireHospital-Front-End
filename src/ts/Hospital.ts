interface patientRegistryInterface{
    name:string,
    age:number|null,
    identification_number:number,
    dates_of_appointments:string[], //TODO or just string?
    number_of_appointments: number|null
  }

interface specialtyInterface{
  specialtyName:string,
  physician:string,
  patientRegistries:patientRegistryInterface[]
}

let messageElem1 = document.querySelector("#message1")  as HTMLElement
let messageElem2 = document.querySelector("#message2")  as HTMLElement
let messageElem3 = document.querySelector("#message3")  as HTMLElement

let prebox1      = document.querySelector("#preBox1") as HTMLElement
let prebox2      = document.querySelector("#preBox2") as HTMLElement

let updateBtn    = document.querySelector("#updateBtn") as HTMLElement
let deleteBtn    = document.querySelector("#deleteBtn") as HTMLElement

const spName1    = document.querySelector("#sp-1") as HTMLElement
const spName2    = document.querySelector("#sp-2") as HTMLElement
const spName3    = document.querySelector("#sp-3") as HTMLElement
const spName4    = document.querySelector("#sp-4") as HTMLElement
const spName5    = document.querySelector("#sp-5") as HTMLElement
const spName6    = document.querySelector("#sp-6") as HTMLElement

const ph1        = document.querySelector("#ph-1") as HTMLElement
const ph2        = document.querySelector("#ph-2") as HTMLElement
const ph3        = document.querySelector("#ph-3") as HTMLElement
const ph4        = document.querySelector("#ph-4") as HTMLElement
const ph5        = document.querySelector("#ph-5") as HTMLElement
const ph6        = document.querySelector("#ph-6") as HTMLElement

const input1 = document.createElement('input') as HTMLInputElement
input1.classList.add('form-control')
input1.setAttribute('type','text')
input1.setAttribute('name','specialtyName')
input1.setAttribute('placeholder', 'Specialty Name')
input1.setAttribute('aria-label', 'Specialty Name')

let listOfSpecialties:string[] = ["Specialty 1", "Specialty 2", 
                                  "Specialty 3", "Specialty 4", 
                                  "Specialty 5", "Specialty 6"]

let nextBoxToUse:number = 1
let currentSpecialty = 1
let state = 1

/*1. Initial State
  2. State when Creating a New Specialty 
  3. State when deleting a Spetialty*/

setVisualState(1)
  

function setVisualState(set:number){

  if (set == 1){
    prebox1.style.visibility   = "hidden"
    prebox2.style.visibility   = "hidden"
    updateBtn.style.visibility = "hidden"
    deleteBtn.style.visibility = "hidden"

  } else if (set == 2){
    prebox1.style.visibility   = "visible"
    prebox2.style.visibility   = "visible"
    updateBtn.style.visibility = "visible"
    deleteBtn.style.visibility = "hidden"

  } else if (set == 3){
    prebox1.style.visibility   = "visible"
    prebox2.style.visibility   = "hidden"
    updateBtn.style.visibility = "hidden"
    deleteBtn.style.visibility = "visible"
  }

}

function createSpecialtyButton(){

  if(state==1){
    state = 2
    newMessagesSet("Please provide the info of the specialty to add","", "")
    setVisualState(state)
  } else{
    updateElementContent(messageElem2, "Not valid option. Please continue.")
    updateElementContent(messageElem3, "")
  }
}
    
function createSpecialty(){
  
  let newRegistry:patientRegistryInterface = initNewRegistry() 
  let newSpecialtyX:specialtyInterface = {
    specialtyName: readInput1().value, 
    physician:     readInput2().value,
    patientRegistries: [newRegistry]
  }  
  newSpecialtyToBack(newSpecialtyX)
  updateSelectedBox(newSpecialtyX)
  clearInput1()
  clearInput2()

  setVisualState(1)
  nextBoxToUse +=1;
  updateElementContent(messageElem1, "Specialty successfully created")
  state = 1
}

function newSpecialtyToBack(specialtyToSend:specialtyInterface){
 
  updateElementContent(messageElem2, "Succesfully created/updated in database")
  updateElementContent(messageElem3, "")
  
}

function updateSelectedBox(specialtyToUpdate:specialtyInterface){
  switch (nextBoxToUse){
    case 1:{
      updateBox(spName1, ph1, specialtyToUpdate)
      break
    }case 2:{
      updateBox(spName2, ph2, specialtyToUpdate)
      break
    }case 3:{
      updateBox(spName3, ph3, specialtyToUpdate)
      break
    }case 4:{
      updateBox(spName4, ph4, specialtyToUpdate)
      break
    }case 5:{
      updateBox(spName5, ph5, specialtyToUpdate)
      break
    }case 6:{
      updateBox(spName6, ph6, specialtyToUpdate)
      break
    }
  }
}

function updateBox(spName:HTMLElement, ph:HTMLElement, spUpdate:specialtyInterface){
  spName.textContent = spUpdate.specialtyName
  ph.textContent = spUpdate.physician
}

function clearBox(spName:HTMLElement, ph:HTMLElement){
  spName.textContent = " -- [Specialty to Assign] -- "
  ph.textContent = " -- [Physician to Assign] -- "
}


function initNewRegistry(){
    const newRegistry:patientRegistryInterface ={     //ToDo do not create at first, 
        //then, retrieve from input
    name:"testName",
    age:null,
    identification_number:0,
    dates_of_appointments:["notYet","notYet"], //TODO or just string?
    number_of_appointments: 0
    }
    return newRegistry
}


function deleteSpecialty(){

  if(state==1){
    updateElementContent(messageElem1, "Please enter the NUMBER of the specialty to delete")
    setVisualState(3)
    let boxToErase:number = Number(readInput1().value)
    deleteSpecialtyById(boxToErase)

  } else{
    updateElementContent(messageElem2, "Not valid option. Please continue.")
    updateElementContent(messageElem3, "")
  }
}

function deleteSpecialtyById(ID:number){
    
  switch (ID){
    case 1:{
      clearBox(spName1, ph1)
      break
    }case 2:{
      clearBox(spName2, ph2)
      break
    }case 3:{
      clearBox(spName3, ph3)
      break
    }case 4:{
      clearBox(spName4, ph4)
      break
    }case 5:{
      clearBox(spName5, ph5)
      break
    }case 6:{
      clearBox(spName6, ph6)
      break
    }
  }
  deleteSpecialtyInBackend()
}

function selectCuerrentSpecialty(which:number){
  currentSpecialty = which
}

function deleteSpecialtyInBackend(){
 
  //ToDo connection with Backend
}




function readInput1(){
  let inputLine1 = document.querySelector('#input-line1') as HTMLInputElement
  return inputLine1
}

function readInput2(){
  let inputLine2 = document.querySelector('#input-line2') as HTMLInputElement
  return inputLine2
}

function clearInput1(){
  let inputLine1 = document.querySelector('#input-line1') as HTMLInputElement
  inputLine1.value =""
}

function clearInput2(){
  let inputLine2 = document.querySelector('#input-line2') as HTMLInputElement
  inputLine2.value =""
}

function updateElementContent(Elem:HTMLElement, newContent:string){
  Elem.textContent = newContent
}

function  newMessagesSet(m1:string, m2:string,m3:string){
  updateElementContent(messageElem1, "Please provide the info of the specialty to add.")
  updateElementContent(messageElem2, "")
  updateElementContent(messageElem2, "")
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
