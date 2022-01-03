import { useMutation } from 'react-query';
import { fetchUpdateModel } from '@/services/model';

export default function useUpdateModel(id) {
  return useMutation('update', (data) => fetchUpdateModel(id, data), {
    onSuccess(response) {
      console.log(response);
    },
    onError(error) {
      console.log(error);
    },
  });
}
