import colors from './colorReducer';
import loadState from './loadStateReducer';
import sendForm from './sendFormReducer';
import models from './modelsReducer';
import status from './statusReducer';

const createRootReducer = () => ({
  colors,
  loadState,
  sendForm,
  models,
  status,
});

export default createRootReducer;
