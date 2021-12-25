import Layout from '@/layouts/Default';
import ModelViewer from '@/components/ModelViewer';
import styles from './style.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import TabModel from '@/features/my_models_editor/components/TabModel';
import EditorContext from '@/features/my_models_editor/context';
import { useForm } from 'react-hook-form';
import { Button, useDisclosure } from '@chakra-ui/react';
import Media from '@/components/Media';
import { useMutation } from 'react-query';
import { fetchUploadFile } from '@/services';

function MyModelsCreate() {
  const model = useRef(null);

  const { control, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      cameraOrbit: [
        { value: undefined },
        { value: undefined },
        { value: undefined },
      ],
      minCameraOrbit: [
        { value: undefined },
        { value: undefined },
        { value: undefined },
      ],
      maxCameraOrbit: [
        { value: undefined },
        { value: undefined },
        { value: undefined },
      ],
      cameraTarget: [
        { value: undefined },
        { value: undefined },
        { value: undefined },
      ],
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const uploadFile = useMutation(
    'upload',
    (data) => {
      return fetchUploadFile(data);
    },
    {
      onSuccess(response) {
        const { path } = response.data.data;
        setValue('src', path);
        onClose();
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const [typeUpload, setTypeUpload] = useState('');

  const openUploadType = (type) => {
    return () => {
      setTypeUpload(type);
      onOpen();
    };
  };

  const submit = (data) => {
    console.log(data);
  };

  const onDropFile = (files) => {
    const [file] = files;
    const form = new FormData();

    form.append('file', file);
    form.append('type', typeUpload);

    uploadFile.mutate(form);
  };

  return (
    <Layout>
      <Media onDrop={onDropFile} isOpen={isOpen} onClose={onClose} />
      <div className={styles.main}>
        <div
          className={clsx([
            'tw-grid tw-grid-cols-12 tw-gap-4 tw-divide-x tw-h-full ',
            styles.main,
          ])}
        >
          <EditorContext.Provider value={{ control, watch }}>
            <div className={'tw-h-full tw-w-full tw-col-span-9 '}>
              {!watch('src') && (
                <div
                  className={'tw-flex tw-justify-center tw-h-full tw-w-full'}
                >
                  <div className={'tw-flex tw-flex-col tw-justify-center'}>
                    <div>Bạn chưa có model</div>
                    <div className={'tw-flex tw-justify-center'}>
                      <Button onClick={openUploadType('models')}>Upload</Button>
                    </div>
                  </div>
                </div>
              )}
              {!!watch('src') && (
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
                />
              )}
            </div>
            <div className={styles.editor}>
              <Button onClick={handleSubmit(submit)}>Lưu</Button>
              <TabModel />
            </div>
          </EditorContext.Provider>
        </div>
      </div>
    </Layout>
  );
}

export default MyModelsCreate;
