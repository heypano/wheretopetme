import {
  CatMaskPaths,
  CatPaths,
  DrawWithin,
  exportAsImage,
} from "@heypano/pupds";
import React, { ComponentRef, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import SwatchButton from "@/components/SwatchButton";
import { PatternWithDetails } from "@/components/types";
import {
  StButton,
  StCat,
  StContent,
  StControls,
  StDrawWithin,
  StMain,
  StSaveArea,
  StSwatchContainer,
  StSwatchContainers,
} from "@/components/styles/styled";

export default function WrappedDrawWithin() {
  const ref = useRef<HTMLElement | null>(null);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [patterns, setPatterns] = useState<Array<PatternWithDetails>>([
    { caption: "Yes Please", type: "solid", fill: "#227F2280" },
    { caption: "Definitely Not", type: "solid", fill: "#22227F80" },
    { caption: "Who knows?", type: "dominoes", fill: "hotpink" },
    {
      caption: "Maybe for 2 seconds",
      type: "diagonalLines",
      fill: "#227F2280",
    },
  ]);

  const patternIdBase = useMemo(() => uuid(), []);
  const drawRef = useRef<ComponentRef<typeof DrawWithin>>(null);
  return (
    <StMain>
      <h2>wheretopet.me</h2>
      <StContent ref={ref}>
        <StCat>
          <StDrawWithin
            ref={drawRef}
            ImagePaths={<CatPaths />}
            MaskPaths={<CatMaskPaths />}
            viewBox="0 0 202.53 230.74"
            patterns={patterns}
            patternIdBase={patternIdBase}
            patternIndex={currentPatternIndex}
          />
        </StCat>
        <StControls>
          <StSwatchContainers>
            {patterns.map((pattern, index) => (
              <StSwatchContainer
                selected={currentPatternIndex === index}
                key={index}
                onClick={() => {
                  setCurrentPatternIndex(index);
                }}
              >
                <SwatchButton
                  pattern={pattern}
                  patternIdBase={patternIdBase}
                  patternIndex={index}
                  onPatternChanged={({ type, fill, caption }) => {
                    setPatterns((prev) => {
                      const newPatterns = [...prev];
                      newPatterns[index] = {
                        ...prev[index],
                        fill,
                        type,
                        caption,
                      };
                      return newPatterns;
                    });
                  }}
                />
              </StSwatchContainer>
            ))}
          </StSwatchContainers>
          <StButton
            onClick={() => {
              drawRef.current?.removeLastPath();
            }}
          >
            Undo
          </StButton>
        </StControls>
      </StContent>
      <StSaveArea>
        <StButton
          onClick={() => {
            if (ref.current) {
              exportAsImage({
                imageFileName: "wheretopet_CATNAME.png",
                element: ref.current,
              }).then(() => {
                console.log("saved");
              });
            }
          }}
        >
          Save
        </StButton>
      </StSaveArea>
    </StMain>
  );
}
