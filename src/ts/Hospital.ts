const form: HTMLFormElement |null=
document.querySelector('.hospital-form');

form?.addEventListener("CreateANewSpecialty",handleCreate)

function handleCreate(){
    const createSpecialty = document.querySelector('.create-button') as HTMLButtonElement;
}