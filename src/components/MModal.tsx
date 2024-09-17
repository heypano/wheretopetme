import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

type MModalProps = {
  open: React.ComponentProps<typeof Modal>["isOpen"];
  onClose: React.ComponentProps<typeof Modal>["onRequestClose"];
};

const MModal: React.FC<React.PropsWithChildren<MModalProps>> = ({
  children,
  open,
  onClose,
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
      {children}
    </Modal>
  );
};

export default MModal;
