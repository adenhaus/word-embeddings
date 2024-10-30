import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toggleSidebar } from '../utils';
import { Box, Dropdown, Link, Menu, MenuButton, MenuItem, Typography } from '@mui/joy';
import ColorSchemeToggle from './ColorSchemeToggle';
import NavLinks from './NavLinks';
import { useState } from 'react';
import { MenuRounded } from '@mui/icons-material';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              <Typography level='body-lg'>
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
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{ root: { variant: 'outlined', color: 'neutral', size: 'sm' } }}
                >
                  <MenuRounded />
                </MenuButton>
                <Menu>
                  <Box
                    sx={{
                      display: { xs: 'flex', md: 'none' },
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 2,
                      gap: 1,
                      width: '200px',
                    }}
                  >
                    <NavLinks expanded={false} />
                  </Box>
                </Menu>
              </Dropdown>
            </Box>
          </Box>
        </Box>
      </Sheet >
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