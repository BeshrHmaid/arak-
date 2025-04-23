import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box, AppBar, Toolbar, IconButton, createTheme, ThemeProvider } from '@mui/material';
import { motion } from 'framer-motion';
import TravelIcon from '@mui/icons-material/FlightTakeoff';
import HouseIcon from '@mui/icons-material/Home';
import LegalIcon from '@mui/icons-material/Gavel';
import CommuteIcon from '@mui/icons-material/Commute';
import WorkIcon from '@mui/icons-material/Work';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as ScrollLink } from 'react-scroll';
import './App.css';

const goldBlackTheme = createTheme({
  palette: {
    mode: 'dark', // Set dark mode
    primary: {
      main: '#121212', // Dark background for AppBar and general background
    },
    secondary: {
      main: '#FFD700', // Gold accent color for highlights
    },
    background: {
      default: '#121212', // Black background for the webpage
      paper: '#1F1F1F', // Dark paper background for cards and other elements
    },
    text: {
      primary: '#E0E0E0', // Light text on a dark background
      secondary: '#FFD700', // Gold text for accents
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  const content = {
    en: {
      welcome: "Welcome to ARAK+ Services",
      intro: "Your gateway to investment and business success in Syria",
      services: [
        { title: "Visas and Travel", icon: <TravelIcon />, description: "Visa facilitation and travel programs." },
        { title: "Accommodation & Transport", icon: <HouseIcon />, description: "Housing solutions and transport services." },
        { title: "Legal Facilitation", icon: <LegalIcon />, description: "Licensing and legal consultation." },
        { title: "Customs Clearance & Shipping", icon: <LocalShippingIcon />, description: "Customs clearance and shipping services." },
        { title: "Staff Recruitment & Training", icon: <WorkIcon />, description: "Provision of skilled staff and specialized training." },
        { title: "Security Services", icon: <SecurityIcon />, description: "Personal and property protection services." },
        { title: "Business Consulting", icon: <CommuteIcon />, description: "Business growth and expansion strategies." },
        { title: "Emergency Response", icon: <PhoneIcon />, description: "Immediate support for existing investments." },
      ],
      sections: [
        {
          title: "Our Vision",
          image: "path/to/vision-image.jpg",
          description: "We aim to be the leading facilitator of business and investment in Syria."
        },
        {
          title: "Our Mission",
          image: "https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg",
          description: "To provide comprehensive services that support businesses in navigating the Syrian market."
        },
        {
          title: "Our Values",
          image: "path/to/values-image.jpg",
          description: "Integrity, commitment, and excellence are at the core of our operations."
        }
      ]
    },
    ar: {
      welcome: "مرحبًا بك في خدمات ARAK+",
      intro: "بوابتك إلى الاستثمار ونجاح الأعمال في سوريا",
      services: [
        { title: "الفيز والسفر", icon: <TravelIcon />, description: "تسهيل إجراءات الفيز وبرامج السفر." },
        { title: "الإقامة والنقل", icon: <HouseIcon />, description: "حلول السكن والنقل." },
        { title: "التسهيلات القانونية", icon: <LegalIcon />, description: "الحصول على التراخيص والاستشارات القانونية." },
        { title: "التخليص الجمركي والشحن", icon: <LocalShippingIcon />, description: "خدمات التخليص الجمركي والشحن." },
        { title: "توظيف الكوادر والتدريب", icon: <WorkIcon />, description: "توفير كوادر مؤهلة وتدريب متخصص." },
        { title: "خدمات الحماية", icon: <SecurityIcon />, description: "خدمات الحماية الشخصية والممتلكات." },
        { title: "الاستشارات التجارية", icon: <CommuteIcon />, description: "استراتيجيات نمو الأعمال والتوسع." },
        { title: "الاستجابة الطارئة", icon: <PhoneIcon />, description: "دعم فوري للاستثمارات القائمة." },
      ],
      sections: [
        {
          title: "رؤيتنا",
          image: "path/to/vision-image.jpg",
          description: "نهدف إلى أن نكون الرائدين في تسهيل الأعمال والاستثمار في سوريا."
        },
        {
          title: "مهمتنا",
          image: "path/to/mission-image.jpg",
          description: "تقديم خدمات شاملة تدعم الأعمال في التنقل في السوق السوري."
        },
        {
          title: "قيمنا",
          image: "path/to/values-image.jpg",
          description: "النزاهة والالتزام والتميز هي جوهر عملياتنا."
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <ThemeProvider theme={goldBlackTheme}>
      <Router>
        <AppBar position="sticky" color="primary" sx={{ boxShadow: 3 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              ARAK+ Services
            </Typography>
            <Button color="inherit" component={Link} to="/">
              {language === 'en' ? 'Home' : 'الصفحة الرئيسية'}
            </Button>
            <Button color="inherit" component={Link} to="/services">
              {language === 'en' ? 'Services' : 'الخدمات'}
            </Button>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <LanguageIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              {selectedContent.welcome}
            </Typography>

            <Typography variant="h5" align="center" paragraph>
              {selectedContent.intro}
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {selectedContent.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              </motion.div>
            ))}
          </Grid>

          {/* Sections with images */}
          {selectedContent.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <SectionCard
                title={section.title}
                image={section.image}
                description={section.description}
              />
            </motion.div>
          ))}

          <Box textAlign="center" mt={4}>
            <ScrollLink to="contact" smooth duration={500}>
              <Button variant="contained" color="secondary">
                {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </Button>
            </ScrollLink>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

function ServiceCard({ title, icon, description }) {
  return (
    <Grid item xs={12} sm={4}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        boxShadow={3}
        p={3}
        borderRadius={2}
        sx={{
          backgroundColor: '#1F1F1F',
          '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
        }}
      >
        {icon}
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Grid>
  );
}

function SectionCard({ title, image, description }) {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }} />
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
    </Box>
  );
}

export default App;
