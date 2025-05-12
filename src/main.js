import './styles.css';
import { todoController } from './controller/todoController';


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
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoToday',
      importance: 1,
      lastDayOfDeadline: '2025, 5, 09',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoInThePast',
      importance: 2,
      lastDayOfDeadline: '2024 - 10 - 09',
      dateSpecifiedByUser: false,
    },
    {
      title: 'veryChillTodo',
      importance: 3,
      lastDayOfDeadline: '2025 - 12 - 01',
      dateSpecifiedByUser: true,
    },
    {
      title: 'todoLaterToday',
 //     urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 05 - 9',
      dateSpecifiedByUser: false,
    },
    {
      title: 'todoTomorrow',
 //     urgency: 2,
      importance: 1,
      lastDayOfDeadline: '2025 - 05 - 10',
      dateSpecifiedByUser: false,
    },
  ];

  console.log('--------------------------');
  console.log("go through all todo's and print them");
  todoTestArray.forEach((element) => {
    todoController.createTodo(element)
  });

  /*
  todoController.orderTodos();
  todoController.changeTodoPosition(5, 'later');

  console.log(storage.array);
  */
})();
