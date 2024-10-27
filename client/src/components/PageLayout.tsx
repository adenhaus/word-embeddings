import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Header />
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: 'calc(12px + var(--Header-height))', md: 'calc(12px + var(--Header-height))' },
          display: 'flex',
          flexDirection: 'column',
          // position: 'fixed',
          // top: 0,
          width: '100vw',
          backgroundColor: 'background.body',
          // height: '100dvh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            overflow: 'auto',
            height: '100%',
          }}
        >
          <Outlet />
        </Box>
      </Box>
      {/* <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: 'calc(12px + var(--Header-height))', md: 'calc(12px + var(--Header-height))' },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
          overflow: 'auto',
          // backgroundColor: 'background.body',
          px: { xs: 2, md: 4 },
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          // maxWidth: '1200px',
          backgroundColor: 'red',
        }}
      >
        <Outlet />
      </Box> */}
    </Box>
  );
};

export default PageLayout;