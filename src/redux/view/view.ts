import { createSlice } from "@reduxjs/toolkit";
import { ViewTypes } from "../../types";

interface InitialState {
  type: ViewTypes | null;
}

const initial: InitialState = {
  type: null,
};

const viewSlice = createSlice({
  name: "viewType",
  initialState: initial,
  reducers: {
    setToMobile: (state) => {
      state.type = ViewTypes.MOBILE;
    },
    setToDesktop: (state) => {
      state.type = ViewTypes.DESKTOP;
    },
  },
});

export const { setToMobile, setToDesktop } = viewSlice.actions;

export const selectCurrentView = (state: {
  viewType: InitialState;
}): ViewTypes | null => state.viewType.type;

export default viewSlice.reducer;
