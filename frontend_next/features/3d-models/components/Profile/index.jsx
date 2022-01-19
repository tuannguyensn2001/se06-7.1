import Link from 'next/link';
import {Button} from '@chakra-ui/react';
import styles from './style.module.scss';
import {ViewIcon, StarIcon} from '@chakra-ui/icons';
import {Icon} from '@chakra-ui/react';
import {Tooltip} from '@chakra-ui/react';
import {useSelector} from "react-redux";

function ProfileModel({user}) {


    return (
        <div className={'tw-flex'}>
            <div>
                <img
                    alt={'Avatar'}
                    src={user?.avatar}
                    className={'tw-h-16 tw-w-16 tw-object-cover tw-rounded-full'}
                />
            </div>
            <div className={styles.profile}>
                <Link href={'#'}>
          <span
              className={
                  'tw-font-bold tw-text-lg hover:text-blue-500 tw-cursor-pointer'
              }
          >
            {user?.name}
          </span>
                </Link>

                <div className={'tw-flex tw-justify-between'}>
                    <Button colorScheme={'blue'} size={'sm'}>
                        Follow
                    </Button>
                    <div className={'tw-flex'}>
                        <div className={'tw-flex '}>
                            <div className={'tw-flex tw-justify-center tw-flex-col'}>
                                <Icon w={4} h={4} as={ViewIcon}/>
                            </div>
                            <span className={'tw-flex tw-flex-col tw-justify-center'}>
                2.4k
              </span>
                        </div>
                        <div className={'tw-ml-5'}>
                            <Tooltip hasArrow label={'Like'}>
                                <Button
                                    _hover={{bg: 'orange', color: 'white'}}
                                    size={'sm'}
                                    leftIcon={<StarIcon/>}
                                    variant={'outline'}
                                >
                                    59
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileModel;
