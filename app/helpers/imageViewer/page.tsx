'use client'

import React, { useState } from "react";
 
function App() {
    const [file, setFile] = useState<string>("");
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div style={{ width: '80%', margin: 'auto'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '10px'}}>
            <span style={{fontSize: '16px'}}>Load and view image:</span>
            <input type="file" onChange={handleChange} />
          </div>
          <div>
            <img style={{width: '100%', height: 'auto'}} src={file} />
          </div>
        </div>
    );
}
 
export default App;