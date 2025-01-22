import React from "react";
import { ITodoItem } from "../types";

export type TodoAction =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: boolean };

export const todoReducer = (todos: ITodoItem[], action: TodoAction) => {
  switch (action.type) {
    case "REMOVE":
      return todos.filter((todo) => todo.completed !== action.payload);
    case "ADD":
      return [
        ...todos,
        {
          id: todos.length + 1,
          title: action.payload,
          completed: false,
        },
      ];
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return todos;
  }
};
