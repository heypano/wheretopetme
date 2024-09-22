import React from "react";
import Modal from "react-modal";
import {
  StModalContainer,
  StModalContent,
  StModalFooter,
} from "@/components/styles/styled";

Modal.setAppElement("body");

type MModalProps = {
  open: React.ComponentProps<typeof Modal>["isOpen"];
  onClose: React.ComponentProps<typeof Modal>["onRequestClose"];
  footer?: React.ReactNode;
};

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
