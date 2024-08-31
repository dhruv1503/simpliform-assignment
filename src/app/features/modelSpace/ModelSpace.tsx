import { useParams } from "react-router";
import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { SpaceLayout } from "../../../layouts/space-layout";
import { ModelSpaceHeader } from "./components/ModelSpaceHeader";
import { useEffect } from "react";
import { useAppDispatch} from "../../hooks";
import { getModelSpaceByIdThunk } from "./thunks";
//import { useEffect } from "react";

export const ModelSpace = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getModelSpaceByIdThunk(id));
    }
  }, [id, dispatch]);
  return (
    <SpaceLayout>
      <Flex
        as="main"
        bgColor="black"
        display="flex"
        justifyContent="center"
        background="#000000"
        minH={"calc(100vh - 54px)"}
        maxH={"calc(100vh - 54px - 8px)"}
      >
        <Grid
          height="100%"
          width="100%"
          bg="#202123"
          color="#FFF"
          maxW={"calc(100vw - 16px)"}
          maxH="100%"
          minH={"calc(100vh - 54px - 8px)"}
          borderRadius="8px"
          gridTemplateColumns={["repeat(12, 10fr)"]}
          gridTemplateRows={["1fr 6fr 1fr"]}
        >
          <GridItem gridColumn={"1 / span 9"} height="100%" width="100%">
            <ModelSpaceHeader/>
          </GridItem>

          <GridItem gridColumnStart={10} colSpan={3} rowSpan={3} display="flex">
           
            <Divider orientation="vertical" borderColor="black" />
          </GridItem>
          <GridItem colSpan={9} display="flex">
          
            <Divider borderColor="black" />
          </GridItem>
          <GridItem colSpan={9} display="flex">
           
          </GridItem>
        </Grid>
      </Flex>
    </SpaceLayout>
  );
};
