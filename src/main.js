import './styles.css';
import { eventlisteners } from './controller/eventlisteners';
import { UIStateManager, overviewStateManager } from './view/UIStateManager';
import { runQuietTests } from './tests';
import { todoController } from './controller/todoController';

const todoTestArray = [
  {
    title: 'todoNextYear',
    importance: 'low',
    urgency: 3,
    category: 'thing1',
    description: 'plans..',
  },
  {
    title: 'todoToday',
    importance: 'high',
    doneBefore: '2025, 5, 28',
    category: 'thing1',
    description: 'ideas..',
  },
  {
    title: 'todoTomorrow',
    importance: 'low',
    doneBefore: '2025, 5, 28',
    category: 'thing1',
    description: 'things..',
  },
  // add your other todos here...
];



runQuietTests({ verbose: false });
  

todoTestArray.forEach((todo) => todoController.createTodo(todo));

const initializeApp = (function () {
  eventlisteners.initializeEventListeners();
  UIStateManager.initializeStates();
  UIStateManager.stateStorage.createTodoState.applyState();

  console.log(todoController.getTodoArray());
  overviewStateManager.initializeStates();
  overviewStateManager.overviewStorage.eisenhowerMatrix.applyOverview(
    todoController.getTodoArray(),
  );
})();
