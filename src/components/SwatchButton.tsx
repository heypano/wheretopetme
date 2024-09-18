import React, { useState } from "react";
import MModal from "@/components/MModal";
import styled from "styled-components";
import { ColorPatternPicker, PatternPreview } from "@heypano/pupds";
import { PatternWithDetails } from "@/components/types";
import { PatternDefs } from "@heypano/pupds";

const buttonSize = 50;
const StSwatchButton = styled.button`
  :root {
    --button-size: 50px;
  }
  background-color: transparent;
  width: 100%;
  height: ${buttonSize}px;
  box-shadow: none;
  border: 0;
  margin: 0;
  padding: 0;
  & svg {
    max-height: 50px;
    width: 150px;
  }
  user-select: none;
`;

const StCaption = styled.div<{ borderColor?: string }>`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: 3px solid ${({ borderColor }) => borderColor};
`;

const StInput = styled.input`
  background-image: none;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-color: #ccc;
  border-width: 1px;
  border-style: dotted;
  border-width: 7px;
  outline: none;
`;

const StPatternWithCaption = styled.section`
  display: grid;
  grid-template-columns: 1fr 100px;
`;

export const SwatchButton: React.FC<{
  pattern: PatternWithDetails;
  onPatternChanged: (pattern: PatternWithDetails) => void;
  patternIdBase: string;
  patternIndex: number;
}> = ({ pattern, onPatternChanged, patternIndex, patternIdBase }) => {
  const [open, setOpen] = useState(false);
  const base = `patternIdBase_prev_${patternIndex}`;
  return (
    <StSwatchButton
      onClick={() => {
        setOpen(true);
      }}
    >
      <StPatternWithCaption>
        <PatternPreview
          defs={<PatternDefs patterns={[pattern]} patternIdBase={base} />}
          patternIdBase={base}
          patternIndex={0}
        />
        <StCaption>{pattern.caption}</StCaption>
      </StPatternWithCaption>
      <MModal
        open={open}
        onClose={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        footer={<div>Test</div>}
      >
        <StInput
          type="text"
          value={pattern.caption}
          onChange={(e) => {
            onPatternChanged({ ...pattern, caption: e.target.value });
          }}
          placeholder="How does your cat feel about this?"
        />
        <ColorPatternPicker
          color={pattern.fill}
          patternType={pattern.type}
          onChange={({ fill, type }) => {
            onPatternChanged({ ...pattern, fill, type });
          }}
        />
      </MModal>
    </StSwatchButton>
  );
};

export default SwatchButton;
