import colors from './colorReducer';
import loadState from './loadStateReducer';
import sendForm from './sendFormReducer';
import models from './modelsReducer';

const createRootReducer = () => ({
  colors,
  loadState,
  sendForm,
  models,
});

export default createRootReducer;
