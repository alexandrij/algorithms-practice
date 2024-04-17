import { produce } from 'immer';

const todos = [
  { text: 'example 1', done: false },
  { text: 'example 2', done: false },
];

const nextTodos = produce(todos, (draft) => {
  draft.push({ text: 'learn immer', done: true });
  draft[1].done = true;
});

// старое состояние не модифицировано
console.log(todos.length); // 2
console.log(todos[1].done); // false

// общие структуры
console.log(todos === nextTodos); // false
console.log(todos[0] === nextTodos[0]); // true
console.log(todos[1] === nextTodos[1]); // false