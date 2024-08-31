// TODO: ModelName, model Image, model description

import {Flex, Box, Heading, Image, Tooltip} from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { FC } from "react"
import { TModelSpaceHeaderProps } from "../../../../types/props"



export const ModelSpaceHeader : FC<TModelSpaceHeaderProps>= ({name, description, avatar}) => {
return (<Flex>
    <Flex gap=".75rem" alignItems="center" padding="12px 24px">
        <Image src={avatar} height={8} width={8} borderRadius="50%" />
        <Heading fontSize="18px" lineHeight="28px" fontWeight="600">LLM Name : {name}</Heading>
        <Box paddingBottom="4px">
        <Tooltip label={description} hasArrow >
        <InfoOutlineIcon />       
        </Tooltip>
        </Box>
        
    </Flex>
</Flex>)
}