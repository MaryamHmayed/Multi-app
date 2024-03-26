import {BrowserRouter, Routes,Route } from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Home from "./Pages/Home";
import WeatherApp from "./Pages/WeatherApp";
import StickyNotes from "./Pages/StickyNotes";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="/Calculator" element={<Calculator/>} />
          <Route path="/StickyNotes" element= {<StickyNotes/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
