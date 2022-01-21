function Configure({ link, title }) {
  return (
    <div className={'tw-flex tw-items-center tw-justify-between'}>
      <div
        className={
          'tw-bg-white tw-w-20 tw-h-20 tw-rounded-full tw-flex tw-items-center tw-justify-center'
        }
      >
        <img src={link} />
      </div>
      <div className={'tw-font-light tw-w-8/12'}>{title}</div>
    </div>
  );
}

export default Configure;
