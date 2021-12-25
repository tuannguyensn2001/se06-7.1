import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import styles from './style.module.scss';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function Media({ onDrop, isOpen, onOpen, onClose }) {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
  });

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size={'xl'}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxW={'60rem'}>
          <ModalHeader>Upload File</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Tải lên</Tab>
                <Tab>File của tôi</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <div className={'tw-h-96'}>
                    <div
                      {...getRootProps({
                        className:
                          'tw-w-full tw-h-full tw-flex tw-justify-center  tw-shadow-lg tw-mt-5 tw-border-dashed tw-border-2 tw-border-light-blue-500',
                      })}
                    >
                      <input {...getInputProps()} />
                      {/*{isDragActive ? (*/}
                      {/*  <p>Drop the files here ...</p>*/}
                      {/*) : (*/}
                      {/*  <p>*/}
                      {/*    Drag 'n' drop some files here, or click to select*/}
                      {/*    files*/}
                      {/*  </p>*/}
                      {/*)}*/}
                      <div className="tw-flex tw-flex-col tw-justify-center">
                        <div className={'tw-flex tw-justify-center'}>
                          <Button onClick={open}>Upload</Button>
                        </div>
                        <div> Hoặc kéo một tệp vào đây</div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={'tw-h-96'}></div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}

export default Media;
