import Layout from '@/layouts/Default';
import HeaderProfile from '@/features/manage/components/HeaderProfile';
import ProfileTabs from 'components/ProfileTabs';
import styles from './style.module.scss';

function Manager() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <HeaderProfile />
        <div className={'tw-px-20 tw-mt-10'}>
          <ProfileTabs />
        </div>
      </div>
    </Layout>
  );
}

export default Manager;
