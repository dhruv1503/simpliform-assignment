import { useParams } from "react-router";
import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { SpaceLayout } from "../../../layouts/space-layout";
import { ModelSpaceHeader } from "./components/ModelSpaceHeader";
import { TModelSpaceHeaderProps } from "../../../types/props";
import { useEffect } from "react";
import { getModelSpacesById } from "../../../server/model-space";
//import { useEffect } from "react";

const exampleData: TModelSpaceHeaderProps = {
  name: "Meta Llama 2",
  description:
    "Meta Llama 2 is an LLM model trained on a large corpus of text data. It is a powerful model that can be used for a variety of NLP tasks. It has been develeoped by the Meta AI team to provide a high-quality language model that can be used for a variety of tasks.",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2HGFlHyuUZlOM0vDRdXNOjk4pQ4v3tti3w&s",
};

export const ModelSpace = () => {
  const { id } = useParams();
  console.log(id);
useEffect(() => {
  if(id) getModelSpacesById(id)
}, [])
  return (
    <SpaceLayout>
      <Flex as="main" bgColor="black" display="flex" justifyContent="center" background="#000000" minH={"calc(100vh - 54px)"}  maxH={"calc(100vh - 54px - 8px)"}>
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
          <ModelSpaceHeader name={exampleData.name} avatar={exampleData.avatar} description={exampleData.description} />
         
          </GridItem>
          
          <GridItem  gridColumnStart={10}colSpan={3} rowSpan={3} display="flex">
            {/* Measurements || Specs */}
            <Divider orientation="vertical" borderColor="black"/>
          </GridItem>
          <GridItem  colSpan={9} display="flex">
            {/* Output area */}
            <Divider borderColor="black"/>
          </GridItem>
          <GridItem colSpan={9} display="flex">
            {/* Input Area  */}
          </GridItem>
        </Grid>
       
      </Flex>
    </SpaceLayout>
  );
};
