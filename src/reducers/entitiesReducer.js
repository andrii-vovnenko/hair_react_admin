import get from 'lodash/get';

export default (state = {}, action) => {
  const entities = get(action, ['payload', 'entities']);
  if (entities) {
    console.log('entities:', { ...state, ...entities })
    return { ...state, ...entities };
  }

  return state;
};
