import { useParams } from "react-router";
import { Flex } from "@chakra-ui/react";
import { SpaceLayout } from "../../../layouts/space-layout";
import { ModelSpaceHeader } from "./components/ModelSpaceHeader";
import { TModelSpaceHeaderProps } from "../../../types/props";
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
  //api call will happen here
  return (
    <SpaceLayout>
      <Flex as="main" bgColor="black" display="flex" justifyContent="center">
        <Flex
          height="100%"
          width="100%"
          bg="#202123"
          color="#FFF"
          maxW={"calc(100vw - 16px)"}
          justifyItems="center"
          borderRadius="8px"
        >
          <ModelSpaceHeader name={exampleData.name} avatar={exampleData.avatar} description={exampleData.description} />
        </Flex>
      </Flex>
    </SpaceLayout>
  );
};
