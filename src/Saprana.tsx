import { ChangeEvent, useState, KeyboardEvent } from "react";
import App from "./App";
import { FilterValuesType } from "./App";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (title: string) => void;
};

export function Saprana(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };
  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  };
  const onAllClickHandler = () => {
    props.changeFilter("all");
  };
  const onActiveClickHandler = () => {
    props.changeFilter("active");
  };
  const onCompletedClickHandler = () => {
    props.changeFilter("completed");
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <input
        value={newTaskTitle}
        onChange={onNewTitleChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {props.tasks.map((t) => {
          const removeTask = () => {props.removeTask(t.id)};
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={removeTask}>Remove</button>
            </li>
          );
        })}
      </ul>
      <button onClick={onAllClickHandler}>All</button>
      <button onClick={onActiveClickHandler}>Active</button>
      <button onClick={onCompletedClickHandler}>Completed</button>
    </div>
  );
}

export default Saprana;
