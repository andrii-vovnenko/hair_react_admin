import {FormControl, FormLabel} from "react-bootstrap";
import React from "react";

const FormInputText = ({ title, onChange, value }) => (
  <>
    <FormLabel>{ title }</FormLabel>
    <FormControl
      onChange={(e) => onChange(e.target.value)}
      type='text'
      value={value}
    />
  </>
);

export default FormInputText
