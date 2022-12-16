import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalTypes } from "../../types";

interface InitialState {
  open: boolean;
  type: ModalTypes;
  confirmTitle: string;
  confirmMessage: string;
  confirmButtonMessage: string;
  confirmedAction: boolean;
}

const initial: InitialState = {
  open: false,
  type: ModalTypes.LOGOUT,
  confirmTitle: "",
  confirmMessage: "",
  confirmButtonMessage: "",
  confirmedAction: false,
};

const modal = createSlice({
  name: "modal",
  initialState: initial,
  reducers: {
    openModal: (state, action: PayloadAction<InitialState>) => {
      state.open = true;
      state.type = action.payload.type;
      state.confirmButtonMessage = action.payload.confirmButtonMessage;
      state.confirmTitle = action.payload.confirmTitle;
      state.confirmMessage = action.payload.confirmMessage;
      state.confirmedAction = action.payload.confirmedAction;
    },
    closeModal: (state) => {
      state.open = false;
      state.type = ModalTypes.LOGOUT;
      state.confirmMessage = "";
      state.confirmTitle = "";
      state.confirmButtonMessage = "";
      state.confirmedAction = false;
    },
    confirmAction: (state) => {
      state.confirmedAction = true;
    },
  },
});

export const { openModal, closeModal, confirmAction } = modal.actions;

export const selectConfirmedAction = (state: {
  modal: InitialState;
}): boolean => state.modal.confirmedAction;

export default modal.reducer;
