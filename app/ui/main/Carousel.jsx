'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Razer',
    imgPath:
      'https://assets2.razerzone.com/images/pnx.assets/12d0a23572018fe77efc0e902ba1c729/razer-exclusives-sneki-slippers-768x500-mobile.jpeg',
  },
  {
    label: 'Logitech',
    imgPath:
      'https://shopee.sg/blog/wp-content/uploads/2020/10/logitech-gaming-accessories-featured-image.jpg',
  },
  {
    label: 'HyperX',
    imgPath:
      'https://row.hyperx.com/cdn/shop/files/hx-hero-diablo-immortal-campaign-desktop_5a8ed5a3-1244-43bc-a9a7-d4449de403cd_2048x2048.jpg?v=1660117232',
  },
  {
    label: 'Corsair',
    imgPath:
      'https://assets.corsair.com/image/upload/f_auto/q_auto/v1690325467/akamai/content/images/corsair-social-default-image.jpg',
  },
];

export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 700,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
  );
}

