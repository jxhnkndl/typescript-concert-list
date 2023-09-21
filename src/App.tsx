import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';

import { ConcertData } from './data';
import { concertData } from './data';

import Footer from './layout/Footer/Footer';
import ConcertList from './components/ConcertList/ConcertList';
import Header from './layout/Header/Header';

import { FormData } from './components/Form/Form';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [concerts, setConcerts] = useState<ConcertData[]>(concertData);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    formData: FormData
  ) => {
    e.preventDefault();

    setConcerts([...concerts, { id: uuidv4(), ...formData }]);

    toggleForm();
  };

  return (
    <div className={styles.wrapper}>
      <Header
        isOpen={isOpen}
        toggleForm={toggleForm}
        handleSubmit={handleSubmit}
      />
      <main
        className={`${styles['main-content']} ${
          isOpen ? styles.hide : styles.show
        }`}
      >
        <ConcertList concerts={concerts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
