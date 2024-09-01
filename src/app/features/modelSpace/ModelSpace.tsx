import { useParams } from "react-router";
import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { SpaceLayout } from "../../../layouts/space-layout";
import { ModelSpaceHeader } from "./components/ModelSpaceHeader";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getModelSpaceByIdThunk } from "./thunks";
import { ModelInputSection } from "./components/model-input-section";
// import { ModelOutputSection } from "./components/model-output-section.tsx";

export const ModelSpace = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const getModelSpaceDetails = (id: string) => {
    dispatch(getModelSpaceByIdThunk(id));
  };

  useEffect(() => {
    if (id) {
      getModelSpaceDetails(id);
    }
  }, [dispatch]);
  return (
    <SpaceLayout>
      <Flex
        as="main"
        bgColor="black"
        display="flex"
        justifyContent="center"
        background="#000000"
        minH={"calc(100vh - 54px)"}
        maxH={"calc(100vh - 54px)"}
      >
        <Grid
          height="100%"
          width="100%"
          bg="#202123"
          color="#FFF"
          maxW={"calc(100vw - 16px)"}
          maxH={"calc(100vh - 54px - 8px)"}
          minH={"calc(100vh - 54px - 8px)"}
          borderRadius="8px"
          gridTemplateColumns={["repeat(12, 10fr)"]}
          gridTemplateRows={["1fr 6fr"]}
        >
          <GridItem gridColumn={"1 / span 12"}>
            <ModelSpaceHeader />
            <Divider borderColor="black" />
          </GridItem>

          <GridItem
            colSpan={6}
            display="flex"
            gap="1rem"
            marginBottom="1rem"
            overflowY="scroll"
          >
            <ModelInputSection />
            <Divider orientation="vertical" borderColor="black" />
          </GridItem>
          <GridItem colSpan={6} display="flex" padding="1rem 1.5rem">
            {/* <ModelOutputSection /> */}
          </GridItem>
        </Grid>
      </Flex>
    </SpaceLayout>
  );
};
