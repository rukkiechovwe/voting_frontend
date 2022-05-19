import { Button } from "@chakra-ui/react";

const AppButton = ({
  onClick,
  width,
  height,
  bg,
  size,
  color,
  margin,
  children,
  name,
  disabled,
}) => {
  return (
    <Button
      size={size ? size : "md"}
      m={margin ? margin : "20px 0 0"}
      h={height ? height : "50px"}
      w={width ? width : "100%"}
      bg={bg ? bg : "brand.primary"}
      color={color ? color : "brand.white"}
      className={name}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
export default AppButton;
