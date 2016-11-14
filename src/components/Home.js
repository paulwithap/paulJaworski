import React, { Component } from 'react';
import classNames from 'classnames';
import '../styles/home.css';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			isLargePhotoLoaded: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLargePhotoLoaded: true
			});
		}, 500);
	}

	render() {
		const photoClass = classNames('home-photo', { 'large': this.state.isLargePhotoLoaded });
		return (
			<div className="home-container">
				<div className="home-photo-container">
					<div className={photoClass}/>
				</div>
				<div className="home-bio-container">
					<h1>Hey there,</h1>
					<h2>I'm Paul Jaworski</h2>
				</div>
			</div>
		);
	}
}

export default Home;
