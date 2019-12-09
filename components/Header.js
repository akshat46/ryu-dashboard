import Link from 'next/link';
import React from "react";
import Router from 'next/router';
import { Heading, Flex, ButtonGroup, ThemeProvider} from "@chakra-ui/core";
import PrimaryButton from './PrimaryButton'
import { FiServer, FiSliders, FiAirplay, FiGitCommit, FiGitPullRequest } from 'react-icons/fi';

// Use at the root of your app
const headingLink = {
    cursor: "pointer",
    fontWeight: "bold",
};

const link = {
    color: "inherit !important",
    textDecoration: "none !important",
}

const Header = props => (
    <ThemeProvider>
    <Flex px="4" py="4" justify="space-between">
        <Flex align="center" justify="left">
            <ButtonGroup spacing={4}>
                    <PrimaryButton Link href="/switches"
                        bg="blue.300" 
                        scale={props.active[0]}>
                        <FiServer /> <a style={link} href="/switches">Switches</a>
                    </PrimaryButton>
                    <PrimaryButton 
                        bg="green.300"
                        scale={props.active[1]}>
                        <FiGitPullRequest /> <a style={link} href="/switches">Topology</a>
                    </PrimaryButton>
            </ButtonGroup>
        </Flex>

        <Flex align="center" justify="right">
            <Link href="/">
                    <Heading as="h1" style={headingLink} color="purple.300"><FiSliders /> RYU</Heading>
            </Link>
        </Flex>
    </Flex>
    </ThemeProvider>
);

export default Header;
