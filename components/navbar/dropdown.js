import styled from 'styled-components';
import MenuItems from "./menuItems";

const StyledDropDwon = styled.div`
  position: absolute;
  left: ${props => props.depthLevel === 1 ? "0px" : "100%"}; 
  top: ${props => props.depthLevel === 1 ? "100%" : "0px"};   
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 0.875rem;
  z-index: 9999;
  background-color: white;
  color: black;
  display: ${props => props.dropdown ? "block" : "none" };
`;

const StyledRightDropDwon = styled.div`
  position: absolute;
  right: ${props => props.depthLevel === 1 ? "0px" : "100%"}; 
  top: ${props => props.depthLevel === 1 ? "100%" : "0px"};   
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 0.875rem;
  z-index: 9999;
  background-color: white;
  color: black;
  display: ${props => props.dropdown ? "block" : "none" };
`;

const Dropdown = ({ submenus, dropdown, depthLevel, rightSide }) => {
  depthLevel = depthLevel + 1;

  if (rightSide) {
    return (
      <StyledRightDropDwon depthLevel={depthLevel} dropdown={dropdown} rightSide={rightSide}>
        {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </StyledRightDropDwon>
    ); 
  }

  return (
    <StyledDropDwon depthLevel={depthLevel} dropdown={dropdown} rightSide={rightSide}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </StyledDropDwon>
  );
};

export default Dropdown;
