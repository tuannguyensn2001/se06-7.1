import Layout from '@/layouts/Default';
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

function MyCategories() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [categories, setCategories] = useState([]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Button onClick={onOpen}>Thêm mới</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm mới</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Controller
              rules={{
                required: 'Tên không được để trống',
              }}
              control={control}
              name={'name'}
              render={({
                field,
                fieldState: { error },
                formState: { errors },
              }) => (
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
              onClick={handleSubmit(submit)}
              variant="ghost"
            >
              Thêm mới
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
}

export default MyCategories;
