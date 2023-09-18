import styles from './App.module.css';
import { Outlet } from 'react-router-dom';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles['main-content']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
