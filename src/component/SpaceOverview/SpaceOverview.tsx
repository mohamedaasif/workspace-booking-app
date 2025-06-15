import { Box, Typography } from "@mui/material";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchData } from "../../store/slices/dataSlice";

interface Location {
  latitude: number;
  longitude: number;
}

const SpaceOverview = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.data);

  const [userLocation, setUserLocation] = useState<Location | null>(null);

  useEffect(() => {
    dispatch(fetchData());

    const getUserLocation = (): Promise<GeolocationPosition> =>
      new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );

    const fetchLocation = async () => {
      try {
        const position = await getUserLocation();
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } catch (error) {
        console.error("Failed to fetch location:", error);
        setUserLocation(null);
      }
    };

    fetchLocation();
  }, []);

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
        Our Space Overview
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "16px", lg: "45px" },
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
        }}
      >
        {items.map((data: any) => (
          <Card data={data} userLocationData={userLocation} />
        ))}
      </Box>
    </Box>
  );
};

export default SpaceOverview;
