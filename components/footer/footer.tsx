
'use client'

import React from "react";

const Footer = () => {
    return (
      <div style={{width:"100%", padding: "100px 0px", backgroundColor: "#0073a6", color:'#FFFFFF'}}>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
          <span>This website is developed with React and Next.JS</span>
        </div>           
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
          <span>© {(new Date()).getFullYear()} Copyright by Feng Wang</span>
        </div>                   
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <span>Email: globefeng@yahoo.com</span>
        </div> 
      </div>
    );
}

export default Footer;

