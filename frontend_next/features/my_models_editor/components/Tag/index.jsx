import { useMemo, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import useEditorContext from '@/features/my_models_editor/hooks/useEditorContext';
import { Controller } from 'react-hook-form';
import { useQuery } from 'react-query';
import { fetchTags } from '@/services/tags';

function Tag() {
  const { data: tags, isSuccess } = useQuery(
    'tags',
    async () => {
      const response = await fetchTags();
      return response.data.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const options = useMemo(() => {
    return (
      tags?.map((item) => ({
        value: item.name,
        label: item.name,
      })) || []
    );
  }, [tags]);

  const { control } = useEditorContext();

  return (
    <div>
      <div>Tag</div>
      <div>
        {isSuccess && (
          <Controller
            control={control}
            name={'tags'}
            render={({ field }) => (
              <CreatableSelect
                isMulti
                options={options}
                onChange={(newValue) => field.onChange(newValue)}
                value={field.value}
              />
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Tag;
