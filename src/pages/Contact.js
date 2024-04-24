
import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
         “It all starts with ingredients. We've been working closely with farmers SINCE-2002.
         Owner- is Mr Manojkumar R and manage all other peoples were working at Resturant.
         Then i work to match just the right food for pepole.All the Pepole always welcome you 
         and come with peaceful and beloved to My Resturant.The Special of our "breakfast" was born out of love 
         and respect for these humble creations, met with a desire to bring quality ingredients to the table.
         Simply put, we're here to bring you a breakfast with experience you can feel good of Our Dish. My Resturant
         they provide various food with an aesthetic seating arrangement and the best services.In resturant act as great 
         places for many situations.From team meetings to family dinners,it can help serve a wide range of audiences.Many 
         resturants are aware of their customer preferences,hence, you can find a wide variety of vegetarian.If you are looking 
         for a perfect place to have a date,family dinner or simply wish to hang out with you friends,we highly suggest you visit 
         our resturant.That's All!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-****
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> manojkumar.parimala@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +91 86828*****
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
