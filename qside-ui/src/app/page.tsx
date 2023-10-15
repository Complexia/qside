import Head from "next/head";
import Link from "next/link";
import React from "react";


export const dynamic = "force-dynamic";

export default async function About() {
  


  return (
    <div className="h-full">
      <Head>
        <title>qside</title>
        <meta name="description" content="Mint loyalties and rewards - on Solana" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <div className="h-full w-full">
        <div className=" rounded-lg animate-in slide-in-from-left-10 fade-in-10 duration-500 flex flex-col justify-center items-center h-full ">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center p-10">
              <h1 className="text-primary text-6xl ">qside</h1>
              <p className=" text-lg">Mint loyalties and rewards - on Solana</p>
            </div>

            <div className="card bg-base-200 rounded-md  shadow-xl max-w-md m-2">
              <div className="card-body ">
                <h2 className="card-title ">
                  Create loyalty and rewards programs for your customers
                  Collect NFTs and get rewarded through promos
                </h2>
                <p>
                  {
                    "Simply mint your own NFTs and create a loyalty program for your customers. You can also create a rewards program for your customers to earn NFTs through promos. Redeem your NFTs for rewards. Give it a try now!"
                  }
                </p>
                <div className="card-actions justify-end">
                  <Link href="/magic">
                    <button className="btn btn-outline shadow-md ">
                      Launch App
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
