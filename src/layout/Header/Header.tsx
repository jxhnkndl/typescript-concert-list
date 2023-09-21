import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.h1}>RVA Noise</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/create" className={styles.link}>
          <button className={styles.btn}>+</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
