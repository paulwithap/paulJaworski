import React from 'react';
import me from '../images/home-me-1800.jpg'
import '../styles/home.css';

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-photo">
				<img src={me} alt=""/>
			</div>
			<div className="home-bio">
				<h1>Hey there,</h1>
				<h2>I'm Paul Jaworski</h2>
			</div>
		</div>
	);
};

export default Home;
