import React,{useState} from 'react';
import { Box, Typography, Button,useMediaQuery, Menu, MenuItem, IconButton, Divider,MenuList   } from '@mui/material';
import styled from 'styled-components';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import FlightIcon from '@mui/icons-material/Flight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
const Card = styled(Box)`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: space-between;
  background-color: #122128;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const Cards = styled(Box)`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: space-between;
  background-color: #122128;
  padding:12px;
  border-radius: 14px;
  color:#fff
`;
const QuantityBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-left:${({ isMobile }) => (isMobile ? '16px' : '0')};
  margin-top: ${({ isMobile }) => (isMobile ? '10px' : '0')};
`;
const MobileContainer = styled(Box)`
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  justify-content: start;
  
`;
const Section = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;

const ProfileCard = () => {
    const [quantity, setQuantity] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 0));
  return (
    <Card isMobile={isMobile}>
      <Typography variant="h6" ><LaptopIcon style={{fontSize:"20px", color:"#4db6ac",marginRight: "8px" }}/> Asus Vivobook 14/15 Series which has AMDR graphics.</Typography>
      {!isMobile && <Typography marginRight={8}>48H</Typography>}
      <QuantityBox isMobile={isMobile}>
        <Button size='small' variant="outline" onClick={handleDecrease}>-</Button>
       {quantity}
        <Button size='small' variant="outline" onClick={handleIncrease}>+</Button>
    </QuantityBox>
    {isMobile ? (
        <>
        <MobileContainer isMobile={isMobile}>
        <div>
        <Typography variant="h6" marginRight={3}>Delivery </Typography>
        <Typography>48H</Typography>
        </div>
        <div > 
          <Typography variant="h6" >Price</Typography>
          <Typography >RS 99875  <Button ><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography> 
          
        </div>
        
        </MobileContainer>
        </>
      ) : (
        <Typography>RS 99875 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button> </Typography>
      )}
    </Card>
    
  );
};

