import React, { useState } from "react";
import MModal from "@/components/MModal";
import styled from "styled-components";
import { ColorPatternPicker, PatternPreview } from "@heypano/pupds";
import { PatternWithFill } from "@heypano/pupds/dist/components/DrawWithin/patterns/Patterns";

const buttonSize = 50;
const StSwatchButton = styled.button`
  position: relative;
  :root {
    --button-size: 50px;
  }
  background-color: transparent;
  width: 100%;
  height: ${buttonSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  border: 0;
  margin: 0;
  padding: 0;
  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const SwatchButton: React.FC<{
  pattern: PatternWithFill;
  onPatternChanged: (pattern: PatternWithFill) => void;
  patternIdBase: string;
  patternIndex: number;
}> = ({ pattern, onPatternChanged, patternIndex, patternIdBase }) => {
  const [open, setOpen] = useState(false);
  return (
    <StSwatchButton
      onClick={() => {
        setOpen(true);
      }}
    >
      <PatternPreview
        patternIdBase={patternIdBase}
        patternIndex={patternIndex}
      />
      <MModal
        open={open}
        onClose={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        <ColorPatternPicker
          color={pattern.fill}
          patternType={pattern.type}
          onChange={onPatternChanged}
        />
      </MModal>
    </StSwatchButton>
  );
};

export default SwatchButton;
