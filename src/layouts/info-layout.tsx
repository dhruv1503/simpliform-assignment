import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import type { MainLayoutProps } from "../types/props";


export const InfoLayout : FC<MainLayoutProps> = memo(({children}) => {
    return <Flex>
        {children}
    </Flex>

    
})