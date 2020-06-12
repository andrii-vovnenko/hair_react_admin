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
import { setupLengthIntoSelect } from '../../../helpers';
import {getModelAction} from "../../../actions/modelsActions";

const CreateModelPage = ({ dispatch, load, model = {}, submitButtonText = 'Создать', withRefresh = false }) => {
  const [modelName, setModelName] = useState(model.modelName);
  const [price, setPrice] = useState(model.price);
  const [length, setLength] = useState(model.length);
  const [producer, setProducer] = useState(model.producer);
  const [materialId, setMaterialId] = useState(model.materialId);
  const [typeId, setTypeId] = useState(model.typeId);

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
    })).then(() => {
      if (withRefresh) {
        dispatch(getModelAction({ modelId: model.modelId })).then(() => {
          dispatch({type: LOAD_STATE_FULFILLED});
        });
      } else {
        dispatch({type: LOAD_STATE_FULFILLED});
      }
    });
  }

  const formElements = () => (
    <>
      <Row>
        <Col>
          <FormInputText
            onChange={setModelName}
            title="Ім'я моделі"
            value={modelName}
            disabled={!!model}
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
            items={producerNames}
            defaultValue={producer}
          />
        </Col>
        <Col md='6'>
          <FormSelect
            items={materialNames}
            onChange={setMaterialId}
            title='Матеріал'
            defaultValue={materialId}
          />
        </Col>
        <Col>
          <FormSelect
            onChange={setLength}
            items={setupLengthIntoSelect()}
            title='Довжина'
            defaultValue={length}
          />
        </Col>
        <Col>
          <FormSelect
            title='Тип'
            items={hairTypeNames}
            onChange={setTypeId}
            defaultValue={typeId}
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
          submitBtnText={submitButtonText}
        />)
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    load: selectLoadState(state),
  }
};

export default connect(mapStateToProps)(CreateModelPage);
