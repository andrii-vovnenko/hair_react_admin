import React, {useEffect, useState} from "react";
import {getColorsAction} from "../../../../actions/colorsActionCreator";
import {getDynamicFormData} from "../../../../actions";
import {sendFormAction} from "../../../../actions/sendForm";
import FormInputText from "../../../form/FormInputText";
import FormSelect from "../../../form/FormSelect";
import ModalComponent from "../../../modals/ModalComponent";
import FormComponent from "../../../form/FormComponent";
import get from "lodash/get";
import keyBy from "lodash/keyBy";
import {connect} from "react-redux";
import {selectAllColors, selectDynamicFormDataLoad, selectDynamicFormDataModels} from "../../../../selectors";

const Datalist = ({ models }) => {
  if (!models) return null;
  return (
    <datalist id='data'>
      {models.map(
        ({modelName, modelId}) =>
          <option key={modelId} value={modelName}/>
      )
      }
    </datalist>
  )
};

const isValidModelName = () => {
  let lastName;
  let lastResult;
  return (modelName, models) => {
    if (!modelName || !models) return false;
    if (lastName === modelName) return lastResult;
    const model = get(keyBy(models, 'modelName'), [modelName]);
    lastResult = Boolean(model);
    return lastResult;
  }
};

const getAppropriateColors = ({ models, modelToSearch, colors }) => {
  if (!modelToSearch || !models) return '';
  const colorsMap = {};
  const modelColors = get(keyBy(models, 'modelName'), [modelToSearch, 'colors'], []);
  colors.filter(({ colorId }) => modelColors.includes(colorId)).forEach(({ colorName, colorId }) => colorsMap[colorId] = colorName)
  return colorsMap;
}

const SellModalComponent = ({ modalClose, models, dispatch, colors }) => {
  const [modelToSearch, setModelToSearch] = useState('');
  const [colorId, setColorId] = useState('');

  useEffect(() => {
    dispatch(getColorsAction());
  }, [])

  useEffect(() => {
    if (!modelToSearch) return;
    const timer = setTimeout(() => {
      dispatch(getDynamicFormData({ modelName: encodeURIComponent(modelToSearch) }))
    }, 500);
    return () => clearTimeout(timer);
  }, [modelToSearch])

  const setSell = async ({ modelName, colorId, models = [] }) => {
    const model = models.filter((item) => item.modelName === modelName);
    if (!modelName || !colorId || (model.length !== 1)) {
      console.log('not enought');
    }
    dispatch(sendFormAction({
      actionTo:'setSell',
      body: { modelId: model[0].modelId, colorId },
    }));
    modalClose(false);
    setModelToSearch('');
  };

  const formElements = () => {
    const appropriateColors = getAppropriateColors({ models, modelToSearch, colors });
    const isValidName = isValidModelName();
    return (
      <>
        <FormInputText
          title='Назва моделі'
          onChange={setModelToSearch}
          type='text'
          value={modelToSearch}
          list='data'
        />
        <Datalist models={models} />
        <FormSelect
          disabled={!isValidName(modelToSearch, models)}
          onChange={setColorId}
          title='Колір'
          items={appropriateColors}
        />
      </>
    )
  };

  return (
    <ModalComponent
      show={true}
      close={() => modalClose(false)}
      headerText='оформити продаж'
    >
      <FormComponent
        submit={() => setSell({ modelName: modelToSearch, colorId, models })}
        submitBtnText='продаж'
        elements={formElements}
      />
    </ModalComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    models: selectDynamicFormDataModels(state),
    load: selectDynamicFormDataLoad(state),
    colors: selectAllColors(state),
  };
};

export default connect(mapStateToProps)(SellModalComponent);
