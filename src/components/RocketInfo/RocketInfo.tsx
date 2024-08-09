import { useEffect, useState } from 'react';

import { Rocket } from '../../types';

import getRocketProps from '../../utils/getRocketProps';

import './RocketInfo.scss';

interface Props {
  rocket: Rocket;
}

export default function RocketInfo({ rocket }: Props) {
  const [rocketProps, setRocketProps] = useState<{ name: string; value: string }[]>([]);

  useEffect(() => {
    setRocketProps(() => getRocketProps(rocket, true));
  }, [rocket]);

  return (
    <>
      <h2 className="rocket-info__title">
        {rocket?.name}
      </h2>
      <div className="rocket-info__wrapper">
        <img
          src={rocket?.flickr_images[0]}
          alt={`${rocket?.name} image`}
          className="rocket-info__image"
        />
        <div className="rocket-info__statistics">
          <h3 className="rocket-info__statistics-title">
            {rocket?.name}
          </h3>

          <div className="rocket-info__properties">
            {rocketProps.map(({name, value}) => (
              <div
                key={name}
                className="rocket-info__property"
              >
                <span>{name}</span>

                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
