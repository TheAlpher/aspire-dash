import { CardDetailsInterface, CardsStateInterface } from "../interfaces";
import freezeSvg from "../assets/freezeCard.svg?react";
import deacttivateSvg from "../assets/deactivateCard.svg?react";
import replaceSvg from "../assets/replaceCard.svg?react";
import spendLimitSvg from "../assets/spendlimit.svg?react";
import GPaySvg from "../assets/GPay.svg?react";
export const INIT_CARDS: Record<string, CardDetailsInterface> = {
  card1: {
    id: "card1",
    cardNumber: "1234567890123456",
    expMonth: 3,
    expYear: 2029,
    frozen: false,
    username: "John Doe",
    brand: "VISA",
    cvv: 102,
    gpay: false,
    transactions: [
      {
        id: "trasn1",
        debit: true,
        mode: "charged",
        date: Date.now(),
        amount: 300,
        currency: "S$",
        transactType: "merchant",
        name: "Hamleys",
      },
      {
        id: "trasn2",
        debit: false,
        mode: "charged",
        date: Date.now(),
        amount: 200,
        currency: "S$",
        transactType: "travel",
        name: "Hamleys",
      },
    ],
  },
  card2: {
    id: "card2",
    cardNumber: "1234509876123646",
    expMonth: 3,
    expYear: 2039,
    frozen: false,
    username: "Joawwdn Doe",
    brand: "VISA",
    cvv: 112,
    gpay: false,
    transactions: [
      {
        id: "trasn3",
        debit: false,
        mode: "charged",
        date: Date.now(),
        amount: 12200,
        currency: "S$",
        transactType: "food",
        name: "Raneys",
      },
    ],
  },
};

export const INIT_CARDS_STATE: CardsStateInterface = {
  allCards: INIT_CARDS,
  activeCardId: null,
};

export const CARD_ACTIONS: Record<string, Record<string, any>> = {
  freeze: {
    label: "Freeze Card",
    key: "freeze",
    icon: freezeSvg,
  },
  spendlimit: {
    label: "Set spend limit",
    key: "spendlimit",
    icon: spendLimitSvg,
  },
  gpay: {
    label: "Add to Gpay",
    key: "gpay",
    icon: GPaySvg,
  },
  replace: {
    label: "Replace Card",
    key: "replace",
    icon: replaceSvg,
  },
  cancel: {
    label: "Cancel Card",
    key: "cancel",
    icon: deacttivateSvg,
  },
};
