import { Box, Typography } from "@mui/material";
import appBanner from "../../assets/images/appBanner.svg";
import ios from "../../assets/images/ios_app.svg";
import android from "../../assets/images/andorid_app.svg";

const DownloadApp = () => {
  return (
    <Box sx={{ mb: "40px" }}>
      <Typography
        sx={{
          color: "var(--tertiary_text_color)",
          fontSize: {
            xs: "var(--section_heading_mweb_size)",
            md: "var(--section_heading_web_size)",
          },
          lineHeight: "45px",
          fontFamily: "var(--ff-bold)",
          mb: { xs: "30px", md: "120px" },
        }}
      >
        Download our app now
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "180px", md: "220px" },
          borderRadius: "8px",
          boxShadow: "var(--box_shadow_low)",
          border: "1px solid var(--border_light_gray)",
          px: { xs: "12px", md: "30px" },
          py: { xs: "12px", md: "0px" },
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src={appBanner}
          alt="mobile"
          sx={{
            height: { xs: "240px", md: "360px" },
            objectFit: "contain",
            mt: { xs: "0px", md: "-100px" },
          }}
        />

        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
          }}
        >
          <Typography
            sx={{
              color: "var(--tertiary_text_color)",
              fontSize: "20px",
              lineHeight: "28px",
              fontFamily: "var(--ff-medium)",
              display: { xs: "none", md: "block" },
            }}
          >
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              gap: "24px",
              mt: "40px",
            }}
          >
            <Box component="img" src={android} alt="android" />
            <Box component="img" src={ios} alt="ios" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
