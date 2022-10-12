import React, { useContext } from "react";
import { Flex, useDisclosure, Text } from "@chakra-ui/react";

import PrivateRoutes from "../../layouts/PrivateRoutes"
import Candidates from "../../components/Candidate";
import Counter from "../../components/Counter";
import Nav from "../../components/Nav";
import ElectionInfo from "../../components/ElectionInfo";
import { useCountdown } from "../../hooks/useCountdown";
import { ElectionContext } from "../../context/electionContext";

function Home() {
  const { electionDetail, loading } = useContext(ElectionContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   countdown to election day
  const [days, hours, minutes, seconds] = useCountdown(
    electionDetail.startDate,
    electionDetail.startTime
  );

  return (
    <PrivateRoutes>
      <Nav />
      <Flex
        minH="100vh"
        w="100%"
        h="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="30px"
        className="container"
        textAlign="center"
        mt="-67px"
      >
        {/*==================================================================
               1.fetch data
               2. if data, check election date
                  a. if election date, display election info and candidate modal
                  b. else, display countdown
               3. else, loading...  
         ==================================================================*/}
        {loading ? (
          <Text>loading...</Text>
        ) : (
          <>
            {!(days + hours + minutes + seconds > 0) ? (
              <Counter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            ) : (
              <>
                <ElectionInfo onOpen={onOpen} />
                <Candidates isModalOpen={isOpen} onModalClose={onClose} />
              </>
            )}
          </>
        )}
      </Flex>
    </PrivateRoutes>
  );
}

export default Home;
