import {ViewIcon, StarIcon, ChatIcon} from '@chakra-ui/icons';
import Link from 'next/link';

function Community({link, name, view, chat, star, id}) {
    return (
        <Link href={`/3d-models/${id}`}>
            <div className={'tw-rounded-md tw-shadow-md tw-overflow-hidden tw-cursor-pointer'}>
                <div className={'tw-overflow-hidden'}>
                    <img
                        src={
                            link ||
                            'https://images.firstpost.com/wp-content/uploads/2020/04/meme02-3805.jpg?impolicy=website&width=1200&height=800'
                        }
                        width={'100%'}
                    />
                </div>
                <div
                    className={
                        'tw-flex tw-justify-between tw-items-center tw-p-2.5 tw-text-xs'
                    }
                >
                    <div
                        className={
                            'tw-overflow-hidden tw-whitespace-nowrap tw-text-ellipsis tw-w-6/12'
                        }
                    >
                        <span>{name}</span>
                    </div>
                    <div
                        className={
                            'tw-flex tw-w-6/12 tw-pl-2 tw-items-center tw-justify-between tw-text-slate-500'
                        }
                    >
                        <ViewIcon/> {view}
                        <ChatIcon/> {chat}
                        <StarIcon/> {star}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Community;
