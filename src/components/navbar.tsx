import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

export const Navbar: FC = React.memo(() => {
    console.log("rerendered")
  return (
    <Flex as="nav" justifyContent="space-between" width="100%" maxW="100vw" bgColor="#000" color="#FFF" border="1px solid #000" padding="1rem 1.5rem" height="54px">
      <p>logo</p>
    </Flex>
  );
});
