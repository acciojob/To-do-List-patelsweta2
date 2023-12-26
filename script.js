const newTodoIn = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", function(){
    let todoText = newTodoIn.value;

    if(todoText.trim() !== ""){
        let listItem = document.createElement("li");
        listItem.textContent = todoText;

        todoList.appendChild(listItem);
        newTodoIn.value = "";  // Fix the property name
    }
});
