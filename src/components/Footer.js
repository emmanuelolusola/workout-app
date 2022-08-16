import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.svg";

const Footer = () => (
  <Box mt="80px" bgcolor="rgba(255, 255, 255, 0.2)">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "18px", xs: "12px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      color="#fff"
    >
      Project by Emmanuel Olusola Oyeleke
    </Typography>
  </Box>
);

export default Footer;
