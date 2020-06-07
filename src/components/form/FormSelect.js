import {FormControl, FormLabel} from "react-bootstrap";
import {selectOptionsFromObject} from "../../helpers";
import React from "react";

const FormSelect = ({ title, onChange, isEmptyFirst = false, items }) => (
  <>
    <FormLabel>{title}</FormLabel>
    <FormControl
      as='select'
      custom
      onChange={(e) => onChange(e.target.value)}
    >
      {isEmptyFirst ? <option value={0}/> : null}
      {selectOptionsFromObject(items)}
    </FormControl>
  </>
)

export default FormSelect;
