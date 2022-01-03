import { Button, Input } from '@chakra-ui/react';
import styles from './style.module.scss';
import { Textarea } from '@chakra-ui/react';

function CommentInput() {
  return (
    <div className={'tw-flex '}>
      <div>
        <img
          className={'tw-h-10 tw-w-10 tw-object-cover tw-rounded-full'}
          src="https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg"
          alt=""
        />
      </div>
      <div className={styles.comment}>
        <Input placeholder={'Để lại bình luận của bạn ở đây'} />
        <div className={'tw-mt-2 tw-flex tw-justify-end'}>
          <Button size={'sm'} colorScheme={'blue'}>
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
