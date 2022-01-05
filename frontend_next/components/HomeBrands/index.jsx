import { Button } from '@chakra-ui/react';

import Brand from './Brand/Brand';

function HomeBrands() {
  return (
    <div className={'section-layout'}>
      <div className={'section-header'}>Trusted by Leading Brands</div>
      <div className={'tw-mt-8 tw-grid tw-grid-cols-6 tw-grid-rows-2 tw-gap-4'}>
        <Brand link={'Pictures/HomeBrands/audi.png'} />
        <Brand link={'Pictures/HomeBrands/nike.svg'} />
        <Brand link={'Pictures/HomeBrands/schneider.svg'} />
        <Brand link={'Pictures/HomeBrands/dell.svg'} />
        <Brand link={'Pictures/HomeBrands/yamaha.svg'} />
        <Brand link={'Pictures/HomeBrands/deckers.svg'} />
        <Brand link={'Pictures/HomeBrands/eagle-creek.png'} />
        <Brand link={'Pictures/HomeBrands/leroy-merlin.svg'} />
        <Brand link={'Pictures/HomeBrands/balenciaga.png'} />
        <Brand link={'Pictures/HomeBrands/mini.png'} />
        <Brand link={'Pictures/HomeBrands/the-british-museum.svg'} />
        <Brand link={'Pictures/HomeBrands/philips.png'} />
      </div>
      <Button className={'tw-mt-16'} colorScheme={'telegram'}>
        DISCOVER OUR BUSINESS SOLUTIONS
      </Button>
    </div>
  );
}

export default HomeBrands;
