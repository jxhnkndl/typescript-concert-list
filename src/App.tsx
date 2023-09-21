import { useState } from 'react';
import styles from './App.module.css';
import { concerts } from './data';

import Footer from './layout/Footer/Footer';
import ConcertList from './components/ConcertList/ConcertList';
import Header from './layout/Header/Header';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <Header isOpen={isOpen} toggleForm={toggleForm} />
      <main className={styles['main-content']}>
        <ConcertList concerts={concerts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
