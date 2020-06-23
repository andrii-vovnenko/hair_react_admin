import React, {useEffect, useState} from 'react';
import hairColorTypes from '../../../constants/hairColor/hairColorTypeNames';
import {FormGroup, FormLabel, FormControl, Col} from 'react-bootstrap';
import FormComponent from '../../../components/form/FormComponent';
import { addColorAction }  from '../../../actions/colorsActionCreator';
import {connect} from 'react-redux';
import ModalComponent from '../../../components/modals/ModalComponent';
import {selectOptionsFromObject} from '../../../helpers';
import {selectSendingStatus} from "../../../selectors";
import SpinnerComponent from "../../Spinner";


const CreateColorModal = ({
  addColor, isShowModal, closeModal, sending,
}) => {
  const [colorTypeId, setColorTypeId] = useState(undefined);
  const [colorName, setColorName] = useState('');

  const changeColorType = (e) => setColorTypeId(e.target.value);
  const changeColorName = (e) => setColorName(e.target.value);

  const handleSubmit = async () => {
    if (!colorTypeId || !colorName) return;
    addColor({colorTypeId, colorName});
  };

  useEffect(() => {
    if (!sending && (colorName && colorTypeId)) {
      setColorTypeId(undefined);
      setColorName('');
      closeModal();
    }
  }, [sending])

  const formElements = () => (
    <>
      <FormGroup>
        <FormLabel>Тип кольору</FormLabel>
        <FormControl size='sm' as='select' custom onChange={changeColorType} >
          <option value={0} >виберіть тип кольору</option>
          {selectOptionsFromObject(hairColorTypes)}
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Назва кольору</FormLabel>
        <FormControl size='sm' type='text' custom onChange={changeColorName} >
        </FormControl>
      </FormGroup>
    </>
  )

  return (
    <>
      <Col sm={3}>
        <ModalComponent
          headerText='Створення нового кольору'
          close={closeModal}
          show={isShowModal}
        >
          {
            sending ? <SpinnerComponent/> : (
              <FormComponent
                elements={formElements}
                submit={handleSubmit}
                submitBtnText='Додати'
              />
            )
          }
        </ModalComponent>
      </Col>
    </>
  )
};

const mapStateToProps = (state) => ({
  sending: selectSendingStatus(state),
})

const mapDispatchToProps = (dispatch) => ({
  addColor: ({ colorTypeId, colorName }) => dispatch(addColorAction({ colorName, colorTypeId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateColorModal);
