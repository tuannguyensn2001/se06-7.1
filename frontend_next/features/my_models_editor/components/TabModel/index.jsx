import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Editor from "@/features/my_models_editor/components/Editor";

function TabModel() {
  return (
    <Tabs defaultIndex={2} isFitted variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>
          Thông tin model
        </Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>Upload file</Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>Editor</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <Editor />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabModel;
