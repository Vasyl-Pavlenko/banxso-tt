import { useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import './RocketCardsSliderNav.scss';
import { LeftArrow, RightArrow } from '../Icons';

type ActionFunction = (swiper: SwiperType) => void;

interface Arrow {
  id: number;
  icon: JSX.Element;
  action: ActionFunction;
  ariaLabel?: string;
}

const ROCKET_ARROWS: Arrow[] = [
  {
    id: 1,
    icon: <LeftArrow />,
    action: (swiper) => swiper.slidePrev(),
    ariaLabel: 'Previous rocket',
  },
  {
    id: 2,
    icon: <RightArrow />,
    action: (swiper) => swiper.slideNext(),
    ariaLabel: 'Next rocket',
  },
];

export default function RocketCardsSliderNav() {
  const swiper = useSwiper();

  return (
    <div className="rocket-cards-slider-nav">
      {ROCKET_ARROWS.map(({ id, icon, action, ariaLabel }) => (
        <button
          key={id}
          className="rocket-cards-slider-nav__button"
          onClick={() => action(swiper)}
          aria-label={ariaLabel}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
