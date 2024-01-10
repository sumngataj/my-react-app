import React from "react";
import MuiButton from "@mui/material/Button";

export default function Button({ children, color, size, variant, style }) {
  return (
    <MuiButton size={size} color={color} variant={variant} style={style}>
      {children}
    </MuiButton>
  );
}
