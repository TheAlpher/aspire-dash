import { Fragment, useState } from "react";
import { Row, Tag, Button, Tabs, Col } from "antd";
import AddBox from "../assets/AddBox.svg?react";
import type { TabsProps } from "antd";
import DisplayCard from "./DisplayCard";
import CardCarousel from "./CardCarousel";
import DetailPanels from "./DetailPanels";
import CardActions from "./CardActions";
import NewCardModal from "./modals/NewCardModal";
const Home = () => {
  const [isAddModalOpen, setAddModal] = useState<boolean>(false);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "My debit cards",
      children: (
        <Row gutter={[24, 36]} className="mx-0">
          <Col lg={12} md={24} sm={24} xs={24} className="px-0">
            <CardCarousel />
            <CardActions />
          </Col>{" "}
          <Col lg={12} md={24} sm={24} xs={24}>
            <DetailPanels />
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "All company cards",
      children: "Content of Tab Pane 2",
    },
  ];
  const toggleAddModal = () => {
    setAddModal(!isAddModalOpen);
  };
  return (
    <div className="home">
      <Row
        className="home__header pt-5 px-2"
        justify={"space-between"}
        align={"middle"}
      >
        <div className="home__header__left">
          <p className="mb-1">Available balance</p>
          <Row align={"middle"}>
            <Tag className="home__header__left--tag" color="#01D167">
              S$
            </Tag>
            <span className="home__header__left--value fw-bold">3000</span>
          </Row>
        </div>
        <div className="home__header__right">
          <Button
            onClick={() => {
              toggleAddModal();
            }}
            className="home__header__right--add-btn"
            icon={<AddBox />}
          >
            New Card
          </Button>
        </div>
      </Row>
      <NewCardModal open={isAddModalOpen} onCancel={toggleAddModal} />
      <Tabs className="home__tabs" items={items} defaultActiveKey="1"></Tabs>
    </div>
  );
};
export default Home;
