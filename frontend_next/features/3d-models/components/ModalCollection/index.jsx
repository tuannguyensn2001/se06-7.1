import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure, Badge,
} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import ModalCreateCollection from '@/features/3d-models/components/ModalCreateCollection';
import {useMemo} from "react";
import {addCollectionToModel} from "@/slices/model";
import {useMutation} from "react-query";
import {fetchUpdateCollectionModel} from "@/services/model";
import useToast from "@/hooks/useToast";

function ModalCollection({onClose, isOpen}) {
    const {list: collections} = useSelector((state) => state.collections);

    const {
        onOpen,
        isOpen: isOpenCreate,
        onClose: onCloseCreate,
    } = useDisclosure();

    const dispatch = useDispatch();

    const model = useSelector(state => state.model.current);

    const selectedModel = useMemo(() => {
        if (!model?.collections) return [];

        return model.collections.map(item => Number(item.id));
    }, [model]);

    const toast = useToast();

    const updateCollection = useMutation('update', async data => {
        const response = await fetchUpdateCollectionModel(data.id, {
            collection_id: data.collection_id
        });
        return response.data.data;
    }, {
        onSuccess(data) {
            dispatch(addCollectionToModel(data));
            toast.success("Thêm vào collection thành công");
        },
        onError(error) {
            toast.error("Thêm vào collection thất bại");
        }
    })

    const addToCollection = (id) => {
        updateCollection.mutate({
            id: model.id,
            collection_id: id
        })
    }

    return (
        <div>
            <ModalCreateCollection isOpen={isOpenCreate} onClose={onCloseCreate}/>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Thêm vào collection</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <div>
                            {/*<div>Tất cả collection</div>*/}

                            <div>
                                {collections.map((item) => (
                                    <div className={'tw-flex tw-justify-between'} key={item.id}>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {selectedModel.includes(Number(item.id)) ?
                                                <Badge colorScheme={'green'}>Đã thêm</Badge>
                                                : <Badge
                                                    onClick={() => addToCollection(item.id)}
                                                    className={'tw-cursor-pointer'}
                                                    colorScheme={'blue'}>Thêm </Badge>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onOpen} w={'100%'} colorScheme={'blue'}>
                            Tạo mới collection
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default ModalCollection;
