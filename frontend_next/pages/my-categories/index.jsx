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
import { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { set, get } from './localData.js';

import CustomModal from './CustomModal.jsx';
import useCategories from '@/hooks/useCategories';

function MyCategories() {
  // let localData = get();
  //
  // const { isOpen, onClose, onOpen } = useDisclosure();
  //
  // const [categories, setCategories] = useState(localData);
  //
  // const [isAddMode, setIsAddMode] = useState(true);
  //
  // const [editId, setEditId] = useState(0);
  //
  // const buttonRef = useRef();
  //
  // // const { control, handleSubmit } = useForm({
  // //   defaultValues: {
  // //     name: '',
  // //   },
  // // });
  //
  // useEffect(() => {
  //   set(categories);
  // }, [categories]);
  //
  // const handleSubmit = (data) => {
  //   return isAddMode ? handleAdd(data) : handleEdit(data);
  // };
  //
  const handleAdd = (data) => {
    // Add data into categories
    setCategories((categories) => [...categories, data.name]);
  };
  //
  // const HandleDelete = (index) => {
  //   const newArray = [...categories];
  //   newArray.splice(index, 1);
  //   setCategories(newArray);
  // };
  //
  // const handleEdit = (data) => {
  //   let newCategories = [...categories];
  //   newCategories[editId] = data.name;
  //   setCategories(newCategories);
  //   setIsAddMode(true);
  // };

  const [categories, setCategories] = useCategories();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const [currentIndex, setCurrentIndex] = useState(null);

  const isAddMode = useMemo(() => {
    return currentIndex === null;
  }, [currentIndex]);

  const submit = (data) => {
    if (isAddMode) {
      handleAdd(data);
    } else {
      console.log('edit');
    }

    onClose();
  };

  const onClickEdit = (index) => {
    return () => {
      setCurrentIndex(index);
      setValue('name', categories[index]);
      onOpen();
    };
  };

  return (
    <Layout>
      <Button onClick={onOpen}>Add new</Button>
      <CustomModal
        isAddMode={isAddMode}
        control={control}
        onSave={handleSubmit(submit)}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories?.map((category, index) => (
            <Tr key={index}>
              <Td>{category}</Td>
              <Td>
                <Button onClick={onClickEdit(index)}>Edit</Button>
                <Button>Delete</Button>
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
