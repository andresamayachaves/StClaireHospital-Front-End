/*const form: HTMLFormElement |null=
document.querySelector('.hospital-form');
*/

//const createSpecialtyBtn = document.querySelector<HTMLButtonElement>('button.createSpecialty')

function handleCreateSpecialty(){
    console.log("Working HandlingFunction")
}

function createSpecialty(){

    const createSpecialtyBtn = document.createElement('button') as HTMLButtonElement
    createSpecialtyBtn.classList.add('btn', 'btn-fanger', 'removeBtn')
    createSpecialtyBtn.setAttribute('type','button')
    createSpecialtyBtn.innerHTML = 'Create'

    createSpecialtyBtn.addEventListener('click', ()=> handleCreateSpecialty())

    console.log("Working function")

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