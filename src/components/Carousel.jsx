import React from "react";
import Box from "@mui/material/Box";
import Button from "./commons/Button";
import Stack from "@mui/material/Stack";
import { blueGrey } from "@mui/material/colors";

const styles = {
  container: {
    height: "80vh",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
  },
};

export default function Carousel() {
  return (
    <Box style={styles.container}>
      <div
        style={{
          ...styles.backgroundImage,
          backgroundImage: 'url("/images/bgsite.jpg")',
        }}
      >
        {/* <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button w variant="contained" size="large" style={styles.customBg}>
            Explore
          </Button>
          <Button variant="outlined" size="small">
            Download
          </Button>
        </Stack> */}
      </div>
    </Box>
  );
}
