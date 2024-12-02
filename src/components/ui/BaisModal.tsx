import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 500,
};

interface IProps {
  open: boolean;
  close: () => void;
  children: ReactNode;
}

export default function BaisModal({ open, close, children }: IProps) {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
