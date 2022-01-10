import { Button, Input } from '@chakra-ui/react';
import styles from './style.module.scss';
import { Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function CommentInput({ handlePostComment }) {
  const { handleSubmit, register } = useForm();

  const submit = (data) => {
    handlePostComment(data);
  };

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
        <form onSubmit={handleSubmit(submit)}>
          <Input
            {...register('comment', {
              required: 'Bình luận không được để trống',
            })}
            placeholder={'Để lại bình luận của bạn ở đây'}
          />
          <div className={'tw-mt-2 tw-flex tw-justify-end'}>
            <Button type={'submit'} size={'sm'} colorScheme={'blue'}>
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentInput;
