function CardMiniModel() {
    return (
        <div className={'tw-grid tw-grid-cols-2 tw-h-24  tw-bg-white tw-rounded tw-shadow-2xl'}>
            <div className={'tw-h-full'}>
                <img
                    className={'tw-h-24 tw-object-cover tw-w-full'}
                    src="https://i.pinimg.com/originals/0f/74/88/0f7488956057f391e4804ec913b48430.jpg" alt=""/>
            </div>
            <div>
                <div className={'tw-pl-5 tw-pt-3'}>
                    <div>
                        tên
                    </div>
                    <div>tác giả</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default CardMiniModel;