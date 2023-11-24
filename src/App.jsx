import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Bulb from "./Components/Bulb/Bulb";
import Fan from "./Components/Fan/Fan";
import Home from "./Components/Home/Home";
import Locker from "./Components/Locker/Locker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bulb" element={<Bulb />} />
          <Route path="/fan" element={<Fan />} />
          <Route path="/locker" element={<Locker/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
