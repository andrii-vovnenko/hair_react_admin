import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {selectColors, selectCurrentModel, selectCurrentModelColor} from "../../../selectors";
import FormComponent from "../../form/FormComponent";
import FormSelect from "../../form/FormSelect";
import FormInputText from "../../form/FormInputText";
import {LOAD_STATE, LOAD_STATE_FULFILLED} from "../../../constants/actionTypes";
import {sendFormAction} from "../../../actions/sendForm";
import {getModelAction} from "../../../actions/modelsActions";

const CreateModelColorComponent = ({
   colors, load, currentModelId, dispatch, selectedCount, selectedColorId,
}) => {
  const [colorId, setColorId] = useState(0);
  const [count, setCount] = useState('');

  useEffect(() => {
    if (selectedCount && selectedColorId) {
      setColorId(selectedColorId);
      setCount(String(selectedCount));
    }
  }, [selectedCount, selectedColorId])

  const changeCount = (value) => /[^\d-]/g.test(value) ? null : setCount(value);

  const handleSubmit = () => {
    dispatch({ type: LOAD_STATE })
    dispatch(sendFormAction({
      actionTo: 'addModelColor',
      body: {
        count: Number(count),
        colorId,
        modelId: currentModelId,
      },
    })).then(() => {
        dispatch(getModelAction({ modelId: currentModelId })).then(() => {
          dispatch({type: LOAD_STATE_FULFILLED});
        });
    });
  }

  const formElements = () => {
    const colorsMap = {};
    Object.keys(colors).forEach((key) => {
      colorsMap[key] = colors[key].colorName
    });
    return (
      <>
        <FormSelect
          value={colorId}
          onChange={setColorId}
          title='Колір'
          items={colorsMap}
        />
        <FormInputText
          onChange={changeCount}
          value={count}
          title='К-сть'
        />
    </>
    )
  };

  return (
    <>
      <FormComponent
        elements={formElements}
        submit={handleSubmit}
        submitBtnText='Додати'
      />
    </>
  )
};

const mapStateToProps = (state) => {
  const model = selectCurrentModel(state) || {};
  const currentModelColor = selectCurrentModelColor(state);
  return {
    colors: selectColors(state),
    currentModelId: model.modelId,
    selectedColorId: currentModelColor.colorId,
    selectedCount: currentModelColor.count,
  };
};

export default connect(mapStateToProps)(CreateModelColorComponent);
