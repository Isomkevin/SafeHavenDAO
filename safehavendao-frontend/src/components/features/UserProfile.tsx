'use client'

import {
  Address,
  Name,
} from "@coinbase/onchainkit/identity";

import {
  ConnectWallet,
} from "@coinbase/onchainkit/wallet";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from "react";

export default function UserProfileEdit() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const changePhoneNumber = () => alert("This feature is under development")

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        as="form"
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        color={useColorModeValue('gray.800', 'white')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="WalletEnsName">
          <FormLabel>Wallet ENS name</FormLabel>
          <ConnectWallet>
            <Name />
          </ConnectWallet>
        </FormControl>
        <FormControl id="WalletAddressName">
          <FormLabel>Wallet Address Name</FormLabel>
          <ConnectWallet>
            <Address isSliced={true} />
          </ConnectWallet>
        </FormControl>
        <FormControl id="phonenumber">
          <FormLabel>Linked Phone Number</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              placeholder="+1xxxxxxxxx"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={"+254758750620"}
              disabled={true}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={changePhoneNumber}>
                Change
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}