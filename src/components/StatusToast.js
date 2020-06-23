import React, {useEffect} from 'react';
import { Toast, ToastBody } from 'react-bootstrap';
import { connect } from 'react-redux';
import {selectStatus} from "../selectors";
import {CLEAR_STATUS} from "../constants/actionTypes";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 200px;
`;

const StatusString = styled.span`
  color: green;
  font-size: 1.5rem;
`

const StatusToast = ({ status, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: CLEAR_STATUS });
    }, 3000);
  }, [status]);

  return (
    status &&
      <Wrap>
        <Toast animation>
          <ToastBody>
            <StatusString>{status}</StatusString>
          </ToastBody>
        </Toast>
      </Wrap>
  )
};

const mapStateToProps = (state) => {
  return {
    status: selectStatus(state),
  }
};

export default connect(mapStateToProps)(StatusToast);
