import { useEffect, forwardRef } from 'react';
import {
    Container,
    Flex,
    Box,
    Text,
    Heading,
    Grid,
    Center,
    Image,
    Button,
    Spacer,
} from '@chakra-ui/react';

import Head from 'next/head';

import { LinkIcon } from '@chakra-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faJsSquare,
    faReact,
    faNodeJs,
    faHtml5,
    faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';

// for carousel image slide function
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';

import { motion } from 'framer-motion';

const Hozehair = forwardRef((props, ref) => {

    const { setRoutePage } = props;

    useEffect(() => {
        setRoutePage(1);
    }, []);


    const { handleCurrentPage } = props;

    const res_img1 = '/images/portfolio_hozehair/res_hozehair_1.jpg';
    const res_img2 = '/images/portfolio_hozehair/res_hozehair_2.jpg';
    const objectives = '/images/portfolio_hozehair/obj_hozehair.png';
    const icons = '/images/portfolio_hozehair/icons_hozehair.png';
    const c1 = '/images/portfolio_hozehair/c1.jpg';
    const c2 = '/images/portfolio_hozehair/c2.jpg';
    const c3 = '/images/portfolio_hozehair/c3.png';

    const nextjs = '/images/next-js.svg'

    return (
        <motion.div
            transition={{ duration: 2.0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Mark&apos;s Archive | Project - Hoze Hair</title>
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
                                Project <b>Hoze Hair</b> by Mark Kim
                            </Text>
                            <Heading w={{ base: 'full', sm: '80%' }} size="xl" pb={5}>
                                Hoze Hair Salon Website
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                                pb={{ base: 5, lg: 10 }}
                            >
                                Project Hoze Hair is a website for introducing the shop of Hoze Hair Salon located in Port Coquitlam.
                                <br />
                                <br />
                                As the main developer of the website,
                                I was responsible for all the website development and implemented a fully responsive design website
                                that can be used on any device using the new framework Next.js.
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
                                                    {/* <FontAwesomeIcon icon={faNodeJs} height='25px' /> */}
                                                    <Image src={nextjs} width='25px' height='25px' />
                                                </Center>
                                                <Text ml={2}>Next.js</Text>
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
                                                - <b>Pages & Popup</b> with Routing & Modal
                                            </Text>
                                        </Grid>
                                    </Box>
                                </Flex>

                                {/* <Spacer/> */}
                            </Flex>
                        </Flex>
                        <Spacer />
                        <Flex w={{ md: 'full', lg: '50%' }} direction="column">
                            <Flex maxW='100vw' maxH='100vh'>
                                <Swiper
                                    effect={'fade'}
                                    navigation={false}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{ delay: 5000 }}
                                    modules={[EffectFade, Navigation, Autoplay]}
                                >
                                    <SwiperSlide>
                                        <Flex w="full" my={5} justifyContent='center' alignItems='center'>
                                            <Image w='80%' h='auto' objectFit={'cover'} src={res_img2} />
                                        </Flex>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Flex w="full" my={5} justifyContent='center' alignItems='center'>
                                            <Image w='80%' h='auto' objectFit={'cover'} src={res_img1} />
                                        </Flex>
                                    </SwiperSlide>
                                </Swiper>
                            </Flex>
                            <Box alignSelf="center">
                                <a href="https://hozehair-v1.vercel.app/" target="_blank" rel='noreferrer'>
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
                    direction="row"
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
                            <Heading size="xl" pb={5}>
                                ▎Main Objective
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                h="full"
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                                pb={{ base: 5, lg: 10 }}
                                pr={{ base: 5, lg: 10 }}
                            >
                                &nbsp;Since the hair salon has just opened,
                                I have decided to focus on the website with general information about the hair salon,
                                as well as the treatment details and reservation function.
                                <br /><br />
                                &nbsp;The goal was to provide customers with detailed information about the location of the shop and service details on each page,
                                and to implement a function that allows them to make reservations through phone calls and e-mails immediately from mobile devices.
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
                    direction="row"
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
                                &nbsp;Like the projects I've worked on before,
                                I decided to build this one based on React.
                                This is because the component-based structure was thought to be easy to describe the structure of the website                                 in detail.
                                <br /><br />
                                &nbsp;Also, unlike before, this time, the backend and routing (page connection) functions were implemented using Next.js.
                                In the process of using the new framework, I was able to learn a lot of new things,
                                and I learned about the improvements in the functionality that Next.js guarantees.
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
                            <Heading size="xl" pb={5}>
                                ▎Challenges & Experiences
                            </Heading>

                            <Text
                                w={{ base: '80%', md: '70%', lg: 'full' }}
                                h="full"
                                fontSize={{ lg: 'sm', xl: 'md' }}
                                overflowWrap="break-word"
                            >
                                &nbsp;The most difficult thing while doing this project was adapting to Next.js.
                                It was very interesting to link pages and create a structure through the new routing technology,
                                but I found that sending and receiving data directly between pages was very complicated, unlike in normal Node.js.
                                <br /><br />
                                &nbsp;Also, I've been experiencing a lot of compilation errors for a while because of the structural changes
                                that come with using Next.js.
                                I found out that the method of using the state between the main pages
                                and the sub pages is different due to the case of going through index.js once more in the course of routing.
                                <br /><br />
                                &nbsp;In particular, although using Reference has become more complicated,
                                I seem to have learned that the website configuration can be changed more intuitively with Next.js.
                                It was a project where I was able to learn a lot from various difficulties,
                                and it is likely that the future project will continue with Next.js.
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
                                <SwiperSlide align="center">
                                    <Image w={{ base: '80%', lg: '80%' }} src={c1} my={10} />
                                </SwiperSlide>
                                <SwiperSlide align="center">
                                    <Image w={{ base: '80%', lg: '80%' }} src={c2} my={10} />
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

Hozehair.displayName = 'Hozehair';

export default Hozehair;
