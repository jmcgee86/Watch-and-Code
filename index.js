
var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function (){
		console.log("My todos", this.todos);
	},
	addTodo: function(todo){
		this.todos.push(todo);
		this.displayTodos();
	}
};
/*
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
*/