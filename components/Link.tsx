import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import {
    Link as ChakraLink,
    LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type LinkProps = PropsWithChildren<NextLinkProps & Omit<ChakraLinkProps, 'as'>>;

const Link: React.FC<LinkProps> = ({
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    children,
    ...chakraProps
}): JSX.Element => (
    <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        passHref
    >
        <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
);

export default Link;
