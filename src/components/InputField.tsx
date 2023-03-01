import { FC } from "react";
import classNames from "classnames";
import { MessageError } from "./MessageError";

type Props = {
  label: string;
  placeholder: string;
  error: boolean;
  value: string;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  
};

export const InputField: FC<Props> = ({
  label,
  placeholder,
  error,
  value,
  onChange,
}) => {
  return (
    <label>
      <p className="form__label-input">{label}</p>
      <input
        type="text"
        className={classNames("form__input", {
          "form__input--color--red": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
      />
      {error && <MessageError />}
    </label>
  );
};
