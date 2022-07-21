import React, { useState, useEffect, forwardRef } from 'react';
import {
    Container,
    Flex,
    Box,
    Link,
    Circle,
    Image,
    Heading,
    Text,
    Button,
    Center,
    Spacer,
    Grid,
    GridItem,
    HStack,
    VStack,
    Tag,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Projects = forwardRef((props, ref) => {
    const { onHomeClick, setCurrentPage, setRoutePage, handlePageTop } = props;

    const [p1Switch, setP1Switch] = useState(false);
    const [p2Switch, setP2Switch] = useState(false);

    const snap_vl_landing = '/images/portfolio_vl_landing/vl_landing_01.jpg';
    const gif_vl_landing = '/images/portfolio_vl_landing/vl_landing.gif';

    const snap_hozehair = '/images/portfolio_hozehair/snap_hozehair.jpg';
    const gif_hozehair = '/images/portfolio_hozehair/gif_hozehair.gif';

    const nextJsIcon = '/images/next-js.svg';

    const handleViewProject = (e) => {
        setCurrentPage(e);
        handlePageTop();
    }

    const buttonName = '<View Project/>';

    return (
        // 높이 나중에 수정할것.
        <Container maxW="100vw" align="center" className='outer__container' ref={ref}>
            <Flex
                maxW={{ lg: 'container.lg', xl: "container.xl" }}
                // w="80%"
                h="full"
                direction="column"
                alignItems="center"
                pt={10}
                pb={20}
            >
                <Box w="full">
                    <Text fontSize="xl" pb={2}>
                        Creative and Analytical Thinking
                    </Text>
                    <Heading size="xl" fontWeight="bold" pb={10}>
                        LATEST WORKS
                    </Heading>
                    <Text w='80%' overflowWrap='break-word' pb={{ base: 5, lg: 10 }} fontSize={{ lg: 'sm', xl: "md" }}>
                        The basics of web development will be <b>how to melt ideas</b> within a page and <b>how to implement</b> functions.
                        <br />Check out various works from the landing page of the mobile app to the homepage for store below.
                    </Text>
                </Box>

                <Grid
                    h='full'
                    placeItems="center"
                    templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(1, 1fr)' }}
                    templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                    gap={5}
                >
                    {/* 반응형 카드 높이 조절 */}
                    <GridItem w='full' h='full' p={{ base: '5', lg: '5' }}>
                        <Box minH='full'
                            onMouseOver={(e) => { setP1Switch(true) }}
                            // onMouseOver={(e) => { setP1Switch(p1Switch => !p1Switch) }}
                            // onMouseDown={(e) => { setP1Switch(p1Switch => !p1Switch) }}
                            onMouseLeave={(e) => { setP1Switch(false) }}
                            className={p1Switch ? 'w_after' : 'w_before'}
                        >
                            <Flex
                                w="full"
                                h='full'
                                direction="column"
                                borderRadius="lg"
                                borderWidth='2px'
                                borderColor='gray.200'
                                overflow="hidden"
                                boxShadow='xl'
                                className="portfolio_items"
                            >
                                <Box h={{ base: '200px', md: "420px", lg: '350px' }} zIndex='0'>
                                    <Image w="full" h="full" src={p1Switch ? gif_vl_landing : snap_vl_landing}
                                        objectFit="cover"
                                        className={p1Switch ? 'img_transition_on' : 'img_transition_off'}

                                    />
                                </Box>
                                <Flex
                                    direction="column"
                                    // h="full"
                                    h={{ base: '380px', md: '300px', xl: '350px' }}
                                    bg="white"
                                    textAlign="left"
                                    p={5}
                                    zIndex='1'
                                >
                                    <Text fontSize={{ base: 'sm', md: 'lg', lg: 'md', xl: 'xl' }} fontWeight='semibold'>Project Vancouver Life App.</Text>
                                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '2xl', xl: '4xl' }} >
                                        Landing Page
                                    </Heading>
                                    <Spacer />
                                    <Text fontSize={{ base: 'sm', md: 'md', lg: 'sm', xl: 'md' }} my={5}>
                                        Vancouver Life, an application for the Vancouver Korean community, is a multi-purpose mobile application.
                                        <br /><br />
                                        This landing page is a guide area for new users and introduces various functions supported by the application.
                                    </Text>
                                    <Spacer />
                                    <Flex direction={{ base: 'column', sm: 'row' }}>
                                        <Flex
                                            flexWrap="wrap"
                                            justifyContent={{ base: 'center', lg: 'center' }}
                                            alignContent={{ base: 'center', lg: 'center' }}
                                            fontSize={{ md: 'md', lg: 'md', xl: "lg" }}
                                            mb={{ base: 2, sm: 0 }}
                                        >
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faReact} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faNodeJs} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faJsSquare} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faHtml5} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faCss3Alt} width="35px" height="35px" />
                                            </Center>
                                        </Flex>
                                        <Spacer />

                                        <Flex
                                            direction="column"
                                            alignItems='center'
                                        >
                                            <Spacer />
                                            <NextLink href='/projects/vl_landing' scroll={false} passHref>
                                                <Button colorScheme='blue' bgColor='blue.900' m={1} onClick={(e) => { handleViewProject(1) }} className='buttons'>
                                                    {buttonName}
                                                </Button>
                                            </NextLink>

                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </GridItem>

                    {/* 2번아이템 */}
                    <GridItem w='full' h='full' p={{ base: '5', lg: '5' }}>
                        <Box minH='full'
                            onMouseOver={(e) => { setP2Switch(true) }}
                            // onMouseOver={(e) => { setP1Switch(p1Switch => !p1Switch) }}
                            // onMouseDown={(e) => { setP1Switch(p1Switch => !p1Switch) }}
                            onMouseLeave={(e) => { setP2Switch(false) }}
                            className={p2Switch ? 'w_after' : 'w_before'}
                        >
                            <Flex
                                w="full"
                                h='full'
                                direction="column"
                                borderRadius="lg"
                                borderWidth='2px'
                                borderColor='gray.200'
                                overflow="hidden"
                                boxShadow='xl'
                                className="portfolio_items"
                            >
                                <Box h={{ base: '200px', md: "420px", lg: '350px' }} zIndex='0' overflow='hidden'>
                                    <Image w="full" h="full" src={p2Switch ? gif_hozehair : snap_hozehair}
                                        objectFit="cover"
                                        className={p2Switch ? 'img_transition_on' : 'img_transition_off'}
                                    />
                                </Box>
                                <Flex
                                    direction="column"
                                    // h="full"
                                    h={{ base: '380px', md: '300px', xl: '350px' }}
                                    bg="white"
                                    textAlign="left"
                                    p={5}
                                    zIndex='1'
                                >
                                    <Text fontSize={{ base: 'sm', md: 'lg', lg: 'md', xl: 'xl' }} fontWeight='semibold'>Hair Salon Website.</Text>
                                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '2xl', xl: '4xl' }} >
                                        Hoze Hair Salon
                                    </Heading>
                                    <Spacer />
                                    <Text fontSize={{ base: 'sm', md: 'md', lg: 'sm', xl: 'md' }} my={5}>
                                        This project is a homepage for the introduction and reservation of the Hoze Hair Salon Shop.
                                        <br /><br />
                                        Through the website, customers can check information about shops and services and make reservations. All websites are built with a fully responsive design.
                                    </Text>
                                    <Spacer />
                                    <Flex direction={{ base: 'column', sm: 'row' }}>
                                        <Flex
                                            flexWrap="wrap"
                                            justifyContent={{ base: 'center', lg: 'center' }}
                                            alignContent={{ base: 'center', lg: 'center' }}
                                            fontSize={{ md: 'md', lg: 'md', xl: "lg" }}
                                            mb={{ base: 2, sm: 0 }}
                                        >
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faReact} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                {/* <FontAwesomeIcon icon={faNodeJs} width="35px" height="35px" /> */}
                                                <Image src={nextJsIcon} width='35px' height='35px' />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faJsSquare} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faHtml5} width="35px" height="35px" />
                                            </Center>
                                            <Center mx={1}>
                                                <FontAwesomeIcon icon={faCss3Alt} width="35px" height="35px" />
                                            </Center>
                                        </Flex>
                                        <Spacer />

                                        <Flex
                                            direction="column"
                                            alignItems='center'
                                        >
                                            <Spacer />
                                            <NextLink href='/projects/hozehair' scroll={false} passHref>
                                                <Button colorScheme='blue' bgColor='blue.900' m={1} onClick={(e) => { handleViewProject(1) }} className='buttons'>
                                                    {buttonName}
                                                </Button>
                                            </NextLink>

                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </GridItem>


                    {/*  <GridItem>
                        <Flex
                            minH="600px"
                            height="full"
                            direction="column"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            className="portfolio_items"
                        >
                            <Box h='full'>
                                <Image w='full' h='full' src={testImg} objectFit='cover' />
                            </Box>
                            <Flex direction='column' h="full" bg="white" textAlign="left" p={5}>
                                <Heading mb={2}>Project Name</Heading>
                                <Text mb={2}>
                                    This my project, and my project is fucking awesome! This my
                                    project, and my project is fucking awesome! This my project,
                                    and my project is fucking awesome!
                                </Text>
                                <Spacer />
                                <Flex direction="row">
                                    <Flex flexWrap='wrap'>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                    </Flex>
                                    <Spacer />
                                    <Flex h='full' direction='column' onClick={(e) => { onHomeClick() }} >
                                        <Spacer />
                                        <NextRouter to='/works/'>
                                            <Button colorScheme='teal' m={1}>{buttonName}</Button>
                                        </NextRouter>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex
                            minH="600px"
                            height="full"
                            direction="column"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            className="portfolio_items"
                        >
                            <Box h='full'>
                                <Image w='full' h='full' src={testImg} objectFit='cover' />
                            </Box>
                            <Flex direction='column' h="full" bg="white" textAlign="left" p={5}>
                                <Heading mb={2}>Landing Page - Vancouver Life App.</Heading>
                                <Text mb={2}>
                                    This my project, and my project is fucking awesome! This my
                                    project, and my project is fucking awesome! This my project,
                                    and my project is fucking awesome!
                                </Text>
                                <Spacer />
                                <Flex direction="row">
                                    <Center fontSize='xl'>
                                        <Circle borderWidth={1} borderColor='blackAlpha.700' bg='white' size='40px' color='blackAlpha.700' fontSize='30px' mx={1}>
                                            <FontAwesomeIcon icon={faReact} />
                                        </Circle>
                                        <Circle borderWidth={1} borderColor='black' bg='white' size='40px' color='black' fontSize='30px' mx={1}>
                                            <FontAwesomeIcon icon={faReact} />
                                        </Circle>
                                        <Circle borderWidth={1} borderColor='black' bg='white' size='40px' color='black' fontSize='30px' mx={1}>
                                            <FontAwesomeIcon icon={faReact} />
                                        </Circle>
                                    </Center>
                                    <Spacer />
                                    <Flex h='full' direction='column' onClick={(e) => { onHomeClick() }} >
                                        <Spacer />
                                        <NextRouter to='/works/'>
                                            <Button colorScheme='teal' m={1}>{buttonName}</Button>
                                        </NextRouter>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex
                            minH="600px"
                            height="full"
                            direction="column"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            className="portfolio_items"
                        >
                            <Box h='full'>
                                <Image w='full' h='full' src={testImg} objectFit='cover' />
                            </Box>
                            <Flex direction='column' h="full" bg="white" textAlign="left" p={5}>
                                <Heading mb={2}>Project Name</Heading>
                                <Text mb={2}>
                                    This my project, and my project is fucking awesome! This my
                                    project, and my project is fucking awesome! This my project,
                                    and my project is fucking awesome!
                                </Text>
                                <Spacer />
                                <Flex direction="row">
                                    <Flex flexWrap='wrap'>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                        <Tag size='md' m={1} colorScheme='cyan' variant='solid'>#React</Tag>
                                    </Flex>
                                    <Spacer />
                                    <Flex h='full' direction='column' onClick={(e) => { onHomeClick() }} >
                                        <Spacer />
                                        <NextRouter to='/works/'>
                                            <Button colorScheme='teal' m={1}>{buttonName}</Button>
                                        </NextRouter>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem> */}
                </Grid>
            </Flex>
        </Container >
    );
});

Projects.displayName = 'Projects';

export default Projects;
