import { useState } from "react";
import styled from 'styled-components';
import { Collapse } from '@mui/material';
import Link from 'next/link'

const StyledMenuItems = styled.div`
  position: relative;
  padding: ${props => props.depthLevel === 0 ? "16px 20px 16px 16px" : "10px 20px 10px 16px"};
  font-size: 16px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  color: ${props => props.depthLevel === 0 ? "white" : "black"};

  &:hover {
    background-color: ${props => props.depthLevel === 0 ? "#04aa6d" : "#04aa6d"};
    color: ${props => props.depthLevel === 0 ? "white" : "white"};
  }
`;

const StyledDownArrow = styled.span`
  &:after {
    content: "";
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;

const StyledRightArrow = styled.span`
  &:after {
    content: "";
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
  }
`;

const MenuItems = ({ items, depthLevel }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  if (items.submenu) {
    return (
      <>
        <StyledMenuItems depthLevel={depthLevel} className="menu-items" onClick={() => setShowSubmenu(prev => !prev)}>
          {depthLevel === 0 && <><span style={{marginRight: '8px'}}>{items.name}</span><StyledDownArrow /></>}
          {depthLevel > 0 && (
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <span style={{marginRight: '16px'}}>{items.name}</span>
                <StyledRightArrow />
            </div>
          )}
        </StyledMenuItems>
        <Collapse in={showSubmenu}>
            <div>
              {items.submenu.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
              })}
            </div>
        </Collapse>
      </>
    );
  }

  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} href={items.link}>
        <StyledMenuItems depthLevel={depthLevel} className="menu-items">
              <span style={{marginRight: '8px'}}>{items.name}</span>
        </StyledMenuItems>
    </Link>
  )
};

export default MenuItems;
