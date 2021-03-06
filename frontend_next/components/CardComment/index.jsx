import {Button} from '@chakra-ui/react';
import {formatDistance, format, formatDistanceToNow} from "date-fns";
import viLocale from "date-fns/locale/vi";

function CardComment({content, avatar, created_at, name}) {
    return (
        <div>
            <hr/>
            <div className={'tw-flex tw-mt-5'}>
                <div className={'tw-w-10 tw-h-10'}>
                    <img
                        className={'tw-h-full tw-w-full tw-object-cover tw-rounded-full'}
                        // src="https://genk.mediacdn.vn/139269124445442048/2021/10/8/photo-1-16336740561941499902920.jpg"
                        src={avatar}
                        alt=""
                    />
                </div>
                <div className={'tw-ml-3 tw-w-full'}>
                    <div
                        className={
                            'tw-font-medium tw-text-lg tw-text-sky-500 tw-cursor-pointer'
                        }
                    >
                        {name}
                    </div>
                    <div className={'tw-text-gray tw-text-xs tw-text-gray-400'}>
                        {formatDistanceToNow(new Date(created_at), {addSuffix: true, locale: viLocale})}

                    </div>
                    <div className={'tw-mt-3 tw-mb-8'}>{content}</div>
                </div>
            </div>
        </div>
    );
}

export default CardComment;
