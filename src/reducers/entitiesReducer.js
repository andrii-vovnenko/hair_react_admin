import get from 'lodash/get';

export default (state = {}, action) => {
  const entities = get(action, ['payload', 'entities']);

  if (entities) {
    return { ...state, ...entities };
  }

  return state;
};
