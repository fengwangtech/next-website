import styled from 'styled-components';

const borderStyle = '1px solid #AAAAAA';

export const StyledTable = styled.div`
  display: table;
  width: calc(100% - 2px);
  min-width: 600px;
  border-left: ${borderStyle};
  border-top: ${borderStyle};
`;

export const HeaderRow = styled.div`
  display: table-row;
  height: 40px;
`;

export const HeaderCell = styled.div`
  width: 100%;
  cursor: pointer;
  min-width: 100px;
  display: table-cell;
  vertical-align: middle;
  padding: 6px;
  border-right: ${borderStyle};
  border-bottom: ${borderStyle};
  background-color: #1C858C;
  color: #FFFFFF;
  font-size: 18px;
  &:hover {
    background-color: #D2691E;
  }
`;

export const CenteredCell = styled.div`
  display: flex;
  align-items: center;
`;

export const DataRow = styled.div`
  display: table-row;
  background-color: ${props => props.selected ? '#e2e2e2' : '#FFFFFF'};
  &:hover {
    background-color: #F0F0F0;
  }
`;

export const DataCell = styled.div`
  width: 100%;
  min-width: 100px;
  display: table-cell;
  vertical-align: middle;
  padding: 6px;
  font-size: 16px;
  border-right: ${borderStyle};
  border-bottom: ${borderStyle};
`;

export const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;