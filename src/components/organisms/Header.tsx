import { LinkConst } from '../../constants/LinkConst'
import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import ArticleIcon from '@mui/icons-material/Article';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

const Dropdown = ({ title, links, className }: { title: string, links: ReadonlyArray<Link>, className?: string}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button onClick={onOpen} className={className}>
        <ArticleIcon />
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
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            className={styles.hamburger}
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
            <div>
              <Button className={styles.buttonSp} href={LinkConst.GITHUB.href}>
                <GitHubIcon />
                {LinkConst.GITHUB.name}
              </Button>
            </div>
            <div>
              <Button className={styles.buttonSp} href={LinkConst.TWITTER.href}>
                <TwitterIcon />
                {LinkConst.TWITTER.name}
              </Button>
            </div>

            <Dropdown title={"compro"} links={LinkConst.COMPROS} className={styles.buttonSp}/>
            <Dropdown title={"blog"} links={LinkConst.BLOGS} className={styles.buttonSp}/>
          </Menu>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button className={styles.buttonPc} href={LinkConst.GITHUB.href}>
            <GitHubIcon />
            {LinkConst.GITHUB.name}
          </Button>
          <Button className={styles.buttonPc} href={LinkConst.TWITTER.href}>
            <TwitterIcon />
            {LinkConst.TWITTER.name}
          </Button>
          <Dropdown title={"compro"} links={LinkConst.COMPROS} className={styles.buttonPc}/>
          <Dropdown title={"blog"} links={LinkConst.BLOGS} className={styles.buttonPc}/>
        </Box>

      </Toolbar>
    </AppBar>
  );
};
