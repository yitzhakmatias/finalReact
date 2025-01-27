import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Spacer, Text, Button } from '@chakra-ui/react';

const Navbar = () => {
    const { username, email } = useSelector((state) => state.form);

    return (
        <Flex bg="blue.500" p="4" color="white">
            <Text fontWeight="bold">React Final Project</Text>
            <Spacer />
            <Text>{username && `Welcome, ${username} (${email})`}</Text>
            <Button ml="4" size="sm" colorScheme="red">
                Logout
            </Button>
        </Flex>
    );
};

export default Navbar;
