export interface CardDetailsInterface {
  cardNumber: string;
  expMonth: number;
  expYear: number;
  frozen: boolean;
  username: string;
  country: string;
  brand: string;
  cvv: number;
  id: string;
  transactions: CardTransactDetails[];
}
export interface DisplayCardProps {
  cardDetails: CardDetailsInterface;
}
export interface CardTransactDetails {
  id: string;
  mode: string; // charged / refund
  date: number;
  name: string;
  amount: number;
  currency: string;
  debit: boolean; // debit credit
  transactType: string; // merchant travel  food
}

export interface CardsStateInterface {
  allCards: Record<string, CardDetailsInterface>;
  activeCardId: string | null;
}
