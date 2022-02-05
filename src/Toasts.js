import React from "react";
import Like from "./Like";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export default function Toasts() {
  try {
    toast(<Like />, {
      autoClose: false,
      position: toast.POSITION.BOTTOM_RIGHT,
      delay: 1200,
    });
  } catch (e) {
    alert("Please try submitting again");
  }
}
