import * as styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      developed by{' '}
      <a href="https://feijo.dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
        feijo.dev
      </a>
    </footer>
  );
};
