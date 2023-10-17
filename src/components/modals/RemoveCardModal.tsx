import { Button, Form, Input, Modal, Select, Row, notification } from "antd";
import moment from "moment-timezone";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { nanoid } from "nanoid";
import { addCard, removeCard } from "../../store/features/cards";
import { useEffect } from "react";
import { getLast4 } from "../../utils/helpers";
interface RemoveCardModalProps {
  open: boolean;
  onCancel: () => void;
}
const RemoveCardModal = ({ open, onCancel }: RemoveCardModalProps) => {
  const [form] = Form.useForm();
  const { allCards, activeCardId } = useAppSelector((state) => state.cards);
  useEffect(() => {
    form.setFieldsValue({
      //brand: "VISA",
      expMonth: 12,
      expYear: moment().year() + (Math.floor(Math.random() * 12) + 1),
    });
  }, []);
  const dispatch = useAppDispatch();
  return (
    <Modal
      okText={"Confirm"}
      open={open}
      title="Remove "
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
