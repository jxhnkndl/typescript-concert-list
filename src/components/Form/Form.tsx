import { useState } from 'react';
import styles from './Form.module.css';

interface Props {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    formData: FormData
  ) => void;
}

export interface FormData {
  date: string;
  venue: string;
  city: string;
  state: string;
  headliner: string;
  support: string;
  time: string;
  price: string;
  image: string;
}

const Form = ({ handleSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    venue: '',
    city: '',
    state: '',
    headliner: '',
    support: '',
    time: '',
    price: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e, formData)}>
      <h2 className={styles.h2}>Add Concert</h2>
      {/* Date */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
      </div>
      {/* Venue */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Venue"
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
        />
      </div>
      {/* City */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="City"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      {/* State */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="State"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      {/* Headliner */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Headliner"
          type="text"
          name="headliner"
          value={formData.headliner}
          onChange={handleChange}
        />
      </div>
      {/* Support */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Support"
          type="text"
          name="support"
          value={formData.support}
          onChange={handleChange}
        />
      </div>
      {/* Time */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Time"
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      {/* Price */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Price"
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      {/* Image URL */}
      <div className={styles['form-group']}>
        <input
          className={styles.input}
          placeholder="Image URL"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button className={styles.btn}>Submit</button>
    </form>
  );
};

export default Form;
