import { Button } from '@chakra-ui/react';

function HomeEditor() {
  return (
    <div className="tw-bg-gray-100">
      <div className="section-layout ">
        <div className="section-header">The most powerful 3D editor online</div>
        <div className="section-sub-header">
          Under-the-hood access to a powerful Physically Based Rendering toolset
          for every single model. Set up lighting, materials, animation, audio,
          annotations, VR positioning, and more.
        </div>
        <video
          className={'tw-mt-8 tw-rounded-md tw-shadow-md tw-w-full'}
          src="https://www.youtube.com/embed/uu5Be_EY73s"
          controls
        ></video>
        <Button className="tw-mt-16" colorScheme={'telegram'}>
          JOIN SKETCHFAB FOR FREE
        </Button>
      </div>
    </div>
  );
}

export default HomeEditor;
