import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import styles from './Header.module.css';

interface Props {
  isOpen: boolean;
  toggleForm: () => void;
}

const Header = ({ isOpen, toggleForm }: Props) => {
  console.log(isOpen)
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.h1}>RVA Noise</h1>
        </Link>
        <nav className={styles.nav}>
          <Link
            to="/create"
            className={styles.link}
            onClick={toggleForm}
          >
            <button className={styles.btn}>
              <span className={`${styles.plus} ${isOpen ? styles.rotate : ''}`}>
                +
              </span>
            </button>
          </Link>
        </nav>
      </header>

      <section
        className={`${styles['form-container']} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <Form />
      </section>
    </>
  );
};

export default Header;
