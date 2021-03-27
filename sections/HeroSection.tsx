import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Heading } from '@chakra-ui/layout';

import Section from '../components/Section';

const HeroSection = (): JSX.Element => {
    const { colorMode } = useColorMode();

    const bgImage = {
        light: 'url("/img/hero-light.jpg")',
        dark: 'url("/img/hero-dark.jpg")'
    };

    return (
        <Section
            align='center'
            justify='center'
            height='100vh'
            bgImage={bgImage[colorMode]}
            bgRepeat='no-repeat'
            bgSize='cover'
            color='white'
        >
            <Heading fontSize='6vw' textShadow='lg'>
                Dani Perchés
            </Heading>
            <Heading>Software developer based in Menorca, Spain</Heading>
        </Section>
    );
};

export default HeroSection;
