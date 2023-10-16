import { createSlice } from "@reduxjs/toolkit";
import { CardDetailsInterface } from "../../../interfaces";

const cardSlice = createSlice({
  name: "cards",
  initialState: {} as Record<string, CardDetailsInterface>,
  reducers: {
    addCard: (state, action) => {
      return {
        ...state,
        [action.payload.cardDetails.id]: action.payload.cardDetails,
      };
    },
    updateCard: (state, action) => {
      return {
        ...state,
        [action.payload.cardId]: {
          ...state[action.payload.cardId],
          ...action.payload.cardDetails,
        },
      };
    },
    freezeToggle: (state, action) => {
      return {
        ...state,
        [action.payload.cardId]: {
          ...state[action.payload.cardId],
          frozne: !state[action.payload.cardId].frozen,
        },
      };
    },
    removeCard: (state, action) => {
      const originalState: Record<string, CardDetailsInterface> = { ...state };
      delete originalState[action.payload.cardId];
      return {
        ...originalState,
      };
    },
  },
});

export const { addCard, updateCard, freezeToggle, removeCard } =
  cardSlice.actions;
export default cardSlice.reducer;
