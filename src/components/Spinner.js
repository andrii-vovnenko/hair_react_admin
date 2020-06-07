import styled from "styled-components";
import React from "react";
import {Spinner} from "react-bootstrap";

const SpinnerWrap = styled.div`
  position: relative;
  top: 20vh;
  left: 50vw;
`;

const SpinnerComponent = () => (
  <SpinnerWrap>
    <Spinner animation='border'/>
  </SpinnerWrap>
);

export default SpinnerComponent;
