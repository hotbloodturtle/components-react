import PageHome from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMultiCheckbox from "./pages/multi-checkbox";
import PageModalBottomSlide from "./pages/modal-bottom-slide";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/checkbox" element={<PageMultiCheckbox />} />
        <Route path="/modal-bottom-slide" element={<PageModalBottomSlide />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
