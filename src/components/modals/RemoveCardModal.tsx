import { Modal, notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeCard } from "../../store/features/cards";
import { getLast4 } from "../../utils/helpers";
interface RemoveCardModalProps {
  open: boolean;
  onCancel: () => void;
}
const RemoveCardModal = ({ open, onCancel }: RemoveCardModalProps) => {
  const { allCards, activeCardId } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  return (
    <Modal
      okText={"Confirm"}
      open={open}
      title="Remove card"
      okButtonProps={{ className: "aspire-green-bg aspire-green-text" }}
      onCancel={onCancel}
      onOk={() => {
        dispatch(removeCard({ cardId: activeCardId }));
        notification.success({
          message: `Card ending with ${getLast4(
            allCards[activeCardId as string]["cardNumber"]
          )} successfully  removed`,
        });
        onCancel();
      }}
      destroyOnClose
    >
      <p className="fw-bold">
        {" "}
        {`Are you sure you want to remove the card ending with ${getLast4(
          allCards[activeCardId as string]["cardNumber"]
        )} ?`}
      </p>
    </Modal>
  );
};

export default RemoveCardModal;
