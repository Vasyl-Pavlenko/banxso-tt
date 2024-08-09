import { useEffect, useState } from 'react';
import {
  Header,
  AboutUs,
  RocketsSection,
  InfoSection,
  TeamSection,
  StarshipSection,
} from '../../components/index';
import { Starship } from '../../types';

import { getStarships } from '../../api/api';
import { ScrollToTopButton } from '../../components/ScrollToTopButton';

export default function MainPage() {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    getStarships().then((response) => setStarships(response));
  }, []);

  return (
    <main className="main-page">
      <div className="container">
        <Header />

        <section id="#rocketsSection">
          <RocketsSection />
        </section>

        <section id="#infoSection">
          <InfoSection />
        </section>

        <section id="#about">
          <AboutUs />
        </section>

        <section id="#team">
          <TeamSection />
        </section>
      </div>

      <section id='#starship'>
        <StarshipSection starships={starships} />
      </section>

      <ScrollToTopButton />
    </main>
  );
}
