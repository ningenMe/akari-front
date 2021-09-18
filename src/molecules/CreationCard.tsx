import {Card,CardActionArea,CardContent,Typography} from '@material-ui/core';
import {Creation} from 'interfaces/Creation'
import {CardStyle} from 'styles/CardStyle'

export const CreationCard = ({creation}: {creation:Creation}) => {
  return (
    <Card variant="outlined" style={CardStyle}>
      <CardActionArea href={creation.href}>
        <CardContent>
          <Typography variant="h6">
            {creation.title}
          </Typography>
          <Typography variant="body2" component="p">
            {creation.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
