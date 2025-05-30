import { todoStorage } from './todoStorage';
import { todoUtil } from './todoUtils';

const movement = {
  moveTodoInUrgency: function (todo, direction, array) {
    if (!array) {
      array = todoStorage.todoArray;
    }

    const nextTodo = this.getNextTodo(todo, direction, array);

    if (!nextTodo) {
      return false;
    }

    todo.doneBefore = nextTodo.doneBefore;

    todoStorage.spliceTodoToNewIndex(todo, nextTodo, array);
  },

  getNextTodo: function (todo, direction, array) {
    if (!array) {
      array = todoStorage.todoArray;
    }

    let directionValue;
    if (direction === 'later') {
      directionValue = 1;
    } else if (direction === 'earlier') {
      directionValue = -1;
    } else {
      console.log(`ERROR direction value: ${direction} is invalid!`);
    }

    let todoIndex = array.indexOf(todo);
    if (todoIndex === -1) {
      console.log('ERROR todo not found');
    }

    let nextTodoIndex = todoIndex + directionValue;
    const nextTodo = array[nextTodoIndex];

    return nextTodo;
  },

  getNextTodoIndex: function (todo, direction, array) {
    let directionValue;
    if (direction === 'later') {
      directionValue = 1;
    } else if (direction === 'earlier') {
      directionValue = -1;
    } else {
      console.log(`ERROR direction value: ${direction} is invalid!`);
    }
    let nextTodoIndex = array.indexOf(todo) + directionValue;
    return nextTodoIndex;
  },
};

export { movement };
