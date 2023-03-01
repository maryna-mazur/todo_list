import { FC, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { TodoItem } from "./TodoItem";
import { TodoModal } from "./TodoModal";

export const TodoList: FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const [isModal, setIsModal] = useState(false);
  console.log(todos);
  
  return (
    <>
      {todos.length > 0 ? (
        <table className="todo-list">
          <thead className="todo-list__head">
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="todo-list__body">
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} setIsModal={setIsModal} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="notice">Please write your new task</p>
      )}
      {isModal && <TodoModal setIsModal={setIsModal} />}
    </>
  );
};
