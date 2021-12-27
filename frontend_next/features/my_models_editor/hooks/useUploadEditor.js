import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchUploadFile } from '@/services';

export default function useUploadEditor({ onOpen, onSuccess }) {
  const [typeUpload, setTypeUpload] = useState('models');

  const openUploadType = (type) => {
    return () => {
      setTypeUpload(type);
      onOpen();
    };
  };

  const uploadFile = useMutation(
    'upload',
    (data) => {
      return fetchUploadFile(data);
    },
    {
      onSuccess(response) {
        const { path, type } = response.data.data;
        const map = {
          models: 'src',
          skybox: 'skybox',
        };
        // setValue(map[type], path);
        // onClose();
        onSuccess(map[type], path);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const onDropFile = (files) => {
    const [file] = files;
    const form = new FormData();

    form.append('file', file);
    form.append('type', typeUpload);

    uploadFile.mutate(form);
  };

  return { typeUpload, setTypeUpload, openUploadType, onDropFile };
}
