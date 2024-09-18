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
import SwatchButton from "@/components/SwatchButton";
import { PatternWithDetails } from "@/components/types";

interface DrawWithinExtendedProps {
  containerRef: React.Ref<HTMLElement | null>;
}

const StDrawWithin = styled(DrawWithin)`
  min-height: 0;
`;
const StSwatchContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 5px 0px;
`;

const StMain = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr max-content;
  overflow: hidden;
  touch-action: none;
  overflow-scrolling: touch;
`;

const StCat = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 100%;
  }
`;
const StControls = styled.section``;

const StSwatchContainers = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StContent = styled.section`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 7fr 500px;
  // reverse direction in mobile
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`;

const StSaveArea = styled.section`
  display: grid;
`;

const StButton = styled.button`
  cursor: pointer;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  width: 100%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 4px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3),
      inset 0 1px 6px rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2),
      inset 0 1px 3px rgba(255, 255, 255, 0.2);
  }
`;

export default function WrappedDrawWithin() {
  const ref = useRef<HTMLElement | null>(null);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [patterns, setPatterns] = useState<Array<PatternWithDetails>>([
    { caption: "Yes Please", type: "solid", fill: "#227F22FF" },
    { caption: "Definitely Not", type: "bankNote", fill: "#7F222280" },
    { caption: "For about 2 seconds", type: "bankNote", fill: "#7F222280" },
    { caption: "Fuck No", type: "bankNote", fill: "#7F222280" },
  ]);

  const patternIdBase = useMemo(() => uuid(), []);
  return (
    <StMain>
      <StContent ref={ref}>
        <StCat>
          <StDrawWithin
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
                        type,
                        fill,
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
