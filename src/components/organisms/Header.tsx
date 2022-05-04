import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkConst } from '../../constants/LinkConst'
import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Navbar.Brand href={LinkConst.NINGENME_NET.href} className={styles.brand}>{LinkConst.NINGENME_NET.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className={styles.toggle}/>
      <Navbar.Collapse id='basic-navbar-nav' className={styles.collapse} >
        <Nav>
          <div>
            <GitHubIcon className={styles.githubIcon} />
            <Nav.Link href={LinkConst.GITHUB.href}>{LinkConst.GITHUB.name}</Nav.Link>
          </div>
        </Nav>
        <Nav>
          <Nav.Link href={LinkConst.TWITTER.href}>{LinkConst.TWITTER.name}</Nav.Link>
        </Nav>
        <Tmp title='compro' links={LinkConst.COMPROS} />
        <Tmp title='blog' links={LinkConst.BLOGS} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export const Tmp = ({ title, links }: { title: string, links: ReadonlyArray<Link> }) => {
  const dropdowns = links.map((link) =>
    <NavDropdown.Item target='_blank' href={link.href} key={link.name}>{link.name}</NavDropdown.Item>,
  )
  return (
    <Nav>
      <NavDropdown title={title} id={title}>
        {dropdowns}
      </NavDropdown>
    </Nav>
  )
}

const pages = ['Products', 'Pricing', 'Blog'];

const Dropdown = ({ title, links }: { title: string, links: ReadonlyArray<Link> }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={onOpen} className={styles.button}>
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {links.map((link) => (
          <MenuItem key={link.name}>
            <a href={link.href}>
              {link.name}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar disableGutters>
        <a href={LinkConst.NINGENME_NET.href} className={styles.brand}>
          {LinkConst.NINGENME_NET.name}
        </a>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page}>
                {page}
              </MenuItem>
            ))}
            <Dropdown title={"compro"} links={LinkConst.COMPROS} />
            <Dropdown title={"blog"} links={LinkConst.BLOGS}/>
          </Menu>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
            >
              {page}
            </Button>
          ))}
          <Dropdown title={"compro"} links={LinkConst.COMPROS}/>
          <Dropdown title={"blog"} links={LinkConst.BLOGS}/>
        </Box>

      </Toolbar>
    </AppBar>
  );
};
