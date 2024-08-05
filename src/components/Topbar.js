import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Card, CardContent, Typography, Avatar, IconButton, Modal, Paper } from '@mui/material';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMediaQuery } from '@mui/material';
import profile from '../assets/pic.jpg';

const TopbarContainer = styled(AppBar)`
  height: 100px;
  margin: 20px;
  border-radius: 8px;
  margin-top:120px
`;
const TopbarContained = styled(AppBar)`
  height: 70px;
  margin: 20px;
  border-radius: 8px;
  
`;
const StyledToolbar = styled(Toolbar)`
  background-color: #122128;
  border-radius: 12px 12px 0 0;
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 116px;
  margin-left: 300px;
`;

const ProfileAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-bottom: 140px;
`;

const NameCard = styled(Card)`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

const Topbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    {/* <TopbarContained position="static" sx={{ background: 'rgba(255, 255, 255, 0.2)', width: isMobile ? "26%" :"20%",marginLeft:isMobile ? "70%":"78%" }}>
    
    </TopbarContained> */}
      <TopbarContainer position="static" sx={{ background: 'rgba(255, 255, 255, 0.2)', width: isMobile ? "86%" :"80%" }}>
        {isMobile ? (
          <Box sx={{ display: 'flex', justifyContent: 'flex-center', alignItems: 'center', height: '100%' }}>
            <IconButton color="inherit" onClick={handleOpen}>
              <AccountCircleIcon style={{fontSize:"40px"}}/>
            </IconButton>
          </Box>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}>
              <Typography sx={{ marginRight: '20px' }}>Orders </Typography>
              <Typography sx={{ marginRight: '20px' }}>Positive </Typography>
              <Typography sx={{ marginRight: '80px' }}>Negative</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <Typography sx={{ marginRight: '20px' }}>11,553 </Typography>
              <Typography sx={{ marginRight: '30px', fontWeight: '600', color: 'blue' }}>97.5% </Typography>
              <Typography sx={{ marginRight: '112px', fontWeight: '600', color: 'red' }}>2.5%</Typography>
            </Box>
            <Toolbar>
              <ProfileAvatar alt="Profile Picture" src={profile} />
              <Typography sx={{ marginBottom: '140px', marginLeft: '10px', color: '#fff' }}>
                Saurabh Shah <br /> since 2024
              </Typography>
            </Toolbar>
            <StyledToolbar>
              {['30 Days', 'Order 200', 'Sales 100', 'Rate 4.5'].map((name) => (
                <NameCard key={name} sx={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <CardContent>
                    <Typography variant="body2" color="#fff">
                      {name}
                    </Typography>
                  </CardContent>
                </NameCard>
              ))}
            </StyledToolbar>
          </>
        )}
      </TopbarContainer>

      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper sx={{ padding: 2, outline: 'none', minWidth: 300 }}>
          <Box sx={{ textAlign: 'center' }}>
            <ProfileAvatar alt="Profile Picture" src={profile} sx={{ width: 70, height: 70, margin: '0 auto' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Saurabh Shah
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              since 2024
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>Orders</Typography>
            <Typography>11,553</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>Positive</Typography>
            <Typography sx={{ fontWeight: '600', color: 'blue' }}>97.5%</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>Negative</Typography>
            <Typography sx={{ fontWeight: '600', color: 'red' }}>2.5%</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['30 Days', 'Order 200', 'Sales 100', 'Rate 4.5'].map((name) => (
              <NameCard key={name} sx={{ background: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                <CardContent>
                  <Typography variant="body2" color="#000">
                    {name}
                  </Typography>
                </CardContent>
              </NameCard>
            ))}
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default Topbar;
