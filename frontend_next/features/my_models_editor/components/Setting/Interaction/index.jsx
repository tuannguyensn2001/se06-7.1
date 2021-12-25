import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import useEditorContext from "@/features/my_models_editor/hooks/useEditorContext";
import { FormControl, FormLabel } from "@chakra-ui/react";

function Interaction() {
  const { control } = useEditorContext();

  return (
    <div>
      <Controller
        control={control}
        name={"interactionPolicy"}
        render={({ field }) => (
          <FormControl>
            <FormLabel htmlFor={"interaction"}>Policy</FormLabel>
            <Select id={"interaction"}>
              <option value="allow-when-focused">allow-when-focused</option>
              <option value="always-allow">always-allow</option>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name={`interpolationDecay`}
        render={({ field }) => (
          <FormControl>
            <FormLabel>Decay</FormLabel>
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
    </div>
  );
}

export default Interaction;
