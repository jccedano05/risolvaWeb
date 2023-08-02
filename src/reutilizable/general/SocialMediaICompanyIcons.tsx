import React from "react";
import { Grid, Button } from "@mui/material";
import Image from "mui-image";

import instagramLogo from "../../assets/logos/Instagram Logo.svg";
import twitterLogo from "../../assets/logos/Twitter Logo.png";
import linkedInLogo from "../../assets/logos/LinkedIn Logo.png";

export const SocialMediaICompanyIcons = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Button variant="text" sx={{ width: "10%", p: 0 }}>
        <Image src={linkedInLogo} width={"70%"} />
      </Button>

      <Button variant="text" sx={{ width: "10%", p: 0 }}>
        <Image src={instagramLogo} width={"70%"} />
      </Button>

      <Button variant="text" sx={{ width: "10%", p: 0 }}>
        <Image src={twitterLogo} width={"70%"} />
      </Button>
    </Grid>
  );
};
