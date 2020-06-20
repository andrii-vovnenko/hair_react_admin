import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import {selectSendingStatus} from "../../../../selectors";
import SpinnerComponent from "../../../Spinner";
import SellModalComponent from "./SellModalComponent";

const ConfirmSellModal = ({ sending }) => {
  const [showModal, setShowModal] = useState(false);

  const setSellButton = () => sending ? <SpinnerComponent />
    : (<Button variant='info' onClick={() => setShowModal(true)} >
        оформити продаж
      </Button>)

  return (
    <>
      {setSellButton()}
      {showModal &&
        <SellModalComponent
          showModal={showModal}
          modalClose={setShowModal}
        />}
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    sending: selectSendingStatus(state),
  }
};

export default connect(mapStateToProps)(ConfirmSellModal);
