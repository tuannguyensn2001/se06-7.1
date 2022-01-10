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
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos neque in voluptatem aliquid et cupiditate pariatur ab non, fuga velit eum reiciendis dolor omnis vel dolorem fugit sit illum culpa. Doloribus porro nisi dolore deserunt id? Asperiores nihil, suscipit, expedita iste, id ipsa nam voluptatum non eveniet ipsam eos magni consequuntur culpa. Hic dolores minima amet eaque quisquam fugit deleniti.',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nulla assumenda, deleniti eos quas soluta facilis expedita voluptas dolorem exercitationem nobis earum beatae debitis, fugit quam suscipit doloribus tenetur iste!',
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
      <hr />
    </div>
  );
}

export default CommentList;
