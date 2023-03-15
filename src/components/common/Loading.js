import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ variant = "primary", size = "sm", animation = "border" }) {
  return <Spinner animation={animation} variant={variant} size={size} />;
}

export default Loading;