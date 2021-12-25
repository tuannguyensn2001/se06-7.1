import {Controller} from "react-hook-form";
import {
    FormControl,
    FormLabel, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";

const keys = ['fieldOfView', 'maxFieldOfView', 'minFieldOfView']

function FieldOfView() {

    const {control} = useEditorContext();

    return (
        <div>
            {keys.map(item => (
                <Controller
                    key={item}
                    control={control}
                    name={item}
                    render={({field}) => (
                        <FormControl>
                            <FormLabel>{item}</FormLabel>
                            <NumberInput min={0} {...field}>
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper/>
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    )}
                />
            ))}
        </div>
    )
}
export default FieldOfView;