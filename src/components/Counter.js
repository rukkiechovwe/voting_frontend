import { Heading, Text, Flex } from "@chakra-ui/react";

function Counter({ days, hours, minutes, seconds }) {
  const Time = ({ value, title }) => {
    return (
      <Flex
        flexDirection="column"
        color="brand.primary"
        textAlign="center"
        margin="0.5rem 1rem 2rem"
      >
        <Heading
          as="h3"
          fontSize="5xl"
          padding="0.7rem"
          color="brand.white"
          background="brand.primary"
          borderRadius="10px"
          marginBottom="0.2rem"
        >
          {value}
        </Heading>
        <span>{title}</span>
      </Flex>
    );
  };
  return (
    <>
      <Heading mb="30px" as="h6" fontSize="2xl" color="brand.primary" textAlign="center">
        Voting is yet to begin..
      </Heading>
      <Flex>
        <Time value={days} title="Days" />
        <Time value={hours} title="Hours" />
        <Time value={minutes} title="Minutes" />
        <Time value={seconds} title="Seconds" />
      </Flex>

      <Text fontSize="16px">We will inform you via email when voting has started.</Text>
    </>
  );
}

export default Counter;
