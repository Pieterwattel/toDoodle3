// tests.js
import './styles.css';
import { todoController } from './controller/todoController';
import { todoStorage } from './model/todoStorage';
import { frontendUtils } from './view/frontendUtils';

export function runQuietTests({ verbose = false } = {}) {
  const results = [];

  function logIfVerbose(...args) {
    if (verbose) console.log(...args);
  }

  try {
    // Example test: Create todos and check count
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

    todoTestArray.forEach((todo) => todoController.createTodo(todo));

    const todoCount = todoStorage.todoArray.length;
    const expectedCount = todoTestArray.length;

    if (todoCount !== expectedCount) {
      results.push(`FAIL: Expected ${expectedCount} todos, got ${todoCount}`);
    } else {
      logIfVerbose(`PASS: Created ${todoCount} todos as expected.`);
    }

    // Example test: Retrieve a todo by title
    const todoTomorrow = todoController.getTodosBySpecifications({
      title: 'todoTomorrow',
    })[0];
    if (!todoTomorrow) {
      results.push('FAIL: todoTomorrow not found.');
    } else {
      logIfVerbose('PASS: todoTomorrow found:', todoTomorrow.title);
    }

    // Example test: Move a todo urgency earlier
    todoController.moveTodoInUrgency(todoTomorrow, 'earlier');
    logIfVerbose('Moved todoTomorrow urgency earlier.');

    // Example test: Order todos into Eisenhower matrix
    const matrix = frontendUtils.orderIntoEisenhowerMatrix(
      todoStorage.todoArray,
    );
    if (!matrix) {
      results.push('FAIL: Eisenhower matrix ordering failed.');
    } else {
      logIfVerbose('PASS: Eisenhower matrix created.');
    }

    // Could add more test checks here...
  } catch (error) {
    results.push(`ERROR during tests: ${error.message}`);
  }

  if (results.length > 0) {
    console.warn('Test Results:', results);
  } else {
    logIfVerbose('All tests passed quietly.');
  }

  todoStorage.emptyTodoArray();
}
