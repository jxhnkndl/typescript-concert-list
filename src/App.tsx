import { useState } from 'react';
import styles from './App.module.css';

import { ConcertData } from './data';
import { concertData } from './data';

import Footer from './layout/Footer/Footer';
import ConcertList from './components/ConcertList/ConcertList';
import Header from './layout/Header/Header';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [concerts, setConcerts] = useState<ConcertData[]>(concertData);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <div className={styles.wrapper}>
      <Header
        isOpen={isOpen}
        toggleForm={toggleForm}
        handleSubmit={handleSubmit}
      />
      <main className={styles['main-content']}>
        <ConcertList concerts={concerts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
