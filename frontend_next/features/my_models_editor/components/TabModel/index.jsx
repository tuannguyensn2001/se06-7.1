import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
} from '@chakra-ui/react';
import Editor from '@/features/my_models_editor/components/Editor';
import TabGeneral from '@/features/my_models_editor/components/TabGeneral';

function TabModel({onClickUpload}) {
    return (
        <Tabs defaultIndex={0} isFitted variant={'enclosed'}>
            <TabList>
                <Tab _selected={{color: 'white', bg: 'blue.500'}}>
                    Thông tin model
                </Tab>
                <Tab _selected={{color: 'white', bg: 'blue.500'}}>Upload file</Tab>
                <Tab _selected={{color: 'white', bg: 'blue.500'}}>Editor</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <TabGeneral/>
                </TabPanel>
                <TabPanel>
                    <Button onClick={onClickUpload('models')}>Upload 3d</Button>
                    <Button onClick={onClickUpload('skybox')}>Upload skybox</Button>
                </TabPanel>
                <TabPanel>
                    <Editor/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default TabModel;
