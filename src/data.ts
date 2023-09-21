import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import cannons from './assets/cannons.png';
import marsVolta from './assets/mars-volta.png';
import mtJoy from './assets/mt-joy.png';
import noahCyrus from './assets/noah-cyrus.png';
import switchfoot from './assets/switchfoot.png';
import sylvanEsso from './assets/sylvan-esso.png';
import teganAndSara from './assets/tegan-and-sara.png';
import wonderYears from './assets/the-wonder-years.png';

export interface ConcertData {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  headliner: string;
  support?: string | undefined;
  time: string;
  price: number;
  image?: string;
}

export const concertData = [
  {
    id: uuidv4(),
    date: dayjs('09/13/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'The Wonder Years',
    support: 'Anxious, Sweet Pill, Action/Adventure',
    time: '6:45 PM',
    price: 30.0,
    image: wonderYears,
  },
  {
    id: uuidv4(),
    date: dayjs('09/14/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'Cannons',
    support: 'Two Another, Jane Leo',
    time: '7:30 PM',
    price: 18.0,
    image: cannons,
  },
  {
    id: uuidv4(),
    date: dayjs('09/16/2023').format('ddd MMM M, YYYY'),
    venue: "Brown's Island",
    city: 'Richmond',
    state: 'VA',
    headliner: 'Mt. Joy',
    time: '7:00 PM',
    price: 45.0,
    image: mtJoy,
  },
  {
    id: uuidv4(),
    date: dayjs('09/19/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'The Mars Volta',
    support: 'Teri Gender Bender',
    time: '9:00 PM',
    price: 30.0,
    image: marsVolta,
  },
  {
    id: uuidv4(),
    date: dayjs('09/20/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'Noah Cyrus',
    support: 'Anna Bates',
    time: '7:30 PM',
    price: 25.0,
    image: noahCyrus,
  },
  {
    id: uuidv4(),
    date: dayjs('09/24/2023').format('ddd MMM M, YYYY'),
    venue: "Pridefest @ Brown's Island",
    city: 'Richmond',
    state: 'VA',
    headliner: 'Tegan & Sara',
    support: 'Carlie Hanson',
    time: '7:00 PM',
    price: 40.0,
    image: teganAndSara,
  },
  {
    id: uuidv4(),
    date: dayjs('09/27/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'Sylvan Esso',
    support: 'GRRL',
    time: '7:00 PM',
    price: 30.0,
    image: sylvanEsso,
  },
  {
    id: uuidv4(),
    date: dayjs('09/29/2023').format('ddd MMM M, YYYY'),
    venue: 'The National',
    city: 'Richmond',
    state: 'VA',
    headliner: 'Switchfoot',
    support: 'Alana Springsteen',
    time: '8:00 PM',
    price: 25.0,
    image: switchfoot,
  },
];
