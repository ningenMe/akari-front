import React from 'react';
import {Link} from '@material-ui/core';

export const OptionalLink = ({body,href} : {body:string,href:string|null} ) => {
    if(href === null) {
        return (
            <a>
                {body}
            </a>
        );
    }
    else {
        return (
            <Link href={href}>
                {body}
            </Link>
        )
    }
}
export default OptionalLink