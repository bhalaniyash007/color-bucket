'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { NAVIGATION_MENU } from '@constants/app';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { ListItemIcon } from '@mui/material';
import { useState } from 'react';
import Typography from '@components/Typography';
import { SIZE } from '@theme/styles';

export default function AppSideBar() {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const onMenuClickHandler = (menuIndex: number) => {
    setCurrentMenuIndex(menuIndex);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIZE.APP_SIDE_BAR.WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: SIZE.APP_SIDE_BAR.WIDTH,
          boxSizing: 'border-box',
        },
        zIndex: 1,
        overflow: 'auto',
      }}>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List sx={{ paddingTop: '20px' }}>
          {NAVIGATION_MENU.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => onMenuClickHandler(index)}
                sx={{
                  margin: '5px 20px',
                  borderRadius: '8px',
                  padding: '10px',
                  background:
                    index === currentMenuIndex
                      ? 'linear-gradient(90deg,#F4F4F4 0%,#EFEFEF 100%)'
                      : '',
                }}>
                <ListItemIcon>
                  <PaletteOutlinedIcon />
                </ListItemIcon>
                <Typography tag={'body2'} text={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
