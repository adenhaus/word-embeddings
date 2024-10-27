import { DashboardRounded } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/joy";
import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      <Link
        href="/analogy"
      >
        <Typography level='body-md'
          sx={(theme) => ({
            color: location.pathname === "/analogy" ? "#f6651f" : 'primary',
          })}
        >
          Analogy
        </Typography>
      </Link>
      <Link
        href="/similarity"
      >
        <Typography level='body-md'
          sx={(theme) => ({
            color: location.pathname === "/similarity" ? "#f6651f" : 'primary',
          })}
        >
          Similarity
        </Typography>
      </Link>
      <Link
        href="/groups"
      >
        <Typography level='body-md'
          sx={(theme) => ({
            color: location.pathname === "/groups" ? "#f6651f" : 'primary',
            // textDecoration: location.pathname === "/groups" ? 'underline' : 'none',
          })}
        >
          Groups
        </Typography>
      </Link>
    </>
  );
};

export default NavLinks;