import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ModalCreateCollection from '@/features/3d-models/components/ModalCreateCollection';

function ModalCollection({ onClose, isOpen }) {
  const { list: collections } = useSelector((state) => state.collections);

  const {
    onOpen,
    isOpen: isOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  return (
    <div>
      <ModalCreateCollection isOpen={isOpenCreate} onClose={onCloseCreate} />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm vào collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <div>Tất cả collection</div>

              <div>
                {collections.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onOpen} w={'100%'} colorScheme={'blue'}>
              Tạo mới collection
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalCollection;
