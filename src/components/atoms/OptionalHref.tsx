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
      <a href={href}>
        {body}
      </a>
    )
  }
}
