import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  isMobileDevice: boolean;
}

const initialState: IinitialState = {
  isMobileDevice: false,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setIsMobileDevice: (state, action: PayloadAction<IinitialState>) => {
      const { isMobileDevice } = action.payload;
      state.isMobileDevice = isMobileDevice;
    },
  },
});

export const { setIsMobileDevice } = utilsSlice.actions;
export default utilsSlice.reducer;
