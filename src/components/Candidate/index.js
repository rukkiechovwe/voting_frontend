import React, { useContext, useMemo } from "react";
import {
  Box,
  GridItem,
  Image,
  Text,
  Flex,
  Radio,
  RadioGroup,
  Progress,
} from "@chakra-ui/react";
import { ElectionContext } from "../../context/electionContext";
import AppButton from "../../common/button";
import useVotingForm from "./useVotingForm";
import ModalComponent from "../../common/modal/Modal";

function Candidates({ isModalOpen, onModalClose }) {
  const { candidates, electionDetail } = useContext(ElectionContext);
  const {
    handleChange,
    handleSubmit,
    handleNextPoll,
    handlePrevPoll,
    currentQuestion,
    loading,
  } = useVotingForm();

  const getPolls = useMemo(() => {
    // loop through candidates and find the one that matches the current poll
    return electionDetail.pollsAvailable.reduce((acc, curr) => {
      candidates.forEach((candidate) => {
        if (candidate.pollName === curr && !acc.includes(candidate.pollName)) {
          acc.push(candidate.pollName);
        }
      });
      return acc;
    }, []);
  }, [candidates,electionDetail]);

  return (
    <ModalComponent
      isOpen={isModalOpen}
      onClose={onModalClose}
      header="Voting"
      footer={false}
      isCentered={true}
      background="brand.light"
      closeOnOverlayClick={false}
    >
      {candidates.length > 0 && (
        <form>
          <Progress
            value={currentQuestion + 1}
            max={getPolls.length}
            size="sm"
            colorScheme="purple"
          />
          <Box>
            <Text
              fontSize="18px"
              fontFamily="GTWalsheim"
              textAlign="center"
              my="20px"
            >
              Select a candidate for {getPolls[currentQuestion]}
            </Text>
            <RadioGroup
              name={getPolls[currentQuestion]}
              display="grid"
              gridTemplate=" 140px / 1fr"
              width="100%"
            >
              {candidates.map((candidate,key) => {
                if (candidate.pollName === getPolls[currentQuestion]) {
                  return (
                    <GridItem
                      background="brand.white"
                      borderRadius="10px"
                      m="10px"
                      p="10px"
                      boxShadow="0px 0px 10px rgba(94, 94, 94, 0.06)"
                      key={key}
                    >
                      <Radio
                        colorScheme="green"
                        value={candidate.name}
                        onChange={(e) => handleChange(e)}
                      >
                        <Flex alignItems="center">
                          <Image
                            objectFit="cover"
                            borderRadius="full"
                            boxSize="100px"
                            src={candidate.imageUrl}
                            alt={candidate.name}
                          />
                          <Text fontSize="18px" ml="15px">
                            {candidate.name}
                          </Text>
                        </Flex>
                      </Radio>
                    </GridItem>
                  );
                }
              })}
            </RadioGroup>
            <Flex justifyContent="flex-end" mt="20px">
              <AppButton
                height="40px"
                width="200px"
                margin="10px"
                disabled={currentQuestion <= 0 || loading}
                onClick={() => {
                  handlePrevPoll();
                }}
              >
                Prev
              </AppButton>
              {currentQuestion === getPolls.length - 1 ? (
                <AppButton
                  height="40px"
                  width="200px"
                  margin="10px"
                  bg="brand.success"
                  name="success"
                  onClick={() => {
                    handleSubmit();
                  }}
                  isLoading={loading}
                  loadingText="Submitting"
                >
                  Submit
                </AppButton>
              ) : (
                <AppButton
                  height="40px"
                  width="200px"
                  margin="10px"
                  onClick={() => {
                    handleNextPoll();
                  }}
                >
                  Next
                </AppButton>
              )}
            </Flex>
          </Box>
        </form>
      )}
    </ModalComponent>
  );
}

export default Candidates;
