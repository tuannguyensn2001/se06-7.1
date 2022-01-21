import ModelViewer from "@/components/ModelViewer";
import SettingsCamera from "@/features/Viewer/components/SettingsCamera";
import {Controller, useForm} from "react-hook-form";
import {Button, Input, Tabs} from "antd";
import styles from "./style.module.scss";
import UploadSkybox from "@/features/Viewer/components/UploadSkybox";
import UploadModelDrag from "@/features/Viewer/components/UploadModelDrag";
import useCreateModel from "@/features/Viewer/hooks/useCreateModel";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchModel} from "@/features/Viewer/services";
import html2canvas from "html2canvas";
import {useRef, useState} from "react";
import UploadPoster from "@/features/Viewer/components/UploadPoster";
import UploadEnvImage from "@/features/Viewer/components/UploadEnvImage";
import useUpdateModel from "@/features/Viewer/hooks/useUpdateModel";

function Viewer() {
    const {watch, control, handleSubmit, setValue, register, reset} = useForm({
        defaultValues: {
            cameraControls: true,
            disableZoom: false,
            autoRotate: false,
            default: 0,
            checkExposure: true,
            checkMetalness: true,
            checkRoughness: true,
            model: '/asset/Horse.glb'
        },
    });

    const {id} = useParams();

    useQuery(
        ["model", id],
        async () => {
            const response = await fetchModel(id);
            return response;
        },
        {
            enabled: !!id,
            onSuccess(response) {
                const {data} = response.data;
                const {
                    name,
                    model,
                    skybox,
                    disable_zoom,
                    camera_control,
                    auto_rotate,
                    auto_rotate_delay,
                    rotation_per_second,
                    interaction_policy,
                    field_of_view,
                    max_field_of_view,
                    min_field_of_view,
                    interpolation_decay,
                } = data;

                reset({
                    name,
                    model,
                    skybox,
                    disableZoom: disable_zoom,
                    cameraControls: camera_control,
                    autoRotate: auto_rotate,
                    autoRotateDelay: Array.isArray(auto_rotate_delay)
                        ? auto_rotate_delay[0]
                        : null,
                    rotationPerSecond: Array.isArray(rotation_per_second)
                        ? rotation_per_second[0]
                        : null,
                });
            },
        }
    );

    const create = useCreateModel();

    const update = useUpdateModel();

    const navigate = useNavigate();

    const setSrc = (src) => {
        setValue("model", src);
    };

    const modelViewer = useRef(null);
    // const setSkybox = (src) => setValue("skybox", src);
    // const setPoster = (src) => setValue("poster", src);
    // const setEnvImage
    const set = (name) => (src) => setValue(name, src);
    const submit = (data) => {
        const payload = {
            ...data,
            preview: modelViewer.current.capture(),
            disable_zoom: Boolean(data?.disableZoom),
            camera_control: Boolean(data?.cameraControls),
            auto_rotate: Boolean(data?.autoRotate),
            skybox: String(data?.skybox),
            auto_rotate_delay: [data?.autoRotateDelay],
            rotation_per_second: [data?.rotationPerSecond],
            interaction_policy: data?.interactionPolicy,
            field_of_view: [data?.fieldOfView],
            max_field_of_view: [data?.maxFieldOfView],
            min_field_of_view: [data?.minFieldOfView],
            interpolation_decay: [data?.interpolationDecay],
        };

        if (!!id) {
            update.mutate({
                id,
                data: payload,
            });
            return;
        }

        create.mutate(payload);
    };

    return (
        <div>
            <div className={"grid grid-cols-12 gap-4 divide-x "}>
                <div className={styles.model_viewer}>
                    {!watch("model") && (
                        <div className={"h-full flex flex-col justify-center"}>
                            <UploadModelDrag setSrc={setSrc}/>
                        </div>
                    )}

                    {watch("model") && (
                        <div className={"h-full w-full"}>
                            <ModelViewer
                                ref={modelViewer}
                                setValue={setValue}
                                src={watch("model")}
                                //   src={'/asset/Horse.glb'}
                                baseColor={watch("baseColor")}
                                disableZoom={watch("disableZoom")}
                                cameraControls={watch("cameraControls")}
                                autoRotate={watch("autoRotate")}
                                // srcSkybox={"./asset/whipple_creek_regional_park_04_1k.hdr"}
                                // poster={"/asset/poster.png"}
                                srcSkybox={'/asset/whipple_creek_regional_park_04_1k.hdr'}
                                poster={watch("poster")}
                                // srcSkybox={watch("skybox")}
                                autoRotateDelay={[watch("autoRotateDelay")]}
                                cameraOrbit={[
                                    watch("cameraOrbit1"),
                                    watch("cameraOrbit2"),
                                    watch("cameraOrbit3"),
                                ]}
                                cameraTarget={[
                                    watch("cameraTarget1"),
                                    watch("cameraTarget2"),
                                    watch("cameraTarget3"),
                                ]}
                                rotationPerSecond={[watch("rotationPerSecond")]}
                                interactionPolicy={watch("interactionPolicy")}
                                fieldOfView={[watch("fieldOfView")]}
                                maxCameraOrbit={[
                                    watch("maxCameraOrbit1"),
                                    watch("maxCameraOrbit2"),
                                    watch("maxCameraOrbit3"),
                                ]}
                                minCameraOrbit={[
                                    watch("minCameraOrbit1"),
                                    watch("minCameraOrbit2"),
                                    watch("minCameraOrbit3"),
                                ]}
                                maxFieldOfView={[watch("maxFieldOfView")]}
                                minFieldOfView={[watch("maxFieldOfView")]}
                                interpolationDecay={[watch("interpolationDecay")]}
                                orientation={[
                                    watch("orientationX"),
                                    watch("orientationY"),
                                    watch("orientationZ"),
                                ]}
                                scale={[watch("scaleX"), watch("scaleY"), watch("scaleZ")]}
                                metalness={[watch("metalness"), watch("checkMetalness")]}
                                roughness={[watch("roughness"), watch("checkRoughness")]}
                                exposure={[watch("exposure"), watch("checkExposure")]}
                                // shadowIntensity={[watch("shadowIntensity")]}
                            />
                        </div>
                    )}
                </div>
                <div className={"col-span-3 px-4 "}>
                    <div className="flex justify-end mt-4">
                        <Button onClick={handleSubmit(submit)}>Lưu</Button>
                    </div>
                    <Tabs defaultActiveKey={3}>
                        <Tabs.TabPane key={3} tab={"Thông tin model"}>
                            <div>
                                <div>Tên model</div>
                                <div>
                                    <Controller
                                        control={control}
                                        name={"name"}
                                        render={({field}) => (
                                            <Input value={field.value} onChange={field.onChange}/>
                                        )}
                                    />
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={1} tab={"Upload"}>
                            <UploadSkybox setSkybox={set("skybox")}/>
                            <UploadPoster setPoster={set("poster")}/>
                            <UploadEnvImage setEnvImage={set("envImage")}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={2} tab={"Editor"}>
                            <SettingsCamera control={control} watch={watch}/>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Viewer;
