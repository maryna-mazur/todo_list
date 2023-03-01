import { FC } from "react";
import { useAppDispatch } from "../app/hooks";
import { addSelectedTodo } from "../features/selectedTodoReducer";
import { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  setIsModal: (isModal: boolean) => void;
};

export const TodoItem: FC<Props> = ({ todo, setIsModal }) => {
  const { id, title, text, completed } = todo;
  const dispatch = useAppDispatch();

  const handleTodoClick = () => {
    dispatch(addSelectedTodo(todo));
    setIsModal(true);
  };

  return (
    <tr className="todo-item" onClick={handleTodoClick}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{text}</td>
      <td>
      <input
          type="checkbox"
          checked={completed}
        />
      </td>
    </tr>
  );
};
