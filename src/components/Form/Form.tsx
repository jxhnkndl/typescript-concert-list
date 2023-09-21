import styles from './Form.module.css';



const Form = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.h2}>Add Concert</h2>
      <div className={styles['form-group']}>
        <input className={styles.input} type="date" name="date" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Venue' type="text" name="venue" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='City' type="text" name="city" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='State' type="text" name="state" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Headliner' type="text" name="headliner" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Support' type="text" name="support" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Time' type="text" name="time" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Price' type="text" name="price" />
      </div>
      <div className={styles['form-group']}>
        <input className={styles.input} placeholder='Image URL' type="text" name="image" />
      </div>
      <button className={styles.btn}>Submit</button>
    </form>
  )
}

export default Form
