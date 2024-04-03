import React from "react";
import { NavbarNav } from "./menu.styled";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

// import StripeCheckoutButton from '../../payment/stripe-button/stripe-button.component'
// <StripeCheckoutButton price={20}/>
const Menu = () => {
	return (
		<header>
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-collapse">
						<NavbarNav className="nav navbar-nav navbar-right">
							<Link to="/">
								<Icon.House
									className="btn anchor-link border-0 px-0"
									color="#d68b27"
									size={45}
								/>
							</Link>
							<a
								href="#contact"
								title=""
								className="btn anchor-link text-dark border-0 px-3"
							>
								Contact Us
							</a>
							Our Balances:
							<a
								href="https://firebasestorage.googleapis.com/v0/b/swn-web.appspot.com/o/AnnualReport.pdf?alt=media&token=49bb519b-618b-4d4a-bfcc-4cd1160af264"
								target="blank"
								title=""
								className="btn anchor-link text-dark border-0 px-3"
							>
							2021
							</a>/
							<a
								href="https://firebasestorage.googleapis.com/v0/b/swn-web.appspot.com/o/Financieel%20jaarrapport%202022.pdf?alt=media&token=1ddbb486-24fb-4221-bc57-dd590747f894"
								target="blank"
								title=""
								className="btn anchor-link text-dark border-0 px-3 secondary"
							>
								2022
							</a>/
							<a
								href="https://firebasestorage.googleapis.com/v0/b/swn-web.appspot.com/o/Annual%20Report%202023.pdf?alt=media&token=4db2fb24-f77b-4a82-8245-2997e9be92b1"
								target="blank"
								title=""
								className="btn anchor-link text-dark border-0 px-3"
							>
							2023
							</a>
						</NavbarNav>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Menu;
