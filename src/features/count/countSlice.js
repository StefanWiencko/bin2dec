const initialState = {
  value: 0,
  status: "idle",
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/countBin2Dec": {
      return {
        ...state,
        value: parseInt(action.payload, 2),
      };
    }

    default:
      return state;
  }
};

export const countBin2Dec = (number) => ({
  type: "count/countBin2Dec",
  payload: number,
});
export const decimalValueSelector = (state) => state.value;
