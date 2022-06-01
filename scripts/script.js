//get form query
const form = document.querySelector('form');

//target ul
const taskList = document.querySelector('.task-list');


//form submit event
form.addEventListener('submit', addItem);

taskList.addEventListener('click', deleteItem);

function addItem(e){
    e.preventDefault();
    
    //target input field
    const input = document.querySelector('.task-text');

    //input value
    const value = input.value;

    //check if value was entered into input 
    if(value === "")
    {
       alert('Enter a task!');
        return;
    }
    else
    {
        //create text item from input value
        const taskValue = document.createTextNode(value);

        //create <li> element
        const taskItem = document.createElement('li');

        //add class to <li> element
        taskItem.classList = 'task-item';

        console.log(taskValue);

        //add delete button to task-item li
        taskItem.innerHTML += `<span class="item-text">${taskValue.textContent}</span><button class="check">✔</button><button class="delete">✘</button>`


        //append taskList to taskItem
        taskList.appendChild(taskItem);

        //clear input
        input.value = "";
    }
};

function deleteItem(e){
    if(e.target.classList.contains('delete'))
        e.target.parentElement.remove();
    else if(e.target.classList.contains('check'))
        e.target.parentElement.firstChild.style.textDecoration = "line-through";
}