import { useContext } from "react";
import { Context } from "../Context";

function SecondComponent() {
  const {dynamicNumber} = useContext(Context);
  return <div>
    {dynamicNumber}
  </div>;
}

export default SecondComponent;
