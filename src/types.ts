export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoAction =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: boolean };