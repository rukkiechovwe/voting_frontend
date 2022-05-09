import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  Select,
  Text,
} from "@chakra-ui/react";
import { Password, EyeClosed, Eye } from "phosphor-react";

export const PasswordInputField = ({
  name,
  onChange,
  placeholder,
  type,
  color,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={<Password size={20} />}
        my="5px"
        mx="10px"
        color="rgb(189, 189, 189)"
      />
      <Input
        color={color}
        fontSize="14px"
        borderColor="#E0E0E0"
        border="1px"
        py="10px"
        pl="55px"
        h="50px"
        type={show ? "text" : type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem" my="5px">
        <Button
          bg="transparent"
          _focus={{
            boxShadow: "none",
            outline: "none",
            background: "transparent",
          }}
          _active={{ background: "transparent" }}
          _hover={{ background: "transparent" }}
          outline="none"
          size="sm"
          onClick={handleClick}
        >
          {show ? <Eye size={20} /> : <EyeClosed size={20} />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export const InputField = ({
  type,
  name,
  onChange,
  placeholder,
  icon,
  color,
}) => {
  return (
    <InputGroup mb="20px" w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={icon}
        //   color="rgb(189, 189, 189)"
        my="5px"
        mx="10px"
      />
      <Input
        color={color}
        fontSize="14px"
        borderColor="#E0E0E0"
        border="1px"
        py="10px"
        pl="55px"
        h="50px"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export const FileInputField = ({
  name,
  onChange,
  placeholder,
  icon,
  color,
}) => {
  return (
    <InputGroup
      mb="20px"
      w="100%"
      borderRadius="0.375rem"
      border="1px"
      borderColor="#E0E0E0"
      h="50px"
    >
      <InputLeftElement
        pointerEvents="none"
        children={icon}
        my="5px"
        mx="9px"
      />
      <Input
        color={color}
        py="10px"
        h="100%"
        w="100%"
        pl="65px"
        cursor="pointer"
        type="file"
        pos="absolute"
        name={name}
        opacity={0}
        onChange={ onChange}
      />
      <Text
        width="100%"
        p="13px"
        color="rgb(189, 189, 189)"
        fontSize="14px"
        ml="42px"
      >
        {placeholder}
      </Text>
    </InputGroup>
  );
};

export const SelectField = ({
  name,
  onChange,
  placeholder,
  icon,
  color,
  children,
}) => {
  return (
    <InputGroup
      mb="20px"
      w="100%"
      borderRadius="0.375rem"
      border="1px"
      borderColor="#E0E0E0"
      h="c"
    >
      <InputLeftElement
        pointerEvents="none"
        children={icon}
        //   color="rgb(189, 189, 189)"
        my="5px"
        mx="10px"
      />
      <Select
        color={color}
        fontSize="14px"
        h="50px"
        pl="35px"
        border="0px"
        borderColor="#E0E0E0"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      >
        {children}
      </Select>
    </InputGroup>
  );
};
