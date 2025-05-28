import './styles.css';
import { todoController } from './controller/todoController';
import { todoStorage } from './model/todoStorage';
import { eventlisteners } from './controller/eventListeners';
import { frontendUtils } from './view/frontendUtils';
import { dates } from './model/dates';
import { frontendController } from './view/frontendController';
import { renderLogic } from './view/renderLogic';
import { domElements } from './view/domElements';

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
      doneBefore: '2025, 5, 28',
      category: 'thing1',
      description: `hello! I have some ideas as well..\n test description`,
    },
    {
      title: 'notChillTodo',
      importance: 'low',
      urgency: 1,
      category: 'thing1',
    },
    {
      title: 'today1',
      importance: 'low',
      doneBefore: '2025, 5, 28',
      category: 'thing1',
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
      urgency: 3,
      category: 'thing1',
    },
    {
      title: 'today2',
      importance: 'low',
      doneBefore: '2025, 5, 28',
      category: 'thing1',
    },
    {
      title: 'lessChillTodo',
      importance: 'low',
      urgency: 2,
      category: 'thing1',
    },
    {
      title: 'todoLaterToday',
      importance: 'high',
      doneBefore: '2025-5-28',
      category: 'thing2',
      description: 'hello',
    },
    {
      title: 'todoTomorrow',
      importance: 'high',
      doneBefore: '2025-5-29',
      category: 'thing2',
    },
    {
      title: 'today3',
      importance: 'low',
      doneBefore: '2025, 5, 28',
      category: 'thing1',
    },
    {
      title: 'today4',
      importance: 'low',
      doneBefore: '2025, 5, 28',
      category: 'thing1',
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

  let todo = todoController.getTodosBySpecifications({ title: 'today3' })[0];
  console.log(todo);
  todoController.moveTodoInUrgency(todo, 'earlier');
  console.log([...todoStorage.todoArray]);

  console.log(
    '--------------------------\norder the todos into the eiserhower matrix:',
  );
  let obj1 = frontendUtils.orderIntoEisenhowerMatrix(todoStorage.todoArray);
  renderLogic.renderEisenhowerMatrix(obj1);

  console.log(
    '--------------------------\ndisable the userAction buttons, and re-enable some again:',
  );
  let disableArray = [
    domElements.createNewTodoBtn,
    domElements.finishTodoBtn,
    domElements.editTodoBtn,
    domElements.removeTodoBtn,
  ];

  let enableArray = [domElements.finishTodoBtn, domElements.removeTodoBtn];
  renderLogic.disableDomElements(disableArray);
  renderLogic.enableDomElements(enableArray);

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
  frontendController.changeUIState('selectTodo');
  */
})();
