import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { MainLayoutProps } from "../types/props";
import { Navbar } from "../components/navbar";

export const SpaceLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};
