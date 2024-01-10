import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTrophy,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  stack: {
    height: "150px",
    padding: "20px",
  },
  h1: {
    fontSize: "26px",
    fontWeight: "bold",
  },
  div: {
    display: "flex",
    alignItems: "flex-start",
  },
  span: {
    width: "200px",
  },
  p: {
    marginLeft: "30px",
  },
};
export default function About() {
  return (
    <Box style={styles.container}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        color="white"
        p={8}
      >
        <Stack style={styles.stack} backgroundColor="#00d084" width="350px">
          <span style={styles.h1}>School Vision</span>
          <div style={styles.div}>
            <span style={styles.span}>
              A leading institution of excellence in delivering education and
              training in the Philippines and beyond.
            </span>
            <p style={styles.p}>
              <FontAwesomeIcon icon={faGraduationCap} fontSize="60px" />
            </p>
          </div>
        </Stack>
        <Stack style={styles.stack} backgroundColor="#ff6900" width="350px">
          <span style={styles.h1}>School Motto</span>
          <div style={styles.div}>
            <span style={styles.span}>
              A leading institution of excellence in delivering education and
              training in the Philippines and beyond.
            </span>
            <p style={styles.p}>
              <FontAwesomeIcon icon={faTrophy} fontSize="60px" />
            </p>
          </div>
        </Stack>
        <Stack style={styles.stack} backgroundColor="#0693e3" width="350px">
          <span style={styles.h1}>Mission</span>
          <div style={styles.div}>
            <span style={styles.span}>
              A leading institution of excellence in delivering education and
              training in the Philippines and beyond.
            </span>
            <p style={styles.p}>
              <FontAwesomeIcon icon={faEdit} fontSize="60px" />
            </p>
          </div>
        </Stack>
      </Box>
      <Box display="flex" flexDirection="row" marginLeft={20}>
        <Stack
          fontSize="28px"
          textTransform="uppercase"
          letterSpacing={1}
          fontWeight="bold"
          spacing={4}
          justifyContent="flex-start"
        >
          Latest news and events
          <Box width={50} height={6} backgroundColor="yellow"></Box>
        </Stack>
        <Stack direction="row" spacing={4} justifyContent="flex-end">
          <Button>View More</Button>
        </Stack>
      </Box>
    </Box>
  );
}
