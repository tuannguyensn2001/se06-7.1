import styles from '../../style.module.scss';

import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Collection({name,onEdit,id}) {
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
          <img src="https://cdn.pixabay.com/photo/2019/08/11/21/17/lion-hologram-4399941_960_720.jpg" alt=""/>
      </div>
      <div className={'tw-flex tw-items-center tw-justify-between tw-p-2'}>
        <div
          className={
            'tw-overflow-hidden tw-whitespace-nowrap tw-text-ellipsis tw-w-10/12'
          }
        >
            {name}
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
                onClick={() => onEdit(id)}
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
