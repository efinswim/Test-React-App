import React from 'react';

import classes from './AddedButton.module.css';

const CustomButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.AddedButton}>
      {children}
    </button>
  );
};

export default CustomButton;