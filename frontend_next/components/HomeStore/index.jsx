import Store from './Store/Store';

import { Button } from '@chakra-ui/react';

function HomeStore() {
  return (
    <div className="section-layout">
      <div className="section-header text-red">
        Buy & sell 3D models on the Sketchfab Store
      </div>
      <div className="section-sub-header">
        Find everything from low poly assets to animated rigs & digital scans
        for your 3D, Virtual Reality, and Augmented Reality projects.
      </div>
      <div className={'tw-grid tw-grid-cols-3 tw-grid-rows-1 tw-gap-4 tw-mt-8'}>
        <Store
          link={'Pictures/HomeStore/windmill.jpg'}
          title={'What you see is what you get'}
          description={
            'Preview model topology, UVs, and textures with our 3D viewer and model inspector before you purchase.'
          }
        />
        <Store
          link={'Pictures/HomeStore/bee.jpg'}
          title={"Everything you're looking for"}
          description={
            'From low-poly video game 3D assets to real-world photogrammetry scans, 3D models from every conceivable category.'
          }
        />
        <Store
          link={'Pictures/HomeStore/iron-ball.jpg'}
          title={"Today's technical standards"}
          description={
            'PBR materials, animated rigs, and more in a universal format.'
          }
        />
      </div>
      <Button className="tw-mt-16" colorScheme={'red'}>
        BROWSE THE SKETCHFAB STORE
      </Button>
    </div>
  );
}

export default HomeStore;
