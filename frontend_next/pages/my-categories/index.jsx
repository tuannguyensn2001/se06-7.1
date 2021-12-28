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
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { set, get } from './localData.js';

import CustomModal from './CustomModal.jsx';

function MyCategories() {
  let localData = get();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [categories, setCategories] = useState(localData);

  const [isAddMode, setIsAddMode] = useState(true);

  const [editId, setEditId] = useState(0);

  const buttonRef = useRef();

  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     name: '',
  //   },
  // });

  useEffect(() => {
    set(categories);
  }, [categories]);

  const handleSubmit = (data) => {
    return isAddMode ? handleAdd(data) : handleEdit(data);
  };

  const handleAdd = (data) => {
    // Add data into categories
    setCategories((categories) => [...categories, data.name]);
  };

  const HandleDelete = (index) => {
    const newArray = [...categories];
    newArray.splice(index, 1);
    setCategories(newArray);
  };

  const handleEdit = (data) => {
    let newCategories = [...categories];
    newCategories[editId] = data.name;
    setCategories(newCategories);
    setIsAddMode(true);
  };

  return (
    <Layout>
      <Button ref={buttonRef} onClick={onOpen}>
        Add new
      </Button>
      <CustomModal
        isAddMode={isAddMode}
        onSubmit={handleSubmit}
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
          {categories.map((category, index) => (
            <Tr key={index}>
              <Td>{category}</Td>
              <Td>
                <Button
                  data-category-btn={index}
                  onClick={(e) => {
                    setIsAddMode(false);
                    buttonRef.current.click();
                    setEditId(parseInt(e.target.dataset.categoryBtn));
                  }}
                >
                  Edit
                </Button>
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
