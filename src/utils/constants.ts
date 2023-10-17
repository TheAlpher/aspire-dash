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
    country: "USA",
    brand: "VISA",
    cvv: 102,
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
  card2: {
    id: "card2",
    cardNumber: "1234509876123456",
    expMonth: 3,
    expYear: 2039,
    frozen: false,
    username: "Joawwdn Doe",
    country: "USA",
    brand: "VISA",
    cvv: 112,
    transactions: [],
  },
};

export const INIT_CARDS_STATE: CardsStateInterface = {
  allCards: INIT_CARDS,
  activeCardId: null,
};

export const CARD_ACTIONS: Record<string, any>[] = [
  {
    label: "Freeze Card",
    key: "freeze",
    icon: freezeSvg,
  },
  {
    label: "Set spend limit",
    key: "spendlimit",
    icon: spendLimitSvg,
  },
  {
    label: "Add to Gpay",
    key: "gpay",
    icon: GPaySvg,
  },
  {
    label: "Replace Card",
    key: "replace",
    icon: replaceSvg,
  },
  {
    label: "Cancel Card",
    key: "cancel",
    icon: deacttivateSvg,
  },
];
