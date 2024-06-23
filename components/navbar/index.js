import React from "react";
import NavbarComponent from "./navbar";
import MobileNavbarComponent from "./mobileNavbar";

import styled from 'styled-components';

const StyledContainer = styled.div`
  position: sticky;
	top: 0;
	z-index: 100;
	background-color: #0073a6;
`;

const NavbarHome = () => {
	return (
		<StyledContainer>
			<NavbarComponent />
			<MobileNavbarComponent />
		</StyledContainer>
	)
}

export default NavbarHome;