import { useContext } from "react";
import { Context } from "../Context";
function Counter() {
  const { dynamicNumber, setDynamicNumber } = useContext(Context);

  return (
    <div>
      <button onClick={() => setDynamicNumber(dynamicNumber + 1)}>+1</button>
      {dynamicNumber}
    </div>
  );
}

export default Counter;
   