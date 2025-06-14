import { Box, Typography } from "@mui/material";
import bannerWeb from "../../assets/images/banner_web.svg";
import bannerWeb1 from "../../assets/images/bannerWeb1.svg";
import bannerMobile from "../../assets/images/banner_mobile.svg";

const BannerText = ({
  fontSize,
  align = "left",
}: {
  fontSize: any;
  align?: "left" | "center";
}) => (
  <Typography
    sx={{
      position: align === "center" ? "static" : "absolute",
      top: align === "center" ? "auto" : "50%",
      transform: align === "center" ? "none" : "translateY(-50%)",
      left: align === "center" ? "auto" : { sm: "8%", md: "12%" },
      fontFamily: "var(--ff-bold)",
      fontSize,
      textAlign: align,
      px: align === "center" ? 2 : 0,
    }}
  >
    Host your meeting with world-class amenities. Starting at{" "}
    <Typography
      component="span"
      sx={{
        color: "var(--primary_color)",
        fontFamily: "var(--ff-bold)",
        fontSize,
      }}
    >
      ₹199/-!
    </Typography>
  </Typography>
);

const Banner = () => {
  return (
    <Box>
      {/* Desktop and Tablet */}
      <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row" }}>
        <Box sx={{ position: "relative" }}>
          <Box component="img" src={bannerWeb} alt="bannerWeb" width="100%" />
          <BannerText fontSize={{ sm: "38px", lg: "58px" }} />
        </Box>
        <Box
          component="img"
          src={bannerWeb1}
          alt="bannerWeb1"
          sx={{ display: { lg: "block", sm: "none" } }}
        />
      </Box>

      {/* Mobile */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Box
          component="img"
          src={bannerMobile}
          alt="bannerMobile"
          width="100%"
        />
        <BannerText fontSize="20px" align="center" />
      </Box>
    </Box>
  );
};

export default Banner;
