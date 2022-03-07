import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

// Import components
import Header from './components/header';
import Intro from './components/intro';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

// Import portfolio works
import Vl_landing from './components/portfolios/vl_landing';

import theme from './theme';
import './theme/styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

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

  const handleCurrentPage = e => {
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
        handlePageTop={handlePageTop}
        ref={header_ref}
      />
      <Routes>
        <Route
          path="/works/"
          element={
            <Vl_landing
              handleCurrentPage={handleCurrentPage}
              ref={vl_landing_ref}
            />
          }
        ></Route>
        <Route exact path="/" element={<Intro />}></Route>
      </Routes>
      <Projects
        handlePageTop={handlePageTop}
        setCurrentPage={setCurrentPage}
        ref={projects_ref}
      />
      <Contact ref={contact_ref} />
      <Footer />

      {/*  <Box textAlign="center" fontSize="xl" className="main">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text backgroundColor="black">
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
