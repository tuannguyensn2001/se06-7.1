import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";
import { Controller } from "react-hook-form";
import { Checkbox } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function Rotate() {
  const { control, watch } = useEditorContext();

  return (
    <div>
      <div>
        <Controller
          control={control}
          name={"autoRotate"}
          render={({ field }) => (
            <Checkbox isChecked={field.value} onChange={field.onChange}>
              Auto rotate
            </Checkbox>
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name={"autoRotateDelay"}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Auto RotateDelay</FormLabel>
              <NumberInput isDisabled={!watch("autoRotate")} {...field} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name={"rotationPerSecond"}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Rotation Per Second</FormLabel>
              <NumberInput isDisabled={!watch("autoRotate")} {...field} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}
        />
      </div>
    </div>
  );
}

export default Rotate;
