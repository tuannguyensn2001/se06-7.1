import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";
import { useFieldArray, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const text = ["theta", "phi", "radius"];

function MinCameraOrbit() {
  const { control } = useEditorContext();

  const { fields } = useFieldArray({
    control,
    name: "minCameraOrbit",
  });

  return (
    <div>
      {fields.map((item, index) => (
        <Controller
          key={index}
          control={control}
          name={`minCameraOrbit.${index}.value`}
          render={({ field }) => (
            <FormControl>
              <FormLabel>{text[index]}</FormLabel>
              <NumberInput min={0} {...field}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}
        />
      ))}
    </div>
  );
}

export default MinCameraOrbit;
