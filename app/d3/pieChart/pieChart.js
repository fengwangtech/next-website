
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ width, height, data }) => {
    const ref = useRef();

    const colors = data.map((item) => item.color)

    useEffect(() => {
        const svg = d3.select(ref.current)
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "white")

        var ordScale = d3.scaleOrdinal()
        .domain(data)
        .range(colors);

        var pie = d3.pie().value(function(d) { 
            return d.value; 
        });

        svg.select('g').remove();
        var svgGroup = svg.append('g').attr("transform", `translate(${width / 2}, ${height / 2})`);

        var arc = svgGroup.selectAll("arc")
                .data(pie(data))
                .enter();

        var path = d3.arc()
            .outerRadius(150)
            .innerRadius(0);

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return ordScale(d.data.name); })
            .style("stroke", "white")
            .style("stroke-width", "2px");

        var label = d3.arc()
            .outerRadius(150)
            .innerRadius(50);
  
        arc.append("text")
        .attr("transform", function(d) { 
                return "translate(" + label.centroid(d) + ")"; 
        })
        .text(function(d) { return d.data.name; })
        .attr('text-anchor', 'middle')
        .style("font-family", "arial")
        .style("font-size", 15);
    
    }, [width, height, data, colors]);

    return (
        <div style={{marginTop: '20px'}}>
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default BarChart;