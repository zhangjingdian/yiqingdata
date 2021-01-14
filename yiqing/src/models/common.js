export default {
  namespace: 'common',
  state: {
    current: '1'
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  }
}