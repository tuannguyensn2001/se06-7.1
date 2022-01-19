import {Controller, useForm} from "react-hook-form";
import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {useMutation} from "react-query";
import {fetchUpdatePassword} from "@/services";
import {useRouter} from "next/router";
import useToast from "@/hooks/useToast";

function TabPassword() {

    const {control, handleSubmit, watch, reset} = useForm();

    const router = useRouter();

    const toast = useToast();

    const changePassword = useMutation('change-password', async data => {
        const response = await fetchUpdatePassword(data);
        return response.data;
    }, {
        onSuccess(data) {
            toast.success(data.message);
            reset({
                old_password: '',
                password: '',
                confirm_password: ''
            })
        },
        onError(error) {
            toast.error(error?.response?.data?.message)
        }
    })

    const submit = data => {
        changePassword.mutate({
            password: data.password,
            old_password: data.old_password
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Controller
                        rules={{
                            required: 'Mật khẫu cũ'
                        }}
                        name={'old_password'}
                        control={control}
                        render={({field, fieldState: {error, invalid}}) => (
                            <FormControl isInvalid={invalid}>
                                <FormLabel htmlFor={'old_password'}>Nhập mật khẩu hiện tại</FormLabel>
                                <Input placeholder={'Nhập mật khẩu mới'} type={'password'} {...field}
                                       id={'old_password'}/>
                                {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                            </FormControl>
                        )}
                    />
                </div>
                <div className={'tw-mt-5'}>
                    <Controller
                        rules={{
                            required: 'Mật khẩu mới không được để trống'
                        }}
                        name={'password'}
                        control={control}
                        render={({field, fieldState: {error, invalid}}) => (
                            <FormControl isInvalid={invalid}>
                                <FormLabel htmlFor={'password'}>Mật khẩu mới</FormLabel>
                                <Input placeholder={'Nhập mật khẩu mới'} type={'password'} {...field} id={'password'}/>
                                {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                            </FormControl>
                        )}
                    />
                </div>
                <div className={'tw-mt-5'}>
                    <Controller
                        rules={{
                            required: 'Mật khẩu mới không được để trống',
                            validate: v => v?.trim() === watch('password')?.trim() || 'Mật khẩu xác nhận không trùng khớp'
                        }}
                        name={'confirm_password'}
                        control={control}
                        render={({field, fieldState: {error, invalid}}) => (
                            <FormControl isInvalid={invalid}>
                                <FormLabel htmlFor={'confirm_password'}>Xác nhận mật khẩu</FormLabel>
                                <Input placeholder={'Xác nhận mật khẩu mới mật khẩu mới'} type={'password'} {...field}
                                       id={'confirm_password'}/>
                                {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                            </FormControl>
                        )}
                    />
                </div>

                <div className={'tw-mt-10 tw-flex tw-justify-end'}>
                    <Button colorScheme={'blue'} type={'submit'}>Đổi mật khẩu</Button>
                </div>
            </form>
        </div>
    )
}

export default TabPassword;