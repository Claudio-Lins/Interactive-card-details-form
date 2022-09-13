import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Activity } from "phosphor-react";
import { CardFront } from "../components/CardFront";
import { CardBack } from "../components/CardBack";
import { Form } from "../components/Form";

const Home: NextPage = () => {
  return (
    <main className=" flex h-screen w-screen flex-col items-center bg-white md:flex-row">
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta
          name="description"
          content="Frontend Mentor | Interactive card details form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-64 w-full items-center justify-center bg-main-desktop bg-cover bg-left bg-no-repeat md:h-screen md:w-1/3" />
      <div className="absolute flex flex-col items-center justify-evenly pb-6  md:w-full md:flex-row">
        <div className="my-10 flex w-full flex-col md:flex-col-reverse items-center gap-8 md:w-1/3">
          <CardBack />
          <CardFront />
        </div>
        <Form />
      </div>
    </main>
  );
};

export default Home;
