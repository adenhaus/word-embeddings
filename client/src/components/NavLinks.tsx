import { DashboardRounded } from "@mui/icons-material";
import { Box, Button, Divider, Link, Typography } from "@mui/joy";
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  expanded: boolean;
}

const NavLinks = (props: Props) => {
  const location = useLocation();

  return (
    <>
      <Link
        href="/analogy"
      >
        <Typography level={ props.expanded ? 'body-md' : 'body-lg' }
          sx={(theme) => ({
            color: location.pathname === "/analogy" ? "#9135e8" : 'primary',
          })}
        >
          Analogy
        </Typography>
      </Link>
      <Link
        href="/similarity"
      >
        <Typography level={ props.expanded ? 'body-md' : 'body-lg' }
          sx={(theme) => ({
            color: location.pathname === "/similarity" ? "#9135e8" : 'primary',
          })}
        >
          Similarity
        </Typography>
      </Link>
      <Link
        href="/groups"
      >
        <Typography level={ props.expanded ? 'body-md' : 'body-lg' }
          sx={(theme) => ({
            color: location.pathname === "/groups" ? "#9135e8" : 'primary',
            // textDecoration: location.pathname === "/groups" ? 'underline' : 'none',
          })}
        >
          Groups
        </Typography>
      </Link>
      {props.expanded ?
        <Divider orientation='vertical' />
        : <Divider />
      }
      <Link
        href="/about"
      >
        <Typography level={ props.expanded ? 'body-md' : 'body-lg' }
          sx={(theme) => ({
            color: location.pathname === "/about" ? "#9135e8" : 'primary',
            // textDecoration: location.pathname === "/groups" ? 'underline' : 'none',
          })}
        >
          About
        </Typography>
      </Link>
    </>
  );
};

export default NavLinks;