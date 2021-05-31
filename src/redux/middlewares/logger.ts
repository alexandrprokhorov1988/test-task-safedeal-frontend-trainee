export const logger = (store: any) => (next: any) => (action: any) => {
  console.log('will dispatch action', action);
  const returnValue = next(action);
  console.log('state after dispatch', store.getState());
  return returnValue;
};

