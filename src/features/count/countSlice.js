const initialState = {
  value: 0,
  status: "idle",
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/countBin2Dec": {
      const inputReversedArr = action.payload.split("").reverse();
      const reducer = (acumulator, currentVal, index) => {
        if (currentVal === "1" && acumulator === 0) {
          return 1;
        } else if (currentVal === "1") {
          console.log(acumulator);
          return index ** 2 + acumulator;
        }
      };
      return {
        ...state,
        value: inputReversedArr.reduce(reducer),
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
