import { Box, Snackbar } from "@mui/joy";
import { useState } from "react";

interface Props {
  text: string;
  open: boolean;
  setSnackText: Function;
}

const CustomSnack = (props: Props) => {
  return (
    <Snackbar
      autoHideDuration={7000}
      open={props.open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      variant='outlined'
      color='warning'
      onClose={(event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        props.setSnackText('');
      }}
    >
      {props.text}
    </Snackbar>
  );
};

export default CustomSnack;