import ModelViewer from '@/components/ModelViewer';
import styles from './style.module.scss';
import clsx from 'clsx';
import {useEffect, useRef} from 'react';
import TabModel from '@/features/my_models_editor/components/TabModel';
import EditorContext from '@/features/my_models_editor/context';
import {Button, useDisclosure} from '@chakra-ui/react';
import Media from '@/components/Media';
import HeaderEditor from '@/features/my_models_editor/components/HeaderEditor';
import useUploadEditor from '@/features/my_models_editor/hooks/useUploadEditor';
import useFormEditor from '@/features/my_models_editor/hooks/useFormEditor';
import useCreateModel from '@/features/my_models_editor/hooks/useCreateModel';
import WithAuth from '@/components/WithAuth';
import {useRouter} from 'next/router';
import {useMutation, useQuery} from 'react-query';
import {fetchMyModel, fetchPublishModel} from '@/services/model';
import {fetchModel} from '@/features/my_models_editor/services';
import defineModel from '@/defines/model';
import MySwal from '@/components/MySwal';
import useUpdateModel from '@/features/my_models_editor/hooks/useUpdateModel';

function MyModelsEdit() {
    const model = useRef(null);

    const {isOpen, onOpen, onClose} = useDisclosure();

    const {control, watch, handleSubmit, setValue, reset} = useFormEditor();

    useEffect(() => {
        console.log('tags', watch('tags'));
    }, [watch('tags')]);

    const {
        query: {id},
        push
    } = useRouter();

    const update = useUpdateModel(id);

    useQuery(
        ['model', id],
        async () => {
            return await fetchModel(id);
        },
        {
            enabled: !!id,
            onSuccess(response) {
                const {
                    data: {
                        data,
                    },
                } = response;
                const {model, name, tags} = data;
                reset({
                    ...defineModel.defaultValue,
                    ...data,
                    src: model,
                    name,
                    tags: tags.map((item) => ({
                        value: item.name,
                        label: item.name,
                    })),
                    can_download: data.can_download,
                    disableZoom: data.disable_zoom

                });
            },
            onError(error) {
                console.log(error);
            },
        }
    );

    const publish = useMutation('publish', () => fetchPublishModel(id), {
        onSuccess(response) {
            push(`/3d-models/${id}`)
            MySwal.fire({
                text: response.data.message,
                icon: 'success',
                title: 'Thành công',
            });

        },
        onError(error) {
            console.log(error);
        },
    });

    const {openUploadType, onDropFile} = useUploadEditor({
        onOpen,
        onSuccess(type, value) {
            setValue(type, value);
            onClose();
        },
    });

    const handlePublish = () => {
        publish.mutate();
    };

    const submit = (data) => {
        const payload = {
            name: data.name,
            model: data.src,
            disable_zoom: Boolean(data?.disableZoom) || null,
            camera_control: Boolean(data?.cameraControls) || null,
            auto_rotate: Boolean(data?.autoRotate) || null,
            auto_rotate_delay: data?.auto_rotate_delay || null,
            skybox: data?.skybox || null,
            rotation_per_second: data?.rotationPerSecond || null,
            interaction_policy: data?.interactionPolicy || null,
            field_of_view: data?.fieldOfView || null,
            preview: model.current.capture(),
            max_field_of_view: null,
            min_field_of_view: null,
            interpolation_decay: null,
            tags: data.tags.map((item) => item.value),
            can_download: data.can_download
        };
        update.mutate(payload);
    };

    return (
        <div>
            <HeaderEditor
                onClickPublish={handlePublish}
                showPublish
                onClickSave={handleSubmit(submit)}
            />

            <div className={styles.main}>
                <div
                    className={clsx([
                        'tw-grid tw-grid-cols-12  tw-divide-x tw-h-full ',
                        styles.main,
                    ])}
                >
                    <Media
                        overlay
                        onDrop={onDropFile}
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                    <EditorContext.Provider value={{control, watch}}>
                        <div className={'tw-h-full tw-w-full tw-col-span-9 '}>
                            {/*<div className={'tw-flex tw-justify-center tw-h-full tw-w-full'}>*/}
                            {/*  <div className={'tw-flex tw-flex-col tw-justify-center'}>*/}
                            {/*    <div>Bạn chưa có model</div>*/}
                            {/*    <div className={'tw-flex tw-justify-center'}>*/}
                            {/*      <Button onClick={openUploadType('models')}>Upload</Button>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            <ModelViewer
                                ref={model}
                                // src={"http://localhost:3000//Horse.glb"}
                                src={watch('src')}
                                cameraControls={watch('cameraControls')}
                                disableZoom={!watch('disableZoom')}
                                autoRotate={watch('autoRotate')}
                                autoRotateDelay={watch('autoRotateDelay')}
                                rotationPerSecond={watch('rotationPerSecond')}
                                cameraOrbit={watch('cameraOrbit')?.map((item) =>
                                    Number(item.value)
                                )}
                                minCameraOrbit={watch('minCameraOrbit')?.map((item) =>
                                    Number(item.value)
                                )}
                                maxCameraOrbit={watch('maxCameraOrbit')?.map((item) =>
                                    Number(item.value)
                                )}
                                cameraTarget={watch('cameraTarget')?.map((item) =>
                                    Number(item.value)
                                )}
                                fieldOfView={watch('fieldOfView')}
                                minFieldOfView={watch('minFieldOfView')}
                                maxFieldOfView={watch('maxFieldOfView')}
                                interactionPolicy={watch('interactionPolicy')}
                                interpolationDecay={watch('interpolationDecay')}
                                srcSkybox={watch('skybox')}
                            />
                        </div>

                        <div className={styles.editor}>
                            <TabModel onClickUpload={openUploadType}/>
                        </div>
                    </EditorContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default WithAuth(MyModelsEdit);
