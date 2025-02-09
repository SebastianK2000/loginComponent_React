import { useState } from "react";
import "../../style/formInput.css";

const FormInput = (props: any) => {

  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
      {...inputProps} 
      onChange={onChange}
      onBlur={handleFocus}
      onFocus={() => 
        inputProps.name === "confirmPassword" && setFocused(true)
      }
      focused={focused.toString()}
      />
      <span className="span-for-input">{errorMessage}</span>
    </div>
  );
};

export default FormInput;