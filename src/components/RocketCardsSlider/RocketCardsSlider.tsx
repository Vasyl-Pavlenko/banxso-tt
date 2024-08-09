import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';

import Rocket from '../../types/Rocket';

import { RocketCard } from '../RocketCard';
import { RocketCardsSliderNav } from '../RocketCardsSliderNav';

import './RocketCardsSlider.scss';

interface Props {
  rockets: Rocket[];
}

export default function RocketCardsSlider({ rockets }: Props) {
  return (
    <div className="rocket-cards-slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}>
        {rockets.map((rocket) => (
          <SwiperSlide key={rocket.id}>
            <RocketCard rocket={rocket} />
          </SwiperSlide>
        ))}
        <RocketCardsSliderNav />
      </Swiper>
    </div>
  );
}
