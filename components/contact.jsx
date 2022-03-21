import React, { useEffect, useRef, forwardRef } from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    ButtonGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    SliderProvider,
} from '@chakra-ui/react';

import { Formik } from 'formik';

import emailjs, { init } from '@emailjs/browser';

import {
    InputControl,
    ResetButton,
    SubmitButton,
    TextareaControl,
    PercentComplete,
} from 'formik-chakra-ui';

import * as Yup from 'yup';

const Contact = forwardRef((props, ref) => {
    const textAreaRef = useRef();

    const onSubmit = (values, actions) => {
        setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            emailjs.send('service_9tgp7gt', 'template_3cbb81k', values).then(
                result => {
                    alert('Your message is successfully sent to Mark!');
                },
                error => {
                    alert('Something is wrong.. please check your form again!');
                }
            );

            actions.setSubmitting(false);
        }, 1000);
    };

    const initialValues = {
        contact_name: '',
        contact_email: '',
        contact_message: '',
    };

    const validationSchema = Yup.object({
        contact_name: Yup.string().required('*Name is required'),
        contact_email: Yup.string()
            .email('Please enter the valid email address (ex. John@gmail.com)')
            .required('*Email Address is required'),
        contact_message: Yup.string().required('*Message is required'),
    });

    const resizeTextArea = () => {
        console.log(textAreaRef.current.clientHeight);
        console.log(textAreaRef.current.scrollHeight);

        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    };

    useEffect(() => {
        init('bMVEOUx8c0q5F-Nn3');
    }, []);


    return (
        <Container maxW="100vw" align="center" py={10} ref={ref}>
            <Flex
                maxW="container.lg"
                h="full"
                direction="column"
                alignItems="center"
                p={5}
            >
                <Box w="full">
                    <Text fontSize="xl" pb={2}>
                        Collaboration is always welcome
                    </Text>
                    <Heading size="xl" fontWeight="bold" pb={5}>
                        CONTACT ME
                    </Heading>
                    <Text w='80%' overflowWrap='break-word' pb='10' fontSize={{ lg: 'sm', xl: "md" }}>
                        Are you looking for the right developer for your position?
                        <br /> Please feel free to reach me out!
                    </Text>
                </Box>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, values, errors }) => (
                        <Box
                            w="full"
                            maxW='lg'
                            borderRadius="lg"
                            borderWidth='2px'
                            borderColor='gray.200'
                            bg="white"
                            boxShadow="lg"
                            textAlign="left"
                            p={5}
                            as="form"
                            onSubmit={handleSubmit}
                        >
                            <InputControl
                                name="contact_name"
                                labelProps={{ fontWeight: 'semibold' }}
                                label="Name: "
                                mb={5}
                            />
                            <InputControl
                                name="contact_email"
                                labelProps={{ fontWeight: 'semibold' }}
                                label="Email Address: "
                                mb={5}
                            />
                            <TextareaControl
                                // textareaProps={{ ref: textAreaRef }}                                
                                name="contact_message"
                                labelProps={{ fontWeight: 'semibold' }}
                                label="Message: "
                                mb={5}
                            />

                            <PercentComplete
                                progressProps={{
                                    colorScheme: 'teal',
                                    bg: 'teal.100',
                                    borderRadius: 'lg',
                                }}
                            />

                            <Box align="center">
                                <ButtonGroup>
                                    <SubmitButton>Send</SubmitButton>
                                    <ResetButton>Reset</ResetButton>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Flex>
        </Container>
    );
});

Contact.displayName = 'Contact';

export default Contact;
