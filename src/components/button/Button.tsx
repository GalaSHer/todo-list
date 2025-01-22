import React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClickFunction?: () => void;
  btnName: string;
}

export const Button: React.FC<IButtonProps> = ({
  type,
  onClickFunction,
  btnName,
}) => {
  return (
    <button type={type} className={styles.button} onClick={onClickFunction}>
      {btnName}
    </button>
  );
};
