import React, { useRef, useState } from "react";
import MModal from "@/components/MModal";
import {
  ColorPatternPicker,
  PatternDefs,
  PatternPreview,
} from "@heypano/pupds";
import { PatternWithDetails } from "@/components/types";
import {
  StCaption,
  StCaptionContainer,
  StInput,
  StPatternWithCaption,
  StSwatchButton,
} from "@/components/styles/styled";
import EditIcon from "@/components/icons/EditIcon";
import styled from "styled-components";

const StSwatchControls = styled.section`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
`;
const StEditIcon = styled(EditIcon)`
  width: 30px;
  height: 30px;
  padding: 3px;
`;
const StPatternPreview = styled(PatternPreview)`
  svg {
    border-radius: 5px;
    max-height: 50px;
    width: 100%;
    height: 100%;
  }
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
    <StSwatchButton>
      <StPatternWithCaption>
        <StPatternPreview
          defs={<PatternDefs patterns={[pattern]} patternIdBase={base} />}
          patternIdBase={base}
          patternIndex={0}
        />
        <StCaptionContainer>
          <StCaption>{pattern.caption}</StCaption>
          <StSwatchControls>
            <StEditIcon
              data-icon="edit-icon"
              onClick={() => {
                setOpen(true);
              }}
            />
          </StSwatchControls>
        </StCaptionContainer>
      </StPatternWithCaption>
      <MModal
        open={open}
        onClose={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
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
