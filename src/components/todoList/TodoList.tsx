import React, { ReactNode } from "react";
import { ITodoItem, TodoAction } from "../../types";
import { TodoItem } from "../todoItem/TodoItem";
import styles from "./todoList.module.scss";

interface ITodoListProps {
  todoItems: ITodoItem[];
  filter: string;
  dispatch: React.Dispatch<TodoAction>;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todoItems,
  filter,
  dispatch,
}) => {
  const filteredItems = todoItems.filter((item) => {
    if (filter === "completed") {
      return item.completed;
    } else if (filter === "active") {
      return !item.completed;
    }
    return true;
  });

  return (
    <ul className={styles.todoList}>
      {filteredItems.map((item) => {
        return <TodoItem key={item.id} todoItem={item} dispatch={dispatch} />;
      })}
    </ul>
  );
};
