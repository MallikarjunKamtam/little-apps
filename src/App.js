import "./App.css";
import FocusApp from "./apps/focus-app/focus-app";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./apps/home-page/home-page";
import Forms from "./apps/forms/forms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="focus" element={<FocusApp />} />
          <Route path="forms" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
