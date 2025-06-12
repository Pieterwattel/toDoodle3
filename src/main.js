import './styles.css';
import { eventlisteners } from './controller/eventlisteners';
import { UIStateManager, overviewStateManager } from './view/stateManager';
import { runQuietTests } from './tests';
import { todoController } from './controller/todoController';
import { frontendController } from './view/frontendController';

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
  console.log(UIStateManager.UIStateStorage);
  UIStateManager.UIStateStorage.createTodo.applyState();

  frontendController.applyEisenhowerMatrix();
})();
