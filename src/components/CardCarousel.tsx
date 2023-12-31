import { useEffect } from "react";
import { CardDetailsInterface } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import DisplayCard from "./DisplayCard";
import { Carousel } from "antd";
import { changeActiveCard } from "../store/features/cards";
const CardCarousel = () => {
  const cardsState = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (Object.keys(cardsState.allCards).length) {
      // set first card as active if not already
      if (Object.keys(cardsState.allCards)[0] != cardsState.activeCardId) {
        dispatch(
          changeActiveCard({ cardId: Object.keys(cardsState.allCards)[0] })
        );
      }
    }
  }, []);
  return Object.keys(cardsState.allCards).length ? (
    <Carousel
      className="mb-5 mx-2"
      dots={{ className: "card-carousel--dots " }}
      afterChange={(val) => {
        dispatch(
          changeActiveCard({ cardId: Object.keys(cardsState.allCards)[val] })
        );
      }}
    >
      {Object.values(cardsState.allCards).map((card: CardDetailsInterface) => {
        return (
          <div key={card.id}>
            <DisplayCard cardDetails={card} />{" "}
          </div>
        );
      })}
    </Carousel>
  ) : (
    <p className="aspire-green-text text-center px-5 py-5 aspire-green-bg">
      No cards present
    </p>
  );
};

export default CardCarousel;
