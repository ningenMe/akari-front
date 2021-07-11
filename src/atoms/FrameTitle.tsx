import {Typography} from '@material-ui/core'

export const FrameTitle = ({body}:{body:string}) => {
    return (
        <Typography variant="h5" component="h2">
            {body}
        </Typography>
    )
}
