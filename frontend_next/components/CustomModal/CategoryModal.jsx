import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

function CategoryModal({ isAddMode, isOpen, onClose, onSave, control }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isAddMode ? 'Add new' : 'Editing'}</ModalHeader>
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
            <Button type={'button'} onClick={onSave} variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CategoryModal;
