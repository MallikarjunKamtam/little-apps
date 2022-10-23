import React from "react";
import { Link } from "react-router-dom";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import "./homePage.css";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
const Homepage = () => {
  return (
    <div className="icons-container">
      <Link className="home-focus-btn" to={"/focus"}>
        <Tooltip
          title="Focus App"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 2000 }}
        >
          <FilterCenterFocusIcon fontSize="large" color="success" />
        </Tooltip>
      </Link>
      <Link className="home-focus-btn" to={"/forms"}>
        <Tooltip
          title="Forms"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 2000 }}
        >
          <DynamicFormIcon fontSize="large" color="success" />
        </Tooltip>
      </Link>
    </div>
  );
};

export default Homepage;
