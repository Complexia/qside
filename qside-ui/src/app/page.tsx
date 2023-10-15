import Head from "next/head";
import Link from "next/link";
import React from "react";
import Gallery from "./gallery/page";


export const dynamic = "force-dynamic";

export default async function Home() {
  


  return (
    <Gallery /> 
  );
}
