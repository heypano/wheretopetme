import {
  CatMaskPaths,
  CatPaths,
  ColorPatternPicker,
  DrawWithin,
  exportAsImage,
} from "@heypano/pupds";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import DrawConfigurationOptions from "@/components/DrawConfigurationOptions";
import SwatchButton from "@/components/SwatchButton";
import { PatternWithFill } from "@heypano/pupds/dist/components/DrawWithin/patterns/Patterns";

interface DrawWithinExtendedProps {
  containerRef: React.Ref<HTMLElement | null>;
}

const StDrawWithin = styled(DrawWithin)`
  min-height: 0;
`;
const StSwatchContainer = styled.section`
  padding: 10px 5px 0px;
`;

const StMain = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 7fr 200px;

  // reverse direction in mobile
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 200px;
  }
  overflow: hidden;
  touch-action: none;
  overflow-scrolling: touch;
`;

const StCat = styled.section`
  display: flex;
  @media (max-width: 768px) {
    & svg {
      width: 100%;
    }
  }
`;
const StControls = styled.section``;
export default function WrappedDrawWithin() {
  const ref = useRef<HTMLElement | null>(null);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [patterns, setPatterns] = useState<Array<PatternWithFill>>([
    { type: "dominoes", fill: "hotpink" },
    { type: "bankNote", fill: "red" },
  ]);

  const patternIdBase = useMemo(() => uuid(), []);
  return (
    <StMain>
      <StCat>
        <StDrawWithin
          ImagePaths={<CatPaths />}
          MaskPaths={<CatMaskPaths />}
          viewBox="0 0 202.53 230.74"
          ref={ref}
          patterns={patterns}
          patternIdBase={patternIdBase}
          patternIndex={currentPatternIndex}
        />
      </StCat>
      <StControls>
        {patterns.map((pattern, index) => (
          <StSwatchContainer
            key={index}
            onClick={() => {
              setCurrentPatternIndex(index);
            }}
          >
            <SwatchButton
              pattern={pattern}
              patternIdBase={patternIdBase}
              patternIndex={index}
              onPatternChanged={({ type, fill }) => {
                setPatterns((prev) => {
                  const newPatterns = [...prev];
                  newPatterns[index] = { type, fill };
                  return newPatterns;
                });
              }}
            />
          </StSwatchContainer>
        ))}
        <button
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
        </button>
        <button
          type="button"
          onClick={() => {
            setPatterns([...patterns, { type: "dominoes", fill: "hotpink" }]);
          }}
        >
          Add Pattern
        </button>
      </StControls>
    </StMain>
  );
}
