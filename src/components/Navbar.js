import React from 'react';
import Logo from '../serhii-logo-1-80x80-transparent.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
				<FontAwesomeIcon icon = { faBars } style = {{ color: "#ff8548" }} />
	// replace FontAwesomeIcon component by span below if you don't want to use font-awesone icon anymore
	//  <span class="navbar-toggler-icon"></span>
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#"><img src={Logo} alt='...logotype' /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<FontAwesomeIcon icon = { faBars } className = 'nav-hamburger' />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">about me</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">skills</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">experience</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">portfolio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">contacts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;