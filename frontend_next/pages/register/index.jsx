import styles from './style.module.scss';
import {Controller, useForm} from "react-hook-form";
import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import Link from "next/link";
import {useMutation} from "react-query";
import {fetchRegister} from "@/services";
import useToast from "@/hooks/useToast";
import {useRouter} from "next/router";

function Register() {

    const {control, handleSubmit, watch} = useForm();

    const toast = useToast();

    const router = useRouter();

    const register = useMutation('register', async data => {
        const response = await fetchRegister(data);
        return response.data;
    }, {
        async onSuccess(data) {
            await router.push('/login');
            toast.success("Đăng ký thành công");
        },
        onError(error) {
            toast.error(error?.response?.data?.message)
        }
    })

    const onSubmit = data => {
        register.mutate({
            name: data.name,
            email: data.email,
            password: data.password
        })
    }

    return (
        <div className={'tw-h-screen tw-w-full'}>
            <div className={'tw-grid tw-grid-cols-2 tw-h-full '}>

                <div className={styles.left}/>
                <div className={'tw-h-full'}>
                    <div
                        className={
                            'tw-px-20 tw-h-full tw-flex tw-flex-col tw-justify-center'
                        }
                    >
                        <div className={'tw-text-4xl tw-font-bold tw-text-center tw-mb-10'}>Đăng ký</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Controller
                                    rules={{
                                        required: 'Tên đăng nhập không được để trống'
                                    }}
                                    name={'name'}
                                    control={control}
                                    render={({field, fieldState: {error, invalid}}) => (
                                        <FormControl isInvalid={invalid}>
                                            <FormLabel htmlFor="name">
                                                Tên đăng nhập
                                            </FormLabel>
                                            <Input id="name" type="text" {...field} />
                                            {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                                        </FormControl>
                                    )}
                                />
                            </div>
                            <div className={'tw-mt-10'}>
                                <Controller
                                    rules={{
                                        required: 'Email không được để trống'
                                    }}
                                    name={'email'}
                                    control={control}
                                    render={({field, fieldState: {error, invalid}}) => (
                                        <FormControl isInvalid={invalid}>
                                            <FormLabel htmlFor="email">
                                                Email
                                            </FormLabel>
                                            <Input id="email" type="email" {...field} />
                                            {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                                        </FormControl>
                                    )}
                                />
                            </div>
                            <div className={'tw-mt-10'}>
                                <Controller
                                    rules={{
                                        required: 'Mật khẩu không được để trống'
                                    }}
                                    name={'password'}
                                    control={control}
                                    render={({field, fieldState: {error, invalid}}) => (
                                        <FormControl isInvalid={invalid}>
                                            <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                                            <Input id="password" type="password" {...field} />
                                            {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                                        </FormControl>

                                    )}
                                />
                            </div>

                            <div className={'tw-mt-10'}>
                                <Controller
                                    rules={{
                                        required: 'Mật khẩu không được để trống',
                                        validate: v => v?.trim() === watch('password')?.trim() || 'Mật khẩu không trùng khớp'
                                    }}
                                    name={'confirm_password'}
                                    control={control}
                                    render={({field, fieldState: {error, invalid}}) => (
                                        <FormControl isInvalid={invalid}>
                                            <FormLabel htmlFor="password">Nhập lại mật khẩu</FormLabel>
                                            <Input id="password" type="password" {...field} />
                                            {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
                                        </FormControl>

                                    )}
                                />
                            </div>


                            <div className="tw-mt-10">
                                <Button colorScheme="blue" type={'submit'}>
                                    Đăng ký
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;