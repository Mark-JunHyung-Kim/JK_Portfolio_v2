import Head from 'next/head';
import Image from 'next/image';
import '../styles/Home.module.css';
import { useEffect } from 'react';
import Intro from '../components/intro';

import { motion } from 'framer-motion';

export default function Home(pageProps) {
  const { setRoutePage, setInProp } = pageProps;

  useEffect(() => {
    setRoutePage(0);
    setInProp(true);
  }, []);

  return (
    <motion.div
      transition={{ duration: 2.0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Head>
          <title>Mark&apos;s Archive | Home</title>
          <link href="../logo_paw.png" rel="shortcut icon"></link>
        </Head>
        <Intro />
      </div>
    </motion.div>
  );
}
