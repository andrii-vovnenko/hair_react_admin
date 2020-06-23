import styled from "styled-components";
import React from "react";
import {Spinner} from "react-bootstrap";

const SpinnerWrap = styled.div`
  display: flex;
`;

const SpinnerComponent = () => (
  <SpinnerWrap>
    <Spinner animation='border'/>
  </SpinnerWrap>
);

export default SpinnerComponent;
