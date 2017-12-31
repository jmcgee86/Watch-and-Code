
var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],	
};

//function to display todos
function displayTodos(){
    console.log("My todos:", todos);
}
//function to add todos to todo array
function addTodo(todo){
	todos.push(todo);
	displayTodos();
}
//function to change todos in todo array
function changeTodo(position, newValue){
	todos[position] = newValue;
	displayTodos();
}
//function to delete todos from todo array
function deleteTodo(position){
	todos.splice(position,1);
	displayTodos();
}