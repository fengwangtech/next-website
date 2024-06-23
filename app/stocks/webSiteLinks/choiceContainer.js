import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Styled from 'styled-components';
import ClickHandler from '../clickHandler';

const Container = Styled.div`
position: relative;
background-color: #ffffff;
margin: 10px;
border-radius: 10px;
border: ${prop => prop.selected ? '2px solid #0000FF' : '2px solid #cccccc'};

&:hover {
  transform: scale(1.1);
}
`;

const SelectDiv = Styled.div`
background: #ffffff;
position: absolute;
right: -15px;
top: -15px;
height: 30px;
`;

const ChoiceContainer = (props) => {

  const onClick = (name) => {
    props.handleClick(props.name);
  }

  const onDbClick = () => {
    props.handleDbClick(props.name)
  }

  return (
    <Container selected={props.selected} onClick={ClickHandler(onClick, onDbClick, props.name)}>
      {props.children}
      { props.selected &&
      <SelectDiv>
        <CheckCircleIcon style={{ fontSize: '30px', color: '#0000FF' }} />
      </SelectDiv>
      }
    </Container>
  );
};
 
export default ChoiceContainer;