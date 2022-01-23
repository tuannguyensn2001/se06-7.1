import Layout from '@/layouts/Default';
import ModelViewer from '@/components/ModelViewer';
import styles from './style.module.scss';
import ProfileModel from '@/features/3d-models/components/Profile';
import Action from '@/features/3d-models/components/Action';
import TagList from '@/features/3d-models/components/TagList';
import CommentList from '@/features/3d-models/components/CommentList';
import {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import pusher from '@/utils/pusher';
import {useQuery} from "react-query";
import {fetchModel, fetchSuggestModel} from "@/services/model";
import {useDispatch, useSelector} from "react-redux";
import CardMiniModel from "@/components/CardMiniModel";
import {setModel} from "@/slices/model";

function Model3D() {

    const {query: {id}} = useRouter();

    const dispatch = useDispatch();

    const {data} = useQuery(['model', id], async () => {
        const response = await fetchModel(id);
        return response.data.data;
    }, {
        onSuccess(data) {
            dispatch(setModel(data));
        }
    });

    const {data: suggest} = useQuery('model', async () => {
        const response = await fetchSuggestModel();
        return response.data.data;
    })

    const {isAuth} = useSelector(state => state.auth);

    const model = useRef(null);

    const handleDownload = () => {
        model.current.download();
    }

    return (
        <Layout>
            <div className={'tw-grid tw-grid-cols-12 tw-gap-10 tw-mt-20 tw-px-5 '}>
                <div className={'tw-col-span-9'}>
                    <div className={styles.model}>
                        <ModelViewer
                            ref={model}
                            cameraControls
                            src={
                                data?.model
                            }
                            skybox={data?.skybox}
                        />
                    </div>
                    <div className={'tw-mt-5'}>
                        <h4 className={'tw-font-bold tw-text-2xl'}>{data?.name}</h4>
                        <p>3d Model</p>
                    </div>
                    <div className={'tw-mt-10'}>
                        <ProfileModel user={data?.user}/>
                        <div className={'tw-my-5'}>
                            {isAuth && <Action canDownload={data?.can_download} handleDownload={handleDownload}/>}
                        </div>
                        <hr/>
                        <div>{/*<TagList />*/}</div>
                        <div>
                            <CommentList/>
                        </div>
                    </div>
                </div>
                <div className={'tw-col-span-3'}>
                    <div>
                        <div className={'tw-font-bold tw-text-xl'}>Gợi ý</div>
                        <div>
                            {suggest?.map(item => (
                                <div className={'tw-mt-8'} key={item.id}>
                                    <CardMiniModel name={item.name} author={item?.user?.name} id={item.id}
                                                   preview={item.preview}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Model3D;
