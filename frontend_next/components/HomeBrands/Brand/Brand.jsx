function Brand({ link }) {
  return (
    <div className={'tw-px-10 tw-flex tw-items-center tw-justify-center'}>
      <img className={'tw-max-w-full tw-max-h-16'} src={link} />
    </div>
  );
}

export default Brand;
