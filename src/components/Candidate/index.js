import React, { useContext } from "react";
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
import { ModalComponent } from "../../common/modal";

function Candidates({ isOpen, onClose }) {
  const { candidates, electionDetail } = useContext(ElectionContext);
  const {
    handleChange,
    handleSubmit,
    handleNextPoll,
    handlePrevPoll,

    currentQuestion,
  } = useVotingForm();

  //   let pollNames = [];
  //   let polls = [];
  //   candidates.forEach((candidate) => {
  //     if (!pollNames.includes(candidate.pollName)) {
  //       pollNames.push(candidate.pollName);
  //       polls.push({ pollName: candidate.pollName, candidate: candidate });
  //     }
  //   });
  //   console.log(polls);
  //   console.log(pollNames);

  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
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
            max={electionDetail.pollsAvailable.length}
            size="sm"
            colorScheme="purple"
          />
          <Box>
            <Text
              fontSize="18px"
              fontFamily="GTWalsheimProBold"
              textAlign="center"
              my="20px"
            >
              Select a candidate for{" "}
              {electionDetail.pollsAvailable[currentQuestion]}
            </Text>
            <RadioGroup
              name={electionDetail.pollsAvailable[currentQuestion]}
              display="grid"
              gridTemplate=" 140px / 1fr"
              width="100%"
            >
              {candidates.map((candidate) => {
                if (
                  candidate.pollName ===
                  electionDetail.pollsAvailable[currentQuestion]
                ) {
                  return (
                    <GridItem
                      background="brand.white"
                      borderRadius="10px"
                      m="10px"
                      p="10px"
                      boxShadow="0px 0px 10px rgba(94, 94, 94, 0.06)"
                      key={candidate.name}
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
                disabled={currentQuestion <= 0}
                onClick={() => {
                  handlePrevPoll();
                }}
              >
                Prev
              </AppButton>
              {currentQuestion === electionDetail.pollsAvailable.length - 1 ? (
                <AppButton
                  height="40px"
                  width="200px"
                  margin="10px"
                  bg="brand.success"
                  name="success"
                  onClick={() => {
                    handleSubmit();
                  }}
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
