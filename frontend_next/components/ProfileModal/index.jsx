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

function ProfileModal({ isOpen, onClose, onSave, control }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đổi ảnh đại diện</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Controller
              control={control}
              name={'avatar'}
              render={({ field, fieldState: { error } }) => (
                <FormControl isInvalid={!!error}>
                  <FormLabel htmlFor={'avatar'}>Tải ảnh lên</FormLabel>
                  <Input type={'file'} id={'avatar'} {...field} />
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
              Lưu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileModal;
