

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const ScrollColorText: React.FC = () => {
    const [color, setColor] = useState<string>('#006400'); // Initial dark green color
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / docHeight;
  
      // Interpolate between dark green and light green based on scroll percentage
      const redValue = Math.floor(0 + (128 * scrollPercent)); // From 0 to 128
    const greenValue = Math.floor(100 + (155 * scrollPercent)); // From 100 to 255
    const blueValue = Math.floor(0 + (128 * scrollPercent)); // From 0 to 128

    setColor(`rgb(${redValue}, ${greenValue}, ${blueValue})`);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <Typography variant="h2" display="inline" style={{ color: color }}>
        Balthazar Muhlstein
      </Typography>
    );
  };

export default ScrollColorText;