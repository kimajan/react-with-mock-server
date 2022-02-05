import React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { createMockFormSubmission } from "./service/mockServer";
import { saveFormSubmission } from "./service/mockServer";
import { onMessage } from "./service/mockServer";

import Toasts from "./Toasts";

export default function Header() {

  const actions = () => {
    try {
      onMessage(saveFormSubmission);
      createMockFormSubmission();
      Toasts();
    } catch (e) {
      return;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={actions}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
