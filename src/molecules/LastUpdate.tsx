import {ApplicationMeta} from 'interfaces/ApplicationMeta'
import {Typography} from '@material-ui/core'

export const LastUpdate = ({applicationMeta}:{applicationMeta:ApplicationMeta}) => {

    const contents = applicationMeta.updateTime.split("T");
    return (
        <>
            <Typography align = "right" variant="body2">
                last updated at 
            </Typography>
            <Typography align = "right" variant="h6">
                {contents[0]} {contents[1]}
            </Typography>
        </>
    )
}