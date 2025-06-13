import { Box } from "@mui/material";
import SpaceOverview from "../component/SpaceOverview/SpaceOverview";

const Home = () => {
  return (
    <Box
      sx={{
        px: { xs: "20px", md: "40px", lg: "120px" },
      }}
    >
      <SpaceOverview />
    </Box>
  );
};

export default Home;
