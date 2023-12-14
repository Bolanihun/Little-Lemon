import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Reserveform from "../Pages/Reserveform";
import Confirmation from "../Pages/Confirmation";
import Sucess from "../Pages/Sucess";


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Reserveform />} />
            <Route path="project" element={<Confirmation />} />
            <Route path="project" element={<Sucess/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
