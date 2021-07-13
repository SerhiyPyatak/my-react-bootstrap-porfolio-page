import React from 'react';
import Typed from 'react-typed';

function Hero(props) {
	return (
		<div className = "hero-wrapper">
			<div className = "hero-info">
				<h1>hello!</h1>
				<Typed 
					className = "typed-text"
					typeSpeed = { 40 }
					backSpeed = { 60 }
					loop
					strings = {
						[
							"I'm Serhii Piatak ...",
							"... a front-end web developer ...",
							"... and welcome to my website :)"
						]
					}
				/>
			</div>
		</div>
	);
}

export default Hero;