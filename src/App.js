import { useState } from "react";
import "./App.css";
import Face from "./components/Face";
import Eye from "./components/Eye";

function App() {
  const [mood, setMood] = useState({
    left_eye: true,
    right_eye: false,
  });

  return (
    <div className="App">
      <Face>
        <Eye name="left_eye" />
        <Eye name="right_eye" />
      </Face>
    </div>
  );
}

export default App;
