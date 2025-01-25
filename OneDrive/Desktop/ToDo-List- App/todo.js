// alert("Hello Saviour");
// const todoValue = document.getElementById("todoText"),
//  listItems = document.getElementById("list-items"),
//  addUpdateClick = document.getElementById("AddUpdateClick");

// function CreateToDoData() {
//     if (todoValue.value === "") {
//         alert("Please Enter your data");
        
//     }
//  }

const todoValue = document.getElementById('todoText');
const listItems = document.getElementById("list-items");
const addUpdateClick = document.getElementById("addUpdateClick");
const addUpdateClickImg = document.getElementById("addUpdateClickImg");

// Initialize and append updateText element
let updateText = document.createElement("div");
document.body.appendChild(updateText);

todoValue.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addUpdateClickImg.click();
    }
});

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please Enter Your Items Here");
        todoValue.focus();
        return;
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteToDoItems(this)">${todoValue.value}</div>
        <div>
            <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./images/pencil.png" />
            <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./images/delete.png" />
        </div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";
}

function CompleteToDoItems(e) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    } else {
        e.parentElement.querySelector("div").style.textDecoration = "";
    }
}

function UpdateToDoItems(e) {
    if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
        todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
        addUpdateClickImg.setAttribute("onclick", "UpdateOnSelectionItems()");
        addUpdateClickImg.src = "/images/refreshicon-removebg-preview.png";
        updateText.innerText = todoValue.value;
    }
}

function UpdateOnSelectionItems() {
    updateText.innerText = todoValue.value;
}

addUpdateClickImg.addEventListener("click", CreateToDoData);


//  To display data or value from a placeholder 
// // const todoValue = document.getElementById('todoText'),
// //  listItems = document.getElementId("list-items"),
// //  addUpdateClick = document.getElementById("AddUpdateClick");

// //  function CreateToDoData() {
// //     alert(todoValue.value);
// //     if (todoValue.value) {
// //     }

// //     let li = document.createElement("li");
// //     const todoItems = '<div>${todoValue.value}</div><div><img class="edit todo-controls" src="/images/pencil.png" /><img class="delete todo-controls" src="/images/delete.png /></div>';
// //         const todoItems = '<div ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" scr="./images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" scr="./images/delete.png" /></div></div>';

// //         li.innerHTML = todoItems;
// //         listItems.appendChild(li);
// //         todoValue.value = "";
// //  };

// const todoValue = document.getElementById('todoText');
// const listItems = document.getElementById("list-items");
// const addUpdateClick = document.getElementById("AddUpdateClick");

// function CreateToDoData() {
//     alert(todoValue.value);
//     if (todoValue.value === "") {
//         alert("Please Enter Your Items Here");
//         todoValue.focus();
//         return; ("Exit the function if the input is empty");
//     }

//     let li = document.createElement("li");
//     const todoItems = `<div ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./images/delete.png" /></div></div>`;

//     li.innerHTML = todoItems;
//     listItems.appendChild(li);
//     todoValue.value = "";
// }

// const todo = [];

// function CreateToDoData() {
//     if (todoValue.value === "") {
//         alert("Please Enter Your Items Here");
//         todoValue.focus();
//     } else {
//         let IsPresent = false;
//         todo.forEach((element) => {
//             if (element.item === todoValue.value) {
//                 IsPresent = true;
//             }
//         });

//         if (IsPresent) {
//             setAlertMessage("This Item already exists!");
//             return;
//         }

//         // Add new item to the todo array
//         todo.push({ item: todoValue.value });

//         // Create a new list item
//         let li = document.createElement("li");
//         const todoItems = `<div>${todoValue.value}</div><div><img class="edit todo-controls" src="/images/pencil.png" /><img class="delete todo-controls" src="/images/delete.png" /></div>`;
//         li.innerHTML = todoItems;
//         listItems.appendChild(li);
//         todoValue.value = "";

//         saveToLocalStorage(); // Save the updated list
//     }
// }

// function setAlertMessage(message) {
//     alert(message); // Or any other method to display messages
// }

// function saveToLocalStorage() {
//     localStorage.setItem('todoList', JSON.stringify(todo));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedList = localStorage.getItem('todoList');
//     if (savedList) {
//         const savedTodos = JSON.parse(savedList);
//         savedTodos.forEach((item) => {
//             todo.push(item);

//             let li = document.createElement("li");
//             const todoItems = `<div>${item.item}</div><div><img class="edit todo-controls" src="/images/pencil.png" /><img class="delete todo-controls" src="/images/delete.png" /></div>`;
//             li.innerHTML = todoItems;
//             listItems.appendChild(li);
//         });
//     }
// });