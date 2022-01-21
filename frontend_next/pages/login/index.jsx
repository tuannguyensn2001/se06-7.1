import styles from './style.module.scss';
import {Controller, useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {fetchLogin} from '@/features/auth/services';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {setLogin} from '@/features/auth/slices';
import {FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import useToast from '@/hooks/useToast';
import {setList} from "@/slices/collection";
import Link from 'next/link';

function Login({name}) {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            email: 'tuannguyensn2001a@gmail.com',
            password: 'java2001',
        },
    });

    const dispatch = useDispatch();
    const router = useRouter();
    const fire = useToast();

    const login = useMutation('login', (data) => fetchLogin(data), {
        onSuccess(response) {
            const {
                data: {
                    data: {access_token, user},
                },
            } = response;

            dispatch(
                setLogin({
                    access_token,
                    user,
                })
            );
            dispatch(setList(user.collections));
            router.push('/').then(() => fire.success(response.data.message));
        },
        onError(error) {
            fire.error(error?.response?.data?.message);
        },
    });

    const onSubmit = (data) => {
        login.mutate(data);
    };

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Controller
                                    name={'email'}
                                    control={control}
                                    render={({field}) => (
                                        <FormControl>
                                            <FormLabel htmlFor="email">
                                                Email address {name}
                                            </FormLabel>
                                            <Input id="email" type="email" {...field} />
                                        </FormControl>
                                    )}
                                />
                            </div>
                            <div className={'tw-mt-10'}>
                                <Controller
                                    name={'password'}
                                    control={control}
                                    render={({field}) => (
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Input id="password" type="password" {...field} />
                                        </FormControl>
                                    )}
                                />
                            </div>

                            <div className={'tw-mt-10'}>
                                Bạn chưa có tài khoản ? <Link className={'tw-text-blue-500'} href={'/register'}>Đăng ký
                                ngay</Link>
                            </div>

                            <div className="tw-mt-10">
                                <Button colorScheme="blue" type={'submit'}>
                                    Đăng nhập
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export const getInitialProps = async () => {
//   return {
//     name: 'tuan',
//   };
// };
Login.getInitialProps = () => {
    return {
        name: 'tuan',
    };
};

export default Login;
