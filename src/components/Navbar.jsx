import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, IconButton, MenuItem, Menu } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { MdHomeRepairService, MdContactEmergency, MdMeetingRoom, MdOutlineMapsHomeWork } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { GrProjects, GrLogin } from "react-icons/gr";
import { SiGnuprivacyguard } from "react-icons/si";
import { GiFloorHatch, GiClosedDoors, GiCeilingLight } from "react-icons/gi";
import { SiChatbot } from "react-icons/si";
const Navbar = () => {
  const [anchorElExterior, setAnchorElExterior] = useState(null);
  const [anchorElInterior, setAnchorElInterior] = useState(null);
  const [anchorElFlooring, setAnchorEl] = useState(null);
  const [anchorElDoors, setAnchorElDoors] = useState(null);
  const [anchorElLight, setAnchorElLight] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorElAI, setAnchorElAI] = useState(null);
  const navigate = useNavigate();

  const handleExteriorClick = (event) => {
    setAnchorElExterior(event.currentTarget);
  };

  const handleInteriorClick = (event) => {
    setAnchorElInterior(event.currentTarget);
  };

  const handleFlooringClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDoorsClick = (event) => {
    setAnchorElDoors(event.currentTarget);
  };

  const handleLightClick = (event) => {
    setAnchorElLight(event.currentTarget);
  };

  const handleClickAI = (event) => { 
    setAnchorElAI(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElExterior(null);
    setAnchorElInterior(null);
    setAnchorEl(null);
    setAnchorElDoors(null);
    setAnchorElLight(null);
    setAnchorElAI(null)
  };

  const handleMenuClose = () => { // Define the handler function for ChatBot menu closing
    setAnchorElAI(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchMap = {
      "home": "/",
      "services": "/services",
      "projects": "/projects",
      "contact": "/contact",
      "login": "/login",
      "signup": "/signup",
      "google": "/google",
      "living room": "/livingroom",
      "bedroom": "/bedroom",
      "kitchen": "/kitchen",
      "bathroom": "/bathroom",
      "pooja room": "/poojaroom",
      "balcony": "/balcony",
      "dining room": "/diningroom",
      "wardrobe": "/wardrobe",
      "flooring": "/flooring",
      "office": "/office",
      "crockery": "/crockery",
      "model": "/model",
      "cottage": "/cottage",
      "brick facade": "/brickfacade",
      "beach house": "/beachhouse",
      "traditional": "/traditional",
      "simple": "/simple",
      "farmhouse": "/farmhouse",
      "trend": "/trend",
      "chettinad": "/chettinad",
      "craftsman": "/craftsman",
      "granites": "/granites",
      "marble": "/marble",
      "ceramics": "/ceramics",
      "wooden": "/wooden",
      "pvc door": "/pvcdoor",
      "glass door": "/glassdoor",
      "sliding door": "/slidingdoor",
      "aluminium door": "/aluminiumdoor",
      "steel door": "/steeldoor",
      "rolling": "/rolling",
      "pendant": "/pendant",
      "ambient": "/ambient",
      "ceiling": "/cieling",
      "quote": "/quote",
      "playwood": "/playwood",
      "fixed light": "/fixedlight",
    };
    const path = searchMap[searchQuery.toLowerCase()];
    if (path) {
      navigate(path);
    } else {
      alert('Page not found');
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#285430', height: "60px" }}>
        <Toolbar style={{ minHeight: '70px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginRight: '50px', fontSize: "30px" }}>
              <Link to='/'>
                <Button style={{ color: "white" }}>
                  <FaHome style={{ marginRight: '10px', height: '50px', width: '50px' }} />
                </Button>
              </Link>
              <b>Comfort Home</b>
            </Typography>
            <form onSubmit={handleSearch}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton size="small" type="submit" style={{ backgroundColor: 'black' }} aria-label="search">
                        <FaSearch style={{ color: 'white' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { backgroundColor: 'white', borderRadius: '50px', width: '150px', height: '40px' },
                }}
              />
            </form>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '10px', fontSize: "17px" }}><b><TiHome style={{ marginRight: "7px", height: '25px', width: '25px' }} />Home</b></Button>
            <Button color="inherit" component={Link} to="/services" style={{ marginRight: '10px', fontSize: "17px" }}><b><MdHomeRepairService style={{ marginRight: "7px", height: '25px', width: '25px' }} />Services</b></Button>
            <Button color="inherit" component={Link} to="/projects" style={{ marginRight: '10px', fontSize: "17px" }}><b> <GrProjects style={{ marginRight: "7px", height: '21px', width: '21px' }} /> Projects</b></Button>
            <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '10px', fontSize: "17px" }}><b><MdContactEmergency style={{ marginRight: "7px", height: '21px', width: '21px' }} />Contact</b></Button>
            <Button color="inherit" component={Link} to="/login" style={{ marginRight: '10px', fontSize: "17px" }}><b><GrLogin style={{ marginRight: "7px", height: '21px', width: '21px' }} />Login</b></Button>
            <Button color="inherit" component={Link} to="/signup" style={{ marginRight: '20px', fontSize: "17px" }}><b><SiGnuprivacyguard style={{ marginRight: "7px", height: '21px', width: '21px' }} />Signup</b></Button>
            <Button color="inherit" component={Link} to="/google" style={{ marginRight: '20px', fontSize: "17px" }}><b><FaMapMarkerAlt style={{ marginRight: "7px", height: '21px', width: '21px' }} /> Google</b></Button>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="static" style={{ backgroundColor: '#285430', height: "50px" }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 9px' }}>
          <div>
            <Button color="inherit" onClick={handleLightClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiCeilingLight style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Light Designs &emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElLight}
              keepMounted
              open={Boolean(anchorElLight)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#A2CA71", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/pendant">Pendant</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/ambient">Ambient</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/cieling">Ceiling</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/fixedlight">Fixed Light</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleDoorsClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiClosedDoors style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Doors &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElDoors}
              keepMounted
              open={Boolean(anchorElDoors)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#A2CA71", color: "white" } }}
            >
               <MenuItem onClick={handleClose} component={Link} to="/wooden">Wooden</MenuItem>
               <MenuItem onClick={handleClose} component={Link} to="/playwood">Playwood</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/pvcdoor">PVC Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/glassdoor">Glass Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/slidingdoor">Sliding Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/aluminiumdoor">Aluminium Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/steeldoor">Steel Doors</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleFlooringClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiFloorHatch style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Flooring &emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElFlooring}
              keepMounted
              open={Boolean(anchorElFlooring)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#A2CA71", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/granites">Granites</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/marble">Marble</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/ceramics">Ceramics</MenuItem>
             
            </Menu>

            <Button color="inherit" onClick={handleExteriorClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <MdOutlineMapsHomeWork style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Exterior Designs &emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElExterior}
              keepMounted
              open={Boolean(anchorElExterior)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#A2CA71", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/cottage">Cottage</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/brickfacade">Brick Facade</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/beachhouse">Beach House</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/traditional">Traditional</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/simple">Simple</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/farmhouse">Farmhouse</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/trend">Trend</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/chettinad">Chettinad</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/craftsman">Craftsman</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/model">Model Homes</MenuItem>

            </Menu>

            <Button color="inherit" onClick={handleInteriorClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <MdMeetingRoom style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Interior Designs &emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElInterior}
              keepMounted
              open={Boolean(anchorElInterior)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#A2CA71", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/livingroom">Living Room</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/bedroom">Bedroom</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/kitchen">Kitchen</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/bathroom">Bathroom</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/poojaroom">Pooja Room</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/balcony">Balcony</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/diningroom">Dining Room</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/wardrobe">Wardrobe</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/office">Office</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/crockery">Crockery</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/flooring">Floorings</MenuItem>
            </Menu>

           

            <Button
              color="inherit"
              onClick={handleClickAI}
              style={{ marginRight: '20px', fontSize: "17px" }}
            >
              <b><SiChatbot />&ensp;
              ChatBot &emsp;&emsp; </b>
            </Button>
            <Menu
              anchorEl={anchorElAI}
              keepMounted
              open={Boolean(anchorElAI)}
              onClose={handleMenuClose}
              PaperProps={{ style: { backgroundColor: "#ac844d", color: "white" } }}
            >
              <MenuItem onClick={handleMenuClose} style={{ padding: '0' }}>
                <iframe
                  allow="microphone;"
                  width="450"
                  height="430"
                  src="https://console.dialogflow.com/api-client/demo/embedded/c2498de5-93d4-4dc1-a118-a353e5069cb8"
                ></iframe>
              </MenuItem>
            </Menu>


          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;