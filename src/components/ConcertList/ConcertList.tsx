import { ConcertData } from '../../data';

import Concert from '../Concert/Concert';

// Use imported Concert interface to configure component props
interface ConcertListProps {
  concerts: ConcertData[];
}

const ConcertList = ({ concerts }: ConcertListProps) => {
  return (
    <div>
      {concerts.map((concert) => (
        <Concert key={concert.id} concert={concert} />
      ))}
    </div>
  );
}

export default ConcertList;
