import styles from './Concert.module.css';

import { ConcertData } from '../../data';

interface ConcertProps {
  concert: ConcertData
}

function Concert({ concert }: ConcertProps) {
  return (
    <div className={styles.concert}>
      <p>CONCERT</p>
    </div>
  )
}

export default Concert