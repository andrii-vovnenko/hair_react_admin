import React from "react";

export const selectOptionsFromObject = (param) => param instanceof Array ?
  param.map((v, i) => <option key={i}>{v}</option>)
  : Object.entries(param)
  .map(([id, name]) => <option key={id} value={id}>{name}</option>);

export const setupLengthIntoSelect = () => {
  const lengths = [];
  let l = 0;
  while (l <= 80) {
    lengths.push(l);
    l+=5;
  }
  return lengths;
};
