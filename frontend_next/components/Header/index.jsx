import styles from './style.module.scss';
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from '@chakra-ui/react';
import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const { isAuth } = useSelector((state) => state.auth);

  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={'tw-flex tw-justify-between tw-px-10'}>
        <div className={'tw-flex tw-flex-col tw-justify-center'}>
          <div className={'tw-font-bold tw-text-lg'}>
            <Link href={'/'}>SE</Link>
          </div>
        </div>
        <div className={'tw-flex tw-flex-col tw-justify-center'}>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder={'Tìm kiếm'} />
          </InputGroup>
        </div>
        <div>
          {isAuth && (
            <div>
              <Menu closeOnBlur>
                <MenuButton>
                  {/*<div className="tw-w-20 tw-h-20 tw-flex">*/}
                  {/*  <Image*/}
                  {/*    src={*/}
                  {/*      'https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg'*/}
                  {/*    }*/}
                  {/*  />*/}
                  {/*</div>*/}
                  <div className={'tw-flex-col tw-flex tw-justify-center'}>
                    <Image
                      className={
                        'tw-rounded-full tw-w-10 tw-h-10 tw-object-cover'
                      }
                      src={
                        'https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg'
                      }
                    />
                  </div>
                </MenuButton>

                <MenuList>
                  <MenuItem onClick={() => router.push('/manager')}>
                    Model của tôi
                  </MenuItem>
                  <MenuItem>Đăng xuất</MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
          {!isAuth && (
            <Link href={'/login'}>
              <Button>Đăng nhập</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
