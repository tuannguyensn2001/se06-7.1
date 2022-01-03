import Header from '@/components/Header';
import styles from './style.module.scss';

function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
}

export default Layout;
