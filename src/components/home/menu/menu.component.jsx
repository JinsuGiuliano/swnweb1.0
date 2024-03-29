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
							<a
								href="https://firebasestorage.googleapis.com/v0/b/swn-web.appspot.com/o/Financieel%20jaarrapport%202022.pdf?alt=media&token=d6a287a2-f131-4613-b4b3-1433957668ca"
								gs:target="blank"
								title=""
								className="btn anchor-link text-dark border-0 px-3"
							>
								Our Balance
							</a>
						</NavbarNav>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Menu;
