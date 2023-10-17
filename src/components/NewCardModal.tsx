import { Button, Form, Input, Modal, Select, Row, notification } from "antd";
import moment from "moment-timezone";
import { useAppDispatch } from "../store/hooks";
import { nanoid } from "nanoid";
import { addCard } from "../store/features/cards";
interface NewCardModalProps {
  open: boolean;
  onCancel: () => void;
}
const NewCardModal = ({ open, onCancel }: NewCardModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <Modal
      open={open}
      title="Add new card"
      footer={[null]}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form
        className="mt-4"
        layout="vertical"
        onFinish={(values: any) => {
          console.log("values", values);
          if (values.username.trim().length) {
            const cardDetails = {
              id: nanoid(),
              ...values,
              transactions: [],
              gpay: false,
              frozen: false,
            };
            dispatch(addCard({ cardDetails }));
            notification.success({ message: "New card added successfully" });
            onCancel();
          } else {
            notification.error({ message: "Please enter valid card details" });
          }
        }}
        initialValues={{
          brand: "VISA",
        }}
      >
        <Form.Item
          name="cardNumber"
          label="Card number (16 digits)"
          rules={[
            {
              required: true,
              pattern: /^\d{16}$/,
              message: "Please enter a valid 16 digit card number ",
            },
          ]}
        >
          <Input placeholder="Please enter 16 digit card number" />
        </Form.Item>{" "}
        <Form.Item
          name="expMonth"
          label="Expiry Month"
          rules={[
            {
              required: true,
              message: "Expiry month is required",
            },
          ]}
        >
          <Input type="number" max={12} min={1} />
        </Form.Item>
        <Form.Item
          name="expYear"
          label="Expiry Year"
          rules={[
            {
              required: true,
              message: "Expiry year is required",
            },
          ]}
        >
          <Input type="number" min={moment().year()} />
        </Form.Item>
        <Form.Item
          name="username"
          label="Card owner"
          rules={[
            {
              required: true,
              message: "Please enter a valid username",
            },
          ]}
        >
          <Input placeholder="Please enter card holder name" />
        </Form.Item>{" "}
        <Form.Item
          name="cvv"
          label="3 digit CVV"
          rules={[
            {
              required: true,
              pattern: /^\d{3}$/,
              message: "Please enter a valid 3 digit CVV",
            },
          ]}
        >
          <Input type="tel" placeholder="3 digit CVV" />
        </Form.Item>{" "}
        <Form.Item
          name="brand"
          label="Card Brand"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Please select a card brand"
            options={[{ label: "Visa", value: "VISA" }]}
          />
        </Form.Item>{" "}
        <Form.Item>
          <Row justify="center">
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="aspire-green-bg aspire-green-text"
            >
              Add Card
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewCardModal;
