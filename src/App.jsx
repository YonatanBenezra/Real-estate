import { useContext, useState } from "react";
import Counter from "./components/Counter.jsx";
import { Context } from "./Context.jsx";
import SecondComponent from "./components/SecondComponent.jsx";

export default function App() {
  const constant = "hi"
  const favoriteProperties = useContext(Context);
  const [dynamicfavoriteProperties, setDynamicfavoriteProperties] = useState(data.number)
  return (
    <Context.Provider value={{dynamicNumber, setDynamicNumber ,name: data.name}}>
      <Counter />
      <SecondComponent />
    </Context.Provider>
  );
}
