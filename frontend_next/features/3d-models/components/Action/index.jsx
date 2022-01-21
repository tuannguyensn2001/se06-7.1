import styles from './style.module.scss';
import {useDisclosure} from '@chakra-ui/react';
import ModalCollection from '@/features/3d-models/components/ModalCollection';

function Action({handleDownload}) {
    const {onOpen, isOpen, onClose} = useDisclosure();

    const handleClickAddTo = () => {
        onOpen();
    };
    return (
        <div>
            <ModalCollection onClose={onClose} isOpen={isOpen}/>
            <div className={'tw-flex tw-w-1/5 tw-justify-between'}>
                <div onClick={handleClickAddTo} className={styles.action}>
                    Add To
                </div>
                <div className={styles.action}>Embed</div>
                <div className={styles.action}>Shared</div>
                <div onClick={handleDownload} className={styles.action}>Download</div>
            </div>
        </div>
    );
}

export default Action;
