import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<div className="welcome-banner">
				<h2>Welcome to the Student Management System</h2>
				<p className="subtitle">Your platform for managing students efficiently</p>
			</div>
			<div className="features-section">
				<h3>Key Features:</h3>
				<ul>
					<li>Manage student records</li>
					<li>Track attendance and grades</li>
					<li>Generate reports and analytics</li>
					<li>Communicate with students and parents</li>
				</ul>
			</div>

			
		</div>
	);
};

export default Home;
