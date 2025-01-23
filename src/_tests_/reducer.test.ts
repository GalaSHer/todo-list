import { describe, expect, it } from "@jest/globals";
import { todoReducer } from "../reducers/reducer";
import { ITodoItem, TodoAction } from "../types";

describe('тесты редюсера', () => {
  const initialTodos: ITodoItem[] = [
    {id: 1, title: "Todo 1", completed: false},
    {id: 2, title: "Todo 2", completed: false},
  ];

  it('добавление задачи в список', () => {
    const action: TodoAction = {type: "ADD", payload: "Todo 3"};
    const result = todoReducer(initialTodos, action);

    expect(result).toEqual([...initialTodos, {id: 3, title: "Todo 3", completed: false}]);
  })

  it('изменение статуса задачи', () => {
    const action: TodoAction = {type: "TOGGLE", payload: 1};
    const result = todoReducer(initialTodos, action);

    expect(result).toEqual([
      {id: 1, title: "Todo 1", completed: true},
      {id: 2, title: "Todo 2", completed: false},
    ]);
  })

  it('удаление задачи из списка', () => {
    const todos: ITodoItem[] = [
      {id: 1, title: "Todo 1", completed: false},
      {id: 2, title: "Todo 2", completed: true},
    ]; 
    const action: TodoAction = {type: "REMOVE", payload: true};
    const result = todoReducer(todos, action);

    expect(result).toEqual([{id: 1, title: "Todo 1", completed: false}]);
})
})