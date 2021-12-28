import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';

function CustomModal({ modalHeader, onSubmit, buttonContent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });
  return (
    <>
      <Button onClick={onOpen}>{modalHeader}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Controller
              rules={{
                required: 'Tên không được để trống',
              }}
              control={control}
              name={'name'}
              render={({ field, fieldState: { error } }) => (
                <FormControl isInvalid={!!error}>
                  <FormLabel htmlFor={'name'}>Tên danh mục</FormLabel>
                  <Input id={'name'} {...field} />
                  <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Hủy
            </Button>
            <Button
              type={'button'}
              onClick={handleSubmit(onSubmit)}
              variant="ghost"
            >
              {buttonContent}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
