import colors from './colorReducer';
import loadState from './loadStateReducer';
import sendForm from './sendFormReducer';
import models from './modelsReducer';
import status from './statusReducer';
import currentModel from './currentModelReducer';

const createRootReducer = () => ({
  colors,
  loadState,
  sendForm,
  models,
  status,
  currentModel,
});

export default createRootReducer;
