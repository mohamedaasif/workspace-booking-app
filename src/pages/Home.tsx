import { Box } from "@mui/material";
import SpaceOverview from "../component/SpaceOverview/SpaceOverview";
import ChooseUs from "../component/ChooseUs/ChooseUs";
import DownloadApp from "../component/DownloadApp/DownloadApp";
import Banner from "../component/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Box
        sx={{
          px: { xs: "20px", md: "40px", lg: "120px" },
        }}
      >
        <ChooseUs />
        <SpaceOverview />
        <DownloadApp />
      </Box>
    </>
  );
};

export default Home;
