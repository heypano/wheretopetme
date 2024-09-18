import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("body");

type MModalProps = {
  open: React.ComponentProps<typeof Modal>["isOpen"];
  onClose: React.ComponentProps<typeof Modal>["onRequestClose"];
  footer?: React.ReactNode;
};

const StModalContent = styled.section`
  overflow-y: hidden;
  padding: 16px;
  user-select: none;
`;
const StModalFooter = styled.section``;
const StModalContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%; /* Assuming modal takes full height */
  overflow: hidden; /* Prevent overflow on the modal */
  user-select: none;
`;
const MModal: React.FC<React.PropsWithChildren<MModalProps>> = ({
  children,
  open,
  onClose,
  footer,
}) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={(e) => {
        onClose?.(e);
      }}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
        content: {
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
        },
      }}
    >
      <StModalContainer>
        <StModalContent>{children}</StModalContent>
        {footer && <StModalFooter>{footer}</StModalFooter>}
      </StModalContainer>
    </Modal>
  );
};

export default MModal;
