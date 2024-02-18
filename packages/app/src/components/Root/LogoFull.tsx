import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import lightLogo from './logo/vernal-light.png'; // Adjust the path as necessary
import darkLogo from './logo/vernal-dark.png'; // Adjust the path as necessary

// Define styles
const useStyles = makeStyles((theme) => ({
  logoCenter: {
    display: 'block',
    margin: '0 auto', // Centers the image horizontally
  },
}));

// Define a type for the component's props for better type-checking
interface LogoFullProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  marginLeft?: string | number; // New prop for controlling the left margin
}


const LogoFull: React.FC<LogoFullProps> = ({
  width = '70px',
  height = '70px',
  className = '',
  marginLeft = '50px', // Default to '0' if not provided
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDarkMode = theme.palette.type === 'dark';

  const combinedClassName = `${classes.logoCenter} ${className}`.trim();

  return (
    <img
      src={isDarkMode ? darkLogo : lightLogo}
      alt="Vernal Logo"
      className={combinedClassName}
      style={{ width, height, marginLeft }} // Apply marginLeft from props
    />
  );
};


export default LogoFull;
