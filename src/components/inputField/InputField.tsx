import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./inputField.module.scss";
import { TodoAction } from "../../reducers/reducer";
import { Button } from "../button/Button";

interface InputFieldProps {
  dispatch: React.Dispatch<TodoAction>;
}

export const InputField: React.FC<InputFieldProps> = ({ dispatch }) => {
  const [todoText, setTodoText] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (todoText !== "") {
      setTodoText("");
      {
        dispatch({ type: "ADD", payload: todoText });
        setTodoText("");
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onAddTodo}>
      <input
        type="text"
        className={styles.input}
        placeholder="What needs to be done?"
        value={todoText}
        onChange={onInputChange}
      />
      <button type="submit" className={styles.button}></button>
    </form>
  );
};
