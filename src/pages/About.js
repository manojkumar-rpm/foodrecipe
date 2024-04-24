
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to MY resturant for customers are mostly used by businesses to say hello to their target audience, new users, and returning customers.
           They can also serve other purposes like Birthday celebration, generating quality leads, and there is party hall, family Table Room,etc.
           And there is proper sturcture with Good Engineer.A customer satisfaction and loyalty, leading a very Good Services in our Resturant.
           We pride ourselves in following the traditional Food like breakfast seasonings and processes used in  the birthplace of Tamilnadu.Inspired 
           by our co-founder and executive chef SATHYA_VILBER_SAHAN to share indian culture through food,and knows the depth,richness and vibrancy of Indian 
           Culinary traditions in a Modern.

        </p>
        <br />
        <p>
          Here,The best and Special Dish is idiyappam and chola.These Dishes are inspired by co-founder and executive.Earlier we mentioned the importance
          of the special dish in my resturant .In future we extends menu list and include shorts in that Special "tea" and "coffee".In weekend there is celebiraton 
          of our resturant with some movies in big Screen and special offers.A Website visitors will typically also leave feedback or ask general questions through a 
          contact page. These pieces of information are valuable to businesses because they learn more about consumer expectations and preferences.While Contact Us pages
           are meant to be helpful to users, it's important not to bombard them with too much information.At the end of the day, users want to know from brands that their
            voices will be heard one way or another. Adding in additional elements like phone numbers, email addresses, and social links gives users the opportunity to reach 
            out on multiple platforms.Although inns and hostelries often served paying guests meals from the booking table, and sever the dish, My restaurant was probably the 
            first public place where any diner might order a meal from a menu offering a choice of dishes.a cookbook that became a standard work on Indian culinary art.A restaurants 
            build their meals around varieties of gravy, and the elegant tea houses serve properly to the customers after eating is over ,then they want feel fresh so that we provide 
            the tea or coffee.make sure the if once come to our resturant you leave our shop.because like that we server to the customers.




        </p>
      </Box>
    </Layout>
  );
};

export default About;
