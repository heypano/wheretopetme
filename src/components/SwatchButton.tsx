import React, { useState } from "react";
import MModal from "@/components/MModal";
import {
  ColorPatternPicker,
  PatternDefs,
  PatternPreview,
} from "@heypano/pupds";
import { PatternWithDetails } from "@/components/types";
import {
  StCaption,
  StInput,
  StPatternWithCaption,
  StSwatchButton,
} from "@/components/styles/styled";

const buttonSize = 50;

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
