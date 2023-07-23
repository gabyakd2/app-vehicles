'use client'
import Home from "./Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Button, Grid, Stack } from "@mui/material";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}
