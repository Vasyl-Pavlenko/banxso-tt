import { useNavigate } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>

        <p className="not-found__message">The page you're looking for is lost in space...</p>

        <button className="not-found__button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
