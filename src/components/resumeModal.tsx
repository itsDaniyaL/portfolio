import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{
          textTransform: "none",
          padding: "0 15px",
          borderRadius: "12px",
          background: "#6715B9",
        }}
      >
        Resume
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            overflow: "auto",
            p: 2,
            borderRadius: "12px",
          }}
        >
          <Document
            file={`../data/CV.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </Box>
      </Modal>
    </>
  );
}
