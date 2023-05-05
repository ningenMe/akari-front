export const OptionalHref = ({body,href} : {body:string,href:string|null} ): JSX.Element => {
  if(href === null) {
    return (
      <>
        {body}
      </>
    );
  }
  else {
    return (
      <a href={href}>
        {body}
      </a>
    )
  }
}
