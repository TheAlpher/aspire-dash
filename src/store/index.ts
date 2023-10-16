import { combineReducers } from "redux";
import cardReducer from "./features/cards";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  cards: cardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
