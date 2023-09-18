import styles from './App.module.css';
import { concerts } from './data';

import Footer from './layout/Footer/Footer';
import ConcertList from './components/ConcertList/ConcertList';
import Header from './layout/Header/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles['main-content']}>
        <ConcertList concerts={concerts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
