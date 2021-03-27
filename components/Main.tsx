import React from 'react';
import { Stack } from '@chakra-ui/react';

const Main = (props: Record<string, unknown>): JSX.Element => (
    <Stack
        spacing='1.5rem'
        width='100%'
        maxWidth='48rem'
        mt='-45vh'
        pt='8rem'
        px='1rem'
        {...props}
    />
);

export default Main;
