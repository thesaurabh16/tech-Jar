import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Divider,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import {
  ProfileCard,
  ProfileCard2,
  ProfileCard3,
  ProfileCard4,
  ProfileCard5,
  ProfileCard6,
} from "./ProfileCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/nature-mountain-displays-radiant-colors-sunset-generative-ai_188544-12862.jpg?w=1060&t=st=1722684700~exp=1722685300~hmac=5c5eabda3f13867324a6eaedbc9bb2e2e7e55178c723cc3fb4a3f8b4e13f827f");
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const MainContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const ContentGrid = styled(Grid)`
  padding: 10px;
`;

const Section = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  padding: 10px;
  gap: 4px;
  align-items: center;
  ${(props) =>
    props.isMobile
      ? "justify-content: space-between;"
      : "justify-content: center;"}
`;

const SortContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-left: ${(props) => (props.isMobile ? "0px" : "100px")};
`;

const buttons = [
  "Weapons",
  "Nova Prime",
  "Secondary",
  "Loki Prime",
  "Primary",
  "Nezha Prime",
  "Miee",
];

const menuButtons = ["Rating", "Price", "Item", "Delivery"];
const ScrollableCardContent = styled(CardContent)`
  max-height: 400px; 
  overflow-y: auto;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #14192d;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1f1f2e;
  }

  scrollbar-color: #14192d #1f1f2e;
  scrollbar-width: thin;
`;
const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Rating");

  const open = Boolean(anchorEl);
  const menuOpen = Boolean(menuAnchorEl);

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuAnchorEl(null);
  };

  const handleMenuItemClick = (sortOption) => {
    setSelectedSort(sortOption);
    handleClose();
  };

  return (
    <div className="p-0">
      <Container>
        <Sidebar />
        <MainContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Topbar />

          <Card
            sx={{
              margin: 2,
              padding: 2,
              background: 'rgba(255, 255, 255, 0.1)' ,
              color: "#fff",
              width:"80%"
            }}
          >
            <ScrollableCardContent>
              <ContentGrid>
                <Grid item xs={12} md={12}>
                  <ProfileCard6 />
                </Grid>
              </ContentGrid>

              <ButtonContainer isMobile={isMobile}>
                {isMobile ? (
                  <>
                    <IconButton
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMenuClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      anchorEl={menuAnchorEl}
                      open={menuOpen}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "menu-button",
                      }}
                    >
                      {buttons.map((buttonText) => (
                        <MenuItem key={buttonText} onClick={handleClose}>
                          {buttonText}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  buttons.map((buttonText) => (
                    <Button
                      key={buttonText}
                      variant="outlined"
                      sx={{
                        borderRadius: "1rem",
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "16px",
                        fontWeight: 300,
                        border: "1px solid #000",
                        textTransform: "lowercase",
                        color: "#fff",
                      }}
                    >
                      {buttonText}
                    </Button>
                  ))
                )}
                <SortContainer isMobile={isMobile} onClick={handleSortClick}>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Sort by:{" "}
                    <span style={{ color: "#fff", fontSize: "18px" }}>
                      {selectedSort}
                    </span>
                  </Typography>
                  {open ? (
                    <ExpandLessIcon style={{ fontSize: "18px" }} />
                  ) : (
                    <ExpandMoreIcon style={{ fontSize: "18px" }} />
                  )}
                </SortContainer>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "sort-button",
                  }}
                >
                  {menuButtons.map((menuButton) => (
                    <MenuItem
                      key={menuButton}
                      onClick={() => handleMenuItemClick(menuButton)}
                      selected={selectedSort === menuButton}
                    >
                      {menuButton}
                    </MenuItem>
                  ))}
                </Menu>
              </ButtonContainer>
              <Divider sx={{ bgcolor: "white", marginBottom: "10px" }} />
              {!isMobile && (
                <Section>
                  <Typography variant="h6" marginRight={50}>
                    Item
                  </Typography>
                  <Typography variant="h6">Delivery</Typography>
                  <Typography variant="h6">Quantity</Typography>
                  <Typography variant="h6" marginRight={10}>
                    Price
                  </Typography>
                </Section>
              )}
              <ContentGrid>
                <Grid item xs={12} md={12}>
                  <ProfileCard />
                  <ProfileCard2 />
                  <ProfileCard3 />
                  <ProfileCard4 />
                  <ProfileCard5 />
                  {/* <StatsCard />
                <GuidesTips /> */}
                </Grid>
              </ContentGrid>
            </ScrollableCardContent>
          </Card>
        </MainContent>
        <RightSidebar />
      </Container>
    </div>
  );
};

export default Dashboard;
