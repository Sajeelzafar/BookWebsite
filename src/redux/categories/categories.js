export const status = () => ({ type: 'STATUS_CHECKED' });

const statusHandler = (state = 'NOT_CHECKED', action) => {
  if (action.type === 'STATUS_CHECKED') {
    return 'UNDER CONSTRUCTION';
  }
  return state;
};

export default statusHandler;
