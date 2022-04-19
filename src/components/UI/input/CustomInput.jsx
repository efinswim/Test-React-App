import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = (props) => {
  return (
    <input className={classes.CustomInput} {...props}/>
  );
};

export default CustomInput;