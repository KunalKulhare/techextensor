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
import CountUp from 'react-countup';



const Home = () => {
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

              <Card sx={{ minWidth: 49 + "%" , heigh: 150 }} className="gradient">
                <CardContent>
                <div><CreditCardIcon /></div>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                  <CountUp delay={0.2} end={500}   duration={0.3} />

                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{color: '#ccd1d1'}}>
                    No of Projects
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + "%" , heigh: 150 }} className="gradient-light">
                <CardContent>
                <div><ShoppingBagIcon /></div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                <CountUp delay={0.4} end={900}   duration={0.6} />
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{color: '#ccd1d1'}}>
                    Totel Projects
                  </Typography>
                </CardContent>
              </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card sx={{ maxWidth: 100 +"%", height: 12 +'vh' }} className="gradient-light">
                <CardContent>
                <div className="paddingall">
                <span className="phasetitle" >Phase of Projects</span>
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
                <BarChart />
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{  height: 60 + "vh" }}>
                <CardContent>
                <div className="paddingall">
                <span className="phasetitle" >Popular Product Project</span>
                </div>
                <AccordionList /> 
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

export default Home;
