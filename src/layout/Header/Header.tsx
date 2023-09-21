import Form from '../../components/Form/Form';
import styles from './Header.module.css';

import { FormData } from '../../components/Form/Form';

interface Props {
  isOpen: boolean;
  toggleForm: () => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    formData: FormData
  ) => void;
}

const Header = ({ isOpen, toggleForm, handleSubmit }: Props) => {
  console.log(isOpen);
  return (
    <>
      <header className={styles.header}>
        <h1
          className={`${styles.h1} ${
            isOpen ? styles['h1-open'] : styles['h1-closed']
          }`}
        >
          RVA Noise
        </h1>
        <nav className={styles.nav}>
          <button className={styles.btn} onClick={toggleForm}>
            <span className={`${styles.plus} ${isOpen ? styles.rotate : ''}`}>
              +
            </span>
          </button>
        </nav>
      </header>

      <section
        className={`${styles['form-container']} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <Form handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default Header;
