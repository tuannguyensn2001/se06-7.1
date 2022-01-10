import styles from '../../style.module.scss';

import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Collection() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOptions = () => {
    if (isVisible) setIsVisible(false);
    else setIsVisible(true);
  };
  return (
    <div className={styles.collection}>
      <div
        className={
          'tw-h-64 tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-overflow-hidden'
        }
      >
        <img src="https://i.pinimg.com/originals/53/25/9a/53259a1f4e675127c61097b4f8726c66.jpg" />
        <img src="https://i.pinimg.com/originals/53/25/9a/53259a1f4e675127c61097b4f8726c66.jpg" />
        <img src="https://i.pinimg.com/originals/53/25/9a/53259a1f4e675127c61097b4f8726c66.jpg" />
        <img src="https://i.pinimg.com/originals/53/25/9a/53259a1f4e675127c61097b4f8726c66.jpg" />
      </div>
      <div className={'tw-flex tw-items-center tw-justify-between tw-p-2'}>
        <div
          className={
            'tw-overflow-hidden tw-whitespace-nowrap tw-text-ellipsis tw-w-10/12'
          }
        >
          Shy cat - Description aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className={'tw-relative'}>
          <HamburgerIcon
            className={'tw-cursor-pointer'}
            onClick={handleOptions}
          />
          {isVisible && (
            <div
              className={
                'tw-absolute tw-bottom-1 tw-right-4 tw-bg-white tw-border'
              }
            >
              <div
                className={
                  'tw-px-4 tw-py-1 hover:tw-text-cyan-500 tw-cursor-pointer'
                }
              >
                Edit
              </div>
              <div
                className={
                  'tw-px-4 tw-py-1 hover:tw-text-cyan-500 tw-cursor-pointer'
                }
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
