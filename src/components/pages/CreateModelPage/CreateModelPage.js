import React, {useState} from 'react';
import materialNames from '../../../constants/material/materialNames';
import hairTypeNames from '../../../constants/hairTypes/hairTypeNames';
import producerNames from '../../../constants/producer/producerNames';
import {Col, Row} from "react-bootstrap";
import FormComponent from '../../../components/form/FormComponent';
import FormSelect from '../../form/FormSelect';
import FormInputText from '../../form/FormInputText';
import {sendFormAction} from '../../../actions/sendForm';
import { selectLoadState } from '../../../selectors';
import { LOAD_STATE, LOAD_STATE_FULFILLED } from '../../../constants/actionTypes';
import {connect} from "react-redux";
import SpinnerComponent from "../../Spinner";

const setupLength = () => {
  const lengths = [];
  let l = 0;
  while (l <= 80) {
    lengths.push(l);
    l+=5;
  }
  return lengths;
};

const CreateModelPage = ({ dispatch, load }) => {
  const [modelName, setModelName] = useState('');
  const [price, setPrice] = useState('');
  const [length, setLength] = useState(undefined);
  const [producer, setProducer] = useState(undefined);
  const [materialId, setMaterialId] = useState(undefined);
  const [typeId, setTypeId] = useState(undefined);

  const changePrice = (value) => /[^\d]/g.test(value) ? null : setPrice(value);

  const handleSubmit = () => {
    dispatch({ type: LOAD_STATE })
    dispatch(sendFormAction({
      actionTo: 'addModel',
      body: {
        modelName,
        price,
        length,
        producer,
        materialId,
        typeId,
      },
    })).then(() => dispatch({ type: LOAD_STATE_FULFILLED }));
  }

  const formElements = () => (
    <>
      <Row>
        <Col>
          <FormInputText
            onChange={setModelName}
            title="Ім'я моделі"
            value={modelName}
          />
        </Col>
        <Col>
          <FormInputText
            onChange={changePrice}
            title='Ціна'
            value={price}
          />
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <FormSelect
            onChange={setProducer}
            title='Виробник'
            isEmptyFirst={true}
            items={producerNames}
          />
        </Col>
        <Col md='6'>
          <FormSelect
            items={materialNames}
            isEmptyFirst={true}
            onChange={setMaterialId}
            title='Матеріал'
          />
        </Col>
        <Col>
          <FormSelect
            onChange={setLength}
            items={setupLength()}
            title='Довжина'
          />
        </Col>
        <Col>
          <FormSelect
            title='Тип'
            items={hairTypeNames}
            onChange={setTypeId}
            isEmptyFirst={true}
          />
        </Col>
      </Row>
    </>
  )

  return (
    <>
      { load ? <SpinnerComponent/> :
        (<FormComponent
        elements={formElements}
        submit={handleSubmit}
        submitBtnText='Создать'
      />)
      }
    </>
  )
};

const mapStateToProps = (state) => ({
  load: selectLoadState(state),
});

export default connect(mapStateToProps)(CreateModelPage);
