// alert("Hello World");
// Main Code EXAMPLES.
const todoValue = document.getElementById('todoText');
const listItems = document.getElementById("list-items"); 
const addUpdateClick = document.getElementById("addUpdateClick");
// const addUpdateClick = document.getElementById("addUpdateClick");


todoValue.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addUpdateClick.click();
    }
});

// To display data or value without writting inside ur placeholder
// with ONCLICK.
function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please Enter Your Items Here");
        todoValue.focus();
        return;
    }



    let li = document.createElement("li");
    const todoItems =`<div ondblclick="CompleteToDoItems(this)">${todoValue.value}</div>
    <div>
    <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./images/pencil.png" />
    <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./images/delete.png" />
    </div>`;

        li.innerHTML = todoItems;
        listItems.appendChild(li);
        todoValue.value = "";
}


function CompleteToDoItems(e) {
    // console.log(e.parentElement);
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    }
}

// Here this function...:
// It checks if the text inside the div element has no text decoration (i.e., the task is not marked as completed).
// If the condition is met, it sets the value of todoValue to the text inside the div element.
// It then sets an onclick attribute to addUpdateClick which will call the UpdateOnSelectionItems() function when clicked.
function UpdateToDoItems(e) {
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
    todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
    addUpdateClick.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdateClick.innerHTML = '<img src="/images/refreshicon.png" alt="Refresh Icon">';
 }

}






function UpdateToDoItems(e) {}

            

//  AlertMassage = document.getElementById("AlertMassage")
// let updateText;
// let todoData = JSON.parse(localStorage.getItem("todoData"));
// if(!todoData) {
//     todoData = [];
// }

// todValue.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//         addUpdateClick.click();
//     } 
// });

// ReadToDoItems();
// function ReadToDoItems() {
//     console.log(todoData);
//     todoData.forEach((element) => {
//         let li = document.createElement("li");
//         const todoItems = '<div ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" src="/images/pencil.png" /><img class="delete todo-controls" src="/images/delete.png /></div>';
//         li.innerHTML = todoItems;
//         listItems.appendChild(li);
//     });
// }

// function CreateToDoItem(e) {
//     if (todoValue.value === "") {
//         alert("Please Enter your todo text");
//         todoValue.focus();
//     }

//     let li = document.createElement("li");
//         const todoItems = '<div ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" scr="./images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" scr="./images/delete.png" /></div></div>';

//         li.innerHTML = todoItems;
//         listItems.appendChild(li);

//         if (!todoData) {
//             todoData = [];
//         }
//         let dataItem = {item: todoValue.value, status: false };
//         console.log(dataItem);
//         todoData.push(dataItem);
//         localStorage.setItem("todoData", JSON.stringify(todoData));

//         todoValue.value = "";

// }




//  {
//     
//     }

//     else{
//         let IsPresent = false;
//         todo.forEach((element) => {
//             if (element.Item == todoValue.value) {
//                 IsPresent = true;
//             }
//         });

//         if (IsPresent) {
//             setAlertMessage("This item already present in the list!");
//             return;
//         }

//         let li = document.createElement("li");
//         const todoItems = '<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" scr="./images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" scr="./images/delete.png" /></div></div>';
//         li.innerHTML =todoItems;
//         

//         if (!todo) {
//             todo = [];
//         }

//         let itemsList = {item: todoValue.value, status: false };
//         todo.push(itemList);
//         setLocalStorage();   
// }

// todValue.value ="";
// setAlertMessage("Todo item Created Successfully!");
//     }

    
//     // const todoItems = '<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" scr="./images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" scr="./images/delete.png" /></div></div>';

//     
    
