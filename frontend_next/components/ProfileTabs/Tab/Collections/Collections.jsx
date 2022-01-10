import { Button, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import Collection from './Collection';
import CollectionModal from 'components/CustomModal/CollectionModal';

function Collections() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const submit = () => {};

  return (
    <div className={'tw-pb-8'}>
      <Button colorScheme={'blue'} onClick={onOpen}>
        Thêm mới
      </Button>
      <CollectionModal
        isAddMode={true}
        isOpen={isOpen}
        onClose={onClose}
        onSave={handleSubmit(submit)}
        control={control}
      />
      <div className={'tw-grid tw-grid-cols-3 tw-gap-4'}>
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
}

export default Collections;
