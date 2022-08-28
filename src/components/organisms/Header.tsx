import { LinkConst } from '../../constants/LinkConst'
import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'
import React, { ReactNode, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import ArticleIcon from '@mui/icons-material/Article';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

const NormalElement = (
  {link,className,icon}: {link:Link, className: string, icon: ReactNode}
) => {
  return (
    <div>
      <Button className={className} href={link.href}>
        {icon}
        {link.name}
      </Button>
    </div>
  );
}

const DropdownElement = ({ title, links, className, icon}: { title: string, links: ReadonlyArray<Link>, className: string, icon: ReactNode}) => {
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
        {icon}
        {title}
        <KeyboardArrowDownIcon />
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

export const Header = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar disableGutters>
        <a href={LinkConst.NINGENME_NET.href} className={styles.brand}>
          {LinkConst.NINGENME_NET.name}
        </a>

        {/*pc*/}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NormalElement link={LinkConst.GITHUB} className={styles.buttonPc} icon={<GitHubIcon />} />
          <NormalElement link={LinkConst.TWITTER} className={styles.buttonPc} icon={<TwitterIcon />} />
          <DropdownElement title={"compro"} links={LinkConst.COMPROS} className={styles.buttonPc} icon={<ComputerIcon />}/>
          <DropdownElement title={"blog"} links={LinkConst.BLOGS} className={styles.buttonPc} icon={<ArticleIcon />}/>
        </Box>

        {/*sp*/}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-haspopup="true"
            onClick={onOpen}
            color="inherit"
            className={styles.hamburger}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}
            sx={{ display: { xs: 'block', md: 'none' }, }}
          >
            <NormalElement link={LinkConst.GITHUB} className={styles.buttonSp} icon={<GitHubIcon />} />
            <NormalElement link={LinkConst.TWITTER} className={styles.buttonSp} icon={<TwitterIcon />} />
            <DropdownElement title={"compro"} links={LinkConst.COMPROS} className={styles.buttonSp} icon={<ComputerIcon />}/>
            <DropdownElement title={"blog"} links={LinkConst.BLOGS} className={styles.buttonSp} icon={<ArticleIcon />}/>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
};