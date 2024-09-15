import Head from "next/head";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";

const CatContent = dynamic(() => import("@/components/CatContent"), {
  ssr: false,
});

export default function Cat() {
  return (
    <>
      <Head>
        <title>wheretopet.me - Petting Chart Generator</title>
        <meta
          name="description"
          content="Here you can create a petting chart for your cat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatContent />
    </>
  );
}
