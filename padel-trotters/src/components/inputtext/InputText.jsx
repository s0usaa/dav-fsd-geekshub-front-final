import React from "react";
import Form from "react-bootstrap";
import './InputText.css';

export const InputText = ({
  className,
  type,
  name,
  placeholder,
  required,
  changeFunction,
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
        changeFunction={changeFunction}
        maxLength={maxLength}
      />
    </>
  );
};
