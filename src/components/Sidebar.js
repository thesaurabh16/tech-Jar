import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AnimationRoundedIcon from '@mui/icons-material/AnimationRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import CompassCalibrationRoundedIcon from '@mui/icons-material/CompassCalibrationRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
const SidebarContainer = styled(motion.div)`
  width: 60px;
  background-color: #122128;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 20px; 
    color: #4db6ac;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
  margin-top:180px
`;

const Sidebar = () => {
  return (
    <SidebarContainer
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <List>
        <ListItem button>
        <StyledListItemIcon>
            <AccountBoxIcon />
            <HomeIcon />
            <AnimationRoundedIcon />
            <CircleNotificationsRoundedIcon />
            <CompassCalibrationRoundedIcon />
          </StyledListItemIcon>
        </ListItem>
        <Spacer />
        <ListItem >
          <StyledListItemIcon>
            <SettingsIcon />
            <NotificationsIcon />
            <HelpIcon />
            <InfoIcon />
            <ContactMailIcon />
          </StyledListItemIcon>
        </ListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
