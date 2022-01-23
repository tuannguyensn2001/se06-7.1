import styles from './style.module.scss';
import MyModels from './Tab/Models';
import Summary from './Tab/Summary';
import Collections from './Tab/Collections/Collections';
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function ProfileTabs() {
  const [active, setActive] = useState('summary');
  return (
    <div>
      {/*<div className={styles.switcher}>*/}
      {/*  <div*/}
      {/*    className={active === 'summary' ? 'tw-text-blue-500' : ''}*/}
      {/*    onClick={() => setActive('summary')}*/}
      {/*  >*/}
      {/*    Summary*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={active === 'my-models' ? 'tw-text-blue-500' : ''}*/}
      {/*    onClick={() => setActive('my-models')}*/}
      {/*  >*/}
      {/*    My Models*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={active === 'collections' ? 'tw-text-blue-500' : ''}*/}
      {/*    onClick={() => setActive('collections')}*/}
      {/*  >*/}
      {/*    Collections*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  {active === 'my-models' ? (*/}
      {/*    <MyModels />*/}
      {/*  ) : active === 'summary' ? (*/}
      {/*    <Summary />*/}
      {/*  ) : active === 'collections' ? (*/}
      {/*    <Collections />*/}
      {/*  ) : (*/}
      {/*    <div>Error: Tab not found</div>*/}
      {/*  )}*/}
      {/*</div>*/}
      <Tabs>
        <TabList>
          {/*<Tab>Summary</Tab>*/}
          <Tab>My Models</Tab>
          <Tab>Collections</Tab>
        </TabList>

        <TabPanels>
          {/*<TabPanel>*/}
          {/*  /!*<Summary />*!/*/}
          {/*</TabPanel>*/}
          <TabPanel>
            <MyModels />
          </TabPanel>
          <TabPanel>
            <Collections />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default ProfileTabs;
