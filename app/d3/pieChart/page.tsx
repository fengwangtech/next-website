'use client'

import React, { useState } from 'react';
import PieChart from './pieChart';
import DonutChart from './donutChart';
import Button from '@mui/material/Button';

const InitData = `
[
  {"name": "Facebook", "value": "5", "color":"#ffd384"},
  {"name": "Microsoft", "value": "10", "color":"#94ebcd"}, 
  {"name": "Google", "value": "20", "color":"#fbaccc"},
  {"name": "Apple", "value": "30", "color":"#d3e0ea"},
  {"name": "Amazon", "value": "50", "color":"#fa7f72"}
]
`;

const BarChartContainer = (props) => {
  const [data, setData] = useState(InitData);
  const [pieData, setPieData] = useState(JSON.parse(InitData));
 
  const changeData = () => {
    setPieData(JSON.parse(data))
  }

  return (
    <div>
        <div style={{display: 'flex', padding: '10px 0px', justifyContent: 'center'}}>
            <h2>Pie Chart</h2>
        </div>
        <div style={{display: 'flex', marginBottom: '20px', justifyContent: 'center'}}>
            <Button variant="contained" onClick={changeData}>Update Pie Chart</Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
          <textarea id="tbPie" name="tbPie" rows={20} cols={60} value={data} onChange={(e) => setData(e.target.value)} />
          {/* <div style={{width: '100px', height: '10px'}}></div>
          <div style={{width: '400px', display: 'flex', flexDirection: 'column'}}> */}
            <PieChart width={360} height={320} data={pieData} />
            <DonutChart width={360} height={320} data={pieData} />
          {/* </div> */}
        </div>
    </div>
  )
}

export default BarChartContainer;