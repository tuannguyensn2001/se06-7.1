import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import useCreateCollection from '@/features/3d-models/hooks/useCreateCollection';
import useToast from '@/hooks/useToast';
import { useForm } from 'react-hook-form';

function ModalCreateCollection({ isOpen, onClose }) {
  const toast = useToast();

  const create = useCreateCollection({
    onSuccess(data) {
      onClose();
      toast.success('Thêm mới collection thành công');
    },
    onError(error) {
      toast.error('Thêm mới collection thất bại. Vui lòng thử lại');
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const submit = (data) => {
    create.mutate({
      name: data.name,
      description: '',
    });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tạo mới collection </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className={'tw-mb-6'}>
            <Input
              placeholder={'Điền tên collection'}
              {...register('name', {
                required: 'Không được để trống',
              })}
            />
          </div>
          <hr />
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={handleSubmit(submit)}
            w={'100%'}
            colorScheme={'blue'}
          >
            Tạo mới
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalCreateCollection;
