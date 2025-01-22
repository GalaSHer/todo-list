import React, { useReducer, useState } from "react";
import { todoReducer } from "./reducers/reducer";
import { TodoList } from "./components/todoList/TodoList";
import styles from "./app.module.scss";
import { ITodoItem } from "./types";
import { InputField } from "./components/inputField/InputField";
import { Footer } from "./components/footer/Footer";

const initialTodos: ITodoItem[] = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
];

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState("");

  const activeTodosNumber = state.filter((todo) => !todo.completed).length;

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <InputField dispatch={dispatch} />
      <TodoList todoItems={state} dispatch={dispatch} filter={filter} />
      <Footer
        dispatch={dispatch}
        setFilter={setFilter}
        activeTodosNumber={activeTodosNumber}
      />
    </div>
  );
};

export default App;
