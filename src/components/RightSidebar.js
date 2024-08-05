import React, { useState, useEffect, useRef } from 'react';
import { List, ListItem, ListItemIcon,Box, ListItemText, IconButton, Card,Avatar, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import profile from '../assets/pic.jpg';
const SidebarContainer = styled(motion.div)`
  width: 250px;
  background-color: #122128;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  position: fixed;
  right: 0;
  overflow-y: auto;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const ProfileAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  margin-bottom: 140px;
`;

const StyledCard = styled(Card)`
  margin: 28px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const StyledCards = styled(Card)`

    margin:5px;
    width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const RightSidebar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const sidebarRef = useRef();

  const handleToggle = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const sidebarContent = (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
          <Box sx={{ textAlign: 'center' }}>
            <ProfileAvatar alt="Profile Picture" src={profile} sx={{ width: 70, height: 70, margin: '0 auto' }} />
            <Typography variant="h6" sx={{ mt: 2,color:"white" }}>
              Saurabh Shah
            </Typography>
            <Typography variant="body2" sx={{ mb: 2,color:"white" }}>
              since 2024
            </Typography>
          </Box>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* <StyledCard sx={{background: 'rgba(255, 255, 255, 0.2)', height:"100px",borderRadius:"12px"}}>
        <CardContent>
          <Typography variant="h6" style={{ color: '#000' }}>Section 1</Typography>
        </CardContent>
      </StyledCard > */}
      <Typography sx={{marginTop:"40px"}}>
       <PieChartIcon/> Your Image Statstics
      <StyledCard sx={{background: 'rgba(255, 255, 255, 0.2)', height:"100px",borderRadius:"12px",marginTop:"10px"}}>
        <StyledCards sx={{background: "white", height:"36px",borderRadius:"12px"}}>
        <img src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </StyledCards>
        <StyledCards sx={{background: "white", height:"36px",borderRadius:"12px"}}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/524/344/small_2x/ai-generated-gamer-in-his-room-sketch-generative-ai-photo.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </StyledCards>
        <StyledCards sx={{background: "white", height:"36px",borderRadius:"12px"}}>
        <img src="https://parade.com/.image/t_share/MTk4MTMxODkxOTc3NTkzOTI4/coraline.webp" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </StyledCards>
        <StyledCards sx={{background: "white", height:"36px",borderRadius:"12px"}}>
        <img src="https://www.thenews.com.pk/assets/uploads/updates/2023-03-13/1049550_727962_Untitled-1_updates.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </StyledCards>
      </StyledCard>
      </Typography>
      <Typography sx={{marginTop:"40px"}}>
        Guides & Tips
      <StyledCard sx={{background: 'rgba(255, 255, 255, 0.2)',borderRadius:"12px",marginTop:"10px"}}>
        <CardContent>
        <List>
              <ListItem>
                <ListItemText primary=". Skills and Leveling" style={{ color: '#fff',marginLeft:"-14px",marginTop:"-10px"}} />
              </ListItem>
              <ListItem>
                <ListItemText primary=". Tips and Tricks" style={{ color: '#fff',marginLeft:"-14px",marginTop:"-10px"}} />
              </ListItem>
              <ListItem>
                <ListItemText primary=". Advance Features" style={{ color: '#fff',marginLeft:"-14px",marginTop:"-10px"}} />
              </ListItem>
            </List>
        </CardContent>
      </StyledCard>
      </Typography>
      
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={handleToggle} style={{ position: 'fixed', right: 20, top: 20, color: '#fff', zIndex: 1000 }}>
            <MenuIcon />
          </IconButton>
          {open && <Overlay onClick={handleToggle} />}
          <SidebarContainer
            ref={sidebarRef}
            initial={{ x: '100%' }}
            animate={{ x: open ? 0 : '100%' }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 1000 }}
          >
            {sidebarContent}
          </SidebarContainer>
        </>
      ) : (
        <SidebarContainer
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sidebarContent}
        </SidebarContainer>
      )}
    </>
  );
};

export default RightSidebar;
