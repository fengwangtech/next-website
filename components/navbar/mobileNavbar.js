import React, { useState } from "react";
import styled from 'styled-components';
import MenuItems from "./mobileMenuItems";
import { menuItems } from "./menus";
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse } from '@mui/material';
import Link from 'next/link'

const StyledMenus = styled.div`
  width: 80%;
  margin: auto;
	font-family: sans-serif;
	color: white;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledMenuItems = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 16px;
  height: 40px;
  position: relative;
  font-size: 16px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  color: white;

  &:hover {
    background-color: #04aa6d;
    color: white;
  }
`;

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

	return (
    <StyledMenus>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Link style={{ textDecoration: 'none' }} href={'/'}>
          <StyledMenuItems>
            <span>Home</span>
          </StyledMenuItems>
        </Link>
        <StyledMenuItems onClick={() => setShowMenu(prev => !prev)}>
          <MenuIcon style={{width: '30px', height: '30px', color: 'white'}} />
        </StyledMenuItems>
      </div>
      <div>
        <Collapse in={showMenu}>
          <div>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
            })}
          </div>
        </Collapse>
      </div>
    </StyledMenus>
	)
}

export default NavbarComponent;