import { createSlice } from "@reduxjs/toolkit";
import { CardDetailsInterface, CardsStateInterface } from "../../../interfaces";
import { INIT_CARDS, INIT_CARDS_STATE } from "../../../utils/constants";

const cardSlice = createSlice({
  name: "cards",
  initialState: INIT_CARDS_STATE,
  reducers: {
    addCard: (state, action) => {
      return {
        ...state,
        cards: {
          ...state.allCards,
          [action.payload.cardDetails.id]: action.payload.cardDetails,
        },
      };
    },
    updateCard: (state, action) => {
       
      return {
        ...state,
        cards: {
          ...state.allCards,
          [action.payload.cardId]: {
            ...state["allCards"][action.payload.cardId],
            ...action.payload.cardDetails,
          },
        },
      };
    },
    freezeToggle: (state, action) => {
      return {
        ...state,
        allCards: {
          ...state.allCards,
          [action.payload.cardId]: {
            ...state["allCards"][action.payload.cardId],
            frozen: !state["allCards"][action.payload.cardId].frozen,
          },
        },
      };
    },
    removeCard: (state, action) => {
      const oldCards: Record<string, CardDetailsInterface> = {
        ...state.allCards,
      };
      delete oldCards[action.payload.cardId];
      if (state.activeCardId == action.payload.cardId) {
        return {
          ...state,
          allCards: oldCards,
          activeCardId: null,
        };
      } else
        return {
          ...state,
          allCards: oldCards,
        };
    },
    changeActiveCard: (state, action) => {
      return { ...state, activeCardId: action.payload.cardId };
    },
  },
});

export const {
  addCard,
  updateCard,
  freezeToggle,
  removeCard,
  changeActiveCard,
} = cardSlice.actions;
export default cardSlice.reducer;
