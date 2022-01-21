import CommentInput from '@/components/CommentInput';
import CardComment from '@/components/CardComment';
import {useEffect, useState} from 'react';
import pusher from '@/utils/pusher';
import {useRouter} from 'next/router';
import {useMutation, useQuery} from 'react-query';
import {fetchCreateComment, fetchModelComments} from '@/services/comment';
import {useImmer} from 'use-immer';
import {useSelector} from "react-redux";

function CommentList() {

    const {isAuth} = useSelector(state => state.auth);

    const {
        query: {id},
    } = useRouter();

    const [comments, setComments] = useState([]);

    const {data} = useQuery(
        'comments',
        async () => {
            const response = await fetchModelComments(id);
            return response.data.data;
        },
        {
            onSuccess(data) {
                setComments([...data]);
            },
        }
    );

    const postComment = useMutation(
        'comment',
        async (data) => {
            const response = await fetchCreateComment(data);
            return response.data.data;
        },
        {
            onSuccess(data) {
                // setComments((prevState) => [data, ...prevState]);
            },
            onError(error) {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        const channel = pusher.subscribe(`view-detail-model-${id}`);
        channel.bind('comment-created', (data) => {

            setComments((prevState) => [data.comment, ...prevState]);
        });


    }, [id]);

    const handlePostComment = (data) => {
        const {comment} = data;
        postComment.mutate({
            content: comment,
            id,
            type: 'model',
        });
    };

    return (
        <div>
            <div className={'tw-mt-5'}>
                {isAuth && <CommentInput handlePostComment={handlePostComment}/>}
            </div>
            <div>
                {comments?.map((item) => (
                    <CardComment created_at={item.created_at} avatar={item?.user?.avatar} content={item.content}
                                 key={item.id}/>
                ))}
            </div>
            <hr/>
        </div>
    );
}

export default CommentList;
