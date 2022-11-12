import React from "react";
import MyCard from "./MyCard";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<>
		<div>
			<Navbar />
		</div>
		<div>
			<Jumbotron />
		</div>
		<div>
			<MyCard />
			<MyCard />
			<MyCard />
			<MyCard />
		</div>	
		</ >
	);
};

export default Home;
