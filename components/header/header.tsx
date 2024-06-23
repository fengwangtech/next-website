
'use client'
import './header.css';

export default function Header() {
  return (
    <div style={{backgroundColor: 'white', height: '110px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', width: '80%', margin: 'auto', padding: '10px 20px 10px 20px', height: '50px'}}>
          <div style={{display: 'flex', justifyContent:'start', alignItems:'center'}}>
              <span style={{marginLeft:'10px', marginRight:"2px", color: '#8B0000', fontFamily: 'Impact', fontSize: '36px'}}>Feng Wang</span>
              <span style={{fontFamily: 'Impact', fontSize: '26px', color: '#666666', marginLeft:'30px', marginTop: '10px'}}>Full Stack Engineer</span>
          </div>
      </div>
      <div style={{backgroundColor: '#0073A6', height: '40px'}}>
        <div style={{display: 'flex', width: '80%', margin: 'auto'}}>
        <div className='mainMenu'>
          <div className='menu'><a href="/">Home</a></div>
          <div className='menu'><a href="/stocks">Stocks</a></div>
          <div className="menu dropdown">
            <span className='downArrow'>D3</span>
            <div className="dropdown-content">
              <a href="/d3/barChart">Bar Chart</a>
              <a href="/d3/lineChart">Line Chart</a>
              <a href="/d3/pieChart">Pie Chart</a>
            </div>
          </div>
          <div className="menu dropdown">
            <span className='downArrow'>Helpers</span>
            <div className="dropdown-content">
              <a href="/helpers/imageViewer">Image viewer</a>
              <a href="/helpers/loadfile">Load file</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
