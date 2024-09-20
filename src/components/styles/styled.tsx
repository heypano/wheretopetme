import styled from "styled-components";
import { DrawWithin } from "@heypano/pupds";

export const StDrawWithin = styled(DrawWithin)`
  min-height: 0;
`;
export const StSwatchContainer = styled.section<{ selected: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 5px;
  border: 2px solid ${({ selected }) => (selected ? "green" : "transparent")};
`;
export const StMain = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    "title"
    "cat"
    "saveArea";
  overflow: hidden;
  touch-action: none;
  overflow-scrolling: touch;
  h2 {
    grid-area: title;
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
  }
`;
export const StControls = styled.section``;
export const StSwatchContainers = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 5px;
`;
export const StContent = styled.section`
  grid-area: cat;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 7fr 500px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const StSaveArea = styled.section`
  padding-top: 5px;
  grid-area: saveArea;
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
  & svg {
    width: 100%;
    height: 100%;
    max-height: 50px;
    //max-width: 150px;
    //width: 100%;
  }
  user-select: none;
`;
export const StCaption = styled.div<{ borderColor?: string }>`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: 3px solid ${({ borderColor }) => borderColor};
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
  display: grid;
  grid-template-columns: 1fr 150px;
`;
