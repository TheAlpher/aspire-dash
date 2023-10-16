import { Collapse, Row, Col } from "antd";
import type { CollapseProps } from "antd";
import CardDetailsSvg from "../assets/CardDetails.svg?react";
import TransactSvg from "../assets/transact.svg?react";
import { useAppSelector } from "../store/hooks";
import { generateNumberString } from "../utils/helpers";
import { CardTransactDetails } from "../interfaces";
import TransactionCard from "./TransactionCard";
import { useEffect } from "react";

const DetailPanels = () => {
  const { activeCardId, allCards } = useAppSelector((state) => state.cards);
  useEffect(() => {
    console.log(" card active changed", activeCardId);
  }, [activeCardId]);
  const items: CollapseProps["items"] = activeCardId
    ? [
        {
          key: "1",
          label: (
            <Row>
              <CardDetailsSvg className="me-2" />{" "}
              <span className="fw-bold">Card details</span>{" "}
            </Row>
          ),

          children: (
            <div>
              <Row>
                <Col lg={12} sm={12} className="fw-bold">
                  Card Number:
                </Col>
                <Col lg={12} sm={12}>
                  {generateNumberString(
                    allCards[activeCardId as string]["cardNumber"],
                    true
                  )}
                </Col>{" "}
                <Col lg={12} sm={12} className="fw-bold">
                  Card Holder:
                </Col>
                <Col lg={12} sm={12}>
                  {" "}
                  {allCards[activeCardId as string]["username"]}
                </Col>{" "}
                <Col lg={12} sm={12} className="fw-bold">
                  Expiry Details:
                </Col>
                <Col lg={12} sm={12}>
                  {" "}
                  {allCards[activeCardId as string]["expMonth"]}
                  {"/"}
                  {allCards[activeCardId as string]["expYear"]}
                </Col>{" "}
                <Col lg={12} sm={12} className="fw-bold">
                  CVV:
                </Col>
                <Col lg={12} sm={12}>
                  {" "}
                  {allCards[activeCardId as string]["cvv"]}
                </Col>
              </Row>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <Row>
              <TransactSvg className="me-2" />{" "}
              <span className="fw-bold">Recent transactions</span>{" "}
            </Row>
          ),
          children: allCards[activeCardId as string]["transactions"].length ? (
            <div>
              {allCards[activeCardId as string]["transactions"].map(
                (transac: CardTransactDetails) => (
                  <TransactionCard key={transac.id} transaction={transac} />
                )
              )}
              <Row className="px-2  py-3">
                <span>View all transactions</span>
              </Row>
            </div>
          ) : (
            <p className="aspire-green-text px-2 py-2">No transactions</p>
          ),
        },
      ]
    : [];
  return activeCardId ? (
    <Collapse expandIconPosition="end" items={items} defaultActiveKey={["1"]} />
  ) : (
    <p className="aspire-green-text px-2 py-2">No active cards</p>
  );
};

export default DetailPanels;
