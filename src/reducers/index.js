import colors from './colorReducer';
import loadState from './loadStateReducer';
import sendForm from './sendFormReducer';

const createRootReducer = () => ({
  colors,
  loadState,
  sendForm,
});

export default createRootReducer;
