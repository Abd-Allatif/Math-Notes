import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import MathNotes from "./screens/MathNotes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MathNotes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
