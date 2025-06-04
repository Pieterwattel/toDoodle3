import './styles.css';
import { eventlisteners } from './controller/eventlisteners';
import { UIStateManager } from './view/UIStateManager';
import { runQuietTests } from './tests';

const initializeApp = (function () {
  eventlisteners.initializeEventListeners();
  UIStateManager.initializeStates();
  UIStateManager.stateStorage.createTodoState.applyState();
  runQuietTests({ verbose: false });
})();
