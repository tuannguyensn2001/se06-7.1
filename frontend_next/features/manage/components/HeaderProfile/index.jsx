import {Button, Image} from '@chakra-ui/react';
import styles from './style.module.scss';
import Link from 'next/link';
import {useSelector} from "react-redux";

function HeaderProfile() {

    const {user} = useSelector(state => state.auth);

    return (
        <div className={styles.profile}>
            <div className={'tw-flex tw-flex-col tw-justify-center tw-h-full'}>
                <div className={styles.avatar}>
                    <Image
                        className={'tw-h-full'}
                        objectFit={'cover'}
                        src={
                            user?.avatar
                        }
                    />
                </div>
            </div>
            <div className={styles.account}>
                <div className={'tw-flex tw-flex-col tw-justify-evenly tw-h-full'}>
                    <div className={'tw-font-bold tw-text-3xl'}>{user?.name}</div>
                    <div className={'tw-font-light tw-text-lg'}>{user?.email}</div>
                    <div>
                        <Link href={'/profile'}>
                            <Button colorScheme={'blue'}>Edit profile</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderProfile;
