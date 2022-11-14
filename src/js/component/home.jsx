import React from "react";
import MyCard from "./MyCard";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</div>
			</div>	
		</ >
	);
};

export default Home;
