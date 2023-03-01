import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeSelectedTodo } from "../features/selectedTodoReducer";
import { toggleTodo } from "../features/todosReducer";

type Props = {
  setIsModal: (isModal: boolean) => void;
}

export const TodoModal: FC<Props> = ({ setIsModal }) => {
  const selectedTodo = useAppSelector((state) => state.selectedTodo);
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <section className="modal__content">
        <h3 className="modal__title">{selectedTodo?.title}</h3>
        <h5 className="modal__subtitle">Description:</h5>
        <p className="modal__text">{selectedTodo?.text}</p>
        <label>
          Status:{" "}
          <input
            type="checkbox"
            name="status"
            className="modal__checkbox"
            defaultChecked={selectedTodo?.completed}
            onClick={() => dispatch(toggleTodo(selectedTodo?.id as number))}
          />
        </label>
        <button
          className="button modal__button"
          onClick={() => {
            dispatch(removeSelectedTodo());
            setIsModal(false);
          }}
        >
          Close
        </button>
      </section>
    </div>
  );
};
