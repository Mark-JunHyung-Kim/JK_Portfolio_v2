import React, { useState, useEffect } from 'react';
import { Container, Flex, Box, Text, Heading, Spacer, Image, Grid, Center, Button } from '@chakra-ui/react';

// next에서 임포팅 이렇게하면 에러남. 그냥 바로 경로로 불러옴
// import myPic from '../../public/images/PIC_JunhyungKim.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact, faNodeJs, faHtml5, faCss3Alt, } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {

    const myPic = '/images/PIC_JunhyungKim.jpg';
    const nextJsIcon = 'images/next-js.svg';

    const [myName, setMyName] = useState(false);

    const viewResume = '<View Resume />'


    useEffect(() => {

        const iconChanger = setInterval(() => {
            setMyName(myName => !myName);
        }, 5000);
        return () => clearInterval(iconChanger)
    }, []);
    return (
        <Container maxW="100vw" h='full' pt="80px" justifyContent='center' centerContent>            
            <Flex
                maxW='container.lg'
                direction="column"
                pt={{ base: 0, lg: 20 }}
                pb={{ base: 0, lg: 20 }}
            >
                <Flex w='full' direction={{ base: 'column', lg: 'row' }} alignItems='center' justifyItems='center' p={5}>
                    <Flex
                        w={{ base: '300px' }}
                        maxW={{ base: '70%', md: '50%', lg: "30%" }}
                        direction='column' alignItems='center'>
                        <Box
                            borderRadius="full"
                            boxShadow="xl"
                            border='2px solid'
                            borderColor='gray.400'

                        >
                            <Image
                                width='full'
                                src={myPic}
                                objectFit="contain"
                                borderRadius="full"
                                p={{ base: '2', sm: '5' }}
                            />
                        </Box>
                        <Box
                            w='max-content'
                            borderRadius="full"
                            boxShadow="xl"
                            border='2px solid'
                            borderColor='gray.400'
                            mt={5}
                            p={2}
                        >
                            <a href='https://drive.google.com/file/d/1KbYFZz2TpdXRM4sVeSPoIlIxWpCm7Dlb/view?usp=sharing' target='_blank'  rel='noreferrer'>
                                <Button size='sm' borderRadius="full" variant='solid' colorScheme='blue'>{viewResume}</Button>
                            </a>
                        </Box>
                    </Flex>

                    <Spacer />

                    <Flex direction='column' w={{ lg: '60%' }} alignItems={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'left' }}>
                        <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_WebDeveloper
                        </Text>
                        <Heading w={{ base: 'full', sm: '80%' }} size="xl" pb={5}>
                            Hello World!<br />I&apos;m <span className='myName'>
                                {myName ? 'Junhyung Kim!' : 'Mark Kim!'}</span>
                        </Heading>
                        <Text w={{ base: 'full' }} fontSize={{ lg: 'sm', xl: "md" }} overflowWrap='break-word' pb={{ base: 5, lg: 10 }}>
                            I am <b>Junhyung (Mark) Kim</b>, a developer who believes that there is <b>no limit</b> to planning.
                            <br /><br />
                            I always values <b>creative</b> and <b>new experiences</b>,
                            and values exchange of information through <b>communication</b>.
                            <br /><br />
                            I currently work mainly on <b>full-stack</b> development with <b>React & Node.js</b>,
                            and additionally enjoy experiencing new worlds through <b>games and travel</b>.
                        </Text>

                        <Flex direction={{ base: 'column', md: 'row', lg: 'column' }}>
                            <Box mr='5'>
                                <Text w='max-contents' fontSize={{ lg: 'sm', xl: "md" }} fontWeight='bold' ml={1} mb={1}>Development Skills: </Text>
                            </Box>
                            <Box
                                // w={{ base: 'full', md: 'max-content' }}
                                w='max-content'
                                h='full' borderRadius='lg' borderWidth='1px' borderColor='gray.800' p={3}
                                alignSelf={{ lg: 'flex-start' }}
                            >
                                <Grid
                                    templateRows='repeat(2, 1fr)'
                                    // templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                                    gap={2}
                                    fontSize={{ lg: 'md', xl: "lg" }}
                                >
                                    <Flex>
                                    <Center><FontAwesomeIcon icon={faReact} width='27px' height='27px' /></Center>
                                        <Text ml={2}>React</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faNodeJs} width='27px' height='27px'  /></Center>
                                        <Text ml={2}>Node.js</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src={nextJsIcon} width='27px' height='27px' /></Center>
                                        <Text ml={2}>Next.js</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faJsSquare} width='27px' height='27px'  /></Center>
                                        <Text ml={2}>JavaSciprt</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faHtml5} width='27px' height='27px'  /></Center>
                                        <Text ml={2}>HTML5</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faCss3Alt} width='27px' height='27px'  /></Center>
                                        <Text ml={2}>CSS3</Text>
                                    </Flex>

                                </Grid>
                            </Box>

                        </Flex>





                    </Flex>
                </Flex>




            </Flex>
        </Container >
    );
};

export default Intro;
