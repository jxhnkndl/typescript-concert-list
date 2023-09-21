import styles from './App.module.css';
import { Outlet } from 'react-router-dom';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <Header isOpen={isOpen} toggleForm={toggleForm} />
      <main className={styles['main-content']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
