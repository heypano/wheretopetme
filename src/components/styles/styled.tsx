import styled from "styled-components";
import { DrawWithin, PatternPreview } from "@heypano/pupds";
import EditIcon from "@/components/icons/EditIcon";

export const StDrawWithin = styled(DrawWithin)`
  min-height: 0;
`;
export const StSwatchContainer = styled.section<{ selected: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: ${({ selected }) =>
    selected
      ? `rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;`
      : "none"};
`;
export const StMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  touch-action: none;
  overflow-scrolling: touch;
  h2 {
    flex: 0;
    margin-bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &,
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
export const StCat = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  & svg {
    width: 100%;
    cursor: url(/assets/brush.svg) 8 22, auto;
  }
`;
export const StControls = styled.section``;
export const StSwatchContainers = styled.section`
  display: grid;
  gap: 15px;
  padding: 5px;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 5px;
`;
export const StContent = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-content: space-between;
`;
export const StSaveArea = styled.section`
  padding-top: 5px;
  flex: 0;
  display: grid;
`;
export const StButton = styled.button`
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
export const StSwatchButton = styled.button`
  cursor: pointer;
  :root {
    --button-size: 50px;
  }
  display: grid;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  border: 0;
  margin: 0;
  padding: 0;
  user-select: none;
`;
export const StCaption = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #eee;
  text-align: center;
`;
export const StCaptionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StInput = styled.input`
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
export const StPatternWithCaption = styled.section`
  position: relative;
`;
export const StCatNameArea = styled.section`
  flex: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  h2 {
    flex: 1;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
`;
export const StCatNameInput = styled.input`
  box-sizing: border-box;
  line-height: 1;
  margin: 0px;
  flex: 1;
  min-width: 0;
  max-width: 220px;
  border-width: 0px;
  border-bottom-width: 1px;
  box-shadow: none;
  outline: none;
  font-size: 24px;
  padding: 0px;
  vertical-align: baseline;
`;
export const StSwatchControls = styled.section`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
`;
export const StEditIcon = styled(EditIcon)`
  width: 30px;
  height: 30px;
  padding: 3px;
`;
export const StPatternPreview = styled(PatternPreview)`
  display: flex;
  svg {
    border-radius: 5px;
    max-height: 50px;
    width: 100%;
    height: 100%;
  }
`;
export const StModalContent = styled.section`
  overflow-y: hidden;
  padding: 16px;
  user-select: none;
`;
export const StModalFooter = styled.section``;
export const StModalContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%; /* Assuming modal takes full height */
  overflow: hidden; /* Prevent overflow on the modal */
  user-select: none;
  &,
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
