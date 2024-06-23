import React from "react";
import Link from 'next/link'
import styled from 'styled-components';
import MenuItems from "./menuItems";
import { menuItems } from "./menus";

const StyledMenuItems = styled.div`
  position: relative;
  padding: 16px 20px 16px 16px;
  font-size: 16px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  color: white;

  &:hover {
    background-color: #04aa6d;
  }
`;

const StyledMenus = styled.div`
	display: none;
  width: 100%;
  margin: auto;
	font-family: sans-serif;
	color: white;
	align-items: center;
	justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavbarComponent = () => {
	return (
    <StyledMenus>
        <Link href="/" style={{textDecoration: 'none'}}>
          <StyledMenuItems className="menu-items">
                <span style={{marginRight: '8px'}}>Home</span>
          </StyledMenuItems>
        </Link>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} rightSide={false} />;
        })}
    </StyledMenus>
	)
}

export default NavbarComponent;