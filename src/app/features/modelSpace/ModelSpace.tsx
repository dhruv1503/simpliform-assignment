import { useParams } from "react-router";
import {Flex} from "@chakra-ui/react";
import { SpaceLayout } from "../../../layouts/space-layout";
import { ModelSpaceHeader } from "./components/ModelSpaceHeader";
//import { useEffect } from "react";

export const ModelSpace = () => {
  const { id } = useParams();
  console.log(id)
//api call will happen here
  return (
    <SpaceLayout>
      <Flex as = "main" bgColor="black" display="flex" justifyContent="center"> 
        <Flex height="100%" width="100%" bg="red" maxW={"calc(100vw - 16px)" } justifyItems="center" borderRadius="8px">
        <ModelSpaceHeader/>
        </Flex>
      </Flex>
    </SpaceLayout>
  );
};
