import { useEffect, useRef, useState, RefObject, ReactNode } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/scss';
import './TeamSection.scss';

import { TeamMember } from '../TeamMember';
import { LeftArrow, RightArrow } from '../Icons';

import { getTeamMembers } from '../../api/api';
import { Team } from '../../types';

interface Arrow {
  id: number;
  icon: ReactNode;
  action: (swiperRef: RefObject<SwiperType | null>, slidesLength: number) => void;
  isActive: (activeIndex: number, slidesLength: number) => boolean;
}

const CARDS_ON_SLIDE = 2;

const TEAM_ARROWS: Arrow[] = [
  {
    id: 1,
    icon: <LeftArrow fill="black" />,
    action: (swiperRef) => swiperRef.current?.slidePrev(),
    isActive: (activeIndex) => activeIndex > 0,
  },
  {
    id: 2,
    icon: <RightArrow fill="black" />,
    action: (swiperRef) => swiperRef.current?.slideNext(),
    isActive: (activeIndex, slidesLength) => activeIndex < slidesLength - CARDS_ON_SLIDE,
  },
];
export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<Team[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    getTeamMembers().then((response) => setTeamMembers(response));
  }, []);

  return (
    <section className="team-section">
      <div className="team-section__left">
        <div className="team-section__text">
          <h2 className="team-section__title">
            Team
          </h2>

          <p className="team-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed urna a
            faucibus. Pellentesque mi nisl, mollis convallis metus id, congue semper neque. Sed
            suscipit eget ipsum ut gravida.
          </p>
        </div>

        <div className="team-section__buttons">
          {TEAM_ARROWS.map(({ id, icon, action, isActive }) => (
            <button
              key={id}
              onClick={() => action(swiperRef, teamMembers.length)}
              className={cn('team-section__button', {
                'team-section__button--inactive': !isActive(activeIndex, teamMembers?.length),
              })}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="team-section__right">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          slidesPerView={CARDS_ON_SLIDE}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {teamMembers?.map((teamMember) => (
            <SwiperSlide key={teamMember.id}>
              <TeamMember staff={teamMember} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
