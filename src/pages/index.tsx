import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Echo</title>
        <meta name="description" content="Twitter but better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">yo</main>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/isAuthenticated`
  );
  const data = await res.json().catch((_) => false);

  if (data) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};
