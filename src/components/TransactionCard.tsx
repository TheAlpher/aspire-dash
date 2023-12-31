import { Row, Col } from "antd";
import { ReactNode } from "react";
import FlightsSvg from "../assets/flights.svg?react";
import MegaphoneSvg from "../assets/megaphone.svg?react";
import StorageSvg from "../assets/Storage.svg?react";
import CardSvg from "../assets/Card.svg?react";
import { CardTransactDetails } from "../interfaces";
import moment from "moment-timezone";
interface TransactionCardProps {
  transaction: CardTransactDetails;
}
const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const transactionTypeIcon = (typeStr: string): ReactNode => {
    switch (typeStr) {
      case "travel":
        return (
          <div className="transaction-card__icon-wrapper icon-travel px-3 py-3">
            <FlightsSvg />
          </div>
        );
      case "merchant":
        return (
          <div className="transaction-card__icon-wrapper icon-merchant px-3 py-3">
            <StorageSvg />
          </div>
        );
      case "food":
        return (
          <div className="transaction-card__icon-wrapper  icon-food px-3 py-3">
            <MegaphoneSvg />
          </div>
        );
      default:
        return (
          <div className="transaction-card__icon-wrapper  icon-default px-3 py-3">
            <StorageSvg />
          </div>
        );
    }
  };
  return (
    <Row
      className="transaction-card mb-3 px-2 mx-0 py-2"
      justify={"space-between"}
      gutter={[18, 12]}
    >
      <Col
        lg={4}
        sm={4}
        xs={4}
        className="px-0 d-flex justify-content-center align-items-center"
      >
        {transactionTypeIcon(transaction.transactType)}
      </Col>
      <Col lg={20} sm={20} xs={20}>
        <Row justify={"space-between"}>
          <Col>
            <p className="fw-bold mb-0">{transaction.name}</p>
            <span className="aspire-grey-text">
              {moment(transaction.date).format("DD MMM YY")}
            </span>
          </Col>{" "}
          <Col>
            <span
              className={
                transaction.debit ? "fw-bold " : "fw-bold aspire-green-text"
              }
            >
              {" "}
              {!transaction.debit ? "+" : "-"} {transaction.currency}{" "}
              {transaction.amount}
            </span>
          </Col>
        </Row>
        <Row className="transaction-card__status" align={"middle"}>
          <div className="transaction-card__status__icon ">
            {" "}
            <CardSvg />
          </div>{" "}
          <p className="mb-0 ms-2 aspire-blue-text">
            {transaction.debit ? "Charged" : "Refund"} on debit card
          </p>
        </Row>
      </Col>
    </Row>
  );
};

export default TransactionCard;
