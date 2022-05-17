let form = document.getElementById('addForm');

let incompleteTaskHolder = document.getElementById("incomplete-tasks");

let completedTasksHolder = document.getElementById("completed-tasks");
// Form submit event
form.addEventListener('submit', addItem);


// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('new-task').value;

    if(newItem === "" || newItem === null){
     return;
    }
    else{

   

    // if (newItem) {
    //     // this function will add a new item to the todo list
    //     addItem(newItem)
    //     // reset the input after we added a new item
    //     document.getElementById('new-task').value = ''
    //   }
  
    // if (newItem.value == "") {
    //     return;
    // }else{
    // Create new li element
    var li = document.createElement('li');

    // input (checkbox)
    let checkBox = document.createElement("input"); // checkbox ("input[type=checkbox]")

    checkBox.type = "checkbox";

    checkBox.addEventListener('change', taskCompleted)
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(newItem));
    //return li;
    //li.innerHTML = newItem;
    incompleteTaskHolder.appendChild(li);
    
}
newItem.innerHTML = "";
}
function taskCompleted(e) {
    e.preventDefault();
    console.log("Complete Task...");
  
    // Append the task list item to the #completed-tasks
    let listItem = this.parentNode;
    
    completedTasksHolder.appendChild(listItem);

}


