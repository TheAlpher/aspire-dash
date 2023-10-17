import { useState, useEffect, Fragment } from "react";
import { Row, Tag, Button, Tabs, Col, Skeleton } from "antd";
import AddBox from "../assets/AddBox.svg?react";
import type { TabsProps } from "antd";
import CardCarousel from "../components/CardCarousel";
import DetailPanels from "../components/DetailPanels";
import CardActions from "../components/CardActions";
import NewCardModal from "../components/modals/NewCardModal";
import LogoSmall from "../assets/logoSmall.svg?react";
import { getUserDetails } from "../services/actions";
import { useAppDispatch } from "../store/hooks";
import { addMultiple } from "../store/features/cards";
import { INIT_CARDS } from "../utils/constants";
const Home = () => {
  const [isAddModalOpen, setAddModal] = useState<boolean>(false);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [detailsLoaded, setDetailsLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "My debit cards",
      children: (
        <Row gutter={[24, 36]} className="mx-0">
          <Col lg={12} md={24} sm={24} xs={24} className="px-0">
            {!detailsLoaded ? (
              <Fragment>
                <Skeleton /> <Skeleton />
              </Fragment>
            ) : (
              <Fragment>
                <CardCarousel />
                <CardActions />
              </Fragment>
            )}
          </Col>{" "}
          <Col lg={12} md={24} sm={24} xs={24}>
            {!detailsLoaded ? <Skeleton /> : <DetailPanels />}
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "All company cards",
      children: (
        <p className="aspire-green-text text-center fw-bold px-5 py-5">
          Coming soon!
        </p>
      ),
    },
  ];
  const toggleAddModal = () => {
    setAddModal(!isAddModalOpen);
  };

  useEffect(() => {
    fetchUserCards();
  }, []);
  const fetchUserCards = () => {
    getUserDetails()
      .then((res: any) => {
        /***
         *Only Mocked so will fail everytime
         */
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        dispatch(addMultiple({ cards: INIT_CARDS }));
        setUserBalance(3000);
      })
      .finally(() => {
        /**
         * Inentional Delay to imitate Api Response
         */
        setTimeout(() => {
          setDetailsLoaded(true);
        }, 300);
      });
  };
  return (
    <div className="home">
      <Row justify={"end"} className="home__mobile-logo pe-3">
        {" "}
        <LogoSmall />
      </Row>
      <Row
        className="home__header px-2"
        justify={"space-between"}
        align={"middle"}
      >
        <div className="home__header__left">
          <p className="mb-1">Available balance</p>
          <Row align={"middle"}>
            <Tag className="home__header__left--tag" color="#01D167">
              S$
            </Tag>
            {detailsLoaded ? (
              <span className="home__header__left--value fw-bold">
                {userBalance}
              </span>
            ) : (
              <Skeleton.Input />
            )}
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
