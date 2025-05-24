import './styles.css';
import { todoController } from './controller/todoController';
import { todoStorage } from './model/todoStorage';
import { eventlisteners } from './controller/eventListeners';
import { frontendUtils } from './view/frontendUtils';
import { dates } from './model/dates';
import { display } from './view/display';

let testingIIFE = (function () {
  const todoTestArray = [
    {
      title: 'todoNextYear',
      importance: 'low',
      urgency: 3,
      category: 'thing1',
      description: 'these are some crazy plans.. I hope to see you soon',
    },
    {
      title: 'todoToday',
      importance: 'high',
      doneBefore: '2025, 5, 24',
      category: 'thing1',
      description: `hello! I have some ideas as well..\n test description
 test description\n
 test description\n
aa\n
 test description\n
 test description\n
 test descriptio\n
aaaa\n
 test description\n
 test description\n
 test descriptionaaa\n'
aaa\n
aaaa\n
hello! I have some ideas as well..\n test description
 test description\n
 test description\n
aa\n
 test description\n
 test description\n
 test descriptio\n
aaaa\n
 test description\n
 test description\n
 test descriptionaaa\n'
aaa\n
aaaa\nhello! I have some ideas as well..\n test description
 test description\n
 test description\n
aa\n
 test description\n
 test description\n
 test descriptio\n
aaaa\n
 test description\n
 test description\n
 test descriptionaaa\n'
aaa\n
aaaa\n`,
    },
    {
      title: 'todoInThePast',
      importance: 'high',
      doneBefore: '2025-5-24',
      category: 'thing1',
      description: 'hello',
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
      doneBefore: '2025-5-24',
      category: 'thing2',
      description: 'hello',
    },
    {
      title: 'todoTomorrow',
      importance: 'high',
      doneBefore: '2025-5-14',
      category: 'thing2',
    },
  ];

  console.log(dates.currentDate);

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

  /*
  console.log('--------------------------\nget all important todos:');
  console.log(todoStorage.getTodosBySpecifications({ importance: 'high' }));
  console.log('--------------------------\nget all todos deadline today:');
  console.log(
    todoStorage.getTodosBySpecifications({
      doneBefore: dates.currentDate,
    }),
  );

  console.log(
    '--------------------------\nget all important todos with description "hello',
  );
  console.log(
    todoStorage.getTodosBySpecifications({
      importance: 'high',
      description: 'hello',
    }),
  );
  */

  console.log(
    '--------------------------\nmove todoTomorrow one place earlier',
  );
  const todoSpecifications1 = {
    title: 'todoTomorrow',
  };
  let todo = todoController.getTodosBySpecifications(todoSpecifications1)[0];
  todoController.moveTodoInUrgency(todo, 'earlier');
  console.log([...todoStorage.todoArray]);

  console.log('--------------------------');
  display.updateTodoOverview(todoStorage.todoArray);

  display.disableActionBtnsExcept('createTodo', 'editTodo');
})();
