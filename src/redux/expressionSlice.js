import { createSlice } from "@reduxjs/toolkit";

const expressionSlice = createSlice({
  name: "expression",
  initialState: {
    result: 0,
  },
  reducers: {
    evaluateExpression(state, action) {
    try {
      state.result = eval(action.payload); 
    } catch (error) {
      state.result = "Invalid expression"; 
    }
  },
    reset(state) {
      state.result = 0;
    },
  }
  
});
export default expressionSlice.reducer;

export const { evaluateExpression, reset } = expressionSlice.actions;
