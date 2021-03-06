import CardModel from '@/components/CardModel';
import { useState } from 'react';
import { fetchMyModel } from '@/services/model';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { Button, Skeleton } from '@chakra-ui/react';

function MyModels() {
  const {
    data: models,
    isLoading,
    isSuccess,
  } = useQuery('models', async () => {
    const response = await fetchMyModel();
    return response.data.data;
  });

  return (
    <div>
      <div className={'tw-flex tw-justify-between'}>
        <h3 className={'tw-font-bold tw-text-2xl'}>Models của tôi</h3>
        <Link href={'/my-models/create'}>
          <Button colorScheme={'blue'}>Tạo mới</Button>
        </Link>
      </div>

      <div>
        <div className={'tw-grid tw-grid-cols-3 tw-gap-4'}>
          {isSuccess &&
            models?.map((model) => (
              <CardModel
                isPublish={!!model?.is_publish}
                id={model.id}
                name={model.name}
                preview={model.preview}
                key={model.id}
              />
            ))}
          {isLoading &&
            [1, 2, 3].map((item) => (
              <div key={item} className={'tw-flex tw-flex-col'}>
                <Skeleton height={'300px'} />
                <Skeleton className={'tw-mt-2'} height={'30px'} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyModels;
