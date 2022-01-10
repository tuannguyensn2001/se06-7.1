function Footer() {
  const links = [
    {
      key: 'Enterprise',
      value: [
        'Enterprise Solutions',
        '3D Configuration',
        '3D eCommerce',
        '3D Viewer',
        '3D Advertising',
        'Sketchfab for Teams',
        'Customer Stories',
        'Pricing',
      ],
    },
    {
      key: 'ECosystem',
      value: [
        'Exporters',
        'Importers',
        'Developers & API',
        'Augmented Reality',
        'Virtual Reality',
        'Mobile App',
      ],
    },
    {
      key: 'Store',
      value: [
        'Buy 3D Models',
        'Best Selling',
        'Categories',
        'Become a Seller',
        'Free 3D Models',
      ],
    },
    {
      key: 'Community',
      value: [
        'Explore',
        'Help Center',
        'Education',
        'Museums',
        'Blogs',
        'Forum',
        'Challenges',
      ],
    },
    {
      key: 'About',
      value: ['Company', 'Careers', 'Press Kit', 'Features'],
    },
  ];

  return (
    <div className={'tw-mx-8 tw-mt-16 tw-text-sm'}>
      <div className={'tw-grid tw-grid-cols-5 tw-gap-4'}>
        {links.map((link) => {
          return (
            <div key={link.key}>
              <div
                className={'tw-font-bold tw-uppercase tw-text-gray-400 tw-mb-6'}
              >
                {link.key}
              </div>
              {link.value.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      'tw-my-4 tw-font-normal tw-text-blue-400 tw-cursor-pointer hover:tw-text-blue-500'
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={'tw-border-t tw-py-4 tw-flex tw-items-center'}>
        <div>2022 Sketchfab - All Rights reserved</div>
        <div
          className={
            'tw-ml-8 tw-flex tw-items-center tw-justify-between tw-w-4/12 tw-text-blue-400 tw-cursor-pointer hover:tw-text-blue-500'
          }
        >
          <div>Terms of service</div>
          <div>Refund policy</div>
          <div>Privacy policy</div>
          <div>Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
