import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { CatMaskPaths, CatPaths } from "@/assets/cat/paths";
import styled from "styled-components";

const DrawWithin = dynamic(() => import("@/components/DrawWithin"), {
  ssr: false,
});

const StDrawWithin = styled(DrawWithin)`
  flex: 1;
  flex-basis: 0;
  min-height: 0;
`;

const StMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default function Cat() {
  const ref = useRef<HTMLElement | null>(null);
  const exportMethodRef =
    useRef<
      (args: {
        element: HTMLElement;
        imageFileName: string;
        width?: number;
        height?: number;
      }) => Promise<void>
    >();
  useEffect(() => {
    import("@heypano/pupds").then(({ exportAsImage }) => {
      exportMethodRef.current = exportAsImage;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Where to pet CATNAME</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StMain>
        <button
          onClick={() => {
            if (ref.current) {
              exportMethodRef
                .current?.({
                  imageFileName: "wheretopet_CATNAME.png",
                  element: ref.current,
                })
                .then(() => {
                  console.log("saved");
                });
            }
          }}
        >
          Save
        </button>
        <StDrawWithin
          viewBox="0 0 202.53 230.74"
          ImagePaths={<CatPaths />}
          MaskPaths={<CatMaskPaths />}
          containerRef={ref}
          patterns={[]}
          patternIdBase={"asd"}
        />
      </StMain>
    </>
  );
}
