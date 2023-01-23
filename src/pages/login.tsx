import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Auth from "../components/Auth";

const Login: NextPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      console.log(e);
    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value,
        username: e.target[2].value,
        displayName: e.target[3].value,
      }),
    });

    console.log(res);
  }

  return (
    <>
      <Head>
        <title>Echo</title>
        <meta name="description" content="Twitter but better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex flex-col items-center justify-center h-screen">
          <Auth type="register" onSubmit={onSubmit}  />
        </div>
      </main>
    </>
  );
};

export default Login;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}
