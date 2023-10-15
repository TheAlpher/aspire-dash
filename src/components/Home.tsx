import { Fragment } from "react";
import {Row, Tag , Button} from 'antd';
import AddBox from '../assets/AddBox.svg?react'
const Home = () => {
  return <div className="home">
<Row className="home__header pt-5" justify={'space-between'} align={'middle'}>
  <div className="home__header__left">
    <p className="mb-1">Available balance</p>
    <Row align={'middle'}> <Tag className="home__header__left--tag" color="#01D167">S$</Tag> <span className="home__header__left--value fw-bold">3000</span></Row>
  </div>
  <div className="home__header__right"> <Button className="home__header__right--add-btn" icon={<AddBox />}> New Card</Button></div>
</Row>
  </div>;
};
export default Home;
