import { Box, Typography } from "@mui/material";
import direction from "../../assets/images/assistant_direction.svg";
import Button from "../Button/Button";

interface Location {
  latitude: number;
  longitude: number;
}

type cardData = {
  data: any;
  userLocationData: Location | null;
};

const Card = (props: cardData) => {
  const { data, userLocationData } = props;

  const calculateDiscountedPrice = (
    perDayPrice: number,
    numberOfDays: number,
    discountPercentage: number = 0
  ): number => {
    const total = perDayPrice * numberOfDays;
    const discount = (discountPercentage / 100) * total;
    const finalPrice = total - discount;

    return Math.round(finalPrice);
  };

  const getDistanceInKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  };

  return (
    <Box
      key={data?.id}
      sx={{
        width: { xs: "100%", sm: "370px" },
        height: { xs: "auto", sm: "384px" },
        borderRadius: "8px",
        border: "1.08px solid var(--border_light_gray)",
        boxShadow: "var(--box_shadow_low)",
        p: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "56px",
          mb: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px" },
            fontFamily: "var(--ff-semibold)",
            wordBreak: "break-word",
            flex: 1,
          }}
        >
          {data?.name}
        </Typography>
        <Box
          sx={{
            border: "0.47px solid var(--seconday_border_color)",
            borderRadius: "6.47px",
            p: "8px 17px",
            background: "var(--secondary_btn_color)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box component={"img"} src={direction} alt="direction" />
          <Typography
            sx={{
              fontFamily: "var(--ff-medium)",
              color: "var(--text_muted)",
              fontSize: "8px",
            }}
          >
            {typeof userLocationData?.latitude === "number" &&
            typeof userLocationData?.longitude === "number"
              ? getDistanceInKm(
                  userLocationData?.latitude,
                  userLocationData?.longitude,
                  data.latitude,
                  data.longitude
                )
              : "-"}{" "}
            kms
          </Typography>
        </Box>
      </Box>
      <Box
        component={"img"}
        src={`${import.meta.env.BASE_URL}${data?.images[0]}`}
        alt="arrow"
        width={"100%"}
        height={"202px"}
        sx={{
          borderRadius: "6px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <Button
          styleProps={{
            border: "0.5px solid var(--seconday_border_color)",
            background: "var(--secondary_btn_color)",
          }}
          isBulkPass={false}
          price={data?.day_pass_price}
        />
        <Button
          styleProps={{
            border: "1px solid var(--tertiary_border_color)",
            background: "var(--primary_btn_color)",
          }}
          isBulkPass={true}
          price={calculateDiscountedPrice(
            data?.day_pass_price,
            10,
            data?.day_pass_discounts_percentage[10]?.value
          )}
        />
      </Box>
    </Box>
  );
};

export default Card;
