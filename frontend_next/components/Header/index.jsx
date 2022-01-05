import styles from './style.module.scss';
import {
  Input,
  InputGroup,
  InputLeftElement,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { SearchIcon, SunIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';

function Header({ isTransparent }) {
  const [navColor, setNavColor] = useState('transparent');

  const handleLogin = () => {};
  const handleSignUp = () => {};
  const handleUpLoad = () => {};

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
        <div className={'tw-pr-4'}>
          <div className={'tw-flex tw-items-center tw-font-bold tw-text-lg'}>
            <SunIcon />
            SE
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
          <ButtonGroup>
            <Button
              variant={'ghost'}
              colorScheme={'facebook'}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button colorScheme={'telegram'} onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button colorScheme={'orange'} onClick={handleUpLoad}>
              <ArrowUpIcon />
              Up Load
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
