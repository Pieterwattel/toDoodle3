import { todoStorage } from './todoStorage';
import { todoUtil } from './todoUtils';

const movement = {
  moveTodoInUrgency: function (todo, direction, array) {
    const nextTodo = this.getNextTodo(todo, direction, array);

    console.log(nextTodo);

    if (!nextTodo) {
      return false;
    }

    todo.deadline = nextTodo.deadline;

    todoStorage.switchTodosInArray(todo, nextTodo, array);
  },

  getNextTodo: function (todo, direction, array) {
    let directionValue;
    if (direction === 'later') {
      directionValue = 1;
    } else if (direction === 'earlier') {
      directionValue = -1;
    } else {
      console.log(`ERROR direction value: ${direction} is invalid!`);
    }
    let nextTodoIndex = todo.index + directionValue;
    const nextTodoArray = todoStorage.getTodosBySpecifications({
      index: nextTodoIndex,
    });
    return nextTodoArray[0];
  },
};

export { movement };
