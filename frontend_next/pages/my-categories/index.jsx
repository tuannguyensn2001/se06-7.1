import Layout from '@/layouts/Default';
import {
  Button,
  ButtonGroup,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import CategoryModal from 'components/CustomModal/CategoryModal';
import useCategories from '@/hooks/useCategories';

function MyCategories() {
  const [categories, setCategories] = useCategories();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAdd = (data) => {
    setCategories((categories) => [...categories, data.name]);
  };

  const handleDelete = (index) => {
    const newArray = [...categories];
    newArray.splice(index, 1);
    setCategories(newArray);
  };

  const handleEdit = (data) => {
    let newCategories = [...categories];
    newCategories[currentIndex] = data.name;
    setCategories(newCategories);
    setCurrentIndex(null);
  };

  const isAddMode = useMemo(() => {
    return currentIndex === null;
  }, [currentIndex]);

  const submit = (data) => {
    if (isAddMode) {
      handleAdd(data);
    } else {
      handleEdit(data);
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
      <div className="tw-flex tw-flex-col tw-items-end tw-mx-auto tw-max-w-screen-md tw-mt-24">
        <Button
          colorScheme={'orange'}
          className="tw-float-right"
          onClick={onOpen}
        >
          + Add
        </Button>
        <CategoryModal
          isAddMode={isAddMode}
          control={control}
          onSave={handleSubmit(submit)}
          isOpen={isOpen}
          onClose={onClose}
        />
        <Table variant="simple" size={'md'}>
          <Thead>
            <Tr>
              <Th className="tw-w-9/12">Name</Th>
              <Th className="tw-w-3/12">Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories?.map((category, index) => (
              <Tr key={index}>
                <Td>{category}</Td>
                <Td>
                  <ButtonGroup variant="solid" spacing="6">
                    <Button onClick={onClickEdit(index)}>Edit</Button>
                    <Button
                      colorScheme={'telegram'}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default MyCategories;
