import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/hero.css';

const IntroText = () => {
	return (
		<div className="intro-text">
			<h1>Hey there,</h1>
			<h2>I'm Paul Jaworski</h2>
		</div>
	);
}

const IntroDescriptionPartOne = () => {
	return (
		<div className="intro-description part-one">
			<h3>I'm a full-stack web developer with a specialty in rich front-end applications.</h3>
		</div>
	);
};

const IntroDescriptionPartTwo = () => {
	return (
			<div className="intro-description part-two">
				<p>
					This site is 100% open-source and sort of a playground for me to learn and experiment with new technologies, frameworks, tools, etc.
				</p>
			</div>
	);
};

const Hero = () => {
	return (
		<div className="hero">
			<ReactCSSTransitionGroup
				transitionName="intro"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
	      transitionLeave={false}
			>
				<IntroText key={1} />
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
				transitionName="description"
				transitionAppear={true}
				transitionAppearTimeout={1500}
				transitionEnter={false}
	      transitionLeave={false}
			>
				<IntroDescriptionPartOne key={2} />
				<IntroDescriptionPartTwo key={3} />
				<div className="hero-footer">
					<a href="https://github.com/paulwithap">
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
					<a href="mailto:hello@paauljaworski.com">
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
					</a>
				</div>
			</ReactCSSTransitionGroup>
		</div>
	);
};

export default Hero;
