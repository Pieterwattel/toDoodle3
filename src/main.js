import './styles.css';
import { todoController } from './controller/todoController';
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
  const newTodoData = eventlisteners.DomData.getNewTodoData();
  const todoDataForBackend =
    todoController.formatFrontendTodoForBackend(newTodoData);
  console.log(todoDataForBackend);
  todoController.createTodo(todoDataForBackend);

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
  const todoSpecifications1 = {
    title: 'todoTomorrow',
  };
  console.log('move todoTomorrow one place earlier');
  let todo = todoController.getTodosBySpecifications(todoSpecifications1)[0];
  todoController.moveTodoInUrgency(todo, 'earlier');
  console.log([...todoStorage.todoArray]);
})();
