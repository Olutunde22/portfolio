import { combineReducers } from "@reduxjs/toolkit";
import toastReducer from "./toast/toast";
import sidebarReducer from "./sidebar/sidebar";
import viewTypeReducer from "./view/view";
import modalReducer from "./modal/modal";

export const rootReducer = combineReducers({
  toast: toastReducer,
  sideBar: sidebarReducer,
  viewType: viewTypeReducer,
  modal: modalReducer,
});
