import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toggleSidebar } from '../utils';
import { Box, DialogTitle, Drawer, Dropdown, Link, Menu, MenuButton, MenuItem, ModalClose, Typography } from '@mui/joy';
import ColorSchemeToggle from './ColorSchemeToggle';
import NavLinks from './NavLinks';
import { useState } from 'react';
import { MenuRounded } from '@mui/icons-material';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sheet
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: 'var(--Header-height)',
          zIndex: 100,
          p: 2,
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'background.level2',
          // boxShadow: 'sm',
        }}
      >
        <GlobalStyles
          styles={(theme) => ({
            ':root': {
              '--Header-height': '52px',
              // [theme.breakpoints.up('md')]: {
              //   '--Header-height': '0px',
              // },
            },
          })}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          <Box sx={{ mr: 'auto', display: 'flex' }}>
            <Link
              href='/'
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}>
              <Box sx={{ mt: 1, mr: 2 }}>
                <img
                  src='/icon.png'
                  alt="Image of a graph with three axes and word vectors."
                  style={{ width: '30px' }}
                />
              </Box>
              <Typography level='body-lg' sx={{ display: { xs: 'none', sm: 'block' } }}>
                Word Embeddings Playground
              </Typography>
            </Link>
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex', gap: '20px' },
                mr: '20px',
              }}
            >
              <NavLinks expanded />
            </Box>
            <Box>
              <ColorSchemeToggle />
            </Box>
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <IconButton
                variant='outlined'
                size='sm'
                onClick={() => setOpenDrawer(true)}
              >
                <MenuRounded />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Sheet >
      <Drawer open={openDrawer} anchor='right' onClose={() => setOpenDrawer(false)} sx={{ display: { md: 'none' } }}>
        <ModalClose />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2,
          mt: 5,
          justifyContent: 'center',
        }}
        >
          <NavLinks expanded={false} />
        </Box>
      </Drawer>
      {/* <Sheet
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          alignItems: 'center',
          position: 'fixed',
          top: 50,
          width: '100vw',
          zIndex: 100,
          p: 2,
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'background.level2',
          // boxShadow: 'sm',
        }}
      >
        <NavLinks expanded={false} />
      </Sheet> */}
    </>
  );
}