import { Sphere } from '../Icons';
import { NavBar } from '../NavBar';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <NavBar />

      <div className="header__content">
        <h1 className="header__headline">
          Dive deep into the future
        </h1>

        <div className="header__bottom">
          <div className="header__bottom-sphere">
            <Sphere />
          </div>

          <div className="header__bottom-line"></div>
        </div>
      </div>
    </header>
  );
}
