import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface Props {
    title?: string;
}

const Hero: React.FC<Props> = ({ title = 'Skrit Dev' }): JSX.Element => (
    <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Heading fontSize='10vw'>{title}</Heading>
    </Flex>
);

export default Hero;
