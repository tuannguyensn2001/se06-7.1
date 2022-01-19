import Layout from 'layouts/Default';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import useProfile from '@/hooks/useProfile';
import ProfileModal from 'components/ProfileModal';

function Profile() {
  const [data, setData] = useProfile();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    control,
    handleSubmit: imageSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      link: '',
    },
  });

  const {
    handleSubmit: dataSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(values);
        resolve();
        alert('Cập nhật thông tin thành công');
      }, 1000);
    });
  }

  const handleChangePic = () => {
    // Something i don't know
  };

  return (
    <Layout>
      <div className={'tw-mt-20 tw-flex-col tw-flex tw-mx-auto tw-w-10/12'}>
        <h1 className={'tw-font-bold tw-text-4xl tw-mb-8'}>
          Cập nhật thông tin
        </h1>
        <div className={'tw-flex tw-justify-between tw-gap-8'}>
          <div
            className={
              'tw-w-48 tw-shrink-0 tw-flex tw-flex-col tw-items-center tw-gap-10'
            }
          >
            <img
              className={'tw-h-48 tw-w-full tw-object-cover tw-rounded-full'}
              src="https://i.pinimg.com/originals/06/0f/a1/060fa1456039ddb5dc057fba0c26df38.jpg"
            />
            <Button onClick={onOpen}>Đổi ảnh</Button>
            <ProfileModal
              control={control}
              onSave={imageSubmit(handleChangePic)}
              isOpen={isOpen}
              onClose={onClose}
            />
          </div>
          <form className={'tw-w-full'} onSubmit={dataSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Tên người dùng</FormLabel>
              <Input
                id="name"
                placeholder={data?.name || 'Tên người dùng'}
                {...register('name', {
                  required: 'Tên không được để trống',
                  minLength: {
                    value: 4,
                    message: 'Độ dài tối thiểu 4 ký tự',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type={'email'}
                id="email"
                placeholder={data?.email || 'Email'}
                {...register('email', {
                  required: 'Email không được để trống',
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone}>
              <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
              <Input
                id="phone"
                placeholder={data?.phone || 'Số điện thoại'}
                {...register('phone', {
                  required: 'Số điện thoại không được để trống',
                })}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">Mật khẩu</FormLabel>
              <Input
                type={'password'}
                id="password"
                placeholder={data?.password || 'Mật khẩu'}
                {...register('password', {
                  required: 'Mật khẩu không được để trống',
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="telegram"
              isLoading={isSubmitting}
              type="submit"
            >
              Cập nhật
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
