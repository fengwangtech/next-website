'use client'

import React, { useState } from 'react';
import LineChart from './lineChart';
import Button from '@mui/material/Button';

const InitData = `
[
  [1,1], 
  [12,20], 
  [24,36],
  [32, 50],
  [40, 70], 
  [50, 100],
  [55, 106], 
  [65, 123], 
  [73, 130],
  [78, 134], 
  [83, 136], 
  [89, 138],
  [100, 140]
]
`;

const LineChartContainer = (props) => {
  const [data, setData] = useState(InitData);
  const [lineData, setLineData] = useState(JSON.parse(InitData));
 
  const changeData = () => {
    setLineData(JSON.parse(data))
  }

  return (
    <div>
        <div style={{display: 'flex', padding: '10px 0px', justifyContent: 'center'}}>
            <h2>Line Chart</h2>
        </div>
        <div style={{display: 'flex', marginBottom: '20px', justifyContent: 'center'}}>
            <Button variant="contained" onClick={changeData}>Update Line Chart</Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
            <textarea id="tbPie" name="tbPie" rows={20} cols={30} value={data} onChange={(e) => setData(e.target.value)} />
            <LineChart width={1000} height={600} data={lineData} />
        </div>
    </div>
  )
}

export default LineChartContainer;