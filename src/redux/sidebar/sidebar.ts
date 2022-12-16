import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  open: boolean;
}

const initial: InitialState = {
  open: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: initial,
  reducers: {
    openSideBar: (state) => {
      state.open = true;
    },
    closeSideBar: (state) => {
      state.open = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;

export const selectSideBarState = (state: { sideBar: InitialState }): boolean =>
  state.sideBar.open;

export default sideBarSlice.reducer;
