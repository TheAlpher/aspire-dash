import { Fragment } from "react";
import { Row, Tag, Button, Tabs, Col } from "antd";
import AddBox from "../assets/AddBox.svg?react";
import type { TabsProps } from "antd";
import DisplayCard from "./DisplayCard";
import CardCarousel from "./CardCarousel";
import DetailPanels from "./DetailPanels";
import CardActions from "./CardActions";
const Home = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "My debit cards",
      children: (
        <Row gutter={[24, 36]} className="mx-0">
          <Col lg={12} md={24} sm={24}>
            <CardCarousel />
            <CardActions />
          </Col>{" "}
          <Col lg={12} md={24} sm={24}>
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
  return (
    <div className="home">
      <Row
        className="home__header pt-5"
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
          <Button className="home__header__right--add-btn" icon={<AddBox />}>
            New Card
          </Button>
        </div>
      </Row>

      <Tabs items={items} defaultActiveKey="1"></Tabs>
    </div>
  );
};
export default Home;
