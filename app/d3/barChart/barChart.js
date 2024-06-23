
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ width, height, data, xName, yName }) => {
    const ref = useRef();

    const margin = 80;

    useEffect(() => {
        const svg = d3.select(ref.current)
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
        .style("background-color", "aliceblue")

        svg.select('g').remove();

        const chartWidth = width - 2 * margin;
        const chartHeight = height - 2 * margin;
            
        const chart = svg.append('g')
          .attr('transform', `translate(${margin}, ${margin})`);
    
        const xScale = d3.scaleBand()
          .range([0, chartWidth])
          .domain(data.map((d) => d[xName]))
          .padding(0.4)
        
        const yScale = d3.scaleLinear()
          .range([chartHeight, 0])
          .domain([0, 100]);   
    
        chart.append('g')
          .attr('transform', `translate(0, ${chartHeight})`)
          .call(d3.axisBottom(xScale));
    
        chart.append('g')
          .call(d3.axisLeft(yScale));
        
        const makeYLines = () => d3.axisLeft().scale(yScale)

        chart.append('g')
          .call(makeYLines().tickSize(-chartWidth, 0, 0).tickFormat(''))

        const barGroups = chart.selectAll()
          .data(data)

        const enterBarGroups = barGroups.enter()
        const exitBarGroups = barGroups.exit()
          
        enterBarGroups
          .append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => xScale(d[xName]))
          .attr('width', xScale.bandwidth())  
          .attr('y', (g) => chartHeight)
          .attr('height', '0')
          .on('mouseenter', function (actual, i) {   
            d3.select(this)
              .transition()
              .duration(300)
              .attr('opacity', 0.6)
              .attr('fill', 'red')
          })
          .on('mouseleave', function () {
    
            d3.select(this)
              .transition()
              .duration(300)
              .attr('opacity', 1)
              .attr('fill', '#80cbc4')
          })
          .transition().duration(1000)
          .attr('y', (d) => yScale(d[yName]))
          .attr('height', (d) => chartHeight - yScale(d[yName]))

        enterBarGroups
          .append('text')
          .attr('class', 'value')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', chartHeight)
          .attr('text-anchor', 'middle')
          .text((a) => `${a.value}%`)
          .transition().duration(1000)
          .attr('y', (d) => yScale(d[yName]) + 30)

        exitBarGroups
          .remove()

    }, [width, height, data, xName, yName]);

    return (
        <div style={{marginTop: '20px'}}>
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default BarChart;