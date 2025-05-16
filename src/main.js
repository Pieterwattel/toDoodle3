import './styles.css';
import { parseISO } from 'date-fns';
import { todoController } from './controller/todoController';
import { todoUtil } from './model/todoUtils';
import { todoStorage } from './model/todoStorage';

/*
        this.#id = dataObj.id;
        this.#title = dataObj.title;
        this.#importance = dataObj.importance;

        this.#lastDayOfDeadline = dataObj.lastDayOfDeadline;
        this.#dateSpecifiedByUser = dataObj.dateSpecifiedByUser;

        this.#finished = dataObj.finished;
*/

let testingIIFE = (function () {
  const todoTestArray = [
    {
      title: 'todoNextYear',
      importance: 2,
      lastDayOfDeadline: '2026 - 01 - 01',
    },
    {
      title: 'todoToday',
      importance: 1,
      lastDayOfDeadline: '2025, 5, 13',
    },
    {
      title: 'todoInThePast',
      importance: 2,
      lastDayOfDeadline: '2024 - 10 - 09',
    },
    {
      title: 'veryChillTodo',
      importance: 3,
      lastDayOfDeadline: '2025 - 12 - 01',
    },
    {
      title: 'todoLaterToday',
      importance: 3,
      lastDayOfDeadline: '2025 - 5 - 13',
    },
    {
      title: 'todoTomorrow',
      importance: 3,
      lastDayOfDeadline: '2025 - 5 - 14',
    },
  ];

  console.log('--------------------------');
  console.log("go through all todo's and print them");
  todoTestArray.forEach((element) => {
    todoController.createTodo(element);
  });

  let todo = todoUtil.getTodoFromId(5);
  console.log(todoStorage.todoArray);

  todoController.movement.moveTodoInUrgency(todo, 'earlier');
  todoController.movement.moveTodoInUrgency(todo, 'earlier');
  todoController.movement.moveTodoInUrgency(todo, 'earlier');

  /*
  todoController.orderTodos();
  todoController.changeTodoPosition(5, 'later');

  console.log(storage.array);
  */
})();
