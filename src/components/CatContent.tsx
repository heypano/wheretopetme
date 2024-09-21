import {
  CatMaskPaths,
  CatPaths,
  DrawWithin,
  exportAsImage,
} from "@heypano/pupds";
import React, {
  ComponentRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import SwatchButton from "@/components/SwatchButton";
import { PatternWithDetails } from "@/components/types";
import {
  StButton,
  StCat,
  StCatNameArea,
  StCatNameInput,
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
  const [catName, setCatName] = useState("");
  const patternIdBase = useMemo(() => uuid(), []);
  const drawRef = useRef<ComponentRef<typeof DrawWithin>>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const catNameRef = useRef<HTMLHeadingElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  // Printing logic
  useEffect(() => {
    if (isPrinting && ref.current) {
      exportAsImage({
        imageFileName: "wheretopet_CATNAME.png",
        element: ref.current,
        width: 700,
        height: 700,
      }).finally(() => {
        setIsPrinting(false);
      });
    }
  }, [isPrinting]);

  return (
    <StMain>
      <StContent ref={ref}>
        <StCatNameArea ref={catNameRef}>
          <h2 style={{ fontSize: "30px" }}>
            Where to pet {isPrinting ? catName : ""}
            {!isPrinting && (
              <StCatNameInput
                ref={nameInputRef}
                value={catName}
                style={{ fontSize: "30px" }}
                onChange={(e) => {
                  setCatName(e.target.value);
                }}
              />
            )}
          </h2>
        </StCatNameArea>
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
                  showButtons={!isPrinting}
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
            setIsPrinting(true);
          }}
        >
          Save
        </StButton>
      </StSaveArea>
    </StMain>
  );
}
