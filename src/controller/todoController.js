import { TodoItem } from '../model/todoItem';
import { todoStorage } from '../model/todoStorage';
import { movement } from '../model/todoMovement';

class TodoController {
  constructor() {}

  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoController();
    return this.instance;
  }

  createTodo(dataObj) {
    let newTodo = TodoItem.create(dataObj);
    todoStorage.addNewTodo(newTodo);
  }

  moveTodoInUrgency(todo, direction) {
    movement.moveTodoInUrgency(todo, direction, todoStorage.todoArray);
  }

  getTodosByCategory(categoryName) {
    return todoStorage.getTodosByCategory(categoryName, todoStorage.todoArray);
  }
}

const todoController = TodoController.getSingleton();

export { todoController };
