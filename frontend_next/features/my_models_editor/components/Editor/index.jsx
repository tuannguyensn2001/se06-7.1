import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useContext } from "react";
import EditorContext from "@/features/my_models_editor/context";
import { Controller } from "react-hook-form";
import CameraControls from "@/features/my_models_editor/components/Setting/CameraControls";
import Zoom from "@/features/my_models_editor/components/Setting/Zoom";
import Rotate from "@/features/my_models_editor/components/Setting/Rotate";
import CameraOrbit from "@/features/my_models_editor/components/Setting/CameraOrbit";
import MinCameraOrbit from "@/features/my_models_editor/components/Setting/MinCameraOrbit";
import MaxCameraOrbit from "@/features/my_models_editor/components/Setting/MaxCameraOrbit";
import CameraTarget from "@/features/my_models_editor/components/Setting/CameraTarget";
import FieldOfView from "@/features/my_models_editor/components/Setting/FieldOfView";
import Interaction from "@/features/my_models_editor/components/Setting/Interaction";

const collapse = {
  camera: {
    text: "Camera",
    component: <CameraControls />,
  },
  zoom: {
    text: "Zoom",
    component: <Zoom />,
  },
  rotate: {
    text: "Rotate",
    component: <Rotate />,
  },
  camera_orbit: {
    text: "Camera Orbit",
    component: <CameraOrbit />,
  },
  min_camera_orbit: {
    text: "Min Camera Orbit",
    component: <MinCameraOrbit />,
  },
  max_camera_orbit: {
    text: "Max Camera Orbit",
    component: <MaxCameraOrbit />,
  },
  camera_target: {
    text: "Camera Target",
    component: <CameraTarget />,
  },
  field_of_view: {
    text: "Field Of View",
    component: <FieldOfView />,
  },
  interaction: {
    text: "Interaction",
    component: <Interaction />,
  },
};

function Editor() {
  const { control } = useContext(EditorContext);

  return (
    <div>
      <div>
        {/*<CameraControls />*/}
        {/*<Zoom />*/}
        {/*<Rotate />*/}
        <Accordion defaultIndex={[]} allowMultiple>
          {Object.keys(collapse).map((key) => (
            <AccordionItem key={key}>
              <h2>
                <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                  <Box flex="1" textAlign="left">
                    {collapse[key].text}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{collapse[key].component}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Editor;
