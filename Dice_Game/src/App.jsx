import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay"; 
import { useState } from "react";
   
 function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);
   
  const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev);
  };
  return (
     <>
        {
          isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} /> 
        }
    </>
   );
 }

 export default App;

 