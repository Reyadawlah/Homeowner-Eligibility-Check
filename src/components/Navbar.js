// components/Navbar/index.js

import React from "react";
import logo from './fmlogo.png';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
                <div className="navbar-content">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <div className="navbar-divider"></div>
                    <h1 className="navbar-title">User Portal</h1>
                </div>
					{/* Second Nav */}
					{/* <NavBtnLink to='/login'>Sign On</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="./pages/login">
						Login
					</NavBtnLink>
				</NavBtn>
                <NavBtn>
					<NavBtnLink to="./pages/signup">
						Sign Up
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;

