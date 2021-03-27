import React, { PropsWithChildren } from 'react';
import { Flex, Box, FlexProps } from '@chakra-ui/react';

interface ICustomProps {
    overlay?: string;
}

type IProps = PropsWithChildren<ICustomProps & FlexProps>;

const Section: React.FC<IProps> = ({
    overlay,
    children,
    ...flexProps
}): JSX.Element => (
    <Flex as='section' width='full' {...flexProps}>
        <Box width='full' bgColor={overlay}>
            <Box
                width='full'
                maxWidth={{ base: 'xl', md: '7xl' }}
                mx='auto'
                py='4rem'
            >
                {children}
            </Box>
        </Box>
    </Flex>
);

export default Section;
