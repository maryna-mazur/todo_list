import { FC, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { Todo } from "../types/Todo";

import { addTodo } from "../features/todosReducer";
import { InputField } from "./InputField";

export const AddTodoForm: FC = () => {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: 0,
    title: "",
    text: "",
    completed: false,
  });
  const [isError, setIsError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTodo.title || !newTodo.text) {
      setIsError(true);

      return;
    }

    dispatch(
      addTodo({
        ...newTodo,
        id: Date.now(),
      })
    );
    setNewTodo({ id: 0, title: "", text: "", completed: false });
    setIsError(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (field === "title") {
      setNewTodo({ ...newTodo, title: event.target.value });
    } else {
      setNewTodo({ ...newTodo, text: event.target.value });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputField
        label="Title:"
        value={newTodo.title}
        placeholder="Enter title"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, "title")
        }
        error={isError && !newTodo.title}
      />

      <InputField
        label="Description:"
        placeholder="Enter description"
        value={newTodo.text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, "text")
        }
        error={isError && !newTodo.text}
      />

      <button type="submit" className="button">
        Create
      </button>
    </form>
  );
};
