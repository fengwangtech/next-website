'use client'

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import BarChart from './barChart';
import "./page.css";

var i = 0;

const sampleData = [
  [
  {
    language: 'Rust',
    value: 78.9,
    color: '#000000'
  },
  {
    language: 'Kotlin',
    value: 75.1,
    color: '#00a2ee'
  },
  {
    language: 'Python',
    value: 68.0,
    color: '#fbcb39'
  },
  {
    language: 'TypeScript',
    value: 67.0,
    color: '#007bc8'
  },
  {
    language: 'Go',
    value: 65.6,
    color: '#65cedb'
  },
  {
    language: 'Swift',
    value: 65.1,
    color: '#ff6e52'
  },
  {
    language: 'JavaScript',
    value: 61.9,
    color: '#f9de3f'
  },
  {
    language: 'C#',
    value: 60.4,
    color: '#5d2f8e'
  },
  {
    language: 'F#',
    value: 59.6,
    color: '#008fc9'
  },
  {
    language: 'Clojure',
    value: 59.6,
    color: '#507dca'
  }
  ],
  [
    {
      language: 'Go',
      value: 65.6,
      color: '#65cedb'
    },
    {
      language: 'Swift',
      value: 65.1,
      color: '#ff6e52'
    },
    {
      language: 'JavaScript',
      value: 61.9,
      color: '#f9de3f'
    },
    {
      language: 'C#',
      value: 60.4,
      color: '#5d2f8e'
    },
    {
      language: 'Rust',
      value: 78.9,
      color: '#000000'
    },
    {
      language: 'Kotlin',
      value: 75.1,
      color: '#00a2ee'
    },
    {
      language: 'Python',
      value: 68.0,
      color: '#fbcb39'
    },
    {
      language: 'TypeScript',
      value: 67.0,
      color: '#007bc8'
    },
    {
      language: 'F#',
      value: 59.6,
      color: '#008fc9'
    },
    {
      language: 'Clojure',
      value: 59.6,
      color: '#507dca'
    }
  ],  
];

const BarChartContainer = (props) => {
  const [data, setData] = useState(sampleData[0]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
      setData(sampleData[i++]);
      if(i === sampleData.length) i = 0;
  }

  return (
    <div>
        <div style={{display: 'flex', padding: '0px 0px 20px 0px', justifyContent: 'center', minHeight: '600px', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Bar Chart</h2>
            <Button variant="contained" onClick={changeData}>Update Bar Chart</Button>      
            <BarChart width={1000} height={600} data={data} xName="language" yName="value" />
        </div>
    </div>
  )
}

export default BarChartContainer;