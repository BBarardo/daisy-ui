import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
    </>
  );
};

export default Home;
