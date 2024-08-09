import './Error.scss';

export default function Error({ message }: { message: string }) {
  return (
    <div className="error">
      <div className="error__icon">
        ⚠️
      </div>

      <p className="error__message">
        {message}
      </p>
    </div>
  );
}

