import styles from './style.module.scss';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

function HeaderEditor({ onClickSave }) {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <div className={styles.header}>
      <div className={'tw-flex tw-flex-col tw-justify-center'}>
        <div onClick={back} className={'tw-cursor-pointer'}>
          <Tooltip label={'Trở về trang trước'}>
            <ArrowBackIcon color={'white'} w={8} h={8} />
          </Tooltip>
        </div>
      </div>
      <div className={'tw-flex tw-flex-col tw-justify-center'}>
        <Button onClick={onClickSave} colorScheme={'blue'}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default HeaderEditor;
