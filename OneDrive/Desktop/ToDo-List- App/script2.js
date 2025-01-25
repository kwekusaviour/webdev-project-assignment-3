const todoValue = document.getElementById('todoText');
const listItems = document.getElementById("list-items"); 
const addUpdateClick = document.getElementById("addUpdateClick");
let updateText;
let todoData = JSON.parse(localStorage.getItem("todoData"));
if (!todoData) {
    todoData = [];
}

// keyboard event listener
todoValue.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addUpdateClick.click();
    }
});

// ReadToDoItems();
// function ReadToDoItems() {
//     console.log(todoData);
// }

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please Enter Your Items Here");
        todoValue.focus();
        return;
    }

//     createListItem(todoValue.value, false); {

//     let dataItem = { item: todoValue.value, status: false };
//     todoData.push(dataItem);
//     localStorage.setItem("todoData", JSON.stringify(todoData));

//     todoValue.value = "";
// }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteToDoItems(this)">${todoValue.value}</div>
        <div>
            <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./images/pencil.png" />
            <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./images/delete.png" />
        </div>`;
        console.log(todoValue.value)


    li.innerHTML = todoItems;
    listItems.appendChild(li);
    // todoValue.value = "";



    if (!todoData) {
        todoData = [];
    }
    let dataItem = {item: todoValue.value, status: false };
    let testData = []
    testData.push(
        dataItem 
    )
        
    
    console.log(testData);
    todoData.push(dataItem);
    localStorage.setItem("todoData", JSON.stringify(todoData));

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
    // console.log("UpdateToDoItems function called"); // Logging for debugging
    if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
        todoValue.value = e.parentElement.parentElement.querySelector("div").innerText; // Assigning value to todoValue
        addUpdateClick.setAttribute("onclick", "UpdateOnSelectionItems()");
        // addUpdateClick.innerHTML = '<img src="/images/refreshicon-removebg-preview.png" alt="Refresh Icon" height="50px">';
        addUpdateClick.setAttribute("src", "/images/refreshicon-removebg-preview.png");
        updateText = e.parentElement.parentElement.querySelector("div");
    }
}

function UpdateOnSelectionItems() {
    updateText.innerText = todoValue.value;
    addUpdateClick.setAttribute("onclick", "CompleteTodoItem");
    addUpdateClick.setAttribute("src", "/images/plus.jpeg");
    todoValue.value = "";
}

function DeleteToDoItems(e) {
    let deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
    if (confirm(`Are you sure? Do you want to delete this "${deleteValue}"?`)) {
        // Action to remove the to-do item
        e.parentElement.parentElement.remove();
        
         // Remove item from localStorage
         todoData = todoData.filter(item => item.item !== deleteValue);
         localStorage.setItem("todoData", JSON.stringify(todoData));
    }
}

