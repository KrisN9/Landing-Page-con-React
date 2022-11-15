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
					<MyCard image="https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" title="Beach" />
					<MyCard image="https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ" title="Woods" />
					<MyCard image="https://i.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" title="Mountain" />
					<MyCard image="https://i.picsum.photos/id/184/4288/2848.jpg?hmac=l0fKWzmWf6ISTPMEm1WjRdxn35sg6U3GwZLn5lvKhTI" title="Desert" />
				</div>
			</div>

			<Footer />

		</ >
	);
};

export default Home;
