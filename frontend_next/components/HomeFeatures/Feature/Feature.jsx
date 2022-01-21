import { Button } from '@chakra-ui/react';

function Feature({ picture, title, buttonTitle, color, click }) {
  return (
    <div className={'tw-flex tw-flex-col tw-items-center tw-text-center'}>
      <div className={'tw-w-56 tw-h-32 tw-overflow-hidden'}>
        <img src={picture} width={220} height={120} />
      </div>
      <p className={'tw-my-4 tw-font-bold tw-text-2xl'}>{title}</p>
      <Button onClick={click} colorScheme={color}>
        {buttonTitle}
      </Button>
    </div>
  );
}

export default Feature;
