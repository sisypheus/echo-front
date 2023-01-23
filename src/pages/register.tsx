import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Echo</title>
        <meta name="description" content="Twitter but better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">register</main>
    </>
  );
};

export default Register;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}

