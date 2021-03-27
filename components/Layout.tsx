import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Nav from './Nav';
import Footer from './Footer';

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    const renderContent = (): JSX.Element => (
        <Box as='main' width='full'>
            {children}
        </Box>
    );

    return (
        <Flex direction='column' align='center' minHeight='100vh'>
            <Nav />
            {renderContent()}
            <Footer />
        </Flex>
    );
};

export default Layout;
