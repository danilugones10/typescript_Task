const TASK=[
    {
        name: "Mi primera tarea",
        done: false,
    },
    {
        name: "Una tarea sin terminar",
        done: false,
    },
    {
        name: "Una tarea terminada",
        done: true,
    },
    {
        name: "Una tarea en modo edición",
        done: false,
    },
    {
        name: "Una tarea para eliminar",
        done: false,
    },
    {
        name: "Una tarea con un texto muy largo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores consequuntur dolorem excepturi fugiat harum ipsa iure laboriosam libero minima neque porro possimus quam, quasi qui saepe velit veritatis.",
        done: false,
    },
    {
        name: "Tarea numero 7",
        done: false,
    },
    {
        name: "Tarea numero 8",
        done: false,
    },
    {
        name: "Tarea numero 9",
        done: false,
    },
    {
        name: "Tarea numero 10",
        done: false,
    },
];
const taskList=document.querySelector('#taskList');
const modal=document.querySelector('.modal');

function crearHTML(taskElement) {
    return `
        <li>
            <div>
                <input type="checkbox" ${taskElement.done ? 'checked' : ''}></input>
                <span>${taskElement.name}</span>
            </div>
            <span class="material-icons btn-delete"> delete_outline</span>
        </li>
     `
};

function listarHTML(tasks) {
    for (const taskElement of tasks) {
        taskList.innerHTML+=crearHTML(taskElement);

        // taskList.innerHTML+=`
        // <li>
        //     <div>
        //         <input type="checkbox" ${taskElement.done ? 'checked' : ''}></input>
        //         <span>${taskElement.name}</span>
        //     </div>
        //     <span class="material-icons btn-delete"> delete_outline</span>
        // </li>
        // `
    }
    borrarTarea();
};

function borrarTarea() {
    const botonBorrar=document.querySelectorAll('.btn-delete');
    const arrayBorrar=Array.from(botonBorrar);
    const botonSI=document.querySelector('#botonSi');
    const botonNo=document.querySelector('#botonNo');

    for (const element of arrayBorrar) {
        element.addEventListener('click', ()=>{
            modal.className="modal open";
            botonSI.addEventListener('click', ()=>{
                modal.className="modal";
                element.parentElement.remove();
            })
            botonNo.addEventListener('click', ()=>{
                modal.className="modal";
            })
        })
    }
}


listarHTML(TASK);
TASK.slice(0,1);
console.log(TASK);