import useEditorContext from '@/features/my_models_editor/hooks/useEditorContext';
import {
  Input,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import Tag from '@/features/my_models_editor/components/Tag';

function TabGeneral() {
  const { control } = useEditorContext();

  return (
    <div>
      <div>
        <Controller
          rules={{ required: 'Tên không được để trống' }}
          control={control}
          name={'name'}
          render={({ field, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <FormLabel htmlFor={'name'}>Tên</FormLabel>
              <Input {...field} id={'name'} />
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name={'description'}
          render={({ field }) => (
            <FormControl>
              <FormLabel htmlFor={'description'}>Mô tả</FormLabel>
              <Textarea {...field} id={'description'} />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Tag />
      </div>
    </div>
  );
}

export default TabGeneral;
