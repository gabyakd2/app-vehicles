'use client'
import Home from "./Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Button, Grid, Stack } from "@mui/material";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
