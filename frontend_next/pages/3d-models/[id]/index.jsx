import Layout from '@/layouts/Default';
import ModelViewer from '@/components/ModelViewer';
import styles from './style.module.scss';
import ProfileModel from '@/features/3d-models/components/Profile';
import Action from '@/features/3d-models/components/Action';
import TagList from '@/features/3d-models/components/TagList';
import CommentList from '@/features/3d-models/components/CommentList';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import pusher from '@/utils/pusher';
import {useQuery} from "react-query";
import {fetchModel} from "@/services/model";
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

    const {isAuth} = useSelector(state => state.auth);

    return (
        <Layout>
            <div className={'tw-grid tw-grid-cols-12 tw-gap-20 tw-mt-20 tw-px-5 '}>
                <div className={'tw-col-span-9'}>
                    <div className={styles.model}>
                        <ModelViewer
                            cameraControls
                            src={
                                data?.model
                            }
                        />
                    </div>
                    <div className={'tw-mt-5'}>
                        <h4 className={'tw-font-bold tw-text-2xl'}>{data?.name}</h4>
                        <p>3d Model</p>
                    </div>
                    <div className={'tw-mt-10'}>
                        <ProfileModel user={data?.user}/>
                        <div className={'tw-my-5'}>
                            {isAuth && <Action/>}
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
                        <div>Gợi ý</div>
                        <div>
                            <CardMiniModel/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Model3D;
