import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationType, Notify } from "../../types";

const initial: Notify = {
  messageType: NotificationType.success,
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState: initial,
  reducers: {
    showToast: (state, action: PayloadAction<Notify>) => {
      state.message = action.payload.message;
      state.messageType = action.payload.messageType;
      state.buttonText = action.payload.buttonText;
      state.onClick = action.payload.onClick;
    },
    removeToast: (state) => {
      state.message = "";
      state.messageType = null;
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
