import {Checkbox, Input, Slider} from "antd";
import {Controller} from "react-hook-form";
import {SketchPicker} from "react-color";

function SettingsCamera({control}) {
    return (
        <div>
            <Controller
                control={control}
                name={"cameraControls"}
                render={({field}) => (
                    <Checkbox {...field} checked={field.value}>
                        Tắt/bật camera
                    </Checkbox>
                )}
            />

            <Controller
                control={control}
                name={"disableZoom"}
                render={({field}) => (
                    <Checkbox {...field} checked={field.value}>
                        Tắt/bật phần zoom
                    </Checkbox>
                )}
            />
            <Controller
                control={control}
                name={"baseColor"}
                render={({field}) => {
                    const onChange = (color) => {
                        console.log(color);
                    };

                    return (
                        <SketchPicker
                            onChangeComplete={field.onChange}
                            color={field.value}
                        />
                    );
                }}
            />

            <Controller
                control={control}
                name={'maxFieldOfView'}
                render={({field}) => (
                    <Slider step={10} max={300} value={field.value} onChange={field.onChange} defaultValue={30}/>
                )}
            />

            <Controller
                control={control}
                name={'first'}
                render={({field}) => (
                    <Input value={field.value} onChange={field.onChange}/>
                )}
            />
        </div>
    );
}

export default SettingsCamera;
