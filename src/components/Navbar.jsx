import React from "react";
import Button from "./commons/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import "../App.css";

const styles = {
  buttons: {
    color: "black",
  },
};
export default function Navbar() {
  return (
    <>
      <Box
        display="flex"
        backgroundColor="black"
        flexDirection="row"
        color="lightgray"
        p={2}
        fontSize="10px"
      >
        <Stack flexDirection="row" marginRight={4}>
          <span style={{ marginRight: "10px" }}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span>038 502 8408</span>
        </Stack>
        <Stack flexDirection="row">
          <span style={{ marginRight: "10px" }}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </span>
          <span>KM. 15, Central Highway Tawala, Panglao, Bohol</span>
        </Stack>
      </Box>
      <Box display="flex" flexDirection="row" textTransform="uppercase">
        <Stack
          direction="row"
          spacing={4}
          justifyContent="flex-start"
          p={3}
          fontSize="20px"
          letterSpacing={3}
          fontWeight="bold"
          flex={1}
        >
          Cristal e-College
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="flex-end"
          p={3}
          flex={1}
        >
          <Link to="dashboard" smooth={true} duration={500}>
            <Button style={styles.buttons} className="hover-effect">
              Dashboard
            </Button>
          </Link>
          <Link to="gallery" smooth={true} duration={500}>
            <Button style={styles.buttons}>Gallery</Button>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <Button style={styles.buttons}>About</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
