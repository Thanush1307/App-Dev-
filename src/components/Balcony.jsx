import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Paper } from '@mui/material';


const Balcony = () => {
  const [open, setOpen] = useState(false);
  const [book, setBookOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    whatsappUpdates: false,
  });

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let i;
      let slides = document.getElementsByClassName('mySlides');
     
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
     
      slides[slideIndex - 1].style.display = 'block';
    
      setTimeout(showSlides, 2000); 
    };
    showSlides();
  }, []);

  const handleOpen = (image) => {
    setImageSrc(image);
    setOpen(true);
  };

  const handleOpen1 = (image) => {
    setImageSrc(image);
    setBookOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloser = () => {
    setBookOpen(false);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      whatsappUpdates: e.target.checked,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };
  const cardData = [
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-swing-and-hanging-lights/balcony-design.jpg",
      title: "Sky Terrace",
      description: "A spacious, open-air area perfect for enjoying stunning views, relaxation, and fresh air."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-tropical-wallpaper-and-glass-railing/glass-balcony-design.jpg",
      title: "Sun Deck",
      description: "A bright, sunlit space ideal for lounging, sunbathing, and enjoying the outdoors."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-iron-railing-and-white-armchair/modern-iron-railing-design-for-balcony.jpg.transform/bh-gallery-listing/image.webp",
      title: "Vista Veranda",
      description: "A charming outdoor space offering panoramic views, relaxation, and a touch of elegance."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-swing-and-hanging-lights/balcony-design.jpg",
      title: "Chill Out Zone",
      description: " A relaxed, comfortable space designed for unwinding, socializing, and enjoying leisure time."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-outdoor-wall-plants/modern-style-glass-railing-design-for-balcony-and-wall-mounted-planters.jpg",
      title: "Rooftop Retreat",
      description: "An elevated, tranquil space perfect for relaxation, scenic views, and enjoying fresh air."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-a-white-armchair-and-round-green-carpet/house-balcony-design.jpg",
      title: "Sunset Patio",
      description: "A serene outdoor area designed to enjoy breathtaking sunsets, relaxation, and peaceful moments."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-design-with-round-swing-chair-and-planters/modern-balcony-grill-design.jpg",
      title: "Elevated Haven",
      description: "A lofty, serene space offering panoramic views, relaxation, and a tranquil escape."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-vertical-garden-planter/glass-railing-design-for-balcony-with-vertical-garden-planter.jpg",
      title: "Open-Air Lounge",
      description: "A spacious, breezy area designed for relaxation, socializing, and enjoying the outdoors."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-design-with-swing-and-decorative-designer-tiles/modern-balcony-tiles-design.jpg",
      title: "Breeze Balcony",
      description: "A refreshing, airy space perfect for relaxing, enjoying the outdoors, and feeling the breeze."
    }
  ];

  return (
    <div className='living'>

<br></br>

<center>
        <h1>Balcony Designs</h1>

  <Paper style={{width:"1100px",backgroundColor:"#E0FBE2"}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-outdoor-wall-plants/modern-style-glass-railing-design-for-balcony-and-wall-mounted-planters.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-design-with-round-swing-chair-and-planters/modern-balcony-grill-design.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-vertical-garden-planter/glass-railing-design-for-balcony-with-vertical-garden-planter.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-design-with-swing-and-decorative-designer-tiles/modern-balcony-tiles-design.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
        </div>
      </center>
      <br />
      {/* <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}

  </Paper>
      </center>



      <div className="projects-container">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="card"
              sx={{
                backgroundColor: '#E0FBE2',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                width: '30%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(card.image)} style={{color:"#285430",fontSize:"15px"}}><b>Learn More</b></Button>
              </CardActions>
              <div className='leo'>
                <Button>
                  <b style={{color:"#285430",fontSize:"15px"}} onClick={() => handleOpen1(card.image)}>Book For Free Consultant</b>
                </Button>
                &emsp;&emsp;&emsp;&emsp;
                <a href="/quote" target="_blank" style={{color:"#285430"}}><Button style={{color:"#285430"}}>
                  <b>
                    Get Quote
                    </b>
                    </Button> </a>
              </div>
            </Card>
          ))}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <img src={imageSrc} alt="Detailed view" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Modal>

        <Modal
          open={book}
          onClose={handleCloser}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleCloser}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img src={imageSrc} alt="Consultant view" style={{ width: '100%', height: '100%' }} />
              <form onSubmit={handleFormSubmit} style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '1100px', 
                transform: 'translate(-50%, -50%)',
                width: '400px', 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                padding: '20px', 
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6" component="h2">
                  Talk to a designer
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Property Name"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleInputChange}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.whatsappUpdates}
                      onChange={handleCheckboxChange}
                      name="whatsappUpdates"
                    />
                  }
                  label="Get updates on WhatsApp"
                />
                <Button type="submit" variant="contained" style={{backgroundColor:"#ac844d",color:"white"}}>
                  Submit
                </Button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
};

export default Balcony;