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
export const ModalComponent = ({
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
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
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
