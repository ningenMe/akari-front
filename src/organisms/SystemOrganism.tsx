import {Card,CardMedia,Typography } from '@material-ui/core';

export const SystemCard = () => {

  return (
    <Card elevation={2}>
      <CardMedia
        component="img"
        title="diagram"
        alt="diagram"
        src="systems/diagram.png"
      />
    </Card>
  )
}
