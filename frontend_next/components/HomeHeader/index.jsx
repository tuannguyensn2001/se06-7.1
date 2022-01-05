import { ButtonGroup, Button } from '@chakra-ui/react';

function HomeHeader() {
  const handlePlans = () => {};

  const handleJoin = () => {};

  return (
    <div
      className={
        'tw-bg-gradient-to-br tw-from-cyan-400 tw-to-blue-500 tw-py-48'
      }
    >
      <div className={'tw-w-5/12 tw-ml-24 tw-text-white tw-font-light'}>
        <h1 className={'tw-text-5xl '}>
          The leading platform for 3D & AR on the web
        </h1>
        <p className={'tw-text-md tw-mt-6'}>
          Manage your 3D assets. Distribute 3D & AR experiences. Collaborate
          with others. Showcase your work. Buy & sell 3D models.
        </p>
        <ButtonGroup className={'tw-mt-6'}>
          <Button onClick={handleJoin} colorScheme={'telegram'}>
            JOIN FOR FREE
          </Button>
          <Button onClick={handlePlans} colorScheme={'orange'}>
            SEE PLANS
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default HomeHeader;
