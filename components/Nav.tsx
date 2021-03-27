import React, { useMemo } from 'react';
import { Box, Flex, Text, Link, Stack } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';

interface IMenu {
    id: number;
    link: string;
    label: string;
    isActive?: boolean;
}

const Nav = (): JSX.Element => {
    const menuItems: IMenu[] = useMemo(
        () => [
            {
                id: 1,
                link: '/work',
                label: 'Work'
            },
            {
                id: 2,
                link: '/about',
                label: 'About'
            },
            {
                id: 3,
                link: '/contact',
                label: 'Contact'
            }
        ],
        []
    );

    const renderLogo = (): JSX.Element => (
        <Flex align='center'>
            <Text>Dani Perchés</Text>
        </Flex>
    );

    const renderMenu = (): JSX.Element[] => {
        return menuItems.map(menu => (
            <Link key={menu.id} href={menu.link}>
                {menu.label}
            </Link>
        ));
    };

    const renderNav = (): JSX.Element => (
        <Flex align='center' justify='flex-end' width='100%' maxWidth={824}>
            <Stack direction='row' spacing='2rem'>
                {renderMenu()}
                <ThemeToggler />
            </Stack>
        </Flex>
    );

    return (
        <Box
            as='nav'
            pos='fixed'
            top={0}
            right={0}
            left={0}
            width='full'
            zIndex={3}
        >
            <Box
                height='5rem'
                maxWidth={{ base: 'xl', md: '7xl' }}
                mx='auto'
                py='1rem'
            >
                <Flex
                    align='center'
                    justify='space-between'
                    height='full'
                    color='white'
                >
                    {renderLogo()}
                    {renderNav()}
                </Flex>
            </Box>
        </Box>
    );
};

export default Nav;
