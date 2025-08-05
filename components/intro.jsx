import { Box, Button, Center, Container, Flex, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// next에서 임포팅 이렇게하면 에러남. 그냥 바로 경로로 불러옴
// import myPic from '../../public/images/PIC_JunhyungKim.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {

    const myPic = '/images/PIC_JunhyungKim.jpg';        

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
                            <a href='https://drive.google.com/file/d/1ahfacTlVlqeKs9P1mY8dP6N3hkj25f8K/view?usp=drive_link' target='_blank'  rel='noreferrer'>
                                <Button size='sm' borderRadius="full" variant='solid' colorScheme='blue'>{viewResume}</Button>
                            </a>
                        </Box>
                    </Flex>

                    <Spacer />

                    <Flex direction='column' w={{ lg: '60%' }} alignItems={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'left' }}>
                        <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_Developer
                        </Text>
                        <Heading w={{ base: 'full', sm: '80%' }} size="xl" pb={5}>
                            Hello World!<br />I&apos;m <span className='myName'>
                                {myName ? 'Junhyung Kim!' : 'Mark Kim!'}</span>
                        </Heading>
                        <Text w={{ base: 'full' }} fontSize={{ lg: 'sm', xl: "md" }} overflowWrap='break-word' pb={{ base: 5, lg: 10 }}>
                            I am <b>Junhyung (Mark) Kim</b>, a <b>full-stack developer</b> with a strong foundation in object-oriented programming and a focus on building <u>scalable, maintainable applications</u>.
                            I value creative problem-solving, continuous learning, and clear communication, and primarily work with <b>React and Node.js</b> while exploring new technologies.
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
                                    <Center><FontAwesomeIcon icon={faReact} width='auto' height='20px' /></Center>
                                        <Text ml={2}>React (with Native)</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faNodeJs} width='auto' height='20px'  /></Center>
                                        <Text ml={2}>Node.js</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/next-js.svg' width='auto' height='20px' /></Center>
                                        <Text ml={2}>Next.js</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/nest-js.svg' width='auto' height='20px' /></Center>
                                        <Text ml={2}>Nest.js</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/typescript.png' width='auto' height='16px' /></Center>
                                        <Text ml={2}>TypeScript</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><FontAwesomeIcon icon={faJsSquare} width='30px' height='30px'  /></Center>
                                        <Text ml={2}>JavaScript</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/Csharp_Logo.png' width='auto' height='20px' /></Center>
                                        <Text ml={2}>C#</Text>
                                    </Flex>
                                    <Flex>
                                    <Center><Image src='images/dotnetcore_Logo.png' width='auto' height='20px' /></Center>
                                        <Text ml={2}>.NET Core</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/angular_Logo.png' width='auto' height='20px' /></Center>
                                        <Text ml={2}>Angular</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/dbms_Logo.svg' width='auto' height='20px' /></Center>
                                        <Text ml={2}>DBMS</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/supabase_Logo.jpg' width='auto' height='20px' /></Center>
                                        <Text ml={2}>Supabase</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/mongoDB_Logo.png' width='auto' height='20px' /></Center>
                                        <Text ml={2}>MongoDB</Text>
                                    </Flex>
                                    <Flex>
                                        <Center><Image src='images/aws_Logo.png' width='20px' height='auto' /></Center>
                                        <Text ml={2}>AWS & Redis</Text>
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
