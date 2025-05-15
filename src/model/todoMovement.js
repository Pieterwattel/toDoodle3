import { todoStorage } from './todoStorage';

const movement = {
  moveTodoInUrgency: function (todo, direction, array) {
    console.log(array);

    const nextTodo = this.getNextTodo(todo, direction, array);
    console.log(nextTodo);
    /*
    if (!nextTodo) {
      return false;
    }

    giveTodoNewDeadline(todo, nextTodo.deadline);

    switchTodosInArray(todo, nextTodo, array);
    */
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
    return todoStorage.getTodoFromId(nextTodoIndex);
  },
};

export { movement };
