import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Assignment,
  Place,
} from '@material-ui/icons';

const NavBar: React.FC = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography variant="h5" color="inherit" style={{ flexGrow: 1 }}>
            ListMeApp
          </Typography>

          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="inherit" aria-label="Buscar">
              <Place />
            </IconButton>
            <IconButton color="inherit" aria-label="Reportes">
              <Assignment />
            </IconButton>
          </div>

          <Button color="inherit">
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
