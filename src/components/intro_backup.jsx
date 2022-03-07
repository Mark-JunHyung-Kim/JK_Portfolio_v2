import React from 'react';
import { Container, Flex, Box, Text, Heading, Image } from '@chakra-ui/react';

import myPic from '../images/PIC_JunhyungKim.jpg';

const Intro = () => {
    return (
        <Container maxW="100vw" align="center" pt="80px">
            <Flex
                maxW="container.lg"
                h="full"
                direction="column"
                alignItems="center"
                pt={5}
                pb={20}
            >
                

                <Box w="full">
                    <Text fontSize="xl" pb={2}>
                        #Passionate #Creative #Web_Developer
                    </Text>
                    <Heading size="xl" pb={10}>
                        Hello World!<br />I'm<span className='myName'> Junhyung Kim!</span>
                    </Heading>
                    <Box
                        w="30%"
                        minW={{ base: '2xs', sm: 'xs' }}
                        // height="auto"
                        borderRadius="full"
                        boxShadow="xl"
                        border='2px solid'
                        borderColor='gray.400'
                        mb={10}
                    >
                        <Image
                            width='full'
                            src={myPic}

                            objectFit="contain"
                            borderRadius="full"


                            p={{ base: '5', sm: '5' }}
                        />
                    </Box>
                    <Box maxW='80%' minW='300px'>
                        <Text overflowWrap='break-word'>
                            I am <b>Junhyung Kim</b>, a developer who believes that there is <b>no limit</b> to planning.
                            <br /><br />
                            I always values <b>creative</b> and <b>new experiences</b>,
                            <br /> and values exchange of information through <b>communication</b>.
                            <br /><br />
                            I currently work mainly on <b>front-end</b> development with <b>React</b>,
                            <br />and additionally enjoy experiencing new worlds through <b>games and travel</b>.
                        </Text>
                    </Box>
                </Box>


            </Flex>
        </Container>
    );
};

export default Intro;
