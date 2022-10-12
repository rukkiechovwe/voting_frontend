import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { X } from "phosphor-react";
import useVotingForm from "../../components/Candidate/useVotingForm";

const AlertComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { handleSubmit } = useVotingForm();

  return (
    <>
      <Button
        onClick={onOpen}
        position="absolute"
        right="1.5rem"
        top="0.9rem"
        padding="0.3rem 0.02rem"
        background="transparent"
        color="brand.danger"
        width="40px !important"
        className="danger"
      >
        <X size={24} />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Submit Votes</AlertDialogHeader>
          <AlertDialogCloseButton width="40px !important" className="danger" />
          <AlertDialogBody>
            Are you sure you want to submit your votes?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              className="danger"
              onClick={handleSubmit}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default AlertComponent;
