import React from "react";
import styles from "./footer.module.scss";
import { Button } from "../button/Button";
import { TodoAction } from "../../types";

interface FooterProps {
  dispatch: React.Dispatch<TodoAction>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  activeTodosNumber: number;
}

export const Footer: React.FC<FooterProps> = ({
  dispatch,
  setFilter,
  activeTodosNumber,
}) => {
  const clearCompleted = () => {
    dispatch({ type: "REMOVE", payload: true });
  };

  const filterActive = () => {
    setFilter("active");
  };

  const filterCompleted = () => {
    setFilter("completed");
  };

  const filterAll = () => {
    setFilter("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.itemsLeft}>{activeTodosNumber} items left</div>
      <div className={styles.filters}>
        <Button onClickFunction={filterAll} btnName="All" />
        <Button onClickFunction={filterActive} btnName="Active" />
        <Button onClickFunction={filterCompleted} btnName="Completed" />
      </div>

      <Button onClickFunction={clearCompleted} btnName="Clear completed" />
    </footer>
  );
};
