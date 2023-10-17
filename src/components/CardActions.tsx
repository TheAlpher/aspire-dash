import { Col, Row, notification } from "antd";
import { CARD_ACTIONS } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { freezeToggle, updateCard } from "../store/features/cards";
import { useState, Fragment } from "react";
import { getLast4 } from "../utils/helpers";
import RemoveCardModal from "./modals/RemoveCardModal";

const CardActions = () => {
  const { allCards, activeCardId } = useAppSelector((state) => state.cards);
  const [cancelModalOpen, setCancelModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const getActionsLabel = (str: string): string => {
    if (!activeCardId) {
      return CARD_ACTIONS[str].label;
    } else {
      switch (str) {
        case "freeze":
          return allCards[activeCardId].frozen
            ? "Unfreeze card"
            : "Freeze card";

        case "gpay":
          return allCards[activeCardId].gpay
            ? "Remove from GPay"
            : "Add to GPay";
        default:
          return CARD_ACTIONS[str].label;
      }
    }
  };
  const toggleCancelModal = () => {
    setCancelModalOpen(!cancelModalOpen);
  };
  return (
    <Fragment>
      <Row className=" p-3 px-2 card-actions" justify={"space-between"}>
        {Object.values(CARD_ACTIONS).map((action: Record<string, any>) => (
          <Col
            key={action.key}
            className="cursor-pointer d-flex  align-items-center flex-column "
            lg={4}
            sm={4}
            xs={4}
            onClick={() => {
              if (activeCardId) {
                switch (action.key) {
                  case "freeze":
                    dispatch(freezeToggle({ cardId: activeCardId }));
                    notification.success({
                      message: `Card ending with ${getLast4(
                        allCards[activeCardId]["cardNumber"]
                      )} successfully ${
                        allCards[activeCardId]["frozen"] ? "un" : ""
                      }frozen`,
                    });
                    break;
                  case "cancel":
                    toggleCancelModal();
                    break;
                  case "gpay":
                    dispatch(
                      updateCard({
                        cardId: activeCardId,
                        cardDetails: {
                          gpay: !allCards[activeCardId]["gpay"],
                        },
                      })
                    );
                    notification.success({
                      message: `Card ending with ${getLast4(
                        allCards[activeCardId]["cardNumber"]
                      )} successfully  ${
                        allCards[activeCardId]["gpay"]
                          ? "removed from"
                          : "added to"
                      } GPay`,
                    });
                    break;
                  default:
                    break;
                }
              }
            }}
          >
            <action.icon />
            <p className="mb-0 mt-1  text-center">
              {getActionsLabel(action.key)}
            </p>
          </Col>
        ))}
      </Row>
      {activeCardId && (
        <RemoveCardModal open={cancelModalOpen} onCancel={toggleCancelModal} />
      )}
    </Fragment>
  );
};

export default CardActions;
