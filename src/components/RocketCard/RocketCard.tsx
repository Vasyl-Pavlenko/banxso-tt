import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from '../../types';
import getRocketProps from '../../utils/getRocketProps';

import './RocketCard.scss';

interface Props {
  rocket: Rocket;
}

export default function RocketCard({ rocket }: Props) {
  const rocketProps = useMemo(() => getRocketProps(rocket), [rocket]);

  return (
    <Link
      to={`/rockets/${rocket.id}`}
      className="rocket-card-link"
    >
      {' '}
      <div className="rocket-card">
        <img
          className="rocket-card__image"
          src={rocket.flickr_images[0] || 'fallback-image-url.jpg'}
          alt={`Image of ${rocket.name}`}
        />

        <div className="rocket-card__content">
          <p className="rocket-card__title">
            {rocket.name}
          </p>

          <ul className="rocket-card__properties">
            {rocketProps?.map(({ name, value }) => (
              <li
                key={name}
                className="rocket-card__property"
              >
                <span className="rocket-card__property-name">
                  {name}
                </span>

                <span className="rocket-card__property-value">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
