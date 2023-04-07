import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionList from "../Components/AccordionList";
import BarChart from "../Charts/BarChart";
import GeoChart from "../Charts/GeoChart";
import { Piechart } from "../Charts/Piechart";
import { Donutchart } from "../Charts/Donutchart";
import { BasicebarChart } from "../Charts/BasicebarChart";


const Analytics = () => {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Stack spacing={2} direction="row">

              <Card sx={{ minWidth: 100 + "%" , heigh: 150 }} >
                <CardContent>
                <Piechart />
                </CardContent>
              </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card sx={{ maxWidth: 100 +"%", height: 55 +'vh' }}>
                <CardContent>
                <div>
                <span >Phase of Projects</span>
                <BasicebarChart />
                </div>
                </CardContent>
              </Card>
            </Stack>

            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <GeoChart />
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{  height: 60 + "vh" }}>
                <CardContent>
                <Donutchart />

                </CardContent>
            </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>

    </>
  );
};

export default Analytics;
