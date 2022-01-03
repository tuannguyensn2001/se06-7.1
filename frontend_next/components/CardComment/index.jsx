function CardComment({ content }) {
  return (
    <div>
      <hr />
      <div className={'tw-flex tw-mt-5'}>
        <div>
          <img
            className={'tw-h-10 tw-w-10 tw-object-cover tw-rounded-full'}
            src="https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg"
            alt=""
          />
        </div>
        <div className={'tw-ml-3'}>
          <div
            className={
              'tw-font-bold tw-text-lg tw-text-sky-700 tw-cursor-pointer '
            }
          >
            tuannguyensn2001
          </div>
          <div className={'tw-text-gray tw-text-xs tw-mt-2'}>20 days ago</div>
          <div className={'tw-mt-3'}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default CardComment;
