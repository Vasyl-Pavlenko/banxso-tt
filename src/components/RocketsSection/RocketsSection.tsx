import PullToRefresh from 'react-pull-to-refresh';

import { useRockets } from '../../hooks/useRockets';
import { Loader } from '../Loader';
import { Error } from '../Error';

import { RocketCardsSlider } from '../RocketCardsSlider';

import './RocketsSection.scss';

export default function RocketsSection() {
  const { rockets, loading, error, refreshing, handleRefresh } = useRockets();

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <section className="rockets-section">
        {loading && !refreshing && <Loader />}

        {error && <Error message={error} />}

        {!loading && !error && (
          <>
            <h2 className="rockets-section__title">
              Our rockets
            </h2>
            
            <RocketCardsSlider rockets={rockets} />

            <div className="refresh-hint">
              Pull down to refresh
            </div>
          </>
        )}

        {refreshing && <Loader />}
      </section>
    </PullToRefresh>
  );
}


