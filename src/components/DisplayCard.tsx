import { Card, Button, Row } from "antd";
import { useState } from "react";
import Eye from "../assets/Eye.svg?react";
import LogoBig from "../assets/logoBig.svg?react";
import Visa from "../assets/visa.svg?react";
import { DisplayCardProps } from "../interfaces";
const DisplayCard = (props: DisplayCardProps) => {
  const [showNumber, setShowNumber] = useState<boolean>(false);
  const toggleNumber = (): void => {
    setShowNumber(!showNumber);
  };
  const generateNumberString = (
    numberStr: string,
    isHidden: boolean
  ): string => {
    return (
      (isHidden
        ? numberStr.substring(0, 12).replace(/(\d{4}(?!\s))/g, "$1 ")
        : "**** **** ****") +
      " " +
      numberStr.substring(numberStr.length - 4, numberStr.length)
    );
  };
  const generateCVV = (numberStr: string, isHidden: boolean): string => {
    return isHidden ? numberStr : "***";
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
        <Row>
          <Row className="display-card__content--exp">
            <span>Thru:</span>{" "}
            <span className="fw-bold ms-1">
              {props.cardDetails.expMonth}/{props.cardDetails.expYear}
            </span>
          </Row>
          <Row className="display-card__content--cvv ms-5">
            <span>CVV:</span>{" "}
            <span className="fw-bold ms-1">
              {generateCVV(String(props.cardDetails.cvv), !showNumber)}
            </span>
          </Row>
        </Row>

        {
          {
            VISA: <Visa className="display-card__content--brand mt-3" />,
            MASTERCARD: <Visa className="display-card__content--brand mt-3" />,
          }[props.cardDetails.brand]
        }
      </Card>
    </div>
  );
};

export default DisplayCard;
