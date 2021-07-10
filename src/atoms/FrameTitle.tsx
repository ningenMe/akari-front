import React from 'react'
import {Typography} from '@material-ui/core'

export const FrameTitle = ({body}:{body:string}) => {
    return (
        <Typography variant="h5" component="h2">
            {body}
        </Typography>
    )
}
export default FrameTitle