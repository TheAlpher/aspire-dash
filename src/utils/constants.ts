import { CardDetailsInterface, CardsStateInterface } from "../interfaces";

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
