import React from 'react'
import { Blog } from 'suzu-backend/api/proto/client/api/proto/suzu/v1/suzu_pb'
import Image from 'next/image'
import Chip from '@mui/material/Chip/Chip'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogChip.module.scss'
import { ListItem, ListItemText } from '@mui/material'

const blogIconPath = (blogType: string): string => {
    if (blogType === "HATENA") return 'hatena.svg'
    if (blogType === "QIITA") return 'qiita.png'
    if (blogType === "SIZU") return 'sizu.png'
    if (blogType === "ZENN") return 'zenn.svg'
    if (blogType === "AMEBA") return 'a.png'
    return 'ningenme.png'
}

export const getblogChip = (blog: Blog, idx: number) => {
    return (<ListItem key={idx} disablePadding className={fontStyles.body}>
        <Chip 
          label={blog.getDate()} 
          variant="outlined" 
          size="small" 
          className={styles.date} 
        />
        <Chip 
          icon={<Image src={"/" + blogIconPath(blog.getBlogType())} alt="image" width="20" height="20" />}
          label={blog.getBlogType()} 
          variant="outlined" 
          size="small" 
          className={styles.type} 
        />        
        <ListItemText>
          <a href={blog.getUrl()} className={styles.title}>{blog.getBlogTitle()}</a>
        </ListItemText>
    </ListItem>
    );
}

