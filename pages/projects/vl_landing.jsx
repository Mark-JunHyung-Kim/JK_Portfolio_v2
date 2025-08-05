import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    Heading,
    Image,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { forwardRef, useEffect } from 'react';

import Head from 'next/head';

import { LinkIcon } from '@chakra-ui/icons';

import {
    faCss3Alt,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// for carousel image slide function
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import { motion } from 'framer-motion';

const Vl_landing = forwardRef((props, ref) => {

    const { setRoutePage } = props;

    useEffect(() => {
        setRoutePage(1);
    }, []);


    const { handleCurrentPage } = props;

    const res_img = '/images/portfolio_vl_landing/vl_responsive.png';
    const objectives = '/images/portfolio_vl_landing/objectives.png';
    const icons = '/images/portfolio_vl_landing/icons.png';
    const c1 = '/images/portfolio_vl_landing/c1.png';
    const c2 = '/images/portfolio_vl_landing/c2.png';
    const c3 = '/images/portfolio_vl_landing/c3.png';

    return (
        <motion.div
            transition={{ duration: 2.0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Mark&apos;s Archive | Project - Vl_Landing</title>
                <link href="../logo_paw.png" rel="shortcut icon"></link>
            </Head>
            <Container
                maxW="100vw"
                h="full"
                pt="80px"
                justifyContent="center"
                centerContent
                ref={ref}
            >
                <Flex
                    maxW={{ lg: 'container.lg', xl: 'container.xl' }}
                    // minW="container.xl"
                    // w="70vw"
                    direction="column"
                    pt={{ base: 0, lg: 20 }}
                    pb={{ base: 0, lg: 20 }}
                >
                    <Flex
                        w="full"
                        direction={{ base: 'column', lg: 'row' }}
                        alignItems="center"
                        justifyItems="center"
                        p={5}
                    >
                        <Flex
                            direction="column"
                            w={{ lg: '55%', xl: '60%' }}
                            alignItems={{ base: 'center', lg: 'flex-start' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {/* <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_WebDeveloper
                        </Text> */}
                            <Text>
                                Project <b>Vancouver Life</b> by Team. KHSM
                            </Text>
                            <Heading w={{ base: 'full', sm: '80%' }} size="xl" pb={5}>
                                Landing Page
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                                pb={{ base: 5, lg: 10 }}
                            >
                                Project Vancouver Life is a multi-purpose community application
                                for Koreans living in Vancouver.
                                <br />
                                <br />
                                As a team member, I have created a landing page that introduces
                                various functions as a guide area for new members.
                            </Text>

                            <Flex
                                w="full"
                                direction={{ base: 'column', md: 'row' }}
                                textAlign="left"
                                justifyContent={{ base: 'center', lg: 'flex-start' }}
                            >
                                <Flex
                                    width="max-content"
                                    // direction={{ base: 'column', md: 'row', lg: 'column' }}
                                    direction="column"
                                    alignSelf={{ base: 'center', lg: 'flex-start' }}
                                    mr={{ base: 0, md: 5 }}
                                    mb={{ base: 5, md: 0 }}
                                >
                                    <Box w="max-contents" mr="5">
                                        <Text
                                            w="max-contents"
                                            fontSize={{ lg: 'sm', xl: 'md' }}
                                            fontWeight="bold"
                                            ml={1}
                                            mb={1}
                                        >
                                            Techniques used:
                                        </Text>
                                    </Box>
                                    <Box
                                        // w={{ base: 'full', md: 'max-content' }}
                                        w="max-content"
                                        h="full"
                                        borderRadius="lg"
                                        borderWidth="1px"
                                        borderColor="gray.800"
                                        p={3}
                                        alignSelf={{ lg: 'flex-start' }}
                                    >
                                        <Grid
                                            templateRows="repeat(2, 1fr)"
                                            // templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                            templateColumns={{
                                                base: 'repeat(2, 1fr)',
                                                xl: 'repeat(3, 1fr)',
                                            }}
                                            gap={2}
                                            fontSize={{ lg: 'md', xl: 'md' }}
                                        >
                                            <Flex>
                                                <Center width="25px" height="25px">
                                                    <FontAwesomeIcon icon={faReact} height='25px' />
                                                </Center>
                                                <Text ml={2}>React</Text>
                                            </Flex>
                                            <Flex>
                                                <Center width="25px" height="25px">
                                                    <FontAwesomeIcon icon={faNodeJs} height='25px' />
                                                </Center>
                                                <Text ml={2}>Node.js</Text>
                                            </Flex>
                                            <Flex>
                                                <Center width="25px" height="25px">
                                                    <FontAwesomeIcon icon={faJsSquare} height='25px' />
                                                </Center>
                                                <Text ml={2}>JavaSciprt</Text>
                                            </Flex>
                                            <Flex>
                                                <Center width="25px" height="25px">
                                                    <FontAwesomeIcon icon={faHtml5} height='25px' />
                                                </Center>
                                                <Text ml={2}>HTML5</Text>
                                            </Flex>
                                            <Flex>
                                                <Center width="25px" height="25px">
                                                    <FontAwesomeIcon icon={faCss3Alt} height='25px' />
                                                </Center>
                                                <Text ml={2}>CSS3</Text>
                                            </Flex>
                                        </Grid>
                                    </Box>
                                </Flex>

                                <Flex
                                    w="max-content"
                                    //  direction={{ base: 'column', md: 'row', lg: 'column' }}
                                    direction="column"
                                    alignSelf={{ base: 'center', lg: 'flex-start' }}
                                >
                                    <Box w="max-contents" mr="5" alignSelf='flex-start'>
                                        <Text
                                            w="max-contents"
                                            fontSize={{ lg: 'sm', xl: 'md' }}
                                            fontWeight="bold"
                                            ml={1}
                                            mb={1}
                                        >
                                            Features:
                                        </Text>
                                    </Box>
                                    <Box
                                        // w={{ base: 'full', md: 'max-content' }}
                                        w="max-content"
                                        h="max-content"
                                        borderRadius="lg"
                                        borderWidth="1px"
                                        borderColor="gray.800"
                                        p={3}
                                        alignSelf={{ lg: 'flex-start' }}
                                    >
                                        <Grid
                                            templateRows="repeat(2, 1fr)"
                                            // templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                                            templateColumns='repeat(1, 1fr)'
                                            gap={2}
                                            fontSize={{ lg: 'md', xl: 'md' }}
                                        >
                                            <Text ml={2}>
                                                - <b>Responsive</b> Website
                                            </Text>
                                            <Text ml={2}>
                                                - <b>Carousel</b> Image Slides
                                            </Text>
                                        </Grid>
                                    </Box>
                                </Flex>

                                {/* <Spacer/> */}
                            </Flex>
                        </Flex>
                        <Spacer />
                        <Flex w={{ md: 'full', lg: '50%' }} direction="column">
                            <Box w="full" my={5}>
                                <Image objectFit="contain" src={res_img}></Image>
                            </Box>
                            <Box alignSelf="center">
                                <a href="https://vancouver-life.ca/" target="_blank" rel='noreferrer'>
                                    <Button colorScheme="blue" bgColor="blue.900" m={1}>
                                        <LinkIcon />
                                        &nbsp;Visit Project
                                    </Button>
                                </a>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>

                {/* 목표에 대해 */}
                <Flex
                    w={{ xl: 'container.xl' }}
                    maxW={{ lg: 'container.lg', xl: 'container.xl' }}
                    alignSelf={{ lg: 'flex-start', xl: 'center' }}
                    // minW="container.xl"
                    // w="70vw"
                    direction="row"
                // pt={{ base: 0, lg: 20 }}
                // pb={{ base: 0, lg: 20 }}
                >
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        w="full"
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        justifyItems="center"
                        p={5}
                        my={5}
                    >
                        <Flex
                            direction="column"
                            w="full"
                            h="full"
                            alignItems={{ base: 'center', lg: 'flex-start' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {/* <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_WebDeveloper
                        </Text> */}
                            <Heading size="xl" pb={5}>
                                ▎Main Objective
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                h="full"
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                                pb={{ base: 5, lg: 10 }}
                            >
                                Since the application is based on mobile, we have always thought
                                about how to guide users accessing through the web to the
                                application.
                                <br />
                                <br />
                                While thinking about the method, we felt the need for an app
                                description page, and I, who was confident in web development,
                                took charge of making the landing page.
                            </Text>
                        </Flex>
                        <Center w={{ md: '80%', lg: '40%' }} h="full">
                            <Image src={objectives}></Image>
                        </Center>
                    </Flex>
                </Flex>

                {/* 기술에 대해 */}
                <Flex
                    w={{ xl: 'container.xl' }}
                    maxW={{ lg: 'container.lg', xl: 'container.xl' }}
                    alignSelf={{ lg: 'flex-start', xl: 'center' }}
                    // minW="container.xl"
                    // w="70vw"
                    direction="row"
                // pt={{ base: 0, lg: 20 }}
                // pb={{ base: 0, lg: 20 }}
                >
                    <Flex
                        direction={{ base: 'column-reverse', lg: 'row' }}
                        w="full"
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        justifyItems="center"
                        p={5}
                        my={5}
                    >
                        <Center w={{ md: '80%', lg: '40%' }} h="full">
                            <Image src={icons}></Image>
                        </Center>
                        <Flex
                            direction="column"
                            w="full"
                            h="full"
                            alignItems={{ base: 'center', lg: 'flex-start' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {/* <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_WebDeveloper
                        </Text> */}
                            <Heading size="xl" pb={5}>
                                ▎Dev Techniques
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                h="full"
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                                pb={{ base: 5, lg: 10 }}
                            >
                                &nbsp;I decided to build a web based on React, which I found most
                                interesting while working on several projects in college. This is
                                because component-based React does not perform unnecessary
                                reloading when a page moves or an element changes, and it fully
                                supports the jsx-type JavaScript syntax.
                                <br />
                                <br />
                                &nbsp;Also, I used Node.js to manage the various npm libraries,
                                and decided to use &apos;Chakra UI&apos; for a more modern, simple and
                                efficient design. Controlling the CSS inside the component, rather
                                than handling it from the outside, was a pretty attractive
                                feature, and I think it helped a lot in designing a responsive web
                                in particular.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

                {/* 느낀점 */}
                <Flex
                    w={{ xl: 'container.xl' }}
                    maxW={{ lg: 'container.lg', xl: 'container.xl' }}
                    alignSelf={{ lg: 'flex-start', xl: 'center' }}
                    // minW="container.xl"
                    // w="70vw"
                    direction="row"
                // pt={{ base: 0, lg: 20 }}
                // pb={{ base: 0, lg: 20 }}
                >
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        w="full"
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        justifyItems="center"
                        p={5}
                        my={5}
                    >
                        <Flex
                            direction="column"
                            w="full"
                            h="full"
                            alignItems={{ base: 'center', lg: 'flex-start' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {/* <Text w={{ base: 'full', sm: '80%' }} fontSize={{ lg: 'lg', xl: "xl" }} pt={{ base: 5, lg: 0 }} pb={2}>
                            #Passionate #Creative #FullStack_WebDeveloper
                        </Text> */}
                            <Heading size="xl" pb={5}>
                                ▎Challenges & Experiences
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                h="full"
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                            >
                                &nbsp;In fact, the process of making web pages while learning the
                                new library &apos;Chakra UI&apos; was very interesting. The various
                                extension functions and the simple and clean design made it more
                                fun the more I used it. But the problem was when I realized that
                                during testing I did not care about the responsive structure at
                                all. 🤦‍♂️
                                <br />
                                <br />
                                &nbsp;Since I had never built a responsive web before, I had to
                                re-learn the subject from scratch. In the process, I learned that
                                a responsive structure was essential because the web today assumes
                                it will work on a variety of devices.
                                <br />
                                <br />
                                &nbsp;In the process of adapting the responsive structure, there
                                were many difficulties due to the differences between devices, but
                                I learned a lot as well, for example, determining the resolution
                                of each device and the size of standard elements. As a result, I
                                think this project has been a very good experience as it became
                                the first foundation for my responsive webs.
                            </Text>
                        </Flex>
                        {/* <Center w='40%'> */}
                        <Center w={{ base: '350px', md: '600px', lg: '40%' }} h="full">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                loop="true"
                                autoplay={{
                                    delay: 2000,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Box align="center">
                                        <Image w={{ base: '80%', lg: '80%' }} src={c1} my={10} />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box align="center">
                                        <Image w={{ base: '80%', lg: '80%' }} src={c2} my={10} />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box align="center">
                                        <Image w={{ base: '80%', lg: '80%' }} src={c3} my={10} />
                                    </Box>
                                </SwiperSlide>
                            </Swiper>

                            {/* <Image src={testImg}></Image> */}
                        </Center>
                    </Flex>
                </Flex>

                <Button
                    my={10}
                    onClick={() => {
                        handleCurrentPage(1);
                    }}
                    borderRadius='xl'
                    colorScheme='blue'
                    boxShadow='lg'
                >
                    Need More Projects? Go Ahead!
                </Button>
            </Container>
        </motion.div>
    );

});

Vl_landing.displayName = 'Vl_Landing';

export default Vl_landing;
