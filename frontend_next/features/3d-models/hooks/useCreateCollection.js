import { useMutation } from 'react-query';
import { fetchCreateCollection } from '@/services/collection';
import { useDispatch } from 'react-redux';
import { addCollection } from '@/slices/collection';

export default function useCreateCollection({ onSuccess, onError }) {
  const dispatch = useDispatch();
  return useMutation(
    'create',
    async (data) => {
      const response = await fetchCreateCollection(data);
      return response.data.data;
    },
    {
      onSuccess(data) {
        dispatch(addCollection(data));
        onSuccess(data);
      },
      onError(error) {
        onError(error);
      },
    }
  );
}
