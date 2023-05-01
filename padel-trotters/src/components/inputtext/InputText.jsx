import React from "react";
import Form from "react-bootstrap/Form";
import './InputText.css';

export const InputText = ({
  className,
  type,
  name,
  placeholder,
  required,
  changeFunction,
  blurFunction,
  maxLength,
}) => {
  return (
    <>
      <Form.Control
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e)=>changeFunction(e)}
        onBlur={(e)=>blurFunction(e)}
        maxLength={maxLength}
      />
    </>
  );
};
