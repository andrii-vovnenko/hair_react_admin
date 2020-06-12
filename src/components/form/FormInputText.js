import {FormControl, FormLabel} from "react-bootstrap";
import React from "react";
import WrapInput from "./WrapInput";

const FormInputText = ({ title, onChange, value, disabled = false }) => (
  <>
    <FormLabel>{ title }</FormLabel>
    <WrapInput>
      <FormControl
        onChange={(e) => onChange(e.target.value)}
        type='text'
        value={value}
        disabled={disabled}
      />
    </WrapInput>
  </>
);

export default FormInputText
