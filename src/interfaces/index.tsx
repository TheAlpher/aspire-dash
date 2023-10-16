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
}
export interface DisplayCardProps {
  cardDetails: CardDetailsInterface;
}
