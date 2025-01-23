import React from "react";
import { ITodoItem, TodoAction } from "../../types";
import styles from "./todoItem.module.scss";

interface ITodoItemProps {
  todoItem: ITodoItem;
  dispatch: React.Dispatch<TodoAction>;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ todoItem, dispatch }) => {
  const onCheckboxChange = () => {
    dispatch({ type: "TOGGLE", payload: todoItem.id });
  };

  return (
    <li className={todoItem.completed ? styles.itemCompleted : styles.item}>
      <input
        type="checkbox"
        checked={todoItem.completed}
        className={styles.checkbox}
        onChange={onCheckboxChange}
      />
      {todoItem.title}
    </li>
  );
};
