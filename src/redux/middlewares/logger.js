export const logger = (store) => (next) => (action) => {
  console.log('will dispatch action', action);
  const returnValue = next(action);
  console.log('state after dispatch', store.getState());
  return returnValue;
};

