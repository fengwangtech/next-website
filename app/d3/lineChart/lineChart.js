
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ width, height, data }) => {
    const ref = useRef();

    useEffect(() => {
      const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      // .style("border", "1px solid black")
      .style("background-color", "white")

      svg.select('g').remove();

      var chartWidth = width - 180;
      var chartHeight = height - 80;

      const chart = svg.append("g").attr("transform", "translate(90, 20)");

      var yScale = d3.scaleLinear().domain([0, d3.max(data, function(d) { return +d[1];} )]).range([chartHeight, 0]);
      var yAxis = d3.axisLeft().scale(yScale)

      var yAxisGroup = chart.append('g').attr('transform', `translate(0, 0)`);
      yAxisGroup.call(yAxis).selectAll("text").style("font-size", "14px");

      var xScale = d3.scaleLinear().domain([0, d3.max(data, function(d) { return +d[0];} )]).range([0, chartWidth]);
      var xAxis = d3.axisBottom().scale(xScale)

      var xAxisGroup = chart.append('g').attr('transform', `translate(0, ${chartHeight})`);
      xAxisGroup.call(xAxis).selectAll("text").style("font-size", "14px");

      // X label
      chart.append('g').append('text')
      .attr('x', chartWidth/2)
      .attr('y', chartHeight + 40)
      .attr('text-anchor', 'middle')
      .style('font-size', '14px')
      .text('X Axis');
      
      // Y label
      chart.append('g').attr("transform", `translate(-40, ${chartHeight / 2})`).append('text')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Y Axis')
      .style("font-size", "14px");

      var line = d3.line()
      .x(function(d) { return xScale(d[0]); }) 
      .y(function(d) { return yScale(d[1]); }) 
      .curve(d3.curveLinear)
      
      chart.append('g').append("path")
      .datum(data) 
      .attr("class", "line")
      .attr("d", line)
      .style("fill", "none")
      .style("stroke", "steelblue")
      .style("stroke-width", "2");

      chart.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", '4px')
        .style("fill", "#CC0000");
    
    }, [width, height, data]);

    return (
        <div style={{marginTop: '20px'}}>
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default LineChart;