import Configure from './Configure/Configure';

function HomeConfiguration() {
  return (
    <div className={'tw-bg-cyan-50'}>
      <div className={'section-layout'}>
        <div className={'section-header'}>
          Share and embed 3D models anywhere online
        </div>
        <div
          className={
            'tw-mt-8 tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-gap-4 tw-max-w-screen-md'
          }
        >
          <Configure
            link={'Pictures/HomeConfiguration/crown.svg'}
            title={'Market-leading 3D player for the web.'}
          />
          <Configure
            link={'Pictures/HomeConfiguration/gear.svg'}
            title={'Interactive and configurable, VR and AR ready.'}
          />
          <Configure
            link={'Pictures/HomeConfiguration/computer.svg'}
            title={'Works with all operating systems, browsers and devices.'}
          />
          <Configure
            link={'Pictures/HomeConfiguration/html-tag.svg'}
            title={
              'Embeddable everywhere, for eCommerce, advertising and social media.'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HomeConfiguration;
