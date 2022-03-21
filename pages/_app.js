import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { ChakraProvider, extendTheme, useDisclosure } from '@chakra-ui/react';

import theme from '../styles';
import '../styles/styles.css';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import Header from '../components/header';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [routePage, setRoutePage] = useState();

  const [inProp, setInProp] = useState(false);

  const header_ref = useRef(null);
  const projects_ref = useRef(null);
  const contact_ref = useRef(null);
  const vl_landing_ref = useRef(null);

  const { isOpen, onToggle } = useDisclosure();

  // 탑으로 가기
  const handlePageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCurrentPage = (e) => {
    const headerHeight = header_ref.current.clientHeight;
    const projects = projects_ref.current.offsetTop - headerHeight;
    const contact = contact_ref.current.offsetTop - headerHeight;

    if (e === 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });      
    } else if (e === 1) {
      window.scrollTo({
        top: projects,
        behavior: 'smooth',
      });
    } else if (e === 2) {
      window.scrollTo({
        top: contact,
        behavior: 'smooth',
      });
    }

    // 햄버거버튼 열려있으면 닫아주기
    if (isOpen) {
      onToggle(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Header
        isOpen={isOpen}
        onToggle={onToggle}
        projects_ref={projects_ref}
        contact_ref={contact_ref}
        vl_landing_ref={vl_landing_ref}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        setCurrentPage={setCurrentPage}
        routePage={routePage}
        setRoutePage={setRoutePage}
        handlePageTop={handlePageTop}
        ref={header_ref}
      />

      {/* 이게 새로고쳐지는페이지인듯. 여기에 그냥 props보내는식으로 보내면 되는거같음 */}
      {/* 트랜지션 효과 추가 */}
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          setRoutePage={setRoutePage}
          handleCurrentPage={handleCurrentPage}
          setCurrentPage={setCurrentPage}
          setInProp={setInProp}
        />
      </AnimatePresence>

      <Projects
        handlePageTop={handlePageTop}
        setCurrentPage={setCurrentPage}
        setRoutePage={setRoutePage}
        ref={projects_ref}
      />
      <Contact ref={contact_ref} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
