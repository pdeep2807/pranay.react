import { Fragment } from "react";
function Childprop(p) {
  // p={name:"krishna",place="chittor"}

  return (
    <Fragment>
      <p>{p.name}</p>
      <p>{p.place}</p>
    </Fragment>
  );
}
export default Childprop;
