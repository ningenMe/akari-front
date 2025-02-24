import fontStyles from 'styles/Font.module.scss'
import { Chip, ListItem, ListItemText } from "@mui/material";
import { Output } from 'interfaces/Output';
import styles from './OutputChip.module.scss'
import { OptionalHref } from '../OptionalHref';


export const OutputChip = ({output}: {output: Output}): JSX.Element => {
    return (<ListItem disablePadding className={fontStyles.body}>
        <Chip 
          label={output.date} 
          variant="outlined" 
          size="small" 
          className={styles.date}
        />
        <Chip 
          label={output.type} 
          variant="outlined" 
          size="small" 
          className={styles.date}
        />
        <ListItemText className={styles.title}>
          <OptionalHref body={output.title} href={output.href} />
        </ListItemText>
    </ListItem>
    );
}