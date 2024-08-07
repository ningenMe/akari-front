import { Link } from '../../interfaces/Link'
import styles from './Header.module.scss'
import React, { ReactNode, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import ArticleIcon from '@mui/icons-material/Article'
import ComputerIcon from '@mui/icons-material/Computer'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import PaidIcon from '@mui/icons-material/Paid'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import { LinkConst } from '../../constants/Const'
import { BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'

const NormalElement = (
  { link, className, icon }: { link: Link, className: string, icon: ReactNode },
) => {
  return (
    <div>
      <Button className={className} href={link.href} rel='noreferrer noopener' target='_blank'>
        {icon}
        {link.name}
      </Button>
    </div>
  )
}

const DropdownElement = ({
                           title,
                           links,
                           className,
                           icon,
                         }: { title: string, links: ReadonlyArray<Link>, className: string, icon: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }
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
  )
}

const BlogDropdownElement = ({
  className,
}: { className: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }
  return (
  <div>
    <Button onClick={onOpen} className={className}>
      {<ArticleIcon />}
      {'blog'}
      <KeyboardArrowDownIcon />
    </Button>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem>
        <BlogNingenmeUrlChip blogType='HATENA' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='QIITA' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='ZENN' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='SIZU' clickable={true} />
      </MenuItem>
      <MenuItem>
        <BlogNingenmeUrlChip blogType='AMEBA' clickable={true} />
      </MenuItem>          
    </Menu>
  </div>
)
}

export const NingenmeNetHeader = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }

  const getElementList = ({ className }: { className: string }) => {
    return [
      <NormalElement key={1} link={LinkConst.GITHUB} className={className} icon={<GitHubIcon />} />,
      <NormalElement key={2} link={LinkConst.TWITTER} className={className} icon={<TwitterIcon />} />,
      <DropdownElement key={3} title={'compro'} links={LinkConst.COMPROS} className={className}
                       icon={<ComputerIcon />} />,
      <BlogDropdownElement key={4} className={className} />,
      <NormalElement key={5} link={LinkConst.GITHUB_SPONSOR} className={className} icon={<PaidIcon />} />,
    ]
  }

  return (
    <AppBar position='static' className={styles.ningenmeNetAppbar}>
      <Toolbar disableGutters>
        <a href={LinkConst.NINGENME_NET.href} className={styles.brand}>
          {LinkConst.NINGENME_NET.name}
        </a>

        {/*pc*/}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {getElementList({ className: styles.buttonPc })}
        </Box>

        {/*sp*/}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-haspopup='true'
            onClick={onOpen}
            color='inherit'
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {getElementList({ className: styles.buttonSp })}
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export const ComproCategoryHeader = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }

  //TODO 配列にする
  const getElementList = ({ className }: { className: string }) => {
    return [
      <NormalElement key={1} link={LinkConst.TWITTER} className={className} icon={<TwitterIcon />} />,
      <NormalElement key={2} link={LinkConst.COMPRO_LIBRARY} className={className} icon={<LibraryBooksIcon />} />,
      <NormalElement key={3} link={LinkConst.GITHUB_AKARI_FRONT} className={className} icon={<GitHubIcon />} />,
      <NormalElement key={4} link={LinkConst.GITHUB_MIIKO_API} className={className} icon={<GitHubIcon />} />,
      <DropdownElement key={5} title={'compro'} links={LinkConst.COMPROS} className={className}
                       icon={<ComputerIcon />} />,
      <NormalElement key={6} link={LinkConst.NINGENME_NET} className={className} icon={<></>} />,
    ]
  }

  return (
    <AppBar position='static' className={styles.comproCategoryAppbar}>
      <Toolbar disableGutters>
        <a href={LinkConst.COMPRO_CATEGORY.href} className={styles.brand}>
          {LinkConst.COMPRO_CATEGORY.name}
        </a>

        {/*pc*/}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {getElementList({ className: styles.buttonPc })}
        </Box>

        {/*sp*/}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-haspopup='true'
            onClick={onOpen}
            color='inherit'
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {getElementList({ className: styles.buttonSp })}
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
