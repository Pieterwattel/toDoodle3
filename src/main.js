import './styles.css';
import { parseISO } from 'date-fns';
import { todoController } from './controller/todoController';
import { todoUtil } from './model/todoUtils';
import { todoStorage } from './model/todoStorage';
import { eventlisteners } from './controller/eventListeners';

let testingIIFE = (function () {
  const todoTestArray = [
    {
      title: 'todoNextYear',
      importance: 'high',
      urgency: 3,
      category: 'thing1',
    },
    {
      title: 'todoToday',
      importance: 'low',
      lastDayOfDeadline: '2025, 5, 13',
      category: 'thing1',
    },
    {
      title: 'todoInThePast',
      importance: 'high',
      urgency: 1,
      category: 'thing1',
    },
    {
      title: 'veryChillTodo',
      importance: 'low',
      urgency: 2,
      category: 'thing1',
    },
    {
      title: 'todoLaterToday',
      importance: 'high',
      lastDayOfDeadline: '2025-5-13',
      category: 'thing2',
    },
    {
      title: 'todoTomorrow',
      importance: 'high',
      lastDayOfDeadline: '2025-5-14',
      category: 'thing2',
    },
  ];

  console.log('--------------------------\nclick "createTodo":');
  eventlisteners.DomData.getNewTodoData();

  /*
  console.log('--------------------------\ncreate todos:');
  let i = 0;
  todoTestArray.forEach((element) => {
    todoController.createTodo(element);
    i++;
  });
  console.log(`**${i} todo's made**`);

  console.log('--------------------------\nplace array:');
  console.log([...todoStorage.todoArray]);

  console.log('--------------------------');
  console.log('move todoTomorrow one place earlier');
  let todo = todoUtil.getTodoFromId(5);
  todoController.moveTodoInUrgency(todo, 'earlier');
  console.log([...todoStorage.todoArray]);

  const todoSpecifications1 = {
    id: 2,
  };

  const todoSpecifications2 = {
    importance: 'high',
  };

  console.log('get todo with id 2');
  console.log(todoController.getTodosBySpecifications(todoSpecifications1));
  console.log('get todos with importance high');
  console.log(todoController.getTodosBySpecifications(todoSpecifications2));
  */
})();
