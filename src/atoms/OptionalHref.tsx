import {Link} from '@material-ui/core';

export const OptionalHref = ({body,href} : {body:string,href:string|null} ) => {
  if(href === null) {
    return (
      <>
        {body}
      </>
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
