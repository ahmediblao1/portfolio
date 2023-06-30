import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Ahmed iblao </title>
        <meta name="description" content="Ahmed iblao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AI Logo.png" />
      </Head>
      <Home />
    </>
  );
}
