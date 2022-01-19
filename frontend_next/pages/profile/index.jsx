import Layout from 'layouts/Default';
import {useForm} from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useDisclosure, Tabs, TabList, TabPanels, TabPanel, Tab,
} from '@chakra-ui/react';

import useProfile from '@/hooks/useProfile';
import ProfileModal from 'components/ProfileModal';
import TabProfile from "@/features/profile/components/TabProfile";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import {useMutation} from "react-query";
import {fetchUploadFile} from "@/services";
import useToast from "@/hooks/useToast";
import {setAvatar} from "@/features/auth/slices";
import TabPassword from "@/features/profile/components/TabPassword";

function Profile() {

    const {user} = useSelector(state => state.auth);

    const toast = useToast();

    const dispatch = useDispatch();

    const uploadFile = useMutation('upload', async data => {
        const response = await fetchUploadFile(data);
        return response.data;
    }, {
        onSuccess(data) {
            toast.success("Cập nhật avatar thành công");
            const {path} = data.data;
            dispatch(setAvatar(path));
        },
        onError(error) {
            toast.error(error?.message)
        }
    })

    const onDrop = useCallback((files) => {
        const [file] = files;

        const form = new FormData();

        form.append('type', 'avatar');
        form.append('file', file);
        form.append("avatar", true);

        uploadFile.mutate(form);

    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: false})


    return (
        <Layout>
            <div className={'tw-mt-20 tw-flex-col tw-flex tw-mx-auto tw-w-10/12'}>
                <h1 className={'tw-font-bold tw-text-4xl tw-mb-8'}>
                    Cập nhật thông tin
                </h1>
                <div className={'tw-flex'}>
                    <div
                        {...getRootProps()}
                        className={
                            'tw-w-48 tw-shrink-0 tw-flex tw-flex-col tw-items-center tw-gap-10 tw-cursor-pointer'
                        }
                    >
                        <input type="text" {...getInputProps()}/>
                        <img
                            className={'tw-h-48 tw-w-full tw-object-cover tw-rounded-full'}
                            src={user?.avatar}
                        />

                    </div>
                    <div className={'tw-ml-10 tw-w-4/5'}>
                        <Tabs>
                            <TabList>
                                <Tab>Thông tin cá nhân</Tab>
                                <Tab>Đổi mật khẩu</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <TabProfile/>
                                </TabPanel>
                                <TabPanel>
                                    <TabPassword/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>


                </div>
            </div>
        </Layout>
    );
}

export default Profile;
