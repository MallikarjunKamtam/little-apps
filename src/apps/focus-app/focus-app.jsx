import React, { useState } from "react";
import "./focusApp.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { Link } from "react-router-dom";

const FocusApp = () => {
  const [currentFocus, setCurrentFocus] = useState({ x: "46%", y: "13%" });

  const windowHandler = (event) => {
    setCurrentFocus({ x: event.pageX - 100, y: event.pageY - 100 });
  };

  return (
    <>
      <Link to={"/"}>
        <Tooltip
          title="Go back to Homepage"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 600 }}
        >
          <button className="backbtn">
            <ArrowBackIcon />
          </button>
        </Tooltip>
      </Link>
      <div onMouseMove={windowHandler} className="main">
        <div
          style={{ left: currentFocus.x, top: currentFocus.y }}
          className="pointer"
        ></div>
      </div>
    </>
  );
};

export default FocusApp;
