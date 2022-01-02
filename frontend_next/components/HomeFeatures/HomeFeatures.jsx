import Feature from './Feature/Feature';

function HomeFeatures() {
  const features = [
    {
      link: 'Pictures/HomeFeatures/b23570d4e6681f42b143b822fccbb1a6-v2.svg',
      title: 'Join millions of 3D creators and showcase your work',
      buttonTitle: 'JOIN SKETCHAFAB',
      color: 'telegram',
    },
    {
      link: 'Pictures/HomeFeatures/ffcab9cbf04c825a3df3db993aefbb77-v2.svg',
      title: 'Buy & sell 3D models on the Sketchfab Store',
      buttonTitle: 'BUY 3D MODELS',
      color: 'red',
    },
    {
      link: 'Pictures/HomeFeatures/58c377b3c70745be4a6c8391011ea77a-v2.svg',
      title: 'Share & embed 3D models anywhere online',
      buttonTitle: 'DISCOVER OUR BUSINESS SOLUTIONS',
      color: 'telegram',
    },
  ];

  const handleClickButton = (index) => {
    if (index === 0) join();
    if (index === 1) buy();
    if (index === 2) discover();
  };

  const join = () => {
    console.log('join clicked');
  };

  const buy = () => {
    console.log('buy clicked');
  };

  const discover = () => {
    console.log('discover clicked');
  };

  return (
    <div className={'tw-bg-white tw-h-96 tw-relative'}>
      <div
        className={
          'tw-bg-white tw-p-8 tw-rounded-md tw-absolute tw--top-16 tw-left-8 tw-right-8 tw-shadow-md tw-flex tw-justify-around tw-gap-8'
        }
      >
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              picture={feature.link}
              title={feature.title}
              buttonTitle={feature.buttonTitle}
              color={feature.color}
              click={() => handleClickButton(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeFeatures;
