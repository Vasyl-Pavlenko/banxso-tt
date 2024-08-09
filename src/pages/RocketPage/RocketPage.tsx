import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  StarbaseSection,
  NavBar,
  StarshipSection,
  RocketInfo,
  Loader,
  ScrollToTopButton,
} from '../../components';
import { getRocket, getStarships } from '../../api/api';
import { Rocket, Starship } from '../../types';

import './RocketPage.scss';

export default function RocketPage() {
  const { rocketId } = useParams();
  const navigate = useNavigate();
  const [rocket, setRocket] = useState<Rocket | null>(null);
  const [loading, setLoading] = useState(true);
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [rocketResponse, starshipsResponse] = await Promise.all([
          getRocket(rocketId || ''),
          getStarships(),
        ]);

        setRocket(rocketResponse || null);
        setStarships(starshipsResponse || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRocket(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [rocketId]);

  if (loading) {
    return <Loader />;
  }

  if (!rocket) {
    return (
      <div className="broken-rocket">
        <h3 className="broken-rocket__title">This rocket doesn't exist...</h3>

        <p className="broken-rocket__description">
          It looks like the rocket you're looking for isn't available. It might have been removed or
          the link is incorrect.
        </p>
        
        <button className="broken-rocket__button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="rocket-page">
      <div className="container">
        <NavBar />

        <section id="#about">
          <RocketInfo rocket={rocket} />
        </section>
      </div>

      <section id="#starship">
        <StarshipSection starships={starships} />
      </section>

      <section id="#team">
        <StarbaseSection />
      </section>

      <ScrollToTopButton />
    </main>
  );
}
