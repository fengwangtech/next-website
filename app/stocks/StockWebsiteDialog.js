import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { RelatedLinks, GetLinkUrl } from './webSiteLinks/index';

const StockWebsiteDialog = ({onClose, name}) => {
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <Dialog maxWidth={'md'} fullWidth={true} open={name !== null}>
      <DialogTitle id="max-width-dialog-title" 
        style={{ borderBottom:'1px solid #DDDDDD', padding: '6px 16px', backgroundColor: '#F5F5F5' }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontSize: '18px', fontWeight:'bold'}}>{name}</div>
          <Button style={{ width: '20px', height: '20px'}} onClick={() => onClose()} />
        </div>
      </DialogTitle>
        <DialogContent dividers>
          <div style={{padding: '20px 40px'}}>
            <RelatedLinks currentLink={currentLink} 
              onLinkClick={(linkType) => {
                setCurrentLink(linkType)
              }}
              onLinkDbClick={(linkType) => { 
                setCurrentLink(linkType); 
                window.open(GetLinkUrl(linkType, `${name}`), "_Blank");
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}
  
export default StockWebsiteDialog;
