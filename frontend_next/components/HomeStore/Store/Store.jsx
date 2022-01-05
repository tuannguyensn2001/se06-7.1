function Store({ link, title, description }) {
  return (
    <div className={'tw-text-center'}>
      <div>
        <img src={link} />
      </div>
      <div className={'tw-text-xl tw-font-bold'}>{title}</div>
      <div className={'tw-text-sm tw-font-light tw-my-4'}>{description}</div>
      <a href="#" className={'tw-text-red-500 tw-cursor-pointer'}>
        See an example
      </a>
    </div>
  );
}

export default Store;
