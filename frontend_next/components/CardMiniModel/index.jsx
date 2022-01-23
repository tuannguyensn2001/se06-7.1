import Link from 'next/link';
import {Tooltip} from "@chakra-ui/react";

function CardMiniModel({preview, id, name, author}) {
    return (

        <Link href={`/3d-models/${id}`} className={'tw-flex '}>
            <Tooltip placement={'top'} label={name}>
                <div
                    className={'tw-grid tw-grid-cols-2 tw-h-32 tw-w-4/5 tw-cursor-pointer  tw-bg-white tw-rounded tw-shadow-xl hover:tw-shadow-2xl'}>
                    <div className={'tw-h-full'}>
                        <img
                            className={'tw-h-32 tw-object-cover tw-w-full'}
                            src={preview || "https://i.pinimg.com/originals/0f/74/88/0f7488956057f391e4804ec913b48430.jpg"}
                            alt=""/>
                    </div>
                    <div className={'tw-flex tw-flex-col tw-justify-center'}>
                        <div className={'tw-pl-5 '}>
                            <div className={'tw-font-bold tw-text-lg tw-truncate'}>
                                {name}
                            </div>
                            <div>{author}</div>
                        </div>

                    </div>
                </div>
            </Tooltip>
        </Link>

    )
}

export default CardMiniModel;