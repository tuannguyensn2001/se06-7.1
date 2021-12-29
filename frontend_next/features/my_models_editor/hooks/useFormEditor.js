import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import defineModel from '@/defines/model';

export default function useFormEditor() {
  const form = useForm({
    defaultValues: defineModel.defaultValue,
  });

  return form;
}
