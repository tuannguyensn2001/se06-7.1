import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {useEffect} from "react";
import {useMutation} from "react-query";
import {fetchUpdateAuth} from "@/services";
import useToast from "@/hooks/useToast";
import {setMe} from "@/features/auth/slices";

function TabProfile() {

    const {control, handleSubmit, register, setValue, formState} = useForm();

    const toast = useToast();

    const {user} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const update = useMutation('update', async data => {
        const response = await fetchUpdateAuth(data);
        return response.data;
    }, {
        onSuccess(response) {
            dispatch(setMe(response.data));
            toast.success(response.message)
        },
        onError(error) {
            toast.error(error?.message)
        }
    })

    useEffect(() => {
        if (!user) return;

        setValue('name', user.name);
    }, [user])

    const submit = data => {
        update.mutate({
            name: data.name
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <FormControl>
                    <FormLabel htmlFor={'id'}>Email</FormLabel>
                    <Input id={'id'} value={user?.email} disabled/>
                </FormControl>

                <FormControl isInvalid={!!formState.errors?.name}>
                    <FormLabel htmlFor={'name'}>Tên</FormLabel>
                    <Input {...register("name", {
                        required: 'Tên không được để trống'
                    })} />
                    {!!formState?.errors?.name?.message &&
                        <FormErrorMessage>{formState?.errors?.name?.message}</FormErrorMessage>}
                </FormControl>

                <div className={'tw-mt-10 tw-flex tw-justify-end'}>
                    <Button type={'submit'} colorScheme={'blue'}>Cập nhật</Button>
                </div>

            </form>
        </div>
    )
}

export default TabProfile;