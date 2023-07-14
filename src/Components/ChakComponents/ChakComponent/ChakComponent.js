import React from 'react';
import ChakCards from '../ChakCards/ChakCards';
import { Box, Button, Checkbox, Flex, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Container } from 'react-bootstrap';
import '../ChakComponent/ChakComponent.css';
import { ChevronDownIcon, TimeIcon } from '@chakra-ui/icons';



const ChakComponent = () => {
    //Fack data
    const contents = [
        {name: "Maravel", time: 20, impress: 15, Erate: 0.75, img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000"}, 
        { name: "Maravel", time: 40,impress: 50, Erate: 0.44,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Laravel", time: 50,impress: 66, Erate: 0.85,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 35,impress: 77, Erate: 0.63,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 15,impress: 15, Erate: 0.05,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 20,impress: 45, Erate: 0.79,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 30,impress: 47, Erate: 0.44,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 45,impress: 63, Erate: 0.33,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" },
        { name: "Maravel", time: 55,impress: 25, Erate: 0.98,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 25,impress: 89, Erate: 0.74,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 48,impress: 88, Erate: 5.00,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }, 
        { name: "Maravel", time: 10,impress: 46, Erate: 0.75,  img: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000" }
    ];
    const handleSelect = () => {
        const clicked = <Checkbox>Checkbox</Checkbox>
    }

    return (
        <div className='dashboardBd'>
            <Container>
                <Flex color='white'>
                    <Box w='270px' h='1200px' bg='#1E2733' mr='90px'>
                        <Text>
                            <Text fontSize='32px' fontWeight='700' ml='30px' mt='20px'>buxx</Text>
                            <Stack spacing={3} direction='column' align='center' mt='50px'>
                                <Button className='Button' textAlign='left' bg='none' _hover='none' w='90%' >
                                <TimeIcon mr='10px'/> Dashboard
                                </Button>
                                <Button className='Button' bg='none' _hover='none' w='90%'>
                                    Ambassadors
                                </Button>
                                <Button className='Button' bg='none' _hover='none' w='90%'>
                                    Missions
                                </Button>
                                <Button className='Button' bg='none' _hover='none' w='90%'>
                                    Message center
                                </Button>
                                <Button className='Button' bg='none' _hover='none' w='90%'>
                                    Submission
                                </Button>
                            </Stack>
                        </Text>
                    </Box>

                    <Box flex='1' bg='#383F48' mt='9%'>
                        <Text>
                            <Flex>
                            <Text fontSize='32px' fontWeight='600' mb='4%'>Content Library</Text>
                                <Button onClick={handleSelect} ml='62%' bg='#383F48' border='1px solid aliceblue' _hover='none' textAlign='right'>
                                    Select
                                </Button>
                            </Flex>
                            <div>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    All social posts
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    Follower Count
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    Engagement rate
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    Impression
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    Campaign
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton bg='#637381' ml='7px' _hover='none' as={Button} rightIcon={<ChevronDownIcon/>}>
                                    Label
                                </MenuButton>
                                <MenuList bg='#52606E'>
                                    <MenuItem bg='none'>Download</MenuItem>
                                    <MenuItem bg='none'>Create a Copy</MenuItem>
                                </MenuList>
                            </Menu>
                            </div>
                            <div>
                                <SimpleGrid columns={[2, null, 4]} spacing='15px' mt='20px'>
                                {
                                    contents.map(content => <ChakCards
                                    // key = {contents.length}
                                    content={content}
                                    >
                                    </ChakCards>)
                                } 
                                </SimpleGrid>
                            </div>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
};

export default ChakComponent;