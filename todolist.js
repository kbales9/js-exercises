var todos = ["Buy new turtle"];

window.setTimeout(function(){

var input = prompt("What would you like to do?");

    while (input !== "quit"){
        if (input === "list") {
         listTodos(); 
        }      
        else if (input === "new") {
          addTodo();
        } 
        if (input === "delete"){
           deleteTodo();
        }

input = prompt("What would you like to do?"); 
}
console.log ("You have quit the app");

}, 500); 

function listTodos (){
    console.log ("**********")
    todos.forEach (function(todo, i){
    console.log(i + ": "+ todo);
   });
   console.log ("**********");
}

function addTodo(){
    var newTodo = prompt("Enter new to-do");
    todos.push(newTodo);
    console.log("Add To-Do Item");
}

function deleteTodo(){
    var index = prompt("Input index of item to delete");
    todos.splice(index, 1); 
    console.log("Deleted To-Do Item");
}

