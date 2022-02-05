import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

export default function Content() {
  const [liked, setList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchall = JSON.parse(localStorage.getItem("formSubmissions")) || [];
      const likes = fetchall.filter((like) => like.data.liked === true);
      setList(likes);
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  const display = () => {
    try {
      return liked.map((l) => (
        <li key={l.id}>
          {l.data.firstName} {l.data.lastName}, {l.data.email}
        </li>
      ));
    } catch (error) {
      return;
    }
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 1 }}>
        {display()}
      </Typography>
    </Box>
  );
}
