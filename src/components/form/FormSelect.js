import {FormControl, FormLabel} from "react-bootstrap";
import {selectOptionsFromObject} from "../../helpers";
import React from "react";
import WrapInput from "./WrapInput";


const FormSelect = ({ title, onChange, isEmptyFirst = false, items, defaultValue }) => (
  <>
    <FormLabel>{title}</FormLabel>
    <WrapInput>
      <FormControl
        as='select'
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        {!defaultValue ? <option value={0}/> : null}
        {selectOptionsFromObject(items)}
      </FormControl>
    </WrapInput>
  </>
)

export default FormSelect;
