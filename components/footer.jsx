import React from 'react';
import {
    Container,
    Flex,
    HStack,
    Center,
    Link,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const today = new Date();
    const getYear = today.getFullYear();

    return (
        <Container maxW="100vw" h="150px" justify="center" align="center" boxShadow='inner'>
            <Flex maxW="container.xl" h="full" direction="column" justify="center">
                <HStack justify="center" h='full' pt={5} spacing={4}>
                    <a href='https://www.instagram.com/mark_gray_kim/' target='_blank' rel='noreferrer'>
                        <Button
                            borderRadius="full"
                            w="50px"
                            h="50px"
                            p={0}
                            borderWidth='2px'
                            borderColor='blackAlpha.700'
                            colorScheme='whiteAlpha'
                            color="blackAlpha.700"
                            className='buttons_sns'
                        >
                            <Center>
                                <FontAwesomeIcon icon={faInstagram} width='25px' height='25px' />
                            </Center>
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/markgraykim/' target='_blank' rel='noreferrer'>
                        <Button
                            borderRadius="full"
                            w="50px"
                            h="50px"
                            p={0}
                            borderWidth='2px'
                            borderColor='blackAlpha.700'
                            colorScheme='whiteAlpha'
                            color="blackAlpha.700"
                            className='buttons_sns'
                        >
                            <Center>
                                <FontAwesomeIcon icon={faLinkedinIn} width='22px' height='25px' />
                            </Center>
                        </Button>
                    </a>
                    <a href='https://github.com/Mark-JunHyung-Kim' target='_blank' rel='noreferrer'>
                        <Button
                            borderRadius="full"
                            w="50px"
                            h="50px"
                            p={0}
                            borderWidth='2px'
                            borderColor='blackAlpha.700'
                            colorScheme='whiteAlpha'
                            color="blackAlpha.700"
                            className='buttons_sns'
                        >
                            <Center>
                                <FontAwesomeIcon icon={faGithub} width='25px' height='25px' />
                            </Center>
                        </Button>
                    </a>

                </HStack>
                <Center pb={5} >
                    <Text fontWeight='semibold' fontSize={{ base: 'xs', sm: 'sm' }}>
                        © {getYear} - <Link href='mailto:markgraykim@gmail.com'>Junhyung (Mark) Kim.</Link><br />All rights reserved
                    </Text>
                </Center>
            </Flex>
        </Container>
    );
};

export default Footer;
