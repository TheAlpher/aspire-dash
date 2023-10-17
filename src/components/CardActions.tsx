import { Col, Row } from "antd";
import { CARD_ACTIONS } from "../utils/constants";

const CardActions = () => {
  return (
    <Row className=" p-3 card-actions" justify={"space-evenly"}>
      {CARD_ACTIONS.map((action: Record<string, any>) => (
        <Col
          key={action.key}
          className="cursor-pointer d-flex  align-items-center flex-column "
          lg={4}
          sm={4}
        >
          <action.icon />
          <p className="mb-0 mt-1 fw-bold text-center">{action.label}</p>
        </Col>
      ))}
    </Row>
  );
};

export default CardActions;
