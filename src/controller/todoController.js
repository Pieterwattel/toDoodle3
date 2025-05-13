import { TodoItem } from '../model/todoItem';
import { todoStorage } from '../model/todoStorage';

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
}

const todoController = TodoController.getSingleton();

export { todoController };
