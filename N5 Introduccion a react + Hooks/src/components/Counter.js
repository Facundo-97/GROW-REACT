import { useState, useEffect } from "react";
import { ButtonComponent } from "./Button";

export const CounterApp = () => {
  //USE
  const [counter, setCounter] = useState(0);
  const [profile, setProfile] = useState("Facundo");
  
  useEffect(() => {
    console.log("me renderize");
  }, [counter]);


  // UseEffect
  return (
    <div>
      <ButtonComponent
        setCounter={setCounter}
        counter={counter}
        value={1}
        component={<h1>Hola</h1>}
      />
      <h1>{counter}</h1>
      <ButtonComponent setCounter={setCounter} counter={counter} value={-1} />
    </div>
  );
};
