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
        </StControls>
      </StContent>
      <StSaveArea>
        <StButton
          onClick={() => {
            drawRef.current?.removeLastPath();
          }}
        >
          Undo
        </StButton>
        <StButton
          onClick={() => {
            if (ref.current) {
              // Save the current screen size
              const originalWidth = window.innerWidth;
              const originalHeight = window.innerHeight;

              // Mock the screen size
              // Object.defineProperty(window, "innerWidth", {
              //   writable: true,
              //   configurable: true,
              //   value: 1080,
              // });
              // Object.defineProperty(window, "innerHeight", {
              //   writable: true,
              //   configurable: true,
              //   value: 1080,
              // });
              const editIcons = document.querySelectorAll(
                "[data-icon=edit-icon]"
              );
              // hide then show edit icons
              [...editIcons].forEach((icon) => {
                (icon as SVGSVGElement).style.display = "none";
              });
              exportAsImage({
                imageFileName: "wheretopet_CATNAME.png",
                element: ref.current,
                width: 700,
                height: 700,
              }).then(() => {
                console.log("saved");
              });
              [...editIcons].forEach((icon) => {
                (icon as SVGSVGElement).style.display = "block";
              });

              // Restore the original screen size
              // Object.defineProperty(window, "innerWidth", {
              //   writable: true,
              //   configurable: true,
              //   value: originalWidth,
              // });
              // Object.defineProperty(window, "innerHeight", {
              //   writable: true,
              //   configurable: true,
              //   value: originalHeight,
              // });
            }
          }}
        >
          Save
        </StButton>
      </StSaveArea>
    </StMain>
  );
}