const ProfileCard2 = () => {
  const [quantity, setQuantity] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 0));
    return (
      <Card isMobile={isMobile}>
      <Typography variant="h6" marginRight={isMobile ? 0 : 3}><PhoneAndroidIcon style={{fontSize:"20px", color:"#4db6ac",marginRight: "8px" }}/>Samsung S21 FE 5G with snapdragon 888 processor.</Typography>
      {!isMobile && <Typography marginRight={8}>48H</Typography>}
      <QuantityBox isMobile={isMobile}>
        <Button size='small' variant="outline" onClick={handleDecrease}>-</Button>
       {quantity}
        <Button size='small' variant="outline" onClick={handleIncrease}>+</Button>
    </QuantityBox>
    {isMobile ? (
        <>
        <MobileContainer isMobile={isMobile}>
        <div>
        <Typography variant="h6" marginRight={3}>Delivery </Typography>
        <Typography>48H</Typography>
        </div>
        <div> 
          <Typography variant="h6">Price</Typography>
          <Typography>RS 62875<Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography> 
        </div>
       
        </MobileContainer>
        </>
      ) : (
        <Typography>RS 62875 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button> </Typography>
      )}
    </Card>
      
    );
  };

  const ProfileCard3 = () => {
    const [quantity, setQuantity] = useState(0);
      const isMobile = useMediaQuery('(max-width:600px)');
      const handleIncrease = () => setQuantity(prev => prev + 1);
      const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 0));
      return (
        <Card isMobile={isMobile}>
        <Typography variant="h6" marginRight={isMobile ? 0 : 24}><TabletMacIcon style={{fontSize:"20px", color:"#4db6ac",marginRight: "8px" }}/>Ipad pro which have M4 processor </Typography>
        {!isMobile && <Typography marginRight={8}>58H</Typography>}
        <QuantityBox isMobile={isMobile}>
          <Button size='small' variant="outline" onClick={handleDecrease}>-</Button>
         {quantity}
          <Button size='small' variant="outline" onClick={handleIncrease}>+</Button>
      </QuantityBox>
      {isMobile ? (
          <>
          <MobileContainer isMobile={isMobile}>
          <div>
          <Typography variant="h6" marginRight={3}>Delivery </Typography>
          <Typography>58H</Typography>
          </div>
          <div> 
            <Typography variant="h6">Price</Typography>
            <Typography>RS 92879 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography> 
          </div>
         
          </MobileContainer>
          </>
        ) : (
          <Typography>RS 92875 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography>
        )}
      </Card>
        
      );
    };

    const ProfileCard4 = () => {
      const [quantity, setQuantity] = useState(0);
        const isMobile = useMediaQuery('(max-width:600px)');
        const handleIncrease = () => setQuantity(prev => prev + 1);
        const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 0));
        return (
          
          <Card isMobile={isMobile}>
          <Typography variant="h6" ><FlightIcon style={{fontSize:"20px", color:"#4db6ac",marginRight: "8px" }}/>Transporation services going from one place to another.</Typography>
          {!isMobile && <Typography marginRight={8}>48H</Typography>}
          <QuantityBox isMobile={isMobile}>
            <Button size='small' variant="outline" onClick={handleDecrease}>-</Button>
           {quantity}
            <Button size='small' variant="outline" onClick={handleIncrease}>+</Button>
        </QuantityBox>
        {isMobile ? (
            <>
            <MobileContainer isMobile={isMobile}>
            <div>
            <Typography variant="h6" marginRight={3}>Delivery </Typography>
            <Typography>1H</Typography>
            </div>
            <div> 
              <Typography variant="h6">Price</Typography>
              <Typography>RS 10875<Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography> 
            </div>
           
            </MobileContainer>
            </>
          ) : (
            <Typography>RS 10875 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography>
          )}
        </Card>
          
        );
      };

      const ProfileCard5 = () => {
        const [quantity, setQuantity] = useState(0);
          const isMobile = useMediaQuery('(max-width:600px)');
          const handleIncrease = () => setQuantity(prev => prev + 1);
          const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 0));
          return (
            <Card isMobile={isMobile}>
            <Typography variant="h6" marginRight={isMobile ? 0 : 3}><DesktopMacIcon style={{fontSize:"20px", color:"#4db6ac",marginRight: "8px" }}/>Mac Desktop with high resolutions and performance.</Typography>
            {!isMobile && <Typography marginRight={8}>48H</Typography>}
            <QuantityBox isMobile={isMobile}>
              <Button size='small' variant="outline" onClick={handleDecrease}>-</Button>
             {quantity}
              <Button size='small' variant="outline" onClick={handleIncrease}>+</Button>
          </QuantityBox>
          {isMobile ? (
              <>
              <MobileContainer isMobile={isMobile}>
              <div>
              <Typography variant="h6" marginRight={3}>Delivery </Typography>
              <Typography>48H</Typography>
              </div>
              <div> 
                <Typography variant="h6">Price</Typography>
                <Typography>RS 78875<Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography> 
              </div>
             
              </MobileContainer>
              </>
            ) : (
              <Typography>RS 78875 <Button><ShoppingCartIcon style={{color:"#4db6ac"}}/></Button></Typography>
            )}
          </Card>
            
          );
        };
       
        const ProfileCard6 = () => {
          const [anchorEl, setAnchorEl] = useState(null);
          const [openMenu, setOpenMenu] = useState(null);
          const [selectedItems, setSelectedItems] = useState({
            Server: 'PC',
            Game: 'pubg',
            Item: 'laptop',
          });
          const isMobile = useMediaQuery('(max-width:600px)');
          
          const menuItems = {
            Server: ['PC', 'Mobile', 'Ipad'],
            Game: ['Pubg', 'COD', 'Free-fire'],
            Item: ['Laptop', 'Computer', 'Mobile', 'Ipad'],
          };
        
          const handleMenuOpen = (event, menu) => {
            setAnchorEl(event.currentTarget);
            setOpenMenu(menu);
          };
        
          const handleMenuClose = () => {
            setAnchorEl(null);
            setOpenMenu(null);
          };
        
          const handleMenuItemClick = (menu, item) => {
            setSelectedItems(prevState => ({
              ...prevState,
              [menu]: item,
            }));
            handleMenuClose();
          };
        
          return (
            <Cards isMobile={isMobile}>
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                {!isMobile ? (
                  ['Server', 'Game', 'Item'].map((menu, index) => (
                    <React.Fragment key={menu}>
                      {index > 0 && <Divider orientation="vertical" flexItem />}
                      <Box display="flex" flexDirection="column">
                        <IconButton onClick={(event) => handleMenuOpen(event, menu)}>
                          <Typography sx={{ color: 'white' }}>{menu}</Typography>
                          {openMenu === menu ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
                        </IconButton>
                        <Typography sx={{ color: 'white', alignItems: 'start', marginLeft: '10px' }}>{selectedItems[menu]}</Typography>
                        <Menu anchorEl={anchorEl} open={openMenu === menu} onClose={handleMenuClose}>
                          <MenuList>
                            {menuItems[menu].map((item) => (
                              <MenuItem
                                key={item}
                                onClick={() => handleMenuItemClick(menu, item)}
                                sx={{ mb: 1 }}
                              >
                                {item}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      </Box>
                    </React.Fragment>
                  ))
                ) : (
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={(event) => handleMenuOpen(event, 'MobileMenu')}>
                      <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={openMenu === 'MobileMenu'} onClose={handleMenuClose}>
                      {['Server', 'Game', 'Item'].map((menu) => (
                        <React.Fragment key={menu}>
                          <Typography sx={{ color: 'Green',fontSize:"20px", fontWeight:600,marginLeft:"4px" }}>{menu}</Typography>
                          <MenuList>
                            {menuItems[menu].map((item) => (
                              <MenuItem
                                key={item}
                                onClick={() => handleMenuItemClick(menu, item)}
                                sx={{ mb: 1 }}
                              >
                                {item}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </React.Fragment>
                      ))}
                    </Menu>
                  </Box>
                )}
              </Box>
            </Cards>
          );
        };
export { ProfileCard, ProfileCard2,ProfileCard3,ProfileCard4,ProfileCard5,ProfileCard6 };
