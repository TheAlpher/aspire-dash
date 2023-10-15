import { Card, Button } from "antd";
import { useState } from "react";
import Eye from "../assets/Eye.svg?react";
import LogoBig from "../assets/logoBig.svg?react";
interface CardDetailsInterface {
  cardNumber: String;
  expMonth: Number;
  expYear: Number;
  frozen: Boolean;
  username: String;
  country: String;
  brand: String;
}
interface DisplayCardProps {
  cardDetails: CardDetailsInterface;
}
const DisplayCard = (props: DisplayCardProps) => {
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const toggleNumber = (): void => {
    setShowNumber(!showNumber);
  };
  const generateNumberString = (
    numberStr: String,
    isHidden: Boolean
  ): String => {
    return (
      (isHidden
        ? numberStr.substring(0, 12).replace(/(\d{4}(?!\s))/g, "$1 ")
        : "**** **** ****") +
      " " +
      numberStr.substring(numberStr.length - 4, numberStr.length)
    );
  };
  return (
    <div className="display-card">
      <Button
        icon={<Eye />}
        onClick={toggleNumber}
        className="display-card__show-btn"
      >
        {showNumber ? "Hide" : "Show"} card number
      </Button>
      <Card className="display-card__content">
        <LogoBig className="display-card__content--company" />
        <p className="mt-4 display-card__content--username fw-bold">
          {props.cardDetails?.username}
        </p>
        <p className="mt-4 display-card__content--number ">
          {generateNumberString(props.cardDetails.cardNumber, !showNumber)}
        </p>
      </Card>
    </div>
  );
};

export default DisplayCard;
