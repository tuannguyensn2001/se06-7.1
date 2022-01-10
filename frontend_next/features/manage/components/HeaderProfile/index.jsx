import { Button, Image } from '@chakra-ui/react';
import styles from './style.module.scss';

function HeaderProfile() {
  return (
    <div className={styles.profile}>
      <div className={'tw-flex tw-flex-col tw-justify-center tw-h-full'}>
        <div className={styles.avatar}>
          <Image
            className={'tw-h-full'}
            objectFit={'cover'}
            src={
              'https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg'
            }
          />
        </div>
      </div>
      <div className={styles.account}>
        <div className={'tw-flex tw-flex-col tw-justify-evenly tw-h-full'}>
          <div className={'tw-font-light'}>tuannguyensn2001a@gmail.com</div>
          <div>
            <Button colorScheme={'blue'}>Edit profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
