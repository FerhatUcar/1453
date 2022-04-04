import React, { ChangeEventHandler, FC } from "react";
import { StyledBoxCheck } from "./CheckboxStyle";

type CheckboxType = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  checked?: boolean | undefined;
};

const Checkbox: FC<CheckboxType> = ({ onChange, checked, text }) => (
  <StyledBoxCheck>
    <div>
      <input
        onChange={onChange}
        checked={checked && checked}
        type="checkbox"
        id="check"
        name="check"
        value=""
      />
      <label htmlFor="check">
        <span /> {text}
      </label>
    </div>
  </StyledBoxCheck>
);

export default Checkbox;
