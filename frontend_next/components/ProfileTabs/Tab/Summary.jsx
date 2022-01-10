import styles from '../style.module.scss';

import {
  ViewIcon,
  StarIcon,
  TriangleUpIcon,
  ArrowUpIcon,
} from '@chakra-ui/icons';

function Summary() {
  return (
    <div className={'tw-flex tw-justify-between tw-gap-4'}>
      <div className={'tw-w-8/12'}>Summary</div>
      <div className={'tw-w-4/12'}>
        <div className={styles.box}>
          <div className={styles.title}>ABOUT</div>
          <div className={styles.link}>Edit yout biography</div>
          <div className={styles.title}>CATEGORY</div>
          <div>Individual / Other</div>
          <div className={styles.title}>WEBSITE</div>
          <div className={styles.link}>Add a link</div>
          <div className={styles.title}>MEMBER SINCE</div>
          <div>January 8th 2022</div>
        </div>

        <div className={styles.box}>
          <div className={styles.title}>STATS</div>
          <div>
            <ViewIcon color={'gray.500'} className={'tw-mr-2'} />0 view
          </div>
          <div>
            <StarIcon color={'gray.500'} className={'tw-mr-2'} />0 likes
          </div>
          <div>
            <TriangleUpIcon color={'gray.500'} className={'tw-mr-2'} />0
            triangles
          </div>
          <div>
            <ArrowUpIcon color={'gray.500'} className={'tw-mr-2'} />0 vertices
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.title}>SKILLS</div>
          <div className={styles.link}>All your skills</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
