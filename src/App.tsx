import { FC } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import "./App.scss";

export const App: FC = () => {

  return (
    <>
      <main className="main">
        <AddTodoForm />
        <TodoList />
      </main>

    </>
  );
};
