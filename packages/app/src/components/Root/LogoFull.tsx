import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import darkLogo from './logo/vernal-dark.png';

// Define styles
const useStyles = makeStyles(() => ({
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
  const combinedClassName = `${classes.logoCenter} ${className}`.trim();

  return (
    <img
      src={darkLogo}
      alt="Vernal Logo"
      className={combinedClassName}
      style={{ width, height, marginLeft }} // Apply marginLeft from props
    />
  );
};


export default LogoFull;
