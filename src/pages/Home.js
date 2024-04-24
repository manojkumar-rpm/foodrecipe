
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import bestbg from "../images/bestbg.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${bestbg})` }}>
        <div className="headerContainer">
          <h1>FOOD RESTURANT</h1>
          <p><i>Best Food In India</i></p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
