import { Box, Typography } from "@mui/material";
import { amenities } from "../../utils/amenities";

const ChooseUs = () => {
  return (
    <Box
      sx={{
        mb: { xs: "50px", md: "120px" },
        mt: { xs: "50px", md: "36px" },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "var(--section_heading_mweb_size)",
            md: "var(--section_heading_web_size)",
          },
          lineHeight: "45px",
          fontFamily: "var(--ff-bold)",
          mb: { xs: "30px", md: "40px" },
        }}
      >
        Why choose us?
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: "12px",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {amenities?.map((item: any) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              padding: "16px",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexDirection: { xs: "column", sm: "row" },
              boxShadow: "var(--box_shadow_mid)",
              borderRadius: "6px",
              minHeight: "80px",
              boxSizing: "border-box",
            }}
          >
            <Box component="img" src={item.img} alt={item.name} width="32px" />
            <Typography
              sx={{
                fontFamily: "var(--ff-medium)",
                fontSize: { xs: "14px", sm: "18px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChooseUs;
