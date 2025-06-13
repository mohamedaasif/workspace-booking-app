import { Box } from "@mui/material";
import logo from "../../assets/images/image 54.svg";
import call from "../../assets/images/call.svg";

const Header = () => {
  return (
    <Box
      sx={{
        height: { xs: "72px", md: "90px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: "20px", md: "40px", lg: "120px" },
      }}
    >
      <Box component="img" src={logo} alt="headerLogo" />
      <Box
        component="img"
        src={call}
        alt="callLogo"
        sx={{
          border: "1px solid var(--border_color)",
          borderRadius: "4px",
          padding: "12px",
          boxShadow: "var(--box_shadow)",
        }}
      />
    </Box>
  );
};

export default Header;
