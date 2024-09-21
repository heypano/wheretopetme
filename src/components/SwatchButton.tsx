import React, { useState } from "react";
import MModal from "@/components/MModal";
import { ColorPatternPicker, PatternDefs } from "@heypano/pupds";
import { PatternWithDetails } from "@/components/types";
import {
  StCaption,
  StCaptionContainer,
  StEditIcon,
  StInput,
  StPatternPreview,
  StPatternWithCaption,
  StSwatchButton,
  StSwatchControls,
} from "@/components/styles/styled";

export const SwatchButton: React.FC<{
  pattern: PatternWithDetails;
  onPatternChanged: (pattern: PatternWithDetails) => void;
  patternIdBase: string;
  patternIndex: number;
  showButtons?: boolean;
}> = ({
  pattern,
  onPatternChanged,
  patternIndex,
  showButtons,
  patternIdBase,
}) => {
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
          {showButtons && (
            <StSwatchControls>
              <StEditIcon
                data-icon="edit-icon"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </StSwatchControls>
          )}
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
