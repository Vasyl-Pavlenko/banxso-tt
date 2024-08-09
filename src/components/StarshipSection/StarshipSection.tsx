import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

import { Starship } from '../../types';
import { StarshipSlide } from '../StarshipSlide';
import { LeftArrow, RightArrow } from '../Icons';

import './StarshipSection.scss';

interface Props {
  starships: Starship[];
}

interface Arrow {
  id: number;
  icon: JSX.Element;
  action: () => void;
  ariaLabel?: string;
}

export default function StarshipSection({ starships }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const ARROWS: Arrow[] = [
    {
      id: 1,
      icon: <LeftArrow fill="white" />,
      action: () => swiperRef.current?.slidePrev(),
      ariaLabel: 'Previous starship',
    },
    {
      id: 2,
      icon: <RightArrow fill="white" />,
      action: () => swiperRef.current?.slideNext(),
      ariaLabel: 'Next starship',
    },
  ];

  return (
    <section className="starship-section">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[Navigation, Pagination]}
      >
        {starships?.map((starship) => (
          <SwiperSlide key={starship.id}>
            <StarshipSlide starship={starship} />
          </SwiperSlide>
        ))}

        <div className="swiper-controls">
          {ARROWS.map(({ id, icon, action, ariaLabel }) => (
            <button
              key={id}
              className="swiper-button"
              onClick={action}
              aria-label={ariaLabel}
            >
              {icon}
            </button>
          ))}

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}
