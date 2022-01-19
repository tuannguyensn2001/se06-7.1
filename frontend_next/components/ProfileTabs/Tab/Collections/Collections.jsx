import {Button, useDisclosure} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';

import Collection from './Collection';
import CollectionModal from "@/components/CollectionModal";
import {useDispatch, useSelector} from "react-redux";
import {useMutation} from "react-query";
import {fetchUpdateCollection} from "@/services/collection";
import useToast from "@/hooks/useToast";
import {updateCollection} from "@/slices/collection";

function Collections() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const toast = useToast();

    const dispatch = useDispatch();

    const list = useSelector(state => state.collections.list);

    const {control, handleSubmit, setValue, watch} = useForm({
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const update = useMutation('update', async (data) => {
        const response = await fetchUpdateCollection(data.id, data);
        return response.data.data;
    }, {
        onSuccess(data) {
            onClose();
            toast.success("Cập nhật collection thành công");
            dispatch(updateCollection(data))
        },
        onError(error) {
            toast.error("Cập nhật collection thất bại");
        }
    })

    const handleClickEdit = (id) => {
        const collection = list?.find(item => Number(item.id) === Number(id));
        setValue('name', collection.name);
        setValue('description', collection.description);
        setValue('id', id);

        onOpen();
    }

    const submit = (data) => {
        update.mutate(data);
    };

    return (
        <div className={'tw-pb-8'}>
            <Button colorScheme={'blue'} onClick={onOpen}>
                Thêm mới
            </Button>
            <CollectionModal
                isAddMode={true}
                isOpen={isOpen}
                onClose={onClose}
                onSave={handleSubmit(submit)}
                control={control}
            />
            <div className={'tw-grid tw-grid-cols-3 tw-gap-4'}>
                {list?.map(item => (
                    <Collection id={item.id} onEdit={handleClickEdit} name={item.name} key={item.id}/>
                ))}
            </div>
        </div>
    );
}

export default Collections;
