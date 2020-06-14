import colors from './colorReducer';
import loadState from './loadStateReducer';
import sendForm from './sendFormReducer';
import models from './modelsReducer';
import status from './statusReducer';
import currentModel from './currentModelReducer';
import entities from './entitiesReducer';
import currentModelColor from './currentModelColorReducer';

const createRootReducer = () => ({
  colors,
  loadState,
  sendForm,
  models,
  status,
  currentModel,
  entities,
  currentModelColor,
});

export default createRootReducer;
