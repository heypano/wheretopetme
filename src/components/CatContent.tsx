import {
  CatMaskPaths,
  CatPaths,
  ColorPatternPicker,
  DrawWithin,
  exportAsImage,
} from "@heypano/pupds";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Pattern } from "@heypano/pupds/dist/components/DrawWithin/patterns/Patterns";
import { v4 as uuid } from "uuid";

interface DrawWithinExtendedProps {
  containerRef: React.Ref<HTMLElement | null>;
}

const StDrawWithin = styled(DrawWithin)`
  flex-basis: 0;
  min-height: 0;
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
`;
const StControls = styled.section``;
export default function WrappedDrawWithin() {
  const ref = useRef<HTMLElement | null>(null);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [patterns, setPatterns] = useState<Array<Pattern>>([
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
        {patterns.map(({ type, fill }, index) => (
          <ColorPatternPicker
            key={type}
            patternIdBase={patternIdBase}
            isSelected={currentPatternIndex === index}
            patternIndex={index}
            color={fill}
            pattern={type}
            setPatternIndex={setCurrentPatternIndex}
            setColor={(fill) => {
              const newPatterns = [...patterns];
              const newPattern = { ...newPatterns[index], fill };
              newPatterns[index] = newPattern;
              setPatterns(newPatterns);
            }}
            setPattern={(type) => {
              const newPatterns = [...patterns];
              const newPattern = { ...newPatterns[index], type };
              newPatterns[index] = newPattern;
              setPatterns(newPatterns);
            }}
          />
        ))}
      </StControls>
    </StMain>
  );
}
