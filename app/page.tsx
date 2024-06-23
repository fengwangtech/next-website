'use client'
import React from "react";
import Petro3DPhoto from './images/Petro3D.png';
import StoryBookPhoto from './images/StoryBook.png';
import React3DBuilder from './images/React3DBuilder.png';
import Image from 'next/image'
import './page.css';


const ProjectComponent = (props: any) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '600px'}}>
      <div style={{padding: '40px 0px', fontSize: '32px', fontWeight: 'bold'}}>Demo Projects</div>

      <div style={{backgroundColor: '#e2e5e8', color: 'black', width: '100%'}}>
        <div className="StyledContainer">
          <div className="StyledLeft">
            <h2 className="StyledTitle">
              Petro 3D
            </h2>
            <div className="StyledSubTitle">
            An 3D visualization application for Geophysicists and Geologists
            </div>
            <div style={{paddingLeft: '20px'}}>
              <ul style={{lineHeight:'180%', fontSize: '18px'}}>
                <li>High performance 3D rendering with easy navigation</li>
                <li>Easily build project with context menu</li>
                <li>Use JSON file format for the project</li>
                <li>Flex layout help you customize your views</li>
              </ul> 
            </div>

            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
              <div className="StyledButton" onClick={() => window.open("https://petro3d.netlify.app/")}>
                <span>Visit the website</span>
              </div>
            </div>
          </div>
          <div className="StyledRight">
            <Image src={Petro3DPhoto} style={{width: '100%', height: 'auto', border: '1px solid #888'}} alt="" />
          </div>
        </div>
      </div>

      <div style={{backgroundColor: 'white', color: 'black', width: '100%'}}> 
        <div className="StyledContainerReversed">
          <div className="StyledLeft">
            <Image src={React3DBuilder} style={{width: '100%', height: 'auto', border: '1px solid #888'}} alt="" />
          </div>
          <div className="StyledRight">
            <h2 className="StyledTitle">
              3D Scene Builder
            </h2>
            <div className="StyledSubTitle">
              An free tool to build 3D scene quickly 
            </div>
            <div style={{paddingLeft: '20px'}}>
              <ul style={{lineHeight:'180%', fontSize: '18px'}}>
                <li>Build 3d scene with pre built geometries</li>
                <li>Customize geometry in geometry info panel</li>
                <li>Copy and paste geometry reduce your work</li>
                <li>File saved in JSON format</li>
              </ul> 
            </div>

            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                <div className="StyledButton" onClick={() => window.open("https://react-3d-builder.netlify.app")}>
                  <span>Visit the website</span>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div style={{backgroundColor: '#e2e5e8', color: 'black', width: '100%'}}>
        <div className="StyledContainer">
          <div className="StyledLeft">
            <h2 className="StyledTitle">
              StoryBook
            </h2>
            <div className="StyledSubTitle">
              An UI component developing and testing websites
            </div>
            <div style={{paddingLeft: '20px'}}>
              <ul style={{lineHeight:'180%', fontSize: '18px'}}>
                <li>Easy access to all components</li>
                <li>Ease of sharing and reusing components, stories</li>
                <li>Increased chance of catching all edge cases</li>
                <li>Highly improved communication between developers and designers</li>
                <li>Better documentation</li>
              </ul> 
            </div>

            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                <div className="StyledButton" onClick={() => window.open("https://fengwangtech-storybook.netlify.app")}>
                  <span>Visit the website</span>
                </div>
              </div>
          </div>  
          <div className="StyledRight">
            <Image src={StoryBookPhoto} style={{width: '100%', height: 'auto', border: '1px solid #888'}} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;