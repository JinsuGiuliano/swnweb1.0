import React from "react";
import { NavbarNav } from "./menu.styled";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

// import StripeCheckoutButton from '../../payment/stripe-button/stripe-button.component'
// <StripeCheckoutButton price={20}/>
const Menu = ({ ourBalances}) => {
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
							{ 
								ourBalances && ourBalances.map((el, idx) => (
									<a
										href={el.url}
										target="blank"
										title=""
										className="btn anchor-link text-dark border-0 px-3"
										key={idx}
									>
										{el.year}
									</a>
								))
							}
						</NavbarNav>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Menu;
