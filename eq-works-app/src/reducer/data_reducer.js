export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const dataReducer = (state, { type }) => {
  switch (type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
};

export default dataReducer;
