export interface patientRegistryInterface{
    name:string,
    age:number|null,
    identification_number:number,
    dates_of_appointments:string[], //TODO or just string?
    number_of_appointments: number|null
  }

  export interface specialtyInterface{
    specialtyName:string,
    physician:string,
    patientRegistries:patientRegistryInterface[]
  }


let messageElem1 = document.getElementById("message1")  as HTMLElement
let messageElem2 = document.getElementById("message2")  as HTMLElement
let messageElem3 = document.getElementById("message3")  as HTMLElement
let messageElem4 = document.getElementById("message4")  as HTMLElement
let messageElem5 = document.getElementById("message5")  as HTMLElement
let messageElem6 = document.getElementById("message6")  as HTMLElement
let messageElem7 = document.getElementById("message7")  as HTMLElement
let messageElem8 = document.getElementById("message8")  as HTMLElement
let messageElem9 = document.getElementById("message9")  as HTMLElement
let messageElem10= document.getElementById("message10") as HTMLElement

const spName1    = document.getElementById("sp-1") as HTMLElement
const spName2    = document.getElementById("sp-2") as HTMLElement
const spName3    = document.getElementById("sp-3") as HTMLElement
const spName4    = document.getElementById("sp-4") as HTMLElement
const spName5    = document.getElementById("sp-5") as HTMLElement
const spName6    = document.getElementById("sp-6") as HTMLElement

function updateElementContent(Elem:HTMLElement, newContent:string){
    Elem.textContent = newContent
}

function readInput(){
    const inputLine1 = document.querySelector('.input-line1') as HTMLInputElement;
    const inputLine2 = document.querySelector('.input-line2') as HTMLInputElement;
    return [inputLine1.value, inputLine2.value]
}

function createSpecialtyButton(){

    /*const createSpecialtyBtn = document.createElement('button') as HTMLButtonElement
    createSpecialtyBtn.classList.add('btn')
    createSpecialtyBtn.setAttribute('type','button')
    createSpecialtyBtn.innerHTML = 'Create'

    createSpecialtyBtn.addEventListener('click', ()=> handleCreateSpecialty())*/
    
    updateElementContent(messageElem1, "Please provide the info of the specialty to add.")    
    console.log("Working function")
}
    

function newSpecialty(spName:string, physician:string){

    let newRegistry:patientRegistryInterface = initNewRegistry()    
    const newSpecialty:specialtyInterface = {
        specialtyName: spName,
        physician:physician,
        patientRegistries: [newRegistry, newRegistry]
    }
    return newSpecialty
}


function newSpecialtyToBack(specialtyToSend:specialtyInterface){
    updateElementContent(messageElem2,"Succesfully sent to Backend")
    updateElementContent(messageElem3, "ToDo, connect to Backend via DTO")
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

//--------------------------

function createSpecialty(){
  let newSpecialtyX:specialtyInterface = newSpecialty(readInput()[0], readInput()[1])    
  newSpecialtyToBack(newSpecialtyX)
}





console.log(5)

/*
form?.addEventListener("CreateANewSpecialty",handleCreate)

export interface patientRegistry{
    name:number|null,
    age:string,
    identification_number:string,
    dates_of_appointments:string[], //TODO or just string?
    number_of_appointments: number|null
  }

function createSpecialty(){
    const createSpecialty:HTMLButtonElement = document.createElement('button') as HTMLButtonElement;    
    createSpecialty.className = 'single-note-delete-button'
    createSpecialty.innerText = 'X'
    createSpecialty.addEventListener('click', ()=> handleDelete(div))

}

function handleSubmit(e:SubmitEvent){
    e.preventDefault()
    const titleInput = document.querySelector('.title-input') as HTMLInputElement;
    const reminderInput = document.querySelector('.reminder-input') as HTMLInputElement;
    if(titleInput.value&&reminderInput.value){
      const date = new Date()
      date.setHours(date.getHours() - 5)
  
      const newNote: noteI = {
        id: null,
        title: titleInput.value,
        reminder: reminderInput.value,
        date: date.toISOString()
      }
  
      postNote(newNote).then(
        response => {
          if(response.status === 200){
            state.push(newNote)
  
            createReminder(newNote);  
            titleInput.value = '';
            reminderInput.value = '';
          }
        }
      )
      
    }
  }




function backPageSpecialty(){

}

function forwardPageSpecialty(){

}*/