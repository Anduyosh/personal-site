import React from 'react';
import { Center, Text } from '@chakra-ui/layout';

import Section from '../../components/Section';

const ResumeSection = (): JSX.Element => (
    <Section>
        <Center>
            <Text fontSize='lg' align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                lobortis lectus sit amet elit blandit cursus dignissim vitae
                leo. Ut posuere ante nisl. Aenean id nisi ligula. Suspendisse
                viverra velit eget nunc tincidunt ultricies. Nunc vulputate
                placerat varius. Integer vehicula massa eget placerat tempor.
                Donec convallis consequat pulvinar. Mauris nec arcu nec ligula
                ornare dignissim. Sed eget neque a lectus mattis suscipit eu ut
                mauris. Proin rhoncus pellentesque enim, sed venenatis nisl
                volutpat nec. Nulla sit amet elit in justo consequat fringilla.
            </Text>
        </Center>
    </Section>
);

export default ResumeSection;
