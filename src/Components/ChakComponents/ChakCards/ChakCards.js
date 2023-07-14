import { Box, Button, Card, CardBody, Center, Checkbox, Divider, Flex, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const ChakCards = (content) => {
    const {name, img, impress, Erate, time} = content.content;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Card maxW='sm' borderRadius='0px' bg='#52606E' textColor='white'>
          <CardBody p='0px'>
            <Link onClick={onOpen}>
              <Image src={img} alt='image' borderRadius='0px'/>
            </Link >
            {/* <Checkbox>Checkbox</Checkbox> */}

            {/*Modal*/}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay  />
                <ModalContent bg='#293544' color='white' maxH="100%" maxW="50%">
                  <Flex>
                    <Center flex='1'>
                      <Text p='50px'>
                        <Image src={img} alt='image' borderRadius='0px' h='490px' w='340px'/>
                      </Text>
                    </Center>
                    <Box flex='1'>
                      <Text>
                        <Flex>
                          <Text mt='3%' ml='3%'>
                            <Image src={img} alt='image' w='50px' h='50px' borderRadius='50%'/>
                          </Text>
                          <Text m='0px'>  
                            <ModalHeader mb='0px'>{name}</ModalHeader>
                            <Text ml='15%'>{time} min ago</Text> 
                          </Text>
                        </Flex>
                      <ModalCloseButton />
                  <ModalBody>
                    <Divider border='none' mt='0px'/>
                    <Flex pl='5%' pr='5%'>
                    <Box flex='1'>
                      <Text fontSize='16px' fontWeight='400' m='0px'>Impression</Text>
                      <Text fontSize='24px' fontWeight='600' m='0px'>{impress}</Text>
                    </Box>
                    <Box flex='1'>
                      <Text fontSize='16px' fontWeight='400' m='0px'>Eng Rate</Text>
                      <Text fontSize='24px' fontWeight='600' m='0px'>{Erate}%</Text>
                    </Box>
                    <Box>
                      <Text fontSize='16px' fontWeight='400' m='0px'>EMV</Text>
                      <Text fontSize='24px' fontWeight='600' m='0px'>${impress}</Text>
                    </Box>
                  </Flex>
                  <Divider  border='none'/>
                  <Text>In some cases, you might want to add content within a divider. To do this, you can compose the Divider and AbsoluteCenter components.</Text>
                  <Text>Mentioned in caption</Text>
                  <Divider/>
                  <Flex>
                    <Box flex='1'>
                      <Text fontSize='18px' fontWeight='500'>Labels</Text>  
                    </Box>
                    <Box flex='1'>
                      <Button fontSize='18px' fontWeight='500' _hover='none' bg='none' color='rgb(83, 177, 30)'>+Adds</Button>
                    </Box>
                    <Box flex='1'>
                      <Button fontSize='18px' fontWeight='500' _hover='none' bg='none' color='rgb(83, 177, 30)'>Set Status</Button>
                    </Box>
                  </Flex>
                </ModalBody>
                  <Text textAlign='center' mt='5%'>No Labels</Text>
                  </Text>
                  </Box>
                  </Flex>
                </ModalContent>
            </Modal>
              <Stack mt='3' ml='7px' >
              <Flex>
                <Box flex='1'>
                  <Text>
                    <Image src={img} alt='image' w='30px' h='30px' borderRadius='50%' />
                  </Text>
                </Box>
                <Box flex='4'>
                  <Text><Heading size='md'>{name}</Heading></Text>
                </Box>
              </Flex>
<>
          <div style={{display: 'flex', margin:'0px'}}>
            <div style={{marginRight:'20%'}}>
              <div>Impression</div>
              <div style={{fontSize: 18, fontWeight: 500}}>{impress}k</div>
            </div>
            <div>
              <div>Eng Rate</div>
              <div style={{fontSize: 18, fontWeight: 500}}>{Erate}%</div>
            </div>
          </div>
          <div style={{fontWeight:400, fontSize: 13}}>{time} min ago</div>
        </>
    </Stack>
  </CardBody>
      </Card>
    );
};

export default ChakCards;