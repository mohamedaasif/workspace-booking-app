import React from "react";
import { Box, Typography } from "@mui/material";
import arrow1 from "../../assets/images/Vector (Stroke) (2).svg";
import arrow2 from "../../assets/images/Vector (Stroke) (1).svg";
import arrow3 from "../../assets/images/Vector (Stroke).svg";

type ButtonProps = {
  styleProps?: React.CSSProperties;
  isBulkPass: boolean;
  price?: any;
};

const Button = (props: ButtonProps) => {
  const { styleProps, isBulkPass, price } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "0.5px solid var(--seconday_border_color)",
        borderRadius: "6px",
        background: "var(--secondary_btn_color)",
        p: "8px 12px",
        mt: "22px",
        flex: "1",
        cursor: "pointer",
        position: "relative",
        ...styleProps,
      }}
    >
      {isBulkPass && (
        <Box
          sx={{
            background: "var(--primary_text_color)",
            fontSize: "8px",
            color: "var(--text_light)",
            textAlign: "center",
            padding: "4px 8px",
            fontFamily: "var(--ff-medium)",
            borderRadius: "3px",
            position: "absolute",
            top: "-10px",
            left: "30%",
          }}
        >
          20% Discount
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              fontFamily: "var(--ff-medium)",
              color: "var(--secondary_text_color)",
            }}
          >
            {isBulkPass ? "Bulk" : "Day"} Pass
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "18px", sm: "20px" },
              fontFamily: "var(--ff-semibold)",
              color: "var(--primary_text_color)",
            }}
          >{`\u20B9${price}`}</Typography>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
              fontFamily: "var(--ff-medium)",
              color: "var(--secondary_text_color)",
            }}
          >
            {isBulkPass ? "/10 Days" : "/Day"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box component={"img"} src={arrow1} alt="arrow1" />
        <Box component={"img"} src={arrow2} alt="arrow2" />
        <Box component={"img"} src={arrow3} alt="arrow3" />
      </Box>
    </Box>
  );
};

export default Button;
