import styles from './Footer.module.css';

interface Props {
  isOpen: boolean;
}

const Footer = ({ isOpen }: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.text} ${isOpen ? styles.show : styles.hide}`}>
        Thank you for supporting live music!
      </p>
    </footer>
  );
};

export default Footer;
