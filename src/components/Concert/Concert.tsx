import styles from './Concert.module.css';

import { ConcertData } from '../../data';

interface ConcertProps {
  concert: ConcertData;
}

const Concert = ({ concert }: ConcertProps) => {
  return (
    <article className={styles.concert}>
      <div className={`${styles['image-col']} ${styles.column}`}>
        <div
          className={`${styles.image}`}
          style={{
            backgroundImage: `url(${concert.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
      <div className={`${styles['main-col']} ${styles.column}`}>
        <div className={`${styles['details-container']}`}>
          <div className={`${styles.details}`}>
            <p className={`${styles.date}`}>{concert.date}</p>

            <h2 className={`${styles.headliner}`}>{concert.headliner}</h2>
            {concert.support && (
              <p className={`${styles.support}`}>w/ {concert.support}</p>
            )}
            <p className={styles.venue}>{concert.venue}</p>
            <p>Doors {concert.time}</p>
          </div>
          <div className={`${styles.buttons}`}>
            <button className={`${styles.button}`}>Buy Tickets</button>
            <p className={`${styles.price}`}>From ${concert.price}.00</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Concert;
