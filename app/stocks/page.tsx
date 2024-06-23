'use client'

import React, { useEffect, useState } from 'react';
import ClickHandler from './clickHandler';
import { GetLinkUrl } from './webSiteLinks/index';
import StockWebsiteDialog from './StockWebsiteDialog';
import allStock from './data/all';
import amexStock from './data/amex';
import nasdaqStock from './data/nasdaq';
import nyseStock from './data/nyse';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled as muiStyled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import './page.css';

interface stockInterface {
  name: string;
  code: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: any
}


const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'lightgray',
    color: 'black',
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const toFixedWithoutZeros = (num, precision) =>
  `${Number.parseFloat(num.toFixed(precision))}`;

interface columnsInterface 
{
  id: string;
  label: string;
  minWidth: number;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  format?: any
}

const columns: columnsInterface[] = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'open', label: 'Open', minWidth: 100, align: 'left', format: (value) => toFixedWithoutZeros(value, 2) },
  { id: 'high', label: 'High', minWidth: 100, align: 'left', format: (value) => toFixedWithoutZeros(value, 2) },
  { id: 'low', label: 'Low', minWidth: 100, align: 'left', format: (value) => toFixedWithoutZeros(value, 2) },
  { id: 'close', label: 'Close', minWidth: 100, align: 'left', format: (value) => toFixedWithoutZeros(value, 2) },
  { id: 'volume', label: 'Volume', minWidth: 100, align: 'left' },
];

const Stock = () => {
  let [stockTime, setStockTime] = useState('');
  let [startLetter, setStartLetter] = useState('');
  let [stocks, setStocks] = useState<stockInterface[]>([]);
  const [selectedStock, setSelectedStock] = useState(null);
  let [cuurentStocks, setCurrentStocks] = useState<stockInterface[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [filename, setFilename] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);

    loadStockData(allStock)    
  }, []);

  useEffect(() => {
    if (filename === 'AMEX') { loadStockData(amexStock); }
    else if (filename === 'NASDAQ') { loadStockData(nasdaqStock); }
    else if (filename === 'NYSE') { loadStockData(nyseStock); }
    else { loadStockData(allStock); }
  }, [filename]);

  useEffect(() => {
    let data = stocks.filter(x => x.name.startsWith(startLetter));
    setPage(0);
    setCurrentStocks(data)
  }, [startLetter, stocks]);

  const loadStockData = (stockData) => {
    let timeLoaded = false;
    const lines = stockData.split('\n');
    let stockItems: stockInterface[] = [];
    lines.forEach((line) => 
      {
        let items = line.split(',')
        if (items.length === 7)
        {
          if (!timeLoaded) {setStockTime(items[1]); timeLoaded = true;}
          stockItems.push({
            name: items[0], 
            code: items[1],
            open: Number.parseFloat(items[2]), 
            high: Number.parseFloat(items[3]), 
            low: Number.parseFloat(items[4]), 
            close: Number.parseFloat(items[5]), 
            volume: items[6]})
        }
      }
    )
    stockItems.sort(function (a, b) {
      if (a.name < b.name) {
          return -1;
      }
      if (b.name < a.name) {
          return 1;
      }
      return 0;
    });
    setStocks(stockItems);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onRowClick = (name) => {
    setSelectedStock(name);
  }

  const onCloseDialog = () => {
    setSelectedStock(null);
  }

  const onRowDbClick = (name) => {
    window.open(GetLinkUrl(0, name), "_Blank")
  }

  return (
    <div>
      <StockWebsiteDialog name={selectedStock} onClose={onCloseDialog} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px", backgroundColor: "#DFECFC" }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '80%', fontSize: "18px", fontWeight: "normal"}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Exchange</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={filename}
                label="Exchange"
                onChange={(e) => setFilename(e.target.value)}
              >
                <MenuItem value="ALL">AMEX, NASDAQ, NYSE</MenuItem>
                <MenuItem value="AMEX">American Stock Exchange</MenuItem>
                <MenuItem value="NASDAQ">NASDAQ Stock Exchange</MenuItem>
                <MenuItem value="NYSE">New York Stock Exchange</MenuItem>
              </Select>
            </FormControl>
            <div style={{fontSize: '12px'}}>{stockTime}</div>
          </div>
          <div style={{display: 'flex', height: '40px'}}>
            { letters.map((letter, index) => {
                return <div className="StyledLetter" key={index} onClick={() => setStartLetter(letter)} 
                        style={{
                          fontWeight: startLetter === letter ? 'bold' : 'normal',
                          textDecoration: startLetter === letter ? 'underline' : 'none'}}
                >{letter}</div>
              })          
            }
            <div className="StyledLetter" style={{fontWeight: startLetter === '' ? 'bold' : 'normal', textDecoration: startLetter === '' ? 'underline' : 'none'}} 
                 onClick={() => setStartLetter('')}>All</div>
          </div>
        </div>
        <Paper sx={{ width: '80%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow style={{backgroundColor: 'gray'}}>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {cuurentStocks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={ClickHandler(onRowClick, onRowDbClick, row.name)}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[15, 30, 50, 100, 200, 500, 1000]}
            component="div"
            count={cuurentStocks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <div style={{margin: '10px'}}>Data from <Link href="https://eoddata.com/" target='_blank'>https://eoddata.com/</Link></div>
      </div>
    </div>
  )
}

export default Stock;