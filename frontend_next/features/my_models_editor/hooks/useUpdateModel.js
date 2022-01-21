import {useMutation} from 'react-query';
import {fetchUpdateModel} from '@/services/model';
import useToast from "@/hooks/useToast";

export default function useUpdateModel(id) {

    const toast = useToast();

    return useMutation('update', (data) => fetchUpdateModel(id, data), {
        onSuccess(response) {
            toast.success("Cập nhật model thành công");
        },
        onError(error) {
            toast.error(error?.response?.data?.message);
        },
    });
}
