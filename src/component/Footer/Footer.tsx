import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "var(--bg_color)",
        color: "var(--tertiary_text_color)",
        fontFamily: "var(--ff-regular)",
        fontSize: "14px",
        lineHeight: "20px",
        display: "flex",
        justifyContent: "center",
        py: "12px",
      }}
    >
      © Copyright 2024. Bhive Private Limited
    </Box>
  );
};

export default Footer;
