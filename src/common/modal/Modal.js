import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import AlertComponent from "./AlertDialogue";
const ModalComponent = ({
  children,
  header,
  isOpen,
  onOpen,
  onClose,
  footer,
  background,
  closeOnOverlayClick,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={closeOnOverlayClick ? true : false}
      >
        <ModalOverlay />
        <ModalContent background={background}>
          <ModalHeader fontFamily="GTWalsheimProBold" fontWeight="100">
            {header}
          </ModalHeader>
          <AlertComponent />
          {/* <ModalCloseButton  /> */}

          <ModalBody pb={6}>{children}</ModalBody>
          {footer && (
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Create
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalComponent;
