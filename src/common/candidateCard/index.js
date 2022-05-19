// import React, { useContext, useState } from "react";
// import {
//   Box,
//   Grid,
//   GridItem,
//   Image,
//   Text,
//   Flex,
//   Radio,
//   RadioGroup,
// } from "@chakra-ui/react";
// import { ElectionContext } from "../../context/electionContext";
// import AppButton from "../../common/button";
// import useVotingForm from "./useVotingForm";

// function Candidates() {
//   return (
//     <GridItem
//       background="brand.white"
//       borderRadius="10px"
//       m="10px"
//       p="10px"
//       boxShadow="0px 0px 10px rgba(94, 94, 94, 0.06)"
//     >
//       <Radio
//         colorScheme="green"
//         value={candidate}
//         onChange={(e) => handleChange(e)}
//       >
//         <Flex alignItems="center">
//           <Image
//             objectFit="cover"
//             borderRadius="full"
//             boxSize="100px"
//             src={candidate.imageUrl}
//             alt={candidate.name}
//           />
//           <Text fontSize="18px" ml="15px">
//             {candidate.name}
//           </Text>
//         </Flex>
//       </Radio>
//     </GridItem>
//   );
// }

// export default Candidates;
