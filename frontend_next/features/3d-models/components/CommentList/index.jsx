import CommentInput from '@/components/CommentInput';
import CardComment from '@/components/CardComment';
import { useEffect, useState } from 'react';
import pusher from '@/utils/pusher';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchModelComments } from '@/services/comment';
import { useImmer } from 'use-immer';

function CommentList() {
  const {
    query: { id },
  } = useRouter();

  const [comments, setComments] = useState([
    {
      id: 1,
      content: 'abc',
    },
  ]);

  // const { data } = useQuery(
  //   'comments',
  //   async () => {
  //     const response = await fetchModelComments(id);
  //     return response.data.data;
  //   },
  //   {
  //     onSuccess(data) {
  //       setComments([...data]);
  //     },
  //   }
  // );

  useEffect(() => {
    const channel = pusher.subscribe(`view-detail-model-${id}`);
    channel.bind('comment-created', (data) => {
      setComments((prevState) => [data.comment, ...prevState]);
    });
  }, [id]);

  return (
    <div>
      <div className={'tw-mt-5'}>
        <CommentInput />
      </div>
      <div>
        {comments?.map((item) => (
          <CardComment content={item.content} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
