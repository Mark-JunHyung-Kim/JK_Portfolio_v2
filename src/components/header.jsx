import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
    Container,
    Flex,
    Heading,
    Text,
    Spacer,
    Box,
    Link,
    Center,
    Button,
    Collapse,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';

import { Link as ReactRouter } from 'react-router-dom';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Header = forwardRef((props, ref) => {
    const {
        handlePageTop,
        isOpen,
        onToggle,
        handleCurrentPage,
        projects_ref,
        contact_ref,
        vl_landing_ref,
        currentPage,
        setCurrentPage,
    } = props;

    const [headerStatus, setHeaderStatus] = useState(false);

    const handleScroll = e => {
        // const { scrollHeight } = document.body;
        // const { innerHeight } = window;
        const myScroll = e.srcElement.scrollingElement.scrollTop;
        const headerHeight = ref.current.clientHeight;

        // 페이지별 컴포넌트 top 위치값
        const projects_top = projects_ref.current.offsetTop - headerHeight;
        const contact_top = contact_ref.current.offsetTop - headerHeight;

        if (myScroll === 0) {
            setHeaderStatus(false);
        } else {
            setHeaderStatus(true);
        }

        // 기본 home(인트로) 있을 때
        if (vl_landing_ref.current === null) {
            if (myScroll >= 0 && myScroll < projects_top) {
                setCurrentPage(0);
            } else if (myScroll >= projects_top && myScroll < contact_top) {
                setCurrentPage(1);
            } else {
                setCurrentPage(2);
            }
        }
        // 라우터로 페이지 전환되면 home(인트로)가 사라지므로,
        else {
            if (myScroll >= 0 && myScroll < contact_top) {
                setCurrentPage(1);
            } else {
                setCurrentPage(2);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const appName = '<m.kim/>';
    return (
        <Container
            maxW="100vw"
            h="auto"
            pos="fixed"
            align="center"
            bg="white"
            boxShadow={isOpen || headerStatus ? 'xl' : 'none'}
            transition={'all 1s'}
            // ref={ref}
            className="header_bar"
            zIndex={2}
        >
            {/* top button area */}
            <Box
                pos='fixed'
                right={['2vw', '4vw', '4vw', '2vw']}
                bottom={['2vw', '4vw', '4vw', '2vw']}
                className={headerStatus ? 'totopscroll' : 'totopfirstpage'}
            >
                <Button
                    borderRadius='full'
                    padding={0}
                    margin={0}
                    sizes={['40px', '40px', '50px', '50px']}
                    fontSize={['15px', '15px', '25px', '25px']}
                    borderWidth='2px'
                    borderColor='blackAlpha.700'
                    colorScheme='whiteAlpha'
                    color="blackAlpha.700"
                    onClick={handlePageTop}
                    className='toTopButton'
                >
                    <FontAwesomeIcon
                        icon={faAnglesUp}
                    />
                </Button>
            </Box>

            <Flex
                maxW={{ lg: 'container.lg', xl: "container.xl" }}
                direction="column"
                h="full"
            >
                <Flex w="full" h='full' direction="row" px={{ lg: 5, xl: 0 }} py={{ base: 0, sm: 4 }} ref={ref}>
                    <Center px="5">
                        <Heading
                            as={ReactRouter}
                            to="/"
                            size="md"
                            textTransform="uppercase"
                            onClick={() => {
                                handleCurrentPage(0);
                            }}
                        >
                            {appName}
                        </Heading>
                    </Center>
                    <Spacer />
                    <Center
                        px="5"
                        fontSize="sm"
                        fontWeight="semibold"
                        display={{ base: 'none', sm: 'flex' }}
                    >
                        <Text
                            w="fit-content"
                            px={2}
                            m={2}
                            as={ReactRouter}
                            to="/"
                            onClick={() => {
                                handleCurrentPage(0);
                            }}
                            textDecoration={currentPage === 0 ? 'underline' : 'none'}
                            fontWeight={currentPage === 0 ? 'bold' : 'normal'}
                            cursor="pointer"
                        >
                            HOME
                        </Text>
                        <Text
                            // as={ReactRouter}
                            // to="/works"
                            w="fit-content"
                            onClick={() => {
                                handleCurrentPage(1);
                            }}
                            px={2}
                            m={2}
                            textDecoration={currentPage === 1 ? 'underline' : 'none'}
                            fontWeight={currentPage === 1 ? 'bold' : 'normal'}
                            cursor="pointer"
                        >
                            PROJECTS
                        </Text>
                        <Text
                            w="fit-content"
                            px={2}
                            m={2}
                            onClick={() => {
                                handleCurrentPage(2);
                            }}
                            textDecoration={currentPage === 2 ? 'underline' : 'none'}
                            fontWeight={currentPage === 2 ? 'bold' : 'normal'}
                            cursor="pointer"
                        >
                            CONTACT
                        </Text>
                    </Center>
                    <Center px="5" py={{ base: 2, sm: 0 }} display={{ base: 'flex', sm: 'none' }}>
                        <IconButton
                            size="md"
                            variant="outline"
                            colorScheme="black"
                            onClick={onToggle}
                        >
                            {!isOpen ? <HamburgerIcon /> : <CloseIcon fontSize="sm" />}
                        </IconButton>
                    </Center>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Flex
                        w="full"
                        h="full"
                        alignItems="center"
                        direction="column"
                        display={{ base: 'flex', sm: 'none' }}
                        pt={{ base: 2, sm: 5 }}
                    >
                        <Text
                            w="fit-content"
                            px={2}
                            m={2}
                            as={ReactRouter}
                            to="/"
                            onClick={() => {
                                handleCurrentPage(0);
                            }}
                            textDecoration={currentPage === 0 ? 'underline' : 'none'}
                            fontWeight={currentPage === 0 ? 'bold' : 'normal'}
                            cursor="pointer"
                        >
                            HOME
                        </Text>
                        <Text
                            // as={ReactRouter}
                            // to="/works"
                            w="fit-content"
                            onClick={() => {
                                handleCurrentPage(1);
                            }}
                            textDecoration={currentPage === 1 ? 'underline' : 'none'}
                            fontWeight={currentPage === 1 ? 'bold' : 'normal'}
                            cursor="pointer"
                            px={2}
                            m={2}
                        >
                            PROJECTS
                        </Text>
                        <Text
                            w="fit-content"
                            px={2}
                            m={2}
                            onClick={() => {
                                handleCurrentPage(2);
                            }}
                            textDecoration={currentPage === 2 ? 'underline' : 'none'}
                            fontWeight={currentPage === 2 ? 'bold' : 'normal'}
                            cursor="pointer"
                        >
                            CONTACT
                        </Text>
                    </Flex>
                </Collapse>
            </Flex>
        </Container>
    );
});

export default Header;
