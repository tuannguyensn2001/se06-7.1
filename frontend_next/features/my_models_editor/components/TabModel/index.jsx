import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TabModel() {
  return (
    <Tabs isFitted variant={"enclosed"}>
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
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabModel;
