import './App.css'
import { useState } from 'react';
import Loginpet from './Loginpet';
import Images from './Images';
// function App() {
//     const [color, setColor] = useState("");
//     return (
//       <>
//         <h1>My favorite color is {color}!</h1>
//         <button
//           type="button"
//           onClick={() => setColor("blue")}
//         >Blue</button>
//         <button
//           type="button"
//           onClick={() => setColor("red")}
//         >Red</button>
//         <button
//           type="button"
//           onClick={() => setColor("pink")}
//         >Pink</button>
//         <button
//           type="button"
//           onClick={() => setColor("green")}
//         >Green</button>
//       </>
//     );
//   }
function App(){
  return (
    <div >
      <Loginpet />
      <Images/>  
    </div>
  )
}


export default App;
