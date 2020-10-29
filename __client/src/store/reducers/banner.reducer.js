const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BANNER_API':
      return action.payload;
    default:
      return state;
  }
};
