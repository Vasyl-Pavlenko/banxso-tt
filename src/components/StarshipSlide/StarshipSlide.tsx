import { Starship } from '../../types';

import './StarshipSlide.scss';

interface Props {
  starship: Starship;
}

export default function StarshipSlide({ starship }: Props) {
  return (
    <div
      className="starship-slide"
      style={{ backgroundImage: `url(${starship.image})` }}
    >
      <div className="starship-slide__content">
        <div className="starship-slide__text-content">
          <h2 className="starship-slide__title">
            {starship.title}
          </h2>

          <p className="starship-slide__description">
            {starship.description}
          </p>
        </div>
      </div>
    </div>
  );
}
