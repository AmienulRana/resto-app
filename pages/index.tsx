import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RoomsResto</title>
        <meta name="description" content="Food App for simple ordering" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/sign-up/user">Sign up user</Link>
        {/* <h1 className="text-3xl font-bold text-red-300">Hell</h1> */}
      </main>
    </div>
  );
}
