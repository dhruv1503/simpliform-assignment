// TODO: ModelName, model Image, model description

import { Flex, Box, Heading, Image, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useAppSelector } from "../../../hooks";
import { ModelSpaceLoader } from "../loaders/ModelSpaceLoader";

export const ModelSpaceHeader = () => {
  const { name, avatar, description, isLoading } = useAppSelector(
    (state) => state.modelSpace
  );
  return isLoading ? (
    <ModelSpaceLoader />
  ) : (
    <Flex
      gap=".75rem"
      alignItems="center"
      padding="12px 24px"
      height="100%"
      w="100%"
    >
      <Image src={avatar} height={8} width={8} borderRadius="50%" />
      <Heading fontSize="18px" lineHeight="28px" fontWeight="600">
        LLM Name : {name}
      </Heading>
      <Box paddingBottom="4px">
        <Tooltip label={description} hasArrow>
          <InfoOutlineIcon />
        </Tooltip>
      </Box>
    </Flex>
  );
};
