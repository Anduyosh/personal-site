import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const ThemeToggler = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Switch color='green' isChecked={isDark} onChange={toggleColorMode} />
    );
};

export default ThemeToggler;
