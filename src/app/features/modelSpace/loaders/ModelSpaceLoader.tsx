import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react"

export const ModelSpaceLoader = () => {
    return  <Flex
    gap=".75rem"
    alignItems="center"
    padding="12px 24px"
    height="100%"
    w="100%"
  >
    <SkeletonCircle size={"6"}/>
    <Box>
    <Skeleton/>
    <Skeleton/>
    </Box>
  </Flex>
}