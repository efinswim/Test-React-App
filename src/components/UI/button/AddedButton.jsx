import React from 'react';

import classes from './AddedButton.module.css';

const AddedButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.AddedButton}>
      {children}
    </button>
  );
};

export default AddedButton;