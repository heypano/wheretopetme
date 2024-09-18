import React, { useState } from "react";
import MModal from "@/components/MModal";
import styled from "styled-components";
import { ColorPatternPicker, PatternPreview } from "@heypano/pupds";
import { PatternWithDetails } from "@/components/types";

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
  user-select: none !important;
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
export const SwatchButton: React.FC<{
  pattern: PatternWithDetails;
  onPatternChanged: (pattern: PatternWithDetails) => void;
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
      <PatternPreview patternIdBase={patternIdBase} patternIndex={patternIndex}>
        <StCaption>{pattern.caption}</StCaption>
      </PatternPreview>

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
