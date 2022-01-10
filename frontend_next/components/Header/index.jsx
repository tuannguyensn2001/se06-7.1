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
import { useState, useEffect } from 'react';

function Header({ isTransparent }) {
  const { isAuth } = useSelector((state) => state.auth);
  const [navColor, setNavColor] = useState('transparent');

  const router = useRouter();

  const revealNavbar = () => {
    if (window.scrollY > 100) {
      setNavColor('white');
    } else {
      setNavColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', revealNavbar);
    return () => {
      window.removeEventListener('scroll', revealNavbar);
    };
  }, []);

  return (
    <div
      className={`${
        navColor === 'transparent' && isTransparent
          ? 'tw-bg-transparent tw-text-white'
          : 'tw-bg-white tw-text-black tw-border-b'
      } 
      tw-w-full tw-flex tw-flex-col tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-h-16 delay-100 tw-ease-linear tw-duration-100 tw-z-50`}
    >
      <div className={'tw-flex tw-justify-between tw-items-center tw-px-10'}>
        <div
          className={'tw-flex tw-flex-col tw-justify-center tw-items-center'}
        >
          <div className={'tw-font-bold tw-text-lg tw-mr-4'}>
            <Link href={'/'}>SE</Link>
          </div>
        </div>
        <div className={'tw-w-full tw-mx-2'}>
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
              <Button colorScheme={'orange'}>Đăng nhập</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
