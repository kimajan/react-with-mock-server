import React from "react";
import Button from "@mui/material/Button";
import List from "./List";

export default function Like() {
  const stored = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  const len = stored.length;

  try {
    if (len > 0) {
      return (
        <>
          <div>
            <p>
              {stored[len - 1].data.firstName} {stored[len - 1].data.lastName}
            </p>
            <p> {stored[len - 1].data.email}</p>
          </div>

          <Button
            style={{ float: "right" }}
            onClick={List}
          >
            Like
          </Button>
        </>
      );
    } else {
      return "Please try submitting again";
    }
  } catch (e) {
    return "Please try submitting again";
  }
}
