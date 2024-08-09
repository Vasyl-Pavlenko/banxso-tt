import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';

import './NavBar.scss';

const NAVI_TEMS = [
  { href: '#about', text: 'About' },
  { href: '#starship', text: 'QA' },
  { href: '#team', text: 'Contact form' },
];

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <RouterLink to={'/'}>
          Logo
        </RouterLink>
      </div>

      <ul className="nav-list">
        <li className="nav-list__item">
          <RouterLink to={'/'}>
            Home
          </RouterLink>
        </li>

        {NAVI_TEMS.map(({ href, text }) => (
          <li
            className="nav-list__item"
            key={href}
          >
            <ScrollLink
              to={href}
              smooth={true}
              duration={500}
            >
              {text}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <button className="nav__contact-button">
        <ScrollLink
          to={'#team'}
          smooth={true}
          duration={500}
        >
          Contact Form
        </ScrollLink>
      </button>
    </nav>
  );
}
