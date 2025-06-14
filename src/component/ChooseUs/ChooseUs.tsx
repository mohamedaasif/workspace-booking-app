import { Box, Typography } from "@mui/material";
import { amenities } from "../../utils/amenities";

const ChooseUs = () => {
  return (
    <Box
      sx={{
        mb: { xs: "50px", md: "120px" },
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
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {amenities?.map((item: any) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              paddingLeft: { sm: "24px" },
              justifyContent: { xs: "center", sm: "left" },
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "150px", sm: "280px" },
              height: "80px",
              boxShadow: "var(--box_shadow_mid)",
              borderRadius: "6px",
            }}
          >
            <Box component="img" src={item.img} alt={item.name} width="32px" />
            <Typography
              sx={{
                fontFamily: "var(--ff-medium)",
                fontSize: { xs: "14px", sm: "18px" },
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
