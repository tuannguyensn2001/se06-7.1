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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { set, get } from './localData.js';

import CustomModal from './CustomModal.jsx';

function MyCategories() {
  let localData = get();

  // const { isOpen, onClose, onOpen } = useDisclosure();

  const [categories, setCategories] = useState(localData);

  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     name: '',
  //   },
  // });

  useEffect(() => {
    set(categories);
  }, [categories]);

  const handleAdd = (data) => {
    // Add data into categories
    setCategories((categories) => [...categories, data.name]);
  };

  const HandleDelete = (index) => {
    const newArray = [...categories];
    newArray.splice(index, 1);
    setCategories(newArray);
  };

  const handleEdit = (index, data) => {
    let newCategories = [...categories];
    newCategories[index] = data.name;
    setCategories(newCategories);
  };

  return (
    <Layout>
      {/* <Button onClick={onOpen}>Thêm mới</Button> */}
      <CustomModal
        modalHeader="Add new"
        onSubmit={handleAdd}
        buttonContent="Save"
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((category, index) => (
            <Tr key={index}>
              <Td>{category}</Td>
              <Td>
                <CustomModal
                  modalHeader="Edit"
                  onSubmit={() => handleEdit(index)}
                  buttonContent="Save"
                />
                <Button onClick={() => HandleDelete(index)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
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
              onClick={handleSubmit(submit)}
              variant="ghost"
            >
              Thêm mới
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Layout>
  );
}

export default MyCategories;
