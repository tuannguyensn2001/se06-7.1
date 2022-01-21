import { useMutation } from 'react-query';
import { fetchCreateModel } from '@/features/my_models_editor/services';
import { useRouter } from 'next/router';
import useToast from '@/hooks/useToast';

export default function useCreateModel() {
  const router = useRouter();

  const fire = useToast();

  return useMutation(
    'create',
    async (data) => {
      return await fetchCreateModel(data);
    },
    {
      async onSuccess(response) {
        await router.push('/manager');
        fire.success(response?.data?.message);
      },
      onError(error) {
        fire.error(error?.response?.data?.message);
      },
    }
  );
}
