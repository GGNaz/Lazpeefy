"use client";

import React from "react";
import Lottie from "lottie-react";
import notfound from "@/app/assets/lottie/page_not_found.json";
import { Box, Typography } from "@mui/material";
import { flexRow } from "@/utils/customLayout";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        ...flexRow,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          ...flexRow,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          animationData={notfound}
          loop={true}
          height={200}
          width={200}
          style={{ height: "30rem", width: "30rem" }}
        />
      </Box>
    </Box>
  );
}
