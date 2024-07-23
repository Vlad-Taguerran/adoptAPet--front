import { AppBar, Box,  CssBaseline,  Toolbar, Typography } from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";
import { Pets } from "@mui/icons-material";
export function Header() {

  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: pink[800]}}>
        <Toolbar>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {  sm: 'block' } }}
          >
            Adopt <Pets/>
          </Typography>
        
        </Toolbar>
      </AppBar>

      </Box>
  )
}
