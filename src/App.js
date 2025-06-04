import { useState } from "react";
import "./App.css";
import Face from "./components/Face";

function App() {
  const [mood, setMood] = useState({
    left_eye: true,
    right_eye: false,
    nose: false,
  });

  const updateMood = (name, value) => {
    setMood({ ...mood, [name]: value });
  };

  return (
    <div className="App">
      <Face>
        <Face.Eye
          name="left_eye"
          looking={mood.left_eye}
          updateMood={updateMood}
        />
        <Face.Eye
          name="right_eye"
          looking={mood.right_eye}
          updateMood={updateMood}
        />
        <Face.Nose updateMood={updateMood} />
      </Face>
    </div>
  );
}

export default App;
